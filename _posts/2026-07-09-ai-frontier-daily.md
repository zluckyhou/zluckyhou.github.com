---
layout: daily
title: "AI Frontier Daily | 2026.07.09"
headline: "OpenAI 推出 GPT-Live，并把实时语音推进到 full-duplex 架构"
date: 2026-07-09 09:07:00 +0800
permalink: /ai-daily/2026/07/09/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "OpenAI 发布 GPT-Live，称这是新一代 ChatGPT Voice：模型可以同时听和说，支持更自然的打断、时间感和实时翻译；遇到需要 web search、deep reasoning 或复杂工作的请求时，可委托给后端 frontier model，再把结果带回语音对话。GPT-Live 已向 ChatGPT Go、Plus、Pro 用户全量推出，Free 用户逐步开放，API 稍后上线。Sam Altman 和 Greg Brockman 都强调这会改变用户与 AI 的交互方式：语音不再只是文本输入的替代，而是更接近实时协作界面。"
summary: "OpenAI 发布 GPT-Live，称这是新一代 ChatGPT Voice：模型可以同时听和说，支持更自然的打断、时间感和实时翻译；遇到需要 web search、deep reasoning 或复杂工作的请求时，可委托给后端 frontier model，再把结果带回语音对话。GPT-Live 已向 ChatGPT Go、Plus、Pro 用户全量推出，Free 用户逐步开放，API 稍后上线。Sam Altman 和 Greg Brockman 都强调这会改变用户与 AI 的交互方式：语音不再只是文本输入的替代，而是更接近实时协作界面。"
issue_count: 12
deep_dive_count: 6
reading_time: 21
cover: "https://mistral.ai/cms-media/api/media/file/Robostral-navigate.jpg"
signals: "OpenAI · sama · gdb · MistralAI · cursor_ai · elonmusk · databricks · runwayml"
header-img: img/dark_yellow_400.png
---


## 1/12 OpenAI 推出 GPT-Live，并把实时语音推进到 full-duplex 架构
OpenAI 发布 GPT-Live，称这是新一代 ChatGPT Voice：模型可以同时听和说，支持更自然的打断、时间感和实时翻译；遇到需要 web search、deep reasoning 或复杂工作的请求时，可委托给后端 frontier model，再把结果带回语音对话。GPT-Live 已向 ChatGPT Go、Plus、Pro 用户全量推出，Free 用户逐步开放，API 稍后上线。Sam Altman 和 Greg Brockman 都强调这会改变用户与 AI 的交互方式：语音不再只是文本输入的替代，而是更接近实时协作界面。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI<span class="source-chip__links"><a href="https://x.com/OpenAI/status/2074907025537224840" target="_blank" rel="noopener" aria-label="@OpenAI 原文 1">1</a><a href="https://x.com/OpenAI/status/2074907028733178359" target="_blank" rel="noopener" aria-label="@OpenAI 原文 2">2</a><a href="https://x.com/OpenAI/status/2074907030343839925" target="_blank" rel="noopener" aria-label="@OpenAI 原文 3">3</a><a href="https://x.com/OpenAI/status/2074907033577693636" target="_blank" rel="noopener" aria-label="@OpenAI 原文 4">4</a><a href="https://x.com/OpenAI/status/2075019750569378007" target="_blank" rel="noopener" aria-label="@OpenAI 原文 5">5</a></span></span><a class="source-chip" href="https://x.com/sama/status/2074909079450050629" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sama</a><a class="source-chip" href="https://x.com/gdb/status/2074910365377568948" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a></div>

