---
layout: daily
title: "AI Frontier Daily | 2026.07.02"
headline: "Claude Fable 5 重新全球上线，但加入网络安全分类器"
date: 2026-07-02 09:07:00 +0800
permalink: /ai-daily/2026/07/02/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Anthropic 表示 Claude Fable 5 将在与美国政府沟通后重新全球部署，并加入新的分类器以识别和阻断更多网络安全任务。短期内，部分常规 coding 和 debugging 请求会回退到 Opus 4.8，Anthropic 称未来几周会继续降低误判。随后 Cursor、Perplexity Computer、Abacus AI/ChatLLM Routes 等工具陆续恢复 Fable 5 接入。这个事件把 frontier model 能力、政府风险沟通、工具分发和 coding agent 成本同时放到同一张表上。"
summary: "Anthropic 表示 Claude Fable 5 将在与美国政府沟通后重新全球部署，并加入新的分类器以识别和阻断更多网络安全任务。短期内，部分常规 coding 和 debugging 请求会回退到 Opus 4.8，Anthropic 称未来几周会继续降低误判。随后 Cursor、Perplexity Computer、Abacus AI/ChatLLM Routes 等工具陆续恢复 Fable 5 接入。这个事件把 frontier model 能力、政府风险沟通、工具分发和 coding agent 成本同时放到同一张表上。"
issue_count: 14
deep_dive_count: 7
reading_time: 19
cover: "https://cdn.sanity.io/images/4zrzovbb/website/6d4a0d28992ade92d6fa63646fd9c9d318245c6c-2400x1260.jpg"
signals: "AnthropicAI · cursor_ai · perplexity_ai · bindureddy · gdb · AlphaSignalAI · xai · NVIDIAAI"
header-img: img/dark_yellow_400.png
---


## 1/14 Claude Fable 5 重新全球上线，但加入网络安全分类器
Anthropic 表示 Claude Fable 5 将在与美国政府沟通后重新全球部署，并加入新的分类器以识别和阻断更多网络安全任务。短期内，部分常规 coding 和 debugging 请求会回退到 Opus 4.8，Anthropic 称未来几周会继续降低误判。随后 Cursor、Perplexity Computer、Abacus AI/ChatLLM Routes 等工具陆续恢复 Fable 5 接入。这个事件把 frontier model 能力、政府风险沟通、工具分发和 coding agent 成本同时放到同一张表上。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI<span class="source-chip__links"><a href="https://x.com/AnthropicAI/status/2072163884430229756" target="_blank" rel="noopener" aria-label="@AnthropicAI 原文 1">1</a><a href="https://x.com/AnthropicAI/status/2072405052518752717" target="_blank" rel="noopener" aria-label="@AnthropicAI 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/cursor_ai/status/2072403323844428217" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai</a><a class="source-chip" href="https://x.com/perplexity_ai/status/2072433125104505226" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@perplexity_ai</a><a class="source-chip" href="https://x.com/bindureddy/status/2072404816903741817" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a></div>

## 2/14 OpenAI GeneBench-Pro 把生物医学 AI 评测推向长程判断任务
Greg Brockman 转发 GeneBench-Pro，称其测试模型能否处理真实计算生物学中需要判断的分析任务，每个问题约相当于人类专家 20-40 小时工作。AlphaSignal 摘要提到，该基准包含 129 个 genomics 和 biomedicine 问题，GPT-5.6 Sol 在 max reasoning 下得分 28.7%，Sol Pro 在另一组运行中达到 31.5%，Claude Opus 4.8 为 16.0%。重点不是模型完全不会做，而是会在发现局部诊断信号后没有把信号传导到最终分析决策。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/gdb/status/2072191801122038207" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2072429750556176398" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2072429753748058271" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a></span></span></div>

## 3/14 Anthropic、OpenAI、Google 同步把 AI 科学瓶颈指向验证
AlphaSignal 将 Claude Science、GeneBench-Pro 和 Google PAT 放在同一条主线里：Claude Science 是带工具和一致性检查的研究工作台，GeneBench-Pro 衡量模型完成真实生物医学分析的可信度，PAT 则是面向论文审稿前检查的 Paper Assistant Tool。PAT 线程称它读取完整 manuscript、验证实验并检查数学，在 SPOT 数学错误检测 benchmark 上从 Gemini 3.1 Pro zero-shot 的 55.2% 提升到 89.7%。三者共同指向科学 AI 的新瓶颈：不是生成更多结果，而是确认结果。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2072429740406063605" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2072429747276251297" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a><a href="https://x.com/AlphaSignalAI/status/2072429756478640398" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 3">3</a><a href="https://x.com/AlphaSignalAI/status/2072429759469105397" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 4">4</a></span></span></div>

