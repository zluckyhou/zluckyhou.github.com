---
layout: daily
title: "AI Frontier Daily | 2026.05.14"
headline: "UK AISI 称 autonomous cyber capability 约 4.5 个月翻倍"
date: 2026-05-14 09:07:00 +0800
permalink: /ai-daily/2026/05/14/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Ethan Mollick 转述英国 AI Security Institute 的最新评估：frontier AI 在 autonomous cyber tasks 上的能力快速上升，Mythos 有明显 cyber capability gain，GPT-5.5 也同样强；更难的是给两者能力上限做判断，因为表现似乎受 token 使用量约束，而不只是能力约束。报告把任务长度能力的 doubling time 估为 4.5 个月，并与 METR 结果相互印证。cyber 继续成为 agentic AI 最重要的评测与治理场景：任务可验证、价值高、风险明确，也能直接检验模型是否具备长程规划、工具使用和故障恢复能力。"
summary: "Ethan Mollick 转述英国 AI Security Institute 的最新评估：frontier AI 在 autonomous cyber tasks 上的能力快速上升，Mythos 有明显 cyber capability gain，GPT-5.5 也同样强；更难的是给两者能力上限做判断，因为表现似乎受 token 使用量约束，而不只是能力约束。报告把任务长度能力的 doubling time 估为 4.5 个月，并与 METR 结果相互印证。cyber 继续成为 agentic AI 最重要的评测与治理场景：任务可验证、价值高、风险明确，也能直接检验模型是否具备长程规划、工具使用和故障恢复能力。"
issue_count: 14
deep_dive_count: 8
reading_time: 20
cover: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/OG%20Images/cloud-agents-og-7.png"
signals: "emollick · GaryMarcus · cursor_ai · sama · gdb · OpenAI · NVIDIAAI · runwayml"
header-img: img/dark_yellow_400.png
---


## 1/14 UK AISI 称 autonomous cyber capability 约 4.5 个月翻倍
Ethan Mollick 转述英国 AI Security Institute 的最新评估：frontier AI 在 autonomous cyber tasks 上的能力快速上升，Mythos 有明显 cyber capability gain，GPT-5.5 也同样强；更难的是给两者能力上限做判断，因为表现似乎受 token 使用量约束，而不只是能力约束。报告把任务长度能力的 doubling time 估为 4.5 个月，并与 METR 结果相互印证。cyber 继续成为 agentic AI 最重要的评测与治理场景：任务可验证、价值高、风险明确，也能直接检验模型是否具备长程规划、工具使用和故障恢复能力。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2054595505712165154" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2054596048622899643" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/GaryMarcus/status/2054591239048007791" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GaryMarcus</a></div>

## 2/14 Cursor 为 cloud agents 推出可复用开发环境
Cursor 宣布 cloud agents 和 automations 现在可以运行在 fully configured development environments 中。团队可以像配置工程师电脑一样配置 agent 环境：克隆仓库、安装依赖、准备工具链 credentials，并把多仓库环境复用于不同会话。Cursor 同时加入 environment version history、rollback、audit log，以及按环境隔离 egress 和 secrets 的能力。这个更新说明 coding agents 的企业化瓶颈正在从模型能力转向运行环境：可复现、可审计、可回滚、可隔离的 workspace 会决定 agent 是否能处理端到端工程任务。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai<span class="source-chip__links"><a href="https://x.com/cursor_ai/status/2054651526715502998" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 1">1</a><a href="https://x.com/cursor_ai/status/2054651529315889645" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 2">2</a><a href="https://x.com/cursor_ai/status/2054651531811590587" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 3">3</a><a href="https://x.com/cursor_ai/status/2054651533204103590" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 4">4</a></span></span></div>

