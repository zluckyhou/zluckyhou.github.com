---
layout: daily
title: "AI Frontier Daily | 2026.06.25"
headline: "OpenAI 发布首款自研 AI 芯片 Jalapeño"
date: 2026-06-25 09:07:00 +0800
permalink: /ai-daily/2026/06/25/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "OpenAI 宣布已经设计并生产首款 AI 芯片 Jalapeño，由 OpenAI 从零设计，并与 Broadcom 推进到生产阶段。官方称 Jalapeño 面向 ChatGPT、Codex、API 和未来 agentic products 背后的 LLM workload，目标是把 OpenAI 的全栈平台从产品、模型继续延伸到基础设施。Greg Brockman 补充说，这颗芯片面向 LLM inference，设计周期约九个月，并使用模型加速设计过程。信号很清楚：frontier lab 的竞争正在进入自有推理芯片、供应链和单位算力成本层。"
summary: "OpenAI 宣布已经设计并生产首款 AI 芯片 Jalapeño，由 OpenAI 从零设计，并与 Broadcom 推进到生产阶段。官方称 Jalapeño 面向 ChatGPT、Codex、API 和未来 agentic products 背后的 LLM workload，目标是把 OpenAI 的全栈平台从产品、模型继续延伸到基础设施。Greg Brockman 补充说，这颗芯片面向 LLM inference，设计周期约九个月，并使用模型加速设计过程。信号很清楚：frontier lab 的竞争正在进入自有推理芯片、供应链和单位算力成本层。"
issue_count: 14
deep_dive_count: 7
reading_time: 17
cover: "https://opengraph.githubassets.com/ai-frontier-daily-20260625/QwenLM/Qwen-AgentWorld"
signals: "OpenAI · gdb · Alibaba_Qwen · cursor_ai · NVIDIAAI · perplexity_ai · SakanaAILabs · hardmaru"
header-img: img/dark_yellow_400.png
---


## 1/14 OpenAI 发布首款自研 AI 芯片 Jalapeño
OpenAI 宣布已经设计并生产首款 AI 芯片 Jalapeño，由 OpenAI 从零设计，并与 Broadcom 推进到生产阶段。官方称 Jalapeño 面向 ChatGPT、Codex、API 和未来 agentic products 背后的 LLM workload，目标是把 OpenAI 的全栈平台从产品、模型继续延伸到基础设施。Greg Brockman 补充说，这颗芯片面向 LLM inference，设计周期约九个月，并使用模型加速设计过程。信号很清楚：frontier lab 的竞争正在进入自有推理芯片、供应链和单位算力成本层。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/OpenAI/status/2069770172802773292" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a><a class="source-chip" href="https://x.com/gdb/status/2069809298612621629" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a></div>

## 2/14 OpenAI 推出更会对话的 GPT-5.5 Instant
OpenAI 宣布 GPT-5.5 Instant 新版本开始向 paid users 推出，并将在次日面向 free users。官方描述的重点不是单项 benchmark，而是对话体验：更能理解问题意图并调整回答方式，更可靠地处理复杂约束，也让购物和本地推荐更连贯。Greg Brockman 同步称这是 GPT-5.5 Instant 的一次大改进，特点是“much more fun to talk to”。这说明高频默认模型的竞争继续从原始能力扩展到意图识别、约束遵循、推荐场景和日常使用手感。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/OpenAI/status/2069843083701915755" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a><a class="source-chip" href="https://x.com/gdb/status/2069845493199597944" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a></div>

## 3/14 Qwen-AgentWorld 把环境建模变成 agent 训练目标
阿里 Qwen 发布 Qwen-AgentWorld，定位为 native language world model，可以在单一模型内模拟 MCP、Search、Terminal、SWE、Web、OS、Android 七类 agent 环境。它的核心不是让 LLM 在真实环境里盲目 trial-and-error，而是先学习环境转移、状态追踪和多步因果，再用于 agent 训练和能力迁移。Qwen 同时开源 Qwen-AgentWorld-35B-A3B、AgentWorldBench、论文、博客、GitHub 和 Hugging Face 资源，并披露 397B-A17B 在 AgentWorldBench 上达到 58.71 的总体分数。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Alibaba_Qwen<span class="source-chip__links"><a href="https://x.com/Alibaba_Qwen/status/2069720365442719867" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 1">1</a><a href="https://x.com/Alibaba_Qwen/status/2069720389140570119" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 2">2</a><a href="https://x.com/Alibaba_Qwen/status/2069720412481888400" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 3">3</a></span></span></div>

