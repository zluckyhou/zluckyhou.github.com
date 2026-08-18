---
layout: post
title: "Reddit 每日精选 | 2026.08.18"
headline: "亚马逊买旧书回来扫描完就销毁，而这居然是版权判例算出来的最优解"
date: 2026-08-18 09:40:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "AI 的账单开始寄到实体世界：纸书、法庭和电网都在替它买单。"
summary: "本期五帖：404 Media 追踪一批旧书，终点是亚马逊的扫描销毁流水线，评论区扒出销毁恰恰是判例逼出来的动作；3M 请的专家证人让 ChatGPT 代笔，提示词里白纸黑字写着要证明 3M 零责任，结果被对方从取证材料里翻了出来；美国最大电网提议缺电时先切数据中心；有人把 LAPD 直升机一年的航迹画成一张没有底图的地图，街道全是被直升机自己飞出来的；最后是 r/Python 的自动化脚本大赏，最实用的那些往往只有几十行。"
digest_count: 5
---

这几天读 Reddit 有个挥之不去的感觉：关于 AI 的争论正在从「模型能不能」转向「谁来付账」。今天这五帖里，前三帖分别把账单寄给了纸质书、法庭的证据规则和电网调度，都是些看起来跟算力八竿子打不着的地方。后两帖算是喘口气——一张只用飞行轨迹画出来的洛杉矶地图，和一堆普通人为自己写的几十行 Python。

## 一批旧书被追到了亚马逊的 AI 扫描厂，销毁是判例逼出来的动作

