---
layout: daily
title: "AI Frontier Daily | 2026.04.24"
headline: "OpenAI 正式发布 GPT-5.5"
date: 2026-04-24 09:07:00 +0800
permalink: /ai-daily/2026/04/24/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "OpenAI 上线 GPT-5.5 与 GPT-5.5 Pro，今日向 ChatGPT 与 Codex 的 Plus/Pro/Business/Enterprise 用户全量铺开。官方定位为\"a new class of intelligence for real work and powering agents\"，主打 agentic coding、计算机操作、长链条任务自检与完成。每 token 延迟与 5.4 持平，但完成同样 Codex 任务所需 token 显著减少；首款与 NVIDIA GB200/GB300 NVL72 共同设计的模型。sama 称 OpenAI\"现在某种程度上必须成为一家 AI inference company\"。"
summary: "OpenAI 上线 GPT-5.5 与 GPT-5.5 Pro，今日向 ChatGPT 与 Codex 的 Plus/Pro/Business/Enterprise 用户全量铺开。官方定位为\"a new class of intelligence for real work and powering agents\"，主打 agentic coding、计算机操作、长链条任务自检与完成。每 token 延迟与 5.4 持平，但完成同样 Codex 任务所需 token 显著减少；首款与 NVIDIA GB200/GB300 NVL72 共同设计的模型。sama 称 OpenAI\"现在某种程度上必须成为一家 AI inference company\"。"
issue_count: 17
deep_dive_count: 5
reading_time: 18
cover: "https://lh3.googleusercontent.com/1-K_kcmoX-fIzTJ13T0-uF4gylS2tK00ZVvx87B2WSayzUS2fxDoDDXFq5hOhxptrBeG8AbjG_URN5OOTpGMqad9zILjMsTdAHWroiDKpziBQjzErw=w1200-h630-n-nu-rw"
signals: "OpenAI · sama · gdb · swyx · bindureddy · fchollet · aidan_mclau · emollick"
header-img: img/dark_yellow_400.png
---


## 1/17 OpenAI 正式发布 GPT-5.5
OpenAI 上线 GPT-5.5 与 GPT-5.5 Pro，今日向 ChatGPT 与 Codex 的 Plus/Pro/Business/Enterprise 用户全量铺开。官方定位为"a new class of intelligence for real work and powering agents"，主打 agentic coding、计算机操作、长链条任务自检与完成。每 token 延迟与 5.4 持平，但完成同样 Codex 任务所需 token 显著减少；首款与 NVIDIA GB200/GB300 NVL72 共同设计的模型。sama 称 OpenAI"现在某种程度上必须成为一家 AI inference company"。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/OpenAI/status/2047376561205325845" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a><a class="source-chip" href="https://x.com/sama/status/2047378253313106112" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sama</a><a class="source-chip" href="https://x.com/gdb/status/2047381612372115812" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a></div>

## 2/17 GPT-5.5 基准与定价
swyx 汇总 benchmark：Terminal-Bench 2.0 82.7%、Expert-SWE 73.1%、SWE-Bench Pro 58.6%、GDPval 84.9%、Tau2-bench Telecom 98.0%、BixBench 80.5%；arcprize 复测 ARC-AGI-2：Max 档 85.0%/题成本 $1.87，Low 档 33.0%/$0.35。API 定价 $5/M 输入、$30/M 输出，1M 上下文——比 5.4 贵一倍、也高于 Opus 4.7，但 sama 强调总 token 消耗会下降。bindureddy 运行 LiveBench 后判断 5.5 已超越 Opus 4.7，指令跟随"INSANELY GOOD"。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/swyx/status/2047378670986342685" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@swyx</a><a class="source-chip" href="https://x.com/sama/status/2047379036419014928" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sama</a><a class="source-chip" href="https://x.com/bindureddy/status/2047396413181685853" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a><a class="source-chip" href="https://x.com/fchollet/status/2047392657778094126" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet</a></div>

