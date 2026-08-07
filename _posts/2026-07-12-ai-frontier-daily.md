---
layout: daily
title: "AI Frontier Daily | 2026.07.12"
headline: "Databricks 推 Omnigent，把多 agent 编排做成 meta-harness"
date: 2026-07-12 09:07:00 +0800
permalink: /ai-daily/2026/07/12/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Databricks 介绍 Omnigent，称它是一个开源 meta-harness，位于单个 agent harness 之上，用统一编排层把多个 agent、模型和工作流组合起来。官方重点不是单个 agent 能完成什么，而是企业如何在多 agent 场景下做任务路由、共享治理、协作和可控执行。相关转发还提到 Omnigent 0.5.0 支持 iOS、generic ACP harness 等更新。这条线说明 enterprise agent 的重点继续从 demo 转向 orchestration、policy、mobile access 和生产协同。"
summary: "Databricks 介绍 Omnigent，称它是一个开源 meta-harness，位于单个 agent harness 之上，用统一编排层把多个 agent、模型和工作流组合起来。官方重点不是单个 agent 能完成什么，而是企业如何在多 agent 场景下做任务路由、共享治理、协作和可控执行。相关转发还提到 Omnigent 0.5.0 支持 iOS、generic ACP harness 等更新。这条线说明 enterprise agent 的重点继续从 demo 转向 orchestration、policy、mobile access 和生产协同。"
issue_count: 12
deep_dive_count: 5
reading_time: 15
cover: "https://www.databricks.com/sites/default/files/2026-06/omnigent-og.png"
signals: "databricks · SakanaAILabs · hardmaru · cohere · LinusEkenstam · emollick · gdb · goodside"
header-img: img/dark_yellow_400.png
---


## 1/12 Databricks 推 Omnigent，把多 agent 编排做成 meta-harness
Databricks 介绍 Omnigent，称它是一个开源 meta-harness，位于单个 agent harness 之上，用统一编排层把多个 agent、模型和工作流组合起来。官方重点不是单个 agent 能完成什么，而是企业如何在多 agent 场景下做任务路由、共享治理、协作和可控执行。相关转发还提到 Omnigent 0.5.0 支持 iOS、generic ACP harness 等更新。这条线说明 enterprise agent 的重点继续从 demo 转向 orchestration、policy、mobile access 和生产协同。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks<span class="source-chip__links"><a href="https://x.com/databricks/status/2075971153118519677" target="_blank" rel="noopener" aria-label="@databricks 原文 1">1</a><a href="https://x.com/databricks/status/2075815424407531683" target="_blank" rel="noopener" aria-label="@databricks 原文 2">2</a></span></span></div>

## 2/12 Sakana 用 AI agents 重做 Picbreeder 开放式进化实验
Sakana AI 展示了对 2008 年 Picbreeder 实验的 agentic 复刻：用 VLM agents 生成和繁殖 CPPN images，并把结果放进一个可以浏览、分支、评分和检查的站点。Kenneth Stanley 和 MLStreetTalk 等账号也转发讨论，强调它是对 Picbreeder 思想的现代 homage。这个项目的价值不只是生成图片，而是把 open-ended search、进化式设计空间探索和视觉模型代理结合起来，让模型在不断变异和选择中探索非预设目标。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs<span class="source-chip__links"><a href="https://x.com/SakanaAILabs/status/2076114980429312456" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 1">1</a><a href="https://x.com/SakanaAILabs/status/2076107308808175833" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/hardmaru/status/2076107255561515337" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a></div>

## 3/12 Cohere、NVIDIA、CoreWeave 把企业 AI 叙事拉向安全基础设施
Cohere 发文称，与 NVIDIA 和 CoreWeave 的合作重点是让企业在采用 AI 时获得可靠性、信心和受保护的基础设施。推文没有把亮点放在单一模型分数，而是强调 trust and security 对大型企业一直关键，并且在 AI advances 后更加重要。这个信号与近期 enterprise agent 叙事一致：客户购买的不只是模型能力，还包括 GPU 云、训练和推理可靠性、安全边界、合规承诺以及能否支撑生产级 agentic workload。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cohere/status/2075957760890413066" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cohere</a></div>

