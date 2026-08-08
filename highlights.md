---
layout: default
title: "读者精选"
description: "所有读者从文章中选出的句子与观点，汇成一条持续更新的公共精选流。"
permalink: /highlights/
---

<main class="highlights-page">
    <header class="highlights-hero">
        <div class="editorial-shell highlights-hero__grid">
            <div>
                <p class="editorial-eyebrow">Readers' shared highlights</p>
                <h1>读者精选流</h1>
                <p>任何读者都可以在文章里选中值得留下的文字，加入这条公共精选流。这里实时汇集大家的发现，并保留回到原文的入口。</p>
            </div>
            <aside class="highlights-hero__counter" aria-label="精选数量">
                <strong data-shared-highlight-count>—</strong>
                <span>shared passages</span>
                <small>所有读者共享</small>
            </aside>
        </div>
    </header>

    <section class="editorial-shell highlights-library" aria-labelledby="highlights-library-title">
        <div class="highlights-toolbar">
            <div>
                <p class="editorial-section-label">Commonplace book / 001</p>
                <h2 id="highlights-library-title">摘录簿</h2>
            </div>
            <label class="highlights-search">
                <span class="sr-only">搜索精选</span>
                <input type="search" placeholder="搜索摘录或文章…" data-highlights-search>
            </label>
        </div>

        <div class="highlights-summary" aria-live="polite">
            <span data-highlights-summary>正在读取公共精选流…</span>
        </div>

        <div class="highlights-list" data-highlights-list></div>

        <div class="highlights-empty" data-highlights-empty>
            <span aria-hidden="true">“</span>
            <h2>等待第一位读者留下精选</h2>
            <p>打开一篇文章，选中一段让你想再看一遍的文字。选择结束后，“加入公共精选”按钮会出现在文字旁边。提交的摘录会对所有人可见。</p>
            <a href="{{ site.baseurl }}/">去首页找一篇值得读的 ↗</a>
        </div>

        <div class="highlights-no-results" data-highlights-no-results hidden>
            <p>没有找到匹配的精选。</p>
        </div>

        <div class="highlights-stream-error" data-highlights-error hidden role="status"></div>
    </section>
</main>
