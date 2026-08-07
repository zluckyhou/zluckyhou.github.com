---
layout: daily
title: "AI Frontier Daily | 2026.05.10"
headline: "Sakana AI 开源稀疏 Transformer 训练与 TwELL CUDA kernels"
date: 2026-05-10 09:07:00 +0800
permalink: /ai-daily/2026/05/10/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Sakana AI 在前一日论文发布后继续放出 Sparser, Faster, Lighter Transformer Language Models 的参考代码。仓库包含稀疏训练代码、H100 上的 TwELL CUDA kernels、inference benchmark、energy measurement、Hydra 训练配置，以及 0.5B 到 2B 的 SparseLM checkpoints。论文主张 feedforward 层可通过 L1 regularization 获得极高 sparsity，并用 tile-wise packing 把理论稀疏性转换成 GPU 上可见的吞吐、显存与能耗收益。此次代码发布把该路线从论文结果推进到可复现工程基线。"
summary: "Sakana AI 在前一日论文发布后继续放出 Sparser, Faster, Lighter Transformer Language Models 的参考代码。仓库包含稀疏训练代码、H100 上的 TwELL CUDA kernels、inference benchmark、energy measurement、Hydra 训练配置，以及 0.5B 到 2B 的 SparseLM checkpoints。论文主张 feedforward 层可通过 L1 regularization 获得极高 sparsity，并用 tile-wise packing 把理论稀疏性转换成 GPU 上可见的吞吐、显存与能耗收益。此次代码发布把该路线从论文结果推进到可复现工程基线。"
issue_count: 12
deep_dive_count: 5
reading_time: 15
cover: "https://opengraph.githubassets.com/376d282297c3624d83db26c00375ec1cf8a57a0ddfb974fc5b786e3cd545bb5c/SakanaAI/sparser-faster-llms"
signals: "SakanaAILabs · AlphaSignalAI · hardmaru · hwchase17 · sama · gdb · fchollet · LumaLabsAI"
header-img: img/dark_yellow_400.png
---


## 1/12 Sakana AI 开源稀疏 Transformer 训练与 TwELL CUDA kernels
Sakana AI 在前一日论文发布后继续放出 Sparser, Faster, Lighter Transformer Language Models 的参考代码。仓库包含稀疏训练代码、H100 上的 TwELL CUDA kernels、inference benchmark、energy measurement、Hydra 训练配置，以及 0.5B 到 2B 的 SparseLM checkpoints。论文主张 feedforward 层可通过 L1 regularization 获得极高 sparsity，并用 tile-wise packing 把理论稀疏性转换成 GPU 上可见的吞吐、显存与能耗收益。此次代码发布把该路线从论文结果推进到可复现工程基线。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs<span class="source-chip__links"><a href="https://x.com/SakanaAILabs/status/2053141431733440850" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 1">1</a><a href="https://x.com/SakanaAILabs/status/2053022158993924585" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 2">2</a></span></span></div>

## 2/12 Tuna-2 用 pixel embeddings 挑战传统视觉编码器路线
AlphaSignalAI 转述 Tuna-2 论文，称该模型直接从 raw pixels 学习统一的视觉-语言表示，不再依赖预训练 vision encoder 或 VAE。论文页面显示，Tuna-2 使用 patch embeddings 进入统一模型，以减少理解、生成和编辑任务之间的表示错配。作者报告，encoder-free 设计在规模扩大后能在 fine-grained visual perception 上取得更强效果，并在图像生成上与 latent-space 方法竞争。这个方向把多模态 foundation model 的关键问题从“选哪个视觉编码器”推向“是否需要视觉编码器”。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2053128307617456545" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2053128309123215564" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a></span></span></div>

## 3/12 talkie 发布 13B “1930 年代”语言模型与开源推理库
AlphaSignalAI 还介绍了 talkie：一个用 260B tokens 的 1931 年前英语文本训练的 13B vintage language model。项目同时提供 base model、instruction-tuned checkpoint、现代 FineWeb twin 对照模型和 Python/CLI 推理库。其研究价值在于把知识截止、temporal leakage、OCR 质量和后训练数据偏差变成可实验对象：团队使用 anachronism classifier 过滤现代泄漏，并从礼仪手册、百科、书信指南等历史材料构造 instruction 数据。项目计划继续扩展到 GPT-3 级别模型和万亿 token 历史语料。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2053082919070019981" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2053082919917248919" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a></span></span></div>