## 4/12 Seedream 5.0 Pro 展示可控图像编辑和广告级工作流
Linus Ekenstam 展示 Seedream 5.0 Pro，称用户可以上传参考图、粘贴详细 prompt，在 Lumina 或 BytePlus API 路径中做高可控编辑。线程示例包括街头广告海报、角色全身照、手绘标注后按指令改图、角色 sheet、复杂说明图和文字渲染。重点不是一次性出图，而是模型是否能接受参考、约束、标注和布局指令，成为 art director 可迭代控制的视觉生产工具。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LinusEkenstam<span class="source-chip__links"><a href="https://x.com/LinusEkenstam/status/2076273526852739219" target="_blank" rel="noopener" aria-label="@LinusEkenstam 原文 1">1</a><a href="https://x.com/LinusEkenstam/status/2076273553964687462" target="_blank" rel="noopener" aria-label="@LinusEkenstam 原文 2">2</a><a href="https://x.com/LinusEkenstam/status/2076273586130792905" target="_blank" rel="noopener" aria-label="@LinusEkenstam 原文 3">3</a><a href="https://x.com/LinusEkenstam/status/2076273779698000264" target="_blank" rel="noopener" aria-label="@LinusEkenstam 原文 4">4</a></span></span></div>

## 5/12 GPT-5.6 Sol 被用于长时游戏和复杂推理任务
Ethan Mollick 称自己让 GPT-5.6 Sol 在 Codex 中控制电脑，尝试完成 Slay the Spire 2 每日挑战，模型工作约 5 小时后获胜。他补充说明挑战包含随机规则、资源管理和长期策略，游戏发布时间也在训练期之后。Greg Brockman 同日用一句话概括 Sol 面向 complex reasoning and data analysis。相关讨论把 frontier model 评估从短问答继续推向长时规划、工具使用、桌面控制和复杂环境中的策略执行。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2075950897029374334" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2075823098868142502" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a><a href="https://x.com/emollick/status/2075951781599653936" target="_blank" rel="noopener" aria-label="@emollick 原文 3">3</a></span></span><a class="source-chip" href="https://x.com/gdb/status/2075844434063978724" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a></div>

## 6/12 Sol 与 Fable 的视觉幻觉测试暴露 frontier model 边界
Riley Goodside 用闭眼随手画出的无意义 scribbles 测试 GPT-5.6 Sol 和 Claude Fable 5 的“手写识别”。他称 Sol 往往会给出幻觉答案，而 Fable 会承认无法读取，或指出图像不是文字。后续讨论强调，几年前 LLM 普遍幻觉，如今 frontier models 的幻觉少到需要 adversarial shenanigans 才显得有趣。这个案例把可靠性问题落在多模态输入、错误前提、指令服从和模型是否能主动拒答上。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@goodside<span class="source-chip__links"><a href="https://x.com/goodside/status/2076115391332372554" target="_blank" rel="noopener" aria-label="@goodside 原文 1">1</a><a href="https://x.com/goodside/status/2076187882834813310" target="_blank" rel="noopener" aria-label="@goodside 原文 2">2</a><a href="https://x.com/goodside/status/2076143243528470900" target="_blank" rel="noopener" aria-label="@goodside 原文 3">3</a></span></span></div>

## 7/12 Grok 4.5、Sonnet 5、GLM 5.2 被放进私有 coding benchmark
AlphaSignalAI 发布两组 coding agent 测试：一组用真实代码库 bug、隐藏测试和无互联网环境比较 Grok 4.5、Sonnet 5、GLM 5.2，称 Grok 4.5 和 Sonnet 5 都完成 9/9，GLM 5.2 完成 8/9；另一组要求四个 frontier models 构建 KV-cache debugger，称四者算术正确，但 GLM 5.2 有一个 preset 层数错导致 2.667x 偏差。Elon Musk 也转发 Grok 4.5 with Grok Build 与 Codex GPT-5.6 在 SWE-Atlas-QnA 并列第一的说法。coding agent 竞争正在转向私有测试、成本、速度和真实 bug 修复。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2075951172242842099" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2075983521722593558" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a><a href="https://x.com/AlphaSignalAI/status/2075983525291995147" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 3">3</a></span></span><a class="source-chip" href="https://x.com/elonmusk/status/2075929661725437983" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@elonmusk</a></div>

