---
layout: post
title: "Reddit 每日精选 | 2026.08.16"
headline: "干了 30 年的系统管理员栽在自家公司的钓鱼演练上，评论区吵的是这测试到底在测什么"
date: 2026-08-16 09:20:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "一场内部钓鱼演练把一位 30 年老兵逼到崩溃，评论区却把矛头调转，对准了考核本身。"
summary: "本期五帖凑在一起讲的是同一件事：考核的指标和真正想要的东西，常常不是一回事。一位 30 年工龄的系统管理员因为反复没通过公司的钓鱼演练担心被开除，评论区反问这测试到底在测什么；平台工程团队被要求两周内人人交一个 AI agent，老手们的应对是给 shell 脚本套一层壳；一位 5 年经验的新晋 Staff 工程师复盘了这一年，头衔通胀和放权难都被评论区拆开来讲；7700 人的研究再次证实远程办公者幸福感最高，而争论焦点变成了这种研究到底有没有用；最后是英国旧书店发现的神秘批量订单，指向 AI 公司在找 2022 年之前未被污染的文本。"
digest_count: 5
---

今天这五帖放在一起看，能凑出一条挺完整的线：一件事一旦被拿来考核，被考核的往往就不是那件事本身了。安全演练测的是有没有点击，不是有没有被骗；AI 转型考核的是有没有交出 agent，不是有没有解决问题；职级考核的是头衔挂到哪一档，不是实际在干什么。而当研究真的把答案摆出来的时候，做决定的人又不看数据。

## 30 年工龄的系统管理员，被自家公司的钓鱼演练逼到崩溃

