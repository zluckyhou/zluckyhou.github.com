---
layout: daily
title: "AI Frontier Daily | 2026.07.14"
headline: "Anthropic 用价值轴追踪 Claude 在模型和语言间的行为差异"
date: 2026-07-14 09:07:00 +0800
permalink: /ai-daily/2026/07/14/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Anthropic 发布新研究，分析 300K+ 匿名真实对话，比较 Claude 在不同模型和语言中的 expressed values。研究把此前识别出的 3,000 多种价值压缩成 Deference/Caution、Warmth/Rigor、Depth/Brevity、Candor/Execution 等轴，并发现语言差异在 Warmth vs. Rigor 上最明显。该工作把“模型性格”和跨语言行为从主观感受转成可评估对象，也为发布前评估、上线后监控和未来 steer model values 提供方法。"
summary: "Anthropic 发布新研究，分析 300K+ 匿名真实对话，比较 Claude 在不同模型和语言中的 expressed values。研究把此前识别出的 3,000 多种价值压缩成 Deference/Caution、Warmth/Rigor、Depth/Brevity、Candor/Execution 等轴，并发现语言差异在 Warmth vs. Rigor 上最明显。该工作把“模型性格”和跨语言行为从主观感受转成可评估对象，也为发布前评估、上线后监控和未来 steer model values 提供方法。"
issue_count: 14
deep_dive_count: 7
reading_time: 17
cover: "https://sakana.ai/assets/home/sakana_rect.png"
signals: "AnthropicAI · SakanaAILabs · ClementDelangue · huggingface · NVIDIAAI · AlphaSignalAI · drfeifei · GoogleDeepMind"
header-img: img/dark_yellow_400.png
---


## 1/14 Anthropic 用价值轴追踪 Claude 在模型和语言间的行为差异
Anthropic 发布新研究，分析 300K+ 匿名真实对话，比较 Claude 在不同模型和语言中的 expressed values。研究把此前识别出的 3,000 多种价值压缩成 Deference/Caution、Warmth/Rigor、Depth/Brevity、Candor/Execution 等轴，并发现语言差异在 Warmth vs. Rigor 上最明显。该工作把“模型性格”和跨语言行为从主观感受转成可评估对象，也为发布前评估、上线后监控和未来 steer model values 提供方法。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI<span class="source-chip__links"><a href="https://x.com/AnthropicAI/status/2076719540785012872" target="_blank" rel="noopener" aria-label="@AnthropicAI 原文 1">1</a><a href="https://x.com/AnthropicAI/status/2076719542404018631" target="_blank" rel="noopener" aria-label="@AnthropicAI 原文 2">2</a><a href="https://x.com/AnthropicAI/status/2076719546954825769" target="_blank" rel="noopener" aria-label="@AnthropicAI 原文 3">3</a></span></span></div>

## 2/14 Sakana 把 collective intelligence 做进物理模块
Sakana AI 宣布 Smart Cellular Bricks 研究发表于 Nature Communications。项目由 Sakana、IT University of Copenhagen 和 Autodesk 合作，用只和邻居通信的简单立方模块组成 3D 结构；每块砖运行同一个小神经网络，不知道自身位置，也没有中央控制器，却能通过局部交互识别整体形状、定位缺失或损坏模块，并给出自修复信号。这把 Sakana 的 collective intelligence 方向从软件模拟推向 embodied physical systems。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/SakanaAILabs/status/2076597965804765283" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs</a></div>

## 3/14 Hugging Face 与 vLLM 缩短开源模型从研究到生产的路径
Clement Delangue 称 Hugging Face Transformers 模型现在可在 vLLM 中以 native speed 运行，通常能匹配或超过手写实现。过去新架构往往需要在 Transformers 中为训练和研究实现一次，再为 vLLM 生产推理重写一次；新 backend 让一个模型定义覆盖训练、微调、评估、RL rollout 和生产服务。对开源生态来说，这降低了模型架构进入高吞吐推理栈的维护成本，也减少实现分叉带来的性能和一致性问题。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/ClementDelangue/status/2076763231788339669" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue</a><a class="source-chip" href="https://x.com/huggingface/status/2076764295493243221" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface</a></div>

## 4/14 NVIDIA 把模型设计、GPU 性能和用户延迟放到同一张图上
NVIDIA 发布 AI Model Co-Design 系列首篇，强调模型 shaping 与模型 size 一样重要。文章把 AI 性能拆成 accuracy、throughput 和 interactivity 三个维度，讨论模型维度如何影响 GPU performance、系统吞吐和单用户响应。当天 AlphaSignal 同时提到 Puzzle-75B-A9B、harness cost 优化等论文，说明 frontier AI 的成本优势越来越来自模型结构、runtime、硬件和 agent harness 的共同设计，而不是单一 benchmark 分数。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/NVIDIAAI/status/2076803865366642805" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI</a><a class="source-chip" href="https://x.com/AlphaSignalAI/status/2076724910005596220" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI</a></div>

