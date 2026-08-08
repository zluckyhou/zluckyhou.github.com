---
layout: editorial-page
title: "标签"
description: "按标签浏览全站文章。"
kicker: "Tags / Index"
---

{% assign tag_pairs = "" | split: "" %}
{% for tag in site.tags %}
{% capture pair %}{{ tag[1].size | plus: 100000 }}::{{ tag[0] }}{% endcapture %}
{% assign tag_pairs = tag_pairs | push: pair %}
{% endfor %}
{% assign sorted_tags = tag_pairs | sort | reverse %}

<div class="tag-cloud">
{% for pair in sorted_tags %}
    {% assign tag_name = pair | split: "::" | last %}
    <a href="#{{ tag_name }}">{{ tag_name }} <small>{{ site.tags[tag_name] | size }}</small></a>
{% endfor %}
</div>

<div class="home-feed home-feed--archive">
{% for pair in sorted_tags %}
{% assign tag_name = pair | split: "::" | last %}
<h2 class="archive-year" id="{{ tag_name }}">{{ tag_name }}</h2>
{% for post in site.tags[tag_name] %}
<a class="home-feed__row" href="{{ post.url | prepend: site.baseurl }}">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m.%d" }}</time>
    <h3>{{ post.headline | default: post.title }}</h3>
</a>
{% endfor %}
{% endfor %}
</div>