[原帖链接](https://www.reddit.com/r/technology/comments/1vqs5hf/we_tracked_a_shipment_of_rare_books_it_ended_at/)

404 Media 追踪了一批被打包卖掉的旧书，终点是亚马逊一处专门用来扫描书籍、并在扫描后把实体书销毁的设施。报道里没有公布书单，理由是那会暴露卖家。这条在 r/technology 冲到高位，评论区却没有顺着「文化浩劫」的方向一路滑下去，反而分成了互相打架的两派，两边都有货。

第一派在拆「珍本」这个词。有人做过二手书生意，把整条食物链讲得很清楚：有价值的先被书商挑走，剩下的打包重组、再挑一轮，一路往下掉，掉到最底层的就是按立方米论价、慈善机构赚不到钱的垃圾，再往下就是填埋场。所以关键不是这些书稀不稀有，而是它们是从这条链的哪一段被截下来的。另有人补了个硬事实：亚马逊收的书都带 ISBN，也就是说不会早于 1960 年代末，能有多古老是有上限的。还有人提醒，传统出版社每年自己化浆掉的书比这多得多，只是没人写报道。

> "Without knowing where in the ecosystem the books came from, it's very hard to know if they're priceless relics or hamster bedding that's had a last-minute reprieve-by-digitisation."
>
> <cite>— u/PersistentBadger，<a href="https://www.reddit.com/r/technology/comments/1vqs5hf/we_tracked_a_shipment_of_rare_books_it_ended_at/p48tted/" target="_blank" rel="noopener">原帖评论</a></cite>

第二派则在解释亚马逊为什么要买这些「没人要的书」。主流猜测是：他们大概率是让 agent 去扫货，凡是没扫描过的 ISBN 就买，内容是什么根本不重要，要的是可验证由人类写出来的文本存量。有人拿低本底钢打了个比方——核试验之后冶炼的钢材都带上了额外的放射性，于是核前钢反而成了稀缺物资；现在的文本也一样，过了某个时间点的东西都可能被 AI 生成内容污染过，往前的纸质印刷品就成了干净的矿。也有人不同意，认为技术类旧书大多过时得厉害，喂进去只会让模型更糟。

> "They just need volumes of text that is verifiably 100% human made. The topic doesn't matter, they just want all of it."
>
> <cite>— u/elmz，<a href="https://www.reddit.com/r/technology/comments/1vqs5hf/we_tracked_a_shipment_of_rare_books_it_ended_at/p494kjh/" target="_blank" rel="noopener">原帖评论</a></cite>

不过整条讨论里最值得记住的一点，是有人把文章后半段翻了出来：销毁不是顺手，而是必须。此前 Anthropic 那桩官司里，法官认定扫描书籍用于训练构成合理使用，理由之一恰恰是原书被销毁了——买家把实体媒介转成数字形式是自己的权利，毁掉原件意味着这一册不会被复制转卖，不会侵蚀出版社的生意。于是版权法在这里推导出一个非常反直觉的结论：想合法地把书变成训练数据，你就得把书毁掉。骂销毁野蛮的人和骂版权法僵化的人，其实在骂同一件事的两头。对国内读者来说，这条更像一个提醒：涉及 AI 训练数据的规则，最终会以这种非常物理、非常不可逆的方式落地，而不是停留在条款里。

## 3M 的专家证人让 ChatGPT 写报告，提示词进了取证材料

[原帖链接](https://www.reddit.com/r/technology/comments/1vquq47/show_how_3m_is_0_at_fault_expert_witness_used/)

2020 年休斯敦 Watson Grinding 工厂爆炸，三人死亡、约两百户民宅受损，后续诉讼里 3M 请了一位专家证人出具报告。404 Media 拿到的取证材料显示，这位专家用 ChatGPT 写了报告的相当一部分，而且把提示词也留了下来：他要求模型帮他写一份出色的专家证人报告来为 3M 的注意义务辩护，并且要「说明 3M 对这次爆炸负 0% 的责任」。这些提示词在诉讼中是可被对方调取的证据，于是全都摊在了法庭上。据评论区扒出的数字，这份报告收费九万美元。

评论区最有意思的不是骂声，而是一场关于「到底哪里错了」的正经拉锯。一派认为这没什么大不了：报告最终还是要由专家署名、上庭接受质证，重要的是结论本身对不对，而不是研究过程中用了什么工具，花一分钟写个提示词、再花五分钟看看有没有自己没想到的角度，不用白不用。

> "You’d be silly not to do the same in that position. … It’s worth the 60 seconds it took to write that prompt and another 5 minutes to read the output to see if AI came up with any angles they hadn’t considered."
>
> <cite>— u/949goingoff，<a href="https://www.reddit.com/r/technology/comments/1vquq47/show_how_3m_is_0_at_fault_expert_witness_used/p492hcf/" target="_blank" rel="noopener">原帖评论</a></cite>

反驳则相当专业，直接搬出了美国专家证词的准入门槛（Daubert 标准）：专家能上庭，前提是他的方法被证明科学可靠；陪审团之所以采信，靠的正是这层权威外观。如果一个人以自己的学历和经验取得专家资格，却没说明结论其实来自一个在「产出准确结论」上从未被科学验证过的模型，那问题就很大了。更要命的是提示词的写法——他不是让模型给出一个合理判断，而是先把结论定死再让它去凑论证。有人拿测谎仪和咬痕比对做类比：这些东西之所以后来不被采信，不是因为没有专家肯签字，而是方法本身不可靠，让陪审团听见就已经构成偏见。

> "The AI was not prompted to provide a reasonable take. It was prompted to write a report that gives a pre-determined conclusion…"
>
> <cite>— u/harpers25，<a href="https://www.reddit.com/r/technology/comments/1vquq47/show_how_3m_is_0_at_fault_expert_witness_used/p4afd08/" target="_blank" rel="noopener">原帖评论</a></cite>

这场争论的分歧点其实很清晰：用 AI 做检索和查漏，和用 AI 给一个预设结论补论证，是两件不同的事，而在这个案子里，那句提示词把区别写得明明白白。我更在意的是另一层——提示词是可被调取的证据。以前的思维过程留不下痕迹，现在它成了带时间戳的文本，写在对话框里，将来会被对方律师逐条念出来。这大概是所有用 AI 干专业活儿的人今年最该记住的一件事。

## 美国最大电网提议：缺电先切数据中心

[原帖链接](https://www.reddit.com/r/technology/comments/1vqs0g9/americas_largest_grid_wants_to_cut_power_to_new/)

管着美国最大电力市场的 PJM 提了个方案：新接入的 50MW 以上数据中心要么自带发电能力，要么在电力紧张时被排在第一顺位断电。等于把过去默认由公共电网兜底的那部分风险，直接退回给了用电大户。

评论区一半是解气的段子，另一半意外地很懂行。最有信息量的一条来自显然在这行干活的人：现在燃气轮机订单已经排到五六年后，有公司光是为了在工厂排产队列里占个位置就要掏几百万美元；所以「那就自己发电吧」这句话说起来轻松，真要落地，除了核电就是联合循环燃气，两条路在几个月的尺度上都走不通。另一派的补充也在点上：必须同时限制自备电源的排放，否则最省事的选择一定是高污染的化石燃料，等于把公共电网的压力换成了本地的空气质量。还有人提醒，数据中心自身几乎不直接排污，它对环境的伤害基本上都是通过多耗的那几度电传导出去的——这句话反过来说就是，把它从电网上摘下去并不会让账单消失，只会让账单换个地方结算。

> "Currently we are on at least 5-6 year back log turbine orders. Companies are paying millions just hold a spot in line at these factories."
>
> <cite>— u/I_Hate_，<a href="https://www.reddit.com/r/technology/comments/1vqs0g9/americas_largest_grid_wants_to_cut_power_to_new/p47yycu/" target="_blank" rel="noopener">原帖评论</a></cite>

也有人用最直白的方式点破了这类提案的谈判属性：这与其说是规则，不如说是一则广告——嗨，我是你的供电方，来跟我谈条件吧。

> "This is a big advertisement saying “Hey… it’s me ur power supplier… bribe me to change my mind”"
>
> <cite>— u/Financial_Wind6229，<a href="https://www.reddit.com/r/technology/comments/1vqs0g9/americas_largest_grid_wants_to_cut_power_to_new/p47r9ag/" target="_blank" rel="noopener">原帖评论</a></cite>

从国内视角看，这条新闻的价值在于它暴露了 AI 基建真正的瓶颈位置。芯片是能加价买到的，轮机和变电站不是；前者的交付周期以季度计，后者以年计。当所有人都在比谁的集群大时，真正决定节奏的可能是那张排到 2031 年的产线排期表。

## 一年的 LAPD 直升机航迹：整张洛杉矶地图是被飞出来的

[原帖链接](https://www.reddit.com/r/dataisbeautiful/comments/1vr0bgs/oc_a_year_of_lapd_helicopter_flights_over_los/)

r/dataisbeautiful 上这张图的做法很聪明：把洛杉矶警局一年的直升机飞行轨迹按滞空时长累加着画出来，不加任何底图。结果街道、海岸线、机场的形状自己浮现了出来——你看到的每一条线，都是直升机自己飞出来的。作者说数据只覆盖 LAPD 自有的 17 架直升机，郡治安官的飞机没算在内，所以地图边缘那些漆黑的区域不是没人巡逻，只是换了个部门。

评论区把这张图读出了好几层。一层是规模：有人指出 LAPD 拥有全美城市里最大的航空部门，作者顺势剧透了自己的下一个项目——把洛杉矶市和郡持有的所有飞行器加在一起，机队规模超过匈牙利、斯洛伐克、爱尔兰这些国家的空军。马上有人来做尺度校正：洛杉矶郡的面积只有爱尔兰的十分之一左右，人口却是两倍多，跟匈牙利相当，所以这个对比更像是在说人口密度而不是军事力量。

> "if you add all the aircraft owned by the City and County of LA it comprises a fleet larger than the national Air Force of countries like Hungary, Slovakia, Ireland"
>
> <cite>— u/Infamous_Echo_5683（原帖作者），<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vr0bgs/oc_a_year_of_lapd_helicopter_flights_over_los/p4aw53g/" target="_blank" rel="noopener">原帖评论</a></cite>

另一层是「为什么图上全是圈和街道」。作者说 LAPD 管这些圆圈叫 orbit，通常出现在直升机需要留在某个区域搜索目标或给地面提供支援的时候。飞过的人补充了技术细节：盘旋比悬停省力也更安全，悬停要一直跟风较劲，还等于给自己当靶子；而且观察员坐在座舱左侧，所以他们习惯向左盘旋，让那一侧压低、视野更好。至于街道为什么这么清晰，答案朴素得可爱——跟车的时候当然沿街飞，而且对飞行员来说，顺着马路保持航向本来就非常顺手。

> "In addition, the spotter sits on the left side of the cockpit and they orbit left, so that side is tilted downward, giving the spotter a clearer view toward the ground."
>
> <cite>— u/Riluke，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1vr0bgs/oc_a_year_of_lapd_helicopter_flights_over_los/p4b4cnz/" target="_blank" rel="noopener">原帖评论</a></cite>

还有一层是本地人的体感。洛杉矶人管这些直升机叫 ghetto bird，Ice Cube 有首同名歌；有人一眼认出图上密度最高的那一大片方块对应着少数族裔聚居区，也有人半开玩笑地说自己最喜欢住在图上全黑的地方，终于不用半夜被螺旋桨吵醒了。关于成本的讨论倒是很快收敛：光维护费大约每飞行小时一千二到一千八美元，还不含机组。一张纯粹由轨迹构成的图，最后被读成了一份关于「警力注意力落在谁头上」的分布图，这大概是数据可视化最好的时刻——它没有下任何结论，但每个人都在里面看见了自己那部分洛杉矶。

## r/Python：那些真正被用起来的自动化脚本，大多只有几十行

[原帖链接](https://www.reddit.com/r/Python/comments/1vqggbo/what_are_some_python_automations_you_built_for/)

一个很老套但每次都好看的问题：你为自己的生活写过哪些 Python 脚本？楼主的动机很实在——「项目点子」那类帖子总在推荐造玩具，反而漏掉了这些真有用的小东西。几百条回复里，最打动人的几乎都不是技术含量高的那些。

有人每月自动抓一次自己的邮箱，把水电账单画成时间序列图，结果发现用水量没变但水费连涨了好几个月，拿着这张图去找物业，最后查出是水表坏了。这是整个帖子里我最喜欢的一条：写脚本的时候他大概只是想满足一点好奇心，几个月后它变成了证据。类似的还有一位在疫情期间拼了个小程序，每天从省卫生部门的网页上抓新增病例数、通过 Pushover 推到手机上——他说这东西几乎没花时间，却可能是他做过的所有东西里最有用的一个。

> "My water bill recently got higher for several months in a row without any major change in usage and the graph was useful to prove to the leasing office that something was wrong (the water meter was malfunctioning)."
>
> <cite>— u/floydmaseda，<a href="https://www.reddit.com/r/Python/comments/1vqggbo/what_are_some_python_automations_you_built_for/p4633q7/" target="_blank" rel="noopener">原帖评论</a></cite>

> "It was tiny and took almost no time at all, but out of all of the things I have developed... it was quite likely the most useful of them all."
>
> <cite>— u/Covfefe-Drinker，<a href="https://www.reddit.com/r/Python/comments/1vqggbo/what_are_some_python_automations_you_built_for/p45k72k/" target="_blank" rel="noopener">原帖评论</a></cite>

其余的花样也很值得抄作业：用 Google Maps 的路径 API 算通勤时间，快要触发托儿所超时收费时给自己发警报（免费额度完全够用）；给不支持峰谷套利的旧储能电池外接智能插座，每 15 秒读一次电价时段和电量，自己写充放电策略；把公司排班网站的接口扒下来做工时统计，顺带发现返回的 JSON 里居然还带天气；爬市政网站查明天该扔哪种颜色的垃圾桶，提前一天给自己和伴侣发短信。当然也少不了那条被顶得很高的三行代码——每 30 秒发一次 F13 键位，作者称之为「我整个职业生涯写过的最有价值的代码」，底下立刻有人把间隔改成了 299 秒，正好卡在 Teams 五分钟的离线判定前面。

顺便一提，帖子里有条关于炒股脚本的支线吵得挺凶：有人写了每小时抓指数、异动就发短信的脚本，立刻被搬出有效市场假说泼冷水，说散户靠这个跑赢指数基金基本没戏；反驳的人给了个「剔除标普年内垫底五只」的策略，又被指出标普是市值加权、剔掉最小的五只几乎不影响结果。热闹归热闹，结论倒是很朴素：这类脚本的价值在于让你少盯盘，而不是让你多赚钱。

这一帖对我的启发是，个人自动化的门槛从来不在技术，而在「你有没有把某件小烦躁当回事」。上面这些脚本，任何一个都能在一个晚上写完，难的是意识到水费涨了值得画张图。国内的环境甚至更友好——账单、排班、垃圾分类、通勤时间大多都有现成的接口或小程序，缺的只是那点动手把它抓下来的念头。
