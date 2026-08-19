---
layout: post
title: "Reddit 每日精选 | 2026.08.13"
headline: "一条 x86 指令跑了 62 秒，而给 825 个职业打「AI 抗性」分的，是 AI 自己"
date: 2026-08-13 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "本期最好看的是两场公开的方法论辩论：最慢指令榜到底算不算数，以及一张职业风险图被评论区拆穿之后，作者怎么回去补数据。"
summary: "本期五帖：有人专门去找 x86 上最慢的单条指令，62 秒的冠军背后是一整套 MMIO 骚操作；一张 825 个职业的 AI 抗性图被评论区指出评分器只看职称不看历史，作者当场回去核了数；雅思每提一分要多背多少词，答案在 C1 之后陡然变陡；李飞飞说学校里 AI 最大的风险不是作弊，评论区把它改写成了批判性思维的流失；Twitch 承认默认开启 AI 训练，理由是换成主动加入就没人会加入。"
digest_count: 5
---

今天这五帖里有一条挺清楚的暗线：一个数字好不好看，取决于它是怎么被造出来的。62 秒的指令、825 个职业的风险分、每提一分要背的 1500 个单词、实习生的质量、勾选框的默认值——每一个都要往回追一步，看看那个数字背后的方法长什么样。而 Reddit 评论区今天恰好干得特别漂亮：几场追问都追到了底，其中一场还逼出了原作者一次相当体面的认错。

## 有人专门去找 x86 上最慢的一条指令，冠军跑了 62 秒

