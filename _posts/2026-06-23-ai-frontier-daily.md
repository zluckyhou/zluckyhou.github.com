---
layout: daily
title: "AI Frontier Daily | 2026.06.23"
headline: "OpenAI Daybreak 从漏洞发现转向自动化修补"
date: 2026-06-23 09:07:00 +0800
permalink: /ai-daily/2026/06/23/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "OpenAI 扩展 Daybreak，核心变化是把 frontier cyber model 的价值从“发现漏洞”推进到“验证、生成补丁、协助维护者合并修复”。公告包括 Codex Security plugin、完整版本 GPT-5.5-Cyber、Daybreak Cyber Partner Program，以及与 Trail of Bits、HackerOne、Calif 和开源维护者合作的 Patch the Planet。OpenAI 称 GPT-5.5-Cyber 在 CyberGym 达到 85.6%，并把使用范围限制在 trusted defenders。重点不只是更强的扫描器，而是 AI 安全能力开始进入补丁开发、测试、披露和人类复核组成的完整防御循环。"
summary: "OpenAI 扩展 Daybreak，核心变化是把 frontier cyber model 的价值从“发现漏洞”推进到“验证、生成补丁、协助维护者合并修复”。公告包括 Codex Security plugin、完整版本 GPT-5.5-Cyber、Daybreak Cyber Partner Program，以及与 Trail of Bits、HackerOne、Calif 和开源维护者合作的 Patch the Planet。OpenAI 称 GPT-5.5-Cyber 在 CyberGym 达到 85.6%，并把使用范围限制在 trusted defenders。重点不只是更强的扫描器，而是 AI 安全能力开始进入补丁开发、测试、披露和人类复核组成的完整防御循环。"
issue_count: 12
deep_dive_count: 5
reading_time: 15
cover: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Interactions_API_GA_final.width-1300.png"
signals: "OpenAI · sama · gdb · SakanaAILabs · hardmaru · cursor_ai · OfficialLoganK · GoogleDeepMind"
header-img: img/dark_yellow_400.png
---


## 1/12 OpenAI Daybreak 从漏洞发现转向自动化修补
OpenAI 扩展 Daybreak，核心变化是把 frontier cyber model 的价值从“发现漏洞”推进到“验证、生成补丁、协助维护者合并修复”。公告包括 Codex Security plugin、完整版本 GPT-5.5-Cyber、Daybreak Cyber Partner Program，以及与 Trail of Bits、HackerOne、Calif 和开源维护者合作的 Patch the Planet。OpenAI 称 GPT-5.5-Cyber 在 CyberGym 达到 85.6%，并把使用范围限制在 trusted defenders。重点不只是更强的扫描器，而是 AI 安全能力开始进入补丁开发、测试、披露和人类复核组成的完整防御循环。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI<span class="source-chip__links"><a href="https://x.com/OpenAI/status/2069104283824640023" target="_blank" rel="noopener" aria-label="@OpenAI 原文 1">1</a><a href="https://x.com/OpenAI/status/2069104286479618296" target="_blank" rel="noopener" aria-label="@OpenAI 原文 2">2</a><a href="https://x.com/OpenAI/status/2069104284982263810" target="_blank" rel="noopener" aria-label="@OpenAI 原文 3">3</a></span></span><a class="source-chip" href="https://x.com/sama/status/2069121360744550796" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sama</a><a class="source-chip" href="https://x.com/gdb/status/2069112120206332130" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a></div>

## 2/12 Sakana Fugu 把多模型编排包装成一个 OpenAI-compatible API
Sakana AI 发布 Fugu 和 Fugu Ultra，定位不是单一大模型，而是一个学会调用、路由、验证和综合多个专家模型的 orchestration model。Fugu 追求低延迟和日常任务，Fugu Ultra 面向 hard multi-step problems，并在 beta 中覆盖 AI research、paper reproduction、cybersecurity analysis、patent investigation 等工作流。Sakana 把它放在 AI sovereignty 叙事中：如果最强模型 access 受供应商或出口控制影响，可替换 agent pool 能降低单点依赖。它代表一种新竞争路径：不只训练更大模型，而是训练会组织模型团队的模型。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs<span class="source-chip__links"><a href="https://x.com/SakanaAILabs/status/2068973497905545461" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 1">1</a><a href="https://x.com/SakanaAILabs/status/2068862344684581023" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 2">2</a></span></span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru<span class="source-chip__links"><a href="https://x.com/hardmaru/status/2068884466056225025" target="_blank" rel="noopener" aria-label="@hardmaru 原文 1">1</a><a href="https://x.com/hardmaru/status/2069209921393144318" target="_blank" rel="noopener" aria-label="@hardmaru 原文 2">2</a></span></span></div>

