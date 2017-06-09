---
layout: post
title: Python 操作MySql
date: 2017-06-09
categories: blog
tags: [python]
description: python 操作mysql
---

# Python 操作MySql

python3 操作mysql有以下两个常用目的：

- 在python中进行sql查询

- 利用python将Mysql表读取为DataFrame，然后进行操作

## 在Python中进行sql查询

首先需要连接mysql数据库，自己比较常用的方法有两种：

**1. 通过pymysql连接**

```
$ pip install pymysql

>>> import pymysql
>>> conn = pymysql.connect(host='localhost',user='root',passwd='******',port=3306,db='test')
>>> cur = conn.cursor()
>>> cur.execute('select * from websites;')
>>> cur.fetchall()

```

**2.通过 SQLAlchemy连接**

```
>>> from sqlalchemy import create_engine
>>> engine = create_engine('mysql+pymysql://username:password@127.0.0.1:3306/database')
>>> res = engine.execute('select * from websites;')
>>> res.fetchall()

```

## 利用python将Mysql表读取为DataFrame

利用pandas可以方便地将mysql数据表读取为dataframe

```
$ pip install pymysql

>>> import pymysql
>>> from sqlalchemy import create_engine
>>> engine = create_engine('mysql+pymysql://username:password@127.0.0.1:3306/database')
>>> df = pd.read_sql_table('websites',engine)

```

参考[循序渐进PYTHON3（十）-- 2 -- SQLALCHEMY](http://www.cnblogs.com/wumingxiaoyao/p/5980787.html)
