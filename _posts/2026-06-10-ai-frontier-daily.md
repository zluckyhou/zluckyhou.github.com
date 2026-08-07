---
layout: daily
title: "AI Frontier Daily | 2026.06.10"
headline: "Claude Fable 5 把 Mythos 级模型推向公开使用"
date: 2026-06-10 09:07:00 +0800
permalink: /ai-daily/2026/06/10/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Anthropic 发布 Claude Fable 5 和 Claude Mythos 5。Fable 5 是首个面向公众与企业客户开放的 Mythos-class 模型，强调长周期软件工程、知识工作、视觉和复杂 agent workflow；Mythos 5 则继续通过 Project Glasswing 与 trusted access 受限开放。Anthropic 称 Fable 5 加入新 safeguards，会在高风险网络安全、生物、化学等任务中阻断或回退。当天 Karpathy、Ethan Mollick、swyx、Matt Shumer 等早测用户集中反馈，认为它在长时间、多步骤 coding 与原型任务上出现明显跃迁；同时也引发关于价格、subscription access、silent limits 和高风险能力释放边界的讨论。"
summary: "Anthropic 发布 Claude Fable 5 和 Claude Mythos 5。Fable 5 是首个面向公众与企业客户开放的 Mythos-class 模型，强调长周期软件工程、知识工作、视觉和复杂 agent workflow；Mythos 5 则继续通过 Project Glasswing 与 trusted access 受限开放。Anthropic 称 Fable 5 加入新 safeguards，会在高风险网络安全、生物、化学等任务中阻断或回退。当天 Karpathy、Ethan Mollick、swyx、Matt Shumer 等早测用户集中反馈，认为它在长时间、多步骤 coding 与原型任务上出现明显跃迁；同时也引发关于价格、subscription access、silent limits 和高风险能力释放边界的讨论。"
issue_count: 14
deep_dive_count: 7
reading_time: 22
cover: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/3-5_Live_Translate_hero.width-1300.png"
signals: "AnthropicAI · karpathy · emollick · swyx · cursor_ai · databricks · Replit · bindureddy"
header-img: img/dark_yellow_400.png
---


## 1/14 Claude Fable 5 把 Mythos 级模型推向公开使用
Anthropic 发布 Claude Fable 5 和 Claude Mythos 5。Fable 5 是首个面向公众与企业客户开放的 Mythos-class 模型，强调长周期软件工程、知识工作、视觉和复杂 agent workflow；Mythos 5 则继续通过 Project Glasswing 与 trusted access 受限开放。Anthropic 称 Fable 5 加入新 safeguards，会在高风险网络安全、生物、化学等任务中阻断或回退。当天 Karpathy、Ethan Mollick、swyx、Matt Shumer 等早测用户集中反馈，认为它在长时间、多步骤 coding 与原型任务上出现明显跃迁；同时也引发关于价格、subscription access、silent limits 和高风险能力释放边界的讨论。
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2064394443856232582)
- [查看 @karpathy 原始推文](https://x.com/karpathy/status/2064409694761054332)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2064395281903346013)
- [查看 @swyx 原始推文](https://x.com/swyx/status/2064396531231510931)

## 2/14 Cursor、Databricks、Replit 和 Abacus 快速接入 Fable 5
Fable 5 发布后，应用层工具几乎同步跟进。Cursor 宣布 Claude Fable 5 已可用，并称其在 CursorBench 达到 72.9%，比此前最佳高 8 个点；Databricks 表示 Fable 5 已通过 Unity AI Gateway 在 AWS、Azure、GCP 可用，并可与 Agent Bricks、Databricks Apps 和 Lakebase memory 组合成长期运行 agent；Replit 转发 High Effort 由 Fable 5 支持；Abacus AI 则推出 Fable mode，只把困难 coding prompt 路由给 Fable，其余任务继续用更便宜模型。这说明 frontier model 发布正在变成“模型 + IDE + 企业网关 + 路由策略”的同日生态事件。
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2064394824313376787)
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2064394826100134193)
- [查看 @databricks 原始推文](https://x.com/databricks/status/2064436899192639988)
- [查看 @Replit 原始推文](https://x.com/Replit/status/2064423570600874001)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2064519990603399656)

## 3/14 Fable 5 早期争议集中在高价、路由和长任务可读性
围绕 Fable 5 的第二层讨论不是“是否更强”，而是“何时值得用”。Bindu Reddy 称内部 coding eval 显示，约 98% 任务上它与 GPT 5.5 或 Opus 4.8 做同样事情但价格约 2 倍，只有约 2% hard coding task 适合主动路由给 Fable；她还批评它因 policy 拒答较多。Ethan Mollick 则指出，Fable 能运行 9 小时完成复杂项目，但长期 agent 任务中会发展出难读的“Claudish”内部语言，需要要求它用 plain English 汇报。这个讨论把 frontier model 产品化问题说清楚了：能力跃迁之外，还要解决价格、任务路由、可解释进度和人工接管。
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2064425878080327730)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2064400362166186259)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2064404277561602304)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2064542441848422611)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2064471456914772172)

