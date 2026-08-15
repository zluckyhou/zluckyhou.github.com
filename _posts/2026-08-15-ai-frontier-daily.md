---
layout: daily
title: "AI Frontier Daily | 2026.08.15"
headline: "Cursor 正式被 SpaceX 收购，加入 SpaceXAI 推进 Grok 与开发工具"
date: 2026-08-15 09:07:00 +0800
permalink: /ai-daily/2026/08/15/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Cursor 宣布已完成被 SpaceX 收购，将加入 SpaceXAI 团队，共同改进 Grok、Grok Build、Grok Bot、Grok API 与 Cursor。双方 4 月已建立模型训练和算力合作，SpaceX 公开文件曾披露以约 600 亿美元隐含股权价值收购 Cursor 的选择权；本次官方推文确认交易已经交割，但没有披露最终对价、股权结构、管理层安排或产品数据边界。Cursor 表示将继续推进其开发工具，后续重点是模型、算力与编码入口的纵向整合。"
summary: "Cursor 宣布已完成被 SpaceX 收购，将加入 SpaceXAI 团队，共同改进 Grok、Grok Build、Grok Bot、Grok API 与 Cursor。双方 4 月已建立模型训练和算力合作，SpaceX 公开文件曾披露以约 600 亿美元隐含股权价值收购 Cursor 的选择权；本次官方推文确认交易已经交割，但没有披露最终对价、股权结构、管理层安排或产品数据边界。Cursor 表示将继续推进其开发工具，后续重点是模型、算力与编码入口的纵向整合。"
issue_count: 17
deep_dive_count: 7
reading_time: 17
cover: "https://huggingface.co/blog/assets/state-of-open-models-summer-2026/thumbnail.png"
signals: "cursor_ai · elonmusk · AnthropicAI · pika_labs · huggingface · AndrewYNg · Alibaba_Qwen · GeminiApp"
header-img: img/dark_yellow_400.png
---


## 1/17 Cursor 正式被 SpaceX 收购，加入 SpaceXAI 推进 Grok 与开发工具
Cursor 宣布已完成被 SpaceX 收购，将加入 SpaceXAI 团队，共同改进 Grok、Grok Build、Grok Bot、Grok API 与 Cursor。双方 4 月已建立模型训练和算力合作，SpaceX 公开文件曾披露以约 600 亿美元隐含股权价值收购 Cursor 的选择权；本次官方推文确认交易已经交割，但没有披露最终对价、股权结构、管理层安排或产品数据边界。Cursor 表示将继续推进其开发工具，后续重点是模型、算力与编码入口的纵向整合。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cursor_ai/status/2088249881718919393" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai</a><a class="source-chip" href="https://x.com/elonmusk/status/2088273489820061920" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@elonmusk</a></div>

## 2/17 Anthropic 第二份风险报告上调不确定性，三类总体风险仍评为“低”
Anthropic 发布 186 页《Risk Report: August 2026》，覆盖失调、自动化研发和化学生物武器三类灾难性风险。公司把高风险场景失调从“极低”上调为“低”，并称近期网络安全评估事件增加了不确定性；非新型化生武器风险也因已修复的访问控制缺口高于上次估计。报告称 Claude 已生成其生产代码库合并代码中的“大多数”，内部 AI 研发速度显著提高但尚未达到 2 倍，同时承认部分评测饱和、隐蔽能力难测和安全流程仍有缺口。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AnthropicAI/status/2088324824863236248" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI</a></div>

## 3/17 Claude 将为未来输出加入不可见文本水印，并计划开放检测 API
Anthropic 将为未来 Claude 模型采用 SynthID-Text 类水印，以满足欧盟 AI 法案透明度要求。该方法不插入隐藏字符，而是在语义相近的候选词之间用密钥与上下文改变随机选择，长文本可据此估计 Claude 参与概率。公司称水印不增加 token、价格或可感知延迟，也不携带用户和组织身份；短文本、事实性内容、代码和轻度校对因可选择空间小，检测效果较弱，完整重写也能削弱水印。图片等文件将使用 C2PA 内容凭证。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AnthropicAI/status/2088343978873966687" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI</a></div>

