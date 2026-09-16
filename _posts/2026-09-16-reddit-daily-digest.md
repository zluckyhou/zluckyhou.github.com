---
layout: post
title: "Reddit 每日精选 | 2026.09.16"
headline: "今天五个帖子都在算同一笔账：标价上那个数字，和你真正付出去的东西，从来不是一回事"
date: 2026-09-16 09:40:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "全世界最便宜的推理服务被扒成转手倒卖、薪资范围背后是算你底线的算法、日本 GDP 蒸发 8670 亿其实只是换了个计价单位"
summary: "本期五帖：号称全球最便宜的 AI 推理服务商 CrofAI 被扒出是 OpenRouter 套壳、偷换模型两年后跑路；Sega 模拟器作者宣称自己的代码 100% 手工无 AI，评论区为「能跑就行算不算够」吵了起来；波士顿终止了 Flock 的车牌识别合约，转头签了另外两家；一篇报道说雇主正在用个人数据推算你能接受的最低薪资，评论区当场对上了亲身经历；最后是日本 GDP 以美元计价蒸发 8670 亿美元的图，评论区把这笔账重新算了一遍。"
digest_count: 5
---

今天这五个帖子来自五个毫不相干的板块，但翻完之后，脑子里浮现的是同一个动作：**有人把标价牌翻过来，看背面写了什么。**

一个标着「全世界最便宜」的 API、一段标着「能跑就行」的代码、一份标着薪资范围的 JD、一条标着断崖式下跌的 GDP 曲线、一纸标着「我们终止了监控合约」的公告——这些数字和说法本身都没撒谎，问题在于它们统计的东西和你以为的不是同一样。今天评论区里质量最高的那批回复，做的都是同一件事：不急着为结论叫好或骂街，先问一句「这个数字到底在计量什么」。

## 一、「全世界最便宜的推理服务」，扒开是一层 OpenRouter 套壳

