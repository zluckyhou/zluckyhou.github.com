---
layout: daily
title: "AI Frontier Daily | 2026.03.27"
headline: "Gemini 3.1 Flash Live：Google 最强语音模型发布"
date: 2026-03-27 09:07:00 +0800
permalink: /ai-daily/2026/03/27/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Google DeepMind 正式发布 Gemini 3.1 Flash Live，定位为新一代实时语音与视觉智能体基础模型。相比 2.5 Flash Native Audio，新模型在延迟、可靠性和自然对话质量上实现了阶跃式提升：支持 90 余种语言实时多模态对话，能有效过滤背景噪音（如交通声、电视声），具备更强的函数调用能力以及对复杂系统指令的高度遵从性。在 Gemini Live 应用中，用户将体验到更快的响应速度、更少的尴尬停顿，以及长达原来两倍的对话上下文保持能力。新模型已在 Gemini API 和 Google AI Studio 上线，Search Live 同步在全球 200+ 国家开放音视频功能。音频输出内嵌 SynthID 水印用于 AI 生成内容标识。"
summary: "Google DeepMind 正式发布 Gemini 3.1 Flash Live，定位为新一代实时语音与视觉智能体基础模型。相比 2.5 Flash Native Audio，新模型在延迟、可靠性和自然对话质量上实现了阶跃式提升：支持 90 余种语言实时多模态对话，能有效过滤背景噪音（如交通声、电视声），具备更强的函数调用能力以及对复杂系统指令的高度遵从性。在 Gemini Live 应用中，用户将体验到更快的响应速度、更少的尴尬停顿，以及长达原来两倍的对话上下文保持能力。新模型已在 Gemini API 和 Google AI Studio 上线，Search Live 同步在全球 200+ 国家开放音视频功能。音频输出内嵌 SynthID 水印用于 AI 生成内容标识。"
issue_count: 15
deep_dive_count: 6
reading_time: 14
cover: "https://lh3.googleusercontent.com/IbQr5NJiHJNVrYLFyxfRaD_Gue8GpLy5Z0J2A_R5LRo8gZYDZpBd5YflVFNVBMEsQ=rw-e365"
signals: "GoogleDeepMind · demishassabis · OfficialLoganK · MistralAI · fchollet · AIatMeta · SakanaAILabs · hardmaru"
header-img: img/dark_yellow_400.png
---


## 1/15 Gemini 3.1 Flash Live：Google 最强语音模型发布
Google DeepMind 正式发布 Gemini 3.1 Flash Live，定位为新一代实时语音与视觉智能体基础模型。相比 2.5 Flash Native Audio，新模型在延迟、可靠性和自然对话质量上实现了阶跃式提升：支持 90 余种语言实时多模态对话，能有效过滤背景噪音（如交通声、电视声），具备更强的函数调用能力以及对复杂系统指令的高度遵从性。在 Gemini Live 应用中，用户将体验到更快的响应速度、更少的尴尬停顿，以及长达原来两倍的对话上下文保持能力。新模型已在 Gemini API 和 Google AI Studio 上线，Search Live 同步在全球 200+ 国家开放音视频功能。音频输出内嵌 SynthID 水印用于 AI 生成内容标识。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/GoogleDeepMind/status/2037190678883524716" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GoogleDeepMind</a><a class="source-chip" href="https://x.com/demishassabis/status/2037241441152590056" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@demishassabis</a><a class="source-chip" href="https://x.com/OfficialLoganK/status/2037187750005240307" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OfficialLoganK</a></div>

## 2/15 Mistral Voxtral TTS：开源文字转语音模型，宣称超越 ElevenLabs
Mistral AI 发布 Voxtral TTS，一款 4B 参数的开源文字转语音模型，支持英语、法语、德语、西班牙语、荷兰语、葡萄牙语、意大利语、印地语和阿拉伯语共 9 种语言。模型可凭借最短 3 秒参考音频实现声音克隆，保留口音、语调等语音特征，并支持情感控制以生成更有表现力的语音。人工评测显示，Voxtral TTS 在自然度上超越 ElevenLabs Flash v2.5，在质量上与 ElevenLabs v3 持平。模型以 Creative Commons 许可证在 Hugging Face 开放下载，并支持在 Mistral Studio、Le Chat 及边缘设备（手机、笔记本、可穿戴设备）上部署。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/MistralAI/status/2037183026539483288" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@MistralAI</a></div>

