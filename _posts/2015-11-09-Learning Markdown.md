---
layout: post
title: Markdown 学习小记
date: 2015-11-09
categories: blog
tags: [markdown]
description: 学习笔记
---
# Markdown 使用学习

学习内容来源于[官方说明](http://www.appinn.com/markdown/#overview)

注意内容适用于Ipython notebook中的markdown

# 以下为补充内容

## 插入本地文件

例如：

* 插入图片

>< img src="../images/python_logo.svg" >

><img src="test.jpg">

* 插入视频
> <video controls src="images/animation.m4v" />


注意的是该方法只能插入notebook子目录下的文件

## 嵌入代码块

用三个 \` \` \` 包裹即可，注意要注明代码类型，如javascript或者python

>```python
print "Hello World"
```

>```javascript
console.log("Hello World")
```


## 换行的另一种方法

大多数情况下用多于两个空行的方法都可以，但是在使用了特殊的符号之后，这种方法会失效，此时需要利用Html语法中的 < br > 来实现<br><br><font size=3>见调整字体大小中的实例代码</font>

## 调整字体大小

<br>

<font size=3>我是变大的字</font>