## 8/12 自定义 coding agent 开始走向多模型混编
Bindu Reddy 宣布一个自定义 coding agent 功能，允许用户混合 Fable 5、GPT-5.6 Sol、Grok 4.5 等模型，为不同任务配置模型组合，例如 hard coding、backend、frontend、easy coding 或低成本模式。她同日还称 Opus 4.8 仍是主要 driver model，Grok 4.5 可用于 low mode 但 hard tasks 成本高，GPT-5.6 Sol 在部分任务中会长时间 spinning。这个方向说明 coding agent 产品正在从“选一个最强模型”转向任务级模型路由、成本控制和用户自定义策略。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy<span class="source-chip__links"><a href="https://x.com/bindureddy/status/2076165296977858836" target="_blank" rel="noopener" aria-label="@bindureddy 原文 1">1</a><a href="https://x.com/bindureddy/status/2076079801065206023" target="_blank" rel="noopener" aria-label="@bindureddy 原文 2">2</a><a href="https://x.com/bindureddy/status/2075946401490669875" target="_blank" rel="noopener" aria-label="@bindureddy 原文 3">3</a></span></span></div>

## 9/12 LangSmith 把 deep agents、sandboxes 和 tracing 放进同一套生产栈
Harrison Chase 发文称 LangSmith 已覆盖 cloud sandboxes、deployments、多模型集成、deep agents、observability tracing 和 LangSmith engine。另一条关于 LLM Wiki 的帖子把 wiki 描述成可缓存、可链接、可扩展的知识结构，从单字符串记忆、文件记忆走向目录和超链接页面。两条放在一起看，agent 基础设施重点正在从模型调用转向运行环境、记忆组织、trace、部署、递归改进和团队知识管理。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17<span class="source-chip__links"><a href="https://x.com/hwchase17/status/2076086628221960685" target="_blank" rel="noopener" aria-label="@hwchase17 原文 1">1</a><a href="https://x.com/hwchase17/status/2076033612571725971" target="_blank" rel="noopener" aria-label="@hwchase17 原文 2">2</a><a href="https://x.com/hwchase17/status/2076124495937671429" target="_blank" rel="noopener" aria-label="@hwchase17 原文 3">3</a></span></span></div>

## 10/12 AI 对就业和软件需求的影响讨论更偏向“互补”而非单纯替代
Sam Altman 称目前为止 AI 似乎是 net job-creating，这与他曾预期在当前能力水平下会看到更多就业冲击不同。swyx 则从 Jevons paradox 角度讨论 agentic engineering：当 coding agents 提升单位劳动效率并扩展到其他知识工作，总需求可能上升而不是下降。François Chollet 也指出，强 AI code generation 现在更像高技能程序员的 power tool，而不是只提高低技能程序员下限。讨论焦点正在从“会不会替代程序员”转向技能互补、需求扩张和谁能更有效使用 agent。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/sama/status/2076036901824532530" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sama</a><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@swyx<span class="source-chip__links"><a href="https://x.com/swyx/status/2076155833428431012" target="_blank" rel="noopener" aria-label="@swyx 原文 1">1</a><a href="https://x.com/swyx/status/2076223478232211944" target="_blank" rel="noopener" aria-label="@swyx 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/fchollet/status/2076310779482317104" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet</a></div>

## 11/12 Grok 与 OpenAI 的公开竞争升温，模型价值被绑定到成本与立场
Elon Musk 多次围绕 Grok 发言，称 Grok 是最政治中立、客观寻真 AI，并表示 xAI 的 token efficiency 优于其他 AI model，未来仍有提升 inference per watt 的空间。Sam Altman 同日用 benchmark 和个人交锋回应，称很多 benchmark 显示 5.6 Sol 是当前最强模型。Bindu Reddy 也把 Sam 与 Elon 的交锋解读为 Grok 第一次真正挑战 OpenAI。争论虽然带有大量个人色彩，但底层竞争点是模型质量、推理成本、政治/安全定位和市场叙事。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@elonmusk<span class="source-chip__links"><a href="https://x.com/elonmusk/status/2076102201575969192" target="_blank" rel="noopener" aria-label="@elonmusk 原文 1">1</a><a href="https://x.com/elonmusk/status/2075925698863099950" target="_blank" rel="noopener" aria-label="@elonmusk 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/sama/status/2075983427019612242" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sama</a><a class="source-chip" href="https://x.com/bindureddy/status/2076051634157941004" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a></div>