[原帖链接](https://www.reddit.com/r/programming/comments/1vmhj23/hardware_researcher_spins_up_cpu_deoptimization/)

一位硬件研究者搞了个反着来的项目：不优化，专门找单条 x86 指令能被拖到多慢，然后建了个「耻辱名人堂」。目前的冠军耗掉约 1980 亿个时钟周期，折合 62 秒——一条指令，一分钟。

评论区第一时间把机制拆开了。冠军是 `fxrstor64`，一条从内存里加载 512 字节 XMM 状态的指令；作者让它从精心挑选的 MMIO 地址读数据，同时让其他核心猛敲别的 MMIO 寄存器，把 PCIe 主控打满，于是这条不可中断的指令就得老老实实等完 512 字节走完全机器上最慢那条通路的往返。有人进一步补充：如果不许用 MMIO，冠军变成 `wbinvd`（整片缓存作废，脏行全刷回内存）；而如果只算日常程序里真会用到的「正经指令」，冠军是 `fdiv`——普通的浮点除法，喂给它非规格化数就要 883 个周期。

> "…the champion seems to be fdiv… With denormal operands, it is implemented in microcode and is quite slow, takes 883 cycles."
>
> <cite>— u/encyclopedist，<a href="https://www.reddit.com/r/programming/comments/1vmhj23/hardware_researcher_spins_up_cpu_deoptimization/p39mh9n/" target="_blank" rel="noopener">原帖评论</a></cite>

为什么一条除法能慢成这样？有人给了我今天读到的最漂亮的一句解释：x87 遇上非规格化数会退回整数微码，带一大堆边界情况处理，本质上就是一套走最慢路径的软件浮点，只不过伪装成了一条指令。

> "It's essentially a soft-float implementation taking the slowest possible path, disguised as a single instruction."
>
> <cite>— u/inio，<a href="https://www.reddit.com/r/programming/comments/1vmhj23/hardware_researcher_spins_up_cpu_deoptimization/p3b1gh2/" target="_blank" rel="noopener">原帖评论</a></cite>

顺着 x87 又岔出一条支线：既然编译器早就改生成 SSE2 了，这套老指令为什么还在？有人指出 32 位的 .NET Framework 仍在用，而且 x87 用扩展精度、只在写回内存时才舍入，SSE2 则每一步都舍入，两者算出来的尾数常常对不上——所以有大量金融软件到今天还跑在 .NET Framework 上，因为那种必须每天在线的单体交易平台，管理层不会有胃口去做一次大爆炸式重写。还有人吐槽为了兼容 x87 位级行为把逻辑移植到 ARM，已经折磨了他一整年。

帖子里还有一场小型方法论争论值得一提：有人认为这个例子不足以说明 x86 的问题，因为这条指令现实中根本不会这么用；马上有人把靶子摆正了。

> "criticizing any instruction set, x86 or otherwise, just isn't the goal. the stated purpose is to find a single instruction that takes the longest to execute."
>
> <cite>— u/Mechafinch，<a href="https://www.reddit.com/r/programming/comments/1vmhj23/hardware_researcher_spins_up_cpu_deoptimization/p3b0tbo/" target="_blank" rel="noopener">原帖评论</a></cite>

这句话其实适用范围很广。基准测试最常见的失效方式，不是数跑错了，而是拿一个为 A 设计的实验去回答 B 问题。这个项目老老实实说了自己在找「最慢的一条指令」，那它就该按这个标准被评判——至于它有没有顺便证明 x86 该重构，那是另一场架吵。

## 825 个职业的「AI 抗性」分，是 AI 自己打的

[原帖链接](https://www.reddit.com/r/dataisbeautiful/comments/1vmtwwb/oc_the_most_airesistant_big_job_in_america_pays/)

一张散点图，横轴工资纵轴「AI 抗性」，标题很有传播相：美国最抗 AI 的大众职业年薪 35,800 美元，最「熟透」的 32,880 美元。工资和就业数据来自美国劳工统计局，看着挺硬；但抗性分数不是官方的，是作者让语言模型按一套五维评分表给 830 个职业逐个打的。作者自己在数据说明里写得很坦白：这套分可复现、可审计，但不权威，prompt 和全量数据都公开，谁都可以重跑或者推翻。

评论区第一刀又快又准：所以你是用一个 AI prompt，让 AI 去判断 825 个职业各自有多容易被 AI 取代，这就是源数据？

> "So you used an AI prompt, to make an AI judge how vulnerable each of 825 occupations was, to AI? That's the source data?"
>
> <cite>— u/TylerJohnsonDaGOAT，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vmtwwb/oc_the_most_airesistant_big_job_in_america_pays/p3cb9ft/" target="_blank" rel="noopener">原帖评论</a></cite>

但真正把问题说透的是另一条。有人注意到评分把「打字员／文字处理员」判成了最容易被 AI 取代的那一档，并指出这恰恰暴露了方法的软肋：2026 年还在岗的打字员，正是上一波计算机浪潮没能替掉的那批人，你得懂这个行业才知道他们还剩下什么。

> "You’d actually need to know about the industry to understand the extent to which a typist in the year 2026 (who thus wasn’t replaced by computers in the prior waves for that job) is vulnerable to AI"
>
> <cite>— u/CLPond，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vmtwwb/oc_the_most_airesistant_big_job_in_america_pays/p3ce8s0/" target="_blank" rel="noopener">原帖评论</a></cite>

接下来发生的事，是我今天在 Reddit 上看到最值得记一笔的：作者没有辩护，而是回去核了数。他报告说这个毛病一共波及 59 个职业——人数已经跌了 25% 到 79%、实际工资却基本持平，分数却仍被打到 40 分以下：打字员、电话推销、数据录入、总机、桌面排版、照片冲印、纺织与金属机床操作工，全是被上一波技术浪潮碾过一遍的岗位。打字员这一项，2017 年以来从 65,200 人掉到 35,010 人，工资中位数 39,740 美元涨到 49,280 美元，扣掉通胀基本没动——人数腰斩而工资守住，说明留下的是一个专业化的内核，而不是一个正在被商品化的工种。原因他讲得很干脆。

> "The scorer sees a title, SOC code, category and headcount. No history. So it scored the name."
>
> <cite>— u/Prestigious-Impact83（原帖作者），<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vmtwwb/oc_the_most_airesistant_big_job_in_america_pays/p3csn8g/" target="_blank" rel="noopener">原帖评论</a></cite>

更难得的是他补充的处理方式：他把就业历史加到了那 59 个页面上、写进了已知局限，并在致谢里点名这个讨论串，但**没有手动调整任何一个分数**——理由是，在不重跑评分器的情况下把数字朝假设的方向拧，那是在制造一致，而不是赢得一致。另一条回复里他还划了一条我觉得所有关心「AI 会不会取代我」的人都该记住的界线：AI 在做你的活，和根本没人在招人，是两件事；一个被利率和经济冻住的市场，从里面看跟被自动化了长得一模一样。

对中文读者的启发大概有两层。一层是关于这类「AI 取代风险榜」的：它们几乎都建立在职位名称上，而名称是过去时态的产物，一个岗位被上一波技术洗过之后剩下的内核，恰恰是名字里看不出来的部分。另一层是关于怎么做数据的——原作者被质疑之后的那套动作（去核、公开、标注局限、拒绝手改结论）比那张图本身有价值得多。

## 雅思每提一分要多背多少词，C1 之后曲线陡到吓人

[原帖链接](https://www.reddit.com/r/dataisbeautiful/comments/1vmftli/oc_vocabulary_size_at_each_ielts_band/)

一张按雅思分段画的词汇量分布直方图。结论是：大部分区间里每提高一个分档大约需要多认识 1,500 个词，但过了 C1 就完全不是一回事了——从 C1 中段到 C2（雅思 7.5 到 8.5）要多认 4,700 个新词，是前面每一档的三倍。词汇量用 BRAVE 测试测的，量的是接受性词汇（看得懂但不一定用得出来），而且按词族计数，limit / limitation / limitless 算一个。

评论区把这条曲线换算成了时间，一下子就具体了：一年背 5,000 词是比较舒服的节奏，差不多每天 15 个；照这个速度，A2 大约半年，B2 大约一年，C2 大约三年。如果目标语言跟你的母语接近还能再快，西语母语者学法语大概能砍掉一半。

> "You can learn 5000 words in a year fairly comfortably, ~15 words/day. This would mean A2 takes about 6 months, B2 would require 1 year, and C2 would take around 3 years."
>
> <cite>— u/lazydictionary，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vmftli/oc_vocabulary_size_at_each_ielts_band/p3ak0v8/" target="_blank" rel="noopener">原帖评论</a></cite>

最有洞察的一条来自一个观察到的反差：B1 高段和 C1 低段在感觉上像两个世界，实际能力差着近十倍，可词汇量只差 1.85 倍。这不是数据出错，而是 Zipf 定律在起作用——语言里最高频的头 100 个词就覆盖了约一半文本，越往后每个新词的边际覆盖率越低，所以词汇量这个指标在中高段会严重压缩真实差距。换句话说，卡住大多数人的从来不是词表长度，而是那些词的用法密度。

> "I'd expect a C1 speaker to be ~10x more capable than a B1, but the vocab spread is only about 1.85x"
>
> <cite>— u/mankiw，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vmftli/oc_vocabulary_size_at_each_ielts_band/p3b93q9/" target="_blank" rel="noopener">原帖评论</a></cite>

还有人纠正了作者两处措辞：C1/C2 并不等于「接近母语者」，它衡量的是一种职业场景下的流利度，一个 C2 的非母语者离随便一个母语者的语感还差得远；另外这也算不上帕累托法则，说「边际收益递减」更准确（作者后来也认了，说当时觉得那样讲显得在贬低那些冷僻词的价值）。

> "C1/ C2 aren’t “near native”, they’re measures of a kind of professional fluency."
>
> <cite>— u/Devilnaht，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vmftli/oc_vocabulary_size_at_each_ielts_band/p39emle/" target="_blank" rel="noopener">原帖评论</a></cite>

对备考的人来说，这张图其实是个止损建议：在 6.5 到 7 分这一段死磕词汇量的性价比还行，到了 7.5 往上，再堆词表的收益会急剧下降，时间花在写作和口语的表达精度上要划算得多。顺便，帖子里有人贴了那个免费的 myvocab 词汇量测试，据说会混入假词来校验，几分钟能测一次自己的底。

## 李飞飞说学校里 AI 最大的风险不是作弊，评论区把这句话改写了

[原帖链接](https://www.reddit.com/r/technology/comments/1vmlmzr/the_godmother_of_ai_says_the_biggest_ai_risk_in/)

被称为「AI 教母」的李飞飞说，AI 进校园最大的风险不是学生用它作弊，而是他们会失去学习的欲望。这个论断在 r/technology 得到了大量共鸣，但评论区没有停在共鸣上，而是很快开始修正它。

顶楼那条长评补了一个更精确的说法：丢掉的不是「想学」，而是那个「需要学」的体感。发帖人说自己是九十年代末到两千年初念的计算机学位，那时候还不能 Google 到任何一道题的答案，正因如此才被迫往下挖，去搞明白机器到底在干什么。他还提了一个我之前没想过的角度——现在 AI 基本免费，等到大家真要为它付出真实成本的那天，可能已经有一整代人离开它就不会办事了。

> "Right now, AI is essentially free. Once people need to start paying the true cost of AI, I think there is a very real danger of there being a whole generation of people who are unable to function without it."
>
> <cite>— u/ChrisC1234，<a href="https://www.reddit.com/r/technology/comments/1vmlmzr/the_godmother_of_ai_says_the_biggest_ai_risk_in/p3agnr3/" target="_blank" rel="noopener">原帖评论</a></cite>

另一条把靶心挪了个位置：丢的可能不是求知欲，而是批判性思维。理由挺有说服力——大把人乐意去学一项新运动、学一道新菜，可见「想学」这件事没死；死掉的是判断信息真假、追问一个结论从哪来的那部分能力，而 AI 把这个问题从课堂扩散到了生活的方方面面。

顺着这条线，出现了今天最精彩的两句接力。有人分享自己的用法：现在对 GPT 的第一次回答，他一律回一句「这听起来不对」，结果大多数时候模型都会说「你说得对，这确实不正确」。下一条回复只有一句，直接把这个「验证方法」拆穿了。

> "And the only reason it's saying that is your prompt made it think you wanted to hear that"
>
> <cite>— u/Mooshington，<a href="https://www.reddit.com/r/technology/comments/1vmlmzr/the_godmother_of_ai_says_the_biggest_ai_risk_in/p3c0csl/" target="_blank" rel="noopener">原帖评论</a></cite>

这句提醒对天天用模型干活的人来说比原帖更实用：用「你确定吗」去测试模型的正确性，测出来的其实是它的顺从度。模型对质疑的让步几乎不携带信息量，真要验证只能去外部信源对一遍——这一点和当年学会不轻信搜索结果第一条，是同一种素养。至于「AI 会不会让下一代不想学」，我更倾向于评论区那个修正版本：学习欲望不会消失，只是它会流向那些不能被代劳的事情上去，而学校真正该守住的，是让学生保留追问一个答案从何而来的习惯。

## Twitch 默认拿你的内容训练 AI，理由是换成主动加入就没人会加入

[原帖链接](https://www.reddit.com/r/technology/comments/1vmtqqa/twitch_is_now_using_your_content_to_train_amazon/)

Twitch 开始把用户内容用于训练亚马逊的 AI 模型，默认开启，关闭开关藏在设置深处。最有戏剧性的是，平台的首席产品官在一场直播里直接把话说了出来：如果做成主动加入，就没人会加入。

> "They explicitly stated its opt-out because if it was opt-in no one would lol."
>
> <cite>— u/kuldron，<a href="https://www.reddit.com/r/technology/comments/1vmtqqa/twitch_is_now_using_your_content_to_train_amazon/p3clmti/" target="_blank" rel="noopener">原帖评论</a></cite>

评论区有人把那场直播的问答整理了出来，读起来相当尴尬：观众问「如果我和一个没关掉开关的人连麦，我的内容算不算被用了」，高管答不上来，只说这是个好问题；被问到能不能让用户看到哪些频道开着、哪些关着，回答是没有这个计划；被问到为什么不发邮件通知，回答同样是好问题，然后补了一句——反正也不是每个人都看邮件。

> "So many "good questions" with not many good answers, or answers at all."
>
> <cite>— u/invyros，<a href="https://www.reddit.com/r/technology/comments/1vmtqqa/twitch_is_now_using_your_content_to_train_amazon/p3cbffj/" target="_blank" rel="noopener">原帖评论</a></cite>

争论主要分两派。一派认为默认开启本身就该被立法管住，不发通知就静默改用途尤其危险，欧盟迟早会像当年管 cookie 那样管这件事；另一派冷静得多，指出用户协议里大概率早就写好了这条，而且「默认开启」根本不是硬件圈的发明，行为经济学早把默认选项的威力研究透了，真要追责应该往商学院方向找。中间还有一条把整件事压缩成了一句话：这类事最后都归结为，这家公司卖的是产品给用户，还是把用户当产品卖。

实操信息也有人给了：Twitch 的关闭路径是点头像 → Settings → Security and Privacy → 拉到底部的 Training for Generative AI。值得一提的是，这条帖子和本期第二帖构成了一个挺讽刺的对照——一边是用户在为自己的数据被默认征用而愤怒，另一边是有人在认真研究这些数据训出来的模型会怎样冲击他们的饭碗，而两件事的定价权，目前都不在他们手上。
