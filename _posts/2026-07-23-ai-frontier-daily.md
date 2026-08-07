---
layout: daily
title: "AI Frontier Daily | 2026.07.23"
headline: "Cursor Router 发布，把 coding agent 成本控制推到生产流量层"
date: 2026-07-23 09:07:00 +0800
permalink: /ai-daily/2026/07/23/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Cursor 发布 Cursor Router，面向 Teams 和 Enterprise 在桌面、Web、iOS、CLI 与 SDK 中提供自动模型路由。官方称 Router 会根据 query、上下文、任务复杂度和模型行为，把简单任务送往更低成本模型，把长程或高难度任务保留给 frontier reasoning model。Cursor 披露该路由器基于 60 万+ live requests 训练，并在数百万生产请求中 A/B 测试；在线结果称可在 frontier-quality performance 下节省 60% 成本，早期企业客户相比全部走 Opus 4.8 节省 30%-50%。这说明 coding agent 竞争正在从“最强单模型”转向 real traffic routing、keep-rate 和 cost-per-commit。"
summary: "Cursor 发布 Cursor Router，面向 Teams 和 Enterprise 在桌面、Web、iOS、CLI 与 SDK 中提供自动模型路由。官方称 Router 会根据 query、上下文、任务复杂度和模型行为，把简单任务送往更低成本模型，把长程或高难度任务保留给 frontier reasoning model。Cursor 披露该路由器基于 60 万+ live requests 训练，并在数百万生产请求中 A/B 测试；在线结果称可在 frontier-quality performance 下节省 60% 成本，早期企业客户相比全部走 Opus 4.8 节省 30%-50%。这说明 coding agent 竞争正在从“最强单模型”转向 real traffic routing、keep-rate 和 cost-per-commit。"
issue_count: 15
deep_dive_count: 10
reading_time: 22
cover: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/blog/cursor-router-og.gif"
signals: "cursor_ai · OpenAI · Alibaba_Qwen · GoogleDeepMind · LisaSu · NVIDIAAI · togethercompute · SakanaAILabs"
header-img: img/dark_yellow_400.png
---


## 1/15 Cursor Router 发布，把 coding agent 成本控制推到生产流量层
Cursor 发布 Cursor Router，面向 Teams 和 Enterprise 在桌面、Web、iOS、CLI 与 SDK 中提供自动模型路由。官方称 Router 会根据 query、上下文、任务复杂度和模型行为，把简单任务送往更低成本模型，把长程或高难度任务保留给 frontier reasoning model。Cursor 披露该路由器基于 60 万+ live requests 训练，并在数百万生产请求中 A/B 测试；在线结果称可在 frontier-quality performance 下节省 60% 成本，早期企业客户相比全部走 Opus 4.8 节省 30%-50%。这说明 coding agent 竞争正在从“最强单模型”转向 real traffic routing、keep-rate 和 cost-per-commit。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai<span class="source-chip__links"><a href="https://x.com/cursor_ai/status/2079993729532989500" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 1">1</a><a href="https://x.com/cursor_ai/status/2079993731063955665" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 2">2</a><a href="https://x.com/cursor_ai/status/2079993733064646774" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 3">3</a><a href="https://x.com/cursor_ai/status/2079993735082016851" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 4">4</a></span></span></div>

## 2/15 OpenAI Presence 把语音和聊天 agent 包装成企业部署产品
OpenAI 发布 Presence，定位为把可信 AI agents 部署到客户服务和内部流程的企业产品。官方线程称 agents 可以回答问题、使用公司系统、执行批准动作并在需要时升级给人工；OpenAI 官网进一步说明 Presence 包含 policies、guardrails、approved actions、simulations、evaluations 和 Codex-powered improvement process。它不是自助 API 产品，而是对 eligible enterprise customers 的 limited general availability，由 OpenAI FDE 和系统集成商部署。OpenAI 从模型供应商继续向“高触达企业软件 + 部署团队”扩展。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/OpenAI/status/2079916436232036614" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a></div>

## 3/15 Qwen-Image-3.0 发布，图像生成转向复杂布局和可读细节
Qwen 发布 Qwen-Image-3.0，把第三代图像模型概括为“Real”。官方线程强调三类能力：Rich Content 支持最高 4.5k tokens prompt，可一次生成报纸、分镜、试卷、3x3 信息图和嵌套 UI；Authentic Details 强调 10px 小字、LaTeX 页面、毛孔和头发等细节；Deep Knowledge 覆盖 12 种语言、100+ 艺术风格、真实 UI 和 live web retrieval。与单纯追求美感的图像模型不同，Qwen 把这次发布明确指向设计、内容、教育和电商等生产力场景。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Alibaba_Qwen<span class="source-chip__links"><a href="https://x.com/Alibaba_Qwen/status/2079906336381509659" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 1">1</a><a href="https://x.com/Alibaba_Qwen/status/2079906340366082384" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 2">2</a><a href="https://x.com/Alibaba_Qwen/status/2079906350243717513" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 3">3</a><a href="https://x.com/Alibaba_Qwen/status/2079906355440472284" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 4">4</a></span></span></div>

