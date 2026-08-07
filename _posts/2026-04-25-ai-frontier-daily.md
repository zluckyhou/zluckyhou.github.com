---
layout: daily
title: "AI Frontier Daily | 2026.04.25"
headline: "GPT-5.5 API 开放，模型从发布周进入工具链扩散期"
date: 2026-04-25 09:07:00 +0800
permalink: /ai-daily/2026/04/25/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "OpenAI 更新 GPT-5.5 发布页并开放 GPT-5.5 与 GPT-5.5 Pro API。Sam Altman 与 Greg Brockman 同步确认 API 已上线，OpenAI 官方称 GPT-5.5 是面向真实工作的下一类智能，强项集中在 agentic coding、computer use、知识工作与长链路任务执行。官方定价为 GPT-5.5 每百万输入 5 美元、输出 30 美元，Pro API 为每百万输入 30 美元、输出 180 美元；GPT-5.5 在 Terminal-Bench 2.0 达 82.7%、SWE-Bench Pro 58.6%、OSWorld-Verified 78.7%。今日推文显示模型已从单点发布转向生态铺开。"
summary: "OpenAI 更新 GPT-5.5 发布页并开放 GPT-5.5 与 GPT-5.5 Pro API。Sam Altman 与 Greg Brockman 同步确认 API 已上线，OpenAI 官方称 GPT-5.5 是面向真实工作的下一类智能，强项集中在 agentic coding、computer use、知识工作与长链路任务执行。官方定价为 GPT-5.5 每百万输入 5 美元、输出 30 美元，Pro API 为每百万输入 30 美元、输出 180 美元；GPT-5.5 在 Terminal-Bench 2.0 达 82.7%、SWE-Bench Pro 58.6%、OSWorld-Verified 78.7%。今日推文显示模型已从单点发布转向生态铺开。"
issue_count: 15
deep_dive_count: 5
reading_time: 18
cover: "https://images.ctfassets.net/kftzwdyauwt9/5A8f5mO7aKrwLH5ClDV0si/e49a0a3c56f63d9998dd338ce16d0dd6/Blog1.png?fm=webp&q=90&w=3840"
signals: "OpenAI · sama · gdb · cursor_ai · windsurf · perplexity_ai · databricks · satyanadella"
header-img: img/dark_yellow_400.png
---


## 1/15 GPT-5.5 API 开放，模型从发布周进入工具链扩散期
OpenAI 更新 GPT-5.5 发布页并开放 GPT-5.5 与 GPT-5.5 Pro API。Sam Altman 与 Greg Brockman 同步确认 API 已上线，OpenAI 官方称 GPT-5.5 是面向真实工作的下一类智能，强项集中在 agentic coding、computer use、知识工作与长链路任务执行。官方定价为 GPT-5.5 每百万输入 5 美元、输出 30 美元，Pro API 为每百万输入 30 美元、输出 180 美元；GPT-5.5 在 Terminal-Bench 2.0 达 82.7%、SWE-Bench Pro 58.6%、OSWorld-Verified 78.7%。今日推文显示模型已从单点发布转向生态铺开。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/OpenAI/status/2047743592278745425" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a><a class="source-chip" href="https://x.com/sama/status/2047787124846653895" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sama</a><a class="source-chip" href="https://x.com/gdb/status/2047745639195508754" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a></div>

## 2/15 GPT-5.5 同步进入 Cursor、Windsurf、Perplexity 与 Databricks
Cursor 宣布 GPT-5.5 上线，并称其在 CursorBench 以 72.8% 位列第一，5 月 2 日前与 OpenAI 合作提供 5 折价格；Windsurf 2.0 称 GPT-5.5 对理解意图、处理歧义和长程任务特别关键；Perplexity 向 Max 用户开放 GPT-5.5，并把它作为 Computer 的默认编排模型；Databricks 则把 GPT-5.5 接入 Unity AI Gateway，用于 Codex 编码工作流、企业数据 agent、Genie 问答和 Lakeflow 文档智能。GPT-5.5 正从“新模型”变成多工具平台的默认执行层。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cursor_ai/status/2047744579127185843" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai</a><a class="source-chip" href="https://x.com/windsurf/status/2047743271087018146" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@windsurf</a><a class="source-chip" href="https://x.com/perplexity_ai/status/2047748486767272243" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@perplexity_ai</a><a class="source-chip" href="https://x.com/databricks/status/2047848795862364468" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a></div>

