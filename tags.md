---
layout: page
title: "Tags"
description: "可以通过Tags来查看历史文章"  
header-img: "img/dark_yellow_400.png"  
---

<h1 style="color:#1EB2A6">Tags</h1>


<div id='tag_cloud'>
{% for tag in site.tags %}

<a href="#{{ tag[0] }}" title="{{ tag[0] }}" rel="{{ tag[1].size }}" style="color:#1EB2A6;font-size:{{ tag[1].size }}">&nbsp;&nbsp;{{ tag[0] }}&nbsp;&nbsp;</a>
{% endfor %}
</div>

<br>

<h1 style="color:#1EB2A6">Articles</h1>

<ul class="listing">
{% for tag in site.tags %}
<!--   <li class="listing-seperator" id="{{ tag[0] }}"><p style="color:#1EB2A6"><b>{{ tag[0] }}</b></p></li> -->
  <h3 class="listing-seperator" id="{{ tag[0] }}" style="color:#1EB2A6">{{ tag[0] }}</h3>
  <HR>
{% for post in tag[1] %}
  <li class="listing-item">
  <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
  &nbsp;&nbsp;
  <a href="{{ post.url }}" title="{{ post.title }}" style="color:#1EB2A6">{{ post.title }}</a>
  </li>
{% endfor %}
<!-- <HR> -->
<!-- <br /> -->
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