## 3/17 Codex 同步大更新
Codex 随 GPT-5.5 获得一轮重要升级：浏览器控制、Sheets/Slides/Docs/PDF 原生操作、OS-wide 听写，以及 gdb 重点推出的 auto-review——用 guardian agent 对即将执行的动作做安全评估，把人类审批点压缩到必要最小。aidan_mclau 分享自己口述一个 RL run 后离开几天，回来发现 5.5 已在 Codex 里连续工作 31 小时并交付成果。Emollick、Bubeck、mattshumer_ 等早期测试者一致认为硬任务上是断层升级。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb<span class="source-chip__links"><a href="https://x.com/gdb/status/2047489218998628780" target="_blank" rel="noopener" aria-label="@gdb 原文 1">1</a><a href="https://x.com/gdb/status/2047387783111868707" target="_blank" rel="noopener" aria-label="@gdb 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/aidan_mclau/status/2047388367705575701" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@aidan_mclau</a><a class="source-chip" href="https://x.com/emollick/status/2047407732886532595" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a><a class="source-chip" href="https://x.com/mattshumer_/status/2047376245369851908" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@mattshumer_</a></div>

## 4/17 NVIDIA 与 Databricks 官宣协同
OpenAI 与 NVIDIA 合作在全公司范围部署 Codex + GPT-5.5，并开放给其他企业复制。NVIDIA 内部已搭建 Codex Lab。Databricks 在 GPT-5.5 首发即集成进 Unity AI Gateway，官方称其在 OfficeQA Pro 企业任务基准上达到 SOTA。这标志 GPT-5.5 与 Codex 正在以"企业级通用 AI 工作者"的产品形态向渠道市场渗透。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/sama/status/2047395562501411058" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sama</a><a class="source-chip" href="https://x.com/NVIDIAAI/status/2047395826226671950" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI</a><a class="source-chip" href="https://x.com/databricks/status/2047466454069465329" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a></div>

## 5/17 DeepSeek-V4 Preview 官宣开源
DeepSeek 在 HuggingFace 发布 V4 Preview 并开权重，全系列默认 1M 上下文。V4-Pro 采用 1.6T 总参/49B 激活，Agentic Coding 开源 SOTA，世界知识仅次于 Gemini 3.1 Pro；V4-Flash 284B/13B active 接近 Pro 水准，主打低成本高速。架构端引入 token-wise 压缩与 DSA (DeepSeek Sparse Attention) 组合，长上下文算力与显存开销大幅下降。API 兼容 OpenAI ChatCompletions 与 Anthropic 双协议，旧模型 `deepseek-chat` 与 `deepseek-reasoner` 将于 2026-07-24 UTC 下线。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@deepseek_ai<span class="source-chip__links"><a href="https://x.com/deepseek_ai/status/2047516922263285776" target="_blank" rel="noopener" aria-label="@deepseek_ai 原文 1">1</a><a href="https://x.com/deepseek_ai/status/2047516926432399791" target="_blank" rel="noopener" aria-label="@deepseek_ai 原文 2">2</a><a href="https://x.com/deepseek_ai/status/2047516936289017964" target="_blank" rel="noopener" aria-label="@deepseek_ai 原文 3">3</a><a href="https://x.com/deepseek_ai/status/2047516945466188072" target="_blank" rel="noopener" aria-label="@deepseek_ai 原文 4">4</a></span></span></div>

## 6/17 DeepSeek-V4 引爆开源社区
HuggingFace 上 43 分钟冲到 trending #1，ClementDelangue 称为"史上最快登顶的模型"。bindureddy 首跑基准后评价"Opus 4.7 Max 和 GPT-5.5 级别"。emollick 用 TiKZ 独角兽画图测试把 V4-Pro 加入 playable gallery。DeepSeek 内部 agentic coding 已全线切换 V4，并已与 Claude Code、OpenClaw、OpenCode 对接。同日腾讯混元也开源 Hy3 Preview (295B A21B) 推理与 agentic 取向模型——开源阵营在 GPT-5.5 发布当天给出密集回应。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/ClementDelangue/status/2047535160187330573" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue</a><a class="source-chip" href="https://x.com/bindureddy/status/2047515312434934166" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a><a class="source-chip" href="https://x.com/emollick/status/2047527060713664754" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a><a class="source-chip" href="https://x.com/huggingface/status/2047589154561659384" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface</a></div>