## 4/15 Google DeepMind 与 DOE 扩大 Genesis Mission，投入 4000 万美元 AI credits
Google DeepMind 宣布扩大与美国能源部 Genesis Mission 的合作，Google Cloud 承诺投入 4000 万美元 AI tokens 与云 credits，让更多国家实验室研究人员使用 Gemini 和其他 AI models。官方将 Genesis Mission 描述为十年内让科学发现速度翻倍的倡议。这个动作不是单个模型发布，而是把 frontier models、Google Cloud 和公共科研机构绑定在一起，强化 AI for science 基础设施路径：模型能力需要通过 credits、云平台、实验室访问和研究工作流进入真实科学场景。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/GoogleDeepMind/status/2079925576077324552" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GoogleDeepMind</a></div>

## 5/15 AMD Helios 将为 Anthropic Claude 提供最高 2GW 级别算力
Lisa Su 发文称 AMD Helios 将在 gigawatt scale 支撑 Anthropic Claude。AMD 同日公告显示，Anthropic 将部署最高 2GW AMD Instinct MI450 Series GPUs，采用 AMD Helios rack-scale solutions，第一 GW 计划 2027 年上半年开始部署；双方还会用 Claude 优化 AMD Instinct 工作负载、加速 ROCm 开发，AMD 计划未来向 Anthropic 战略投资最高 50 亿美元。今天的信号是 Anthropic 的算力供应继续多元化，而 AMD 正用大客户、Helios rack-scale 和 Claude engineering collaboration 挑战 NVIDIA 主导地位。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/LisaSu/status/2079958797653823627" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LisaSu</a></div>

## 6/15 NVIDIA 同时推进 Nemotron reasoning challenge 与 Cosmos 3 Super
NVIDIA AI 今日线程回顾 Nemotron Model Reasoning Challenge：Kaggle 上 5000+ 参与者、4000+ 队伍探索 open models 推理改进方法，并公布 NullSira、vli、YS-L 等获奖团队。另一条推文推广 4-step Cosmos 3 Super models，称图像和视频生成速度比原版最高快 25x，并在 Artificial Analysis open-weight 榜单中保持前列。NVIDIA 的路线不是只发布大模型，而是用 Kaggle、developer blog、Hugging Face collection 和 physical AI 模型组合，把 reasoning、media generation 和 edge/robotics 开发者生态连起来。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI<span class="source-chip__links"><a href="https://x.com/NVIDIAAI/status/2080010403527155723" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 1">1</a><a href="https://x.com/NVIDIAAI/status/2080010405733437817" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 2">2</a><a href="https://x.com/NVIDIAAI/status/2079949373069197658" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 3">3</a></span></span></div>

## 7/15 Together 用 DeepSWE 对比 Kimi K3 Max 与 GPT 5.6 Sol Max
Together AI 发文称使用 DeepSWE 分析 Kimi K3 Max 和 GPT 5.6 Sol Max 在软件工程任务上的表现。其结论是 Kimi K3 Max 以约 55% 的价格匹配 GPT 5.6 Sol Max；更有意思的是，两者组合使用能带来约 16% 的性能提升。虽然该线程没有给出完整报告链接，但它与 Cursor Router、Harrison Chase 关于 router/harness 的讨论形成呼应：coding agent 的真实成本工程不只是挑一个最强模型，而是按任务、上下文和边际收益组合模型。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/togethercompute/status/2080054904328986999" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute</a></div>

## 8/15 Sakana Fugu 继续强化“一个 API 背后的多智能体系统”
Sakana AI 今日再次推广 Fugu，标题是“One Model to Command Them All”。公开页面把 Fugu 描述为通过 OpenAI-compatible API 暴露的多智能体系统，用户面对一个模型接口，内部则根据任务决定直接回答、选择模型、分派专家、验证和综合结果。Sakana 目前提供 Fugu、Fugu Ultra 和 Fugu Cyber 三类模型。它和 Cursor Router 的共同点是隐藏底层模型选择复杂度；区别在于 Fugu 更强调 multi-agent orchestration，而 Router 更强调 coding traffic 的成本和质量路由。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs<span class="source-chip__links"><a href="https://x.com/SakanaAILabs/status/2079977019597578578" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 1">1</a><a href="https://x.com/SakanaAILabs/status/2080034306836295979" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 2">2</a></span></span></div>

