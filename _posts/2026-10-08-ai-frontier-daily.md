---
layout: daily
title: "AI Frontier Daily | 2026.10.08"
headline: "GPT-6让ChatGPT按问题即时生成交互式界面"
date: 2026-10-08 09:07:00 +0800
permalink: /ai-daily/2026/10/08/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "OpenAI 向 ChatGPT 全量推出 GPT-6 与 Intelligent UI：模型可把文本、图表、图片、按钮、表单和可操作工具组合成适合当前问题的界面，并用原生可流式组件与编译器边生成边呈现。Plus、Pro、Business 和 Enterprise 当日使用 GPT-6 Sol，Free 与 Go 次日开始使用 GPT-6 Luna；更新仅覆盖 Chat 标签，不改变 Work 与 Codex 的底层模型。官方还称 GPT-6 可边思考边回答，涉及网页搜索时平均提前 44% 开始输出。"
summary: "OpenAI 向 ChatGPT 全量推出 GPT-6 与 Intelligent UI：模型可把文本、图表、图片、按钮、表单和可操作工具组合成适合当前问题的界面，并用原生可流式组件与编译器边生成边呈现。Plus、Pro、Business 和 Enterprise 当日使用 GPT-6 Sol，Free 与 Go 次日开始使用 GPT-6 Luna；更新仅覆盖 Chat 标签，不改变 Work 与 Codex 的底层模型。官方还称 GPT-6 可边思考边回答，涉及网页搜索时平均提前 44% 开始输出。"
issue_count: 16
deep_dive_count: 8
reading_time: 18
cover: "https://winblogs.thesourcemediaassets.com/sites/2/2026/10/Hero-Bento.png"
signals: "OpenAI · gdb · satyanadella · AnthropicAI · cursor_ai · databricks · emollick · GaryMarcus"
header-img: img/dark_yellow_400.png
---


## 1/16 GPT-6让ChatGPT按问题即时生成交互式界面
OpenAI 向 ChatGPT 全量推出 GPT-6 与 Intelligent UI：模型可把文本、图表、图片、按钮、表单和可操作工具组合成适合当前问题的界面，并用原生可流式组件与编译器边生成边呈现。Plus、Pro、Business 和 Enterprise 当日使用 GPT-6 Sol，Free 与 Go 次日开始使用 GPT-6 Luna；更新仅覆盖 Chat 标签，不改变 Work 与 Codex 的底层模型。官方还称 GPT-6 可边思考边回答，涉及网页搜索时平均提前 44% 开始输出。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI<span class="source-chip__links"><a href="https://x.com/OpenAI/status/2107894997538525580" target="_blank" rel="noopener" aria-label="@OpenAI 原文 1">1</a><a href="https://x.com/OpenAI/status/2107895006350791071" target="_blank" rel="noopener" aria-label="@OpenAI 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/gdb/status/2107899150247616531" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a></div>

## 2/16 Windows把本地模型、云端路由与Agent沙箱整合为Hybrid Intelligence
微软将 Windows 定位为本地与云端协同的 Agent 平台：MAI Code 1.1 Flash 以 1370 亿总参数、68 亿激活参数和 3-bit 精度在 PC 上运行，模型体积缩小近 80%，仍支持 256K 上下文；GitHub HydraFusion 可把合适任务路由到本地模型。Microsoft Execution Containers 已在 Windows 11 正式可用，可按运行时策略限制 Agent 的文件和网络访问；Copilot+ PC 还将获得本地上下文、本地操作和本地模型能力。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@satyanadella<span class="source-chip__links"><a href="https://x.com/satyanadella/status/2107898018112647313" target="_blank" rel="noopener" aria-label="@satyanadella 原文 1">1</a><a href="https://x.com/satyanadella/status/2107919668514295908" target="_blank" rel="noopener" aria-label="@satyanadella 原文 2">2</a></span></span></div>

## 3/16 Claude Haiku 5.5把短上下文成本压到上一代的十分之一
Anthropic 发布 Claude Haiku 5.5，定位为其最快、最便宜且能力最强的小模型。10 万 token 以内每百万输入与输出分别为 0.10 和 0.50 美元，较 Haiku 4.5 低 90%；超过 10 万 token 后为 0.50 和 2.50 美元。官方报告其 OSWorld 2.1 离线子集得分 72.4%，并加入可调 effort。模型已进入 Anthropic、AWS、Google Cloud 与 Azure；Sonnet 5.5 缓存读取同时降价 50%，官方估算多数 Agent 工作成本约降 20%。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AnthropicAI/status/2107894208547983705" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI</a><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai<span class="source-chip__links"><a href="https://x.com/cursor_ai/status/2107897245282799864" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 1">1</a><a href="https://x.com/cursor_ai/status/2107897257651769464" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/databricks/status/2107956002092171602" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a></div>

