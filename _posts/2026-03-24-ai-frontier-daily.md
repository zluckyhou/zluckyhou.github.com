---
layout: daily
title: "AI Frontier Daily | 2026.03.24"
headline: "Luma AI 发布 Uni-1：首个\"边思考边生成像素\"的统一模型"
date: 2026-03-24 09:07:00 +0800
permalink: /ai-daily/2026/03/24/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Luma Labs 发布 Uni-1，定位为公司首个统一理解与生成模型（unified understanding and generation model），官方描述其为\"通向多模态通用智能的下一步\"。与传统先理解再生成的两阶段流程不同，Uni-1 在推理时同步生成像素，实现\"思考即生成\"。官网已上线，标志着 Luma 从视频生成工具向基础模型厂商的重大战略转型。"
summary: "Luma Labs 发布 Uni-1，定位为公司首个统一理解与生成模型（unified understanding and generation model），官方描述其为\"通向多模态通用智能的下一步\"。与传统先理解再生成的两阶段流程不同，Uni-1 在推理时同步生成像素，实现\"思考即生成\"。官网已上线，标志着 Luma 从视频生成工具向基础模型厂商的重大战略转型。"
issue_count: 18
deep_dive_count: 4
reading_time: 13
cover: "https://cdn.sanity.io/images/4zrzovbb/website/c07f638082c569e8ce1e89ae95ee6f332a98ec08-2400x1260.jpg"
signals: "LumaLabsAI · AnthropicAI · SakanaAILabs · hardmaru · cursor_ai · fchollet · OpenAI · sama"
header-img: img/dark_yellow_400.png
---


## 1/18 Luma AI 发布 Uni-1：首个"边思考边生成像素"的统一模型
Luma Labs 发布 Uni-1，定位为公司首个统一理解与生成模型（unified understanding and generation model），官方描述其为"通向多模态通用智能的下一步"。与传统先理解再生成的两阶段流程不同，Uni-1 在推理时同步生成像素，实现"思考即生成"。官网已上线，标志着 Luma 从视频生成工具向基础模型厂商的重大战略转型。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/LumaLabsAI/status/2036107826498544110" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LumaLabsAI</a></div>

## 2/18 Anthropic 上线 Science Blog，首日发布三篇文章
Anthropic 正式推出科学博客（Science Blog），定位为分享 AI 加速科研进展的专题平台。创刊号发布三篇文章：①《科学博客介绍》阐述使命——加速科学进步是 Anthropic 核心目标之一；②《长时运行 Claude 用于科学计算》，讲解如何用 Claude Code 执行多天科研任务，含测试预言机、持久内存和编排模式；③《Vibe Physics：AI 研究生》，Claude 全程监督完成一项理论物理计算，无需人工介入文件。博客将持续分享内外部研究员合作成果与科学家使用 AI 的实践工作流。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AnthropicAI/status/2036179042081317370" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI</a></div>

## 3/18 Sakana AI 推出 Sakana Chat：面向日本用户的首个消费级产品
日本 AI 研究公司 Sakana AI 正式公开 Sakana Chat，这是其首款面向大众的免费 AI 聊天服务，目前仅供日本国内用户使用。背后运行的是 Sakana 自研新模型系列"Namazu（α版）"——基于 DeepSeek-V3.1 等开源 LLM 进行后训练，在保持高性能的同时，针对日本使用场景和价值观进行了针对性调整，去除了开源模型固有的开发者偏见。产品具备强力 Web 搜索 Agent、高速响应和高可靠性信息检索能力。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/SakanaAILabs/status/2036246622141849724" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs</a><a class="source-chip" href="https://x.com/hardmaru/status/2036247262486315470" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a></div>

## 4/18 Cursor 发布 Instant Grep：搜索百万文件仅需毫秒
Cursor 宣布推出 Instant Grep 功能，可在数百万文件中毫秒级完成代码搜索，大幅提升 AI Agent 完成任务的速度。官方发布了技术博客，详细介绍了底层算法设计与性能权衡。这一能力直接提升 Cursor Agent 在大型代码库中自主导航与修改代码的效率，是 AI 编程助手迈向真正 Agent 化的重要基础设施升级。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cursor_ai/status/2036122609931165985" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai</a></div>

