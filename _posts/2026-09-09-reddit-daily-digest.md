---
layout: post
title: "Reddit 每日精选 | 2026.09.09"
headline: "OpenAI 说它解开了千禧难题，一位 NYU 数学家说那是他喂进 Codex 的草稿"
date: 2026-09-09 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "从千禧难题的署名之争到 vibe coding 留下的运维债，今天 Reddit 吵的其实是同一件事：功劳和责任到底该记在谁头上"
summary: "本期五帖：OpenAI 宣布内部模型证明了 Navier-Stokes，NYU 数学家随即公开陈述，说自己一年的草稿全喂进了 Codex，评论区从训练语料的可追溯性一路吵到署名胁迫；加州一座小城终止 Flock 合同拆掉摄像头，回头发现厂商自己又装了回去；r/devops 有人问是不是全行业都在给 AI 生成的基础设施擦屁股；一位 ML 工程师坦白每周只工作二十小时，回复几乎五五开；还有一份六千五百人的卧推数据，顺手戳破了健身论坛的幻觉。"
digest_count: 5
---

今天 Reddit 的主线只有一条，而且它同时出现在 r/MachineLearning、r/technology 和 r/LocalLLaMA 的热榜上：OpenAI 宣布自家模型攻克了一个千禧难题，被点名的数学家当天就挂出了一份公开声明。剩下四帖看似无关，其实都在追问同一个问题——当一段代码、一台摄像头、一份成果的来源变得模糊，账该算在谁头上。最后一帖是个轻松些的收尾，但它给出的教训可能是今天最通用的一条。

## 一、OpenAI 说它解开了千禧难题，数学家说草稿是从自己的 Codex 记录里流出去的

