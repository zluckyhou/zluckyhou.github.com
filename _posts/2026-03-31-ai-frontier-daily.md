---
layout: daily
title: "AI Frontier Daily | 2026.03.31"
headline: "Qwen3.5-Omni 正式发布：215 项 SOTA，原生全模态 AGI 新里程碑"
date: 2026-03-31 09:07:00 +0800
permalink: /ai-daily/2026/03/31/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "阿里巴巴通义千问团队发布 Qwen3.5-Omni，分 Plus、Flash、Light 三个版本，支持原生文本、图像、音频和视频统一理解与生成，上下文窗口达 256K，训练数据超 1 亿小时音视频内容，支持 113 种语言的语音识别。Plus 版本在音频、音视频理解、推理和交互基准测试中取得 215 项 SOTA 成绩，在通用音频理解、推理和翻译方面超越 Gemini 3.1 Pro，多语言语音稳定性（20 种语言）超越 ElevenLabs、GPT-Audio 和 Minimax。亮点功能\"Audio-Visual Vibe Coding\"可通过观看屏幕录像或视频直接生成代码，无需文字提示。新增\"语义打断\"技术，可区分有意义的打断与背景噪音（如咳嗽不会中断回复），并内置实时网络搜索与语音克隆。模型已在 OpenRouter 上线供早期预览。"
summary: "阿里巴巴通义千问团队发布 Qwen3.5-Omni，分 Plus、Flash、Light 三个版本，支持原生文本、图像、音频和视频统一理解与生成，上下文窗口达 256K，训练数据超 1 亿小时音视频内容，支持 113 种语言的语音识别。Plus 版本在音频、音视频理解、推理和交互基准测试中取得 215 项 SOTA 成绩，在通用音频理解、推理和翻译方面超越 Gemini 3.1 Pro，多语言语音稳定性（20 种语言）超越 ElevenLabs、GPT-Audio 和 Minimax。亮点功能\"Audio-Visual Vibe Coding\"可通过观看屏幕录像或视频直接生成代码，无需文字提示。新增\"语义打断\"技术，可区分有意义的打断与背景噪音（如咳嗽不会中断回复），并内置实时网络搜索与语音克隆。模型已在 OpenRouter 上线供早期预览。"
issue_count: 16
deep_dive_count: 3
reading_time: 12
cover: "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2026/03/decrypt-style-alibaba-qwen-gID_7.png"
signals: "Alibaba_Qwen · satyanadella · Replit · huggingface · ClementDelangue · NVIDIAAI · hwchase17 · emollick"
header-img: img/dark_yellow_400.png
---


## 1/16 Qwen3.5-Omni 正式发布：215 项 SOTA，原生全模态 AGI 新里程碑
阿里巴巴通义千问团队发布 Qwen3.5-Omni，分 Plus、Flash、Light 三个版本，支持原生文本、图像、音频和视频统一理解与生成，上下文窗口达 256K，训练数据超 1 亿小时音视频内容，支持 113 种语言的语音识别。Plus 版本在音频、音视频理解、推理和交互基准测试中取得 215 项 SOTA 成绩，在通用音频理解、推理和翻译方面超越 Gemini 3.1 Pro，多语言语音稳定性（20 种语言）超越 ElevenLabs、GPT-Audio 和 Minimax。亮点功能"Audio-Visual Vibe Coding"可通过观看屏幕录像或视频直接生成代码，无需文字提示。新增"语义打断"技术，可区分有意义的打断与背景噪音（如咳嗽不会中断回复），并内置实时网络搜索与语音克隆。模型已在 OpenRouter 上线供早期预览。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Alibaba_Qwen<span class="source-chip__links"><a href="https://x.com/Alibaba_Qwen/status/2038636335272194241" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 1">1</a><a href="https://x.com/Alibaba_Qwen/status/2038780221193863362" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 2">2</a></span></span></div>

