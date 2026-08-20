---
layout: post
title: "Reddit 每日精选 | 2026.08.20"
headline: "一篇论文说模型的「思考过程」跟答案没什么关系，评论区吵了一整天"
date: 2026-08-20 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "看得懂的推理过程，不等于它真的在按那个过程推理。"
summary: "本期五帖：一篇论文发现用错误的推理链训练出的模型反而更强，r/LocalLLaMA 为「思维链到底算不算推理」吵了一整天；智谱那篇讲缩放定律的长文把参数量拆成了四个变量，评论区补上了 MoE 的路由损耗；GitHub 八小时故障的复盘归咎于自动扩缩容和 VS Code 的重试风暴，有人指出流量暴涨的源头正是他们自己推的 AI 编码；志愿者众包标注了十万九千个车牌识别摄像头，最尖锐的质疑是这张图根本无法验证；最后是一张纽约地铁六十分钟可达范围图，评论区把话题拉到了最后一公里。"
digest_count: 5
---

今天几帖凑在一起，主题意外地统一：我们看到的那个解释，到底是不是真正在起作用的那个东西。模型吐出来的思维链看着像推理，未必就是推理；参数量看着像能力，其实只是四个变量里的一个；一张密密麻麻的摄像头分布图看着像监控扩张的证据，也可能只是某个网站变火了的证据。最后一帖轻松些，但落点也差不多——地铁网络画出来很漂亮，真正决定通勤体验的是图上没画的那一段。

## 一篇论文说：用被打乱的推理链训练，模型反而更强