## 5/18 ARC-AGI-3 本周发布：首个交互式推理基准，将在 Y Combinator 举办发布活动
François Chollet 转推确认，ARC-AGI-3 定于本周发布（2026年3月25日），发布活动在旧金山 Y Combinator 举办。根据 arcprize.org 信息，ARC-AGI-3 是首个交互式推理基准，AI Agent 将与全新游戏环境交互，测试探索能力、目标导向性和记忆能力。该基准旨在推动超越当前 LLM 范式的 AI 能力研究，是 ARC Prize 系列的重大迭代。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/fchollet/status/2036144988946596066" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet</a></div>

## 6/18 OpenAI 为 ChatGPT 新增文件库（Library）功能
OpenAI 宣布 ChatGPT 文件管理体验全面升级：用户可通过工具栏快速引用近期文件、就已上传内容直接向 ChatGPT 提问，以及通过 Web 侧边栏的新增"Library"标签页浏览全部文件历史。此次更新让 ChatGPT 更像一个持久化工作空间，用户不再需要重复上传同一文件，可直接复用历史上传内容，构建文件驱动的对话工作流。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/OpenAI/status/2036183180219392103" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a></div>

## 7/18 Sam Altman 宣布退出 Helion 董事会
OpenAI CEO Sam Altman 宣布将退出核聚变能源公司 Helion 的董事会。原因是 OpenAI 与 Helion 开始探索大规模合作，身兼两家董事会存在利益冲突。Altman 表示他对 Helion 及清洁能源未来依然极度看好，此次退出是出于职业操守的主动选择。这一动向意味着 OpenAI 在能源供给侧的布局正在实质推进，可能对 AI 数据中心能源战略产生深远影响。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/sama/status/2036137695605563682" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sama</a></div>

## 8/18 Lex Fridman 发布与 Jensen Huang 长达 2 小时的深度对话
Lex Fridman 发布 Podcast #494，嘉宾为 NVIDIA CEO Jensen Huang。对话涵盖：AI 扩展定律与瓶颈（内存、算力、供应链）、NVIDIA 竞争壁垒与商业哲学、中国出口管制与台积电战略地位、未来 AI 数据中心可能部署于太空、AGI 时间线判断、编程语言的演化，以及 CEO 在高压环境下的领导力。Jensen 认为 NVIDIA 当前市值可能达到 $10 万亿级规模，并深入探讨了 AI 对文明的影响。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/lexfridman/status/2036123301140111406" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@lexfridman</a></div>

## 9/18 Meta 研究人员用 200 万小时视频训练世界模型：无标注、无监督即可涌现物理理解
ylecun 转推一项 Meta 研究：研究人员向模型展示了 200 万小时的视频数据，无任何标注，无物理教科书，无监督信号，模型自发涌现出物理世界的理解能力。这一结果支持 LeCun 长期倡导的 JEPA（Joint Embedding Predictive Architecture）路径——世界模型不需要生成式监督，仅凭预测性自监督就能习得对世界的结构性认知。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/ylecun/status/2036205598111420871" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ylecun</a></div>

## 10/18 LeWorldModel：无需 Teacher-Student、EMA 或特殊技巧的端到端 JEPA 世界模型
多位研究者分享了 LeWorldModel 论文，这是首个可以稳定端到端训练的 JEPA 世界模型，无需 teacher-student 架构、指数移动平均（EMA）或任何特殊技巧。论文同时引入 SIGReg 正则化方法解决训练崩溃问题。LeWorldModel 在性能上超越了 DINO-WM，证明 JEPA 架构在机器人与物理推理任务中的实用性，为 LeCun 提倡的 AMI（Advanced Machine Intelligence）路线提供了新的实验证据。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ylecun<span class="source-chip__links"><a href="https://x.com/ylecun/status/2036135349844316411" target="_blank" rel="noopener" aria-label="@ylecun 原文 1">1</a><a href="https://x.com/ylecun/status/2036119315624210801" target="_blank" rel="noopener" aria-label="@ylecun 原文 2">2</a></span></span></div>

