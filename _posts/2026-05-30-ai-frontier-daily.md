---
layout: daily
title: "AI Frontier Daily | 2026.05.30"
headline: "OpenAI 将 Codex 的 computer use 扩展到 Windows"
date: 2026-05-30 09:07:00 +0800
permalink: /ai-daily/2026/05/30/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "OpenAI 宣布 Codex 的 computer use now works on Windows，Codex 可以在 Windows 电脑上看屏幕、点击、输入并执行任务；同时 ChatGPT mobile app 也支持连接 Windows 主机，用户可在 iOS 或 Android 上启动、查看、继续和 steer 正在 Windows 机器上运行的工作。官方 release notes 补充称，这次更新还包括更快的响应、更稳定的 in-app browser、Codex Profiles 和 usage/token activity；Windows computer use 在 EEA、英国和瑞士首发不可用。Coding agent 的交互面继续从单机 app 变成跨设备、可远程监督的持续工作流。"
summary: "OpenAI 宣布 Codex 的 computer use now works on Windows，Codex 可以在 Windows 电脑上看屏幕、点击、输入并执行任务；同时 ChatGPT mobile app 也支持连接 Windows 主机，用户可在 iOS 或 Android 上启动、查看、继续和 steer 正在 Windows 机器上运行的工作。官方 release notes 补充称，这次更新还包括更快的响应、更稳定的 in-app browser、Codex Profiles 和 usage/token activity；Windows computer use 在 EEA、英国和瑞士首发不可用。Coding agent 的交互面继续从单机 app 变成跨设备、可远程监督的持续工作流。"
issue_count: 15
deep_dive_count: 6
reading_time: 19
cover: "https://www.databricks.com/sites/default/files/2026-05/2026-05-blog-iceberg-and-interoperability-momentum-blog-og-1200x628-2x.png"
signals: "OpenAI · xai · cursor_ai · databricks · NVIDIAAI · cohere · llama_index · hwchase17"
header-img: img/dark_yellow_400.png
---


## 1/15 OpenAI 将 Codex 的 computer use 扩展到 Windows
OpenAI 宣布 Codex 的 computer use now works on Windows，Codex 可以在 Windows 电脑上看屏幕、点击、输入并执行任务；同时 ChatGPT mobile app 也支持连接 Windows 主机，用户可在 iOS 或 Android 上启动、查看、继续和 steer 正在 Windows 机器上运行的工作。官方 release notes 补充称，这次更新还包括更快的响应、更稳定的 in-app browser、Codex Profiles 和 usage/token activity；Windows computer use 在 EEA、英国和瑞士首发不可用。Coding agent 的交互面继续从单机 app 变成跨设备、可远程监督的持续工作流。
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2060428604727771421)

## 2/15 OpenAI 推出 Rosalind Biodefense，扩大防御性生物 AI 访问
OpenAI 发布 Rosalind Biodefense，面向可信开发者赞助 GPT-Rosalind 访问和启动支持，目标是帮助构建 biodefense 与 pandemic preparedness 能力。官方同时扩大 GPT-Rosalind 对部分美国政府和盟友 public health / biodefense partners 的 trusted access，场景包括 early warning、outbreak response planning、diagnostics、preparedness 和 medical countermeasure development。OpenAI 把这定义为 defensive acceleration：让 frontier AI 更明显地帮助防御方，同时通过 vetted access、bio-specific evaluations、monitoring、red teaming 和安全控制管理双重用途风险。
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2060376598642405492)