[原帖链接](https://www.reddit.com/r/LocalLLaMA/comments/1vsjcf7/stop_anthropomorphisizing_intermediate_tokens/)

帖子标题很冲：别再把中间 token 拟人化了，Qwen3.8 并没有在「过度思考」。楼主的观点是，人类的分步推理是一步步导向结论，而 LLM 生成的那些中间轨迹本质上是在给自己的 prompt 做增广——这才是为什么答案很好、「推理」却啰嗦得莫名其妙。他后来把论文里最狠的一段贴了出来：模型经常在给出正确答案的同时产生完全无效的推理轨迹，两者之间缺乏相关性；更反直觉的是，用被污染或语义无关的轨迹训练出来的模型，表现能追平甚至超过用正确轨迹训练的模型，在分布外任务上尤其明显。

> "First, we observe a pronounced lack of correlation between solution correctness and trace validity—models frequently produce invalid reasoning traces even when they arrive at correct solutions."
>
> <cite>— u/ThirdWaveCat（原帖作者），<a href="https://www.reddit.com/r/LocalLLaMA/comments/1vsjcf7/stop_anthropomorphisizing_intermediate_tokens/" target="_blank" rel="noopener">原帖</a></cite>

评论区没有一边倒。热度靠前的一条既同意结论又吐槽了姿态：轨迹本来就不是给用户看的，是模型用来把自己的内部分布探得更深一点的工具；但一篇论文标题写成命令句，读者的第一反应必然是抵触。

> "i don't even disagree, i've stated here that traces aren't for the user, they're for the LLM to plumb the depths of their internal distribution more fully. however, any paper like this that is worded as a command will always land like a box of rocks…"
>
> <cite>— u/llama-impersonator，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1vsjcf7/stop_anthropomorphisizing_intermediate_tokens/p4lo77m/" target="_blank" rel="noopener">原帖评论</a></cite>

真正精彩的是 u/WhoRoger 和 u/Dabalam 那一长串来回。前者的立场很实用主义：推理过程对他极其有用，因为他能从里面看出模型是不是误解了自己的意图；而且模型生成推理和生成回答用的是同一套 token、同一个分词器，凭什么说一个有意义另一个没有。后者则把论文的主张往回收了一下——它没说推理 token 对模型无用，它说的是这些轨迹和最终答案之间的关系，并不符合人类所理解的「推理」。他打了个很好的比方：一个孩子在你教他错误的解方程中间步骤之后，反而算得更准了，老师看着他满是错误的草稿纸会一头雾水，因为他的答案在变好，而他从没修正过那些错。

> "An analogy would be if a kid somehow got better at Math when you teach them incorrect intermediate steps for solving equations."
>
> <cite>— u/Dabalam，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1vsjcf7/stop_anthropomorphisizing_intermediate_tokens/p4ovgfz/" target="_blank" rel="noopener">原帖评论</a></cite>

争论最后落到一个谁也解决不了的地方：u/WhoRoger 反问，我们根本不知道人脑是怎么「思考」的，那凭什么断言 LLM 的推理不像人类？u/Dabalam 承认这条批评成立，论文确实在拿一个说不清的参照系做判据。

对做工程的人来说，这场争论有个很实际的推论值得记住：如果轨迹的有效性和答案的正确性确实不相关，那么「盯着思维链去纠正模型的逻辑」这条常见调优路径，收益可能远比想象中小。但反过来说，u/WhoRoger 那个用法依然成立——你不是在检查它推理得对不对，你是在检查它有没有听懂你的问题。这两件事经常被混为一谈，其实是两回事。

## 智谱那篇讲缩放定律的长文，把「多少参数」拆成了四个问题

[原帖链接](https://www.reddit.com/r/LocalLLaMA/comments/1vsf9eg/thoughts_about_scaling_law_zai/)

这是最近少见的、值得完整读一遍的技术长文。核心论点是：每次模型发布，大家问的第一句话都是多少参数，但这个数字单独拿出来没有意义，它必须和另外三件事一起看——你有多少数据、你打算把算力花在哪、以及谁会在什么条件下把它跑起来。文章顺着复盘了这个领域怎么一路踩坑：Kaplan 那套指数让全行业把参数涨得比数据快，直到 Chinchilla 用四百个模型重做实验，把最优比例改成大约每参数二十个 token；而 Chinchilla 优化的是训练算力，今天推理才是模型生命周期成本的大头，把推理放进目标函数，最优解又会往「更小的模型、训练更久」那边移。到了 MoE 时代，总参数和激活参数必须分开看：前者大致决定模型能装下多少世界知识，后者和有效深度决定它能把一条因果链推多远。

> "Parameter count is only meaningful alongside three others — how much data you have, where you intend to spend your compute, and who will run the model, under what conditions."
>
> <cite>— u/pmttyji（原帖作者），<a href="https://www.reddit.com/r/LocalLLaMA/comments/1vsf9eg/thoughts_about_scaling_law_zai/" target="_blank" rel="noopener">原帖</a></cite>

评论区补的几条比文章本身更接地气。有人从自己跑复杂法律分析的经验出发印证了「激活参数决定深度」这个说法：激活参数太少的 MoE 在需要长链条推演的任务上确实吃力，同尺寸的稠密模型反而稳一些。另一条补上了一个文章没细讲的代价——MoE 的路由本身会抬高困惑度，因为总有选错专家的概率，专家切得越细这个问题越明显；他还举了个例子，说上一代里 27B 稠密模型和 122B 激活 10B 的 MoE，差距小得出乎意料。

> "MoE routing also increases perplexity since there's always a chance it choses the wrong expert, especially with these super granular MoEs."
>
> <cite>— u/Few_Painter_5588，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1vsf9eg/thoughts_about_scaling_law_zai/p4mu1id/" target="_blank" rel="noopener">原帖评论</a></cite>

还有人正在拿这个思路做实验：既然总参数量的作用是「装下世界」，那知识就没有必要非得存在计算图里。他在给一个 8B 模型做改造，把世界知识外置，让那 8B 参数全部用于计算能力。

> "There's no real reason to store knowledge within the computational graph. If you can effectively train the model with the ability to fetch that information, then you can leverage the 8b parameters harder against computation…"
>
> <cite>— u/NineThreeTilNow，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1vsf9eg/thoughts_about_scaling_law_zai/p4lf5kn/" target="_blank" rel="noopener">原帖评论</a></cite>

这套框架对国内读者最直接的用处，是给「选型」提供了一把更细的尺子。以后看到一个模型的参数配置，不妨顺手拆成四问：总参数够不够装下你的领域知识、激活参数够不够撑住你的推理链条、它的训练 token 比例是偏记忆还是偏推理、以及你实际部署的显存和延迟预算允许它跑多快。同样是 27B，答案完全可能不一样。

## GitHub 八小时故障复盘：自动扩缩容失灵，加上 VS Code 的重试风暴

[原帖链接](https://www.reddit.com/r/technology/comments/1vskd62/github_blames_8hour_outage_on_autoscaling_fail/)

官方复盘把这次长达八小时的故障拆成了两半：自动扩缩容没能及时补上容量，以及 VS Code 客户端在失败后疯狂重试，把本来就紧张的后端彻底压垮。这是一个非常经典的级联失效模型——重试逻辑在单点故障时是救命的，在系统性拥塞时就是放大器。

评论区前排照例是「快速迭代、快速崩坏」的段子，但下面很快出现了认真的分析。有人指出把这事归因为裁员和赶工并不准确：GitHub 正处在 AI 编码浪潮的正中心，今天要扛的流量比一年前高了一个数量级，撑不住是必然的。另一条把流量的构成说得更细：合法请求、对抗性请求、爬虫，三种叠在一起，量级已经不是人类用户能产生的了。

> "They're at the centre of the vibe coding trend, dealing with an order of magnitude more traffic than they did 12 months ago. Of course they're struggling"
>
> <cite>— u/Veranova，<a href="https://www.reddit.com/r/technology/comments/1vskd62/github_blames_8hour_outage_on_autoscaling_fail/p4o3iy4/" target="_blank" rel="noopener">原帖评论</a></cite>

顺着这条往下，有人留了句很精准的调侃：这次的对抗性流量，是从自己家里打出来的。而最有画面感的一条来自一位开源项目的维护者：他在自己参与的项目里看到一个 PR，代码写得又怪又多余，就去问提交者；对方回复说，那是一个 LLM 用他的账号提交的，他自己在看到回复之前完全不知道有这回事。

> "He sends a reply back telling me that an LLM made the pull request with his account, and he had no idea it happened until he saw the response."
>
> <cite>— u/AliceCode，<a href="https://www.reddit.com/r/technology/comments/1vskd62/github_blames_8hour_outage_on_autoscaling_fail/p4ob24d/" target="_blank" rel="noopener">原帖评论</a></cite>

这两条放在一起看很有意思。平台侧看到的是流量曲线突然抬升一个数量级，维护者侧看到的是评审队列里混进了没有人类负责的提交，而两者其实是同一件事在不同尺度上的投影。对自己团队的启发很实际：如果你正在给内部系统接入各种自动化代理，重试策略和限流策略必须重写一遍——原来那套是按人类的操作频率设计的，代理不会累，也不会觉得不好意思。

## 志愿者众包标注了十万九千个车牌识别摄像头，评论区在问：这数据怎么验证

[原帖链接](https://www.reddit.com/r/dataisbeautiful/comments/1vsyv1c/oc_volunteers_have_crowdmapped_109k_flock_license/)

昨天这里刚聊过 Flock 车牌识别系统的滥用问题，今天 r/dataisbeautiful 上来了一张相关的动态图：志愿者通过 OpenStreetMap 众包标注，已经在全美记录了约十万九千个 Flock 摄像头的位置，动画展示了这个数字随时间增长的过程。

有意思的是，这个帖子下面最有价值的讨论完全不是关于监控的，而是关于数据本身可不可信。一位长期参与 OSM 的用户直接泼了冷水：这批数据最近很可疑，有人在到处乱加摄像头点位，而这种垃圾数据很难及时清理，OSM 论坛上正为此吵得不可开交。

> "Flock camera data on OSM is fishy; lately there was lots of vandalism adding those cameras at random places, and it's hard to get rid of this garbage in a timely fashion…"
>
> <cite>— u/waptaff，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vsyv1c/oc_volunteers_have_crowdmapped_109k_flock_license/p4p5f1h/" target="_blank" rel="noopener">原帖评论</a></cite>

另一条把这个攻击面分析得很清楚：想破坏这个项目的人有两种手段，批量删除和批量添加；删除是可以回滚的，添加却几乎无解——谁能判断一个新增的点位是不是真的？

> "Mass deleting can be reverted. Mass adding though? Who can tell if they're legit?"
>
> <cite>— u/PM_ME_YOUR__INIT__，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vsyv1c/oc_volunteers_have_crowdmapped_109k_flock_license/p4piuls/" target="_blank" rel="noopener">原帖评论</a></cite>

还有一条直接质疑了这张图的解读方式：曲线画的是「被记录的摄像头数量」的增长率，它真正反映的是那个众包网站有多火，而不是摄像头部署得有多快。这条批评相当致命，因为帖子的传播效果恰恰依赖于读者把两者混为一谈。

对做数据的人来说，这是个很好的反面教材：一份众包数据的增长曲线，同时包含了「现实中的对象在增加」和「参与标注的人在增加」两个信号，而后者往往涨得更快。想让这张图站得住，至少要配一条控制变量的基线——比如活跃编辑者数量，或者某个已完成普查区域的存量曲线。放到国内语境里也一样：任何靠用户上报堆出来的数据集，在拿它讲趋势之前，先想清楚你测的是世界还是测的是自己的用户增长。

## 纽约地铁六十分钟能带你到哪：一张漂亮的图，和评论区补上的最后一公里

[原帖链接](https://www.reddit.com/r/dataisbeautiful/comments/1vssz1g/oc_how_far_the_nyc_subway_actually_takes_you_in/)

作者是 subway.fyi 的开发者，那个站点用历史数据预测地铁故障，有时能比 MTA 官方早半小时。他说自己老听人讲「十五分钟城市」的概念，就想看看在早高峰真实运行数据下，从纽约某个点出发，十五、三十、六十分钟究竟能走多远，于是做了这组等时圈图。数据是他自己抓的 MTA 实时数据，工具链是 Python 加 TimescaleDB。

评论区第一条就把话题从「地铁网络覆盖多广」拉到了真正决定通勤体验的地方：外围区的时间根本不花在地铁上，而是花在去地铁站的路上——坐公交到法拉盛或牙买加站，可能要十五分钟，也可能要一小时。

> "The time sinks are getting to the train station in the outer Boroughs. It sucks that it can take anywhere from 15~60 minutes by bus to get to Flushing-Main Street or Jamaican Station."
>
> <cite>— u/IamGeoMan，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vssz1g/oc_how_far_the_nyc_subway_actually_takes_you_in/p4nr5lc/" target="_blank" rel="noopener">原帖评论</a></cite>

跟帖的补充把这种体感描述得很准：最后一公里的接驳把外围通勤彻底毁掉了，感觉自己已经走了一半路程，然后就一直在剩下那段里挪。

> "That last mile connectivity really kills the outer borough commute, feels like you're halfway there and then just stuck crawling the rest of the way"
>
> <cite>— u/DependentGrade3103，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vssz1g/oc_how_far_the_nyc_subway_actually_takes_you_in/p4nsc0b/" target="_blank" rel="noopener">原帖评论</a></cite>

作者的反应值得一提——他没有辩解，而是当场认领了这个缺口，说自己手上也有公交数据，会做一个可以任选起点生成这张图的探索工具；后来他又回复说已经把图里的「步行」部分改成沿真实街道走了。整个帖子从「秀作品」变成了一次小型的公开迭代。

> "Ah that's a great point. I actually have bus data too -- I'll build an explorer so you generate this graphic for any spot in the city"
>
> <cite>— u/qalpi（原帖作者），<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vssz1g/oc_how_far_the_nyc_subway_actually_takes_you_in/p4nrhr5/" target="_blank" rel="noopener">原帖评论</a></cite>

这个「最后一公里」的问题，国内一二线城市其实更典型：地铁线路图看着已经很密，但真正决定一个人愿不愿意住在某个地方的，是从家门口到站台的那十五分钟——有没有接驳公交、末班车几点、下雨天走不走得动。用等时圈来评估居住选址是个很实用的方法，但只有把步行和接驳一起算进去，那张图才对应得上真实的生活。