## 2/12 OpenAI 审计 SWE-Bench Pro，称 30% public tasks 已不足以衡量 frontier coding
OpenAI 同日发布 SWE-Bench Pro 审计，称这个常用 coding benchmark 不再可靠衡量 frontier coding capability，并撤回此前推荐。OpenAI 表示用 model-based investigator agents 加 5 名独立资深软件工程师人工复核，发现约 30% public tasks 存在隐藏需求、矛盾指令、过严测试或不完整评分标准等问题，可能让正确解法失败并扭曲榜单。随着 coding models 进入真实软件工程，评估焦点正从“谁分数高”转向 task 是否公平、是否可复现、是否能代表真实工程约束。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI<span class="source-chip__links"><a href="https://x.com/OpenAI/status/2074972179385720836" target="_blank" rel="noopener" aria-label="@OpenAI 原文 1">1</a><a href="https://x.com/OpenAI/status/2074972180769907186" target="_blank" rel="noopener" aria-label="@OpenAI 原文 2">2</a><a href="https://x.com/OpenAI/status/2074972182640492731" target="_blank" rel="noopener" aria-label="@OpenAI 原文 3">3</a><a href="https://x.com/OpenAI/status/2074972185895342084" target="_blank" rel="noopener" aria-label="@OpenAI 原文 4">4</a></span></span></div>

## 3/12 Mistral 发布 Robostral Navigate，把单 RGB 机器人导航推到 R2R-CE SOTA
Mistral 发布 Robostral Navigate，这是一个 8B embodied navigation model，用自然语言指令引导机器人执行任务。它只依赖单个 RGB camera，不使用 LiDAR、depth sensor 或多摄像头系统，却在 R2R-CE validation unseen 上达到 76.6% success rate，validation seen 为 79.4%，比最佳单摄像头方法高 9.7 个百分点。模型训练完全来自仿真，约 400,000 trajectories、6,000 scenes；prefix-caching recipe 将训练 token 减少 22 倍，再用在线 RL CISPO 提升表现。Mistral 把它定位为可泛化到轮式、腿式和飞行机器人。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@MistralAI<span class="source-chip__links"><a href="https://x.com/MistralAI/status/2074856309438980145" target="_blank" rel="noopener" aria-label="@MistralAI 原文 1">1</a><a href="https://x.com/MistralAI/status/2074856311091503237" target="_blank" rel="noopener" aria-label="@MistralAI 原文 2">2</a><a href="https://x.com/MistralAI/status/2074856312685334596" target="_blank" rel="noopener" aria-label="@MistralAI 原文 3">3</a><a href="https://x.com/MistralAI/status/2074856314132410755" target="_blank" rel="noopener" aria-label="@MistralAI 原文 4">4</a><a href="https://x.com/MistralAI/status/2074856315655000552" target="_blank" rel="noopener" aria-label="@MistralAI 原文 5">5</a></span></span></div>

## 4/12 Cursor 与 xAI 发布 Grok 4.5，coding agent 竞争进入专用模型周期
Cursor 宣布与 SpaceXAI 合作训练 Grok 4.5，称这是其最强模型，也是首个不只面向软件工程的模型；上线 Cursor 后首周 double usage。Elon Musk 连续补充称 Grok 4.5 是面向 coding and agents 的模型，Grok Build harness 会随 V9 foundation model 每周改进，context window 预计下周升至 1M，且尚未使用 xAI 自研、精确映射 GB300 hardware 的 C/C++ inference software，未来速度可能翻倍。Grok 4.5 的叙事重点是大模型、低成本、长任务和真实工程闭环，而不是单纯聊天能力。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai<span class="source-chip__links"><a href="https://x.com/cursor_ai/status/2074915744999969059" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 1">1</a><a href="https://x.com/cursor_ai/status/2074915747302690991" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 2">2</a><a href="https://x.com/cursor_ai/status/2074915748544217188" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 3">3</a></span></span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@elonmusk<span class="source-chip__links"><a href="https://x.com/elonmusk/status/2074931787533328622" target="_blank" rel="noopener" aria-label="@elonmusk 原文 1">1</a><a href="https://x.com/elonmusk/status/2074932226639183939" target="_blank" rel="noopener" aria-label="@elonmusk 原文 2">2</a><a href="https://x.com/elonmusk/status/2074954823338733805" target="_blank" rel="noopener" aria-label="@elonmusk 原文 3">3</a><a href="https://x.com/elonmusk/status/2074969374843154500" target="_blank" rel="noopener" aria-label="@elonmusk 原文 4">4</a><a href="https://x.com/elonmusk/status/2074970378682724661" target="_blank" rel="noopener" aria-label="@elonmusk 原文 5">5</a></span></span></div>

