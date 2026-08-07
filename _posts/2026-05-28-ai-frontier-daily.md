---
layout: daily
title: "AI Frontier Daily | 2026.05.28"
headline: "OpenAI Foundation 承诺 2.5 亿美元研究 AI 时代经济未来"
date: 2026-05-28 09:07:00 +0800
permalink: /ai-daily/2026/05/28/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Sam Altman 转发 OpenAI Foundation 新项目：基金会将初始投入 2.5 亿美元，用于 measurement、transition support 和 broadly shared prosperity 三类工作。官方文章把重点放在 AI 对劳动、收入、公共服务和经济安全的结构性影响上，主张资助独立测量与预测基础设施、支持工人与社区应对近期转型，并探索税制、公共财富基金、数据治理和多 agent 经济模拟等长期制度方案。这不是模型发布，而是 OpenAI 将 AI 经济影响议题制度化、基金化的明确信号。"
summary: "Sam Altman 转发 OpenAI Foundation 新项目：基金会将初始投入 2.5 亿美元，用于 measurement、transition support 和 broadly shared prosperity 三类工作。官方文章把重点放在 AI 对劳动、收入、公共服务和经济安全的结构性影响上，主张资助独立测量与预测基础设施、支持工人与社区应对近期转型，并探索税制、公共财富基金、数据治理和多 agent 经济模拟等长期制度方案。这不是模型发布，而是 OpenAI 将 AI 经济影响议题制度化、基金化的明确信号。"
issue_count: 15
deep_dive_count: 8
reading_time: 20
cover: "https://images.ctfassets.net/otoa9rt8o2ha/4MYB3fplPfE802J9apzjVh/864c80d481b8c4bfecc9591d0b0125c8/OAIF-meta_2.jpg"
signals: "sama · SakanaAILabs · hardmaru · Alibaba_Qwen · NVIDIAAI · sundarpichai · runwayml · perplexity_ai"
header-img: img/dark_yellow_400.png
---


## 1/15 OpenAI Foundation 承诺 2.5 亿美元研究 AI 时代经济未来
Sam Altman 转发 OpenAI Foundation 新项目：基金会将初始投入 2.5 亿美元，用于 measurement、transition support 和 broadly shared prosperity 三类工作。官方文章把重点放在 AI 对劳动、收入、公共服务和经济安全的结构性影响上，主张资助独立测量与预测基础设施、支持工人与社区应对近期转型，并探索税制、公共财富基金、数据治理和多 agent 经济模拟等长期制度方案。这不是模型发布，而是 OpenAI 将 AI 经济影响议题制度化、基金化的明确信号。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/sama/status/2059677202917331431" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sama</a></div>

## 2/15 Sakana AI 发布 DiffusionBlocks，用扩散解释做逐块训练
Sakana AI 与 Hardmaru 发布 DiffusionBlocks，并称论文已被 ICLR 2026 接收。方法把神经网络前向过程解释为类似扩散模型的逐步去噪，每个 block 只需学习把前一层表示推近目标表示，从而可以按 block 独立训练，训练时只保留单个 block 的内存。官方称该框架在 ViT、DiT、Masked Diffusion、AR Transformer 和 recurrent-depth Transformer 上接近端到端训练表现，目标是缓解深模型训练随深度线性增长的内存瓶颈。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs<span class="source-chip__links"><a href="https://x.com/SakanaAILabs/status/2059648778051924281" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 1">1</a><a href="https://x.com/SakanaAILabs/status/2059766095154668008" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/hardmaru/status/2059648995132367277" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a></div>

## 3/15 Qwen3.5 在 TokenSpeed 上达到 agentic workload 约 580 tok/s
Qwen 官方转发 PyTorch 博客，称 Qwen3.5 在 TokenSpeed 推理引擎上为 agentic workloads 创下 580 tokens/s 记录。博客以 Qwen3.5-397B-A17B-NVFP4 在 NVIDIA B200 上评测，模拟 50K 首轮上下文、每轮追加 800 tokens、10-15 轮的 agent 调用模式；TP8 配置在 batch size 1 下达到约 580 tok/s，长上下文 NIAH 1M 场景下 decode 仍保持约 445 tok/s/user。Qwen 同日还称 Qwen3.7-Max 登上 Code Arena 第 4。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Alibaba_Qwen<span class="source-chip__links"><a href="https://x.com/Alibaba_Qwen/status/2059674574397313277" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 1">1</a><a href="https://x.com/Alibaba_Qwen/status/2059445345667747849" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/NVIDIAAI/status/2059678737072013506" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI</a></div>

