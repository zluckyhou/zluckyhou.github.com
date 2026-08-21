---
layout: daily
title: "AI Frontier Daily | 2026.08.21"
headline: "Cerebras 发布 CS-4，超 10 万亿参数模型推理突破千 token/s"
date: 2026-08-21 09:07:00 +0800
permalink: /ai-daily/2026/08/21/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Cerebras 发布第四代整机 CS-4：单机由三颗 WSE-3 Turbo 与全新 Nexus 机架组成，官方称相较 CS-3 推理最高提速 2 倍、token 容量最高增至 10 倍，相较生产 GPU 系统最高快 30 倍；多机互连延迟最低 2 微秒，可让超过 10 万亿参数的模型维持每秒 1,000 token 以上。系统原生支持把 prefill 放在 AMD Helios、AWS Trainium 等平台、由 CS-4 执行 decode；首批设备本季度出货。上述数字来自厂商基准与部分预测。"
summary: "Cerebras 发布第四代整机 CS-4：单机由三颗 WSE-3 Turbo 与全新 Nexus 机架组成，官方称相较 CS-3 推理最高提速 2 倍、token 容量最高增至 10 倍，相较生产 GPU 系统最高快 30 倍；多机互连延迟最低 2 微秒，可让超过 10 万亿参数的模型维持每秒 1,000 token 以上。系统原生支持把 prefill 放在 AMD Helios、AWS Trainium 等平台、由 CS-4 执行 decode；首批设备本季度出货。上述数字来自厂商基准与部分预测。"
issue_count: 15
deep_dive_count: 9
reading_time: 17
cover: "https://cdn.sanity.io/images/e4qjo92p/production/d109d095daa0d697a3929226431d9f206f14e73d-2697x1568.png?rect=0,76,2697,1416&w=1200&h=630&fit=max&auto=format"
signals: "cerebras · fchollet · demishassabis · AIatMeta · sama · pika_labs · SakanaAILabs · gdb"
header-img: img/dark_yellow_400.png
---


## 1/15 Cerebras 发布 CS-4，超 10 万亿参数模型推理突破千 token/s
Cerebras 发布第四代整机 CS-4：单机由三颗 WSE-3 Turbo 与全新 Nexus 机架组成，官方称相较 CS-3 推理最高提速 2 倍、token 容量最高增至 10 倍，相较生产 GPU 系统最高快 30 倍；多机互连延迟最低 2 微秒，可让超过 10 万亿参数的模型维持每秒 1,000 token 以上。系统原生支持把 prefill 放在 AMD Helios、AWS Trainium 等平台、由 CS-4 执行 decode；首批设备本季度出货。上述数字来自厂商基准与部分预测。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cerebras/status/2090529246380753394" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cerebras</a></div>

## 2/15 Gemini 3.7 Flash 在 ARC-AGI-2 验证集拿到 84.6%，单题成本 0.25 美元
ARC Prize 公布经验证的 Gemini 3.7 Flash 成绩：ARC-AGI-2 为 84.6%、中位成本 0.25 美元/题，ARC-AGI-1 为 95.5%、0.12 美元/题。Google 同期称该模型在 Artificial Analysis 的 AA-AnalystAgent 复杂真实任务榜位列第一。成绩把 Flash 档模型推进到高准确率、低单题成本区间，但 ARC-AGI 验证使用公开评测集，不能直接等同于私有竞赛集或开放环境中的通用 Agent 能力。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/fchollet/status/2090548556138742203" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet</a><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@demishassabis<span class="source-chip__links"><a href="https://x.com/demishassabis/status/2090572780928438777" target="_blank" rel="noopener" aria-label="@demishassabis 原文 1">1</a><a href="https://x.com/demishassabis/status/2090572766550405601" target="_blank" rel="noopener" aria-label="@demishassabis 原文 2">2</a></span></span></div>

