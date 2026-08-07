---
layout: daily
title: "AI Frontier Daily | 2026.04.17"
headline: "Anthropic 发布 Claude Opus 4.7：编码提升 13%，视觉增强至 3.75MP"
date: 2026-04-17 09:07:00 +0800
permalink: /ai-daily/2026/04/17/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Anthropic 正式推出 Claude Opus 4.7，主打更强大的软件工程能力。在 93 项编码任务基准上较 Opus 4.6 提升 13%，视觉模块升级至支持最高 2,576 像素长边（约 3.75 兆像素）图片。新增 `xhigh` 努力等级，可在推理深度与响应速度之间做更精细的权衡；任务预算（Task Budgets）进入公测；Claude Code 新增 `/ultrareview` 指令专用于深度代码审查。定价维持 $5/$25 per M token。可通过 API、Amazon Bedrock、Google Vertex AI、Microsoft Foundry 以及 Perplexity 等平台访问。"
summary: "Anthropic 正式推出 Claude Opus 4.7，主打更强大的软件工程能力。在 93 项编码任务基准上较 Opus 4.6 提升 13%，视觉模块升级至支持最高 2,576 像素长边（约 3.75 兆像素）图片。新增 `xhigh` 努力等级，可在推理深度与响应速度之间做更精细的权衡；任务预算（Task Budgets）进入公测；Claude Code 新增 `/ultrareview` 指令专用于深度代码审查。定价维持 $5/$25 per M token。可通过 API、Amazon Bedrock、Google Vertex AI、Microsoft Foundry 以及 Perplexity 等平台访问。"
issue_count: 15
deep_dive_count: 3
reading_time: 12
cover: "https://www-cdn.anthropic.com/images/4zrzovbb/website/96ea2509a90e527642c822303e56296a07bcfce4-1920x1080.png"
signals: "AnthropicAI · OpenAI · gdb · perplexity_ai · Alibaba_Qwen · emollick · databricks · llama_index"
header-img: img/dark_yellow_400.png
---


## 1/15 Anthropic 发布 Claude Opus 4.7：编码提升 13%，视觉增强至 3.75MP
Anthropic 正式推出 Claude Opus 4.7，主打更强大的软件工程能力。在 93 项编码任务基准上较 Opus 4.6 提升 13%，视觉模块升级至支持最高 2,576 像素长边（约 3.75 兆像素）图片。新增 `xhigh` 努力等级，可在推理深度与响应速度之间做更精细的权衡；任务预算（Task Budgets）进入公测；Claude Code 新增 `/ultrareview` 指令专用于深度代码审查。定价维持 $5/$25 per M token。可通过 API、Amazon Bedrock、Google Vertex AI、Microsoft Foundry 以及 Perplexity 等平台访问。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AnthropicAI/status/2044786024644301250" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI</a></div>

## 2/15 OpenAI Codex 大升级："几乎无所不能"（Computer Use + 90+ 插件 + 图像生成）
OpenAI 宣布 Codex 重大更新，定位从"AI 编程助手"向"通用计算机代理"跃升。核心新能力：macOS 计算机使用（后台运行，不占用主屏，可见/点击/输入任意 App）；90+ 插件接入文档、项目管理、代码审查、部署等工具；内置 gpt-image-1.5 图像生成用于前端设计与资产创建；持久化自动化线程（Automations 保持上下文延续）；定时任务能力（可跨天追踪长期工作）。用户账号使用额度覆盖图像生成，无需 API key。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/OpenAI/status/2044827705406062670" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a><a class="source-chip" href="https://x.com/gdb/status/2044855706273391084" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a></div>

## 3/15 OpenAI 发布 GPT-Rosalind：首个专为生命科学设计的前沿推理模型
OpenAI 推出 GPT-Rosalind，这是其生命科学模型系列的旗舰产品，专为生物学、药物发现和转化医学研究工作流优化。在蛋白质与化学推理、基因组分析、生物化学知识和科学工具调用方面表现突出。即日起向 Amgen、Moderna、Allen Institute、Thermo Fisher Scientific 等合格客户开放研究预览，可通过 ChatGPT、Codex 和 API 访问。OpenAI 表示，从靶点发现到新药获批平均需 10-15 年，该模型旨在帮助科学家更快探索更多可能性。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/OpenAI/status/2044861690911850863" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a><a class="source-chip" href="https://x.com/gdb/status/2044891908213027032" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a></div>

## 4/15 Perplexity 推出 Personal Computer：Mac 本地 AI 代理，可 24/7 操作系统 App
Perplexity 发布 Personal Computer，集成于 Mac App，向 Max 订阅者开放。核心能力：安全连接本地文件夹，读写本地文件；访问 iMessage、Apple Mail、Calendar 等原生 Mac App；可部署在 Mac mini 上 24/7 后台运行；支持通过 iPhone 远程发起任务，PC 端自动执行（含 2FA 验证）；默认使用 Claude Opus 4.7 作为协调模型。这是继 OpenAI Codex macOS 计算机使用之后，第二个重要的个人计算机代理发布。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@perplexity_ai<span class="source-chip__links"><a href="https://x.com/perplexity_ai/status/2044805973085454518" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 1">1</a><a href="https://x.com/perplexity_ai/status/2044828352171888951" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 2">2</a></span></span></div>

