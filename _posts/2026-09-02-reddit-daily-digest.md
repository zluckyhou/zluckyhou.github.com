---
layout: post
title: "Reddit 每日精选 | 2026.09.02"
headline: "AI 把生产端提速了，卡住的全是负责审查的那批人"
date: 2026-09-02 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "内核维护者被 AI 挖出的漏洞淹没，DevOps 被 AI 写的 Terraform 淹没，同一个故事讲了两遍"
summary: "本期五帖：Linux 内核每版 CVE 逼近两千条，维护者称自己被彻底压垮；一位 SRE 发帖问「是不是只有我们这样」，AI 提速开发之后基础设施团队成了新瓶颈；mold 链接器宣布用 Rust 重写，评论区在追问这是不是 AI 干的；一张阅读量分布图揭示一成人读掉了全国一半的书；还有一条被 AI 省下的 1800 美元修车费。"
digest_count: 5
---

今天翻热榜，有两帖凑在一起像是同一个故事的两个版本：AI 把「产出」这件事的成本压到很低，于是所有压力都堆到了下游那个必须逐条看完的人身上——一边是 Linux 内核维护者面对每版近两千条 CVE，一边是 DevOps 团队面对开发同事用 AI 生成的 Terraform PR。剩下三帖分别聊了一次 Rust 重写、一张关于阅读的分布图，和一次挺具体的 AI 使用体验。

## 一、内核维护者被 AI 挖出来的漏洞淹了