## 4/12 AI coding assistant 开始系统复现 1990-2025 Schmidhuber 论文
hardmaru 转发 Yaroslav Bulatov 的 schmidhuber-problems 项目，该项目尝试用 AI coding assistant 复现 Schmidhuber 相关论文从 1990 到 2025 的一系列核心实验。visual tour 已覆盖 Neural EM、Relational Neural EM、World Models、Upside-Down RL、fast-weight programmers、linear Transformers 等主题。其中 World Models 复现包含简化 driving 环境、VAE、LSTM world model 和 linear controller；fast-weight 部分验证 linear attention 与 fast-weight formulation 的数值等价。该项目更像研究复现基础设施，而不是单篇论文结果。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hardmaru/status/2053147759428178315" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a></div>

## 5/12 LangChain 强调 agent 是可度量、可迭代的组织系统
Harrison Chase 连续讨论 agent engineering，主线是“模型只是系统的一部分”。他把 LangSmith 描述为让整个组织协作构建 agents 的平台，并强调 best teams 会早发布、快速迭代，通过 evals、monitoring、domain expert feedback 和 governance 改进 agent。相关转推还提到 state management、observability、retries、permissioning、recovery paths、eval drift 与 human escalation 等问题。这组推文说明 agent 产品竞争正在从单模型能力扩展到反馈回路、组织协作和生产治理。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17<span class="source-chip__links"><a href="https://x.com/hwchase17/status/2053191681223381434" target="_blank" rel="noopener" aria-label="@hwchase17 原文 1">1</a><a href="https://x.com/hwchase17/status/2053158955833229442" target="_blank" rel="noopener" aria-label="@hwchase17 原文 2">2</a><a href="https://x.com/hwchase17/status/2053168121637470540" target="_blank" rel="noopener" aria-label="@hwchase17 原文 3">3</a></span></span></div>

## 6/12 OpenAI 高管继续把 Codex 描述为异步工作流入口
Sam Altman 和 Greg Brockman 的多条推文继续围绕 Codex 与下一代模型体验展开。Altman 描述同时启动多个 Codex tasks、离开后回来看到任务完成的体验，并向用户询问下个模型最希望改进什么；Brockman 则提到 “Codex for expenses” 和 GPT-Realtime-2 可用于实时音频翻译。这些不是完整产品公告，但信号很一致：OpenAI 正把 frontier model 能力包装成具体异步任务流、coding/office 操作流和实时语音流，而不只是聊天入口。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sama<span class="source-chip__links"><a href="https://x.com/sama/status/2053191344999604409" target="_blank" rel="noopener" aria-label="@sama 原文 1">1</a><a href="https://x.com/sama/status/2053151542916894775" target="_blank" rel="noopener" aria-label="@sama 原文 2">2</a></span></span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb<span class="source-chip__links"><a href="https://x.com/gdb/status/2053221403868922114" target="_blank" rel="noopener" aria-label="@gdb 原文 1">1</a><a href="https://x.com/gdb/status/2053134883040514350" target="_blank" rel="noopener" aria-label="@gdb 原文 2">2</a></span></span></div>

## 7/12 François Chollet 将 agentic coding 类比为机器学习产物管理
François Chollet 提出，agentic coding 不是软件工程的简单替代，而是一种不同的软件生产方式。他认为生成代码应像 ML artifact 一样处理：行为和泛化能力需要通过 empirical evaluation 管理，而不是只靠阅读源码或假定模型可靠。这个观点与 LangChain 对 eval/monitor loop 的强调形成呼应：当代码由 agent 产生，工程重点会部分转向测试集设计、行为覆盖、失效分布和上线后的观测机制。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet<span class="source-chip__links"><a href="https://x.com/fchollet/status/2053234697392754701" target="_blank" rel="noopener" aria-label="@fchollet 原文 1">1</a><a href="https://x.com/fchollet/status/2053234990117433760" target="_blank" rel="noopener" aria-label="@fchollet 原文 2">2</a></span></span></div>

