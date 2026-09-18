---
layout: post
title: "Reddit 每日精选 | 2026.09.18"
headline: "今天五个帖子凑成同一句话：卡住我们的那道坎，基本都不在技术那一侧"
date: 2026-09-18 09:40:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "C 语言的空结尾字符串被称作软件史上最贵的 bug、AI 把写的成本降到零之后账单转嫁给了读的人、登月缺的从来不是技术、任天堂不裁员是因为法律不让"
summary: "本期五帖：r/askscience 上一场关于计算机地基里有哪些改不动的设计的讨论，有人把 C 的空结尾字符串称为软件史上最贵的 bug；Shopify CEO 造了个词叫垃圾手榴弹，评论区全是被 AI 长文轰炸的同事；一位入职两周的工程师发愁活干太快怎么装忙，结果他把帖子原样粘给了 AI；重返月球缺的不是技术是每年一百亿美元的政治承诺；最后是任天堂高管六个人加起来年薪不到一千万美元的背后，一条被中文读者忽略的日本劳动法条件。"
digest_count: 5
---

今天的五个帖子分别落在编译原理、职场、航天和公司治理，按说八竿子打不着，但翻完评论区之后我发现它们在讲同一件事：**真正卡住一件事的，几乎从来不是「技术上做不做得到」。**

空结尾字符串该怎么改，业内早有共识；重返月球的火箭技术比 1969 年强出几个数量级；让 AI 写一封结构完整的邮件是两秒钟的事；把高管年薪从三千万砍到一百万也不需要任何新发明。这些事在技术层面全都是已解决问题。可它们照样卡着。今天评论区里最有价值的那些回复，做的都是同一件事：把「技术之外的那道坎」具体是什么，一条一条摆出来。

## 一、计算机的地基里，有哪些「早该改、现在改不动」的东西

