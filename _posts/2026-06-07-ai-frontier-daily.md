---
layout: daily
title: "AI Frontier Daily | 2026.06.07"
headline: "AutoScientists 把 AI 科学家做成可长期运行的 agent 团队"
date: 2026-06-07 09:07:00 +0800
permalink: /ai-daily/2026/06/07/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "AlphaSignalAI 介绍 Harvard/MIMS 开源的 AutoScientists，称其让多个 agent 围绕科学实验自组织，而不是只沿一条固定研究路径执行。项目仓库显示，AutoScientists 通过共享状态、讨论板和互评机制，让 agent 在投入计算前批判彼此方案，并记录成功与失败，避免重复探索。官方报告 BioML-Bench 24 个生物医学任务平均 leaderboard percentile 74.4%，nanoGPT 训练优化达到目标指标速度提升 1.9 倍，并在 ProteinGym ACE2-Spike 任务上提升 12.5%。这类系统把“AI scientist”从单次问答推进到可持续、可审计的实验流程。"
summary: "AlphaSignalAI 介绍 Harvard/MIMS 开源的 AutoScientists，称其让多个 agent 围绕科学实验自组织，而不是只沿一条固定研究路径执行。项目仓库显示，AutoScientists 通过共享状态、讨论板和互评机制，让 agent 在投入计算前批判彼此方案，并记录成功与失败，避免重复探索。官方报告 BioML-Bench 24 个生物医学任务平均 leaderboard percentile 74.4%，nanoGPT 训练优化达到目标指标速度提升 1.9 倍，并在 ProteinGym ACE2-Spike 任务上提升 12.5%。这类系统把“AI scientist”从单次问答推进到可持续、可审计的实验流程。"
issue_count: 12
deep_dive_count: 7
reading_time: 18
cover: "https://opengraph.githubassets.com/ai-frontier-daily-20260607/mims-harvard/AutoScientists"
signals: "AlphaSignalAI · huggingface · ClementDelangue · hardmaru · SakanaAILabs · gdb · elonmusk · hwchase17"
header-img: img/dark_yellow_400.png
---


## 1/12 AutoScientists 把 AI 科学家做成可长期运行的 agent 团队
AlphaSignalAI 介绍 Harvard/MIMS 开源的 AutoScientists，称其让多个 agent 围绕科学实验自组织，而不是只沿一条固定研究路径执行。项目仓库显示，AutoScientists 通过共享状态、讨论板和互评机制，让 agent 在投入计算前批判彼此方案，并记录成功与失败，避免重复探索。官方报告 BioML-Bench 24 个生物医学任务平均 leaderboard percentile 74.4%，nanoGPT 训练优化达到目标指标速度提升 1.9 倍，并在 ProteinGym ACE2-Spike 任务上提升 12.5%。这类系统把“AI scientist”从单次问答推进到可持续、可审计的实验流程。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2063275186263052386)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2063275187668168720)

## 2/12 Every 开源 Compound Engineering 插件，强化 agent 工程流程
AlphaSignalAI 介绍 Every 的 Compound Engineering 插件，定位为面向 Claude Code、Codex、Cursor 等 coding agent 的工程方法包。项目 README 把核心目标定义为“每个工程单元让后续工程更容易”，并提供 strategy、ideate、brainstorm、plan、work、debug、code review、doc review 和 compound 等命令。它的重点不是让 agent 更快写出一次性代码，而是把计划、评审和经验沉淀变成可复用上下文。该仓库已显示数万 star，说明开发者正在寻找比“让模型直接改代码”更结构化的 agent 工程工作流。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2063229754665308642)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2063229756330451071)

## 3/12 Harness-1 用外部化状态训练 20B 搜索 agent
Hugging Face 和 Clement Delangue 转发 Harness-1：一个 20B open search agent，使用 state-externalizing harness 做强化学习训练。论文思路是让检索 agent 不再把所有证据、已查信息、剩余约束和工具轨迹都塞进不断膨胀的上下文，而是由 harness 维护任务状态，模型专注选择下一步搜索、验证和综合动作。作者称 Harness-1 在困难检索任务上可匹配或超过若干更大的 frontier-model searcher。它显示 agent 能力的竞争点正在从“模型会不会搜索”转向“训练环境如何表达状态与反馈”。
- [查看 @huggingface 原始推文](https://x.com/huggingface/status/2063389490933113202)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2063389460977344551)

## 4/12 VLA-JEPA 进入 LeRobot，世界模型路线继续靠近机器人开发者
Clement Delangue 转发 LeRobot 团队更新，称 VLA-JEPA 已进入 LeRobot。Hugging Face 文档把 VLA-JEPA 描述为结合 Qwen3-VL 语言骨干、自监督视频世界模型和 flow-matching DiT action head 的 Vision-Language-Action 模型。论文主张用 latent world model 学习 action-relevant state transition，减少只拟合像素变化、背景扰动和信息泄漏的问题。相比单纯展示机器人 demo，LeRobot 集成意味着研究路线开始进入开源机器人训练工具链，开发者可以更直接地测试 JEPA 式世界模型对 manipulation task 的泛化收益。
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2063232029848645646)

