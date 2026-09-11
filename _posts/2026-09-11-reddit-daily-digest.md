---
layout: post
title: "Reddit 每日精选 | 2026.09.11"
headline: "一位 C 级高管在评论区直说：我不招初级了，token 比人便宜，而且不会睡过头"
date: 2026-09-11 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "科技业只剩 4% 的新岗位给应届生，而最坦率的解释来自一位亲自做决定的高管"
summary: "本期五帖：一份 14.5 万条在招岗位的抓取显示初级岗只占 4%，评论区里招聘方和高管轮番现身说法，也有人指出标题夸大了口径；一位研究者公开质疑 OpenAI 所谓的数学突破，附上的亲历声明说「几乎没有人类输入」并不属实；DeepSeek V4.1 Flash 发布，讨论焦点从跑分转向了「别再假设模型要整个塞进显存」；ID 验证服务商 IDScan 泄露 1.5 亿张驾照，评论区从段子吵到「验证完就该销毁」到底管不管用；最后是中国差一点点没跨过世界银行的高收入门槛，有人认真论证了这条线为什么不好过。"
digest_count: 5
---

今天这几帖凑在一起，主题意外地统一：都在问「谁承担了代价」。初级岗位消失了，代价由还没入行的人承担；模型宣称的突破背后，代价是被抹掉署名的一整个团队；验证服务泄露了 1.5 亿张驾照，代价由被强制交出证件的每个人承担。剩下两帖偏技术和数据，但也各有各的意思——一个在重新定义「本地能不能跑」，一个在算一条统计线为什么这么难跨。

## 一、科技业的新岗位里只有 4% 是初级岗，最坦率的回答来自一位高管