## 5/15 阿里 Qwen3.6-35B-A3B 开源：35B 参数仅激活 3B，视觉媲美 Claude Sonnet 4.5
阿里巴巴 Qwen 团队开源 Qwen3.6-35B-A3B，这是一个稀疏 MoE 架构：总参数 35B，激活仅 3B，遵循 Apache 2.0 协议免费商用。该模型原生多模态，在大多数视觉语言基准上表现与 Claude Sonnet 4.5 相当，空间智能方面更胜一筹（RefCOCO 92.0，ODInW13 50.8）。编码能力方面，在关键基准上超越更大的稠密模型 Qwen3.5-27B，并大幅超越前代 Qwen3.5-35B-A3B，尤其在 Agentic 编码和推理任务上。支持思考/非思考双模式。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Alibaba_Qwen<span class="source-chip__links"><a href="https://x.com/Alibaba_Qwen/status/2044768734234243427" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 1">1</a><a href="https://x.com/Alibaba_Qwen/status/2044768742761189762" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 2">2</a></span></span></div>

## 6/15 emollick：Opus 4.7 自适应思考频繁"偷懒"，非代码任务质量下滑
Wharton 教授 Ethan Mollick（@emollick）对 Claude Opus 4.7 的自适应思考机制提出系统性批评。他发现模型在分析、写作和研究任务上经常判定为"低努力"，不触发深度思维，且没有 ChatGPT 那样的手动覆盖选项。同时指出 AI 公司普遍假设"编码/技术工作是唯一重要的智识工作"，而 Claude Cowork 无法像 Claude Code 那样手动设置思考等级。该推文获得 705 点赞、44K 浏览，引发广泛讨论。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2044864822076969268" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2044868563626824062" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a></span></span></div>

## 7/15 Databricks 推出 Document Intelligence：企业文档解析性能提升 16%，成本降 6-8 倍
Databricks 发布 Document Intelligence，这是一个将原始企业文档转化为结构化数据的研究专用层，供 AI 代理推理使用。在公司内部基准测试中，相比其他方案实现最高端到端解析与提取质量，成本降低 6-8 倍，跨所有测试的代理框架平均性能提升 16%。同日还宣布 Claude Opus 4.7 在 Databricks 平台上线，在文档推理基准 OfficeQA Pro 上较 4.6 减少 21% 错误。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks<span class="source-chip__links"><a href="https://x.com/databricks/status/2044803477650411758" target="_blank" rel="noopener" aria-label="@databricks 原文 1">1</a><a href="https://x.com/databricks/status/2044838798534570216" target="_blank" rel="noopener" aria-label="@databricks 原文 2">2</a></span></span></div>

## 8/15 LlamaIndex：LiteParse 加入生态，Opus 4.7 ParseBench 图表解析大幅提升
两则 LlamaIndex 动态：其一，LiteParse 正式加入 LlamaIndex 生态（4.3K GitHub stars），号称 2 秒处理 500 页、支持 50+ 格式、零云依赖，已在 Claude Code、Cursor 等生产管道中使用。其二，LlamaIndex 对 Opus 4.7 进行 ParseBench 测试：图表解析从 13.5% 跃升至 55.8%（+42.3 百分点），格式解析略升，内容与表格无显著变化，布局解析略有退步（-2.5）。每页约 1.5¢ 的成本在企业规模尚待评估；LlamaParse Agentic 整体达 84.9%，约 1.2¢/页。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@llama_index<span class="source-chip__links"><a href="https://x.com/llama_index/status/2044772021591019571" target="_blank" rel="noopener" aria-label="@llama_index 原文 1">1</a><a href="https://x.com/llama_index/status/2044886527352647859" target="_blank" rel="noopener" aria-label="@llama_index 原文 2">2</a></span></span></div>

## 9/15 微软 AI 在 Nature Health 发表论文：1/7 健康咨询是为他人提问
微软 AI CEO Mustafa Suleyman 宣布，微软 AI 关于健康咨询使用模式的研究论文正式发表于 Nature Health。核心发现：约 1/7 的症状与病症咨询是为他人提问（子女、老年亲属或伴侣），而非本人。这对 AI 健康产品的个性化设计有重要启示——同一个关于"婴儿发烧"的问题与"自身发烧"所需信息存在根本差异。论文强调 AI 需适应用户作为家庭照护者角色的诉求。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/mustafasuleyman/status/2044817893460996487" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@mustafasuleyman</a></div>

## 10/15 fchollet：简单≠可扩展，深度学习复杂性恰恰是其规模化的来源
Google DeepMind 的 François Chollet 提出反直觉观点：在机器学习中，简单方法（SVM、kNN、随机森林）往往不具规模化能力，而高度复杂的方法（Transformer + 反向传播 + 梯度下降）才能大规模扩展。可扩展性通常属于高熵、复杂系统。该推文获 895 点赞、59K 浏览，提供了理解"规模定律"的一个反直觉视角。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/fchollet/status/2044695036470689971" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet</a></div>

