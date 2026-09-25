---
layout: post
title: "Reddit 每日精选 | 2026.09.25"
headline: "AI 公司按吨收购日本旧书，扫描完就粉碎——最讽刺的是，这是法律逼出来的"
date: 2026-09-25 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "从被切开书脊的旧书到挪威人人可查的收入记录，今天几个帖子都在问同一件事：透明和销毁，到底谁在受益。"
summary: "本期五个帖子：日本二手书店销量暴涨五倍，因为整吨的书被买去扫描后粉碎，评论区把这笔账从道德吵到了判例；挪威把每个人的收入和资产挂在网上，但查询者会留名，本地人现身说法讲这套机制到底改变了什么；Python 终于又一次尝试引入 ?. 和 ?? 运算符，老 C# 用户和保守派各执一词；一篇 SQLite 生产环境调优贴被评论区补上了最关键的那条坑；最后是一份横跨九十年、两万五千部电影的脏话统计，作者在楼里当场发现并承认了自己的数据错误。"
digest_count: 5
---

今天这五个帖子看着八竿子打不着，但放在一起有条挺清楚的线索：**信息被怎么处理，决定了谁获益**。书被扫描成数据之后纸张就成了负担，于是被粉碎；收入被公开成数据之后谈薪就有了底气，但攀比也跟着来了；`None` 被显式处理还是被运算符吞掉，决定了代码是清爽还是隐蔽；数据库的默认配置是为二十年前的嵌入式设备写的，照搬到 Web 服务上就会翻车；而一份漂亮的图表背后，可能藏着一个把韩国犯罪片字幕当成猫王电影的匹配错误。

## 一、整吨买书、扫完粉碎：这件事比「烧书」复杂，也比「无所谓」严重

