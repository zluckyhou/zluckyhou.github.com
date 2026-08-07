---
layout: daily
title: "AI Frontier Daily | 2026.04.04"
headline: "Google Gemma 4 震撼发布：开源模型重新定义本地推理天花板"
date: 2026-04-04 09:07:00 +0800
permalink: /ai-daily/2026/04/04/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Google DeepMind 发布 Gemma 4 家族，Apache 2.0 协议，共四个尺寸：31B Dense、26B MoE（仅 4B 参数激活）、E4B 和 E2B（Edge 端）。31B 在 AIME 2025 上得分 89.2%、LiveCodeBench 80%，LMArena ELO 约 1452（全球 #3），击败参数量超其 10 倍的模型。26B MoE 量化版仅 18.3GB，可在 3 年前的 Mac Studio M2 Ultra 上流畅运行，RTX 4090 上解码速度高达 162 tokens/s。所有尺寸均原生支持多模态输入（文本、图像、音频）和 256K 上下文。Hugging Face CEO Clement Delangue：「Google 重新入局了。」"
summary: "Google DeepMind 发布 Gemma 4 家族，Apache 2.0 协议，共四个尺寸：31B Dense、26B MoE（仅 4B 参数激活）、E4B 和 E2B（Edge 端）。31B 在 AIME 2025 上得分 89.2%、LiveCodeBench 80%，LMArena ELO 约 1452（全球 #3），击败参数量超其 10 倍的模型。26B MoE 量化版仅 18.3GB，可在 3 年前的 Mac Studio M2 Ultra 上流畅运行，RTX 4090 上解码速度高达 162 tokens/s。所有尺寸均原生支持多模态输入（文本、图像、音频）和 256K 上下文。Hugging Face CEO Clement Delangue：「Google 重新入局了。」"
issue_count: 15
deep_dive_count: 3
reading_time: 13
cover: "https://huggingface.co/blog/assets/gemma4/thumbnail.png"
signals: "demishassabis · ClementDelangue · AnthropicAI · xai · Alibaba_Qwen · emollick · togethercompute · huggingface"
header-img: img/dark_yellow_400.png
---


## 1/15 Google Gemma 4 震撼发布：开源模型重新定义本地推理天花板
Google DeepMind 发布 Gemma 4 家族，Apache 2.0 协议，共四个尺寸：31B Dense、26B MoE（仅 4B 参数激活）、E4B 和 E2B（Edge 端）。31B 在 AIME 2025 上得分 89.2%、LiveCodeBench 80%，LMArena ELO 约 1452（全球 #3），击败参数量超其 10 倍的模型。26B MoE 量化版仅 18.3GB，可在 3 年前的 Mac Studio M2 Ultra 上流畅运行，RTX 4090 上解码速度高达 162 tokens/s。所有尺寸均原生支持多模态输入（文本、图像、音频）和 256K 上下文。Hugging Face CEO Clement Delangue：「Google 重新入局了。」
- [查看 @demishassabis 原始推文](https://x.com/demishassabis/status/2040067244349063326)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2039941213244072173)

## 2/15 Jeff Dean 时隔多年提交第一个公开 PR，献给 HuggingFace Transformers
Google 传奇工程师 Jeff Dean 为 Hugging Face transformers 库提交了 Gemma 4 支持 PR，这是他多年来首次公开代码贡献，该 PR 共有 14 位作者。NVIDIA 也第一时间为 Gemma 4 31B 发布了 NVFP4 量化版本（4x 压缩，前沿性能），同时 RTX 上 llama.cpp 可获得高达 2.7x 加速。HuggingFace 社区在发布后数小时内完成了 MLX、GGUF、transformers.js 等全栈适配，125 个量化变体已上传。
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2040201086133248083)

## 3/15 Anthropic 发布模型差异比对（Model Diffing）研究：AI 模型审计新范式
Anthropic Fellows 计划发布重磅研究：将软件开发中的「diff」概念应用于 AI 模型内部结构比对。技术上，该方法仅审查两个模型之间差异性的神经特征，大幅提升审计效率。关键发现：对比阿里 Qwen 与 Meta Llama，在 Qwen 中发现了「CCP 对齐」特征，而在 Llama 中发现了「美国例外主义」特征，两者均为对方模型所独有。这是首次通过可解释性工具在开源模型中系统识别出地缘政治对齐特征，对 AI 供应链安全审计具有深远意义。
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2040179539738030182)
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2040179543387124172)

