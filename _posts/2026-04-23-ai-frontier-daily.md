---
layout: daily
title: "AI Frontier Daily | 2026.04.23"
headline: "OpenAI 发布 Workspace Agents：团队级 AI 工作流代理"
date: 2026-04-23 09:07:00 +0800
permalink: /ai-daily/2026/04/23/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "OpenAI 正式发布 ChatGPT Workspace Agents，面向企业和团队用户推出共享代理能力。Workspace Agents 构建于云端托管的 Codex 架构之上，可以处理需要上下文、工具调用和长期跟踪的复杂任务。用户只需描述任务，ChatGPT 即可将其转化为可复用的工作流代理，并与 Slack、Linear、Google Docs、邮件等工具无缝集成。代理可在后台持续运行或按计划自动执行，而无需人工监督。目前已向 ChatGPT Business、Enterprise、Edu 和 Teachers 用户开放研究预览。Sam Altman 评价：\"大多数公司都会想要使用它们。\""
summary: "OpenAI 正式发布 ChatGPT Workspace Agents，面向企业和团队用户推出共享代理能力。Workspace Agents 构建于云端托管的 Codex 架构之上，可以处理需要上下文、工具调用和长期跟踪的复杂任务。用户只需描述任务，ChatGPT 即可将其转化为可复用的工作流代理，并与 Slack、Linear、Google Docs、邮件等工具无缝集成。代理可在后台持续运行或按计划自动执行，而无需人工监督。目前已向 ChatGPT Business、Enterprise、Edu 和 Teachers 用户开放研究预览。Sam Altman 评价：\"大多数公司都会想要使用它们。\""
issue_count: 18
deep_dive_count: 3
reading_time: 15
cover: "https://images.openai.com/blob/workspace-agents-hero.png"
signals: "OpenAI · gdb · sama · Alibaba_Qwen · sundarpichai · GoogleDeepMind · Kimi_Moonshot · bindureddy"
header-img: img/dark_yellow_400.png
---