## 4/17 Pika 发布四款音频基础模型，覆盖配乐、歌曲、音效与语音
Pika 推出 Soundtrack、Music、SFX 和 Speech 四款模型：可为视频生成同步配乐与音效，按提示词、歌词、声线和参考曲生成最长 6 分钟歌曲，生成最长 20 秒 44.1 kHz 立体声音效，并以预设或克隆声线合成 48 kHz 语音。公司称 SFX 成本最高低 20 倍、Music 最高低 10 倍、Speech 较 ElevenLabs v3 低 9 倍，90 秒歌曲平均 6.21 秒生成。数字来自官方自测和截至 8 月 14 日的价格比较，模型现仅在 Pika API Club 提供。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@pika_labs<span class="source-chip__links"><a href="https://x.com/pika_labs/status/2088394693289930757" target="_blank" rel="noopener" aria-label="@pika_labs 原文 1">1</a><a href="https://x.com/pika_labs/status/2088394694653104458" target="_blank" rel="noopener" aria-label="@pika_labs 原文 2">2</a></span></span></div>

## 5/17 Hugging Face 报告：Qwen 成为开放模型底座，小模型仍主导真实使用
Hugging Face 的夏季报告显示，公开模型仓库今年前七个月从 243 万增至 296 万，但 85.6% 模型终身下载少于 200 次，1.5% 仓库贡献 99.2% 下载。Qwen 已形成 151,448 个衍生模型，是 Meta 总量的 2.6 倍；其 GGUF 月下载 3,960 万次，近 Gemma 的两倍。小于 1B 参数模型占历史下载 83%，大于 100B 仅占 1%。代理流量中 Claude Code 7 月占 44.4%，Codex 从 4 月 10.4% 升至 20.8%；报告强调点赞代表关注，下载更接近采用。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/huggingface/status/2088301795890044975" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface</a></div>

## 6/17 Andrew Ng 发布 AI 工程技能地图，编码代理成为四大核心能力之一
Andrew Ng 团队分析逾 10,000 条招聘信息，并结合数十次专家与招聘访谈、问卷和在线数据，归纳四类 AI 工程技能：构建和部署 AI 应用、软件工程基础、使用编码代理、塑造产品构建方向。地图强调用评测与错误分析控制 AI 的非确定性，理解成本、扩展性、可靠性与安全权衡，掌握上下文管理、验证器、多代理协作和生产保护，并让工程师参与规格、产品判断与客户目标。其定位面向所有开发者，不限于“AI Engineer”职位。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AndrewYNg/status/2088302050706686198" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AndrewYNg</a></div>

## 7/17 Qwen3.8 完成 Day-0 生态铺开，27B 模型瞄准单卡本地运行
Qwen 团队集中公布 Qwen3.8 的推理与平台接入：27B 版本经量化可在约 17 GB 内存运行，SGLang 称其在单张 RTX 5090 上达到 206 tokens/s；vLLM 支持单卡与 100 万上下文，Ollama、LM Studio、AMD、MediaTek 和 RTX Spark 也已接入。Qwen3.8-Max 被描述为 2.4T 参数、100 万上下文，并在 Modal、Fireworks、Together、DeepInfra、DigitalOcean 等平台上线。性能和内存数字来自合作方配置，需结合量化精度与上下文长度复核。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Alibaba_Qwen<span class="source-chip__links"><a href="https://x.com/Alibaba_Qwen/status/2088293486995087461" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 1">1</a><a href="https://x.com/Alibaba_Qwen/status/2088296583368781939" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 2">2</a><a href="https://x.com/Alibaba_Qwen/status/2088292188505755728" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 3">3</a><a href="https://x.com/Alibaba_Qwen/status/2088287553292312968" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 4">4</a></span></span></div>

## 8/17 Gemini 3.7 Flash 进入 Gemini Chat，面向 Pro 与 Ultra 用户开放
Google 的 Gemini 3.7 Flash 现已向 Gemini Chat 的 Pro 和 Ultra 用户开放。官方称该更新提高推理与多步任务准确性，示例包括把分散在数十个文件与邮件中的信息连接、整理为一份主文档；此前该模型已用于 Gemini Spark，并强调对 Google Workspace 工具调用的精确度。此次公告主要是产品覆盖扩展，没有新增价格或基准。模型能力细节沿用前一日发布，本次可确认的是 Gemini Chat 网页端和应用端的付费用户已可直接使用。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/GeminiApp/status/2088326407730692538" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GeminiApp</a><a class="source-chip" href="https://x.com/GoogleDeepMind/status/2088344135686062163" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GoogleDeepMind</a></div>