## 11/18 Dr. Jim Fan："Teleop（遥操作）已经是 2025 年的事了"
NVIDIA 具身智能研究负责人 Jim Fan 发推表示，自从团队推出 EgoScale 和灵巧操作扩展定律以来，生态系统已达成共识：直接从人类行为克隆（Behavior Cloning）是打破遥操作瓶颈的正确路径。他宣告 2026 年的主题是"无需机器人扩展机器人学习"（scaling robot learning without robots），标志着具身智能领域从数据采集范式向自主学习范式的重大转型。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/DrJimFan/status/2036136375494517142" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@DrJimFan</a></div>

## 12/18 Cohere 与军工巨头 Saab 签署 AI 合作 MOU
Cohere 宣布与全球领先国防与安全公司 Saab 签署谅解备忘录（MOU），双方将探索面向 Saab 航空平台的 AI 突破性合作，并提供定制化企业 AI 解决方案。这是企业级 AI 厂商在国防航空领域的重要布局，显示专有商业 LLM 正加速进入高价值、高安全需求的垂直行业。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cohere/status/2036173176934183265" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cohere</a></div>

## 13/18 NVIDIA OpenShell：为 AI Agent 提供内置安全与隐私治理
NVIDIA 宣传 OpenShell，定位为面向自主 AI Agent 的治理框架，将开放创新与内置安全、隐私控制统一起来。随着 AI Agent 被部署于越来越复杂的企业任务，NVIDIA 认为从第一天起就将治理机制纳入 Agent 设计是负责任部署的关键。OpenShell 旨在让 Agent 在完成复杂任务的同时满足合规要求。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/NVIDIAAI/status/2036095627348615493" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI</a></div>

## 14/18 LangSmith Deployments Webhooks：让 Agent 完成时自动通知用户
LangChain CEO Harrison Chase 介绍 LangSmith Deployments 的 Webhook 功能：Agent 完成长时间运行任务后，可自动发送通知给用户或触发下游行动，避免反复轮询。这是 LangChain 将 Agent 从原型推向生产的系列基础设施能力之一，同时展示了 LangSmith Fleet（市场调研 Agent）作为 DeepAgents 的实际应用案例。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hwchase17/status/2036129598224879643" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17</a></div>

## 15/18 HuggingFace 推出"在 Hub 上从头预训练 LLM"能力
HuggingFace 宣布用户现在可以完全在 HuggingFace Hub 上预训练大语言模型。此次发布与 OpenAI 近期发起的预训练竞赛相呼应，目标是让更多团队能够在无需自建基础设施的情况下开展基础模型研究。同时，HuggingFace 也上线了 Protected Spaces with Public URLs，允许 Space 设置为受保护状态但保留公开访问 URL，增强了模型演示的访问控制灵活性。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface<span class="source-chip__links"><a href="https://x.com/huggingface/status/2036151515623145880" target="_blank" rel="noopener" aria-label="@huggingface 原文 1">1</a><a href="https://x.com/huggingface/status/2036045655525793915" target="_blank" rel="noopener" aria-label="@huggingface 原文 2">2</a></span></span></div>

## 16/18 LATENT 论文：无需真实比赛视频即可教会人形机器人打网球
AlphaSignalAI 分享清华大学 LATENT 论文：完全跳过完整比赛录像的采集，仅使用短小、凌乱的基础动作片段（如一次正手挥拍、一次侧步）即可训练人形机器人学会网球。该方法展示了从非结构化、低质量人类动作数据中提取可迁移技能的新思路，大幅降低了人形机器人运动技能数据采集成本，对具身智能研究具有重要意义。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AlphaSignalAI/status/2036050738133004641" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI</a></div>