## 3/15 Cursor 3.2 推出 /multitask 与多根工作区，编码 agent 开始并行化
Cursor 发布新版 agent 工作区能力：`/multitask` 可以把排队中的请求拆成异步 subagents 并行执行，而不是让任务串行等待；改进后的 worktrees 允许后台在不同分支上隔离跑任务，完成后再切到本地前台测试；multi-root workspaces 则让单个 agent session 同时处理多个文件夹，适合跨仓库变更。Cursor 这组更新将“一个聊天窗口内的编码助手”推进到“可管理多个并行 agent 工作流”的产品形态，和 GPT-5.5 的长程执行能力形成直接配套。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai<span class="source-chip__links"><a href="https://x.com/cursor_ai/status/2047764651363180839" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 1">1</a><a href="https://x.com/cursor_ai/status/2047764652977958938" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 2">2</a><a href="https://x.com/cursor_ai/status/2047764654760632725" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 3">3</a><a href="https://x.com/cursor_ai/status/2047764656165646786" target="_blank" rel="noopener" aria-label="@cursor_ai 原文 4">4</a></span></span></div>

## 4/15 Microsoft 将 GPT-5.5 推向 GitHub Copilot、M365 Copilot、Copilot Studio 和 Foundry
Satya Nadella 宣布 GPT-5.5 今日滚动进入 GitHub Copilot、M365 Copilot、Copilot Studio 与 Foundry。微软的定位是“为不同任务选择正确模型或模型组合”：Copilot CLI 中用较快模型搭框架和探索，用深推理模型做计划、理解需求和权衡，再让 GPT-5.5 把计划落成代码；Rubber Duck agent 可在多模型反思循环中审查另一模型输出；M365 Copilot 将 GPT-5.5 与 Work IQ 结合，处理工作数据、复杂任务和完整文档/表格生成；Foundry 则承载企业级安全、治理和编排。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@satyanadella<span class="source-chip__links"><a href="https://x.com/satyanadella/status/2047743651053556126" target="_blank" rel="noopener" aria-label="@satyanadella 原文 1">1</a><a href="https://x.com/satyanadella/status/2047743653045837988" target="_blank" rel="noopener" aria-label="@satyanadella 原文 2">2</a><a href="https://x.com/satyanadella/status/2047743655587504507" target="_blank" rel="noopener" aria-label="@satyanadella 原文 3">3</a><a href="https://x.com/satyanadella/status/2047743658527789565" target="_blank" rel="noopener" aria-label="@satyanadella 原文 4">4</a></span></span></div>

## 5/15 Anthropic Project Deal：Claude agent 完成 186 笔真实办公室交易
Anthropic 发布 Project Deal 实验：在旧金山办公室建立员工二手市场，让 Claude agent 代表 69 名员工买卖和谈判真实物品。Claude 先访谈员工的卖品、购买兴趣、价格底线和谈判风格，再在 Slack 市场里发帖、报价、还价并达成交易。真实市场中 agent 完成 186 笔交易，总交易额超过 4000 美元；参与者普遍认为交易公平，近半数表示未来愿意为类似服务付费。对照实验显示，Opus agent 比 Haiku agent 获得更好客观交易结果，但参与者并未明显察觉模型质量差异。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI<span class="source-chip__links"><a href="https://x.com/AnthropicAI/status/2047728360818696302" target="_blank" rel="noopener" aria-label="@AnthropicAI 原文 1">1</a><a href="https://x.com/AnthropicAI/status/2047728362580324422" target="_blank" rel="noopener" aria-label="@AnthropicAI 原文 2">2</a><a href="https://x.com/AnthropicAI/status/2047728369169518678" target="_blank" rel="noopener" aria-label="@AnthropicAI 原文 3">3</a><a href="https://x.com/AnthropicAI/status/2047728371962888371" target="_blank" rel="noopener" aria-label="@AnthropicAI 原文 4">4</a></span></span></div>

## 6/15 DeepSeek V4 进入 NVIDIA Blackwell Day 0 推理栈
NVIDIA 宣布 DeepSeek-V4-Pro 已在 NVIDIA Blackwell Ultra 上跑出 Day 0 性能曲线。DeepSeek-V4-Pro 是 1.6T 总参数、49B 激活参数、1M 上下文的开源模型；NVIDIA 称 GB200 NVL72 上开箱即可达到超过 150 TPS/user 的交互性能，并将继续通过 NVFP4、Dynamo、CUDA kernel 优化和并行化提升吞吐。NVIDIA 同时把 DeepSeek-V4-Pro 放上 NIM API 免费试用。这是昨日 DeepSeek V4 发布后的关键后续：开源 frontier 模型正在被快速接入主流 GPU 加速端点和企业推理管线。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI<span class="source-chip__links"><a href="https://x.com/NVIDIAAI/status/2047765637808664759" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 1">1</a><a href="https://x.com/NVIDIAAI/status/2047790185002217760" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 2">2</a><a href="https://x.com/NVIDIAAI/status/2047823093578518758" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 3">3</a></span></span></div>