## 9/17 Grok 4.6 扩展到 Copilot、Build 工作流与多模态理解
Grok 4.6 的产品覆盖继续扩大：模型进入 Copilot，Grok Build 新增 Workflows，可规划任务并并行运行数百个代理后汇总报告；SpaceXAI 同时强调图像、视频理解和 CAD 使用，并称其在 CursorBench 真实编码任务上排名第一。ARC Prize 验证结果显示其 ARC-AGI-1/2 分别为 87.5%/67.1%，ARC-AGI-3 为 2.11%，后者成本 5,600 美元。不同结果依赖 reasoning 强度、harness 和预算，产品接入已确认，能力排名仍需独立复现。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@elonmusk<span class="source-chip__links"><a href="https://x.com/elonmusk/status/2088443051890917436" target="_blank" rel="noopener" aria-label="@elonmusk 原文 1">1</a><a href="https://x.com/elonmusk/status/2088139169667113370" target="_blank" rel="noopener" aria-label="@elonmusk 原文 2">2</a><a href="https://x.com/elonmusk/status/2088138697002668110" target="_blank" rel="noopener" aria-label="@elonmusk 原文 3">3</a><a href="https://x.com/elonmusk/status/2088127459971522726" target="_blank" rel="noopener" aria-label="@elonmusk 原文 4">4</a></span></span></div>

## 10/17 Together AI 称 DeepSeek-V4 Pro 在软件工程任务上显著压低成本
Together AI 使用 DeepSWE 比较 DeepSeek-V4 Pro 0813、GPT-5.6 Sol 与 Fable 5，称 DeepSeek 在软件工程任务上达到 88.5% pass@4，单任务成本 0.24 美元，分别比 Sol 和 Fable 低约 35 倍与 90 倍。该结果强化开放模型在编码代理上的价格竞争，但推文未给出样本量、任务拆分、延迟、推理预算和完整复现实验，且 pass@4 与单次成功率不能直接等同。数字应视为 Together AI 的基准陈述，适合关注成本曲线，不宜直接推导生产替代结论。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/togethercompute/status/2088468211159171246" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute</a></div>

## 11/17 NVIDIA 推出 NeMo Switchyard，用路由拆分代理规划与执行模型
NVIDIA 发布开源 NeMo Switchyard 模型路由库，目标是让代理工作流不必在每一步使用同一模型：复杂推理和规划交给前沿模型，高频、专门化执行可路由至 Nemotron Lightning 等成本更低的模型。路由把质量、延迟和费用从单一模型选择转为按任务阶段动态分配。NVIDIA 文档显示 Switchyard 可作为 NeMo Relay 的决策层，并支持强弱模型流量拆分；部分集成仍标记为实验性，部署需要独立决策服务、目标绑定、可信回退和可观测性配置。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/NVIDIAAI/status/2088339706752983230" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI</a></div>

## 12/17 ARC-AGI-3 头部方案转向 LLM 动态生成符号世界模型
François Chollet 指出，当前 ARC-AGI-3 表现最好的 harness 普遍采用“LLM 引导、即时合成符号世界模型”：代理通过编写可执行代码表达对环境因果机制的理解，再据此规划行动。他认为这条路线不只适用于 ARC。与此同时，公开 demonstration set 不是训练集或正式评测集，半私有 Kaggle 榜当前最高仅 2.70%；Grok 4.6 的公开 ARC-AGI-3 得分为 2.11%。公开小游戏成绩不能代表私有基准，但符号模型与语言模型结合已成为可观察的共同技术方向。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet<span class="source-chip__links"><a href="https://x.com/fchollet/status/2088243704603824311" target="_blank" rel="noopener" aria-label="@fchollet 原文 1">1</a><a href="https://x.com/fchollet/status/2088254592182305165" target="_blank" rel="noopener" aria-label="@fchollet 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/arcprize/status/2088073208268284352" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@arcprize</a></div>

## 13/17 Suno Studio 2.0 支持用自然语言生成并插入自定义音频插件
Suno 展示 Studio 2.0 的新插件工作流：用户描述所需效果后，可生成自定义插件并直接加入浏览器内制作会话，把音乐生成进一步扩展到可调参数的后期处理。该更新与 Studio 2.0 的多轨编辑定位一致，目标是降低特殊效果器和声音处理工具的开发门槛。官方推文提供演示和完整 walkthrough，但没有披露插件运行沙箱、可导出格式、实时延迟、第三方代码边界或订阅限制，现阶段可确认的是自然语言到会话内插件的产品能力已上线展示。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@suno<span class="source-chip__links"><a href="https://x.com/suno/status/2088343985018564768" target="_blank" rel="noopener" aria-label="@suno 原文 1">1</a><a href="https://x.com/suno/status/2088344443841819130" target="_blank" rel="noopener" aria-label="@suno 原文 2">2</a></span></span></div>