## 4/16 OpenAI公开大批数学结果、Lean形式化与推理过程
OpenAI 公布内部前沿模型产出的新数学结果，并以 GitHub 仓库发布论文、修订与引用协议。项目为多项证明提供 Lean 形式化，还公开 10 份模型推理摘要、尝试题量和按 ChatGPT Pro 用量估算的计算成本；官方称平均每项结果约消耗相当于三小时 Pro thinking 的算力。数学界的早期讨论同时指出，新结果需要专家审阅、正式引用和可复核形式化，规模化生成证明会把稀缺环节进一步推向问题选择与验证。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/emollick/status/2107964764316209326" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a><a class="source-chip" href="https://x.com/GaryMarcus/status/2107884220299215022" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GaryMarcus</a></div>

## 5/16 Mistral Large 4用万亿参数MoE争夺开放权重Agent前沿
Mistral 推出 Large 4 公测版：模型约 1.05 万亿总参数、490 亿激活参数，原生支持多模态与 100 多万 token 上下文，开放权重计划本月底发布。官方称其在 3,800 张 NVIDIA Grace Blackwell GPU 上训练，数据覆盖 160 多种语言；AutomationBench 的 657 项办公流程得分 59.9%，并在法律、金融、网络安全和视觉定位等内部或第三方评测中领先多款开放模型。当前成绩主要来自发布方，权重落地后的独立复测仍是关键。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@MistralAI<span class="source-chip__links"><a href="https://x.com/MistralAI/status/2107834891844899292" target="_blank" rel="noopener" aria-label="@MistralAI 原文 1">1</a><a href="https://x.com/MistralAI/status/2107834895674323354" target="_blank" rel="noopener" aria-label="@MistralAI 原文 2">2</a><a href="https://x.com/MistralAI/status/2107834897377153304" target="_blank" rel="noopener" aria-label="@MistralAI 原文 3">3</a></span></span></div>

## 6/16 EmbeddingGemma 2把五类内容映射到端侧统一向量空间
Google 发布开放的 EmbeddingGemma 2，用 7.4 亿参数把文本、代码、图片、视频和音频映射到统一的 768 维空间，并以 Apache 2.0 许可开放。模型支持 8K 上下文，可处理约 5.5 分钟音频、29 张图片或 58 帧视频；量化后在 Pixel 11 Pro 上，纯文本权重约占 191MB 活跃内存，完整多模态模型约 567MB。其 Matryoshka 表示可截断到 128 维，官方称本地向量库的存储和内存最多减少六倍。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/huggingface/status/2107929676358300047" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface</a><a class="source-chip" href="https://x.com/demishassabis/status/2108024511773937838" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@demishassabis</a></div>

## 7/16 Perplexity用逐Token晚交互模型检索文本、图片与整页文档
Perplexity 发布 pplx-embed-v2-late 的 9B 与 0.6B 两个模型，以每个 token 一个 128 维向量和 MaxSim 评分替代整篇文档压缩成单向量。模型可直接嵌入图片与渲染后的页面，无需 OCR，并由同一 18B 教师逐 token 蒸馏，因此用 9B 建索引后可用 0.6B 发起查询。官方称 9B 在 1.9 亿网页的 Q2D-Web 上达到 74.8% Recall@1000，在 800 份 PDF 的 MADQA 上达到 92.4%，权重已发布至 Hugging Face。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@perplexity_ai<span class="source-chip__links"><a href="https://x.com/perplexity_ai/status/2107866029745746177" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 1">1</a><a href="https://x.com/perplexity_ai/status/2107866052084560180" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 2">2</a><a href="https://x.com/perplexity_ai/status/2107866100704952530" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 3">3</a><a href="https://x.com/perplexity_ai/status/2107866125627486358" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 4">4</a><a href="https://x.com/perplexity_ai/status/2107866173803249747" target="_blank" rel="noopener" aria-label="@perplexity_ai 原文 5">5</a></span></span></div>