[原帖：Japanese used bookstores see 5x sales surge as books are being bought by the ton](https://www.reddit.com/r/technology/comments/1wp3sd8/japanese_used_bookstores_see_5x_sales_surge_as/)

日本的二手书店最近销量暴涨五倍，买家不按本买，按吨买。有一笔 50 吨的订单被发往美国，据称进了 AI 公司的「扫描—粉碎」流水线。帖子一出，楼里第一反应就是两个字：焚书。

但评论区很快把这事从情绪拉回到了机制。真正有信息量的那批回复给出了两个理由，而且是叠加的：第一，破坏式扫描本来就便宜得多——切掉书脊、把散页一张张过进纸机，比用那种能自动翻页的昂贵扫描仪快一个量级，书其实是在扫描过程中就已经散架了，不存在「扫完再销毁」这个额外步骤；第二，也是更荒诞的一条，销毁是法律上的安全选择。楼里反复被引用的是 Bartz v. Anthropic 那个判决：把纸质书转成数字副本能被认定为合理使用，前提之一恰恰是原件被销毁，这样世界上的副本总数没有增加。

> "Firstly, because it is cheaper to scan destructively than in a way that preserves the book. … Bartz v. Anthropic suggests that creating a virtual copy of a physical book is legal under fair use as long as the physical copy is destroyed afterwards (thus meaning the number of copies hasn't increased)."
>
> <cite>— u/HexaShadow13，<a href="https://www.reddit.com/r/technology/comments/1wp3sd8/japanese_used_bookstores_see_5x_sales_surge_as/pbsn2i9/" target="_blank" rel="noopener">原帖评论</a></cite>

顺着这条线，楼里还出现了一次挺有质量的自我纠偏：有人说销毁只是因为便宜、跟版权无关，还拿 Sony 案（把自己买的 CD 转成 MP3 不需要毁掉 CD）来类比，结果被人直接指出 Bartz 案里「扫描具有破坏性」是被法官写进合理使用认定的关键要素之一——对方看完就承认自己记错了。这种在争吵里真的改主意的场面，在 r/technology 不算常见。

当然也有另一派坚持认为「便宜」和「合法」都不构成理由。最激烈的一条质问：书一旦被销毁，这些公司想怎么改书里的内容都行，谁还能对得上原文？

> "Once these books are destroyed, these billionaire asshats can change whatever they want in them and how is anyone to know the difference?"
>
> <cite>— u/raxnahali，<a href="https://www.reddit.com/r/technology/comments/1wp3sd8/japanese_used_bookstores_see_5x_sales_surge_as/pbs70pe/" target="_blank" rel="noopener">原帖评论</a></cite>

对这条，楼里也有人泼了冷水：毁掉你自己那本《哈利波特》，并不会让世界上所有的《哈利波特》消失；被买走的绝大多数是有 ISBN、仍在版权期内、但已经绝版、捐赠站不收、书店也卖不掉的存货，不是孤本善本。还有人补了一刀：书店、出版社、慈善商店甚至图书馆每年销毁的书，比这多得多，只是没人拍下来发上网。

**我的看法**：这件事最值得琢磨的地方，不是 AI 公司有多坏，而是一条为「防止副本增殖」而设计的规则，在工业规模下被执行成了「必须销毁实体」。法律想保护的是作者的复制权，结果实际效果是纸被粉碎、作者一分钱没多拿、公司拿到了干净的数据。这种规则和后果对不上的情形，在国内讨论数据合规时同样值得警惕——我们很容易把合规做成一套「怎么让流程看起来没问题」的仪式，而不是去问这套流程到底在保护谁。另外，那句反驳其实点到了真问题：担心的不该是知识消失，而是唯一的高质量数字副本握在私人手里，既不会进公共档案，公司倒闭时大概率也一起没了。

## 二、挪威把所有人的收入挂在网上，但你查了谁，对方一小时内就知道

[原帖：TIL in Norway everyone's income, net wealth and tax paid are published online](https://www.reddit.com/r/todayilearned/comments/1woxer8/til_in_norway_everyones_income_net_wealth_and_tax/)

挪威把每个人的净收入、净资产和已缴税额公开在网上，任何人可查。但这套系统有三个限制条件：你必须登录才能查；被查的人会在一小时内在自己的查询记录里看到你的名字；每人每月上限 500 次。公开透明和「被看见自己在看」这两件事被绑在了一起。

评论区里最有意思的不是制度本身，而是北欧本地人讲的实际效果。最直接的收益是谈薪：瑞典网友说自己每次投简历前都先查同公司同岗位的人实际拿多少，心里有个数再开价；另一位说他朋友每年绩效面谈都先把老板的收入调出来，老板涨了多少，他就要求涨得不少于这个数。

> "I live in Sweden and when applying for work I look up the tax records of how much people make in the same or similar roles at the company so I have a rough idea of what to ask for."
>
> <cite>— u/Optimal-Result-3282，<a href="https://www.reddit.com/r/todayilearned/comments/1woxer8/til_in_norway_everyones_income_net_wealth_and_tax/pbu3bx6/" target="_blank" rel="noopener">原帖评论</a></cite>

有人担心这是小偷和骗子的天堂：知道谁有钱、开什么车、住哪儿，不就等于画了张靶子？回应相当漂亮——所有查询都会变成政府记录，并且直接推送给被查的人，罪犯通常不喜欢主动给目标留一份带自己名字的档案。楼里还举了个真实案例：三名男子专门筛查某片区七十岁以上的富裕老人，冒充医护人员上门盗窃珠宝，最后被判刑，而查询记录本身就是现成的证据链。当然也有人指出漏洞：用盗来的账号查就行，留下的痕迹指向的是被盗号的人。

另一个副作用没那么好处理。有挪威网友说，这套制度确实压制了薪资歧视和逃税，但也放大了「幸福感差距」——有钱人上榜洋洋得意，收入不如人的那一半则无处可藏。

> "Imagine attending your 10th school reunion where former classmates snicker that your income is well below average. You can't hide it."
>
> <cite>— u/p33k4y，<a href="https://www.reddit.com/r/todayilearned/comments/1woxer8/til_in_norway_everyones_income_net_wealth_and_tax/pbqr7e4/" target="_blank" rel="noopener">原帖评论</a></cite>

**我的看法**：这个帖子里最值得抄作业的不是「公开收入」，而是那个查询留痕的设计。透明制度真正的难点从来不是要不要公开，而是怎么防止公开被单向滥用——挪威的答案是让「观看」这个动作本身也变得可见，于是被查者和查询者处在同一层规则之下。对照国内，我们其实早就活在大量信息不对称里：企业能查你的征信、工作履历、消费能力，你查不了任何人的。如果一定要选一个改良方向，把「谁查了我的数据、什么时候查的」做成人人可见，可能比争论某类数据该不该公开更现实，也更有杀伤力。

## 三、Python 第 N 次尝试引入 `?.` 和 `??`，这次会卡在哪

[原帖：PEP 823, 824 – None-aware access operators & None-coalescing operators](https://www.reddit.com/r/Python/comments/1worhqr/pep_823_824_noneaware_access_operators/)

两份新 PEP 提议给 Python 加四个运算符：`?.`（空值安全属性访问）、`?[]`（空值安全索引）、`??`（空值合并）和 `??=`（空值合并赋值）。语义和 JavaScript、C# 里的同名运算符基本一致：左边是 `None` 就短路返回 `None`，否则继续求值。

评论区分成了相当清晰的两派。支持的一方大多有 C#/TypeScript 背景，说法出奇一致：真正的价值不在单个 `?.`，而在链式调用——处理 JSON 转过来的嵌套字典时，`a?.b.c?.d` 和三层嵌套判空的可读性差距不是一点半点，判空的仪式感会把真正的业务逻辑淹没。

> "The chaining is where most of the value lives in practice. Something like result = obj?.child?.name reads clean and the alternative is three nested None checks that make the actual logic invisible."
>
> <cite>— u/Khavel_dev，<a href="https://www.reddit.com/r/Python/comments/1worhqr/pep_823_824_noneaware_access_operators/pbq9ce5/" target="_blank" rel="noopener">原帖评论</a></cite>

反对的意见集中在 `??=` 上，而且给出了一条我觉得相当漂亮的论证。有人说「既然有了 `??`，按 `+=`、`|=` 的惯例自然也该有 `??=`」，马上被反驳：这个类比不成立，因为 Python 里唯独 `and` 和 `or` 这两个短路运算符就没有增强赋值版本，而 `??` 恰恰和它们同类——右边有时候根本不会被求值，这其实是控制流，不是普通运算。

> "There's no augmented assignment version of and and or , which share the property of being short circuiting - they don't evaluate the RHS unless needed."
>
> <cite>— u/Brian，<a href="https://www.reddit.com/r/Python/comments/1worhqr/pep_823_824_noneaware_access_operators/pbueour/" target="_blank" rel="noopener">原帖评论</a></cite>

还有两条容易被忽略的提醒。一是 PEP 自己写明了：`?.` 和 `?[]` 只处理「值是 `None`」，不处理「键/属性根本不存在」，后者该用 `dict.get` 和 `getattr` 的还得用。二是 `??` 对新手是个坑——当对象没有假值形态时它和 `or` 行为完全一致，但对 `int`、`str` 就完全不同（`0 or 5` 得 5，`0 ?? 5` 得 0）。至于这次能不能过，老 Python 用户普遍不乐观，楼里翻出了十一年前那次讨论，当年 Guido 坚持要把这个运算符叫做「uptalk」，然后整个帖子就在命名上散掉了。

**我的看法**：这两个 PEP 的分歧其实是「显式优于隐式」这条 Python 信条在现实压力下的又一次让步试探。我自己的经验是：`?.` 值得加，因为它消除的是真正无法避免的重复——从外部 API 拿回来的嵌套数据，判空是刚需，没有更优雅的写法；而 `??=` 更像是给已经不多的省字空间再抠两个字符，代价是把一次赋值和一次条件判断压缩到一个容易被眼睛滑过去的符号里。写业务代码的人可以留意 Python 3.15 的动向，但别指望这次就能定下来——这个议题已经在 python-ideas 上活了十几年了。

## 四、SQLite 上生产：评论区补上了文章里最关键的那条坑

[原帖：SQLite in Production: Why WAL Mode, busy_timeout, and 1-Writer Pools](https://www.reddit.com/r/Python/comments/1wowf4q/sqlite_in_production_why_wal_mode_busy_timeout/)

作者写了篇相当实在的调优贴：SQLite 之所以背着「一并发就 database is locked」的名声，是因为它的默认配置是二十多年前为低资源嵌入式设备设计的，不是为 Web 服务。改成 WAL 日志模式、设好 `busy_timeout`、再配一个「多读单写」的连接池，在一台便宜 VPS 上扛住每秒几千请求并不难，而且省掉了 Postgres 的网络往返。

评论区最有价值的一条是给文章打补丁的。有人指出 `BEGIN IMMEDIATE` 那一节被低估了：`busy_timeout` 在最典型的那个场景里根本不起作用——当一个延迟开启的读事务想升级成写事务、而快照已经过期时，你会立刻拿到 database is locked，哪怕超时设成了 5 秒也没用。作者自己也认了这个坑，说第一次遇到时完全没反应过来。

> "The BEGIN IMMEDIATE point deserves more attention. busy_timeout does nothing when a deferred read transaction tries to upgrade to a write on a stale snapshot…"
>
> <cite>— u/Hot_Bank7701，<a href="https://www.reddit.com/r/Python/comments/1wowf4q/sqlite_in_production_why_wal_mode_busy_timeout/pbqfd8o/" target="_blank" rel="noopener">原帖评论</a></cite>

另一条泼冷水的更根本：真正的危险不是撞上锁，而是撞不上锁。SQLite 的文件锁只有在本地裸盘上才真正可靠，换成网络挂载（NFS/SMB）就可能悄悄失效，然后你的数据库就废了。作者回应说标准云 VPS 上内核处理的是本地锁，和裸机一样稳；但这条提醒对任何打算把 db 文件放共享存储上的人都值千金——楼里就有人现身说法，把大 SQLite 库放在 WSL 挂载的 `/mnt/d` 下，结果可想而知。

> "The problem isn't hitting locks. The problem is not hitting locks, because SQLite's file locking mechanisms are only truly reliable if you are running on local, bare-metal, unvirtualized disks."
>
> <cite>— u/sennalen，<a href="https://www.reddit.com/r/Python/comments/1wowf4q/sqlite_in_production_why_wal_mode_busy_timeout/pbr937x/" target="_blank" rel="noopener">原帖评论</a></cite>

还有人直接质疑动机：这么折腾，不如在同一台机器上跑个 Postgres，这不是在给一个不存在的问题造复杂方案吗？作者的回答挺有说服力：SQLite 常驻内存约 15MB，Postgres 加上连接进程轻松吃掉 250–500MB，在 512MB 或 1GB 的小机器上这是决定性的差别；再加上零运维、单文件备份、进程内调用没有序列化开销。但他也划了线——多节点或写入密集，Postgres 才是对的选择。楼里一位跑天气服务的开发者给出了最佳注脚：Web 容器、调度器、数据管线三个容器共用一个 SQLite 文件，跑在 2GB 的 Lightsail 上，唯一麻烦的是换机器要先进维护模式停写、拷文件、切 DNS。另外还有人解释了「默认配置为什么这么差」这个朴素疑问：SQLite 本来就是给嵌入式设备用的，WAL 是有额外开销的，你手机上装一百个 App，每个都为了快 0.1 毫秒交这份开销，才是不合理。

**我的看法**：这帖子最该被记住的不是那几行 PRAGMA，而是「默认值是为别人的场景调的」这个通用教训。SQLite 的默认配置、Redis 的默认持久化策略、Nginx 的默认超时，全都是某个特定历史场景下的合理取舍，搬到你的场景里就可能是定时炸弹。国内很多团队的技术选型习惯是「大厂都用 X 所以我也用 X」，而这个帖子展示的是另一种更省钱的思路：先老老实实算清楚自己的量级，单机几千 QPS 的内部工具真的不需要一套分布式数据库。当然前提是你得知道 `BEGIN IMMEDIATE` 这种坑长什么样——所以这类帖子真正的价值往往在评论区。

## 五、两万五千部电影的脏话统计，和作者在评论区的当场翻车

[原帖：Swearing in 25,401 English-language films, 1930-2023](https://www.reddit.com/r/dataisbeautiful/comments/1wp34ek/oc_swearing_in_25401_englishlanguage_films/)

有人扒了两万五千多部英语电影的字幕，统计脏话出现频率，结论符合直觉：1968 年海斯法典（Hays Code）废除之前，这些词在银幕上几乎不存在，之后一路走高。图很漂亮，但这个帖子真正的看点是评论区。

先是有人眼尖地问：为什么 2005 年前后有个明显的凹陷？作者的回答相当克制，把「真实效应」和「数据噪声」拆开讲：一方面，千禧年初确实是好莱坞冲 PG-13 分级的高峰期，热门片里「一句脏话都没有」的比例在 2003–04 年冲到 56–57%，两侧大约只有 50%；另一方面，纪录片在语料里的占比从 2003 年起从 3% 跳到 8%，而纪录片本来就不怎么说脏话，加上整体比率被极少数「超级脏」的片子主导，某一年的高低很大程度上取决于语料里正好收了哪几部。

> "documentaries jump from ~3% of the films to ~8% from 2003 onwards, and they swear a lot less. The rate is also driven by a small number of extremely sweary films, so a year can swing up or down depending on which of those are in the corpus."
>
> <cite>— u/andrewthecoder（原帖作者），<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wp34ek/oc_swearing_in_25401_englishlanguage_films/pbrzhrp/" target="_blank" rel="noopener">原帖评论</a></cite>

更精彩的在后面。有人问：1950 年代居然有片子出现 F 开头的词，是哪一部？作者第一时间回答是 1951 年奥逊·威尔斯版的《奥赛罗》，几十分钟后自己回来发了条更正——那份字幕其实来自 2001 年的高中背景翻拍片《O》，证据是高频词里出现了 Odin、Hugo、Desi 这些角色名。顺手他还查出另一个异常点：1957 年猫王的《Loving You》，匹配到的是一部韩国犯罪片的字幕。

> "Same story for the other big pre-1965 hit: Elvis's Loving You (1957) turns out to be the subtitles for a Korean crime drama (top words: Yoo, Jin, Park, detective, prosecutor). I'm working on catching these."
>
> <cite>— u/andrewthecoder（原帖作者），<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wp34ek/oc_swearing_in_25401_englishlanguage_films/pbsipcq/" target="_blank" rel="noopener">原帖评论</a></cite>

**我的看法**：这是我今天最喜欢的一节，因为它演示了一次教科书级的数据排查。异常点不是噪声，是线索——当一个 1951 年的片子出现了本不该有的词，正确反应不是删掉离群值，也不是拿它当爆款结论去发帖，而是顺着高频词回去看原始数据到底匹配到了什么。用公开字幕库做分析时，「文件名对得上 ≠ 内容对得上」这个假设几乎必然会咬你一口，尤其在早期年份，样本少、一个错配就能改变整条曲线。作者在自己爆火的帖子底下公开更正自己，并且把排查过程写清楚，比那张图本身更值得学。
