---
layout: daily
title: "AI Frontier Daily | 2026.06.22"
headline: "Sakana Fugu 把多模型编排包装成单一 frontier API"
date: 2026-06-22 09:07:00 +0800
permalink: /ai-daily/2026/06/22/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Sakana AI 发布 Fugu / Fugu Ultra，定位为“multi-agent orchestration system as a single foundation model”。Fugu 本身是一个会调用 agent pool 的 LLM，可以递归调用不同模型，处理 model selection、delegation、verification 和 synthesis；开发者只面对一个 OpenAI-compatible API。Sakana 把卖点放在两层：复杂任务上接近 Fable / Mythos 的 benchmark 表现，以及避免单一供应商和 export controls 带来的 access 风险。Fugu 普通版面向低延迟日常工作，Ultra 面向 AI research、cybersecurity、paper reproduction 和 patent investigation 等高难任务。"
summary: "Sakana AI 发布 Fugu / Fugu Ultra，定位为“multi-agent orchestration system as a single foundation model”。Fugu 本身是一个会调用 agent pool 的 LLM，可以递归调用不同模型，处理 model selection、delegation、verification 和 synthesis；开发者只面对一个 OpenAI-compatible API。Sakana 把卖点放在两层：复杂任务上接近 Fable / Mythos 的 benchmark 表现，以及避免单一供应商和 export controls 带来的 access 风险。Fugu 普通版面向低延迟日常工作，Ultra 面向 AI research、cybersecurity、paper reproduction 和 patent investigation 等高难任务。"
issue_count: 12
deep_dive_count: 5
reading_time: 16
cover: "https://sakana.ai/assets/home/sakana_rect.png"
signals: "SakanaAILabs · hardmaru · togethercompute · bindureddy · huggingface · ClementDelangue · hwchase17 · fchollet"
header-img: img/dark_yellow_400.png
---


## 1/12 Sakana Fugu 把多模型编排包装成单一 frontier API
Sakana AI 发布 Fugu / Fugu Ultra，定位为“multi-agent orchestration system as a single foundation model”。Fugu 本身是一个会调用 agent pool 的 LLM，可以递归调用不同模型，处理 model selection、delegation、verification 和 synthesis；开发者只面对一个 OpenAI-compatible API。Sakana 把卖点放在两层：复杂任务上接近 Fable / Mythos 的 benchmark 表现，以及避免单一供应商和 export controls 带来的 access 风险。Fugu 普通版面向低延迟日常工作，Ultra 面向 AI research、cybersecurity、paper reproduction 和 patent investigation 等高难任务。
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2068861630327443966)
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2068862070062485867)
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2068862344684581023)
- [查看 @hardmaru 原始推文](https://x.com/hardmaru/status/2068861824205025759)

## 2/12 GLM-5.2 继续推动开放模型从 benchmark 走进生产讨论
今天多条推文把 GLM-5.2 放进同一个叙事：Together AI 开放 GLM-5.2 在 Together Chat 免费试用，强调无需 API setup；Bindu Reddy 称客户突然开始询问 GLM 5.2 API，并把它与 Kimi、Opus 4.8 放进 RouteLLM 切换场景；Hugging Face 与 Clement Delangue 转发社区对 GLM-5.2 coding 和 Vending Bench 表现的讨论。重点不是单个榜单，而是开放/第三方模型开始被当成 coding agent、routing API、业务自动化中的可替代生产选项。
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2068738614016586019)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2068738612947038497)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2068774743650742560)
- [查看 @huggingface 原始推文](https://x.com/huggingface/status/2068702838725718087)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2068703744863138237)

## 3/12 开源 AI 主权论升温，Clement Delangue 把开放生态放到 frontier 之前
Clement Delangue 提出一个明确判断：open-source AI leadership 不是 general AI leadership 的替代，而是通向 general AI leadership 的前置条件。他把 2016-2024 年美国开源 AI 领先、2024-2026 年中国开源 AI 领先、2026-2030 年未定作为时间线，强调开放模型会通过减少 silo、共享学习、扩大模仿和竞争来加速本地生态。这个观点与 Fugu 的单一供应商风险、Fable/Mythos 出口控制争议、GLM-5.2 关注度同时出现，说明开放权重和模型可替代性已经从社区理念进入国家和企业供应链策略。
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2068688725958148465)
- [查看 @huggingface 原始推文](https://x.com/huggingface/status/2068702800196903136)

## 4/12 Deep Agents 让 Claude Code-like agent 变成可复刻框架模式
Harrison Chase 转发 “Build your own Claude Code with Deep Agents”，称社区文章展示了如何用 LangChain Deep Agents 构建 Claude Code-like agent，并补充这种方式是 model agnostic、general purpose。结合他提到 GLM-5.2 变强，这条信息的重点是 coding agent 不再只靠某个闭源产品交付，而可以被拆解成 agent harness：任务规划、文件上下文、工具调用、代码编辑、测试反馈和模型替换。开发者真正要比较的会是模型能力、工具协议、状态管理、成本和失败恢复，而不只是聊天模型分数。
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2068700213783724191)
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2068736324064927964)
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2068736391115116700)