## 4/14 Cursor 让 Notion spec 直接变成云端 coding agent 任务
Cursor 宣布用户现在可以在 Notion 中直接把任务委派给 Cursor：在 spec 中 @Cursor 或分配任务后，云端 agent 会基于同一套 Cursor SDK、模型、harness 和 runtime 执行，并打开可供团队 review 的 PR。这个集成把 coding agent 从 IDE 内部工具推进到团队协作文档和产品规格入口。它的意义在于，agent 接收任务的位置开始靠近真实工作流：Notion 中的需求、上下文、负责人和验收讨论，可以直接触发代码变更，而不是再人工搬运到开发工具。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai<span class="source-chip__links"><a href="https://x.com/cursor_ai/status/2069872515548340407" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 1">1</a><a href="https://x.com/cursor_ai/status/2069872516945113113" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 2">2</a></span></span></div>

## 5/14 NVIDIA VSS 3 把视频搜索总结包装成 coding agent 可调用技能
NVIDIA 发布 Metropolis Blueprint for video search and summarization 3，强调 coding agent 可以用自然语言分析大规模 live streams 和视频库。VSS 3 包含 16 个 agent skills，覆盖 search、summarize、alert、report、review clips 等任务，并提供统一开源 repo、Docker 和 Helm 部署配置。它还加入 multi-video reports、Nemotron 3 Nano Omni 的音视频洞察，以及 production-ready 的 3D multi-camera tracking。视频理解正在从 demo 模型变成可部署、可编排、可被 agent 调用的企业技能包。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/NVIDIAAI/status/2069858097930121319" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI</a></div>

## 6/14 NVIDIA NeMo AutoModel 面向 MoE 训练吞吐做系统优化
NVIDIA 介绍 NeMo AutoModel，称其建立在 Hugging Face Transformers v5 对 MoE 支持之上，为多种模型家族加入 Expert Parallelism、DeepEP 和 TransformerEngine kernels 等优化。NVIDIA 表示，在热门 MoE 模型上，NeMo AutoModel 可带来 3.4 到 3.7 倍训练吞吐提升。这里的重点是开源模型训练继续向系统工程深入：MoE 架构带来专家并行、通信、显存和 kernel 组合问题，训练框架需要把这些能力包装成少量代码即可启用的生产路径。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/NVIDIAAI/status/2069813582825418828" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI</a></div>

## 7/14 Perplexity 推出面向法律工作流的 Computer for Counsel
Perplexity 发布 Computer for Counsel，称 Computer 现在可以连接律师日常使用的 research databases、document tools 和 matter-management systems。官方提到的集成包括 Midpage AI、LegalZoom、DocuSign、NetDocuments 等，产品面向 Pro 和 Max subscribers。这个更新说明“AI computer”路线正在垂直化：不只是通用浏览器代理，而是进入有明确资料来源、文档流转、案件管理和引用责任的专业行业。法律场景的关键会落在可引用来源、权限边界、审计和人类复核。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@perplexity_ai<span class="source-chip__links"><a href="https://x.com/perplexity_ai/status/2069866668671766804" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 1">1</a><a href="https://x.com/perplexity_ai/status/2069866680965357654" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 2">2</a></span></span></div>

## 8/14 Sakana Fugu-Ultra 上线 OpenRouter，继续押注多模型编排
Sakana AI 宣布 Fugu-Ultra 已上线 OpenRouter，并重申未来 AI 不会只由单个 monolithic model 主导，而是由多个模型的 collective intelligence 组成。结合此前 Fugu 的定位，这条消息把多模型 orchestration 从研究叙事推进到更广泛的开发者分发渠道。OpenRouter 上线意味着开发者可以更容易把 Fugu-Ultra 接入已有调用链，并在同一平台比较不同模型、路由策略和复杂任务表现。Sakana 的路线代表一种不同于单模型 scaling 的 frontier 竞争方式。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs<span class="source-chip__links"><a href="https://x.com/SakanaAILabs/status/2069811015152493052" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 1">1</a><a href="https://x.com/SakanaAILabs/status/2069956240743039185" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/hardmaru/status/2069815056511160598" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a></div>

## 9/14 Google DeepMind 讨论 agentic economies 与 AI groupthink
Google DeepMind 在 podcast 中讨论 agentic economies：当数百万 AI agents 开始彼此谈判、交易、委派任务时，系统如何避免决策同质化和 groupthink。节目主题覆盖 agent 定义、科学研究中的 agentic exploration、agent 间委派、安全陷阱、经济系统构建、cognitive monoculture 和分散式 decision-making。相比单个 agent 能否完成任务，这类讨论关注的是多 agent 大规模互动后的市场结构、风险传播和机制设计，也说明 labs 正在把 agent 问题从产品功能推进到社会技术系统层面。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GoogleDeepMind<span class="source-chip__links"><a href="https://x.com/GoogleDeepMind/status/2069785314663497966" target="_blank" rel="noopener" aria-label="@GoogleDeepMind 原文 1">1</a><a href="https://x.com/GoogleDeepMind/status/2069785318887174217" target="_blank" rel="noopener" aria-label="@GoogleDeepMind 原文 2">2</a></span></span></div>