[Only 4% of new jobs in tech are entry-level](https://www.reddit.com/r/dataisbeautiful/comments/1wczpky/oc_only_4_of_new_jobs_in_tech_are_entrylevel/)

楼主抓取了 945 家科技公司官网招聘页上的全部在招职位，9 月 11 日的快照一共 14.5 万条，按标题里的职级关键词分类，结果初级岗（实习、应届、junior 等）只占 4%。数据本身谈不上多精巧，但它恰好把一个所有人都在私下感受、却很少被量化的东西摆到了台面上。

评论区之所以值钱，是因为真正做决定的人直接下场了。一位自称科技招聘的用户说自己从 2024 年起就没再招过应届生，而前三年每年都招五到十个；一位 C 级高管说得更不留情面——过去交给初级员工的活现在可以直接交给 AI，一个初级员工的薪水能烧掉海量 token，而且不用承担「这人靠不靠谱」的风险。

> "It's AI. I'm a C level, and I won't be hiring juniors. There's just so many things that you used to give to a junior that you can just give to AI. For the cost of a junior you can burn a huge number of tokens…"
>
> <cite>— u/lordnacho666，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wczpky/oc_only_4_of_new_jobs_in_tech_are_entrylevel/p923dor/" target="_blank" rel="noopener">原帖评论</a></cite>

他后面补的两段更耐读。有人指责他短视、忘了自己也当过初级员工，他没有回避，只是说这不是他能替投资人做的选择：如果别家继续这么干而他不干，丢掉的订单再也回不来；而且他自己也有个对技术感兴趣的孩子，他并不希望事情是这个样子。另一位金融行业的管理者补了同一个现象的另一面：他因为主导公司的 AI 落地而连跳一级，八年经验的人现在处在甜蜜点上——既有沉淀又肯用新工具；但他也承认，公司最新招进来的人不用再做那些重复到发疯的建模练习了，交付物更多更漂亮，可他们并不真的理解自己在用的东西。

也有人对数据本身提出了合理质疑：44% 的岗位标题里根本没有职级词，把这部分整个丢掉再算比例，本身就偏向了耸动。

> "Having 44% of roles as unclassified is ridiculous. The new grad role count is more like 4/56 =0.0714 7% of their classified roles, and honestly, many roles without classifiers (e.g. software engineer) lean either junior or mid level…"
>
> <cite>— u/BTTLC，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wczpky/oc_only_4_of_new_jobs_in_tech_are_entrylevel/p9267t3/" target="_blank" rel="noopener">原帖评论</a></cite>

还有人指出这份快照只覆盖了六周，而北美大量应届岗位是 11 月到次年 3 月通过校招关掉的，季节性没有被排除。楼主自己也承认数据只积累了大约六周。

我更在意的其实不是 4% 还是 7%，而是那位高管顺口说出的那句「不用承担这人靠不靠谱的风险」。企业把「培养人」这件事从成本表里划掉了，但资深工程师并不是凭空长出来的——线程里被顶得很高的那句反问很到位：如果今天的初级员工找不到工作，明天的资深工程师从哪来。对国内读者来说，这个问题更尖锐一点：我们的行业本来就更依赖「跟着老带新做几年」的隐性传承，一旦这条通道被 AI 顺手堵掉，断层不会在今年显现，会在五年后一次性到账。

## 二、又一位研究者指控 OpenAI：拿对话训练，然后宣称是自己的突破

[ANOTHER researcher accuses OpenAI of training on conversations and then claiming a breakthrough](https://www.reddit.com/r/LocalLLaMA/comments/1wcmgbn/another_researcher_accuses_openai_of_training_on/)

这帖的转发链条本身就是个笑话——Reddit 帖子链到 Bluesky，Bluesky 贴的是 X 的截图，X 在讨论有人发在 Mastodon 上的内容，评论区第一波全在吐槽这件事。但往下翻，讨论很快就严肃起来了：核心指控是 OpenAI 一边把用户对话拿去训练，一边把由此得到的结果包装成模型自主取得的数学突破。

最有分量的一条评论直接贴出了当事数学家的公开声明。按这份声明的说法，对方被告知模型「只拿到了题目本身」、「几乎没有用到人类输入」，但在通话过程中，随着团队成员在内部聊天里不断补充更正，真相一点点浮出来：其实是一整个团队在做这道题，模型先被喂了更简单的题目，连展示给他看的那个 prompt 都是用 Codex 生成的，消耗的算力也大得离谱。

> "…it emerged that an entire team had been working on the problem, that this was one of a number of things that was tried, … that even the prompt that had been shown to me had been written by prompting Codex, and that an insane amount of compute had been used."
>
> <cite>— u/DragonflyOk9274，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1wcmgbn/another_researcher_accuses_openai_of_training_on/p9239sz/" target="_blank" rel="noopener">原帖评论</a></cite>

线程里也有人要求对方拿出「博士数学家全程引导」的证据，认为人类只是在不断说「继续」；双方谁都没能给出决定性材料，这一段基本打成了平手。倒是另一条把话说得很实在：$2000 万美金的算力如果直接发给十位数学家，够他们全职攻十年——有人反驳说这类问题本来就没有明确 ROI，学界拿不到这种资助，而这正是 OpenAI 愿意砸钱的原因；也有人怀念贝尔实验室那种由巨头利润供养、但不急着把成果变成新闻稿的纯研究模式。

另一条支线则很实际：不少人开始把这件事当成「不要把敏感数据交给云端 API」的证据。

> "This is why my workplace built out and serves K3 and GLM 5.3 and banned use of API for sensitive data."
>
> <cite>— u/jld1532，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1wcmgbn/another_researcher_accuses_openai_of_training_on/p8z4cp6/" target="_blank" rel="noopener">原帖评论</a></cite>

我的看法是，这件事最值得警惕的不是「有没有偷用数据」，而是**归因的默认方向正在悄悄反转**。当一个结果由「一个团队 + 海量算力 + 反复试错 + 模型」共同做出来，叙事却只保留模型，人的那部分就被系统性地抹掉了。对写论文、做工程的人来说，这意味着从今天起，说清楚「人做了什么、模型做了什么」不再只是学术礼貌，而是一种自我保护。值得一提的是，评论里有人提议应该有第三方可审计的「不用于训练」保证——目前这还只是个愿望，但迟早会变成合规要求。

## 三、DeepSeek V4.1 Flash 发布，但讨论焦点是「别再假设模型要整个塞进显存」

[DeepSeek V4-1 Flash is out](https://www.reddit.com/r/LocalLLaMA/comments/1wcbid7/deepseek_v41_flash_is_out/)

DeepSeek 又发了新模型：多模态 MoE，主干 552B 参数，支持百万 token 上下文。楼主的吐槽是「灾难即服务，又来了」。但和以往不同，这次 r/LocalLLaMA 的热度几乎没花在跑分上，而是全扑在一个更具体的问题上——这东西到底能不能在家里跑起来。

整个讨论的技术含量比标题高得多。有人算出原生 4bit 主干加视觉部分大约 310GB，其余是 engram（n-gram 查表）部分，而这个模型的上下文开销几乎可以忽略，所以一台 256GB 的机器上跑个 3.x bpw 量化版是有戏的；有人指出 n-gram 表可以直接扔到 SSD 上，因为它对带宽的要求极低、而且完全由 token 顺序决定，可以预取。顺着这条线，有人给出了本期我最喜欢的一句判断：

> "Expert caching/streaming would probably get an excellent hit rate on a 256 GB machine. Likewise, n-gram tables can probably just be mmap()'d. … We need to move away from assuming the entire model will be VRAM-resident for local inference."
>
> <cite>— u/wren6991，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1wcbid7/deepseek_v41_flash_is_out/p8zwjqe/" target="_blank" rel="noopener">原帖评论</a></cite>

另一个被反复提到的点是：估算模型能力的老经验公式失效了。过去大家习惯用「总参数量乘激活参数量再开方」来粗估一个 MoE 的等效规模，但在引入 n-gram 嵌入之后，8B 的激活参数已经不再像 8B 了。

> "I dont think sqrt(P x A) is meaningful anymore, not especially when theres ngram embedding involved. 8B active dont really behave like 8B anymore."
>
> <cite>— u/silentsnake，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1wcbid7/deepseek_v41_flash_is_out/p8ws1bo/" target="_blank" rel="noopener">原帖评论</a></cite>

横向比较那部分吵得也有意思。有人花四天拿 DeepSeek 和 GLM 5.3 Flash 在同一批金融分析和编码任务上对跑，说 DeepSeek 常常四十分钟后还在「嗯……但如果……」，GLM 那边已经进入构建阶段了；对方立刻反问是否有客观数据，答案是没有，纯主观体感。这种坦诚的「我没有数据但我用了四天」反而比跑分表有参考价值。

我的延伸想法是：如果「模型必须常驻显存」这个前提真的松动，本地部署的成本曲线会被重新画一遍——决定你能跑什么的，可能从显存容量变成内存带宽加 SSD 随机读性能。对国内很多买不到高端卡、却能轻松堆内存和 NVMe 的团队来说，这是个值得提前押注的方向。

## 四、IDScan 泄露 1.5 亿张驾照，评论区吵的是「验证完就销毁」到底管不管用

[ID verification giant IDScan confirms data breach with more than 150 million driver's licenses stolen](https://www.reddit.com/r/technology/comments/1wckfeb/id_verification_giant_idscan_confirms_data_breach/)

身份验证服务商 IDScan 确认数据泄露，涉及超过 1.5 亿条驾照记录。这家公司为大量商户提供扫证件的 SDK 和服务，多数被泄露者甚至不知道自己的证件曾经过它的手——没有退出选项，也没有事先告知。评论区最热的一层是在比谁的赔偿更寒酸（一美元？还是一年免费信用监控？），但往下走就正经多了。

实质讨论集中在一个问题上：既然验证必须发生，怎么做才不会攒出这么一个高价值的数据堆。最集中的方案是把判断下沉到本地、只回传结论。

> "Any verification should be done on device. The website should just get a yes/no answer to the query."
>
> <cite>— u/AwesomeWhiteDude，<a href="https://www.reddit.com/r/technology/comments/1wckfeb/id_verification_giant_idscan_confirms_data_breach/p8zgr6o/" target="_blank" rel="noopener">原帖评论</a></cite>

有人进一步展开：年龄验证真正需要的只是「此人是否大于 18 岁」这一个布尔值，网站不该拿到任何多余信息。也有人提出「验证完即销毁」，但立刻被反驳——这次攻击者拿到的是实时访问权限，证件在被销毁之前就已经被截走了，保留策略再严格也拦不住。一位在自家产品里集成了 IDScan SDK 的用户则提供了对照组：他们把解析结果完全存在本地（用于赌场一类场景），数据从不回传，因此不在这次泄露范围内——同一个 SDK，架构选择不同，命运完全不同。

值得注意的还有一条常被顶起来的观察：很多人早就预言过，强制平台做年龄验证的立法必然会催生这种集中化的证件数据库，而现在没人讨论要不要修改那些法律。

我自己的体会是，这件事的教训不在「某家公司安全没做好」，而在制度设计从一开始就选错了形状：把「证明某件事」实现成「上交原始证件」，等于强制制造一个全国规模的单点。国内在人脸、实名、未成年人保护这些场景上正在铺开类似的验证链路，IDScan 的这次事故值得当成一份提前到达的事故报告来读——最小化回传、结论优先于原件、能本地判断就别上云，这几条不是洁癖，是止损。

## 五、中国差一点点没跨过高收入门槛，而这条线为什么难过挺有讲究

[China only just missed the income cutoff to become a high-income country this year](https://www.reddit.com/r/dataisbeautiful/comments/1wclxb5/china_only_just_missed_the_income_cutoff_to/)

一张图显示，按世界银行 Atlas 法计算的人均 GNI，中国今年又一次以微弱差距没能跨进「高收入国家」的门槛。帖子本身信息量不大，但评论区把这条线背后的门道扒得挺细。

最先被追问的是数据来源。有人给出了世行的数据目录链接，同时指出世行并不自己采集，而是基本采纳各国官方发布的数字——这引出了一连串关于口径可信度的争论。接着出现了一条被顶得很高、半开玩笑但论证认真的推测：世行的统计人员可能在有意无意地让门槛「刚好够不着」，原因不是政治，而是工作量。

> "…when China is moved into the high-income bracket, it will roughly double the entire high-income population globally, along with moving $20tn+ of global nominal GDP… A change of this size will radically alter a massive number of indicators and statistical representations…"
>
> <cite>— u/Mariks500，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wclxb5/china_only_just_missed_the_income_cutoff_to/p8zbne8/" target="_blank" rel="noopener">原帖评论</a></cite>

这个说法之所以有人认真对待，是因为它指出了一个真问题：全球高收入人口因为一个国家的归类变化而翻倍，几乎所有以「高收入国家」为分组的指标、报告和模型都要重做一遍。下面很快有人接梗——到时候可以靠观察世行大楼夜里的外卖披萨数量来判断。

另一条支线更有现实意味：跨过门槛未必是好事。有人认为中国并不急着被划进高收入行列，因为那会损失一部分贸易条件、融资渠道和气候义务上的优待；但也有人提供了反面证据，说中共在 2025 年 9 月已宣布不再在 WTO 寻求发展中国家待遇。

> "CPC already announced september 2025 that they are not pursuing developing country status in WTO, and they've predicting that by 2030 they'll have achieved socialism with chinese characteristics…"
>
> <cite>— u/Working_Historian241，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wclxb5/china_only_just_missed_the_income_cutoff_to/p913ebu/" target="_blank" rel="noopener">原帖评论</a></cite>

还有人提到城乡差距这个更本质的变量：中国内部的收入分布极不均衡，如果把最穷的几个省份单独剔出去，剩下的部分早就越过了这条线。也有人认为汇率是关键——Atlas 法算的是名义美元口径，人民币的汇率水平会直接影响结果，而中国城市的建设水平和消费品供给，和名义人均收入之间确实存在观感上的落差。

对中文读者来说，这帖最有用的部分可能不是「过没过线」，而是提醒我们：这类国际排名的门槛既不神圣也不中立，它由一套具体的计算方法（Atlas 法、汇率平滑、各国自报数据）决定，而每一个环节都有解释空间。与其纠结哪一年正式跨过去，不如记住评论区那个更朴素的判断——一个把全球高收入人口翻一倍的国家，本来就不该被塞进任何现成的分类格子里。

---

今天就到这里。如果你只打算记住一件事，我建议是第一帖里那句反问：如果今天的初级员工找不到工作，明天的资深工程师从哪来。它不需要任何数据支撑，但没人能回答。