## 8/16 NVIDIA PivotOPD专门训练Agent避开并修复早期关键错误
NVIDIA、普林斯顿与马里兰大学提出 PivotOPD，针对多轮 Agent 在早期犯错后沿错误轨迹继续执行的问题。研究在三种 Qwen3 模型上发现，59% 的失败轨迹包含一个通常出现在第 8—12 轮的关键错误；框架让教师指出正确动作，并继续示范后续恢复步骤，把预防蒸馏、恢复蒸馏与强化学习合并。论文称重放关键错误时恢复率由基础模型的 8.3% 提升至 72.7%，并让 Nemotron-3.5 在 SWE-Bench Verified 上提高 3.2 个百分点。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/NVIDIAAI/status/2107928667246715090" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI</a></div>

## 9/16 SynthID Detector向公众开放跨平台AI内容水印检测
Google 将 SynthID Detector 向所有人开放，可上传视频、音频和图片，判断其中是否含有 Google AI 或合作伙伴工具写入的水印；官方称经过滤镜等编辑后仍可检测。首批合作方包括 OpenAI、NVIDIA 与 Kakao，Apple 支持将随后加入；Chrome、Google Search 和 Gemini 也已提供相关识别入口。该方案验证的是特定工具留下的水印，而不是对所有内容作“是否由 AI 生成”的通用鉴定，覆盖率仍取决于生成平台是否接入。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GoogleDeepMind<span class="source-chip__links"><a href="https://x.com/GoogleDeepMind/status/2107834249680499136" target="_blank" rel="noopener" aria-label="@GoogleDeepMind 原文 1">1</a><a href="https://x.com/GoogleDeepMind/status/2107834254222581862" target="_blank" rel="noopener" aria-label="@GoogleDeepMind 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/NVIDIAAI/status/2107882195738394716" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI</a></div>

## 10/16 OpenDocRouter用统一API在十种文档解析模型间切换
LlamaIndex 推出 OpenDocRouter，将 10 种前沿与开源文档解析模型放进统一 API，输出相同 Markdown 格式，并可用 `layout: true` 为原本不支持布局的模型补充边界框与统一类别。平台用 ParseBench 展示质量和成本，公告给出的每千页价格跨度为 0.86—48.82 美元，失败页面不收费。产品试图把“固定选择一个 OCR 模型”改成按文档与成本动态路由；其评测代表性、复杂版面稳定性与数据留存规则仍需用户自行验证。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/llama_index/status/2107863919536595237" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@llama_index</a></div>

## 11/16 ChatGPT为未成年人加入College Planner和更多学习工具
OpenAI 更新 ChatGPT for Teens：未满 18 岁账户默认进入带保护措施的体验，并预告面向美国四年制大学申请者的 College Planner，用于汇总申请要求、截止日期、任务与助学金步骤。官方称获得该体验的青少年平均多发送约 270 万条学习相关消息；一周内近 120 万人使用 Learning Visualizations，超过 18 万人使用 Study Mode。系统还加入休息提醒、测验和闪卡，并将通过青少年 AI 委员会与波士顿儿童医院项目收集反馈。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/OpenAI/status/2107909792945832070" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a></div>

## 12/16 Replit桌面版在Windows本机沙箱中构建和运行应用
Replit 宣布与微软合作预览 Windows 桌面应用，生成的项目可直接在本机编译和运行，每次构建都放入由 Microsoft Execution Containers 与 NVIDIA OpenShell 支持的独立沙箱。产品把云端提示式开发延伸到本地文件、算力和 localhost 运行环境，同时复用 Windows 的 Agent 隔离层；目前仅开放候补名单，公告尚未说明离线能力、可用模型、资源上限、代码同步方式与正式发布时间。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Replit<span class="source-chip__links"><a href="https://x.com/Replit/status/2107896848044437766" target="_blank" rel="noopener" aria-label="@Replit 原文 1">1</a><a href="https://x.com/Replit/status/2107919454348968033" target="_blank" rel="noopener" aria-label="@Replit 原文 2">2</a></span></span></div>

## 13/16 Omnigent用会话状态动态约束Agent成本和风险
Databricks 介绍开源 Agent 元框架 Omnigent 的上下文策略：策略可累计记录会话中读取过的文件、工具调用、风险分数与模型花费，再决定下一步允许、拒绝、改写还是要求人工确认。内置示例可限制 Agent 只修改本会话新建文档、读取机密材料后禁止向低权限位置写入，或在成本达到软阈值时询问、硬阈值时切换便宜模型。它可包裹 Codex、Claude Code 等不同外壳，把一次性 allowlist 扩展为基于历史的控制。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/databricks/status/2107841529821704479" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a></div>