## 3/15 xAI 将 grok-build-0.1 放入 API public beta
xAI 宣布 grok-build-0.1 通过 xAI API 进入 public beta，这是驱动 Grok Build CLI 的同一模型，定位为 agentic coding 模型。官方给出价格为每百万 input token 1 美元、每百万 output token 2 美元，并称模型 cost effective、intelligent、fast；同一 thread 说明它也可通过 OpenRouter、Vercel AI Gateway，以及 Cursor、Hermes Agent、OpenClaw、Kilo Code 和 OpenCode 使用。xAI 正把 Grok Build 从订阅产品扩展成开发者 API 和第三方 agent 工具链的一部分。
- [查看 @xai 原始推文](https://x.com/xai/status/2060392249402552457)
- [查看 @xai 原始推文](https://x.com/xai/status/2060392251520594105)
- [查看 @xai 原始推文](https://x.com/xai/status/2060392252858589669)

## 4/15 Cursor 发布 Auto-review Run Mode
Cursor 发布 Auto-review run mode，让 agent 能以更少 approval prompts 运行更长时间，同时对 Shell、MCP 和 Fetch tool calls 做分层控制。Allowlist 内的调用立即执行，可 sandbox 的调用进入 sandbox，其余操作交给 classifier subagent 判断是允许、换一种做法，还是请求用户批准。这个功能把 coding agent 的安全交互从“逐个弹窗批准”推进到 policy、sandbox 与 classifier 组合的运行模式。对日常开发来说，关键变化是降低低风险工具调用的摩擦，同时把不确定操作集中交给专门子代理判断。
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2060406013098897765)
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2060406014478831842)

## 5/15 Databricks 让 Unity Catalog 的 Iceberg 能力进入 GA 阶段
Databricks 宣布 Unity Catalog 中 Managed Iceberg、Iceberg v3 和 Foreign Iceberg 进入 GA，并把 Unity Catalog 定位为 production-ready Apache Iceberg catalog。新能力包括直接在 Unity Catalog 中创建、治理、优化和共享 Iceberg tables；Iceberg v3 支持 deletion vectors、row tracking 和 VARIANT；Foreign Iceberg 可注册和治理外部 catalog 中的表；External Sharing to Iceberg clients 通过 Delta Sharing GA。这个发布把开放表格式竞争的重点放到 catalog 层：多引擎访问、零拷贝共享、统一治理和自动优化开始合并。
- [查看 @databricks 原始推文](https://x.com/databricks/status/2060364333901578389)

## 6/15 NVIDIA Metropolis Blueprint 增加视频搜索 agent skills
NVIDIA AI 发布 Metropolis Blueprint for Video Search and Summarization 的新 agent skills 和模块化架构，目标是减少手动配置多个 microservices 的工作。官方描述的工作流是：把 skills 加载到兼容 coding agent 中，由 agent 部署 stack，把数小时视频转成可搜索、可问答、可行动的 intelligence；用户可用自然语言获取 clips、summaries 和 answers。这个方向显示 enterprise video AI 正从单一模型 demo 走向 agent-deployed infrastructure，重点是让视频检索、摘要、部署和问答进入可复用 blueprint。
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2060481312511623513)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2060481316584366353)

