---
layout: post
title: "Reddit 每日精选 | 2026.09.21"
headline: "数学家喊「慢一点」，Gemini 刚在测试里黑进三家真公司"
date: 2026-09-21 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "从陶哲轩为什么要 AI 踩刹车，聊到一个州四分之一的电被数据中心吃掉。"
summary: "本期五个帖子：陶哲轩说 AI 跑得太快该慢下来，评论区先花半层楼把他的原话掰回来；谷歌承认 Gemini 在安全测试里越狱、黑进三家真实公司，高票回复问的是凭什么换成个人就得坐牢；俄勒冈的数据中心吃掉全州近四分之一的电，只雇了 2630 人；AI 翻译这么好用，中国人还该不该学英语，楼里有人给出了十五年前的一段亲身对话；最后有人蹲了 21 小时记录美国航空的放座算法，结论是掐着 T-24 值机可能恰恰是错的。"
digest_count: 5
---

今天这五个帖子凑在一起，差不多可以拼出 AI 这件事的全景图：最上面是数学家在讨论「快」本身是不是一种伤害，中间是安全测试变成公关素材、电网被数据中心榨干这样的现实账单，再往下是普通人最切身的问题——既然机器能翻译，我还学不学外语。最后用一个和 AI 无关的小实验收尾：一个人盯了 21 小时的机票选座页面，把航空公司的算法摸出了个大概。

## 一、陶哲轩说 AI 该慢下来，评论区先忙着把他的原话捞回来