## 14/16 Deep Agents把工具与Skill绑定并按需加载
LangChain 的 Deep Agents 新增按 Skill 动态加载工具：只有当 Agent 载入某项领域知识时，才把对应工具暴露给模型。这样可以减少长期常驻工具定义带来的上下文占用与误调用，并让共享 Skill 同时携带知识和执行能力；公告称在 OpenAI 与 Anthropic 模型上可以实现而不破坏 prompt cache。该设计延续“渐进披露”思路，但团队仍需验证工具卸载、权限继承、Skill 冲突和缓存命中在长任务中的行为。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hwchase17/status/2107908436965179896" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17</a></div>

## 15/16 Cohere把Compass检索平台托管为云端私测服务
Cohere 开放 Compass Cloud 私有测试，面向希望减少检索基础设施运维的企业提供托管搜索与检索平台。公告将其定位为“更少开销的高质量检索”，并邀请企业团队申请早期访问；这意味着 Cohere 正把模型之外的索引、检索和服务层打包为云产品。当天披露的信息较少，尚未说明支持的数据源、区域、隔离模式、索引刷新延迟、定价和正式可用时间，早期用户需要重点核对数据驻留与权限同步。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cohere<span class="source-chip__links"><a href="https://x.com/cohere/status/2107853142096572538" target="_blank" rel="noopener" aria-label="@cohere 原文 1">1</a><a href="https://x.com/cohere/status/2107853146483830831" target="_blank" rel="noopener" aria-label="@cohere 原文 2">2</a></span></span></div>

## 16/16 Runway把视频生成与修改能力嵌入ChatGPT Astra
Runway 宣布直接进入 ChatGPT Astra，用户可在同一聊天窗口给出创意简报、让系统执行并继续反馈修改意见，无需切换到独立创作界面。此次集成把视频模型作为通用对话 Agent 的可调用能力，强调从意图到迭代成片的连续工作流；公告未披露可用的 Runway 模型、视频长度与分辨率、账户绑定、额度、素材上传边界或企业数据政策，实际生产使用仍需等待产品文档和权限说明。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml<span class="source-chip__links"><a href="https://x.com/runwayml/status/2107908620692389989" target="_blank" rel="noopener" aria-label="@runwayml 原文 1">1</a><a href="https://x.com/runwayml/status/2107908623519383755" target="_blank" rel="noopener" aria-label="@runwayml 原文 2">2</a></span></span></div>

---

## Deep Dive 附录

