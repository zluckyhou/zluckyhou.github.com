---
layout: post
title: "Reddit 每日精选 | 2026.09.19"
headline: "有人用矿卡堆出 768GB 显存，有人在晶圆厂里劝你别去"
date: 2026-09-19 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "从捡垃圾攒出 768GB 显存的硬核玩家，到晶圆厂里没人愿意提的那些事。"
summary: "本期四个帖子横跨硬件、产业、工程实践与版权争议：有人用矿卡堆出 768GB 显存并公开叫板「算 ROI 的人」；美国晶圆厂喊缺 15.7 万人，评论区却挤满了劝退的亲历者；一句关于单元测试的粗口引发了对测试本质的争论；微软高管称 AI 训练是「人类史上最大的劳动力盗窃」，而最有含量的反驳来自一位并不站 AI 公司的网友。"
digest_count: 4
---

今天这几个帖子凑在一起有点意思：上半场是两群人对「硬件」截然不同的态度——一边是自己掏钱堆显存堆到兴奋得睡不着觉的爱好者，一边是拿着六位数年薪却拼命劝人别来的晶圆厂工程师；下半场则是两场老派的口水仗，一场关于单元测试到底为谁而写，一场关于 AI 训练算不算偷。四个帖子的共同点是：正文只是引子，评论区才是正片。

## 一、用一块专业卡的价钱，堆出 768GB 显存

