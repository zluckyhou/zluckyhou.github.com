---
layout: page
title: "History"
description: "历史文章"
header-img: "img/dark_yellow.png"
---


<ul class="listing">
{% for post in site.posts %}
  {% capture y %}{{post.date | date:"%Y"}}{% endcapture %}
  {% if year != y %}
    {% assign year = y %}
    <li class="listing-seperator" ><p style="color:#1EB2A6"><b>{{ y }}</b></p></li>
      <HR>
  {% endif %}
  <li class="listing-item">
    <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
    <a href="{{ post.url }}" title="{{ post.title }}" style="color:#1EB2A6">{{ post.title }}</a>
  </li>

{% endfor %}
</ul>