## 5/12 Adobe 的 AI 收入数据反击“创意软件被生成式 AI 替代”叙事
François Chollet 用 Adobe 财报数据反驳“GenAI 会杀死 Adobe”叙事：他指出 Adobe Q2 revenue 达 66.2 亿美元、同比增长 13%，non-GAAP EPS 达 5.96 美元，AI-first ARR 同比增长三倍并超过 5 亿美元，其中 Firefly ARR 达 3 亿美元且季度环比约 50% 增长。他还提到 freemium MAU 从 7 亿增至 8.5 亿，认为 Adobe 正把生成式 AI 变成产品 adoption 和付费增长，而不是被替代。这条线索提醒市场：AI 对 incumbent software 的影响可能是增强分发和变现，而不是简单冲击。
- [查看 @fchollet 原始推文](https://x.com/fchollet/status/2068866514233827741)
- [查看 @fchollet 原始推文](https://x.com/fchollet/status/2068866573558022201)
- [查看 @fchollet 原始推文](https://x.com/fchollet/status/2068866713412854037)
- [查看 @fchollet 原始推文](https://x.com/fchollet/status/2068866756261843078)
- [查看 @fchollet 原始推文](https://x.com/fchollet/status/2068866857176797210)

## 6/12 AI agents 开始嵌入任意应用并生成复杂可视化
Bindu Reddy 展示 Abacus AI weekend launch，称 AI agents can embed and use any app、做系统和工程设计、为数据中心和科研创建 3D models，并通过混合 Opus 4.8、GLM 5.2、GPT 5..5 等模型完成任务。这条推文的 view count 很高，说明用户对“agent 操作真实应用界面”仍有强需求。它与 Together 的 voice + screen demo 指向同一趋势：agent 的下一步不是只会在文本框里回答，而是读取屏幕、嵌入应用、操作工具、生成工程制品，并把多模型能力藏在工作流背后。
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2068569320968626422)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2068515999830401337)

## 7/12 Together 把语音、屏幕和多模型推理放进实时 agent loop
Together AI 展示 voice agent demo，称完整链路运行在 Together AI 上，包含 Parakeet 的 STT、MiniMax Speech 2.8 的语音、MiniMax M3 的 reasoning，并能使用屏幕。另一个 GLM-5.2 demo 强调模型可以读取 issue、理解 scene、patch code 并继续执行。这里的重点是 agent serving stack：语音、视觉/屏幕、推理、工具输出和低延迟推理必须同时可用，才可能支撑实时交互。模型平台竞争正在从单次 completion 成本，转向端到端任务循环的吞吐、延迟和稳定性。
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2068515999830401337)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2068574888131227893)

## 8/12 Ethan Mollick 指出 coding agent 的 software-brained 局限
Ethan Mollick 讨论把 Codex / Cowork / Code 扩展到所有知识工作时的核心问题：这些工具仍然是 software-brained，把最终软件作为重要结果，把代码库当成 source of truth。但许多知识工作中，过程和结果同样重要，包括研究已知内容、探索替代方案、失败尝试、prototype branch、实验和观点修正。他认为 long-running models 和 coding harness 容易要求用户像软件开发者一样工作，而 manager 或 analyst 需要的是学习循环和过程记忆。这是 agent 从 coding niche 走向知识工作的关键产品缺口。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2068729258176819253)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2068731072410493376)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2068730263098572883)

