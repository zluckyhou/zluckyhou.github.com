---
layout: post
title: "Reddit 每日精选 | 2026.09.13"
headline: "25 位菲尔兹奖得主警告 AI 正在把数学难题当矿挖，评论区最好的比喻是：直升机把你放到山顶，但没人画出上山的路"
date: 2026-09-13 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "当解题变快，出题反而成了稀缺资源"
summary: "本期五帖：25 位菲尔兹奖得主联名警告 AI 在数学研究中的错位，评论区把它讲成了一个关于「好问题是不可再生资源」的故事；两位 AI 安全研究员同一周离开 Anthropic 和 Google，留下一句「房间里没有大人」；一位本地模型玩家实测发现小模型慢了三四倍却更值得用，线程里全是硬核的显存和 prefill 经验；Postman 砍掉团队免费版，评论区顺手开了一场替代品测评；最后是明尼苏达两座太阳能电站在板子下面种野花的故事，底下一位真在电站种草的人算出了钢材账。"
digest_count: 5
---

今天这几帖凑在一起，讲的是同一件事的两面：**快下来的东西，代价会转移到别处去**。AI 让解数学题变快了，于是「提出一个好问题」变成了新的稀缺资源；AI 让产品迭代变快了，于是刹车的人先被挤出房间；反过来，一位本地模型玩家宁可让工作流慢三四倍，换来的是不用回头检查每一步；Postman 让协作变方便，几年后把方便本身变成了订阅项；而在明尼苏达的太阳能电站里，有人发现只要把发电和生态这两件事慢慢做在同一块地上，蜜蜂会自己回来。

## 一、25 位菲尔兹奖得主联名警告：AI 正在把数学的「好问题」当矿挖

