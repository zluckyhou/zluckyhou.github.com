---
layout: editorial-page
title: "Reddit 每日精选"
description: "每天从 Reddit 热帖中挑出真正有趣有价值的讨论，连同评论区的洞见一起解读。"
kicker: "Reddit Daily Digest / Archive"
permalink: /reddit-daily/
---

{% assign reddit_posts = site.categories['reddit'] %}
<div class="editorial-archive editorial-archive--daily">
    {% for post in reddit_posts %}
    <article class="archive-entry">
        <a href="{{ post.url | prepend: site.baseurl }}">
            <div class="archive-entry__meta">
                <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m.%d" }}</time>
                {% if post.digest_count %}<span>{{ post.digest_count }} 个帖子</span>{% endif %}
            </div>
            <h2>{{ post.headline | default: post.title }}</h2>
            <p>{{ post.summary | default: post.description | default: post.excerpt | strip_html | truncate: 220 }}</p>
            <span class="archive-entry__link">阅读本期精选 ↗</span>
        </a>
    </article>
    {% else %}
    <p>精选即将上线。</p>
    {% endfor %}
</div>