[Linux kernel nears record 2,000 vulnerabilities per release as AI bug hunters scour 40 million lines of code](https://www.reddit.com/r/technology/comments/1w4dj6h/linux_kernel_nears_record_2000_vulnerabilities/)

报道说，AI 驱动的漏洞挖掘工具正在把四千万行内核代码翻个底朝天，结果是每个发布版本关联的 CVE 数量逼近两千条的历史高位，而维护者的原话是自己被彻底压垮了。数字很吓人，但热榜上真正值得看的是评论区对这个数字的拆解。

一位自称做安全的用户给出了关键的限定条件：这些漏洞里相当一部分要求系统已经被攻陷才谈得上利用，所以「内核是个筛子」的结论并不成立——但他也补了一句，前提条件苛刻不等于没用，攻击者照样可以拿它把已有的入侵往前推一步。

> "Most of these vulnerabilities are only vulnerabilities when the system is already compromised. They still need to be addressed, but it isn't Swiss cheese."
>
> <cite>— u/TOGFIAVDF，<a href="https://www.reddit.com/r/technology/comments/1w4dj6h/linux_kernel_nears_record_2000_vulnerabilities/p76zzni/" target="_blank" rel="noopener">原帖评论</a></cite>

顺着这条往下，有人点出了「压垮」二字的真实来源——不是修，是分诊。在一条报告被判定成低危之前，它在流程上和高危没有区别：

> "They have to classify, assess the amount of work and prioritize thousands of CVE notices. And until it has been classified, everything is urgent."
>
> <cite>— u/silversurger，<a href="https://www.reddit.com/r/technology/comments/1w4dj6h/linux_kernel_nears_record_2000_vulnerabilities/p77qty3/" target="_blank" rel="noopener">原帖评论</a></cite>

也有人不同意「大多是纸老虎」的判断，理由是模型不光会单点找洞，还擅长把几个不痛不痒的小问题串成一条像样的利用链——这是过去人工挖洞时最费时间的部分。另有人回忆起前几年 xz 后门事件，那次差点得手靠的正是一个长期独自扛库的维护者累到需要帮手。

我的看法是：发现漏洞的边际成本被 AI 打到接近零，但确认、定级、修复、回归的成本一点没降，中间那道人工闸门就成了唯一的瓶颈。这对国内团队的直接启示是，别再拿「本季度扫出多少条问题」当安全 KPI——扫描器一升级这个数字就能翻倍，真正该衡量的是从报告到关闭的周转时间，以及有多少条最终被判定为真问题。

## 二、AI 提速了开发，瓶颈整个搬到了 DevOps 身上

[Anyone else seeing AI make DevOps/infra the bottleneck?](https://www.reddit.com/r/devops/comments/1w42bxs/anyone_else_seeing_ai_make_devopsinfra_the/)

发帖人所在的公司环境是 EKS 加百分之百 Terraform 管理，还同时服务多个业务实体。过去一年公司大力推进 AI 辅助开发、缩减了研发人数，同时要求开发者「借助 AI 成为全栈」，自己动手改基础设施。他说理论上他举双手赞成，实际结果却是灾难：团队被开发者用 AI 生成的基础设施 PR 淹没，那些 Terraform 乍看合理，放进整个系统里看往往问题严重，于是 DevOps 的时间全花在审查、找茬、解释 IAM 和网络怎么串起来，然后等下一版 AI 生成的 PR。

他观察到的那个不对称，是全帖最扎实的一句话——AI 极擅长让本来就懂软件的人写出更多软件，却没法让一个没有基础设施经验的人突然读懂一套大型生产环境：

> "AI seems extremely good at helping someone who understands software write more software. It seems much less capable of allowing someone without infrastructure experience to suddenly understand a large production environment."
>
> <cite>— u/FaithlessnessEqual44（原帖作者），<a href="https://www.reddit.com/r/devops/comments/1w42bxs/anyone_else_seeing_ai_make_devopsinfra_the/" target="_blank" rel="noopener">原帖</a></cite>

评论区最高赞的回应没有安慰他，而是直接指出「百分之百 Terraform」本身可能就是病因。有人说他们这几年一直在缩小 Terraform 的暴露面，把开发者需要碰 TF 的地方逐个换成 Kubernetes CRD，最后开发者能自助完成的事，基础设施团队连 PR 都收不到：

> "We've wrapped the infra in such a way that there's only a few knobs to turn. This allows things to be a lot more self-service. Infra doesn't even get PRs for a lot of this…"
>
> <cite>— u/SuperQue，<a href="https://www.reddit.com/r/devops/comments/1w42bxs/anyone_else_seeing_ai_make_devopsinfra_the/p74hrev/" target="_blank" rel="noopener">原帖评论</a></cite>

另一位说他们在 LLM 出现之前就用「有主见的自助式 IaC」解决了这个问题：把所有基础设施能力包成一套接口严格的东西交给开发者，平台团队只在出故障时介入，而且大多是用户操作失误。这条底下追问细节的人排成了队，他自己都被问得有点招架不住，说要专门写篇文章讲。也有人泼冷水：有些资源（比如受七年留存和合规锁约束的对象存储）天然要比使用它的工作负载活得久，这类东西塞不进自助模型里。

我觉得这帖比很多「AI 会不会取代程序员」的讨论有价值得多，因为它把问题落到了一个可操作的位置：AI 提高的是「生成变更」的速度，而组织能安全吸收变更的速度是另一条独立的曲线，两条线一旦拉开差距，中间就会长出一个人肉队列。缓解办法不是招更多人去审 PR，而是把审查转移到设计期——用只暴露几个旋钮的自助接口，让错误的写法根本表达不出来。这个思路对国内正在推「AI 提效」的团队同样成立：先问自己下游有没有一道靠人扛的闸门，再谈提效比例。

## 三、mold 要用 Rust 重写，评论区在追问是不是 AI 写的

[Rui Ueyama: 「We are rewriting the mold linker in Rust」](https://www.reddit.com/r/programming/comments/1w45ety/rui_ueyama_we_are_rewriting_the_mold_linker_in/)

mold 是近年最快的链接器之一，作者 Rui Ueyama 宣布正在用 Rust 重写并补上 linker script 支持，目标是让 mold 能链接 GNU ld 能链接的几乎一切，包括内核和嵌入式程序，这将是 mold 3.0。动机很明确：推动 Linux 发行版把默认链接器换成 mold。有位用户把作者在推特上的一串问答整理进了评论区，其中一条澄清很关键——这不是推倒重来，而是把现有实现翻译过去：

> "It's not a rewrite from scratch. We're translating the existing implementation into Rust."
>
> <cite>— u/Newfoldergames（转录原作者推文），<a href="https://www.reddit.com/r/programming/comments/1w45ety/rui_ueyama_we_are_rewriting_the_mold_linker_in/p759nki/" target="_blank" rel="noopener">原帖评论</a></cite>

真正引爆讨论的是作者顺口说的另一句：如今重写已经不算太难了。评论区立刻有人接话说这其实就是一次 AI 重写，只是说得比较含蓄。围绕「LLM 到底适不适合干这活」立刻分成两派，支持方的论据挺具体——Rust 编译器足够啰嗦挑剔、设计范式又足够固定，反倒特别适合模型：

> "Rust having an incredibly pedantic and verbose compiler and very opinionated design patterns means that LLMs work very well in it."
>
> <cite>— u/SharkBaitDLS，<a href="https://www.reddit.com/r/programming/comments/1w45ety/rui_ueyama_we_are_rewriting_the_mold_linker_in/p75j67g/" target="_blank" rel="noopener">原帖评论</a></cite>

反方的经验也不含糊，有人说自己用模型写 Rust 一路踩坑，尤其是 async Rust，模型张嘴就编。还有人把话题拉回工程常识：这种规模的翻译式重写，真正的护城河是单元测试覆盖率——紧接着就被人调侃，「测试覆盖得足够全的代码库，此刻在场吗？」另有几位在争论可移植性，认为 Rust 在冷门架构上的支持还不足以承担系统默认链接器；反驳则是发行版早就在发 Rust 写的工具，受影响的只剩下停止维护十几年的非官方移植。

值得一说的是「翻译」和「重写」的区别：逐段翻译有现成的行为作参照物，可以拿旧实现当 oracle 做差分测试，这正是 LLM 最能发挥又最容易被验证的场景；而白纸重写没有这层保险。国内不少团队现在也在琢磨用模型做 C++ 转 Rust、Java 转 Kotlin 之类的迁移，能不能建立起「旧实现即测试基准」的闭环，大概是这类项目成败的分水岭。

## 四、四成美国人一年没读完一本书，一成人读掉了全国一半

[[OC] 40% of Americans read zero books last year. The top 10% account for half of all the books read in the country.](https://www.reddit.com/r/dataisbeautiful/comments/1w4ckm2/oc_40_of_americans_read_zero_books_last_year_the/)

发帖人做的这张图说：去年每十个美国成年人里有四个没读完一本书，而大约一成人读了二十五本以上，这一小撮人贡献了全国大约一半的阅读量。作者补充说统计口径包含有声书，问卷问的是「读过或听过」，另外读书的人里最多的是悬疑犯罪类。

评论区没有停留在「现代人不读书了」的感慨上，反而先质疑起自己的直觉。有人说自己一年读六到九本就觉得像个异类，周围几乎没人读书；马上有人指出这里有观察偏差——大多数人根本不聊阅读，你身边的读者可能只是没露面：

> "…the reality is that most people don't talk about reading, so a lot of readers in your circle might just be flying under the radar :)"
>
> <cite>— u/Baraga91，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1w4ckm2/oc_40_of_americans_read_zero_books_last_year_the/p76i3cf/" target="_blank" rel="noopener">原帖评论</a></cite>

有人反驳说读书的人明明很爱互相推荐，底下的回应把这个偏差描述得更精确：你确实爱推荐，但你几乎只会跟已知读书的人聊书，于是永远统计不到那些沉默的读者。

> "It’s true that readers love to share recommendations, but I’m willing to bet you rarely talk about books with people unless you already know they read."
>
> <cite>— u/agb2022，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1w4ckm2/oc_40_of_americans_read_zero_books_last_year_the/p78xa5o/" target="_blank" rel="noopener">原帖评论</a></cite>

另一条被顶起来的质疑冲着数据本身去：这份调查来自 YouGov，样本是自选加入的在线面板，本身就偏政治与流行文化人群，用它推全国阅读量得打折扣。还有人指出统计窗口的问题——不少人是「一年不碰书，然后一个月读完一整个系列」的脉冲式读者，抽样落在哪个月，结论能差出好几倍。

这几条加起来其实是一堂很好的数据素养课：一个看着刺眼的分布，可能同时受到样本自选、时间窗口、口径（含不含有声书）三重影响，而围观者的「我身边没人读书」又是另一重幸存者偏差。中文互联网上每年也会流传各种「人均阅读量」的数字，下次看到不妨先问一句问卷原题是怎么问的。至于那个二八分布本身，倒不算意外——它和视频、游戏、播客的消费结构长得几乎一样，重度用户撑起大盘从来是常态。

## 五、一条 1800 美元的修车报价，和一个只是「帮你问对问题」的 AI

[ChatGPT saved me $1800.](https://www.reddit.com/r/ChatGPT/comments/1w4867a/chatgpt_saved_me_1800/)

发帖人的车亮了故障灯，4S 店报价 1800 美元换排气歧管。他把报价截图丢给 ChatGPT，得到的建议不是「你被坑了」，而是一套具体动作：先问清楚到底坏在哪，然后请店里给丰田总部发邮件申请 Goodwill Warranty Assistance，理由是这个部件才超保三千英里。最后厂家全额承担了费用。他自己说，全程只花了十分钟。

最高赞的评论精准地指出了这次「AI 胜利」的性质——它没有诊断汽车，它帮你问对了问题：

> "This is the kind of AI win I like: it didn’t diagnose the car, it helped you ask the right question. Ten minutes to avoid an $1,800 anxiety tax is huge."
>
> <cite>— u/eggyboy577，<a href="https://www.reddit.com/r/ChatGPT/comments/1w4867a/chatgpt_saved_me_1800/p75jr23/" target="_blank" rel="noopener">原帖评论</a></cite>

原帖作者自己那段自白，其实比省下的钱更有信息量：他说自己是个社恐，习惯把麻烦事压下去或者花钱快速了结，而不是老老实实去问一句。

> "I'm a bundle of social anxiety and tend to push things under the rug or pay to make them go away quickly instead of doing the work and simply asking."
>
> <cite>— u/thechadwicked（原帖作者），<a href="https://www.reddit.com/r/ChatGPT/comments/1w4867a/chatgpt_saved_me_1800/" target="_blank" rel="noopener">原帖</a></cite>

评论区顺着这条线滚出了一大串类似经历：有人在亲人遭遇车祸去世后的混乱里，靠 AI 列出了接下来几天要做的事——联系警方、通知保险、找殡仪馆、对接法医、取回遗物，事后又用它把法医报告里的医学术语翻译成家人能听懂的话；有人在处理遗产时靠它发现了年金合同里「可能需要退回多付款项」的小字条款；也有癌症患者说 AI 提示的血栓风险让她坚持要求做超声，结果确有其事。当然反对的声音也在：有人用荷兰语连发两条，说这些不过是常识，殡葬从业者早就能告诉你，为此浪费电和水去问 AI 不值，而且这种依赖会磨钝你自己的思考。

我更认同最高赞那条的定性。这些故事里 AI 扮演的都不是专家，而是一个在你慌乱、悲伤或者不好意思开口的时刻，替你把流程拆成下一步该做什么的角色——真正的价值不在知识，而在于降低了「开口去问」的心理门槛。这个用法对中文场景一样适用：医保报销、保修条款、租房押金、劳动仲裁，很多钱不是省不下来，只是没人告诉你还有一句可以问。但同样要记住那条荷兰语评论的提醒——模型给的是流程建议，不是结论，最后按下确认键的还得是你自己，尤其在医疗和法律上。