## 5/12 Databricks 把 coding agent benchmark 拉回企业真实代码库
Databricks 发布基于其多百万行内部代码库的 coding agent benchmark，用真实工程任务观察 cost 与 performance。官方称结果显示，顶级表现来自 proprietary 与 open models 的组合；token pricing 不是实际成本的可靠代理；agent harness 选择会显著影响质量和成本。当天 Databricks 还宣布 Agent Bricks 扩展为 agent platform，新增更广泛模型支持、managed memory、MCP connectivity、secure sandboxes，以及 Unity AI Gateway 的治理、监控和 cost controls。企业 agent 竞争继续从模型本身转向 choice、context、control。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks<span class="source-chip__links"><a href="https://x.com/databricks/status/2074982580626051240" target="_blank" rel="noopener" aria-label="@databricks 原文 1">1</a><a href="https://x.com/databricks/status/2074937085492969897" target="_blank" rel="noopener" aria-label="@databricks 原文 2">2</a><a href="https://x.com/databricks/status/2074868956167344155" target="_blank" rel="noopener" aria-label="@databricks 原文 3">3</a></span></span></div>

## 6/12 Runway Dev 把生成式媒体平台卖给企业开发者
Runway 发布 Runway Dev，定位为面向 professional developers 和 enterprise teams 的 AI media platform。官方称广告、电商、游戏和搜索等团队正在用 Runway 降低成本、加快迭代并提升 consumer engagement；Runway Dev 提供一个统一平台，避免开发者拼接多个生成媒体 API。当天 Runway 还把 Seedream 5.0 Pro 接入 Runway，强调 prompt/reference image 生成、高细节图像和最多 14 种语言的图中文字能力。生成式视频公司的产品重心正在从创作者工具扩展到企业媒体基础设施。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml<span class="source-chip__links"><a href="https://x.com/runwayml/status/2074855836417974708" target="_blank" rel="noopener" aria-label="@runwayml 原文 1">1</a><a href="https://x.com/runwayml/status/2074855838959735071" target="_blank" rel="noopener" aria-label="@runwayml 原文 2">2</a><a href="https://x.com/runwayml/status/2074982268175630814" target="_blank" rel="noopener" aria-label="@runwayml 原文 3">3</a><a href="https://x.com/runwayml/status/2074982269735801218" target="_blank" rel="noopener" aria-label="@runwayml 原文 4">4</a></span></span></div>

## 7/12 Pika Director’s Suite 把视频生成包装成 agentic production workflow
Pika 开放 Director’s Suite invite-only early access，称这是由 agent 驱动的视频创作产品，理解并构建从初始概念到 finishing touches 的项目元素。官方展示了 shot list、character/location references、timeline 和 chat-based interface，并邀请用户申请 early access。相较一次性 text-to-video prompt，Director’s Suite 把视频生成向可管理项目推进：角色、地点、镜头、时间线和反馈循环都成为模型可操作对象。这与 Fable、Grok Build、Runway Dev 一起显示，agentic creation 正在从“生成片段”转向完整生产流程。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@pika_labs<span class="source-chip__links"><a href="https://x.com/pika_labs/status/2074911533159858183" target="_blank" rel="noopener" aria-label="@pika_labs 原文 1">1</a><a href="https://x.com/pika_labs/status/2074911534732787928" target="_blank" rel="noopener" aria-label="@pika_labs 原文 2">2</a><a href="https://x.com/pika_labs/status/2074911536314028493" target="_blank" rel="noopener" aria-label="@pika_labs 原文 3">3</a><a href="https://x.com/pika_labs/status/2074959786895196472" target="_blank" rel="noopener" aria-label="@pika_labs 原文 4">4</a><a href="https://x.com/pika_labs/status/2074959794079994367" target="_blank" rel="noopener" aria-label="@pika_labs 原文 5">5</a></span></span></div>

