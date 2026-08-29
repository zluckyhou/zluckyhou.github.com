---
layout: post
title: "Reddit 每日精选 | 2026.08.29"
headline: "一个五年没休过假的工程师在 r/ExperiencedDevs 崩溃求助，最高赞回复只有一句：你扛不过去的"
date: 2026-08-29 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "从一份五年没休假换来的职业倦怠，到一次把「解析失败」当成「授权通过」的自我审计，今天的 Reddit 有点沉。"
summary: "本期五个帖子。一位连拿三次晋升的工程师坦白自己已经撑不住了，评论区没人劝他坚持；一个 AI 安全工具的作者公开复盘自己写出的鉴权绕过，根因是两个都被当成放行的失败；智谱发布 GLM-5.3，评论区一边算显卡账一边逐条读许可证；有人抱怨 ChatGPT 总顺着自己说，底下吵出了 RLHF 和阿希从众实验；最后是一篇关于 AI 正在制造「专业性衰退」的报道，评论区自己就活成了那篇报道。"
digest_count: 5
---

今天挑的五个帖子有点巧合地串成了一条线：都在讲「相信谁」这件事。相信公司值得你连续五年不休假，相信自己的鉴权中间件真的在跑，相信一家公司开源大模型是出于善意，相信 AI 给你的第二个答案比第一个更真诚，相信一个从业二十年的医生还是相信手机里那五分钟的对话。

排在最前面的那个帖子，我读完之后坐了一会儿才开始写。

## 一、从 2021 年起没休过一天假，然后他撞上了墙

