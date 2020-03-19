---
layout: page
title: "Tags"
description: "There are two sides to every story ... at least. "  
header-img: "img/dog1.jpg"  
---

### 我的tags是这些有趣的东西：

<br>

<div id='tag_cloud'>
{% for tag in site.tags %}
<a href="#{{ tag[0] }}" title="{{ tag[0] }}" rel="{{ tag[1].size }}" style="color:#2A6BEE">{{ tag[0] }}&nbsp;&nbsp;&nbsp;&nbsp;</a>
{% endfor %}
</div>

<br>

### 下面这些就是更有趣的正文：

<ul class="listing">
{% for tag in site.tags %}
  <li class="listing-seperator" id="{{ tag[0] }}">{{ tag[0] }}</li>
{% for post in tag[1] %}
  <li class="listing-item">
  <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
  nbsp;&nbsp;
  <a href="{{ post.url }}" title="{{ post.title }}" style="color:#2A6BEE">{{ post.title }}</a>
  </li>
{% endfor %}
<HR>
<br />
{% endfor %}
</ul>

<script src="/media/js/jquery.tagcloud.js" type="text/javascript" charset="utf-8"></script> 
<script language="javascript">
$.fn.tagcloud.defaults = {
    size: {start: 1, end: 1, unit: 'em'},
      color: {start: '#f8e0e6', end: '#ff3333'}
};

$(function () {
    $('#tag_cloud a').tagcloud();
});
</script>