[原帖：768gb vram for less than the price of one RTX 6000](https://www.reddit.com/r/LocalLLaMA/comments/1wjr59t/768gb_vram_for_less_than_the_price_of_one_rtx_6000/)

r/LocalLLaMA 的老玩家 u/segmond 晒出了他的新机器：12 张 64GB 的 CMP 170HX（当年的挖矿卡），凑出 768GB 显存，总价还不到一张 RTX 6000 Pro。他用它跑 GLM5.3、DeepSeek v4.1 Flash、Qwen3.8 系列这些大块头，vllm 下预填充约 3800 tokens/s、生成 65 tokens/s。帖子里他还顺手把预期中的嘲讽提前堵了回去。

> "I look forward reading the replies how API usage is cheaper, or how it will take 52 light years to break even or the noise, or the electrical cost. NOT."
>
> <cite>— u/segmond（原帖作者），<a href="https://www.reddit.com/r/LocalLLaMA/comments/1wjr59t/768gb_vram_for_less_than_the_price_of_one_rtx_6000/" target="_blank" rel="noopener">原帖</a></cite>

评论区最有意思的不是参数讨论，而是大家对「值不值」这件事的集体表态。有人直接把这种行为定性为信仰而非投资：重点不是回本，而是那份「魔法归我所有」的掌控感。u/segmond 自己在另一条回复里给出了更具体的理由——他两年前就退掉了订阅，因为那些公司开始呼吁监管开源模型，而且「对我们这些搞实验的人来说，他们是在白嫖我们的数据和想法」。

> "Yeah it's not about return of investment. It's the fact that you're possessing the Ai magic without relying on someone else's stuff."
>
> <cite>— u/RickyRickC137，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1wjr59t/768gb_vram_for_less_than_the_price_of_one_rtx_6000/pam9rop/" target="_blank" rel="noopener">原帖评论</a></cite>

另一条暗线更现实：这类「捡垃圾」的窗口期正在被自媒体迅速关死。有人三周前 1000 美元买到同款卡，现在二手价已经涨到 2500，楼里普遍认为是 LTT 那期视频的功劳。u/segmond 对此倒很看得开，他说自己之前用 10 张 16GB MI50 堆过 160GB，当时一张才 90 美元。

> "Once people know about it, price goes up. So just stay on the look out for deals, eventually another opportunity will come up and you can pounce on it."
>
> <cite>— u/segmond，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1wjr59t/768gb_vram_for_less_than_the_price_of_one_rtx_6000/pakt0ld/" target="_blank" rel="noopener">原帖评论</a></cite>

**我的看法**：国内折腾本地大模型的朋友对这套路数应该不陌生，从 P40 到 MI50 再到各种矿卡，剧本完全一致——信息差就是利润，而信息差的寿命现在按周计算。但比省钱更值得注意的是那句「不依赖别人的东西」。当模型能力越来越集中在几家公司手里，愿意承担高昂成本换取完全自主的人不会消失，反而会变成一个稳定的小众市场。国产显存方案如果哪天能吃下这块需求，故事会比现在有趣得多。

## 二、美国晶圆厂缺 15.7 万人，评论区在集体劝退

[原帖：US chip fabs face massive 157,000 worker shortfall](https://www.reddit.com/r/technology/comments/1wjp1yc/us_chip_fabs_face_massive_157000_worker_shortfall/)

一篇行业报道称，美国芯片制造业面临 15.7 万人的用工缺口，而只有 3% 的工科毕业生愿意进入这个行业——哪怕薪资是六位数。这种「高薪也招不到人」的新闻通常会引来一堆「年轻人吃不了苦」的评论，但这次楼里几乎一边倒地在解释：为什么不去。

最沉重的一条来自一位在德州仪器晶圆厂工作的应急响应队成员。上面有人提到台积电凤凰城厂有人在厂内去世、公司对其他员工隐瞒，他跟了一条自己的经历。

> "I'm on the emergency response team so I actually carried his body out of the building. The only official word about it was our supervisor forwarding the obituary the next day and telling us where to donate for the funeral. Work didn't slow down even for a minute."
>
> <cite>— u/KtaadnRota，<a href="https://www.reddit.com/r/technology/comments/1wjp1yc/us_chip_fabs_face_massive_157000_worker_shortfall/palwkge/" target="_blank" rel="noopener">原帖评论</a></cite>

除了工作环境，更硬的劝退理由是周期性裁员。一位干了 28 年的从业者说，他经历过至少 15 轮大规模裁员，只是近几年需求才稳定下来；也有人说得更直白——行业收入稳定，但工作不稳定，招人裁人本身就是上市公司的标准操作。还有人用一句话总结了自己的职业选择。

> "I started my career in chip fab, now I'm in petrochemical. Guess which one is significantly more stable."
>
> <cite>— u/Martin_Aurelius，<a href="https://www.reddit.com/r/technology/comments/1wjp1yc/us_chip_fabs_face_massive_157000_worker_shortfall/pakkbwi/" target="_blank" rel="noopener">原帖评论</a></cite>

关于「为什么要从台湾调人」，一位在台湾生活五年以上的网友的回复最中肯：不是美国人干不了，也不是台积电付不起，而是双方都还没准备好接受对方的条件——台湾本地博士起薪约 6 万美元，薪资被长期压低，而这套成本结构一旦搬到美国就不成立了。

**我的看法**：这个帖子读下来，「缺人」根本不是技能问题，而是这个岗位在美国劳动力市场上性价比不够。有意思的是，评论区反复提到的那部纪录片《美国工厂》讲的正是中国管理方式在美国水土不服，而现在轮到台积电重演同一出戏。对中国读者的启发可能在于：我们习惯把「肯拼」当成产业竞争力，但它本质上是一种成本优势，而成本优势是会被转移和追平的——一旦拼不动了，剩下的就只有工艺和设备本身的壁垒。

## 三、单元测试到底是写给谁看的

[原帖：the main purpose of unit tests is keeping your code from being violently sh\*t on by others](https://www.reddit.com/r/programming/comments/1wk4lod/the_main_purpose_of_unit_tests_is_keeping_your/)

一篇博客用相当有攻击性的措辞主张：单元测试的主要作用，是防止别人把你的代码改得面目全非。这个说法在 r/programming 没获得多少认同，但由此展开的讨论把「测试到底在防什么」这件事聊得挺透。

第一波反应是对语气的反感。有人指出，同样的道理完全可以说得体面些。

> "You could just frame tests as “being more descriptive of the intention of the code” or you could frame it how the friendly author here framed it."
>
> <cite>— u/Zenneth014，<a href="https://www.reddit.com/r/programming/comments/1wk4lod/the_main_purpose_of_unit_tests_is_keeping_your/panzho7/" target="_blank" rel="noopener">原帖评论</a></cite>

更有营养的是几条把问题重新定义的回复。一位正在读《修改代码的艺术》的网友搬出了 Michael Feathers 的经典定义：没有测试的代码就是遗留代码，测试的目的是让你能无所畏惧地修改它；而且为了让代码可测，你往往会被迫把职责拆得更干净。还有人用一句话概括了全部争论。

> "Or in other words, to prevent implicit contracts from being unknowingly broken."
>
> <cite>— u/zhivago，<a href="https://www.reddit.com/r/programming/comments/1wk4lod/the_main_purpose_of_unit_tests_is_keeping_your/pao5nkx/" target="_blank" rel="noopener">原帖评论</a></cite>

最新鲜的分歧来自 AI 写测试。有人说他现在让大模型写代码时会明确要求不要写测试，因为 LLM 倾向于测那些无关紧要的实现细节，反而让正确的改动变得更难做；也有人反过来说，让 Claude 重写一个项目时，它花了大量篇幅写测试来证明新环境是可隔离、可测试的。楼里还有一位 fintech 创业公司的技术负责人坦白团队完全不写单元测试，靠小 PR、强 code review 和人工端到端测试撑着，「等真有需要了再写」。

> "The issue with tests, specially written by llms, is that they test irrelevant implementation details which makes correct changes more difficult."
>
> <cite>— u/teerre，<a href="https://www.reddit.com/r/programming/comments/1wk4lod/the_main_purpose_of_unit_tests_is_keeping_your/pao5bu9/" target="_blank" rel="noopener">原帖评论</a></cite>

**我的看法**：AI 生成测试正在制造一类新的技术债——覆盖率很好看，但测的全是实现细节，稍微重构就大面积飘红，于是团队开始习惯性地删测试而不是改代码，测试的信用就这么被耗光了。判断标准其实没变：一个测试该断言的是「这个模块承诺了什么」，而不是「这个模块现在怎么写的」。这个判断目前还得由人来做。

## 四、微软高管说 AI 训练是史上最大劳动力盗窃，然后呢

[原帖：Microsoft exec says AI training might be the largest labor theft in human history](https://www.reddit.com/r/technology/comments/1wjsq57/microsoft_exec_says_ai_training_might_be_the/)

《纽约时报》诉 OpenAI 案的法庭文件解封后，一位微软高管的内部表述被翻了出来：AI 训练可能是「人类历史上最大的一场劳动力盗窃」。原告方用它来论证对方的合理使用抗辩站不住脚，且主观上是故意的。

评论区第一反应是整齐的反讽——「所以他们要停手了对吧？」后面跟着一串「对吧？」。紧随其后的是对时机的怀疑：一个大概率默许甚至参与其中的人，为什么偏偏现在说这话？有人给出的解释是，微软与模型厂商的结盟已经瓦解，它现在更担心自己在 SaaS 大洗牌里受害，而不是从 AI 扩张中获益。

> "Staggering insight from someone that likely tacitly approved and/or participated in the alleged theft. And why now? It sounds like another attempt to gatekeep AI development."
>
> <cite>— u/Such-Neck-1889，<a href="https://www.reddit.com/r/technology/comments/1wjsq57/microsoft_exec_says_ai_training_might_be_the/pal9b10/" target="_blank" rel="noopener">原帖评论</a></cite>

真正有含量的是一条不受欢迎但论证扎实的长评。作者反复强调自己并不支持 AI 公司的做法，但认为训练在现行版权法下大概率根本构不成侵权：著作权保护的是复制、演绎、公开展示、公开发行和公开表演这几项专有权利，训练不公开，于是只剩复制和演绎；训练中的复制是瞬时的，性质和浏览器缓存一样属于微量使用；而要证明演绎作品需要「实质性相似」，模型权重本身是一堆不可读的高维数字，没法直接拿来比对。他的结论是：想解决这个问题只能修法，而如果硬要靠扩张侵权认定来处理 AI，会顺带把合理使用这个重要的安全阀一起毁掉。

> "Copyright grants several exclusive rights: the right to copy, make derivative works, publicly display, publicly distribute, and publicly perform. Since training isn't public, we immediately reduce the issue to the copying and deriving rights."
>
> <cite>— u/nihiltres，<a href="https://www.reddit.com/r/technology/comments/1wjsq57/microsoft_exec_says_ai_training_might_be_the/pao51cd/" target="_blank" rel="noopener">原帖评论</a></cite>

当然，楼里情绪最饱满的还是另一种声音：同一批当年告诉我们下载 MP3 要赔几十万美元的公司，如今干了一票大得多的买卖，却什么事都没有。

> "Proving the age old saying: steal $1,000 - you're in trouble. Steal $1,000,000,000 - someone else is in trouble."
>
> <cite>— u/Niceguy955，<a href="https://www.reddit.com/r/technology/comments/1wjsq57/microsoft_exec_says_ai_training_might_be_the/palq617/" target="_blank" rel="noopener">原帖评论</a></cite>

**我的看法**：这条高赞长评值得中文读者认真读一遍，因为它精准地把「不公平」和「不合法」这两件事拆开了。训练数据的分配确实失衡，但用现有版权法去硬套，既赢不了官司，还会误伤搜索引擎、网络档案馆这些同样依赖大规模抓取的公共基础设施。国内关于 AI 训练语料的讨论也常常在这两层之间来回跳，能把它们分清楚的人不多。真正的出路大概率是新的许可与分成机制，而不是把旧法条的解释拉到断裂。

---

以上就是今天的精选。四个帖子，两种关于「自己掌控」的执念，两场没有结论的争吵——但都比标题本身有意思得多。