## 4/14 xAI 推出 Grok Voice Agent Builder，按分钟定价进入语音代理
xAI 发布 Voice Agent Builder，定位为 no-code 平台，用 Grok Voice 创建类人语音代理，beta 版本按 0.05 美元/分钟计费，并给每个账号提供一个免费电话号码起步。官方称产品面向希望直接上线 production voice agents 的 operators 和 developers，内置 telephony、knowledge retrieval、tools、guardrails 和 observability，也允许带入现有电话号码、API 和 MCP。xAI 强调它不是把 STT、LLM、TTS 三段 API 拼接，而是把语音代理放到一个与 Grok Voice 紧耦合的界面中。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@xai<span class="source-chip__links"><a href="https://x.com/xai/status/2072342803787702422" target="_blank" rel="noopener" aria-label="@xai 原文 1">1</a><a href="https://x.com/xai/status/2072342805482222057" target="_blank" rel="noopener" aria-label="@xai 原文 2">2</a><a href="https://x.com/xai/status/2072342807193550900" target="_blank" rel="noopener" aria-label="@xai 原文 3">3</a><a href="https://x.com/xai/status/2072342809034789088" target="_blank" rel="noopener" aria-label="@xai 原文 4">4</a></span></span></div>

## 5/14 NVIDIA Nemotron-Labs-TwoTower 用双塔结构加速 diffusion language model
NVIDIA Research 发布 Nemotron-Labs-TwoTower，称其从 Nemotron-3-Nano-30B-A3B 改造而来，把 30B 模型拆成两部分并行写 token：一半保留上下文，另一半生成 token，并复用预训练模型而不是从零训练。NVIDIA 在推文中称该方法保留原模型 98.7% 质量，同时生成速度提升 2.42 倍，并提供 arXiv 论文和 Hugging Face 权重页面。这个方向说明开源大模型加速不只靠 speculative decoding，也在探索结构层面的并行生成。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI<span class="source-chip__links"><a href="https://x.com/NVIDIAAI/status/2072394812301480067" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 1">1</a><a href="https://x.com/NVIDIAAI/status/2072395532316889497" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 2">2</a><a href="https://x.com/NVIDIAAI/status/2072397350694502552" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 3">3</a></span></span></div>

## 6/14 Databricks Unity AI Gateway 把 agent、MCP 和 skills 纳入治理清单
Databricks 介绍 Unity AI Gateway 更新，称其是 AI assets、models、agents、LLM endpoints、MCP servers、Skills 和 coding agents 的治理方案。新 agent registry 允许企业登记外部 agents、Databricks 内部 agents、MCP 和 Skills，形成集中 inventory 和 system of record。Databricks 同日宣布 Claude Sonnet 5 可通过 Unity AI Gateway 在 AWS、Azure、GCP 上受治理使用。企业 agent 平台的竞争正在从模型调用扩展到资产登记、权限、审计、部署和跨云治理。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks<span class="source-chip__links"><a href="https://x.com/databricks/status/2072397522157355120" target="_blank" rel="noopener" aria-label="@databricks 原文 1">1</a><a href="https://x.com/databricks/status/2072379280261026234" target="_blank" rel="noopener" aria-label="@databricks 原文 2">2</a></span></span></div>

## 7/14 Databricks 继续推广 LTAP，用一份 lake 数据同时服务交易和分析
Databricks 再次解释 LTAP 架构，称传统数据团队常为 transactions 和 analytics 维护两套系统，导致复制、漂移和治理复杂。LTAP 目标是在开放格式的一份 storage copy 上同时承载 transaction 和 analytics，减少 ETL、replicas 和 pipelines，并让分析系统读取更实时的数据。对 AI 应用来说，这类底层数据架构会影响 agent、BI、实时应用和运营系统能否访问同一份新鲜、可治理的数据，而不是在复制链路后等待。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/databricks/status/2072320605748162596" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a></div>

