---
layout: post
title: "Reddit 每日精选 | 2026.09.20"
headline: "Intel 把比特压到小数点后三位，程序员还在用 print 找 bug"
date: 2026-09-20 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "从 1.485 比特的极限压缩，到一句「我们闻得出同事什么时候在瞎编」。"
summary: "本期五个帖子：r/Python 问「哪个调试技巧让你少走弯路」，票数最高的答案居然是 print；一份 2026 年 Python 技术栈清单被评论区逐条拆解；Intel 把三值大模型压到 1.485 比特，有人当场算出这正好是香农极限；纽约时报揭露 DraftKings 用 AI 精准锁定最会输钱的人；最后一份 356 次旅行的统计说 AI 规划的行程 43% 有毛病，而评论区最扎心的一句话是，我们知道人类同事会在哪里犯错，却不知道 AI 会。"
digest_count: 5
---

今天这五个帖子排在一起，有种奇妙的对照感。前两个是程序员的日常手艺：一个问「你最想早点学会的调试技巧是什么」，另一个问「2026 年的 Python 该长什么样」，两个楼里都吵得很热闹，而且吵的点比答案本身更有意思。中间一个是硬核的信息论：Intel 把一个已经压到 1.58 比特的模型又榨出了 0.1 比特，评论区有人三行字就把原理算明白了。后两个则是 AI 的另一面——一边是赌博公司用它精准找出最会输钱的人，一边是普通人发现它规划的旅行有将近一半是错的。

## 一、问「最好的调试技巧」，最高票答案是 print

