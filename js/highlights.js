import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js';
import {
    browserLocalPersistence,
    getAuth,
    onAuthStateChanged,
    setPersistence,
    signInAnonymously
} from 'https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js';
import {
    collection,
    deleteDoc,
    doc,
    getCountFromServer,
    getDoc,
    getFirestore,
    limit,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    setDoc
} from 'https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: 'AIzaSyAZHQT1ZYauS3LawadfGr3ar98QCAHfUR4',
    authDomain: 'freedom-hunter.firebaseapp.com',
    projectId: 'freedom-hunter',
    storageBucket: 'freedom-hunter.appspot.com',
    messagingSenderId: '827180996982',
    appId: '1:827180996982:web:8b6333a0ea9ae3f44cc257'
};

const MAX_QUOTE_LENGTH = 2000;
const STREAM_LIMIT = 100;
const SUBMIT_COOLDOWN_MS = 8000;
const COOLDOWN_KEY = 'freedom-hunter.shared-highlight.last-submit';
const COLLECTION_NAME = 'readerHighlights';

const app = initializeApp(firebaseConfig, 'shared-highlights');
const auth = getAuth(app);
const db = getFirestore(app);
const persistenceReady = setPersistence(auth, browserLocalPersistence).catch(() => undefined);

let currentUser = null;
let streamItems = [];
let streamLoaded = false;
let toastTimer;

const authReady = new Promise((resolve) => {
    let stop = () => undefined;
    stop = onAuthStateChanged(auth, (user) => {
        currentUser = user;
        renderHighlightsPage();
        resolve(user);
        stop();
    });
});

function normalizedText(text) {
    return (text || '').replace(/\s+/g, ' ').trim();
}

function friendlyError(error, fallback) {
    const code = (error && error.code) || '';
    if (code.includes('operation-not-allowed')) {
        return '公共精选尚未启用匿名提交，请稍后再试。';
    }
    if (code.includes('permission-denied')) {
        return '这次提交未通过安全校验，请刷新页面后重试。';
    }
    if (code.includes('unavailable') || code.includes('network')) {
        return '暂时无法连接公共精选流，请检查网络后重试。';
    }
    return fallback;
}

function showToast(message) {
    let toast = document.querySelector('[data-highlight-toast]');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'highlight-toast';
        toast.setAttribute('data-highlight-toast', '');
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');

        const text = document.createElement('span');
        text.setAttribute('data-highlight-toast-text', '');
        toast.appendChild(text);

        const link = document.createElement('a');
        link.href = '/highlights/';
        link.textContent = '查看公共流 ↗';
        toast.appendChild(link);
        document.body.appendChild(toast);
    }

    toast.querySelector('[data-highlight-toast-text]').textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 4200);
}

async function ensureAnonymousUser() {
    await persistenceReady;
    await authReady;
    if (auth.currentUser) return auth.currentUser;
    const credential = await signInAnonymously(auth);
    currentUser = credential.user;
    return credential.user;
}

function articleMetadata(range, source) {
    const canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = canonical ? canonical.href : window.location.href.split('#')[0];
    const title = document.querySelector('.article-hero h1');
    const kicker = document.querySelector('.article-kicker');
    let section = '';
    let sectionId = '';

    source.querySelectorAll('h1, h2, h3, h4').forEach((heading) => {
        const position = heading.compareDocumentPosition(range.startContainer);
        if (heading.contains(range.startContainer) || (position & Node.DOCUMENT_POSITION_FOLLOWING)) {
            section = normalizedText(heading.textContent);
            sectionId = heading.id || '';
        }
    });

    const sourceUrl = sectionId
        ? canonicalUrl.split('#')[0] + '#' + encodeURIComponent(sectionId)
        : canonicalUrl;
    const articlePath = new URL(canonicalUrl, window.location.origin).pathname;

    return {
        title: normalizedText(title ? title.textContent : document.title.replace(/\s+-\s+Freedom Hunter\s*$/, '')),
        category: normalizedText(kicker ? kicker.textContent.split('/')[0] : '文章'),
        section,
        url: sourceUrl,
        articlePath
    };
}

async function deterministicId(userId, articlePath, quote) {
    const input = new TextEncoder().encode([userId, articlePath, quote].join('\n'));
    const digest = await window.crypto.subtle.digest('SHA-256', input);
    return Array.from(new Uint8Array(digest))
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join('');
}

function recentSubmissionBlocked() {
    try {
        const previous = Number(window.localStorage.getItem(COOLDOWN_KEY) || 0);
        return Date.now() - previous < SUBMIT_COOLDOWN_MS;
    } catch (error) {
        return false;
    }
}

function rememberSubmission() {
    try {
        window.localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
    } catch (error) {
        // The server-side rules still protect the collection when storage is unavailable.
    }
}

