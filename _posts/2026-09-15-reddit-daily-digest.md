---
layout: post
title: "Reddit 每日精选 | 2026.09.15"
headline: "今天五个帖子都在拆同一样东西：那些听上去斩钉截铁的标签，定义权到底在谁手里"
date: 2026-09-15 09:45:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "超级智能、美国造的模型、生命周期结束、全美最高薪——每个标签背后都有一个没人细看的定义"
summary: "本期五帖：伯尼·桑德斯提出立法禁止超级智能，评论区挖出了美国国会在九十年代关掉技术评估办公室这段旧账；开源模型社区争论一个模型怎样才算美国造，结论是根本无法验证；一份调查说 97% 的数据库管理员在跑过时软件，一线工程师反问过时是谁说了算；资深工程师聊要不要转管理，三十五年老兵坦承自己在 AI 时代掉队了；最后是一张薪资图，加州最高，按物价折算之后冠军变成了爱荷华。"
digest_count: 5
---

今天翻完这一圈，五个帖子来自完全不搭界的板块，却意外地在做同一件事：**拆标签**。

超级智能、美国造的模型、生命周期结束、全美最高薪——这些词都写得斩钉截铁，像是有人认真定义过。可一旦有人当真追问下去，会发现定义要么压根不存在，要么写定义的人并没有资格写，要么定义的标准早就换成了另一件事的代理指标。今天的评论区里最好的那些回复，几乎都是同一个动作：不去争论结论对不对，先问一句「这个词是谁定的，按什么定的」。

## 一、桑德斯要立法禁止超级智能，评论区翻出了国会九十年代关掉的那个办公室