## 3/15 ARC-AGI-3 发布：人类 100% 解决，最佳 AI 仅得 0.37 分
ARC Prize 基金会于 3 月 24 日发布 ARC-AGI-3，这是首个完全交互式 AGI 评测基准。与前两版静态推理测试不同，ARC-AGI-3 要求 AI 智能体在无任何规则或目标说明的情况下，探索全新环境、自主建立世界模型、推断胜利条件并完成多关卡任务。评测指标为"相对人类行动效率"（RHAE），衡量 AI 完成任务所用步骤数与人类最佳表现之比。当前结果令人震惊：人类可 100% 通关所有环境，而最佳 AI 模型（Gemini 3.1 Pro）仅得 0.37%。François Chollet 表示 ARC-AGI-4 将于 2027 年初发布，维持年度发布节奏。ARC Prize 2026 设有 200 万美元奖金。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet<span class="source-chip__links"><a href="https://x.com/fchollet/status/2037132780505624867" target="_blank" rel="noopener" aria-label="@fchollet 原文 1">1</a><a href="https://x.com/fchollet/status/2037220366414995946" target="_blank" rel="noopener" aria-label="@fchollet 原文 2">2</a></span></span></div>

## 4/15 Meta TRIBE v2：预测人类大脑对视觉、声音、语言响应的基础模型
Meta AI 发布 TRIBE v2（Trimodal Brain Encoder），这是一个经过 700+ 名被试、500+ 小时 fMRI 数据训练的大脑响应预测基础模型。无需重新训练，TRIBE v2 可对从未见过的个体和未见语言进行可靠的神经响应预测，在电影和有声书任务上实现了 2-3 倍于现有方法的提升。该模型可在无需实际 fMRI 实验的情况下支持数千次虚拟实验，将加速脑机接口（BCI）开发和神经系统疾病研究。Meta 已开放模型权重、代码库、论文和演示供全球科研机构使用。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AIatMeta/status/2037153756346016207" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AIatMeta</a></div>

## 5/15 Sakana AI 的 AI Scientist 论文发表于 Nature
Sakana AI 与 UBC、牛津大学合作的 AI Scientist 研究正式在 Nature 发表，这是首个通过顶级 ML 会议研讨会同行评审的全 AI 生成论文。AI Scientist 系统可接收宽泛的研究方向后，自主生成研究想法、搜索文献、设计并运行实验（通过并行智能体树搜索）、分析数据并撰写完整的 LaTeX 论文。论文还揭示了 AI 科研能力的明确扩展规律（scaling law）。Sakana AI 同步宣布获得三菱电机战略投资，将结合制造业深度领域知识与 Sakana AI 的最前沿 AI 技术，推进工业 AI 落地。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/SakanaAILabs/status/2037118877612859545" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs</a><a class="source-chip" href="https://x.com/hardmaru/status/2037123533357408415" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a></div>

## 6/15 Cohere Transcribe：Apache 2.0 开源语音识别模型挑战 Whisper
Cohere 发布 cohere-transcribe-03-2026，2B 参数开源语音识别模型，采用 Apache 2.0 许可证，支持 14 种语言，在 Hugging Face Open ASR 榜单上以平均词错误率（WER）5.42 位居第一，胜过 Zoom Scribe、ElevenLabs Scribe v2、IBM Granite 等竞品。模型面向企业和开发者，可通过 Cohere API 免费调用，亦可在消费级 GPU 上自托管，并将集成到 Cohere 企业智能体平台 North。Clem Delangue 表示这是真正的开源 AI，没有研究专用限制，代表了北美开源 AI 领先者的实力。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cohere/status/2037159129345614174" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cohere</a><a class="source-chip" href="https://x.com/ClementDelangue/status/2037314357311295918" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue</a></div>

## 7/15 Cursor Composer 2：每五小时一次实时强化学习迭代
Cursor 发布 Composer 2 技术报告并分享了训练方法：通过实时强化学习（Real-time RL），新模型检查点每五小时就能发布一个改进版本，大幅加快了 AI 编程助手的迭代速度。Karpathy 同日评论称，一年前自己构建 menugen 时，最难的部分不是代码本身，而是拼接服务、支付、认证、数据库、安全、域名等 DevOps 基础设施。他感叹此类平台正在快速改善，暗示全栈开发门槛持续降低。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cursor_ai/status/2037205514975629493" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai</a><a class="source-chip" href="https://x.com/karpathy/status/2037200624450936940" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@karpathy</a></div>

