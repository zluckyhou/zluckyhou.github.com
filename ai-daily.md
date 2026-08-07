---
layout: editorial-page
title: "AI 前沿日报"
description: "每天从前沿模型、产品发布、研究突破与行业动态中，筛选真正值得关注的信号。"
kicker: "AI Frontier Daily / Archive"
permalink: /ai-daily/
---

{% assign daily_posts = site.categories['ai-daily'] %}
<div class="editorial-archive editorial-archive--daily">
    {% for post in daily_posts %}
    <article class="archive-entry">
        <a href="{{ post.url | prepend: site.baseurl }}">
            <div class="archive-entry__meta">
                <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m.%d" }}</time>
                <span>{{ post.issue_count }} 条主线</span>
                <span>{{ post.deep_dive_count }} 条 Deep Dive</span>
            </div>
            <h2>{{ post.headline | default: post.title }}</h2>
            <p>{{ post.summary | default: post.description | default: post.excerpt | strip_html | truncate: 220 }}</p>
            <span class="archive-entry__link">阅读本期日报 ↗</span>
        </a>
    </article>
    {% else %}
    <p>日报即将上线。</p>
    {% endfor %}
</div>