## 4/15 Google AI Threat Defense 把 Wiz、CodeMender、Mandiant 和 Gemini 组合成安全平台
Sundar Pichai 转发 Google Cloud 的 AI Threat Defense 发布。Google 将其定位为 always-on autonomous security platform，核心不是单一模型扫描漏洞，而是结合 Wiz 的真实暴露面与风险优先级、Gemini/CodeMender 的代码修复能力、Mandiant 的前线响应经验，以及多模型扫描策略。官方强调攻击者用 AI 缩短漏洞发现和利用窗口后，防守侧需要从人工漏洞管理转向 prepare、scan and prioritize、remediate、monitor 的持续机器速度闭环。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/sundarpichai/status/2059738137233105390" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sundarpichai</a></div>

## 5/15 NVIDIA Dynamo Snapshot 试图把推理冷启动从分钟级压到秒级
NVIDIA AI 发布 Dynamo Snapshot，面向 Kubernetes 上的推理 workload 冷启动问题。官方说明生产推理负载波动时，冷启动大模型 worker 会让 GPU 空闲数分钟；Snapshot 使用 GMS、Linux AIO、parallel memfd restoration、CRIU 和 cuda-checkpoint 等机制恢复已初始化状态。文档将标准 cold start 描述为下载模型、加载 GPU、初始化引擎的约 1 分钟流程，而 warm restore 可降到约 10 秒；推文则称目标是把分钟级启动压到 5 秒以内。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI<span class="source-chip__links"><a href="https://x.com/NVIDIAAI/status/2059785750367850916" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 1">1</a><a href="https://x.com/NVIDIAAI/status/2059785755275276416" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 2">2</a></span></span></div>

## 6/15 Runway MCP 把生成式视频和图片接入 Claude、ChatGPT、Cursor、Replit
Runway 发布 Runway MCP，允许支持 MCP 的 agent 直接在 Claude、ChatGPT、Cursor、Replit 等环境调用 Runway 的生成式媒体能力。官方帮助文档说明用户无需单独 API key，而是添加 `https://mcp.runwayml.com/mcp` 并登录 Runway 账号，agent 可根据账户计划使用 Seedance 2.0、Kling、Gen-4.5、Veo、GPT image 2、Nano Banana Pro 等模型。生成式媒体工具正在从独立创作台进入通用 agent 工作流。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml<span class="source-chip__links"><a href="https://x.com/runwayml/status/2059636517283176479" target="_blank" rel="noopener" aria-label="@runwayml 原文 1">1</a><a href="https://x.com/runwayml/status/2059636519103557747" target="_blank" rel="noopener" aria-label="@runwayml 原文 2">2</a></span></span></div>

## 7/15 Perplexity 开源更快的 Unigram tokenizer，降低 reranker CPU 瓶颈
Perplexity 宣布开源为 XLM-RoBERTa 250K Unigram 词表重写的 tokenizer encoder，目标是降低小型 reranker 和 embedder 在 GPU 单位毫秒推理时被 CPU tokenization 拖慢的问题。官方 thread 称在生产输入长度下，新 encoder 相比 HuggingFace tokenizers p50 延迟约快 5 倍、相比 SentencePiece C++ 约快 2 倍、相比 IREE C 约快 1.5 倍；514 tokens 场景可在 63 微秒运行且无 heap allocation。项目已放在 Perplexity 的 pplx-garden 仓库。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@perplexity_ai<span class="source-chip__links"><a href="https://x.com/perplexity_ai/status/2059664738087469511" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 1">1</a><a href="https://x.com/perplexity_ai/status/2059664759247777877" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 2">2</a><a href="https://x.com/perplexity_ai/status/2059664780135428184" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 3">3</a><a href="https://x.com/perplexity_ai/status/2059664793234231555" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 4">4</a></span></span></div>

## 8/15 xAI 让 SuperGrok 和 X Premium+ 订阅可直接用于 Kilo Code
xAI 宣布 SuperGrok 或 X Premium+ 用户可以在开源 agentic coding 平台 Kilo Code 中使用 Grok，包括面向 agentic coding 的 grok-build-0.1。官方页面说明 Kilo Code 支持 VS Code、JetBrains IDE 和 CLI，提供 planning、coding、debugging、orchestration 等模式，并支持 browser automation、MCP extensibility 和 500+ 模型。xAI 此举绕开独立 API key，把消费订阅直接带入开发者 agent 工具链。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/xai/status/2059666227115819149" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@xai</a></div>