## 2/16 微软 M365 Copilot 推出 Critique 与 Council：GPT 起草、Claude 审核的跨厂商协作研究系统
Satya Nadella 宣布 M365 Copilot Researcher 新增两项多模型能力。**Critique** 将生成与评审分离：GPT 负责规划、检索迭代和初稿撰写，Claude 负责从来源可靠性、完整性、证据扎实性三个维度对报告进行审核并优化输出，最终交付最高质量结果。选择"Auto"模式时默认启用 Critique。**Council** 则让 Anthropic 与 OpenAI 两家模型同时独立生成完整报告，第三方裁判模型再综合分析两份报告的异同、差异程度和独特贡献。DRACO 基准测试（100 项复杂研究任务，10 个领域）显示 Critique 相比 Perplexity Deep Research（Claude Opus 4.6）提升 +13.88%，整体综合得分提升 7.0 分，置信度 p < 0.0001。两项功能即日起对 M365 Copilot Frontier 计划用户正式上线。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@satyanadella<span class="source-chip__links"><a href="https://x.com/satyanadella/status/2038604619795042716" target="_blank" rel="noopener" aria-label="@satyanadella 原文 1">1</a><a href="https://x.com/satyanadella/status/2038677637644922943" target="_blank" rel="noopener" aria-label="@satyanadella 原文 2">2</a></span></span></div>

## 3/16 Replit Agent 4 发布：速度、多类型 Artifact、实时协作全面升级
Replit 发布 Agent 4，定位为"最快、最多功能"的 Agent 版本。核心亮点：Design Canvas 扩展到所有 Artifact 类型（移动应用、网页应用、落地页、演示文稿、视频等），可在同一项目内共享上下文；支持实时多人协作而无需 Fork；规划与构建并行，不再互相阻塞。该版本重新设计了底层架构，使开发者可同时处理认证、数据库、后端与前端设计，将创意流程中断降至最低。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Replit<span class="source-chip__links"><a href="https://x.com/Replit/status/2038738072758518224" target="_blank" rel="noopener" aria-label="@Replit 原文 1">1</a><a href="https://x.com/Replit/status/2038684380948762662" target="_blank" rel="noopener" aria-label="@Replit 原文 2">2</a></span></span></div>

## 4/16 Transformers.js v4 发布：WebGPU 后端、C++ 重写、性能大幅提升
Hugging Face 发布 Transformers.js v4，历经一年重构（2025.3–2026.2）。核心变化：与 ONNX Runtime 团队合作完成 C++ 重写，引入 WebGPU 后端，可在浏览器、Node.js、Bun、Deno 中运行。性能提升显著：BERT 类模型约 4 倍加速，构建时间从 2 秒降至 200ms，包体积缩小约 53%，支持运行 8B+ 参数量模型（GPT-OSS 20B 约 60 tokens/sec）。同时发布独立的 `@huggingface/tokenizers` 轻量库（8.8kB gzipped，零依赖）。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/huggingface/status/2038635587217830301" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface</a></div>

## 5/16 llama.cpp 达到 10 万 Star 里程碑
开源本地 AI 推理引擎 llama.cpp 在 GitHub 达到 100,000 Star。创始人 @ggerganov 表示，随着全球代码中 90% 由 AI Agent 编写，预测 3-6 个月内 llama.cpp 本身也将主要由 AI 完成维护与改进。Clement Delangue（Hugging Face CEO）专程致敬，称 ggerganov 为"AI 领域被低估的英雄"，并透露 ggerganov 和 ggml.org 团队已加入 Hugging Face。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/huggingface/status/2038643704349471218" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface</a><a class="source-chip" href="https://x.com/ClementDelangue/status/2038752860192518294" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue</a></div>

