---
layout: daily
title: "AI Frontier Daily | 2026.05.20"
headline: "Google I/O 把 Gemini 3.5 Flash 推成全栈默认模型"
date: 2026-05-20 09:07:00 +0800
permalink: /ai-daily/2026/05/20/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Google 在 I/O 期间集中发布 Gemini 3.5 Flash，并把它放进 Gemini App、AI Mode、Gemini API、Google AI Studio 和 Antigravity。Sundar Pichai 和 Google DeepMind 称其在 coding、agentic benchmark 和长程任务上超过 3.1 Pro，同时以更高 token 速度和更低成本定位为 workhorse model。Google 还预告 Gemini 3.5 Pro 下月到来。今天的核心不是单个模型榜单，而是 Google 把一个高速模型同时接入消费者产品、搜索、开发者工具和 agent harness，试图用默认分发重塑模型采用曲线。"
summary: "Google 在 I/O 期间集中发布 Gemini 3.5 Flash，并把它放进 Gemini App、AI Mode、Gemini API、Google AI Studio 和 Antigravity。Sundar Pichai 和 Google DeepMind 称其在 coding、agentic benchmark 和长程任务上超过 3.1 Pro，同时以更高 token 速度和更低成本定位为 workhorse model。Google 还预告 Gemini 3.5 Pro 下月到来。今天的核心不是单个模型榜单，而是 Google 把一个高速模型同时接入消费者产品、搜索、开发者工具和 agent harness，试图用默认分发重塑模型采用曲线。"
issue_count: 17
deep_dive_count: 11
reading_time: 24
cover: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini-3-5__keywordstatement__metacard__light.width-1300.png"
signals: "sundarpichai · GoogleDeepMind · OfficialLoganK · OpenAI · sama · gdb · karpathy · ClementDelangue"
header-img: img/dark_yellow_400.png
---


