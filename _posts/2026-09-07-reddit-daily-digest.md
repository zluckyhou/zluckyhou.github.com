---
layout: post
title: "Reddit 每日精选 | 2026.09.07"
headline: "CERN 有 2200 台十七年前的电脑，为了不换它们，整个机构搬去了 Debian"
date: 2026-09-07 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "从换操作系统到换地图、换统计口径，今天这五帖都在算同一笔账：替换一件旧东西，真正贵的从来不是它本身"
summary: "本期五帖：CERN 把 2200 台机器从 RHEL 系搬到 Debian，只因为新版红帽不再支持十七年前的 CPU，评论区讲清了那些机器到底是干什么的；联合国背书用等积的 Equal Earth 取代墨卡托，串里最好的反驳是「面积可以脑补，形状不行」；肯尼亚四万人的代写产业被 AI 干掉，评论区一位教授讲了学校这一侧的连锁反应；Python 第一届打包委员会选举，Astral 公开背书引发争议；还有一张 1870 年以来工时下降的图，被评论区从统计口径上拆得只剩一半。"
digest_count: 5
---

今天这五帖凑在一起，讲的其实是同一件事：换掉一样用了很久的旧东西，账该怎么算。CERN 为了不换 2200 台老电脑，把整个操作系统换了；联合国换了一张用了五百年的世界地图，代价是所有人对形状的直觉；肯尼亚有四万人靠替美国学生写作业为生，这个行业被 AI 一次性换掉了；Python 社区花了十几年才做出一个打包委员会，现在开始吵谁该坐在桌边；最后一张看起来无可争议的「工时越来越短」的图，被评论区从统计口径上拆了个底朝天。

## 一、CERN 把 2200 台机器从红帽系搬去了 Debian

