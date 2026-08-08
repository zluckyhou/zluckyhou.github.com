#!/usr/bin/env node

import { createHash } from 'node:crypto'
import { readdir, readFile } from 'node:fs/promises'
import { resolve, relative, sep } from 'node:path'

const DEFAULT_SITE_URL = 'https://zluckyhou.github.io'
const DEFAULT_CREATE_DELAY_MS = 1100

function parseArgs(argv) {
  const options = {
    siteDir: '_site',
    dryRun: false,
  }

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index]

    if (argument === '--site-dir') {
      options.siteDir = argv[index + 1]
      index += 1
    } else if (argument === '--dry-run') {
      options.dryRun = true
    } else {
      throw new Error(`Unknown argument: ${argument}`)
    }
  }

  if (!options.siteDir) {
    throw new Error('--site-dir requires a directory')
  }

  return options
}

async function walkHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const path = resolve(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...await walkHtmlFiles(path))
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(path)
    }
  }

  return files
}

function decodeHtml(text) {
  const namedEntities = {
    amp: '&',
    apos: "'",
    gt: '>',
    lt: '<',
    nbsp: ' ',
    quot: '"',
  }

  return text.replace(/&(#(?:x[0-9a-f]+|\d+)|[a-z]+);/gi, (entity, value) => {
    if (value.startsWith('#x') || value.startsWith('#X')) {
      return String.fromCodePoint(Number.parseInt(value.slice(2), 16))
    }

    if (value.startsWith('#')) {
      return String.fromCodePoint(Number.parseInt(value.slice(1), 10))
    }

    return namedEntities[value.toLowerCase()] ?? entity
  })
}

function extractTitle(html, fallback) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  const title = match ? decodeHtml(match[1]).replace(/\s+/g, ' ').trim() : fallback

  // GitHub limits issue titles to 256 characters.
  return title.slice(0, 256)
}

function pathnameForFile(siteDir, file) {
  const relativePath = relative(siteDir, file).split(sep).join('/')
  const pagePath = relativePath.endsWith('/index.html')
    ? `/${relativePath.slice(0, -'index.html'.length)}`
    : `/${relativePath}`

  // URL.pathname matches the percent-encoded value returned by location.pathname
  // in the browser, including for Chinese article slugs.
  return new URL(pagePath, DEFAULT_SITE_URL).pathname
}

function gitalkId(pathname) {
  return createHash('md5').update(pathname).digest('hex')
}

async function findGitalkPages(siteDir) {
  const files = await walkHtmlFiles(siteDir)
  const pages = []

  for (const file of files) {
    const html = await readFile(file, 'utf8')

    if (!/id=["']gitalk-container["']/.test(html)) {
      continue
    }

    const pathname = pathnameForFile(siteDir, file)
    pages.push({
      id: gitalkId(pathname),
      pathname,
      title: extractTitle(html, pathname),
      url: new URL(pathname, DEFAULT_SITE_URL).href,
    })
  }

  return pages.sort((left, right) => left.pathname.localeCompare(right.pathname))
}

async function githubRequest(path, { method = 'GET', body, token } = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'zluckyhou-gitalk-initializer',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(`GitHub API ${method} ${path} failed (${response.status}): ${message}`)
  }

  return response.status === 204 ? null : response.json()
}

async function existingGitalkIds(repository, token) {
  const ids = new Set()

  for (let page = 1; ; page += 1) {
    const issues = await githubRequest(
      `/repos/${repository}/issues?state=all&labels=Gitalk&per_page=100&page=${page}`,
      { token },
    )

    for (const issue of issues) {
      for (const label of issue.labels) {
        const name = typeof label === 'string' ? label : label.name
        if (/^[a-f0-9]{32}$/.test(name)) {
          ids.add(name)
        }
      }
    }

    if (issues.length < 100) {
      return ids
    }
  }
}

function wait(milliseconds) {
  return new Promise((resolvePromise) => setTimeout(resolvePromise, milliseconds))
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  const siteDir = resolve(options.siteDir)
  const repository = process.env.GITHUB_REPOSITORY ?? 'zluckyhou/zluckyhou.github.com'
  const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN

  if (!token) {
    throw new Error('GITHUB_TOKEN or GH_TOKEN is required')
  }

  const pages = await findGitalkPages(siteDir)
  const existingIds = await existingGitalkIds(repository, token)
  const missingPages = pages.filter((page) => !existingIds.has(page.id))

  console.log(`Found ${pages.length} Gitalk pages: ${pages.length - missingPages.length} initialized, ${missingPages.length} missing.`)

  if (options.dryRun) {
    for (const page of missingPages) {
      console.log(`[dry-run] ${page.id} ${page.pathname}`)
    }
    return
  }

  const createDelayMs = Number.parseInt(
    process.env.GITALK_CREATE_DELAY_MS ?? `${DEFAULT_CREATE_DELAY_MS}`,
    10,
  )

  for (const [index, page] of missingPages.entries()) {
    const issue = await githubRequest(`/repos/${repository}/issues`, {
      method: 'POST',
      token,
      body: {
        title: page.title,
        body: `${page.url}\n\n此 Issue 由博客发布流程自动创建，用于承载文章评论。`,
        labels: ['Gitalk', page.id],
      },
    })

    console.log(`Created #${issue.number}: ${page.pathname}`)

    // Stay below GitHub's secondary limit for content-creation requests.
    if (index < missingPages.length - 1 && createDelayMs > 0) {
      await wait(createDelayMs)
    }
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