## 3/15 Meta 用 Muse Spark 1.2 打通视觉编码、工具调用与机器人控制
Meta 展示 Muse Spark 1.2 的原生多模态 Agent 能力：模型可理解图像、音频、视频和文档，把视觉布局转为可运行网页或游戏代码，也能根据环境观察调用工具，引导机器人寻找物体或让双臂机器人整理桌面。Meta 同时预览 WildArtifactBench，以人工和 Agent 偏好评审的胜率、Elo 取代单一标准答案，覆盖音频分析、医学影像、3D 建模、材料计量和视频编辑等真实交付物；首批公开 10 个任务。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AIatMeta<span class="source-chip__links"><a href="https://x.com/AIatMeta/status/2090485743034716420" target="_blank" rel="noopener" aria-label="@AIatMeta 原文 1">1</a><a href="https://x.com/AIatMeta/status/2090485750076989595" target="_blank" rel="noopener" aria-label="@AIatMeta 原文 2">2</a><a href="https://x.com/AIatMeta/status/2090485751926706501" target="_blank" rel="noopener" aria-label="@AIatMeta 原文 3">3</a><a href="https://x.com/AIatMeta/status/2090505413817246050" target="_blank" rel="noopener" aria-label="@AIatMeta 原文 4">4</a></span></span></div>

## 4/15 OpenAI 首批 Vera Rubin 机架到位，并已运行下一代预训练栈
OpenAI 基础设施负责人宣布，公司首批 NVIDIA Vera Rubin 机架已经到位并运行训练栈，用于扩展下一代前沿模型的预训练算力；Sam Altman 转发确认这一里程碑。消息表明 Rubin 平台已从路线图进入 OpenAI 的实际训练环境，但公告没有披露机架数量、集群规模、功耗、网络拓扑、训练模型或正式投产时间，也没有提供与 Blackwell 系统的吞吐和成本对比。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/sama/status/2090512062149476489" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sama</a></div>

## 5/15 Pika Music 用统一扩散模型组合提示词、歌词、声音与参考曲
Pika Music 接受文本提示、歌词、声音参考和音乐参考四种输入，可单独或组合使用，并在同一共享潜空间扩散解码器内同时处理曲式、演唱特征、文字指令和参考风格，而不是串联多个独立模型。官方称可生成最长 6 分钟歌曲，90 秒歌曲本地平均 6.21 秒完成，约为播放速度的 14.5 倍，成本最高比同类模型低 10 倍；固定歌词基准的内容愉悦度与制作质量接近 Suno。数据均为厂商测试。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@pika_labs<span class="source-chip__links"><a href="https://x.com/pika_labs/status/2090484496764412255" target="_blank" rel="noopener" aria-label="@pika_labs 原文 1">1</a><a href="https://x.com/pika_labs/status/2090484498454749233" target="_blank" rel="noopener" aria-label="@pika_labs 原文 2">2</a><a href="https://x.com/pika_labs/status/2090484500644143451" target="_blank" rel="noopener" aria-label="@pika_labs 原文 3">3</a><a href="https://x.com/pika_labs/status/2090484502615519292" target="_blank" rel="noopener" aria-label="@pika_labs 原文 4">4</a></span></span></div>

## 6/15 Sakana Translate 换用新一代 Namazu，强化日语文化语境翻译
Sakana AI 将翻译服务升级到新一代 Sakana Namazu，在保持日语、英语、中文双向翻译及免费使用不变的同时，刷新基础模型并改进后训练方法。厂商用自研 TransEvalnia 对 160 个内部日英任务做一对一比较，Sakana Translate 相对每个对照系统的胜率都超过 50%，尤其强调“お宮参り”等文化特定表达的自然翻译。后续计划加入 PDF 与 Office 文件翻译、术语表、行业模型、API、SSO、审计日志和本地部署。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs<span class="source-chip__links"><a href="https://x.com/SakanaAILabs/status/2090586947047895536" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 1">1</a><a href="https://x.com/SakanaAILabs/status/2090588201413120470" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 2">2</a><a href="https://x.com/SakanaAILabs/status/2090588329301659834" target="_blank" rel="noopener" aria-label="@SakanaAILabs 原文 3">3</a></span></span></div>

## 7/15 Codex 从编码工具扩展到税务、代码迁移和浏览器工作流
OpenAI 展示 Codex harness 的三类非传统落地：税务 Agent 试点处理 7,000 份申报表，整体准备时间约减少三分之一，并用生产失败轨迹持续生成可验证修复；大型代码迁移案例把原本按年估算的工作压缩到数周；浏览器场景则把同一 Agent 循环用于网页操作。官方已开放 Codex harness 供团队构建自己的产品。案例说明通用执行框架正在跨领域复用，但行业合规、人工复核和失败回滚仍由应用方负责。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb<span class="source-chip__links"><a href="https://x.com/gdb/status/2090246288478814281" target="_blank" rel="noopener" aria-label="@gdb 原文 1">1</a><a href="https://x.com/gdb/status/2090327069985268049" target="_blank" rel="noopener" aria-label="@gdb 原文 2">2</a><a href="https://x.com/gdb/status/2090449916456009972" target="_blank" rel="noopener" aria-label="@gdb 原文 3">3</a></span></span></div>