[计算机编程的底层，有没有什么事后看本该优化、但现在陷得太深已经改不了的设计？](https://www.reddit.com/r/askscience/comments/1wj5ggy/is_there_anything_at_the_heart_of_computer_coding/)

r/askscience 上一个开放式提问，结果炸出了一整条技术史。大端小端没能统一、x86 里塞满几十年没人用的向后兼容指令、C 的 ABI 规定函数只能返回一个值——这些答案都很扎实，但评论区真正的主角只有一个：C 语言的空结尾字符串（null-terminated string）。

一位自称做了三十年安全方向开发的用户，用一句话给它定了性：

> "The null-terminated string in C is the single most expensive bug in the history of software. Speaking as a security-specialized developer for more than 30 years."
>
> <cite>— u/the_quark，<a href="https://www.reddit.com/r/askscience/comments/1wj5ggy/is_there_anything_at_the_heart_of_computer_coding/pah8x4b/" target="_blank" rel="noopener">原帖评论</a></cite>

底下有人老实追问「字符串带上长度到底能解决什么」，于是引出了整条线里最好的科普。C 里的字符串只记一个起始地址，读到 `\0` 才算完——所以程序永远不知道「该读到哪」，只知道「读到那个标记就停」。一旦那个标记因为任何原因没出现在该出现的地方，读写就会一路跑出缓冲区，而越界读写正是绝大多数真实漏洞的根。有人把这个道理讲得很土但很准：如果当初每个字符串都自带长度，程序就永远知道该读多远、写多远，一大半的内存安全问题根本不会存在。

不过我最喜欢的是另一条唱反调的。有人说「更好」这个词要先定义清楚——更高效、更快、更安全，那当然都有更好的做法，但这恰恰不是关键：

> "But a big reason why the web software ecosystem expanded so fast and got so large is that the barrier to entry for new tools and applications was so low. I doubt we'd be where we are had the WWW been built on CORBA instead of html/http."
>
> <cite>— u/zeromeasure，<a href="https://www.reddit.com/r/askscience/comments/1wj5ggy/is_there_anything_at_the_heart_of_computer_coding/paha0wt/" target="_blank" rel="noopener">原帖评论</a></cite>

他顺手提到了那篇老文章《Worse is Better》。这条思路很值得中文读者抄下来：HTML 和 HTTP 之所以赢，恰恰因为它们又脏又简单，随便谁都能上手；如果当年 Web 建在 CORBA 那种「设计正确」的东西上，今天大概根本没有今天。还有一条盘点也很清醒——指令集在修（x86 到 ARM）、网络协议在修（HTTP/3、加密 DNS）、内存安全在修（Rust），这些巨型改造虽然慢得离谱但确实在推进，证明「陷太深」并非绝对；真正一点动静都没有的是 HTML 和 PDF，因为它们已经嵌进了世界本身。

所以「改不动」也分两种：一种是技术上难，一种是已经变成了地基。前一种还有救，后一种只能绕。

## 二、Shopify CEO 造了个词：垃圾手榴弹

[Shopify CEO 说员工扔出的「垃圾手榴弹」正在给所有人增加工作量](https://www.reddit.com/r/technology/comments/1wiw7m7/shopify_ceo_says_employees_slop_grenades_are/)

slop grenade，字面是「垃圾手榴弹」：你花两秒让 AI 生成一大坨东西丢进群里，然后转身走人，剩下的人得花两小时把它读完、分辨哪部分是真的。这个词精准到评论区一堆人当场表示要拿去用。

最扎心的现身说法来自一位被 600 字邮件轰炸的上班族：

> "This is definitely starting to happen in my office. … Lots of useful things AI can do for us but I don't think outsourcing communication with other people should be one of them."
>
> <cite>— u/MaybeSecondBestMan，<a href="https://www.reddit.com/r/technology/comments/1wiw7m7/shopify_ceo_says_employees_slop_grenades_are/padsaum/" target="_blank" rel="noopener">原帖评论</a></cite>

他补的细节比结论更狠：以前只会回「收到 谢谢」的同事，现在能甩出 600 字的长邮件；而且这些邮件特别擅长建议「团队」该做什么，却从不认领任何一件具体的事。一位前端开发讲的那个瞬间更是让人后背发凉——后端同事发来一张需求单外加一份他「写完」的 API 说明，前端打电话去问细节，对方答：等我看看，那个我其实没读过。

由此引出了全场我认为最该被裱起来的一句：

> "If an AI did your job and you have no idea what it did, then just give me your job and your pay and I'll run the AI myself"
>
> <cite>— u/matrinox，<a href="https://www.reddit.com/r/technology/comments/1wiw7m7/shopify_ceo_says_employees_slop_grenades_are/paexaoz/" target="_blank" rel="noopener">原帖评论</a></cite>

评论区还给这类人起了一串外号：肉身代理（meat proxy）、二手思考者（second-hand thinker）。但也有一条反方值得听——有人说他同事本来表达能力极差，给你的信息不是太少就是多到没法读，现在靠 AI 把意识流整理成人话，他反而是感激的。紧跟着的回复则一针见血：那这个人的沟通能力从此再也不会进步了。

我的看法是，这事的本质不是 AI 好不好，而是**成本的转嫁**。写一千字的成本降到了接近零，读一千字的成本一点没降。以前长文本身就是诚意的证明，因为写它要花时间；现在这个信号彻底失效了，于是筛选的负担全部压到了接收方。在中文办公环境里这个问题只会更明显——周报、日报、复盘、方案，本来就是长度崇拜的重灾区。

## 三、一个入职两周的工程师在发愁：活干得太快，怎么装忙

[如果没事可做，怎么在办公室里让自己看起来很忙？](https://www.reddit.com/r/cscareerquestions/comments/1wj4grj/how_do_i_make_myself_look_productive_while_in/)

这是上一节的镜像，也是今天最有戏剧性的一帖。发帖人 2.5 年经验，七月被裁，九月入职新公司，薪资福利都变差了。新团队的资深工程师和 tech lead 基本不用 AI，而他把 Claude Code 装进了 IDE。于是他遇到一个挺现代的困境：

> "After being assigned very simple tickets, I was able to finish them in just a day or two but that would make it look incredibly obvious the code was just all AI generated."
>
> <cite>— u/fuckthis_job（原帖作者），<a href="https://www.reddit.com/r/cscareerquestions/comments/1wj4grj/how_do_i_make_myself_look_productive_while_in/" target="_blank" rel="noopener">原帖评论</a></cite>

被估成一周的工单，他一两天就交了，反而不敢交——因为交得太快等于自曝。注意这里的荒诞：效率提升在这个环境里不是资产，是需要藏起来的证据。

票数最高的回复完全不吃这套，反过来告诉他这是天大的好机会。团队本来就要求他做一次「你怎么用 AI」的分享，那就把这次的过程写成材料：怎么用的、怎么验证的、而不是闭眼梭哈：

> "You're new on the job and coming into an org that seems to not have adopted the new way many people are doing things. This is an opportunity to show off and make a good impression."
>
> <cite>— u/S0mething-clev3r，<a href="https://www.reddit.com/r/cscareerquestions/comments/1wj4grj/how_do_i_make_myself_look_productive_while_in/pafqytk/" target="_blank" rel="noopener">原帖评论</a></cite>

同一个人后来还揪出了帖子里一个被所有人忽略的雷：发帖人似乎还在用前东家的 AI 订阅账号。这不是省钱不省钱的问题，是把新公司的代码和数据喂进了老公司名下的账户，属于商业秘密层面的即刻开除条款。

最妙的转折在后面。有人开玩笑说「你怎么不直接问 AI」，发帖人真去问了，然后把答案贴了回来——而那个答案的核心建议是：别压着做完的活不交，为了显得像人而故意拖慢是不诚实的，也会压死你的上限；真正建立信任的不是速度，是你能不能在没有任何提示的情况下把这段代码讲清楚，包括为什么这么结构、边界情况在哪。他自己的评价是：

> "I put my exact post into Claude, honestly it seems like pretty damn good advice."
>
> <cite>— u/fuckthis_job（原帖作者），<a href="https://www.reddit.com/r/cscareerquestions/comments/1wj4grj/how_do_i_make_myself_look_productive_while_in/pafti30/" target="_blank" rel="noopener">原帖评论</a></cite>

把这一节和上一节并排读特别有意思：上一节骂的是「用了 AI 却不为产出负责」，这一节给的解药恰好是同一条——能不能冷不丁被问住。用不用 AI 从来不是分界线，**能不能为你交出去的东西兜底**才是。对国内不少「AI 提效」考核而言，这句话可能比任何工具选型都重要。

## 四、六十年代的技术能登月，今天反而回不去了

[我们用 1960 年代的技术就把人送上了月球，以今天远超当年的技术，重返月球不该更容易更便宜吗？](https://www.reddit.com/r/askscience/comments/1wikj7q/we_landed_humans_on_the_moon_with_1960s/)

这个问题几乎每年都要被问一遍，但今天这条线的回答质量相当高。第一条高票答案先给了肯定的回答，然后立刻把账摆出来：

> "The Apollo program cost roughly $25b in the 1960s, and by today's standards, that would be $228b today … So even if modern technology reduced the cost in half, that would still be over $100b to go back to the moon, and there just isn't a big enough political commitment to do that."
>
> <cite>— u/Kri77777，<a href="https://www.reddit.com/r/askscience/comments/1wikj7q/we_landed_humans_on_the_moon_with_1960s/pad29bo/" target="_blank" rel="noopener">原帖评论</a></cite>

注意最后半句——缺的不是技术，是「足够大的政治承诺」。有人接着补刀：NASA 2026 财年全部预算是 244 亿美元，连零头都不够。但紧跟着的反驳把这笔账算得更准：

> "Those expenditures came over nearly a decade of budgets. $10B a year for 10 years could (conceivably) get you back to the Moon."
>
> <cite>— u/h3r4ld，<a href="https://www.reddit.com/r/askscience/comments/1wikj7q/we_landed_humans_on_the_moon_with_1960s/pae9d4t/" target="_blank" rel="noopener">原帖评论</a></cite>

阿波罗的钱是摊在近十年里花的，拿单个财年的预算去比整个计划的总成本并不公平——每年一百亿、连续十年，理论上是能回去的。问题在于那意味着 NASA 要把三分之一以上的预算压在一个项目上，而国会几十年来一直在削它的预算。

这条线里技术含量最高的一段，是关于「回去之后落在哪」的争论。月球南极的沙克尔顿撞击坑之所以人人惦记，是因为坑底永久无日照处有水冰、坑沿却几乎永远有阳光。但有人把地形数据摊开了讲：有阳光的坑沿比永暗的坑底高 4.2 公里，中间是大约 30 度的松散碎石坡；把太阳能板架在坑沿、基地放在坑底，就得拉十公里以上的输电线，而且基地要长期泡在约 90 K（零下 183 摄氏度）的深低温和纯人工照明里。他顺带指出，中国的注意力更多放在靠近赤道、可能存在熔岩管的区域——地形平坦适合重型设备、地下温度常年稳定在二十来度，虽然没水，但月壤里氧占了四成质量，把氢运上去造水反而便宜。

对中文读者最实在的启发是：登月这件事的瓶颈早就从「能不能」变成了「愿不愿意连续十年愿意」。这跟很多国内长周期项目的处境其实一模一样——技术评审从来不是最难过的那关，连续十年的预算承诺才是。

## 五、任天堂不裁员，不是因为日本人善良

[专家称任天堂、卡普空、科乐美这些日本公司更健康，因为团队更小、不频繁裁员、也不给高管开三千万美元](https://www.reddit.com/r/technology/comments/1wj2tc4/japanese_companies_like_nintendo_capcom_and/)

这个论断本身不新鲜，但评论区把它从「文化差异」推进到了「制度约束」，含金量就完全不同了。

开场是对高管薪酬的集中开火，一条回复把逻辑挑明：

> "Almost like pilfering the company coffers for personal gain instead of reinvesting back into the company is a parasitic business strategy."
>
> <cite>— u/CondescendingShitbag，<a href="https://www.reddit.com/r/technology/comments/1wj2tc4/japanese_companies_like_nintendo_capcom_and/pafc9gx/" target="_blank" rel="noopener">原帖评论</a></cite>

有人给了具体数字，对比感很强：

> "Want to know how much their brass is making? CEO, CFO, etc… the top 6. Combined: under 10 million."
>
> <cite>— u/fredy31，<a href="https://www.reddit.com/r/technology/comments/1wj2tc4/japanese_companies_like_nintendo_capcom_and/pafis7m/" target="_blank" rel="noopener">原帖评论</a></cite>

任天堂最高的六位高管，年薪加起来不到一千万美元——而原帖里美国同行是一个人三千万。但真正让这一节值得写的，是一位在日本生活的用户泼的冷水。他说这根本不是什么与生俱来的善意，而是社会和法律根本不允许：

> "Nintendo can't lay off their workers unless they show they have no other choice. Executive salary cuts are one of the measures that the Japanese government expects before they can even think about it."
>
> <cite>— u/LifeInJapan1999，<a href="https://www.reddit.com/r/technology/comments/1wj2tc4/japanese_companies_like_nintendo_capcom_and/pagg8up/" target="_blank" rel="noopener">原帖评论</a></cite>

这句话是今天信息密度最高的一条。日本的整理解雇法理要求企业证明「确实没有别的办法」，而**先削减高管薪酬**正是政府预期你应当先做的措施之一。换句话说，「高管带头降薪」在日本不是一个感人的企业文化故事，是裁员合法性的前置条件。顺序是反的：不是因为高管高尚所以不裁员，是因为想裁员就必须先动自己的钱包，所以裁员这件事本身变贵了。

底下还有人补充了一个更结构性的观察：日本社会的阶层割裂相对小，清洁工、警察、CEO、全职主妇能在同一个剑道俱乐部里做朋友，真正的敌人是财富差距和继承性财富；虽然这个差距近年也在扩大，但至少在日本，「贫富差距是社会病」还是能公开讲的共识。

看完这段我想到的是：讨论「别人家的公司为什么更健康」时，我们太容易停在文化和老板人品上，而真正可迁移的从来是制度设计——把某个行为的成本提上去，行为自然就少了。靠呼吁老板有良心，效果约等于零。

---

把五个帖子串起来看，今天这份清单其实挺让人清醒的。空结尾字符串怎么改，业内知道了三十年；重返月球的技术，人类掌握了五十七年；AI 生成的长邮件该由谁负责读，是个常识问题；高管少拿两千万公司会不会倒，答案摆在任天堂的财报里。

每一件事的技术方案都不缺，缺的是别的东西——地基的惯性、连续十年的预算、一句「这是我写的我负责」、以及一条写进法律的前置条件。下次再看到「这个技术上能不能实现」的讨论，也许该先问一句：技术真的是那个卡住的地方吗？