## 8/15 Luma Uni-1：统一多模态理解与生成的新模型
Luma Labs 发布 Uni-1，一款将图像理解和生成统一于同一模型的多模态模型，由约 15 人团队历时数月研发。Uni-1 在可方向性（执行精确局部编辑）、智能性（生成高密度信息设计和版式控制）、审美性（跨光线、颜色、纹理和艺术风格统一美学）三方面均有出色表现。同日，Luma Dream Brief 创意大赛（$1M 奖金）截止报名，针对广告行业创意人员。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LumaLabsAI<span class="source-chip__links"><a href="https://x.com/LumaLabsAI/status/2037243186817470808" target="_blank" rel="noopener" aria-label="@LumaLabsAI 原文 1">1</a><a href="https://x.com/LumaLabsAI/status/2037228086975246383" target="_blank" rel="noopener" aria-label="@LumaLabsAI 原文 2">2</a></span></span></div>

## 9/15 Suno v5.5：更具表现力的个性化音乐生成
Suno 发布 v5.5 版本，重点提升了音乐生成的个性化和表现力：用户可使用自己的声音、音效偏好和音乐品味创作专属音乐，打造"最个人化的 Suno 体验"。v5.5 在情感表达和风格一致性方面相比此前版本有明显提升。此次更新进一步巩固了 Suno 在 AI 音乐生成赛道的头部地位。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/suno/status/2037244702693445878" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@suno</a></div>

## 10/15 OpenAI Codex 推出插件系统
OpenAI 宣布在 Codex 中推出插件（plugins）功能，Codex 现可无缝集成最常用的开发者工具，面向 AI 编程工具生态进一步开放。此次更新是 OpenAI 持续强化 Codex 作为 AI 原生开发环境战略的一部分。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/OpenAI/status/2037298931907084568" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a></div>

## 11/15 Runway Multi-Shot App：从提示词到完整场景的一键视频创作
Runway 推出 Multi-Shot App，允许用户从一段简单的文字提示生成包含对话、音效、剪辑节奏和电影构图的完整场景。用户可从图片启动或纯文字转视频，支持全创意探索。Multi-Shot 将此前需要专业视频后期知识的工作流程大幅简化，降低视频内容创作门槛。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/runwayml/status/2037170118669500537" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml</a></div>

## 12/15 Google DeepMind 研究：AI 对话可能被滥用于情感操控
Google DeepMind 发布新研究，探讨 AI 自然对话能力提升带来的社会风险：随着 AI 越来越善于进行情感性对话，存在被滥用于情感操控、诱导用户做出有害决策的潜在风险。研究旨在为相关监管和安全机制提供实证依据，提醒行业在推进对话 AI 能力的同时关注伦理边界。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/GoogleDeepMind/status/2037224585431498831" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GoogleDeepMind</a></div>

## 13/15 Chroma Context-1：200 亿参数搜索智能体
Chroma 发布 Context-1，一个 200 亿参数的搜索智能体，宣称在智能体搜索的帕累托前沿上实现了数量级的能力提升。LlamaIndex CEO Harrison Chase（LangChain）等多位业内人士转发，显示社区对这一方向的高度关注。同日 LangChain 发布 LangSmith Fleet 对 Microsoft 365 工具的支持，LlamaIndex 也推出了 LiteParse 文档解析器的视觉引用功能（bounding box 提取）。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/ClementDelangue/status/2037328355213676779" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue</a><a class="source-chip" href="https://x.com/hwchase17/status/2037289888920514935" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17</a></div>

## 14/15 Scale AI 与 BAE Systems 合作，推进美国国防 AI 部署
Scale AI 宣布与 BAE Systems 建立新合作，为美国国防部最先进的平台和系统引入 AI 能力。这是 Scale AI 在政府和国防领域持续扩张的又一重要里程碑，也反映出 AI 能力向关键基础设施和国防领域加速渗透的行业趋势。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/scale_AI/status/2037230238170833177" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@scale_AI</a></div>