## 8/14 Together AI 用融资和客户案例强化 open models 成本叙事
Together AI 宣布 Series C，并把口号概括为 intelligence should be abundant, not expensive。随后它引用 Decagon co-founder Ashwin Sreenivas 的案例称，从 closed models 迁移到 Together AI 上的 open models 后，任务成本可降到原来的五分之一到七分之一；另一个客户页提到每轮成本降低 6 倍、p95 latency 低于 400ms、模型每周发布。这里的重点是 open models 竞争正在从“能不能用”走向生产经济性、延迟和可持续迭代节奏。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute<span class="source-chip__links"><a href="https://x.com/togethercompute/status/2072360516857790566" target="_blank" rel="noopener" aria-label="@togethercompute 原文 1">1</a><a href="https://x.com/togethercompute/status/2072360518560645419" target="_blank" rel="noopener" aria-label="@togethercompute 原文 2">2</a><a href="https://x.com/togethercompute/status/2072468212911137067" target="_blank" rel="noopener" aria-label="@togethercompute 原文 3">3</a><a href="https://x.com/togethercompute/status/2072470727287353369" target="_blank" rel="noopener" aria-label="@togethercompute 原文 4">4</a></span></span></div>

## 9/14 LlamaIndex Index v2 把法律知识库做成 agentic retrieval 示例
LlamaIndex 发布 legal-kb reference application，展示 Index v2 如何支持法律和金融等需要 agent 自主浏览大型知识库的场景。推文称 agentic retrieval 正在改变 RAG 应用构建方式，legal-kb 集成 Index v2，让 agent 能在不断变化的大型知识库中检索、导航和读取，而不是只依赖一次 semantic search。官方同时给出 demo、GitHub repo 和 cloud signup 链接。文档 agent 的上限越来越取决于检索、文件导航和上下文控制，而不只是底层 LLM。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/llama_index/status/2072372216994374077" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@llama_index</a></div>

## 10/14 LangChain Deep Agents 支持 dynamic subagents 和 recursive workflows
Harrison Chase 转发并补充 Deep Agents 的 dynamic subagents，把它称为实现 agentic map reduce 的方式：主 agent 可按任务动态生成和调度子 agent，用更确定的方式控制创建、运行和综合。当天 LangChain 相关推文还提到 recursive language model workflows、OpenWiki、wiki memory 和面向 agents 的代码库文档。LangChain 生态的更新重点不是单个 chat agent，而是把多 agent 编排、长期记忆、代码库知识和轨迹管理变成可复用运行时组件。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17<span class="source-chip__links"><a href="https://x.com/hwchase17/status/2072377816780624266" target="_blank" rel="noopener" aria-label="@hwchase17 原文 1">1</a><a href="https://x.com/hwchase17/status/2072364250526630164" target="_blank" rel="noopener" aria-label="@hwchase17 原文 2">2</a><a href="https://x.com/hwchase17/status/2072375664314081287" target="_blank" rel="noopener" aria-label="@hwchase17 原文 3">3</a></span></span></div>

## 11/14 Runway 推出虚构产品广告大赛，并扩大媒体企业合作
Runway 发布 Another Big Ad Contest For Products That Don't Exist，提供 7 个 brief、4 周制作时间和最高 10 万美元现金奖励，鼓励创作者为不存在的产品制作广告。Cristobal Valenzuela 同日称 Runway 与 Bertelsmann 建立合作，Runway 将被整合进后者全球 portfolio。两条消息都显示生成式视频工具在从单次生成 demo 走向广告、娱乐和企业媒体工作流：平台既需要创作者社区，也需要进入大型内容公司的生产体系。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml<span class="source-chip__links"><a href="https://x.com/runwayml/status/2072346724312498383" target="_blank" rel="noopener" aria-label="@runwayml 原文 1">1</a><a href="https://x.com/runwayml/status/2072346725969228147" target="_blank" rel="noopener" aria-label="@runwayml 原文 2">2</a><a href="https://x.com/runwayml/status/2072332384855335067" target="_blank" rel="noopener" aria-label="@runwayml 原文 3">3</a></span></span></div>