## 1/18 OpenAI 发布 Workspace Agents：团队级 AI 工作流代理
OpenAI 正式发布 ChatGPT Workspace Agents，面向企业和团队用户推出共享代理能力。Workspace Agents 构建于云端托管的 Codex 架构之上，可以处理需要上下文、工具调用和长期跟踪的复杂任务。用户只需描述任务，ChatGPT 即可将其转化为可复用的工作流代理，并与 Slack、Linear、Google Docs、邮件等工具无缝集成。代理可在后台持续运行或按计划自动执行，而无需人工监督。目前已向 ChatGPT Business、Enterprise、Edu 和 Teachers 用户开放研究预览。Sam Altman 评价："大多数公司都会想要使用它们。"
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2047008987665809771)
- [查看 @gdb 原始推文](https://x.com/gdb/status/2047023089087606814)
- [查看 @sama 原始推文](https://x.com/sama/status/2047017964105597009)

## 2/18 Qwen3.6-27B：27B 参数击败 397B 超大模型
阿里 Qwen 团队发布最新开源稠密模型 Qwen3.6-27B，在代码能力上全面超越自家 Qwen3.5-397B-A17B（后者总参数 397B，激活 17B，约为前者 15 倍）。核心指标：SWE-bench Verified 77.2（vs. 76.2），SWE-bench Pro 53.5（vs. 50.9），Terminal-Bench 2.0 59.3，SkillsBench 48.2。架构上采用 GatedDeltaNet + GatedAttention 混合设计，原生支持 262K token 上下文，可扩展至 100 万。原生多模态（文本、图像、视频），支持思考/非思考双模式，Apache 2.0 协议开放。
- [查看 @Alibaba_Qwen 原始推文](https://x.com/Alibaba_Qwen/status/2046939764428009914)
- [查看 @Alibaba_Qwen 原始推文](https://x.com/Alibaba_Qwen/status/2046939775924584577)

## 3/18 Google 发布第八代 TPU + 宣布 Gemini Enterprise Agent Platform
Google Cloud Next 大会上，Sundar Pichai 发布第八代 TPU：TPU 8t（针对训练优化）和 TPU 8i（针对推理优化），性能较上一代 Ironwood TPU 提升 2-3 倍。与此同时，Google 宣布 Google Cloud 当前每分钟通过直接 API 处理的 token 量超过 160 亿（上季度为 100 亿）。Google DeepMind 同步发布 Gemini Enterprise Agent Platform，作为 Vertex AI 的演进版本，集成了 200+ 主流模型（包括 Gemini 3.1 Pro、Gemini 3.1 Flash Image、Lyria 3 和开源 Gemma 4），并引入代理构建、治理和优化能力。Accenture、BCG、Bain、Deloitte、麦肯锡等咨询巨头已加入合作伙伴体系。
- [查看 @sundarpichai 原始推文](https://x.com/sundarpichai/status/2046981627184902378)
- [查看 @sundarpichai 原始推文](https://x.com/sundarpichai/status/2046930927482482789)
- [查看 @GoogleDeepMind 原始推文](https://x.com/GoogleDeepMind/status/2046983340524269713)

## 4/18 Kimi K2.6：登顶 OpenRouter 编程榜，超越 Claude Opus 4.7
Moonshot AI 的 Kimi K2.6 登上 OpenRouter 编程能力排行榜第一名，同时在 Design Arena 排名第一。根据 Bindureddy 的实测，Kimi K2.6 在 LiveBench（一个难以刷榜的综合基准）上超越 Claude Opus 4.7 的低档设置，在推理和编码上均有优势，且成本约为 Opus 4.7 的十分之一。此外，Kimi K2.6 推出 Agent Swarm 功能：支持 300 个并行子代理（上一代 K2.5 为 100 个），每次运行最多 4,000 步（上代 1,500 步），输出为真实文件而非聊天对话，一次运行可生成完整项目。Perplexity 已将 Kimi K2.6 向 Pro 和 Max 订阅用户开放。
- [查看 @Kimi_Moonshot 原始推文](https://x.com/Kimi_Moonshot/status/2046915283206709581)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2046987327957020909)
- [查看 @Kimi_Moonshot 原始推文](https://x.com/Kimi_Moonshot/status/2047190578493096122)

## 5/18 Anthropic 发布 AI 经济影响研究报告，启动月度经济指数调查
Anthropic 发布对 81,000 人调查的分析报告，深入研究 AI 的经济影响与用户的经济担忧。关键发现：收入最高和最低职业的人群都报告了最大的 AI 生产力提升；但提升最多的人群同时对工作替代的担忧也最强；软件工程等 Claude 高使用率职业的从业者比低暴露职业更担心岗位被取代。为持续跟踪 AI 经济影响，Anthropic 同步宣布启动"Anthropic 经济指数调查"，每月对 Claude 用户开展问卷，收集 AI 如何改变工作方式的定性数据。
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2047006548149289017)
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2047006550859125228)
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2047006554403057776)

## 6/18 微软 Copilot Agent Mode 正式全面铺开，成为 Office 默认体验
微软 CEO Satya Nadella 宣布，Copilot 的 Agent Mode 已正式全面发布（GA），并成为 Word、Excel 和 PowerPoint 中的默认体验。Nadella 特别强调 Excel 的空间推理能力："给代理一个画布让其推理，一个 prompt 就能同时重塑模型、桥接逻辑与叙事。"微软同时发布 Foundry 中的 Hosted Agents，为每个代理提供独立的企业级沙盒，配备持久状态、内置身份认证与治理机制，支持任意框架接入，意在让"每个代理都有自己的计算机"。微软还宣布对澳大利亚迄今最大投资：承诺投入 250 亿澳元，用于扩展 AI 和云计算基础设施，加强网络安全和数字技能建设。
- [查看 @satyanadella 原始推文](https://x.com/satyanadella/status/2047105085172511013)
- [查看 @satyanadella 原始推文](https://x.com/satyanadella/status/2047033636923568440)
- [查看 @satyanadella 原始推文](https://x.com/satyanadella/status/2047118960941023552)

## 7/18 ChatGPT for Clinicians：OpenAI 发布免费医疗版 ChatGPT
Greg Brockman 宣布推出 ChatGPT for Clinicians，专门为医护人员打造的免费版本。根据 emollick 的测评，该版本基于 ChatGPT-5.4，在一个由真实临床难题构成的基准测试中表现超越了"拥有无限时间和网络访问权限的专科医生"。这是 OpenAI 在医疗领域的重要落地动作，旨在将 AI 辅助诊断和临床决策支持工具直接交给一线医生使用。
- [查看 @gdb 原始推文](https://x.com/gdb/status/2047145125604995280)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2047147032016551937)

## 8/18 ChatGPT 接入 Google Sheets，Cursor 上线 Slack 集成
OpenAI 发布 ChatGPT 的 Google Sheets 插件，用户可以直接在表格工作流中调用 ChatGPT 能力。与此同时，Cursor 推出 Slack 集成：在 Slack 对话中 @Cursor 即可启动编程任务，Cursor 会读取线程和频道上下文，自动生成 PR 并实时推送进度更新——将 AI 编码助手从单一 IDE 延伸到团队协作环境。
- [查看 @gdb 原始推文](https://x.com/gdb/status/2047064885012599168)
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2047000517751288303)

## 9/18 Mustafa Suleyman：训练算力 2028 年底再增 1000 倍
微软 AI CEO Mustafa Suleyman 表示，自 2010 年他开始从事 AI 工作以来，前沿模型的训练算力已经增长了一万亿倍（10^12）。他预测，到 2028 年底，有效算力还将在此基础上再增长约 1000 倍。这意味着届时的算力规模将是 2010 年的 10^15 倍。这一预判意味着当前的 AI 能力曲线仍处于陡坡阶段，远未触顶。
- [查看 @mustafasuleyman 原始推文](https://x.com/mustafasuleyman/status/2046989133676257284)

## 10/18 Perplexity 发布搜索增强后训练研究：SFT + RL 流水线
Perplexity 公开了其将基础模型训练为高质量搜索问答模型的技术流水线：先通过 SFT（有监督微调）让模型学会遵循指令、保持语言一致性、遵守边界；再通过在策略 RL（强化学习）提升搜索准确度和工具效率。奖励函数设计上，偏好分只在回答正确的前提下才生效，防止模型优化"听起来正确但实则错误"的答案。使用 Qwen 基础模型，Perplexity 的后训练版本在事实准确性上与 GPT 系列相当，但成本更低。
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2047016400292839808)
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2047016429883740580)

## 11/18 emollick：AI 正在瓦解一切依赖"人类努力成本"的系统
宾夕法尼亚大学沃顿商学院教授 Ethan Mollick 指出，所有依靠"对人类而言耗费精力"来隐性或显性约束自身运行的系统，都将面临崩溃——推荐信、诉讼、政府申报、论文等，这些系统的设计默认了人类的时间成本是稀缺的。当 AI 使这些任务边际成本趋近于零时，整个调节机制就会失效。这是对 AI 系统性影响的深刻观察，而非特指某个产品。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2046979551046013125)

## 12/18 mattshumer：企业 AI 考核乱象——用 token 消耗量衡量员工 AI 能力
HyperWrite 创始人 Matt Shumer 披露，在一些大型企业内部，员工的晋升、绩效和解雇决策正在以"消耗的 token 数量"和"连接的 MCP 工具数"作为衡量标准。更荒诞的是，已有人专门跑循环刷 token 来"表演生产力"。Shumer 预警：18 个月后，这些公司的管理层将宣布"AI 未能兑现 ROI"并削减预算，但实际上是他们用错了指标——衡量产出才是正确方式，AI 本身并没有失败。
- [查看 @mattshumer_ 原始推文](https://x.com/mattshumer_/status/2046981408623649161)

## 13/18 MIT 用 AI 控制的人工肌肉纤维模拟人体肌肉
MIT 研究人员研发出用 AI 控制的人工肌肉纤维，每根纤维内含一管带电液体和微型电泵，通过电荷注入产生离子驱动液体流动，实现类似二头肌/三头肌的协同收缩。这些纤维可像真实肌肉一样捆绑，通过增加股数来线性放大力量，无需电机和外部泵，完全静音。演示中，纤维已能弯曲机械臂、举起哑铃，也能轻柔到与人握手。该技术适用于假肢、外骨骼和工业机器人场景，代表了"以生物学为基础重新设计执行器"的新方向。
- [查看 @rowancheung 原始推文](https://x.com/rowancheung/status/2046970405219713065)

## 14/18 OpenMythos：开发者逆向工程 Claude Mythos 并开源
一位开发者逆向还原了 Anthropic 的 Claude Mythos 架构并以 PyTorch 开源，命名为 OpenMythos。核心思路：不堆叠数百个独特层，而是让单一 block 在每次前向传播中最多运行 16 次，共享权重但多次迭代，推理在连续的隐变量空间中进行，不产生 chain-of-thought token。770M 参数的版本在质量上与 1.3B 标准 Transformer 相当。每次迭代激活不同专家子集，使每次 pass 都是真正不同的计算，并允许推理深度在推理时动态扩展。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2046977238839558411)

## 15/18 fchollet：以"模仿能力"评判 AGI 是范畴错误
Google DeepMind 研究员、ARC-AGI 创始人 François Chollet 发表观点：用 AI 对人类行为的模仿程度来衡量 AGI 是一个根本性的范畴错误，因为"模仿不是智能，也不是通用"。他主张，真正的 AGI 评判标准应当是：AI 能否学会我们没有教过它的事情，包括我们自己也不知道如何做的事情。这一观点与他长期推动的 ARC-AGI 基准测试哲学一脉相承。
- [查看 @fchollet 原始推文](https://x.com/fchollet/status/2047006540549509248)

## 16/18 LangChain 宣布将发布测试工具改进，5 月 13 日揭晓
LangChain CEO Harrison Chase 预告："LangChain 给你测试工具，但它从不告诉你测什么、按什么顺序、何时才算完成。这很快将改变。"将在 5 月 13 日举办的 Interrupt 大会上正式发布。这指向 AI Agent 开发中长期痛点：测试覆盖度和测试终止条件的不确定性。
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2046962351090606404)

## 17/18 Character.AI 推出 Memory 功能，角色将记住用户
Character.AI 官方宣布 Memory 功能正式上线，角色将开始记忆与用户的历史对话。官方表示将在未来几周内陆续推出一系列 Memory 相关新特性。这是 Character.AI 在个性化对话体验上的重要升级，长期记忆能力一直是角色扮演类 AI 产品的核心诉求。
- [查看 @character_ai 原始推文](https://x.com/character_ai/status/2047030699417571565)

## 18/18 swyx 等人预期 OpenAI 明日发布新模型
多位 AI 社区观察者（包括 swyx、bindureddy 等）表达了对 OpenAI 即将发布新模型的强烈预期，swyx 称"GPT 5.5 明天发布将是我能要到的最好生日礼物"。bindureddy 也预告"明天将至，OpenAI 的新模型会打破所有记录吗？"截至日报截稿，官方尚未正式宣布，但社区情绪高涨。
- [查看 @swyx 原始推文](https://x.com/swyx/status/2047137849539956862)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2047062789915877830)

---

## Deep Dive 附录

### Qwen3.6-27B 技术详情
Qwen3.6-27B 是阿里巴巴通义千问团队发布的最新开源稠密模型，参数量 27B，但在编码 Agent 能力上全面超越 397B 的 Qwen3.5-397B-A17B（总参数约 15 倍）。

关键规格：
- 架构：GatedDeltaNet + GatedAttention 混合层，共 64 层，隐藏维度 5120
- 上下文：原生 262,144 token，YaRN 扩展至 1,010,000 token
- 模态：文本 + 图像 + 视频（统一 checkpoint）
- 许可证：Apache 2.0

核心基准（Coding Agent）：
- SWE-bench Verified：77.2%（超 Qwen3.5-397B-A17B 的 76.2%）
- SWE-bench Pro：53.5%（超 50.9%）
- Terminal-Bench 2.0：59.3%（超 52.5%）
- SkillsBench Avg5：48.2%（超 30.0%）

知识与推理：MMLU-Pro 86.2%，GPQA Diamond 87.8%，AIME26 94.1%

支持 vLLM（≥0.19.0）、SGLang（≥0.5.10）等主流推理框架。默认开启思考模式，也支持关闭。
[查看原文](https://huggingface.co/Qwen/Qwen3.6-27B)

### Perplexity 搜索增强后训练流水线
Perplexity 公开了如何将开源基础模型（如 Qwen 系列）后训练为高质量搜索问答模型的技术细节：

1. **SFT 阶段**：指令遵循、语言一致性、边界守护（防越界）
2. **On-policy RL 阶段**：搜索准确率、引用质量、工具效率提升
3. **奖励函数设计**：偏好奖励只在回答正确时才计入，防止模型学到"措辞流畅但事实错误"的捷径

效果：同等基础模型经后训练后，在搜索事实准确性上与 GPT 系列相当，但成本更低。
[查看原文](https://x.com/perplexity_ai/status/2047016400292839808)

### OpenMythos：开源版 Claude Mythos 架构
一位开发者逆向工程并开源了 Anthropic Claude Mythos 的核心架构思路——OpenMythos（PyTorch 实现）。

核心创新：
- 单一 Block 复用：同一 block 在前向传播中运行最多 16 次，而非堆叠不同层
- 隐空间推理：推理在连续隐变量空间进行，不产生 CoT token
- 动态专家激活：每次迭代激活不同专家子集，每次 pass 为独立计算
- 效率：770M 参数版本匹配 1.3B 标准 Transformer 质量
- 推理时可扩展：计算深度在推理阶段动态扩展，内存占用不增加

这一架构允许模型在相同参数量下进行更深度的"内循环思考"。
[查看原文](https://x.com/AlphaSignalAI/status/2046977238839558411)
