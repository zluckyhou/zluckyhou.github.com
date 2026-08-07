---
layout: daily
title: "AI Frontier Daily | 2026.07.28"
headline: "Kimi K3 开放权重发布，把 2.8T MoE、视觉和 1M 上下文推到开放模型前沿"
date: 2026-07-28 09:07:00 +0800
permalink: /ai-daily/2026/07/28/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Moonshot AI 发布 Kimi K3 权重、技术报告和博客，称这是其最强模型：2.8T 参数 MoE、原生视觉理解、1M-token context window，并通过新架构达到约 2.5 倍 compute efficiency。官方同时开放 FlashKDA、MoonEP 和 AgentENV，覆盖 attention kernel、MoE 通信和大规模 agent environment 运行。Hugging Face、Cursor、Together、Baseten、Modal、Fireworks、Nebius、DigitalOcean 等同步接入，让这次发布不只是模型文件，而是一次开放模型生态分发。"
summary: "Moonshot AI 发布 Kimi K3 权重、技术报告和博客，称这是其最强模型：2.8T 参数 MoE、原生视觉理解、1M-token context window，并通过新架构达到约 2.5 倍 compute efficiency。官方同时开放 FlashKDA、MoonEP 和 AgentENV，覆盖 attention kernel、MoE 通信和大规模 agent environment 运行。Hugging Face、Cursor、Together、Baseten、Modal、Fireworks、Nebius、DigitalOcean 等同步接入，让这次发布不只是模型文件，而是一次开放模型生态分发。"
issue_count: 15
deep_dive_count: 6
reading_time: 21
cover: "https://blogs.nvidia.com/wp-content/uploads/2026/07/osaia-logo-garden_press-kit_1920x1080_V4.png"
signals: "Kimi_Moonshot · ClementDelangue · cursor_ai · togethercompute · bindureddy · AnthropicAI · huggingface · NVIDIAAI"
header-img: img/dark_yellow_400.png
---


## 1/15 Kimi K3 开放权重发布，把 2.8T MoE、视觉和 1M 上下文推到开放模型前沿
Moonshot AI 发布 Kimi K3 权重、技术报告和博客，称这是其最强模型：2.8T 参数 MoE、原生视觉理解、1M-token context window，并通过新架构达到约 2.5 倍 compute efficiency。官方同时开放 FlashKDA、MoonEP 和 AgentENV，覆盖 attention kernel、MoE 通信和大规模 agent environment 运行。Hugging Face、Cursor、Together、Baseten、Modal、Fireworks、Nebius、DigitalOcean 等同步接入，让这次发布不只是模型文件，而是一次开放模型生态分发。
- [查看 @Kimi_Moonshot 原始推文](https://x.com/Kimi_Moonshot/status/2081760186235289764)
- [查看 @Kimi_Moonshot 原始推文](https://x.com/Kimi_Moonshot/status/2081757327146045450)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2081770692911956354)
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2081848014444876166)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2081803869491716390)

## 2/15 Kimi K3 把开放模型竞争从权重扩展到推理伙伴和企业落地
Kimi K3 发布后，多家推理和开发平台同步强调 production access。Together AI 称 K3 面向 long-running agentic workflows，覆盖 code、tools、vision 和 research，并提供美国基础设施与 zero data retention；Cursor 称 K3 在 CursorBench 接近 frontier，并通过 Fireworks、Together、Baseten 提供美国推理；ChatLLM 也宣布托管在美国并启动开源 fine-tune。开放权重模型的竞争正在从“能下载”转向“能稳定、低延迟、合规地用于 agent workload”。
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2081803874105450588)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2081803875279839560)
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2081848014444876166)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2081781635176141100)