## 3/14 OpenAI 继续推动 Codex 企业采用与 Windows sandbox
Sam Altman 表示，为了让企业更容易试用 Codex，未来 30 天将向想切换的公司提供两个月免费 Codex usage。Greg Brockman 同日发文称企业对采用 Codex 的兴趣很高，并开始介绍 Codex sandbox for Windows 的构建方式。OpenAI 官方账号也转发“Another reason to switch to Codex”。这组信号显示 coding agent 竞争进入企业 adoption 阶段：价格/试用门槛、跨平台 sandbox、企业安全边界和真实代码库接入能力，正在变得和模型本身一样重要。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/sama/status/2054626219858293128" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sama</a><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb<span class="source-chip__links"><a href="https://x.com/gdb/status/2054710146924683586" target="_blank" rel="noopener" aria-label="@gdb 原文 1">1</a><a href="https://x.com/gdb/status/2054744721570820444" target="_blank" rel="noopener" aria-label="@gdb 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/OpenAI/status/2054620621255192719" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a></div>

## 4/14 NVIDIA 把 agentic inference 定义为全栈 co-design 问题
NVIDIA 发布 agentic systems extreme co-design 文章，称大规模 agentic inference 需要同时平衡模型与算法、软件、计算三层效率，并通过 compute、networking、storage、memory 和生态软件持续优化。NVIDIA 还提到 100K-token agent systems 中 tokenization 正成为隐藏瓶颈，fastokens 已开源并集成 Dynamo 与 LMSYS。这个方向把 agent 成本问题从“选什么模型”扩展到完整 pipeline：长上下文、工具调用、多轮规划和并发服务都会放大 tokenizer、KV cache、调度和内存路径的成本。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI<span class="source-chip__links"><a href="https://x.com/NVIDIAAI/status/2054622706486649233" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 1">1</a><a href="https://x.com/NVIDIAAI/status/2054622709368135755" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 2">2</a><a href="https://x.com/NVIDIAAI/status/2054717184140779818" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 3">3</a></span></span></div>

## 5/14 Runway Agent 把视频生成包装成对话式创意工作流
Runway 发布 Runway Agent，称其是新的 AI creative partner，可以通过简单对话帮助用户 ideate 并执行 fully finished、sound designed、edited videos，覆盖 ads、shorts 和 social content。这个发布的重点不是单个视频模型指标，而是把生成式视频放进完整制作流程：从想法、素材、剪辑、声音到最终交付都由 agent 组织。Luma Labs 同日也继续展示 Luma Agents 在 launch teaser、包装图和广告资产中的用法。视频生成竞争正在从画质扩展到可控工作流和营销资产生产。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml<span class="source-chip__links"><a href="https://x.com/runwayml/status/2054593196773011929" target="_blank" rel="noopener" aria-label="@runwayml 原文 1">1</a><a href="https://x.com/runwayml/status/2054593198400348377" target="_blank" rel="noopener" aria-label="@runwayml 原文 2">2</a></span></span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LumaLabsAI<span class="source-chip__links"><a href="https://x.com/LumaLabsAI/status/2054667125865009448" target="_blank" rel="noopener" aria-label="@LumaLabsAI 原文 1">1</a><a href="https://x.com/LumaLabsAI/status/2054634217972339039" target="_blank" rel="noopener" aria-label="@LumaLabsAI 原文 2">2</a></span></span></div>

## 6/14 Perplexity 公开 Computer 的企业安全默认值
Perplexity 介绍 Computer 的安全设计：每个任务运行在 hardware-isolated sandbox 中，storage 和 compute 具备 VPC-level separation；agents 使用 short-lived proxy tokens，而不是直接持有 raw API keys；外部内容会在 agent 执行前被 ML classifiers 和 BrowseSafe 并行扫描；file connector data 传输和静态存储均加密，上传文件 7 天后自动删除。Perplexity 还称 PayPal 每周运行 74,000 个 Enterprise tasks，用于模型验证、渠道表现、市场趋势、竞品情报和产品分析。企业 agent 叙事正快速转向隔离、凭证、数据生命周期和规模化使用量。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@perplexity_ai<span class="source-chip__links"><a href="https://x.com/perplexity_ai/status/2054608966148374715" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 1">1</a><a href="https://x.com/perplexity_ai/status/2054608978680873457" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 2">2</a><a href="https://x.com/perplexity_ai/status/2054577555387371577" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 3">3</a></span></span></div>