## 5/14 Stanford BEHAVIOR Challenge 把机器人评测扩到 100 个长时程家务任务
Fei-Fei Li 宣布 BEHAVIOR Challenge 第二年回归，并指出去年获胜方案完整任务成功率只有 12.4%。2026 版把 benchmark 从 50 个扩展到 100 个 household tasks，平均约 6 分钟，需要导航、规划、记忆、双臂协调、物体状态变化和失败恢复；数据集包含 20,000 条 human teleoperation demos、1,950 小时数据，并支持 pi0.5、GR00T N1.7 等 baseline。它把 embodied AI 的真实瓶颈暴露得比短任务评测更直接。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@drfeifei<span class="source-chip__links"><a href="https://x.com/drfeifei/status/2076729080679186849" target="_blank" rel="noopener" aria-label="@drfeifei 原文 1">1</a><a href="https://x.com/drfeifei/status/2076729381909926172" target="_blank" rel="noopener" aria-label="@drfeifei 原文 2">2</a><a href="https://x.com/drfeifei/status/2076729734545960995" target="_blank" rel="noopener" aria-label="@drfeifei 原文 3">3</a></span></span></div>

## 6/14 Google DeepMind 用 Antigravity Skill 把古代文本研究变成自然语言工作流
Google DeepMind 展示 Predicting the Past Skill for Google Antigravity，用 Aeneas、Ithaca 等专门模型辅助历史学家分析古代铭文和文本集合。线程包括三个案例：定位 Aquae Sulis curse tablet 的时间地点，追踪 Aufaniae 崇拜随罗马士兵传播，以及重建 Dodona oracle 访问者网络。它代表 agent 产品的一条重要路线：把通用 Gemini 接到领域模型、数据集和可解释流程上，让专家用自然语言操作复杂科研工作流。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GoogleDeepMind<span class="source-chip__links"><a href="https://x.com/GoogleDeepMind/status/2076686114631340046" target="_blank" rel="noopener" aria-label="@GoogleDeepMind 原文 1">1</a><a href="https://x.com/GoogleDeepMind/status/2076686118129389732" target="_blank" rel="noopener" aria-label="@GoogleDeepMind 原文 2">2</a><a href="https://x.com/GoogleDeepMind/status/2076686125289071074" target="_blank" rel="noopener" aria-label="@GoogleDeepMind 原文 3">3</a></span></span></div>

## 7/14 OpenAI 的 GPT-5.6 讨论集中到 Work、Sites、GPT-Live 和 computer use
Greg Brockman 连续展示 ChatGPT Work、ChatGPT Sites、GPT-Live、Sol web design、debugging laptop power issues 和 Sol Ultra 解 Erdős problem 等使用场景；Sam Altman也强调模型设计能力进步。OpenAI 官方账号当天补充 ChatGPT 在 EEA 重新可用于 WhatsApp。结合 OpenAI GPT-5.6 发布材料，当前叙事重点不是单个聊天模型，而是把 coding、knowledge work、browser/computer use、voice 和 shareable artifacts 合成一个工作入口。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb<span class="source-chip__links"><a href="https://x.com/gdb/status/2076518764112445861" target="_blank" rel="noopener" aria-label="@gdb 原文 1">1</a><a href="https://x.com/gdb/status/2076723486723371325" target="_blank" rel="noopener" aria-label="@gdb 原文 2">2</a><a href="https://x.com/gdb/status/2076797035945308364" target="_blank" rel="noopener" aria-label="@gdb 原文 3">3</a><a href="https://x.com/gdb/status/2076788812072820885" target="_blank" rel="noopener" aria-label="@gdb 原文 4">4</a></span></span><a class="source-chip" href="https://x.com/OpenAI/status/2076663498709536930" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a></div>

## 8/14 Grok 4.5 与低成本模型竞争继续压迫 API 利润叙事
Elon Musk 转发 Grok 4.5 在 SWE-Atlas-QnA 和视频 studio evals 上表现提升的讨论，并称 Grok agents 可在 background mode 使用；Bindu Reddy 则认为 Grok 4.5 已能替代 Haiku 类模型，成本相近但质量更好，同时称大云厂商会因 Anthropic 和 OpenAI 的高毛利 API 压力而转向便宜高性能模型。当天模型竞争的焦点从“谁最强”扩展到“谁能在真实 agent 工作中以足够低成本替代现有层级”。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@elonmusk<span class="source-chip__links"><a href="https://x.com/elonmusk/status/2076538528041677013" target="_blank" rel="noopener" aria-label="@elonmusk 原文 1">1</a><a href="https://x.com/elonmusk/status/2076563677319209094" target="_blank" rel="noopener" aria-label="@elonmusk 原文 2">2</a></span></span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy<span class="source-chip__links"><a href="https://x.com/bindureddy/status/2076720426089369678" target="_blank" rel="noopener" aria-label="@bindureddy 原文 1">1</a><a href="https://x.com/bindureddy/status/2076673529572147229" target="_blank" rel="noopener" aria-label="@bindureddy 原文 2">2</a></span></span></div>