function setupSelectionTool() {
    const source = document.querySelector('[data-highlight-source]');
    if (!source) return;

    const action = document.createElement('button');
    action.type = 'button';
    action.className = 'highlight-selection-action';
    action.innerHTML = '<span aria-hidden="true">+</span><b>加入公共精选</b>';
    action.hidden = true;
    document.body.appendChild(action);

    let active = null;
    let updateTimer;

    function hideAction() {
        action.hidden = true;
        active = null;
    }

    function selectionInsideSource(selection) {
        if (!selection || selection.isCollapsed || !selection.rangeCount) return null;
        const range = selection.getRangeAt(0);
        if (!source.contains(range.startContainer) || !source.contains(range.endContainer)) return null;

        const quote = normalizedText(selection.toString());
        if (quote.length < 2) return null;
        return { quote: quote.slice(0, MAX_QUOTE_LENGTH), range: range.cloneRange() };
    }

    function positionAction(range) {
        const visibleRects = Array.from(range.getClientRects()).filter((candidate) =>
            candidate.bottom >= 0
            && candidate.top <= window.innerHeight
            && candidate.right >= 0
            && candidate.left <= window.innerWidth
        );
        const rect = visibleRects[visibleRects.length - 1];
        if (!rect || (!rect.width && !rect.height)) {
            hideAction();
            return;
        }

        action.hidden = false;
        action.style.left = '0px';
        action.style.top = '0px';
        const actionRect = action.getBoundingClientRect();
        let left = rect.left + (rect.width / 2) - (actionRect.width / 2);
        let top = rect.top - actionRect.height - 12;

        left = Math.max(12, Math.min(left, window.innerWidth - actionRect.width - 12));
        if (top < 12) top = rect.bottom + 12;
        action.style.left = Math.round(left) + 'px';
        action.style.top = Math.round(top) + 'px';
    }

    function updateAction() {
        window.clearTimeout(updateTimer);
        updateTimer = window.setTimeout(() => {
            const candidate = selectionInsideSource(window.getSelection());
            if (!candidate) {
                hideAction();
                return;
            }
            active = candidate;
            positionAction(candidate.range);
        }, 30);
    }

    source.addEventListener('mouseup', updateAction);
    source.addEventListener('keyup', updateAction);
    source.addEventListener('touchend', updateAction);
    action.addEventListener('mousedown', (event) => event.preventDefault());

    action.addEventListener('click', async () => {
        if (!active || action.disabled) return;
        if (recentSubmissionBlocked()) {
            showToast('提交得有点快，请几秒后再试');
            hideAction();
            return;
        }

        const selection = active;
        const metadata = articleMetadata(selection.range, source);
        action.disabled = true;
        action.querySelector('b').textContent = '正在加入…';

        try {
            const user = await ensureAnonymousUser();
            const id = await deterministicId(user.uid, metadata.articlePath, selection.quote);
            const reference = doc(db, COLLECTION_NAME, id);

            if ((await getDoc(reference)).exists()) {
                showToast('你已经精选过这段文字');
                return;
            }

            await setDoc(reference, {
                authorId: user.uid,
                quote: selection.quote,
                title: metadata.title,
                category: metadata.category,
                section: metadata.section,
                url: metadata.url,
                articlePath: metadata.articlePath,
                createdAt: serverTimestamp()
            });
            rememberSubmission();
            showToast('已加入所有读者共享的精选流');
            const browserSelection = window.getSelection();
            if (browserSelection) browserSelection.removeAllRanges();
        } catch (error) {
            console.error('Unable to publish shared highlight', error);
            showToast(friendlyError(error, '暂时无法加入公共精选，请稍后再试。'));
        } finally {
            action.disabled = false;
            action.querySelector('b').textContent = '加入公共精选';
            hideAction();
        }
    });

    window.addEventListener('scroll', hideAction, { passive: true });
    window.addEventListener('resize', hideAction);
}

function dateValue(value) {
    if (value && typeof value.toDate === 'function') return value.toDate();
    if (value instanceof Date) return value;
    return null;
}