## 17/18 emollick：GPT-5.4 Pro 是当前最强推理模型，AI 创意超越人类
Wharton 教授 Ethan Mollick 两项值得关注的观察：①在所有"真正困难和复杂"的任务中，GPT-5.4 Pro 仍是唯一选择，Codex、Code 等其他模型无法与之匹敌；②分享了一项研究结论——在产品开发创意生成方面，AI 模型的评分持续高于人类（Prolific平台），且更大更新的模型比前代更具创造力，但用于增强 LLM 创意的干预措施对 AI 不起作用。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2036136822099628173" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2036104905568452967" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a></span></span></div>

## 18/18 DeepSeek v4 传言：将于四月发布，维持开源
研究者 Bindu Reddy 表示，每周都有人对 DeepSeek v4 感到兴奋，但"什么都没发生"。目前最新传言是：DeepSeek v4 仍将以开源形式发布，预计四月落地。与此同时，她也指出 GPT-5.4 在 XLS 和深度研究任务上比顶级 Gemini 或 Claude 模型性能提升 33%，建议 OpenAI 趁势快速推进 GPT-6.0。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/bindureddy/status/2036049466848145813" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a></div>

---

## Deep Dive 附录

### Anthropic Science Blog — 三篇创刊文章
Anthropic 于 2026.03.23 正式上线 Science Blog，强调"加速科学进步是 Anthropic 核心使命之一"。三篇创刊文章各具侧重：《科学博客介绍》阐述理念与内容规划；《长时运行 Claude 用于科学计算》提供实操指南，涵盖多天任务的测试预言机设计、持久内存管理与多 Agent 编排模式；《Vibe Physics：AI 研究生》记录了 Claude 在无人工介入的情况下完整监督一项理论物理计算的实验，展示 Claude Code 在真实科研场景中的自主能力边界。
[查看原文](https://www.anthropic.com/science)

### ARC-AGI-3 — 首个交互式 AI 推理基准
ARC-AGI-3 于 2026年3月25日正式发布，这是 ARC Prize 系列的最新迭代，也是首个交互式推理基准。与前两代静态任务不同，ARC-AGI-3 中的 AI Agent 需要与全新设计的游戏环境进行交互，测试维度包括：探索能力（探索未知环境）、目标导向性（识别并追求长期目标）以及记忆能力（跨步骤保持状态）。发布活动在旧金山 Y Combinator 举办，是评估超越 LLM 范式的 Agent 能力的重要里程碑。
[查看原文](https://arcprize.org)

### Lex Fridman Podcast #494 — Jensen Huang on NVIDIA & the AI Revolution
超 2 小时深度对话，涵盖：AI 扩展定律的现状与瓶颈（内存墙、供电限制、供应链约束）；NVIDIA 在 rack-scale 极致协同设计上的差异化壁垒；中国出口限制的战略影响与台积电在半导体供应链中的不可替代性；Jensen 对 AGI 时间线的个人判断；AI 数据中心有朝一日部署在太空的可能性；以及编程语言未来的演化方向。Jensen 坦言 NVIDIA 有潜力成为 $10 万亿级别的公司，并探讨了 AI 文明意义上的影响。
[查看原文](https://lexfridman.com/jensen-huang)

### LeWorldModel — 端到端 JEPA 世界模型无需特殊 Trick
来自多个研究小组的新论文 LeWorldModel 展示了一种稳定的端到端 JEPA（Joint Embedding Predictive Architecture）世界模型训练方案，核心贡献是引入 SIGReg 正则化，彻底消除了对 teacher-student 网络、EMA（指数移动平均）或其他稳定化技巧的依赖。结果在 DINO-WM 基准上超越现有方法，证明 JEPA 可以高效扩展到复杂机器人与物理推理任务。这为 Yann LeCun 推崇的 AMI 路线提供了重要实验支撑，也使 JEPA 从理论路线进入工程可行性阶段。
[查看原文](https://x.com/ylecun/status/2036119315624210801)