## 9/14 Agentic Coding Environment 被视为 IDE 之后的新工作层
Logan Kilpatrick 称 Agentic Coding Environment 是 IDE 的自然继任者，并提醒组织约每 3 个月就需要提高 ambition，否则会放弃模型能力 overhang。swyx 也写到大型项目中用 Sol Ultra 规划、Fable 5 critique、Sonnet/Terra/SWE 模型执行、Devin review 等多模型组合。coding agent 的核心正在从单模型能力转为环境、计划、审查、模型路由和决策前访谈等完整工作系统。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OfficialLoganK<span class="source-chip__links"><a href="https://x.com/OfficialLoganK/status/2076750790031782155" target="_blank" rel="noopener" aria-label="@OfficialLoganK 原文 1">1</a><a href="https://x.com/OfficialLoganK/status/2076834244291363178" target="_blank" rel="noopener" aria-label="@OfficialLoganK 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/swyx/status/2076811977918484795" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@swyx</a></div>

## 10/14 Meta memory agent 论文把长任务失败定义为 behavioral state decay
AlphaSignal 总结 Meta AI 新论文：long-horizon agents 不是没有事实，而是任务需求、失败命令、诊断和 open subgoals 被埋在轨迹里后停止影响行为。论文提出独立 memory agent，与 action agent 并行更新 structured memory bank，并选择何时注入 reminder 或保持沉默。结果在 Terminal-Bench 和 tau2-Bench 上带来 pass@1 增益。这个方向说明 agent 可靠性不只是更大模型，也依赖何时把正确上下文重新推到执行模型面前。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2076682836719923456" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2076682851940966817" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a><a href="https://x.com/AlphaSignalAI/status/2076682858895233184" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 3">3</a></span></span></div>

## 11/14 Riley Goodside 的实验继续暴露 reasoning model 的边界
Riley Goodside 测试 Claude Fable 5 Max 用 KJV bigram 生成自我介绍、制作 150 个 Pokémon 的 crossword，再让 ChatGPT 5.6 Sol Pro 在无编号 clues 的情况下解出该 puzzle。他还指出 LLM 对自己 thinking 需要多少时间缺少直觉，Claude Fable 5 Max 也可能在要求“思考一小时”的提示下只思考不到两分钟后承认没有做到。这些实验展示了新模型在搜索、约束满足和自我监控上的能力提升，也提醒 reasoning summary 与真实计算时间仍需谨慎解释。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@goodside<span class="source-chip__links"><a href="https://x.com/goodside/status/2076666938957156852" target="_blank" rel="noopener" aria-label="@goodside 原文 1">1</a><a href="https://x.com/goodside/status/2076699061449568583" target="_blank" rel="noopener" aria-label="@goodside 原文 2">2</a><a href="https://x.com/goodside/status/2076779839638347933" target="_blank" rel="noopener" aria-label="@goodside 原文 3">3</a></span></span></div>

## 12/14 Morpheus benchmark 要求 RL 面对永不重置的企业模拟环境
François Chollet 转发 Morpheus，称标准 RL benchmark 通常是 episodic、stationary，无法反映真实部署。Morpheus 提供 persistent simulation environments：世界不会重置，目标异步变化，过去决策产生复合后果。它把 continual learning、non-stationarity 和 operational complexity 放到同一评测中，针对的是企业级长期运行策略，而不是一次性任务得分。该方向与 agent memory 和 harness 讨论共同指向长期系统的评测缺口。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/fchollet/status/2076719958189613307" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet</a></div>

## 13/14 AI 对工作的影响讨论从观点声明转向数据需求
Ethan Mollick 表示，理解 AI 对工作的影响对政策很关键，数据是行动前提；他同时批评 AI 公司没有清楚解释当前模型在 Code/Codex 等环境中配合正确设置能完成多少有用工作。当天他还提到 full multimodal any-any models 没有成为更大议题，认为 Google 是少数持续发布这类能力的 lab。整体看，AI work 讨论正在从“会不会替代工作”转向“如何测量实际影响、如何解释系统能力、哪些多模态能力还未产品化”。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2076690493363077248" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2076502712062017758" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a><a href="https://x.com/emollick/status/2076772061427401162" target="_blank" rel="noopener" aria-label="@emollick 原文 3">3</a></span></span></div>

