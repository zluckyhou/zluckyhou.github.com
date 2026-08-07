---
layout: daily
title: "AI Frontier Daily | 2026.05.03"
headline: "Vision Banana 把视觉理解统一成图像生成"
date: 2026-05-03 09:07:00 +0800
permalink: /ai-daily/2026/05/03/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "AlphaSignalAI 转述 Google DeepMind 的 Vision Banana 论文：研究把 Nano Banana Pro 加入少量视觉任务数据做指令微调，将分割、深度估计、3D 理解等任务都参数化为 RGB 图像输出。论文称模型在多类 2D/3D 任务上达到或接近 SOTA，分割可击败或匹敌 Segment Anything Model 3，度量深度估计可匹敌 Depth Anything 系列，同时保留原图像生成能力。这个方向把生成式预训练从“会画图”推进到“可作为通用视觉表征”。"
summary: "AlphaSignalAI 转述 Google DeepMind 的 Vision Banana 论文：研究把 Nano Banana Pro 加入少量视觉任务数据做指令微调，将分割、深度估计、3D 理解等任务都参数化为 RGB 图像输出。论文称模型在多类 2D/3D 任务上达到或接近 SOTA，分割可击败或匹敌 Segment Anything Model 3，度量深度估计可匹敌 Depth Anything 系列，同时保留原图像生成能力。这个方向把生成式预训练从“会画图”推进到“可作为通用视觉表征”。"
issue_count: 12
deep_dive_count: 6
reading_time: 11
cover: "https://vision-banana.github.io/files/images/teaser_img_v6.png"
signals: "AlphaSignalAI · SakanaAILabs · GaryMarcus · gdb · OpenAI · cursor_ai · Replit · hwchase17"
header-img: img/dark_yellow_400.png
---


## 1/12 Vision Banana 把视觉理解统一成图像生成
AlphaSignalAI 转述 Google DeepMind 的 Vision Banana 论文：研究把 Nano Banana Pro 加入少量视觉任务数据做指令微调，将分割、深度估计、3D 理解等任务都参数化为 RGB 图像输出。论文称模型在多类 2D/3D 任务上达到或接近 SOTA，分割可击败或匹敌 Segment Anything Model 3，度量深度估计可匹敌 Depth Anything 系列，同时保留原图像生成能力。这个方向把生成式预训练从“会画图”推进到“可作为通用视觉表征”。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2050591693498417405" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2050591694387552386" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a></span></span></div>

## 2/12 HALO 用 trace 循环自动修复 agent harness
AlphaSignalAI 介绍 Context Labs 开源的 HALO：系统收集 agent 执行 trace，用专门的 RLM 分析 hallucinated tool calls、重复参数、refusal loops 等系统性失败，再把诊断交给 coding agent 修改 harness。HALO README 显示，在 AppWorld 多应用任务基准上，Gemini 3 Flash 的 dev SGC 从 36.8% 提升到 52.6%，Sonnet 4.6 从 73.7% 提升到 89.5%，test_normal 也同步提升，用于验证不是单纯对 dev 过拟合。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2050908503951200418" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2050908505666678864" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a></span></span></div>

## 3/12 脑仿真路线图强调数据采集瓶颈
AlphaSignalAI 转述一篇从线虫到数字人脑的 emulation 路线图。论文把关键进展归为结构/连接成像、功能成像和神经元仿真三类：connectomics 已从 302 神经元线虫推进到约 14 万神经元果蝇全脑重建，斑马鱼幼体重建校对成本从约每神经元 16,500 美元降到约 100 美元。算力方面，论文估算实时人脑仿真约需 6e20 FLOP/s，但真正瓶颈仍是多年级别的显微成像和连接/受体数据采集。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2050953970684739697" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2050953972081377302" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a></span></span></div>

## 4/12 KAME 尝试兼顾实时语音和 LLM 知识能力
Sakana AI 发布 KAME 论文链接，提出一种实时 speech-to-speech 混合架构。端到端 S2S 模型延迟低但知识能力弱，ASR-LLM-TTS 级联系统知识更强但延迟高；KAME 让 S2S transformer 先保持即时响应，同时并行调用后端文本 LLM，并把 LLM 文本结果实时注入语音生成过程。论文在语音版 MT-Bench 上报告，该系统正确性明显超过基线 S2S，接近级联系统，同时延迟接近低延迟基线。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/SakanaAILabs/status/2050809932447170573" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs</a></div>