## 10/14 Kimi API 登陆 AWS Marketplace，模型分发进入云采购体系
Moonshot Kimi 宣布 Kimi API 已在 AWS Marketplace 上线。官方强调，已在 AWS 上运行的团队可以通过 consolidated billing 使用 Kimi，并且符合条件的客户可以把 Kimi API 用量计入 AWS EDP commitments。这类渠道更新本身不是模型能力突破，但对企业采用很重要：采购、账单、承诺消费、合规供应商管理和云预算归集，往往决定一个外部模型能否进入生产系统。模型竞争正在从 API 可用性扩展到云市场、合同结构和企业采购摩擦。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/Kimi_Moonshot/status/2069718757338202140" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Kimi_Moonshot</a></div>

## 11/14 Runway 推出广告本地化工作流
Runway 发布 ad localization workflow，允许用户输入一张广告图，并一键生成面向不同市场和语言的版本。与单纯生成图片或视频不同，这个功能更接近营销生产流程：同一创意资产需要被翻译、重排、适配不同地区，并保持品牌一致性和交付速度。Runway 把能力包装成 app workflow，也说明 AI media 工具正在从“创作一个片段”转向“解决具体生产任务”。对商业团队来说，真正的价值不只在画质，而在多市场投放、版本管理和交付效率。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml<span class="source-chip__links"><a href="https://x.com/runwayml/status/2069796562805440964" target="_blank" rel="noopener" aria-label="@runwayml 原文 1">1</a><a href="https://x.com/runwayml/status/2069897794471485920" target="_blank" rel="noopener" aria-label="@runwayml 原文 2">2</a></span></span></div>

## 12/14 Hugging Face 生态继续围绕低延迟与边缘推理扩张
Hugging Face CEO Clement Delangue 连续转发 Qualcomm 相关发布，并提到 Kog 开源了一个 2B 模型，其展示目标是 3000+ tokens per second。Kog 的 Hugging Face 博文把模型称为 latency-first model，重点放在极高输出速度而非单纯参数规模。结合 Qualcomm 现场“one more thing”的信号，开源 AI 生态正在把注意力放到端侧、低延迟和成本可控推理。对于 agent、实时 UI 和本地应用，tokens/sec、功耗和部署位置会和模型质量同样关键。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue<span class="source-chip__links"><a href="https://x.com/ClementDelangue/status/2069839095577084364" target="_blank" rel="noopener" aria-label="@ClementDelangue 原文 1">1</a><a href="https://x.com/ClementDelangue/status/2069872844851306775" target="_blank" rel="noopener" aria-label="@ClementDelangue 原文 2">2</a><a href="https://x.com/ClementDelangue/status/2069903426654212447" target="_blank" rel="noopener" aria-label="@ClementDelangue 原文 3">3</a></span></span></div>

## 13/14 LangSmith Engine 展示 agent memory 的“睡眠时间计算”
LangChain 团队围绕 LangSmith Engine 展示 agent memory workflow：先记录 agent trajectories，再用后台过程分析 traces、建议 memory updates，最后写入 Context Hub。Harrison Chase 将其概括为 agent memory 的三步流程，并称这类机制常被描述为 sleep time compute 或 dreaming。重点在于 agent 不应只是留下 traces，而要能跨运行学习、整理经验并更新长期记忆。随着企业 agent 使用增加，memory、trace、评估和可控更新会成为 agent runtime 的基础组件。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17<span class="source-chip__links"><a href="https://x.com/hwchase17/status/2069856656335556766" target="_blank" rel="noopener" aria-label="@hwchase17 原文 1">1</a><a href="https://x.com/hwchase17/status/2069857129272627626" target="_blank" rel="noopener" aria-label="@hwchase17 原文 2">2</a></span></span></div>

## 14/14 Together 强调 open models 生产采用与 agentic coding 推理需求
Together AI 发文称 400T tokens 是 production adoption 的信号，团队正在把真实 workload 迁移到 open models，因为他们需要 frontier quality、更好的 token economics 和更强的 inference 控制。它还宣布将在 AI Engineer World’s Fair 举办 workshop，主题是 agentic coding 改变 inference engines 需要处理的负载形态。这里的重点是 agent 时代的推理基础设施不只是吞吐，还包括长上下文、多轮工具调用、并发任务、成本治理和对 open model 的服务能力。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute<span class="source-chip__links"><a href="https://x.com/togethercompute/status/2069611947679728053" target="_blank" rel="noopener" aria-label="@togethercompute 原文 1">1</a><a href="https://x.com/togethercompute/status/2069611949487448200" target="_blank" rel="noopener" aria-label="@togethercompute 原文 2">2</a><a href="https://x.com/togethercompute/status/2069827913378140627" target="_blank" rel="noopener" aria-label="@togethercompute 原文 3">3</a></span></span></div>