## 9/15 Plasma AI 开源 Fractal，把 coding agents 组织成 Git worktree 树
Linus Ekenstam 长推介绍 Plasma AI 开源的 Fractal：它把一次大型编码任务拆成树状 nodes，每个 node 有自己的目标、Git worktree、branch、memory、budget 和生命周期，父节点负责合并、审查和继续规划。Fractal 文档也显示，节点运行在隔离 worktree 中，生命周期、预算和消息写入每棵树的 SQLite database。这个方向把 agent 编排从“一个 session 里不断续上下文”转向“可审计的多节点执行系统”，适合迁移、审计、跨服务改造等超出单上下文窗口的任务。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/LinusEkenstam/status/2080081962371527020" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LinusEkenstam</a></div>

## 10/15 Replit 重做移动端，把 voice input 和 Agent 进度放进手机工作流
Replit 发布重新设计的移动 App，官方称新版本围绕“手机上如何实际构建”重做：刷新 home screen 以继续上次项目，支持 voice input，让用户对 app 说话并让 Agent 构建，支持 chat、tasks、preview 间 swipe，并用 Live Activities 跟踪 Agent 进度。它不是 frontier model 发布，但方向重要：coding agent 的入口从桌面 IDE 扩展到移动端和碎片化时间，产品竞争点变成输入方式、预览、任务状态和跨设备连续性。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Replit<span class="source-chip__links"><a href="https://x.com/Replit/status/2079975095120900285" target="_blank" rel="noopener" aria-label="@Replit 原文 1">1</a><a href="https://x.com/Replit/status/2079975096236532134" target="_blank" rel="noopener" aria-label="@Replit 原文 2">2</a><a href="https://x.com/Replit/status/2079975097687810132" target="_blank" rel="noopener" aria-label="@Replit 原文 3">3</a></span></span></div>

## 11/15 Cerebras 与 CrowdStrike 合作，把高速推理用于 Falcon AIDR
Cerebras 宣布与 CrowdStrike 合作，为 Falcon AI Detection and Response 提供推理能力，并称 AI attacks 以秒为单位移动，安全 AI 不能排队等待。Cerebras 的推文强调用世界最快推理支撑 detect、reason 和 respond。投资者公告进一步说明，CrowdStrike 将利用 Cerebras 推理速度增强 Falcon AIDR，同时 Cerebras 将标准化使用 CrowdStrike Falcon 平台保护自身业务。这个合作把 AI chip/inference 竞争放进实时安全响应，而不只是聊天或代码生成吞吐量。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cerebras<span class="source-chip__links"><a href="https://x.com/cerebras/status/2079924308454105115" target="_blank" rel="noopener" aria-label="@cerebras 原文 1">1</a><a href="https://x.com/cerebras/status/2079924555653771527" target="_blank" rel="noopener" aria-label="@cerebras 原文 2">2</a></span></span></div>

## 12/15 Databricks 同时推进 Replit App workflow 与 Lakebase LTAP 架构
Databricks 推广一个 Replit agent workflow：从 Databricks App template 出发，直接在 Replit 里构建 Genie Analytics app，连接 Databricks data，测试 Genie chat，并部署到带有 Databricks 安全和治理能力的 Apps 环境。另一条线程解释 Lakebase：把 Postgres compute 与 write-ahead log、data files 分离，使 compute stateless，支持 durable writes、elastic scaling、HA、instant branching，并为 LTAP 打基础，让 operational data 可以同时服务 Postgres 与 Lakehouse engines。Databricks 正把数据 app agent 和底层数据库架构一起推进。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks<span class="source-chip__links"><a href="https://x.com/databricks/status/2079978842626588883" target="_blank" rel="noopener" aria-label="@databricks 原文 1">1</a><a href="https://x.com/databricks/status/2079940051388043306" target="_blank" rel="noopener" aria-label="@databricks 原文 2">2</a></span></span></div>

## 13/15 Anthropic Economic Index 进入 Claude 查询界面
Anthropic 官方转发 Claude 消息，称用户现在可以直接向 Claude 询问 Anthropic Economic Index。该公开数据集用于衡量 AI 在经济中的使用方式；把它接入 Claude 问答界面，意味着研究数据不只作为下载文件或报告存在，也能通过 conversational interface 做探索。这个更新体量不大，但方向清晰：AI labs 正在把经济影响、劳动市场和模型使用数据做成可交互公共资产，同时为政策、企业和研究者提供更低门槛的查询入口。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AnthropicAI/status/2079980981264544017" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI</a></div>