## 12/14 Replit 用 Whop 集成把 agent-built app 推向变现闭环
Replit 宣布与 Whop 集成，用户可以在 Replit 上构建应用、无额外 setup 接入 payments，然后发布和推广。Replit 同日还发布 builder 安全 walkthrough、vibecon 片段以及 iPhone/subway 编程活动转发。与上周的移动和桌面入口相比，这条更新关注的是 AI coding 工具的商业闭环：agent 生成应用只是第一步，支付、发布、安全检查、营销和用户获取决定一个小型应用能否真正上线并收款。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Replit<span class="source-chip__links"><a href="https://x.com/Replit/status/2072349322927321180" target="_blank" rel="noopener" aria-label="@Replit 原文 1">1</a><a href="https://x.com/Replit/status/2072353795162669138" target="_blank" rel="noopener" aria-label="@Replit 原文 2">2</a><a href="https://x.com/Replit/status/2072379710126882894" target="_blank" rel="noopener" aria-label="@Replit 原文 3">3</a><a href="https://x.com/Replit/status/2072423224399606108" target="_blank" rel="noopener" aria-label="@Replit 原文 4">4</a></span></span></div>

## 13/14 Cerebras 用 Gemma 4 31B 演示多模态 agent 的延迟差异
Cerebras 用同一个任务对比两个 agent：“Find images matching this description”。两者都使用 Gemma 4 31B，一个跑在 Cerebras 上，另一个跑在 GPUs 上，官方强调速度会改变产品体验。另一条转发称 Gemma 4 31B 在 Cerebras 上超过 1,800 tokens/sec 且支持 multimodal。这个信号与近期端侧和低延迟模型讨论一致：当 agent 需要看图、查找、循环判断和调用工具时，推理延迟会直接影响用户是否觉得产品可用。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cerebras<span class="source-chip__links"><a href="https://x.com/cerebras/status/2072435024746688521" target="_blank" rel="noopener" aria-label="@cerebras 原文 1">1</a><a href="https://x.com/cerebras/status/2072377856710365454" target="_blank" rel="noopener" aria-label="@cerebras 原文 2">2</a></span></span></div>

## 14/14 开放模型安全叙事转向漏洞报告、透明度和 FLARE
Clement Delangue 发文称，可访问甚至开源的 AI 系统更安全，因为更多人可以检查、测试、施压并报告破坏或伤害，从而让构建者负责；他同时提到 Hugging Face 参与 FLARE，与安全和网络安全研究者组成 coalition。当天 Hugging Face、Clement 和相关转发还围绕 GLM 5.2、open weights、Portugal open-source AI model 等消息继续强化开放模型叙事。政策争论不再只是 open vs closed，而是围绕透明度、漏洞报告机制、责任边界和安全研究可达性展开。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue<span class="source-chip__links"><a href="https://x.com/ClementDelangue/status/2072401982569025742" target="_blank" rel="noopener" aria-label="@ClementDelangue 原文 1">1</a><a href="https://x.com/ClementDelangue/status/2072473801858691179" target="_blank" rel="noopener" aria-label="@ClementDelangue 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/huggingface/status/2072487322621251797" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface</a></div>

---

## Deep Dive 附录