## 5/12 Sakana AI RSI Lab 从公告进入招聘阶段
Sakana AI 和 hardmaru 发布 RSI Lab 招聘信号，寻找 Recursive Self-Improvement Lab 的 frontier researchers 和 engineers。hardmaru 称 Sakana 过去两年一直在铺设 RSI 基础，现在希望招募对 brute-force scaling 现状感到厌倦的核心成员。昨天的 RSI Lab 公告把 LLM-Squared、Darwin Godel Machine、ShinkaEvolve、ALE-Agent、Digital Red Queen 和 The AI Scientist 串成一条路线；今天的招聘更新说明这不是一次性论文组合，而是组织层面的长期研发方向。AI building AI 正在从研究叙事变成团队配置。
- [查看 @hardmaru 原始推文](https://x.com/hardmaru/status/2063315734097514820)
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2063307429266559243)

## 6/12 OpenAI 与 xAI 的 coding agent 继续围绕上下文和环境打磨
Greg Brockman 写道，自己每次没用 Codex 完成任务都会追问原因，通常发现是缺少上下文、需要写 skill，或只是没想到使用；他认为当前能力 overhang 很大。Elon Musk 同日提到 Grok Build 最新版本修复 grep timeout，并转发一条关于 Grok Build 自动加载 `.envrc` 并传入 agent shell 环境的功能。两条信息都指向 coding agent 的真实瓶颈：模型能力之外，关键在于项目上下文、工具封装、shell 环境、超时处理和用户是否把任务自然交给 agent。
- [查看 @gdb 原始推文](https://x.com/gdb/status/2063437915347136554)
- [查看 @elonmusk 原始推文](https://x.com/elonmusk/status/2063412033266053340)
- [查看 @elonmusk 原始推文](https://x.com/elonmusk/status/2063472771342950806)

## 7/12 LangChain 生态继续讨论 agent harness、安全和对话管理
Harrison Chase 转发多条 LangChain 相关更新：有人总结优化 Agent = Model + Harness 的默认 recipe；有人发布基于 LangChain stack 的开源 AI Agent Security resource，展示 prompt injection、间接注入等真实攻击；还有开发者讨论 DeepAgents 与带认证 MCP server 的集成，以及 Fleet 里 pin 重要聊天的功能。这些更新并非单个大产品发布，但共同反映 agent 应用进入工程化阶段后，harness 设计、安全演练、MCP 认证和会话可管理性正在变成基础问题。
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2063458587096273043)
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2063453629802234325)
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2063367545571418148)
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2063367481104937452)

## 8/12 Databricks 推出 Architecture Center，强化数据与 AI 项目模板化
Databricks 推广 Architecture Center，称其为构建 pipelines、dashboards 和 AI models 的实用架构中心，覆盖 Intelligent Data Warehousing、Credit Loss Forecasting、Telecom Next Best Action 等常见数据与 AI 项目。对企业 AI 团队而言，这类 reference architecture 的价值在于把数据接入、治理、ETL、BI、模型服务和业务应用模式前置成可复用蓝图。随着 agent 和生成式应用进入生产，平台厂商正在把“怎么落地”包装为架构资产，而不是只强调模型或 notebook 能力。
- [查看 @databricks 原始推文](https://x.com/databricks/status/2063286632325751006)

## 9/12 投资机构也开始把模型评测当作核心能力
Logan Kilpatrick 提出，顶级 venture firm 迟早都会建立 evals / benchmarks 团队，用深度模型评测支持短期和长期投资决策。他认为投资机构可以通过持续 benchmark 发现 capability overhang、识别模型尚不擅长的领域，并追踪能力轨迹。这个观点把 evals 从模型实验室和企业采购扩展到资本配置：当 AI 能力变化影响行业边界和创业机会时，谁更早理解真实能力曲线，谁就能更早发现可投方向和过热叙事。
- [查看 @OfficialLoganK 原始推文](https://x.com/OfficialLoganK/status/2063312360102838278)
- [查看 @OfficialLoganK 原始推文](https://x.com/OfficialLoganK/status/2063312636020986316)
- [查看 @OfficialLoganK 原始推文](https://x.com/OfficialLoganK/status/2063314986441777597)

## 10/12 开源模型、价格性能和大模型发布节奏继续成为焦点
Clement Delangue 转发“open AI 一周内 25+ open-weight drops”和“开源权重正在压缩闭源利润率”的讨论；Bindu Reddy 则称自己更期待 GPT 5.6 和 Gemini 3.5，而不是传闻价格很高的 Mythos，并认为实用价格性能会压过 vanity model；Ethan Mollick 指出 Gemini Pro 迭代速度似乎落后于 Claude 和 GPT，3.5 Flash 虽好但无法完全弥合差距。这些讨论共同指向 2026 年模型竞争的核心：开放权重、单位成本、发布节奏和 agentic loops 的可用性，正在和原始 benchmark 分数同等重要。
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2063400765264171050)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2063400660427530487)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2063427276939620448)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2063307399537004907)