## 9/15 OpenAI Codex 继续扩展到会议、MCP、浏览器子 agent 和安全分析
Greg Brockman 连续展示 Codex 的多种用法：实时转录会议并回答问题、bring-your-own MCP servers、并行 browser-using subagents、分析 cybersecurity 任务，以及作为“任何电脑工作”的通用执行层。与昨日的 GPT-5.5 coding 讨论相连，Codex 正从代码修改工具扩展成带上下文、工具、浏览器和文件系统的工作代理。值得注意的是，这些示例更强调组合式工作流，而不是单个 IDE 内的补全质量。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb<span class="source-chip__links"><a href="https://x.com/gdb/status/2059519197562929416" target="_blank" rel="noopener" aria-label="@gdb 原文 1">1</a><a href="https://x.com/gdb/status/2059662726256075023" target="_blank" rel="noopener" aria-label="@gdb 原文 2">2</a><a href="https://x.com/gdb/status/2059733344783630352" target="_blank" rel="noopener" aria-label="@gdb 原文 3">3</a><a href="https://x.com/gdb/status/2059735815262249392" target="_blank" rel="noopener" aria-label="@gdb 原文 4">4</a><a href="https://x.com/gdb/status/2059767326971724016" target="_blank" rel="noopener" aria-label="@gdb 原文 5">5</a></span></span></div>

## 10/15 LangChain 继续把 agent 生产化重点放在成本、上下文和长程执行
Harrison Chase 当天集中讨论 LangSmith LLM Gateway、Managed Deep Agents 和 Context Hub。LLM Gateway 的卖点是当企业 adoption 扩大后提供成本控制，避免 agent 一夜烧掉高额 token；Managed Deep Agents 面向长时间、工具调用、上下文保持和产出交付；Context Hub 则管理 skills、AGENTS.md 和其他 agent context files，并可作为 deepagents 的虚拟文件系统。这些产品线显示 agent 平台竞争正在转向运行治理、上下文资产和长程任务基础设施。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17<span class="source-chip__links"><a href="https://x.com/hwchase17/status/2059733690704679380" target="_blank" rel="noopener" aria-label="@hwchase17 原文 1">1</a><a href="https://x.com/hwchase17/status/2059730136623395054" target="_blank" rel="noopener" aria-label="@hwchase17 原文 2">2</a><a href="https://x.com/hwchase17/status/2059687279199924462" target="_blank" rel="noopener" aria-label="@hwchase17 原文 3">3</a></span></span></div>

## 11/15 LlamaIndex 重写 LiteParse：Rust、JS/TS、Python 和 WASM 全端运行
LlamaIndex 发布 LiteParse v2.0，称其从零用 Rust 重写，解析速度最高提升 100 倍，并可原生安装到 Rust、JavaScript/TypeScript、Python，也可通过自定义 WASM package 在浏览器和 edge runtime 中运行。LiteParse 定位是快速、开源、本地、model-free 的文档解析器，输出文本、bbox 和 confidence 等结构；复杂表格、多栏、图表、手写和扫描 PDF 仍建议使用云端 LlamaParse。企业 agent 的文档入口正在明显分层：轻量本地解析与复杂云解析并存。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@llama_index<span class="source-chip__links"><a href="https://x.com/llama_index/status/2059675872408260816" target="_blank" rel="noopener" aria-label="@llama_index 原文 1">1</a><a href="https://x.com/llama_index/status/2059793043277156427" target="_blank" rel="noopener" aria-label="@llama_index 原文 2">2</a></span></span></div>

## 12/15 ESMFold2 与 ESM Atlas 把 protein world model 推向十亿结构规模
Yann LeCun 转发 Biohub/ESM 相关进展：ESMFold2 是基于 ESMC 6B 的结构预测模型，用 diffusion-based structure prediction architecture 直接从氨基酸序列预测高分辨率全原子 3D 结构，并支持可选 MSA。Biohub README 称 ESMFold2 在 Foldbench 的 protein-protein 和 antibody-antigen complex 指标上超过其他模型，单序列模式可获得数量级折叠加速；ESM Atlas 覆盖 68 亿蛋白，借助 ESMFold2 预测超过 10 亿结构。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/ylecun/status/2059653529439006823" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ylecun</a></div>