## 8/15 Chroma Foundation 从 Agent 会话自动维护“自改进知识库”
Chroma 发布 Foundation 研究预览：系统跟随 Claude Code、Codex、Slack 等工作流，从 Agent 会话中提取显性与隐性组织知识，持续维护可查询、会自我更新的团队 wiki，并可通过 MCP 把上下文带到不同模型和 harness。底层基于 ChromaDB 与 Context-1，提供版本、并发、血缘和访问控制；公司称其在 BEAM memory benchmark 达到 SOTA，并具备 SOC 2 Type 2。当前产品已提供 macOS 入口，但官方也明确称技术仍不完美。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hwchase17/status/2090478630585745678" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17</a></div>

## 9/15 HiPHI 公布 617.5 小时高精度人类动作与物体交互数据
Noitom Robotics 将 HiPHI 数据集公开用于研究，包含 617.5 小时高精度人体动作和人—物交互，并公布覆盖率与逐帧质量指标；基于该数据训练的策略已部署到真实 Unitree G1 人形机器人。数据分类不从任务清单出发，而借助 FrameNet 构建 22 个 motion frames 和 214 个 motion units，以减少重叠并量化采集覆盖。公司称背后 ModalityNet 基础设施每年可生产超过 10 万小时人类中心数据，该产能仍属厂商披露。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/huggingface/status/2090372091409264646" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface</a></div>

## 10/15 AI21 用独立验证器把 FACTS-Search 从 83.3 提到 93.4
AI21 发现 Agent 搜索的主要瓶颈常在候选选择：不同强弱、开闭源生成器的 pass@k 均高于 pass@1，正确答案已在候选池却被多数投票丢弃。其独立验证器只看问题与单个答案，重新检索后先否决错误候选，再对剩余结果投票；混合模型池在 FACTS-Search 从 83.3 提至 93.4，超过已发布 89.4。训练后的 8B 验证器达到 92.9、成本 1.34 美元，并能迁移到 BrowseComp-Plus，但召回率需少量 SFT 修复。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AI21Labs/status/2090424754377289837" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AI21Labs</a></div>

## 11/15 Open Bot 开源持久在线 AI 同事，并兼容多种 Agent harness
CopilotKit 开源 Open Bot，目标是复现“持续在线、拥有自己电脑”的企业 Agent 形态，并通过 AG-UI 连接不同 harness。项目包含 AI Coworker、生成式 UI、聊天与线程、本地或远程 computer use、设备端工具调用、人类审批与交接、实时流式输出，以及由企业自行持有的完整运行数据；官方列出的兼容范围包括 LangChain、Mastra、CrewAI 和 OpenAI Agents SDK。当前发布更像参考实现，生产权限边界仍需部署方定义。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hwchase17/status/2090508534484189575" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17</a></div>

## 12/15 Databricks 披露 OpenAI 跨 Azure、AWS 的十亿用户数据底座
Databricks 客户案例称，OpenAI 自 2024 年起在 Azure 与 AWS 上把使用数据写入由 Unity Catalog 治理的 Delta 表，服务产品分析、财务、安全、信任与安全等团队，并支撑面向每周 10 亿活跃用户的营销操作。统一数据架构据称每月减少 40 万美元存储成本；安全团队用流式管道汇集基础设施、云和供应商审计日志，Codex Agent 可经 SQL API 调查治理数据。双方还通过 Genie MCP 让 ChatGPT Work 用户访问企业数据。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/databricks/status/2090427163124105543" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a></div>

## 13/15 Agent Arena 显示头部模型单任务成本可相差五倍以上
Agent Arena 将真实长时工具任务的净改进与单任务中位成本放在同一张 Pareto 图上：前五名中，Kimi K3 Max 以 10.5% 净改进排第四、成本 0.62 美元；GPT-5.6 Sol xHigh 以 9.8% 排第五、成本 1.39 美元；Claude Opus 5 Max 成本 3.37 美元且分数略低于 1.78 美元的 High 档。Grok 4.5 与 Qwen3.8 Max 分别以 0.22、0.33 美元提供约 6% 净改进。结果强调 Agent 路由需同时看任务收益和成本，而非只看总榜名次。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/Kimi_Moonshot/status/2090303393311187130" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Kimi_Moonshot</a></div>

