---
layout: daily
title: "AI Frontier Daily | 2026.09.22"
headline: "Grok 4.7主攻长时编码与知识工作，同价替代4.6"
date: 2026-09-22 09:07:00 +0800
permalink: /ai-daily/2026/09/22/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "SpaceXAI 发布 Grok 4.7，采用更大的基础模型和面向多小时任务的更长强化学习训练，并针对 Grok Bot 外壳做原生适配。官方称其 CursorBench 4.0 为 46.3%、Terminal-Bench 4.0 从 20.3% 升至 38.0%、法律智能体基准为 19.6%；API 起价为每百万输入/输出 token 2/6 美元，与 4.6 相同。模型已进入 Grok Build、Cursor 和公开 API，发布方基准与安全结果仍需独立复核。"
summary: "SpaceXAI 发布 Grok 4.7，采用更大的基础模型和面向多小时任务的更长强化学习训练，并针对 Grok Bot 外壳做原生适配。官方称其 CursorBench 4.0 为 46.3%、Terminal-Bench 4.0 从 20.3% 升至 38.0%、法律智能体基准为 19.6%；API 起价为每百万输入/输出 token 2/6 美元，与 4.6 相同。模型已进入 Grok Build、Cursor 和公开 API，发布方基准与安全结果仍需独立复核。"
issue_count: 18
deep_dive_count: 6
reading_time: 17
cover: "https://x.ai/images/news/grok-4-7-og.webp"
signals: "elonmusk · mattshumer_ · OpenAI · emollick · ClementDelangue · huggingface · AlphaSignalAI · perplexity_ai"
header-img: img/dark_yellow_400.png
---


## 1/18 Grok 4.7主攻长时编码与知识工作，同价替代4.6
SpaceXAI 发布 Grok 4.7，采用更大的基础模型和面向多小时任务的更长强化学习训练，并针对 Grok Bot 外壳做原生适配。官方称其 CursorBench 4.0 为 46.3%、Terminal-Bench 4.0 从 20.3% 升至 38.0%、法律智能体基准为 19.6%；API 起价为每百万输入/输出 token 2/6 美元，与 4.6 相同。模型已进入 Grok Build、Cursor 和公开 API，发布方基准与安全结果仍需独立复核。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@elonmusk<span class="source-chip__links"><a href="https://x.com/elonmusk/status/2102107554578931980" target="_blank" rel="noopener" aria-label="@elonmusk 原文 1">1</a><a href="https://x.com/elonmusk/status/2102102621037236699" target="_blank" rel="noopener" aria-label="@elonmusk 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/mattshumer_/status/2102084211456827542" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@mattshumer_</a></div>

## 2/18 OpenAI称数学模型解决百余开放问题，独立顾问组介入发布规范
OpenAI 称 8 月 28 日启动训练的一套内部模型，除 Navier–Stokes 千年难题外，已解决数学多个领域的一百多个长期开放问题；相关结论仍需数学共同体完整验证。公司与九名数学家建立由普林斯顿高等研究院托管的独立顾问组，负责判断结果重要性、协调传播并讨论学术规范。成员不由 OpenAI 付费，可主动公开批评，但不负责决定公司内部研发节奏。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/OpenAI/status/2102093145051943229" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a><a class="source-chip" href="https://x.com/emollick/status/2102134347084034449" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a></div>

## 3/18 小米开源MiMo-V2.6，把模型权重与Agentic RL训练栈一并开放
小米发布原生全多模态的 MiMo-V2.6-Pro 与 Flash。官方称 Pro 在 Artificial Analysis Intelligence Index 得分 46；六天在线 RL 训练累计约 75 万条轨迹，Pro 训练成本约 262 万美元，DeepSWE v1.1 从 58.4 升至 72.6。开放内容包括两款模型权重、Distill-Qwen-9B、七千多个任务环境、端到端 RL 框架和可组合 mini-harness，重点是让外部团队复现长程智能体训练；成绩仍属发布方口径。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue<span class="source-chip__links"><a href="https://x.com/ClementDelangue/status/2102134008901513639" target="_blank" rel="noopener" aria-label="@ClementDelangue 原文 1">1</a><a href="https://x.com/ClementDelangue/status/2102141768674222323" target="_blank" rel="noopener" aria-label="@ClementDelangue 原文 2">2</a></span></span></div>

