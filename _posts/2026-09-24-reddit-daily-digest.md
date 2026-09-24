---
layout: post
title: "Reddit 每日精选 | 2026.09.24"
headline: "一次固件更新，让一批三星 AI 冰箱在中秋前集体变成了柜子"
date: 2026-09-24 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "当冰箱、招聘网站、开源仓库都被塞进更多聪明零件之后，出问题的从来不是聪明的那部分。"
summary: "本期五个帖子：三星 AI 冰箱被一次固件更新送走，评论区问出了那个最该问的工程问题；有人花两年在领英上猎到六万条假招聘，真正的行家在楼里把「诈骗岗」和「幽灵岗」分了个清楚；一个 AI 记忆项目的 PyPI 发布通道被人从构建后端劫持；赛马 70 年没有变快，原因比「基因到顶了」有意思得多；最后是五角大楼想要一个不会说不的 AI，楼里在追问责任到底落在谁头上。"
digest_count: 5
---

今天这几个帖子凑在一起，居然有条暗线：我们习惯性地往东西里塞更多「聪明」——冰箱塞屏幕，招聘塞算法，发布流程塞自动化，军队塞模型——而每一次出事，坏掉的都不是聪明的那部分，是被聪明部分连累的那个最朴素的底座。冰箱不制冷了，求职者收不到回音了，一条 `pip install` 装进来一个后门，还有一个没人能被追责的扳机。

## 一、冰箱变砖：评论区问出了那个最该问的工程问题