## 14/15 superwhisper 开放 0.6B 本地转写后处理模型 S1-mini
superwhisper 发布首个开放权重语言模型 S1-mini，参数量 0.6B，可在设备端处理语音转写文本，并已集成进 macOS 应用。模型基于 Qwen3-0.6B 微调，定位不是通用聊天或复杂指令跟随，而是通过输入顶部控制行完成标点、格式、清理和风格等转写后处理。小模型把敏感转录内容留在本地，并降低持续云推理成本；公告没有给出跨语言、长文本、延迟、内存占用或与云端模型的系统基准。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/ClementDelangue/status/2090284278869352792" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue</a></div>

## 15/15 Web Agent 的成本优化正在从换模型转向缓存、解码与后训练协同
Together AI 与 Yutori 分享 Navigator 的 Web Agent 经济模型：简单字段提取、填表或站内导航通常需要 10–20 次推理，多站工作流可达数百次，因此单次模型价格会被循环长度放大。团队称通过约 80% prefix cache 命中、在更小模型上做 speculative decoding，以及对 Qwen 模型进行 SFT 与 RL 后训练，使 Web 任务比闭源模型方案快且便宜 2–5 倍。数据来自厂商演讲，没有披露统一任务集、成功率或端到端成本明细。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/togethercompute/status/2090555766747140364" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute</a></div>

---

## Deep Dive 附录

