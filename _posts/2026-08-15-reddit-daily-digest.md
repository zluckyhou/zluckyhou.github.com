---
layout: post
title: "Reddit 每日精选 | 2026.08.15"
headline: "1221 个人带着 AI agent 复现了 2226 篇 ICML 论文，23% 的论文里至少有一条结论站不住"
date: 2026-08-15 09:30:00 +0800
categories: [reddit]
tags: [Reddit, 每日精选]
description: "Hugging Face 组织的大规模复现实验把 ICML 2026 的三分之一论文过了一遍，结果不太好看，而评论区吵的是这算不算同行评审的死讯。"
summary: "本期五帖围着同一个动作打转：验证。Hugging Face 用 agent 复现了 2226 篇 ICML 论文，23% 出现被证伪或有争议的结论；r/webdev 追问 vibe coding 出来的代码一年后还能不能维护；LocalLLaMA 发现 Qwen3.8-27B 和上一代权重结构一模一样；一位 sysadmin 分享了不装任何工具怎么查可疑二进制文件；而 Firefox 成了最后一个还支持 uBlock Origin 的主流浏览器，评论区顺手算了笔 Mozilla 的收入账。"
digest_count: 5
---

今天这五帖凑在一起，问的其实是同一个问题：你凭什么相信眼前这个东西是对的。一篇顶会论文、一段 AI 写出来的代码、一个签名有效的系统文件、一个号称升级了的模型权重，甚至你每天用的浏览器——它们都自称没问题，而真去验证的人发现，验证这件事本身既昂贵又不受待见。

## Hugging Face 让 agent 复现了 2226 篇 ICML 论文，结果不太好看

