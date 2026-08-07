---
layout: daily
title: "AI Frontier Daily | 2026.05.23"
headline: "Anthropic Glasswing 用 Claude Mythos 找到上万高危漏洞"
date: 2026-05-23 09:07:00 +0800
permalink: /ai-daily/2026/05/23/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Anthropic 发布 Project Glasswing 初步进展，称与约 50 个合作伙伴使用 Claude Mythos Preview，在关键软件中发现超过一万个 high 或 critical severity 漏洞。官方强调，AI 安全能力的瓶颈正在从“能否发现漏洞”转向“如何验证、披露和修补大量漏洞”。Anthropic 暂时不会公开过多技术细节，以避免补丁部署前扩大攻击面，但这已经显示前沿模型正在进入真实软件供应链防御工作流。"
summary: "Anthropic 发布 Project Glasswing 初步进展，称与约 50 个合作伙伴使用 Claude Mythos Preview，在关键软件中发现超过一万个 high 或 critical severity 漏洞。官方强调，AI 安全能力的瓶颈正在从“能否发现漏洞”转向“如何验证、披露和修补大量漏洞”。Anthropic 暂时不会公开过多技术细节，以避免补丁部署前扩大攻击面，但这已经显示前沿模型正在进入真实软件供应链防御工作流。"
issue_count: 15
deep_dive_count: 6
reading_time: 18
cover: "https://cdn.sanity.io/images/4zrzovbb/website/8831fc381f1087ce855b4fbb4f080b2685ea38ec-1200x630.jpg"
signals: "AnthropicAI · GoogleDeepMind · perplexity_ai · AlphaSignalAI · cursor_ai · databricks · emollick · OfficialLoganK"
header-img: img/dark_yellow_400.png
---


## 1/15 Anthropic Glasswing 用 Claude Mythos 找到上万高危漏洞
Anthropic 发布 Project Glasswing 初步进展，称与约 50 个合作伙伴使用 Claude Mythos Preview，在关键软件中发现超过一万个 high 或 critical severity 漏洞。官方强调，AI 安全能力的瓶颈正在从“能否发现漏洞”转向“如何验证、披露和修补大量漏洞”。Anthropic 暂时不会公开过多技术细节，以避免补丁部署前扩大攻击面，但这已经显示前沿模型正在进入真实软件供应链防御工作流。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI<span class="source-chip__links"><a href="https://x.com/AnthropicAI/status/2057909102542549503" target="_blank" rel="noopener" aria-label="@AnthropicAI 原文 1">1</a><a href="https://x.com/AnthropicAI/status/2057909104090169464" target="_blank" rel="noopener" aria-label="@AnthropicAI 原文 2">2</a></span></span></div>

## 2/15 Google 把 SynthID 和内容凭证推向搜索、Gemini、Pixel 与云端
Google DeepMind 宣布 SynthID 扩展到更多合作伙伴，并新增判断内容是否由 AI 生成的入口，用户可在 Gemini App 或 Google Search 中询问媒体来源。Google 官方博客补充，SynthID 已为超过 1000 亿张图片和视频、6 万年音频加水印，同时 C2PA Content Credentials 将扩展到 Pixel 8、9、10 的视频拍摄。AI 生成媒体进入大规模分发后，来源验证正在变成平台级基础设施。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GoogleDeepMind<span class="source-chip__links"><a href="https://x.com/GoogleDeepMind/status/2057898089621459434" target="_blank" rel="noopener" aria-label="@GoogleDeepMind 原文 1">1</a><a href="https://x.com/GoogleDeepMind/status/2057898091479527633" target="_blank" rel="noopener" aria-label="@GoogleDeepMind 原文 2">2</a></span></span></div>

