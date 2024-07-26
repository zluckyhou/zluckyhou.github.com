---
layout: page
title: "Tags"
description: "可以通过Tags来查看历史文章"  
header-img: "img/dark_yellow_400.png"  
---

<style>
    .tag-cloud {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .tag-item {
        position: relative;
        margin: 5px;
        padding: 5px 10px;
        background-color: #f0f0f0;
        border-radius: 5px;
        text-decoration: none;
    }
    .tag-count {
        position: absolute;
        top: -8px;
        right: -8px;
        background-color: #1EB2A6;
        color: white;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 0.8em;
    }
    .listing-seperator {
        margin-top: 30px;
    }
    .listing-item {
        margin-bottom: 10px;
    }
</style>

<h1 style="color:#1EB2A6">Tags</h1>

<div class="tag-cloud">
{% for tag in site.tags %}
    <a href="#{{ tag[0] }}" class="tag-item" title="{{ tag[0] }}" style="font-size: {{ tag[1].size | times: 4 | plus: 80 }}%">
        {{ tag[0] }}
        <span class="tag-count">{{ tag[1].size }}</span>
    </a>
{% endfor %}
</div>

<h1 style="color:#1EB2A6">Articles</h1>

<ul class="listing">
{% for tag in site.tags %}
  <h3 class="listing-seperator" id="{{ tag[0] }}" style="color:#1EB2A6">{{ tag[0] }}</h3>
  <hr>
{% for post in tag[1] %}
  <li class="listing-item">
    <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
    &nbsp;&nbsp;
    <a href="{{ post.url }}" title="{{ post.title }}" style="color:#1EB2A6">{{ post.title }}</a>
  </li>
{% endfor %}
{% endfor %}
</ul>

<script src="/js/jquery.tagcloud.js" type="text/javascript" charset="utf-8"></script> 
<script language="javascript">
$.fn.tagcloud.defaults = {
    size: {start: 1, end: 1, unit: 'em'},
    color: {start: '#f8e0e6', end: '#ff3333'}
};

$(function () {
    $('#tag_cloud a').tagcloud();
});
</script>
