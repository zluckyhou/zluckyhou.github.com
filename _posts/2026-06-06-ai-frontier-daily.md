---
layout: daily
title: "AI Frontier Daily | 2026.06.06"
headline: "Anthropic 测试 Claude 进入 NMR 化学分析"
date: 2026-06-06 09:07:00 +0800
permalink: /ai-daily/2026/06/06/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Anthropic 发布 Science Blog “Making Claude a chemist”，测试 Claude 在化学家常用的 NMR 波谱分析中的能力。研究比较 Opus 4.7、Opus 4.6、Sonnet 4.6 与 ChemDraw、MestReNova，在 20 个训练截止后 ChemRxiv 化合物上做 1D NMR 前向预测，并让 Opus 4.7 从质谱和氢/碳 NMR 峰表反向推断结构。Anthropic 称 Opus 4.7 在氢谱预测中平均误差约 ±0.079 ppm，碳谱上与 MestReNova 接近；在 15 个反向结构解析任务中，简单结构全部成功，复杂结构在加入起始物提示后多数成功。公司把这视为通用模型开始辅助化学日常分析工作的早期证据。"
summary: "Anthropic 发布 Science Blog “Making Claude a chemist”，测试 Claude 在化学家常用的 NMR 波谱分析中的能力。研究比较 Opus 4.7、Opus 4.6、Sonnet 4.6 与 ChemDraw、MestReNova，在 20 个训练截止后 ChemRxiv 化合物上做 1D NMR 前向预测，并让 Opus 4.7 从质谱和氢/碳 NMR 峰表反向推断结构。Anthropic 称 Opus 4.7 在氢谱预测中平均误差约 ±0.079 ppm，碳谱上与 MestReNova 接近；在 15 个反向结构解析任务中，简单结构全部成功，复杂结构在加入起始物提示后多数成功。公司把这视为通用模型开始辅助化学日常分析工作的早期证据。"
issue_count: 14
deep_dive_count: 8
reading_time: 21
cover: "https://www.anthropic.com/api/opengraph-illustration?name=Hand%20HeadCube&backgroundColor=cactus"
signals: "AnthropicAI · SakanaAILabs · hardmaru · perplexity_ai · NVIDIAAI · cursor_ai · ClementDelangue · AlphaSignalAI"
header-img: img/dark_yellow_400.png
---


## 1/14 Anthropic 测试 Claude 进入 NMR 化学分析
Anthropic 发布 Science Blog “Making Claude a chemist”，测试 Claude 在化学家常用的 NMR 波谱分析中的能力。研究比较 Opus 4.7、Opus 4.6、Sonnet 4.6 与 ChemDraw、MestReNova，在 20 个训练截止后 ChemRxiv 化合物上做 1D NMR 前向预测，并让 Opus 4.7 从质谱和氢/碳 NMR 峰表反向推断结构。Anthropic 称 Opus 4.7 在氢谱预测中平均误差约 ±0.079 ppm，碳谱上与 MestReNova 接近；在 15 个反向结构解析任务中，简单结构全部成功，复杂结构在加入起始物提示后多数成功。公司把这视为通用模型开始辅助化学日常分析工作的早期证据。
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2062979607448682731)

## 2/14 Sakana AI 在东京成立 Recursive Self-Improvement Lab
Sakana AI 宣布成立 RSI Lab，专门研究“AI building AI”和开放式自我改进系统。公告把过去两年的 LLM-Squared、Darwin Godel Machine、ShinkaEvolve、ALE-Agent、Digital Red Queen 和 The AI Scientist 串成一条技术路线：让模型自动发现训练算法、改写 agent 代码、进化科学程序、在启发式竞赛中通过自学习超过人类专家，并在对抗环境中共同演化。Sakana 强调日本的资源约束使其更关注 sample-efficient 和 idea-driven 的路线，而不是 brute-force scaling。该发布把 recursive self-improvement 从单篇研究推进为组织级研发方向。
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2062948403815030850)
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2063061736748679350)
- [查看 @hardmaru 原始推文](https://x.com/hardmaru/status/2062948594597208557)

## 3/14 NVIDIA Nemotron 3 Ultra 进入 Perplexity 和 agent workflow
NVIDIA 推广 Nemotron 3 Ultra，并宣布 Nemotron Coalition 新增 H Company、Nous Research 和 Prime Intellect；Perplexity 同日称 Pro 和 Max 用户可在 Perplexity 与 Computer 中使用该模型。NVIDIA 将 Nemotron 3 Ultra 定位为面向长周期 agent orchestration 的开放 MoE 模型，总参数 550B、每 token 激活 55B，强调 1M 长上下文、高吞吐和更低 agent task cost。官方还发布 agentic harness 教程，展示如何把 Ultra 接入 agent 工作流。它的落地重点不是单轮聊天，而是多步规划、工具调用、研究综合、代码任务和企业流程编排。
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2062976272436002825)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2062961026409333232)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2062987827080499317)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2062987831048331625)