### GPT-6 Intelligent UI：从统一聊天框转向按任务生成的软件界面
Intelligent UI 不只是把回答“做得更好看”。OpenAI 为 GPT-6 提供原生、可流式的组件库和生成时编译器，让模型在输出过程中决定何时使用对照布局、交互图、表单、按钮或计算器，并逐步显示，而不必等完整页面生成。GPT-6 还可把推理与回答交错进行：官方内部评测称，Extra High 在与 GPT-5.6 Medium 相近的首字等待时间下，整体得分高于 GPT-5.6 Extra High；网页搜索场景平均提前 44% 开始回答。当前范围仅是 ChatGPT 的 Chat 标签，Work 与 Codex 模型不变，也说明这次发布首先重塑的是消费端交互层。
[查看原文](https://openai.com/index/gpt-6-for-everyone/)

### Windows Hybrid Intelligence：本地推理、任务路由和Agent隔离进入同一平台
微软的方案由四层组成：本地模型、按任务选择本地或云端的 HydraFusion 路由、可读取本地上下文并执行动作的 Copilot，以及负责隔离与治理的 Microsoft Execution Containers。MAI Code 1.1 Flash 采用 1370 亿总参数、68 亿激活参数，3-bit 量化把体积缩小近 80%，支持 256K 本地上下文。MXC 则用运行时策略限定文件、网络和会话资源，并接入 Agent 365 与 Intune；Codex、GitHub Copilot、OpenClaw、Replit、LM Studio 和 NVIDIA OpenShell 已列为支持者。关键变化是本地算力不再只是离线模型，而成为云端 Agent 的可路由执行层。
[查看原文](https://blogs.windows.com/windowsexperience/2026/10/07/building-windows-for-hybrid-intelligence/)

### Claude Haiku 5.5：小模型价格战开始围绕高频子任务展开
Haiku 5.5 在 10 万 token 以内的输入、输出与缓存读取价格分别为每百万 token 0.10、0.50 和 0.01 美元；超过 10 万 token 后分别为 0.50、2.50 和 0.05 美元。Anthropic 称上一代约 90% 的请求落在短上下文档位，因此实际主要目标是摘要、压缩、快速查找、浏览器操作和大模型编排下的子 Agent，而不是替代 Sonnet、Opus 承担最复杂的长程编码。模型首次在 Haiku 级别提供 effort 调节，并在 OSWorld 2.1 离线子集达到 72.4%。同时 Sonnet 5.5 缓存读取减半，显示竞争正从单次 token 标价扩展到 Agent 循环中的缓存与分工成本。
[查看原文](https://www.anthropic.com/claude-haiku-5-5)

### OpenAI数学发布：生成结果的规模上升后，验证与出版流程成为瓶颈
OpenAI 这次没有只发布一项定理，而是用 GitHub 仓库集中公开内部前沿模型产生的一批数学结果，并引入论文修订、引用和版本管理协议。仓库包含多项 Lean 形式化、10 份模型推理摘要、尝试问题统计和算力估算；官方称平均每项结果约相当于三小时 ChatGPT Pro thinking。团队还参考 Institute for Advanced Study 独立数学与 AI 顾问组的建议，并计划资助工作坊、会议和专题项目。规模化结果让“模型能否提出证明”不再是唯一问题，形式验证、专家解释、优先权、引用规范和社区审阅将共同决定哪些结果真正进入数学知识体系。
[查看原文](https://openai.com/index/sharing-ai-progress-in-mathematics/)

### Mistral Large 4：欧洲自建算力训练的万亿参数开放权重模型
Mistral Large 4 是约 1.05 万亿总参数、490 亿激活参数的原生多模态 MoE，支持超过 160 种语言和约 100 万 token 上下文。模型在 Mistral 自有欧洲数据中心的 3,800 张 Grace Blackwell GPU 上从头训练，公测 API 已开放，权重承诺本月底发布。官方报告其 AutomationBench 得分 59.9%，Artificial Analysis Cyber Index 位列全球前五，并在一项漏洞复现与修补测试上达到 82%；视觉定位 Dense 200 为 42%，略高于发布方列出的 GPT-6 Astra 41%。这些数字跨越多种内部与第三方评测，开放权重发布后能否在独立环境复现，是判断其开放前沿地位的关键。
[查看原文](https://mistral.ai/news/mistral-large-4/)

### EmbeddingGemma 2：让跨模态搜索与RAG完整留在端侧
EmbeddingGemma 2 基于 Gemma 4，把文本、代码、图片、视频和音频映射到共享的 768 维空间；模块化结构可只加载约 2.7 亿参数的文本与代码部分，也可加载完整 7.4 亿参数多模态模型。8K 上下文支持约 5.5 分钟音频、29 张图片或 58 帧视频，Matryoshka 表示可截断至 512、256 或 128 维。Google 称量化后在 Pixel 11 Pro 上的活跃内存最低约为 191MB 与 567MB，并可与 Gemma 4 共用 tokenizer 和音频编码器。其价值在于让私人文件、相册、录音与本地代码库无需上传云端即可建立统一检索索引。
[查看原文](https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/)

### pplx-embed-v2-late：用晚交互保留长文档和视觉页面的细粒度信息
传统 dense embedding 把一篇文档压成单向量，长度和视觉复杂度上升时容易丢失局部线索。pplx-embed-v2-late 为每个 token 保留 128 维向量，并用 MaxSim 让查询 token 与文档中最接近的 token 匹配；图片、扫描件和渲染页面可直接编码，从而保留表格、图像与布局。9B 与 0.6B 模型由同一 18B 教师逐 token 蒸馏并共享空间，允许高质量模型建库、轻量模型查询。官方给出的 Q2D-Web Recall@1000 为 74.8% 与 73.6%，MADQA 为 92.4%；这些基准显示潜力，但逐 token 索引也会增加存储与检索计算，需要结合真实文档成本评估。
[查看原文](https://www.perplexity.ai/hub/blog/multimodal-embeddings-beyond-a-single-vector)

### PivotOPD：Agent训练从奖励最终成功转向修复关键分岔点
研究者在 ALFWorld 的三种 Qwen3 模型失败轨迹中发现，59% 含有一个让最优路径变长或任务不可完成的“关键错误”，第一个错误通常出现在 30 轮任务的第 8—12 轮。只纠正该轮可把重放成功率从 8% 提至 59%，只指导后两轮也能达到 58%，说明许多失败仍可恢复。PivotOPD 让教师事后识别关键轮次，分别用 reverse KL 做预防蒸馏、用 forward KL 教罕见的恢复动作，再与 PPO 合并。最终重放恢复率达到 72.7%，Qwen3-1.7B 在 ALFWorld 比最强基线高 5.5 个百分点，Nemotron-3.5 在 SWE-Bench Verified 从 62.8% 提至 66.0%。
[查看原文](https://research.nvidia.com/labs/lpr/pivotopd/)