## 8/12 NVIDIA 与 LangChain 调 Nemotron 3 Ultra，开源模型进入 deep agents harness
NVIDIA AI 与 LangChain 宣布围绕 Nemotron 3 Ultra 调优 LangChain Deep Agents harness。NVIDIA 称该方案是 fully open、customizable agent，能以领先闭源模型的一小部分成本提供 frontier performance；LangChain 转发称 benchmark-leading performance、10x lower inference costs，并把它放进 open agent systems、enterprise partners 和 deep agents blueprint 叙事里。这个方向的关键不是单个 open-weight 模型得分，而是模型、harness、工具、企业内容平台和推理服务商共同组成可复用 agent stack。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI<span class="source-chip__links"><a href="https://x.com/NVIDIAAI/status/2074897513476391365" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 1">1</a><a href="https://x.com/NVIDIAAI/status/2074897598905974877" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 2">2</a></span></span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17<span class="source-chip__links"><a href="https://x.com/hwchase17/status/2074927317059789015" target="_blank" rel="noopener" aria-label="@hwchase17 原文 1">1</a><a href="https://x.com/hwchase17/status/2074934632618066131" target="_blank" rel="noopener" aria-label="@hwchase17 原文 2">2</a><a href="https://x.com/hwchase17/status/2074942980553900226" target="_blank" rel="noopener" aria-label="@hwchase17 原文 3">3</a></span></span></div>

## 9/12 Together 推 Provisioned Throughput，开放模型 tokenomics 开始卖 SLA
Together AI 发布 Provisioned Throughput，面向 mission-critical inference workload 提供 reserved capacity。官方称该产品保留 frontier open models 的推理容量，按 token 计价，提供 99% uptime SLA、serverless simplicity，并宣称相对 Opus 4.8 成本最高低 90%，初期例子包括 MiniMax M3 和 GLM-5.2。它反映开放模型生态的商业层正在从“便宜 API”进入容量、稳定性、SLA 和 predictable spend 的企业采购语言。真正的竞争点变成：谁能在开放模型上提供类似云基础设施的可靠吞吐。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute<span class="source-chip__links"><a href="https://x.com/togethercompute/status/2074756085785722930" target="_blank" rel="noopener" aria-label="@togethercompute 原文 1">1</a><a href="https://x.com/togethercompute/status/2074756087530561907" target="_blank" rel="noopener" aria-label="@togethercompute 原文 2">2</a><a href="https://x.com/togethercompute/status/2074947000043225297" target="_blank" rel="noopener" aria-label="@togethercompute 原文 3">3</a></span></span></div>

## 10/12 Sakana Fugu 被解读为模型编排的 agentic engineering 自然延伸
Sakana AI 转发 DeepLearning.AI 对 Fugu 与 Fugu-Ultra 的深挖，强调 dynamic orchestration 可在 GPQA-Diamond、LiveCodeBench Pro、SWE-Bench Pro 等 benchmark 上接近 SOTA，而不依赖单一 provider。The Batch 把 Fugu 描述成可在 Claude、Gemini、GPT、开放模型和自身实例之间选择的 orchestrator model；Fugu-Ultra 可把长任务拆成子任务并协调多个 agent。这个路线将“agent 选择工具和 subagents”进一步上移到“系统选择模型”，也回应了开发者对成本、数据敏感性和 provider lock-in 的担忧。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs<span class="source-chip__links"><a href="https://x.com/SakanaAILabs/status/2074833378088722672" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 1">1</a><a href="https://x.com/SakanaAILabs/status/2075013545113313403" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/hardmaru/status/2074848246644838462" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a></div>