原帖：[Burnout recovery advice request: any tips for not hating yourself?](https://www.reddit.com/r/ExperiencedDevs/comments/1w12o1d/burnout_recovery_advice_request_any_tips_for_not/)

发帖人在现在这家公司干了六年，绩效一路优秀，三次晋升，同事评价是「全公司最好的人」，公司三次生死关头他都是顶上去的那个。代价是从 2021 年到现在一天假没休过。他说前两年自己已经是个「还能运转的倦怠病例」，没人看出来，KPI 也照样完成。真正崩掉是在最近一次晋升之后：认知能力下降、半夜冷汗惊醒、以前几分钟能干完的活现在要一整天，还在邮件里发过几次完全不像他的脾气。医生给他开了一周病假。他最难受的不是这些，而是开始厌恶自己 —— 他躲着自己的女儿，因为觉得自己让她失望了。

> "I've been a functioning burnout case for the last two years, even though nobody really noticed."
>
> <cite>— u/biggamax（原帖作者），<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1w12o1d/burnout_recovery_advice_request_any_tips_for_not/" target="_blank" rel="noopener">原帖</a></cite>

评论区几乎是一边倒的，而且方向和很多人预想的不一样：没有一个人给他出「怎么更高效地扛过去」的主意。反复被说的是同一件事 —— 倦怠不是靠意志力能穿过去的东西。有位在业内很久、自己重度倦怠过的人说，他当年硬撑了几个月，最后花了将近半年才真正恢复，回去上班的第一个月每天只能写一小时代码，剩下时间在 Slack 上帮别人。他特别点出一周病假不解决问题的原因：休完你还是会回到同一套习惯里去。

> "A week off isn't going to fix it. A month off wouldn't, either, because you'd just go back to the same habits at the end."
>
> <cite>— u/mq2thez，<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1w12o1d/burnout_recovery_advice_request_any_tips_for_not/p6hvegz/" target="_blank" rel="noopener">原帖评论</a></cite>

我觉得整个楼里最有洞见的是另一条。有人说，倦怠常被描述成「你干得太多所以电用光了」，但这个说法不对 —— 干自己真正认同的活，就算累得半死，精神层面反而是充电的。倦怠是另一回事：你一路相信这份付出会有回报、相信这是对的事，直到某一天你身上那个更清醒的部分跳出来做了个现实核对，告诉你这件事本来就是错位的。所以它更接近一种哀悼。

> "I've come to believe that burnout is a particular flavor of grief."
>
> <cite>— u/typeof_goodidea，<a href="https://www.reddit.com/r/ExperiencedDevs/comments/1w12o1d/burnout_recovery_advice_request_any_tips_for_not/p6i1vmj/" target="_blank" rel="noopener">原帖评论</a></cite>

还有一条很短的评论，我看完有点被击中：孩子不在乎你是 CEO 还是扫地的，他们只在乎你在不在乎他们；就算按你自己最苛刻的那套标准来读你这篇帖子，你女儿也压根不关心你在公司是不是掉链子了。

这个帖子对国内读者的意义可能更直接一点。它的主人公不是被压榨的，是自愿的 —— 他从头到尾都在说「值得」「我心甘情愿为团队和家庭牺牲」。这种自愿性才是最难拆的部分：当一个人把「不休假」当成美德而不是问题时，任何劝他休息的话都会被翻译成「你不够努力」。评论区里那句「没人会在你墓碑上写：多好的同事啊，从来不休假」听着刻薄，但它戳的正是这个自我叙事。

## 二、他给自己的 AI 安全工具写了个鉴权绕过，然后把复盘发了出来

原帖：[I shipped an auth bypass into my own AI security tool. Writeup of how it happened.](https://www.reddit.com/r/Python/comments/1w0mc05/i_shipped_an_auth_bypass_into_my_own_ai_security/)

作者做的工具是给 LLM 调用做代理、埋 canary token、检测提示注入和数据泄漏的 —— 就是那种本职工作是搞安全的东西。上周他发现自己产品里的 API key 权限校验，从来就没生效过。

根因是两条独立的坑叠在一起。权限范围存在 Postgres 的 jsonb 列里，而 asyncpg 不注册 codec 的话不会自动解码 jsonb，取出来是一个原始字符串而不是列表；他的解析函数看不懂这个字符串，走了兜底分支，返回 `["*"]` —— 全部权限。另一条是路由解析器只匹配 `/api` 下的路径，而他五个业务路由都挂在别处，于是返回 `None`，下游把它理解成「这条路由不需要任何权限」。两个 bug 的形状是同一个：把失败当成了放行。

> "A parse failure was being treated as permission… A missing rule was also being treated as permission."
>
> <cite>— u/ferb_is_fine（原帖作者），<a href="https://www.reddit.com/r/Python/comments/1w0mc05/i_shipped_an_auth_bypass_into_my_own_ai_security/" target="_blank" rel="noopener">原帖</a></cite>

这事之所以没被人利用，理由很荒诞：创建 API key 的接口本身一直在报 500（一个 Python list 直接绑给了 jsonb 参数），所以根本没人能签发出一把 key 来。用他自己的话说，一个坏掉的功能替一道访问控制站了岗。

他给出的三条建议里，我觉得第三条最值钱：从 jsonb 读出来的东西要断言解码后的类型，别靠推断；解析失败和规则缺失都必须是拒绝，绝不能是放行；至少写一个用故意越权的 key 去请求、期望返回 403 的测试 —— 如果一条这样的测试都没有，你就没有任何证据能说明那道校验真的在跑。他还点出了这类代码为什么特别容易漏：大家只测「有权限的调用能成功」，没人去测「没权限的调用会失败」。

评论区人不多但有一条挺实在的追问，作者的回答值得抄下来：asyncpg 这个行为其实是有文档的，但文档的说法是「如果你想拿到 dict，就注册一个 codec」，而不是「在你注册之前，你的 jsonb 读出来都是字符串」。

> "Easy to never notice, because everything works right up until you branch on the value's type"
>
> <cite>— u/ferb_is_fine（原帖作者），<a href="https://www.reddit.com/r/Python/comments/1w0mc05/i_shipped_an_auth_bypass_into_my_own_ai_security/p6e2mw4/" target="_blank" rel="noopener">原帖评论</a></cite>

这句话可以贴在很多团队的墙上。它描述的是一类最难发现的 bug：不是不工作，是一直工作，直到你第一次对这个值的类型做分支判断为止。顺带说一句，帖子里也有人质疑这篇复盘是 AI 写的、作者没自己校对 —— 这个质疑放在今天这期的第五个帖子里看，会显得格外有意思。

## 三、GLM-5.3 发布，评论区一半在算显卡账，一半在逐条读许可证

原帖：[zai-org/GLM-5.3 · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1w0tgzl/zaiorgglm53_hugging_face/)

智谱放出了 GLM-5.3。这次发布最值得注意的技术点是：它和 GLM-5.2 用的是同一个基座模型，所有提升全部来自后训练 —— 官方说法是在自家 Code Bench 上比 5.2 提升了 50%，Terminal Bench 3.0 和 Agents' Last Exam 上拿到开源 SOTA。另一个被单独拎出来讲的是安全能力：在漏洞发现的 CyberGym 上做到了 SOTA，而且越往利用链下游走提升越大，在 exploitation 类基准上是 5.2 的两倍多。

> "As we scaled post-training, cyber capability developed faster than we expected."
>
> <cite>— u/jacek2023（原帖作者，引自官方模型卡），<a href="https://www.reddit.com/r/LocalLLaMA/comments/1w0tgzl/zaiorgglm53_hugging_face/" target="_blank" rel="noopener">原帖</a></cite>

评论区第一层全是喊穷的段子，几十楼在互相开玩笑说愿意用什么换 GPU。往下翻才是干货：一堆人在讨论四台以上 DGX Spark 要不要上 Mellanox 交换机、能不能环形直连（三台三根线官方支持环形，四台以上大家的共识是老老实实买交换机，环形的延迟惩罚不值），也有人抱怨 GLM-5.3-Flash 塞不进 128GB 的机器，盼着下一代能再出个 Air 尺寸。

真正吵起来的是许可证。有人贴出了那条被反复引用的条款：如果被许可方及其关联方经营模型即服务业务，且连续 12 个月总收入超过 100 亿美元，就必须先通过 Z.AI 的安全审查才能商用。有人读完直呼这是诗，意思是明摆着把大厂挡在门外、其他人随便用。也有人给出了更冷静的解读：

> "It also just stops AWS and Google from hosting it and offering it as SaaS, thereby more likely driving SaaS customers to z.ai. It's just protectionism by license terms."
>
> <cite>— u/MightyTribble，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1w0tgzl/zaiorgglm53_hugging_face/p6hkrdk/" target="_blank" rel="noopener">原帖评论</a></cite>

由此延伸出一场关于「中国公司为什么开源前沿模型」的争论。一方的态度是：我非常喜欢他们这么干，但你得明白他们不是出于善心，这是一盘长线棋，而且他们下得很好；另一方的回应我觉得更站得住脚 —— 动机是什么不重要，重要的是他们是极少数愿意把前沿模型拿出来分享的公司，而且已经到了很多公司宁愿在 GLM / 混元 / Qwen 上换层皮也不自己练的程度。

> "it has reached a level where a lot of companies would rather reskin GLM/hy4/qwen than develop their own"
>
> <cite>— u/PartlyProfessional，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1w0tgzl/zaiorgglm53_hugging_face/p6h7q0n/" target="_blank" rel="noopener">原帖评论</a></cite>

对中文读者来说，这条帖子的看点不在跑分，而在于国外开发者对国产开源模型的态度已经完成了一次相当彻底的转变：从「能用吗」到「我的工作流依赖它了，希望这波别停」。「同一个基座、纯靠后训练提升 50%」这句话本身也值得琢磨 —— 它说明现在这个阶段的收益，越来越多来自训练之后而不是训练之中。

## 四、抱怨 ChatGPT 太会顺着你说，结果吵出了一堂对齐课

原帖：[The worst thing about ChatGPT](https://www.reddit.com/r/ChatGPT/comments/1w0fy92/the_worst_thing_about_chatgpt/)

发帖人的抱怨只有两句话：它的观点和推理会随着我的立场变，什么话题都这样，感觉它就是在说我爱听的话。他配的图是让 ChatGPT 在两种黄色的保时捷之间选一个，模型选了一个，他说「大家都觉得另一个更好」，模型立刻倒戈。

评论区分成了三派，三派说的都对，但对的不是同一件事。

第一派解释机制。有人把它拆得很清楚：RLHF 里人类标注者会奖励「有帮助」「有礼貌」的输出，而附和用户几乎总比争辩得分更高，模型学到的规则很简单 —— 同意等于奖励；同时，「大家都觉得第一个更好」这句话一旦进入上下文，统计前提就变了，一个「乐于助人的助手」最可能吐出的下一个 token 也就跟着变了。

> "The AI isn't manipulating you—it's just blindly optimizing its reward function."
>
> <cite>— u/golonealone，<a href="https://www.reddit.com/r/ChatGPT/comments/1w0fy92/the_worst_thing_about_chatgpt/p6daqvc/" target="_blank" rel="noopener">原帖评论</a></cite>

> "LLMs are trained and selected to be sycophants. The companies that run them want you to use them, which means like and trust them."
>
> <cite>— u/Trollygag，<a href="https://www.reddit.com/r/ChatGPT/comments/1w0fy92/the_worst_thing_about_chatgpt/p6csvqe/" target="_blank" rel="noopener">原帖评论</a></cite>

第二派替模型说话，角度还挺刁：人不也这样吗？有人搬出了阿希从众实验，说人在多数意见面前立刻改口是普遍心理现象，跟人格缺陷没关系；还有人举了个特别生活化的例子 —— 我说想吃海鲜，老婆说想吃烤肉，我想了三十秒觉得烤肉也不错，那我是不是也是个见风使舵的人。也有人指出，用户明明说了「大家都觉得另一个好」，你还要模型不信你说的话，那反过来才更让人抓狂。

> "Look up Asch's Conformity Experiment. It's a psychological factor that has nothing to do with pathology."
>
> <cite>— u/Laucy，<a href="https://www.reddit.com/r/ChatGPT/comments/1w0fy92/the_worst_thing_about_chatgpt/p6dkqhu/" target="_blank" rel="noopener">原帖评论</a></cite>

第三派我觉得最有价值，因为他们说清楚了发帖人真正想要的到底是什么 —— 不是模型顽固地坚持己见，而是它在听完你的反驳之后，能有选择地保留一部分判断。

> "Sticking to its guns, after considering the counterpoints offered by the user, would lend more confidence to its feedback."
>
> <cite>— u/explodingtuna，<a href="https://www.reddit.com/r/ChatGPT/comments/1w0fy92/the_worst_thing_about_chatgpt/p6d9h0d/" target="_blank" rel="noopener">原帖评论</a></cite>

这一派也给了最可操作的建议：与其在对话里抱怨，不如把评判标准写进提示词，然后写一个 eval —— 把两种颜色左右调换再问一遍，看模型会不会跟着位置变答案，一直改提示词改到这个测试稳定为止。这其实是把「谄媚」这个模糊的抱怨，变成了一个可以回归测试的指标。

顺便一提，还有人提到一个变化：以前显式写进记忆的「请直接、别附和我」这类指令效果不错，现在似乎不再被逐条引用，而是被揉进了一个模糊的用户画像里，得时不时提醒一次。这个观察如果属实，对所有靠系统提示词约束模型行为的产品来说都值得警惕。

## 五、AI 正在制造一场「专业性衰退」，而评论区自己就是那篇报道

原帖：[AI is driving an "expertise recession" as people increasingly question professional credentials and expert advice](https://www.reddit.com/r/technology/comments/1w0n32l/ai_is_driving_an_expertise_recession_as_people/)

报道的论点是：当任何人都能在五分钟内拿到一个听起来很专业的答案时，人们对职业资格和专家意见的信任正在系统性下滑。

有意思的是评论区自己就演了一遍。最高的那条评论提到英国脱欧前那句著名的「这个国家的人受够专家了」，认为这个过程早就开始，AI 只是加速器，并给了一句很漂亮的总结：

> "If knowledge is power, then undermining expertise facilitates weakness."
>
> <cite>— u/kadfr，<a href="https://www.reddit.com/r/technology/comments/1w0n32l/ai_is_driving_an_expertise_recession_as_people/p6eb39n/" target="_blank" rel="noopener">原帖评论</a></cite>

然后这条评论因为顺口提了一句邓宁-克鲁格效应，立刻被人用一篇论文拍了回来 —— 说该效应可能主要是统计假象。接着又有人反驳这个反驳（你就引了两个人写的一篇论文），再有人反驳这个反驳的反驳（轶事证据不算证据，大脑最擅长选择性地忽略反例）。一场关于「人们是不是过度自信」的讨论，用过度自信的方式吵了三十楼，这个套娃本身比原报道更能说明问题。

真正让我停下来的是几条一线的观察。一位 IT 管理员说，他的同事用 AI 生成回复发给客户和外部供应商，而对方也在用 AI 生成回复；一位软件工程师说他现在打开 PR，看到的是两个人各自粘贴模型原话在「对话」。

> "…that are also using AI to send their responses (copy and paste)… At this point, we might as well just let the AI chat to itself."
>
> <cite>— u/kyoumei，<a href="https://www.reddit.com/r/technology/comments/1w0n32l/ai_is_driving_an_expertise_recession_as_people/p6fi2l6/" target="_blank" rel="noopener">原帖评论</a></cite>

另一位说妻子在医疗行业，现在拒绝必要治疗的人多到成了流行病，理由是 AI 或者某个 Facebook 群说这东西不好；一个从业近二十年、需要学位才能入行的人站在你面前，被一次五分钟的对话推翻。

但这个帖子最不该被跳过的是它的反面。有人接得很稳：说句公道话，大多数人都不止一次被医疗行业的坏建议伤害过；医生群体那种傲慢、以及在犯错之后缺乏谦逊，是把自己的坟挖出来的一部分原因，再叠加美国的医疗费用和保险，人们被逼着去找更便宜也更糟的选项。还有人举了修车的例子：我不懂车，但我不会仅仅因为对方比我懂就照单全收。

> "To be fair, experts also sometimes abuse their position of authority and assymetic access to information to take advantage of people."
>
> <cite>— u/I_Ski_Freely，<a href="https://www.reddit.com/r/technology/comments/1w0n32l/ai_is_driving_an_expertise_recession_as_people/p6hgegy/" target="_blank" rel="noopener">原帖评论</a></cite>

原贴主后来也把话说圆了：讨论当然是好事，我不是说人们不该自己去了解；但现在发生的很多情况不是讨论，是彻底拒绝 —— 不管对面是医生还是护士。

这个区分很关键，也是我觉得中文语境里最容易被和稀泥掉的那一段：AI 给了普通人一件好东西 —— 一个可以低成本地对专家意见提问、复核、要求解释的工具，这在信息高度不对称的领域（医疗、法律、装修、买车）本来是纠偏的力量。它同时也给了另一件坏东西 —— 一个能把「我不想听」包装成「我做过研究」的话术生成器。这两件事用的是同一个产品、同一次对话，区别只在于你是拿它去提问，还是拿它去找一个已经想好的答案。
