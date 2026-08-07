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
    <article class="archive-entry archive-entry--compact">
        <a href="{{ post.url | prepend: site.baseurl }}">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m.%d" }}</time>
            <h2>{{ post.title }}</h2>
            <span>{{ post.tags | slice: 0, 3 | join: " · " }}</span>
        </a>
    </article>
    {% endfor %}
</div>