[原帖链接](https://www.reddit.com/r/datascience/comments/1vobzd9/what_hugging_face_learned_from_reproducing_2200/)

Hugging Face 办了一场超大规模的复现马拉松：1221 名参与者提交了 6816 份实验日志，覆盖 ICML 2026 已录用论文的三分之一强（2226 篇），一共审了 35908 条具体论断。结论是 51% 的论文至少有一条论断被独立验证成功，但 23% 的论文里出现了被证伪或存在争议的结论——其中 49 篇所有论断都没能通过验证，另有 242 篇是不同团队跑出了相反的结果。做这件事的主力是 Claude Code、Codex 这类编码 agent，人类负责纠偏和判断。

评论区第一反应很直接：这说明同行评审已经名存实亡了，现在的审稿状态大概是「我扫了一眼，行吧」和「我的模型觉得这篇没问题」的混合体。

> "Peer review is essentially dead"
>
> <cite>— u/EverythingGoodWas，<a href="https://www.reddit.com/r/datascience/comments/1vobzd9/what_hugging_face_learned_from_reproducing_2200/p3oeh15/" target="_blank" rel="noopener">原帖评论</a></cite>

但紧跟着的反驳更有意思：用 agent 复现恰恰是对同行评审的补课，而不是它的替代品失灵。传统审稿人做的是读文本、对着方法论给一个主观判断，几乎没人真去把代码跑一遍；而这次 agent 干的是把实验重跑一遍看数字对不对得上。也就是说，糟糕的不是「AI 参与了评审」，而是「以前根本没人做过这一步」。还有人注意到 23% 这个数字对应的是实打实的学术信用问题，却几乎没有任何后果——顺手吐槽了一句现在有人名下能挂二十五篇论文。

> "An LLM is attempting to reproduce the results, not just read the text and assess subjective quality of the research finding…"
>
> <cite>— u/Majestic_Courage_535，<a href="https://www.reddit.com/r/datascience/comments/1vobzd9/what_hugging_face_learned_from_reproducing_2200/p3ostpn/" target="_blank" rel="noopener">原帖评论</a></cite>

报告本身给出的教训比这场吵架更务实：纯 agent 自动跑会撞墙，最可靠的结果来自人在旁边不断打断、追问前提、否掉走歪的思路。这对国内正在把 agent 塞进研发流程的团队是个挺具体的参照——agent 的价值不在于替你完成，而在于把「验证」的成本压到你终于愿意做的程度；真正决定结果的，还是有没有人愿意站在旁边说「这一步的假设不对」。

## vibe coding 的代码一年之后长什么样

[原帖链接](https://www.reddit.com/r/webdev/comments/1vnx44m/has_anyone_actually_maintained_a_vibe_coded/)

一位开发者在 r/webdev 说自己跟踪了十二个月：vibe coding 项目的前三个月都挺好，功能上得飞快，客户满意；问题出在第一次要改动已有东西的时候——没人说得清某个决定当初为什么这么做，依赖是模型建议才加的而不是谁评估过，不同文件的风格因为提示词不同而彼此打架，测试也是生成的、未必测在点子上。他见过撑住的项目，也见过维护成本超过重写成本、正在被悄悄推倒重来的项目。

评论区最热闹的部分居然是在争定义：好几个人指出，Karpathy 造这个词的时候写的是「完全交给感觉，忘掉代码的存在」，所以只要你认真审过代码，那压根就不叫 vibe coding，而是 AI 辅助开发；对面则认为词义早就漂移了，现在大家说 vibe coding 就是指「大部分代码是 AI 写的」。这场拉锯打了几十层，中间冒出一个很值得记下的反驳：读代码和写代码带来的理解程度完全不同，「我读过一遍」很容易变成一种自我安慰——你以为自己看懂了，其实只是看过了。

> "The second half is just programming with a better autocomplete, the first is outsourcing your design memory. Once the reasoning leaves your head and only lives in the model's output, maintenance turns into archaeology."
>
> <cite>— u/Routine-Post-6982，<a href="https://www.reddit.com/r/webdev/comments/1vnx44m/has_anyone_actually_maintained_a_vibe_coded/p3l5deo/" target="_blank" rel="noopener">原帖评论</a></cite>

另一条把经济账算明白了：如果你每天的产出还是几百行，那用不用 AI 差别不大，不如省下 token 钱；可一旦涨到几千行，你名义上还在 review，实际上大脑已经跟不上了。这句话其实道破了 vibe coding 争论里最尴尬的一点——「我认真审」和「AI 让我快很多」这两件事，在同一个时间预算里很难同时成立。

> "Going from a few hundred lines every day to a few thousand means you review, but don't have the cognitive bandwidth to keep up."
>
> <cite>— u/theQuandary，<a href="https://www.reddit.com/r/webdev/comments/1vnx44m/has_anyone_actually_maintained_a_vibe_coded/p3mtyte/" target="_blank" rel="noopener">原帖评论</a></cite>

抠字眼看着无聊，但这次争的其实是责任边界：项目出事的时候，「这是 AI 写的」不构成任何解释。真正会在一年后咬人的，不是代码丑，而是决策的理由没留在任何人脑子里，也没落到文档里——维护于是变成了考古。对国内团队来说，比起纠结用不用 AI，更值得立刻做的是把「为什么这么设计」重新写回代码库：ADR 也好、PR 描述也好，让理由和代码一起进版本库。

## Qwen3.8-27B 和上一代权重结构一模一样

[原帖链接](https://www.reddit.com/r/LocalLLaMA/comments/1voblcs/qwen3827b_is_identical_to_qwen3627b/)

有人把 Qwen3.8-27B 和 Qwen3.6-27B 的配置拿去做 diff，结果是零改动：架构完全相同，也就是说这一代的能力提升全部来自训练侧——数据、后训练、RL 环境这些看不见的部分。

> "Interestingly, the 3.8 version has exactly the same architecture - meaning all the capability gains come from training improvements!"
>
> <cite>— u/Course_Latter（原帖作者），<a href="https://www.reddit.com/r/LocalLLaMA/comments/1voblcs/qwen3827b_is_identical_to_qwen3627b/" target="_blank" rel="noopener">原帖</a></cite>

评论区有两条线索比这个发现本身更值得看。一条是把它归类：这更像是一次「更新」而不是重新训练，和 DeepSeek V3 那几个小版本是同一个套路——架构按住不动，只改后训练，等到大版本号才动结构；也有人给出更技术的猜测，说这种跃升多半来自 RL 环境加上策略内蒸馏。另一条线索是社区顺势聊起 LoRA 热插拔：既然底座不变，那把不同领域的适配器像 Stable Diffusion 那样挂上去就变得现实了。有人说这早在 2024 年 LoRax 就干过，也有人指出社区所谓的 finetune 其实大多就是 LoRA 合并回底座，不如干脆把 LoRA 本身放出来。最实用的是一条亲测数据：适配器不是白挂的，光是加载就吃吞吐。

> "So if I get 200 t/s on my 5090 with no adapters it will drop to 120 t/s with one adapter loaded (whether you use the adapter or not). With 4 adapters loaded I was seeing like 50 t/s."
>
> <cite>— u/stephen_holograf，<a href="https://www.reddit.com/r/LocalLLaMA/comments/1voblcs/qwen3827b_is_identical_to_qwen3627b/p3ppxip/" target="_blank" rel="noopener">原帖评论</a></cite>

这事对本地部署的人是个好消息：架构不变意味着推理框架、量化脚本、显存估算这些全都能直接复用，升级成本几乎为零。往大了说，模型迭代的竞争重心已经明显从「谁的结构更聪明」挪到了「谁的数据和后训练更狠」，而后者恰恰是外人最难验证的部分——你能 diff 出架构没变，却 diff 不出人家在训练上做了什么。

## 不装任何工具，怎么查一个可疑的二进制文件

[原帖链接](https://www.reddit.com/r/sysadmin/comments/1vo7sp0/verifying_a_suspicious_binary_on_a_lockeddown/)

一位 sysadmin 写了篇很实在的清单：服务器上有个文件看着不对劲，但公司策略不让装 Sysinternals，Server Core 又没有图形界面，那就只用系统自带的 PowerShell 查。签名用 Get-AuthenticodeSignature（注意 Windows 很多系统文件是编目签名而非内嵌签名）；改名会露馅，因为二进制会保留编译时的 OriginalFilename；有没有 Zone.Identifier 数据流能看出它是下载来的还是随系统发的；再配合进程树、命令行、网络连接和哈希比对——他还推荐了 winbindex 和 CIRCL hashlookup 这类可以自己查的公开数据集，并提醒 SHA256 查不到 NSRL 的老记录，得用 SHA1。

评论区把这套方法的边界画得比原帖更清楚。最要紧的一条是：签名有效只回答了「有人拿证书签过它」，不回答「它该不该出现在这台机器的这个位置」；被盗用的签名证书、以及本身完全合法却被拿来当加载器用的微软自带程序（LOLBin），能干干净净地通过上面每一项检查。

> "A legitimately signed tool sitting in a place it has no business being is the more common finding, and it looks completely green here."
>
> <cite>— u/SecLens_ONE，<a href="https://www.reddit.com/r/sysadmin/comments/1vo7sp0/verifying_a_suspicious_binary_on_a_lockeddown/p3ndmmw/" target="_blank" rel="noopener">原帖评论</a></cite>

另一位直接质疑：足够高明的恶意软件可以在运行中的系统上骗过所有这些检查。楼主的回应是全帖最清醒的一段——这些命令全都要经过操作系统，内核级的东西当然可以对它们撒谎，但你的 EDR 同样是跑在这台机器上的一个 agent，处境没好到哪去；真正意义上的外部观测，便宜版本是从机器之外看它的网络流量，而不是让嫌疑人自己做证。还有人补了取证纪律：动手之前先把路径、属主、ACL、哈希、进程树、命令行和连接记录下来，别执行也别上传那个未知文件（因为提交哈希本身就可能惊动对手）。

> "Everything I listed goes through the OS, so kernel-level malware can lie to all of it. Same goes for your EDR though, it's an agent on the same box."
>
> <cite>— u/Haunting_Ganache_850（原帖作者），<a href="https://www.reddit.com/r/sysadmin/comments/1vo7sp0/verifying_a_suspicious_binary_on_a_lockeddown/p3o2ngf/" target="_blank" rel="noopener">原帖评论</a></cite>

值得学的其实不是这几条命令，而是那套判断力：每项检查各自能证明什么、不能证明什么，被作者标得清清楚楚——时间戳一致说明不了任何事，但不一致就很说明问题；OriginalFilename 是攻击者可控字段，只有和签名放在一起看才有意义。安全工作里最危险的从来不是没有工具，而是把一个绿色的对勾当成结论。

## Firefox 成了最后一个还支持 uBlock Origin 的主流浏览器

[原帖链接](https://www.reddit.com/r/technology/comments/1voafjc/firefox_is_now_the_last_major_browser_that_still/)

随着 Chromium 阵营全面转向 Manifest V3，完整版 uBlock Origin 在主流浏览器里只剩 Firefox 还能用。评论区一半是迁移故事——不少人说自己是在 uBO 被 Chrome 下架那天卸载了用了十几年的浏览器，也有人反过来解释当年为什么离开 Firefox：内存泄漏、性能拉胯、直到最近才支持 HDR，还有公司 IT 根本不让装。有人给了个实用解法：遇到只认 Chrome 的网站，用 Chrome Mask 之类的扩展把 UA 伪装一下基本就能过，Mozilla 自己也维护着一份这样的兼容清单。

真正有意思的是关于钱的那段。有人指出 Google 每年付给 Mozilla 的搜索默认引擎费大约是五亿到十亿美元量级，占 Mozilla 收入的绝大部分，而且金额和市场份额挂钩；于是形成一个尴尬的循环：唯一还在保护你免受广告追踪的浏览器，钱是广告公司给的。顺着这个思路，有人怀疑 Google 其实乐见现状——留着一个份额只有百分之三四的 Firefox，正好当反垄断的挡箭牌，又不真的构成威胁。

> "If anything, they likely prefer the status quo where Firefox exists to maintain a facade of competition, while Firefox market share is ~3-4% not seriously encroaching on Chrome's majority share."
>
> <cite>— u/xpxp2002，<a href="https://www.reddit.com/r/technology/comments/1voafjc/firefox_is_now_the_last_major_browser_that_still/p3ov2do/" target="_blank" rel="noopener">原帖评论</a></cite>

这条阴谋论式的判断被一位显然在 Mozilla 待过的人接住了，他的反驳角度完全不同：份额从来不是 Mozilla 的目标。他列了一长串 Mozilla 主导或参与推动的标准——WebAssembly、WebGL、WOFF、IndexedDB、WebRTC，以及 HTTP/2、HTTP/3、DNS over HTTPS、Opus、AV1——并举了个具体例子：Mozilla 和 Safari 团队联手顶住一个侵犯隐私的特性，Google 就会把它撤掉。另外他还澄清了「Google 会不会干脆买下 Mozilla」这个流传很广的猜测：开发 Firefox 的 Mozilla Corporation 是非营利的 Mozilla Foundation 全资子公司，没有公开股票也没有外部股东，谁也没法强买。

> "It's there to ensure there's a counterbalancing force on Web so that commercial interests aren't the only interests being served."
>
> <cite>— u/asadotzler，<a href="https://www.reddit.com/r/technology/comments/1voafjc/firefox_is_now_the_last_major_browser_that_still/p3p8ydw/" target="_blank" rel="noopener">原帖评论</a></cite>

这个视角挺提神：我们习惯用市场份额衡量一个东西还有没有价值，但在标准制定的桌子上，投票权和用户数不是一回事——只要还有第二个独立实现，某些提案就推不动。对中文互联网的用户来说，这件事的现实意义在于浏览器内核的多样性正在肉眼可见地变薄；等到某天只剩一种内核，网页能长什么样、能拦掉什么，就真的由一家公司说了算了。
