---
layout: daily
title: "AI Frontier Daily | 2026.06.19"
headline: "Midjourney Medical 用 Scanner 把生成影像公司推进到医疗硬件"
date: 2026-06-19 09:07:00 +0800
permalink: /ai-daily/2026/06/19/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Midjourney 宣布成立 Midjourney Medical，并展示新的 Midjourney Scanner。官方称这是一个面向全身内部 3D 扫描的新硬件方向，配套发布了技术介绍视频和下午 AMA；François Chollet 与 Linus Ekenstam 等账号也把它理解为“不用 MRI 的全身内部 3D 扫描”方向。该事件的重要性不只在医疗影像本身，而是 Midjourney 从图像/视频生成模型公司外延到实体扫描硬件与医疗数据采集。如果这个方向继续推进，AI frontier 的竞争会从模型生成能力扩展到传感器、人体数据、临床可用性和监管路径。"
summary: "Midjourney 宣布成立 Midjourney Medical，并展示新的 Midjourney Scanner。官方称这是一个面向全身内部 3D 扫描的新硬件方向，配套发布了技术介绍视频和下午 AMA；François Chollet 与 Linus Ekenstam 等账号也把它理解为“不用 MRI 的全身内部 3D 扫描”方向。该事件的重要性不只在医疗影像本身，而是 Midjourney 从图像/视频生成模型公司外延到实体扫描硬件与医疗数据采集。如果这个方向继续推进，AI frontier 的竞争会从模型生成能力扩展到传感器、人体数据、临床可用性和监管路径。"
issue_count: 12
deep_dive_count: 8
reading_time: 20
cover: "https://alignment.openai.com/beneficial-rl/social-preview.png"
signals: "midjourney · fchollet · LinusEkenstam · OpenAI · gdb · GoogleDeepMind · AnthropicAI · perplexity_ai"
header-img: img/dark_yellow_400.png
---


## 1/12 Midjourney Medical 用 Scanner 把生成影像公司推进到医疗硬件
Midjourney 宣布成立 Midjourney Medical，并展示新的 Midjourney Scanner。官方称这是一个面向全身内部 3D 扫描的新硬件方向，配套发布了技术介绍视频和下午 AMA；François Chollet 与 Linus Ekenstam 等账号也把它理解为“不用 MRI 的全身内部 3D 扫描”方向。该事件的重要性不只在医疗影像本身，而是 Midjourney 从图像/视频生成模型公司外延到实体扫描硬件与医疗数据采集。如果这个方向继续推进，AI frontier 的竞争会从模型生成能力扩展到传感器、人体数据、临床可用性和监管路径。
- [查看 @midjourney 原始推文](https://x.com/midjourney/status/2067421950314688759)
- [查看 @midjourney 原始推文](https://x.com/midjourney/status/2067422898407837797)
- [查看 @midjourney 原始推文](https://x.com/midjourney/status/2067688872944025975)
- [查看 @fchollet 原始推文](https://x.com/fchollet/status/2067589665830375682)
- [查看 @LinusEkenstam 原始推文](https://x.com/LinusEkenstam/status/2067539998853750799)

## 2/12 OpenAI 把 GPT-5.5 Instant 的医疗回答能力推给免费用户
OpenAI 称 GPT-5.5 Instant 在健康相关问题上已达到 frontier Thinking models 水平，并强调每周有超过 2.3 亿人向 ChatGPT 提出健康与健康管理问题。OpenAI 表示改进来自数百名医生参与评估，覆盖 60 个国家、49 种语言和 26 个专科，重点包括识别需要紧急就医的场景、询问相关背景、解释不确定性、避免过度自信，以及把复杂信息说清楚。因为 GPT-5.5 Instant 面向 ChatGPT 免费用户，这条更新把“医疗 AI 能力”从高端模型 demo 推到大规模消费入口。
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2067672740539306261)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2067672742426775728)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2067672744108724635)
- [查看 @gdb 原始推文](https://x.com/gdb/status/2067675030335668270)

## 3/12 OpenAI 与 Boston Children's/Harvard 用 o3 Deep Research 重查罕见病病例
OpenAI 与 Boston Children's Hospital、Harvard 研究者在 NEJM AI 发表研究，称 o3 Deep Research 帮助医生重新分析 376 个过去已做过基因检测和专家审查但仍未解决的儿科罕见病病例，并找到 18 个诊断。推文描述的流程不是让模型直接给出结论，而是把临床特征、遗传模式、变异证据和科学文献连接成可供专家审查的假设，每个结果仍经过人工裁定和临床确认。这个案例显示，长推理模型在医疗里的近期价值更像“专家重分析加速器”，而不是替代医生。
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2067625110199247353)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2067625111717609504)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2067625113193951611)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2067625115182120972)
- [查看 @gdb 原始推文](https://x.com/gdb/status/2067648020934701541)

## 4/12 OpenAI 用真实对话 RL 训练“广泛且持久有益”的模型行为
OpenAI Alignment 发布新研究，用 realistic conversations 中的强化学习训练模型在不同场景中保持 truthfulness、humility under uncertainty、openness to correction、fairness 和 concern for human welfare 等有益行为。OpenAI 称少量训练数据在 53 个独立评估中的 44 个上带来改善，覆盖 deception、reward hacking、安全、健康和心理健康等任务；即使只在健康对话上训练，也出现跨域迁移，并在 adversarial prompts 和 harmful fine-tuning 压力下表现出更强抗性。这是把 alignment 从静态拒答规则推进到“行为特质可迁移性”的一次实验。
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2067722688165232654)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2067722689515856262)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2067722691675824637)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2067722693714338044)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2067722695270334549)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2067722696759329125)