## 9/12 Yoav Goldberg 质疑高推理 agent 的成本结构
Yoav Goldberg 提出一个工程化问题：frontier models 加工具在 ReAct loop 中已经能完成很多任务，但可能需要 15 美元、40 分钟和大量 token 才完成一次。他认为很多场景里，“reasoning”部分可能是过度使用，未来更好的方案可能是更小模型、更少 reasoning 和更聪明的 control harness。他还追问 VLM training data sourcing，尤其是不依赖 frontier VLM 生成训练数据的路径。这组讨论把 agent 评估从“能不能做”推进到“以什么成本、延迟和数据来源做”。
- [查看 @yoavgo 原始推文](https://x.com/yoavgo/status/2068687607618298029)
- [查看 @yoavgo 原始推文](https://x.com/yoavgo/status/2068722064752562386)
- [查看 @yoavgo 原始推文](https://x.com/yoavgo/status/2068722429048901814)
- [查看 @yoavgo 原始推文](https://x.com/yoavgo/status/2068786646628143121)

## 10/12 Greg Brockman 用 Codex 测试应用功能，强化 AI QA 场景
Greg Brockman 发布 “codex for testing every single feature in your app”，虽然推文很短，但获得很高传播。它延续了近期 coding agent 的一个明确落地面：不是只让 agent 写新代码，而是让 agent 系统性遍历产品功能、执行测试、发现缺陷、补充回归用例。与 Mollick 对 software-brained 局限的评论放在一起看，软件仍是 agent 最容易形成闭环的领域，因为代码、测试和 UI 状态可以被验证。短期内 AI QA、feature walk-through 和自动回归可能比泛知识工作更快进入生产。
- [查看 @gdb 原始推文](https://x.com/gdb/status/2068761809318990054)

## 11/12 AI 成本与基础设施外部性继续进入主流争论
Gary Marcus 转发 WSJ 关于 big tech 隐藏 AI 真实成本的讨论，并继续强调 AI 公司多年后仍未盈利、过度承诺可能带来 AI winter。Timnit Gebru 转发 xAI gas turbines 相关报道，称美国政府介入诉讼并以 AI infrastructure 需要为由支持 xAI。无论立场如何，这些推文显示 AI frontier 竞争已经不只是模型能力，也包括资本开支、能源、水、电网、监管和环境许可。随着 agent 和多模态模型增加算力需求，基础设施成本会成为投资者、政府和社区同时关注的约束。
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2068816019968430569)
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2068843499441782901)
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2068826250030768151)
- [查看 @timnitGebru 原始推文](https://x.com/timnitGebru/status/2068531239166857685)
- [查看 @timnitGebru 原始推文](https://x.com/timnitGebru/status/2068531324508414406)

## 12/12 Databricks 与 LlamaIndex 的教育/解析更新补齐企业 AI 管线
Databricks 宣布 Customer Academy 在 6 月 15 日到 7 月 6 日举办三周 learning event，覆盖 data engineering、analytics、machine learning 和 generative AI，并提供认证折扣。LlamaIndex 转发 liteparse 解析 SpaceX equity research PDF 的 demo，强调解析速度。两条信息不如 Fugu 或 GLM-5.2 抢眼，但它们代表企业 AI 的底层工作：训练数据和业务文档要能解析，员工要能掌握 data/AI workflow，模型能力才有稳定入口。AI Frontier 的日常推进往往发生在这些管线和技能建设里。
- [查看 @databricks 原始推文](https://x.com/databricks/status/2068721377285206323)
- [查看 @llama_index 原始推文](https://x.com/llama_index/status/2068854075220005360)

---

## Deep Dive 附录

### Sakana Fugu / Fugu Ultra
Sakana Fugu 是今天最完整的产品和研究发布。官方 release 称，Fugu 是一个多智能体编排系统，但对外表现为一个模型 API；它会动态选择、委派、验证并综合多个模型的结果，开发者不用手写传统 multi-agent workflow。Sakana 把这个方向称为 orchestration models：未来强系统不一定是更大的单一模型，而是能协调多种专业模型的集体智能。发布还把技术路线与 AI sovereignty 联系起来，认为单一供应商依赖会在出口控制、商业限制或合规变化时变成实际业务风险。Fugu 普通版主打低延迟日常工作，Fugu Ultra 主打更难的多步任务，并允许团队为隐私或合规从 agent pool 中排除特定模型。
[查看原文](https://sakana.ai/fugu-release/)

### Build your own Claude Code with Deep Agents
Harrison Chase 转发的社区文章展示如何用 LangChain Deep Agents 构建 Claude Code-like agent。当前环境只能解析目标 URL，正文被 Cloudflare challenge 拦截；但 tweet 本身已经给出关键信息：Deep Agents 的目标是把 coding agent 的任务循环框架化，并且 model agnostic、general purpose。它的重要性在于，Claude Code/Codex 的能力正在被拆成可复用组件：规划、文件读写、工具调用、代码修改、测试反馈和状态管理。随着 GLM-5.2 等开放或第三方模型变强，coding agent 的竞争可能从“谁独占最强模型”转向“谁有更稳的 harness、工具生态和模型路由”。
[查看原文](https://pub.towardsai.net/build-your-own-claude-code-using-langchin-a-deepdive-into-langchains-deep-agents-9ef98d98a69a)

### GLM-5.2 distribution through Together and routing APIs
GLM-5.2 今天在多条推文中成为开放模型热度的中心。Together AI 提供 Together Chat 免费试用入口，并强调服务在 secure North American infrastructure；Bindu Reddy 称客户开始询问 GLM 5.2 API，并把 GLM、Kimi、Opus 4.8 放进 RouteLLM 切换；Hugging Face 与 Clement Delangue 转发社区 benchmark 和 coding agent 使用反馈。这个组合说明开放模型影响力不只来自下载权重，还来自托管推理、聊天试用、路由 API、agent harness 和社区验证。模型越容易被切换进现有工作流，越容易对闭源 frontier access 形成压力。
[查看原文](https://chat.together.ai/)

### Adobe AI adoption and incumbent software
François Chollet 的 Adobe 线程把生成式 AI 对 incumbent software 的影响拉回财务和产品数据。他列出的数字包括 Q2 revenue 66.2 亿美元、同比增长 13%、non-GAAP EPS 5.96 美元、AI-first ARR 超过 5 亿美元、Firefly ARR 约 3 亿美元、freemium MAU 从 7 亿增至 8.5 亿。这个案例说明，生成式 AI 不一定只会替代专业软件，也可能让复杂软件更易用、扩大免费用户漏斗、增加 credit pack 或 AI-first 收入，并强化原有工作流的分发优势。对企业软件来说，AI 的问题不是“会不会被颠覆”这么单一，而是能否把模型能力转成可计费、可留存、可嵌入核心流程的功能。
[查看原文](https://x.com/fchollet/status/2068866713412854037)

### Software-brained agents and knowledge work
Ethan Mollick 的长推强调，当前 Codex / Code 类工具之所以适合软件，是因为代码和测试能作为可验证的 source of truth；但知识工作常常同等依赖过程，例如研究文献、尝试路径、失败实验、临时假设和观点演化。这个判断解释了为什么 coding agent 近期进展快，而管理、研究、分析等场景更难直接套用同一产品形态。若 agent 要进入更广义的知识工作，需要保存过程记忆、展示探索路径、支持分支和反思，而不只是交付一个最终文件。
[查看原文](https://x.com/emollick/status/2068729258176819253)