## 7/15 Cohere 与 Aleph Alpha 组建跨大西洋主权 AI 联盟
Cohere 宣布与德国 Aleph Alpha 形成跨大西洋 AI powerhouse，定位为“sovereign AI for the world”。双方将结合 Cohere 的全球规模、Aleph Alpha 的欧洲研发能力和德国机构关系，为政府和受监管行业提供企业级、安全、隐私和可信 AI。官方新闻稿称 Schwarz Group 旗下公司将提供约 5 亿欧元结构化融资，支持德国-加拿大主权 AI 业务。该交易反映出主权 AI 从政策口号进入资本和公司整合阶段，目标是在 OpenAI、Anthropic、Google 等平台之外提供可控替代。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cohere/status/2047631725426000268" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cohere</a></div>

## 8/15 Replit 推安全迁移：Security Agent + Auto-Protect 作为导入卖点
Replit 宣布已在安全能力上做深投入，包括近期发布的 Security Agent 与 Auto-Protect，并对希望迁移到 Replit 的应用开放限时免费导入。官方称用户可以在导入现有应用后继续构建，还可轻松为项目添加移动端应用。该信息延续 Replit 从在线 IDE 转向“agentic app platform”的路线：它不只吸引新项目从 prompt 开始生成，也开始争取已有应用迁移，并把自动安全保护作为核心购买理由。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Replit<span class="source-chip__links"><a href="https://x.com/Replit/status/2047725350151708801" target="_blank" rel="noopener" aria-label="@Replit 原文 1">1</a><a href="https://x.com/Replit/status/2047727263245070400" target="_blank" rel="noopener" aria-label="@Replit 原文 2">2</a><a href="https://x.com/Replit/status/2047727340046926111" target="_blank" rel="noopener" aria-label="@Replit 原文 3">3</a></span></span></div>

## 9/15 Runway 接入 GPT Image 2，视频平台补齐高精度图像生成
Runway 宣布 GPT Image 2 已在 Runway 中可用，官方文案强调“如果能想象，就能看见，精确到最后一个细节”。这意味着 OpenAI 新一代图像能力继续向专业创意工具扩散，而不只停留在 ChatGPT 内部。Runway 同日还推广第四届 AI Festival 评审阵容和项目征集，强化其在 AI 电影、视频与创意社区中的平台位置。对创作者而言，GPT Image 2 进入 Runway 的价值在于把高质量图像生成纳入视频工作流，而不是在独立图像工具和视频编辑器之间切换。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml<span class="source-chip__links"><a href="https://x.com/runwayml/status/2047676753586385125" target="_blank" rel="noopener" aria-label="@runwayml 原文 1">1</a><a href="https://x.com/runwayml/status/2047731191902511466" target="_blank" rel="noopener" aria-label="@runwayml 原文 2">2</a></span></span></div>

## 10/15 Sim2Reason：用物理模拟器自动生成训练数据，提升 LLM 物理推理
AlphaSignal 转发新研究 Sim2Reason，核心思路是让 AI 从物理模拟器中学习物理，而不是依赖稀缺的人类标注题库。系统在 MuJoCo 中生成随机场景，用领域专用语言控制真正影响物理规律的变量，自动创建经过验证的问题-答案对，再用合成数据进行强化学习。项目页称该方法在 International Physics Olympiad 等真实物理基准上产生零样本迁移提升；AlphaSignal 进一步称 IPhO 提升 5-10 分、JEEBench 提升 17.9%。这为科学推理后训练提供了一条“模拟器即数据工厂”的路线。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2047692588132528267" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2047692589134934515" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a></span></span></div>

## 11/15 AiScientist 与 File-as-Bus：长程科研 agent 的瓶颈是记忆
AlphaSignal 总结论文 AiScientist：一个可连续运行数小时到数天的自动化 ML 研究系统，覆盖环境搭建、编码、实验、debug 和结果整理。其核心不是让模型“想得更深”，而是用 File-as-Bus 机制让 agent 通过共享文件读写项目状态，包括代码、日志、计划和结果，而不是依赖对话摘要传递上下文。论文结果显示，系统在 PaperBench 上比最佳 baseline 高 10.5 分，在 MLE-Bench Lite 上达到 81.8% medal rate；去掉 File-as-Bus 后性能最多下降 31.8 分。这与今日多 agent 和长程工作流讨论高度呼应。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2047647146057314665" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2047647147558944806" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a></span></span></div>

