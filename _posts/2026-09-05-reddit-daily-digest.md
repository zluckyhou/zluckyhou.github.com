---
layout: post
title: "Reddit 每日精选 | 2026.09.05"
headline: "AI 没有让活变少，它只是把活从写代码挪到了核对代码"
date: 2026-09-05 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "一个不写代码的经理用 AI 单干出了第三套系统，评论区给这件事起了个老名字：影子 IT"
summary: "本期五帖：一位五十岁不写代码的经理绕开整个团队 vibe code 出了第三套内部系统，评论区管这叫影子 IT 2.0；办公室白领为什么开始反感 AI，最扎实的回复在算一笔核对成本的账，也有人甩出了自己一个月的真实账单；统计系学生问自己的学位会不会被 AI 作废，从业者集体反驳说数据清洗从来就不是杂活；一位干了十年的工程师写下自己反复陷入的焦虑循环，最好的安慰来自那些承认自己也搞砸过的老兵；还有人把 1.376 亿篇论文按引用关系画成了一张没有指南针的地图。"
digest_count: 5
---

今天这份榜单看下来，有条线索格外清楚：几个来自完全不同板块的帖子，其实都在描述同一个位移——AI 并没有让工作量凭空消失，它只是把工作从「产出」那一端，整体挪到了「核对」这一端。而挪动之后，成本落在谁头上、谁又只看得见速度，就成了矛盾的全部来源。最后两帖是换口气的：一个关于人怎么和自己的完美主义相处，一个关于把一亿多篇论文摊平了看是什么样。

## 一、经理绕开整个团队，用 AI 单干出了第三套系统

