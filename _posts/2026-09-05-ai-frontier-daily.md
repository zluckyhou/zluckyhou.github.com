---
layout: daily
title: "AI Frontier Daily | 2026.09.05"
headline: "Claude 用 11 天完成费马大定理首个端到端机器核验形式化证明"
date: 2026-09-05 09:07:00 +0800
permalink: /ai-daily/2026/09/05/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Anthropic 称 Claude 在 Prove2Me 协作平台与多 Agent harness 支持下，主要自主工作 11 天，写出约 1,300 万行 Lean，并在最终证明中使用 29,500 个中间定理；Lean 已从标准公理出发核验整条证明链。成果形式化的是 Wiles 路线的简化版本，不是发现新的费马大定理证明；它展示的是把人类数学转成可机检代码的规模跃升。项目消耗约 60 亿输出 token，人工仍提供少量高层优先级指引。"
summary: "Anthropic 称 Claude 在 Prove2Me 协作平台与多 Agent harness 支持下，主要自主工作 11 天，写出约 1,300 万行 Lean，并在最终证明中使用 29,500 个中间定理；Lean 已从标准公理出发核验整条证明链。成果形式化的是 Wiles 路线的简化版本，不是发现新的费马大定理证明；它展示的是把人类数学转成可机检代码的规模跃升。项目消耗约 60 亿输出 token，人工仍提供少量高层优先级指引。"
issue_count: 15
deep_dive_count: 8
reading_time: 19
cover: "https://cdn.sanity.io/images/4zrzovbb/website/578f91575c42231f0994e341014614255149af80-1200x630.jpg"
signals: "AnthropicAI · NVIDIAAI · mustafasuleyman · satyanadella · GoogleDeepMind · perplexity_ai · cohere · OpenAI"
header-img: img/dark_yellow_400.png
---


## 1/15 Claude 用 11 天完成费马大定理首个端到端机器核验形式化证明
Anthropic 称 Claude 在 Prove2Me 协作平台与多 Agent harness 支持下，主要自主工作 11 天，写出约 1,300 万行 Lean，并在最终证明中使用 29,500 个中间定理；Lean 已从标准公理出发核验整条证明链。成果形式化的是 Wiles 路线的简化版本，不是发现新的费马大定理证明；它展示的是把人类数学转成可机检代码的规模跃升。项目消耗约 60 亿输出 token，人工仍提供少量高层优先级指引。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AnthropicAI/status/2095947707605266436" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI</a></div>

## 2/15 NVIDIA 专项 Nemotron 在 IOI 2026 非正式赛测中超过最高人类得分
NVIDIA 团队以 2.2 万道精选题训练 Nemotron-3-Nano-CC 与 Ultra-CC，并用 GenCorrect 在测试时生成、评估和修正多组方案。论文报告 Ultra-CC 在 IOI 2026 赛场旁路评测中得 535.4/600，高于金牌线 361.12 与最高人类选手 498.27；系统无互联网、采用同样时限和提交约束，但属于非正式参赛且使用竞赛专项后训练与系统编排，不能直接外推为通用软件工程能力。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/NVIDIAAI/status/2096032566310789528" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI</a></div>

## 3/15 Microsoft 把 MAI-Image-2.6 与低延迟 Flash 版带入 Foundry 公测
MAI-Image-2.6 系列现已进入 Microsoft Foundry Public Preview，支持最多五张参考图、多图编辑、Web grounding、动态宽高比和最高约 1.5K 输出。Microsoft 称 Flash 相比 GPT-Image-2-Medium 生成速度快 2.8 倍、资源效率高 72%，适合高吞吐生产；旗舰版偏重最终质量。排行榜、速度与效率数字来自厂商及上线时点的第三方榜单，实际价格、文字渲染和一致性仍需按工作负载复验。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@mustafasuleyman<span class="source-chip__links"><a href="https://x.com/mustafasuleyman/status/2095907880209641517" target="_blank" rel="noopener" aria-label="@mustafasuleyman 原文 1">1</a><a href="https://x.com/mustafasuleyman/status/2095909700088779005" target="_blank" rel="noopener" aria-label="@mustafasuleyman 原文 2">2</a></span></span></div>