## 11/12 Liquid Antidoom 把小 reasoning model 的循环问题修成一个 token-level 偏好优化
AlphaSignal 总结 Liquid AI 的 Antidoom：小型 reasoning models 在 hard tasks 上容易陷入重复循环，Liquid 用 Final Token Preference Optimization 只训练 mid-generation sequence 的 final token，找出触发 loop 的确切 token，再偏好多个合理替代 token。公开结果称 LFM2.5-2.6B early checkpoint 的 loop rate 从 10.2% 降到 1.4%，Qwen3.5-4B 在 greedy sampling 下从 22.9% 降到 1%。研究还指出，去掉 loops 后 near-greedy sampling 更优，temperature 1 的常见做法可能只是在补偿循环问题。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2074998733226320099" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2074998734455218686" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a><a href="https://x.com/AlphaSignalAI/status/2074998735906492542" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 3">3</a><a href="https://x.com/AlphaSignalAI/status/2074998736883798305" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 4">4</a><a href="https://x.com/AlphaSignalAI/status/2074998738368475208" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 5">5</a><a href="https://x.com/AlphaSignalAI/status/2074998739823984705" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 6">6</a><a href="https://x.com/AlphaSignalAI/status/2074998740859891998" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 7">7</a><a href="https://x.com/AlphaSignalAI/status/2074998741719830569" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 8">8</a></span></span></div>

## 12/12 Agent 安全讨论从 interpretability 扩展到 off-switch 与 defensive RCE
Anthropic 宣布与 AE Studio 合作发布 dual-use off-switch 相关研究，延续其围绕 agent safety、可控性和高能力系统停止机制的研究线。当天 Timnit Gebru 转发 Heidy Khlaaf 对 Claude Code 与 Codex auto-mode/auto-review 的攻击研究，称仅在防御性评估仓库时就能让 agent 被 hijack 并触发 RCE。这两条放在一起说明，agent 安全问题不只是在输出层防 prompt injection，还涉及代码执行权限、工具调用、审计上下文、停止开关和“安全工具本身被当作攻击面”的系统设计。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AnthropicAI/status/2075005777522172146" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI</a><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@timnitGebru<span class="source-chip__links"><a href="https://x.com/timnitGebru/status/2075028848740094117" target="_blank" rel="noopener" aria-label="@timnitGebru 原文 1">1</a><a href="https://x.com/timnitGebru/status/2075029040042283296" target="_blank" rel="noopener" aria-label="@timnitGebru 原文 2">2</a><a href="https://x.com/timnitGebru/status/2075029055447932976" target="_blank" rel="noopener" aria-label="@timnitGebru 原文 3">3</a><a href="https://x.com/timnitGebru/status/2075029119927009622" target="_blank" rel="noopener" aria-label="@timnitGebru 原文 4">4</a></span></span></div>

---

## Deep Dive 附录