## 3/12 Cursor Compile 公布三项更新，并强调与 SpaceX 训练新模型
Cursor 在 Compile keynote 后发出三项公告，其中最受关注的是正在与 SpaceX 训练一个新模型。结合最近围绕 Cursor、SpaceX、coding model 和算力的讨论，这条信息说明 coding agent 产品正在把竞争推进到自有模型和专用训练数据层。过去 Cursor 的优势主要来自 IDE harness、代码库上下文、agent loop 和用户体验；如果它同时拥有面向软件工程训练的模型，竞争边界会从“哪个 wrapper 更好用”变成“模型、工具环境、真实开发反馈和算力是否闭环”。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai<span class="source-chip__links"><a href="https://x.com/cursor_ai/status/2069149296436330776" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 1">1</a><a href="https://x.com/cursor_ai/status/2069149299078783279" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 2">2</a></span></span></div>

## 4/12 Google Interactions API GA，Gemini agent 接口成为默认路径
Google 宣布 Interactions API 进入 GA，Logan Kilpatrick 称它是用于在同一个接口中跨模型和 agents 编排的新 API，并将成为新的默认 API。Google 的文档方向包括 structured timeline、工具调用、Google Search/Maps 等内置工具和自定义函数混用、Deep Research agent 版本、协作规划和多模态 grounding。这个发布的意义在于把 agent runtime 的常见需求放进一条稳定 API：状态、工具、异步、多模态输入输出和长任务管理不再只是应用层临时拼装，而逐渐成为模型平台的基础抽象。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OfficialLoganK<span class="source-chip__links"><a href="https://x.com/OfficialLoganK/status/2069115284519346263" target="_blank" rel="noopener" aria-label="@OfficialLoganK 原文 1">1</a><a href="https://x.com/OfficialLoganK/status/2069115858782507021" target="_blank" rel="noopener" aria-label="@OfficialLoganK 原文 2">2</a></span></span></div>

## 5/12 Google DeepMind 与 A24 建立创作研究合作
Google DeepMind 和 A24 宣布 research partnership，目标是让未来工具由实际创作者参与塑形。Google 官方说明称，该合作会把 DeepMind 的研究能力嵌入 A24 的创意过程，A24 和 filmmakers 会为多个项目提供反馈和指导；Google 同时对 A24 进行了投资。与单纯把生成视频模型卖给 studio 不同，这更像是 AI lab 与内容公司共同设计 workflow、pre-production、创意迭代和影视工具边界。它也显示 Hollywood 与 AI 的关系从版权对抗之外，开始出现更深的产品共研路线。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/GoogleDeepMind/status/2069066675895337405" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GoogleDeepMind</a></div>

## 6/12 NVIDIA ArtiFixer 用生成模型补全 3D 重建看不见的区域
NVIDIA Research 发布 ArtiFixer，一个面向 3D scene reconstruction 的开放自回归模型，解决相机没有看到的区域在 Gaussian Splatting 等方法中容易空缺或失真的问题。项目页描述了两阶段 pipeline：先训练带 opacity mixing 的双向生成模型，以保持已观测内容一致并外推 unseen areas；再蒸馏为 causal auto-regressive model，一次生成数百帧。它对机器人、仿真、游戏资产、空间智能和虚拟制作都有意义，因为真实世界采集永远存在遮挡和稀疏视角，重建系统需要合理补全而不破坏源内容。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI<span class="source-chip__links"><a href="https://x.com/NVIDIAAI/status/2069118220506628287" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 1">1</a><a href="https://x.com/NVIDIAAI/status/2069118227095888345" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 2">2</a></span></span></div>