[CERN is moving more than 2,200 specialized computers from RHEL to Debian](https://www.reddit.com/r/technology/comments/1w8i64m/cern_is_moving_more_than_2200_specialized/)

事情的起因很技术：新版红帽系发行版把最低 CPU 要求提到了 x86-64-v3，而 CERN 有大量设备跑在十七年以上的老处理器上，装不了新系统。摆在面前的选择是换硬件还是换系统——CERN 选了后者，因为 Debian 13 还支持这些老 CPU。标题读起来像一次发行版之争，实际是一次成本计算。

评论区最有价值的是把「2200 台电脑」这个数字讲清楚了。那些不是机房里的算力集群，而是散布在整个加速器设施里的工业控制机：每一块磁铁、每一个腔体都需要同步控制、监测和告警，配套一堆定制的 ADC、DAC、时钟板，再加一台小电脑负责远程控制和数据落盘。所以它们不需要快，只需要一直在。

> "The computers in question are not huge servers that process a lot of data. They are mainly industrial control computers that are dustributed across the entire facility."
>
> <cite>— u/wolfnest，<a href="https://www.reddit.com/r/technology/comments/1w8i64m/cern_is_moving_more_than_2200_specialized/p83vnlu/" target="_blank" rel="noopener">原帖评论</a></cite>

理解了这一点，另一条争论就有了意思。有人说二十年的硬件早就该换了，光电费差价就够买新机器；反对的人指出，这类系统的成本大头根本不是硬件，是把上千个控制模块在新平台上重新验证一遍所需要的时间和停机——高能物理现场还牵涉安全认证，有些实时子系统是用精简 C 甚至汇编写的，移植等于重做。还有人补了一句更现实的：加速器上那几十万个控制程序，改一次要人命。

> "And how many years to make sure all the control modules, hardware and software works flawlessly on new hardware? People have this obsession about always using the latest and greatest instead of using what works."
>
> <cite>— u/Lille7，<a href="https://www.reddit.com/r/technology/comments/1w8i64m/cern_is_moving_more_than_2200_specialized/p843mqw/" target="_blank" rel="noopener">原帖评论</a></cite>

顺带一提，串里还翻出了一段旧账：CERN 当年自己维护过 Scientific Linux，后来转向 CentOS，CentOS Stream 那次变动之后又转去 AlmaLinux，现在再往 Debian 走。有人提到一个很实在的理由——科研要用的软件红帽根本不打包，而 Debian 有七万多个源码包。

对国内做工业软件和嵌入式的人来说，这帖的启发不在于「Debian 更好」，而在于那句「用能用的东西」。评论区里嘲笑 CERN 抠门的人，多半没算过一个数：在控制系统里，验证成本通常比采购成本高一个数量级，而停机成本可能再高一个数量级。选发行版的时候，支持周期和最低硬件要求这两栏，往往比性能跑分重要得多。

## 二、联合国换掉了用了五百年的墨卡托地图

[The world map is changing: The UN has backed replacing the 500-year-old Mercator projection with the accurate Equal Earth projection](https://www.reddit.com/r/interestingasfuck/comments/1w8wf6a/the_world_map_is_changing_the_un_has_backed/)

联合国正式支持用 Equal Earth 投影作为参考地图，取代墨卡托。理由是老生常谈但确实成立：墨卡托为了保角，把高纬度地区放得很大——非洲被压小，格陵兰被撑到荒谬。Equal Earth 是等积投影，各块陆地的面积比例是对的。

评论区第一轮先把技术账算清楚：没有不失真的平面地图，只有换一种失真。墨卡托保的是角度和方向，所以它才成了几百年的航海标准，今天的 Google Maps 用的还是 Web Mercator——因为人看地图找路的时候，默认「上就是北」。Equal Earth 换来面积准确，代价是形状被横向挤压，越靠近两极越明显，而且离中央经线越远，经线越斜。

> "Mercator is also still used on most any maps used for navigation, because when people try to use a map to go somewhere, they generally expect north to always be straight up and east to always be straight left."
>
> <cite>— u/TheDolphinGod，<a href="https://www.reddit.com/r/interestingasfuck/comments/1w8wf6a/the_world_map_is_changing_the_un_has_backed/p86y5fb/" target="_blank" rel="noopener">原帖评论</a></cite>

但串里最好的一条反驳换了个角度：认知不对称。面积错了是可以脑补修正的——我们每天都在看同一个东西因远近而变大变小，所以你知道格陵兰其实没那么大，就能自动折算；但形状错了没法脑补，你没法一边看地图一边在脑子里把一个国家横向压扁、纵向拉长。也就是说，等积投影修好的是一个人们本来就能修的错，而弄坏的是一个修不了的。还有人替太平洋岛国抱不平：新图上它们更看不见了。

> "If a country is too big, you can just know that and imagine it smaller. That's easy to do. … But to remember to squish it sideways and lengthen it north-south, that's weird to imagine."
>
> <cite>— u/LeviAEthan512，<a href="https://www.reddit.com/r/interestingasfuck/comments/1w8wf6a/the_world_map_is_changing_the_un_has_backed/p86qsgb/" target="_blank" rel="noopener">原帖评论</a></cite>

这条思路值得借用到做图表上：所有可视化都是投影，都在保某个量、牺牲另一个量。真正该问的不是「哪种更准」，而是「读图的人会用它做什么判断」。做面积比较就用等积，做导航就用保角，两边都想要，就别做一张图。顺带一提，串里有人注意到新参考图把克里米亚画在了俄罗斯一侧——地图从来不只是几何问题。

## 三、四万肯尼亚人替美国学生写了多年作业，然后 AI 来了

[Kenyans Did College Students' Homework for Years. Then A.I. Arrived.](https://www.reddit.com/r/technology/comments/1w8vs93/kenyans_did_college_students_homework_for_years/)

《纽约时报》的报道：肯尼亚一度有数万人以替欧美大学生写论文作业为生，这是一条相当成熟的产业链，直到 ChatGPT 把价格打到接近零。一个靠人力套利存在的行业，被自动化一次性抹平。

评论区先被那个数字震住了——四万人做这门生意，意味着买方规模大得离谱。有人由此推出一个不太舒服的结论：不少人拿到文凭却什么都不会，是因为他们从来没做过那些作业。而更多人说这不是道德问题而是激励问题：大学早就从「求知的地方」变成了「体面生活的必要凭证」，付钱买的是那张纸，不是那堂课。

> "Most of them weren't paying to be taught. They were paying to get a piece of paper that says they were taught."
>
> <cite>— u/synept，<a href="https://www.reddit.com/r/technology/comments/1w8vs93/kenyans_did_college_students_homework_for_years/p8627c9/" target="_blank" rel="noopener">原帖评论</a></cite>

串里最有信息量的是一位教授现身说法，讲学校这一侧的连锁反应。它不是从「无论如何都让他们过」开始的，而是从「多花点心思帮学生」开始的：要求老师在给不及格之前先联系学生五次以上，要求允许重做作业，行政层反复强调招生和留存的压力——最后就隐性地变成了必须让他们过。与此同时，先修课和分级考试因为被视为对弱势群体不友好而被砍掉，学生基础更差，标准还得继续降。

> "I’m expected to reach out to each student 5+ times before they get an F. I’m expected to let them redo assignments."
>
> <cite>— u/happybara_capybara，<a href="https://www.reddit.com/r/technology/comments/1w8vs93/kenyans_did_college_students_homework_for_years/p86gsac/" target="_blank" rel="noopener">原帖评论</a></cite>

这帖对国内读者的启发可能在另一层：AI 干掉的不是「教育」，而是「用作业来证明学过」这个中介环节。这个环节其实早就被四万个肯尼亚人证伪了，只不过之前的作弊有价格门槛，看起来还像回事。现在门槛没了，考核方式就必须变——同样的逻辑正在很多以「交付物」为验收标准的岗位上重演：当交付物本身可以被批量生成，值钱的就只剩下能对结果负责的那个人。

## 四、Python 第一届打包委员会选举，Astral 公开站队引发争议

[Astral's endorsements for Python's first Packaging Council](https://www.reddit.com/r/Python/comments/1w928wf/astrals_endorsements_for_pythons_first_packaging/)

Python 基金会正在选第一届打包委员会（Packaging Council），17 人竞选 5 个席位，投票 9 月 15 日截止。uv 和 ruff 背后的公司 Astral 公开发文背书了其中几位候选人，官方讨论区因此吵了起来。争议点不在候选人资质——被点名的几位确实都是长期做打包的人——而在于一家商业公司该不该在开源治理选举里公开站队。

评论区有人的第一反应就是：公司在这种选举里背书正常吗？也有人觉得 Astral 现在是打包工具链里权重最大的玩家，站队反而是明牌，比暗地里使劲坦荡；但同一个人也担心 17 选 5 本身就是隐患，而这个委员会最后到底能产出决策还是只增加一层扯皮，才是真正的考验。

> "i still think 17 people for 5 spots is a disaster waiting to happen but whatever. the real test is if this council can actually get anything done or if its just gonna be another layer of discouse."
>
> <cite>— u/wildlyaquaticsenator，<a href="https://www.reddit.com/r/Python/comments/1w928wf/astrals_endorsements_for_pythons_first_packaging/p875vji/" target="_blank" rel="noopener">原帖评论</a></cite>

更实质的分歧关于历史包袱。有人说 Python 打包的复杂性是几十年欠债累积的结果——他试过让一个简单的 C 扩展在各操作系统和各 Python 版本上都编译通过，setup.py 折腾了三天，同样的事换成 C++ 加 CMake 一两个小时就完了。所以有人主张：先定义未来该是什么样，再想办法把遗留场景迁过去，不要让一小撮有历史需求的维护者拥有否决权。也有人从另一个方向担心 Astral 的影响力——万一 AI 泡沫破了公司没了怎么办，回应是代码开源，大不了 fork。

> "We cannot carry legacy use cases around forever, and they do not have an inherent seat at the table in shaping the future vision."
>
> <cite>— u/ColdPorridge，<a href="https://www.reddit.com/r/Python/comments/1w928wf/astrals_endorsements_for_pythons_first_packaging/p88savz/" target="_blank" rel="noopener">原帖评论</a></cite>

> "Astral might not be around in a year or two; after the AI bubble pops."
>
> <cite>— u/Short_Inspection_746，<a href="https://www.reddit.com/r/Python/comments/1w928wf/astrals_endorsements_for_pythons_first_packaging/p87lfh3/" target="_blank" rel="noopener">原帖评论</a></cite>

值得玩味的是串里一句抱怨：多少年大家求着修打包，社区无动于衷；uv 出来把问题解决了，突然就要成立委员会了。这话说得刻薄，但点出了开源治理里一个真实的次序——治理结构往往不是在问题最痛的时候建立的，而是在有人已经拿出解法、事实标准即将形成的时候才建立的。对依赖 Python 工具链的团队来说，这次选举结果值得看一眼：它多半会决定未来几年 uv 走的是「事实标准」还是「官方标准」这条路。

## 五、一张「工时越来越短」的图，被评论区从统计口径上拆掉了一半

[[OC] Annual hours worked per worker in the 14 rich countries with records back to 1870: the median has fallen from 3,138 hours to 1,561](https://www.reddit.com/r/dataisbeautiful/comments/1w8tutc/oc_annual_hours_worked_per_worker_in_the_14_rich/)

数据来自 Our World in Data 整合的 Penn World Table 和 Huberman & Minns 的历史序列，只取 1870 年起有连续记录的 14 个高收入国家：人均年工时的中位数从 3138 小时降到 1561 小时，几乎腰斩。图上还画了 2080 小时（每周 40 小时 × 52 周）这条参考线作对照。

评论区最有价值的一条不是反对结论，而是提醒口径：这个统计包含兼职。一百多年前的典型家庭是一人全职上班、一人在家不计入劳动力，所以那时的平均值本质上是全职工的平均；今天则常是一人全职加一人兼职，同一个家庭的总工时未必少多少，但「人均」被摊薄了。顺着这条往下，有人指出更根本的遗漏——家务从来没被计入过。

> "Back in the good old days you had one person who works and one person at home who was unemployed and is not counted in this statistic."
>
> <cite>— u/Western-Internal-751，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1w8tutc/oc_annual_hours_worked_per_worker_in_the_14_rich/p858xv2/" target="_blank" rel="noopener">原帖评论</a></cite>

> "The stay at home wife was harder work than today and her labor isn’t counted."
>
> <cite>— u/lazyoldsailor，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1w8tutc/oc_annual_hours_worked_per_worker_in_the_14_rich/p85angx/" target="_blank" rel="noopener">原帖评论</a></cite>

作者本人在串里也补了不少限定条件：1950 年以前只有八个数据点（1870、1880、1890、1900、1913、1929、1938、1950），中间那段线是直接连的；统计只算主业，副业和志愿工作不计。有人因此调侃「那这图不就没意义了」，也有人反过来说，工时减半正是生产率提升的证据，是实打实的进步。另有几条评论盯着图本身，怀疑它是 AI 生成的图表，顺带吵了一轮「slop chart」。

这帖的用处在于提供了一个通用的读图习惯：先看分母。一个「人均」指标下降，可能是分子变小，也可能是分母的构成变了——多了大量兼职者、多了退休后打零工的人，都会把曲线拉下来，而这跟「大家更轻松了」是两回事。同样的陷阱在国内很多讨论里也常见，人均可支配收入、人均居住面积、人均工时，谁被算进了「人」这个分母，往往比数字本身更值得追问。