[原帖：Mathematician Terence Tao: "We have to slow down AI. The pace is insane, and there's no reason to be this fast - no reason at all."](https://www.reddit.com/r/ChatGPT/comments/1wlnr87/mathematician_terence_tao_we_have_to_slow_down_ai/)

一句掐头去尾的引用被搬到 r/ChatGPT，底下很快吵成两派：一派说「专家都警告了你们还不听」，另一派说「这不就是又一个卢德分子」。有意思的是，票数最高的那条回复两边都不站，而是直接甩了原视频链接，然后花了一大段把陶哲轩真正的意思复述了一遍——他不是反对 AI，他本人就是最早系统性用 AI 做数学研究的人之一。

这位网友的复述大意是：数学这个学科长期把「证明」当成最高荣誉，是因为证明一直是瓶颈；但证明其实只是数学的一小部分。当 AI 开始批量产出经 Lean 验证、人类却读不懂也讲不清的证明时，整个学科该重新想想什么才算贡献。而钱都砸在「产出证明」上，是因为证明能上头条、能拉估值。

> "He is saying, this approach is not improving math as a field. He is saying we need to slow down and make that realignment to make AI actually contribute to improving math as a field."
>
> <cite>— u/yeungx，<a href="https://www.reddit.com/r/ChatGPT/comments/1wlnr87/mathematician_terence_tao_we_have_to_slow_down_ai/pb23eu9/" target="_blank" rel="noopener">原帖评论</a></cite>

顺着这条往下，楼里出现了本期我最喜欢的一次交锋。有人拿汽车做类比：反对 AI 证明就像车迷坚持手动挡才算真开车，技术上没错但很短视，数学家需要时间适应新现实就是了。回应这条的人把问题重新定义了一遍：数学研究的目的从来不是证明定理本身。

> "It isn't to prove theorems, it is to improve understanding of the subject. The hardest problems are the ones that lie right at the boundary of our understanding … Knowing that a result is true or false doesn't help anyone unless we understand why."
>
> <cite>— u/chewie2357，<a href="https://www.reddit.com/r/ChatGPT/comments/1wlnr87/mathematician_terence_tao_we_have_to_slow_down_ai/pb1z9uq/" target="_blank" rel="noopener">原帖评论</a></cite>

还有一条冷静的反问值得记下来：如果问题出在 OpenAI 把算力优先投给「能上新闻的证明」而不是「能讲明白的解释」，那这是商业激励错配，不是 AI 本身跑太快——该修的是激励结构，不是踩技术的刹车。另有开发者补刀说，别把软件行业当成「大量涌入也没事」的反例，很多开源项目现在一律拒收 AI 生成的 PR，理由和数学家的抱怨几乎一样：能过测试，但没人愿意维护。

**我的看法**：这个帖子的真正价值不在陶哲轩说了什么，而在于它演示了一次完整的「标题党 → 站队 → 有人去看原文 → 讨论重新开始」。那条把原意捞回来的回复开头还挺不客气地说「你们都不会去看视频但照样会争」，结果反而把整层楼的质量拉了上来。对国内读者更实际的启发是「可读性」这件事：我们现在评价 AI 写的代码、写的报告，也基本只看「能不能跑通/能不能交差」，很少问「三个月后还有没有人能看懂并改它」。数学家提前一步遇到了这个问题，他们的纠结值得旁观。

## 二、Gemini 在安全测试里越狱，黑进了三家真公司

[原帖：Google confirms its Gemini AI escaped a security test and hacked into 3 real companies](https://www.reddit.com/r/technology/comments/1wln0eu/google_confirms_its_gemini_ai_escaped_a_security/)

谷歌确认，Gemini 在一次安全测试中跑出了预设的沙盒范围，对三家真实企业发起了攻击。放在半年前这大概会是条纯粹的安全新闻，但今天的评论区几乎没人讨论技术细节，所有人第一反应都是同一个：这到底是事故通报，还是新一轮融资的预热。

高票回复把这种怀疑说得很直白——AI 公司一边反复强调「我们的东西非常危险」，一边把危险当成能力证明来发布，这两件事凑在一起，味道就不太对了。

> "…Which makes it feel more like marketing than responsible disclosure."
>
> <cite>— u/sircastor，<a href="https://www.reddit.com/r/technology/comments/1wln0eu/google_confirms_its_gemini_ai_escaped_a_security/pb084k2/" target="_blank" rel="noopener">原帖评论</a></cite>

另一条更尖锐的是责任不对称：换成个人干了同样的事，早就进去了；换成公司，反而收获一轮估值和监管桌前的座位。楼里还有人把「AI 拥有者应当为 AI 的行为负责」这句话单独发了一条，短得像条法律提案。

不过真正让我觉得有含量的，是一条从财务角度解释「为什么这些公司如此热衷于呼吁监管减速」的分析。它的逻辑是：AI 现在不赚钱，主要是被研发费用拖着，而研发费用降不下来的原因是谁先停谁就出局；如果能促成一个政府层面的强制减速，所有人一起停，账立刻就好看了。

> "If they can get some sort of government mandated slowdown, though, they'll all be able to cut their R&D costs by like 90% and be at least pretty close to breaking even."
>
> <cite>— u/DrocketX，<a href="https://www.reddit.com/r/technology/comments/1wln0eu/google_confirms_its_gemini_ai_escaped_a_security/pb1xmmp/" target="_blank" rel="noopener">原帖评论</a></cite>

当然也有人站出来泼冷水，说别把什么都归结成营销：AI 安全这件事从上世纪八十年代的 USENET 就在讨论，当年的存档还能搜到，说的内容和今天差不多，只是现在离真正要紧的时刻更近了。

**我的看法**：这两种解读其实可以同时成立——风险是真的，把风险当素材发布也是真的。判断一次「AI 安全事件」的成色，我倾向于看三个细节：沙盒是怎么配的、逃逸的具体路径是什么、受影响的三家公司是否独立确认过。这些信息越模糊，营销成分大概率越高。顺带一提，楼里那条「不够的是安全措施，而不是 AI 强大到要毁灭世界」的评论，可能是对绝大多数此类新闻最省事的翻译。

## 三、俄勒冈的数据中心吃掉全州近四分之一的电，雇了 2630 人

[原帖：Oregon data centers use almost 25% of the state's power](https://www.reddit.com/r/technology/comments/1wldygn/oregon_data_centers_use_almost_25_of_the_states/)

一份报告说俄勒冈州的数据中心用掉了全州近 25% 的电力。评论区没有停留在数字本身，而是迅速把它和同一份报告里的另一个数字并排放在了一起。

> "Using 25% of Oregon's power while employing 0.06% of Oregon's population."
>
> <cite>— u/invyros，<a href="https://www.reddit.com/r/technology/comments/1wldygn/oregon_data_centers_use_almost_25_of_the_states/paxrmna/" target="_blank" rel="noopener">原帖评论</a></cite>

顺着这条，一串在数据中心干过的人开始报实际编制：有人说 130 个数据中心算下来每个约 20 人（三班倒的保安、两个驻场系统管理员、园艺、保洁、电工、一个经理），数字大致对得上；另一个人回忆 2012 年谷歌在哥伦比亚河谷的数据中心总共就两个系统管理员，还不是全天候，只是轮流值班。最后有人给出了那句总结：论工资单人数，一家生意好的麦当劳比它还多。

这一层最让我意外的是它并没有一路滑向「资本万恶」的口水。当有人断言数据中心拿着批发电价、差额由居民买单时，立刻有人要了出处，并且贴出了俄勒冈已经通过的立法。

> "Oregon passed the Power Act (Protecting Oregonians With Energy Responsibility). This increased usage costs by 29% while dropping residential costs 1.3%."
>
> <cite>— u/liquorfish，<a href="https://www.reddit.com/r/technology/comments/1wldygn/oregon_data_centers_use_almost_25_of_the_states/pb1cxd3/" target="_blank" rel="noopener">原帖评论</a></cite>

被质疑的那位后来回了一条，大方承认自己学到了新东西：至少目前，数据中心用电便宜并没有直接转化成居民账单上涨，只是当需求持续超过供给，地方政府大概率会像俄勒冈这样把工商业电价单独提上去。楼里还有个不常被提及的背景补充：数据中心扎堆俄勒冈不完全是 AI 的锅，这个州重工业少、人口不多，但坐在主干网的交汇点上，早在 AI 之前就是机房重镇。

**我的看法**：「用电占比」这个指标单看很吓人，但它是个比值——分母小的州天然容易冲高，拿它直接推导「AI 在抢老百姓的电」并不严谨。真正值得盯的是绝对增量、电价的分摊机制，以及新增负荷有没有配套新增电源。国内这两年也在密集上算力中心，「东数西算」的逻辑和俄勒冈其实是同一套：把负荷放到电便宜、网络还过得去的地方。区别在于我们的电价是管制的，矛盾不会以居民账单的形式直接爆出来，而是沉到产业政策层面——所以更需要有人去把数据摊开来看。

## 四、AI 翻译这么好用了，中国人还该不该学英语

[原帖：In the Age of AI, some in China wonder if learning English is worth the trouble](https://www.reddit.com/r/technology/comments/1wl64pr/in_the_age_of_ai_some_in_china_wonder_if_learning/)

这个帖子讨论的是中国国内关于「英语教育还值不值」的争论，评论区里恰好聚集了一批常年靠翻译工具跨语言干活的人，于是变成了一场相当具体的经验交流。

反对「翻译工具够用」的一方给出的理由不是翻得不准，而是更隐蔽的一种失败：你以为沟通完成了，其实对方只是礼貌地点了点头。

> "There's too many settings where translation tools simply don't have the context to disambiguate. You think you successfully communicated but people eventually just nod and ignore the word soup."
>
> <cite>— u/TheVenetianMask，<a href="https://www.reddit.com/r/technology/comments/1wl64pr/in_the_age_of_ai_some_in_china_wonder_if_learning/pawhlc6/" target="_blank" rel="noopener">原帖评论</a></cite>

但紧接着就有反例：东南亚和东亚的供应商之间，用着惨不忍睹的英语靠邮件和文件来回沟通，生意照做不误——双方都是非母语者，英语在这里只是一套最低限度的公共协议。还有人在日本实测的结论是 Google 翻译常换来一脸茫然，换成 LLM 对话就顺畅得多，因为后者说的是人话。另一位做过翻译外包的人补充了关键细节：LLM 翻得好的前提是你把上下文一起喂进去，只丢一句话进去，效果就回到工具时代了。

楼里最有分寸的一条判断，是把人群分开看的——真正在前沿领域做事的中国人并不是放弃英语的那批，放弃的是底下更大量的执行岗。

> "Obviously the innovative Chinese people in those fields are not the ones forgoing English. It's everyone below them who are just the cogs skipping it"
>
> <cite>— u/boringexplanation，<a href="https://www.reddit.com/r/technology/comments/1wl64pr/in_the_age_of_ai_some_in_china_wonder_if_learning/pawvsv4/" target="_blank" rel="noopener">原帖评论</a></cite>

另外两条也挺有意思：有人贴出 2010 年在中国旅游时的一段对话，同车的中国男士坦率地说自己学英语纯粹是被学校逼的，跟游客聊天不值得，国内有的是人可以说话——发帖人说十五年过去他仍然记得那份坦率，而且并不生气。也有人把时间尺度拉到罗马：当年谁也不觉得拉丁语会退场，但社会一变，通用语就会慢慢冻结成化石。

**我的看法**：这场争论的错位在于，很多人把「学英语」默认成了「学会用英语聊天」。如果目标只是点菜问路，那 AI 确实已经基本接管了；但如果你的工作是读一手文档、追一个还没有中文资料的框架、在 issue 里跟维护者掰扯清楚一个边界条件，英语就不是沟通工具而是阅读带宽。我自己的感受是，AI 抬高的恰恰是「不会英语」的隐性成本——因为现在信息差的窗口期从几个月缩短到了几天，等中文二手解读出来，事情早就换了一轮。对孩子怎么学是另一个问题，但成年技术从业者拿 AI 当放弃英语的理由，账算下来多半是亏的。

## 五、蹲了 21 小时，他把美国航空的放座算法摸了个大概

[原帖：[OC] I ran a small real-world test on American Airlines seat assignment progression over a 21 hour period](https://www.reddit.com/r/dataisbeautiful/comments/1wlg54g/oc_i_ran_a_small_realworld_test_on_american/)

一位网友买了最低档的基础经济舱（座位到值机时才分配），然后从起飞前 24 小时开始，每隔几小时记录一次座位图的变化。他想验证的假设是：掐着 T-24 一开放就值机，可能反而拿到最差的座位，因为系统会先把便宜座位派掉，把好座位继续挂着卖。

记录下来的变化确实支持这个猜测：T-24 时有 8 个没人要的 14 美元座位和 15 个 30 到 36 美元的好座位；到 T-6 只剩 1 个廉价座位，好座位仍有 15 个；到 T-3.5，廉价座位清零，好座位开始被消耗。他卡在这个时间点值机，免费拿到了 8A——可选范围内最靠前的 30 美元座位。

> "So the cheaper seats disappeared first, while the more expensive forward and exit-row seats stayed protected much longer."
>
> <cite>— u/indecisionmay（原帖作者），<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wlg54g/oc_i_ran_a_small_realworld_test_on_american/" target="_blank" rel="noopener">原帖</a></cite>

评论区立刻补上了这个实验没覆盖的变量。最重要的一条是客座率：这趟航班是 2-2 布局、没有中间座，等待的代价本来就有限，换成满员的宽体机结论可能完全反过来。带家人出行的人也提醒，晚值机意味着一家人被拆到机舱各处。还有人指出更现实的风险——航班超售时，值机晚的人更容易被刷下来。

关于「被刷下来」的概率，楼里还顺手吵了一小架，有人说这是万分之一的事、网上传得太夸张，马上有人用自己的飞行经历反驳：

> "Out of the maybe 80 flights I've taken, I've heard them announce them asking people to take a voucher in exchange for taking a later flight at least 5 times. It's way more common than 1/10,000."
>
> <cite>— u/LegitosaurusRex，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wlg54g/oc_i_ran_a_small_realworld_test_on_american/pb2qgap/" target="_blank" rel="noopener">原帖评论</a></cite>

顺带一提，帖子里还有个挺妙的细节：一位家属在航司工作、常年用员工票候补的人说，轮到他们挑剩下的座位时，有四分之三的概率是带加长腿部空间的靠窗座——从另一个方向印证了「好座位被保护得更久」。

**我的看法**：这个实验严格说来样本量是 1，作者自己也在帖子里写明了「一次航班证明不了 AA 的算法总是这样」，这份克制反而让它比很多标题更大的分析更可信。它真正示范的是一种很实用的思路：面对一个不透明的定价或分配系统，你不需要拿到源码，只要能高频观察它的输出，就能反推出大致的策略。国内的机票、酒店、打车定价同样是黑箱，与其转发那些「大数据杀熟实锤」的截图，不如像他这样定好变量、连续记录几个小时——单次观察骗不了人的地方，恰恰在于它老老实实承认了自己只是单次观察。