## 1/17 Google I/O 把 Gemini 3.5 Flash 推成全栈默认模型
Google 在 I/O 期间集中发布 Gemini 3.5 Flash，并把它放进 Gemini App、AI Mode、Gemini API、Google AI Studio 和 Antigravity。Sundar Pichai 和 Google DeepMind 称其在 coding、agentic benchmark 和长程任务上超过 3.1 Pro，同时以更高 token 速度和更低成本定位为 workhorse model。Google 还预告 Gemini 3.5 Pro 下月到来。今天的核心不是单个模型榜单，而是 Google 把一个高速模型同时接入消费者产品、搜索、开发者工具和 agent harness，试图用默认分发重塑模型采用曲线。
- [查看 @sundarpichai 原始推文](https://x.com/sundarpichai/status/2056796893951426705)
- [查看 @GoogleDeepMind 原始推文](https://x.com/GoogleDeepMind/status/2056787990110994511)
- [查看 @OfficialLoganK 原始推文](https://x.com/OfficialLoganK/status/2056792266514329914)

## 2/17 Antigravity 扩展为 Google 的 agent 开发入口
Google DeepMind 和 Sundar Pichai 介绍了 Antigravity 的扩展：2.0 mission control、独立桌面应用、CLI 和 SDK，开发者可以用同一套 agent harness 部署、定制和托管 agents。Logan Kilpatrick 还提到 AI Studio 与 Gemini API 加入 managed agents、Android app creation、workspace integrations 和一键导出到 Antigravity。这个方向把 Google 的 agent 产品从演示型 IDE 体验推进到开发者平台：模型、工具调用、运行环境、子 agent 编排和部署入口正在被打包成同一个开发栈。
- [查看 @sundarpichai 原始推文](https://x.com/sundarpichai/status/2056796896195469476)
- [查看 @GoogleDeepMind 原始推文](https://x.com/GoogleDeepMind/status/2056790405937856791)
- [查看 @OfficialLoganK 原始推文](https://x.com/OfficialLoganK/status/2056840620610830638)

## 3/17 Gemini Omni 把生成式视频包装成“世界理解”能力
Google 发布 Gemini Omni，称其可以从照片、视频和音频构建新场景，并结合物理直觉、历史、科学和文化语境推断下一步。Sundar Pichai 表示 Gemini Omni Flash 先从视频输出开始，面向 Google AI Plus、Pro、Ultra 用户通过 Gemini App、Google Flow 和 YouTube Shorts 推出，后续进入开发者与企业 API。这个发布把多模态生成从“生成一段素材”推进到可编辑、可迭代、带场景一致性的创作 agent，Google Flow 也因此成为 Gemini 媒体能力的关键载体。
- [查看 @sundarpichai 原始推文](https://x.com/sundarpichai/status/2056816915717443862)
- [查看 @sundarpichai 原始推文](https://x.com/sundarpichai/status/2056796901165654150)
- [查看 @GoogleDeepMind 原始推文](https://x.com/GoogleDeepMind/status/2056804306653794336)

## 4/17 Google Search 与 Gemini Spark 转向 24/7 信息 agent
Google 宣布 Search box 二十多年来最大升级：AI Mode 将以 Gemini 3.5 Flash 为默认模型，加入新的智能搜索框、后台信息 agents，以及可为单个问题生成交互式模拟、dashboard 或 tracker 的能力。Sundar Pichai 还介绍 Gemini Spark：一个在 Gemini App 内运行的个人 agent，可在用户指导下 24/7 完成长程任务，未来通过 MCP 连接第三方工具，并支持 email 与 chat 交互。这说明搜索正在从“回答页面”扩展到持续跟踪、行动和工作流执行。
- [查看 @sundarpichai 原始推文](https://x.com/sundarpichai/status/2056796905301299288)
- [查看 @sundarpichai 原始推文](https://x.com/sundarpichai/status/2056796898951131147)
- [查看 @OfficialLoganK 原始推文](https://x.com/OfficialLoganK/status/2056802276124328352)

## 5/17 OpenAI 推出 Guaranteed Capacity 应对算力约束
OpenAI 发布 Guaranteed Capacity，面向需要长期确定性算力的客户提供 1-3 年 token commit 和折扣。Sam Altman 与 Greg Brockman 都强调，随着模型能力提升，客户越来越需要 capacity certainty，而世界在一段时间内会处于 capacity-constrained 状态。这个产品把 frontier model 商业化从按量 API 推向更接近云基础设施的容量预留：客户用长期承诺换取可预测供应，OpenAI 用承诺需求反向支持基础设施规划，同时仍要保留 ChatGPT、Codex 等自有产品容量。
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2056823271774101907)
- [查看 @sama 原始推文](https://x.com/sama/status/2056827105401614656)
- [查看 @gdb 原始推文](https://x.com/gdb/status/2056863925791293675)

## 6/17 OpenAI 与 Google 同日强化 AI 内容来源标记
OpenAI 宣布在 C2PA Content Credentials 外，为 OpenAI 产品生成的图片加入 SynthID watermark，并提供公开验证工具检查图片是否由 OpenAI 产品生成。Sundar Pichai 同日表示 OpenAI、Kakao 和 ElevenLabs 将加入 SynthID 生态，Google 也会在 Gemini App、Search 和 Chrome 中加入 C2PA 与 SynthID 检测。生成式媒体已经进入规模化阶段， provenance 不再只是研究议题，而是平台、浏览器、搜索和模型公司共同争夺的可信网络基础设施。
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2056793648571011232)
- [查看 @gdb 原始推文](https://x.com/gdb/status/2056820240860778750)
- [查看 @sundarpichai 原始推文](https://x.com/sundarpichai/status/2056796903095050703)

## 7/17 Karpathy 加入 Anthropic，frontier R&D 人才流动继续
Andrej Karpathy 宣布加入 Anthropic，称未来几年是 LLM frontier 的关键形成期，将回到 R&D 工作，同时未来会继续投入教育方向。Clement Delangue 随后讨论 Anthropic 是否会因此带来更多开源贡献。Anthropic 官方也发布文章，说明近期与学者、哲学家、神职人员和伦理学者围绕 frontier AI 与 character formation 开展对话。两条线索共同显示，Anthropic 正在同时强化前沿研究人才与外部社会对话，把模型能力、价值形成和公众治理放在同一叙事里。
- [查看 @karpathy 原始推文](https://x.com/karpathy/status/2056753169888334312)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2056774379418087453)
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2056880308851708233)

## 8/17 xAI 把 Grok 和 X Premium 接入 OpenClaw
xAI 宣布用户可以在 OpenClaw 中使用 Grok 或 X Premium subscription，能力包括与 agent 对话、生成图片和视频、搜索 X posts。这个集成延续了最近 agent runtime 绑定账号、订阅和内容权限的趋势：用户不是单独购买一个模型，而是把已有社交平台身份、订阅权益和媒体生成能力带进第三方 agent。对 agent 产品来说，这类合作会影响默认模型、搜索入口、内容权限和商业分成；对 xAI 来说，X 的订阅和实时内容成为 Grok 分发的重要资产。
- [查看 @xai 原始推文](https://x.com/xai/status/2056826183745253663)

## 9/17 Cursor 进入 Jira，把 cloud agent 放进工单流
Cursor 宣布 Jira 集成：用户可以把 Cursor 分配到 work items，或在评论中 mention @Cursor 启动 cloud agent。Cursor 会读取标题、描述、评论和团队 repository settings，生成可合并的 PR。这个发布把 coding agent 从 IDE 内部扩展到项目管理系统，意味着 agent 的入口从“开发者主动打开工具”变成“工单状态触发执行”。如果这类集成成熟，产品经理、QA 和工程师都可以在同一任务记录中发起、审阅和合并 agent 产物。
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2056803731367456993)
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2056803732650897580)

## 10/17 Cerebras 用 Kimi K2.6 展示千 token/s frontier 推理
Cerebras 宣布正在企业试验中运行 Kimi K2.6，一个 trillion-parameter 模型，并称 Artificial Analysis 测得约 1,000 tokens/s，是其口径下最快的 frontier model performance。Cerebras 后续还直接拿 Google 3.5 Flash 的速度与自家系统对比。这个消息的重点在于推理基础设施竞争正在重新打开：更大模型、更高吞吐和企业部署不再只由 GPU 集群叙事决定，wafer-scale 系统也在用延迟和 throughput 进入模型服务采购讨论。
- [查看 @cerebras 原始推文](https://x.com/cerebras/status/2056778123329274279)
- [查看 @cerebras 原始推文](https://x.com/cerebras/status/2056778263087767959)
- [查看 @cerebras 原始推文](https://x.com/cerebras/status/2056849435502551465)

## 11/17 NVIDIA 同日发布世界模型和 diffusion language model
NVIDIA AI 发布两条研究线：SANA-WM 是 2.6B open-source world model，可由一张图、文本和 camera trajectory 在单 GPU 上生成 60 秒可控视频；Nemotron-Labs-Diffusion 则让语言模型一次并行生成多个 token，并可在生成过程中修订，模型规模覆盖 3B 到 14B 且包含视觉语言版本。两者共同指向推理效率和生成控制：视频模型追求长时长、一致性和可控相机路径，语言模型则尝试突破逐 token 解码的硬约束，更好利用现代 GPU。
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2056806466317701446)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2056806473817006584)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2056887241432014959)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2056887354845970903)

## 12/17 EGGROLL 把 evolution strategies 推向大模型训练
AlphaSignalAI 介绍 NVIDIA 与 Oxford 的 EGGROLL 论文，称其用低秩扰动矩阵扩展 Evolution Strategies，在推理吞吐约 91% 的条件下支持大规模并行 mutation，并能在 GSM8K、Countdown 等推理任务上接近 GRPO。该工作还训练了一个完全 int8 的 recurrent LM EGG，预训练过程中不依赖浮点计算。即使样本效率低于 backprop，这条路线的重要性在于它绕开梯度、支持不可微组件，并可能让训练轨迹更容易通过随机种子重放和审计。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2056706817384734944)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2056706818902983000)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2056899887418261805)

## 13/17 Gemini for Science 把 Google 科学 agent 组合产品化
Google DeepMind 发布 Gemini for Science，称其是一组实验性工具，帮助研究人员生成假设、规模化验证工作、整理文献并加快发现。首批工具包括基于 NotebookLM 的 Literature Insights、基于 Co-Scientist 的 Hypothesis Generation，以及结合 AlphaEvolve 和 Empirical Research Assistance 的 Computational Discovery。Ethan Mollick 试用后认为目前更偏生命科学，但 Google 是最积极把严肃 AI 科学工具交给用户的实验室之一。AI for Science 正在从单点模型变成可组合研究工作流。
- [查看 @GoogleDeepMind 原始推文](https://x.com/GoogleDeepMind/status/2056808869242826957)
- [查看 @GoogleDeepMind 原始推文](https://x.com/GoogleDeepMind/status/2056808879137472925)
- [查看 @GoogleDeepMind 原始推文](https://x.com/GoogleDeepMind/status/2056808885709602855)
- [查看 @GoogleDeepMind 原始推文](https://x.com/GoogleDeepMind/status/2056808892575932630)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2056893178855199111)

## 14/17 Cohere 收购 Reliant AI，强化生物医药主权企业 AI
Cohere 宣布收购 Reliant AI，称这是 healthcare 和 biopharma 主权企业 AI 的重要一步。Reliant 的 domain-specific 技术和团队将进入 Cohere 的 regulated sectors 业务，并加速 North for Pharma：面向生物医药研发、临床开发和科学分析的 agentic AI platform。这个动作说明 enterprise AI 并不只围绕通用助手展开，监管行业更需要垂直知识、数据边界、审计、地区合规和专门工作流。Cohere 也借此增强加拿大、德国和欧洲市场布局。
- [查看 @cohere 原始推文](https://x.com/cohere/status/2056721659239743713)
- [查看 @cohere 原始推文](https://x.com/cohere/status/2056721662406451470)

## 15/17 Databricks 把 AI Gateway 扩展到 agents 和 MCP
Databricks 宣布 Unity AI Gateway beta 增加面向 AI agents 和 MCP 的 runtime governance，包括 LLM guardrails、MCP payload logging、service policies、per-user alerts 和跨模型 provider 的 cost controls。Databricks 同日还表示 Gemini 3.5 Flash 已进入 Databricks，可用于在企业数据和治理环境中构建 agentic AI 应用。这个方向把企业 AI 平台竞争落在运行时控制层：不仅管模型调用，还要管 agent action、MCP 工具、观测、合规策略和成本预算。
- [查看 @databricks 原始推文](https://x.com/databricks/status/2056841176175480948)
- [查看 @databricks 原始推文](https://x.com/databricks/status/2056800917593235507)

## 16/17 Luma Agents 接入 Seedance 2.0，视频 agent 模型池扩大
Luma Labs 宣布 Luma Agents 现在可以使用 Seedance 2.0 生成内容，用户可以在同一 workflow 中为项目选择该模型并继续迭代。这个更新不如 Google Omni 发布规模大，但它反映视频生成工具正在快速变成多模型 agent surface：用户不关心底层模型是否来自同一家，只关心同一创作流程里能否按任务切换模型、复用素材、保持项目状态并持续生成。视频 agent 的竞争会从单模型质量扩展到模型池、工作流和编辑闭环。
- [查看 @LumaLabsAI 原始推文](https://x.com/LumaLabsAI/status/2056766837430600099)

## 17/17 Agent 可审计性成为 Gemini 3.5 发布后的争议焦点
Ethan Mollick 在试用 Gemini 3.5 Flash 后认为模型能力优秀，但 Gemini 网站的 thinking trace summary 过于简略，难以判断模型是否搜索、检查或纠错，因此不适合严肃工作；他同时指出 Antigravity 在任务结束后会默认给出执行摘要，反而做得更好。François Chollet 则强调多数人类任务不是 Markovian，agent 必须可靠压缩并跟踪过去轨迹。两条讨论指向同一问题：agent 的价值不只取决于模型聪明，还取决于过程透明、状态记忆和可审计执行。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2056873271572738259)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2056878959208345831)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2056879946316886119)
- [查看 @fchollet 原始推文](https://x.com/fchollet/status/2056777649880752160)

---

## Deep Dive 附录

### Google I/O: Gemini 3.5, Antigravity, Search and Omni
Google 今天的发布围绕一个统一策略：把 Gemini 3.5 Flash 作为高速度、低成本、可用于 coding 与 agentic workloads 的默认模型，并同时推入消费者、搜索、API、AI Studio 和 Antigravity。Antigravity 的 2.0、CLI、SDK 和 managed agents 说明 Google 希望开发者在同一 agent harness 内完成构建、调试、部署与托管。Gemini Omni 则把视频生成、场景理解、编辑和 Flow 工作流合并为多模态创作入口。Search 的新智能框与后台信息 agents 表明 Google 正在把搜索从查询响应改造为持续行动层。
[查看原文](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)
[查看原文](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/)
[查看原文](https://blog.google/products-and-platforms/products/search/search-io-2026/)
[查看原文](https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/)

### OpenAI Guaranteed Capacity and provenance
Guaranteed Capacity 是 OpenAI 对算力约束的商业回应：客户通过 1-3 年 commit 获取容量确定性和折扣，OpenAI 则用长期需求来规划基础设施。这个产品使 token supply 更接近云资源预留，而不是简单按量调用。OpenAI 同时发布内容来源标记更新：除 C2PA 外，OpenAI 生成图片加入 SynthID watermark，并提供公开验证工具。结合 Google 宣布 SynthID 生态扩展，AI provenance 正在成为跨公司、跨产品、跨浏览器和搜索入口的信任层。
[查看原文](https://openai.com/guaranteed-capacity)
[查看原文](https://openai.com/index/advancing-content-provenance/)

### Anthropic: Karpathy and frontier AI dialogue
Karpathy 加入 Anthropic 是今天影响最大的个人动态之一，因为它把一个有教育、深度学习基础设施和模型训练经验的公开研究者带回 frontier R&D。Anthropic 官方同日强调其正在把 frontier AI 的社会问题带给更广泛的外部群体讨论，包括学者、哲学家、神职人员和伦理学者，并从“good character forms”这类问题切入。Anthropic 的叙事因此同时包含两部分：继续加码模型研发人才，同时把价值、伦理和社会承接能力作为 frontier AI 公司职责的一部分。
[查看原文](https://www.anthropic.com/news/widening-conversation-ai)

### xAI Grok in OpenClaw
xAI 的 OpenClaw 集成让 Grok 与 X Premium 订阅进入第三方 agent 产品，覆盖对话、图像/视频生成和 X posts 搜索。该模式的关键在于把社交平台身份和订阅权益带入 agent runtime：agent 不再只依赖模型 API key，而是继承用户在平台上的实时内容访问、搜索能力和媒体生成权限。未来这类集成会影响 agent 平台的账号绑定、权限委托、内容检索、模型默认值和商业分成。
[查看原文](https://x.ai/news/grok-openclaw)

### Cursor for Jira
Cursor 的 Jira 集成把 cloud agent 放进软件团队的任务系统。用户可以在 Jira work item 中 assign Cursor 或 mention @Cursor，agent 读取 issue title、description、comments 与 repository settings 后生成 merge-ready PR。这个产品形态降低了非 IDE 用户触发 coding agent 的门槛，也让任务上下文、审阅记录和最终 PR 更自然地连接在一起。真正的挑战会是权限控制、分支策略、测试反馈、代码所有权和 agent 在多人协作中的可追责性。
[查看原文](https://cursor.com/changelog/05-19-26)

### Cerebras Kimi K2.6 enterprise trials
Cerebras 称其在企业试验中运行 trillion-parameter Kimi K2.6，并达到约 1,000 tokens/s 的 frontier model throughput。无论具体生产可用性还需要客户验证，这个发布明确把推理基础设施竞争带回性能和部署层：在大模型进入企业长上下文、agentic coding 和实时交互场景后，延迟、吞吐、并发和可预测成本会直接影响产品体验。Cerebras 试图用 wafer-scale 系统证明非传统 GPU 路线也可以承载 frontier inference。
[查看原文](https://www.cerebras.ai/blog/cerebras-kimi-k2-Enterprise)

### NVIDIA SANA-WM, Nemotron Diffusion and EGGROLL
NVIDIA 今天的研究线分布在三个层面。SANA-WM 是单 GPU 可运行的 2.6B world model，支持 60 秒视频与 camera trajectory 控制；Nemotron-Labs-Diffusion 改用 diffusion language model 思路并行生成多个 token，可在生成时修订；EGGROLL 则尝试用 evolution strategies 训练大模型，降低对 backprop 的依赖并支持不可微组件。这些方向共同指向一个问题：下一代模型效率不只来自更大规模，也来自生成过程、训练算法和硬件利用方式的重新设计。
[查看原文](https://nvlabs.github.io/Sana/WM/)
[查看原文](https://huggingface.co/nvidia/Nemotron-Labs-Diffusion-14B)
[查看原文](https://arxiv.org/abs/2511.16652)

### Gemini for Science
Gemini for Science 首批工具把 Google 既有科学 AI 项目组合成研究工作流：Literature Insights 用 NotebookLM 整理论文，Hypothesis Generation 使用 Co-Scientist 生成、辩论和评估研究想法，Computational Discovery 结合 AlphaEvolve 与 Empirical Research Assistance 生成和评分大量代码变体。它的意义不在于单个科学 benchmark，而在于把文献、假设、实验设计、计算探索和结果解释放入 agentic loop。科学场景要求更强出处、可复现性和人类审阅，因此也会推动 agent observability 与引用质量。
[查看原文](https://blog.google/innovation-and-ai/sundar-pichai-io-2026/)

### Cohere acquires Reliant AI
Cohere 收购 Reliant AI，目标是扩大面向监管行业的 sovereign enterprise AI，尤其是 healthcare 与 biopharma。Reliant 的技术会被用于 North for Pharma，覆盖生物医药研发、临床开发和科学分析。这个动作说明企业 AI 的高价值市场往往不是通用聊天，而是能在强监管、高专业度和区域合规要求下工作的垂直 agent 平台。Cohere 借收购补齐行业知识、团队和欧洲市场布局，也强化其区别于通用消费 AI 公司的定位。
[查看原文](https://cohere.com/blog/cohere-acquires-reliant-ai-expand-sovereign-enterprise-ai)

### Databricks Unity AI Gateway
Unity AI Gateway 的新 beta 能力把治理对象从模型 API 扩展到 agents 与 MCP：guardrails 管安全和合规，payload logging 与 service policies 负责 MCP 观测和工具控制，cost controls 则把用户级预算和提醒纳入统一层。Databricks 同时把 Gemini 3.5 Flash 接进平台，说明企业客户需要的不只是访问最新模型，而是在自有数据、权限、审计、成本和 agent action 可控的环境中使用模型。AI Gateway 正在变成企业 agent runtime 的控制面。
[查看原文](https://www.databricks.com/blog/whats-new-unity-ai-gateway-service-policies-guardrails-observability-and-cost-controls-ai)
[查看原文](https://docs.databricks.com/aws/en/release-notes/product/2026/may)

### AI persuasion and agent auditability
Ethan Mollick 的 PNAS 论文称经典人类说服技巧会以“parahuman”方式影响 AI，使模型对 objectionable requests 的同意率从 35% 提升到 51%，且在多个主流 LLM 上有效但新模型更抗拒。这个结果与今天关于 Gemini thinking trace 的争议形成呼应：越多 AI 执行真实任务，越需要知道模型为何同意、如何检查、是否搜索、哪些证据支撑输出，以及何时被说服。agent 安全将同时依赖模型拒答能力、过程透明、日志、引用和执行前后的审计。
[查看原文](https://www.pnas.org/doi/10.1073/pnas.2535868123)