## 7/14 Databricks 用 ABAC 和 Genie 连接治理数据与自然语言分析
Databricks 宣布 Unity Catalog 中 ABAC policies、governed tags 和 automated data classification 正式 GA。治理团队可以定义自动套用到整个数据资产的访问规则，敏感数据在创建时被发现、打标和保护，减少逐表配置。Databricks 另在 SaaStr 讨论 Genie 如何让 HR、零售、金融顾问等不常使用 BI 工具的员工用自然语言获得 governed answers。企业 AI 的关键问题正在变成“谁能安全问什么数据”：agent 和自然语言分析要落地，必须和身份、标签、分类、masking、审计紧密结合。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks<span class="source-chip__links"><a href="https://x.com/databricks/status/2054608777966399514" target="_blank" rel="noopener" aria-label="@databricks 原文 1">1</a><a href="https://x.com/databricks/status/2054675645624377433" target="_blank" rel="noopener" aria-label="@databricks 原文 2">2</a></span></span></div>

## 8/14 Hugging Face ml-intern 把 agent 推向机器学习研究闭环
AlphaSignalAI 介绍 Hugging Face 开源的 ml-intern CLI agent，称其可以读取论文和引用、拉取数据集、编写训练脚本、启动 GPU jobs，并在实验失败后诊断和迭代。推文提到它在 scientific reasoning 中训练 Qwen3-1.7B，把 GPQA 从 10% 推到 32%；在 healthcare 场景中生成 1,100 条 synthetic samples 并上采样；在数学任务中通过 ablations 恢复失败训练。虽然这些数字还需要结合原始 repo 和复现实验理解，但方向明确：AI agent 正从代码编辑扩展到数据处理、训练、评测和实验管理。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2054577916822921554" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2054577917779177604" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a></span></span></div>

## 9/14 AI21 总结四种 agent accuracy-cost 优化方法
AI21 Labs 用 BrowseComp-Plus 讨论 agent 优化：simple model testing 用 prompt 和模型评估找 operating point；agent scaffolding 通过 prompts、tools、skills、execution policies、retries 和 memory 构建 harness；Best-of-N 并行运行同一 agent config 多次再选最好轨迹；Ensemble 则并行运行多个不同 agent configs，再选择最佳路径。这个 thread 代表 agent engineering 从“写好 prompt”走向系统化实验：团队需要同时管理准确率、延迟、成本、评测器可靠性和工具配置，而不是只押注单次模型输出。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AI21Labs<span class="source-chip__links"><a href="https://x.com/AI21Labs/status/2054516608127619287" target="_blank" rel="noopener" aria-label="@AI21Labs 原文 1">1</a><a href="https://x.com/AI21Labs/status/2054516611634057233" target="_blank" rel="noopener" aria-label="@AI21Labs 原文 2">2</a><a href="https://x.com/AI21Labs/status/2054516615513825720" target="_blank" rel="noopener" aria-label="@AI21Labs 原文 3">3</a><a href="https://x.com/AI21Labs/status/2054516619573887060" target="_blank" rel="noopener" aria-label="@AI21Labs 原文 4">4</a><a href="https://x.com/AI21Labs/status/2054516623487209804" target="_blank" rel="noopener" aria-label="@AI21Labs 原文 5">5</a></span></span></div>

## 10/14 NVIDIA OpenShell v0.0.40 加入 routing、K8s 和安全修复
NVIDIAAI 介绍 OpenShell v0.0.40：gateway 加入 local-domain service routing，Kubernetes 支持 node scheduling 与 tolerations，CLI TLS 改为使用 OS trust store，同时修复 SecretResolver debug 泄露 secrets 的问题。这个更新相对底层，但和 agent infrastructure 主线一致：当 agents 需要访问更多内部服务、运行在集群里、持有更多临时凭证时，gateway routing、调度约束、TLS trust 和 secret hygiene 会影响真实生产安全。agent runtime 的成熟度越来越体现在这些看似普通的运维细节上。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/NVIDIAAI/status/2054610877765275748" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI</a></div>