## 12/15 Sakana Fugu 热度延续：多模型编排被定义为“collective intelligence”
Sakana AI 继续推广 Fugu beta，多位团队成员和投资人转发“future of AI is collective intelligence”的叙事。Fugu 不是单一基础模型，而是多智能体编排系统，按任务动态选择不同 frontier model、分配子任务和角色，并以 OpenAI 兼容 API 接入既有工作流。官方昨日称 Fugu Mini 面向低延迟，Fugu Ultra 使用完整模型池进行深度推理，在 SWE-Pro、GPQA-D、ALE-Bench 等任务上达到新 SOTA。今日推文重点转向 beta tester 免费 API credits 和社区反馈，显示该产品正在从发布进入早期试用阶段。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs<span class="source-chip__links"><a href="https://x.com/SakanaAILabs/status/2047596110815056338" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 1">1</a><a href="https://x.com/SakanaAILabs/status/2047686093987033292" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 2">2</a><a href="https://x.com/SakanaAILabs/status/2047879570800669050" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 3">3</a></span></span><a class="source-chip" href="https://x.com/hardmaru/status/2047914728841003058" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a></div>

## 13/15 Yann LeCun 再谈 JEPA：机器人未来不能靠不懂物理世界的 LLM
Yann LeCun 连续发文重申，他并非否认 LLM 有用，而是认为机器人丰富的未来不能建立在不理解物理世界、不能预测行动后果的 AI 上。他强调 LLM 和其他离散 token 生成架构不适合高维、连续、噪声传感数据；下一代 AI 需要 world models、JEPA 和 zero-shot planning。LeCun 还指出，持续 AI 指数级进步需要新的概念转折，外部看起来像指数曲线的一步，内部则是从当前 LLM 工程范式转向世界模型的重大创新。这是“LLM 是否足以通向通用智能”争论的又一次集中表达。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ylecun<span class="source-chip__links"><a href="https://x.com/ylecun/status/2047636569767419951" target="_blank" rel="noopener" aria-label="@ylecun 原文 1">1</a><a href="https://x.com/ylecun/status/2047663235008979034" target="_blank" rel="noopener" aria-label="@ylecun 原文 2">2</a><a href="https://x.com/ylecun/status/2047665139642507612" target="_blank" rel="noopener" aria-label="@ylecun 原文 3">3</a><a href="https://x.com/ylecun/status/2047666340370993420" target="_blank" rel="noopener" aria-label="@ylecun 原文 4">4</a></span></span></div>

## 14/15 ChatGPT Images 2.0 的可验证视觉推理：Rubik、QR 与棋局报告
Riley Goodside 连续展示 ChatGPT 5.5 Pro / Images 2.0 在复杂视觉约束上的能力：生成镜面上的合法简单状态 Rubik’s Cube、包含可扫码 QR code 的博物馆照片，以及模拟棋局后生成多页 PDF 分析报告并附 lichess PGN 查看二维码。他特别说明 Rubik’s Cube 任务对颜色状态合法性很敏感，许多其他样例会生成非法状态；棋局报告耗时 33 分 26 秒，包含重新实现 quiescence search、分析可疑走法和生成可验证链接。这里的重点不是图片逼真，而是图像生成开始带有可检查的结构和推理约束。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@goodside<span class="source-chip__links"><a href="https://x.com/goodside/status/2047728776520298646" target="_blank" rel="noopener" aria-label="@goodside 原文 1">1</a><a href="https://x.com/goodside/status/2047853014455620078" target="_blank" rel="noopener" aria-label="@goodside 原文 2">2</a><a href="https://x.com/goodside/status/2047910113848041503" target="_blank" rel="noopener" aria-label="@goodside 原文 3">3</a></span></span></div>

## 15/15 GPT Image 2 的消费级用法爆发：从面部分析到眼镜推荐
Linus Ekenstam 展示 GPT Image 2 在个人视觉分析和消费建议中的用法：上传肖像后自动分析脸型、眼睛、眉毛、鼻子、脸颊和嘴唇，并生成带箭头和信息卡片的 Face Feature Analysis；进一步生成 Spectacles Guide，根据脸型和比例给出适合/不适合的眼镜建议，并在同一张脸上展示试戴变化。该推文获得超过 10 万浏览，说明 GPT Image 2 的扩散不只发生在专业设计和视频平台，也进入了“个性化审美分析 + 可视化购买建议”的消费场景。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LinusEkenstam<span class="source-chip__links"><a href="https://x.com/LinusEkenstam/status/2047769325423968690" target="_blank" rel="noopener" aria-label="@LinusEkenstam 原文 1">1</a><a href="https://x.com/LinusEkenstam/status/2047769331141111884" target="_blank" rel="noopener" aria-label="@LinusEkenstam 原文 2">2</a></span></span></div>