## 13/15 NotebookLM 自动同步 Google Drive 文件，AI 笔记从快照走向活文档
Sundar Pichai 转发 NotebookLM 的 Drive 自动同步功能。Google Workspace 更新说明，NotebookLM 现在可以让 Google Drive sources 随原文件变化自动更新，减少用户在文档修改后重新上传或手动刷新资料源的摩擦。对研究、教学和企业知识库而言，这代表 AI notebook 从一次性 snapshot ingestion 走向可持续同步的 source graph；当 NotebookLM 与 Gemini、Drive、Docs 更深集成时，知识助理的核心体验会越来越依赖资料新鲜度。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/sundarpichai/status/2059674914165297432" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sundarpichai</a></div>

## 14/15 Databricks 与 Lovable 展示 governed data 上的自然语言应用生成
Databricks 宣布 Lovable 集成 Databricks，允许非技术用户通过自然语言构建可读写 Databricks 数据的 live applications，包括 dashboard、operational tools、internal chatbots 和 custom apps，并强调不需要 ETL、replication 或 sync jobs。Databricks 同日继续讲述 AI boom 后企业已经从 agentic AI 获得实际价值。数据平台正在把治理、事务数据、serverless 数据库和 AI app builder 合并，目标是让企业应用生成直接发生在受控数据边界内。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks<span class="source-chip__links"><a href="https://x.com/databricks/status/2059645286222295141" target="_blank" rel="noopener" aria-label="@databricks 原文 1">1</a><a href="https://x.com/databricks/status/2059730888628338772" target="_blank" rel="noopener" aria-label="@databricks 原文 2">2</a></span></span></div>

## 15/15 AI token budget 从实验成本变成工程管理问题
Ethan Mollick 连续讨论企业 token budget：很多大组织在年初几个月就耗尽全年 token 预算，而内部还没有成熟流程判断谁该用最多 token、哪些用例优先、如何在 adoption 与 cost control 间平衡。Harrison Chase 关于 LangSmith LLM Gateway 的成本控制讨论与此呼应。随着 coding agent、长上下文分析和多 agent 工作流变成日常工具，token 不再是抽象 API 成本，而是类似云资源配额、权限和 FinOps 的组织管理对象。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2059640930265686158" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2059641771311681583" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a><a href="https://x.com/emollick/status/2059642485559685506" target="_blank" rel="noopener" aria-label="@emollick 原文 3">3</a><a href="https://x.com/emollick/status/2059654566820323350" target="_blank" rel="noopener" aria-label="@emollick 原文 4">4</a></span></span><a class="source-chip" href="https://x.com/hwchase17/status/2059733690704679380" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17</a></div>

---

## Deep Dive 附录