## 14/15 Frontier AI business benchmark 测试模型处理商学院案例的能力
Ethan Mollick 转发一篇新论文，研究 AI 如何解决开放、复杂、跨学科的 business school cases。Mollick 的摘要称，AI 已经在多样化商业主题上表现很强，并且随时间快速进步。论文题为“Frontier AI performance across the business disciplines”，不是用短 benchmark 问题测模型，而是用更接近知识工作和分析推理的 case-grounded tasks。它补充了 SWE-Bench、DeepSWE 和 coding evals 之外的一类重要评测：frontier models 是否能处理含糊、开放、需要商业判断的任务。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2080064607138283742" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2080064977856037104" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a></span></span></div>

## 15/15 LangChain 把 eval engineering 做成 coding agent skill
Harrison Chase 今日多次转发 LangChain 关于 eval engineering 的更新。LangChain 表示推出 Eval Engineering Skill，帮助 coding agents 基于代码库上下文构建 evals；Harrison 自己补充说，building evals 很难，理想流程包括给 coding agent 代码库与真实 traces、和用户迭代 eval direction、用 harbor 构建 evals、运行并根据结果继续迭代。它和 Cursor Router、Together DeepSWE 共同指向同一件事：agent 生产化不只靠模型能力，还靠 harness、traces、evals、routing 和人工闭环。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17<span class="source-chip__links"><a href="https://x.com/hwchase17/status/2080012123401560070" target="_blank" rel="noopener" aria-label="@hwchase17 原文 1">1</a><a href="https://x.com/hwchase17/status/2080059362459177341" target="_blank" rel="noopener" aria-label="@hwchase17 原文 2">2</a><a href="https://x.com/hwchase17/status/2080077958933561517" target="_blank" rel="noopener" aria-label="@hwchase17 原文 3">3</a></span></span></div>

---

## Deep Dive 附录