function formattedDate(value) {
    const date = dateValue(value);
    if (!date || Number.isNaN(date.getTime())) return '刚刚';
    return new Intl.DateTimeFormat('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(date);
}

function makeHighlightCard(item, index) {
    const card = document.createElement('article');
    card.className = 'highlight-card';
    card.setAttribute('data-highlight-id', item.id);

    const number = document.createElement('span');
    number.className = 'highlight-card__number';
    number.textContent = String(index + 1).padStart(2, '0');

    const body = document.createElement('div');
    body.className = 'highlight-card__body';

    const meta = document.createElement('div');
    meta.className = 'highlight-card__meta';
    const category = document.createElement('span');
    category.textContent = item.category || '文章摘录';
    const contributor = document.createElement('span');
    contributor.textContent = '一位读者';
    const date = document.createElement('time');
    const itemDate = dateValue(item.createdAt);
    date.dateTime = itemDate ? itemDate.toISOString() : '';
    date.textContent = formattedDate(item.createdAt);
    meta.append(category, contributor, date);

    const quote = document.createElement('blockquote');
    const quoteText = document.createElement('p');
    quoteText.textContent = item.quote;
    quote.appendChild(quoteText);

    const source = document.createElement('div');
    source.className = 'highlight-card__source';
    const link = document.createElement('a');
    link.href = item.url || '#';
    link.textContent = item.title || '返回原文';
    source.appendChild(link);
    if (item.section) {
        const section = document.createElement('span');
        section.textContent = item.section;
        source.appendChild(section);
    }

    body.append(meta, quote, source);
    card.append(number, body);

    if (currentUser && currentUser.uid === item.authorId) {
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'highlight-card__remove';
        remove.setAttribute('data-highlight-remove', '');
        remove.setAttribute('aria-label', '删除我提交的精选：' + (item.title || item.quote.slice(0, 20)));
        remove.textContent = '删除我的';
        card.appendChild(remove);
    }

    return card;
}

function renderHighlightsPage() {
    const list = document.querySelector('[data-highlights-list]');
    if (!list) return;

    const empty = document.querySelector('[data-highlights-empty]');
    const noResults = document.querySelector('[data-highlights-no-results]');
    const summary = document.querySelector('[data-highlights-summary]');
    const search = document.querySelector('[data-highlights-search]');
    const searchText = normalizedText(search ? search.value : '').toLocaleLowerCase('zh-CN');
    const filtered = streamItems.filter((item) => {
        if (!searchText) return true;
        return [item.quote, item.title, item.section, item.category].some((value) =>
            (value || '').toLocaleLowerCase('zh-CN').includes(searchText)
        );
    });

    list.textContent = '';
    filtered.forEach((item, index) => list.appendChild(makeHighlightCard(item, index)));
    empty.hidden = !streamLoaded || streamItems.length > 0;
    noResults.hidden = !streamLoaded || streamItems.length === 0 || filtered.length > 0;

    if (!streamLoaded) {
        summary.textContent = '正在读取公共精选流…';
    } else if (streamItems.length === 0) {
        summary.textContent = '还没有公共精选';
    } else {
        const limitNote = streamItems.length === STREAM_LIMIT ? '（显示最新 ' + STREAM_LIMIT + ' 条）' : '';
        summary.textContent = '已读取 ' + streamItems.length + ' 条摘录' + limitNote
            + (searchText ? '，当前显示 ' + filtered.length + ' 条' : '');
    }
}

function showStreamError(message) {
    const errorElement = document.querySelector('[data-highlights-error]');
    if (!errorElement) return;
    errorElement.textContent = message;
    errorElement.hidden = false;
}

function setupHighlightsPage() {
    const list = document.querySelector('[data-highlights-list]');
    if (!list) return;

    const search = document.querySelector('[data-highlights-search]');
    if (search) search.addEventListener('input', renderHighlightsPage);

    list.addEventListener('click', async (event) => {
        const button = event.target.closest('[data-highlight-remove]');
        if (!button) return;
        const card = button.closest('[data-highlight-id]');
        if (!card) return;

        button.disabled = true;
        button.textContent = '删除中…';
        try {
            await deleteDoc(doc(db, COLLECTION_NAME, card.getAttribute('data-highlight-id')));
            showToast('已删除你提交的精选');
        } catch (error) {
            console.error('Unable to delete shared highlight', error);
            showToast(friendlyError(error, '暂时无法删除，请稍后再试。'));
            button.disabled = false;
            button.textContent = '删除我的';
        }
    });

    const streamQuery = query(
        collection(db, COLLECTION_NAME),
        orderBy('createdAt', 'desc'),
        limit(STREAM_LIMIT)
    );

    onSnapshot(streamQuery, (snapshot) => {
        streamItems = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
        streamLoaded = true;
        const errorElement = document.querySelector('[data-highlights-error]');
        if (errorElement) errorElement.hidden = true;
        renderHighlightsPage();
    }, (error) => {
        console.error('Unable to read shared highlights', error);
        streamLoaded = false;
        showStreamError(friendlyError(error, '公共精选流暂时无法读取，请稍后再试。'));
        renderHighlightsPage();
    });

    getCountFromServer(collection(db, COLLECTION_NAME)).then((snapshot) => {
        document.querySelectorAll('[data-shared-highlight-count]').forEach((element) => {
            element.textContent = String(snapshot.data().count);
        });
    }).catch((error) => {
        console.error('Unable to count shared highlights', error);
        document.querySelectorAll('[data-shared-highlight-count]').forEach((element) => {
            element.textContent = '—';
        });
    });

    renderHighlightsPage();
}

document.addEventListener('DOMContentLoaded', () => {
    setupSelectionTool();
    setupHighlightsPage();
});