## 3/15 Perplexity 开源 Bumblebee，扫描开发者机器上的供应链暴露面
Perplexity 开源 Bumblebee，这是一个面向 macOS 和 Linux 的 read-only 扫描器，用来盘点开发者机器上的包、浏览器扩展、编辑器扩展、MCP 配置和 AI 工具配置。它不是等代码进入生产后再做 SBOM 或 EDR，而是在开发端识别风险包和扩展。随着 coding agent 获得本地文件、终端、浏览器和 MCP 权限，开发者端点本身正在成为软件供应链安全的关键边界。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@perplexity_ai<span class="source-chip__links"><a href="https://x.com/perplexity_ai/status/2057869990536360334" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 1">1</a><a href="https://x.com/perplexity_ai/status/2057870003060498612" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/AlphaSignalAI/status/2057875938180755757" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI</a></div>

## 4/15 Cursor SDK 让开发者用 Composer 2.5 构建自己的 agent
Cursor 宣布 Cursor SDK 支持用 Composer 2.5 构建自定义 agent，并提供 Python 与 TypeScript 版本。官方同时给出 `/sdk` skill 和文档入口，周末期间 SDK 内 Composer usage 90% off。这个发布说明 coding agent 的竞争正在从 IDE 内交互扩展到可编程 runtime：团队可以把 Cursor 的 agent 能力嵌进内部工具、自动化流程和 CI 辅助系统，而不只是让人坐在编辑器里对话。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai<span class="source-chip__links"><a href="https://x.com/cursor_ai/status/2057913121558413770" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 1">1</a><a href="https://x.com/cursor_ai/status/2057913123194155070" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 2">2</a></span></span></div>

## 5/15 Databricks 把 Genie Code 放进 Lakeflow，数据工程 agent 化
Databricks 发布 Genie Code，将 autonomous AI partner 直接放进 Lakeflow，帮助数据工程师生成 pipeline、编排 job、追踪 lineage、诊断失败并审阅修复建议。另一条 Lakebase walkthrough 则展示 Backstage 使用 Lakebase 替代 Postgres 后，可在约 1 秒创建生产数据库分支、4 秒内完成 point-in-time recovery。Databricks 的重点是把 agent 从问答助手推进到有治理边界的数据工程操作面。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks<span class="source-chip__links"><a href="https://x.com/databricks/status/2057831450443989433" target="_blank" rel="noopener" aria-label="@databricks 原文 1">1</a><a href="https://x.com/databricks/status/2057918444868153832" target="_blank" rel="noopener" aria-label="@databricks 原文 2">2</a></span></span></div>

## 6/15 Google 多模态产品线继续补 I/O 后续：Omni、Genie、Antigravity 与 Flash
Google DeepMind 推出 Project Genie 与 Google Maps Street View 联动，AI Ultra 用户可把美国真实地点转换为可探索的互动世界；Ethan Mollick 展示 Gemini Omni 对 1896 年火车影片做原生视频编辑；Logan Kilpatrick 则称 Gemini 3.5 Flash 在多个视觉用例上超过 3.1 Pro，平均约快 6 倍，并说明 Antigravity 2.0 IDE UI 更新和 weekly limits 重置。Google 的后续动作集中在“模型、媒体编辑、世界模型、开发工具”组合。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GoogleDeepMind<span class="source-chip__links"><a href="https://x.com/GoogleDeepMind/status/2057842131142590512" target="_blank" rel="noopener" aria-label="@GoogleDeepMind 原文 1">1</a><a href="https://x.com/GoogleDeepMind/status/2057842133046903086" target="_blank" rel="noopener" aria-label="@GoogleDeepMind 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/emollick/status/2057874739817808223" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OfficialLoganK<span class="source-chip__links"><a href="https://x.com/OfficialLoganK/status/2057888362011463988" target="_blank" rel="noopener" aria-label="@OfficialLoganK 原文 1">1</a><a href="https://x.com/OfficialLoganK/status/2057912550633947436" target="_blank" rel="noopener" aria-label="@OfficialLoganK 原文 2">2</a></span></span></div>

