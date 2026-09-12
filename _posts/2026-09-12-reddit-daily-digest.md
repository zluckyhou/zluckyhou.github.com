---
layout: post
title: "Reddit 每日精选 | 2026.09.12"
headline: "Shopify 用 AI 把 React Native 应用重写成原生，评论区第一个问题是：这笔 token 账单谁付"
date: 2026-09-12 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "当重写代码变得几乎免费，技术选型的理由就开始变得可疑"
summary: "本期五帖：Shopify 宣布从 React Native 回归 Swift 和 Kotlin，评论区吵的不是原生好不好，而是一场由 AI 驱动的重写到底算不算工程决策；Astral 说自己的 CPython 发行版是目前最快的，技术细节扎实，但底下最长的一条回复在担心谁在买下 Python 的基础设施；美国小镇居民在听证会上怒吼「我们没请你们来」，评论区把电费上涨的账算得清清楚楚；交友 App 正在死去，一群人回忆起 2009 年的 OkCupid；最后是一个很妙的元问题——当人们说「X% 的统计数据是现编的」，这个 X 到底是多少。"
digest_count: 5
---

今天这几帖有个共同的暗线：**成本被搬到了看不见的地方**。Shopify 把重写代码的成本交给了 LLM，账单不出现在工程讨论里；数据中心把电网扩容的成本摊给了每一个居民，账单出现在他们的电费单上；交友 App 把孤独感做成了抽卡机制，成本以订阅费的形式按月扣走。剩下两帖轻松一些，一个关于 Python 解释器能有多快，一个关于一句玩笑话能被引用多少次——但也都在讲同一件事：数字是怎么被生产出来的。

## 一、Shopify 从 React Native 退回 Swift 和 Kotlin，理由是 AI 让重写变便宜了