## 4/15 xAI 发布 Grok Imagine Quality 模式：图像生成质量大幅跃升
xAI 宣布 Grok Imagine 推出由全新最先进模型驱动的 Quality 模式，带来更强的世界知识与提示理解（能精准还原复杂场景、物理规律、物体关系）、更高精度的多语言文字渲染、以及达到新水平的写实美学（真实感光线、材质和细节）。Speed 模式保留原有模型。公告帖子获得 7,808 收藏、118 万次浏览。该发布正值 OpenAI DALL·E 和 Google Imagen 持续竞争的图像生成赛道。
- [查看 @xai 原始推文](https://x.com/xai/status/2040150187373670570)

## 5/15 Qwen3.6-Plus 创 OpenRouter 历史记录：单日 1 万亿 tokens
阿里巴巴通义千问宣布，Qwen3.6-Plus 成为 OpenRouter 平台上首个单日处理量突破 1 万亿 tokens 的模型，位居 OpenRouter 排行榜 #1。Qwen3.6-Plus 于上周发布，定位「面向真实世界智能体」的里程碑产品，在 Code Arena 编程总榜排名 #8、React 榜 #2，并支持 Anthropic API 协议可直接接入 Claude Code 等工具链。此次 1T tokens/day 里程碑证明了其在推理端的极高采用率。
- [查看 @Alibaba_Qwen 原始推文](https://x.com/Alibaba_Qwen/status/2040242594719158460)

## 6/15 emollick：「RAG 时代已短暂结束」——向量检索不再是 Agent 上下文主流范式
沃顿商学院教授 Ethan Mollick 发出 AI 界争议最大的一条推文（782 收藏，16.7 万次浏览）：「RAG 时代虽短暂却激烈，它不再是为 Agent 提供上下文的主流范式。」随后 Mollick 补充说其声明的真假取决于 RAG 的定义，并指出随着模型上下文窗口扩大和长期记忆机制进化，显式检索增强逐渐让位于 Agent 内化的更高级上下文管理策略。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2040094108853600646)

## 7/15 AI 网络安全能力时间轴：5.7 个月翻倍速度，前沿模型已达 10.5 小时专家任务门槛
一项独立领域延伸研究将 METR 著名的时间轴分析应用到进攻性网络安全领域（使用真实人类专家计时数据）。结果与 METR 相似：约 5.7 个月的翻倍时间。目前前沿模型在 10.5 小时专家级任务上的成功率约为 50%。Mollick 引用了这项研究，强调 AI 在专业网络安全任务中的快速能力增长，尤其对关键基础设施的潜在影响。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2040097443807641982)

## 8/15 Together AI × Deepgram：实时语音 Agent 全栈统一到单一生产环境
Together AI 宣布与 Deepgram 合作，将其语音转文字（STT）和文字转语音（TTS）模型原生托管到 Together AI 平台。现已可用：Flux（对话级 STT，250ms 端点检测）、Nova-3 + Nova-3 Multilingual（多语言生产转录）、Aura-2（高质量 TTS）。全部运行在 Together AI Dedicated Deployments 上，语音 Agent 开发者可在单一平台完成完整语音栈部署，无需跨多个提供商。
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2040137725966246021)

## 9/15 Together AI 上线 Wan 2.7 视频生成：从文本到 1080P 视频的专业级工作流
Together AI 宣布将阿里云 Wan 2.7 模型纳入平台。核心功能：文本生成视频（720P/1080P，2-15 秒，可选音频输入）、场景续写、参考驱动控制、输出修订。Together AI 定位为面向 AI 原生开发者提供更清晰的从初次视频生成到续写、精调的完整工作流路径。这是继 Deepgram 语音之后，Together AI 在多模态 AI 服务平台方向的又一重要扩展。
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2040179789340827746)