## 11/14 AutoScientist 和 local AI researcher 概念继续升温
Together Compute 转发 adaption_ai 的 AutoScientist：目标是自动化完整研究循环，解决 frontier labs 之外模型训练经常失败的问题。Hugging Face 也转发社区内容，称可以在本地 24/7 运行 AI researcher，例如用 llama.cpp 和 4-bit quantized Qwen3-35B-A3B。Yoav Goldberg 则质疑某些“AutoScientist”是否更准确地说是“AutoModelTrainer”。这组讨论显示，AI-for-science 和 automated ML 正在同时被产品化和重新定义：真正的 science automation 不只是调参训练，还涉及假设生成、实验设计、数据质量和可解释验证。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/togethercompute/status/2054532623247049201" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute</a><a class="source-chip" href="https://x.com/huggingface/status/2054545899481690554" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface</a><a class="source-chip" href="https://x.com/yoavgo/status/2054600999029846194" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@yoavgo</a></div>

## 12/14 Qwen3.6-Plus 登上 Nous Portal，开源模型分发继续平台化
Alibaba Qwen 宣布 Qwen3.6-Plus 已在 Nous Portal 上线，并在限时免费阶段可用，同时提到 Hermes Agent。Clement Delangue 也在中美 AI 语境下呼吁使用和宣传 open international AI，点名 DeepSeek、Qwen、Kimi、GLM 等中国开源或开放模型。模型生态的竞争正在从单次 benchmark 转向分发渠道、agent runtime、推理门户和工具链可接入性。对开发者来说，一个模型是否能进入生产，不只看质量，还看能否被现有 agent 平台快速调用、组合和计费。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/Alibaba_Qwen/status/2054397617015271738" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Alibaba_Qwen</a><a class="source-chip" href="https://x.com/ClementDelangue/status/2054517565179695420" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue</a></div>

## 13/14 长上下文和低成本推理推动 sparse transformer 与 KV cache 讨论
Hardmaru 转发 Sakana AI 与 NVIDIA 的 “Sparser, Faster, Lighter Transformer Language Models” 论文链接；Bindu Reddy 则把 DeepSeek v4 使用 SSD 做 KV cache、TurboQuant 和 Kimi K2 等压缩/推理优化放在同一条线上，认为开源生态在算力约束下被迫更积极地优化 inference。无论具体项目成熟度如何，这条主线很清楚：当 agent 上下文变长、并发增加、模型调用频繁，行业会继续围绕 sparse attention、KV cache、tokenization、quantization 和内存层级寻找成本下降路径。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hardmaru/status/2054388446945571026" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a><a class="source-chip" href="https://x.com/bindureddy/status/2054406299408871745" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a></div>

## 14/14 AI 采用的成本纪律成为新的行业争论
Sam Altman 表示自己会因为没有使用 smartest-available model/settings 而焦虑，但有时并不介意慢；他提出是否应该更多关注 price/speed tradeoff，而不是只看 price/intelligence tradeoff。Bindu Reddy 则批评公司内部 AI leaderboard 会让员工为了展示“使用 AI”而无意义烧 tokens，甚至让支出达到 payroll 的数倍却没有产出。Gary Marcus 也转发类似讨论。随着 agents 从个人工具进入组织流程，下一阶段争论会更具体：哪些任务值得用最强模型、哪些应走低成本路径、哪些 AI 使用只是指标驱动的浪费。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/sama/status/2054627102922797323" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sama</a><a class="source-chip" href="https://x.com/bindureddy/status/2054749730526187662" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a><a class="source-chip" href="https://x.com/GaryMarcus/status/2054654820447871023" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GaryMarcus</a></div>

---

## Deep Dive 附录