### Cerebras CS-4：把超低延迟 decode 做成异构机架组件
CS-4 由三颗 WSE-3 Turbo、Nexus 模块化机架和新的 Wafer-Scale Backpack 组成。厂商称后者把电源转换靠近处理器、减少 50% 组件并提高 60% 自动化制造比例，使部署从数天缩短到数小时；可编程 I/O 带宽翻倍，并以 RoCE v2 或 Direct Wafer Links 扩展。系统可把 prefill 放在 GPU 或 ASIC，把低延迟 decode 留给 CS-4，在超过 10 万亿参数模型上宣称每秒 1,000 token 以上。30 倍 GPU 速度、10 倍每瓦吞吐等结论来自 Cerebras 内部基准与预测，首批本季度出货。
[查看原文](https://www.cerebras.ai/blog/introducing-cerebras-cs-4)

### Muse Spark 1.2 与 WildArtifactBench：从答题评测转向可交付成果
Muse Spark 1.2 把视觉理解、代码生成、工具调用与 computer use 放进同一 Agent 模型，演示覆盖从图像或视频生成可运行网页、让机器人在非结构环境寻找物体、双臂整理桌面，以及将媒体内容转换为训练标签和下游信号。WildArtifactBench 则公开 10 项预览任务，横跨鸟鸣分析、心脏超声、冠脉造影、3D 网格、厨房布局、材料计量、强化学习驾驶和视频编辑；每项都附输入文件、说明和 rubric。Meta 采用人类与 Agent 偏好评审的胜率和 Elo，扩大开放式交付物覆盖，但偏好裁判的一致性与可复现性仍需持续校准。
[查看原文](https://research.meta.ai/wild-artifact-bench)

### Pika Music：四种条件在同一潜空间内共同决定完整歌曲
Pika Music 将文本、歌词、声音参考和音乐参考编码后送入共享 latent-diffusion decoder，让曲式、演唱角色、文字方向与参考“氛围”在一次生成中共同作用。官方博客称最长可生成 6 分钟，90 秒歌曲平均 6.21 秒完成，并把快速 few-step generation、训练与推理优化转化为最高 10 倍成本优势。固定歌词基准覆盖 15 种创作方向，推文报告 Audiobox Aesthetics 的 Content Enjoyment 7.403、Production Quality 8.064，与 Suno 的 7.412、8.151 接近；硬件、样本规模与独立复测信息未完整公开。
[查看原文](https://experiment.pika.art/blog/pika-music)

### Sakana Translate：以文化语境后训练挑战“大模型必然翻得更好”
升级后的服务采用新一代 Sakana Namazu，刷新基础模型并改进后训练，在日英中双向翻译范围不变的前提下提升自然度。Sakana 用 TransEvalnia 从译词、自然度等维度评判 160 个内部日英任务，称相对所有对照模型和服务的一对一胜率均超过 50%；“お宮参り”案例用于展示文化概念而非字面替换。服务继续免费提供翻译、添改与质疑，支持约 5,000 字长文；文件翻译、术语表、行业模型、API、SSO、审计日志和本地部署仍在路线图上。评测集由厂商自建，需外部数据复核泛化。
[查看原文](https://sakana.ai/translate-update/)

### Codex 税务 Agent：把生产错误转成可验证的自改进任务
Tax AI 在 Crete 参与试点的事务所处理 7,000 份税表；每次生产预测都与会计师最终结果比较，失败会生成包含生产 trace、源文档、预测、最终申报表与税务字段文档的只读调查上下文，让 Codex 定位问题、修改代码并运行评测，而不改动证据。官方称整体准备时间约减少三分之一，并给出一名资深会计从上一季 180 小时降到本季 15 小时的个案。流程的关键不是让模型直接承担税务责任，而是把真实失败闭环成测试、代码修复和人工可审查的发布候选。
[查看原文](https://openai.com/index/building-self-improving-tax-agents-with-codex/)

### Chroma Foundation：从会话记录升级为带版本与权限的组织记忆
Foundation 跟随 Claude Code、Codex、Slack 等团队工作，抽取显性结论和“事情实际上怎么做”的隐性知识，维护可持续更新的 wiki，并通过 MCP 把同一上下文提供给不同模型与工具。产品基于 ChromaDB 和 Context-1，宣称在 BEAM memory benchmark 达到 SOTA，并把版本、并发、血缘、实时同步和访问控制做成一等能力。官方称系统具备 SOC 2 Type 2，编码 Agent 会话默认只对作者可见。当前属于研究预览；自动提炼仍可能把错误经验固化，因此来源追踪和人工修订与检索质量同样关键。
[查看原文](https://www.trychroma.com/foundation)

### HiPHI：先定义动作语义空间，再采集 617.5 小时具身数据
HiPHI 不从容易重叠、漏掉边界情况的任务清单开始，而用 FrameNet 的人类动作语义建立 22 个 motion frames 和 214 个 motion units，在采集前量化覆盖。公开数据包含 617.5 小时人体动作和人—物交互，附覆盖对比与逐帧质量指标，并用真实 Unitree G1 部署验证训练策略。数据对研究免费；Noitom 还称其 ModalityNet 基础设施可每年生产超过 10 万小时动作、交互与野外行为数据。公开样本能否代表这一工业产能，以及许可对商业训练的边界，需要按数据卡单独核对。
[查看原文](https://huggingface.co/datasets/noitomrobotics/HiPHI)

### AI21 独立验证器：正确答案已生成，系统却不会把它选出来
在 FACTS-Search 上，混合 Claude Haiku、Sonnet、Opus 与 Qwen3-Coder 的固定候选池，多数投票为 83.3；独立 Opus 验证器重新检索每个候选并先否决错误答案，将结果提到 93.4，但总成本达 4.26 美元/题。AI21 用约 6,000 条可验证样本训练 8B 验证器后，固定同一候选池达到 92.9、成本 1.34 美元；纯开源生成池则从 60.1 提至 77.0，仅 0.017 美元/题。迁移到 BrowseComp-Plus 时精度提升仍在，但会把 27% 可解问题的正确候选全部拒绝，约 85 条样本的短 SFT 用来修复召回。
[查看原文](https://www.ai21.com/blog/you-need-a-verifier/)

### Databricks 成为 OpenAI 的多云运营数据层
OpenAI 自 2024 年起在 Azure 与 AWS 同时使用 Databricks，原始使用数据进入 Unity Catalog 治理的 Delta 表，再由 Jobs 与 Data Warehouses 形成分层管道，供产品、财务、营销、安全及信任与安全团队使用。案例称 Bronze-Silver-Gold 架构支撑每周 10 亿活跃用户的营销分析，并每月减少 40 万美元存储成本；安全侧统一基础设施、云与供应商审计日志，Codex 可经 SQL API 对治理数据做辅助调查。Genie MCP 则把这套企业数据连接到 ChatGPT Work。数字与收益来自供应商客户案例，未提供第三方审计。
[查看原文](https://www.databricks.com/customers/openai)
