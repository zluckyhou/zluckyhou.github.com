---
layout: daily
title: "AI Frontier Daily | 2026.07.05"
headline: "Sakana ICML 2026 论文包把 agent 系统问题拆到协调、记忆和效率层"
date: 2026-07-05 09:07:00 +0800
permalink: /ai-daily/2026/07/05/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Sakana AI 公布 ICML 2026 Seoul 参会论文线索，覆盖多智能体协调、稀疏 LLM、长程记忆、测试时扩展、语料检索和 agent benchmark。最值得关注的是，这组工作没有只围绕更强单模型，而是把 frontier AI 的瓶颈拆成系统问题：agent 如何在局部视角下达成一致，模型如何重排上下文、写入长期记忆，训练语料如何被快速软匹配，以及稀疏激活如何真正跑在 GPU 上。它把“agent engineering”推进到算法、系统和硬件共同设计层。"
summary: "Sakana AI 公布 ICML 2026 Seoul 参会论文线索，覆盖多智能体协调、稀疏 LLM、长程记忆、测试时扩展、语料检索和 agent benchmark。最值得关注的是，这组工作没有只围绕更强单模型，而是把 frontier AI 的瓶颈拆成系统问题：agent 如何在局部视角下达成一致，模型如何重排上下文、写入长期记忆，训练语料如何被快速软匹配，以及稀疏激活如何真正跑在 GPU 上。它把“agent engineering”推进到算法、系统和硬件共同设计层。"
issue_count: 12
deep_dive_count: 3
reading_time: 15
cover: "https://pub.sakana.ai/sheaf-admm/assets/figures/ogp.png"
signals: "SakanaAILabs · databricks · emollick · bindureddy · karpathy · mattshumer_ · ClementDelangue · togethercompute"
header-img: img/dark_yellow_400.png
---


## 1/12 Sakana ICML 2026 论文包把 agent 系统问题拆到协调、记忆和效率层
Sakana AI 公布 ICML 2026 Seoul 参会论文线索，覆盖多智能体协调、稀疏 LLM、长程记忆、测试时扩展、语料检索和 agent benchmark。最值得关注的是，这组工作没有只围绕更强单模型，而是把 frontier AI 的瓶颈拆成系统问题：agent 如何在局部视角下达成一致，模型如何重排上下文、写入长期记忆，训练语料如何被快速软匹配，以及稀疏激活如何真正跑在 GPU 上。它把“agent engineering”推进到算法、系统和硬件共同设计层。
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2073393327622516843)
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2073393647563706699)
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2073393424091484165)
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2073393918704750942)
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2073394995428753820)

## 2/12 TwELL 与 SoftMatcha 2 分别指向 LLM 成本和语料透明度
Sakana 与 NVIDIA 合作的 TwELL 研究针对 feedforward 层稀疏性，设计 Tile-wise ELLPACK sparse packing format 和 CUDA kernels，让 unstructured sparsity 能在 H100 这类 GPU 上转化为训练、推理、内存和能耗收益。SoftMatcha 2 则面向 trillion-token corpus search，用软匹配在 1.4T token 语料中快速发现语义相近片段和 benchmark contamination。两条研究共同说明，frontier AI 成本竞争不只靠模型蒸馏，也靠底层 kernel、数据结构和训练语料可审计性。
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2073393424091484165)
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2073393918704750942)

## 3/12 Sheaf-ADMM 把多智能体协调从编排器推进到可学习网络结构
Sakana 的 Sheaf-ADMM 论文和 JAX/Flax 实现把复杂任务拆成多个局部子问题，每个 agent 只看局部输入，先求解自己的 convex subproblem，再通过 sheaf-defined agreement 与邻居交换有限投影，并用 ADMM 迭代减少分歧。相较常见的中心化 orchestrator，这种方法研究的是没有全局控制器时，局部 agent 如何形成全局一致输出。它对多 agent 系统的意义在于，协调机制可以成为模型结构的一部分，而不是只靠 prompt、planner 或外部工作流脚本。
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2073393647563706699)
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2073240986898362812)