## 7/17 Google DeepMind：Decoupled DiLoCo 跨区训练
DeepMind 发表 Decoupled DiLoCo 研究，把 Pathways（异步数据流）与 DiLoCo（低带宽分布式训练）组合，使训练岛屿化、失败可隔离、恢复自动回归。实验在美国 4 个 region 间用 2–5 Gbps 带宽跨区训练 12B Gemma 4 模型，比传统同步方式快 20 倍以上；高故障率下"goodput"达 88%（对照仅 27%）；支持同次训练混用 TPU v6e 与 v5p 不损性能。这为"地理无关、芯片代际无关"的前沿训练奠定工程底座。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GoogleDeepMind<span class="source-chip__links"><a href="https://x.com/GoogleDeepMind/status/2047330981145669790" target="_blank" rel="noopener" aria-label="@GoogleDeepMind 原文 1">1</a><a href="https://x.com/GoogleDeepMind/status/2047330984983400793" target="_blank" rel="noopener" aria-label="@GoogleDeepMind 原文 2">2</a><a href="https://x.com/GoogleDeepMind/status/2047330992713589009" target="_blank" rel="noopener" aria-label="@GoogleDeepMind 原文 3">3</a></span></span></div>

## 8/17 xAI 发布 Grok Voice Think Fast 1.0
xAI 推出语音模型 Grok Voice Think Fast 1.0，专为复杂多步工作流设计，号称在 Tau Voice Bench 登顶，能应对真实世界的噪音、口音和打断。Elon 宣布该模型已被 Starlink 客服采用。推文收获 1600 万+ 浏览。配合 FSD v14.3.2 将 Actually Smart Summon、FSD、Robotaxi 模型统一，xAI 的语音模型也开始深度嵌入特斯拉生态。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/xai/status/2047441173569216721" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@xai</a><a class="source-chip" href="https://x.com/elonmusk/status/2047502409728217418" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@elonmusk</a></div>

## 9/17 Sakana AI 发布 Fugu 多智能体编排系统
Sakana 首个商用 AI 产品 Fugu Beta 上线——不是新大模型，而是跨厂商前沿模型的编排系统，按任务动态组合开源/闭源模型与角色分工。基准显示 Fugu Ultra 在 GPQA-D (95.1)、ALE-Bench v6 (93.2)、SWE-Pro (54.2) 超过 Gemini 3.1、GPT-5.4、Opus 4.6 等单模型。支持 OpenAI 兼容端点，亮点在"recursive test-time scaling"——可递归调用自身、读取上轮输出、动态纠偏。Mini 主打低延迟，Ultra 全模型池。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/SakanaAILabs/status/2047479445209145785" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs</a><a class="source-chip" href="https://x.com/hardmaru/status/2047483027719348520" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a></div>

## 10/17 Meta × AWS 千万级 Graviton 合作
Meta 宣布与 AWS 达成协议，将部署千万级 Graviton5 CPU 核心，成为全球最大 Graviton 客户之一。该批算力定向服务于 Meta AI 与 agentic workflow——推理控制流、工具调用、长链条规划等 CPU 密集型任务。与 Meta 既有 AMD、ARM、自研芯片部署互补，标志超大规模 AI 公司在 GPU 之外对 CPU 基础设施的再加码。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AIatMeta/status/2047647617681957207" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AIatMeta</a></div>

## 11/17 Cohere × Aleph Alpha 跨大西洋主权 AI 联盟
Cohere（加拿大）与 Aleph Alpha（德国）联合成立跨大西洋 AI 集团，定位"sovereign AI for the world"。Cohere 创始人 Aidan Gomez、Aleph Alpha Samuel Weinbach、Schwarz Digits Rolf Schumann，以及加拿大部长 Solomon、德国部长 Wildberger 同台出席。主打为企业与政府提供在欧盟/加拿大合规框架下的安全、隐私、可信 AI——是欧洲/西方阵营对"主权 AI"议题的实质性整合举动。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cohere/status/2047631725426000268" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cohere</a></div>

