---
layout: post
title: hive grouping 高级查询功能
date: 2020-4-30
categories: blog
tags: [SQL]
description: hive grouping sets with cube
---

#### 今天刚发现，hive竟然也有组合groupby功能，实现的效果与kylin的cube类似，可以将输入的维度组合为cube，输出所有可能组合的groupby结果，太强大了

官方文档见[hive grouping sets 文档](https://cwiki.apache.org/confluence/display/Hive/Enhanced+Aggregation%2C+Cube%2C+Grouping+and+Rollup#EnhancedAggregation,Cube,GroupingandRollup-GROUPINGSETSclause)

presto 也有类似的查询功能，相见：[presto groupby高级查询](https://prestosql.io/docs/current/sql/select.html#group-by-clause)

---

示例代码：

```
-- 查询position和action组合的pv
SELECT POSITION,
       action,
       GROUPING__ID,
       count(1) AS pv
FROM ods_event_logs
WHERE dt = '2020-04-29'
  AND POSITION IN ('forum_rec',
                   'forum_feed')
GROUP BY POSITION,
         action WITH CUBE;
```

查询结果如下，GROUPING__ID的说明：0表示两个维度都进行了groupby，1表示只有第一个维度进行了groupby,2表示只有第二个维度进行了groupby，3表示两个维度都没有groupby

position|action|GROUPING__ID|pv
---|---|---|---
forum_rec|click|0|141878
forum_rec|view|0|1579098
forum_feed|view|0|34606758
forum_feed|click|0|6058013
forum_rec|NULL|1|1720976
forum_feed|NULL|1|40664771
NULL|view|2|36185856
NULL|click|2|6199891
NULL|NULL|3|42385747