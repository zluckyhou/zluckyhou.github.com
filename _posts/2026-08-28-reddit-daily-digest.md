---
layout: post
title: "Reddit 每日精选 | 2026.08.28"
headline: "英伟达 129 亿美元买下 Hugging Face，评论区最冷静的一句话是：许可证的变更不能追溯"
date: 2026-08-28 09:00:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "开源社区在一夜之间被收购，Qwen 新架构被拆开讲明白，Python 3.15 悄悄改掉了一个折磨 Windows 用户多年的默认值。"
summary: "本期五个帖子。英伟达买下 Hugging Face，连 llama.cpp 团队一起打包带走，r/LocalLLaMA 用两个帖子把这件事的风险拆得很细，结论不是许可证而是维护者的注意力。有人写了一篇长文解释 Qwen 3.8 Next 的 Engram 到底在做什么，顺带泼了一盆冷水。Python 3.15 RC1 出了，惰性导入和 UTF-8 默认编码是真正会影响日常的两条。有人把 r/dataisbeautiful 今年最火的 80 张图逐一审计，然后被第一条评论用他自己的标准将了一军。最后是 100 多个美国城市关掉了 Flock 车牌识别摄像头，评论区却没多少人觉得这是胜利。"
digest_count: 5
---

今天的头条只有一个：英伟达花 129 亿美元把 Hugging Face 买了下来。这条消息在 r/technology 和 r/LocalLLaMA 同时炸开，但两个板块关心的完全不是一回事 —— 前者在聊估值，后者在算自己明年还能不能在 Mac 上跑模型。

除此之外还有四个帖子值得一读：一篇把 Qwen 新架构讲清楚同时泼了冷水的长文、Python 3.15 的变更清单、一次针对「数据可视化到底有多少是准的」的自我审计，以及一场关于监控摄像头的、几乎没有人真的高兴的胜利。

## 一、英伟达买下 Hugging Face，顺手把 llama.cpp 团队也打包了