[OpenAI Says It Has Cracked One of Math's Millennium Problems (Navier-Stokes) [N]](https://www.reddit.com/r/MachineLearning/comments/1wavdi7/openal_says_it_has_cracked_one_of_maths/) ／ [OpenAI fought dirty on career-making math problem, says NYU mathematician](https://www.reddit.com/r/technology/comments/1wax3k2/openai_fought_dirty_on_careermaking_math_problem/)

《纽约时报》报道了 OpenAI 的公告，说其内部模型给出了 Navier-Stokes 方程的一个解，几乎在同一时间，NYU 的 Tristan Buckmaster 在个人主页上放出一份声明，另一位作者 Levent Alpöge 供职于 Anthropic。评论区有一条被反复引用的时间线梳理：八月中旬两人在若干相关问题上取得进展（多孔介质、Boussinesq、三维不可压 Euler 的有限时间爆破），并声称对一个与 Navier-Stokes 相关、但并非千禧奖题本身的版本有了证明；九月初 OpenAI 抢先宣布。按声明的说法，OpenAI 提出的两套方案里都要求把 Levent 从作者名单中拿掉，理由是他在 Anthropic 工作。而当 Tristan 追问模型是否训练过、或能否访问他们那一整年扔进 Codex 的草稿时，他得到的答复是模型不查用户数据，再问训练的事就没有下文了。

评论区最扎实的一条线在技术上：OpenAI 官方措辞是「无法排除」由用户使用其产品所派生的去标识化数据帮助改进了模型——而这句话本身就意味着他们说不清某个模型的训练语料到底是什么。有人顺手补了一刀：去标识化（de-identified）和匿名化（anonymised）在 GDPR 这类框架下是两个法律概念，前者恰恰因为可再识别而仍受监管；何况他们知道那篇论文的工作标题，只要在数据集里搜一下就知道在不在。

> "Ignoring that it's pretty awful that they can't tell what the training corpus was for a specific model I think it's a fairly safe bet that the user's work was in that training data."
>
> <cite>— u/SimiKusoni，<a href="https://www.reddit.com/r/MachineLearning/comments/1wavdi7/openal_says_it_has_cracked_one_of_maths/p8ll9sl/" target="_blank" rel="noopener">原帖评论</a></cite>

也有人给出了冷静的反方意见，而且这条反方比控诉更让人后背发凉：单独一条对话落进万亿 token 的训练集里，理论上就是量化噪声，不该对结果有可测量的影响；但如果一家公司同时拥有全世界最强的模型和一个记录着最聪明的人正在琢磨什么的数据库，不把两者连起来才是不合理的。换句话说，真正值得担心的未必是「训练时记住了」，而是有意识地在用户对话上做检索和挖掘。OpenAI 已明确否认了 RAG 那部分指控。

> "A single conversation with the correct answer is essentially quantization noise and should have no measurable effect in any practical scenario where that same problem is involved."
>
> <cite>— u/usefulidiotsavant，<a href="https://www.reddit.com/r/MachineLearning/comments/1wavdi7/openal_says_it_has_cracked_one_of_maths/p8m80za/" target="_blank" rel="noopener">原帖评论</a></cite>

关于动机，两派的推理都值得一读。一派抓住「补偿」这个动作本身做文章：既然你说这是模型在几乎没有人类参与的情况下做出来的，为什么还要给一个你认为毫不相干的人署第一作者？另一派则认为这只是危机公关的理性选择——把当事人拉到同一条船上，成本远低于让一场发布会被争议淹没，公司在自认无过错的官司里照样和解。r/technology 那边还有一条更朴素的观察：OpenAI 显然误判了学者的动机模型，能走到那个位置的人，本来就不是为钱留在学术圈的。

> "In their vast AGI wisdom, OpenAI, the largest acquirer and burner of money in the world, thought that these researchers would sell each other out for money."
>
> <cite>— u/iauu，<a href="https://www.reddit.com/r/technology/comments/1wax3k2/openai_fought_dirty_on_careermaking_math_problem/p8n312l/" target="_blank" rel="noopener">原帖评论</a></cite>

对中文读者，这件事的实用价值不在于站队。一是别把未发表的工作整篇扔进云端助手，尤其是研究生和创业公司的核心方案——不是因为对方一定会偷，而是因为出事之后你没有任何举证手段，连「我的数据在不在训练集里」这个问题对方都答不上来。二是采购环节该盯的条款其实很具体：数据是否用于训练、保留多久、能否事后审计，比任何隐私承诺页都管用。三是 r/LocalLLaMA 的反应最简单直接，也最能说明这类新闻的长期效果——每出一次这样的事，本地部署和开放权重就多一批新用户。

> "Never trust any big AI company to manage your chats. They can use it to train their models whenever they want."
>
> <cite>— u/EndLineTech03，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1wapjaw/openai_alleged_of_stealing_mathematicians_work/p8jtnfm/" target="_blank" rel="noopener">原帖评论</a></cite>

## 二、加州小城拆掉了 Flock 的摄像头，回头发现厂商自己又装了回去

[California city canceled Flock, removed its cameras, then found the company had put some of them back](https://www.reddit.com/r/technology/comments/1wasqy9/california_city_canceled_flock_removed_its/)

标题基本就是全部案情：一座加州城市终止了与车牌识别厂商 Flock 的合作并拆除设备，事后发现其中一部分摄像头被厂商重新装了回去。这条新闻是最近 Flock 连锁反弹里的一环——同一天热榜上还有辛辛那提地区的抵制蔓延，以及一张各城市部署 Axon 摄像头的地图。评论区第一反应不是愤怒，是荒谬感：一家公司在市政和县属公共设施上自行安装设备，量级上和普通市民贴张二手转让告示完全不是一回事，后者是要罚款的。

> "So installing their equipment on public city and county property... Hell, where I live they fine you for putting up yard sale signs."
>
> <cite>— u/williamgman，<a href="https://www.reddit.com/r/technology/comments/1wasqy9/california_city_canceled_flock_removed_its/p8knij2/" target="_blank" rel="noopener">原帖评论</a></cite>

接下来串子跑向了「公司犯法该怎么罚」这个老题目，但这次展开得比平常细。有人提出「企业服刑」：判决期内公司全部利润上缴，管理层若藏匿则个人入狱；有人加码说该没收的是全部营收，立刻被指出那实质上等于强制清算，是完全不同量级的惩罚。最有信息量的其实是关于「罚股东」的那段辩论——美国有超过半数家庭通过基金间接持股，把责任平摊到所有股东身上并不成立，但把它当成「所以谁都不用负责」的理由同样不成立。

> "The majority of shareholders are ordinary people, but the majority of shareholder power is in the hands of a small minority, because equity is not split evenly among shareholders. It makes sense for liability to be proportional to power."
>
> <cite>— u/RSmeep13，<a href="https://www.reddit.com/r/technology/comments/1wasqy9/california_city_canceled_flock_removed_its/p8mzdwo/" target="_blank" rel="noopener">原帖评论</a></cite>

这件事对国内做智慧城市、安防外包的人有个很具体的提醒：合同终止条款里，设备的所有权、拆除责任和拆除后的核验方，往往是最容易被略过的几行字。当摄像头本身由厂商出资安装、靠数据订阅收费时，「设备是我的」这个前提会让退出变得异常麻烦——而它是否真的被拆干净，通常没有第三方去数一遍。

## 三、r/devops：是不是所有人的工作都变成了给 AI 收拾残局

[Vibe coding infra is creating more operational debt than it saves](https://www.reddit.com/r/devops/comments/1wb1qg5/vibe_coding_infra_is_creating_more_operational/)

发帖人问了一个很多人心里有数但没说出口的问题：是不是大家的工作都慢慢变成了清理 AI 生成的代码？他说现在去问开发者某段部署配置是干什么的，得到的回答往往就是一句「AI 说它是对的」。他给出的概括相当刻薄也相当准确——传统的「你构建它，你运维它」正在变成「开发者提示它，AI 猜一个，基础设施团队凌晨三点去查为什么炸了」。

评论区先是一串自嘲，从「我就让 AI 去修 AI 造成的问题，再让 AI 测试」一路接龙，最后落在这条上，而它其实是很多团队测试策略的真实写照：

> "Exactly, I test it. The test is that 8 different developers message me asking why their pipelines are down"
>
> <cite>— u/anto2554，<a href="https://www.reddit.com/r/devops/comments/1wb1qg5/vibe_coding_infra_is_creating_more_operational/p8mqu0s/" target="_blank" rel="noopener">原帖评论</a></cite>

笑完之后有几条实操建议值得抄。最有用的一条是把评审的范围收窄：一个 PR 可能改了五十个文件，但真正碰到基础设施的往往只有一个 Terraform 文件和一个 YAML，把 CI 配置成基础设施变更必须由平台团队批准，评审工作量立刻可控，也能拦住 LLM 顺手给开发环境开一台最贵规格数据库这类事故。另一条来自一个更悲观的场景——有人说自己团队对什么都点通过，评审已经沦为形式；下面的回复给了具体解法：让提交者和评审者都能用几句话说清这次改动碰了哪几行，说不清就是没看，并在一段时间内把评审改成站会后集体做。

> "You need to have reviews and cicd needs to force approval by infrastructure team. Only way you can stop the LLM generating the most expensive SQL instance for a development environment."
>
> <cite>— u/Dr_Passmore，<a href="https://www.reddit.com/r/devops/comments/1wb1qg5/vibe_coding_infra_is_creating_more_operational/p8mlriw/" target="_blank" rel="noopener">原帖评论</a></cite>

我的看法是，问题从来不是 AI 写了基础设施代码，而是「没有人能解释这段代码」的变更被批准合入了——这在 AI 出现之前也是事故的常见成因，只不过以前产出这种代码需要花时间，现在不需要了。所以真正该加固的不是代码生成环节，是「解释义务」：谁提交，谁负责在评审里讲清楚它做了什么。这条规矩不需要新工具，但需要有人愿意在评审里说「我看不懂，先别合」。

## 四、五年 ML 工程师，每周工作二十小时，这是好运还是温水

[How many of you have just coasted in a non-tech behemoth](https://www.reddit.com/r/ExperiencedDevs/comments/1waowvf/how_many_of_you_have_just_coasted_in_a_nontech/)

发帖人在一家非科技的财富 500 强公司做 ML 工程师，五年经验，自称每周实际工作大概二十小时，整个团队都不忙，也没人在意——公司财务健康，但他们做的事不属于核心业务。他说自己反复摇摆：远程、低压力、能遛狗做饭健身当然好，但心里始终不踏实，因为学不到东西，总担心哪天醒来收到 HR 那封没写主题的日历邀请。他后来加了一句编辑：回复大约五五开。

站「别动」那一边的人，给的多是亲身教训，而且相当具体。

> "I left your situation (with amazing flight benefits) on a dead end project with nothing to work on, to join a small business where I now work 70 hours a week with dozens of people constantly badgering me about new feature request and bugs on a daily basis. Do not leave your job."
>
> <cite>— u/ihoopbetter，<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1waowvf/how_many_of_you_have_just_coasted_in_a_nontech/p8jt2m8/" target="_blank" rel="noopener">原帖评论</a></cite>

保险行业的几位组成了自发的「四点下班俱乐部」，说技术老旧、工作无聊，但薪水不错，一到点就回家，想要一份舒服的工作没什么可羞耻的。还有人提醒，能把自己的时间和职业管理到不用玩命加班，本来就是资深工程师的标志之一。串里最妙的一条把这种状态放回了工程本身的价值序列里——曾几何时，工程的最高境界就是那个无事可做的维修工，因为东西压根不坏。

> "There was a time when the pinnacle of engineering was the Maytag Man, the guy who had nothing to do because everything just worked."
>
> <cite>— u/pickle9977，<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1waowvf/how_many_of_you_have_just_coasted_in_a_nontech/p8k7sw7/" target="_blank" rel="noopener">原帖评论</a></cite>

另一边的担忧同样真实：有人说自己就在这种岗位上待久了，一去外面面试，被大厂那套题打回原形，感觉自己重新变回了初级。但即便是这一派，给出的建议也不是辞职，而是「想学新东西就去做个人项目，别因为另一份工作看起来更有趣就离开一份舒服、高薪、轻松的工作」。

中文互联网聊「躺平」常常滑向二元对立，要么是幸存者炫耀，要么是焦虑贩卖。这个串里最值得借鉴的其实是把问题重新表述了一遍：闲不是罪，闲下来的时间被怎么用掉才是。真正危险的信号不是每周只工作二十小时，而是这二十小时之外什么都没发生，于是三年后你的可雇佣性完全绑定在这家公司愿不愿意继续养着这个非核心团队上。

## 五、六千五百人的卧推数据，顺手戳破了健身论坛的幻觉

[[OC] How long it really takes to Bench Press 225 lbs / 100 kg: 6,500 lifters tracked from their first logged session, split by where they started](https://www.reddit.com/r/dataisbeautiful/comments/1wap632/oc_how_long_it_really_takes_to_bench_press_225/)

数据来自一款训练记录 app 从 2021 年 3 月到 2026 年 9 月的日志：约 36.8 万次训练、580 万组，其中 6,500 人至少记录过三次杠铃卧推，4,766 人起步时推不动 225 磅（100 公斤）。作者追踪的是他们第一次真正推起 225 磅的月份，不是估算的最大重量，而是实打实完成的一组。结论比多数人的直觉低得多：起步低于 225 磅的人里，一年内做到的只有 10%，两年内 15%。起点几乎决定一切——起步能推 135 磅以上的人，一年内 22%、三年 42%；起步不到 135 磅的，一年 1%、两年 3%。全部样本中只有 12% 曾推起过 225 磅，超过 315 磅的不到 1%。还有两个数字更值得琢磨：中位数用户记录满一年后，估算最大重量只涨了 7.6 公斤，而 29% 的人一年下来一点没变强。

评论区最有价值的讨论不在训练方法，而在为什么大家的体感和数据差这么远。答案是发言的选择性：会主动报数字的，几乎全是数字好看的那批人。

> "And it goes to show you how wildly skewed online lifting talk is. It's almost exclusively the guys who bench a lot who are VERY quick to throw their numbers out there, which makes it feel like 225 is nothing at all."
>
> <cite>— u/BigMax，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wap632/oc_how_long_it_really_takes_to_bench_press_225/p8kvjyl/" target="_blank" rel="noopener">原帖评论</a></cite>

跑步圈的人立刻表示这套完全适用于自己那边，而且给出了一个很好检验的对照——论坛里的常识水平和你去本地五公里赛现场看到的真实分布，差着一个数量级。

> "Yeah absolutely, reading running forums is hugely discouraging since it's all freaks talking to freaks. They talk about how it took 10 months to get below 6 minute mile pace."
>
> <cite>— u/yumcake，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wap632/oc_how_long_it_really_takes_to_bench_press_225/p8mye9b/" target="_blank" rel="noopener">原帖评论</a></cite>

当然也有人指出这份数据自身的偏差：愿意用 app 逐组记录训练的人，本身就比普通健身者更认真，所以真实人群的比例只会更低；同时统计只计入仍在记录的用户，中途放弃的人被排除在分母之外。也有人搬出通用力量标准表，说 225 磅大致处在中级偏上的位置，未必到「前 1%」那么夸张。

我更在意的是那两个和举铁本身无关的数字：起点决定速度，以及三成人练一年毫无进展。这两条在任何需要长期积累的技能上都成立——外语、写作、算法，都是同一条曲线。而它顺带给出的那个提醒，其实比健身有用得多：任何论坛、任何行业群里的「大家都这个水平吧」，都不是人群分布，而是愿意发言的人自选出来的结果。看到别人晒的数字之前，先想想没晒的那批人有多少。