## 4/18 Hugging Face tokenizers v1候选版把单线程编码提速3至30倍
Hugging Face 发布 Rust `tokenizers` v1 首个候选版本，在保持 v0.23 相同 token ID、API、词表和 merge rank 的前提下重写性能路径。官方在 Apple M4 Max 上测得十类模型的单线程编码提升 3 至 30 倍，八 worker 扩展效率约为理想线性的 76%。核心改动包括 SIMD 位流切分、线程本地词缓存、无分配 merge loop 和原生并发；目前结果针对 Rust crate，Python 绑定仍有额外调用开销。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface<span class="source-chip__links"><a href="https://x.com/huggingface/status/2102055530424389871" target="_blank" rel="noopener" aria-label="@huggingface 原文 1">1</a><a href="https://x.com/huggingface/status/2102068253627482623" target="_blank" rel="noopener" aria-label="@huggingface 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/ClementDelangue/status/2102068090951393476" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue</a></div>

## 5/18 HarnessTax量化“智能体外壳税”：同模型成本最多相差5倍
HarnessTax 在 SWE-bench Lite 与 Terminal-Bench 2.0 的 60 个任务上测试七个模型、三种外壳共 21 个组合。Claude Fable 5 在 Claude Code 与 Pi 中成功率分别为 97.8% 和 96.7%，但单次成本为 1.33 与 0.67 美元；两者均约 15 回合，前者初始上下文却超过十倍。研究认为模型与外壳应合并评测，只有当工具、记忆和长指令确实修复具体失败时，额外 token 才值得支付。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2102083611696455697" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2102083614448001158" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a></span></span></div>

## 6/18 Eidon关停前开放1274小时第一视角机器人数据
已停止运营的 Eidon AI 发布最终版 Tracker POV：13,451 段、约 1,274 小时家庭劳动第一视角视频，配套双手、双前臂、双上臂和胸部共七个 IMU 的 24Hz 数据，主体视频约 9.05TB，采用 CC-BY-4.0。贡献者签署了研究、商业和公开分发同意书，但原视频未做人脸或区域模糊，可能包含屏幕、文件和家庭内部；使用方仍需自行处理隐私与生物识别风险。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/ClementDelangue/status/2102046770947613026" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue</a><a class="source-chip" href="https://x.com/huggingface/status/2101995717921309032" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface</a></div>

## 7/18 Meta Muse把持续对话型个人智能体做成大众化产品
Ethan Mollick 试用后把 Meta Muse 视为“长期持续聊天的个人助理智能体”：产品围绕单一日常助理场景设计，降低了普通用户理解智能体和配置工具的门槛，同时用较充足的计算资源换取更顺滑体验。他认为其他实验室虽然具备相近底层能力，却更重视企业 token 付费场景，消费端可用性未被同等优化。用户仍应注意数据控制，可在设置中关闭“帮助改进模型”的训练选项。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2102033312554287270" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2102034426498625717" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a><a href="https://x.com/emollick/status/2102036722724868500" target="_blank" rel="noopener" aria-label="@emollick 原文 3">3</a></span></span></div>

## 8/18 Perplexity Computer接入H3与Seedance 2.5生成完整视频素材
Perplexity Computer 现可调用 MiniMax H3 与字节跳动 Seedance 2.5，在同一任务线程里把文案、创意和成片组合交付。官方给出的场景包括营销短片、产品演示和社交媒体素材，用户不必单独切换视频工具或手工转交上下文。功能已面向 Pro 与 Max 订阅者开放；推文没有给出分辨率、时长、生成成本或可控性基准，实际工作流价值仍取决于成片质量和反复修改效率。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/perplexity_ai/status/2102071798179434966" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@perplexity_ai</a></div>

## 9/18 Pika Relight Media重建图片与视频光影，同时保留主体运动
Pika 在新版产品中推出 Relight Media，可对照片或视频重新构建光线与阴影，既可选择预设，也可手动调节；官方称主体、构图和运动保持不变。相比重新生成整段内容，这类后期工具把生成模型放进更确定的制作环节，适合修正拍摄光线或统一素材风格。当前公告未披露视频长度、分辨率、时间一致性与处理成本上限，仍需用复杂运动、反光和遮挡场景检验稳定性。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@pika_labs<span class="source-chip__links"><a href="https://x.com/pika_labs/status/2102193681596109206" target="_blank" rel="noopener" aria-label="@pika_labs 原文 1">1</a><a href="https://x.com/pika_labs/status/2102193685429625112" target="_blank" rel="noopener" aria-label="@pika_labs 原文 2">2</a></span></span></div>