[Shopify is moving from React Native back to Swift and Kotlin](https://www.reddit.com/r/programming/comments/1wd7wmu/shopify_is_moving_from_react_native_back_to_swift/)

Shopify 在 2020 年高调押注 React Native，写过好几篇工程博客论证跨平台的收益；六年后他们宣布反向迁移，把移动端重新写成 Swift 和 Kotlin，官方说法是要「减少抽象层级、更贴近平台」。真正让这帖炸开的不是结论，而是路径——这次迁移主要靠 LLM 完成，也就是说，一份成熟的、人写的代码库，要被换成一份 AI 生成的、用团队并不最熟悉的语言写的代码库。

评论区第一个被顶上来的问题非常朴素：这笔钱到底多少。整篇文章谈论换栈就像换栈是免费的，但大公司调用 API 是按 token 结算的，有人举了同行每天十万美元 LLM 开销的传闻做参照。

> "One thing not mentioned at all is how much their LLM bill is in pure dollars and cents. They talk about converting from one stack to another like it is free."
>
> <cite>— u/khendron，<a href="https://www.reddit.com/r/programming/comments/1wd7wmu/shopify_is_moving_from_react_native_back_to_swift/p94wf88/" target="_blank" rel="noopener">原帖评论</a></cite>

第二条主线更尖锐：官方给的「减少抽象层级」这个理由，被不少做移动端的人认为站不住脚。有人指出 Shopify 的 App 本质上就是个服务端驱动 UI 的壳子，最复杂的部分无非支付、相机、通知，这些在 React Native 上早就是解决过的问题，说需要「更深的平台能力」更像是讲给上级听的说辞。顺着这条线，有人给出了三种猜测：RN 的痛点真的到了忍无可忍、AI 工具在原生语言上更好用、或者只是有人需要一份漂亮的晋升材料——发言者自己押的是第三种。

> "Choosing to move from a mature, hand-written codebase to a fully AI generated app written in languages that aren't the engineers' first language is... certainly a choice"
>
> <cite>— u/chavie，<a href="https://www.reddit.com/r/programming/comments/1wd7wmu/shopify_is_moving_from_react_native_back_to_swift/p942irx/" target="_blank" rel="noopener">原帖评论</a></cite>

「AI 在原生语言上更好用」这个假设，在线程里被相当扎实地反驳了：网上 React 相关的代码数据量远远超过 Swift 和 Kotlin，模型在没有明确指令时甚至会默认往 React 上写；有人从实际体感补充说，语料不足时模型更容易硬编一个答案或者在循环里卡住，这种情况他在原生开发上遇到得比在 JS/RN 上多得多。也有人从相反方向替这个假设辩护——Kotlin 和 Swift 的公开代码里业余项目占比更低，数据质量可能更高——但双方都承认这只是猜测。

我自己的感受是，这帖最值得记下来的不是「原生 vs 跨平台」这个老问题，而是有人随口说的那句：抽象层级是减少了，但代码本身变成了新的抽象——团队没有一行是自己写的。跨平台框架至少是公开的、可读的、能提 issue 的抽象；一份没人真正读过的生成代码是另一种黑箱，而且这种黑箱不会出现在架构图上。当重写的边际成本被压到很低，「要不要重写」就不再是技术问题，而是治理问题：谁来判断这次重写是必要的，判断依据又是什么。

## 二、Astral 说自己的 CPython 是目前最快的，评论区最长的一条在担心别的事

[Astral's python distribution is fast](https://www.reddit.com/r/Python/comments/1wdbhda/astrals_python_distribution_is_fast/)

做出 uv 和 ruff 的 Astral 团队发帖说，他们维护的 python-build-standalone 现在是各大平台上最快的 CPython 发行版：比 Homebrew 的 CPython 快 10%，比官方 3.14 的 Docker 镜像快 18%。原因写得很具体——用较新的 Clang 编译，从而能在解释器里打开尾调用优化，再叠加 PGO、LTO、BOLT，并把 libpython 静态链接进解释器可执行文件。目标也说得很直白：让所有用 uv 的人默认拿到最快的解释器。

技术讨论集中在「为什么 libpython 默认不静态链接」这个点上，答案挺有意思：libpython 存在的意义之一恰恰就是让别的程序动态链接它，静态链接会让二进制变大、依赖的安全补丁必须重新编译，而且如果宿主程序同时链接了系统版本的同一个库，事情会更奇怪。另一条被顶起来的质疑同样务实——合成基准跑出来的 10~18%，在真实项目上还剩多少？楼主的回答很坦率：他只能给出「我们自己用它构建 pyx 的模糊体感」，也很想看到真实世界的证据。

> "You can really see the difference on startup-heavy workflows. … Curious how much of that 10-18% holds up on real projects versus synthetic benchmarks."
>
> <cite>— u/Adventurous-Big-5365，<a href="https://www.reddit.com/r/Python/comments/1wdbhda/astrals_python_distribution_is_fast/p94hisl/" target="_blank" rel="noopener">原帖评论</a></cite>

但线程里字数最多的一支，讨论的完全是另一件事。有人质问这帖算不算广告，进而表达了一种更大的不安：Python 的基础设施正在被拿了风投的公司和它们背后的资本一件件接手。反驳来得也不客气——python-build-standalone 是原作者 Greg Szorc 在 2024 年主动移交给 Astral 的，因为维护工作本来就大部分由他们承担；至于「巨头买下 Python」，有人淡淡提醒：Guido 过去六年在哪上班，你可能不想知道。

> "It's just hard to shake the growing sense that OpenAI and Microsoft are attempting to purchase Python. And it's not for sale."
>
> <cite>— u/me_myself_ai，<a href="https://www.reddit.com/r/Python/comments/1wdbhda/astrals_python_distribution_is_fast/p94qszz/" target="_blank" rel="noopener">原帖评论</a></cite>

这种焦虑不能简单归为被害妄想。uv 确实把 Python 的打包体验提升了一个数量级，这一点连质疑者本人都承认；但一个由单一商业公司提供、且体验好到没有替代品的工具链，本身就是一种依赖。对国内团队来说这件事更值得提前想：现在把 CI 全面切到 uv 是很划算的选择，但同时保留一条能用标准 pip / venv 跑通的路径，成本不高，属于便宜的保险。

## 三、「我们没有请你们来」：美国小镇居民在听证会上把数据中心的电费账算清楚了

[Citizens Rage at Town Hall Over Proposed Nuclear AI Data Center](https://www.reddit.com/r/technology/comments/1wdh2yj/we_did_not_invite_you_citizens_rage_at_town_hall/)

密歇根大学联合洛斯阿拉莫斯国家实验室，要在一个小镇上建大型数据中心，居民说整个过程没人征求过他们的意见，听证会现场直接失控。同一天上榜的还有另一帖，说得克萨斯的共和党人铺开红毯欢迎数据中心，结果自己的选民正在把红毯掀掉——这已经不是零星的邻避事件，而是一条正在成形的政治断层。

评论区最有价值的部分是把「为什么我的电费涨了」拆解得很清楚。涨价来自两块：一是供给端，单个数据中心的用电量可以超过百万户家庭；二是输电端，为了把电送过去，需要新建动辄几亿美元的变电站和线路，而这笔钱是摊到所有用电户头上的。

> "Supply because gigawatts of power are being consumed by these things (one near me is being built that will consume more electricity than 1.3 million homes).. and transmission because substantial infrastructure needs to be built to even deliver the power to those datacenters."
>
> <cite>— u/absentmindedjwc，<a href="https://www.reddit.com/r/technology/comments/1wdh2yj/we_did_not_invite_you_citizens_rage_at_town_hall/p96hzzh/" target="_blank" rel="noopener">原帖评论</a></cite>

还有第三块更隐蔽的成本：地方政府为了招商，往往会给科技公司签下长达十几年甚至几十年的低电价合同。时间一长，发电成本上涨了，但合同锁死的那一方不用多付，差额自然落到没有议价能力的居民身上。也有人给出了这场觉醒的时间线：大多数人在数据中心建到自家后院之前并不关心，而真正让他们生气的是电费和水费翻倍之后才反应过来原因。

> "The cost increase isn't just because they use a lot of power, but because the public is subsidizing Datacenter electricity usage via multi-year, potentially decades-long commitments at lower rates for the tech companies."
>
> <cite>— u/thearctican，<a href="https://www.reddit.com/r/technology/comments/1wdh2yj/we_did_not_invite_you_citizens_rage_at_town_hall/p982ig1/" target="_blank" rel="noopener">原帖评论</a></cite>

值得和另一组数据放在一起看：同一天 r/dataisbeautiful 上有人统计，美国用电量在 2007 到 2021 年间只增长了 0.5%，而此后四年增长了 8.2%——四年增量超过前十四年总和。国内的算力园区大多建在电价低、有专项政策的地区，居民电价受交叉补贴保护，短期内不会出现美国这种直接冲击，但「谁承担电网扩容成本」这个问题在任何国家都不会自动消失，只是账单寄到哪里的区别。

## 四、交友 App 正在死去，评论区集体怀念 2009 年的 OkCupid

[Dating Apps Are Dying](https://www.reddit.com/r/technology/comments/1wd8dnz/dating_apps_are_dying/)

标题是老生常谈，评论区却给出了一份相当完整的死因分析。第一条被顶起来的把产品层面的问题列了个清单：优质对象被锁进付费墙、每划三下就弹一次广告、机器人挂着交友资料引流到 OnlyFans；而每一个号称「我们不一样」的新 App，最后都长成了同一个样子。

> "They started locking good candidates behind paywall, ads every 3 swipes that open up a intrusive link, and on top allow bots to post onlyfan profiles looking to endorse their content behind a dating profile."
>
> <cite>— u/stormblaz，<a href="https://www.reddit.com/r/technology/comments/1wd8dnz/dating_apps_are_dying/p93wp6z/" target="_blank" rel="noopener">原帖评论</a></cite>

为什么「都长成同一个样子」，第二条主线给了结构性解释：绝大多数主流交友 App 都属于 Match Group（Tinder、Hinge 等），Bumble 是少数例外之一。线程里还顺手更正了一轮事实——最初那条说 Tinder 和 Bumble 同属一家的评论其实说错了，被人接力订正，这种自我纠错在 Reddit 上算是最好的部分。垄断之下，产品优化的目标自然从「让你找到人」变成「让你继续划」。

> "Tends to happen when your whole strategy is loot boxing loneliness through a swiping algorithm. I refused to play anymore after that realization."
>
> <cite>— u/Ragegasm，<a href="https://www.reddit.com/r/technology/comments/1wd8dnz/dating_apps_are_dying/p93wrdy/" target="_blank" rel="noopener">原帖评论</a></cite>

「把孤独感做成抽卡」这个说法一针见血：匹配成功是随机奖励，付费能提高中奖率，而用户真正脱单意味着产品失去一个付费用户——激励从根上就是拧的。往下翻，一大片人在怀念 2009 到 2013 年的 OkCupid：长问卷、详细资料、能读到对方怎么想问题，而不是靠九张照片和一句签名。也有当年的女性用户补了另一面：她通过 OkCupid 见过很多聊得来但一见面就明白为什么还单着的人，不过也在那里遇到了共同生活十四年的伴侣。

有意思的是随后一条反驳：那些「见面就露馅」的人至少还在约会，搞砸一次约会是有些人唯一的学习方式，把这条通道关掉，人只会在孤独里越泡越糟。这话放在国内语境同样成立——我们这边的社交产品早已不靠划卡而靠算法推荐和熟人关系链，但「让用户留在平台上」和「让用户过好现实生活」之间的那道裂缝，是完全一样的。

## 五、当人们说「X% 的统计数据是现编的」，X 到底是多少

[What number do people come up with when they say "X% of statistics are made up on the spot"?](https://www.reddit.com/r/dataisbeautiful/comments/1wde23z/oc_what_number_do_people_come_up_with_when_they/)

这是个很讨喜的元问题：既然大家都爱说「某某比例的统计数据是当场编出来的」，那这个比例本身被填成过哪些数字？楼主用 SerpAPI 抓了 183 条相关搜索结果，正则提取出百分比，得到：均值 82.47%，中位数 84%，四分位区间 72.4% 到 88.2%，最小 3%，最大 736%（这个 736% 本身就很说明问题）。

最妙的发现在于众数——88.2%。这个精确到小数点后一位的数字出现频率最高，来源是英国喜剧演员 Vic Reeves，BBC 在 2000 年报道过。也就是说，说出 88.2% 的人绝大多数并不是「当场编」，而是在抄。

> "88.2% is the most commonly used number, Comedian Vic Reeves is reported to have said that and was reported by the BBC in 2000. People using 88.2% are probably not making that number up on the spot but copying it!"
>
> <cite>— u/Stisca（原帖作者），<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wde23z/oc_what_number_do_people_come_up_with_when_they/" target="_blank" rel="noopener">原帖</a></cite>

评论区顺着这个悖论玩得很开心，也有人认真指出标题其实用词不准：这些数字不是被「当场编出来的」，而是同一个估计被反复引用了很多次，真正凭空想出 88.2% 的只有一个人。这个区分不是抬杠——它恰好是虚假信息传播的标准模型：编造只发生一次，之后全是复制，而复制的过程会不断给它加上「大家都这么说」的可信度。

> "Got it. If i wanna lie about a 90% statistic, just present the oppposite at 10 % and im guaranteed to not lie!"
>
> <cite>— u/nameorfeed，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wde23z/oc_what_number_do_people_come_up_with_when_they/p95bbdb/" target="_blank" rel="noopener">原帖评论</a></cite>

把这帖放在最后是有原因的：今天前四帖里的每一个争论，本质上都卡在「这个数字从哪来」——LLM 的账单是多少、10~18% 的提速在真实项目上还剩多少、电费到底涨了几个百分点、Match 到底占了多大市场份额。评论区里最有价值的发言，几乎无一例外是那些追问数字来源的人。88.2% 这个梗提醒我们的是：一个被引用得足够多的数字，看起来会和一个被验证过的数字一模一样。
