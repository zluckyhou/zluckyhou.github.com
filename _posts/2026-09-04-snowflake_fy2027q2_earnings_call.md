---
layout: post
title: Snowflake 2027财年Q2电话会——AI产品贡献了一半的增速加速，CEO称「模型中立」是最大护城河
date: 2026-09-04
categories: [company-research]
tags: [Snowflake, 大公司数据观察]
description: 美东时间9月2日下午2点，Snowflake在发布二季报后召开业绩电话会。CEO Sridhar Ramaswamy在回答Evercore分析师提问时给出了财报里没有的关键拆分——37%的产品收入增速中，加速的那一部分大约一半来自AI产品、一半来自核心平台。管理层还罕见地谈了「模型中立」为什么是护城河、为什么不做前沿大模型、以及公司内部用自家AI产品省下了多少钱。CFO则明确了两个时间表——2028财年Q4实现GAAP盈利，全年只净增334人。
keywords: Snowflake, SNOW, 电话会, 业绩说明会, Sridhar Ramaswamy, Brian Robins, Christian Kleinerman, CoCo, CoWork, Cortex, 模型中立
company: Snowflake
period: FY2027Q2电话会
metric: AI产品贡献了大约一半的收入增速加速
---

美东时间2026年9月2日下午2点（北京时间9月3日凌晨5点），[Snowflake](https://investors.snowflake.com/)在发布2027财年二季报后召开业绩电话会。出席的管理层是CEO **Sridhar Ramaswamy**、CFO **Brian Robins**、产品负责人（EVP of Product）**Christian Kleinerman**，投资者关系负责人Katherine McCracken主持。

财报数字本身已经很漂亮（产品收入14.92亿美元同比增长37%，全年指引上调，详见[财报解读](/blog/2026/09/04/snowflake_fy2027q2_earnings/)）。但这场电话会回答了一个财报没法回答的问题：**这37%的增长，到底有多少是AI带来的？**

# 一、管理层核心表态

## 1. 「AI产品贡献了大约一半的加速」

这是全场信息量最大的一句话。Evercore ISI分析师Kirk Materne直接问：这次的加速，有多少来自新的AI产品，有多少来自核心业务本身的飞轮效应？

Ramaswamy的回答很干脆：

> 「我大致会说是一半一半。我们的AI产品贡献了大约一半的加速。」
>
> （I would roughly call it even. Our AI products contributed approximately half of the acceleration.）

这个表述值得拆开看。Snowflake上一财年末的产品收入增速是30%，本季度是37%，加速了7个百分点。按「一半一半」推算，AI产品大约贡献了3.5个百分点的增速，核心数据平台业务贡献另外3.5个百分点。

**为什么这个回答比一个漂亮的AI收入数字更有价值？** 因为它同时说明了两件事：AI确实在赚钱，但核心业务也没有停滞。市场此前最担心的情形是——公司靠AI故事掩盖数据仓库业务的增长疲软。这个拆分否定了那个假设。

## 2. 「模型中立」被明确定义为竞争优势

UBS分析师Karl Keirstead问了一个尖锐的问题：客户在前沿模型和开源模型之间的行为有变化吗？「模型中立」算不算竞争优势？

Ramaswamy的回答是「绝对算」（absolutely）。他说客户表现出「很强的意愿去切换模型，同时也要优化成本」。

产品负责人Christian Kleinerman补充的这句更具体：

> 「我们从很多客户那里听到，他们曾经对某一家特定的模型公司做出了很大的承诺……而对Snowflake的承诺给了他们那种灵活性。」
>
> （We've heard from many customers that they made large commitments to one specific model company... Whereas commitment to Snowflake gives them that flexibility.）

配合本季度推出的 **Cortex AI Gateway**——按客户自定义的策略把每个任务动态路由到合适的模型——这构成了Snowflake对AI时代的完整叙事：**我不做模型，我做模型的调度层和数据底座。**

## 3. 不做前沿大模型，只做「窄模型」

德意志银行分析师Brad Zelnick问到自研模型Arctic的战略。Kleinerman的回答划清了边界：

> 「我们不是在训练模型去进入前沿模型那一类……我们会继续在Arctic系列里开发那些更具体、更受约束的任务型模型。」
>
> （We're not training models to go get into a frontier type... we continue developing models in the Arctic family for tasks that are more specific, more constrained.）

翻译成大白话：**Snowflake不打算和OpenAI、Anthropic正面竞争，它只做那些跑在自己平台上、专门解决特定任务的小模型。** 这既是能力的诚实认知，也是资本开支的克制——不训前沿模型，就不需要几十亿美元的GPU集群。

## 4. CFO给了两个明确的时间表

CFO Brian Robins在准备好的发言里给出了两个可以直接对表的承诺：

> 「我们仍然按计划在2028财年第四季度实现GAAP盈利。」

以及费用端的克制：

> 「本财年至今，我们净增了334名员工，其中包括来自Observe并购的173人。相比之下，去年同期净增935人。」

他还补充了一条对建模很关键的信息：**90亿美元的剩余履约义务（RPO）中，预计约54%会在未来12个月内确认为收入**——约48.6亿美元。对照60.7亿美元的全年产品收入指引，说明指引里已经有八成左右是有合同支撑的。

# 二、分析师问答里最有信息量的几个问题

## Q1（摩根士丹利 Sanjit Singh）：为什么CoCo是那个「对的捕鼠夹」？

分析师想问的其实是：一个AI助手，凭什么能撑起超出传统商业分析的场景？

Ramaswamy的回答：

> 「AI大幅缩短了数据和价值之间的距离。」

他还提到一个细节：**CoCo里的「成本优化」功能是使用频率排前十的技能。** 这是个很有意思的信号——客户用Snowflake自家的AI助手，来帮自己省Snowflake的钱。Ramaswamy把这解释为建立信任的方式。

在按用量收费的模式下，主动帮客户省钱是反直觉的；但如果省下来的钱被用于跑更多AI工作负载，总账反而更划算。

## Q2（富国银行 Ryan MacWilliams）：AI的加速具体来自哪里？

Ramaswamy给了一个可量化的证据：

> 「新客户达到其采购消费额80%的时间……在最新的客户群里已经明显缩短。这就是AI的力量。」

这句话的含义是：**新签客户从签约到把预付额度用完的周期变短了。** 对按用量收费的公司来说，这直接意味着续约和扩容会更早发生，收入确认更快。这比任何「AI收入X亿美元」的表述都更能说明AI在改变生意的物理特性。

## Q3（RBC Matt Hedberg / 美银 Koji Ikeda）：AI用户比非AI用户多消费多少？

Hedberg问CoCo在知识工作者中的渗透深度。Kleinerman说「我们在几乎每一个职能上都在用CoCo和CoWork」，Robins补充说财务部门的采用率**「几乎接近100%」**，覆盖交易审批、税务、会计、FP&A和资金管理。

但当美银的Koji Ikeda追问「AI采用者相比非采用者的消费提升幅度是多少」时，Ramaswamy拒绝给数字：

> 「目前我们还不准备分享确切的提升数字。」

他只承认，随着采用加深，客户群的行为差异「相当明显」（pretty noticeable）。

**这是本场电话会最大的信息缺口。** 管理层反复强调AI会带动核心平台消费，但拒绝量化。在AI叙事定价的市场里，这个数字迟早要给。

## Q4（花旗 Tyler Radke）：传统SaaS厂商都在接大模型，Snowflake怎么竞争？

Ramaswamy的回答：

> 「拥有用户体验是关键……CoCo和CoWork对我们的未来是根本性的。」

Kleinerman的比喻更好懂：

> 「如果我用三个应用，我不会把数据复制到三个不同的平台里。在Snowflake这样一个中心平台上整合会更容易。」

这实际上是Snowflake对「数据重力」的重申——数据搬家成本极高，谁存着数据谁就有主场优势。

## Q5（摩根大通 Dharmik Jhaveri）：指引上调是核心业务变好了，还是纯靠AI？

CFO Robins的回答：

> 「这既反映了我们在AI产品上看到的强劲表现，也反映了核心业务的底层强度。」

和Ramaswamy的「一半一半」互相印证。

## Q6（巴克莱 Raimo Lenschow）：北美以外的区域表现如何？

Robins：「所有区域都在表现，所有区域都运转得很好。」——这是一句没有信息量的回答，但至少排除了区域性走弱。

# 三、一个容易被忽略的细节：Snowflake自己用AI省了多少钱

Ramaswamy在准备好的发言里给了两个内部使用的数字：

- 市场部用CoCo把搜索优化工作收回内部做，**每年省下40万美元的代理商费用**
- 销售团队自动化处理了**超过12.5万个潜在客户线索**，**70%的首次触达邮件由AI生成**

40万美元对一家年收入60亿美元的公司来说是零头，但这个披露的意义不在金额，而在**它把自己变成了产品的第一个案例研究**。Ramaswamy的原话是「我们把这些洞察直接带给客户」。

# 四、解读：这场电话会说明了什么

**第一，Snowflake找到了一个可信的AI叙事，而且这个叙事不需要它去和OpenAI打仗。** 「模型中立 + 数据治理 + 调度层」这个定位，避开了最烧钱的赛道，同时把大模型的商品化变成自己的优势——模型越同质化，谁能帮客户在模型之间自由切换、控制成本，谁越值钱。

**第二，管理层在用「不给数字」来管理预期。** AI消费提升的量化数据、AI收入的绝对金额，两个最关键的指标都被回避了。乐观的解读是数字还不稳定、不想给市场设锚；谨慎的解读是这些数字还不够好看。

**第三，费用纪律是这次指引双升的真正基础。** 全年净增334人（剔除并购只有161人）对上35%以上的收入增长，这是一个非常极端的杠杆。但它也意味着后续的利润率改善空间正在被提前消耗——你不可能永远不招人。

**最值得盯住的一句话，是Ramaswamy关于「新客户消耗周期缩短」的表述。** 如果这是真的且可持续，它会以一种复利的方式改善Snowflake的每一个指标：收入确认更快、NRR更高、销售效率更高。如果只是最新一批客户的偶然现象，那么37%的增速就更像是一次性的反弹。

下一个财季的产品收入指引是15.88亿到15.93亿美元、增速37%到38%——管理层已经把话说出去了，四季度见分晓。

---

# 数据来源

**一手资料：**

- Snowflake 2027财年第二季度业绩电话会实录（StockAnalysis整理版，2026年9月2日）：[https://stockanalysis.com/stocks/snow/transcripts/681381-q2-2027/](https://stockanalysis.com/stocks/snow/transcripts/681381-q2-2027/)
- Snowflake 2027财年第二季度财报新闻稿（SEC 8-K附件99.1）：[https://www.sec.gov/Archives/edgar/data/1640147/000164014726000033/fy2027q2earnings.htm](https://www.sec.gov/Archives/edgar/data/1640147/000164014726000033/fy2027q2earnings.htm)
- Snowflake投资者关系页面（电话会录音回放）：[https://investors.snowflake.com/](https://investors.snowflake.com/)

**媒体报道（仅用于市场反应）：**

- Seeking Alpha：Snowflake Inc. (SNOW) Q2 2027 Earnings Call Transcript
- Benzinga：Snowflake Q2 2027 Earnings Call, Complete Transcript

*文中管理层引述译自英文实录；括号内为英文原文。标注为「推算」的数字为作者根据公开数据计算所得，非公司披露口径。*
