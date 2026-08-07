---
layout: daily
title: "AI Frontier Daily | 2026.06.17"
headline: "Anthropic 用 40 万 Claude Code 会话量化 agentic coding 的真实工作形态"
date: 2026-06-17 09:07:00 +0800
permalink: /ai-daily/2026/06/17/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Anthropic 发布经济研究报告，基于 2025 年 10 月至 2026 年 4 月约 40 万个 Claude Code 会话，分析 agentic coding 如何进入知识工作。报告显示，典型会话中人类主要决定“做什么”，Claude 主要决定“怎么做”；约 56% 会话涉及写、修、测或编排代码，17% 是运行和操作软件，分析与文档类任务也在上升。最关键的结论是，成功率更受领域专业知识影响，而不是用户是否来自软件职业；非软件职业在产出代码的会话中与软件工程师的严格成功率差距很小。Anthropic 还估算平均任务价值在七个月内上升约 27%，说明 coding agent 正从调试助手进入更高价值的端到端工作。"
summary: "Anthropic 发布经济研究报告，基于 2025 年 10 月至 2026 年 4 月约 40 万个 Claude Code 会话，分析 agentic coding 如何进入知识工作。报告显示，典型会话中人类主要决定“做什么”，Claude 主要决定“怎么做”；约 56% 会话涉及写、修、测或编排代码，17% 是运行和操作软件，分析与文档类任务也在上升。最关键的结论是，成功率更受领域专业知识影响，而不是用户是否来自软件职业；非软件职业在产出代码的会话中与软件工程师的严格成功率差距很小。Anthropic 还估算平均任务价值在七个月内上升约 27%，说明 coding agent 正从调试助手进入更高价值的端到端工作。"
issue_count: 13
deep_dive_count: 7
reading_time: 22
cover: "https://www.anthropic.com/api/opengraph-illustration?name=Hand%20Abacus&backgroundColor=cactus"
signals: "AnthropicAI · OpenAI · Alibaba_Qwen · databricks · satyanadella · mustafasuleyman · cursor_ai · ClementDelangue"
header-img: img/dark_yellow_400.png
---


## 1/13 Anthropic 用 40 万 Claude Code 会话量化 agentic coding 的真实工作形态
Anthropic 发布经济研究报告，基于 2025 年 10 月至 2026 年 4 月约 40 万个 Claude Code 会话，分析 agentic coding 如何进入知识工作。报告显示，典型会话中人类主要决定“做什么”，Claude 主要决定“怎么做”；约 56% 会话涉及写、修、测或编排代码，17% 是运行和操作软件，分析与文档类任务也在上升。最关键的结论是，成功率更受领域专业知识影响，而不是用户是否来自软件职业；非软件职业在产出代码的会话中与软件工程师的严格成功率差距很小。Anthropic 还估算平均任务价值在七个月内上升约 27%，说明 coding agent 正从调试助手进入更高价值的端到端工作。
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2066969532380721386)
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2066969534322688427)
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2066969536423985295)
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2066969538193920307)
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2066969540412780644)
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2066969542010806561)

## 2/13 OpenAI 提出 Deployment Simulation，用真实流量近似预测上线后行为
OpenAI 发布 Deployment Simulation 研究，方法是在隐私处理后的真实历史对话中移除旧模型回复，再让待发布模型重新生成，从而在上线前估计不良行为出现频率。OpenAI 称该方法已用于 GPT-5 系列 Thinking 部署，能比传统挑战集更好预测 20 类行为的方向和幅度，并降低模型识别自己正在被评测的可能性。配套 Alignment 博客进一步测试公共 WildChat 数据能否替代内部生产数据，结论是它对普通聊天风险有信号，但对工具丰富、长轨迹的 agentic 风险明显不足。这个发布把安全评测从静态 benchmark 推向“上线前模拟真实部署”的工程体系。
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2066969635099144682)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2066969636369994189)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2066969637880001008)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2066969639041855852)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2066969640727969845)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2066969642774720961)