## 6/16 Qwen3.5-27B 在 HuggingFace 连续 3 周蝉联 #1 热门
经 Claude-4.6-Opus 蒸馏数据微调的 Qwen3.5-27B 在 Hugging Face 热门榜连续三周稳居第一位。该模型被描述为"具有强推理和代理能力"，在 MMLU 等基准上击败体量 6 倍以上的模型，并在 Gemini Deep Think 和 DeepSeek 同级别对比中持平。其 4-bit 量化版本可在 24GB 显存 GPU 上运行，吸引大量本地部署用户关注。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface<span class="source-chip__links"><a href="https://x.com/huggingface/status/2038643506013458845" target="_blank" rel="noopener" aria-label="@huggingface 原文 1">1</a><a href="https://x.com/huggingface/status/2038651085326307645" target="_blank" rel="noopener" aria-label="@huggingface 原文 2">2</a></span></span></div>

## 7/16 Jensen Huang 确认出席 LangChain Interrupt 大会（5 月 13-14 日）
NVIDIA CEO Jensen Huang 确认将出席 LangChain 主办的 Interrupt 大会（5 月 13-14 日，旧金山），与 LangChain 创始人 Harrison Chase 进行炉边对话，聚焦"企业 Agent 的未来方向"。LangChain 创始人表示此次对话将探讨 NVIDIA 开源模型与工具链推动 Agent 领域的最新进展。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/NVIDIAAI/status/2038698951046480209" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI</a><a class="source-chip" href="https://x.com/hwchase17/status/2038663930923647190" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17</a></div>

## 8/16 ARC-AGI-3 发布：目前 AI 得分为零的新基准
ARC Prize 发布 ARC-AGI-3，定位为"全球唯一尚未被 AI 攻克的基准"，专门测试 Agent 智能与流体智能。当前所有 AI 系统在 ARC-AGI-3 上的得分均为零。该系列 2026 奖池超过 200 万美元。Ethan Mollick 指出，ARC-AGI 系列历史上每次发布后约 1-2 年内均被 AI 基本饱和，可持续观察 ARC-AGI-3 的进展趋势。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/emollick/status/2038680759305691586" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a></div>

## 9/16 Abacus CoWork：Claude Opus + GPT 5.4 + Gemini 三模型协作产品
Abacus AI CEO @bindureddy 宣布推出 CoWork 多模型产品，支持同时调用 Claude Opus 4.6、GPT 5.4 和 Gemini，融合各模型的代码能力与推理能力。功能包括"低功耗模式"优化效率，以及 Computer Use 进行测试，面向专业开发者群体。这一产品与微软 Council 逻辑类似，均在探索多模型协作的实用价值。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/bindureddy/status/2038722545642611124" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a></div>

## 10/16 MCP 正在走向衰退？行业开始回归 OAuth 和标准 API
Abacus CEO @bindureddy 发出争议性预判："MCP 正在死亡，我们正在回归 OAuth 和 API"。他的理由是：MCP 服务器不稳定、功能受限、鉴权处理薄弱，整体上 LLM 处理第三方系统连接和操作仍然困难。该观点引发争议，部分开发者认为 MCP 仍处于早期阶段，正在快速迭代。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/bindureddy/status/2038442206894416312" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a></div>

## 11/16 Ethan Mollick：美国 AI 用户平均每周节省 2.5 小时工作时间
根据最新研究数据，使用 AI 的美国工作者平均报告节省 6% 的工作时间，约合每周 2.5 小时，与英国、荷兰持平，略高于其他欧盟国家。Mollick 指出，这些数据还未反映 Claude Code 等实用 Agent 工具的影响，且企业仍处于摸索 AI 工作流整合的早期阶段。当前由于 Agent 驱动 token 需求激增，算力仍处于供给约束状态。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2038654608642294206" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2038629127712878725" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a></span></span></div>

## 12/16 美国民调：65% 反对在社区建设 AI 数据中心
Quinnipiac 最新民调显示，美国人对于在其社区建设 AI 数据中心持反对态度，比例为 65:24。Gary Marcus 转发关注此议题，认为这是 AI 基础设施扩张中值得重视的社会阻力信号。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/GaryMarcus/status/2038663042037395650" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GaryMarcus</a></div>