## 4/15 GitHub Copilot 预览 HydraFusion，让多模型按任务选择单跑、级联或交叉批评
HydraFusion 把一次编码请求建模为运行时编排：简单任务交给单模型，复杂任务先由低成本模型起草并经质量门升级，或让不同模型家族分别起草、只读批评再修订。GitHub 内部离线评测称其在 TerminalBench 2.1 相对 Claude Opus 5 提高 4.9 个百分点，同时估算成本低 67%。它已通过 Copilot CLI 的 `/experimental` 向全部套餐开放，但仍是首轮、单提示任务优先的研究预览，结果与行为可能变化。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@satyanadella<span class="source-chip__links"><a href="https://x.com/satyanadella/status/2095912050535059918" target="_blank" rel="noopener" aria-label="@satyanadella 原文 1">1</a><a href="https://x.com/satyanadella/status/2095912052472861085" target="_blank" rel="noopener" aria-label="@satyanadella 原文 2">2</a></span></span></div>

## 5/15 Google 将 Lyria 3.5 扩至 Gemini App 与 API，最长可生成三分钟音乐
Google 把 7 月先在 Flow Music 上线的 Lyria 3.5 扩展到 Gemini App、Gemini API、AI Studio 与 Google Vids。新入口支持选择或描述曲风、有人声或纯音乐、短曲或长曲，也可由图片生成配乐；Google 称新版提升编曲、歌词遵循、声音表现和音频保真度。所有生成音轨嵌入 SynthID 水印；官方模型卡同时承认质量与创意控制仍需用户检查。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/GoogleDeepMind/status/2095908028599968076" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GoogleDeepMind</a></div>

## 6/15 Perplexity 公开 Ivy、Tulip、ROSE 三层 GPU 检索推理栈
Perplexity 披露搜索答案生成前的 embedding 与 ranking 服务：Ivy 以 Rust HTTP 处理解析、分词和大批次拆分；Tulip 以 Rust gRPC 聚合请求，用 CUDA Graph 与异步 LazyTensor 降低 CPU/GPU 空转；ROSE 负责模型前向与内核选择，embedding 路径跳过 KV cache 并使用 ragged attention。该架构同时服务吞吐优先的离线索引与延迟优先的在线查询；“SoTA、降本提速”目前是公司自测结论，未给出统一外部复现实验。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@perplexity_ai<span class="source-chip__links"><a href="https://x.com/perplexity_ai/status/2095984677463191607" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 1">1</a><a href="https://x.com/perplexity_ai/status/2095984795629265124" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 2">2</a></span></span></div>

## 7/15 Cohere 汇总 69.6 万个 Agent 工具，只有 2.6% 可独立完成职业任务
Cohere Labs 从七个公共目录收集 123,069 个 MCP server、696,291 个工具，再将工具描述映射到 O*NET 职业任务。严格要求工具必须端到端执行任务、而非只提供信息或完成一个环节时，约 2.6% 通过；可识别部分主要集中在软件与 IT、Agent 基础设施及管理 Agent 的新工作。样本不含大量企业私有 MCP，因此 2.6% 更适合作为公共生态下限，而不是全社会自动化比例。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cohere<span class="source-chip__links"><a href="https://x.com/cohere/status/2095904551471554624" target="_blank" rel="noopener" aria-label="@cohere 原文 1">1</a><a href="https://x.com/cohere/status/2095904552830578695" target="_blank" rel="noopener" aria-label="@cohere 原文 2">2</a></span></span></div>

## 8/15 GPT-6 Astra 从限量发布转入广泛可用，并迅速进入多家平台
OpenAI 宣布 Astra 已向 ChatGPT Work、Codex 的 Pro、Enterprise、Business Premium 用户和 API 开放，随后又称 Plus 与 Business rollout 已完成；GPT-6 Pro 也覆盖 Pro、Business、Enterprise。Perplexity Computer 面向 Pro/Max 接入，Databricks Unity Gateway 提供 day-zero 托管并沿用治理、审计和成本控制。相比昨日的发布信息，今天新增的是可用范围落地；伙伴方 OfficeQA 等质量结论仍属内部评测。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/OpenAI/status/2095968413646737608" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a><a class="source-chip" href="https://x.com/sama/status/2096008528834244741" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sama</a><a class="source-chip" href="https://x.com/perplexity_ai/status/2096006336786133366" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@perplexity_ai</a><a class="source-chip" href="https://x.com/databricks/status/2095991985219764494" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a></div>