### OpenAI GPT-Live / SWE-Bench Pro audit
OpenAI 的 GPT-Live 把语音模型设计重点放在 full-duplex interaction：模型不是等待用户说完再回复，而是能够同时听和说，从而支持打断、语速变化、实时翻译和更像人类对话的 turn-taking。复杂任务可交给后端 frontier model 执行，再回到语音通道。与此同时，OpenAI 对 SWE-Bench Pro 的审计说明，coding benchmark 正面临 frontier model 追平旧任务后的失真问题。约 30% public tasks 被判定有隐藏需求、矛盾指令、过严测试或不完整评分标准，OpenAI 因此撤回对其作为 leading coding eval 的推荐。两条消息共同说明，OpenAI 一边把交互界面推向实时语音，一边重新校准 coding progress 的测量方式。
[查看原文](https://openai.com/index/introducing-gpt-live/)
[查看原文](https://openai.com/index/separating-signal-from-noise-coding-evaluations/)

### Mistral Robostral Navigate
Robostral Navigate 是 Mistral 的 8B embodied navigation model，目标是让机器人根据自然语言在真实空间中导航。官方最强调的是传感器约束：单 RGB camera，无 LiDAR、无 depth sensor、无多摄像头 rig。模型在 R2R-CE validation unseen 上达到 76.6% success rate，validation seen 为 79.4%。训练数据完全来自仿真，约 400,000 trajectories、6,000 scenes；prefix-caching 与 tree-based attention masking 将训练 token 减少 22 倍，再通过在线 RL CISPO 提升表现。Mistral 称它可泛化到轮式、腿式、飞行机器人和不同尺寸平台，应用面向配送、物流、制造和 hospitality。
[查看原文](https://mistral.ai/news/robostral-navigate/)

### Databricks enterprise agent stack
Databricks 的两条公告把企业 agent 的竞争拆成 benchmark 与平台两层。内部 coding benchmark 使用多百万行真实代码库任务，关注模型组合、harness、真实成本与质量，而不是公共榜单单一分数。Agent Bricks 则扩展为生产 agent platform，覆盖模型选择、上下文、memory、MCP connectivity、secure sandboxes、Unity AI Gateway governance、监控和 cost controls。Databricks 的核心判断是，企业 agent 的质量由模型、数据语义、权限、工具、成本、审计和运行环境共同决定；模型 token 单价不能代表最终业务成本。
[查看原文](https://www.databricks.com/blog/benchmarking-coding-agents-databricks-multi-million-line-codebase)
[查看原文](https://www.databricks.com/blog/agent-bricks-dais-2026)

### Sakana Fugu / Fugu-Ultra orchestration
DeepLearning.AI 把 Fugu 与 Fugu-Ultra 描述为 orchestrator models：它们不直接等同于一个 worker model，而是在 Claude、Gemini、GPT、开放模型和自身实例之间做选择。Fugu 偏向基础 coding/chat，Fugu-Ultra 面向长程 coding 与 research，可把任务拆成子任务并协调多个 agents。训练过程使用可验证任务收集 worker 成功率分布，再让 Fugu 学习选择模型；Fugu-Ultra 则用 GRPO 学习多步 agentic workflow。文章认为，模型编排是 agentic engineering 的自然外延：开发者不仅组合工具和 subagents，也开始组合不同模型提供商。
[查看原文](https://www.deeplearning.ai/the-batch/fugu-blends-models-task-by-task)

### Liquid Antidoom
Antidoom 聚焦一个具体 failure mode：小型 reasoning models 在困难任务上陷入重复 loop。Final Token Preference Optimization 找到触发循环的 token，只在该位置训练模型偏好多个合理替代 token，并尽量不扰动其余 vocabulary。它不同于全局 repetition penalty，也比 RL rollout 更轻。Liquid 公布的结果显示，LFM2.5-2.6B early checkpoint 和 Qwen3.5-4B 的 loop rate 大幅下降，且训练数据不包含数学答案，只修复模型到达答案前被循环卡住的问题。代码、数据集和 hyperparameters 已公开。
[查看原文](https://www.liquid.ai/blog/antidoom)
[查看原文](https://github.com/Liquid4All/antidoom)
[查看原文](https://huggingface.co/datasets/LiquidAI/antidoom-mix-v1.0)

### Anthropic off-switch / defensive agent risk
Anthropic 与 AE Studio 的 off-switch 研究关注高能力 dual-use AI 系统的可控性：当系统被检测到危险行为、策略违反或授权撤回时，需要可靠的停止或约束机制。当天另一条安全讨论来自 Timnit Gebru 转发的 Claude Code/Codex 攻击研究：研究者称在 auto-mode 或 auto-review 中，仅用防御性代码审计场景就能 hijack agent 并触发 RCE。这说明 agent 安全不能只靠 prompt 层过滤，必须把执行权限、文件系统、工具调用、审计输入、外部仓库和停止机制放在同一个威胁模型里。
[查看原文](https://www.anthropic.com/research/off-switch-dual-use)
