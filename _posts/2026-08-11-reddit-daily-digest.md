---
layout: post
title: "Reddit 每日精选 | 2026.08.11"
headline: "号称每小时处理 5000 条请求的 AI，其实是一个人在后台手打"
date: 2026-08-11 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "旧金山一个 AI 聊天机器人被扒出全靠真人手动回答，评论区顺着这个笑话把「众包问答」重新发明了一遍。"
summary: "本期五帖：一个假 AI 让 Reddit 集体重新发明了知乎；一位芝麻种植户信了 AI 的除草建议，二十五英亩苗全没了，评论区把责任拆得很细；Linus 说内核更新体量暴涨成了新常态，真正的原因藏在扫描器里；r/programming 吵起了代码注释该写什么；最后一帖收集统计学里最反直觉的悖论，柯西分布和 Stein 悖论双双出场。"
digest_count: 5
---

今天挑的五帖表面上八竿子打不着，但连起来看有条暗线：我们越来越习惯把判断外包出去——外包给一个自称 AI 的黑箱，外包给扫描器，外包给「代码即文档」这类听上去很对的口号。而这五个帖子的评论区，恰好都在做同一件事：把交出去的那部分判断力，一点点要回来。

## 每小时 5000 条请求的「AI」，背后是一个人在手打

[原帖链接](https://www.reddit.com/r/technology/comments/1vkc9iu/san_francisco_ai_chatbot_revealed_to_be_one_man/)

旧金山一个挂着 AI 招牌的聊天机器人被扒出真相：所有回答都是真人手动敲的，高峰期号称每小时收到约 5000 条 prompt。消息一出，r/technology 的评论区先是笑成一片《底特律：变人》的梗，然后画风突然一转，认真起来了。

评论区最有意思的是一条自我发现式的推理链。有人半开玩笑地提议：既然人类集体已经知道这么多东西，何必烧掉半个电网让 AI 复述一遍？不如让多个人同时回答同一个问题，再投票选出最靠谱的答案——写到一半自己愣住了。接下来的几十条回复顺着这个思路，把 Reddit、Quora、Stack Overflow 乃至图书馆挨个「重新发明」了一遍，顺带把 Stack Overflow 因为审核过严而把自己管死的老账翻了出来。

> "What a great concept! Humans already know so much collectively, why are we burning the world for AI to do it? And maybe they could make it so multiple people could answer the same question, and vote on which answer is the best…"
>
> <cite>— u/_Aj_，<a href="https://www.reddit.com/r/technology/comments/1vkc9iu/san_francisco_ai_chatbot_revealed_to_be_one_man/p2sdvza/" target="_blank" rel="noopener">原帖评论</a></cite>

冷静派也不少。有人翻了原文指出这其实是一件行为艺术作品，作者还把回答的活儿众包给了随机注册的网友；也有人纯靠算术拆台——一小时只有 3600 秒，一个人不可能每秒回答一条以上，「收到 5000 条」和「回答 5000 条」是两回事。而当话题滑向「Amazon Go 无人商店其实是印度人在后台看监控」这个流传甚广的段子时，一条高质量回复直接把它按住了：那 1000 名员工做的是标注和纠错，是机器学习流程里本来就该有的人类环节，不等于整套系统是骗局。

> "Heads up for anyone who believes this: this is a complete misrepresentation of what was actually happening. Anybody who knows how machine learning works knows that training models requires lots of human input into the learning process, especially for a new system…"
>
> <cite>— u/mathers101，<a href="https://www.reddit.com/r/technology/comments/1vkc9iu/san_francisco_ai_chatbot_revealed_to_be_one_man/p2svyzk/" target="_blank" rel="noopener">原帖评论</a></cite>

这件事真正好笑的地方在于，一个假 AI 反而让人重新意识到真人问答的价值密度有多高。中文互联网这几年也在经历同一场迁移：越来越多人遇到问题第一反应是问模型，而不是去翻别人踩过的坑。但反过来说，那条「人类标注本来就是流程一部分」的提醒同样重要——嘲笑「AI 背后是人」很爽，可如果因此就认定所有 AI 产品都是障眼法，那也只是换了个方向偷懒。

## 农户听 AI 的话打了除草剂，二十五英亩芝麻苗一起没了

[原帖链接](https://www.reddit.com/r/technology/comments/1vku8wv/farmer_trusted_ai_after_it_gave_good_advice_then/)

一位芝麻种植户之前几次问 AI 都得到了不错的建议，于是这回也照单全收：AI 推荐了一种除草剂，他照做，结果连自家二十五英亩的芝麻苗一起打死了。评论区开头是长长一串《蠢蛋进化论》玩梗接龙，但往下翻，含金量陡增。

被顶得最高的一句只有短短一行，却说透了整件事的机制——正是前面那几次「答对了」，攒出了这一次的致命信任。顺着这条线，讨论迅速分成了几派。一派追责到提问方式：有人翻出原文说，AI 其实明确讲过那种除草剂应当定点喷洒而非全田漫撒，是农户自己扩大了施用范围；还有人较真到底，去找了英文报道所转述的原始报道对照，发现标题的机器翻译本身就有歧义，读起来几乎像是「要把芝麻当草除掉」，而当事人显然不是这个意思。另一派则把矛头指向工具本身：真正的农技专家在给方案之前一定会反问你种的是什么、需不需要选择性药剂，而模型不会反问，它只会给出一个答案。

> "A few correct answers can build dangerous trust"
>
> <cite>— u/lofty23_smart，<a href="https://www.reddit.com/r/technology/comments/1vku8wv/farmer_trusted_ai_after_it_gave_good_advice_then/p2w6jcp/" target="_blank" rel="noopener">原帖评论</a></cite>

> "A human expert would have asked questions, like what he's growing and if he needs pesticides that kill the weed without poisoning the crop. AI won't replace human experts until they at least learn to obtain all relevant information before making a recommendation."
>
> <cite>— u/pnkxz，<a href="https://www.reddit.com/r/technology/comments/1vku8wv/farmer_trusted_ai_after_it_gave_good_advice_then/p2x5m0z/" target="_blank" rel="noopener">原帖评论</a></cite>

还有两条评论组合起来特别扎心。一位在科技公司干活的人说，同事丢过来的需求经常没头没尾，他的习惯是先退一步问「我们到底想达成什么」，再倒推出本该被问出来的那个问题；紧接着有人补刀：人们对 AI 也是这么提需求的，区别只在于 AI 不会退这一步，它照单全收然后照样给答案。另一位厨师出身的用户则给出了那条最实用的判断标准——他用模型改菜谱，准确率大概八成五，剩下那一成五他自己能兜住，因为那是他的专业。问题不在于 AI 会不会错，而在于你在这件事上是不是那个能兜底的人。

对国内读者最有用的一条实操建议其实来自一句反问：谁会拿一个没验证过的新方案，直接铺满整片地？先在一小块地上试，本来就是农业几千年的常识。AI 没有取消这条常识，只是让人跳过它跳得更快了。

## Linus 说内核更新体量暴涨是新常态，真正的解释在评论区

[原帖链接](https://www.reddit.com/r/technology/comments/1vkjpxh/linus_torvalds_says_ai_has_made_huge_linux_kernel/)

Linus Torvalds 说，AI 已经让「体量巨大的内核更新」变成了新常态。这个说法很容易被读成「AI 在往内核里塞代码」，但评论区第一时间纠正了方向：暴涨的主要不是新功能，而是补丁。

最被认可的解释是：新一代模型正在以极高的效率翻出陈年老代码里的安全漏洞，维护者被迫进入高强度打补丁模式。有人给出了相当具体的量级，说这不是「几十个老漏洞」的规模。也有人从工作性质上解释了为什么这件事特别适合交给机器——在几千万行代码里做枯燥、机械、需要极高耐心的排查，恰好是人类最容易疲劳、机器最不在乎的部分。Chrome、Windows、macOS、Firefox 近期安全修复数量的异常上涨，被拿来作为同一趋势的旁证。

> "This is 400+ kernel CVEs spanning XFS, Btrfs, Netfilter, Bluetooth, KVM, NVMe, SMB, Wi-Fi, IOMMU, and RDMA in a 24-hour window."
>
> <cite>— u/Opening_One7713，<a href="https://www.reddit.com/r/technology/comments/1vkjpxh/linus_torvalds_says_ai_has_made_huge_linux_kernel/p2vwghy/" target="_blank" rel="noopener">原帖评论</a></cite>

> "Debugging code and searching for vulnerabilities is a slow, methodical, and boring process, a perfect job for AI tbh"
>
> <cite>— u/BoXLegend，<a href="https://www.reddit.com/r/technology/comments/1vkjpxh/linus_torvalds_says_ai_has_made_huge_linux_kernel/p2ubpny/" target="_blank" rel="noopener">原帖评论</a></cite>

接下来的讨论比新闻本身更值得看。有人问了个好问题：等扫描器把历史存量啃完，这波洪峰会不会自然回落？多数人认为会——漏洞不是无限的，尤其内核的职责边界相对清晰。另一条被反复引用的观点则提醒大家别把「找漏洞」和「写代码」混为一谈：即使禁止维护者用 AI 修漏洞，也拦不住第三方用 AI 去找漏洞，攻防两端的成本是同时下降的。还有一场很有代表性的小争论：有人说 LLM 让他更倾向于自己造轮子、减少依赖，因为他信不过别人产出的东西；立刻有人反驳——你不会自己写一个加密库或 JS 运行时，依赖的价值恰恰在于有人替你持续维护；与其绕开成熟库，不如用模型去审计它、把修复提交回上游。

从中文开发者的角度看，这一波最直接的影响可能不是「AI 帮我写代码」，而是升级节奏被迫加快。当上游的 CVE 以这个速率涌出来，那种「跑得好好的就先不动」的策略，风险成本正在悄悄变高。

## 代码注释到底该写什么：r/programming 吵翻了

[原帖链接](https://www.reddit.com/r/programming/comments/1vkwqh0/on_comments/)

有人写了篇长文为代码注释正名，理由是这些年「注释大多没用、过时、重复代码本身」的观念太流行，导致大家读也不读、写也不写。帖子发到 r/programming，立刻炸出了一大批各执一词的老程序员。

第一个被挑战的居然是那句人人都会背的「写 why 不写 what」。有人直言这条建议一直都很糟糕：很多时候 what 本身就是 why，而且有些 what 重要到值得专门强调一句；这条口号之所以流行，是因为它在对抗的其实是「// 对 users 做循环」这种垃圾注释，把靶子设得太低，反而把注释这件事整体贬值了。也有人追溯到源头，搬出了《Clean Code》里那段「注释永远是失败」的著名论断——原书说每写一条注释都该龇牙咧嘴地为自己表达能力的失败而羞愧——认为正是这类布道，让一整代新人对注释产生了道德负担。

> "This has always been terrible advice. The what is often the why."
>
> <cite>— u/farsightfallen，<a href="https://www.reddit.com/r/programming/comments/1vkwqh0/on_comments/p2xwedq/" target="_blank" rel="noopener">原帖评论</a></cite>

第二场争论更贴近日常：变更原因到底该写进 git 还是写进注释？主张写 git 的人理由很干脆——那本来就是版本控制的职责。反对者的反驳同样有力：git 适合放「改了什么」和一句话摘要，细节还是应该躺在代码旁边，否则你得跨系统上下文切换，去查一个可能十二年前就下线了的工单编号。折中派的方案是三层——commit 写 tl;dr，注释写完整的 why 和必要的 how，超长的背景丢给 issue。顺带一提，评论区还贡献了一大批「注释奇观」：为每个类和字段自动生成的废话注释、把 `i++` 用五行文档解释一遍再改成 `i--` 的恶作剧，以及那条永远的经典——雷神之锤里那句 evil floating point bit level hacking 后面跟着的 what the fuck。

> "I once had a teacher describe comments as messages you can send to yourself in the future"
>
> <cite>— u/doctorlongghost，<a href="https://www.reddit.com/r/programming/comments/1vkwqh0/on_comments/p2x23vp/" target="_blank" rel="noopener">原帖评论</a></cite>

这场讨论放在 2026 年读有种额外的意味。当大量代码由模型生成、由另一个模型审阅，「代码即文档」这条假设正在变得更脆弱——模型能复述代码做了什么，却复述不出当年为什么绕开那个方案、为什么这个魔法数字不能改。TODO 该不该提交也是同理：有人的做法是绝不留 TODO，而是建一条 backlog 再在注释里链过去。说到底，注释的价值从来不在于解释语法，而在于把当时脑子里那些没能写进代码的约束保存下来。

## 统计学里最反直觉的那些悖论，被翻了个底朝天

[原帖链接](https://www.reddit.com/r/statistics/comments/1vknfgv/q_i_am_looking_for_some_very_interesting_and/)

有人要做演讲，跑到 r/statistics 求推荐「非常有意思、越冷门越好」的统计学概念、悖论和理论。这类求助帖往往会变成一份高质量清单，这次也不例外。

辛普森悖论、伯克森悖论、蒙提霍尔、幸存者偏差这些常客当然都在，但更值得记下来的是几个不那么大众的。一条讲柯西分布的回复几乎可以直接拿去当演讲素材：它长得和正态分布很像，定义也简单，却没有均值、没有方差，一切矩都不存在——直接后果是，你采一万个样本求平均，对中心位置的估计并不比只采一个样本更准。大数定律在这里彻底失效。

> "It's easy to define (it's the ratio of two I.I.D. random variables with standard normal distributions) and looks a lot like a normal distribution, but its mean, variance, and other moments are undefined."
>
> <cite>— u/Mishtle，<a href="https://www.reddit.com/r/statistics/comments/1vknfgv/q_i_am_looking_for_some_very_interesting_and/p2vhdnt/" target="_blank" rel="noopener">原帖评论</a></cite>

另一条讲 Stein 悖论的回复同样精彩：估计一个均值，样本均值最优；估计两个，还是最优；可一旦你要同时估计三个互不相干的量——比如身高、体重、年龄——分别取样本均值就不再是最优的了，把三个估计一起往某个任意选定的点轻轻拉一下，整体误差反而更小。三个毫无关系的问题放在一起解，居然比分开解更准，这个结论至今读起来都很别扭。

> "Suppose you want to estimate THREE averages at the same time… Now all of a sudden taking the sample mean for each statistic is NOT the most efficient."
>
> <cite>— u/Sandjee12，<a href="https://www.reddit.com/r/statistics/comments/1vknfgv/q_i_am_looking_for_some_very_interesting_and/p2xnpk8/" target="_blank" rel="noopener">原帖评论</a></cite>

清单里还有本福特定律与司法会计、回归均值与身高遗传、数据堆积效应（受访者习惯把年龄和收入报成整数，导致分布上出现一根根尖刺）等等。但最沉重的一条推荐是把几起真实冤案列了进去：护士被指控连环杀人的案子，控方所依据的正是被误用的条件概率——同一种统计误用在不同年代反复上演。这份清单最好的地方也在这里：它没有停留在智力游戏，而是提醒你，看错一个概率是要有人付出代价的。Stein 悖论的那个「拉一下」，其实就是今天所有正则化和收缩估计的思想源头，而这一切都始于一个反直觉到让人不适的结论。