## 11/15 Riley Goodside 离开 Google DeepMind，以健康和家庭为由
Riley Goodside（@goodside），知名 AI 研究员，在 4 月 16 日发推宣布已辞去 Google DeepMind 职位。原因为个人健康问题及陪伴女儿。他感谢 @OfficialLoganK 提供的机会，并向整个团队送上祝愿。Goodside 以对 LLM 能力的深度研究和 prompt 工程贡献闻名。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/goodside/status/2044937735547375900" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@goodside</a></div>

## 12/15 微软 Fairwater 数据中心在威斯康星州提前落成，号称"全球最强 AI 数据中心"
微软 CEO Satya Nadella 宣布，位于威斯康星州的 Fairwater 数据中心提前竣工并投入使用，被描述为"世界上最强大的 AI 数据中心"。Mustafa Suleyman 转推该消息。此前有报告指出，由于电力和监管问题，美国 50% 的数据中心建设正在被推迟或取消，仅 33% 在正常推进，Fairwater 提前完工颇具信号意义。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/mustafasuleyman/status/2044791447917097459" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@mustafasuleyman</a></div>

## 13/15 ASI-Evolve：上海研究团队打造"自动设计 AI 的 AI"，无需人工介入
上海研究团队开源 ASI-Evolve，一个完全自主的 AI 科学研究框架：读论文 → 生成假设 → 运行实验 → 将结果反馈回知识库，循环进化。在三大 AI 支柱的测试中：架构设计（发现 105 个超越最优人类设计的架构）、训练数据（知识基准 +18 分）、学习算法（竞赛数学 +12.5 分）。最优架构的提升幅度达人类最新改进的 3 倍。还成功迁移至药物靶标预测，对未见化合物提升近 7 分。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AlphaSignalAI/status/2044748000119922716" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI</a></div>

## 14/15 Allbirds 卖掉鞋业务，转型 AI 数据中心公司
知名环保运动鞋品牌 Allbirds 宣布出售其鞋类业务，转型为 AI 基础设施公司——计划购买 GPU 并租给找不到足够算力的开发者（Amazon、Microsoft 容量告急之际）。LinusEkenstam 就此提问：这是 AI 炒作顶点，还是公司关门前最后一搏？这一事件被视为 AI 基础设施热的民间信号指标。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/LinusEkenstam/status/2044773675715457155" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LinusEkenstam</a></div>

## 15/15 Sakana AI 上线免费公开 AI 聊天服务 Sakana Chat
日本 AI 研究公司 Sakana AI 发布 Sakana Chat，一款面向日本用户的免费 AI 对话工具，内置网络搜索能力和快速响应。可供日本境内任何人使用，无需付费。Sakana AI 此前以进化计算和神经网络架构搜索研究闻名。此次推出面向普通用户的消费级产品是其首次进入应用层。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/SakanaAILabs/status/2044936234808873204" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs</a></div>

---

## Deep Dive 附录

### Claude Opus 4.7 发布详情
Anthropic 发布 Claude Opus 4.7，在 93 项编码任务基准上较 4.6 提升 13%，视觉支持增强至约 3.75 兆像素。新增 `xhigh` 努力等级和任务预算（Task Budgets）公测，为长时任务提供更精细的资源控制。Claude Code 新增 `/ultrareview` 专用代码审查指令，并推出 Cyber Verification Program 支持合法安全研究。定价不变（$5/$25 per M token），可通过 API、Bedrock、Vertex AI、Microsoft Foundry 访问。值得注意的是，自适应思考机制引发社区争议——对非代码任务的"低努力"判定导致质量下滑，且缺乏 ChatGPT 式的手动覆盖。
[查看原文](https://www.anthropic.com/news/claude-opus-4-7)

### OpenAI Codex：面向几乎一切的代理升级
本次 Codex 更新是其从编程助手向全能计算机代理转型的关键节点。macOS 计算机使用能力允许 Codex 在后台用独立光标操作任意 App，不干扰用户前台工作。90+ 插件覆盖文档、项目管理、代码审查、部署等完整研发链路；内置 gpt-image-1.5 使前端设计迭代无需切换工具；持久化自动化线程确保上下文在任务间延续；定时任务能力支持跨天的长期工作追踪。OpenAI CEO Greg Brockman 描述其为"找到散落在 Slack、Google Docs、Notion 和各内部工具中信息后自动完成任务的魔法"。
[查看原文](https://openai.com/index/codex-for-almost-everything/)

### GPT-Rosalind：OpenAI 生命科学前沿模型
OpenAI 推出专为生物医药研究设计的 GPT-Rosalind，强化了蛋白质/化学推理、基因组分析、生物化学知识及科学工具调用四大维度。该模型定位于压缩新药从靶点发现到监管批准所需的 10-15 年时间周期，通过帮助科学家更快探索假设空间实现提速。即日起向 Amgen、Moderna、Allen Institute for Brain Science、Thermo Fisher Scientific 开放研究预览。可通过 ChatGPT、Codex 和 API 访问。
[查看原文](https://x.com/OpenAI/status/2044861690911850863)