## 10/18 Runway Workflows扩充合成、Alpha、HDR与深度管线
Runway 扩展 Workflows，新增 Compositing、Alpha、HDR、Depth Map 和 RGB Depth 节点，让生成、抠像、深度处理与合成更集中地在同一可视化管线完成。产品方向从单次模型调用继续转向可复用的媒体生产图，便于把生成视频接入传统后期步骤并保存处理顺序。官方已提供可直接创建的示例工作流，但公告没有给出节点间精度损失、长项目版本管理或团队协作数据。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml<span class="source-chip__links"><a href="https://x.com/runwayml/status/2102126749622345858" target="_blank" rel="noopener" aria-label="@runwayml 原文 1">1</a><a href="https://x.com/runwayml/status/2102126751170150859" target="_blank" rel="noopener" aria-label="@runwayml 原文 2">2</a></span></span></div>

## 11/18 LlamaIndex Extract新增逐字段置信度，为自动化设置复核阈值
LlamaIndex 为 Extract 加入 Grounded Confidence，可对文档抽取结果逐字段返回置信度，使工作流按阈值自动接受、升级到更强模型或交给人工复核。该能力已覆盖 Cost Effective、Agentic 与 Agentic Plus 三档，并可与 schema、来源引用同时启用。它把“抽取是否成功”从整体主观判断变成字段级路由信号，但置信度是否校准、不同文档类型的误差分布仍需用业务样本验证。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@llama_index<span class="source-chip__links"><a href="https://x.com/llama_index/status/2102081253335785825" target="_blank" rel="noopener" aria-label="@llama_index 原文 1">1</a><a href="https://x.com/llama_index/status/2102197599554228580" target="_blank" rel="noopener" aria-label="@llama_index 原文 2">2</a></span></span></div>

## 12/18 Databricks DevHub用模板与智能体提示串起完整应用栈
Databricks 推出面向开发者的 DevHub，提供可复制到 Cursor、Claude Code、Codex 等编码智能体的提示、分步文档和现成模板。模板覆盖 Databricks Apps、Lakebase Postgres、Agent Bricks、Genie、模型服务、向量检索和智能体记忆，并提供 Docs MCP 与项目级技能接入方式。目标是把数据、应用托管、智能体运行和治理放在同一工作区；对非 Databricks 团队，平台绑定与外部部署成本仍需评估。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/databricks/status/2102037691856519513" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a></div>

## 13/18 vLLM把视频解码卸载到NVDEC，8张H100吞吐超过翻倍
vLLM 集成 PyNvVideoCodec，把视频帧解码从 CPU 的 OpenCV/FFmpeg 路径移到 NVIDIA GPU 的 NVDEC。官方在八张 H100、每卡一个 vLLM 副本的视频描述任务上测得吞吐超过 CPU 解码方案两倍，并避免 CPU 在两至四卡后率先饱和。标准 CUDA 发行版已包含依赖，但高并发需要 CUDA MPS，并必须预留部分显存给解码；若 KV cache 已占满显存，收益可能被资源竞争抵消。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/NVIDIAAI/status/2102162025233424399" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI</a></div>

## 14/18 Deel把内部运营智能体Akai外部化，强调录制流程与审批边界
Deel 将内部运营平台 Akai 作为独立产品开放。业务人员可录屏并口述一次流程，系统同时捕获界面、网络请求和决策上下文，再把 API、连接器与浏览器步骤组合成可审查脚本。官方称 Deel 的费用审核从每月约 500 小时降至很少，并承诺百人以上客户首月节省 1,000 小时，否则退款。写操作默认审批、确定性计算锁定规则、高风险分支转人工，但这些成效仍需客户侧审计验证。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LinusEkenstam<span class="source-chip__links"><a href="https://x.com/LinusEkenstam/status/2102168297290768449" target="_blank" rel="noopener" aria-label="@LinusEkenstam 原文 1">1</a><a href="https://x.com/LinusEkenstam/status/2102130141220548769" target="_blank" rel="noopener" aria-label="@LinusEkenstam 原文 2">2</a></span></span></div>