## 4/12 Databricks Omnigent 把多 coding agent 编排放到企业控制面
Databricks 推广开源 meta-harness Omnigent，定位是在多个 coding agent 之上提供统一编排层，让开发者按任务选择合适模型，并共享 session、guardrails 和 human-in-the-loop workflows。这个信号与当天关于 harness、routing 和 agent reliability 的讨论一致：企业不会只接入一个 coding assistant，而会同时使用 Claude Code、Codex、Cursor、内部 agent 和模型网关。真正的生产问题变成如何统一上下文、权限、审计、回滚和人工确认，而不是单个模型能否写代码。
- [查看 @databricks 原始推文](https://x.com/databricks/status/2073435509204881524)

## 5/12 Model router 讨论从固定路由转向强模型自我委派
Ethan Mollick 提出“what if the model is the router”，认为未来复杂任务可能先交给强 planner，再由它自行委派给更便宜、更弱或更专长的模型。Bindu Reddy 同日把 Fable 5、Opus 4.8、GPT 5.5 和 GLM 5.2 分别放到复杂系统架构、前端、后端和简单代码的位置。两条推文共同指向一个产品方向：routing 不再只是外部规则根据 benchmark 或价格表分流，而是 planner 需要理解任务结构、风险、可验证性、上下文需求和模型特长。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2073248523215089825)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2073218331042341074)

## 6/12 Fable 5 继续展示 long-horizon agentic creation 的形态
Fable 5 相关讨论延续升温。Ethan Mollick 展示模型把游戏做成“online AAA 想象中的 AAA”，包含 lootbox、EULA、成就、图形设置和启动画面；Bindu Reddy 强调 Fable 可在 always-on compute、database、auth 和 3D 资产上构建复杂系统；Karpathy 则从 3D world demos 中看到模型把知识、代码、空间坐标、mesh、animation 和小故事融合到可玩环境的能力。今天的重点不是单个 demo，而是 agentic creation 开始从短视频式展示走向完整产品结构和长期迭代。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2073226212462215300)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2073300611504955565)
- [查看 @karpathy 原始推文](https://x.com/karpathy/status/2073505440479293773)
- [查看 @karpathy 原始推文](https://x.com/karpathy/status/2073499112876761166)
- [查看 @mattshumer_ 原始推文](https://x.com/mattshumer_/status/2073610782797931003)

## 7/12 Hugging Face 用 250 个开放 AI 里程碑强化 open-source AI 政策叙事
Clement Delangue 发布“250 Years of America, 250 Open AI Milestones”集合，列出美国开放模型、数据集、论文和 Spaces，并把开放科学、开放竞争和开放生态定义为美国 AI 创新的基础。Hugging Face 官方转发后，这条叙事与 Together AI 关于 open-source models 带来数据控制、定制和 ownership 的 CNBC 片段相互呼应。开放模型讨论正在从“开发者是否喜欢开源”转向产业结构问题：训练成本能否 mutualize，企业数据能否留在自己手里，少数 closed labs 是否会集中 intelligence layer。
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2073373755632480517)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2073387290856955955)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2073471351613190330)

## 8/12 Agent harness 被重新定义为生产可靠性的核心
AlphaSignal 基于《The Hitchhiker's Guide to Agentic AI》强调，agent reliability lives in the harness, not the model。它把 harness 描述为负责模型调用、工具分发、状态跟踪、失败重试和日志的运行时；没有 harness，单次工具调用失败就可能让工作流静默卡住。这个观点与 Databricks Omnigent、LangGraph、OpenAI Agents SDK 和多 agent 协调讨论同频：生产级 agent 的关键不只是推理能力，而是执行系统是否能授权、恢复、记录、评估和让人类介入。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2073425930698023271)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2073425934175060161)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2073429354051195041)

## 9/12 ByteDance 38,000 小时 agent 实验把评估拉向长期真实任务
AlphaSignal 摘要称，ByteDance 在 134 个真实任务上运行 AI agents 约 38,000 小时，任务从 gravitational-wave detection 到 CPU design，并观察到一条数学曲线能预测五个 frontier models 的进步；带 memory 的 agent 明显优于 fresh restart，学习速度约每三个月翻倍。即使当天推文只给出摘要，这个方向也很重要：agent 评估正在离开一次性问答和短 benchmark，转向长时间、多任务、可学习、有记忆和能复用经验的真实工作流。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2073301281800872139)

## 10/12 长期记忆和上下文重排成为 Sakana 论文中的高频主题
Sakana 的 RePo、Doc-to-LoRA、Fast-weight Product Key Memory 和 CoffeeBench 都围绕一个共同问题：agent 和 LLM 如何在长上下文、长期任务和持续适应中保留有用信息。RePo 让模型按内容相关性重新分配位置，而不是固定线性 token index；Doc-to-LoRA 把文档内容转成可复用 LoRA adapter；FwPKM 结合 test-time training 与 sparse fast weights；CoffeeBench 用 90 天多 agent 经济模拟评估长期经营表现。这说明 memory 已经从产品功能变成模型结构、评估和部署成本问题。
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2073393499056030050)
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2073394035646177742)
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2073394995428753820)
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2073393587522601272)