[原帖链接](https://www.reddit.com/r/sysadmin/comments/1vpe2sb/about_to_ruin_a_30_year_it_career_because_i_cant/)

发帖人干了 30 多年网络和系统管理，连续 17 年每月按时打补丁，渗透测试成绩漂亮，公司甚至拿他的名字给服务器命名。但他今年已经两次没通过公司内部的钓鱼演练，三年内共三次——按员工手册的三振出局条款，他觉得自己要被开除了，本来打算过几年体面退休，现在心情跌到谷底。他自己也承认一个尴尬的细节：为了让演练邮件进得来，是他亲手在邮件安全网关上给这些模拟钓鱼开的口子。

评论区几乎没人嘲笑他，火力全冲着测试本身去了。争论最大的一点是：有些平台把「打开邮件」也算失败，可你不打开邮件怎么判断它是不是钓鱼？又怎么点到那个举报按钮？有人干脆管这叫薛定谔的钓鱼邮件。更荒诞的一例来自另一位用户：他拿不准一封邮件是真钓鱼还是演练，于是老老实实上报给安全运营团队，结果对方点开了链接，系统反手给他发了一封「你未通过钓鱼测试，请今后多加小心」。

> "It's Schrodinger's phish. How the F are you supposed to know if it's a phishing email by just the subject and first few words?"
>
> <cite>— u/JasonDJ，<a href="https://www.reddit.com/r/sysadmin/comments/1vpe2sb/about_to_ruin_a_30_year_it_career_because_i_cant/p3xgl5w/" target="_blank" rel="noopener">原帖评论</a></cite>

> "The SOC team clicked the link. I got an email that I failed a phishing test, and that I should be more careful in the future."
>
> <cite>— u/WideAwakeNotSleeping，<a href="https://www.reddit.com/r/sysadmin/comments/1vpe2sb/about_to_ruin_a_30_year_it_career_because_i_cant/p3x2ron/" target="_blank" rel="noopener">原帖评论</a></cite>

在管理端的人也出来解释了：正经配置下只有点链接、开附件、输凭据才算失败，光打开不该扣分；KnowBe4 之类的产品自带举报按钮，点了会立刻反馈「你识别对了」，如果同事们只能靠给 IT 提工单来报钓鱼，那是部署这套系统的人没配好。有意思的是这条帖子里 HR 在管钓鱼演练的公司还不少，好几个人的反应都是「这事凭什么归 HR」。至于对策，大伙儿给的招数一个比一个消极：按 KnowBe4 的邮件头写规则直接扔进垃圾箱、给所有链接做纯文本化处理、把没预期到的邮件一律当敌意处理，还有人索性把每一封公司群发邮件都举报成钓鱼——反正你要我这么警惕，那我就照做。最后有人送了个新时代万能借口：以前误了事说「这个任务从我雷达上掉下去了」显得懒散，现在说「我以为那是钓鱼测试」，既现代又无可反驳。

我自己的感受是，这条帖子真正扎心的地方不在于测试设计得糙，而在于它把一个安全工具改造成了绩效惩罚工具。发帖人从没被真钓鱼骗过——真钓鱼根本进不了他的收件箱，是他自己拦住的；被抓住的那次，是他一边打电话跟银行重置密码、一边点开验证邮件时撞上的。一个把「上报可疑邮件」当成正确答案的体系，和一个把「三次点击就滚蛋」当成正确答案的体系，长出来的员工行为是完全相反的。国内公司这两年也开始流行内部钓鱼演练，值得先想清楚：你是想让人更会识别，还是只想拿到一份好看的通过率报表。

## 平台工程团队被要求两周内人人交一个 AI agent

[原帖链接](https://www.reddit.com/r/devops/comments/1vp8y0c/does_your_org_do_this_sht_with_ai_agents_in/)

一位平台工程师吐槽：管理层要求团队每个人从当前遇到的问题里挑一个，两周内做成 AI agent 交上来。他的判断很直接——这些场景用普通 shell 脚本就能搞定，效果一样。更拧巴的是，公司一边逼大家上 AI，一边在申请额外 token 额度时反复盘问理由。他特意补了一句自己不是反 AI 派，现在离了 AI 也干不了活，烦的是这种自上而下的强制。

评论区的老手们没在争 AI 好不好，而是熟练地给出了一套过关攻略：把你本来就该写的 shell 脚本写了，包一层 tool call，或者前面架个 MCP server，指标就算完成了；把 Grafana 的 MCP 接上一个只读账号，管它叫「根因分析 agent」，配个漂亮的汇报材料交上去。有人形容这是把 agent 做成了一根更贵的 unix 管道。也有人给管理层说了句公道话：现在一家公司的对外故事里如果一点 AI 都不提，就等于承认自己掉队了，老板们不是傻，是被叙事绑住了。

> "Implement your shell script, call it a tool call, or put an MCP server in front of it, whatever. It's stupid, but that ticks the box."
>
> <cite>— u/jebuizy，<a href="https://www.reddit.com/r/devops/comments/1vp8y0c/does_your_org_do_this_sht_with_ai_agents_in/p3vn9ml/" target="_blank" rel="noopener">原帖评论</a></cite>

整条讨论里最好的一个比喻来自另一位用户：挖土的公司看见卡特彼勒挖掘机当然会有 FOMO，这情绪本身没错；但 token 更像是加进挖掘机的燃油，不是挖掘机本身。而 AI 公司眼下卖的是燃油，至于怎么造一台省油又高效的机器，留给用户自己琢磨——于是大家都在用自己拼装的怪东西烧着高价燃油。另一位工程师则给出了 agent 真正有用的样子：凌晨两点一个新服务变慢，他半睡半醒地扫堆栈，漏掉了埋在里面的一条 SQS 死信队列权限拒绝，是模型翻出来的；但他补充说这玩意儿也会一本正经地胡说八道，所以他把它的输出按初级工程师的水准对待。还有人提出了那个最实在的反问：用 AI 把你一直没空写的那堆脚本写了，为什么不算「用 AI 解决了问题」？

> "But the metaphor is nuanced, because AI inference, measured by Tokens, is more like the fuel you put into the Caterpillar, than it is like the Caterpillar itself."
>
> <cite>— u/SailingToFenway，<a href="https://www.reddit.com/r/devops/comments/1vp8y0c/does_your_org_do_this_sht_with_ai_agents_in/p3w7cno/" target="_blank" rel="noopener">原帖评论</a></cite>

这套「交作业式 AI 转型」国内同行应该不陌生。真正的问题不是要不要用 AI，而是 KPI 写成了「产出多少个 agent」而不是「省了多少人天、少了多少次事故」。前者一定会被满足，代价是团队学会了表演；后者难量化，但至少指向真实收益。要是你恰好在定这类指标，把交付物从 agent 数量换成一条可复现的时间或故障指标，团队的动作会立刻不一样。

## 5 年经验做到 Staff，一年后他回来复盘

[原帖链接](https://www.reddit.com/r/ExperiencedDevs/comments/1vpg59k/followup_what_this_year_has_been_like_as_a/)

八个月前一位机器学习工程师在 r/ExperiencedDevs 发帖，纠结要不要冲 senior 以上的职级，这次他回来交答卷。明年一月满 5 年工龄，现在带 8 个人的团队，能定技术栈、管技术预算、跟供应商谈判，手上的产品从一个膨胀到 5 个以上，团队今年重组了好几次。他自评这一年比预期好，但把难受的地方也一条条写了出来：厌倦了 AI 项目，因为大部分工作就是 LLM 套壳、agent 编排和 RAG 知识库；身边没有更资深的人可以撞想法，技术上的孤独感比想象中难扛；被要求在自己并不在行的领域当场给出笃定的判断；最大的产出变成了定标准和建流程，能亲手写代码的时间越来越少。

评论区第一波是对头衔的质疑：5 年就 Staff？职级通胀罢了，听描述更像一个没人带的 senior。发帖人自己也认，说标题里的引号就是这个意思，现实中他一般用 lead 自称。但有人替他挡了一句：如果责任真的给到了，那头衔就是名副其实的。另一条更值得看的分支是关于放权——发帖人说自己很难把活派出去，尤其明知别人做得不如自己好的时候。有位评论者不留情面地指出这个想法从两个方向上都是错的：不放权你就永远无法规模化，也永远培养不出能接替你的人，而找到接班人恰恰是你自己往上走的前提；同时你也剥夺了别人证明自己的机会，他们当然会失败，但当年上面的人也是这么给你机会的。

> "Firstly, if you don't delegate you're never going to scale and you're never going to find someone that can replace yourself, which is the best way to move up in the company."
>
> <cite>— u/Slayergnome，<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1vpg59k/followup_what_this_year_has_been_like_as_a/p3xj2mx/" target="_blank" rel="noopener">原帖评论</a></cite>

关于 AI 工作的乏味，有人把整个行业的活儿浓缩成一句：做向量嵌入、存进数据库、拿用户查询去匹配文档、把结果塞进 prompt 调个 API 返回一段话，然后把这套重复一千遍——可招聘要求写得跟造火箭一样。发帖人回了句「说到点子上了」。而他帖子里最让我在意的一条，是关于他手下的初级工程师：

> "Create vector embeddings, store them in DB, user queries to match with documents, and sending the data on a prompt to some LLM API to return some blurb to the user. Rinse and repeat a thousand times without any kind of interesting variation."
>
> <cite>— u/PoopsCodeAllTheTime，<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1vpg59k/followup_what_this_year_has_been_like_as_a/p3xj2pp/" target="_blank" rel="noopener">原帖评论</a></cite>

> "My juniors are completely addicted to Claude… it's been a massive headache for the number of times a junior has told me they made a decision without understanding why."
>
> <cite>— u/The_Ozynandias（原帖作者），<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1vpg59k/followup_what_this_year_has_been_like_as_a/" target="_blank" rel="noopener">原帖</a></cite>

「做了这个决定但说不出为什么」，这句话大概是今年技术团队里最普遍的隐患。它不是代码质量问题——AI 写的代码往往还挺能跑——而是决策链条断了：没人能解释这个方案为什么成立，于是也没人知道它在什么条件下会不成立。对带团队的人来说，值得把 code review 的问法换一换，少问「这段代码对不对」，多问「你为什么选这个方案，另外两个方案坏在哪」。

## 7700 人的研究说远程办公者幸福感最高，然后呢

[原帖链接](https://www.reddit.com/r/technology/comments/1vp3h33/remote_workers_report_the_highest_wellbeing_in/)

一项覆盖 7700 名员工的研究显示，完全远程办公的人幸福感最高。这种结论在 Reddit 上几乎注定会收获一片「这还用研究？」——不用堵在路上、能在家吃饭、不必忍受开放式办公室的噪音和糟糕空气，谁会不高兴。于是讨论很快分成了两拨：一拨嫌这是废话研究，一拨认真论证废话研究为什么必要。

后者给出的理由挺有说服力：常识也曾告诉我们地球是平的、番茄有毒、疾病靠气味传播，让科学去复核常识从来都是划算的；何况「远程办公已死」这种说法在媒体上照样零数据地流传，你不拿研究去顶，场子就是对方的。也有人补了一记冷嘲：疫情刚开始那一个月，正是这些公司拼命造数据向投资人证明远程办公提高了生产率，如今只不过换成了找相反的数据。

> "It's always a good idea to have science check common sense. Common sense told us the world was flat, tomatoes were poisonous and disease was spread by smells."
>
> <cite>— u/DanielPhermous，<a href="https://www.reddit.com/r/technology/comments/1vp3h33/remote_workers_report_the_highest_wellbeing_in/p3ug2f8/" target="_blank" rel="noopener">原帖评论</a></cite>

真正有信息量的是关于混合办公的那几条。有人一针见血地指出混合制最滑稽的形态：一周两天在路上堵两小时通勤到公司，然后坐在工位上开线上会议。所以混合办公的关键变量根本不是「在家几天」，而是全队是不是同一天到岗——不同步的混合等于两头的坏处都占了。另一位则给远程办公提了个真实的代价：新人加入一个已经磨合好的团队时，老关系会自然延续，新关系却很难建立，因为大家都能靠已有的连接把活干完，新人于是被晾在外面。还有人现身说法，说自己全远程三年后主动换了份混合的工作，就是为了找回一点人和人的接触，而这跟他当时单身、住在偏远地区有很大关系。

> "For example, it can be very difficult for employees who are new to an established team in an all-virtual environment, as existing bonds will carry over but new bonds will often fail to form…"
>
> <cite>— u/Alaira314，<a href="https://www.reddit.com/r/technology/comments/1vp3h33/remote_workers_report_the_highest_wellbeing_in/p3wgjki/" target="_blank" rel="noopener">原帖评论</a></cite>

把这些拼起来，结论其实比标题细致：远程办公对已经融入团队的人几乎是纯收益，对刚进来的人则是实打实的门槛。所以更值得投入的不是争论几天到岗，而是给新人补上那条本来靠工位距离自动生成的关系链——固定的搭档、有人负责的入职期、以及至少一段时间的同步在场。至于「远程还是坐班」这个争论本身，这帖子里被点赞最多的那种无力感也很真实：数据摆了一堆，拍板的人依然按自己的偏好来。

## 英国旧书店的神秘批量订单，可能是 AI 公司在囤「未被污染」的文本

[原帖链接](https://www.reddit.com/r/technology/comments/1vp0821/secondhand_booksellers_in_uk_and_ireland_suspect/)

据《卫报》报道，英国和爱尔兰的二手书店最近陆续收到来自美国、加拿大和欧洲的神秘批量订单，同样的情况在美国、澳大利亚也在发生。英国最大的二手书店 Barter Books 的共同经营者说，这些订单三个月前开始出现，反常之处在于它们不像正常买家那样围绕体育、汽车之类的主题成组，而是杂乱无章。业界普遍怀疑买家是 AI 公司，目的是获取训练数据。

评论区提出了两条互不排斥的动机解释。第一条是法律层面的洗白：过去大量训练数据来自可疑来源，一旦哪天要清算，能拿出「这些书是我们买来的、扫描的是自己拥有的实体书」这套说法会非常有用——有人特意提到 Anthropic 因大规模盗版书籍吃了官司，法院认定有问题的正是盗版这一环，而买书恰好绕开了它。第二条更技术：2022 年之后的互联网文本已经被 AI 生成内容大面积污染，维基百科和互联网档案馆早被扒干净了，纸质书和旧杂志成了最后一批可信的非 LLM 语料。

> "It is because the internet is already filled with AI-driven texts and only printed books and magazines from before like 2022 are the last reliable source of non-LLM content."
>
> <cite>— u/IRockIntoMordor，<a href="https://www.reddit.com/r/technology/comments/1vp0821/secondhand_booksellers_in_uk_and_ireland_suspect/p3u267m/" target="_blank" rel="noopener">原帖评论</a></cite>

> "However, Anthropic got in serious trouble for mass-pirating books to build that data, and the piracy was the part that judges ruled was inarguably a crime - so buying them is, obviously, the way around that."
>
> <cite>— u/ElaraValtor，<a href="https://www.reddit.com/r/technology/comments/1vp0821/secondhand_booksellers_in_uk_and_ireland_suspect/p3u3r4e/" target="_blank" rel="noopener">原帖评论</a></cite>

评论区里最有分量的一条来自一位以卖二手书为生的人。有人认为 AI 公司买的都是两三英镑的便宜货，说明这些书没什么价值；他反驳说，在这行里「老」从来不等于「值钱」，1800 年代的皮面精装照样便宜得很，真正抬价的是稀有和独特——而稀有独特恰恰就是那些冷门非虚构，比如某个特定年代特定地区的农具志，信息准确、有出处，网上根本找不到。另一处让人不太舒服的细节是扫描方式：为了快，很多书是直接裁掉装订线拆开扫的，也就是说这些书在这个过程中被销毁了；有人担心的是万一数字副本也不公开，那些本就稀少的旧书就只剩下模型权重里的一个近似值。

这件事对中文读者的启发可能在另一个方向：真正稀缺的从来不是「大量文本」，而是有出处、成体系、且不是被别的模型生成出来的文本。中文互联网上高质量的专业资料本来就比英文世界更集中在少数几个封闭平台里，而 AI 生成内容的洪水来得只快不慢。谁手上握着 2022 年之前完整、干净、带出处的中文语料，几年后大概会发现自己坐在一座矿上——只希望到时候矿工进场的方式，不是拿裁刀把书脊切掉。