[CrofAI 被曝是 OpenRouter 套壳，悄悄把请求路由到更便宜的小模型，加价最高 20 倍](https://www.reddit.com/r/LocalLLaMA/comments/1wgwe4n/crofai_cheapest_inference_provider_in_the_world/)

r/LocalLLaMA 今天最热的帖子，是一份写得极其扎实的调查复盘。CrofAI（crof.ai / nahcrof.com）是一家小型推理服务商，主打「什么新模型都有，而且比谁都便宜」，老板公开宣称自己写了定制推理引擎，别家贵是因为「技术不行」。实际情况是：它就是个 OpenRouter 套壳，你点名要的模型会被悄悄换成更便宜的那个——比如按 $2/$10 的价格卖 kimi-k3，转手路由到 GLM 5.3 Flash，输入端加价 13.3 倍、输出端 20 倍；它那个号称自研的 greg 系列模型，逐个对上的都是别家开源模型。

最值得一读的是调查者留出的那段「宽限期」：对方一共做了五次「修复」，每一次改的都不是路由，而是怎么把 OpenRouter 的指纹藏得更深。还有一些算术上的硬伤——声称用 Vast 上租的 RTX Pro 6000 跑 Kimi K3，可那模型即便量化到 Q2_K 也要约 802 GiB，而 Vast 上最大的那种机器八卡加起来只有 765 GiB；又说要在自己的 DGX Spark 上跑 deepseek-v4-flash 来「排查问题」，而 Spark 只有 128 GB 内存。曝光之后这人先宣布关站，接着伪造出一个「团队接管、两周后恢复服务」的剧本，几小时后所有线上痕迹一并删除。

> "I cannot stress this enough: if you bought any credits (even if you used them up) you are entitled to a full refund for every transaction as the victim of fraud."
>
> <cite>— u/SorosAhaverom（原帖作者），<a href="https://www.reddit.com/r/LocalLLaMA/comments/1wgwe4n/crofai_cheapest_inference_provider_in_the_world/" target="_blank" rel="noopener">原帖</a></cite>

评论区里最清醒的一条来自老用户，他承认自己当初就是冲着「便宜得离谱的订阅计划」去的：

> "They were a small player, but the cheapest several months ago (with ridiculously generous subscription plans). Of course it turned out that the cheapness was only possible because they weren't providing the actual models."
>
> <cite>— u/creamyhorror，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1wgwe4n/crofai_cheapest_inference_provider_in_the_world/p9xpbiq/" target="_blank" rel="noopener">原帖评论</a></cite>

同一位还提到，这个圈子本身就很「打一枪换一个地方」，大家早就习惯把用量分散在多家服务商、同时买好几份订阅，并且「心里都清楚多数零数据留存（ZDR）的承诺大概率是假的」——于是有人干脆拉了个 Discord，专门交换各家究竟把请求转给了谁、各家输出质量有什么差别。另一条评论则是今天最好笑也最扎心的黑色幽默：既然他们连自己声称的模型都提供不了，大概也没本事偷你的数据。

对中文读者的现实意义很直接：**这一轮 API 中间商的价格战里，「比官方便宜一大截」几乎是一个可以独立成立的风险信号。**判断方法其实不玄，都是可验证的——固定 prompt 反复测输出风格与 tokenizer 行为、对比响应头和限流特征、做同题横评。真要用，至少别把生产密钥和客户数据放上去；原帖作者最后那条建议尤其值得抄作业：一旦发现服务商有问题，默认你发过去的所有内容都已被记录，轮换密钥、换卡，别抱侥幸。

## 二、Sega 模拟器作者：我的代码 100% 手工、无 AI——然后评论区吵起来了

[「如果电脑把苦活都干了，那还有什么意义？」BlastEm 作者炮轰 AI 垃圾项目](https://www.reddit.com/r/technology/comments/1wgmvb1/if_a_computer_does_all_the_hard_work_whats_the/)

BlastEm 是一个以精度著称的 Sega Genesis 模拟器，作者公开表态：这个项目至今由 100% 手工、不含 AI 的代码组成，并且打算一直这样；他说自己不否认 AI 在商业开发里能提速，但复古模拟这个圈子里 vibe coding 项目泛滥，让他觉得挺泄气。帖子一出，r/technology 罕见地没有一边倒。

第一种声音是替用户说话的：意义当然是「能用」。会去逆向一台主机、去优化模拟内核的人永远是极少数，而想跑个老游戏的人是海量的——模拟器的下载量比模拟器项目多几个数量级，这本身就是答案。

第二种声音则把账算到了更长的时间尺度上，我觉得这是今天最有分量的一条：

> "It's simply not just about having a program that runs, it's about obtaining and maintaining knowledge with an archivist mindset. Preservation, accuracy and long-term thinking are goals too."
>
> <cite>— u/NightSpaghetti，<a href="https://www.reddit.com/r/technology/comments/1wgmvb1/if_a_computer_does_all_the_hard_work_whats_the/p9ww1lh/" target="_blank" rel="noopener">原帖评论</a></cite>

同一条评论补了一句很具体的抱怨：真正让老项目维护者头疼的，不是新人用 AI，而是一堆又大又乱的 vibe-coded 代码涌进社区，作者半年后就腻了，留下没人接手的烂摊子。这句话把「AI 写代码好不好」这个空泛问题，换成了一个可操作的问题——**谁来维护？**

反对意见同样犀利，而且落点不在技术上：

> "I respect him holding these opinions, I don't respect the take."
>
> <cite>— u/seridos，<a href="https://www.reddit.com/r/technology/comments/1wgmvb1/if_a_computer_does_all_the_hard_work_whats_the/p9zndw4/" target="_blank" rel="noopener">原帖评论</a></cite>

他的理由是：你要是真为自己写的，闷头写就是了，不必把「手工代码」当成营销词挂在门口，这是在立牌坊。还有人给出了更冷静的一刀——坚持「纯手工」在长期未必占优，可能反而会被用了工具的竞品甩开；不过，他有他的动机，用户也有用户的动机，各自选就好。

我的看法：这场争论里真正被忽略的不是立场，而是**成本发生在哪个时点**。AI 生成的代码把成本挪到了未来——挪到调试、理解、交接、五年后有人来修一个诡异边缘 case 的那一刻。一次性的小工具，这笔挪账划得来；要维护十年的精度敏感项目，账就完全反过来。「用不用 AI」从来不是价值观问题，是项目生命周期的问题。

## 三、波士顿终止了 Flock 的合约，然后签了另外两家

[外部机构违规获取车牌数据后，波士顿弃用 Flock](https://www.reddit.com/r/technology/comments/1wgyj0f/boston_drops_flock_after_outside_agencies_gained/)

波士顿警方在车牌识别公司 Flock 被曝出「外部机构能拿到本地车辆数据」之后，终止了与它的试点。听上去是隐私倡导者的一场胜利，然后评论区的第一条高赞回复就把这个胜利拆了：终止 Flock 之后，波士顿警方转头开了两个新试点——今年 2 月和 Motorola 合作的 45 个摄像头，6 月和 Axon 合作的 30 个。用另一位的话说，砍掉一个蛇头，长出来两个。

真正涨知识的是接下来那一串技术性补充：Flock 有个叫 Wing Gateway 的产品，可以往任何现成的闭路电视信号上挂一个盒子，那路摄像头就等效变成了一台不起眼的 Flock 摄像头。也就是说，「合约结束」不等于「设备下线」，这才引出了今天这个板块里最本质的一条观察：

> "The important thing is that the product that Flock actually sells is access to EVERYONE'S cameras. So they have an interest in keeping cameras up even if the places they are in don't want them."
>
> <cite>— u/AnAncientBog，<a href="https://www.reddit.com/r/technology/comments/1wgyj0f/boston_drops_flock_after_outside_agencies_gained/p9z94id/" target="_blank" rel="noopener">原帖评论</a></cite>

他还预判了下一步：这些公司最终大概会把数据汇到一起，到那时候「摄像头是哪家装的」就不重要了。顺着这个逻辑，另一位常在这条线里补充事实的用户给出了结论：

> "We have to push for regulations to preserve privacy against mass surveillance instead of just trying to get one specific product by a specific manufacturer taken down at a time"
>
> <cite>— u/NotFlameRetardant，<a href="https://www.reddit.com/r/technology/comments/1wgyj0f/boston_drops_flock_after_outside_agencies_gained/p9z2h17/" target="_blank" rel="noopener">原帖评论</a></cite>

他的论据是：公众压力推倒一个产品所需的时间，永远长于厂商推出下一个产品所需的时间（他顺带提到 Flock 目前增长最快的产品线是无人机）。所以逐个产品地抵制，注定是场猫鼠游戏。

这条思路值得单独拎出来：**围绕单一供应商的抗议，赢的是新闻标题；围绕数据本身的规则，赢的才是结构。**真正该写进规则的其实是几个很枯燥的条款——数据保存多久、谁有权查询、每次查询是否留痕可审计、合约终止时硬件是否必须物理拆除。这些条款一条都不上头条，但它们才是那笔账真正的金额。

## 四、雇主正在用你的个人数据，算出你最低能接受多少薪水

[报道：雇主用个人数据推算你愿意接受的最低薪资](https://www.reddit.com/r/technology/comments/1whewrj/employers_are_using_your_personal_data_to_figure/)

这是今天 r/technology 上升最快的帖子之一：有报道称雇主正在借助个人数据，估算候选人能接受的薪资下限，然后精确地报到那个位置。这类报道通常容易流于耸动，但这条帖子的评论区几乎立刻提供了「体感证据」——第一条高赞就是一段刚发生的亲历：

> "Anecdotally, I just got a new job last week and the offer came in at literally the exact lowest number I told myself I'd accept for the job. No idea if they are using a system like this or not, but crazy how exact they hit it."
>
> <cite>— u/YeetedApple，<a href="https://www.reddit.com/r/technology/comments/1whewrj/employers_are_using_your_personal_data_to_figure/pa1wzr8/" target="_blank" rel="noopener">原帖评论</a></cite>

他后来也补了下文：试着往上谈，对方态度很硬；考虑到自己原岗位正在被外包、这个新职位仍算晋升加薪，最终还是接了。这个细节恰恰说明了这套机制的要害——它并不需要读你的心，只要能估出你当下的处境有多被动就够了。

对策层面，评论区的共识意外地一致而朴素：报价一定要往上谈，10%～15% 是个安全区间。

> "I've asked 3 times and have been successful 3 times. The only time I didn't ask was when they asked what my range was and added 10% to it with the offer."
>
> <cite>— u/binger5，<a href="https://www.reddit.com/r/technology/comments/1whewrj/employers_are_using_your_personal_data_to_figure/pa25m08/" target="_blank" rel="noopener">原帖评论</a></cite>

也有反例：一位失业了半年的求职者走完全部面试后拿到录用，只因多要 5000 美元（135k 对 140k）就被晾了两个月，直到岗位重新挂出来才第二次入职成功——但他说那家公司后来成了他干过最好的地方，入职半年还涨了 15%。同一个帖子里还有人提到，妻子面完好几轮之后，拿到的报价远低于职位描述上写的范围，推回去之后才往上挪了一点。

我的延伸想法：这条新闻最该让人警觉的地方，不是「公司在压价」——公司一直在压价——而是**压价从一门看人下菜碟的手艺，变成了可规模化、可复用、还会持续迭代的系统。**你的谈判对手不再是对面那个招聘经理的经验，而是一个见过几十万个候选人的模型。国内求职场景里那句「说说你目前的薪资和期望」，在这个语境下的分量得重新掂量：那不是流程，那是在给模型喂标注。对个人来说唯一稳定有效的对冲还是老三样——不主动报当前薪资、让对方先出数字、手上尽量保持第二个选项。

## 五、日本 GDP 少了 8670 亿美元，评论区把这笔账重算了一遍

[[OC] 以美元计价，日本 GDP 自 2019 年以来减少了 8670 亿美元（IMF，2026 年预测）](https://www.reddit.com/r/dataisbeautiful/comments/1wh0txn/oc_japans_gdp_in_dollars_has_fallen_by_867/)

一张图：按美元计价，日本 GDP 相比 2019 年蒸发了 8670 亿美元。这种图天生适合被当成「某国崩了」的素材，而 r/dataisbeautiful 的评论区今天干了件好事——把这个数字拆回它真正计量的东西。

最先出现的是人口视角：这段时间日本人口减少了约 2%～3%，按比例算大约对应 1500 亿美元的 GDP，老龄化确实是日本最大的问题之一。但马上有人指出，这解释不了主要部分：

> "Again, GDP is actually growing if you disregard the weak yen, which has very little to do with the population crisis, and very much to do with government policy."
>
> <cite>— u/\_WasteOfSkin\_，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wh0txn/oc_japans_gdp_in_dollars_has_fallen_by_867/p9yl08w/" target="_blank" rel="noopener">原帖评论</a></cite>

也就是说：以日元计价，日本 GDP 是在增长的；这张图画的与其说是日本经济，不如说是日元汇率。另有评论直接甩出一句「实际 GDP 增长了 3%，所以这根本不算新闻」，以及一个补充视角——人口既然在减少，人均口径下这张图会更好看。至于日元为什么跌，回答从利差与套息交易，讲到日本央行购买国债、美债收益率上行吸走资本，而我认为最完整的是这一条：

> "Japan is just very odd with its combo of aging/shrinking population, high savings rate and massive domestic-held sovereign debt that just crashes everything into deflation every time BoJ tries to raise rates for real."
>
> <cite>— u/Tjaeng，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wh0txn/oc_japans_gdp_in_dollars_has_fallen_by_867/p9yw8m5/" target="_blank" rel="noopener">原帖评论</a></cite>

同一条评论还点出了真正的分配问题：日本是全球最大的债权国之一，海外资产以日元计价的价值和收益，让日本企业和有资产的退休者依然相对富裕；而拿固定工资、又吃下全部输入型通胀的上班族，日子并不好过。**同一个汇率变动，在资产端是账面增值，在工资端是实际购买力缩水。**

这一节最值得带走的不是关于日本的任何结论，而是一个读图习惯：**任何跨国、跨年的「美元计价」对比，第一步都该问汇率贡献了多少。**不管是 GDP、人均收入、企业营收还是研发投入，用同一个单位换算之后，你可能是在观察一个国家，也可能只是在观察一条汇率曲线。这个提醒对天天看中美经济体量对比图的人来说，大概比日本本身更有用。

---

写到这儿回头看，今天这五帖的共同点其实挺朴素：**便宜的 API、省力的代码、终止的合约、体面的报价、下跌的曲线——每一个数字都成立，每一个数字都不完整。**而评论区里那些真正有价值的回复，几乎都不是在反驳结论，只是在补上被省略的那一栏：这笔钱最后由谁付、什么时候付。