## 4/14 Gemini 3.5 Live Translate 进入 API、AI Studio、Translate 和 Meet
Google 发布 Gemini 3.5 Live Translate，定位为实时 speech-to-speech audio model。Logan Kilpatrick 和 Google DeepMind 称该模型支持 70+ 语言，可以在用户持续说话时流式翻译，并尽量保留语调、节奏和音高；Google 官方博客补充，开发者可通过 Gemini Live API 和 Google AI Studio public preview 使用，Google Translate Android/iOS 全球 rollout，Google Meet 从本月起面向部分 Workspace 企业 private preview。相较传统 turn-by-turn 翻译，它强调低延迟、连续听说和多语言自动检测，是 Gemini 多模态路线进入日常通信场景的一次明确产品化。
- [查看 @OfficialLoganK 原始推文](https://x.com/OfficialLoganK/status/2064369125447864674)
- [查看 @OfficialLoganK 原始推文](https://x.com/OfficialLoganK/status/2064369493753889109)
- [查看 @GoogleDeepMind 原始推文](https://x.com/GoogleDeepMind/status/2064366504745828689)
- [查看 @GoogleDeepMind 原始推文](https://x.com/GoogleDeepMind/status/2064366510932439413)

## 5/14 Google AI Studio 每周生成 120 万个 app，Native Android 与 Workspace 入口扩展
Logan Kilpatrick 披露，Google AI Studio 当前每周生成超过 120 万个 app，自 2 月下旬以来累计创建超过 1800 万个；在回复中他补充约 10% 被部署、约 10% 被分享。另一个更新提到 AI Studio 新增 Native Android App support，并连到 Gmail、Docs、Calendar 等更多入口。放在 Gemini 3.5 Live Translate 同日发布背景下，Google 的开发者策略正在从模型 API 文档扩展到“模型 + app generator + Android + Workspace integration”。这会把 Gemini 的分发面从聊天和搜索推向可部署小应用、多语言通信和企业协作工作流。
- [查看 @OfficialLoganK 原始推文](https://x.com/OfficialLoganK/status/2064423388928790943)
- [查看 @OfficialLoganK 原始推文](https://x.com/OfficialLoganK/status/2064423592901951550)
- [查看 @OfficialLoganK 原始推文](https://x.com/OfficialLoganK/status/2064446822085705756)

## 6/14 Cohere 发布首个开源 coding model North Mini Code
Cohere 发布 North Mini Code，这是其首个面向开发者的开源 coding model。官方称模型为 30B 总参数、3B active 的 MoE，Apache 2.0 许可，专为 agentic software engineering 训练，可用于 terminal-based coding agent、复杂代码生成和多 harness 稳健性。Cohere 披露其 Artificial Analysis Coding Index 得分为 33.4，并称在同规模开放模型中具备竞争力。NVIDIA 与 Clement Delangue 同步转发，后者把它与开放科学、开放权重和 sovereign AI 叙事连接起来。与 Fable 5 的高端闭源路线相比，North Mini Code 代表低 active 参数、可本地部署、可社区反馈迭代的 coding agent 方向。
- [查看 @cohere 原始推文](https://x.com/cohere/status/2064378058329526556)
- [查看 @cohere 原始推文](https://x.com/cohere/status/2064378689349968224)
- [查看 @cohere 原始推文](https://x.com/cohere/status/2064378747587899784)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2064494044667912563)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2064421728877785386)

## 7/14 xAI 与 Gopuff 把 Grok 做成购物 agent
xAI 介绍与 Gopuff 合作的 Go shopping assistant。Go 把 Grok 的 chat、voice 和 image models 接入 Gopuff 的库存与订单场景，用户可通过文字、语音和视觉 feed 完成个性化购物；xAI 页面称 Go 会使用图像模型从 Gopuff inventory 生成更真实的购物车和订单场景，并在每次下单后学习用户偏好。Gopuff 官方公告还称该产品融合 13 年订单数据、数亿订单和来自 X 的实时文化信号。这个案例说明 consumer agent 正从“回答问题”进入“填购物车、理解偏好、驱动交易”的 commerce workflow，模型公司也在寻找真实订单闭环。
- [查看 @xai 原始推文](https://x.com/xai/status/2064426048146800780)

## 8/14 Microsoft Project Ex Vivo 用 AI 解释癌症治疗差异
Satya Nadella 转发 Microsoft 与 Broad Institute 的 Project Ex Vivo 研究，称 AI 正帮助理解 cell behavior，解释为什么癌症药物对不同患者效果不同。Microsoft Signal 文章说明，该研究发表在 Nature Methods，重点从 mutation 之外看 cell state：癌细胞如何响应周围环境、如何影响药物敏感性、抗药性和疾病侵袭性。团队使用计算模型先做 virtual experiments，再决定实验室验证方向；文章强调，AI 模型从多样化 cell behavior 中学到的东西可能比单纯扩大数据量更多。对科学 agent 来说，这延续了近期趋势：模型能力要嵌入可验证的数据生成、假设筛选和 wet lab 反馈回路。
- [查看 @satyanadella 原始推文](https://x.com/satyanadella/status/2064395257148834152)

## 9/14 Arcee AI 把模型、数据集和 agent traces 全部迁到 Hugging Face
Clement Delangue 宣布 Arcee AI 成为首个把全部模型和数据集迁到 Hugging Face 的主要美国 AI lab。Arcee 官方文章称双方达成 multi-million-dollar strategic partnership，Hugging Face Hub 将成为其所有公开模型、私有模型、专有数据集和 agent traces 的独家存储位置；选择 Hugging Face Buckets 的原因包括 per-TB storage、egress 和 CDN included、跨云读取，以及训练 compute provider 不被单一对象存储绑定。这个动作把 Hugging Face 从模型分发社区进一步推向 AI artifact infrastructure：weights、datasets、private storage、trace log 和 compute-agnostic workflow。
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2064323874049679643)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2064323879141589014)

## 10/14 稀疏 LLM 论文把“只激活 29 个神经元”转成 GPU 实际收益
AlphaSignalAI 介绍论文 Sparser, Faster, Lighter Transformer Language Models，称新方法让大模型 feed-forward layers 在训练中达到约 99% sparsity，平均只激活 29/5632 个神经元，并用定制 GPU kernels 把稀疏性转化为实际性能收益。论文原文提出 Tile-wise ELLPACK packing format 和针对现代 NVIDIA GPU 的 inference/training kernels，报告 billion-parameter model 上 forward execution 最高 20.5% speedup、training 最高 21.9% speedup，同时降低内存和能耗。关键点不是“稀疏性存在”，而是训练目标、数据格式和 kernel 共同设计后，稀疏计算才可能真正降低模型成本。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2064316981797421466)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2064316983743484104)

## 11/14 LlamaIndex 把 Fable 5 放进 ParseBench，并发布更细粒度溯源能力
LlamaIndex 在 Fable 5 发布当天做 ParseBench 测试，称其在文档理解中的 content faithfulness 达 90.02%，高于 Gemini 3 Flash 的 86.19% 和 GPT-5.5 的 86.81%；semantic formatting 达 72.62%，比两个对照高 12 个点以上。LlamaIndex 同日还发布 LlamaParse Granular Bounding Boxes，强调在合规、审计和财报抽取中，系统不仅要知道信息来自哪个文档，还要能定位到具体单词、行和表格单元。随着 frontier model 可承担更长知识工作，文档 agent 的瓶颈正在变成 faithfulness、formatting、grounding 和可审计溯源。
- [查看 @llama_index 原始推文](https://x.com/llama_index/status/2064502330800615903)
- [查看 @llama_index 原始推文](https://x.com/llama_index/status/2064355983292240066)

## 12/14 Pika MCP 推 Language Swap，把视频配音变成 agent skill
Pika 发布 Language Swap skill via Pika MCP，称用户可以把任意自拍视频中的讲话换成其他语言，并让画面看起来和听起来都像本人流利说目标语言。Linus Ekenstam 演示在 Claude Code 或 Codex 中安装 Pika MCP 后，运行 `/language-swap` skill、上传自拍视频、选择目标语言即可完成 Mandarin dubbing。与 Gemini Live Translate 面向实时通信不同，Pika 这里更偏创作者工作流：把视频生成、口型/声音处理和 agent skill 包装成可调用工具。MCP 让创意模型从独立网页产品进入开发者和创作者已有 agent 环境。
- [查看 @pika_labs 原始推文](https://x.com/pika_labs/status/2064408753139835091)
- [查看 @pika_labs 原始推文](https://x.com/pika_labs/status/2064408754431627727)
- [查看 @LinusEkenstam 原始推文](https://x.com/LinusEkenstam/status/2064472380999680354)
- [查看 @LinusEkenstam 原始推文](https://x.com/LinusEkenstam/status/2064472383646253235)

## 13/14 World model 与 agent loop 讨论转向可复现平台和质量门控
AlphaSignalAI 介绍 stable-worldmodel，称该开源平台把 world model 的 data collection、training 和 evaluation 放进同一 pipeline，提供 DINO-WM 等 baseline、planning solvers、5,000 samples/s 以上的数据流和 150+ environments，用于测试重力、摩擦、颜色、形状等 distribution shift。它同时连续评论 agent loop：真正有价值的不是让模型自动跑更多轮，而是定义 memory、tools、gates、stop rules、budget cap 和 human review。两组讨论共同指向一个方向：agent 和 world model 的下一阶段不是更炫 demo，而是可复现环境、可比较 eval、质量门控和停止条件。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2064364907722616841)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2064364909735874747)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2064333338437976287)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2064340898230538421)

## 14/14 AI 基础设施继续向中小企业、低延迟和开放网络扩展
Together AI 宣布与 Pax8 合作，把高性能、低成本 AI 和领先开源模型带给全球中小企业；同日还发布 Deep Cogito 案例，称对方 frontier reasoning models 需要在 1,000+ requests/min 下实现 sub-500ms time to first token。NVIDIA 转发 OpenEnv 将由 Hugging Face、Meta PyTorch、Reflect Orbital 等共同拥有的消息，指向开放 AI 环境标准化。Databricks 则发布 Spark Real-Time Mode + Lakebase fraud detection accelerator，强调 sub-second fraud intervention。当天基础设施信号很一致：模型能力之外，分发、低延迟、开放环境、实时数据和企业运行治理正在成为 AI 落地竞争点。
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2064395307799162897)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2064420807653331262)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2064420809146564669)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2064342594466005111)
- [查看 @databricks 原始推文](https://x.com/databricks/status/2064470034030657719)

---

## Deep Dive 附录

### Claude Fable 5 and Claude Mythos 5
Anthropic 把 Fable 5 描述为面向 hardest knowledge work and coding problems 的下一代模型，并把它和更受限的 Mythos 5 放在同一系统卡中解释。Fable 5 的公开叙事重点是：Mythos-class 能力已经跨过重要风险阈值，但 Anthropic 认为新的 safeguards 足以让大多数通用工作开放使用；高风险请求会被阻断或回退。外部早测反馈覆盖 CursorBench、FrontierBench、Claude Code、analytics、finance、physics、spreadsheet 和 design/prototyping，说明 Anthropic 把它定位为长周期 agentic work 模型，而不是普通聊天模型。同步争议集中在访问策略、价格、data retention、安全限制和是否会让高端 coding agent 成本显著上升。
[查看原文](https://www.anthropic.com/news/claude-fable-5-mythos-5)

### Gemini 3.5 Live Translate
Google 的发布文章强调 Gemini 3.5 Live Translate 是流式 speech-to-speech 模型，目标是在多人通话、会议、课程、广播和旅行场景中减少语言阻隔。它会自动检测 70+ 语言，边听边翻译，尽量保持说话者的语调、节奏和音高，并通过 SynthID 对生成音频加水印。产品分发路径很完整：开发者通过 Gemini Live API 和 AI Studio public preview 构建应用，Google Translate 面向 Android/iOS 全球推出，Google Meet 面向 Workspace 企业 private preview。它同时展示了 Google 多模态模型进入通信基础设施的方式：不是单独 app，而是 API、Translate 和 Meet 三条线并行。
[查看原文](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/)

### Cohere North Mini Code
Cohere 在 Hugging Face 上发布 North Mini Code，选择 30B total / 3B active MoE 结构和 Apache 2.0 许可，明显与高端闭源 coding model 区分。博客强调它面向 agentic software engineering，训练时考虑多个 agent harness，而不是只优化单一 benchmark；架构使用 interleaved sliding-window attention 和 full attention，MoE block 有 128 experts、每 token 激活 8 个。后训练包含 SFT 和 RLVR，目标是让模型在终端任务、代码修改和真实 agent scaffolds 中更稳。它的意义不只是一个新模型，而是给企业和开发者提供可审计、可本地运行、成本更可控的 coding agent 基座。
[查看原文](https://huggingface.co/blog/CohereLabs/introducing-north-mini-code)

### xAI / Gopuff Go
xAI 的 Gopuff Go 页面把该项目描述为 Grok 进入 instant commerce 的应用：chat、voice 和 image models 与 Gopuff 商品、订单和库存系统结合，用户可通过对话、语音和视觉 feed 形成购物车。Gopuff 公告进一步强调，它利用 13 年订单数据、数亿订单和来自 X 的实时文化信号进行个性化。Go 会在每次订单后学习，以便下一次更快预测需求。相比传统电商推荐，Go 的差异在于它尝试直接执行购物流程，既生成商品场景，也主动构建订单。这类 consumer agent 的关键挑战将是隐私、偏好更新、库存准确性、品牌排序、公平推荐和用户对自动下单边界的控制。
[查看原文](https://x.ai/news/grok-gopuff)

### Arcee AI x Hugging Face
Arcee AI 称 Hugging Face Hub 将成为其所有模型、数据集和 agent traces 的独家存储位置，覆盖公开和私有资产。这表明 Hugging Face 的角色正在从模型社区扩展到 AI artifact storage layer。Arcee 给出的理由很工程化：团队小，研究和产品迭代需要工程师熟悉的统一存储；训练计算可以在不同云上选择，但模型权重和数据不应被单一云对象存储绑定；Hugging Face Buckets 提供 per-TB storage、egress 和 CDN included，适合权重、数据集和 traces 这类 AI 原生资产。这个案例也强化了“开放模型生态需要自己的基础设施”的行业叙事。
[查看原文](https://www.arcee.ai/blog/why-we-made-hugging-face-the-home-for-everything-we-build)

### Sparser, Faster, Lighter Transformer Language Models
这篇论文的核心是把 transformer 中大量 feed-forward layer 的 unstructured sparsity 变成真实 GPU 速度收益。作者指出，过去稀疏性常停留在理论上，因为 GPU 优化路径偏向 dense computation，跳过零值不一定更快。论文提出 TwELL packing format，并设计 modern NVIDIA GPU kernels，让稀疏表示可在高效矩阵乘法 epilogue 中自然形成，减少 packing overhead；inference kernels 还融合多个 matrix multiplications，training kernels 则降低 sparse activation storage 成本。最终报告 forward execution 和 training 约 20% 级别加速，同时减少内存和能耗。对 LLM 成本曲线来说，这代表除量化、蒸馏、MoE 之外的另一条系统协同路线。
[查看原文](https://arxiv.org/html/2603.23198v1)

### Microsoft Project Ex Vivo
Microsoft 的 Project Ex Vivo 把 AI 用在癌症 cell state 理解上，而不是只做 mutation 分类。文章解释，类似突变的癌症患者可能对同一药物反应完全不同，关键原因之一是肿瘤细胞的行为状态和微环境不同。Project Ex Vivo 使用计算模型先运行 virtual experiments，找出最值得湿实验验证的假设；团队认为，如果能可靠测量 cell state，未来可用于更精确地把患者匹配到已有疗法、改进临床试验分组，并探索把肿瘤推向更易治疗状态的新药物策略。文章中特别重要的一点是：AI 模型从 cell behavior diversity 学到的东西，可能比单纯扩大数据量更关键。
[查看原文](https://news.microsoft.com/signal/articles/why-dont-cancer-medicines-work-the-same-for-everyone-ex-vivo/)
