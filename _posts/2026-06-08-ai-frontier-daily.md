---
layout: daily
title: "AI Frontier Daily | 2026.06.08"
headline: "Sakana AI 在东京启动 RSI Lab，把“AI 构建 AI”组织化"
date: 2026-06-08 09:07:00 +0800
permalink: /ai-daily/2026/06/08/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Sakana AI 发布日文公告，宣布在东京成立 Recursive Self-Improvement Lab，专门研究 AI 如何参与设计、验证和改进 AI 本身。公告把过去两年的 LLM-Squared、Darwin Godel Machine、ShinkaEvolve、ALE-Agent、Digital Red Queen 和 The AI Scientist 串成一条路线：先做 agent-native model，再做能自动研究的 AI scientist，最终进入可验证的自我改进循环。hardmaru 同日发布 RSI Lab 岗位，邀请研究者和工程师搬到东京构建 recursive discovery engine。Sakana 的重点不是更多算力，而是用更少试验、更高样本效率推进 AI building AI。"
summary: "Sakana AI 发布日文公告，宣布在东京成立 Recursive Self-Improvement Lab，专门研究 AI 如何参与设计、验证和改进 AI 本身。公告把过去两年的 LLM-Squared、Darwin Godel Machine、ShinkaEvolve、ALE-Agent、Digital Red Queen 和 The AI Scientist 串成一条路线：先做 agent-native model，再做能自动研究的 AI scientist，最终进入可验证的自我改进循环。hardmaru 同日发布 RSI Lab 岗位，邀请研究者和工程师搬到东京构建 recursive discovery engine。Sakana 的重点不是更多算力，而是用更少试验、更高样本效率推进 AI building AI。"
issue_count: 12
deep_dive_count: 7
reading_time: 17
cover: "https://sakana.ai/assets/home/sakana_rect.png"
signals: "SakanaAILabs · hardmaru · sama · AlphaSignalAI · satyanadella · mustafasuleyman · GaryMarcus · bindureddy"
header-img: img/dark_yellow_400.png
---


## 1/12 Sakana AI 在东京启动 RSI Lab，把“AI 构建 AI”组织化
Sakana AI 发布日文公告，宣布在东京成立 Recursive Self-Improvement Lab，专门研究 AI 如何参与设计、验证和改进 AI 本身。公告把过去两年的 LLM-Squared、Darwin Godel Machine、ShinkaEvolve、ALE-Agent、Digital Red Queen 和 The AI Scientist 串成一条路线：先做 agent-native model，再做能自动研究的 AI scientist，最终进入可验证的自我改进循环。hardmaru 同日发布 RSI Lab 岗位，邀请研究者和工程师搬到东京构建 recursive discovery engine。Sakana 的重点不是更多算力，而是用更少试验、更高样本效率推进 AI building AI。
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2063742801725252010)
- [查看 @hardmaru 原始推文](https://x.com/hardmaru/status/2063749577891815825)
- [查看 @hardmaru 原始推文](https://x.com/hardmaru/status/2063667304035233945)
- [查看 @sama 原始推文](https://x.com/sama/status/2063779477419901071)

## 2/12 Microsoft Research 用 SkillOpt 让 agent skill 自我进化
AlphaSignalAI 解读 Microsoft Research 的 SkillOpt 论文，称手写 skill 文档正在变得过于静态和脆弱。论文把 skill 文件视为冻结 agent 的外部可训练状态：优化模型读取执行轨迹和分数，提出受限的 add、delete、replace 编辑，只有在 held-out validation 上严格优于旧版本时才接受。它还引入类似学习率的 edit budget、 rejected-edit buffer 和慢速 meta update，避免 skill 文档无约束漂移。论文报告 SkillOpt 在 6 个 benchmark、7 个模型和 3 种 harness 的 52 个设置中最佳或并列最佳，说明“写 skill”正在从提示工程变成可评估的训练过程。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2063637407757398434)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2063637409271619856)

## 3/12 Microsoft 开源 Agent Governance Toolkit，把 agent 安全变成运行时策略
AlphaSignalAI 介绍 Microsoft 的 Agent Governance Toolkit，称它把 agent 从“请遵守规则”的 prompt 约束推进到运行时治理层。该工具箱围绕 agent 消息和工具调用做 policy enforcement，覆盖 identity、sandboxing、trust scoring、audit log、kill switch 等生产控制，并提供多语言与多框架适配。GitHub 仓库显示项目处于 public preview，目标是让任何框架中的 autonomous agent 在调用邮件、数据库、浏览器或其他工具时先经过策略判定。随着企业 agent 能执行真实动作，这类 deny-by-default 的应用层控制会变成比单纯安全提示更可审计的基础设施。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2063592069621289422)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2063592071504547857)