## 8/12 Luma Agents 把生成式创作包装成团队级招聘与营销工作流
Luma Labs 发布招聘场景推文，称 Luma Agents 可以围绕公司文化和信息生成 recruitment campaign visuals。其产品页更广泛地把 Luma Agents 定位为专业创意团队的 multimodal workflow：可生成品牌探索、产品图、社交广告、slide decks、storyboards、A/B variants、包装 mockups、localization、lesson plans 和 infographics。重点不在单个图像模型，而在多模型编排、共享上下文和从 concept 到 delivery 的连续执行。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/LumaLabsAI/status/2052941626411196639" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LumaLabsAI</a></div>

## 9/12 Databricks 公布 Data + AI Summit 2026 线上体验安排
Databricks 宣布 Data + AI Summit 2026 Virtual Experience 将在 6 月 16-17 日举行，包含 keynotes、curated sessions、Summit Live、专家评论和嘉宾。该信息本身是会议安排，但对企业 AI 生态有信号价值：Databricks 今年已围绕 Lakebase、Genie、MCP Marketplace、Foundry 与 durable agents 持续组织叙事，线上体验会成为这些 enterprise agent 和 data intelligence 产品线集中展示的入口。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/databricks/status/2053174434974859534" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a></div>

## 10/12 DeepMind 用 AlphaGo 十周年回看人机协作，并预告 AI co-mathematician
Demis Hassabis 回顾 AlphaGo 十周年，提到与李世石重聚并观看申真谞参与特别围棋活动，称 AlphaGo 改变了棋手处理围棋的方式。他还转发 Google DeepMind 关于 AI co-mathematician 的信息，强调未来数学可能由数学家与 AI agents 协作完成。这组内容不是新模型发布，但把 DeepMind 的长期叙事串联起来：从 AlphaGo 改变专业棋手实践，到下一阶段让 agents 进入数学研究协作。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@demishassabis<span class="source-chip__links"><a href="https://x.com/demishassabis/status/2053182256366191078" target="_blank" rel="noopener" aria-label="@demishassabis 原文 1">1</a><a href="https://x.com/demishassabis/status/2052921911726747768" target="_blank" rel="noopener" aria-label="@demishassabis 原文 2">2</a></span></span></div>

## 11/12 Gary Marcus 重新把 Claude Code 等系统归入 neuro-symbolic hybrid 争论
Gary Marcus 当日围绕 “deep learning is hitting a wall” 旧文和 Claude Code 等系统展开讨论，主张纯扩大 LLM 并不足以通向 AGI，而当下成功的 coding agents 本质上依赖 symbolic tools、代码解释器和外部 harness。他同时提醒不要过度解读 Mythos/METR 图表，认为进展存在但外界评论忽略上下文。无论同意与否，这场争论反映出 agent 系统的边界正在被重新定义：模型能力、工具编排和符号化执行环境越来越难分开评价。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GaryMarcus<span class="source-chip__links"><a href="https://x.com/GaryMarcus/status/2053222231933931881" target="_blank" rel="noopener" aria-label="@GaryMarcus 原文 1">1</a><a href="https://x.com/GaryMarcus/status/2053286791587971384" target="_blank" rel="noopener" aria-label="@GaryMarcus 原文 2">2</a></span></span></div>

## 12/12 xAI/Tesla 当日信号集中在 Grok Imagine 与工程视觉叙事
Elon Musk 当日多条高曝光推文中，AI 相关信息集中在 “Grok Imagine” 和 “Full stack engineering” 等短消息，缺少完整 changelog 或技术说明。结合近期 xAI/Tesla 的叙事，这类低信息量预告仍会影响市场和开发者注意力，但需要后续官方文档确认模型能力、上线范围和评估方式。日报将其作为 watch item 记录，而不把它视为已经可验证的产品发布。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@elonmusk<span class="source-chip__links"><a href="https://x.com/elonmusk/status/2053255966062432742" target="_blank" rel="noopener" aria-label="@elonmusk 原文 1">1</a><a href="https://x.com/elonmusk/status/2053229960849211692" target="_blank" rel="noopener" aria-label="@elonmusk 原文 2">2</a></span></span></div>