## 4/14 Cursor Design Mode 把 UI 修改变成视觉提示
Cursor 发布 Design Mode 更新，允许用户在 Cursor browser 中点击页面元素、画标注或用语音描述 UI 修改，让 agent 获得选中元素、背后代码、周边布局和视觉关系等上下文。Cursor 官方称这能缩短“看到问题”与“让 agent 理解并修改”的距离，尤其适合前端、设计和产品迭代。相关推文把功能概括为 point、draw、talk to update your UI。与传统 IDE chat 相比，这类视觉提示减少了用户用文字描述空间关系的负担，也使 coding agent 更接近真实产品表面，而不是只在文件树和终端里工作。
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2062950344687272144)
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2062950345928749525)

## 5/14 Hugging Face 证明 agent-optimized CLI 能显著省 token
Clement Delangue 转述 Hugging Face 对 `hf` CLI 的 agent benchmark：Claude Code 和 Codex 在真实 Hub 任务上的约 1,000 次运行显示，使用 agent-optimized CLI 比手写 curl 或 SDK 更省 token，也更稳定。Hugging Face 博客称，在复杂多步骤任务上，手写 REST 调用会多消耗 2.4 倍到 6 倍 token；在 Claude Code + Sonnet 4.6 上，`hf` CLI 成功率 94%，curl / SDK 为 84%。这挑战了“agent 会重写所有工具、SaaS 会消失”的简单叙事：好的 CLI 和工具层实际是缓存过的流程知识，能降低 agent 的推理成本和失败率。
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2062982727729553913)

## 6/14 NVIDIA PixelDiT 入围 CVPR，直接在像素空间生成图像
NVIDIA AI 发布 PixelDiT 线程，称该 NVIDIA Research 项目入选 CVPR 2026 best paper finalist。PixelDiT 是单阶段 pixel-space diffusion transformer，去掉大多数图像扩散模型依赖的 VAE autoencoder，直接在像素空间学习扩散过程。官方称这种做法避免了压缩到 latent space 后质量损失在 pipeline 中累积，尤其能保留文字、纹理和细节；项目 README 报告 ImageNet 256x256 上 1.61 gFID，文本到图像 1024x1024 上 0.74 GenEval / 83.5 DPG-Bench。它代表图像生成研究继续在架构层面挑战 latent diffusion 默认范式。
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2063034422698389625)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2063034430642332160)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2063034436061401249)

## 7/14 ByteDance UI-TARS Desktop 把开源 agent 推向本地电脑控制
AlphaSignalAI 介绍 ByteDance 开源的 TARS / UI-TARS Desktop，称其是 100% 本地运行的多模态电脑控制 agent stack，可通过视觉模型读取屏幕并驱动鼠标、键盘和浏览器。GitHub 项目将其定位为 open-source multimodal AI agent stack，包含 Agent TARS 的 CLI / Web UI 与 UI-TARS Desktop 的原生 GUI agent，支持自然语言控制、截图视觉识别、精确鼠标键盘操作，并通过 MCP 接入现实工具。这条路线和 Browser Use、Computer Use 等能力相邻，但开源和本地部署使其更适合隐私敏感、内网和可审计自动化场景。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2062867665237016602)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2062867666319102203)