## 13/16 Cohere Transcribe：新 SOTA 开源语音识别模型上线
Cohere 发布 Transcribe，声称在真实世界条件下（含噪音、口音等）达到语音识别 SOTA 精度。模型权重已上传 Hugging Face，并支持在浏览器端运行。是近期语音领域少有的开源高精度产品发布。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/huggingface/status/2038610981534806107" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface</a></div>

## 14/16 SakanaAI "Namazu" 命名争议：向历史开源项目道歉
日本 AI 公司 SakanaAI 就其新 LLM 系列命名"Namazu"发表声明道歉。Namazu（なまず）是 1990-2000 年代广泛使用的日语全文检索系统，在日本技术社区影响深远。SakanaAI 表示虽进行了商标法律确认，但未充分调研历史背景，决定更名以示尊重。SakanaAI 惯例以鱼类相关日语词汇命名项目，此次命名疏忽引发社区讨论。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/SakanaAILabs/status/2038531545758396710" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs</a></div>

## 15/16 Redpoint：46% 企业 CIO 愿以 AI 原生初创取代 SaaS 老牌厂商
@swyx 分享 Redpoint 报告：46% 的企业 CIO 表示对 AI 原生初创公司持开放态度，愿意以其替代现有 SaaS 厂商。报告同时列出了"最值得被 AI 原生重写的 SaaS 类别"排行榜，显示市场对 AI-first 产品的认可度正在快速提升。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/swyx/status/2038431061575979027" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@swyx</a></div>

## 16/16 PokeeClaw：OpenClaw 的沙箱安全版本
François Chollet 介绍了 Pokee AI 团队推出的 PokeeClaw——针对 OpenClaw（本地 AI 助手）的安全增强版本，解决其核心安全风险问题。PokeeClaw 引入沙箱隔离架构、操作审批工作流和基于角色的访问控制，保留 OpenClaw 的交互体验同时大幅提升企业级安全性。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/fchollet/status/2038662563228230127" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet</a></div>

---

## Deep Dive 附录

### Microsoft M365 Copilot：Critique 与 Council 多模型研究系统
微软在 M365 Copilot Researcher 中推出两项多模型能力。Critique 采用生成-审核双模型架构，评估维度包括来源可靠性、报告完整性与证据扎实性，DRACO 基准测试（100 项复杂研究任务、10 个领域）显示整体提升 +7.0 分（±1.90），超越 Perplexity Deep Research（Claude Opus 4.6）达 +13.88%。Council 则并行调用 Anthropic 与 OpenAI 两家模型各自独立生成报告，再由裁判模型汇总分析异同。Critique 已作为"Auto"模式下的默认选项上线。
[查看原文](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/introducing-multi-model-intelligence-in-researcher/4506011)

### Transformers.js v4：面向 Web 的新一代 AI 推理引擎
历经一年重构，Transformers.js v4 带来历史最大版本更新。与 ONNX Runtime 团队合作以 C++ 重写核心，引入 WebGPU 后端，在浏览器、Node.js、Bun、Deno 全平台提供硬件加速推理。关键指标：BERT 类模型 ~4x 加速，构建时间 2s→200ms，包体积减少 53%，GPT-OSS 20B 在支持 WebGPU 的浏览器中约 60 tokens/sec。同步推出独立轻量级 `@huggingface/tokenizers` 库（8.8kB，零依赖），并重构为 PNPM monorepo 结构。
[查看原文](https://huggingface.co/blog/transformersjs-v4)

### Replit Agent 4：重新定义创意编码流程
Agent 4 是 Replit 今年最重大产品更新，围绕"保持创意心流"重新设计架构。Design Canvas 扩展至所有 Artifact 类型，支持移动应用、网页应用、落地页、演示文稿、视频在同一项目内统一管理，上下文完全共享。实时多人协作无需 Fork。规划（Planning）与构建（Build）解耦并行，开发者可在 Agent 执行任务的同时继续规划下一步。该版本可同时处理认证、数据库、后端、前端设计等多个维度。
[查看原文](https://blog.replit.com/introducing-agent-4-built-for-creativity)