## 4/12 NHS England 将 Microsoft 365 Copilot 扩展到 50 万级员工
Satya Nadella 转发 NHS England 的 Microsoft 365 Copilot 扩展计划，称早期试验平均每天为员工节省 43 分钟。NHS 官方公告给出更完整数字：505,000 名 clinicians 和 support staff 将获得 Copilot，前期试验覆盖 90 个 NHS 组织和 30,000 多名员工，预计 2026 年 10 月前完成超过 500,000 人 rollout。用途包括临床文书、出院流程、床位管理、轮班、会议纪要、人力、财务、采购和管理简报。这是公共医疗系统中少见的大规模生成式 AI 部署，后续真正关键是节省时间能否转化为更低等待时间和更好的护理产能。
- [查看 @satyanadella 原始推文](https://x.com/satyanadella/status/2063633495302533158)
- [查看 @mustafasuleyman 原始推文](https://x.com/mustafasuleyman/status/2063741042609037490)

## 5/12 AI coding 的争论从“写了多少代码”转向“真正 ship 了多少”
Gary Marcus 转发 Rohan Paul 对 MIT/Wharton/NBER 新研究的摘要：AI coding 工具显著增加 commit，但 release 增幅小得多。论文研究 100,000 多名 GitHub 开发者和 AI 使用 telemetry，发现 autocomplete、interactive agent、autonomous agent 分别带来 40%、140%、180% 的 commit 累积效应，但 180% 在项目数量上降为 50%，在真实 release 上降为 30%。同日 AlphaSignalAI 也把 DORA report 和 Ladybird 开发流程变化放在一起讨论。今天的共同信号是，AI 能扩大代码产出，但 review、集成、测试、打包和交付仍是弱链路。
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2063843465344209057)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2063889311259611267)

## 6/12 Ladybird 停止接受公开 PR，AI 时代开源信任模型被重写
AlphaSignalAI 提到 Ladybird 的流程变化；Ladybird 官方公告明确表示，项目将不再接受 public pull requests，代码只由 maintainers 引入。公告不是反 AI，反而承认团队每天使用 AI 工具；问题在于 AI 让“看起来投入了大量 effort 的 patch”变得廉价，弱化了开源项目过去用代码贡献建立信任的机制。对浏览器这种运行不可信网页输入的安全关键软件来说，谁引入代码、谁长期负责架构和后果，比代码是否手写更重要。外部参与仍保留在 bug report、reduction、测试、标准讨论和安全报告上。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2063889311259611267)

