---
layout: editorial-page
title: "全部文章"
description: "全站文章按时间排列，从今天一直到最早。"
kicker: "Archive"
permalink: /archive/
---

<div class="home-feed home-feed--archive">
{% for post in site.posts %}
{% capture post_year %}{{ post.date | date: "%Y" }}{% endcapture %}
{% if post_year != current_year %}
<h2 class="archive-year">{{ post_year }}</h2>
{% assign current_year = post_year %}
{% endif %}
{% assign category_name = "文章" %}
{% if post.categories contains 'ai-daily' %}
    {% assign category_name = "AI 日报" %}
{% elsif post.categories contains 'company-research' %}
    {% assign category_name = "公司观察" %}
{% elsif post.categories contains 'reddit' %}
    {% assign category_name = "Reddit 精选" %}
{% endif %}
<a class="home-feed__row" href="{{ post.url | prepend: site.baseurl }}">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%m.%d" }}</time>
    <h3>{{ post.headline | default: post.title }}</h3>
    <span>{{ category_name }}</span>
</a>
{% endfor %}
</div>