## 8/14 Replit Canvas 继续把 AI app builder 推向视觉设计流
Replit 推广新 Canvas，强调用户可创建 UI 设计、生成 GPT-Image 2 和 Seedance 资产，并在几分钟内把设计转成可发布应用。官方文档把 Canvas 描述为和 Agent 一起探索、迭代和比较设计方向的可视化空间，用户可以在同一 visual board 中查看 artifact、mockup、app preview，再把满意的变化应用回主应用。另一个示例展示用户用 Replit 在 10 分钟内把 12 个 Google Drive 集中成 AI-powered employee hub。Replit 的重点正在从“prompt 生成代码”扩展到设计、资产、业务应用和发布前迭代。
- [查看 @Replit 原始推文](https://x.com/Replit/status/2062943577903403113)
- [查看 @Replit 原始推文](https://x.com/Replit/status/2062962324529389964)

## 9/14 Databricks 展示 Lakebase、Unity Catalog 和 agent 应用治理
Databricks 连续推广 Lakebase 与应用开发场景：一条推文介绍 Backstage 运行在 Databricks Lakebase 后，Unity Catalog 可把 operational Postgres 的访问控制、审计、行级安全和 masking policy 扩展到临时分支；另一条推文展示 Cursor 与 Databricks 如何构建、治理和部署生产应用。Thoughtworks 文章进一步说明，Lakebase 分支创建/删除会进入 `system.access.audit`，开发者可安全创建隔离数据库分支，治理团队可用一条 SQL 查询追踪操作与成本。对 AI 生成应用和 agentic app builder 来说，数据库分支、权限和审计正在成为和代码生成同等重要的基础设施。
- [查看 @databricks 原始推文](https://x.com/databricks/status/2062961426411479182)
- [查看 @databricks 原始推文](https://x.com/databricks/status/2062914942685114396)

## 10/14 OpenAI 修复误封账号，继续扩展 ChatGPT 工作流
OpenAI 官方确认一次问题导致部分用户账号被错误暂停，正在恢复访问并处理相关订阅和 credit 问题。这是少数来自官方账号、直接影响用户账户和付费权益的运营事故更新，说明在 ChatGPT、API、Codex 和企业工作流成为生产基础设施后，账号风控误判会迅速变成业务连续性问题。Greg Brockman 同日提到 “email integration with ChatGPT” 和使用 Codex 操作电脑的体验，显示 OpenAI 的产品线仍在向个人工作流、邮件和代码代理扩展。当天的信号一正一反：能力在进入更多日常系统，可靠性和账户恢复也必须跟上。
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2062927046448431587)
- [查看 @gdb 原始推文](https://x.com/gdb/status/2063056196735504796)
- [查看 @gdb 原始推文](https://x.com/gdb/status/2063102501847757197)

## 11/14 Microsoft MAI-Transcribe-1.5 和 Cohere 推动 ASR 评估话题
Mustafa Suleyman 转发 Artificial Analysis 图表，称 MAI-Transcribe-1.5 表现突出；Cohere 同日推广 Hugging Face Far-Field ASR Leaderboard webinar，将讨论 Cohere Transcribe 以及真实场景 ASR 系统评估。语音识别正在从“能转写”进入更细的真实环境比较：远场语音、噪声、多人、设备差异和成本延迟都影响生产可用性。Microsoft 自研 MAI 语音模型与 Cohere 的企业 ASR 评估活动共同说明，frontier AI 竞争不只在文本和代码模型，也在音频输入层与 voice agent 基础能力上继续加速。
- [查看 @mustafasuleyman 原始推文](https://x.com/mustafasuleyman/status/2063170571966222383)
- [查看 @cohere 原始推文](https://x.com/cohere/status/2062920605507174653)

## 12/14 Meta SAM 3D 与 NVIDIA NitroGen 获 CVPR 认可
Meta AI 祝贺 SAM 3D 团队获得 CVPR 2026 Best Paper Honorable Mention，称其推动了计算机视觉边界；NVIDIA 的 Jim Fan 也宣布 NitroGen 获得 CVPR Best Paper Honorable Mention，目标是让 embodied agents 掌握现实物理以及多种模拟物理。两条研究更新分别指向 3D scene / object understanding 和 general-purpose embodied agents。相比纯文本 agent，3D 与 embodied agent 更强调感知、物理、仿真和动作策略；CVPR 对这些项目的认可显示多模态和机器人方向继续从 demo 走向系统性研究基准。
- [查看 @AIatMeta 原始推文](https://x.com/AIatMeta/status/2062920724944507095)
- [查看 @DrJimFan 原始推文](https://x.com/DrJimFan/status/2062942941363286048)
- [查看 @DrJimFan 原始推文](https://x.com/DrJimFan/status/2062943409216897258)

## 13/14 Ideogram 4 进入 Together，开源图像模型继续分发
Together AI 宣布 Ideogram 4 可通过 Together Serverless Inference 使用，称其是面向设计的 open image model，支持强文本渲染、布局控制、原生 2K 图像生成、广告海报包装等品牌工作流。Clement Delangue 也转发 Ideogram 技术博客，显示开源图像模型仍在 Hugging Face / Together 等生态中快速分发。与当天 PixelDiT 的研究路线不同，Ideogram 4 更新更偏生产创意工具：重点是 typography、多语言文字、layout、color palette 和可部署推理。图像模型竞争正在同时发生在论文架构和产品化分发两端。
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2062922654156230907)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2062922656538574990)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2062922657738142069)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2062962844593709099)

## 14/14 AI 成本、模型选择和 sovereign AI 争议继续升温
多位行业账号围绕模型成本、国家战略和 agent 产品设计发声。Bindu Reddy 认为 OpenAI 会因价格性能在下一轮获胜，并批评 Mythos 昂贵、Gemini 不适合 agentic loops；Gary Marcus 则警告如果美国政府入股或救助本土 AI 公司，会削弱海外客户对美国 AI 的信任，并推动 Mistral 等 sovereign AI 叙事。Ethan Mollick 转发 Anthropic 关于 agent teams 和 workflows 的图表，强调这些新模式强大但耗 token。当天讨论共同指向一个现实问题：2026 年的 frontier AI 竞争不只是模型智力，还包括单位经济、国家信任、部署控制权和 agent workflow 的可持续成本。
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2062986841498747087)
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2063119012461195624)
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2063128152747209111)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2063073955968123062)

---

## Deep Dive 附录

### Anthropic Making Claude a chemist
Anthropic 与合成、计算和分析化学家合作，测试 Claude 是否能处理化学家最常见的分析输入之一：NMR spectrum。研究用 20 个训练截止后发布的 ChemRxiv 新化合物做前向预测，要求 Claude、ChemDraw 和 MestReNova 根据 SMILES 与溶剂预测氢谱和碳谱峰位置。Opus 4.7 在氢谱上平均误差约 ±0.079 ppm，碳谱与 MestReNova 接近；在 splitting pattern 和 coupling constant 上，Opus 4.7 也优于传统工具。反向结构解析中，Opus 4.7 在 15 个问题上根据 HRMS 与 1D NMR 峰表提出候选结构，简单结构全部成功，复杂结构在给出起始物提示后多数成功。限制包括样本小、未覆盖 2D NMR、立体化学和更多溶剂，但结果显示通用多模态模型已能辅助部分化学分析工作。
[查看原文](https://www.anthropic.com/research/making-claude-a-chemist)

### Sakana AI RSI Lab
Sakana AI RSI Lab 的核心主张是把 AI 系统从静态工具推进为 autonomous researchers。公告把 LLM-Squared、Darwin Godel Machine、ShinkaEvolve、ALE-Agent、Digital Red Queen 和 The AI Scientist 归入同一条演化式优化路线：LLM 自动发明偏好优化算法，agent 改写自身代码并在 SWE-bench 上带来 30 个百分点提升，ShinkaEvolve 用 150 个样本解决复杂优化问题并生成新的 MoE load-balancing loss，ALE-Agent 在 AtCoder Heuristic Contest 058 超过 804 名人类专家，Digital Red Queen 在 Core War 中探索对抗性共同演化。Sakana 将东京实验室定位为面向 RSI 的专门组织，强调通过约束、sample efficiency 和开放式搜索来替代单纯算力扩张。
[查看原文](https://sakana.ai/rsi-lab/)

### Cursor Design Mode
Cursor Design Mode 的更新让 agent 可直接接收视觉上下文。用户在 Cursor browser 中选择运行页面里的元素、引用多个组件、画出变化区域或用语音描述修改目标；Cursor 会将选中元素、对应代码、周围布局和视觉关系传给 agent。官方认为 UI 工作天然是空间化协作，设计师和前端开发者常用注释、框选和指向来表达意图，纯文字 chat 很难准确传达“这块”“和那个一样”“这组一起改”。Design Mode 因此把 agent 从文件级编辑推进到产品表面级编辑，适合快速迭代界面细节、视觉一致性和交互状态。
[查看原文](https://cursor.com/blog/design-mode)

### Hugging Face hf CLI for agents
Hugging Face 从 2026 年 4 月开始识别 agent 访问 Hub 的流量，并围绕 Claude Code、Codex 等 coding agent 优化 `hf` CLI。博客对比了 agent 使用 `hf` CLI 与手写 curl / Python SDK 完成真实 Hub 任务的表现。结论是简单读取任务中 curl 或 SDK 仍可行，但复杂多步骤任务会让 agent 每次重新推导 REST 调用链，导致 2.4 倍到 6 倍 token 消耗；在 Claude Code + Sonnet 4.6 上，CLI 成功率 94%，curl / SDK 为 84%。Hugging Face 还生成可供 agent 加载的 CLI skill，把命令面压缩成短上下文。这说明工具设计正在从人类 CLI UX 扩展到 agent-facing UX。
[查看原文](https://huggingface.co/blog/hf-cli-for-agents)

### NVIDIA Nemotron 3 Ultra
NVIDIA 将 Nemotron 3 Ultra 定位为长周期 agent workflow 的开放 reasoning / orchestration 模型。模型采用 550B 总参数、55B 激活参数的 MoE 结构，强调在 coding sessions、复杂研究综合、芯片验证和多步企业流程中处理少数关键深度推理调用。官方报告其在 Ruler 1M、PinchBench、IFBench 等任务上保持 frontier open model 精度，同时相比同类开放模型最高 5 倍吞吐，并在 SWE-bench、Terminal-Bench 2.0 等任务中通过更少 token 把 task completion cost 降低最高 30%。技术路线包括 Hybrid Mamba Transformer、NVFP4 和面向 agent harness 的 post-training。
[查看原文](https://developer.nvidia.com/blog/?p=117924)

### NVIDIA PixelDiT
PixelDiT 是 NVIDIA Research 的 pixel-space diffusion transformer，入选 CVPR 2026 Oral。它去掉传统 latent diffusion pipeline 中的 VAE autoencoder，直接在像素空间生成图像，避免压缩和解压过程对纹理、文字等细节造成损失。架构采用 patch-level DiT 处理全局语义、pixel-level DiT 处理细节纹理。项目 README 报告 ImageNet 256x256 上达到 1.61 gFID，ImageNet 512x512 上 1.81 gFID；文本到图像模型在 1024x1024 上达到 0.74 GenEval 和 83.5 DPG-Bench。该方向挑战 latent space 作为图像扩散默认设计的地位。
[查看原文](https://github.com/NVlabs/PixelDiT)

### ByteDance UI-TARS Desktop
UI-TARS Desktop 是 ByteDance 的开源多模态 GUI agent 桌面项目，目标是在本地电脑、浏览器和远程环境中用自然语言执行操作。项目包含 Agent TARS 和 UI-TARS Desktop：前者提供 CLI / Web UI 的通用多模态 agent stack，后者是由 UI-TARS 和 Seed vision-language models 驱动的原生 GUI agent。能力包括截图和视觉识别、精确鼠标键盘控制、本地/远程 operator 示例，以及 MCP 工具集成。它的意义不只在“能控制电脑”，还在本地运行、开源和可组合 agent infrastructure，为隐私敏感和可审计的 desktop automation 提供了另一条路径。
[查看原文](https://github.com/bytedance/UI-TARS-desktop)

### Databricks Lakebase + Backstage
Thoughtworks 的 Backstage + Databricks Lakebase POC 展示了 operational database 进入 Unity Catalog 后的治理变化。传统 RDS 应用数据库与数据湖分属不同安全和审计体系，追踪一次 table drop 可能需要 CloudTrail、Postgres 日志和 CloudWatch。迁移到 Lakebase 后，Backstage catalog 通过 Lakehouse Federation 暴露为 Unity Catalog foreign catalog，权限可用 UC grants 管理；branch 创建与删除自动进入 `system.access.audit`，并带有 OAuth 用户身份、source IP 和请求参数。Lakebase 还可把短生命周期分支成本归因到 project_id、branch_id 和 endpoint_id。对 agentic app development，这意味着应用数据库也能参与统一治理、审计和分支工作流。
[查看原文](https://www.thoughtworks.com/en-de/insights/blog/data-engineering/backstage-databricks-lakebase-operational-database-unity-catalog)