## 7/15 DeepSeek 把 V4-Pro 折扣永久化，Qwen3.7-Max 继续进入生产推理入口
DeepSeek 宣布 DeepSeek-V4-Pro 折扣永久化，强调开发者可以继续用低价构建应用。Together 继续推广 Qwen3.7-Max，称其具备 1M context、长程自主能力、agentic coding 和工具编排能力，已可在 Together Serverless Inference 上用于生产级 agent workflow。模型能力之外，价格、上下文长度、推理入口和 agent workload 成本正在成为开发者选择平台的直接因素。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/deepseek_ai/status/2057854261699195173" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@deepseek_ai</a><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute<span class="source-chip__links"><a href="https://x.com/togethercompute/status/2057631706044141731" target="_blank" rel="noopener" aria-label="@togethercompute 原文 1">1</a><a href="https://x.com/togethercompute/status/2057631709785726997" target="_blank" rel="noopener" aria-label="@togethercompute 原文 2">2</a><a href="https://x.com/togethercompute/status/2057631711647641835" target="_blank" rel="noopener" aria-label="@togethercompute 原文 3">3</a></span></span></div>

## 8/15 Luma、Runway、Pika 继续把生成视频推向可控编辑和 agent workflow
Luma 宣布 Seedance 2.0 已进入 Luma Agents，强调 portrait、landscape、sci-fi、fantasy 等镜头可即时生成；Runway 继续推广 Aleph 2.0，称可在 Edit Studio 中对最长 30 秒、1080p 的多镜头序列做精确改动；Pika 展示其 agent Curly Joe 生成的动画、游戏节目和 sitcom 风格片段。视频生成的重心正在从单次 prompt 出片，转向可控编辑、项目状态、品牌素材和 agent 批量生产。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LumaLabsAI<span class="source-chip__links"><a href="https://x.com/LumaLabsAI/status/2057864318910161036" target="_blank" rel="noopener" aria-label="@LumaLabsAI 原文 1">1</a><a href="https://x.com/LumaLabsAI/status/2057945638352867549" target="_blank" rel="noopener" aria-label="@LumaLabsAI 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/runwayml/status/2057826728769134599" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml</a><a class="source-chip" href="https://x.com/pika_labs/status/2057888501644071179" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@pika_labs</a></div>

## 9/15 Greg Brockman 与 Ethan Mollick 把“模型是否还是产品”推到台前
Greg Brockman 写道“the model alone is no longer the product”，并继续展示 Codex Appshots、手机操作电脑 app 等 Codex 体验；Ethan Mollick 则回应说模型仍是 prime mover，正因为模型足够通用，labs 才能构建别人难以复制的 harness 和产品。两种观点并不矛盾：前沿模型的商业化正在从裸 API 变成模型、post-training、工具 harness、端侧上下文和产品权限的组合。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb<span class="source-chip__links"><a href="https://x.com/gdb/status/2057670776803996110" target="_blank" rel="noopener" aria-label="@gdb 原文 1">1</a><a href="https://x.com/gdb/status/2057650157358055625" target="_blank" rel="noopener" aria-label="@gdb 原文 2">2</a><a href="https://x.com/gdb/status/2057802037757157838" target="_blank" rel="noopener" aria-label="@gdb 原文 3">3</a></span></span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2057681650633322939" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2057682288238874859" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a></span></span></div>

## 10/15 AI for Science 从论文自动化走向“洞见预判”基准
AlphaSignalAI 今天同时转发 AI academic research survey 与 GIANTS。前者把 AI 研究流程分成 Creation、Writing、Validation、Dissemination 四阶段，强调结构化任务可靠、判断任务脆弱；后者提出 insight anticipation：给模型两篇 parent papers，让它预测后续论文的核心洞见。GIANTS 项目称其 GiantsBench 含 17,839 个样本，GIANTS-4B 在 held-out 测试上相对 Gemini 3 Pro 有 35% 提升。AI 科研正在把“生成论文”拆成更可测的子任务。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2057929493390495806" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2057839517600542923" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a><a href="https://x.com/AlphaSignalAI/status/2057839519123054608" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 3">3</a></span></span><a class="source-chip" href="https://x.com/SakanaAILabs/status/2057632441540702687" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs</a></div>