## 12/12 Gemma Challenge、ICML 和本地 AI 讨论延续开放生态路线
NVIDIA AI 转发 Gemma Challenge 结果，称 6 天内有 100 多个 AI agents 和 humans 协作改进 Gemma；Together AI 则回顾团队在 ICML 提交 7 篇论文，并与 NVIDIA、Lyra Labs 举办关于 inference optimization、open-source models 和研究生产化的 fireside chat。swyx 也转发 Local AI Summit 的 panel。当天开放生态的共同主题不是单个模型发布，而是 agent/human collaboration、local AI、inference optimization、open-source models 和从研究走向生产的系统能力。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI<span class="source-chip__links"><a href="https://x.com/NVIDIAAI/status/2075978189818806698" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 1">1</a><a href="https://x.com/NVIDIAAI/status/2076107026602840138" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/togethercompute/status/2076090253979619606" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute</a><a class="source-chip" href="https://x.com/swyx/status/2076075663938007255" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@swyx</a></div>

---

## Deep Dive 附录

### Databricks Omnigent meta-harness
Omnigent 被定义为开源 meta-harness，目标是在多个 agent harness 之上提供统一编排和治理。它面向的问题是：当企业有多个模型、多个 agent、多个任务流时，单点 agent demo 很快会变成难以管理的孤岛。Omnigent 通过统一路由和共享控制层，让团队组合不同 agent、模型和工具，同时保留协作、策略和治理。Databricks 的表达把它放进 enterprise AI production 的语境里：agent 能力本身只是起点，实际落地还需要统一任务分发、跨 agent 协作、可控权限、部署入口和持续治理。
[查看原文](https://www.databricks.com/blog/introducing-omnigent-meta-harness-combine-control-and-share-your-agents)

### Cohere, NVIDIA and CoreWeave secure enterprise AI infrastructure
Cohere 将与 NVIDIA、CoreWeave 的合作定位为企业 AI 安全和可靠性基础设施。CoreWeave 案例强调 Cohere 的 North agentic AI for enterprise 需要高性能训练和推理基础设施，而企业客户同时关注可靠性、数据安全和部署信心。相比只发布模型指标，这类 partnership 更像完整商业化路径：模型公司提供企业模型和 agentic workflow，GPU 云提供算力和弹性，NVIDIA 提供加速生态，三者共同包装成可采购、可审计、可扩展的生产系统。
[查看原文](https://www.coreweave.com/resources/case-studies/cohere-accelerates-training-of-north-agentic-ai-for-enterprise)

### Sakana Picbreeder with AI agents
Sakana 的 Picbreeder homage 把早期 interactive evolutionary computation 放进 VLM-agent 时代。Picbreeder 原本依赖人类选择有趣图像并不断分支演化；Sakana 版本让 AI agents 参与生成和繁殖 CPPN images，并把结果展示成可浏览、可评分、可继续分支的站点。它展示的是 open-endedness：不是从固定 prompt 生成一个结果，而是在设计空间中保留分叉、偶然性和人/agent 共同选择。这个方向对自动化设计、creative search 和科学探索都有启发。
[查看原文](https://sakana.ai/picbreeder-ai/)

### Seedream 5.0 Pro controllable editing
Seedream 5.0 Pro 的线程重点在可控编辑，而不是单纯画质。示例包括用参考自拍生成广告海报、在图上手绘标注后让模型执行编辑、生成统一角色 sheet、组合图像并保持文字和细节。Linus Ekenstam 称它适用于 humans、items、animals，企业和开发者可通过 BytePlusGlobal API 使用，也可在 Lumina 中直接使用。它代表图像模型产品从“prompt 一张图”走向生产型 visual workflow：reference、annotation、layout、brand text、character consistency 和多轮修改成为核心能力。
[查看原文](https://x.com/LinusEkenstam/status/2076273526852739219)

### Coding agent private benchmarks and KV-cache debugger tests
AlphaSignalAI 的两组测试都指向同一个趋势：coding model 评估正在离开单一公开 leaderboard。第一组私有 benchmark 使用真实代码库 bug、隐藏测试、三档难度和无互联网条件，比较 Grok 4.5、Sonnet 5、GLM 5.2 的通过率、速度和成本。第二组 KV-cache debugger 任务要求模型处理 exact formulas，并检查 presets 是否隐藏错误；GLM 5.2 被指出在一个 preset 中使用了错误层数，导致 2.667x 偏差。对企业使用者来说，结论不是“谁永远最强”，而是要同时看 hidden tests、成本、可控性、开源权重、速度和错误类型。
[查看原文](https://x.com/AlphaSignalAI/status/2075951172242842099)
[查看原文](https://x.com/AlphaSignalAI/status/2075983521722593558)