## 5/12 Google DeepMind 发布 AI Control Roadmap，聚焦“并非恶意但会误解目标”的 agent 风险
Google DeepMind 发布 AI Control Roadmap，核心假设不是 agent 总会按人类意图行动，而是要预设 advanced agents 可能误解命令、过度追求目标或在复杂系统里产生意外行为。DeepMind 称其内部数据表明，多数问题不来自恶意，而来自误解或“过于热情”的目标执行，因此需要在多 agent 系统全球扩张前嵌入结构化安全协议。这个路线图把 agent 安全从内容过滤扩展到权限、监控、隔离、审计和运行时控制，更接近企业与内部系统真正需要的治理层。
- [查看 @GoogleDeepMind 原始推文](https://x.com/GoogleDeepMind/status/2067594863785173257)
- [查看 @GoogleDeepMind 原始推文](https://x.com/GoogleDeepMind/status/2067594866196877631)
- [查看 @GoogleDeepMind 原始推文](https://x.com/GoogleDeepMind/status/2067594868180857165)

## 6/12 Anthropic Project Fetch Phase 2 测试 Claude 编程 robodog
Anthropic Frontier Red Team 发布 Project Fetch Phase 2，测试 Claude 能否在真实机器人任务中编程 robodog。Anthropic 称 Opus 4.7 在没有人类辅助的情况下，在已完成任务上比去年由 Opus 4.1 辅助的最快人类团队快约 20 倍，但 robodog 最终仍未能成功取回 beach ball。这个结果的价值在于它同时展示了进步和边界：模型可快速生成和调试复杂机器人控制代码，但物理世界的感知、执行、误差累积和任务闭环仍让“会写代码的 agent”距离可靠具身智能有明显距离。
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2067651699486200091)
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2067651700757086553)

## 7/12 Perplexity Brain 给 Computer 加入持续学习的任务记忆图
Perplexity 发布 Brain in Computer，称 Brain 是一个 continuously learning memory system，每次 Computer 任务都会接入由 Brain 构建的 context graph，让桌面 agent 不再每次从零开始。Perplexity 表示，在需要历史上下文的任务中，Brain 使回答正确率提升 25%、召回率提升 16%，并让单任务成本降低 13%；同时每条记忆都会回链到 session、file 或 source，保留透明度和控制权。这个更新把 desktop agent 的竞争焦点推向持久记忆、项目级上下文和可审计来源，而不是单次浏览器操作。
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2067642139014742348)
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2067642159793406112)
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2067642173538152645)