---

## Deep Dive 附录

### Sakana AI / NVIDIA Sparser, Faster, Lighter 代码发布
Sakana AI 的 GitHub 仓库提供论文对应的 reference implementation，包括 sparse model definitions、TwELL CUDA kernels、training configs、benchmark scripts 和 energy measurement 工具。论文关注 transformer feedforward 层，因为这部分通常占据大部分参数和 FLOPs。核心贡献是把 unstructured sparsity 通过 tile-wise ELLPACK 形式打包，使非零激活能进入现代 GPU 的 tiled matmul pipeline。代码发布使外部团队可以在 H100/CUDA 12.8+ 环境下复现实验、比较 PyTorch reference 和 TwELL kernels，并评估 sparse checkpoints 的吞吐、内存和能耗收益。
[查看原文](https://github.com/SakanaAI/sparser-faster-llms)

### Tuna-2: Pixel Embeddings Beat Vision Encoders
Tuna-2 论文的问题设定是：统一多模态模型通常把 visual understanding 和 generation 交给不同视觉表示，导致任务之间错配，也让 raw-pixel 到输出的端到端优化变复杂。Tuna-2 去掉 VAE 与 pretrained vision encoder，用简单 patch embeddings 直接把视觉输入接入统一模型。作者报告，encoder-free 模型虽然早期收敛可能慢于 encoder-based variant，但在扩大规模后可获得更强 fine-grained visual perception，并在生成质量上与 latent-space 系统竞争。这为多模态模型架构提供了一个更简单但计算要求更高的替代路线。
[查看原文](https://arxiv.org/abs/2604.24763)

### talkie: 1930 年代 vintage language model
talkie 的目标是训练一个知识世界停留在 1930 年末的 13B 模型。项目从公共领域历史文本中整理约 260B tokens，覆盖书籍、报纸、期刊、科学文献、专利和判例；同时训练一个 FineWeb modern twin 作为对照。团队明确承认 temporal leakage 仍存在，并用 anachronism classifier 与未来更强过滤器继续降低泄漏。post-training 则从历史礼仪手册、百科、书信指南、诗歌和寓言等材料构造 instruction 数据，再用偏好优化提高对话能力。该项目适合研究数据时代边界、OCR 噪声、历史 persona 与模型身份形成。
[查看原文](https://talkie-lm.com/introducing-talkie)

### AI assistant 复现 Schmidhuber 论文项目
schmidhuber-problems 不是单一论文，而是一个大型复现目录，尝试把 1990-2025 年间多篇 Schmidhuber 相关工作转成可运行实验。visual tour 展示了 Neural EM、Relational Neural EM、World Models、Upside-Down RL、fast-weight programmers、linear Transformers 等复现片段。World Models 部分用简化 racing 环境实现 VAE、LSTM world model 与 linear policy；fast-weight 部分验证 linear self-attention 与 fast-weight-programmer 表达式的数值等价。项目的价值在于展示 agentic coding 对研究复现和历史算法梳理的生产率提升，同时也提醒这些结果仍需按正式复现标准审查。
[查看原文](https://github.com/cybertronai/schmidhuber-problems/blob/main/VISUAL_TOUR.md)

### Luma Agents 产品页
Luma Agents 的产品页把它定义为面向专业创意团队的 agentic workflow，而不是单点生成工具。页面强调 agents 可以计划、生成、迭代、refine，并在 video、image、audio、text 之间保留 shared context。用例覆盖品牌视觉、产品图、社交视频广告、slide decks、storyboards、A/B variants、包装 mockups、localization、lesson plans、trailers 和 infographics。该方向显示多模态生成产品正在从“生成一张图/一段视频”转向“承接一个创意生产流程”，竞争焦点变成上下文保持、协作、资产一致性和规模化交付。
[查看原文](https://lumalabs.ai/app)