原帖：[NVIDIA buying HF isn't a good thing for open source](https://www.reddit.com/r/LocalLLaMA/comments/1vzmqrk/nvidia_buying_hf_isnt_a_good_thing_for_open_source/) / [With HuggingFace, Nvidia is also acquiring llama.cpp and the team behind it](https://www.reddit.com/r/LocalLLaMA/comments/1w01y1f/with_huggingface_nvidia_is_also_acquiring/)

Business Insider 先报出英伟达正在洽谈，随后 The Information 称交易已经敲定，金额 129 亿美元。r/LocalLLaMA 有两个高热帖在讨论同一件事的两个侧面：一个问「这对开源是好事吗」，另一个提醒大家，2026 年 2 月 Hugging Face 把 Georgi Gerganov 和 llama.cpp / ggml 的核心团队整体招了进去，所以这笔收购实际上也把 llama.cpp 的著作权和团队一并转手了。

关于「Hugging Face 到底值不值这个价」，评论区吵得很有意思。一派认为它几乎没有护城河：库是开源的（transformers、diffusers 都是 Apache 2.0），托管栈可以复制，模型本身还大多是别人家的。有人一句话就把商业模式说穿了 —— 免费扛着 PB 级存储烧钱，等的就是这一天：

> "The moat is that they were hosting petabytes of data for free, burning money waiting to be bought."
>
> <cite>— u/is-this-a-nick，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1vzmqrk/nvidia_buying_hf_isnt_a_good_thing_for_open_source/p666oco/" target="_blank" rel="noopener">原帖评论</a></cite>

跟帖里有人算过账：免费账户能往公开仓库传 8.7TB，同样的量放 S3 上一个月光存储加出网就是两百多美元。但另一条反驳更值得琢磨 —— 技术护城河弱不等于护城河窄，难的从来不是把服务做出来，而是让创作者、用户、工具链和文档在同一时间默认认你这个平台：

> "The hard part is not reproducing the service. It is getting creators, users, tools and documentation to all treat your platform as the default at the same time."
>
> <cite>— u/Character-Apple-8471，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1vzmqrk/nvidia_buying_hf_isnt_a_good_thing_for_open_source/p668jln/" target="_blank" rel="noopener">原帖评论</a></cite>

他后面补了一句我觉得是全场最准的判断：习惯和分发构成的护城河比技术护城河更强，但也更脆 —— 一旦信任没了，它崩得比专利快得多。至于替代品，ModelScope（魔搭）在讨论里被反复提起，有人认为它证明了「大规模的替代方案是可能存在的」，也有人直言体验差距还很大，以及内容尺度上的限制。还有一条评论提到 Hugging Face 上的开放模型早已被中国团队主导，顺带反问了一句：你以为给 Qwen、GLM 提交 llama.cpp 适配代码的都是谁？

llama.cpp 那个帖子下面，最热的回应是「大不了 fork」，理由也很硬：许可证的变更不能追溯，已经发出去的 MIT 代码谁也收不回。但真正的风险点被一条冷静的评论指了出来 —— 不是明着改许可，而是英伟达有了影响力之后，非 CUDA 平台的补丁会不会慢慢没人 review：

> "…the main concern that llama.cpp may become the same if Nvidia actually will have enough influence (like for example getting in the way of accepting patches for other platforms, even if indirectly by not giving core devs enough free time to review them)."
>
> <cite>— u/Lissanro，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1w01y1f/with_huggingface_nvidia_is_also_acquiring/p69s7gg/" target="_blank" rel="noopener">原帖评论</a></cite>

顺着这条往下，AMD 用户和 Mac 用户的担心具体多了：llama.cpp 一直把 Metal 后端当一等公民对待，这在整个本地推理生态里是相当罕见的。也有人给「fork 就完事了」泼冷水：fork 出来容易，等到要适配一个全新模型架构的时候你才知道，好的贡献者有多难找、多难留。

我的看法是，这件事最该学的不是「大公司收购开源必然变坏」这种情绪结论 —— 微软买 GitHub 之后天也没塌。真正的观察指标是很具体的三条：非 NVIDIA 后端的 PR 合并速度、Mac/AMD 相关 issue 的响应时间、以及核心维护者半年后还在不在。这三条任何一条变差，都比许可证条款更早、更真实地反映出方向的变化。

## 二、Engram 不会让你在家跑 1T 模型，但它做的事情可能更重要

[原帖：No, Engrams won't let you run 1T models locally. It does something even better.](https://www.reddit.com/r/LocalLLaMA/comments/1w0198r/no_engrams_wont_let_you_run_1t_models_locally_it/)

Qwen 3.8 Flash Next 发布之后，社区里流传一种说法：靠 N-gram 表就能把 980B 参数扔到 SSD 上，单机跑 1T+ 模型。这篇长文的作者上来就说别做梦了，然后把 Engram 讲得相当清楚：本质上它就是一张键更长的嵌入表 —— 不再用单个 token ID 去索引一个静态向量，而是用最后两三个 token 组成的 N-gram 去索引。「New York」有自己的向量，「the United」有自己的向量，哈希一下取出来喂进网络，O(1)，不消耗 FLOPs。

为什么值得这么做？因为 Transformer 前几层有相当一部分算力，花在了从零重建那些本来就是静态的东西上：实体名怎么拼、固定搭配是什么、常见词组合起来指向什么。这本质上是一次数据库查询，却被硬生生用注意力和 FFN 重新推导了一遍。Engram 把这活儿还给查表，神经层的深度就能省下来做真正的推理 —— 这也是为什么 Qwen 3.8 Next 能带着 51B 的 N-gram 嵌入，每 token 却只激活 6B 左右。

但作者紧接着点出了大家没注意的地方：这个查表是「笨」的。键就是最后那两三个 token，你那 20 万 token 的上下文对取回什么向量毫无影响 —— 上下文只能事后接受或否决它，不能改变它取了什么。

> "Your 200k tokens of context have zero influence on what gets retrieved. … The table memorizes, the transformer reasons."
>
> <cite>— u/chocolateUI（原帖作者），<a href="https://www.reddit.com/r/LocalLLaMA/comments/1w0198r/no_engrams_wont_let_you_run_1t_models_locally_it/" target="_blank" rel="noopener">原帖</a></cite>

而且把 N 调大也救不了：N 越大，那个特定的 N-gram 在训练数据里就越稀有，每个条目拿到的训练信号越少。论文自己的消融实验就发现 4-gram 会稀释掉更高频的 2/3-gram 模式的容量。所以真正的意义不在于「让大模型变小」，而在于让小模型变聪明 —— 一个 27B 模型过去要同时干两份活，现在可以把记忆那份外包出去。

评论区里最有意思的是一条来自实际使用的观察：这类模型数字母的能力变强了，而且对否定词的处理明显改善，因为「do not」很可能已经是一个 engram 了，不再需要模型自己把否定关系推导出来：

> "…it can count letters in words with minimal reasoning, and it has improved handling of negatives eg not, because do not is probably a single engram now…"
>
> <cite>— u/gh0stwriter1234，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1w0198r/no_engrams_wont_let_you_run_1t_models_locally_it/p69gvj5/" target="_blank" rel="noopener">原帖评论</a></cite>

如果这个观察站得住，那它顺带解释了一个长期存在的怪现象：为什么你越是叮嘱模型「不要做 X」，它越容易做 X。另外有人已经在 64GB 的 Orin 上跑起了 Qwen3.8-Next 的 2bit 量化，把 N-gram 表从 SSD 流式读入，8k 上下文下 prompt 处理约 150 tok/s，解码 15 tok/s，128k 时掉到 70 和 8 —— 慢，但确实跑起来了。

值得一提的是，帖子下面还有一场小争论：有人用检测工具指出这篇长文是 LLM 写的。回应也很干脆 —— slop 之所以叫 slop，重点在「没营养」而不在「AI 写的」，这篇信息密度足够高。这个标准我觉得挺对。对国内读者更实际的启发是：Engram 这条路线如果成立，受益最大的是显存受限的本地部署场景，一张消费级卡装 20~30B 的活跃参数，再把上百 GB 的记忆表甩给内存和 NVMe —— 这个组合在国内的硬件条件下反而比堆卡更现实。

## 三、Python 3.15 RC1：真正会影响你日常的其实就两条

[原帖：Python 3.15 Release Highlights](https://www.reddit.com/r/Python/comments/1vzr2eg/python_315_release_highlights/)

Python 3.15 已经到 RC1，正式版预计 10 月 1 日发布。作者不按 PEP 编号罗列，而是挑了对日常开发真正有感的部分：惰性导入（模块用到时才加载，CLI 工具启动时间会明显受益）、UTF-8 成为默认编码、内置不可变字典 frozendict、JIT 继续改进（Linux 上早期基准约 8~9%，Apple Silicon 上部分测试更高）、新的低开销采样分析器 Tachyon（可以挂到已经在跑的进程上）、交互式解释器的彩色报错，以及 —— free-threaded 依然是可选项，没有成为默认。

评论区里被讨论最多的是 UTF-8 那条，因为它比听上去更实在。有人问「默认不一直就是 UTF-8 吗」，得到的回答把问题说清楚了：`open()` 不写 encoding 时用的是 `locale.getencoding()`，在 Linux 上通常是 UTF-8，在 Windows 上通常不是。

> "For open it's locale.getencoding() which is (usually) UTF-8 on Linux but (usually) something else on Windows."
>
> <cite>— u/didntplaymysummercar，<a href="https://www.reddit.com/r/Python/comments/1vzr2eg/python_315_release_highlights/p67k0s3/" target="_blank" rel="noopener">原帖评论</a></cite>

这正是无数「我这儿好好的，到你那儿就乱码」的根源。不过下面这条回复更像是老江湖的态度：

> I learned Python on Windows, and my first lessons became "Always explicitly set the encoding to 'utf-8'." I suspect I shall continue to do so, 3.15 or no.
>
> <cite>— u/sue_dee，<a href="https://www.reddit.com/r/Python/comments/1vzr2eg/python_315_release_highlights/p67f2t8/" target="_blank" rel="noopener">原帖评论</a></cite>

另外两个技术细节值得记一下。一是 frozendict 和已有的 `MappingProxyType` 到底差在哪 —— 作者答得很清楚：后者是动态只读视图，底层字典改了它跟着变；frozendict 本身就是不可变映射，且在键值都可哈希时它自己可哈希，因此能当字典的键或集合元素用。二是 3.15 还带来了 `sentinel()`（PEP 661），解决的是「参数没传」和「参数传了 None」这两件事一直没法干净区分的老问题 —— 以前大家用 `_SENTINEL = object()` 加身份比较凑合，缺点是 repr 难看、类型检查器也没法收窄类型。

对中文开发者来说，UTF-8 默认这条的价值可能被低估了。国内 Windows 环境默认 GBK/CP936 的比例仍然不低，「本地跑得好好的，CI 上一读文件就崩」这类问题基本都出在这儿。3.15 之后新写的代码会安全很多，但存量代码该显式写 `encoding='utf-8'` 还是得写 —— 楼上那位的习惯是对的。

## 四、有人把 r/dataisbeautiful 最火的 80 张图审了一遍，然后被第一条评论将了一军

[原帖：How accurate were the 10 highest scored monthly posts on dataisbeautiful (2026)](https://www.reddit.com/r/dataisbeautiful/comments/1vzyyku/oc_how_accurate_were_the_10_highest_scored/)

这个帖子做了件很少有人做的事：把今年 1 月到 8 月 24 日、每月得分最高的 10 个帖子共 80 个，逐一核查数据来源和结论是否站得住。结果是 50% 没发现实质问题，15% 有小问题，13.8% 有大问题，18.8% 用的是私有或无法复现的数据，2.5% 属于非事实性的视觉作品。剔除掉不可核查的那 17 个之后，剩下 63 个可核查帖子里，82.5% 没有重大问题，但只有 63.5% 是完全干净的。

作者给出的实用结论相当克制 —— 一张爆火的图，大方向通常可以信，但任何真正影响你判断的具体数字都值得自己复核一遍：

> "About one in six checkable posts had a defect large enough to change the headline, denominator, comparison, or interpretation."
>
> <cite>— u/HeHate_me（原帖作者），<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vzyyku/oc_how_accurate_were_the_10_highest_scored/" target="_blank" rel="noopener">原帖</a></cite>

然后就发生了这个帖子最妙的一幕。第一条评论用他自己定义的标准，反手把他自己归了类 —— 你没有公开哪些帖子被判为有问题、依据是什么，那按你的分类法，这个帖子本身不就属于那 18.8% 的「不可复现」吗：

> "This post would fall under the 18.8% of posts that use private/unreproducible data, correct? Since I have no way of independently verifying your assessment of minor and major issues … I don't have enough information to decide whether or not I can trust your assessment."
>
> <cite>— u/QuotidianQuell，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vzyyku/oc_how_accurate_were_the_10_highest_scored/p69io07/" target="_blank" rel="noopener">原帖评论</a></cite>

作者的回应也挺实在：不完全是，他只是不想公开点名说别人的帖子有错，但复核方法已经写清楚了，任何人都可以自己拉每月前十来对一遍，想要完整清单也可以私信他。另一条评论则把问题推得更远：数据可视化和底层数据一致、结论也和数据一致，不代表数据本身是对的 —— 这种事在学术期刊里同样天天发生。

这一节我最想说的是，那个「你的审计本身可复现吗」的追问，比审计结果更有价值。它提醒的是一件很容易被忽略的事：出于礼貌（不想点名）而牺牲可核查性，在做事实核查这件事上是一笔亏本买卖。中文互联网上大量「我统计了 XX 条数据发现」的内容，缺的往往不是统计，而是那份可以让别人复现的原始清单。

## 五、100 多个城市关掉了 Flock 摄像头，但评论区几乎没人当成胜利

[原帖：More than 100 cities across the nation have turned off their Flock cameras after outcry from locals](https://www.reddit.com/r/technology/comments/1vzz3hj/more_than_100_cities_across_the_nation_have/)

Flock 是一家做车牌识别摄像头的公司，把设备卖给美国大量地方警局，形成了一张覆盖面很广的车辆行踪网络。过去几周民意反弹迅速扩大，超过 100 个城市关停了系统，Tempe 等地明确以隐私和「可能被滥用」为由终止合同，取消合同的名单还在变长。同一天 r/technology 上还有另一条相关新闻：佛罗里达一位拿过「年度警官」的副警长，被查出用 Flock 系统跟踪前伴侣。

但评论区几乎没有欢呼。出现频率最高的一类回应是「换汤不换药」—— 关掉 Flock 只是换上 Axon 或别的同类供应商，问题从来不是哪一家公司：

> "turning off Flock to turn on Axon. We need to stop focusing on one company and focus on ALL SURVEILLANCE being the problem."
>
> <cite>— u/fuji311，<a href="https://www.reddit.com/r/technology/comments/1vzz3hj/more_than_100_cities_across_the_nation_have/p68sr4a/" target="_blank" rel="noopener">原帖评论</a></cite>

第二类质疑是「关掉」这个词本身太软：摄像头没拆、数据没销毁，所谓关闭随时可以再打开，真正需要的是地方立法和数据删除。还有人做了个很扫兴但必要的除法：全美有将近 19500 个建制市，100 个只是零头；更何况 Flock 最大的客户群其实是私营企业和业主协会，市政合同流失对它的营收影响有限。而那位被 Flock 跟踪的前伴侣的遭遇，恰好印证了下面这条：

> "Its not the tool I don't trust, its the people with access to it."
>
> <cite>— u/RipErRiley，<a href="https://www.reddit.com/r/technology/comments/1vzz3hj/more_than_100_cities_across_the_nation_have/p68v1te/" target="_blank" rel="noopener">原帖评论</a></cite>

这一节对中文读者的启发，我觉得不在于监控本身，而在于评论区展现出的那种拒绝被安慰的判断力：一条听上去像好消息的新闻，先问三件事 —— 分母是多少、是关停还是拆除、谁才是真正的付费方。这套追问方式换到任何一个领域都成立。而「我不信任的不是工具，是能接触到工具的人」这句话，几乎可以直接拿去评估任何一套权限系统的设计 —— 技术上能不能做到，和有没有人会滥用，从来是两个独立的问题。