## 3/15 Kimi 同步开源 FlashKDA、MoonEP 和 AgentENV，补齐大模型训练与 agent RL 基础设施
Kimi 在模型发布外同步开源三块底层组件：FlashKDA 是 CUTLASS-based Kimi Delta Attention kernel，在 H20 上相对 flash-linear-attention baseline 给出 1.72-2.22 倍 prefill speedup；MoonEP 面向 distributed MoE workloads，减少 expert-parallel communication overhead；AgentENV 与 kvcache-ai 合作，用于大规模并行 agent environment，支持 snapshot、resume 和 fork。这些组件说明 K3 的开放策略不止给权重，也把训练、推理和 agentic RL 的基础设施一起外放。
- [查看 @Kimi_Moonshot 原始推文](https://x.com/Kimi_Moonshot/status/2081762799202746420)
- [查看 @Kimi_Moonshot 原始推文](https://x.com/Kimi_Moonshot/status/2081763086281973847)
- [查看 @Kimi_Moonshot 原始推文](https://x.com/Kimi_Moonshot/status/2081762978391843020)

## 4/15 PerceptionBench 用 3,000 道原子视觉题评估多模态模型“看得准不准”
Moonshot AI 发布 PerceptionBench，目标是把多模态模型的视觉感知从推理、常识和外部知识里拆出来。官方称该 benchmark 从 frontier model 在 42 个 benchmark 中的失败模式出发，归纳出 10 类 atomic perceptual capabilities，并构造 3,000 道已验证问题，每题只隔离一种能力、只需看图回答。这个方向把多模态评测从“综合答题”拉回到视觉底层能力诊断，对 agent 使用截图、UI、视频和图像工具的可靠性有直接影响。
- [查看 @Kimi_Moonshot 原始推文](https://x.com/Kimi_Moonshot/status/2081813202514681878)

## 5/15 Anthropic 明确反对 blanket open-weight ban，但主张芯片管制、反蒸馏和统一安全测试
Anthropic CEO Dario Amodei 发布 open-weights position，回应关于中国开放权重模型和美国企业使用限制的争论。文章称 Anthropic 从未主张按类别禁止 open-weights models，低风险开放模型是 public good；但对强模型提出三类政策重点：限制高端芯片和设备流向 authoritarian hands，打击 industrial-scale distillation operations，对所有 sufficiently capable models 不论开放或闭源都进行 cyber、bio、alignment 风险安全测试。这让 open-weight 争论从“禁或不禁”进入更细的能力阈值和风险治理讨论。
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2081864750296658008)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2081881971178053784)

## 6/15 NVIDIA、Hugging Face、Microsoft 等发起 Open Secure AI Alliance
NVIDIA 与 Hugging Face、Microsoft、Databricks、Cloudflare、LangChain、Linux Foundation、OpenClaw 等组成 Open Secure AI Alliance，主张用开放模型、harness 和工具提升 AI 安全与网络防御。NVIDIA 博文引用 Hugging Face 安全事件，称防守方需要能在自有基础设施上运行、检查和调整的 frontier agentic systems。联盟的技术焦点不是单一模型，而是 identity、permissions、harnesses、guardrails、logs、evaluation、safe model formats 和 secure coding workflows 等完整 agent stack。
- [查看 @huggingface 原始推文](https://x.com/huggingface/status/2081718698608402818)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2081666750807171180)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2081666832969445804)
- [查看 @AndrewYNg 原始推文](https://x.com/AndrewYNg/status/2081787106062746002)
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2081565741317595425)

## 7/15 Microsoft 推出 MAI-Cyber-1-Flash 和 MDASH，主打半价 frontier-grade security
Satya Nadella 和 Mustafa Suleyman 发布 Microsoft AI security 更新：MAI-Cyber-1-Flash 是微软首个 cybersecurity model，结合 MDASH multi-agent security harness 后，官方称在 CyberGym benchmark 达到 96%，高出 Mythos 12 个百分点，并以领先模型约一半成本运行。Project Perception 将其包装成完整 agentic security offering，让专门 agents 进行 attack simulation、detect/triage/investigate、fix/remediate。微软的叙事重点是把模型、信号、工具、harness 和安全工作流分层组合，降低 continuous defense 的 token 成本。
- [查看 @satyanadella 原始推文](https://x.com/satyanadella/status/2081779755146482153)
- [查看 @satyanadella 原始推文](https://x.com/satyanadella/status/2081779757562401098)
- [查看 @mustafasuleyman 原始推文](https://x.com/mustafasuleyman/status/2081781833100820681)
- [查看 @mustafasuleyman 原始推文](https://x.com/mustafasuleyman/status/2081782592370524510)
- [查看 @mustafasuleyman 原始推文](https://x.com/mustafasuleyman/status/2081783064280121713)

## 8/15 OpenAI 研究称近半 occupation-specific ChatGPT 工作消息跨越原岗位边界
OpenAI Economic Research 发布 Work at the Frontier 系列首篇，分析 80 多万条美国 ChatGPT 工作消息，称 16.8% 的 work-related messages 和 43.5% 的 occupation-specific messages 涉及另一个职业的任务。报告用 task crossover 描述 AI 让员工承担传统上属于其他岗位的工作：小企业主可写 copy、审合同、做基础财务分析，销售可探索客户数据，营销可排查网站。OpenAI 同日宣布 GPT-Live in ChatGPT Voice 面向 Edu、Business、Enterprise 全球开放。
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2081833350323720219)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2081833351678406878)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2081794871795589485)

## 9/15 Cohere North Automations 把企业 agent workflow 交给自然语言配置
Cohere 发布 North Automations，定位为让非技术员工用自然语言设计自动化工作流，并在每一步保持控制与治理。官方称 Automations 基于 Cohere North secure agentic platform，支持把复杂流程转成简单输出、让员工控制中间步骤，并在组织层面安全治理。这个产品信号与 Microsoft、Databricks 的 agent governance 叙事相呼应：企业 agent 不只需要模型能力，还需要流程编排、权限、审计和业务用户可操作的界面。
- [查看 @cohere 原始推文](https://x.com/cohere/status/2081756537249202319)
- [查看 @cohere 原始推文](https://x.com/cohere/status/2081756969816264758)
- [查看 @cohere 原始推文](https://x.com/cohere/status/2081757478727934247)

## 10/15 Cerebras 继续围绕 GPT-5.6 Sol/Terra/Luna 做高速推理叙事
Cerebras 发布关于如何使用 GPT-5.6 Sol、Terra 和 Luna 的文章链接，并以极简推文引流。结合近期 Cerebras 对 agent 延迟和高速 inference 的持续演示，这条更新延续其核心定位：在更强模型进入多步推理、工具调用和多模态 agent 后，tokens/sec 和端到端响应时间会直接影响产品可用性。当天与 Kimi K3、Together、Cursor 的推理伙伴消息放在一起看，模型发布的下游竞争正在迅速转向托管、吞吐、延迟和成本。
- [查看 @cerebras 原始推文](https://x.com/cerebras/status/2081828128952095022)
- [查看 @cerebras 原始推文](https://x.com/cerebras/status/2081828301409288441)

## 11/15 Databricks 继续推广 LTAP 和 Unity AI Gateway 的成本治理
Databricks 一方面推广 Unity AI Gateway webinar，称企业 AI spend 增长快于价值创造，需要从 token maxing 转向 value maxing，并提到其 annually governs more than 1 quadrillion tokens；另一方面通过 DataFramed podcast 继续解释 LTAP、Lakebase、real-time analytics、AI agent governance 和 Genie。Databricks 的主线是把企业 AI 的成本、数据新鲜度、事务/分析一体化和 agent governance 串起来：agent 产生更多数据库活动时，底层数据系统和模型网关会变成同一个平台问题。
- [查看 @databricks 原始推文](https://x.com/databricks/status/2081822457040719918)
- [查看 @databricks 原始推文](https://x.com/databricks/status/2081746564490432851)

## 12/15 LlamaIndex 发布 create-llama-worker，把 LlamaParse worker 部署到 Cloudflare 边缘
LlamaIndex 发布 create-llama-worker，帮助开发者用 `npm create @llamaindex/llama-worker` 脚手架生成可部署到 Cloudflare Worker 的 LlamaParse worker，用于 Parse、Classify 和 Extract。这个更新较小，但方向明确：文档解析、分类和抽取正在从集中式服务变成可在边缘和企业自有运行环境部署的组件。对 agentic retrieval 和文档工作流来说，解析层的位置会影响延迟、数据边界、成本和与业务系统的集成方式。
- [查看 @llama_index 原始推文](https://x.com/llama_index/status/2081780190615683226)

## 13/15 Matt Shumer 的 Gauntlet Loop 把多 agent prompt 变成 blind critic 迭代流程
Matt Shumer 解释 Gauntlet Loop：agent 将目标拆成多个部分，每个部分分配 specialist builder 和 blind critic sub-agent，只有当生成物优于真实世界等价物时才通过。他称该方法最初因 Claude 单 prompt 游戏 demo 获得关注，但可用于远多于游戏的项目。这个思路与 LangChain、LlamaIndex 等多 agent 编排方向相邻，重点不是让用户手写更长 prompt，而是让系统内部生成 builder/critic 角色、A/B 评估和逐段质量门槛。
- [查看 @mattshumer_ 原始推文](https://x.com/mattshumer_/status/2081830214384886228)
- [查看 @mattshumer_ 原始推文](https://x.com/mattshumer_/status/2081857631254372509)
- [查看 @mattshumer_ 原始推文](https://x.com/mattshumer_/status/2081859491121758215)
- [查看 @mattshumer_ 原始推文](https://x.com/mattshumer_/status/2081799758545404362)

## 14/15 开放环境成为 agent 学习与评测的新关注点
François Chollet 评论 iLands，称 AI 中最少被探索的问题之一是如何构建丰富的 open-ended environments：benchmarks 评估 intelligence，但 environments shape it。iLands 的价值在于不只让 agent 赚钱，而是让其在 living market 中生存，观察是否产生不同形式的 adaptation。与 PerceptionBench、AgentENV、Gauntlet Loop 放在同一天看，评测正在从静态题目扩展到视觉原子能力、可并行 agent environment、市场生存和多 agent 质量门。
- [查看 @fchollet 原始推文](https://x.com/fchollet/status/2081771295734173931)
- [查看 @Kimi_Moonshot 原始推文](https://x.com/Kimi_Moonshot/status/2081762978391843020)
- [查看 @Kimi_Moonshot 原始推文](https://x.com/Kimi_Moonshot/status/2081813202514681878)

## 15/15 机器人和开放硬件生态继续进入 AI 日报边缘主线
Rowan Cheung 转发 Weave Robotics 家用机器人预购信息，称约 8,000 美元的机器人可叠衣服、整理床铺，底座可从 3 英尺扩展到 5 英尺 9 英寸，两条机械臂有 80 英寸垂直 reach，并可选择 449 美元/月或 7,999 美元 upfront。Lisa Su 则提到 AMD 与韩国扩大 AI ecosystem 合作。这些不是 frontier model 发布，但说明物理 AI、机器人硬件、区域 AI 生态和开放创新仍在同一条产业链上推进。
- [查看 @rowancheung 原始推文](https://x.com/rowancheung/status/2081767853326495911)
- [查看 @rowancheung 原始推文](https://x.com/rowancheung/status/2081767871022334340)
- [查看 @LisaSu 原始推文](https://x.com/LisaSu/status/2081773289320358212)

---

## Deep Dive 附录

### Kimi K3 open frontier intelligence
Kimi K3 是 Moonshot AI 发布的 2.8T-parameter open MoE model，使用 Kimi Delta Attention、Attention Residuals、Stable LatentMoE 等结构，原生支持视觉和 1M-token context window。官方博客称 K3 在 long-horizon coding、knowledge work、visual reasoning 和 agentic workflows 上接近 frontier proprietary models，但仍承认与 Claude Fable 5、GPT-5.6 Sol 在整体体验上存在差距。发布还包含权重、技术报告、Kimi API、Kimi Code、Kimi Work 入口，并给出 $0.30/MTok cache-hit input、$3.00/MTok cache-miss input、$15.00/MTok output 的官方 API 价格。Kimi 把 K3 的价值放在开放权重、长上下文、多模态、agentic coding 和一整套运行基础设施上，而不是只发布单个 checkpoint。
[查看原文](https://www.kimi.com/blog/kimi-k3)

### Kimi infrastructure: FlashKDA, MoonEP, AgentENV and PerceptionBench
Kimi 同步开放了 K3 背后的多项基础设施。FlashKDA 是 Kimi Delta Attention 的 CUTLASS backend，面向 H20 等硬件优化 prefill；MoonEP 处理 distributed MoE expert-parallel communication；AgentENV 用于大规模 agentic RL 环境，支持快照、恢复和 fork。PerceptionBench 则从 42 个 benchmark 中的 frontier-model failure cases 出发，抽取 10 类 atomic visual perception capabilities，构建 3,000 道只需视觉观察、不需外部知识的题目。整体看，Moonshot 正在把“开放模型”扩展成包括训练通信、推理 kernel、agent environment 和评测集在内的开放工程栈。
[查看原文](https://www.kimi.com/blog/perception-bench)

### Anthropic position on open-weights models
Anthropic 的 open-weights position 明确否认其主张类别禁令：没有危险能力的开放权重模型是 public good，blanket ban 也无法解决其最担心的国家安全风险。文章把风险分成两类：authoritarian governments 建出更强模型并用于军事或镇压，以及 powerful models 被用于 cyber/bio misuse 或出现 alignment problems。其政策建议也相应更窄：高端芯片和设备管制，打击 industrial-scale distillation，对所有 sufficiently capable models 不论开放闭源都做 cyber、bio、alignment 预发布安全测试。它认可开放权重在 access、competition、control 上的价值，但反对预设“开放必然更安全”或“广泛能力一定更有利于防守方”。
[查看原文](https://www.anthropic.com/news/position-open-weights-models)

### Open Secure AI Alliance
NVIDIA 的 Open Secure AI Alliance 博文把 open models、open harnesses 和 open tools 定位为 cyber defense assets。联盟成员包括 NVIDIA、Hugging Face、Microsoft、Databricks、Cloudflare、LangChain、Linux Foundation、OpenClaw 等，目标是共享用于 AI 安全和网络防御的技术。博文用 Hugging Face 安全事件说明：当 closed AI tools 无法区分攻击者和防守者并阻断 forensic analysis 时，防守方需要能在自有基础设施上运行和审计的 frontier agentic systems。技术焦点覆盖身份、权限、harness、guardrail、日志、评测、safe tensor format、signed patches 和 secure coding workflows，强调 agent 安全是完整 stack 问题。
[查看原文](https://blogs.nvidia.com/blog/open-secure-ai-alliance/)

### Microsoft MAI-Cyber-1-Flash inside MDASH
Microsoft AI 的 MAI-Cyber-1-Flash 与 MDASH 更新把网络防御成本作为核心卖点。Satya Nadella 称 MAI-Cyber-1-Flash 是微软首个 cybersecurity model；Mustafa Suleyman 的线程称它结合 MDASH multi-agent security harness 后在 CyberGym 达到 96%，比 Mythos 高 12 个百分点，成本约为 leading models 的一半。MDASH 被描述为多模型、多 agent scanning harness，可让不同 specialized agents 在真实安全信号和工作流中模拟攻击、检测、调查、修复漏洞。关键思路是把 90% 常规 vulnerability detection/patching 交给低成本专用模型与 harness，把少数极难任务留给更大模型。
[查看原文](https://microsoft.ai/news/introducing-mai-cyber-1-flash-inside-mdash/)

### OpenAI Work at the Frontier and Cohere North Automations
OpenAI 的 Work at the Frontier 报告分析 80 多万条美国 ChatGPT 工作消息，提出 task crossover：AI 让用户执行传统上属于其他岗位的任务。报告称 16.8% 的 work-related messages、43.5% 的 occupation-specific messages 属于跨岗位任务，小团队和小企业场景尤其明显。Cohere North Automations 则从产品侧回应类似趋势：让业务员工用自然语言配置 workflow，并在每一步保留控制和治理。两者共同指向企业 AI 的下一阶段：AI 不只是提升某个岗位效率，而是在重分配谁能完成哪些任务，同时要求平台提供安全、可治理、可落地的 workflow layer。
[查看原文](https://openai.com/index/how-ai-is-expanding-what-people-do-at-work/)
