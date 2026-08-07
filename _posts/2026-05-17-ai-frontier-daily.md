---
layout: daily
title: "AI Frontier Daily | 2026.05.17"
headline: "Codex 讨论转向移动端监督和常驻 devbox"
date: 2026-05-17 09:07:00 +0800
permalink: /ai-daily/2026/05/17/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Greg Brockman 连续讨论 Codex：包括用 Codex 改进 computational complexity、在 ChatGPT app 中使用 Codex 带来的“脱离电脑”的体验，以及 always-on devbox for Codex mobile 的工作方式。Swyx 继续把 Codex 形容为“agentic Excel on Mac”，Matt Shumer 则把一台 Mac Mini 改成常驻 devbox 配合 Codex mobile。今天的重点不是单次代码生成，而是 coding agent 的运行形态：移动端审阅、远程开发环境、长任务持续执行和用户随时接管，正在成为 agentic coding 的产品竞争点。"
summary: "Greg Brockman 连续讨论 Codex：包括用 Codex 改进 computational complexity、在 ChatGPT app 中使用 Codex 带来的“脱离电脑”的体验，以及 always-on devbox for Codex mobile 的工作方式。Swyx 继续把 Codex 形容为“agentic Excel on Mac”，Matt Shumer 则把一台 Mac Mini 改成常驻 devbox 配合 Codex mobile。今天的重点不是单次代码生成，而是 coding agent 的运行形态：移动端审阅、远程开发环境、长任务持续执行和用户随时接管，正在成为 agentic coding 的产品竞争点。"
issue_count: 14
deep_dive_count: 7
reading_time: 17
cover: "https://cdn.prod.website-files.com/69654e88dce9154b5f12070c/6a06a54465db8feebbb52c3b_webflow-24b4cbb98f62db0dc883b3a22419c091-6v58mftg.jpeg"
signals: "gdb · swyx · mattshumer_ · emollick · xai · togethercompute · AlphaSignalAI · bindureddy"
header-img: img/dark_yellow_400.png
---


## 1/14 Codex 讨论转向移动端监督和常驻 devbox
Greg Brockman 连续讨论 Codex：包括用 Codex 改进 computational complexity、在 ChatGPT app 中使用 Codex 带来的“脱离电脑”的体验，以及 always-on devbox for Codex mobile 的工作方式。Swyx 继续把 Codex 形容为“agentic Excel on Mac”，Matt Shumer 则把一台 Mac Mini 改成常驻 devbox 配合 Codex mobile。今天的重点不是单次代码生成，而是 coding agent 的运行形态：移动端审阅、远程开发环境、长任务持续执行和用户随时接管，正在成为 agentic coding 的产品竞争点。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb<span class="source-chip__links"><a href="https://x.com/gdb/status/2055646916499714488" target="_blank" rel="noopener" aria-label="@gdb 原文 1">1</a><a href="https://x.com/gdb/status/2055716225137701202" target="_blank" rel="noopener" aria-label="@gdb 原文 2">2</a><a href="https://x.com/gdb/status/2055750818507145409" target="_blank" rel="noopener" aria-label="@gdb 原文 3">3</a></span></span><a class="source-chip" href="https://x.com/swyx/status/2055494400252481687" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@swyx</a><a class="source-chip" href="https://x.com/mattshumer_/status/2055725193067151784" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@mattshumer_</a></div>

## 2/14 ChatGPT personal finance 暴露“会算账”之外的产品问题
Ethan Mollick 继续试用 ChatGPT personal finance，认为它有意思但需要用户知道该问什么，也需要有经验去 fact-check assumptions。他建议产品内置 pre-built skills，让 AI 先访谈用户、补足个人背景，再进行退休结果、现金流或场景模拟。这个反馈把个人金融 agent 的难点从“能否读取账户数据”推进到“如何安全地引导用户决策”：金融问题充满假设、约束和偏好，如果缺少结构化提问，模型可能给出看似完整但上下文不足的建议。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2055797877713092997" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2055799573835022798" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a><a href="https://x.com/emollick/status/2055799924298530884" target="_blank" rel="noopener" aria-label="@emollick 原文 3">3</a></span></span></div>

## 3/14 xAI 把 X Premium 和 Hermes Agent 打通
xAI 宣布用户现在可以在 Nous Research 的 Hermes Agent 中使用 X Premium subscriptions，并且 Hermes Agent 可以搜索 X posts；随后又提醒用户连接自己的 X account。这个动作把 Grok/X 的订阅、社交图谱和第三方 agent 产品连接起来。意义在于，agent runtime 正在从“调用一个模型 API”扩展到“继承用户已有订阅、身份和内容权限”。如果这类集成继续增加，模型提供方、社交平台和 agent 应用之间的商业关系会更接近插件生态。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@xai<span class="source-chip__links"><a href="https://x.com/xai/status/2055745332919808181" target="_blank" rel="noopener" aria-label="@xai 原文 1">1</a><a href="https://x.com/xai/status/2055745334513672284" target="_blank" rel="noopener" aria-label="@xai 原文 2">2</a></span></span></div>