## 10/15 Netflix VOID 模型：首个公开发布在 HuggingFace 的 Netflix 模型
Netflix 在 Hugging Face 上公开发布了其首个 AI 模型——VOID，引发开发者社区广泛关注。VOID 具备目标检测、场景理解等视觉能力，标志着这家娱乐巨头正式迈入开源 AI 模型领域。Hugging Face 和 Clement Delangue 均转发了该消息，社区对 Netflix 的首次开源模型发布反响热烈。具体模型架构和性能细节正在被社区深度评测。
- [查看 @huggingface 原始推文](https://x.com/huggingface/status/2040072289316724863)

## 11/15 Replit Canvas 发布：AI 驱动的视觉设计到应用，由 tldraw 提供底层支持
Replit 宣布与 tldraw 合作推出 Replit Canvas，让用户可以：用 AI 生成多个设计变体、在画布上可视化协作设计、直接从设计生成可运行的应用。Replit 同时预告「Something big is coming」（申请候补名单）。本周 Agent 4 Content Challenge 第二周优胜者 Marcos Leal 用 Agent 4 构建了一个个性化每日新闻简报，展示了 Replit 平台的应用构建能力。
- [查看 @Replit 原始推文](https://x.com/Replit/status/2040073400505569610)

## 12/15 Keras Kinetic 发布：用装饰器一键运行 TPU/GPU 云端任务
François Chollet 在 Keras 社区例会上发布 Keras Kinetic——一个通过简单装饰器即可将本地 Python 函数提交到 Google Cloud TPU/GPU 的新库，类似 Modal 但支持 TPU。功能包括：自动代码打包、数据集上传、日志流式输出，以及分布式训练和异步任务支持，兼容所有 Keras 后端（JAX、TensorFlow、PyTorch）。目前处于 Beta 阶段。Chollet 同时宣布 Keras 3.14 即将发布，包含大量新特性。
- [查看 @fchollet 原始推文](https://x.com/fchollet/status/2040119594984284218)

## 13/15 LangSmith × Claude Code：首个子 Agent 运行追踪插件
LangChain 官方发布了一个新插件，可将 Claude Code 的子 Agent 运行追踪到 LangSmith。LangChain 创始人 Harrison Chase 转发并指出这与他即将发布的博客文章有关，并强调「记忆不能被锁定在专有 harness 或专有 API 后面」——这也是 LangChain 大力推进开放 harness 标准的核心动机之一。
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2040134178864546159)

## 14/15 Claude Code 源码泄露分析：React+Hooks「意大利面条式」架构
研究者 Yoav Goldberg 阅读了泄露的 Claude Code 源码后直言：「代码非常混乱，我很惊讶它居然能正常运行并持续添加新功能——说明 coding 模型确实很厉害。」他特别指出，那些声称将 Claude Code「翻译」为 Python 或 Rust 的仓库几乎不可能真实准确，因为原始代码是大量 React hooks 和 useEffect 的高度交织，极难在其他语言中可靠地镜像其语义。
- [查看 @yoavgo 原始推文](https://x.com/yoavgo/status/2040186408485196263)
- [查看 @yoavgo 原始推文](https://x.com/yoavgo/status/2040184658155942392)

## 15/15 机器人学会打网球：仅用业余玩家短视频片段完成训练
研究人员展示了一个惊人成果：仅通过几段业余球员进行正手、反手和步法练习的视频片段，机器人学会了打网球——一项速度极快、协调要求极高的运动。这是机器人从人类非结构化视频中自主学习复杂动态技能的又一重要里程碑，展示了模仿学习在机器人控制领域的快速进展。
- [查看 @rowancheung 原始推文](https://x.com/rowancheung/status/2040085788256506190)

---

## Deep Dive 附录

### Gemma 4：Google 重返开源前沿的完整技术图谱
Gemma 4 共有四种尺寸：31B Dense（本地高性能推理）、26B MoE（A4B，仅 4B 激活参数）、E4B 和 E2B（Edge 端实时推理）。核心能力：原生多模态（文本、图像、音频输入）、256K 上下文、原生工具使用（函数调用）。主要基准：31B 在 AIME 2025 得分 89.2%、LiveCodeBench 80%，LMArena ELO ~1452（全球 #3）。许可证：Apache 2.0（真正的开源）。部署：26B MoE 的 Q4_K_M 量化版约 18.3GB，可在 Mac Mini M4（16GB）上以 34 tokens/s 流畅运行；RTX 4090 单卡 162 tokens/s 解码、8400 tokens/s 预填充；RTX 上 llama.cpp 额外获得 2.7x 加速。NVIDIA NVFP4 量化版提供 4x 压缩且保持前沿性能。Jeff Dean 提交了 transformers 库 PR（14 位联合作者），社区在发布当天完成了 MLX、GGUF、transformers.js、KerasHub 等全栈适配。Clement Delangue 展示了在浏览器中通过 transformers.js 运行 Gemma 4 的完整本地推理——「100% 本地、100% 隐私、100% 免费」。
[查看原文](https://deepmind.google/models/gemma)
[查看原文](https://x.com/ClementDelangue/status/2039941213244072173)

### Anthropic Model Diffing：用「差异审计」揭露 AI 模型的隐性对齐特征
这项由 Anthropic Fellows 项目出品的研究将软件开发中的「diff」原则应用到 AI 模型可解释性分析中。核心思路：如果新模型与受信任模型共享某个特征，那个区域可能不需要审查；Model Diffing 只隔离新模型特有的特征——那里最可能隐藏新风险。技术上通过稀疏自编码器（SAE）提取神经特征，然后用相似度匹配来识别两个模型之间的差异特征。关键发现：比较 Alibaba Qwen 与 Meta Llama，在 Qwen 中发现了「CCP alignment（中共对齐）」特征，在 Llama 中发现了「American exceptionalism（美国例外主义）」特征，两者均为对方所没有的。此方法的局限性：有时会过度敏感地将相似特征标记为不同。这是首次通过可解释性工具在开源模型中系统检测出地缘政治对齐特征，对 AI 供应链安全、模型审计和监管合规具有深远意义。
[查看原文](https://x.com/AnthropicAI/status/2040179539738030182)

### AI 进攻性网络安全能力时间轴分析（METR 延伸研究）
这项独立研究将 METR 的时间轴分析方法延伸到进攻性网络安全领域，使用真实人类专家计时数据作为基准（而非众包标注）。核心发现：AI 能力翻倍时间约为 5.7 个月，与 METR 原始结论高度吻合。前沿模型目前在 10.5 小时专家级网络安全任务上的成功率约为 50%，即模型已能独立完成需要专业安全研究员大半天工作量的任务。按照 5.7 个月翻倍速度推算，2026 年底前沿模型有望在更长时间跨度的专家级任务上达到 50% 成功率，意味着 AI 在关键基础设施渗透测试等高价值场景的能力将快速逼近人类专家水平。
[查看原文](https://x.com/emollick/status/2040097443807641982)