## 11/12 AI 成本、治理和权力集中继续进入主流批评框架
Gary Marcus 转发“AI is now costing some companies more than the people it was supposed to replace”，并引用关于政府可能将最强 AI 用于压制性目的、同时限制市场和竞争者访问的警告。他还评论如果已经有 AGI，就不需要 forward deployed engineers。与开放模型、企业数据控制、harness 可靠性等主题放在一起看，今天的批评焦点不是单纯“AI 能不能做某项任务”，而是企业成本、部署边界、政治权力、市场集中和真实生产价值之间的关系。
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2073569156876628407)
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2073475829510676787)
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2073226191671271694)

## 12/12 July 4 低新闻量下，行业讨论仍集中在系统化 AI
今天 OpenAI、Anthropic、Google DeepMind 等头部实验室没有大型发布，多位高互动账号内容偏节日、体育或政治。Sam Altman、Sundar Pichai、Lisa Su、Scale AI 和 Bindu Reddy 都围绕美国 250 周年谈创新或国家能力。真正有信息密度的 AI 推文则集中在系统化方向：Sakana 讲协调、稀疏、记忆和 benchmark；Databricks 讲 meta-harness；AlphaSignal 讲 harness 与长期评估；Hugging Face 和 Together 讲开放生态与数据控制。frontier AI 竞争继续从单点模型发布转向可控、可审计、可复用的生产系统。
- [查看 @sama 原始推文](https://x.com/sama/status/2073635910512726444)
- [查看 @sundarpichai 原始推文](https://x.com/sundarpichai/status/2073436433415614491)
- [查看 @LisaSu 原始推文](https://x.com/LisaSu/status/2073469993837293629)
- [查看 @scale_AI 原始推文](https://x.com/scale_AI/status/2073407373646221414)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2073462459680334219)

---

## Deep Dive 附录

### Sakana ICML 2026 research package
Sakana AI 今天集中公开 ICML 2026 相关论文线索，形成一个很清楚的系统研究包。Sheaf-ADMM 从 sheaf theory 和 ADMM distributed consensus 出发，让局部 agent 只在必要投影上达成一致；TwELL 与 NVIDIA 合作，把 unstructured sparsity 映射到 tiled GPU workloads 和 CUDA kernels；SoftMatcha 2 在 trillion-scale corpora 中做快速软匹配，用于发现 benchmark contamination；RePo、Doc-to-LoRA、FwPKM 和 CoffeeBench 则分别处理上下文重排、长期记忆、test-time 写入和长周期 agent 评估。整体信号是，frontier AI 的下一层竞争会同时发生在协调算法、记忆结构、语料审计、GPU kernel 和 agent benchmark 上。
[查看原文](https://pub.sakana.ai/sheaf-admm/)
[查看原文](https://pub.sakana.ai/sparser-faster-llms/)
[查看原文](https://softmatcha.github.io/v2/)

### 250 Years of America, 250 Open AI Milestones
Hugging Face 这个集合为美国 250 周年整理 250 个开放 AI 里程碑，覆盖 open models、datasets、papers 和 Spaces。列表从 Attention Is All You Need、PyTorch、BERT、GPT-2、word2vec、Transformers、ULMFiT、Llama 2、Whisper、gpt-oss、ImageNet、TensorFlow 等开始，用排序方式把开放生态写成一条产业史。Clement Delangue 的推文把它放进政策语境：开放科学、开放竞争和开放生态让研究者与 builder 能互相复用、挑战和 remix，而闭源 frontier labs 的集中训练与分发可能改变未来 AI 的权力结构。
[查看原文](https://huggingface.co/collections/clem/250-years-of-america-250-open-ai-milestones)

### The Hitchhiker's Guide to Agentic AI
Haggai Roitman 的《The Hitchhiker's Guide to Agentic AI: From Foundations to Systems》是一份面向 practitioner 的 agentic AI 全栈参考。arXiv 摘要显示，它从 transformer、GPU systems、training、fine-tuning、compression 和 inference optimization 讲到 alignment、reasoning、RLHF、DPO、GRPO、test-time scaling，再进入 agentic training、RAG、memory systems、harness design、context management、MCP、skills、tools、A2A、多 agent 拓扑、UI、evaluation 和 production deployment。AlphaSignal 今天引用它强调 harness 是生产可靠性的核心，这与当前 agent 工具从 demo 进入真实工作流的趋势高度一致。
[查看原文](https://arxiv.org/abs/2606.24937)