## 4/14 Together AI 继续包装 Pearl endpoint 的推理经济学
Together AI 继续介绍 Gemma-4-31B-it-Pearl，称其支持 32K context、configurable thinking、function calling 和 JSON mode，是 Together 首个 Pearl-powered endpoint。官方页面还把它放在“proof-carrying inference”的叙事下：模型推理不仅交付 tokens，还生成可验证 proof 并与 Pearl Network 经济机制绑定。即使这个模式仍需要市场验证，它说明推理服务竞争已不只是模型榜单和价格表，还开始尝试把可验证计算、网络激励和 endpoint 成本结构打包成产品。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/togethercompute/status/2055464831327576122" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute</a></div>

## 5/14 OpenUI 用紧凑语言替代 JSON 渲染生成式界面
AlphaSignalAI 介绍开源项目 OpenUI，称其面向 generative UI，使用 OpenUI Lang 这种紧凑 streaming language，而不是让模型返回冗长 JSON。项目思路是由组件库生成 system prompt，模型输出紧凑语法，renderer 再逐 token 解析并绘制界面。这个方向对 agent UI 很重要：如果生成界面的 token 成本、解析延迟和错误率下降，LLM 不只会写一次性页面，还可以在任务执行过程中持续生成、修改和解释交互界面。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2055619473462182215" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2055619474443694182" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a></span></span></div>

## 6/14 Adala 把数据标注包装成可训练 agent loop
AlphaSignalAI 还介绍 HumanSignal 的 Adala，称其用 autonomous agents 处理数据 labeling。推文描述的 loop 是：用户定义带标注样例的环境，agent 行动、观察结果、反思错误，并更新 skill，直到输出稳定。这个项目触及 AI 数据生产的一个关键瓶颈：大量监督数据仍依赖人工标注，而更强的模型又需要更细、更动态的反馈数据。如果 labeling agent 可以被验证、审计并纳入人类复核流程，数据团队会从纯手工标注转向“agent 预标注 + 人类裁决 + skill 持续改进”。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2055664817625563480" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2055664819043287514" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a></span></span></div>

## 7/14 Agent Swarms 叙事强调多模型分工
Bindu Reddy 继续推广 Agent Swarms，称多 agent 系统会为不同任务创建 agents，并组合 Opus、GPT、Gemini、Kimi、DeepSeek 等模型：前端、后端、视觉理解和效率场景分别选择不同模型。虽然推文带有明显产品营销色彩，但它反映了 agent 平台的常见架构方向：单一“最强模型”并不总是最经济，系统会根据工具、模态、延迟、成本和上下文长度动态路由。多模型编排会成为 agent 平台的基础能力，而不是高级功能。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/bindureddy/status/2055698703877329014" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a></div>

## 8/14 模型竞争继续转向 price-performance 曲线
Bindu Reddy 还转述传闻称 Gemini Pro 可能成为 GPT 5.5 level coding model，并且输出 token 价格低 50% 以上。该说法本身应按 rumor 处理，不能当作确认发布；但它指出了更稳定的行业趋势：frontier coding model 的比较正在从“谁在 benchmark 上第一”扩展到“单位成本、延迟、上下文、工具调用和实际工程成功率”。对 coding agent 平台来说，模型选择会越来越像执行引擎调度，价格性能曲线会直接影响产品毛利和默认模型策略。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/bindureddy/status/2055485617102860369" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a></div>

## 9/14 LangChain Deep Agents 继续补齐 harness 和 profile
Harrison Chase 转发 LangChain 相关内容，包括 Deep Agents harness profiles、eval 环境设计、SmithDB 和 Interrupt 会议后的 agent observability 讨论。Deep Agents profiles 让用户把 agents 封装成可复用的 specialized profiles；SmithDB 则继续围绕 trace 和 observability 叙事。agent 平台的实际挑战正在从“能调用工具”变成“能稳定复现、评估、调参和迁移工作流”。harness、profile、sandbox、trace 和 eval 会共同决定 agent 是否能进入生产环境。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17<span class="source-chip__links"><a href="https://x.com/hwchase17/status/2055834153451684308" target="_blank" rel="noopener" aria-label="@hwchase17 原文 1">1</a><a href="https://x.com/hwchase17/status/2055493721412776335" target="_blank" rel="noopener" aria-label="@hwchase17 原文 2">2</a><a href="https://x.com/hwchase17/status/2055718756970799232" target="_blank" rel="noopener" aria-label="@hwchase17 原文 3">3</a></span></span></div>

