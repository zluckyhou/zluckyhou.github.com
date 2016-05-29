---
layout: post
title: CNAME file problem
date: 2016-5-29
categories: blog
tags: [Github]
description: Page build warning
---

昨天更新博客，收到一条提示邮件，内容是这样的：

> Page build warning
> The page build completed successfully, but returned the following warning:

> Your CNAME file was ignored because this repository is automatically hosted from zluckyhou.github.io already. See [https://help.github.com/articles/setting-up-your-pages-site-repository/](https://help.github.com/articles/setting-up-your-pages-site-repository/)

> For information on troubleshooting Jekyll see:

> [https://help.github.com/articles/troubleshooting-jekyll-builds](https://help.github.com/articles/troubleshooting-jekyll-builds)

> If you have any questions you can contact us by replying to this email.


其实也不是怎么至关重要，没什么错误，但每次打开博客都会收到一封这样的提醒，很不爽，于是打算按照提示解决一下。按部就班，打开[https://help.github.com/articles/setting-up-your-pages-site-repository/](https://help.github.com/articles/setting-up-your-pages-site-repository/)，根据提示一步一步创建CNAME文件，然后就发现其实CNAME文件已经存在，而且早已设置好了，接下来Next step：Setting up a custom domain，然后直接懵圈，还要设置DNS Provider，什么鬼，查资料搞了半天没搞明白，就这么一个简单的问题搞了1个多小时没有解决，此时已经将近凌晨1点，我的内心是崩溃的，无奈之下寻求帮助，于是我回复了以下邮件：

> Sorry, I already have a CNAME file in my repository, however every time I open my blog, I receive this warning message, I really don’t know how to address the problem, please help me! Thanks very much.

凌晨4点，收到github回复：

> Hello -  
> Thanks for getting in touch!  The message is saying that CNAME files in  a repositories are only necessary for custom domains.  So you don't need to have a CNAME file that says "zluckyhou.github.io", you can delete the CNAME file.   
> If you still have trouble, please let us know.   
> Cheers,   
> Robert   

一万只草泥马奔腾啊有木有，原来只是需要删除CNAME文件即可，试了试果然没再收到提醒邮件，此事终于告一段落。

回头想想，为何一开始搞不明白的时候没有直接向github求助呢，为何偏偏要浪费这么多的时间，有时候对于自己不擅长的事，还是求助专业人士比较好，所谓术业有专攻，在这个分工合作的时代，不懂的时候向专业人士寻求帮助是多么重要的一种素质啊！