## 11/12 LLM 是否能“发现”继续引发科学与哲学边界争论
Yoav Goldberg 连续评论 AlphaFold 与 LLM 输出是否可称为 discovery，认为把 AlphaFold 输出称为发现、却把 LLM 输出排除在外，往往依赖过窄定义；他强调训练阶段的监督学习和反向传播已经塑造了模型行为。Gary Marcus 则链接 Adrian de Wynter 新论文，反驳给 LLM 赋予人类式属性时缺少明确测量标准。论文用 Age of Empires II 作为反例，主张如果没有 explicit measurement criteria，所谓理解、道德或人类式属性可能变成 substrate-dependent 的解释。争论显示 AI 科学能力的语言仍未稳定。
- [查看 @yoavgo 原始推文](https://x.com/yoavgo/status/2063270303652823353)
- [查看 @yoavgo 原始推文](https://x.com/yoavgo/status/2063267227604857259)
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2063387738972495997)

## 12/12 AI 写作、代码量和生产率指标受到更多反思
Ethan Mollick 提醒，软件里也有大量写作，如果 AI 只产出充满“Claudisms”或“ChatGPTish phrases”的菜单、报告和分析，会让产品体验变差；François Chollet 则写道，代码量不代表生产力，知识 scaling 带来静态能力，而 intelligence 体现为适应性。Bindu Reddy 从团队实践角度称工程团队几乎全天与 AI 互动，接近 100% 代码由 AI 写，AI 参与 PR review、测试和生产发布。三类观点放在一起看，AI 编程的衡量标准正在从“写了多少代码”转向写作质量、适应性、评审和端到端系统责任。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2063368660798898284)
- [查看 @fchollet 原始推文](https://x.com/fchollet/status/2063288883052491011)
- [查看 @fchollet 原始推文](https://x.com/fchollet/status/2063350697626845639)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2063238484467294550)

---

## Deep Dive 附录

### AutoScientists
AutoScientists 是 Harvard/MIMS 开源的长期科学实验 agent 系统，目标是让 agent 团队围绕假设自组织、互相批判实验计划、共享成功和失败记录，并在数小时到数天的计算实验中持续探索。仓库把系统实现为 Claude Code subagents，通过本地 ClawInstitute server 管理 workshops、workspaces 和 message-board posts；orchestrator 只负责任务协调和结果收集。官方结果包括 BioML-Bench 24 个生物医学 ML 任务平均 leaderboard percentile 74.4%，比此前最强 AI agent 高 8.33 个百分点；nanoGPT 训练优化达到目标 validation metric 的速度提升 1.9 倍，且产生 7 个 accepted improvements；ProteinGym ACE2-Spike binding assay 提升 12.5%。它的关键意义在于把“AI scientist”拆解为状态共享、争议、失败记忆和并行搜索，而不是单个 agent 的一次性输出。
[查看原文](https://github.com/mims-harvard/AutoScientists)

### Compound Engineering
Every 的 Compound Engineering 插件把 agentic coding 包装成一套可重复工程流程，支持 Claude Code、Codex、Cursor 等环境。README 将核心原则表述为每个工程单元都应让后续工程更容易，并把传统开发中的技术债、上下文膨胀和局部知识遗失作为要解决的问题。插件提供 strategy、ideate、brainstorm、plan、work、debug、code review、doc review、compound、product pulse 等命令和技能，强调 80% planning/review、20% execution。它的价值不在于替代所有工程判断，而在于把 agent 做过的计划、评审、错误模式和项目知识沉淀为后续 agent 可读取的上下文，减少每次从零推理 REST API、代码约定或产品策略的成本。
[查看原文](https://github.com/EveryInc/compound-engineering-plugin)

### Harness-1
Harness-1 是一个 20B search agent，论文全名为 “Reinforcement Learning for Search Agents with State-Externalizing Harnesses”。作者关注的问题是，传统 search agent 常把检索轨迹、证据、已验证结论、剩余约束和上下文裁剪策略都压进 prompt transcript，导致模型既要搜索又要记忆状态。Harness-1 改为在 stateful search harness 中训练 retrieval subagent，由 harness 管理外部状态、工具执行、证据追踪和约束，模型学习选择下一步行动。Hugging Face 论文页称其在困难检索任务上匹配或超过若干更大的 frontier-model searcher。这个方向说明 agent 训练不只是在更大的聊天模型上加搜索工具，还可以围绕任务环境、状态表示和强化学习反馈重新设计。
[查看原文](https://huggingface.co/papers/2606.02373)

### VLA-JEPA
VLA-JEPA 的 LeRobot port 把 JEPA 式 latent world model 带入开源机器人工具链。Hugging Face 文档描述该模型结合 Qwen3-VL 语言骨干、自监督视频世界模型 V-JEPA2 和 flow-matching DiT action head。对应论文主张，Vision-Language-Action policy 的预训练不应只学习像素变化或容易泄漏信息的视觉目标，而应预测 action-relevant state transition 的 latent representation，以提高 manipulation task 的泛化和鲁棒性。LeRobot 集成意味着研究者和开发者可以在实际机器人训练框架中测试这一路线：训练阶段用世界模型理解动作后果，推理阶段输出可执行动作。这是 embodied AI 从 demo 走向可复现实验基础设施的一步。
[查看原文](https://huggingface.co/docs/lerobot/main/vla_jepa)

### Sakana RSI Lab hiring
Sakana AI 的 RSI Lab 招聘页将 Recursive Self-Improvement 从研究公告推进到团队建设。hardmaru 在推文中称，团队过去两年一直在铺设 RSI 基础，并寻找有 frontier track record、但对 brute-force scaling 现状感到无聊的研究者和工程师。招聘岗位聚焦东京 RSI Lab，延续 Sakana 近期对 AI building AI、自我改进 agent、开放式搜索和 sample-efficient discovery 的叙事。它和昨天的 RSI Lab 正式公告相互印证：Sakana 不是只发布一组论文，而是在组织层面为 recursive self-improvement 建立固定研发单元。
[查看原文](https://sakana.ai/careers/member-of-technical-staff-rsi-lab/)

### Databricks Architecture Center
Databricks Architecture Center 是一个 reference architecture 集合，覆盖 pipelines、dashboards、AI models 以及 Intelligent Data Warehousing、Credit Loss Forecasting、Telecom Next Best Action 等场景。Databricks 的推文把它描述为从 idea 到 implementation 的更快路径。对企业 AI 应用来说，这类架构中心的意义在于把生产落地中的重复问题模板化：数据源接入、ETL、warehouse、治理、Unity Catalog、模型服务、BI 和业务流程通常比模型 demo 更耗时。随着 AI 生成应用和 agentic workflows 进入企业，平台的竞争也会转向谁能提供更清晰、更合规、更容易复制的参考架构。
[查看原文](https://www.databricks.com/resources/architectures)

### If LLMs Have Human-Like Attributes, Then So Does Age of Empires II
Adrian de Wynter 的 arXiv 论文讨论 LLM anthropomorphism 的测量问题。论文并不直接断言 LLM 是否具有理解、道德等人类式属性，而是指出，如果实验没有明确 measurement criteria，同样的属性归因可能对其他 sufficiently powerful substrate 也成立。作者训练一个简单神经网络于 Age of Empires II，并用这个例子说明某些可观测行为不必然唯一属于 LLM。论文提出的 null assumption 是 LLM non-uniqueness：在设计实验时，不应默认某些人类式属性已经存在或不存在，而要先排除 substrate 和表示方式导致的解释偏差。它为当天关于 AlphaFold、LLM discovery 和 consciousness 的争论提供了方法论背景。
[查看原文](https://arxiv.org/abs/2605.31514)

