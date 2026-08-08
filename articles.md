---
layout: editorial-page
title: "思考与实践"
description: "关于 AI 产品、数据、学习、职业与一切值得长期记录的想法。"
kicker: "Ideas & Practice / Archive"
permalink: /articles/
---

{% assign article_posts = site.categories['ideas'] %}
<div class="editorial-archive editorial-archive--ideas">
    {% for post in article_posts %}
    <article class="archive-entry">
        <a href="{{ post.url | prepend: site.baseurl }}">
            <div class="archive-entry__meta">
                <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m.%d" }}</time>
                {% for tag in post.tags limit: 2 %}<span>{{ tag }}</span>{% endfor %}
            </div>
            <h2>{{ post.title }}</h2>
            <p>{{ post.description | default: post.excerpt | strip_html | truncate: 180 }}</p>
            <span class="archive-entry__link">阅读全文 ↗</span>
        </a>
    </article>
    {% endfor %}
</div>