[New Bernie Sanders bill would ban superintelligent AI and threaten developers with 20 years in prison](https://www.reddit.com/r/technology/comments/1wg1uq3/new_bernie_sanders_bill_would_ban/)

伯尼·桑德斯提出了一份法案，要禁止「超级智能」的开发，违规的开发者最高面临二十年监禁。帖子一天之内冲到了 r/technology 和 r/popular 的前列，但热度和支持不是一回事——评论区几乎一边倒地在批评，而且批评的角度分成了很不一样的两拨。

第一拨是关于策略的。有人说这本来就不是奔着通过去的，是一份「宣示性法案」（messaging bill），作用是提醒选民应该向自己的政治体制要求什么。

> "He doesn't expect to succeed. He's setting an example to remind voters of what they should be demanding of their democracy."
>
> <cite>— u/OkWillingness2817，<a href="https://www.reddit.com/r/technology/comments/1wg1uq3/new_bernie_sanders_bill_would_ban/p9qx2bp/" target="_blank" rel="noopener">原帖评论</a></cite>

反驳也很快：明知不会通过还提，风险是让自己显得脱离实际、只顾表演；而且这个话题早就被从各种角度讨论了很多年，一份笼统的禁令并没有开启任何新讨论，只是「砸出一声闷响」。还有人务实地问：就算美国禁了，凭什么让别的国家停下来？

但真正让我停住的是第二拨——有人顺着「国会根本不懂技术」这句抱怨，往下挖了一层，挖出了一段制度性的旧账：美国国会曾经有一个技术评估办公室（Office of Technology Assessment），养着一批领域专家，专门给议员做立法前的技术简报。这个办公室在九十年代被关掉了，公开理由是太费钱。

> "They used to have an office of technological assessment that had subject matter experts that would brief Senators and Representatives on proposed legislation. Newt Gingrich closed the office down in the 90s."
>
> <cite>— u/bolerobell，<a href="https://www.reddit.com/r/technology/comments/1wg1uq3/new_bernie_sanders_bill_would_ban/p9rhk6t/" target="_blank" rel="noopener">原帖评论</a></cite>

这条评论把整个帖子的性质变了。大家嘲笑议员不懂技术，嘲笑的是个人；但一个国家的立法机构有没有独立的技术判断能力，这是制度设计问题——你砍掉了唯一那个不受游说方向左右的评估机构，三十年后收获一批只能靠直觉立法的议员，这不算意外。对中文读者来说，这一点比法案本身有用得多：任何一个社会在面对新技术时，真正稀缺的从来不是「要不要管」的态度，而是**有没有一个既懂技术、又不替任何一方站台的常设机构去回答「到底该管什么」**。态度可以随时表，能力得养几十年。

## 二、什么样的模型才算「美国造」？开源社区发现这个问题根本没法验证

[Right to Intelligence. Protect your right to run local AI.](https://www.reddit.com/r/LocalLLaMA/comments/1wfqwfh/right_to_intelligence_protect_your_right_to_run/)

和上一帖恰好接上：r/LocalLLaMA 有人发起了一个叫「Right to Intelligence」的倡议，主张保护个人在自己机器上跑本地 AI 的权利，理由是眼下这一轮 AI 安全监管的风向里，开源权重很可能被顺手一起收拾掉。（顺带一提，帖子里最有用的一条回复其实是技术性的：有人发现该站点被某个知名威胁情报名单拦截、且 TLS 配置有问题，随后又跟进说联系维护者确认是误报、已在移除——这种「发现问题、追到底、回来更正」的评论质量，是这个板块少见的好。）

讨论很快跑到了执行层面，而这才是最有意思的部分。有人指出，即使真的立法禁止，对个人几乎无效——参考盗版史——但对企业极其有效，因为公司必须走合法路径，而公司才是 AI 厂商的主要收入来源。换句话说，这类禁令真正的作用不是拦住技术扩散，而是重新分配谁能合法地从中赚钱。

> "Criminalizing the usage of open models is a good enough deterrance for the corporations. While individual users can get by with piracy, companies have to do things the legal way, and they are the main revenue stream for most AI companies."
>
> <cite>— u/zdy132，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1wfqwfh/right_to_intelligence_protect_your_right_to_run/p9p79jy/" target="_blank" rel="noopener">原帖评论</a></cite>

紧接着是一连串没人答得上来的追问：一个模型要满足什么条件才算「美国造」？训练数据吗，可各家实验室的数据来自全世界；那按服务器所在地算，可这些公司在中东建了巨型数据中心；那按研究人员国籍算——祝你好运。还有人补了一刀：轻微微调、改几个参数、做一次消融，就足以让来源变得难以追溯，要求「整个模型在美国境内训练」在验证上根本不可行。

> "Or just doing something superficial, like a tune, parameter change, or obliteration. Requiring that the whole model be trained in the US seems infeasible to verify."
>
> <cite>— u/techno156，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1wfqwfh/right_to_intelligence_protect_your_right_to_run/p9pd5yo/" target="_blank" rel="noopener">原帖评论</a></cite>

这一串追问其实指向一个很朴素的道理：**一个无法验证的标准，最终不会变成技术标准，只会变成执法者的自由裁量权。**对中文读者尤其现实的一点是，这场争论里被反复当作论据的是「中国实验室还会不会继续放开源权重」——也就是说，今天全球开源生态的下限，有相当一部分是由中国团队的发布策略决定的。这个位置既是筹码也是责任，值得国内做模型的人认真想想。

## 三、97% 的数据库管理员在用「过时」软件，一线的反问是：过时是谁说了算

[97% of US database administrators are running obsolete programs](https://www.reddit.com/r/technology/comments/1wgeryg/97_of_us_database_administrators_are_running/)

一份调查报告说，97% 的美国数据库管理员在运行已经过了官方生命周期终点（EOL）的数据库软件。标题写得像一则安全警报，评论区的反应却基本是「这数字听起来吓人，但你先搞清楚它在说什么」。

最高赞的回复直接引了报告里的例证：MySQL 5.7 升到 8.0 意味着数据字典的大改和查询缓存的移除——升级从来不是把版本号加一，而是一次高风险工程。然后他把矛头对准了整个行业的习惯：

> "In the last 15 years the tech industry has gotten into a bad habit where we move from thing to thing at light speed without ever really bothering to make sure that the money and time spent were actually a good investment with positive ROI for the underlying business."
>
> <cite>— u/The__Toast，<a href="https://www.reddit.com/r/technology/comments/1wgeryg/97_of_us_database_administrators_are_running/p9tpjvk/" target="_blank" rel="noopener">原帖评论</a></cite>

他还有一句更锋利的观察：厂商在用 EOL 当棍子敲打任何一个不想跟着换的人；市场上明明存在大量「极度看重稳定、几乎不需要新特性」的客户，却没人愿意服务他们，因为不逼着人升级就卖不动专业服务。

然后一批做工业控制的人进来了，帖子的质地一下子变了。有人管交通信号控制器，说自家硬件比别人落后二十年是常态，因为需求根本不同：

> "Sure, your iPhone has way more computing power and connectivity, but I need something that is rock solid that will run for decades thru winter storms and summer heat waves and take power brownouts like a champ."
>
> <cite>— u/Vincent_LeRoux，<a href="https://www.reddit.com/r/technology/comments/1wgeryg/97_of_us_database_administrators_are_running/p9u4d64/" target="_blank" rel="noopener">原帖评论</a></cite>

他补充说，路上还跑着几台八十年代中期的 170 型控制器，稳定得很，只是芯片开始坏了——这句话恰好也说出了另一面。另一位 CERN 相关的评论提到，那边大量定制嵌入式控制设备跑在二十年前的处理器上，如今被迫迁移操作系统，不是因为设备不行，而是因为上游发行版不再支持这么老的 CPU 指令集。

但帖子里最值得记住的，是一位 IT 从业者对那些「跑了十五年好好的服务器，安全部门天天发邮件催」的抱怨的回应。他没有站在任何一边，而是把真正的风险说清楚了：

> "as long as you have a plan for when it dies, which could be any day now - or still 5 years off, that's fine. If literally anything in that server dies though, the odds of getting a replacement part in a timely or reliable manner are zero."
>
> <cite>— u/Arathrain，<a href="https://www.reddit.com/r/technology/comments/1wgeryg/97_of_us_database_administrators_are_running/p9uuik8/" target="_blank" rel="noopener">原帖评论</a></cite>

这段对话对国内很多团队都有直接参考价值。我们习惯把「老系统」说成技术债，但这个帖子提醒了两件事：第一，EOL 是厂商的商业日历，不是你的风险日历，两者经常被混为一谈；第二，老系统真正的风险通常不在 CVE 列表里，而在**备件、文档和还记得它怎么跑的那个人**。前者能靠扫描器发现，后者只能靠提前盘点。安全部门群发邮件很容易，跟业务方一起把每台老机器的「它死了怎么办」写下来很难，但只有后者才算做了事。

## 四、资深工程师要不要转管理：三十五年老兵说，我在 AI 时代掉队了

[Do you regret remaining an IC later in your career?](https://www.reddit.com/r/ExperiencedDevs/comments/1wfs3wz/do_you_regret_remaining_an_ic_later_in_your_career/)

发帖人做了八年一线工程师（IC），眼看隔壁带人的同事离职、位置空出来，开始动念头：如果一直不转管理，二三十年后会不会后悔被别人甩在身后？这是个老问题，但这次的回答密度很高，而且不是清一色的「别转，管理很烦」。

先是几位老兵现身说法：一位四十五岁、二十五年经验的资深 IC 说自己拒过十几次管理岗，从不后悔，核心理由不是情怀而是自由度——不带下属，时间和节奏都由自己安排。

> "I've turned down management roles like 10+ times over the years. I get shit done, but because I'm IC, my hours and time are more flexible than people with direct reports."
>
> <cite>— u/trhoppe，<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1wfs3wz/do_you_regret_remaining_an_ic_later_in_your_career/p9ooq3k/" target="_blank" rel="noopener">原帖评论</a></cite>

六十四岁还在写代码的、管过一段又管回去的、把非正式带徒弟当成管理瘾的解药的——各种版本都有。但真正提高这个帖子价值的是两条泼冷水的。

第一条讲的是 IC 路线的结构性风险：技术好不等于安全，你还得让高层看得见你。

> "The downside to IC is you need to make sure you are visible to executives and they think you bring value. I've seen some ICs lose visibility and when layoffs come there was no one to defend the head count."
>
> <cite>— u/CorrectPeanut5，<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1wfs3wz/do_you_regret_remaining_an_ic_later_in_your_career/p9qrlow/" target="_blank" rel="noopener">原帖评论</a></cite>

第二条更坦白，也更让人心里一沉。一位三十五年经验、同样多次拒绝管理岗的工程师说，在 AI 出现之前，他觉得自己在编码、设计、算法题上都能跟年轻人掰手腕；现在他也拥抱了工具，却发现产出被同事拉开了一倍多的差距——不是因为他不会用，而是因为「想法快用完了」。他末尾那句「早知道当管理层这部分会轻松些」，是整条线里最诚实的一句话。

顺带一提，另一条评论提到彼得原理（Peter principle）拿走了他身边太多最好的同事——把最强的工程师提拔成平庸的管理者，公司两头都亏。这也是为什么他在每次绩效周期里都推动公司建立一条不需要带人的晋升通道。

对国内读者，我想补一句不太一样的：这个帖子里几乎所有正面回答都建立在一个前提上——**公司有一条走得通的资深 IC 通道**，有 principal、有 fellow，级别和薪酬能对齐 VP。在没有这条通道的组织里，「不转管理」不是一个选择，而是一个天花板。所以真正该先问的不是「我要不要转管理」，而是「我现在这家公司，资深 IC 的上限长什么样，有没有活人走到过那个位置」。前一个问题是性格问题，后一个是事实问题，而事实问题应该先问。

## 五、加州程序员薪资全美最高，按物价一折算，冠军变成了爱荷华

[\[OC\] Tech pays highest in California, adjust for cost, and it becomes Iowa.](https://www.reddit.com/r/dataisbeautiful/comments/1wgdaao/oc_tech_pays_highest_in_california_adjust_for/)

作者抓取了六万多条在招的美国科技岗位（截至 9 月 13 日），取招聘启事里薪资区间的中位数、只算基本工资，再用各州的物价水平做平价折算。名义薪资榜上加州毫无悬念地第一；折算之后，榜首换成了爱荷华。

这类图的常见毛病是被人当成「该去哪儿工作」的结论，但作者自己把注意事项写得很清楚，其中一条尤其值得注意：**没有薪资透明法的州，数据是自选的**——那些州只有愿意公开薪资的公司才会出现在样本里，而愿意公开的往往是给得起的那些。这意味着低透明度州的数字天然偏高。一张图最诚实的部分，经常在图外面的备注里。

评论区最生动的一条来自洛杉矶：

> "Well yeah, my tech salary in LA has afforded me a million dollar house. When my family from Louisiana comes to visit, looks like I'm lower middle class to them."
>
> <cite>— u/BlackGold09，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wgdaao/oc_tech_pays_highest_in_california_adjust_for/p9tc2n0/" target="_blank" rel="noopener">原帖评论</a></cite>

一百万美元的房子，在外地亲戚眼里看着像中下层——平价折算这四个字，用一句生活场景说完了。顺着房价，有人解释了为什么加州的高成本不是「多盖点小房子」能解决的：贵的是地，不是房。

> "You can't simply build smaller houses so they're more affordable. The land is still ridiculously expensive."
>
> <cite>— u/mr_ji，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wgdaao/oc_tech_pays_highest_in_california_adjust_for/p9tm17n/" target="_blank" rel="noopener">原帖评论</a></cite>

他的推论是：地价既定，开发商要么往上盖成「沙丁鱼罐头」，要么盖豪宅把地块价值榨干，中间那档在经济上根本不成立——这也解释了为什么「刚需小户型」在高地价城市总是消失。这套逻辑在北上广深同样适用，只是我们更习惯用政策语言而不是地价来解释它。

不过我想给这张图加一个不那么舒服的注脚：平价折算能算清物价，算不清**机会密度**。爱荷华的折算后薪资更高，但你被裁之后方圆五十公里有几家公司在招同样的岗位，这个数字不会出现在任何一张购买力地图上。远程工作把这个问题拖延了几年，并没有取消它。真正该折算的，从来不只是你能买到多少东西，还有你换一份工作要付出多大代价。

---

今天这五帖凑在一起，给我留下的其实是一句很不浪漫的操作建议：下次再看到一个写得很确定的标签——某个系统「已过时」、某个岗位「更有前途」、某个地方「薪资最高」、某项技术「必须禁止」——先花三十秒问三个问题：这个词是谁定的？按什么标准？这个标准和我关心的事是同一件事吗？

大部分时候，问完你会发现自己面对的不是一个结论，而是别人的一份商业日历、一张自选样本，或者一个从来没打算被验证的说法。