### Anthropic redeploys Claude Fable 5
Anthropic 在公告中说明，Fable 5 重新部署来自与美国政府的一系列沟通，产品侧会加入新的 classifiers，目标是阻断更多网络安全相关任务。公告同时承认短期内一些常规 coding 和 debugging 请求会回退到 Opus 4.8，并会继续调优以减少 false positives、更好地区分真实滥用和合法请求。当天 Cursor、Perplexity Computer 和 Abacus AI 相关推文显示，Fable 5 的恢复不只是 Claude 自有产品事件，也影响下游 coding agent、computer use 和 model routing 工具。
[查看原文](https://www.anthropic.com/news/redeploying-fable-5)

### GeneBench-Pro / Claude Science / PAT
OpenAI GeneBench-Pro、Anthropic Claude Science 和 Google PAT 被当天推文放在同一组科学验证基础设施里。GeneBench-Pro 聚焦需要专家 20-40 小时的真实计算生物学任务，AlphaSignal 摘要称 GPT-5.6 Sol max reasoning 得分 28.7%，Sol Pro 达 31.5%。Claude Science 强调研究工具、数据库和 consistency checks 的集成；PAT 则通过 paper-level review agent 检查实验和数学，AlphaSignal 引述 SPOT benchmark 中 PAT 达到 89.7%。共同信号是科学 AI 正从生成答案走向验证答案。
[查看原文](https://openai.com/index/introducing-genebench-pro/)
[查看原文](https://www.anthropic.com/news/claude-science-ai-workbench)
[查看原文](https://arxiv.org/abs/2606.28277)

### xAI Grok Voice Agent Builder
xAI 的 Voice Agent Builder 把语音代理包装成 no-code beta 产品，支持 telephony、knowledge retrieval、tools、guardrails、observability、现有号码、API 和 MCP。公开定价为 0.05 美元/分钟，并为账号提供免费电话号码试用。xAI 的产品叙事强调减少传统 voice stack 中 STT、LLM、TTS 多供应商拼接造成的延迟、成本和故障点。语音 agent 的竞争因此不只在声音质量，也在电话系统、知识检索、工具执行、监控和生产上线速度。
[查看原文](https://x.ai/news/grok-voice-agent-builder)

### NVIDIA Nemotron-Labs-TwoTower
Nemotron-Labs-TwoTower 是 NVIDIA Research 基于 Nemotron-3-Nano-30B-A3B 改造的 diffusion language model。推文称它把一个 30B 模型拆成两半：一半保留 context，另一半并行生成 token，并复用已有预训练模型。NVIDIA 给出的核心数字是保留 98.7% 原模型质量，同时提升 2.42 倍生成速度。Hugging Face 页面和 arXiv 论文提供了模型与技术细节入口。这个方向代表在推理阶段通过模型结构和并行生成降低延迟的尝试。
[查看原文](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16)
[查看原文](https://arxiv.org/abs/2606.26493)

### Databricks Unity AI Gateway and LTAP
Databricks 的 Unity AI Gateway 更新把 AI assets、models、agents、LLM endpoints、MCP servers、Skills 和 coding agents 纳入治理对象，并通过 agent registry 建立集中 inventory。Claude Sonnet 5 在 Databricks 上可通过 Unity AI Gateway 跨 AWS、Azure、GCP 使用。另一条 LTAP 博文则继续解释 Databricks 希望让交易和分析运行在 lake 中同一份开放格式数据上，减少复制、漂移和治理复杂度。两条结合起来看，Databricks 正把 agent 治理和数据新鲜度作为企业 AI 平台底座。
[查看原文](https://www.databricks.com/blog/ai-governance-data-ai-summit-2026-whats-new-unity-ai-gateway)
[查看原文](https://www.databricks.com/blog/lakebase-ltap-rethinking-database-storage)

### Together AI open-model economics
Together AI 的 Series C 公告和 Decagon 客户案例共同强调 open models 的生产经济性。Together 引述客户迁移后任务成本降至 closed models 的五分之一到七分之一，Decagon 案例页还给出每轮成本降低 6 倍、p95 latency 低于 400ms、模型每周发布等指标。它把 open model 采用从技术偏好转成成本、延迟和迭代速度问题。对 agentic workloads 来说，长对话、多工具、多轮反思和高并发会放大单位推理成本，模型服务经济性会直接影响产品形态。
[查看原文](https://www.together.ai/blog/announcing-our-series-c)
[查看原文](https://www.together.ai/customers/decagon)

### Agent retrieval and orchestration stack
LlamaIndex 的 legal-kb 展示 Index v2 如何支持法律知识库中的 agentic retrieval，重点是让 agent 在大型、演变中的文档集合里自主导航、检索和读取。LangChain Deep Agents 的 dynamic subagents 则让主 agent 按任务动态创建子 agent，用于 fanout、map reduce 和 synthesis 等模式。两者共同说明 agent runtime 正在拆成更明确的层：检索和文件导航解决“看什么”，subagent orchestration 解决“谁来并行做什么”，memory/wiki/docs 解决“跨任务保留什么上下文”。
[查看原文](https://legal-kb.dev/)
[查看原文](https://github.com/run-llama/legal-kb)
[查看原文](https://docs.langchain.com/oss/python/deepagents/dynamic-subagents)