## 14/17 LangSmith 新增 trajectory 概念，把多轮代理会话展开为可读路径
LangSmith 更新可观测性文档，明确 run、trace、thread 与 trajectory 四层结构：run 是一次模型或工具调用，trace 是单次操作的 run 树，thread 串联多轮 trace，trajectory 则把整个会话投影为去重、按顺序排列的消息列表。Trace 适合诊断单次失败，thread 保留跨轮嵌套与时序，trajectory 更适合阅读代理从起点到终点的行动路径。LangSmith SaaS 默认保存 trace 180 天，单个 trace 上限 25,000 runs，长期保留需转入 dataset。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hwchase17/status/2088342687808438352" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17</a></div>

## 15/17 Replit 更新区域部署、MCP 与认证迁移，继续扩展 Agent 工具链
Replit 本周更新允许 Pro 与 Enterprise 选择北美、欧洲或亚洲 workspace 区域，以降低延迟并满足区域数据存放要求；Replit MCP 现在可从外部工具查找和更新既有项目，通过 OAuth 接入且无需 API key。Agent 还可把已有 Replit Auth 应用迁移到 Clerk，并保留原有账户访问。企业侧新增 Admin API beta，用于拉取账户、使用量与支出数据，聊天内可直接生成图表，另加入 Airtable、Rootly Docs 等 MCP 服务器。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/Replit/status/2088400279070744794" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Replit</a></div>

## 16/17 Databricks 为 AI Gateway 加预算告警与硬性支出上限
Databricks 的 AI Spend Controls 可按用户、用例、workspace 和账户设置预算、共享阈值、个人阈值与告警，超限后可停止后续请求，针对重试循环、无人值守多代理实验和 token 消耗异常。每次请求的 DBU、外部供应商 token 成本、预置吞吐和运行时间会写入 Unity Catalog 系统表，可按身份、标签、模型和供应商分析。公司还称 Smart Routing 可在保持质量下将成本降低约 30%，但该数字来自官方案例，生产效果取决于任务分布和路由策略。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks<span class="source-chip__links"><a href="https://x.com/databricks/status/2088328114912821576" target="_blank" rel="noopener" aria-label="@databricks 原文 1">1</a><a href="https://x.com/databricks/status/2088283902443966485" target="_blank" rel="noopener" aria-label="@databricks 原文 2">2</a></span></span></div>

## 17/17 Cohere North Mini Code 下载突破 15 万，承接免费编码模型需求
Cohere 表示开源编码模型 North Mini Code 的下载量已超过 15 万。随着 OpenCode 取消原有免费层选项，开发者可通过 Cohere Model Vault、OpenRouter 或本地运行继续使用该模型。公告没有给出新增模型版本或基准，重点是开发者采用规模和分发渠道；North Mini Code 因可本地部署而成为低成本编码工作流的备选。下载量来自 Cohere 统计，不能直接代表活跃用户、生产调用或代码质量，但显示中小型开放编码模型仍有稳定需求。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cohere/status/2088269861113795070" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cohere</a></div>

---

## Deep Dive 附录