## 9/15 Astra 早期实测同时显示长链执行力与研究品味缺口
Ethan Mollick 让 Astra 把 1977 年文字冒险 Zork 改成可玩的 Three.js 3D 游戏，称模型保留原剧情与谜题并自行制作角色和环境；另一项预注册创业研究实验则得到技术正确、非 p-hacking、但选题乏味的论文。Matt Shumer 的“模拟中的模拟”展示 Agent 在给定计算机环境中继续写出子模拟，他也承认设定具有引导性。案例说明长链构建能力提升，但输出仍高度依赖 harness、权限、提示与人类对目标价值的判断。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2096047660662722620" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2095717185200988439" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/mattshumer_/status/2096034353344139519" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@mattshumer_</a></div>

## 10/15 Databricks 用模型与 harness 动态路由控制编码 Agent 成本
Databricks 表示，团队不应只固定选择一次便宜模型，而应持续评测质量与价格、保留多模型和多 harness 可替换性，并减少系统提示、工具输出等 token 开销。其 Smart Routing 会按任务选择最低成本的合格模型，Omnigent 还可跨 Claude Code、Codex 等 harness 路由；公司内部测试称平均任务成本降低逾 30%，质量大致匹配候选集最贵模型。功能仍为 Beta，且需对全部候选模型有执行权限。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/databricks/status/2095874637695422607" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a></div>

## 11/15 NVIDIA 给出推测解码五条硬件协同准则，强调接受长度不等于真实加速
NVIDIA 将推测解码拆为 draft length、接受长度、验证开销与 draft 成本的联合优化：提高 draft 长度可让 GEMM 更接近计算饱和，但 attention 主导时建议从 D=128/G−1 起步，并对齐 128 的 kernel tile；低延迟场景只在接受收益覆盖额外 draft 开销时继续加长。文章比较外部小模型、MTP、EAGLE-3、DFlash、DSpark 与 n-gram，要求在真实 workload 上同时测接受率和端到端吞吐。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI<span class="source-chip__links"><a href="https://x.com/NVIDIAAI/status/2095916654081487339" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 1">1</a><a href="https://x.com/NVIDIAAI/status/2095927174025118129" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 2">2</a></span></span></div>

## 12/15 LlamaIndex 称文档抽取价格与准确率没有单调关系
LlamaIndex 在 370 份企业文档上比较 14 个系统，再将准确率与每页成本放在同一图中。其内部结果称 Agentic Plus 准确率最高，成本不到第二名三分之一，Cost Effective 等低价档也经常超过更昂贵方案。该结论延续 ExtractBench 对字段级抽取的评估，但测试集、计费折算和产品 tier 都由供应商维护；选型时仍应使用自有合同、票据和长文档重跑，并分别观察字段 F1、延迟与失败恢复。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/llama_index/status/2095915704696340747" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@llama_index</a></div>

## 13/15 Replit MCP 把外部 Agent 接入应用创建、更新与状态查询
Replit 介绍通过 MCP 从外部客户端远程驱动 Replit Agent。官方 beta server 使用 Streamable HTTP 与 OAuth 2.1/PKCE，公开 `create_app_from_prompt`、`update_app_using_prompt` 和 `ask_question` 三类工具；创建与更新为异步流程，调用方需保存 replId 和 replUrl 继续追踪。它把“从任何 Agent 操作 Replit”变成标准协议入口，但超时不等于任务失败，客户端必须避免盲目重试造成重复构建。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/Replit/status/2095905074556072159" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Replit</a></div>

## 14/15 Runway 推出 2–9 席位 Team Plan，以共享额度组织生成与 Agent 工作
Runway 的新自助 Team Plan 面向 2–9 人小团队，把席位纳入统一的 pooled credit balance，并提供 shared projects、评论、Agent skills 与 Agent Connectors。产品把个人创作工具向小团队协作与统一计费推进，减少逐席位额度碎片；公告未披露不同生成模型的实际消耗、权限粒度或 connector 数据边界，采购前仍需根据视频、世界模型和 Agent 工作量核算额度与访问控制。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/runwayml/status/2095918249674215599" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml</a></div>