## 10/14 Databricks Student Fellows 把数据与 AI 人才培养产品化
Databricks 宣布 Student Fellows program，面向对 data、AI 和 computer science 感兴趣的学生，提供平台实践、认证机会、项目建设、hackathon 和校园社区活动。它不是 frontier model 发布，但反映数据平台公司正在把教育、认证和社区当作生态增长的一部分。企业 AI 采用的瓶颈往往不是模型可用性，而是组织内是否有人懂数据治理、pipeline、评估、应用开发和 AI 安全。Databricks 用学生项目切入，实质是在提前培养未来平台用户和企业 AI 工程人才。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/databricks/status/2055646034622111772" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a></div>

## 11/14 Singapore AI 工程讨论出现 national MCP gateway
Swyx 在 AI Engineer Singapore 相关讨论中提到，Singapore 的 AI GovTech 负责人估算未来两年可能出现 1.3B agents，并正在建设 national MCP gateway。即使这个数字更像愿景陈述，它仍凸显一个方向：当公共部门和企业开始部署大量 agents，核心问题不只是模型，而是工具接入标准、权限边界、审计、跨部门数据访问和安全网关。MCP 从开发者工具协议走向组织级 infrastructure，会让 agent deployment 更像 API 网关和身份治理问题。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@swyx<span class="source-chip__links"><a href="https://x.com/swyx/status/2055470634331750588" target="_blank" rel="noopener" aria-label="@swyx 原文 1">1</a><a href="https://x.com/swyx/status/2055467498888118647" target="_blank" rel="noopener" aria-label="@swyx 原文 2">2</a></span></span></div>

## 12/14 Gary Marcus 与 Geoffrey Hinton 的争论继续放大 AGI 叙事分歧
Gary Marcus 今天多次批评 LLM 与 AGI 叙事，并公开指责 Geoffrey Hinton 错引他关于 AI job replacement 的观点。他同时转发关于 world models、beyond LLMs 和 agent 风险的讨论。这个争论本身不是产品新闻，但它代表 AI public debate 的结构性分歧：一边强调 scale、tool use 和近期能力跃迁，另一边强调 world model、可靠性、因果理解和治理。随着 agent 产品进入更多真实任务，这类理论分歧会继续影响监管、投资和公众信任。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GaryMarcus<span class="source-chip__links"><a href="https://x.com/GaryMarcus/status/2055764049091264940" target="_blank" rel="noopener" aria-label="@GaryMarcus 原文 1">1</a><a href="https://x.com/GaryMarcus/status/2055691805505569172" target="_blank" rel="noopener" aria-label="@GaryMarcus 原文 2">2</a><a href="https://x.com/GaryMarcus/status/2055587833197343077" target="_blank" rel="noopener" aria-label="@GaryMarcus 原文 3">3</a><a href="https://x.com/GaryMarcus/status/2055565477783429424" target="_blank" rel="noopener" aria-label="@GaryMarcus 原文 4">4</a></span></span></div>

## 13/14 AI politics 讨论开始追问“谁来定义用途”
Ethan Mollick 今天提出，AI 与政治讨论中缺少一类明确相信“extremely capable AI soon”且有具体政治项目的人；他还指出，如果只有 tech crowd 定义 AI 能做什么、应该做什么，其他群体的反应会更偏向保护现状。这个话题的价值在于，它把 AI governance 从风险防控扩展到社会选择：高能力 AI 如何进入教育、医疗、福利、监管、产业政策和民主流程，不会只由模型公司决定。AI 应用议程会越来越成为政治和制度设计问题。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2055648045610483897" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2055651521623146680" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a><a href="https://x.com/emollick/status/2055751504070361373" target="_blank" rel="noopener" aria-label="@emollick 原文 3">3</a></span></span></div>

## 14/14 AI 生成内容标注成为信息战议题
Aravind Srinivas 在一组关于印度媒体、社交平台和虚假信息的推文中提到，X 和 Meta 现在已有技术检测 AI generated videos，却仍允许内容在没有 AI-generated footnote 的情况下传播。他把这个问题放在 adversarial nations 利用生成式媒体影响民主的语境下。无论具体政治判断如何，技术议题是清楚的：生成式视频、平台标注、来源追踪、快速 fact-check 和政府/平台协作会成为 2026 年内容治理的重要战场。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@aravind<span class="source-chip__links"><a href="https://x.com/aravind/status/2055622727323812304" target="_blank" rel="noopener" aria-label="@aravind 原文 1">1</a><a href="https://x.com/aravind/status/2055535214768836910" target="_blank" rel="noopener" aria-label="@aravind 原文 2">2</a><a href="https://x.com/aravind/status/2055671962119360586" target="_blank" rel="noopener" aria-label="@aravind 原文 3">3</a></span></span></div>