## 7/12 xAI 让 Grok 连接 Interactive Brokers，金融助手进入账户上下文
xAI 宣布 Grok 现在可以连接 Interactive Brokers，向用户提供基于投资组合的实时信息。这个更新不是单纯金融问答，而是把 AI assistant 接入 broker account context：持仓、风险暴露、市场数据、交易相关解释和决策支持都会变得更贴近个人账户。对金融 AI 来说，关键挑战会从“能否解释新闻”转向权限、合规、适当性、审计、误导风险和是否允许执行操作。Grok 如果继续深入 broker workflow，将面对比普通搜索助手更高的信任和监管门槛。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/xai/status/2069200658633469970" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@xai</a></div>

## 8/12 Databricks CustomerLake 把营销个性化包装成 agentic CDP
Databricks 在 Data + AI Summit 后继续推广 CustomerLake，称 agent 改变了 one-to-one personalization 的成本结构：多个 autonomous agents 可以围绕每个 customer 持续分析行为，并决定 offer、message、channel 和 timing。Databricks 同日还推广生产级 agentic apps 的讨论，主题包括 demo 与 production agent 的差别、治理、数据安全和规模化部署。它的信号很明确：企业 agent 落地会先进入有明确 ROI、强数据依赖、可审计的业务系统，营销 CDP 是一个自然切入点。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks<span class="source-chip__links"><a href="https://x.com/databricks/status/2069071941885988904" target="_blank" rel="noopener" aria-label="@databricks 原文 1">1</a><a href="https://x.com/databricks/status/2069141395982406127" target="_blank" rel="noopener" aria-label="@databricks 原文 2">2</a></span></span></div>

## 9/12 Together 用 Cartesia 和 GB300 说明实时推理基础设施竞争
Together AI 连续发布两条基础设施信息：Cartesia 的实时语音 workload 需要长期 streaming、每天数百万 audio minutes 和约 90ms model latency；另一条称 Together 与 5C 正在部署 NVIDIA GB300 NVL72 系统，配合高密度计算、先进冷却和 AI-optimized storage，服务大规模 inference 和 reasoning。这里的重点是 agent 和实时语音不只看模型质量，还看 serving path 的延迟、吞吐、集群控制、硬件代际和单位任务成本。推理基础设施正在成为独立竞争层。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute<span class="source-chip__links"><a href="https://x.com/togethercompute/status/2069212000950079515" target="_blank" rel="noopener" aria-label="@togethercompute 原文 1">1</a><a href="https://x.com/togethercompute/status/2068877632960147670" target="_blank" rel="noopener" aria-label="@togethercompute 原文 2">2</a></span></span></div>

## 10/12 Cohere 再次强化 sovereign AI 叙事
Cohere CEO Aidan Gomez 在 FII Institute 现场强调，当 AI 被整合进每个行业，如果没有 sovereign solution，基础设施可能在某一刻被关闭。这个观点延续了最近 AI sovereignty、出口控制、模型 access 和本地化部署的行业讨论。对政府、大型企业和 regulated industries 来说，模型选择已经不只是 benchmark 或价格问题，还涉及数据驻留、供应商可控性、合规、语言文化适配、断供风险和本地生态。Cohere 正把自己放在“可控 AI 基础设施”而非普通模型供应商的位置上。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cohere/status/2069171756011544937" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cohere</a></div>

## 11/12 LangChain 讨论 model council 与 agent 成本治理
Harrison Chase 讨论 model routing 与 model council 的区别：前者把请求路由到一个最合适模型，主要理由是成本；后者同时调用多个模型并聚合结果，用于推动 frontier performance。他把 OpenRouter Fusion、Sakana Fugu 和生物问题中的多模型用法放在一起，并指出 LangChain 目前先做更简单的成本控制和 policy。配套 LangSmith LLM Gateway 案例说明，coding agent 会让单个开发者在短时间内产生高额模型调用，企业需要按组织、workspace、用户和 API key 设置预算，并把成本连接到 trace 与评估。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hwchase17/status/2069148652459761912" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17</a></div>

