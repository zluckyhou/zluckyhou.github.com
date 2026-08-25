---
layout: post
title: "Reddit 每日精选 | 2026.08.25"
headline: "网站用一段你听不见的声音认出了你，而 Uber 因为让算法直接封号赔了十亿"
date: 2026-08-25 09:40:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "从一段听不见的声音说起，聊指纹追踪、算法封号的十亿罚单，以及两个关于「怎么确认东西真的对」的硬核讨论。"
summary: "本期开头是两条关于「机器替人做决定」的新闻：速卖通被发现用无声音频给浏览器做指纹，Uber 因为让算法直接封停司机被罚近十亿美元，评论区在这两件事上吵出了完全相反的立场。后半段转向技术本身 —— 小米那台 1.2TB/s 带宽的 AI Cube 到底给谁用，GitHub 百大项目的 AGENTS.md 里藏着什么共识，以及一位 SciPy 贡献者关于「测试全绿但公式是错的」的深挖。"
digest_count: 5
---

今天这五个帖子有个隐隐的共同点：都在追问「你怎么知道它真的是它看起来的那样」。网站说它只是在加载页面，其实在给你的设备做指纹；Uber 说封号有人工复核，监管机构说没有；一份漂亮的可视化说自己分析了一百个项目，评论区说图表全是花架子；一段数值代码测试全绿，但它实现的公式压根不是论文里那条。凑在一起读挺有意思的。

下面是今天挑出来的五个帖子。

## 一、速卖通用一段你听不见的声音，认出了你的设备