## 7/12 模型发布周预期升温，Gemini 与开源权重成为讨论中心
Bindu Reddy 称本周可能是 AI 史上最大的一周，预计多个 AI lab 会发布模型，并点名 Gemini 3.5 Pro 可能与“big two”同场出现。Logan Kilpatrick 简短表示 bullish on Gemini，呼应过去几天关于 Gemini 迭代节奏的讨论。Clement Delangue 和 Hugging Face 同时转发关于美国开源模型回升、NVIDIA 模型在 Hugging Face 榜单占据前列、Gemma 4 MTP 合入 llama.cpp 的更新。市场关注点不只是单个 benchmark，而是发布节奏、开源权重、推理成本和本地运行生态是否能改变闭源模型利润率。
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2063876756478759098)
- [查看 @OfficialLoganK 原始推文](https://x.com/OfficialLoganK/status/2063819854348697681)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2063677319911243972)
- [查看 @huggingface 原始推文](https://x.com/huggingface/status/2063692401546269033)

## 8/12 Lite agent swarms 把高端模型规划与低成本模型执行拆开
Bindu Reddy 宣布开源“Lite Agent Swarms”，目标是在大型 agentic loops 中降低成本。她描述的结构是用 Opus 4.8 和 GPT 5.5 做规划，用 DeepSeek flash 和 Gemma 执行具体工作，适合并行 bug 修复、批量 code review 等任务，声称相对只用高端模型便宜 10 倍、快 2 倍，并保持可比效果。无论具体 benchmark 如何，这条路线代表 agent 工程的一个现实趋势：把任务拆成 planner、worker、reviewer、executor，让昂贵模型只处理高杠杆决策，让便宜模型承担可并行的低风险操作。
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2063671403870638399)

## 9/12 Codex 正从 coding assistant 被描述为跨职能 AI teammate
Greg Brockman 转发 Codex use-cases，称 Codex 正从 AI assistant 变成 AI teammate，覆盖软件工程、设计、数据分析和运营。Ethan Mollick 同日写道，一年前最接近 AI agent 的还是 o3；Harrison Chase 转发 LangChain Fleet，表示团队在构建可创建和管理多个专用 agent 的系统。三条信息放在一起，说明 agent 叙事正在从单个“帮我写代码”的助手转向跨职能、可编排、可分工的工作系统。真正的产品挑战不只是模型能力，而是环境、权限、记忆、任务分配、失败恢复和多人协作接口。
- [查看 @gdb 原始推文](https://x.com/gdb/status/2063705280270021087)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2063814337353891919)
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2063675698062176591)

## 10/12 DORA 把 AI-assisted development 定义为组织能力放大器
AlphaSignalAI 链接 DORA 2025 report；DORA 页面把 AI-assisted software development 的主要角色定义为 amplifier：放大组织已有强项，也放大弱点。报告强调，AI 投资回报不来自工具本身，而来自底层组织系统的战略改善。这个观点与“Writing Code vs. Shipping Code”形成互补：如果团队的 review、测试、发布、产品判断和责任边界没有同步升级，AI 增加的上游产出可能会在下游变成 rework、instability 或无用 app。AI coding 的 KPI 因此需要从生成量扩展到交付质量和组织反馈回路。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2063889311259611267)

