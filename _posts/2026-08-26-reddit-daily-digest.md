---
layout: post
title: "Reddit 每日精选 | 2026.08.26"
headline: "内存二十年的降价被一年吃干抹净，而九成高管承认 AI 没提高生产率却还在裁人"
date: 2026-08-26 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "AI 这轮投入的账单，正以两种方式落到普通人头上：一张是涨了两三倍的内存价格单，一张是没提高生产率却照裁不误的人事名单。"
summary: "本期上半场是两笔 AI 的账：内存和硬盘价格在一年里抹掉了二十年的降价曲线，评论区成了一整面自发的价格墙；另一边九成高管承认 AI 没带来生产率提升，却照样裁员，有人指出他们裁人不是因为 AI 顶上了，而是为了掏钱买 AI。下半场轻一些：Python 3.16 文档新增的复杂度表引出一场关于 range 求 min 为什么是 O(n) 的硬核辩论，索尼提醒玩家买的游戏并不属于自己，以及一份一万五千局井字棋数据揭示的反常识结论。"
digest_count: 5
---

今天这几个帖子拼在一起，能看出一条挺清楚的线：AI 这轮资本开支的账单，正在以两种方式落到普通人头上。一种很直接 —— 你想给电脑加根内存条，发现价格是两年前的三倍；另一种绕一点 —— 公司高管自己都承认 AI 没让效率变好，但裁员照旧。评论区对第二件事的解读比新闻本身更狠。

后半段轻松些：一场关于 Python 文档里一个 O(n) 到底算不算 bug 的辩论，索尼又一次提醒大家「买」到的游戏其实是租的，以及一万五千局井字棋数据里那个反直觉的结论。

## 一、二十年的内存降价，被这一年抹平了