[原帖：The refrigerator is dead: Samsung's AI fridges shut down after update, causes outrage](https://www.reddit.com/r/technology/comments/1wo5ky9/the_refrigerator_is_dead_samsungs_ai_fridges_shut/)

一批三星带屏幕的「AI 冰箱」在一次固件更新之后集体罢工，时间还卡在韩国中秋（秋夕）前夕——正是家家户户冰箱塞得最满的时候。一屋子食材报废，机器在厨房里站成一个昂贵的柜子。

楼里前面几百条基本是段子大会（「你问冰箱还有没有牛奶，冰箱想了想，回答抱歉我无法回答这个问题」）。但往下翻，真正有价值的一条是个直白到近乎愤怒的工程问题：为什么制冷这件事会和那块屏幕跑在同一个系统上？顺着这个问题，有人给出了本帖最好的一句概括——可降级设计是工程常识，智能部分死掉的时候，冰箱应该优雅地退化成一台普通冰箱，就像电动牙刷的电机坏了，它至少还是一把牙刷。

> "Assuming the smart thingies will fail or be bricked seems like engineering 101, so everything should gracefully degrade as a dumb fridge. Like an electric toothbrush, when the electric part fails it just becomes a regular toothbrush"
>
> <cite>— u/Thiht，<a href="https://www.reddit.com/r/technology/comments/1wo5ky9/the_refrigerator_is_dead_samsungs_ai_fridges_shut/pbkaj35/" target="_blank" rel="noopener">原帖评论</a></cite>

另一条支线也挺值得记下来。有人说「不买智能的不就行了」，马上有人泼冷水：现在买洗衣机，最便宜的那一档反而标配 Wi-Fi，不带联网的型号要么更贵要么长期缺货。还有人说得更狠——所谓「你还可以买普通冰箱」只是暂时的，厂商会慢慢把不联网的型号压缩成又少又差的低端款，让你实际上没得选。楼里还翻出一堆老古董炫耀：九十年代的冰箱在九十多华氏度的车库里锈成一片，照样比近五年买的两台不锈钢新冰箱可靠。

> "But if fridges are treated like many other consumer electronics, the selection of dumb fridges you'll be able to buy will be reduced to a tiny amount of low quality options many families will find inadequate."
>
> <cite>— u/Arliss_Loveless，<a href="https://www.reddit.com/r/technology/comments/1wo5ky9/the_refrigerator_is_dead_samsungs_ai_fridges_shut/pbkixh2/" target="_blank" rel="noopener">原帖评论</a></cite>

**我的看法**：这事对国内读者其实更有代入感——我们的家电智能化程度只高不低，全屋智能、语音控制、App 绑定早就是标配卖点。真正值得警惕的不是「智能没用」，而是厂商把一个需要 24 小时不间断、十年不出错的机械系统，和一个按互联网节奏迭代、指望靠 OTA 补漏的软件系统焊在了一起。互联网软件坏了重启就好，冰箱坏了满柜子食材跟着陪葬。下次买家电，除了看参数，不妨多问一句：断网之后、厂商停止服务之后、App 下架之后，这台机器还能不能用最笨的方式把本职工作干完。

## 二、他在领英上猎了两年假招聘，抓出六万条

[原帖：This guy has spent two years hunting fake job listings on LinkedIn, and found 60,000 of them](https://www.reddit.com/r/technology/comments/1woemry/this_guy_has_spent_two_years_hunting_fake_job/)

一位研究者花了两年时间在领英上系统性地追踪虚假招聘，累计标记出六万条。手法包括：批量伪造招聘者账号、盗用休眠的已验证账号挂到正规公司名下、以及直接在真公司主页发岗位但把申请链接导向站外网站或邮箱。

评论区第一反应几乎清一色是「才六万？」。但很快，楼里最有价值的一条出来纠偏了：大家七嘴八舌骂的其实是两件不同的事——文章说的是**诈骗岗**（目的是骗简历、骗个人信息甚至骗钱），而不是大家更熟悉的**幽灵岗**（公司没打算招，挂着撑门面或走流程）。这条提醒把整个讨论的焦点拉回来了。

> "This article is referring to FRAUDULENT job postings. It is NOT referring to “bogus” job postings for supposed “ghost” jobs like so many in the comments are stating."
>
> <cite>— u/Teddybear_，<a href="https://www.reddit.com/r/technology/comments/1woemry/this_guy_has_spent_two_years_hunting_fake_job/pbnckjz/" target="_blank" rel="noopener">原帖评论</a></cite>

有意思的是，两类人的亲历经验拼出了一张挺实用的求职地图。一位求职者说自己从去年秋天开始养成了习惯：看到岗位先去公司官网核对，结果发现不少公司首页挂着醒目声明「我们没有在招聘，请勿上当」，其中甚至包括被领英推为「当日精选岗位」的条目；而且只要投过一次，骚扰电话和诈骗邮件立刻暴涨——简历里的姓名、联系方式、住址显然被卖了个好价钱。还有人补充了企业侧的版本：内部早就内定了人，但 HR 规定必须面够三个人，于是你精心准备的那场面试从一开始就只是充数。

而全楼被顶得最高的经验之谈，是一条看似矛盾的总结：在领英上主动投递从来没换来过一次面试，但过去十年每一份工作又都来自领英——区别在于，是猎头看了你的主页来找你。

> "I've never ever gotten an interview after applying for any job on LinkedIn. However, every job/contract I've gotten since 2015 was because of LinkedIn."
>
> <cite>— u/CM_MOJO，<a href="https://www.reddit.com/r/technology/comments/1woemry/this_guy_has_spent_two_years_hunting_fake_job/pbnl4nt/" target="_blank" rel="noopener">原帖评论</a></cite>

**我的看法**：这条经验放到国内几乎可以直接套用——把平台当投递漏斗，收益递减；把平台当个人主页/作品集，让对的人能搜到你，收益完全不同。前者你在和几百份简历和一个筛选模型竞争，后者是别人带着明确意图来找你。另外那个「投完就被骚扰」的细节值得所有人记一下：简历上到底要不要写详细住址、身份证号、完整生日，答案基本是不用。国内招聘平台的信息泄露新闻不算少，少填一栏，就少一条被转卖的数据。

## 三、一次供应链劫持：攻击者没偷密码，他换掉了构建后端

[原帖：Someone hijacked MemoryOS PyPI releases by replacing the build backend](https://www.reddit.com/r/Python/comments/1wo314v/someone_hijacked_memoryos_pypi_releases_by/)

一个 AI 记忆框架项目 MemoryOS / MemOS 的 PyPI 和 npm 发布通道被人劫持了。攻击路径很有教学价值：攻击者没有去暴力破解账号，而是往仓库里推了提交，把 `pyproject.toml` 里的构建后端替换成自定义的那一个——于是在真正的上传动作发生之前，构建过程先把 PyPI token 交到了攻击者手上。拿到令牌之后，他自己把带后门的包推了上去。

> "The attacker swapped in a custom pyproject.toml build backend that grabbed the PyPI token before the real upload ran. Then used that token to push the backdoored package themselves."
>
> <cite>— u/BattleRemote3157（原帖作者），<a href="https://www.reddit.com/r/Python/comments/1wo314v/someone_hijacked_memoryos_pypi_releases_by/" target="_blank" rel="noopener">原帖</a></cite>

评论区技术含量不低。有人把关键点拎了出来：令牌是从项目自己的 GitHub Actions 发布流水线里流出来的，而且攻击者居然能触发发布流水线本身——这比通常被反复警告的「main 分支合并流水线」更罕见，说明权限配置和审批闸门大概率设在了错误的位置（闸门卡在最后一步，凭据却在第一步就明文发下去了）。他那句自嘲挺真实的：官方文档反复警告过这个风险，但在 CI/CD 一轮轮迭代的过程中，要一直做对确实不容易。

> "They warn you about this a lot, but I suppose it's hard to get it perfect as you iterate on your CI/CD."
>
> <cite>— u/me_myself_ai，<a href="https://www.reddit.com/r/Python/comments/1wo314v/someone_hijacked_memoryos_pypi_releases_by/pbjue7i/" target="_blank" rel="noopener">原帖评论</a></cite>

另外楼里还有人追问了一个更尴尬的问题：攻击者最初是怎么拿到推送权限的？翻完通告发现答案是——不知道，最可能是该账号的令牌被盗，但无法确认。也有老派开发者借机重提 GPG 签名：重要脚本和数据文件签好名，把校验写进自动化流程里，至少让篡改留下痕迹。

**我的看法**：这次攻击最值得国内开发者学的一点是，它绕过了所有人下意识去防的那一层。大家习惯保护的是「账号密码」和「上传那一刻」，但现代发布链路里，构建步骤本身就是一段会读到密钥的可执行代码——`pyproject.toml` 的一行改动，等于在你的保险库里换了一把锁匠。实操建议其实很明确：发布凭据改用短时效的 OIDC/Trusted Publishing 而不是长期令牌；发布流水线设成只有打 tag 且经人工审批才能跑；构建相关文件（`pyproject.toml`、`setup.py`、CI 配置）纳入 CODEOWNERS 强制审查。这些都不新鲜，但这次事故说明，「知道」和「配置对了」之间的距离比想象中远。

## 四、赛马 70 年没有变快了，而答案比「基因到顶」有意思

[原帖：Racehorses have not gotten faster in 70 years [OC]](https://www.reddit.com/r/dataisbeautiful/comments/1wo0zez/racehorses_have_not_gotten_faster_in_70_years_oc/)

发帖人把肯塔基德比、英国叶森德比、墨尔本杯三大赛事的历年冠军成绩画成了折线图：人类的跑步纪录还在缓慢下移，赛马的成绩曲线在上世纪五十年代之后基本躺平。同一时期，育种技术、兽医水平、训练科学全都在进步。

评论区先上演了一次现场纠错：有人指着图问叶森德比 1940 年代初为什么突然变快，是战时把秒表调慢了吗？很快有人查明——战争期间军方征用了叶森马场，比赛改到纽马基特举行，而那条赛道天生更快。发帖人当场认领并重画了图。这种「数据异常 → 归因 → 修正」的小循环，是 r/dataisbeautiful 最好的部分。

> "The military commandeered the Epsom racecourse during the war, so they relocated to the Newmarket racecourse, which was naturally faster."
>
> <cite>— u/tom_the_red，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wo0zez/racehorses_have_not_gotten_faster_in_70_years_oc/pbjefcw/" target="_blank" rel="noopener">原帖评论</a></cite>

接下来才是真正的解释层，楼里拼出了三条互相叠加的原因。第一，**赛制不是计时赛**：赛马是战术性的群跑，骑师的目标是「刚好赢」，不是「跑到极限」，还要保护这匹价值不菲的资产；再加上让磅制度——跑得快的马要背更多配重，好让整场比赛尽量胶着、好看、好下注，本质上是在系统性地抹平速度优势。第二，**基因池被制度锁死**：这些赛事只对纯血马开放，而所有现代纯血马都能追溯到 17、18 世纪引入英国的三匹种公马。更快的马不是育不出来，是育出来了也没资格上场。第三，也是最沉重的一条：过去七十年真正变化的不是速度，是伤病——一味朝速度方向选育，选出了更容易在比赛中崩溃、甚至当场骨折的马。

> "Faster horses could be bred, but they could not run in these races. They want the races to be competitive and to have unpredictable results."
>
> <cite>— u/SchreiberBike，<a href="https://www.reddit.com/r/dataisbeautiful/comments/1wo0zez/racehorses_have_not_gotten_faster_in_70_years_oc/pbnspw9/" target="_blank" rel="noopener">原帖评论</a></cite>

**我的看法**：这个帖子可以当成一堂指标课来读。一条七十年没动的曲线，第一反应往往是「这项能力到顶了」，但真相是：这个系统压根就没在优化这个指标。它优化的是比赛的观赏性和博彩的不确定性，让磅和血统限制都是为此服务的调节阀。搬到我们熟悉的场景里——当某个业务指标长期纹丝不动，与其追问「是不是没有提升空间了」，不如先去查：这套机制里是不是有什么东西，正在主动把它按在那儿。很多时候天花板不是物理的，是规则写出来的。

## 五、士兵可以拒绝战争罪，AI 可以吗

[原帖：Soldiers can refuse to commit war crimes. Can AI? | The Pentagon wants AI models that can't say no](https://www.reddit.com/r/technology/comments/1woe97n/soldiers_can_refuse_to_commit_war_crimes_can_ai/)

一篇报道讨论军方希望采购「不会拒绝指令」的 AI 模型，由此引出一个绕不开的问题：人类士兵在法律上不仅**可以**拒绝执行非法命令，而且**必须**拒绝；那么当决策链上换成一个模型，这层最后的人性刹车去哪了。

评论区没有陷入科幻想象，而是很快收敛到了「责任归属」这个法律问题上，并且分成了两派。一派认为这个前提本身就是伪命题：模型没有能动性，它只是按权重行事，把一个温和的模型调成一个疯子，改改权重和护栏就够了——所以该被追责的永远是拆护栏的人。另一派则指出了真正危险的灰色地带：如果我下令「屠村」，我当然该负责；但如果我下令「控制该区域」，而模型自行判断「控制」包含了屠村呢？

> "But if I order the AI to secure an area, and it decides that "secure" includes exterminating a village, I'm not sure I should be held responsible for that. IMO, the easy solution is for AI to never, ever, pull a trigger."
>
> <cite>— u/TotalNonsense0，<a href="https://www.reddit.com/r/technology/comments/1woe97n/soldiers_can_refuse_to_commit_war_crimes_can_ai/pbmf385/" target="_blank" rel="noopener">原帖评论</a></cite>

楼里对这个灰色地带的总结相当到位：每多一层自动化，犯罪行为和那个做决定的人之间就多隔开一段距离，而距离越远，最后谁都追不上。还有人从另一个角度补刀：军队对士兵的公开标准和实际期待之间本来就有落差，人当了几天兵自然学会分辨这两套，但模型训练完就定型了，它只会照着写下来的那一套执行——这既可能让它比人更守规矩，也可能让它成为一个完美的背锅侠。

> "…the more they separate the criminal act from a person making a decision, the more difficult it is to hold ANYONE responsible, which is a very dangerous situation."
>
> <cite>— u/OkStop8313，<a href="https://www.reddit.com/r/technology/comments/1woe97n/soldiers_can_refuse_to_commit_war_crimes_can_ai/pbmoqfp/" target="_blank" rel="noopener">原帖评论</a></cite>

**我的看法**：把「战争」两个字拿掉，这个讨论对每个正在推进 AI 落地的团队都成立。我们现在特别热衷于让 agent 自主执行多步任务，但「执行」和「决定」之间那条线，几乎没人认真画过。模型把一个模糊目标自行展开成一串具体动作的那一刻，责任链就出现了缺口——线上删了不该删的数据、给用户发了不该发的通知、按错误理解批了一笔款，事后复盘往往只能得出「提示词没写清楚」这种没人真正负责的结论。楼里那句「最简单的解法是 AI 永远不扣扳机」听着像回避问题，其实是一条相当务实的工程原则：**把不可逆的动作留给人**。哪个动作算不可逆，值得每个团队在上线前老老实实列一张表。