## 5/12 医疗 LLM 价值与证据缺口继续分化
Gary Marcus 引用 Eric Topol 的医疗 AI 文章，强调当前 LLM 对医生和患者健康结局的真实证据仍有限。Topol 区分了影像 AI 已有较多随机试验和监管进展，而生成式 AI 在关键诊断、治疗决策上仍缺少前瞻性、大规模、独立结局裁定研究。文章同时承认 LLM 在病历摘要、实验室结果解释、文献检索、预授权和患者就诊准备等辅助场景有实际价值。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/GaryMarcus/status/2050952080563843253" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GaryMarcus</a></div>

## 6/12 OpenAI 侧重 Codex 与 ChatGPT Images 使用热度
Greg Brockman 连续转发和评论 ChatGPT Images 与 Codex 相关内容，称 ChatGPT Images 使用正在起量，并提到 Codex 对工程 ergonomics 的改善以及 Codex pet 分享活动。OpenAI 官方账号也转发 OpenAI Developers 的 Codex pet 活动，鼓励用户用 `/hatch` 创建并提交作品。这些推文不是新模型发布，但显示 OpenAI 在继续围绕 Codex 与图像生成做社区传播和使用场景扩散。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb<span class="source-chip__links"><a href="https://x.com/gdb/status/2050731568742723899" target="_blank" rel="noopener" aria-label="@gdb 原文 1">1</a><a href="https://x.com/gdb/status/2050667528741929316" target="_blank" rel="noopener" aria-label="@gdb 原文 2">2</a><a href="https://x.com/gdb/status/2050637240603205827" target="_blank" rel="noopener" aria-label="@gdb 原文 3">3</a></span></span><a class="source-chip" href="https://x.com/OpenAI/status/2050622862424416689" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a></div>

## 7/12 Cursor 周末下调 Composer 2 SDK 价格
Cursor 官方宣布 Composer 2 在 SDK 中周末 50% off。推文信息很短，但指向一个明确的开发者采用策略：围绕 agentic coding 和代码生成能力，Cursor 继续通过 SDK 价格激励扩大调用和集成场景。当天抓取中，Cursor 是少数发布明确产品/价格信息的账号之一，因此单独列入。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cursor_ai/status/2050663279962513659" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai</a></div>

## 8/12 Replit 继续围绕 Free Agent Day 拉动开发者活动
Replit 发布 “Free Agent Day + Buildathon Office Hours”，延续其 10 周年期间把 Replit 免费开放 24 小时的活动传播。推文没有公布新模型或新功能，但从事件组织看，Replit 继续把 agent coding 与 buildathon 社区活动绑定，用限时免费和办公时间降低开发者试用门槛。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Replit<span class="source-chip__links"><a href="https://x.com/Replit/status/2050697624462954694" target="_blank" rel="noopener" aria-label="@Replit 原文 1">1</a><a href="https://x.com/Replit/status/2050597455558046093" target="_blank" rel="noopener" aria-label="@Replit 原文 2">2</a></span></span></div>

## 9/12 Agent harness 成为 LangChain 生态讨论焦点
LangChain 创始人 Harrison Chase 转发多条关于 agent harness engineering 的讨论，并补充称 memory、integrations 与 harness 仍高度耦合，开放 memory 标准还不成熟；harness 也不只是 ReAct loop，还包括管理上下文的工具、skills 和方法。结合 HALO 的 trace-driven harness 优化，当天多条推文共同指向一个趋势：模型本体之外，harness 正成为 agent 产品差异化的重要层。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17<span class="source-chip__links"><a href="https://x.com/hwchase17/status/2050622771009585314" target="_blank" rel="noopener" aria-label="@hwchase17 原文 1">1</a><a href="https://x.com/hwchase17/status/2050690868773007402" target="_blank" rel="noopener" aria-label="@hwchase17 原文 2">2</a><a href="https://x.com/hwchase17/status/2050712094866387160" target="_blank" rel="noopener" aria-label="@hwchase17 原文 3">3</a></span></span></div>

## 10/12 AI 就业替代叙事出现反讽式传播
Riley Goodside 发布一条反讽推文：AI 会替代一些工作，也会创造人们无法想象的新工作；一年后那些新工作也会被 AI 完成，之后继续出现新工作并再次被替代。他随后补充说自己没有把玩笑标得足够明显。该 thread 本身不是产品新闻，但互动量较高，反映 AI 自动化对就业影响的讨论已经从“创造新岗位”进入对岗位生命周期缩短的二阶讨论。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@goodside<span class="source-chip__links"><a href="https://x.com/goodside/status/2050800739203608655" target="_blank" rel="noopener" aria-label="@goodside 原文 1">1</a><a href="https://x.com/goodside/status/2050942135193489686" target="_blank" rel="noopener" aria-label="@goodside 原文 2">2</a></span></span></div>