## 8/12 Cursor /automate 让 coding agent 自己配置定时任务和触发器
Cursor 发布 Automations 更新，新增 `/automate` skill：用户用自然语言描述任务，Cursor 负责配置 trigger、instructions 和 tools。Cursor 还加入 Slack emoji trigger，用户可以对 Slack 消息加反应来启动运行；GitHub triggers 覆盖 issues、reviews 和 workflow runs；cloud agents 增加 computer use。这个方向说明 coding agent 正从“在 IDE 里执行当前请求”走向“常驻工作流代理”：它能被 Slack、GitHub、定时器或事件触发，理解上下文并持续执行软件团队的重复性事务。
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2067683814516858962)
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2067683817113137173)
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2067683818488930393)

## 9/12 Kimi Work Goal Mode 强调 24/7 长周期桌面 agent
Moonshot 发布 Kimi Work 的 Goal Mode，定位为让 desktop agent 24/7 持续运行直到任务完成，面向 long-horizon tasks 和 complex multi-step workflows。与 Cursor Automations、Perplexity Brain 和 Replit Slack 集成同日出现，这条更新说明桌面/工作流 agent 的叙事正在从“打开网页完成一步操作”转向长时段、多步骤、可恢复、可记忆的任务执行。真正的竞争点会变成任务状态管理、失败恢复、权限边界、成本控制、用户可监督性，以及 agent 能否在跨应用环境中保持上下文一致。
- [查看 @Kimi_Moonshot 原始推文](https://x.com/Kimi_Moonshot/status/2067574786965061677)

## 10/12 Databricks Agent Bricks 接入 Grok，企业数据 agent 继续多模型化
xAI 宣布 Grok models 已可在 Databricks Agent Bricks 上使用，目标是把 Grok 接到企业数据上构建 agent。Databricks 同日继续总结 Data + AI Summit 的 agentic data foundation：Lakehouse//RT、Lakebase、Vector Search、LTAP、Genie Ontology、Unity AI Gateway、OpenSharing、Omnigent OSS、Agent Bricks、Genie One/Code/Agents 等能力。对企业来说，重点不是某一个模型，而是模型、数据、权限、语义层、工具和审计能否放进同一个治理平面。Grok 接入 Databricks 进一步说明企业 agent 平台会天然支持多模型供应商。
- [查看 @xai 原始推文](https://x.com/xai/status/2067638691275907084)
- [查看 @databricks 原始推文](https://x.com/databricks/status/2067616060824531205)
- [查看 @databricks 原始推文](https://x.com/databricks/status/2067698929639035060)

## 11/12 Cohere North Mini Code 扩展到 4-bit、Ollama 和 OpenRouter
Cohere 发布 North Mini Code 的三项可用性更新：4-bit quant 版本已开放，让其首个开源 agentic coding model 小到可以在 Mac 上运行；模型支持 Ollama，可与 Codex、OpenClaw 等本地工作流结合；同时可通过 OpenRouter API 免费使用。这个发布不是单纯模型分数更新，而是把开源 coding model 推到本地、低成本和多入口分发。结合 GLM-5.2、DeepSeek 和 Kimi 的开放模型讨论，agentic coding 的开放生态正在围绕成本、延迟、可部署性和工具兼容性快速迭代。
- [查看 @cohere 原始推文](https://x.com/cohere/status/2067671125073576382)
- [查看 @cohere 原始推文](https://x.com/cohere/status/2067671126176563330)
- [查看 @cohere 原始推文](https://x.com/cohere/status/2067671127904698498)
- [查看 @cohere 原始推文](https://x.com/cohere/status/2067671131251712316)

## 12/12 GLM-5.2 与开放权重讨论把模型竞争拉回成本和可替换性
Together AI 上线 GLM-5.2，称其面向 long-horizon agent workloads，支持 1M context、flexible thinking effort、更强 coding，并用 IndexShare 将 1M context 下每 token FLOPs 降低 2.9 倍。Clement Delangue 转发多条对 GLM-5.2 性价比的评价，并强调“Open weights are now our default”；Ethan Mollick 则提出开放权重 frontier model 的商业模式疑问。今天的开放模型讨论焦点已经不是“有没有接近闭源模型”，而是成本 per task、长上下文、agent loop 稳定性、推理速度、部署主权和供应商可替换性。
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2067435704313930234)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2067435707086287066)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2067435708256571497)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2067690103451918721)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2067768150612193390)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2067669551685218638)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2067670308937437542)

---

## Deep Dive 附录

### Reinforcement learning towards broadly and persistently beneficial models
OpenAI Alignment 的研究目标是训练模型把有益行为带到训练分布之外，而不是只在固定安全规则或单一领域上表现良好。方法是在 realistic conversations 上用 reinforcement learning 强化 truthfulness、humility under uncertainty、openness to correction、fairness 和 concern for human welfare 等特质，并在独立评估上测试泛化。OpenAI 报告称，训练模型在 53 个 alignment/benefit 评估中的 44 个上优于 compute-matched baseline，覆盖 deception、reward hacking、安全、健康和心理健康等任务。最值得注意的是 cross-domain transfer：只在健康对话上训练时，模型在非健康的 misalignment、deception 和 reward hacking 任务上也有改善。研究还测试了 adversarial pressure 和 harmful fine-tuning，初步显示这些有益行为有一定持久性。
[查看原文](https://alignment.openai.com/beneficial-rl/)

### Project Fetch: Phase two
Anthropic 的 Project Fetch Phase 2 是一个 frontier red-team style 的具身智能测试：让 Claude 编程和调试 robodog，在真实物理环境中完成取物任务。Anthropic 称 Claude Opus 4.7 在无人辅助时，在已完成任务上的速度约为去年最佳人类团队加 Opus 4.1 辅助的 20 倍，说明代码生成、调试和策略搜索能力已有明显进步。但实验也明确保留失败结果：robodog 仍未能真正取回 beach ball。这个对比让实验比单纯 demo 更有信息量，因为它同时暴露了 coding agent 与 physical agent 的差距：模型可以快速写控制逻辑，但真实世界的感知误差、硬件限制、动作闭环和任务鲁棒性仍是主要瓶颈。
[查看原文](https://www.anthropic.com/research/project-fetch-phase-two)

### Securing internal systems against increasingly capable and imperfectly aligned AI
Google DeepMind 的 AI Control Roadmap 把重点放在“越来越有能力但不完美对齐”的 AI 系统如何进入内部工具和多 agent 环境。其风险模型不是单一恶意模型，而是 agent 在追求目标时误解指令、访问过多权限、串联工具或在复杂系统中产生非预期行动。DeepMind 强调需要在 multi-agent systems 大规模扩张前嵌入结构化安全协议，包括分层权限、监控、隔离、审计、运行时约束和跨组织协作。这个路线图的意义在于，它把 AI 安全从模型回答层的内容政策，推进到实际系统工程层：agent 能做什么、在哪里运行、能触达哪些资源、失败后如何回滚，以及人类如何保持可见性。
[查看原文](https://deepmind.google/blog/securing-the-future-of-ai-agents/)

### Improvements to Cursor Automations
Cursor 的 2026-06-18 changelog 把 Automations 做成更接近事件驱动 agent 平台的产品形态。`/automate` 允许用户用自然语言描述重复任务，由 Cursor 配置触发器、指令和工具；Slack emoji trigger 让团队可以从一条消息直接启动 run；GitHub triggers 覆盖 issues、reviews 和 workflow runs；cloud agents 增加 computer use，意味着 agent 可以在远端环境中执行更复杂的 UI 或浏览器操作。这个更新把 coding agent 从单次 IDE 助手推进到软件团队里的常驻自动化层。它需要解决的问题也更工程化：任务配置可解释性、权限、日志、失败重试、触发条件去重，以及不同协作工具之间的上下文传递。
[查看原文](https://cursor.com/changelog/06-18-26)

### Databricks agentic data foundation and OpenSharing SecureConnect
Databricks 在 Data + AI Summit 期间把平台叙事集中到 agentic data foundation。其发布组合包括 Lakehouse//RT、Lakebase、Vector Search、LTAP、Genie Ontology、Unity AI Gateway、OpenSharing、Omnigent OSS、Agent Bricks、Genie One、Genie Code 和 Genie Agents。OpenSharing SecureConnect 则通过 Databricks-managed proxy 简化数据共享的网络配置，减少 recipient onboarding 时的防火墙和网络协调成本。这些更新共同指向同一个目标：企业 agent 不只是调用模型，还要在被治理的数据、语义层、共享协议、模型网关和工具权限之上运行。xAI Grok models 接入 Agent Bricks 也强化了这个趋势，即企业 agent control plane 会多模型化，而不是绑定单一模型供应商。
[查看原文](https://www.databricks.com/blog/introducing-opensharing-secureconnect)
[查看原文](https://www.databricks.com/dataaisummit)

### Markdown Comes to LiteParse
LlamaIndex 发布 LiteParse v2.1，核心更新是提供快速 markdown output，并强调该路径 LLM-free、轻量、速度快。官方称 LiteParse 在三个 benchmark datasets 上超过其他 model-free competitors。这个发布与 LlamaIndex 同日关于企业非结构化数据的讨论相呼应：大量知识工作仍锁在 PDF、文档和表格里，agent 要真正自动化 workflow，必须稳定、低成本地理解和编辑这些文件。LiteParse 的意义不是替代大模型，而是在 agent stack 中提供更可靠的文档解析层，减少模型截图、重复读取、格式丢失和高成本 OCR 调用，让上层 agent 把上下文预算用于推理和行动。
[查看原文](https://www.llamaindex.ai/blog/markdown-comes-to-liteparse)

### GLM-5.2 on Together AI
Together AI 将 GLM-5.2 定位为面向 long-context、tool-heavy agent workloads 的开放模型。推文中强调 1M context、flexible thinking effort、coding improvement，以及 IndexShare 架构在 1M context 下将 per-token FLOPs 降低 2.9 倍。结合 Clement Delangue 转发的“open weights are now our default”和性价比讨论，GLM-5.2 的传播重点是把开放权重模型放进真实 agent 成本比较中：同样任务下的 dollar per task、latency、可部署性、可替换性和供应商锁定。Ethan Mollick 对开放权重 frontier model 商业模式的疑问也提醒，这个生态的长期可持续性仍未解决。
[查看原文](https://www.together.ai/models/glm-52)

### Perplexity Brain in Computer
Perplexity Brain 是 Computer 的持续学习记忆系统，把每个任务接入一个 context graph，使 agent 可以从项目、决策和来源历史中恢复上下文，而不是每次从空白状态开始。Perplexity 称，在需要历史上下文的任务中，Brain 将 answer correctness 提高 25%、recall 提高 16%，并让单任务成本降低 13%。同时，记忆会回链到 session、file 或 source，用户可在 Customize 中访问和控制。这个设计回应了桌面 agent 的核心短板：没有持久记忆时，agent 很难跨天、跨文件、跨工具执行真实工作；但有记忆后，透明来源、隐私、纠错和删除机制又会变成产品可信度的关键。
[查看原文](https://x.com/perplexity_ai/status/2067642173538152645)