## 15/15 开源 AI 加速渗透企业，Clem Delangue：美国开源 AI 的巨大机会
Hugging Face CEO Clem Delangue 指出，继 Pinterest、Airbnb、Notion、Cursor 之后，Intercom 公开表示发现自行训练和使用开源模型在许多任务上比调用 API 更好、更快、更便宜，且数百家企业在静悄悄地做同样的事。他呼吁美国更多初创公司和大型科技公司抓住开源 AI 的市场机会，并表示 AI 内容产量将很快超越所有人类内容创作总量（Elon Musk 同观点）。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue<span class="source-chip__links"><a href="https://x.com/ClementDelangue/status/2037231932216693005" target="_blank" rel="noopener" aria-label="@ClementDelangue 原文 1">1</a><a href="https://x.com/ClementDelangue/status/2037234922927128900" target="_blank" rel="noopener" aria-label="@ClementDelangue 原文 2">2</a></span></span></div>

---

## Deep Dive 附录

### Gemini 3.1 Flash Live 技术详情
Google 于 3 月 26 日推出 Gemini 3.1 Flash Live，定位为实时语音与视觉智能体的基础设施级模型。核心改进：1）声学感知升级——能识别音调、语速等细微差异，有效区分目标语音和环境噪音；2）延迟大幅降低——相比上代 2.5 Flash Native Audio 实现显著改善；3）多语言支持——90+ 种语言实时多模态对话；4）工具调用增强——可在实时对话中触发外部工具并传递信息；5）系统指令遵从性提升。全球 Gemini Live 应用用户已可使用，Search Live 在 200+ 国家开放。所有音频输出均内嵌 SynthID 水印。
[查看原文](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-live/)

### ARC-AGI-3 全新交互式 AGI 基准
ARC-AGI-3 代表 AGI 评估的范式转变：从测试静态推理到测试动态交互学习能力。数百个全手工设计的回合制游戏环境，无任何说明书——AI 必须自主探索、建模世界、推断目标、制定策略。评估指标 RHAE 衡量 AI 相对人类的行动效率。当前状态：Gemini 3.1 Pro 最高仅达 0.37%（人类 100%），揭示了当前 AI 在交互式推理和世界建模上的根本局限。ARC-AGI-4 计划 2027 年初发布。
[查看原文](https://arcprize.org/arc-agi/3)

### Meta TRIBE v2：大脑响应预测基础模型
TRIBE v2 基于 700+ 名被试、500+ 小时 fMRI 数据，可预测人类大脑对视频、音频、文本的神经响应，分辨率较现有方法提升 70 倍。无需重训即可泛化到新个体和新语言，在电影/有声书任务上比现有最佳方法提升 2-3 倍。实际价值：可在不进行真实 fMRI 实验的前提下支持数千次虚拟神经科学实验，加速 BCI 和神经疾病研究。已开放模型权重、代码库及演示。
[查看原文](https://ai.meta.com/blog/tribe-v2-brain-predictive-foundation-model/)

### Sakana AI Scientist 登上 Nature
Sakana AI 的 AI Scientist 系统在第二版（v2）中实现了全 AI 生成论文首次通过顶级 ML 会议研讨会同行评审。系统工作流程：接收宽泛研究方向 → 自动生成创意 → 搜索文献 → 设计并通过并行智能体树搜索执行实验 → 数据分析 → 撰写 LaTeX 论文 → 自动同行评审。论文还发现了 AI 科研能力随模型规模的清晰扩展规律（scaling law）。此论文与三菱电机投资合作共同标志着 Sakana AI 从纯研究向产业落地的战略转型。
[查看原文](https://sakana.ai/ai-scientist-nature/)

### Cohere Transcribe：Whisper 级别的真正开源替代
cohere-transcribe-03-2026 是 2B 参数 Apache 2.0 开源语音识别模型，支持 14 种语言，在 HF Open ASR 榜单上以 WER 5.42 位居第一。与同类商用模型（ElevenLabs Scribe v2、Zoom Scribe）的对比评测中，人工评测胜率达 61%。模型可通过 Cohere API 免费调用，也可在消费级 GPU 上自托管，不设"仅限研究"等限制，是 Whisper 之后开源语音识别领域的重要新选手。
[查看原文](https://cohere.com/blog/transcribe)

### Mistral Voxtral TTS：4B 参数开源 TTS 挑战 ElevenLabs
Voxtral TTS 是 4B 参数开源文字转语音模型，最小 3 秒参考音频即可克隆声音，支持 9 种语言，可在笔记本电脑和中端桌面 GPU 上实时运行。人工评测显示自然度超越 ElevenLabs Flash v2.5，质量与 ElevenLabs v3 持平。支持跨语言语音一致性和情感方向控制。以 Creative Commons 许可在 HuggingFace 开放，可在边缘设备部署。
[查看原文](https://mistral.ai/news/voxtral-tts)