---

## Deep Dive 附录

### Codex mobile and remote development
OpenAI 的 ChatGPT release notes 显示，Codex 已进入 ChatGPT mobile app preview；开发者文档也说明 Codex 可以连接 remote environments，并通过 SSH 访问用户自己的开发环境。今天 Greg Brockman、Swyx 和 Matt Shumer 的讨论把这个能力放进真实使用方式：开发者把 Mac Mini 或远程机器当作常驻执行环境，在手机上启动、监督、接管或审阅 Codex 任务。这个模式会把 coding agent 从 IDE 插件推进到“always-on software worker”，关键能力包括环境隔离、权限控制、任务恢复、测试反馈和移动端 UX。
[查看原文](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
[查看原文](https://developers.openai.com/codex/remote-connections)

### ChatGPT personal finance
OpenAI 的 personal finance preview 面向美国 Pro 用户，核心是让 ChatGPT 在用户授权后读取金融账户，并帮助理解支出、余额、订阅和现金流。今天的用户反馈更关注 product scaffolding：个人金融问题需要先收集目标、风险承受力、税务/家庭背景、现金流假设和约束，否则模型可能直接进入建议阶段。对 agentic finance 来说，下一步不是简单扩展账户连接，而是把访谈、假设披露、计算可视化、审计日志和行动审批做成默认流程。
[查看原文](https://openai.com/index/personal-finance-chatgpt/)

### Together AI Gemma-4-31B-it-Pearl
Together 的 Gemma-4-31B-it-Pearl 页面把该模型定位为 31B instruction-tuned model endpoint，并强调 32K context、function calling、JSON mode、thinking budget 和 proof-carrying inference。Pearl 叙事的关键不是另一个 Gemma checkpoint，而是推理服务的成本和可验证性：如果 endpoint 能在推理时同时产生 proofs，并与网络激励或 future emissions 绑定，模型服务就会被重新包装成 compute economy 产品。短期仍要看质量、延迟、稳定性和真实折扣能否兑现。
[查看原文](https://www.together.ai/models/gemma-4-31b-it-pearl)

### OpenUI
OpenUI 是 thesysdev 开源的 generative UI framework，核心是让模型输出 OpenUI Lang，而不是 verbose JSON。它依赖组件库生成的提示、紧凑输出语言和 streaming renderer。这个架构试图解决生成式界面的三类问题：JSON token 成本高、流式解析慢、模型输出结构容易漂移。若这类 DSL 成熟，agent 不再只能返回文本或静态前端代码，而可以按任务状态动态生成更小、更可靠、可逐 token 渲染的交互界面。
[查看原文](https://github.com/thesysdev/openui)

### Adala
Adala 是 HumanSignal 开源的 autonomous data labeling agent framework。它把标注任务组织为 agent 在环境中行动、观察反馈、反思错误并更新 skill 的循环，目标是减少纯手工标注负担。这个方向的关键不在于完全替代人类标注员，而是提高数据团队吞吐：agent 先学习任务规则并生成初标，人类负责 ground truth、抽检、纠错和边界案例。对模型训练团队来说，这类系统可能成为合成数据和人工标注之间的中间层。
[查看原文](https://github.com/HumanSignal/Adala)

### LangChain Deep Agents profiles
LangChain Deep Agents profiles 文档展示了如何把 domain-specific agent 封装成 profile，包括 prompt、tools、subagents、middleware 和 execution context 等配置。今天 Harrison Chase 转发的 harness/profile/observability 内容说明，agent 平台正在形成更工程化的分层：profile 定义可复用 agent 行为，harness 提供评估与运行环境，trace database 负责观测和诊断。生产 agent 的关键不只是单次成功，而是能被复现、比较、审计和持续改进。
[查看原文](https://docs.langchain.com/oss/python/deepagents/profiles)

### Databricks Student Fellows
Databricks Student Fellows 是 Databricks 面向学生推出的生态项目，围绕 data、AI、computer science、平台实践、认证和校园活动建立早期人才通道。它与模型发布相比不显眼，但对企业 AI 采用很实际：企业需要懂数据平台、权限、管道、质量评估和 AI 应用落地的人。平台公司通过教育项目培养开发者与未来采购影响者，也是在为 data + AI stack 的长期采用降低组织摩擦。
[查看原文](https://www.databricks.com/blog/announcing-databricks-student-fellows)