## 12/12 AI 创作工具继续向工作流细节推进
Runway 展示 Aleph 2.0 改变视频 aspect ratio 的能力，让视频扩展场景以适配不同平台；Character.AI 改版移动端角色创建流程，强调降低创作表单摩擦；Ethan Mollick 用 Fable 生成 self-aware Snake game 的案例讨论长程 creative problem-solving；Google DeepMind 与 A24 合作也指向同一趋势。今天的创作工具新闻共同说明，AI media 的竞争正在从“生成一个片段”转向“融入用户已有创作流程”：比例重构、角色设定、迭代编辑、审美判断、项目上下文和最终交付格式都会影响真实采用。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/runwayml/status/2069147959896240320" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml</a><a class="source-chip" href="https://x.com/character_ai/status/2069142935376146463" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@character_ai</a><a class="source-chip" href="https://x.com/emollick/status/2069207757199200408" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a><a class="source-chip" href="https://x.com/GoogleDeepMind/status/2069066675895337405" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GoogleDeepMind</a></div>

---

## Deep Dive 附录

### OpenAI Daybreak / Patch the Planet
OpenAI 把 Daybreak 扩展成围绕“从 findings 到 fixes”的防御平台：Codex Security plugin、GPT-5.5-Cyber、Cyber Partner Program 和 Patch the Planet 共同指向补丁自动化。OpenAI 官方称 GPT-5.5-Cyber 在 CyberGym 达到 85.6%，Patch the Planet 已有 30 多个开源项目承诺参与，初始项目包括 cURL、Go、Python、Sigstore 和 pyca/cryptography。Trail of Bits 负责人工复核和补丁协作，重点是避免把更多未经验证的 AI 漏洞报告直接丢给维护者。
[查看原文](https://openai.com/index/daybreak-securing-the-world/)

### Sakana Fugu
Sakana Fugu 把多模型系统包装成一个 OpenAI-compatible API：Fugu 负责低延迟日常任务，Fugu Ultra 面向难、多步、长程任务。Sakana 的核心论点是 orchestration model 可以动态调用不同专家模型，执行路由、委派、验证和综合，从而在单一模型之外获得 frontier-level workflow performance。技术报告和发布文把它放进 AI sovereignty 语境：底层模型可替换，agent pool 可更新，用户不必把关键能力押在一个供应商或一个模型访问渠道上。
[查看原文](https://sakana.ai/fugu-release/)

### Google DeepMind × A24
Google DeepMind 与 A24 的合作不是一次普通工具发布，而是一个多项目、长期的 research and development collaboration。Google 称 A24 和 filmmakers 会把创作流程中的反馈直接带入工具研发，帮助未来娱乐技术更贴近艺术家使用方式；Google 同时对 A24 投资。这个合作重要在于 lab 与 studio 的关系更深：创意工作流、pre-production、导演/艺术家控制权、素材边界和工具接受度都需要在真实制作环境中迭代。
[查看原文](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/deepmind-a24-research-partnership/)

### Gemini Interactions API GA
Google 的 Interactions API GA 把 Gemini agent 开发中的多个基础能力合并到一个更稳定接口：交互 timeline、工具调用、内置 Google Search/Maps 与自定义函数混用、Deep Research agent 升级、协作规划，以及多模态 grounding。Logan Kilpatrick 称它是用于跨 models 和 agents 编排的新默认 API。对开发者来说，这意味着 agent 平台开始把状态、工具、异步行为和多模态结果作为一级 API 设计对象，而不是由每个应用团队重复实现。
[查看原文](https://blog.google/innovation-and-ai/technology/developers-tools/interactions-api-general-availability/)

### NVIDIA ArtiFixer
ArtiFixer 面向稀疏 3D 重建中的 under-observed areas。NVIDIA Research 描述的两阶段方法先用 opacity mixing 训练双向生成模型，在保持已观测内容一致的同时补全看不见区域；再蒸馏成 causal auto-regressive model，一次生成数百帧。项目声称在常见 benchmark 上超过已有 baselines，并能在原始重建严重退化时生成更合理、一致的 geometry。它把 video diffusion、3D reconstruction 和 spatial intelligence 更紧地连在一起。
[查看原文](https://research.nvidia.com/labs/sil/projects/artifixer/)