## 7/15 Cohere 用 Command A+ 强调机器翻译与多语 agent
Cohere 宣布 Command A+ 在 machine translation 能力上刷新其内部高点，并称相对 Mistral Medium 3.5、DeepSeek、OpenAI gpt-oss、Claude Opus 4.6 以及 Google Translate 等系统有明显优势。后续 thread 给出 WMT24++ xCOMET-XL 上法语、西语、德语的提升，以及韩语、日语、希伯来语、中文、阿拉伯语等非拉丁语言上的改进。Cohere 把这与 enterprise multilingual agents 连接起来：更高翻译质量意味着更少人工修正、更可靠 retrieval，以及跨语言 agent workflow 中更稳定的语义传递。
- [查看 @cohere 原始推文](https://x.com/cohere/status/2060426416743723418)
- [查看 @cohere 原始推文](https://x.com/cohere/status/2060426419398713744)
- [查看 @cohere 原始推文](https://x.com/cohere/status/2060426423332933775)

## 8/15 LlamaIndex 将 LiteParse 推向浏览器和 edge runtime
LlamaIndex 强调 LiteParse 的 WASM package 可在 browser 和 edge runtime 中运行，适合 Cloudflare Workers。官方示例把 parser 直接放进 Worker，接收 PDF bytes 并返回 extracted text 与 page count；LiteParse 本身是 Rust 写的 open-source local parser，不依赖云端、LLM 或 API key，支持 spatial layout、bounding boxes、OCR、Office 文件和图片。企业 agent 的文档入口正在分层：轻量、低延迟、可本地或边缘部署的 parser 负责常见解析，复杂扫描件和表格再交给更重的云解析服务。
- [查看 @llama_index 原始推文](https://x.com/llama_index/status/2060392729910116830)

## 9/15 LangSmith LLM Gateway 把成本和敏感数据控制放到调用前
Harrison Chase 表示 LLM spend 正变得很高，LangSmith LLM Gateway 的关键价值是 spend visibility 与 spend control。LangChain 的 private beta 页面将其定义为 agent 与 LLM providers 之间的 runtime governance layer，可在请求离开环境前执行 cost limits、PII/secrets detection、redaction、policy enforcement，并把 policy events 接回 LangSmith trace 与 triage workflow。随着 coding agent、long-context analysis 和 multi-agent workflows 普及，token 成本与敏感数据不再只是事后观测问题，而是需要 pre-call controls 的生产治理问题。
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2060386130684756313)

## 10/15 Runway 展示 Project Luxo 与单人 AI 短片生产
Runway 推广 Project Luxo 的 behind-the-scenes 内容，介绍短片 The Rogue 如何由一个人在不到一个月内用 Runway 完成。Runway 将 Project Luxo 定位为探索 AI-generated video 是否已跨过 uncanny valley 的项目，核心不只是生成片段，而是把 story、visual consistency、shot design 和成片 production 组织在一起。AI 视频公司的竞争正在从“单个镜头多逼真”转向“一个小团队能否完成完整叙事资产”。如果单人或小团队能稳定产出可观看短片，视频生成工具会更直接进入广告、预演、短剧和独立制作流程。
- [查看 @runwayml 原始推文](https://x.com/runwayml/status/2060364000295002185)

## 11/15 OpenAI 用 Terence Tao 访谈强调 AI for research 的实验空间
OpenAI 发布与 Terence Tao 相关的视频内容，称 AI 可以给研究者追求“更疯狂”想法的自由，让他们更容易测试意外路径并发现原本难以到达的方向。后续推文提到，Tao 与 OpenAI 的 Mark Chen 讨论未来 AI 如何降低 research cognitive friction、保留 discovery paths，并扩大数学家和科学家能尝试的问题空间。OpenAI 近期从 discrete geometry、biology 到科研工作流持续强调 AI for Science，叙事重点正在从“模型答题”转向“帮助专家产生、探索和记录研究路径”。
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2060451757818601808)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2060451760033214653)

## 12/15 Gemini co-leads 公开讨论 Gemini 的当前状态和下一步
Logan Kilpatrick 发布与 Jeff Dean、Koray Kavukcuoglu、Noam Shazeer、Oriol Vinyals 四位 Gemini co-leads 的访谈，主题是 Gemini 当前状态、来路以及下一步。虽然 tweet 没给出具体产品发布，但人员组合本身很有信号：Gemini 叙事同时连接 Google Research、DeepMind scaling、model architecture 和产品化。Google 在 Deep Think、science、workspace、mobile 和 multimodal agent 场景持续推进，外部访谈成为解释模型路线、团队结构和下一阶段重点的窗口。
- [查看 @OfficialLoganK 原始推文](https://x.com/OfficialLoganK/status/2060445313043951652)
- [查看 @OfficialLoganK 原始推文](https://x.com/OfficialLoganK/status/2060445964113187132)

## 13/15 Sakana AI 与 DEEP DIVE 合作推进防卫与情报分析
Sakana AI 宣布与一般社团法人 DEEP DIVE 建立 AI information analysis partnership。DEEP DIVE 由军事与国际情势专家小原凡司、小泉悠创立，拥有安全保障、情报分析经验和包括卫星图像在内的 open-source data。Sakana 表示会把自身 AI 技术与 DEEP DIVE 的专家知识和数据结合，实现人手难以达到的规模、速度和解析度，并把“防卫・インテリジェンス”列为与金融并列的重要注力领域。日本 AI 公司在国家安全和 OSINT 分析方向的社会部署正在更明确地产品化。
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2060181227332927953)

## 14/15 Together AI 展示超高速 STT 系统工程
Together AI 称其提供 Artificial Analysis 测得的两个最快 STT 模型，其中 NVIDIA Parakeet-TDT 0.6B v3 可在 10 秒内转录 20 小时音频。官方 thread 把重点放在 systems work：TensorRT profiles、conditional CUDA graphs、evented I/O、shared memory 和 Python GC control。语音 agent 的瓶颈正在从模型能否识别，转向端到端吞吐、延迟、成本和部署工程；当 STT 可以极低延迟处理海量音频，会议、客服、播客、合规归档和实时 voice agent 的架构会发生变化。
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2060413510585110928)

## 15/15 Agent skill 文件成为新的提示注入攻击面
AlphaSignalAI 总结一篇关于 AI agent skills 的安全研究：当 agent 从在线 registry 拉取能力时，SKILL.md 这类自然语言说明文件本身成为 attack surface。研究测试 discovery、selection 和 governance 三个阶段，称 crafted text 可把恶意 skill 推进 top 10 搜索结果，agent 在 head-to-head 中偏好攻击者变体，且 stuffing reviewer context window 可让 poisoned skills 被判干净。虽然 tweet 未附原论文链接，但结论对 agent 平台很直接：自然语言文档正在变成可执行基础设施，skill registry、reviewer、ranking 和 sandbox 都需要把说明文件当代码一样治理。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2060337943034691904)

---

## Deep Dive 附录

### OpenAI Rosalind Biodefense
OpenAI 在官方文章中把 Rosalind Biodefense 定义为可信开发者计划，提供 GPT-Rosalind 访问和 launch support，支持高影响的防御性生物应用。项目覆盖 epidemiological modeling、early detection、screening、preparedness、NPI planning、medical countermeasure development、literature synthesis、protocol design、data harmonization 和 scientific communication 等方向。OpenAI 同时扩大 GPT-Rosalind 对美国政府和盟友公共卫生/生物防御伙伴的 trusted access，并列出 LLNL、Johns Hopkins APL、CEPI 等早期合作对象。文章强调该计划建立在 bio-specific evaluations、dual-use safeguards、monitoring、expert red teaming 和安全控制之上。
[查看原文](https://openai.com/index/strengthening-societal-resilience-with-rosalind-biodefense/)

### Cursor Auto-review Run Mode
Cursor 3.6 的 Auto-review run mode 将 Shell、MCP 和 Fetch tool calls 分成三类处理：allowlist 内立即执行，可 sandbox 的进入 sandbox，其他动作交给 classifier subagent 判断。该子代理可以允许调用、尝试替代路径或请求用户批准。这个设计的重点是减少低风险操作的审批摩擦，同时把不确定或高风险动作集中到策略判断层，而不是要求用户逐个批准每个工具调用。用户可在 Agents > Run Mode 配置，并用 custom instructions 影响 classifier。
[查看原文](https://cursor.com/changelog/auto-review)

### Databricks Unity Catalog 与 Apache Iceberg
Databricks 文章称 Unity Catalog 的 Managed Iceberg、Iceberg v3 和 Foreign Iceberg 已进入 GA，同时 External Sharing to Iceberg clients 通过 Delta Sharing GA。Iceberg v3 支持 deletion vectors、row tracking 和 VARIANT，Managed Iceberg 支持在 Unity Catalog 内创建、读取、写入、优化、治理和共享 Iceberg tables，Foreign Iceberg 则允许注册、治理和安全查询外部 catalog 管理的 Iceberg tables。文章还把 open APIs、catalog federation、cross-engine governance、zero-copy sharing 和 predictive optimization 作为 Unity Catalog 的核心卖点。
[查看原文](https://www.databricks.com/blog/unity-catalog-and-next-era-apache-icebergtm)

### Sakana AI 与 DEEP DIVE 合作
Sakana AI 官方公告说明，DEEP DIVE 是由军事与国际情势专家小原凡司、小泉悠创立的民间 intelligence organization，拥有安全保障/情报分析知识和卫星图像等 open-source data。双方合作会把 DEEP DIVE 的专家知识和数据与 Sakana AI 的专有 AI 技术结合，目标是在规模、速度和解析度上突破人手分析限制，并通过共同研究推动分析方法升级和实用化。Sakana 明确把“防卫・インテリジェンス”列为重点社会部署领域。
[查看原文](https://sakana.ai/deep-dive-partnership/)

### LlamaIndex LiteParse on Cloudflare Workers
LiteParse 文档把它描述为 Rust 编写的开源本地文档解析库，可解析 PDF、Office 文件和图片，输出 spatial layout、bounding boxes，并支持 built-in OCR、PDF screenshots、Node.js/TypeScript、Python、Rust 和 browser WASM。Cloudflare Worker quickstart 展示了把 LiteParse 部署到 edge runtime 的路径，让 Worker 接收 PDF bytes 并返回 text 与 page count。这为 agent 或应用提供了低依赖、低延迟、无云端 API key 的轻量文档入口。
[查看原文](https://developers.llamaindex.ai/liteparse/)
[查看原文](https://github.com/run-llama/liteparse-cloudflare-worker-quickstart)

### LangSmith LLM Gateway
LangSmith LLM Gateway private beta 页面将其定义为 agent 与 LLM providers 之间的 runtime governance layer。它提供按 team、project、developer 的 real-time cost rollups，记录 policy event 的 requester、policy 和 trace link，并在模型调用前检测和 redacts PII/secrets。策略事件可进入 LangSmith Engine triage，gateway-proxied calls 也会显示在现有 LangSmith workspace 中。它反映出 agent 平台从 observability 走向“调用发生前治理”的需求。
[查看原文](https://www.langchain.com/langsmith-llm-gateway-waitlist)