---

## Deep Dive 附录

### OpenAI Jalapeño / GPT-5.5 Instant
OpenAI 把 Jalapeño 定位为面向 LLM workload 的自研推理芯片，服务 ChatGPT、Codex、API 和未来 agentic products。与 Broadcom 合作推进生产后，OpenAI 的平台边界从产品、模型延伸到硬件基础设施。Greg Brockman 称 Jalapeño 用九个月从零设计，并由模型辅助设计。当天 OpenAI 还更新 GPT-5.5 Instant，强调意图理解、复杂约束遵循和购物/本地推荐体验。这两条结合起来看，是“更常用的默认模型”与“更可控的推理底座”同步推进。
[查看原文](https://x.com/OpenAI/status/2069770172802773292)

### Qwen-AgentWorld
Qwen-AgentWorld 的核心命题是让模型学习环境本身，而不只是学习在环境中行动。它覆盖 MCP、Search、Terminal、SWE、Web、OS、Android 七类 agent 环境，并通过 AgentWorldBench 评估环境预测和 agent capability 迁移。Qwen 公布的路线包括两部分：作为可控 simulator 支持 agentic RL，以及把 world modeling 内化为 agent foundation model。官方披露的 benchmark 显示，Qwen-AgentWorld-397B-A17B 总分 58.71，Qwen-AgentWorld-35B-A3B 相比基础模型提升 8.66 分。
[查看原文](https://qwen.ai/blog?id=qwen-agentworld)

### NVIDIA VSS 3 / NeMo AutoModel
NVIDIA VSS 3 把视频搜索、总结、告警、报告和片段复核包装成 agent skills，并提供开源 repo、Docker、Helm 和多视频报告能力。它面向的是企业视频库和 live stream，而不是一次性视频 demo。NeMo AutoModel 则解决 MoE 训练的系统问题，建立在 Transformers v5 之上，通过 Expert Parallelism、DeepEP 和 TransformerEngine kernels 提升吞吐。NVIDIA 称热门 MoE 模型训练吞吐提升 3.4 到 3.7 倍，说明模型竞争越来越依赖训练和部署框架的工程效率。
[查看原文](https://github.com/NVIDIA-AI-Blueprints/video-search-and-summarization/tree/main/skills)

### Cursor × Notion
Cursor 的 Notion 集成把需求入口从 IDE 扩展到团队协作文档。用户可以在 Notion spec 中 @Cursor 或分配任务，Cursor 云端 agent 会基于 Cursor SDK、模型、harness 和 runtime 执行，并创建可 review 的 PR。这个功能的战略意义在于让 coding agent 更接近团队真实任务流：产品规格、上下文、评论、负责人和代码改动之间的边界变短。它也展示了 SDK 化后的 Cursor 不只是编辑器功能，而是一套可嵌入外部工作系统的 agent runtime。
[查看原文](https://cursor.com/blog/notion)

### Perplexity Computer for Counsel
Computer for Counsel 把 Perplexity Computer 接入法律行业常用系统，包括研究数据库、文档工具和 matter-management systems。官方列出的集成包含 Midpage AI、LegalZoom、DocuSign 和 NetDocuments。法律场景与普通浏览器自动化不同：答案需要可引用来源，文档处理需要权限控制，案件上下文需要审计和保密，最终建议也必须有专业人员复核。这条发布说明垂直 agent 产品会优先进入高信息密度、高文档负担、但也高合规要求的专业工作流。
[查看原文](https://x.com/perplexity_ai/status/2069866668671766804)

### Sakana Fugu-Ultra on OpenRouter
Sakana Fugu-Ultra 上线 OpenRouter 后，多模型编排路线获得了更直接的开发者分发渠道。Sakana 的叙事不是训练一个最大模型，而是让系统调用、路由、验证和综合多个专家模型，形成可替换、可扩展的 agent pool。OpenRouter 的平台属性让开发者更容易在同一 API 生态里比较模型、组合 provider，并把 Fugu-Ultra 放入已有应用。它延续了最近关于 model council、model routing 和 AI sovereignty 的讨论：能力可以来自模型组合，而不是单点依赖。
[查看原文](https://openrouter.ai/sakana/fugu-ultra)

### Runway Ad Localization
Runway 的广告本地化 workflow 面向营销资产生产：一张广告图输入后，可以生成不同语言和市场版本。这个功能的行业意义不在于单张图像生成，而在于把生成式模型嵌入明确的商业交付步骤，包括翻译、版式适配、多区域投放和品牌一致性。类似功能会让 AI media 工具从创意探索进入运营流程，衡量标准也会从“效果是否惊艳”转向“能否稳定生成多版本、减少人工返工、适配投放系统”。
[查看原文](https://app.runwayml.com/?workflowAppId=ad-localization)