### OpenAI Presence
OpenAI Presence 是今天最典型的“模型能力产品化”发布。它面向 voice 和 chat agents，支持 customer support、outbound sales、IT、HR、claims 等高价值流程。核心不是只调用一个模型，而是把 SOP、policies、guardrails、approved actions、simulations、evals 和 escalation rules 包装在一起。OpenAI 称 Presence 已用于自己的英文电话支持，数周内达到或超过 frontline human-support quality 基准，解决 75% inbound issues，并通过 Codex-powered improvement loop 在 10 天内减少 15 个百分点 human handoffs。它目前是 limited general availability，不是 self-serve 产品。
[查看原文](https://openai.com/index/introducing-openai-presence/)

### Cursor Router
Cursor Router 的重点是把模型路由放到真实 coding traffic 中验证。官方称 Router 基于 600k+ live requests 训练，在数百万 production requests 上 A/B 测试，并以 user satisfaction 和 keep rate 作为关键指标。Router 提供 Intelligence、Balance、Cost 三种模式，允许团队在 cost-intelligence Pareto frontier 上取舍；企业管理员可以按 team 启用、设置默认、允许或阻止模型。Cursor 披露 online A/B tests 达到 frontier-quality performance at 60% savings，early access 企业相较全部走 Opus 4.8 节省 30%-50%。这把模型选择从偏好问题变成生产成本控制系统。
[查看原文](https://cursor.com/blog/router)

### Qwen-Image-3.0
Qwen-Image-3.0 的发布围绕“Real”展开，重点是可用而不只是好看。Rich Content 支持 4.5k tokens prompt，可生成报纸、分镜、试卷、3x3 infographic 和嵌套界面；Authentic Details 强调小字、LaTeX、皮肤与发丝等细节；Deep Knowledge 扩展到多语言、艺术风格、真实 UI 和 live web retrieval。Qwen 的叙事显示图像生成模型正在进入 productivity tool 竞争：设计、电商、教育和内容生产需要模型处理密集信息、结构、可读文字和真实界面，而不只是生成单张漂亮图片。
[查看原文](https://qwen.ai/blog?id=qwen-image-3.0)

### Google / DOE Genesis Mission
Google Cloud 和 Google DeepMind 对 DOE Genesis Mission 的 4000 万美元 AI tokens 与 cloud credits 承诺，显示 AI for science 正在从论文示范进入公共科研基础设施。该项目目标是在十年内让科学发现速度翻倍，Google 的贡献让更多 national lab researchers 可以访问 Gemini 和其他 AI models。与模型发布相比，这类投入的关键是 adoption surface：国家实验室如何获得算力和模型、如何把 AI 接入科研流程、如何在科学发现中建立安全和可重复性边界。
[查看原文](https://cloud.google.com/blog/topics/public-sector/accelerating-frontiers-of-scientific-discovery-40-million-dollar-commitment-genesis-mission/)

### AMD × Anthropic Helios
AMD 和 Anthropic 的合作把算力供应链竞争推到 gigawatt scale。AMD 公告称 Anthropic 将部署最高 2GW AMD Instinct MI450 Series GPUs，采用 Helios rack-scale solutions，第一 GW 计划 2027 年上半年开始；系统包含 MI455X GPUs、EPYC Venice CPUs、Pensando networking 和 ROCm。双方还将用 Claude 优化 AMD Instinct workloads、加速 ROCm 开发，AMD 计划向 Anthropic 战略投资最高 50 亿美元。这对 Anthropic 是算力多元化，对 AMD 是进入 frontier lab 基础设施核心采购的证明。
[查看原文](https://ir.amd.com/news-events/press-releases/detail/1292/amd-and-anthropic-announce-strategic-partnership-to-deploy-up-to-2-gigawatts-of-amd-instinct-mi450-series-gpus)

### NVIDIA Nemotron challenge 与 Cosmos 3 Super
NVIDIA 今天的信号分两层。Nemotron Model Reasoning Challenge 通过 Kaggle 聚集 5000+ participants 和 4000+ teams，寻找 open models 推理准确率提升方法；NVIDIA blog 总结 leaderboard lessons 和获奖方案。Cosmos 3 Super 则面向 physical/media AI，NVIDIA 称新 4-step models 生成图像和视频最高快 25x，并在 Hugging Face 发布 collection。前者是 reasoning system evaluation，后者是 open-weight world/media model distribution；两者共同支撑 NVIDIA 在模型、开发者和硬件生态之间的闭环。
[查看原文](https://developer.nvidia.com/blog/lessons-from-the-leaderboard-what-5000-kagglers-taught-us-about-improving-ai-reasoning/)
[查看原文](https://huggingface.co/collections/nvidia/cosmos3)

### Sakana Fugu
Fugu 的重要性在于把多智能体编排伪装成一个模型接口。Sakana 描述的用户体验是：向一个 OpenAI-compatible endpoint 发送请求，系统内部决定直接解决、路由给哪个模型、如何分派专家、如何验证与合成。公开页面列出 Fugu、Fugu Ultra、Fugu Cyber 三个模型，覆盖不同工作负载。这个方向与单模型 scale-up 不同，它假设未来的智能系统更像 orchestrator：模型池、specialists、verification 和 synthesis 是内部机制，开发者看到的是一个可替换的 API。
[查看原文](https://sakana.ai/fugu/)
[查看原文](https://sakana.ai/fugu-release/)

### Plasma AI Fractal
Fractal 把大型 coding work 组织成 node tree。每个 node 拥有独立 Git worktree、branch、goal、memory、budget 和生命周期，子节点可以继续分裂，父节点负责 review、merge 和再规划。官方文档显示其运行状态和 inter-node messaging 写入每棵树的 SQLite database。这个设计针对的是单 agent session 难以承载的迁移、审计、多服务改造等任务：通过 Git 历史、预算和节点边界实现可审计并行，而不是无限延长一个上下文窗口。
[查看原文](https://docs.plasma.ai/fractal/)

### Databricks Lakebase / Replit workflow
Databricks 的两条内容覆盖应用层和存储层。应用层是 Replit agent + Databricks App：从 template 到 Genie Analytics app，再到 Databricks governance 下部署。存储层是 Lakebase/LTAP：Databricks 解释如何把 Postgres compute 与 WAL 和 data files 分离，使 compute stateless，并让 operational data 同时服务 Postgres 和 Lakehouse engines，减少 CDC 和数据复制需求。这说明数据平台的 agent 化不仅是“让 agent 写 app”，也包括底层数据库架构为实时应用和分析统一做准备。
[查看原文](https://replit.com/partners/databricks)
[查看原文](https://www.databricks.com/blog/lakebase-ltap-rethinking-database-storage)

### Frontier AI business benchmark
Mollick 转发的 arXiv 论文把评测对象从短题和代码任务转向 business disciplines 中的 case-grounded knowledge work。论文关注模型如何处理开放、复杂、跨领域的商学院案例问题，Mollick 摘要称 AI 已经在多样化商业主题中表现强，并且随时间进步很快。这个方向补齐了今日 coding-heavy 新闻的一块空白：frontier AI 的企业价值不仅来自写代码，也来自分析、策略、运营、市场、金融和管理等非结构化知识工作。
[查看原文](https://arxiv.org/abs/2607.16057)