## 12/17 Tesla Cybercab 开始量产
Elon Musk 宣布 Cybercab 已开始生产，两条推文合计吸引逾 3000 万浏览。Tesla AI 团队同步推出 FSD v14.3.2，将 Actually Smart Summon、FSD 与 Robotaxi 的底层模型统一，以提升行为一致性与可靠性。Elon 附言："Tesla AI is where the rubber hits the road"，强调自动驾驶已日常救人性命，其他 AI 团队"尚无此声明资格"。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@elonmusk<span class="source-chip__links"><a href="https://x.com/elonmusk/status/2047574971774611553" target="_blank" rel="noopener" aria-label="@elonmusk 原文 1">1</a><a href="https://x.com/elonmusk/status/2047570667030323375" target="_blank" rel="noopener" aria-label="@elonmusk 原文 2">2</a><a href="https://x.com/elonmusk/status/2047574377928307166" target="_blank" rel="noopener" aria-label="@elonmusk 原文 3">3</a></span></span></div>

## 13/17 Kimi K2.6 双榜夺冠
Moonshot 的 Kimi K2.6 成为 Vision & Document Arena 开源模型 #1，同时拿下 MathArena #1。第三方 benchmarker bindureddy 宣布将部分生产负载迁移至 Kimi 2.6——Abacus 团队"首次在实盘用开源模型"。emollick 对比显示 DeepSeek V4 Pro 与 Kimi K2.6 在 TiKZ 独角兽任务上仍有不小差距，但开源阵营整体性价比已形成明显拉力。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/Kimi_Moonshot/status/2047543386153140231" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Kimi_Moonshot</a><a class="source-chip" href="https://x.com/bindureddy/status/2047320286396391710" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a><a class="source-chip" href="https://x.com/emollick/status/2047530914591158719" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a></div>

## 14/17 Replit 推出 Startup 计划
Replit 为初创团队推出 Startup 计划，最高提供 $25K 信用额度，覆盖从产品搭建到扩张的工作流。同日 Replit 还推出"直接从浏览器完成真实 iOS/Android 设备测试"的功能。策略方向很明确：把 Replit 做成从 vibe coding 到真机验证的一站式创业开发闭环。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/Replit/status/2047392071745487095" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Replit</a></div>

## 15/17 LangChain Fleet + Deep Agents 全面升级
LangChain 把 Fleet 打造成 agent 工作桌面：新增文件浏览器（可直接创建/编辑文档）、演示渲染器（agent 生成完整 PPT）。Harrison Chase 同时主推 "Deep Agents" 中间件，给 agent 提供强默认 harness 与可定制钩子——业界反馈"这些看似微小的 harness 设置对性能影响巨大"。方向是把 LangChain 从 SDK 进一步拉升为 agent 运行时平台。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hwchase17/status/2047518568871539165" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17</a></div>

## 16/17 新基准与新工具批量上线
LlamaIndex 发布 ParseBench 上 Kaggle：首个为 AI agents 量身打造的文档 OCR 基准，2000 企业页、167K+ 测试规则、5 维度评估，覆盖 GPT-5 Mini、Gemini 3、Textract、LlamaParse 等 14 种方法。Google Gemini Embedding 2 在 Gemini API 与 Vertex AI 正式 GA，首款原生多模态嵌入。Luma Agents 新增"单照片跨年龄演进"与"按受众自动构建路演幻灯片"能力。Cappy 以短信自然语言做视频编辑，正 FREE 试用。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/llama_index/status/2047345014225952848" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@llama_index</a><a class="source-chip" href="https://x.com/GoogleDeepMind/status/2047381761861058666" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GoogleDeepMind</a><a class="source-chip" href="https://x.com/LumaLabsAI/status/2047471165942518160" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LumaLabsAI</a><a class="source-chip" href="https://x.com/LinusEkenstam/status/2047367027564884413" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LinusEkenstam</a></div>

## 17/17 争议与反思：LLM vs 世界模型 / 法律 AI 幻觉真相
Yann LeCun 再度开火：强调"机器人遍地的未来靠 LLM 不行"，需要世界模型与零样本规划；认同 LLM 有用但"硅谷过于 LLM-pilled"。另一端，Stanford 研究用 202 个法律查询测试 LexisNexis 与 Thomson Reuters 的法律 AI："hallucination-free"只是营销——Lexis+ 幻觉率 17%、Thomson 19%、原生 GPT-4 43%；Thomson 还拒答 62% 问题。RAG 有用但"消灭"是夸张。GPT-5.5 发布当天的这两条注脚提醒：能力跃升与可靠性承诺之间的差距仍是真实的。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/ylecun/status/2047636569767419951" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ylecun</a><a class="source-chip" href="https://x.com/AlphaSignalAI/status/2047330302696055204" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI</a></div>