## 15/18 Jev之后，开源决策模型与文档工作流快速补齐生态
Jev 引发的“System One 决策模型”路线开始出现开放替代与集成层：基于 Qwen3.5 的 SemIf 在 JevBench 得分 75.4，对比 Jev 的 74.7，并由 LangSmith Gateway 限时免费托管；DocJev 把同类模型用于文档分类与切分，LangSmith 也加入逐条轨迹评分和智能体路由。此类模型以类型化概率替代自由文本，适合高频判断，但基准对题型、阈值和选项顺序敏感，不能直接外推到开放式规划。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17<span class="source-chip__links"><a href="https://x.com/hwchase17/status/2102077999742931147" target="_blank" rel="noopener" aria-label="@hwchase17 原文 1">1</a><a href="https://x.com/hwchase17/status/2102065131202945152" target="_blank" rel="noopener" aria-label="@hwchase17 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/llama_index/status/2101860993282498604" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@llama_index</a></div>

## 16/18 Halo让Hugging Face模型直接分布式训练，吞吐达TRL的2.3至2.8倍
White Circle 开源训练框架 Halo，把分布式并行、融合内核、bf16 优化器、packing 与异步 RL 循环直接接到 Hugging Face 模型，无需改用 Megatron 的模型实现或新 checkpoint 格式。官方称同硬件吞吐为标准 TRL 的 2.3 至 2.8 倍、峰值内存更低，新增模型家族约需百行代码。它瞄准单卡放不下、又不足以支撑超大集群重构的团队；性能仍需在不同模型、序列长度和网络拓扑上复核。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue<span class="source-chip__links"><a href="https://x.com/ClementDelangue/status/2102158193170284792" target="_blank" rel="noopener" aria-label="@ClementDelangue 原文 1">1</a><a href="https://x.com/ClementDelangue/status/2102158748491849836" target="_blank" rel="noopener" aria-label="@ClementDelangue 原文 2">2</a></span></span></div>

## 17/18 Andrew Ng把AI风险争论的重心放在网络安全与工程责任
Andrew Ng 认为近期 AI 风险舆论并未对应新的灭绝级能力跃迁，但网络攻击能力确实显著变化：智能体可以持续尝试并串联漏洞，防守方必须改善沙箱、监控与修复流程。他以 OpenAI 智能体群入侵 Hugging Face 事件为例，主张把责任落到部署者、工具开发者与权限设计，而不是把模型人格化。该文章是个人风险判断，并不否认不可预测性；其可检验部分是工程控制能否在真实攻击中稳定降低损害。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AndrewYNg/status/2102140576498065758" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AndrewYNg</a></div>

## 18/18 软件工程角色从“写代码”转向“维护理解”，需要新的事实源
François Chollet 预测五年后软件工程师数量可能更多，但多数人不再亲自读写代码；他的核心原则是“可以委托编码，不能委托理解”。如果团队过去依靠源代码本身形成和校正系统认知，智能体生成代码后就需要新的事实源与工作流，例如可验证规格、架构约束、行为测试、决策记录和运行观测。该观点不是就业预测模型，却点出自动生成速度提升后，理解、验收与责任边界会成为新的工程瓶颈。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet<span class="source-chip__links"><a href="https://x.com/fchollet/status/2102166631439053014" target="_blank" rel="noopener" aria-label="@fchollet 原文 1">1</a><a href="https://x.com/fchollet/status/2102166827107500114" target="_blank" rel="noopener" aria-label="@fchollet 原文 2">2</a></span></span></div>

---

## Deep Dive 附录