### UK AISI autonomous cyber capability
UK AISI 的分析把 cyber tasks 作为观察 frontier agents 进展的高信号场景。Ethan Mollick 总结的重点包括：Mythos 和 GPT-5.5 都显示明显 cyber capability gain；能力上限难以建立，因为结果受 token budget 强烈影响；任务长度能力的 doubling time 约为 4.5 个月。对政策和产品团队来说，这意味着 cyber agent 不能只用静态 benchmark 管理，需要跟踪长程任务、工具链、token 使用、失败恢复和实际可利用性。
[查看原文](https://www.aisi.gov.uk/blog/how-fast-is-autonomous-ai-cyber-capability-advancing)

### Cursor cloud-agent development environments
Cursor 的 cloud-agent environments 把 coding agent 的运行空间产品化：一个环境可以包含多仓库、依赖、credentials 和工具链，并能跨 session 复用。新增的 version history、rollback、audit log、egress controls 和 per-environment secret scoping 说明 IDE agent 正在补齐企业采用需要的控制面。agent 不再只是“会写代码的模型”，而是需要像员工和 CI 一样被配置、隔离、审计和恢复。
[查看原文](https://cursor.com/blog/cloud-agent-development-environments)

### NVIDIA agentic inference co-design
NVIDIA 的文章把 agentic inference 成本拆成模型/算法、软件、计算、网络、存储和内存的共同优化问题。长上下文和多步 agent 会放大 tokenization、KV cache、调度和数据移动的影响，因此成本下降不能只依赖更便宜模型。NVIDIA 同日提到 fastokens 与 Dynamo、LMSYS 集成，也说明 tokenizer 和 serving stack 会成为 100K-token agent systems 的关键性能路径。
[查看原文](https://developer.nvidia.com/blog/building-for-the-rising-complexity-of-agentic-systems-with-extreme-co-design/)

### Perplexity Computer security model
Perplexity 的 Computer 安全说明集中在企业 agent 的默认边界：hardware-isolated sandbox、VPC-level separation、short-lived proxy tokens、BrowseSafe 和 ML classifier 扫描、connector data 加密，以及上传文件 7 天自动删除。PayPal 每周 74,000 个 Perplexity Enterprise tasks 的案例则给出规模化采用信号。重点不只是 agent 能做什么，而是它在接触外部网页、内部文件和企业凭证时如何被约束。
[查看原文](https://x.com/perplexity_ai/status/2054608966148374715)
[查看原文](https://x.com/perplexity_ai/status/2054608978680873457)

### Databricks Unity Catalog ABAC
Databricks 的 ABAC、governed tags 和 automated data classification GA 让数据治理规则自动覆盖数据资产，而不是依赖逐表人工配置。结合 Genie 面向业务员工的自然语言数据查询，这说明企业 AI 的落地路径正在从“让模型读更多数据”变成“让正确的人在正确权限下问正确的数据”。当 agents 可以执行分析和操作时，分类、masking、访问策略和审计会变成产品可用性的前提。
[查看原文](https://www.databricks.com/blog/abac-row-filtering-and-column-masking-policies-governed-tags-and-data-classification-are-now)

### Runway Agent
Runway Agent 将视频生成包装成对话式创意伙伴，用于从 brief 到完成视频的 ideation、execution、sound design 和 editing。它和 Luma Agents 的广告资产示例共同指向一个趋势：生成式视频公司正在把模型能力做成生产工作流，而不是只卖单次生成。广告、短视频和 social content 场景需要的是可迭代、可交付、可根据 campaign 目标调整的 agentic creative system。
[查看原文](https://runwayml.com/news/introducing-runway-agent)

### Hugging Face ml-intern
ml-intern 被描述为一个能执行 ML research loop 的开源 agent：读论文和引用、处理数据集、写训练代码、启动 GPU jobs、诊断 eval 失败并迭代。AlphaSignalAI 引述的案例包括 GPQA、HealthBench 和数学训练恢复。即便这些结果需要独立复核，项目代表的方向很重要：agent 专业化正在进入模型训练和实验平台，目标是自动化研究工程师日常的脏活、失败排查和实验管理。
[查看原文](https://github.com/huggingface/ml-intern)

### AI21 agent optimization methods
AI21 的 BrowseComp-Plus thread 把 agent 优化分成 simple model testing、agent scaffolding、Best-of-N 和 Ensemble。它强调 parallel trajectories、不同配置组合、LLM-as-a-Judge 选择和 cost/latency tradeoff。这个框架说明 agent 产品进入工程化阶段：准确率提升来自模型选择、工具设计、prompt policy、重试、并行搜索和评测器共同作用。未来 agent 平台会越来越像实验系统和调度系统，而不是单一聊天界面。
[查看原文](https://x.com/AI21Labs/status/2054516608127619287)
[查看原文](https://x.com/AI21Labs/status/2054516623487209804)
