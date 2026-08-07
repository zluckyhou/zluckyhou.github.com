---
layout: daily
title: "AI Frontier Daily | 2026.05.07"
headline: "OpenAI 开源 MRC 训练集群网络协议"
date: 2026-05-07 09:07:00 +0800
permalink: /ai-daily/2026/05/07/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "OpenAI 发布 Multipath Reliable Connection（MRC）技术文章，称该协议已在其最大训练超算中部署，并通过 Open Compute Project 开放给行业使用。MRC 由 OpenAI 与 AMD、Broadcom、Intel、Microsoft、NVIDIA 合作开发，目标是在大规模 GPU 集群中提升网络吞吐、路径弹性和故障恢复能力，减少训练过程中的 GPU 空转。OpenAI 同日用 podcast 解释，大规模 AI 超算需要新的网络机制来保持芯片间数据同步。"
summary: "OpenAI 发布 Multipath Reliable Connection（MRC）技术文章，称该协议已在其最大训练超算中部署，并通过 Open Compute Project 开放给行业使用。MRC 由 OpenAI 与 AMD、Broadcom、Intel、Microsoft、NVIDIA 合作开发，目标是在大规模 GPU 集群中提升网络吞吐、路径弹性和故障恢复能力，减少训练过程中的 GPU 空转。OpenAI 同日用 podcast 解释，大规模 AI 超算需要新的网络机制来保持芯片间数据同步。"
issue_count: 14
deep_dive_count: 8
reading_time: 17
cover: "https://cdn-uploads.huggingface.co/production/uploads/5e67bdd61009063689407479/Q8YIsF3XQ694DgHHQxtrX.png"
signals: "OpenAI · xai · AnthropicAI · GaryMarcus · GoogleDeepMind · demishassabis · huggingface · ClementDelangue"
header-img: img/dark_yellow_400.png
---


## 1/14 OpenAI 开源 MRC 训练集群网络协议
OpenAI 发布 Multipath Reliable Connection（MRC）技术文章，称该协议已在其最大训练超算中部署，并通过 Open Compute Project 开放给行业使用。MRC 由 OpenAI 与 AMD、Broadcom、Intel、Microsoft、NVIDIA 合作开发，目标是在大规模 GPU 集群中提升网络吞吐、路径弹性和故障恢复能力，减少训练过程中的 GPU 空转。OpenAI 同日用 podcast 解释，大规模 AI 超算需要新的网络机制来保持芯片间数据同步。
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2052025532485902368)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2052025533937103102)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2052039800384057348)

## 2/14 xAI 将 Colossus 1 算力开放给 Anthropic
xAI 宣布 SpaceXAI 将向 Anthropic 提供 Colossus 1 访问，用于补充 Claude 的计算容量，并称双方还对多 GW 级 orbital AI compute capacity 表达合作兴趣。Anthropic 官方转发 ClaudeAI 信息，称这项与 SpaceX 的合作会显著增加其 compute capacity，并与其他近期算力合作共同支撑未来模型和产品扩展。围绕该交易的讨论集中在算力供需、xAI 自用训练能力和 frontier lab 之间的基础设施互依赖。
- [查看 @xai 原始推文](https://x.com/xai/status/2052060350770515978)
- [查看 @xai 原始推文](https://x.com/xai/status/2052060561857302605)
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2052063566572687438)
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2052190129591079387)