[A Severe Misalignment of AI in Mathematics (Declaration by 25 Fields Medalists) \[D\]](https://www.reddit.com/r/MachineLearning/comments/1wea1t7/a_severe_misalignment_of_ai_in_mathematics/)

25 位菲尔兹奖得主签了一份声明，主要写给数学界，核心担忧不是「AI 会不会取代数学家」这种老问题，而是一个更具体的机制错位：当解决著名难题成为一个可以被工具批量冲击的 KPI，整个领域的激励结构会变形。发到 r/MachineLearning 之后，发帖人特意问了一句——这套逻辑是不是也适用于 AI/ML 社区自己。

评论区最快被顶上来的框架是古德哈特定律：解开大问题原本是理解力的副产品，是一种结果指标；一旦它变成待勾选的目标，过程就可以被绕过。有人把陶哲轩那条讨论的要点梳理了出来：难题池正在被以不可再生的方式开采，而真正稀缺的从来不是解，是「判断哪个问题值得做」这件事——那需要长期的历史品味，不是算力。顺着这条线还引出一个挺黑的推论：以后想靠一个问题成长的数学家，可能会倾向于藏着不说，怕别人拿工具直接把它铲平。

> "It also creates a perverse incentive where mathematicians trying to grow their understanding will want to avoid sharing the problems they are working on in fear of someone who merely wants to solve the problem siccing AI tools on it."
>
> <cite>— u/I-grok-god，<a href="https://www.reddit.com/r/MachineLearning/comments/1wea1t7/a_severe_misalignment_of_ai_in_mathematics/p9d08um/" target="_blank" rel="noopener">原帖评论</a></cite>

线程里最好的一个比喻来自工程与数学的对比：工程看的是最终产品，数学看的是你为了到某处而顺路测绘出的那片地形。直升机把你放在山顶，峰是登了，但小路、折返点、周围的山谷没人画进地图——而数学的进展恰恰来自那些为了找路而不得不四处乱走的过程。

> "Engineering is about the final product. Math is about the territory you find and map while trying to get somewhere else."
>
> <cite>— u/ninjasaid13，<a href="https://www.reddit.com/r/MachineLearning/comments/1wea1t7/a_severe_misalignment_of_ai_in_mathematics/p9gazr2/" target="_blank" rel="noopener">原帖评论</a></cite>

当然反方也不弱。有人直接问：既然缺新问题，为什么不能让 AI 自己提问题？也有人指出第一条论证本身站不住——按这个逻辑，历史上每一个被解开的问题都不该再养出新一代数学家，可事实并非如此。还有一条角度更冷：写作者、翻译、设计师、UX 工程师这些行当，喊「我的工作被重构了」已经喊了好几年，而当时不少推动模型进步的人觉得 AI 不会轮到自己头上——现在数学家开始写联名信，时间上确实晚了一点。

对中文读者，我觉得这份声明的可搬运部分不在数学。把「难题」换成「工单」、「需求」、「面试题」、「代码题」，机制完全一样：当解法可以被批量生产，组织里唯一还在增值的能力就是判断什么值得做。一个团队如果所有人都在高速交付、没人负责挑题，那它的产出会在某个季度突然变得没有方向——而这一步是看不出来的，因为交付数字一直很好看。

## 二、两位 AI 安全研究员同一周离职：「房间里没有大人」

[Two AI researchers leave Anthropic and Google over safety concerns: 'There are no adults in the room'](https://www.reddit.com/r/technology/comments/1wenpto/two_ai_researchers_leave_anthropic_and_google/)

两位做 AI 安全的研究员在同一周分别离开了 Anthropic 和 Google，理由指向同一件事：安全工作在内部竞争中输给了发布节奏。「房间里没有大人」这句话被拎成了标题，也顺理成章成了评论区的主线。

线程里最有价值的不是吐槽，是一位从业者把这件事放回了行业时间线：这个剧本 2024 年在 OpenAI 演过一遍，超级对齐团队成立不到一年就解散，Ilya Sutskever 和 Jan Leike 离开时的抱怨与今天几乎一字不差；真正不同的地方在于，这次是两家实验室在同一周内发生，指向的就不是某一家的文化问题，而是整个行业当下的压力水位。这位还补了一句挺敏锐的观察：值得盯着看这两人会不会再开一家公司——毕竟 Anthropic 本身就是这么诞生的。

> "What's different this time is it's happening at two labs in the same week instead of one, which says something about the industry wide pressure right now, not just one company's culture."
>
> <cite>— u/alaattincagil，<a href="https://www.reddit.com/r/technology/comments/1wenpto/two_ai_researchers_leave_anthropic_and_google/p9fbkov/" target="_blank" rel="noopener">原帖评论</a></cite>

另一条我很喜欢的是有人从自身经历拆解「大人」这个幻觉：他 25 岁加入一家后来成了独角兽的公司，公司只有七十五人的时候，他仍然确信某个房间里坐着一群知道自己在干什么的成年人，因为看起来别人都不知道。后来他因为跟管理层争执被打上「肯干活但不是严肃的人」的标签，而他之所以能提出反对意见，只是因为他清楚产品和运维在地面上是什么样、什么可行什么不可行；而决策层的激励是让下个季度的预测好看。他离开之后，他说过的话大半应验了。还有一条把这个机制说得更短：

> "The adults are either pushed out or not even hired."
>
> <cite>— u/coconutpiecrust，<a href="https://www.reddit.com/r/technology/comments/1wenpto/two_ai_researchers_leave_anthropic_and_google/p9fsupg/" target="_blank" rel="noopener">原帖评论</a></cite>

这帖和第一帖其实是同一个问题的组织版：稀缺的从来不是能力，而是「有人被允许说慢一点」。融资规模越大，赢家通吃的压力越高，能承担刹车角色的人就越少——不是因为他们不存在，而是因为这个位置在考核表上不产出任何数字。对国内团队也一样成立：如果一个组织里唯一能拿到资源的叙事是「更快上线」，那么所谓的质量守门人早晚会变成一个挂名岗位。

## 三、本地模型玩家的反常识结论：慢三四倍的 27B，比更大的 MoE 更值得用

[3.8-27B has ruined 3.5/3.6-35B's for me. It's just *absurdly* superior.](https://www.reddit.com/r/LocalLLaMA/comments/1we8tl1/3827b_has_ruined_353635bs_for_me_its_just/)

发帖人用一台 M4 Pro 48GB 做应用科学类的实际工作——工作流设计、数据管线、结果分析、报告撰写到发布——拿五个做过的老项目从头复现了一遍，用来横向比较模型。结论挺反直觉：那个稠密的 27B 模型让整体挂钟时间变成了三到四倍，但细节可靠性高到让他愿意认这个账。

> "5 projects I did in the past replicated from start to finish. 3x to 4x more total wall time."
>
> <cite>— u/JLeonsarmiento（原帖作者），<a href="https://www.reddit.com/r/LocalLLaMA/comments/1we8tl1/3827b_has_ruined_353635bs_for_me_its_just/" target="_blank" rel="noopener">原帖评论</a></cite>

他给出的量化对比比「感觉更好」扎实：闭源那档和这个 27B 之间的差距，明显小于这个 27B 和一众 35B-A3B 稀疏模型之间的差距；同时它在同等 effort 设置下还少花两三成 token、占用更少内存，所以实际能做完的事反而更多——不会撞上上下文压缩和各种限额。线程里立刻有人把这条经验压缩成了一句俚语式的结论：稠密模型更可靠。

线程往下走就变成了纯硬核经验交换，而且有个共识值得单独拎出来：**决定体验的是 prefill 而不是 decode**。发帖人的场景是模型得先读完一堆文件再开始干活，所以他真正在意的指标是 prefill 速度（他的 27B 大约 100 t/s，生成 20 到 25 t/s）；另一位用 5060 Ti 16GB + 64GB 内存的人 prefill 只有 150 t/s，被评价为几乎不可用。

> "damn, slow prefill is just more painful than slow decode"
>
> <cite>— u/russlixx，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1we8tl1/3827b_has_ruined_353635bs_for_me_its_just/p9d8tp4/" target="_blank" rel="noopener">原帖评论</a></cite>

顺着这条线，有人贴出了完整的 llama-server 启动参数，包括把稠密层和视觉层放 GPU、其余留在内存或磁盘、KV cache 用 q8_0、256k 上下文的配置，实测 prompt 处理约 400 t/s、生成约 20 t/s，并且明确说自己宁可用 zram 也不动 swap——「我爱惜我的固态」。这种把取舍讲清楚的回复，比任何跑分表都有用。

> "No swap, I value my SSD (but I have a small 4 GB zram). Prompt processing was ~400 t/s, token generation ~20 t/s."
>
> <cite>— u/gammalsvenska，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1we8tl1/3827b_has_ruined_353635bs_for_me_its_just/p9cww2o/" target="_blank" rel="noopener">原帖评论</a></cite>

我的延伸想法是：本地模型社区已经先于大厂 benchmark 一步，找到了更贴近真实使用的评价方式——不是单轮回答的质量，而是「跑完一整个项目要返工几次」。慢三四倍但不用回头检查，和快但每一步都得盯着，前者的总成本可能低得多。这个账在企业里同样成立，只是很少有人这么算。

## 四、Postman 砍掉团队免费版，评论区自发开了一场替代品测评

[Postman killed the Free plan for teams in March 2026 - now only limited to a single user.](https://www.reddit.com/r/technology/comments/1we9lxj/postman_killed_the_free_plan_for_teams_in_march/)

Postman 把团队免费版关掉了，免费档只剩单人可用。这类消息本身没什么新意——SaaS 工具养熟了用户再收网是标准剧本——有意思的是评论区几乎没人停留在生气上，而是迅速变成了一份可用的迁移清单。

主线诉求很一致：想要一个不臃肿的开源替代品，而且试过几个都嫌在大 JSON 载荷上不稳。

> "I would love a better, open source alternative to postman. … Postman is just so bloated and full of crap these days."
>
> <cite>— u/Syrairc，<a href="https://www.reddit.com/r/technology/comments/1we9lxj/postman_killed_the_free_plan_for_teams_in_march/p9bwe1p/" target="_blank" rel="noopener">原帖评论</a></cite>

被提名最多的是 Bruno，好几位说已经整团队迁过去、需求全覆盖；还有人补了个八卦式的背景——Bruno 的作者本身就是从 Postman 出来的。Yaak、Hoppscotch、Scalar 也各有人推，Hoppscotch 被指云同步不稳。

> "Bruno is made by people who left postman FYI."
>
> <cite>— u/altrdgenetics，<a href="https://www.reddit.com/r/technology/comments/1we9lxj/postman_killed_the_free_plan_for_teams_in_march/p9ci0ns/" target="_blank" rel="noopener">原帖评论</a></cite>

难得的是反对意见也很具体，没有停在「开源万岁」：Bruno 把外部密钥管理放进了订阅档，VS Code 扩展多年不支持 OAuth（有人干脆自己写了个兼容 Bruno 集合格式的扩展）；多环境场景下 Bruno 用起来很痛苦，被形容为「还停在 Postman 十五年前的位置」。当然也有最硬核的那派：回去用 curl、grep 和 jq。

> "If you use multiple environments, then Bruno becomes a pain to deal with. Basically it is still where Postman was 15 years ago."
>
> <cite>— u/WentThisWayInsteadOf，<a href="https://www.reddit.com/r/technology/comments/1we9lxj/postman_killed_the_free_plan_for_teams_in_march/p9f4jow/" target="_blank" rel="noopener">原帖评论</a></cite>

值得记的一点是：这轮讨论里没有人再对「免费额度会被收回」感到意外，大家默认的判断标准已经变成了「我的东西能不能带走」。Bruno 之所以是首选，很大程度上是因为它把集合存成仓库里的纯文本文件——所以才会有人能另写一个 VS Code 扩展去读同样的格式。选工具时先看数据格式是否开放，比看功能列表更能决定三年后的处境。

## 五、太阳能板下面种野花，五年后蜜蜂多了二十倍——以及一位从业者算的钢材账

[Two Minnesota solar farms planted native grasses and wildflowers beneath their panels](https://www.reddit.com/r/UpliftingNews/comments/1weaaju/two_minnesota_solar_farms_planted_native_grasses/)

明尼苏达两座太阳能电站在板子底下种了原生禾草和野花，五年后开花植物种类增加到七倍，原生蜂数量增长二十多倍，昆虫总量翻了三倍，连旁边大豆田的访花蜜蜂都变多了。帖子本身是好消息，评论区把它扩展成了一场关于「同一块地能不能用两次」的讨论。

最受欢迎的延伸是把板子架到别处：运河上方能减少蒸发，人行道和自行车道上方能顺带遮阳，停车场更是现成的大片硬化地表——有人拿出了美国停车场总面积约等于一个比利时的数据（这条后来跑偏成了一串玩笑）。也有人补了个农学细节：不少植物其实并不喜欢全日照，半遮阴对某些物种反而更好，所以「板子下面还能长好」不是妥协，是匹配。

而线程里最实在的一条来自一位真的在太阳能电站做植被养护的人，他把架高方案为什么推不动讲清楚了——不是理念问题，是钢材用量随高度非线性增长。

> "And the amount of steel you need isn't linear - if a 5 ft post weighs 40 lbs, a 10 ft post weighs 200 lbs (or something like that, I do the vegetation on solar farms, I talk with the engineers in passing)."
>
> <cite>— u/bigfunben，<a href="https://www.reddit.com/r/UpliftingNews/comments/1weaaju/two_minnesota_solar_farms_planted_native_grasses/p9dfqkg/" target="_blank" rel="noopener">原帖评论</a></cite>

停车场方案被算得更细：商业租约通常一次只签十年，而太阳能项目要二十到三十年才能回本，期限根本对不上；再加上车辆会撞立柱、卡车会撞顶棚，结构必须加重，加重又会吃掉车位面积。这类约束不写在任何宣传稿里，但决定了哪种方案真的会被建。

> "Most commercial leases are only 10 years at a time and a solar farm needs 20-30 years to recover costs / profit."
>
> <cite>— u/SporesM0ldsandFungus，<a href="https://www.reddit.com/r/UpliftingNews/comments/1weaaju/two_minnesota_solar_farms_planted_native_grasses/p9dhwcn/" target="_blank" rel="noopener">原帖评论</a></cite>

这帖能放在今天这份精选的最后，是因为它提供了一个反例：种野花这件事之所以成立，恰恰因为没人急着优化它——从播种到蜜蜂回来是五年，任何按季度考核的指标都抓不住这个过程。前面四帖讲的都是加速带来的隐性成本，这一帖讲的是慢变量的复利。对做技术的人也一样：那些五年后才显现收益的事（文档、基础设施、把数据格式留成开放的），永远排不进这个季度的优先级，但它们决定了五年后你手上还剩什么。