## 3/13 Qwen-Robot Suite 把 Qwen 从聊天和代码推进到具身智能栈
Qwen 发布 Qwen-Robot Suite，由 Qwen-RobotNav、Qwen-RobotManip、Qwen-RobotWorld 三个基础模型组成，目标是让 AI 从 chatbot 走向现实世界动作。RobotNav 基于 Qwen3-VL，统一指令跟随、点目标、物体目标、目标跟踪、自动驾驶等五类导航任务；RobotManip 基于 Qwen-VL，用开源机器人数据和人类演示视频构建约 38,100 小时预训练语料；RobotWorld 则把末端执行器姿态、驾驶命令和导航 waypoint 转成统一自然语言动作接口，覆盖 20+ embodiment 和 500+ action category。这个发布的信号不是单个机器人 demo，而是 Qwen 正在把具身智能拆成可组合的 agent tool stack。
- [查看 @Alibaba_Qwen 原始推文](https://x.com/Alibaba_Qwen/status/2066870197122899980)
- [查看 @Alibaba_Qwen 原始推文](https://x.com/Alibaba_Qwen/status/2066870201380118843)
- [查看 @Alibaba_Qwen 原始推文](https://x.com/Alibaba_Qwen/status/2066870205780013354)
- [查看 @Alibaba_Qwen 原始推文](https://x.com/Alibaba_Qwen/status/2066870210716647591)
- [查看 @Alibaba_Qwen 原始推文](https://x.com/Alibaba_Qwen/status/2066870215070322786)

## 4/13 Databricks 在 Data + AI Summit 集中发布 agent 时代的数据治理与共享能力
Databricks 在 Data + AI Summit 上把产品叙事推进到“agentic enterprise data platform”。Unity Catalog 更新包括 Unity AI Gateway，用于治理模型、agent、工具、MCP 和运行时交互；Glossary 与 Domains 用于建立业务语义；并扩展跨云、跨区域治理和开放格式互操作。Databricks 还发布 OpenSharing 和 Marketplace 能力，强调共享 Agent Skills、AI models、partner apps 与数据产品，并支持 clean room 身份解析。会上还出现 LTAP、Lakebase、实时 lakehouse 查询、Genie One、Salesforce 与 Replit 合作等信号。整体方向是让 agent 在企业数据上可治理、可分发、可低延迟执行，而不只是“用聊天查数”。
- [查看 @databricks 原始推文](https://x.com/databricks/status/2066959071278690539)
- [查看 @databricks 原始推文](https://x.com/databricks/status/2066944018064572901)
- [查看 @databricks 原始推文](https://x.com/databricks/status/2067008709566615754)
- [查看 @databricks 原始推文](https://x.com/databricks/status/2067014652899279045)
- [查看 @databricks 原始推文](https://x.com/databricks/status/2067033809233875298)
- [查看 @databricks 原始推文](https://x.com/databricks/status/2067042288694444355)

## 5/13 Microsoft Copilot Cowork 全球 GA，企业长任务 agent 进入正式产品期
Satya Nadella 宣布 Copilot Cowork 全球 GA，并强调现在支持 multi-model。Microsoft 将 Cowork 定位为 Microsoft 365 Copilot 中的长运行、多步骤工作 agent，可以基于组织知识处理复杂任务，而不是只回答问题或生成单份文档。Mustafa Suleyman 也转发该消息。这个发布说明企业 agent 产品正在从预览转为正式部署：关键约束会变成模型选择、成本控制、权限治理、组织知识接入和用户可控性。与 Databricks 的数据 agent 方向相呼应，Microsoft 把长任务 agent 放进办公协作层，目标是让企业把持续执行的工作流交给受管控的 agent。
- [查看 @satyanadella 原始推文](https://x.com/satyanadella/status/2066911399494963335)
- [查看 @satyanadella 原始推文](https://x.com/satyanadella/status/2066945733580996829)
- [查看 @mustafasuleyman 原始推文](https://x.com/mustafasuleyman/status/2066942176634818976)

## 6/13 Cursor 推出 Origin，给团队和 agents 提供代码托管与协作底座
Cursor 宣布将推出 code storage 和 git hosting 产品 Origin，定位是让团队和 agents 有一个托管、评审和协作代码的地方，计划今年秋季可用。Cursor 还表示将与 SpaceX 合作推进“useful AI”，并称 Cursor soon 会有明显改进。Origin 的意义在于，coding agent 产品开始向代码生命周期底座延伸：如果 agent 要持续修改、评审、提交和协作，IDE 只是一部分，代码存储、权限、review flow、agent identity 和托管环境同样重要。这也与 GitHub、Replit、Databricks Marketplace 等围绕 agent-native dev workflow 的竞争交汇。
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2067012220832329782)
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2066875698346954891)

## 7/13 GLM-5.2、VibeThinker-3B 与社区测试继续推高开放模型叙事
今天多位账号集中讨论 GLM-5.2、VibeThinker-3B 和开放模型路线。Clement Delangue 转发 GLM-5.2 上线 Hugging Face、1M context、coding 和 agent capabilities 等消息，也转发 VibeThinker-3B 在 AIME 2026、IMO-AnswerBench 和 LiveCodeBench 上的高分讨论。Bindu Reddy 称 GLM-5.2 在 coding 和 agentic loops 上表现强，并把动态模型路由视为避免闭源依赖的必要选项。Ethan Mollick 则用 shader、诗歌和创意任务提醒 benchmark 与真实任务之间仍有差距。今天的开放模型讨论重点已经不只是“参数是否更大”，而是长上下文、agent loop、工具兼容、成本、可替换性和真实任务表现。
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2066940143554953379)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2066950715965145198)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2066958018026086440)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2066947935020159369)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2066963043104563443)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2066963613143752861)

## 8/13 NVIDIA SpatialClaw 用代码作为空间推理 agent 的动作接口
NVIDIA Research 发布 SpatialClaw，提出“code is the right action interface for spatial reasoning agents”。该方法不让 agent 调固定工具模板，也不只生成一次性脚本，而是在持久 Python kernel 中逐步写代码，把 perception modules、NumPy、SciPy、几何工具和中间输出当作可组合变量使用。NVIDIA 称 SpatialClaw 不做 benchmark-specific 或 model-specific 调参，在 20 个空间推理 benchmark、6 个 VLM backbone 上平均达到 59.9%，比近期 spatial agent 高 11.2 个点。NVIDIA 同日也传播 Nemotron 3 Ultra 与开放模型生态，显示其 agent 方向同时押注 open model 和可执行推理接口。
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2066974091689476320)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2066943773196861541)

## 9/13 Together AI 用游戏生成与语音 agent 案例强调开放模型生产经济性
Together AI 发布对比称，在让模型构建小型可玩游戏的测试中，开放模型成本和速度明显优于闭源模型，同时质量接近：Opus 4.8 比 MiniMax M3 贵 15 倍，GPT-5.5 比 Nemotron Ultra 贵 10 倍，Kimi K2.7 Code 比 Opus 4.8 便宜 7 倍。Together 还称 DecagonAI 将 voice agent 每轮成本降低近 6 倍，达到 <400ms p95 model latency，并通过 custom speculators、prompt caching、Blackwell serving 和高频模型部署保持实时性。这个叙事把开放模型竞争落到生产指标：tokenomics、latency、serving stack、模型切换和细粒度定制能力。
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2066970853737472422)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2066936299836039645)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2066778820330565898)

## 10/13 LlamaIndex 用 Claude trace 优化 PDF 读取 skill，降低 agent 成本 37%
LlamaIndex 发布案例，称他们通过观察真实 usage traces，发现 Claude 在 PDF 问答中反复读取同一文件、对页面做不必要截图等低效行为，于是构建 custom skill 教 Claude 更高效地解析 PDF。修正后，相比默认让 Claude 读取 PDF，单题成本降低 37%，答案质量也更好，浪费步骤减少。这个案例的重要性在于，它把 agent 性能优化从“换更强模型”拉回到 trace-driven workflow engineering：看 agent 真正做了什么，识别重复读取、无效工具调用和上下文污染，然后用明确的技能、缓存和解析策略约束行为。
- [查看 @llama_index 原始推文](https://x.com/llama_index/status/2066915713562927581)

## 11/13 Cerebras 把高速推理包装成网络安全 agent 的更大上下文预算
Cerebras 发布博客预告，称更快推理给网络安全产品带来的不只是更快答案，而是在同一延迟预算内塞入更多 context、tool calls、validation 和 policy checks。这个表述很适合安全场景：SOC、检测、响应和策略合规都需要在低延迟下处理大量日志、情报、规则和工具调用。高速推理如果只看 tokens/sec 是基础设施指标；如果换成 agent 视角，它影响的是一个安全 agent 能否在用户等待时间内完成更多验证、减少误报和执行更谨慎的行动链。Cerebras 正把硬件/推理优势转译为垂直行业 agent 的工作流容量。
- [查看 @cerebras 原始推文](https://x.com/cerebras/status/2066998268513640713)

## 12/13 Scale AI 传播 “6% Report”，企业 AI 采用焦点转向真实产出率
Scale AI 转发 “Introducing the 6% Report”，称虽然所有人都在讨论 enterprise AI adoption，但真正产生实际 outcomes 的企业很少。推文信息有限，但它延续了近期企业 AI 讨论的主线：从部署工具、购买模型和举办试点，转向衡量到底有多少流程产生可验证收益。结合 Anthropic 对 Claude Code 成功率与任务价值的测量、Microsoft Cowork GA、Databricks 的 agent 治理和 Together 的生产成本案例，今天的企业 AI 信号很一致：下一阶段比拼的不只是“用了 AI”，而是 agent 是否能在真实业务里通过数据、权限、成本和验证机制稳定交付结果。
- [查看 @scale_AI 原始推文](https://x.com/scale_AI/status/2066908306439028995)

## 13/13 DeepTech Report 与基础设施话题提醒 AI 前沿仍受硬科技约束
Pat Gelsinger 转发 The 2026 DeepTech Report，称未来十年的关键技术很多不是消费者产品，而是半导体、量子、光子、能源和基础设施等底层突破。虽然这不是单一 AI 模型发布，但与今天多条推文形成背景呼应：Satya Nadella 强调 Azure 与 NVIDIA 的大规模训练 benchmark，Databricks 讨论 lakehouse 与低延迟数据底座，Cerebras 讨论推理速度，NVIDIA 讨论空间推理 agent。AI frontier 的瓶颈正在从“模型能力”扩展到算力、网络、存储、数据平台、能耗和硬件供应链；这些深科技基础设施决定模型和 agent 能否规模化进入生产。
- [查看 @PGelsinger 原始推文](https://x.com/PGelsinger/status/2066934592532283799)
- [查看 @satyanadella 原始推文](https://x.com/satyanadella/status/2067020073408368664)

---

## Deep Dive 附录

### Agentic coding and persistent returns to expertise
Anthropic 的报告把 Claude Code 使用数据转化为一套可持续追踪的劳动经济指标。它基于约 40 万个交互式会话，分类任务类型、用户职业、专业程度、决策归属和成功信号。报告显示，人类在会话中通常掌握约 70% 的 planning decisions，而 Claude 负责大多数 execution decisions；每个用户 prompt 平均会触发约 10 个 Claude action 和约 2,400 字输出。七个月内，修 bug 会话占比下降，操作软件、分析数据和写文档占比上升；任务估算价值平均上升约 27%。在成功率上，软件职业与非软件职业的差距小于直觉预期，领域知识比会不会手写代码更能解释结果。这个报告的核心含义是：agentic coding 不是简单替代程序员，而是把“懂问题的人”变成更强的软件生产者。
[查看原文](https://www.anthropic.com/research/claude-code-expertise)

### Deployment Simulation
OpenAI 的 Deployment Simulation 是一种上线前风险预测方法：从近期真实部署中采样隐私处理后的对话前缀，删除原回答，让候选模型在同一上下文中重新回答，再用自动评估寻找不良行为并估计频率。OpenAI 称该方法在 GPT-5 系列 Thinking 部署中，比 challenging prompts 和沿用上一版本风险率的 naive baseline 更能预测行为变化方向与出现率。它还降低 evaluation awareness，因为模型看到的上下文更像真实用户流量。研究同时承认两个误差来源：simulation fidelity 和 prompt distribution shift。配套 WildChat 研究显示，公共聊天数据可为普通聊天风险提供有用 proxy，但对 agentic workflows 风险误差大得多。这说明下一代公开安全评测需要更真实的工具调用、状态和长任务轨迹数据。
[查看原文](https://openai.com/index/deployment-simulation/)
[查看原文](https://alignment.openai.com/validating-public-evals/)

### Qwen-Robot Suite
Qwen-Robot Suite 由三个相互独立又可组合的模型组成。Qwen-RobotNav 处理导航，将 instruction following、point-goal、object-goal、target tracking 和 autonomous driving 统一到单一模型，并用可控观察参数管理视觉历史。Qwen-RobotManip 是基于 Qwen-VL 的 VLA foundation model，用统一 state-action space 和 camera-frame delta poses 处理跨机器人训练冲突，预训练语料约 38,100 小时。Qwen-RobotWorld 则是 physical world model，用自然语言作为动作接口，将 manipulation、driving、navigation 等领域的动作抽象到统一表示，训练语料包含 8.6M video-text pairs 和 200M+ frames。它的战略意义在于：把机器人能力拆成导航、操作、世界模拟三个可调用底层工具，让通用 agent 有机会通过语言接口组合 physical actions。
[查看原文](https://qwen.ai/blog?id=qwen-robotsuite)

### Databricks Data + AI Summit 2026
Databricks 本轮发布围绕 agentic data applications 的生产前提展开。Unity AI Gateway 负责在模型、agent、tools、MCP 和 runtime interactions 层面提供治理；Glossary 和 Domains 提供业务语义基础；OpenSharing 试图成为共享 AI assets、Agent Skills 和 models 的开放协议；Marketplace 则扩展到 partner-built apps 与 data/AI products；clean room ID resolution 用于在不暴露原始标识符的情况下匹配身份。与此同时，LTAP、Lakebase、低延迟 lakehouse 查询、Genie One、Salesforce 伙伴关系和 Replit Marketplace 上架都指向一个平台目标：让企业 agent 能在同一数据底座上查询、行动、共享和受控运行。Databricks 的竞争点从 lakehouse 扩展到企业 agent control plane。
[查看原文](https://www.databricks.com/blog/whats-new-unity-catalog-data-ai-summit-2026)
[查看原文](https://www.databricks.com/dataaisummit)

### Copilot Cowork
Microsoft Copilot Cowork GA 代表 Microsoft 365 Copilot 的 agent 层从 Frontier 预览进入正式部署。Cowork 面向复杂、多步骤、长运行任务，依赖组织知识和 Microsoft 365 上下文执行工作；Satya Nadella 强调 multi-model support，说明 Microsoft 不把企业 agent 绑定在单一模型路线。这个产品真正重要的是工作流封装：企业用户需要的不只是一个强模型，而是任务委派、进度可见、权限边界、成本管理、数据驻留、模型选择和最终责任归属。Copilot Cowork 把这些约束放进 Microsoft 365 的管理体系，可能成为非开发者日常使用长任务 agent 的主要入口。
[查看原文](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/)

### SpatialClaw
SpatialClaw 把空间推理 agent 的动作接口从固定工具调用改成“逐步写代码”。agent 在持久 Python kernel 中运行，每一步都可以调用感知模块、保存中间变量、用 NumPy/SciPy/Matplotlib 做几何计算和可视化，再根据结果修正策略。论文和项目页报告，在 20 个 spatial reasoning benchmarks 上，SpatialClaw 平均准确率 59.9%，比 recent prior spatial agent 高 11.2 点，并在六个 VLM backbone 上稳定提升。这个结果支持一个更广泛的 agent 设计判断：当任务需要组合感知、计算和多步验证时，代码比一次性 JSON tool call 更像通用动作空间。对机器人、视觉 QA、3D/4D reasoning 和科学计算 agent 都有启发。
[查看原文](https://spatialclaw.github.io/)
[查看原文](https://arxiv.org/pdf/2606.13673)

### VibeThinker-3B 与 GLM-5.2
VibeThinker-3B 是 Weibo AI 发布的小型 dense reasoning model，基于 Qwen2.5-Coder-3B，通过 curriculum SFT、多领域 RL、offline self-distillation 和 instruction-oriented RL 做 post-training。公开材料称其在 AIME 2026 达到 94.3，LiveCodeBench v6 达到 80.2 Pass@1，IMO-AnswerBench 达到 76.4，并可通过 Claim-Level Reliability Assessment 做 test-time scaling。GLM-5.2 则代表另一条开放 coding model 路线，围绕 1M context、长任务 coding agent、MIT/open weights 和 Anthropic-compatible workflow 传播。二者共同说明开放模型竞争已从“能不能追上闭源模型分数”变成“能不能以更低成本、更长上下文、更可控部署方式进入真实 agent workflow”。
[查看原文](https://github.com/WeiboAI/VibeThinker)
[查看原文](https://arxiv.org/html/2606.16140)
[查看原文](https://z.ai/blog/glm-5.2)