[原帖：Two Decades of Cheaper Memory Vanished in One Brutal Year](https://www.reddit.com/r/technology/comments/1vyazp6/two_decades_of_cheaper_memory_vanished_in_one/)

这条新闻讲的是存储行业的一次剧烈反转：过去二十多年，DRAM 和闪存的单位容量价格几乎是稳定往下走的，装机的人默认「等等就更便宜」。AI 数据中心把 HBM 和高端 DRAM 产能吃掉之后，这条曲线在一年之内被推回到了二十年前的水平。同一天热榜上还有一条亚马逊把硬件价格上调 60% 的新闻，理由也是内存短缺。

真正有意思的是评论区 —— 它自发变成了一面价格墙。几百号人各自报出自己某年某月买某块盘、某套内存花了多少钱，然后贴上今天的价格。这种自下而上的数据比任何行业报告都直观：DDR4 32GB 从 47 美元涨到 190，DDR5 64GB 从 250 涨到 800，2TB 的 990 PRO 从 210 涨到 440，20TB 机械盘从 300 涨到 600 以上。

> "I bought 32GB DDR4 ram in for $47 in late 2024. That same ram was $230 a couple months ago and is now $190."
>
> <cite>— u/TreasuryGregory，<a href="https://www.reddit.com/r/technology/comments/1vyazp6/two_decades_of_cheaper_memory_vanished_in_one/p5we6lv/" target="_blank" rel="noopener">原帖评论</a></cite>

> "…When i got the 4tb, I got 64gb of DDR5 RAM for $250, which is an $800 kit today. The prices today are depressing."
>
> <cite>— u/misterpiggies，<a href="https://www.reddit.com/r/technology/comments/1vyazp6/two_decades_of_cheaper_memory_vanished_in_one/p5wm81g/" target="_blank" rel="noopener">原帖评论</a></cite>

评论里还有两个容易被忽略的细节。一是波及范围超出了很多人的预期 —— 有人以为「我这台五年前的老机器，配件总不至于涨吧」，结果一查同样涨；老平台的 DDR4 因为产线被砍，反而涨得比新品还凶。二是机械硬盘也没能幸免，家庭 NAS 玩家是这轮里最难受的一群人，好几条评论都是「刚收到礼金准备装个 NAS，一看盘价傻了」。

对国内读者来说，这件事的启发大概是：AI 的成本从来不只出现在算力账单上，它会沿着供应链传导到每一个和存储沾边的品类 —— 手机、笔记本、监控设备、云盘定价，甚至你公司的服务器采购预算。如果手上有近期要扩容的计划，「再等等会更便宜」这个持续了二十年的默认假设，眼下大概率不成立。

## 二、九成高管说 AI 没提高生产率，但裁员照旧

[原帖：90% of executives say AI hasn't boosted productivity. Some are still cutting jobs](https://www.reddit.com/r/technology/comments/1vxst1m/90_of_executives_say_ai_hasnt_boosted/)

一份调查显示，九成受访高管承认公司引入 AI 之后并没有看到可量化的生产率提升，但其中相当一部分公司仍在继续裁员。表面上这是一条自相矛盾的新闻，评论区却给出了好几种自洽的解释，而且一种比一种冷。

最尖锐的一条是：裁员和 AI 的因果关系被搞反了。不是 AI 顶替了这些岗位所以裁人，而是为了付得起 AI 的账单所以先裁人，然后押注未来某天 AI 真能顶上。有人接着补了一句，这本质上是拿别人的饭碗做的赌注 —— 赌输了下注的人未必要承担全部代价。

> "They are not cutting jobs because AI is taking over the jobs, they are cutting jobs just to pay for the AI, and hope that one day the AI will be good enough to actually take over the jobs."
>
> <cite>— u/Worldly-Ingenuity843，<a href="https://www.reddit.com/r/technology/comments/1vxst1m/90_of_executives_say_ai_hasnt_boosted/p5rpphz/" target="_blank" rel="noopener">原帖评论</a></cite>

第二条线索是关于议价权的。有人指出企业一边防着工会，一边却在把整个生产环节的依赖集中到两三家 AI 供应商手里 —— 一旦哪天真的九成业务跑在别人的模型上，对方涨价时你连谈判的资格都没有，因为已经没有可以退回去的人了。有位从业者补充说，这不是假想，涨价和限额已经开始了。

> "The hyperscalers already started jacking their prices up and capping token usage a few months ago and it caught a ton of companies off guard."
>
> <cite>— u/NOODL3，<a href="https://www.reddit.com/r/technology/comments/1vxst1m/90_of_executives_say_ai_hasnt_boosted/p5sgnq4/" target="_blank" rel="noopener">原帖评论</a></cite>

还有两个补充视角值得一提。一是有人认为裁员真正的原因是经济不景气，AI 只是一个不会惊动投资人的体面借口；二是有人纠正了一个常见的偷换概念 —— 裁员之后人均利润上升，说明的是盈利能力，不是生产率，产出本身可能压根没变。

我的感受是，这条新闻最有价值的地方不在「AI 是不是泡沫」这种大而无当的判断，而在于它把一个具体的风险摆到了台面上：把关键能力外包给一个还在亏损运营、迟早要涨价的供应商，同时又主动拆掉了自己的替代方案。个人层面其实也一样 —— 如果你的工作方式已经完全依赖某个订阅制工具，那它涨价那天，你的选择空间有多大，值得提前想一想。

## 三、Python 3.16 的复杂度文档，和一个 O(n) 引发的辩论

[原帖：The Python (3.16) docs now have a page detailing the time complexity of operations on built-in types](https://www.reddit.com/r/Python/comments/1vy0ywg/the_python_316_docs_now_have_a_page_detailing_the/)

Python 3.16 的官方文档新增了一页，系统列出了内置类型各种操作的时间复杂度 —— list 的 append、insert，dict 和 set 的查找，等等。这类信息以前散落在 wiki 和各种博客里，现在进了正式文档。有人立刻感慨说 Java 和 C++ STL 的文档几十年前就带着复杂度标注，Python 这一步来得实在有点晚。

然后有人在表里揪出了一行：对 `range` 对象求 `min` / `max` 是 O(n)。这看着像笔误 —— range 由起点、终点、步长三个数定义，最大最小值明明可以直接算出来。实测下来确实是 O(n)，于是讨论转向了「这到底是疏忽还是设计」。

一派认为这就是该修的疏忽：解释器明明能看出参数是个 range，标准库容器理应有特化路径。

> "It does see that it’s dealing with a range object though. This is an oversight, there should be special cases implemented for standard lib containers."
>
> <cite>— u/Schmittfried，<a href="https://www.reddit.com/r/Python/comments/1vy0ywg/the_python_316_docs_now_have_a_page_detailing_the/p5tnaul/" target="_blank" rel="noopener">原帖评论</a></cite>

另一派的反驳很到位：`min` / `max` 的契约是「接受任意可迭代对象」，它看到的只是一个迭代器。要认出 range 就得在每次调用时做类型判断，这个开销会摊到所有调用 min/max 的地方 —— 包括那些完全用不上这个优化的场景。真想通用地解决，得引入 `__min__` / `__max__` 这样的协议，就像 `__abs__` 那样。有人顺着这条思路点破了一个类比：对已排序的 list 求 min 同样是 O(n)，因为它也不知道自己是有序的。

> "The interface for min/max is just an iterable. Anything beyond that you'd need to check for explicitly, with a corresponding cost for everything you call min/max on."
>
> <cite>— u/Brian，<a href="https://www.reddit.com/r/Python/comments/1vy0ywg/the_python_316_docs_now_have_a_page_detailing_the/p5tp3p0/" target="_blank" rel="noopener">原帖评论</a></cite>

顺带一提，还有人指出即使真要算，也没法简单地拿 `stop` 当最大值 —— `range(1, 3, 2)` 的最大值是 1，得考虑步长做取整。当然也有务实派表示自己完全不在乎，O(n) 求 min 对他写的 99.9% 的代码都是可接受的代价。

这场辩论比那页文档本身更有教育意义：它是一个关于「抽象的代价该由谁承担」的标准案例。为少数场景加特化，成本会被摊到所有人身上；不加，则少数场景吃亏。Python 在这类取舍上历来偏向前者的反面，理解这个倾向，比背下复杂度表更有用。

## 四、索尼再次提醒：你买的 PS 游戏不属于你

[原帖：Sony reminds players they don't actually own the PlayStation games they purchased](https://www.reddit.com/r/technology/comments/1vxzt65/sony_reminds_players_they_dont_actually_own_the/)

索尼更新条款，再次明确数字商店里「购买」的游戏是授权而非所有权，账号或授权终止时内容可能失效。这个说法本身不新鲜，但每次被摆到台面上都会重新点燃关于数字所有权的争论。

评论区第一时间把索尼的历史翻了出来 —— 二十年前那场在音乐 CD 里植入 rootkit 的丑闻，被拿来说明这家公司在版权保护上的态度一以贯之。

> "Anyone that was around in the Napster days and when Sony included a rootkit on music CDs should not be surprised by their attitude on this."
>
> <cite>— u/baw3000，<a href="https://www.reddit.com/r/technology/comments/1vxzt65/sony_reminds_players_they_dont_actually_own_the/p5ssmk7/" target="_blank" rel="noopener">原帖评论</a></cite>

更有信息量的是接下来那段公司史。索尼同时拥有硬件部门和唱片公司，硬件那边希望用户把 CD 抓轨随身带着听，音乐那边死守 DRM，两边内耗多年。结果是索尼错过了推出自己那款 iPod 的时间窗口 —— 一家在便携音乐播放器上有 Walkman 这种统治级产品的公司，把 MP3 时代拱手让人，原因是自己左手不让右手做事。

> "They basically lost the timing to release their own Ipod because Sony Music were crazy about DRM and kept fighting their eletronics division."
>
> <cite>— u/Efficient-Session644，<a href="https://www.reddit.com/r/technology/comments/1vxzt65/sony_reminds_players_they_dont_actually_own_the/p5sxoxr/" target="_blank" rel="noopener">原帖评论</a></cite>

讨论后半段扩展到了更普遍的规律：先低价换用户，规模起来后收紧、涨价、降质。有人用 Netflix 从鼓励共享账号到严打共享的转向作类比，也有人反驳说流媒体的紧缩是资本环境变了 —— 便宜钱没了，投资人开始要回报。

对中文读者，这里可以引申的一点是：数字内容的「所有权」在法律上早就不是我们直觉里的那种所有权，而这件事在国内其实更值得警惕，因为音乐、影视、电子书、游戏的下架和授权到期发生得更频繁。真正在意的东西，本地留一份能离线打开的副本，仍然是最朴素也最有效的办法。

## 五、一万五千局井字棋：先手占中间，反而最难赢

[原帖：Win rate by opening square in 15,655 online tic tac toe games](https://www.reddit.com/r/dataisbeautiful/comments/1vy7yhb/oc_win_rate_by_opening_square_in_15655_online_tic/)

有人统计了某个在线井字棋平台上一万五千多局对局的数据，按先手第一步落子位置分组算胜率。结论是：中间格是最热门的开局，胜率却是最低的。

评论区把这个反常识的结果拆得很干净。井字棋是已解游戏，双方都下最优解必然平局，所以胜率高低反映的根本不是棋力，而是「对手犯错的概率」。占中间是理论上最稳的一步，但破解方法也最广为人知 —— 对手大概率知道该怎么应对，于是稳稳走成平局。占角则相反：应对角开局只有一步不会立刻输，不知道的人很容易随手走错。

> "…Against someone who hasn't solved the game, corner is best cause there is only one move that isn't an instant loss. If your opponent doesn't know it, they might randomly lose."
>
> <cite>— u/Inane_newt，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vy7yhb/oc_win_rate_by_opening_square_in_15655_online_tic/p5uz8ho/" target="_blank" rel="noopener">原帖评论</a></cite>

还有一个更妙的观察：井字棋有旋转对称性，四个角在数学上完全等价，但数据里左上角和右下角的胜率差了两成。既然棋盘对称，差异只能来自人 —— 有人猜测习惯从左上开始扫视的新手更容易随手点左上角，于是左上角这一组里堆积了更多菜鸟，把胜率拉了下去。

> "The upper left and bottom right corners are exactly equal to each other but bottom right players win about 20% more often than upper left players."
>
> <cite>— u/WanderingFlumph，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vy7yhb/oc_win_rate_by_opening_square_in_15655_online_tic/p5uqyvc/" target="_blank" rel="noopener">原帖评论</a></cite>

这个小数据集其实是一堂很好的统计课。当理论上完全等价的两个选项在数据上出现系统性差异，答案几乎一定在「选择这个选项的是什么人」里，而不在选项本身 —— 这正是选择偏差最干净的一个演示。放到工作里，A/B 测试、渠道转化率、功能使用率的对比，栽在同一个坑里的次数比想象中多得多。

---

今天就到这里。如果只挑一条带走，我会选内存那条 —— 它是这一整轮 AI 叙事里，少数已经能在你自己的购物车里看到的东西。