[Manager now does solo things without informing or consulting with the team](https://www.reddit.com/r/ExperiencedDevs/comments/1w70b6d/manager_now_does_solo_things_without_informing_or/)

发帖人所在的不是科技公司，公司刚刚全面拥抱 agentic coding。他的顶头上司是个五十岁、不写代码的数据库出身的经理，第一时间就被这套东西说服了。公司有个多年的祖传内部工具，外包用 SAP 堆出来的，改一行都是噩梦，团队一直在谈重做；因为安全和治理的要求，最后拍板必须用 Power Apps 做——发帖人提过自己能直接写个网站，被这条理由驳回了，于是他利用零碎时间在 Power Apps 里搭了一堆模块化的基础件。结果某天，经理「自己做」了一个网站出来，还顺手做了分类和用户管理这些 Power Apps 那边已经有的页面。现在公司同时有三套竞争的方案：大家在用的老系统、他在旁边搭的 Power Apps、以及经理 vibe code 出来的新东西。

他反复强调，自己真正的意见不是「这是 AI 写的」，而是整个过程没有任何团队参与：没讨论过要加什么、怎么和现有东西对接、旧的 Power Apps 怎么办、以后谁维护。评论区几乎是一边倒地认同这个区分。排在最前面的一条回复把问题定位得很准：写出一个应用从来都不是难点，难的是确认它符合真实用途、以及之后还维护得动；公司越大，「在真空里写个 app 有多容易」和「在一堆约束里做成这件事有多难」之间的落差就越大——而这正是经理这个岗位本该理解的事。

> "Writing an application has never been an issue. What is an issue is making sure it fits the purpose and that it can be maintained afterwards."
>
> <cite>— u/drnullpointer，<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1w70b6d/manager_now_does_solo_things_without_informing_or/p7r30sj/" target="_blank" rel="noopener">原帖评论</a></cite>

串里最有解释力的一条，是给这件事找到了旧名字：vibe coding 本质上是生产影子 IT（Shadow IT）的一条新路径，而这个问题一点都不新——过去很多人的工作就是去抢救那些在规模上崩掉的影子 IT 系统，接下来大概率还要再来一轮。同一条回复还补了句很毒的预测：正当公司觉得自己可以不要开发者的时候，它会发现自己真的、真的很需要他们。

> "Yeah, vibe coding is basically a new way to create Shadow IT. It's not a new problem."
>
> <cite>— u/OddAthlete3285，<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1w70b6d/manager_now_does_solo_things_without_informing_or/p7rl5br/" target="_blank" rel="noopener">原帖评论</a></cite>

另一条我很喜欢的观察，是把 AI 当成人格放大器来看：本来就爱微管理的老板，现在终于能微管理到底；本来就爱抢活的人，现在真的能一个人抢完；本来就爱过度承诺的产品经理，现在承诺的东西还能点得动。

> "AI enhances personality “quirks”. If your boss was a bit of a micro-manager before, now Claude really lets them be."
>
> <cite>— u/rwilcox，<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1w70b6d/manager_now_does_solo_things_without_informing_or/p7r7lh7/" target="_blank" rel="noopener">原帖评论</a></cite>

发帖人自己的应对策略是「你要单干就单干到底」——他打算等更难的需求滚进来时，让经理自己交付全部。串里也有位当了十年管理的工程经理出来说了句公道话：用 LLM 过一把开发瘾没问题，但提想法、做 demo，和把一坨绕过了你自己定的流程规范的代码塞进生产环境，是两码事。

我觉得对国内读者最有用的一点是：不要把这类冲突框成「AI 写的代码好不好」。发帖人被驳回时的理由是安全与治理，经理绕过流程时却没人拿同一把尺子量他——AI 只是让这种双标的执行成本变成了零。真正值得写进团队规范的，不是禁不禁 vibe coding，而是「谁维护」和「怎么接入」这两个问题必须在动手前有答案，无论代码是谁写的、用什么写的。

## 二、白领为什么开始反感 AI：一笔核对成本的账

[Why office workers are turning against AI](https://www.reddit.com/r/technology/comments/1w7aksn/why_office_workers_are_turning_against_ai/)

这是一篇媒体报道的转帖，讨论办公室工作者对 AI 的态度转向。原帖没有正文，全部内容都在评论区，而评论区意外地扎实——它没有停留在骂，而是相当一致地把不满归因到一个具体的地方：验证成本。第一条高赞就一句话——什么都要复查，时间就是这么浪费掉的。后面有人把这句话量化成了一个公式：原本要 X 时间的活，用 AI 半个 X 就能做完，然后要花 2X 去复查和收拾。

> "The task that used to take X amount of time can be done in 1/2X with AI but then requires 2X to double-check and un-fuck."
>
> <cite>— u/Ill_Following_7022，<a href="https://www.reddit.com/r/technology/comments/1w7aksn/why_office_workers_are_turning_against_ai/p7tmz7g/" target="_blank" rel="noopener">原帖评论</a></cite>

串里争得最久的是那个流行比喻：AI 像个实习生。有人说它像个什么都做错、还永远学不会的实习生——而当年新人之所以值得投入，恰恰是因为他们最终会长大、不再犯蠢，从来不是因为他们当下的成本结构划算。

> "It's like an intern who does everything incorrectly and never learns, those new peoples were only useful because they eventually grow up and stops being stupid, not because their cost structure was positive."
>
> <cite>— u/graypasser，<a href="https://www.reddit.com/r/technology/comments/1w7aksn/why_office_workers_are_turning_against_ai/p7tknr4/" target="_blank" rel="noopener">原帖评论</a></cite>

但底下有条补充比这个比喻更值得记：人类新人的错误是可预测的。你了解他，你自己也当过新人，你们共用一套人脑，所以你大概知道他会在哪一步卡住、该重点检查哪里；AI 的错误则是随机的、稳定地不稳定，而且是人脑不会犯的那种错，反而更难被发现。这条把「验证成本为什么这么高」讲透了——不是错得多，是错得没有规律。也有人干脆反对这个类比本身，说自己每天离不开 AI、觉得它极其有用，但仍然坚持它不是实习生，连最笨的实习生都不是。

> "AI on the other hand, random errors, consistently inconsistent and error the human brain would not do making it harder to recognise."
>
> <cite>— u/nilssonen，<a href="https://www.reddit.com/r/technology/comments/1w7aksn/why_office_workers_are_turning_against_ai/p7upz4d/" target="_blank" rel="noopener">原帖评论</a></cite>

不过这个串最让我意外的，是它并没有滑向一边倒。往下翻，有位开发者贴出了自己八月份的真实账：花在 Claude 上一千二百美元，完成了 47 个 story point，而他公司里 1 个 point 约等于 1 个人天，他 AI 之前的软性预期是每月 16 个点——也就是说公司花一千二买到了「两个多的他」，而且每一行合进主干的代码都还过了他自己的眼。他同时承认，自己现在几乎整天都在给模型「掌舵」，这已经不是二十年前让他爱上的那份工作了。

> "I spent right at $1200 on claude (not the biggest number anyone's seen)."
>
> <cite>— u/Deranged40，<a href="https://www.reddit.com/r/technology/comments/1w7aksn/why_office_workers_are_turning_against_ai/p7u6cm5/" target="_blank" rel="noopener">原帖评论</a></cite>

把这两半放在一起看，结论其实不矛盾：AI 在「有人愿意为结果负最终责任」的地方能算出正收益，在「没人对结果负责」的地方就是纯粹的成本转嫁。串里另一条把后者说得很难听但很准——很多中层要的根本不是结果，是「省下时间」这件事本身；至于省下来干什么，大概是去找更多可以省时间的地方。这也提醒我们，讨论 AI 提效时，第一个该问的问题不是「快了多少」，而是「谁在做最后那道检查、他有没有时间做」。

## 三、统计系学生问：我的学位会被 AI 作废吗

[[Q] Is my degree useless because of AI?](https://www.reddit.com/r/statistics/comments/1w71rdo/q_is_my_degree_useless_because_of_ai/)

提问很简短：一个统计与数据科学专业的学生，担心未来的 AI agent 能高效地合成数据、跑模型，导致初中级数据科学岗位大幅萎缩，想知道走向 AGI 的路上量化岗位的需求会怎么变。这类问题在中文社区也年年有人问，但这个串的价值在于，回答它的人几乎全是一线从业者，而且他们内部还吵了一架。

第一条高赞先给了个温和的答案：清洗数据、跑基础模型这些体力活当然会被自动化，但这事已经发生很多年了；真正难的一直是知道该问哪个问题、以及判断答案到底有没有意义，而业务方在这两件事上都很糟糕。

> "The hard part has always been knowing *which* question to ask and whether the answer means anything, and business people are terrible at both."
>
> <cite>— u/New_Molasses7766，<a href="https://www.reddit.com/r/statistics/comments/1w71rdo/q_is_my_degree_useless_because_of_ai/p7rcri8/" target="_blank" rel="noopener">原帖评论</a></cite>

有意思的是，这条回复里「数据清洗会被自动化」的那半句立刻遭到了围攻，而且反对者的火力比回答原问题时还猛。有人说，认为在受治理的规范 schema 里搭出可靠、可扩展的 ETL 管线能被轻易自动化的人，是完全没概念；也有人举了自己做过的例子：把一个州立医院系统里 17 个分区各自的 Oracle 库迁到一个 SQL Server，业务专家是位护士，还要求把一对多关系转成多对一，另外得调外部程序判断两个病人是不是同一个人——因为真有两个同名同生日的人。这类活的难点从来不在写代码。

最精确的一条来自 u/wintermute93：如今把一堆脏数据变干净的「魔法」工具很多，但魔法用得越多，结果里藏着某种细微错误的概率就越大，而发现并修正这些错误的工作量，往往和你自己老老实实清一遍差不多。

> "The trouble is, the more magic involved, the more likely the result is somehow slightly wrong, and often detecting/correcting those errors is just as much effort as doing the cleaning yourself."
>
> <cite>— u/wintermute93，<a href="https://www.reddit.com/r/statistics/comments/1w71rdo/q_is_my_degree_useless_because_of_ai/p7rw1sq/" target="_blank" rel="noopener">原帖评论</a></cite>

串的末尾还有个不错的小争论。有人反问：既然医疗数据要求质量和一致性，那用确定性的自动化管线不正是最该走的路吗？回答是——基于规则的清洗是老一套了，医疗数据出错的方式实在太多，你会需要海量规则，然后被维护规则这件事耗死。

> "Rule based data cleaning is old school. There are so many ways healthcare data can be incorrect that you will need hugh amount of rules and be exhausted on maintaining them."
>
> <cite>— u/Efficient_Piano3799，<a href="https://www.reddit.com/r/statistics/comments/1w71rdo/q_is_my_degree_useless_because_of_ai/p7vylet/" target="_blank" rel="noopener">原帖评论</a></cite>

把这串和前两帖并排读，会发现它们其实在说同一句话：能被自动化的部分早就在被自动化了，剩下来的那部分之所以剩下来，是因为它需要在具体情境里判断「这个结果可不可信」。给还在读书的朋友一个实际建议：与其焦虑学位会不会作废，不如刻意去练那些串里被反复点名的能力——把模糊的业务问题翻译成可回答的统计问题，以及闻出一份漂亮报表哪里不对劲。这两样目前没有任何工具能替你做，而且恰恰是「验证」环节的核心技能。

## 四、干了十年，卡在自己的完美主义里

[Hitting a wall](https://www.reddit.com/r/ExperiencedDevs/comments/1w75opr/hitting_a_wall/)

一位工作快十年的工程师写了篇很长的自述。他被委以越来越复杂、要考虑大量边界情况的设计工作，从去年底开始，几乎每周都会陷入一个循环：设计完、评审过、自测也没问题，但几天或几周后总会冒出一个当初没想到的边界情况，或是一个测试时没出现的 bug。然后他就彻底崩了——熬夜找方案，找不到就第二天带着内心的恐慌去问 lead。事情最后基本都能解决，但那股焦虑会让他下班后无法放松、和人相处时无法在场，有时甚至失眠。他说自己开始怀疑这行是不是不适合他，而且明确点出压力的一个新来源：AI。

> "My job has also gotten a lot more stressful because of AI. Management thinks it'll help us become massively more productive, which isn't even that true."
>
> <cite>— u/findingtheyut（原帖作者），<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1w75opr/hitting_a_wall/" target="_blank" rel="noopener">原帖评论</a></cite>

他解释得很具体：管理层相信 AI 能带来巨大提效——这本身并不怎么成立——但「它能」这个信念已经让年度考核变严了；同时团队被塞进了 AI 赛道，客户的要求一次比一次快。这段刚好从个体视角印证了上一帖的账：验证成本落在他身上，提效的预期却落在考核表上。

评论区最好的部分是一群老兵集体现身说法，而且他们没有说空话，是直接交代自己的失误记录。一位从业二十五年的回复者说，他共事过的每一位专家级工程师都漏过边界情况，而且不止一次，几乎每个人都造成过生产事故——重点从来不是不犯，而是怎么处理。

> "Every single one has missed an edge case, more than one in fact. Probably every single one has caused a production incident."
>
> <cite>— u/couchjitsu，<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1w75opr/hitting_a_wall/p7sb2ip/" target="_blank" rel="noopener">原帖评论</a></cite>

紧接着的一条把这件事说得更漂亮：他的团队犯过非常、非常昂贵的错误，而他们恰恰因为处理这些错误的方式，成了公司里最受认可和尊重的团队之一。

> "My team has made very, very expensive mistakes. We are one of the most well received and respected teams because of how we deal with those mistakes."
>
> <cite>— u/HatesBeingThatGuy，<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1w75opr/hitting_a_wall/p7sh54n/" target="_blank" rel="noopener">原帖评论</a></cite>

后半段的讨论从技术转向了人。发帖人承认自己是重度完美主义者，团队眼里他是明星员工，而他觉得自己得靠「不出错」维持这个人设。有人劝他把「管理层的震怒」重新表述成「管理层在问我进度」；也有人指出，他其实有耗时的爱好、也定期见朋友，工作的情绪还是渗进来了，说明问题不在时间分配上。串里最狠也最有用的一句是：我反复要重新学的一课是，我的问题是我自己的问题，不是工作的问题——换个工作、做点别的重大人生决定，能分散注意力一阵子，然后它还会回来。

> "A hard lesson I keep having to re-learn is that my issues are my issues, not my work’s issues."
>
> <cite>— u/mq2thez，<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1w75opr/hitting_a_wall/p7sb55i/" target="_blank" rel="noopener">原帖评论</a></cite>

这帖读起来很像我们身边很多人的状态：能力越强被派的活越难，活越难漏掉的东西越多，而漏掉的东西又反过来喂养「我不够好」的判断。我想补一句串里没人明说的话——发帖人描述的那个「循环」，其实是个信号良好的工程师应有的反应，只是被放在了没有事故复盘文化的环境里。判断一家公司值不值得留，有个很省事的标准：出事之后，第一句话是「怎么发生的」还是「谁干的」。这个区别，比薪资和技术栈都更能决定你十年后的状态。

## 五、把 1.376 亿篇论文按引用画成一张地图

[[OC] I mapped 137.6 million scientific papers by their citations](https://www.reddit.com/r/dataisbeautiful/comments/1w74hjm/oc_i_mapped_1376_million_scientific_papers_by/)

换点轻松的。有人把 137,607,184 篇科学论文和它们之间 2,706,467,548 条引用关系画成了一张图。这张图最漂亮的地方在于它的克制：唯一的输入是「谁引用了谁」，没有任何学科标签参与布局计算，颜色只是事后涂上去的——所以图上那些清晰的学科版块，是算出来的结果，不是预设的前提。

> "No discipline labels went into the layout, so the disciplinary structure you can see is the result, not an input."
>
> <cite>— u/PaperNexus（原帖作者），<a href="https://www.reddit.com/r/dataisbeautiful/comments/1w74hjm/oc_i_mapped_1376_million_scientific_papers_by/" target="_blank" rel="noopener">原帖评论</a></cite>

作者对这张图的说明里有一句我很喜欢的话：这个布局没有固定的方位，整体旋转或镜像都不会改变底下的结构——版图是稳定的，指南针不是。他还特意解释，图像边缘那圈淡淡的光晕不是渲染瑕疵，而是那些只有一两条引用连接的论文：被邻居微弱地拉着，同时被其余所有论文推向外围。

> "The layout has no fixed frame: it can rotate or reflect without changing the underlying structure. The territories are stable; the compass isn't."
>
> <cite>— u/PaperNexus（原帖作者），<a href="https://www.reddit.com/r/dataisbeautiful/comments/1w74hjm/oc_i_mapped_1376_million_scientific_papers_by/" target="_blank" rel="noopener">原帖评论</a></cite>

方法上他交代得很干净：引用边主要来自 Semantic Scholar 的学术图谱，学科分类来自 OpenAlex（把 26 个 ASJC 学科组合并成 8 个大类上色），两边做了实体消解后拼接；布局用的是 2016 年的 LargeVis，为了跑这个量级他改了个自己的分支，实体消解和图构建在 AWS Athena 上做，渲染是 NumPy 加 Pillow 的自写代码。评论区还有个挺可爱的小插曲：有人问图上侧边那两座红色和紫色的孤岛是什么，另一位回复说想查得付费，作者随即承认是自己刚上线的功能对新用户设置有误，当场给新用户补了免费次数。

> "You're right, sorry about that, I just launched this feature and I made a mistake with new users."
>
> <cite>— u/PaperNexus（原帖作者），<a href="https://www.reddit.com/r/dataisbeautiful/comments/1w74hjm/oc_i_mapped_1376_million_scientific_papers_by/p7ul3z2/" target="_blank" rel="noopener">原帖评论</a></cite>

「版图是稳定的，指南针不是」这句话，其实可以从图里拎出来当今天的收尾。前面四个帖子吵的都是同一片版图——工作到底由什么构成、价值到底在哪一段——而 AI 只是换了指南针的指向。图上那圈只有一两条引用的光晕也很有意思：任何一个领域里，大部分工作都是那样被推向边缘的，能不能进到中间，靠的从来不是产出速度，是有多少人愿意引用你。