[原帖：AliExpress was silently running audio in your browser to fingerprint and track your device](https://www.reddit.com/r/technology/comments/1vwqknk/aliexpress_was_silently_running_audio_in_your/)

事情是一位开发者发现自己的耳机在打开某个购物网站时会莫名其妙静音，顺藤摸瓜查下去，发现页面在后台悄悄播放了一段听不见的音频。这不是要偷听你，而是反过来 —— 让浏览器去处理一段固定的音频信号，再看它算出来的结果。不同的操作系统、声卡驱动、浏览器版本，在浮点运算的末位上会有微小差异，这个差异足够稳定，就成了一枚设备指纹。

评论区里最有价值的一条来自一位早就注意到这个现象的人，他不仅解释了原理，还给出了自己当初是怎么撞上它的：几个月前 Windows 的蓝牙混音有 bug，每次打开这个网站，正在放的音乐就会被打断。

> "not mic/audio but they play sound and see how the browser handles it. It's rare, but known fingerprinting technique."
>
> <cite>— u/KontoOficjalneMR，<a href="https://www.reddit.com/r/technology/comments/1vwqknk/aliexpress_was_silently_running_audio_in_your/p5j4udp/" target="_blank" rel="noopener">原帖评论</a></cite>

接下来讨论拐进了一个反直觉的地方。很多人晒自己的防护配置 —— Pi-hole、严格追踪保护、uBlock Origin 全开，然后互相汇报「我这儿完全没事」「我这儿还是被拦下两个指纹脚本」。有人搬出 amiunique 和 EFF 的 coveryourtracks 让大家自测，结果发现把浏览器加固到极致的人，反而在唯一性测试里格外扎眼。有人用了一个很形象的比方来说明这个悖论。

> "Worth to keep in mind that having a browser that is too hardened makes you easier to identify. Like how having gear to prevent cameras from face-tracking you is good, but…"
>
> <cite>— u/HeKis4，<a href="https://www.reddit.com/r/technology/comments/1vwqknk/aliexpress_was_silently_running_audio_in_your/p5k96hl/" target="_blank" rel="noopener">原帖评论</a></cite>

还有人补了一刀：就算你不把字体列表交出去，脚本也可以挨个尝试渲染，再量一下文字块的尺寸对不对，照样能推断出你装了哪些字体。真想彻底断掉，只能关掉 JavaScript —— 但那样的网还能不能用，是另一个问题。

这帖对中文读者的启发可能不在「哪家电商在追踪你」，而在于隐私对抗的形状：它不是一道能一次性关上的开关，而是一场关于「你和多少人长得一样」的概率游戏。加固到只剩自己一个人的配置，等于给自己发了张身份证。真正有效的路径反而是往人群里躲 —— 用大众化的浏览器默认配置，或者用那些主动把参数抹平、让所有用户长得一模一样的方案。

## 二、算法直接封停了 170 多个司机账号，代价是近十亿美元

[原帖：Uber hit with nearly $1 billion fine after algorithms suspended drivers without human review](https://www.reddit.com/r/technology/comments/1vx1a0d/uber_hit_with_nearly_1_billion_fine_after/)

荷兰监管机构开出了接近十亿美元的罚单，理由不是「封错了人」，而是「封人的过程里没有真正的人」。GDPR 里有一条常被忽略的规定：涉及重大影响的决定，当事人有权要求人工介入、有权知道理由、有权申辩。Uber 主张自己是有人工复核的，监管机构认定那个复核形同虚设。

评论区最热闹的不是骂 Uber，而是一场立场鲜明的对撞。有人认为监管抓错了重点 —— 被封的那些司机确实在坑乘客，为了程序瑕疵罚十亿，是捡了芝麻丢了西瓜。

> "They suspended drivers who were scamming customers... and are in the wrong? I get the GDPR issue, but this is the EU losing the forest (protecting customers) for the trees (a technical violation of the GDPR)."
>
> <cite>— u/rickg，<a href="https://www.reddit.com/r/technology/comments/1vx1a0d/uber_hit_with_nearly_1_billion_fine_after/p5mmp3i/" target="_blank" rel="noopener">原帖评论</a></cite>

反驳来得很快，而且很欧洲：司机有没有作弊是另一件事，公司不能自己当法官。走合法程序解雇这些人，本来一点障碍都没有，选择让算法一键处理，那就是自行其是。另一条支线更有意思 —— 一群人主张「罚款没用，该吊销牌照、该抓人」，然后被泼了冷水：如果监管的目的是保护劳动者，那把公司关掉、让几万人失业，是一种什么样的保护？

> "If a law exists to protect workers’ jobs, you don’t enforce that law by destroying the jobs. The cure shouldn’t be worse than the disease."
>
> <cite>— u/CherryLongjump1989，<a href="https://www.reddit.com/r/technology/comments/1vx1a0d/uber_hit_with_nearly_1_billion_fine_after/p5mf6o7/" target="_blank" rel="noopener">原帖评论</a></cite>

还有人做了一道很冷静的算术：Uber 一年接近 140 亿单，十亿罚款摊下来，每单涨八分钱就抹平了。这个数字大概比任何义愤都更能说明「罚款作为威慑」的实际重量。

值得中文读者留意的是罚的到底是什么。这不是一起「算法判断错误」的事故 —— 监管机构没有去审算法准不准，而是认定「重大决定必须有人负责、必须能被申辩」本身就是一条硬要求。国内平台的封号、降权、限流，同样是影响生计的自动化决定，而申诉入口能不能真的通到一个活人那里，往往才是最关键的那一环。这个判罚提供了一个可对照的坐标。

## 三、小米那台 1.2TB/s 的 AI Cube，到底是给谁用的

[原帖：Xiaomi AI Cube announced with 1.2TB/s memory bandwidth](https://www.reddit.com/r/LocalLLaMA/comments/1vwvghi/xiaomi_ai_cube_announced_with_12tbs_memory/)

小米公布了一台代号 AI Cube 的原型机，三颗自研芯片搭在一起：O3 是手机 SoC，D100 原本是给电动车用的、最高支持 160GB 内存，O100 则挂着 1.22TB/s 内存带宽的招牌。发帖人自己都拿不准这个带宽数字指的是什么，猜测可能是 SRAM 的口径。演示里它能本地跑一个 120B 和一个 3B 的模型，在快慢两套系统之间切换。

评论区第一时间做了祛魅：这三颗芯片不是同一个东西，O3 马上要进折叠屏手机，D100 是车规产品，真正值得关心的 O100 还要等到明年。但把参数摊开之后，本地部署圈很快意识到它的定位在哪 —— 目前这个价位段的一体机，最大的痛点恰恰就是内存带宽。

> "That looks like they brute forced their way to a brilliant competitor to DGX Spark boxes. Shortly after release, that was the number one complaint- memory bandwidth."
>
> <cite>— u/tiffanytrashcan，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1vwvghi/xiaomi_ai_cube_announced_with_12tbs_memory/p5lfn4e/" target="_blank" rel="noopener">原帖评论</a></cite>

关于「这东西卖给谁」，讨论出了两条像样的答案。一条是家庭中枢：小米卖了太多扫地机、摄像头、音箱，这些设备要么自己扛算力要么依赖云端，不如在家里放一个盒子统一处理 —— 但也有人指出，让用户先掏三千美元买盒子再买别的产品，商业上不好讲。另一条是边缘推理和小微企业的数据不出门。还有一条评论跳出了产品本身，谈的是一种做事方式上的差异。

> "I think this is what's interesting about Chinese tech- they're wiling to see what sticks. It's confusing because it doesn't neatly fit into a box where we are but it seems like China is more optimistic about embracing AI in everyday home use."
>
> <cite>— u/coffeesippingbastard，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1vwvghi/xiaomi_ai_cube_announced_with_12tbs_memory/p5mrlfy/" target="_blank" rel="noopener">原帖评论</a></cite>

顺带一提，帖子里有人问「中国没有 3nm 产能，芯片哪来的」，很快被纠正：台积电代工，小米并不在受限名单上。也有人担心这类产品一旦成气候就会招来实体清单。抛开这些不谈，我觉得这台机器真正的看点是它把「带宽」而不是「显存容量」当成了卖点 —— 对于跑本地模型的人来说，160GB 配 1TB/s 的组合，确实比更大容量却只有两三百 GB/s 的方案更实用。国内做端侧和家庭 AI 的团队，大概会比海外更早遇到「买不买得到、值不值得买」的现实问题。

## 四、他分析了 GitHub 百大项目的 AI 指令文件，然后被评论区教做人

[原帖：I analysed the AI instructions of GitHub's 100 most-starred repositories](https://www.reddit.com/r/dataisbeautiful/comments/1vx5atl/oc_i_analysed_the_ai_instructions_of_githubs_100/)

作者枚举了 GitHub 上星标最多的一千个仓库，逐个检查根目录有没有 AGENTS.md 这个文件 —— 也就是给 AI 编程助手看的项目须知 —— 再从中挑出星标最高的一百个做内容分析。这个数字本身就挺说明问题的。

> "I enumerated GitHub's 1,000 most-starred public repositories via the gh cli and checked each for a root AGENTS.md. 273 have one (27%)."
>
> <cite>— u/ohansemmanuel（原帖作者），<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vx5atl/oc_i_analysed_the_ai_instructions_of_githubs_100/p5m2kb6/" target="_blank" rel="noopener">原帖评论</a></cite>

有意思的是评论区几乎没人讨论数据，全在批评呈现方式：一个不能暂停的 GIF，每张图只闪几帧；结论写得像 PPT，看完不知道学到了什么。批评者的身份让这话更有分量。

> "Your analysis could've been very interesting (I'm a SWE, I'd like to know what could be distilled from this), but your presentation is all flash, no substance…"
>
> <cite>— u/gredr，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vx5atl/oc_i_analysed_the_ai_instructions_of_githubs_100/p5m3kiv/" target="_blank" rel="noopener">原帖评论</a></cite>

也有人替这份工作说了句公道话：图表是干扰项，底下的分析是有用的，他打算把其中几条抄进自己的仓库，并且希望作者往深里挖 —— 比如那些强制要求标注 AI 参与的项目，AI 贡献的代码在交付速度和缺陷率上到底表现如何。作者本人在回帖里给出的观察反而比图表有信息量：各家的路线差异极大，有的项目明令禁止在提交里标注 AI 作者身份，有的偏偏强制要求；有的只写了寥寥几行，有的写得极其详尽。还有人直接建议：结论别让模型写，自己写，你会学到更多。

这一幕本身有点黑色幽默 —— 用 AI 分析别人怎么写给 AI 看的文件，最后因为「AI 味太重」被挑剔。但抛开这个不谈，27% 这个比例值得记一下：星标最高的那批项目里，已经有超过四分之一在正式维护一份写给机器看的贡献指南。这类文件正在从个人技巧变成项目基础设施，如果你的仓库开始接受 AI 辅助的 PR，早点把「这个项目怎么跑测试、什么风格、什么绝对不许改」写下来，收益是很直接的。

## 五、测试全绿，但代码实现的公式是错的

[原帖：How to test if your numerical code is mathematically correct?](https://www.reddit.com/r/statistics/comments/1vxavkm/software_how_to_test_if_your_numerical_code_is/)

一位 SciPy 贡献者提出了一类让他很不爽的 bug：输出看着合理，测试全部通过，但代码实现的那条方程本身是错的。于是他做了个工具 —— 跑一遍你的 Python/NumPy 代码，把它实际计算的那个数学表达式以 SymPy 符号的形式还给你，然后你可以化简它、对它求导，像对待任何一个数学对象那样审视它。

> "I contribute to SciPy and kept running into a class of bug that annoys me: the outputs look plausible, the tests pass, but the equation the code implements is subtly wrong."
>
> <cite>— u/Lost-Dragonfruit-663（原帖作者），<a href="https://www.reddit.com/r/statistics/comments/1vxavkm/software_how_to_test_if_your_numerical_code_is/" target="_blank" rel="noopener">原帖评论</a></cite>

帖子人不多但含金量很高。有人提了最朴素的方案：用已知答案的合成数据，或者 NIST 那种带认证参考值的标准数据集。作者的回应说清了这条路的边界 —— SciPy 内部确实就是这么测的，但大多数函数根本没有认证数据集可用；他自己那个样条惩罚矩阵的 PR，唯一能对照的只有一份 GPL 实现，只能跑不能读。更要命的是「输出对得上」这件事本身没有想象中那么强的保证力。

> "And matching outputs on some inputs is weaker than it feels, precision and recall return the same number on balanced data while computing different things."
>
> <cite>— u/Lost-Dragonfruit-663，<a href="https://www.reddit.com/r/statistics/comments/1vxavkm/software_how_to_test_if_your_numerical_code_is/p5nkv8n/" target="_blank" rel="noopener">原帖评论</a></cite>

另一位写过 R 包的人分享了自己的土办法：教科书上有算好的例题就照抄，然后想尽办法折磨这个函数 —— 缺失值、全部相同的值、传进去一个字符向量。作者认可这是黄金标准，但补了一句戳心窝的话：能不能想出好的边界情况，取决于你那天状态好不好。他举了皮尔逊相关系数的例子 —— 所有值都相同时它应该是未定义的，因为分母趋于零；可你只有在那天恰好想起分母，才会去测这一条。而当你把方程从代码里提出来摊在面前，这个条件就明晃晃地写在那儿，边界情况清单等于自己写好了。

作者还点出了一整类参考数据集根本看不见的问题：你传给 `solveh_banded` 的真的是带状埃尔米特矩阵吗？你要做 Cholesky 分解的那个东西真的半正定吗？你调用 `eigh` 的矩阵真的对称吗？这些是对输入的要求而不是对输出的要求，搞错了照样能算出一串看起来很像样的数字。

这一段我很喜欢，因为它把「测试」这件事的层次讲清楚了：单元测试验证的是「这个输入得到这个输出」，而不是「这段代码在算什么」。这两者之间的缝隙，正是科学计算、量化、风控这类领域最容易出静默错误的地方 —— 不崩溃、不报警、结果一直在合理区间里，只是它一直在算另一个东西。把公式从实现里反解出来做交叉验证，思路上有点像给数值代码做「符号版的 code review」，值得借鉴。

---

今天就到这里。明天见。