## 11/15 On-device TTS 与 WebGPU 显示本地 AI 生态继续下沉
AlphaSignalAI 总结 Supertonic 3，称 99M 参数 ONNX TTS 模型可离线运行，支持 31 种语言，在 laptop CPU 上达到 167x realtime，并可在 Raspberry Pi 和浏览器标签页中使用。Clement Delangue 也转发 llama.cpp/ggml WebGPU backend、Hugging Face Buckets 被 Common Crawl 用于大型持续变化数据集等消息。本地 AI 的价值不只是隐私，还包括低延迟、低边际成本和更容易嵌入端侧产品。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2057794058181918748" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2057794059112968624" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a></span></span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue<span class="source-chip__links"><a href="https://x.com/ClementDelangue/status/2057841454408470945" target="_blank" rel="noopener" aria-label="@ClementDelangue 原文 1">1</a><a href="https://x.com/ClementDelangue/status/2057801615168442755" target="_blank" rel="noopener" aria-label="@ClementDelangue 原文 2">2</a></span></span></div>

## 12/15 Agent codebase hardening 开始从个人提示词沉淀为 checklist 和 skill
swyx 发布 Kakuna，定位为用 checklist harden codebase 的技能套件：先 `/plan`，再让它 `/goal` 一天，目标是在不改变功能的前提下完成 boring production work，并审计自己的输出。AlphaSignalAI 同时提到 Karpathy-inspired CLAUDE.md 已进入 GitHub 历史 top 50 项目，且 spec-driven development 相关 repo 和论文正在聚集。agent 工程实践正在从一次性提示词转为可复用的技能、规范、检查清单和 repo 级工作流。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@swyx<span class="source-chip__links"><a href="https://x.com/swyx/status/2057876022553690327" target="_blank" rel="noopener" aria-label="@swyx 原文 1">1</a><a href="https://x.com/swyx/status/2057876113934942507" target="_blank" rel="noopener" aria-label="@swyx 原文 2">2</a></span></span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2057822539737411845" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2057778842681356338" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a></span></span></div>

## 13/15 Agent 文档解析评测进入生产化阶段
LlamaIndex 宣布 ParseBench webinar，称现有文档解析 benchmark 没有按 agent 消费 parsed output 的方式设计，ParseBench 将围绕真实企业文档、五个预测 parser 生产表现的维度和 14 个 parser 的结果展开。随着 agent 读合同、财报、PDF、表格和扫描件，文档 OCR/解析不再是外围工具，而是决定 agent 是否能可靠执行企业 workflow 的基础层。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/llama_index/status/2057915081795485775" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@llama_index</a></div>

## 14/15 AI 人才与教育政策继续影响美国技术竞争讨论
Andrew Ng 批评美国新绿卡政策要求申请人在境外办理，称这会伤害家庭、医生、教师、科学家供给和美国 AI 竞争力。他还反对 Harvard 将本科课程 A 等级比例限制到约 20%，认为教育机构应在保持高标准的同时支持 100% 学生成功，而不是主要扮演筛选者。AI 竞争不仅是模型和算力，也取决于人才流动、教育评价和科研劳动力供给。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AndrewYNg<span class="source-chip__links"><a href="https://x.com/AndrewYNg/status/2057907324380217821" target="_blank" rel="noopener" aria-label="@AndrewYNg 原文 1">1</a><a href="https://x.com/AndrewYNg/status/2057874024672469493" target="_blank" rel="noopener" aria-label="@AndrewYNg 原文 2">2</a></span></span></div>

## 15/15 Agentic web 商业模式从广告转向直接支付与算力分层
Parag Agrawal 转发 Ben Thompson 访谈，讨论 agentic web 中内容商业模式：广告适合人类注意力市场，是因为人类处理支付有认知负担；当 agent 接管更多任务时，直接支付可能更有效。Ethan Mollick 昨日关于 compute shortage 的讨论继续相关：复杂 agent workflow 会更贵，最强 agent 可能优先服务高价值企业用例。未来 AI 产品分层会同时受模型能力、任务价值、内容授权和算力价格约束。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/paraga/status/2057886130377576936" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@paraga</a><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2057565824341127432" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2057566359072964799" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a></span></span></div>