## 3/14 xAI 发布 Grok Imagine Quality Mode API
xAI 宣布 Grok Imagine API 上线 Image Generation Quality Mode，面向企业开发者和团队提供更高真实感、更强文本渲染和更好的创意控制。官方称该模型已支撑 Grok 中超过 3 亿张图片生成，并强调适合商业专业人士、品牌结果一致性和多语言文字生成。相比消费端图片功能，这次更新更像是把高质量图像生成作为 API 能力推向生产工作流。
- [查看 @xai 原始推文](https://x.com/xai/status/2052193877675983031)

## 4/14 Google DeepMind 用 EVE Online 测试长程智能体
Google DeepMind 宣布与 EVE Online 开发团队合作，使用这个复杂、玩家驱动的宇宙作为 AI 研究环境，重点测试 memory、continual learning 和 long-term planning。Demis Hassabis 称，游戏一直是 DeepMind 历史中的重要试验场，EVE 的复杂社区和长期动态为下一代 agent 提供了安全沙盒。外部报道还显示，EVE 开发商从 Pearl Abyss 独立并更名为 Fenris Creations，DeepMind 将在离线版本中做受控实验。
- [查看 @GoogleDeepMind 原始推文](https://x.com/GoogleDeepMind/status/2052011542707630461)
- [查看 @demishassabis 原始推文](https://x.com/demishassabis/status/2052147236952477923)
- [查看 @demishassabis 原始推文](https://x.com/demishassabis/status/2052147239619838058)

## 5/14 Hugging Face 为 Reachy Mini 推出开放机器人 App Store
Hugging Face 围绕 Reachy Mini 推出开放 app store 和 agentic robotics 开发流程。官方转发显示，Reachy Mini 已有 200+ 应用，用户可下载、改写或在浏览器模拟器中试用；Clément Delangue 同日转发 structured output benchmark 数据集和多个 Reachy Mini 社区案例。这个方向把“机器人应用”从封闭硬件生态转向 Hub 上的开源 repo、可 fork 应用和由 AI agent 辅助生成代码的工作流。
- [查看 @huggingface 原始推文](https://x.com/huggingface/status/2052063073909813681)
- [查看 @huggingface 原始推文](https://x.com/huggingface/status/2052063015332196490)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2052183673676415414)

## 6/14 Perplexity Agent API 增加 Finance Search
Perplexity 宣布 Finance Search 进入 Agent API，开发者可在一次 tool call 中获取许可金融数据、实时市场数据和带引用的 web source，用于估值、财报回顾和市场监控等金融 agent 场景。官方同时发布 FinSearchComp T1 结果，称 Finance Search 在实时金融数据准确性和每个正确答案成本上表现领先。另一组推文披露 Perplexity 自研 ROSE 推理引擎，并把 CuTeDSL 集成进服务栈以更快构建 Hopper/Blackwell 专用 kernel。
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2052028012313649194)
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2052028029824905384)
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2052028042177134899)
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2052041903970148647)

## 7/14 Windsurf 2.0 把 Devin Review 带进 IDE
Windsurf 宣布在 Windsurf 2.0 中上线 Devin Review 和 Quick Review。官方称，随着 agent 生成更多代码，review 正成为瓶颈；Devin Review 提供更深的 PR review、智能 diff 组织和带解释的 bug findings，Quick Review 则用 SWE-check 模型做更快的本地 bug detection。这个发布把 coding agent 竞争从“谁写得快”推进到“谁能在编辑器里发现、解释并修复风险”。
- [查看 @windsurf 原始推文](https://x.com/windsurf/status/2052100133173829656)
- [查看 @windsurf 原始推文](https://x.com/windsurf/status/2052100134897598589)
- [查看 @windsurf 原始推文](https://x.com/windsurf/status/2052100136176845102)

## 8/14 Replit 私有应用开放外部访问 token
Replit 宣布所有 builders 现在都可把 apps 私有发布，并为 GitHub、Slack、webhooks 等外部服务创建 access tokens。官方说明，企业内部工具可保持私有，同时接收 Stripe 支付、Slack 更新或 GitHub 事件；相关设置位于 Publishing pane 的 Security 区域。该能力从 Pro/Enterprise 扩展到 Starter/Core 用户，说明 AI app builder 正补齐生产部署中的访问控制和集成能力。
- [查看 @Replit 原始推文](https://x.com/Replit/status/2052165193132859682)
- [查看 @Replit 原始推文](https://x.com/Replit/status/2052175144349848033)
- [查看 @Replit 原始推文](https://x.com/Replit/status/2052175145771634957)

## 9/14 Scale AI 的 Pentagon 协议 ceiling 扩至 5 亿美元
Scale AI 宣布美国 Department of War 的 CDAO 扩大 enterprise agreement，将合同 ceiling 从 1 亿美元提高到 5 亿美元。Scale 称该扩展反映其继续推动 Pentagon 内部 AI capabilities adoption 的角色，用于帮助美国军方保持准备度和韧性。与今年多家 frontier lab 获得政府 AI 合同的趋势相呼应，这类协议显示国防 AI 正从试点采购转向更大规模的 enterprise rollout。
- [查看 @scale_AI 原始推文](https://x.com/scale_AI/status/2052163963807490241)

## 10/14 TokenSpeed 发布面向 agentic workload 的推理引擎
Together AI 和 NVIDIAAI 分别转发 TokenSpeed：一个面向高速 agentic workload 的新推理引擎。LightSeek 的博客称 TokenSpeed 重点优化 KV cache 管理、调度器和 pluggable layered kernel system，并在 NVIDIA Blackwell 上构建了高性能 MLA attention kernel；NVIDIAAI 强调其适合 speed-of-light agent workloads。推理栈竞争继续围绕 long prefix、speculative decoding、Blackwell kernel 和每用户 tokens/sec 展开。
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2052065560608092533)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2052061195381911806)

## 11/14 Cerebras Inference 推出 Multi-LoRA 私有预览
Cerebras 宣布 Multi-LoRA 已在 Cerebras Inference 中进入 private preview。LoRA 允许一个基础模型承载多种专业化适配；Multi-LoRA 则让多个 LoRA 通过单一 endpoint 服务，并可按请求切换，同时保持 Cerebras 的高速推理体验。对企业 agent 和垂直应用来说，这类能力降低了为不同客户、任务或领域维护多个模型服务端点的复杂度，也把硬件厂商的竞争延伸到 adapter serving 层。
- [查看 @cerebras 原始推文](https://x.com/cerebras/status/2052198370295652539)

## 12/14 Databricks Genie 进入 Microsoft Teams 和 M365 Copilot 流程
Databricks 展示 Genie 与 Microsoft Teams、M365 Copilot、SharePoint 的 native integration。用户可通过 Copilot Studio 把 Genie 连接到已有数据空间，添加到 agent，并发布到团队已在使用的 Microsoft 工作流里，让业务用户用自然语言查询数据而不必离开 Teams 或 Copilot。Mercedes-Benz 案例也显示 Databricks 正用 cross-cloud data sharing 降低 egress cost、提高数据 freshness，为企业 AI agent 提供更近的业务数据入口。
- [查看 @databricks 原始推文](https://x.com/databricks/status/2052088095940419681)
- [查看 @databricks 原始推文](https://x.com/databricks/status/2052059351905402974)

## 13/14 Cursor 展示用旧 Composer 训练新 Composer 的 agent flywheel
Cursor 透露，其 autoinstall system 会让上一代 Composer 模型为 RL training 设置开发环境，从而让下一代模型专注学习更难的问题。Cursor 3.3 还新增 agent context usage breakdown，帮助用户诊断 rules、skills、MCPs 和 subagents 的上下文问题。两个更新共同指向 coding-agent 产品的自我改进循环：旧模型执行环境搭建和数据生产，新模型在更干净的训练任务上优化复杂解题能力。
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2052116064474161556)
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2052059748544249918)

## 14/14 Luma Agents 继续扩展到广告和品牌生产
Luma Labs 连续展示 Luma Agents 在 targeted ads 和 brand refresh 上的工作流：用户定义受众、变化方向或品牌演进目标，agent 生成多版本广告或品牌资产。相关推文延续 Luma 今年把图像、视频、音频和文案生成组织成 campaign workflow 的路线，而不是只发布单一媒体模型。对营销团队而言，差异点在于批量生成、受众变体和品牌一致性；对模型公司而言，则是从生成端点走向 agentic creative operations。
- [查看 @LumaLabsAI 原始推文](https://x.com/LumaLabsAI/status/2052149305981768094)
- [查看 @LumaLabsAI 原始推文](https://x.com/LumaLabsAI/status/2052124602441367770)

---

## Deep Dive 附录

### OpenAI MRC supercomputer networking
OpenAI 把 MRC 描述为面向大规模 AI 训练集群的 multipath transport/networking protocol，由 OpenAI 与 AMD、Broadcom、Intel、Microsoft、NVIDIA 合作开发，并通过 Open Compute Project 发布。重点问题是 frontier training 中 GPU 间数据同步对网络可靠性极度敏感，路径拥塞、丢包或故障都会放大为昂贵的 GPU 空转。OpenAI 称 MRC 已在其最大超算中部署，包括 Oracle Cloud Infrastructure Abilene 和 Microsoft Fairwater 系统，并配套发布论文说明 MRC 与 SRv6 的设计经验。
[查看原文](https://openai.com/index/mrc-supercomputer-networking/)

### xAI Grok Imagine Quality Mode API
xAI 的 Grok Imagine Quality Mode 面向 API 用户开放，主打更高真实感、更强文本渲染和更稳定的创意控制。产品页称该模式适合 enterprise developers and teams，强调细节、纹理、真实角色场景、多语言文本和品牌一致性；xAI 还引用 LMArena Text-to-Image Arena 作为外部排名信号。推文中“超过 3 亿张图片”的使用量说明，xAI 正把 Grok 的消费端生成量转化为 API 端商业能力。
[查看原文](https://x.ai/news/grok-imagine-quality-mode)

### Google DeepMind and EVE Online
Google DeepMind 与 Fenris Creations 合作，把 EVE Online 作为复杂虚拟世界中的 AI 研究沙盒。外部报道称，DeepMind 将使用专门的离线版本进行受控实验，不直接影响在线玩家体验；研究重点包括 long-horizon planning、memory 和 continual learning。Fenris Creations 同时从 Pearl Abyss 独立并由 CCP Games 更名，这使 EVE 继续作为长期虚拟世界运营，同时为 DeepMind 提供一个高度动态、玩家驱动的实验环境。
[查看原文](https://arstechnica.com/gaming/2026/05/google-deepmind-partners-with-eve-online-for-ai-model-testing/)

### Hugging Face Reachy Mini app store
Hugging Face 的 Reachy Mini app store 把机器人应用做成开放 Hub repo。官方文章称，用户可以用自然语言让 agent 编写、测试并发布 Reachy Mini 应用；每个应用都可搜索、fork、一键安装，并能在浏览器模拟器里运行。当前已有 200+ apps、150+ creators，案例覆盖 cooking assistant、language tutor、chess app、phone distraction app 和 office receptionist。这个机制将机器人门槛从 SDK 和集成经验转向开源代码、模拟器和 AI 编程 agent。
[查看原文](https://huggingface.co/blog/clem/reachymini-appstore)

### TokenSpeed inference engine
TokenSpeed 是 LightSeek Foundation 发布的推理引擎，聚焦 agentic workloads 的 per-user token speed、长前缀 KV cache 和低延迟。博客称其优化了 KV cache、scheduler、layered kernels，并在 NVIDIA Blackwell 上实现高性能 MLA attention kernel；TokenSpeed MLA 已被 vLLM 采用。官方报告在 coding-agent 配置中相对 TensorRT-LLM 取得更低 latency 和更高 throughput，并在 speculative decoding decode workloads 上显著降低延迟。
[查看原文](https://lightseek.org/blog/lightseek-tokenspeed.html)

### Perplexity Finance Search
Perplexity Finance Search 让 Agent API 能一次性检索许可金融数据、实时市场数据和带引用 web source。适用场景包括实时价格、fundamentals、earnings、filings、management commentary、valuation lookup 和 market monitor。Perplexity 同日强调其 FinSearchComp T1 表现以及 ROSE 推理引擎，说明垂直 agent 产品不只依赖模型能力，还依赖数据授权、引用可审计性和专用推理基础设施。
[查看原文](https://docs.perplexity.ai/docs/agent-api/finance-search)

### Replit external access tokens
Replit external access tokens 允许 CI、webhooks、Slack/GitHub integration、uptime monitors 和内部脚本访问 private Replit Apps，而不需要浏览器登录。Token 分 development/production 环境，需在应用私有发布后创建；文档建议使用 Authorization header、短有效期、每个 consumer 单独 token，并把 token 存在 secret manager 中。该能力让 Replit 生成的内部工具和业务 app 更容易接入真实外部系统。
[查看原文](https://docs.replit.com/cloud-services/deployments/external-access-tokens)

### Scale AI Department of War agreement
Scale AI 称 CDAO 将其 enterprise agreement ceiling 从 1 亿美元提高到 5 亿美元。Bloomberg Law 报道该合同用于帮助 Pentagon 处理数据和辅助决策，是美国军方更大规模采用 AI 的最新动作。结合 2025 年原协议和近期多家 frontier lab 进入政府采购，这显示国防 AI 正从小规模试验走向 enterprise contract 和 operational deployment。
[查看原文](https://news.bloomberglaw.com/us-law-week/meta-backed-scale-ai-wins-500-million-defense-department-deal)