## 11/12 开放模型与闭源模型差距的评估争议升温
Ethan Mollick 评论一篇关于开放与闭源模型差距的解释，认为现有 benchmark 可能低估 frontier agent 的进展，尤其长任务重复评测昂贵，且“模型在 harness 中运行”和“通过 API 直接测模型”存在差异。他还指出当前开放模型在 out-of-distribution 问题和 emergent capabilities 上更脆弱。该观点与当天 harness 讨论呼应：评估对象正在从裸模型转向模型、工具、上下文管理和运行环境的组合。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2050904152511848871" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2050892355331354850" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a></span></span></div>

## 12/12 Vibe-kanban 关闭引发 agent 创业商业模式复盘
swyx 转述 AIE Europe 现场消息：Vibe-kanban 在仍有约 30,000 MAU 的情况下关闭，但项目会以开源形式继续存在。其创始人给出的商业复盘是，赚钱的公司通常在做两件事：卖给企业，或转售 token，而他们两者都没有做。这个案例为 agent/devtool 创业提供了一个反例：有用户和开源热度不必然等于可持续收入，商业化路径仍是核心约束。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/swyx/status/2050753293601935777" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@swyx</a></div>

---

## Deep Dive 附录

### Image Generators are Generalist Vision Learners / Vision Banana
Google DeepMind 的论文提出 Vision Banana：在 Nano Banana Pro 基础上加入少量视觉任务数据进行指令微调，把分割、深度估计、2D/3D 理解等任务统一表示为 RGB 图像生成。论文摘要称，该模型在多类 2D 和 3D 视觉任务上达到或接近 SOTA，分割任务可击败或匹敌 Segment Anything Model 3，度量深度估计可匹敌 Depth Anything 系列，同时不牺牲基础图像生成能力。
[查看原文](https://arxiv.org/abs/2604.20329)

### HALO: Hierarchical Agent Loop Optimization
HALO 是 Context Labs 开源的 agent harness 自动优化方法和 Python 包。它收集 agent 执行 trace，交给专门的 RLM 引擎分析系统性失败，再把诊断报告交给 Cursor 或 Claude Code 等 coding agent 修改 harness，之后重新部署并继续收集 trace。README 显示，AppWorld 上 Gemini 3 Flash 与 Sonnet 4.6 的 dev/test 指标均有明显提升。
[查看原文](https://github.com/context-labs/halo)

### Scaling Emulations
Isaak Freeman 的脑仿真论文讨论从模型生物到更大脑系统的高质量 emulation 路径。文中提到，connectomics 已从 302 个神经元的线虫脑图谱推进到约 14 万神经元的成年果蝇全脑重建；斑马鱼幼体重建和校对成本从约每神经元 16,500 美元降至约 100 美元。论文估算实时人脑仿真在悲观假设下约需 6e20 FLOP/s，并强调数据采集是核心瓶颈。
[查看原文](https://pdf.isaak.net/scaling-emulations)

### KAME: Tandem Architecture for Enhancing Knowledge in Real-Time Speech-to-Speech Conversational AI
KAME 是一种混合式实时语音到语音架构：S2S transformer 保持即时响应，后端文本 LLM 并行生成知识更强的回答，再实时注入引导语音生成。论文称其在语音合成版 MT-Bench 上正确性明显超过基线 S2S，接近 ASR-LLM-TTS 级联系统，同时延迟接近低延迟基线。
[查看原文](https://arxiv.org/abs/2510.02327)

### The Paradox of Medical AI Implementation
Eric Topol 区分了传统医学影像 AI 与当代医疗 LLM 的证据状态：前者已有多类随机试验和监管进展，后者在关键诊断、治疗决策、患者结局上仍缺乏足够真实世界证据。文章承认 LLM 在病历摘要、实验室结果解释、文献检索、预授权和患者就诊准备等辅助场景有价值，但要求进入关键医疗决策前做更严格的前瞻性研究。
[查看原文](https://erictopol.substack.com/p/the-paradox-of-medical-ai-implementation)

### Sakana AI × SMBC Proposal AI
Sakana AI 发布与三井住友银行集团相关的 Proposal AI 项目页面，展示其面向企业提案/业务文档场景的 AI 应用方向。该链接和 KAME 论文同日出现，显示 Sakana 当日同时覆盖企业应用落地与实时语音交互研究。
[查看原文](https://sakana.ai/smbc-proposal-ai/)