---

## Deep Dive 附录

### Project Glasswing: An initial update
Anthropic 表示 Project Glasswing 已与约 50 个合作伙伴使用 Claude Mythos Preview，在关键软件中发现超过一万个 high 或 critical severity 漏洞。官方把安全工作瓶颈描述为从发现漏洞转向验证、披露和修补：AI 能迅速扩大漏洞发现规模，但协调披露和补丁部署仍需要谨慎节奏。Anthropic 目前只提供聚合统计和示例方向，避免在补丁普及前公开可利用细节，并称未来会在漏洞修复后披露更多经验。
[查看原文](https://www.anthropic.com/research/glasswing-initial-update)

### Google content provenance and SynthID expansion
Google 宣布扩展 Search、Gemini、Chrome、Pixel 和 Cloud 中的内容透明度工具。官方称 SynthID 已为超过 1000 亿张图片和视频、6 万年音频加水印，并继续结合 C2PA Content Credentials。Pixel 原生相机的内容凭证将从图片扩展到视频，Gemini 和 Search 也会提供询问媒体是否由 AI 生成的入口。这个方向把 AI provenance 从模型内部标记推进到用户可见、跨产品传播的验证层。
[查看原文](https://blog.google/innovation-and-ai/products/identifying-ai-generated-media-online/)

### Perplexity Bumblebee
Bumblebee 是 Perplexity 开源的 read-only endpoint inventory 工具，面向 macOS 和 Linux 开发者机器。它可读取 lockfile、包管理器元数据、MCP server config、浏览器扩展和编辑器扩展，用于快速判断某台开发机是否暴露于供应链风险。它的定位不是替代 SBOM 或 EDR，而是补齐“代码运行和发布之前”的本地开发环境风险视图。对于 coding agent，这类工具尤其重要，因为 agent 往往继承开发机上的工具、凭证、扩展和配置。
[查看原文](https://github.com/perplexityai/bumblebee)

### Cursor SDK with Composer 2.5
Cursor SDK 文档显示，Python SDK 可用来 programmatically create and manage Cursor agents。官方 tweet 称 SDK 已支持 Python 和 TypeScript，并可使用 Composer 2.5 构建自定义 agent。它的意义在于 Cursor 不再只提供 IDE 内的人机交互，也开始暴露可嵌入的 agent runtime。企业团队可以把相同 coding agent 编排进内部平台、脚本、CI 辅助或批量代码维护任务。
[查看原文](https://cursor.com/docs/sdk/python)

### Databricks Genie Code and Lakeflow
Databricks 将 Genie Code 描述为 Lakeflow 中的 autonomous AI partner，可帮助数据工程团队生成生产 pipeline、编排 job、理解 lineage、诊断失败并审阅修复建议。Lakebase 的 Backstage walkthrough 则展示数据库 branching 和 point-in-time recovery 如何缩短开发测试循环。两者共同指向数据工程 agent 的落地点：agent 不只是解释 SQL，而是进入有治理边界的 pipeline 开发、调试、变更审查和运营流程。
[查看原文](https://www.databricks.com/blog/agentic-data-engineering-genie-code-and-lakeflow)

### GIANTS: Generative Insight Anticipation from Scientific Literature
GIANTS 把 automated scientific discovery 拆成 insight anticipation：给模型两篇 parent papers，让它预测后续论文的核心洞见。项目页称 GiantsBench 包含 17,839 个跨八个科学领域的样本，GIANTS-4B 通过 reinforcement learning 优化与真实下游洞见的相似度，在 held-out benchmark 上相对 Gemini 3 Pro 获得 35% 提升，并在 SciJudge-30B citation-impact pairwise comparison 中 68% 优于 base model。它不是完整科研自动化，但提供了可评测的科学综合能力任务。
[查看原文](https://giants-insights.github.io/)