---

## Deep Dive 附录

### OpenAI GPT-5.5 API 与生态扩散
OpenAI 官方页在 4 月 24 日更新，确认 GPT-5.5 与 GPT-5.5 Pro 已开放 API。GPT-5.5 重点面向 agentic coding、computer use、知识工作和长程执行；API 标准价为每百万输入 5 美元、输出 30 美元，Pro 为每百万输入 30 美元、输出 180 美元。官方披露 Terminal-Bench 2.0 82.7%、SWE-Bench Pro 58.6%、OSWorld-Verified 78.7%、Tau2-bench Telecom 98.0%，并称 GPT-5.5 在 Codex 任务上比 GPT-5.4 更省 token。生态侧，Cursor、Windsurf、Perplexity、Databricks、GitHub Copilot、M365 Copilot 与 Foundry 已在今日推文中确认接入或滚动上线。
[查看原文](https://openai.com/index/introducing-gpt-5-5/)

### Anthropic Project Deal：Claude-run marketplace experiment
Anthropic 在办公室内搭建真实二手交易市场，让 Claude agent 代表 69 名员工买卖和谈判。每个 agent 通过访谈获得用户偏好、价格底线和谈判风格，然后在 Slack 中发帖、报价、还价并成交。真实运行中完成 186 笔交易，总交易额超过 4000 美元；参与者对公平性总体满意，近半数愿意未来为类似服务付费。对照实验显示 Opus agent 在客观交易结果上优于 Haiku agent，但参与者未明显感知模型差异。该实验显示 agent market 具备现实可行性，也暴露授权、偏好建模、模型质量不平等和法律责任问题。
[查看原文](https://www.anthropic.com/features/project-deal)

### NVIDIA Blackwell 上的 DeepSeek V4
NVIDIA 技术博客披露 DeepSeek-V4-Pro 与 DeepSeek-V4-Flash 的 Blackwell 部署情况。V4-Pro 为 1.6T 总参数、49B 激活参数，V4-Flash 为 284B 总参数、13B 激活参数，二者均支持 1M token 上下文。NVIDIA 称 DeepSeek-V4-Pro 在 GB200 NVL72 上开箱可达超过 150 tokens/sec/user，并会通过 NVFP4、Dynamo、CUDA kernel 优化和并行策略继续提升性能。NIM API 已开放试用，说明开源 frontier 模型正快速进入企业可调用的 GPU 加速端点。
[查看原文](https://developer.nvidia.com/blog/build-with-deepseek-v4-using-nvidia-blackwell-and-gpu-accelerated-endpoints/)

### Sim2Reason：Solving Physics Olympiad via Reinforcement Learning on Physics Simulators
Sim2Reason 使用物理模拟器自动生成可验证 QA 数据，用于训练 LLM 物理推理。方法是在 MuJoCo 等引擎中随机生成场景，通过 DSL 控制真实物理变量，自动生成问题答案，再用强化学习训练模型。项目页称这种合成数据带来零样本 sim-to-real 迁移，在 International Physics Olympiad 题目上最高提升约 7 个百分点。它的核心价值是把模拟器变成科学推理数据工厂，减少对人工题库的依赖，并为机器人、物理、工程设计等领域的 LLM 后训练提供可扩展路径。
[查看原文](https://sim2reason.github.io/)

### Cohere 与 Aleph Alpha：跨大西洋主权 AI 联盟
Cohere 与德国 Aleph Alpha 宣布计划联手，目标是在政府和受监管行业中提供主权、企业级、可控 AI 替代方案。官方新闻稿称 Schwarz Group 旗下公司将提供 5 亿欧元结构化融资，帮助德国-加拿大 AI 业务扩张。该联盟结合 Cohere 的模型规模能力、Aleph Alpha 的欧洲研发和机构关系，强调安全、隐私、可信、本地控制和避免单一供应商依赖。它代表主权 AI 从政策叙事进入公司整合与资本部署阶段。
[查看原文](https://schwarz-digits.de/en/presse/archive/2026/cohere-and-aleph-alpha-to-form-global-ai-powerhouse)