### Anthropic 第二份风险报告：风险评级保持“低”，不确定性明显上升
报告按 RSP 3.4 评估高风险失调、自动化研发与化生武器风险，覆盖日期为 7 月 15 日。Anthropic 认为 Mythos 5 与内部 Model 2 的灾难性风险仍低，但把失调评级从“极低”调至“低”，并承认网络安全评估事件、隐蔽能力测量和模型评测饱和削弱了信心。公司称 Claude 已生成生产代码库合并代码中的“大多数”，内部研发显著加速但未达 2 倍；对非新型化生武器，模型能力强到需要按达到 CB-1 阈值采取保护，但尚未达到替代稀缺专家的 CB-2 阈值。报告还披露已修复的访问控制、分类器和监控流程失误。
[查看原文](https://www-cdn.anthropic.com/f61d49fa5596956a5dec75fea0e973bf6a6a8378/Redacted%20Risk%20Report%20August%202026%20.pdf)

### Claude 文本水印：通过词语选择留下统计模式，而非隐藏字符
Claude 的方案基于 Google DeepMind 的 SynthID-Text：模型在多个同样合理的候选词之间，用密钥与前文替代普通随机数作选择，累计形成检测模式。水印不写入身份信息、不增加 token，也不改变文本表面；Anthropic 称内部评测未发现质量、创造力或可读性下降。限制在短文本、代码、事实性段落和轻度校对中更明显，因为可选择的词较少；检测只能判断 Claude 可能参与，不能证明人类没有参与或区分“生成”与“重度编辑”。未来将提供检测 API，图片等文件则通过 C2PA 元数据标注。
[查看原文](https://www.anthropic.com/news/claude-text-watermark)

### 开放模型夏季报告：注意力、采用与生态底座出现三套不同排名
Hugging Face 报告发现，下载前 25 与点赞前 25 的模型只有一个重合：点赞记录发布热度，下载更像被长期接入的基础设施。Qwen 依靠全尺寸覆盖、Apache 2.0 与稳定发布节奏积累 151,448 个衍生模型，GGUF 月下载 3,960 万次；但全平台真实流量仍由小模型主导，小于 1B 参数占历史下载 83%。代理正在成为新用户：Claude Code、Codex 与大量未注册 harness 的占比快速变化。报告也提醒 Hub 下载不包含私有部署和外部 API，不能直接当作模型质量或市场份额。
[查看原文](https://huggingface.co/blog/state-of-open-models-summer-2026)

### Pika Audio：四类模型共享“效率换低价”的产品策略
Soundtrack 负责视频到完整声景，Music 组合提示词、歌词、声音和参考曲，SFX 生成聚焦音效，Speech 提供可控语音与克隆。Pika 称 Soundtrack 每生成一秒音频需 0.617 秒墙钟时间，Music 生成 90 秒歌曲平均 6.21 秒，SFX 平均 0.847 秒完成一次端到端生成，Speech 一分钟约一秒。相对价格优势从 2 倍到 20 倍不等。所有比较均为发布方测试和 8 月 14 日公开价格，尚需第三方在音质、提示词遵循、同步和授权条件下复核。
[查看原文](https://experiment.pika.art/blog/pika-audio-models)

### AI 工程技能地图：工程师的工作从“实现规格”转向“塑造构建”
Andrew Ng 把 AI 工程能力分为四组：应用与部署要求掌握上下文工程、RAG、代理工作流、评测和错误分析；软件基础负责成本、架构、可靠性、安全与隐私权衡；编码代理能力涵盖上下文、计划、验证器、多代理协作和生产保护；“塑造构建”则要求产品感、业务背景、用户目标和项目推进。核心变化是编码代理越来越擅长按清晰规格实现，人的价值向决定规格内容、建立反馈循环和承担更大结果责任移动。
[查看原文](https://x.com/AndrewYNg/article/2088302050706686198)

### LangSmith 的 trajectory：可观测数据开始兼顾调试、记忆与学习
Run 类似 OpenTelemetry span，trace 聚合一次操作，thread 连接多轮会话；trajectory 则去除嵌套结构，把用户、模型和工具消息按首次出现顺序平铺。三种视图分别服务单次故障诊断、跨轮时序分析和端到端路径阅读。这个抽象也使同一批观测数据能进一步用于会话记忆、行为评估和学习数据构建。文档给出 25,000 runs/trace 上限和 SaaS 180 天保留期，并支持框架自动追踪或装饰器、上下文管理器、RunTree API 手动埋点。
[查看原文](https://docs.langchain.com/langsmith/observability-concepts)

### Databricks AI 支出控制：从事后看账单转向请求级限额
Unity AI Gateway 把预算控制细化到用户、用例、workspace 与账户，可在告警之外设置硬上限；达到阈值后，请求会被停止直到额度调整或周期重置。系统表记录 DBU 与第三方 token 成本，可按身份、环境、标签、模型和供应商归因，并与 Unity Catalog 权限及审计连接。该设计针对 AI 特有的重试循环、多代理并发和夜间无人值守任务。配合 Smart Routing，Databricks 声称还能降低约 30% 成本，但企业需要用自己的成功率、延迟和质量阈值验证。
[查看原文](https://www.databricks.com/blog/introducing-ai-spend-controls-unity-ai-gateway)