## 15/15 Andrew Ng 发布 AI Engineering Skills Map，强调编码 Agent 时代的系统能力
Andrew Ng 公布面向编码 Agent 的 AI Engineering Skills Map，将有效使用 Agent 所需能力从“会提示”扩展到任务拆解、上下文与规范管理、工具连接、验证、调试、评测和安全边界。该内容主要是教学框架而非模型 benchmark，但高互动反映行业关注点正从单次代码补全转向可重复的工程流程：Agent 能写多少代码之外，团队如何定义验收、保存决策并审查外部动作，正在成为交付质量的主要变量。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AndrewYNg/status/2095890279865721217" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AndrewYNg</a></div>

---

## Deep Dive 附录

### Claude 形式化费马大定理：验证规模突破依赖可分解、可复用的 Agent 协作图
Claude 最初的尝试因 Agent 逐渐丢失项目状态和协作失效而失败，成功版本改用 Prove2Me：把待证定理维护为有向无环图，将 statement 与 proof 分文件编译，并为每条定理保留自然语言描述以支持搜索复用。几十个 Agent 在 Claude Code harness 中并行填充证明节点，11 天生成约 1,300 万行 Lean、30,300 个已证定理，其中 29,500 个进入最终证明；失败尝试仍贡献约 7% 的非模板代码。Lean 最终核验根节点只依赖三条标准公理，比较器确认命题与 Mathlib 的 FLT 陈述一致。项目使用约 60 亿输出 token、内部研究模型能力约等于 Claude Fable 5.1，并接受 Tianyi Peng 少量高层调度。它把“证明发现”和“证明形式化”区分开：价值在于大规模机器核验与未来审稿负担，而非取代可读的人类数学解释。
[查看原文](https://www.anthropic.com/research/formalizing-fermats-last-theorem)

### Nemotron IOI 系统：专项后训练、反馈修正与竞赛约束共同塑造 535.4 分
论文以 2.2 万道精选竞赛题构建专项数据，训练 30B-A3B 的 Nemotron-3-Nano-CC 与 550B-A55B 的 Ultra-CC；Nano 同时使用 SFT 与 RL，Ultra 主要使用 SFT。GenCorrect 在测试时生成多样解、运行评估并迭代修正，把 Nano 在 IOI 2025 的 130 分提升到 468，Ultra 达 502。针对 IOI 2026 的 Ultra-CC 系统在乌兹别克斯坦与正式比赛并行、受国际技术委员会监督，使用同样时间、无互联网与提交限制，得 535.4/600，高于最高人类 498.27。结果证明专项系统已能在顶级竞赛条件下达到极高水平，但模型规模、题目策划、测试时计算和竞赛 harness 都是成绩组成部分；“超过最高选手”不等于对真实代码库、协作开发或需求理解的普遍胜出。
[查看原文](https://arxiv.org/abs/2609.02849)

### MAI-Image-2.6：旗舰质量与 Flash 吞吐被拆成同一家族的两档服务
MAI-Image-2.6 面向最终商业素材和高精度编辑，Flash 面向交互、批量变体与自动化流水线；两者都支持多参考图、Web grounding、动态宽高比与最高约 1.5K 输出。Microsoft AI 页面称旗舰版上线时在 Arena 的文生图和编辑均列第二，在 Artificial Analysis 文生图第二、编辑第一；Flash 相对 GPT-Image-2-Medium 快 2.8 倍，资源效率高 72%。Foundry 文章给出的起步价为旗舰每百万文本输入、图片输入、图片输出 token 5/8/38 美元，Flash 为 1.75/2.5/19 美元。榜单名次、比较基线与效率来自发布时快照，模型公测后更重要的是在品牌一致性、多人多物体编辑、文字准确率与真实并发下复验。
[查看原文](https://microsoft.ai/news/pushing-the-quality-cost-frontier-with-mai-image-2-6/)

### HydraFusion：从“选哪个模型”转为“为任务动态组装哪条推理工作流”
HydraFusion 先估计请求在推理、代码生成、调试和工具使用上的需求，再在 Single、Cascade、Critique 三条路径间选择。Cascade 让低成本模型先答，质量门不通过才升级；Critique 让不同模型家族的只读 reviewer 检查草稿，再由原模型修订一次。GitHub 以真实 Copilot 轨迹构造 CheckpointBench，并结合 DeepSWE 与 TerminalBench 2.1 迭代策略；其内部离线结果称 TerminalBench 2.1 的 verified quality 比 Claude Opus 5 高 4.9 个百分点，估算成本低 67%。预览在 Copilot CLI 全套餐的 `/experimental` 中开放，按实际调用模型 token 计费。官方明确当前更适合单轮、边界清楚的任务，多轮长会话、延迟与真实使用成本仍是下一阶段验证重点。
[查看原文](https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/)

### Perplexity GPU Embeddings：CPU 前处理、批调度与模型内核被拆成三层
Ivy 是 Rust HTTP gateway，负责解析、模板、tokenization 和大批次切分，再通过 gRPC 送往 Tulip；这样前处理迭代无需改动重型推理服务。Tulip 是轻量 Rust 调度层，按 token 而非请求数凑批，使用 CUDA Graph 预录 GPU 工作，并用 LazyTensor 让 CPU 准备下一批时 GPU 完成当前批。ROSE 是 Python 模型引擎，复用 LLM 与 embedding 的 kernel 基础设施，但 embedding 路径不建 KV cache，并按模型形状与序列长度选择 ragged-attention 后端。分层同时服务离线文档索引/打分的吞吐目标和在线查询的尾延迟目标。官方称组合后较现成方案更快、更便宜，但推文与博客没有给出足够统一的公开基准，架构价值应与性能数字分开判断。
[查看原文](https://www.perplexity.ai/hub/blog/fast-embeddings-on-gpus)

### Agentic Task Ecosystem：公共 MCP 的繁荣主要还不是职业任务端到端自动化
Cohere Labs 在 2026 年 5 月抓取七个公开目录，去重得到 123,069 个 MCP server 和 696,291 个工具，再为每个工具寻找最接近的 O*NET task statement，并让模型判断它是否真正执行完整任务。严格过滤仅提供信息、只完成一环或仍需人类协调的工具后，仅约四十分之一、即 2.6% 达标。能映射到职业的部分明显偏向计算机工作；其余大量条目是运行 Agent 的基础设施、比 O*NET 更细的动作，或管理 Agent 等新工作。数据缺少企业内部私有 server，因此作者把 2.6% 解释为公共生态的 floor，而非 automation ceiling。研究的贡献是提供“开发者实际在造什么工具”这一视角，补充理论可自动化程度和聊天使用日志，但工具描述、目录偏差与模型分类仍限制因果推断。
[查看原文](https://cohere.com/blog/automations-early-footprint)

### Lyria 3.5：从 Flow Music 扩展到大众应用、开发 API 与视频工作流
Lyria 3.5 在 7 月先于 Google Flow Music 发布，9 月 4 日扩展到 Gemini Web/移动端、Gemini API、Google AI Studio、Google Vids，并继续供 Flow Music 与创作者使用。Gemini 中可直接描述曲风、选择人声或纯音乐、控制短曲或最长三分钟结构，也能用图片生成配乐。Google 模型卡称新版相对 Lyria 2 改善音频保真度、复杂歌词提示遵循、旋律结构和人声表达；训练采用 temporal audio latent 上的 latent diffusion。产品层对音频使用 SynthID 不可感知水印，并配合数据过滤、红队和输出安全策略。官方没有公开足以跨模型比较的完整评分，因而“最佳音质”应视为厂商定位，真实价值更可能来自多入口一致部署和长度、风格、素材控制。
[查看原文](https://blog.google/innovation-and-ai/products/gemini-app/better-tracks-lyria-gemini/)

### NVIDIA 推测解码准则：最优 draft 取决于 GEMM、attention tile 与真实接受率
文章用 draft length D、acceptance length AL、目标模型验证时间和 draft 时间描述端到端加速。第一条准则是增大 D，直到 GEMM 从内存受限推向计算受限；当 attention 主导时，以 D=128/G−1 为起点，其中 G 是每个 KV head 共享的 query heads，并让 G×(1+D) 对齐 128 的 kernel tile，避免半空 tile 仍支付完整成本。低延迟区固定 kernel 启动开销更突出，只在 AL 增益大于 draft 开销时继续加长。外部 draft、MTP、EAGLE-3、DFlash、DSpark 与 n-gram 在训练成本、缓存、并行性和接受率上各有取舍；文章建议用 SPEED-Bench 等接近生产的 prompt，同时测 AL、draft latency 和完整 decode throughput。核心结论是高接受长度不是目标本身，硬件、batch、上下文与工作负载共同决定是否真正加速。
[查看原文](https://developer.nvidia.com/blog/co-designing-ai-models-using-speculative-decoding-for-faster-llm-inference/)