[原帖：What's a debugging technique that saved you hours and you wish you'd learned earlier?](https://www.reddit.com/r/Python/comments/1wktvbr/whats_a_debugging_technique_that_saved_you_hours/)

r/Python 上有人问了个老生常谈的问题：哪个调试习惯为你省下了最多时间？一百多条回复里，排在最前面的一批答案朴素得令人发笑——`print("---------------- reached ----------------")`、`print("here")`、`print("got here 2")`。有人甚至给出了进阶版：在调试输出前面加一串彩色 emoji，或者统一加一个 `##JSTEST` 之类的独特前缀，这样在刷屏的日志里 grep 一下就能把自己的那几行捞出来。

真正的争论从「这才是正道」那条回复底下开始。有人说 print 只是没学会用调试器之前的替代品，很快被反驳：干这行二十年，最后还是回到 print，真需要上 gdb 的场景已经少之又少。而支持调试器的一方给出了最具体的分界线：

> "…until you get into async and multithreaded code and print statement debugging inhibits velocity. Knowing how to actually use the debugging tools is one of those things that separates junior from a senior imo."
>
> <cite>— u/mfc1__，<a href="https://www.reddit.com/r/Python/comments/1wktvbr/whats_a_debugging_technique_that_saved_you_hours/patx9g0/" target="_blank" rel="noopener">原帖评论</a></cite>

楼里另一条回复顺手解释了为什么这个问题会年年被问：调试根本没人教。学校教语法、教数据结构、教操作系统原语，然后就把人扔进工业界了；版本控制、调试器、IDE 这些真正决定日常效率的东西，全靠自学或者运气好碰上个愿意带你的人。

> "At least in US, school doesn't even touch source control, debugging, ides, etc. … You'd be surprised how many "senior" engineers in the US can't use pdb."
>
> <cite>— u/marr75，<a href="https://www.reddit.com/r/Python/comments/1wktvbr/whats_a_debugging_technique_that_saved_you_hours/pavgihd/" target="_blank" rel="noopener">原帖评论</a></cite>

除了 print 和调试器这两大阵营，楼里还散落着一些真正有含量的小技巧。比如用 `importlib.reload()` 配合 `code.interact(local=vars(foo))`，相当于把 REPL「cd」进某个模块内部，改完 .py 文件直接 reload 就能继续交互，不用重启整个应用——代价是不能用 `from x import y` 那种写法，因为 reload 对它无效。再比如日志的性能细节：`log.debug(f"var is {var}")` 比 `log.debug("var is %s", var)` 慢，因为后者只在这条日志真的会被输出时才去拼字符串。还有人给出了一个更上层的建议：与其纠结用什么工具调试，不如先学会写「可调试的代码」，而这件事往往和写「可测试的代码」是一回事。

**我的看法**：这个帖子最有价值的地方不是某个具体技巧，而是它暴露了一个行业性的断层——几乎所有人都在用自己摸索出来的土办法，而且都觉得自己这套挺好。print 之所以长盛不衰，是因为它零配置、零心智负担、在任何环境下都能跑；调试器之所以打不过它，往往不是能力问题而是启动成本问题。国内不少团队在这件事上还要更极端一点：线上环境不给 attach、容器里没有调试器、日志级别调不动，于是 print 就成了唯一选项。真想提效，与其教大家用 pdb，不如先把「随时能打开 DEBUG 日志」这件基础设施做好。

## 二、2026 年的 Python 技术栈，评论区不同意其中一半

[原帖：State of the art in Python 2026?](https://www.reddit.com/r/Python/comments/1wkziub/state_of_the_art_in_python_2026/)

有人列了一份相当完整的清单请大家批评：包管理全用 uv、lint 和格式化用 ruff、数据建模用 Pydantic 和 dataclass、配置统一写进 pyproject.toml、CI 里跑 pyright 或 pyrefly 做类型检查、测试用 pytest 加 Hypothesis，然后是一大串按领域划分的库。结果评论区不是来点赞的，是来逐条拆的。

争议最集中的两处，一是 pandas 还算不算「先进」。这个问题在楼里几乎没有悬念，Polars 的支持者一边倒：更快、更省内存，而且语法本身就更直白。

> "Pandas is definitely not state of the art in the big 2026"
>
> <cite>— u/bossExtremeSwag，<a href="https://www.reddit.com/r/Python/comments/1wkziub/state_of_the_art_in_python_2026/paupxr5/" target="_blank" rel="noopener">原帖评论</a></cite>

二是类型检查器选谁。Astral 家的 ty、Meta 家的 pyrefly、微软家的 pyright 各有拥趸，吵到后来有人干脆给出了最实在的建议：三个都装上跑一遍，看哪个报错信息对你最有用就留哪个。有意思的是关于版本号的插曲——有人以 ty 还是 0.0.x 为由说它没法上生产，立刻被指出 uv 和 ruff 到今天也没发过 1.0，照样满世界在用，Astral 似乎就是不爱给软件挂 1.0 这个标签。

还有一条逆流而上的回复，把清单里两个「政治正确」的选项一起否了：

> "I'd also skip Pydantic for most things—it's overkill, slow for ser/de, and can usually be replaced with a dataclass. Hypothesis is really cool in theory but I've never found a need for it in practice."
>
> <cite>— u/busybody124，<a href="https://www.reddit.com/r/Python/comments/1wkziub/state_of_the_art_in_python_2026/paus9tg/" target="_blank" rel="noopener">原帖评论</a></cite>

楼里我最喜欢的一条建议来自科学计算方向：写 NumPy 代码时把自己限制在 Array API 这个子集里。理由不只是可移植（backend 从 NumPy 换成 PyTorch 不用改代码），更重要的是 API 小意味着读代码的人需要学的东西少，而且这套标准把各种角落里的怪异行为都清理掉了。

> "Also, the Array API has superior design. The corner cases have been eliminated, and nearly every operation supports broadcasting in the obvious way."
>
> <cite>— u/NeilGirdhar，<a href="https://www.reddit.com/r/Python/comments/1wkziub/state_of_the_art_in_python_2026/pauzt6g/" target="_blank" rel="noopener">原帖评论</a></cite>

**我的看法**：这类清单帖的真实用途，从来不是照抄，而是看哪些项没人反对。uv 和 ruff 全场零质疑，说明工具链层面 Astral 已经赢了；Polars 取代 pandas 在新项目里基本成为共识；而类型检查器、日志库、文档工具这些位置仍然是三国混战，说明它们的差异还没大到能分出胜负。对国内团队而言，前两类可以放心跟进，后几类则完全没必要为了「先进」去换——毕竟楼里还有人在认真为 Sphinx 和 reStructuredText 辩护，理由是 intersphinx 到今天也没有对手。

## 三、1.58 比特再压成 1.485，评论区当场算出这是香农极限

[原帖：Intel squeezed a 1.58-bit LLM down to 1.485 bits without changing a single weight](https://www.reddit.com/r/technology/comments/1wkfbm0/intel_squeezed_a_158bit_llm_down_to_1485_bits/)

三值大模型把每个权重存成 -1、0、+1 三种状态之一，按信息论算下来每个权重需要 log₂3 ≈ 1.585 比特，这个数字一直被当成三值模型的存储下限。Intel 的做法是在不改动任何一个权重的前提下把它压到了 1.485 比特，顺带让数据处理快了约 10%——换句话说，等效提升了显存带宽。

帖子底下最热闹的其实是一个外行问题：一个比特怎么会有小数？几条回复很快把它讲清楚了——比特数是 log₂(状态数)，三种状态自然就是 1.58 个比特；而这 1.58 之所以还能再降，是因为 log₂3 这个公式有个前提假设。

> "Log2(3) assumes that all symbols appear with the same probability. If some symbols are more common than others, the average number of bits per symbol can be even lower."
>
> <cite>— u/NanoAlpaca，<a href="https://www.reddit.com/r/technology/comments/1wkfbm0/intel_squeezed_a_158bit_llm_down_to_1485_bits/parfnjo/" target="_blank" rel="noopener">原帖评论</a></cite>

真正的神回复来自另一位网友，他直接把这个数字反推了回去：

> "1.4845bits/symbol is precisely the Shannon limit of having 51.48% of your symbols be a zero and the rest evenly distributed between 1 and -1. So basically, they ran ANS compression (zstd) on the values."
>
> <cite>— u/Successful-Money4995，<a href="https://www.reddit.com/r/technology/comments/1wkfbm0/intel_squeezed_a_158bit_llm_down_to_1485_bits/parmayi/" target="_blank" rel="noopener">原帖评论</a></cite>

也就是说，所谓的「压缩突破」本质上是发现三值权重里零的占比超过一半（约 51.5%），于是用 ANS（zstd 里那套熵编码）把这个偏斜利用起来，正好打到香农极限。楼里还顺带澄清了一个常见误解：有人担心压缩会让数据更怕出错，被搞通信的网友纠正说，压缩属于信源编码、纠错属于信道编码，两者在流水线的不同阶段，无损压缩本身不会让数据更易错。

**我的看法**：这条新闻的标题写法很容易让人以为出现了什么新算法，实际上它是一次很漂亮的工程落地——把一个学过信息论的人都知道的事实（符号分布不均时熵低于 log₂ 状态数）真正做进了推理路径，而且做到了不掉精度、还顺手提了速。对做端侧推理的人来说，这个 6% 的体积缩减本身可能不是重点，「等效带宽提升 10%」才是，因为本地跑大模型的瓶颈几乎从来都是带宽而不是算力。另外值得记一笔的是：一个技术贴的评论区里能有人三行字复现出论文的核心思路，这种含金量在今天的中文技术社区已经不太容易见到了。

## 四、DraftKings 用 AI 找出最会输钱的人，然后给他们发优惠券

[原帖：How DraftKings Uses A.I. to Target the Gamblers Likeliest to Lose](https://www.reddit.com/r/technology/comments/1wkkikp/how_draftkings_uses_ai_to_target_the_gamblers/)

纽约时报的报道说，DraftKings 用数据科学来判断该给谁发投注激励，而那个模型优化的目标是找出最可能输钱的人；与此同时，公司一直没把同样的技术用在识别和保护成瘾风险用户上。帖子标题里那个对照本身就足够说明问题，而评论区的反应是——这有什么新鲜的。

> "Social media platforms have been able to determine which users are depressed, and how to tailor their feeds and ads to keep them hooked/spending money, for like 10+ years now. Example: Depressed women, particularly young women, are shown more beauty content."
>
> <cite>— u/Less-Engineer-9637，<a href="https://www.reddit.com/r/technology/comments/1wkkikp/how_draftkings_uses_ai_to_target_the_gamblers/parh6jw/" target="_blank" rel="noopener">原帖评论</a></cite>

楼里有自称做过博彩公司反洗钱与欺诈分析的人出来说，所谓「负责任博彩」的监管基本是个笑话，广告应该按香烟和酒精的标准来管。也有赌徒自己现身说法：他每天给自己设 20 美元上限、把娱乐场限额调到 10 美分，但坦白说这是因为他已经四十多岁了，二十多岁时绝对守不住这种自律。另一条老手回复提到一个反直觉的事实——这些平台不只是纵容输家，还会主动限制甚至关掉赢家的账户，理由写作「可疑活动」。

最有画面感的是一位网友对「到底有没有人真赢钱」的实地考证：

> "I went to the leaderboard, and the person that had won the most money, around $1,000, had spent $991 on bets. So the top 'winner' on the entire platform, had only profited $9 after betting nearly $1,000."
>
> <cite>— u/NUMBerONEisFIRST，<a href="https://www.reddit.com/r/technology/comments/1wkkikp/how_draftkings_uses_ai_to_target_the_gamblers/pav6xr5/" target="_blank" rel="noopener">原帖评论</a></cite>

**我的看法**：这个帖子真正值得中文读者留意的，不是赌博本身，而是那条「社交平台十年前就在这么干了」的提醒。推荐系统的目标函数写成什么，系统就会往哪儿演化——写「用户停留时长」，它就去找最容易上瘾的人；写「付费转化率」，它就去找最容易冲动的人。技术上，识别「高风险成瘾用户」和识别「高价值输家」用的是同一个模型、同一批特征，区别只在于产品经理决定拿这个分数去做什么。所以每次看到「算法是中立的」这种说法，都可以追问一句：那目标函数是谁定的？

## 五、356 次旅行的统计：AI 规划的行程，43% 的天数有毛病

[原帖：43% of AI-Planned Days Carry a Fault: A 356-Trip Study](https://www.reddit.com/r/dataisbeautiful/comments/1wkwun0/43_of_aiplanned_days_carry_a_fault_a_356trip_study/)

有人统计了 356 次用 AI 规划的旅行，结论是接近一半的行程日里存在某种错误——营业时间不对、闭馆日没查、两个景点之间的通勤时间明显不现实之类。这类「AI 不靠谱」的数据本身不算意外，帖子不大，但评论区有两条回复正好站在了这件事的两端。

一端认为这根本不是模型的问题，而是产品的问题：

> "Feels like something very easy to fix with proper tool calls and is more indicative of a shit product rather than underlying issues"
>
> <cite>— u/ClearlyCylindrical，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wkwun0/43_of_aiplanned_days_carry_a_fault_a_356trip_study/paurlbp/" target="_blank" rel="noopener">原帖评论</a></cite>

另一端则跳出了「准确率多少才够」的框架。有人把 AI 比作那个老是搞砸事情、还会张口就编的笨同事，接下来这条回复顺着这个比喻推了一步，我认为是全楼最有价值的一句：

> "Except we have a sort of intuition for the types of errors dumb coworkers make: we know which bits to double check, we can smell when they are BSing."
>
> <cite>— u/FoolishConsistency17，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wkwun0/43_of_aiplanned_days_carry_a_fault_a_356trip_study/pavah1w/" target="_blank" rel="noopener">原帖评论</a></cite>

**我的看法**：这句话点破了「AI 就像个不靠谱的同事」这个流行比喻的失效之处。和人类同事共事久了，你会形成一套错误画像——他记性差所以日程要确认，他爱夸海口所以进度要打折，他心虚的时候语速会变。这套直觉让你能把复核成本花在刀刃上。而大模型的错误分布跟人完全不同：它在最该犹豫的地方最流畅，在最简单的事实上翻车，语气永远稳定自信，不给你任何可供识别的信号。所以真正的问题不是「43% 高不高」，而是你根本不知道该复核哪 43%——除非像上面那条回复说的，把营业时间、交通耗时这类硬事实统统交给工具调用去查，只让模型负责编排。这大概也是所有 AI 应用最终都要走向 agent 加工具的原因：不是模型不够聪明，是我们需要一个可以被验证的接缝。