## 14/14 生成式内容产品继续从模型演示走向可发行作品
Runway 发布 FLICKER 短片，讲述一盏旧台灯的故事，并引导用户用 Runway 创建自己的 narrative video；LlamaIndex 则展示 Tauri + Rust + LiteParse 的跨平台 PDF-to-Markdown desktop app，可拖拽 PDF、预览页面截图和 bounding boxes，再把干净 Markdown 交给 AI agent。两者代表生成式产品的两个方向：一边是可发行、可预订的 AI-assisted storytelling，另一边是把文档解析做成给 agent 使用的本地工具。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml<span class="source-chip__links"><a href="https://x.com/runwayml/status/2076679161070891218" target="_blank" rel="noopener" aria-label="@runwayml 原文 1">1</a><a href="https://x.com/runwayml/status/2076745723475898813" target="_blank" rel="noopener" aria-label="@runwayml 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/llama_index/status/2076700217210966048" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@llama_index</a></div>

---

## Deep Dive 附录

### Anthropic: Claude values across models and languages
Anthropic 把真实对话中 Claude 表达的 3,000 多种价值压缩成少数可解释轴，用来比较模型版本和语言之间的行为差异。研究发现，不同模型在这些轴上有不同位置，语言也会影响表达取向，尤其是 Warmth vs. Rigor。它的重要性在于把跨语言体验、character training 影响和部署后监控转化为可量化对象，但 Anthropic 也明确表示还不知道这些差异对用户结果意味着什么。
[查看原文](https://www.anthropic.com/research/claude-values-models-languages)

### Sakana AI: Smart Cellular Bricks
Sakana 的 Smart Cellular Bricks 用简单物理模块验证 decentralized collective intelligence。每个模块只运行相同神经网络并与邻居通信，却能共同识别 3D 形状、定位损坏并支持修复信号。该研究连接 Neural Cellular Automata、self-repair 和 smart materials，提示未来机器人或建筑材料可能把感知和适应能力嵌入基本构件，而不是依赖中央控制。
[查看原文](https://sakana.ai/smart-cellular-bricks/)

### Hugging Face: native-speed vLLM Transformers backend
Hugging Face 的新 backend 让 Transformers 模型定义可以直接进入 vLLM，并通过运行时推理层融合接近手写 vLLM 实现速度。它减少了新架构在训练实现和推理实现之间重复开发的问题，也让开源模型更快进入生产服务。对 agent 和 RL rollout 场景来说，统一模型定义和高吞吐推理会直接影响成本、迭代速度和生态兼容性。
[查看原文](https://huggingface.co/blog/native-speed-vllm-transformers-backend)

### NVIDIA: AI Model Co-Design
NVIDIA 的 model co-design 文章把 AI performance 分为 accuracy、throughput 和 interactivity，并强调模型设计需要与 GPU 硬件、并行策略、量化和服务模式共同优化。它提示 frontier AI 的生产竞争已进入系统工程阶段：模型结构、运行时、硬件 tile、memory bandwidth 和用户延迟共同决定产品可用性与成本。
[查看原文](https://developer.nvidia.com/blog/ai-model-co-design-hardware-friendly-llm-design/)

### Google DeepMind: Predicting the Past Skill
Predicting the Past Skill 把 Aeneas、Ithaca 等 ancient text 专门模型接入 Google Antigravity，让历史学家用自然语言完成铭文恢复、归因、网络分析和解释生成。该案例显示领域 agent 的价值可能来自通用模型与专门模型、数据集、可解释工作流的组合，而不是让通用模型独立猜测。
[查看原文](https://deepmind.google/science/workflows/conversing-with-antiquity/)

### Stanford BEHAVIOR Challenge 2026
BEHAVIOR Challenge 2026 将家庭机器人评测扩展到 100 个长时程任务，并采用 onboard RGB、depth、proprioception 等 observation 限制。任务覆盖导航、双臂操作、物体状态变化和失败恢复，旨在统一测试 robot foundation models、imitation/RL、memory、SLAM 和 LLM-assisted policies。去年最佳完整成功率仅 12.4%，显示 embodied AI 离真实家务仍有明显距离。
[查看原文](https://behavior.stanford.edu/challenge/index.html)

### Meta: Proactive Memory Agent
Meta 的 Proactive Memory Agent 论文把长任务中“事实还在但不再影响行为”的现象命名为 behavioral state decay。解决方案是让独立 memory agent 维护 structured memory bank，并选择何时给 action agent 注入提醒或保持沉默。在 Terminal-Bench 2.0 和 tau2-Bench 上，该机制带来 pass@1 增益，说明 agent 可靠性很大一部分来自记忆和 harness 的主动干预设计。
[查看原文](https://arxiv.org/abs/2607.08716)