---

## Deep Dive 附录

### GPT-5.5 详细解读
OpenAI 发布 GPT-5.5 与 Pro 版，主打"可以托付整条工作流的通用计算工作者"。Codex 同步深度升级：浏览器控制、Sheets/Slides/Docs/PDF 原生操作、OS-wide 听写、auto-review 守护 agent。Benchmarks 覆盖 Terminal-Bench 2.0 (82.7%)、Expert-SWE (73.1%)、SWE-Bench Pro (58.6%)、GDPval (84.9%)、Tau2-bench Telecom (98.0%)、BixBench (80.5%)；ARC-AGI-2 Max 档 85.0%/$1.87。API $5/$30，1M 上下文。sama 给出的战略框架："iterative deployment + democratization"，并明言"我们现在必须成为 AI inference 公司"。早期测试者一致认为硬任务上断层升级，aidan_mclau 汇报 5.5 在 Codex 里连续自主工作 31 小时并交付成果。
[查看原文](https://x.com/OpenAI/status/2047376561205325845)

### DeepSeek-V4 技术亮点
V4-Pro 1.6T/49B active；V4-Flash 284B/13B active。双模型均支持 1M 上下文、Thinking/Non-Thinking 双模式，API 兼容 OpenAI + Anthropic 协议。架构核心：token-wise 压缩 + DSA (DeepSeek Sparse Attention)，长上下文算力与显存开销大幅下降，1M 成为默认 tier。Agentic Coding 开源 SOTA；世界知识开源第一、仅次于 Gemini 3.1 Pro；Math/STEM 超过所有开源、接近顶级闭源。旧模型 7/24 UTC 下线。HuggingFace 43 分钟冲到 #1 trending，发布当天成为开源阵营对 GPT-5.5 的最硬正面回应。
[查看原文](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/blob/main/DeepSeek_V4.pdf)

### Decoupled DiLoCo：跨区跨代训练
DeepMind 把 Pathways 与 DiLoCo 组合为新的分布式训练架构：训练被切成解耦的计算岛屿，故障岛被隔离、恢复后自动回归，系统自愈。关键实验：4 个美国 region、2–5 Gbps 带宽跨区训练 12B Gemma 4，比传统同步快 20 倍以上；高故障场景 goodput 88%（对照 27%）；同次训练可混用 TPU v6e 与 v5p 无性能损失。意义：把前沿训练从"单一巨型数据中心"解放出来，既是工程突破，也为未来跨国/跨洲算力布局提供可行路径。
[查看原文](https://deepmind.google/blog/decoupled-diloco/)

### Sakana Fugu：多智能体编排商业化
Sakana AI 首个商用产品，按任务动态组合开源/闭源前沿模型。Fugu Ultra 在 GPQA-D (95.1)、ALE-Bench v6 (93.2)、SWE-Pro (54.2) 均超过各项目的最强单模型（Gemini 3.1 Pro、Opus 4.6 等）。OpenAI 兼容 API 部署、Mini/Ultra 双档，亮点在 recursive test-time scaling——可递归调用自身读取上轮输出动态纠偏。方向是把"模型路由"升级为"多 agent 协同推理"，挑战 OpenRouter、Martian 等现有编排层。
[查看原文](https://sakana.ai/fugu-beta)

### Meta × AWS Graviton：agentic AI 的 CPU 再下注
Meta 将部署千万级 AWS Graviton5 CPU 核心，成为全球最大 Graviton 客户之一。该批算力定向 agentic workflow——推理控制流、工具调用、长链条规划等 CPU 密集型任务。Meta 基础设施负责人强调"多元化算力来源是战略刚需"，Graviton 与自研 MTIA、AMD、NVIDIA 互补。信号：超大规模 AI 厂商已意识到 agentic 推理的成本结构与 pretraining 显著不同，CPU/专用加速器组合需要被重新权衡。
[查看原文](https://about.fb.com/news/2026/04/meta-partners-with-aws-on-graviton-chips-to-power-agentic-ai/)