### Grok 4.7：把长程编码、专业工作与外壳适配放进同一轮升级
Grok 4.7 采用更大的基础模型，并把更长的强化学习训练集中在多小时任务、自我核验和长上下文管理；针对 Grok Bot 的原生训练意味着模型—外壳协同成为能力的一部分。公开 API 支持 50 万 token 上下文和四档推理强度，20 万 token 以下每百万输入/缓存输入/输出 token 为 2/0.5/6 美元。官方基准显示 Terminal-Bench 4.0 从 4.6 的 20.3% 升到 38.0%，CursorBench 4.0 为 46.3%，EEBench 为 64.0%；但它在 Fable 5.1 的部分长程基准上仍落后。新安全栈的拒绝、越狱和双用途结果也来自发布方，需要独立红队与生产数据验证。
[查看原文](https://x.ai/news/grok-4-7)

### OpenAI数学顾问组：治理结果披露，但不控制能力研发节奏
OpenAI 称内部模型已解决 Navier–Stokes 千年难题及一百多个长期开放问题，并承认以开放难题作为基准可能给数学共同体带来署名、抢先发布、研究议程和职业秩序方面的外部性。由高等研究院托管的九人顾问组将评估结果重要性、协调披露并建议学术规范；成员无 OpenAI 薪酬，可主动发声和公开批评。关键限制是顾问组不负责决定内部数学研发速度，因此它更像结果治理与社会接口，而非训练或部署监督机构。后续应观察证明验证流程、优先权处理、用户未公开研究隔离和顾问建议公开程度。
[查看原文](https://openai.com/index/advisory-group-on-mathematics-and-ai/)

### MiMo-V2.6：开源重点从最终权重扩展到强化学习生产资料
MiMo-V2.6 的 Pro 与 Flash 都是原生全多模态模型，六天在线训练约产生 75 万条轨迹，单步处理 35 亿至 37 亿 token，并将代码、通用、视觉和网络安全任务混合进多外壳 RL。除权重和技术报告，小米还开放 Distill-Qwen-9B、七千多个任务环境、环境交互到策略优化的完整框架，以及把提示、工具和上下文管理解耦的 mini-harness。其价值在于外部团队可以复现实验、替换奖励和研究跨外壳泛化，而不只是下载模型。训练成本、DeepSWE 增益和 AA 排名均为官方数据，复现难度仍受算力、数据清洗与 grader 配置影响。
[查看原文](https://mimo.mi.com/docs/en-US/news/latest/v2-6)

### tokenizers v1：当模型更快后，CPU分词重新成为系统瓶颈
v1 不改变 token 结果和主要 API，而是重构分词路径：用 SIMD 位流替换正则切分，以线程本地缓存复用重复词结果，在预分配缓冲区内完成 merge，并让一个 tokenizer 跨线程并发。官方在 M4 Max 上测得不同模型单线程提速 3 至 30 倍，八 worker 达到约 76% 线性扩展。对大规模数据预处理、短输出高并发服务和长输入重复处理，这能减少 GPU 等待 CPU 的时间。候选版仍未覆盖所有计划中的模型族，Python 绑定还有额外开销，部署者应使用自己的语言分布、批大小和硬件运行 tokbench，而非直接套用峰值数字。
[查看原文](https://huggingface.co/blog/tokenizers-v1)

### HarnessTax：编码智能体的真实采购单位是“模型×外壳”
研究在 60 个任务上比较 21 个模型—外壳组合，发现系统提示、工具定义、记忆和上下文管理可显著改变 token 消耗，却未必同步提高成功率。最醒目的例子中，Claude Fable 5 在 Claude Code 与 Pi 的成功率只差 1.1 个百分点，单次成本却约翻倍；轻量 Pi 只提供四个基础工具，仍位于两组基准的成本—成功率前沿。研究也显示非原厂外壳在多数可比组合中取得更高成功率。对团队的直接含义是：用自己的任务同时记录成功、重试、总 token、墙钟时间和失败类型，再决定是否增加工具与上下文，而不是默认采用模型供应商的配套产品。
[查看原文](https://harnesstax.github.io/)

### Eidon Tracker POV：公司可以消失，机器人训练数据仍能延续
Tracker POV 把家庭劳动中的第一视角视频与七点上肢/躯干 IMU 配对，覆盖 27 名贡献者、13,451 段录制和约 1,274 小时，可用于视觉—动作表征、模仿学习和机器人感知。视频与传感器分库存储、通过 recording_id 连接，另有 306 小时无传感器素材；CC-BY-4.0 允许商业使用。该发布也展示“关停后开放资产”的可复用路径，但隐私不是靠开放许可自动解决：视频未做模糊处理，家庭内部、屏幕、文件或偶然人脸仍可能出现。使用方需要在取样、训练、再发布和删除请求上建立额外控制。
[查看原文](https://huggingface.co/datasets/eidon-ai/tracker-pov)