### OpenAI Foundation: Economic Futures in the Age of AI
OpenAI Foundation 将 2.5 亿美元初始承诺拆成三条线：第一，资助独立 measurement 与 forecasting infrastructure，理解 AI 对劳动市场、工资、任务重组、企业行为和不同地区经济的影响；第二，支持 transition measures，包括失业和工资损失保险、职业转换、公共服务能力建设、让劳动者参与 AI 部署决策；第三，探索长期 economic security 设计，包括从劳动税向资本和经济租转移、windfall 或 excess-return 机制、公共/主权财富基金、compute access 和数据治理等。文章强调不等待确定性，而是资助可测试、可治理、可修订、可扩展的制度选项。
[查看原文](https://openaifoundation.org/news/economic-futures-in-the-age-of-ai)

### Sakana AI DiffusionBlocks
DiffusionBlocks 的核心是把网络按 block 分解，把每个 block 的训练目标定义为把表示向目标分布推进一步，类似扩散模型的逐步去噪。这样训练时不必把整个深网络的激活同时放进内存，而只需训练当前 block。Sakana 称该方法在图像分类、图像生成和文本生成的 5 类架构中接近端到端表现，并自然扩展到 recurrent-depth Transformer，减少 backpropagation through depth 的内存负担。论文和代码已公开，定位是让大规模训练在内存受限场景更可行。
[查看原文](https://sakana.ai/diffusionblocks/)
[查看原文](https://arxiv.org/abs/2506.14202)
[查看原文](https://github.com/SakanaAI/DiffusionBlocks)

### Qwen3.5 + TokenSpeed on PyTorch
PyTorch 博客把 Qwen3.5-397B-A17B 作为代表，在 Blackwell B200 上评测 TokenSpeed。agentic workload 模拟多轮工具调用和长上下文历史：50K 首轮上下文、每轮增加 800 tokens、共 10-15 轮。结果显示 TP4、TP4EP4、TP8、TP8EP8 在 batch size 1 下均超过 500 tok/s，TP8 峰值约 580 tok/s；concurrent=16 时 TP4 系列可达约 2K tok/min/GPU system throughput。长上下文测试中，1M prompt 下 decode 仍约 445 tok/s/user，说明 KV cache 与 decode memory-access 优化对 agent 负载很关键。
[查看原文](https://pytorch.org/blog/up-to-580tps-new-speed-record-of-qwen3-5-397b-a17b-on-gpu-for-agentic-workloads-with-tokenspeed/)

### Google AI Threat Defense
Google AI Threat Defense 将 Google Cloud、Wiz、Mandiant、Gemini 和 CodeMender 组合成面向 AI 时代攻击速度的安全平台。Google 的论点是，攻击者已能用 AI 快速发现和利用漏洞，传统人工漏洞管理无法跟上；防守侧需要实时暴露面图谱、AI 驱动的 exploitability validation、多模型扫描、风险优先级排序、自动补丁生成、测试验证和运行时监控。平台的四步框架是 prepare、scan and prioritize、remediate、monitor，强调自治但有人类监督，而不是生成大量未排序的漏洞告警。
[查看原文](https://cloud.google.com/blog/products/identity-security/introducing-google-ai-threat-defense)

### NVIDIA Dynamo Snapshot
Dynamo Snapshot 是 NVIDIA Dynamo 在 Kubernetes 上的 fast-startup 组件，使用 CRIU 和 `cuda-checkpoint` 保存已初始化 GPU application state，之后从 checkpoint 恢复 worker，减少模型下载、GPU 加载和 engine 初始化造成的冷启动。文档说明功能仍处于 preview，对 x86_64 GPU nodes、NVIDIA driver 580+、vLLM 或 SGLang backend、checkpoint storage 和 privileged snapshot-agent 有要求。它的价值在于把弹性推理扩缩容时的空闲 GPU 时间压缩，从而提高 agentic 和 generative inference 的生产效率。
[查看原文](https://developer.nvidia.com/blog/nvidia-dynamo-snapshot-fast-startup-for-inference-workloads-on-kubernetes/)
[查看原文](https://docs.dynamo.nvidia.com/dynamo/dev/kubernetes-deployment/deployment-guide/snapshot)

### Runway MCP
Runway MCP 把 Runway 的图片和视频生成能力变成可被通用 agent 调用的 MCP server。用户在 Claude、ChatGPT、Cursor 或 Replit 中添加 `https://mcp.runwayml.com/mcp` 并登录 Runway 后，agent 可在对话或代码环境里生成媒体，费用按 Runway credits 计算。支持模型取决于账户计划，官方列出 Seedance 2.0、Kling、Gen-4.5、Veo、GPT image 2、Nano Banana Pro 等。它把创意生成从单独网页应用推进到 agent 工作台，尤其适合 storyboard、产品素材、演示和开发流程中的即时媒体生成。
[查看原文](https://runwayml.com/mcp)
[查看原文](https://help.runwayml.com/hc/en-us/articles/51931843164691-Connecting-to-Runway-MCP)

### Perplexity Unigram tokenizer
Perplexity 的 tokenizer 工作针对 XLM-RoBERTa 的 250K Unigram vocabulary。问题背景是小 reranker 和 embedder 已能在 GPU 上以个位数毫秒运行，CPU tokenization 因此成为总延迟的重要部分。新 encoder 与 reference tokenizer 输出一致，但避免重建字符串和频繁 hash map lookup；thread 披露在生产输入长度上 p50 延迟约比 HuggingFace tokenizers 快 5 倍，比 SentencePiece C++ 快 2 倍，比 IREE C 快 1.5 倍。对检索、排序和实时问答系统来说，这类底层 CPU 优化会直接影响端到端延迟。
[查看原文](https://research.perplexity.ai/articles/improving-unigram-tokenizer-cpu-performance)
[查看原文](https://github.com/perplexityai/pplx-garden)

### ESMFold2 and ESM Atlas
Biohub 的 ESM release 将 ESMC、ESMFold2 和 ESM Atlas 组合成 protein biology world model。ESMFold2 基于 ESMC 6B embedding 和 diffusion-based structure prediction architecture，可直接从 amino acid sequence 预测高分辨率 all-atom 3D structure，并支持可选 MSA；README 称其在 Foldbench protein-protein 与 antibody-antigen complex 指标上超过其他模型，单序列模式可获得数量级速度提升。ESM Atlas 覆盖 68 亿蛋白，并包含超过 10 亿个由 ESMFold2 生成的结构预测。
[查看原文](https://github.com/Biohub/esm)