## 11/12 François Chollet 用神经网络框架经验提醒 API 设计仍是核心能力
François Chollet 写道，自己从纯 C、Matlab、NumPy、Theano 到现代框架，几乎见过所有神经网络框架；有些好、有些坏，好的框架理解 API design principles。放在今天的 AI agent 和 coding tool 讨论中，这条简短观点值得注意：模型能生成更多代码，但长期开发体验仍取决于抽象边界、API 稳定性、可组合性和易维护性。SkillOpt、Agent Governance、LangChain Fleet、Codex teammate 等更新都在争夺“让 agent 工程可持续”的接口层，而不是只比单次输出质量。
- [查看 @fchollet 原始推文](https://x.com/fchollet/status/2063809469801464007)

## 12/12 好想法变得更值钱，因为 AI 降低了实现成本
Ethan Mollick 提醒，现在很适合储备自己最难、最有价值、最不寻常的想法，因为 AI 正让好想法和独特想法变得极其便宜地实现，但好想法本身并没有变得更容易找到。Linus Ekenstam 也提到未来会回到 energy 和 optimization，本地模型按电力成本运行，云端高智商模型会消耗大量能量。两条观点分别从产品和基础设施角度指向同一变化：AI 把实现门槛、执行成本和软件产能向下压，但稀缺资源转移到问题选择、审美、系统设计、能源效率和能否把想法变成真实用户价值。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2063671312178888847)
- [查看 @LinusEkenstam 原始推文](https://x.com/LinusEkenstam/status/2063912279930733053)

---

## Deep Dive 附录

### Sakana AI RSI Lab
Sakana AI 在东京启动专门的 Recursive Self-Improvement Lab，目标是研究 AI 如何参与构建和改进 AI。公告把 RSI 描述为 2026 年开始形成的行业潮流，但强调 Sakana 的差异化在于样本效率和计算约束，而不是无限扩大训练算力。它将过去两年的 LLM-Squared、Darwin Godel Machine、ShinkaEvolve、ALE-Agent、Digital Red Queen 和 The AI Scientist 视为同一循环的不同阶段：agent-native model 产生 AI scientist，AI scientist 再帮助产生更好的模型。公告也明确提到失败模式、安全措施和可验证性，说明 Sakana 希望把 RSI 当作工程问题，而不是纯粹愿景叙事。
[查看原文](https://sakana.ai/rsi-lab-jp/)

### SkillOpt
SkillOpt 论文提出把 agent skill 文档当作冻结 agent 的外部可训练状态。优化模型读取 scored rollouts 后提出受限文本编辑，候选更新只有在 held-out validation 上严格改进时才被接受。论文用 textual learning-rate budget、rejected-edit buffer 和 epoch-wise slow/meta update 来约束演化过程，避免 skill 文件在自我修改中失控。实验覆盖 6 个 benchmark、7 个 target model 和 direct chat、Codex、Claude Code 三种 harness，报告在 52 个组合中最佳或并列最佳，并在 GPT-5.5 上带来 direct chat +23.5、Codex +24.8、Claude Code +19.1 的平均 no-skill accuracy 提升。
[查看原文](https://arxiv.org/abs/2605.23904)

### Agent Governance Toolkit
Microsoft 的 Agent Governance Toolkit 是一个开源 public preview，用于在生产 agent 运行时增加策略、身份、沙箱和可靠性控制。项目的问题定义很清楚：OAuth scope 和 IAM role 只能说明 agent 能访问什么服务，不能说明一次具体工具调用是否应该被允许。因此 toolkit 在 agent message 和 tool call 层做 policy enforcement，出错时 deny by default，并提供审计、trust scoring、kill switch 等控制。仓库包含 Python、TypeScript、.NET、Go、Rust 以及 Claude Code、Copilot CLI、opencode 等适配器，说明 Microsoft 正把 agent safety 从 prompt 层推进到框架无关的治理基础设施。
[查看原文](https://github.com/microsoft/agent-governance-toolkit)

### NHS England Copilot rollout
NHS England 宣布向 505,000 名 clinicians 和 support staff 提供 Microsoft 365 Copilot。官方公告称，此前 healthcare AI trial 覆盖 90 个 NHS 组织和 30,000 多名员工，发现 AI-powered administrative support 平均每天可为每名员工节省 43 分钟，约等于每人每年 5 周。预期用例覆盖临床文书、出院流程、服务数据分析、rota、床位管理、病人信件、会议纪要、HR、finance、procurement 和 board papers。NHS 预计到 2026 年 10 月前完成超过 500,000 人 rollout，这将成为公共部门生成式 AI 是否能带来真实运营产能的关键案例。
[查看原文](https://www.england.nhs.uk/2026/06/500000-nhs-staff-to-get-new-artificial-intelligence-tools-to-help-free-up-more-time-for-patients/)

### Writing Code vs. Shipping Code
MIT Sloan、Wharton 和 NBER 论文研究 100,000 多名 GitHub 开发者与 AI 使用 telemetry，追踪三代 AI coding tools 的生产率影响。结果显示，autocomplete、interactive coding agents、autonomous coding agents 分别让 commit 累积增加 40%、140%、180%，但这些 gains 沿生产层级快速衰减：180% 的 commit effect 到项目数量降为 50%，到 actual releases 只剩 30%。作者把这解释为 weak-link hypothesis：AI 可以大幅增加上游代码活动，但 review、集成、测试、打包和发布仍需要人类工作，AI 与人类 effort 的 substitution elasticity 估计只有 0.25。应用市场证据也显示，新 app 增加，但 total usage 没有同步增加。
[查看原文](https://www.nber.org/papers/w35275)

### Changing How We Develop Ladybird
Ladybird 宣布不再接受 public pull requests，代码变更以后只由 project maintainers 引入。公告强调，团队每天使用 AI 工具，因此这不是反 AI 决策；真正问题是 AI 改变了贡献信号。过去，一个 substantial patch 往往意味着 substantial effort，可作为 good faith 和责任感的粗略代理；AI 让看起来完整的 patch 变得更快更便宜。对浏览器这种执行不可信互联网输入的软件，一处伪装良好的漏洞就可能造成严重后果，因此项目把责任边界收紧到 maintainer。外部参与仍然包括 bug report、reduction、website testing、standards discussion、security report 和 technical feedback。
[查看原文](https://ladybird.org/posts/changing-how-we-develop-ladybird/)

### DORA 2025
DORA 2025 AI-assisted software development report 把 AI 定义为 amplifier：它会放大组织已有强项，也会放大弱点。报告页面强调，AI 投资回报的最大来源不是工具本身，而是对底层组织系统的战略性改善，并提供 AI Capabilities Model 作为配套指南。这个框架解释了为什么更多代码、更多 commit 或更多 agent 并不自动等于更多用户价值。如果组织的需求选择、review、质量控制、发布节奏和学习反馈没有变强，AI 可能只是把瓶颈推到下游，增加 rework 和 delivery instability。
[查看原文](https://dora.dev/research/2025/dora-report/)
