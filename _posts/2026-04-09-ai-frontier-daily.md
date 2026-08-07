---
layout: daily
title: "AI Frontier Daily | 2026.04.09"
headline: "Anthropic Mythos：前所未有的 AI 漏洞武器，红队报告引发业界震动"
date: 2026-04-09 09:07:00 +0800
permalink: /ai-daily/2026/04/09/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Anthropic 发布 Claude Mythos Preview 红队报告，披露该模型具备在所有主流操作系统和浏览器中发现并利用零日漏洞的能力。报告显示 Mythos 在 Firefox 漏洞测试中成功利用 181 次，而上代 Opus 4.6 仅成功 2 次。发现的漏洞包括 27 年历史的 OpenBSD TCP/SACK 缺陷、16 年历史的 FFmpeg H.264 编解码器漏洞，以及生产级虚拟机中的 guest-to-host 内存破坏漏洞。99% 的已发现漏洞在披露过程中仍未修补。单次发现 OpenBSD 漏洞成本不足 $50。Ethan Mollick 称\"在不同人手中，Mythos 将是前所未有的网络武器\"，Gary Marcus 在《ACM 通讯》撰文分析其深远影响，Clement Delangue 则指出开源工具已能复现部分能力。"
summary: "Anthropic 发布 Claude Mythos Preview 红队报告，披露该模型具备在所有主流操作系统和浏览器中发现并利用零日漏洞的能力。报告显示 Mythos 在 Firefox 漏洞测试中成功利用 181 次，而上代 Opus 4.6 仅成功 2 次。发现的漏洞包括 27 年历史的 OpenBSD TCP/SACK 缺陷、16 年历史的 FFmpeg H.264 编解码器漏洞，以及生产级虚拟机中的 guest-to-host 内存破坏漏洞。99% 的已发现漏洞在披露过程中仍未修补。单次发现 OpenBSD 漏洞成本不足 $50。Ethan Mollick 称\"在不同人手中，Mythos 将是前所未有的网络武器\"，Gary Marcus 在《ACM 通讯》撰文分析其深远影响，Clement Delangue 则指出开源工具已能复现部分能力。"
issue_count: 18
deep_dive_count: 6
reading_time: 14
cover: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.2365-6/665581474_754379650958649_1048376096520346652_n.png"
signals: "emollick · GaryMarcus · AIatMeta · AnthropicAI · togethercompute · cursor_ai · sundarpichai · databricks"
header-img: img/dark_yellow_400.png
---


## 1/18 Anthropic Mythos：前所未有的 AI 漏洞武器，红队报告引发业界震动
Anthropic 发布 Claude Mythos Preview 红队报告，披露该模型具备在所有主流操作系统和浏览器中发现并利用零日漏洞的能力。报告显示 Mythos 在 Firefox 漏洞测试中成功利用 181 次，而上代 Opus 4.6 仅成功 2 次。发现的漏洞包括 27 年历史的 OpenBSD TCP/SACK 缺陷、16 年历史的 FFmpeg H.264 编解码器漏洞，以及生产级虚拟机中的 guest-to-host 内存破坏漏洞。99% 的已发现漏洞在披露过程中仍未修补。单次发现 OpenBSD 漏洞成本不足 $50。Ethan Mollick 称"在不同人手中，Mythos 将是前所未有的网络武器"，Gary Marcus 在《ACM 通讯》撰文分析其深远影响，Clement Delangue 则指出开源工具已能复现部分能力。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2041759434590822658)
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2041977585949929876)

## 2/18 Meta Muse Spark：Meta Superintelligence Labs 首款模型正式发布
Meta 旗下新成立的 Meta Superintelligence Labs（MSL）推出首款模型 Muse Spark，由 Scale AI 创始人 Alexandr Wang 领导团队历经九个月重建 AI 技术栈打造。Muse Spark 是原生多模态推理模型，支持视觉链式思维、工具调用和多智能体编排。Contemplating 模式在 Humanity's Last Exam 上达到 58%，计算效率比上代 Llama 4 Maverick 高出一个数量级。模型在 Scale AI 多个排行榜（SWE-Bench Pro、HLE、MCP Atlas）并列第一。重要说明：Muse Spark 不开源，不同于此前 Meta 的 Llama 系列策略，fchollet 认为模型对公开 benchmark 过度优化，Ethan Mollick 评价其"不及当前三大顶级模型"。
- [查看 @AIatMeta 原始推文](https://x.com/AIatMeta/status/2041910285653737975)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2042040840554451286)

## 3/18 Anthropic Managed Agents：工程博客解析长时 Agent 托管架构
Anthropic 发布工程博客《Scaling Managed Agents》，详述其托管 Agent 服务的架构设计——将 Agent 拆解为三个独立组件：Session（事件日志）、Harness（调用循环）和 Sandbox（执行环境），实现"解耦大脑与双手"。核心设计原则是维护稳定接口，允许实现层随模型能力提升而独立演进。技术成果包括 TTFT 在 p50 改善约 60%、p95 改善超 90%，组件故障不级联为系统故障，支持多 VPC 连接无需网络对等。LangChain 创始人评论"开放 harness = 开放记忆，这是所有人都应该追求的"。
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2041929199976640948)

## 4/18 GLM-5.1 登陆 Together AI：754B MoE 模型，编码提升 28%
智谱 AI 推出 GLM-5.1，在 Together AI 上线。该模型为 754B 参数 MoE 架构（激活参数 40B），通过精细化强化学习后训练实现编码性能比 GLM-5 提升 28%，支持 200K 上下文窗口和多步长时间任务执行。主要基准：AIME 2025 92.70%、GPQA Diamond 86.00%、SWE-Bench Verified 77.80%、LiveCodeBench 89.3%，在 Vending Bench 2 长期规划评测中位列开源模型第一。定价：输入 $1.40/M tokens，输出 $4.40/M tokens，兼容 Claude Code、Cline 等 Agent 框架。
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2042002522798235935)

## 5/18 Cursor BugBot 学会从 PR 反馈中自我进化
Cursor 的代码审查 Agent BugBot 引入实时学习机制，从合并后的 PR 中提取三类反馈信号（用户反应投票、开发者回复、人类审查员评论）生成"学习规则"，持续优化审查质量。目前 PR 问题解决率达 78.13%，显著领先竞争对手 Greptile（63.49%）和 CodeRabbit（48.96%）。自 7 月 2025 年发布以来从 52% 提升至 78%+。已有超过 11 万个代码仓库启用学习功能，生成超过 4.4 万条学习规则。同日，Cursor 还宣布支持远程控制：可在任意机器运行 Cursor，并从手机或其他设备远程启动 Agent。
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2041969870234120231)
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2041912812637966552)

## 6/18 Gemini App 推出 Notebooks，Gemma 4 下载量突破 1000 万
Sundar Pichai 宣布 Gemini App 正式推出 Notebooks 功能，灵感来源于 NotebookLM，允许用户在单一项目中组织对话、笔记和外部资料。Google 员工 Logan Kilpatrick 确认该功能已面向用户推送，Gemma 4 自上周发布以来下载量已超 1000 万次，Gemma 系列模型总下载量突破 5 亿次，并已登上 Hugging Face 趋势榜首位。
- [查看 @sundarpichai 原始推文](https://x.com/sundarpichai/status/2041993181345280218)
- [查看 @sundarpichai 原始推文](https://x.com/sundarpichai/status/2042014040055276028)

## 7/18 Databricks CTO Matei Zaharia 获 ACM 计算奖，称"AGI 已经到来"
Databricks 联合创始人兼 CTO Matei Zaharia 荣获 2025 年 ACM 计算奖（ACM Prize in Computing），以表彰其在分布式数据系统领域的开创性贡献。Zaharia 在获奖后表示"AGI 已经到来"，认为人工通用智能的概念正在被重新理解而非仍停留于理论。Databricks 同日宣布推出 Agent Bricks 企业 AI Agent 平台，与 Databricks Apps 和 Databricks One 协同，帮助企业从原型走向可信的生产级 Agent 系统。
- [查看 @databricks 原始推文](https://x.com/databricks/status/2041895820170084794)

## 8/18 Qwen3.6-Plus 横扫 OpenRouter 日/周/趋势三榜
阿里巴巴通义千问的 Qwen3.6-Plus 完成试用期，正式上线生产环境，同时在 OpenRouter 的每日、每周和趋势排行榜上均位居榜首。官方强调模型具备低延迟、顶级推理能力和极具竞争力的性价比，已全面开放 API 生产访问。
- [查看 @Alibaba_Qwen 原始推文](https://x.com/Alibaba_Qwen/status/2041871541080924477)

## 9/18 Perplexity 发布"十亿美元构建挑战"
Perplexity 宣布为期 8 周的"Billion Dollar Build"竞赛：参赛团队使用 Perplexity Computer 构建具备 10 亿美元潜力的公司。前 10 名团队将于 6 月 9 日现场展示其运营中的商业产品，有机会获得最高数额的投资。报名已开放。
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2041929222135173466)

## 10/18 Mustafa Suleyman：AI 扩展怀疑论者是错的，指数级算力增长不可阻挡
微软 AI CEO Mustafa Suleyman 发文《The Exponential Compute Ramp》，驳斥 AI 扩展到达瓶颈的观点。他指出训练算力自 2010 年以来已增长"万亿倍"，当前增长源于芯片性能（8 倍）、内存带宽（4 倍）和互联速度等多重指数的叠加强化。预计到 2028 年有效算力将再增长 1000 倍，将推动从聊天机器人演进为"接近人类水平的 Agent"。他认为人类直觉在评估指数轨迹时"灾难性地失效"。
- [查看 @mustafasuleyman 原始推文](https://x.com/mustafasuleyman/status/2041895515819012598)

## 11/18 Runway 为 Characters 推出自定义语音功能
Runway 宣布 Characters 功能新增自定义语音：用户可通过文本描述设计全新语音，打造听起来完全符合预期的 AI 角色。功能现已在 Web App 上开放，并可通过 Runway API 调用用于产品开发。
- [查看 @runwayml 原始推文](https://x.com/runwayml/status/2041940020861223079)

## 12/18 Pika AI Self 开通电话功能
Pika 的 AI Self Agent 现已全面支持电话通话。用户可以直接拨打或接听 AI Self 的电话，适用于难以文字描述的场景、手指疲劳时，或是渴望更人性化的沟通连接时。用户可将 AI Self 连接到 iMessage 后直接呼叫。
- [查看 @pika_labs 原始推文](https://x.com/pika_labs/status/2041930729526063147)

## 13/18 HuggingFace Safetensors 捐赠给 PyTorch 基金会
HuggingFace 宣布将 Safetensors 格式捐赠给 PyTorch 基金会（由 Linux 基金会托管），目标是使这一安全的 AI 模型序列化格式成为行业公共基础设施，不再受单一公司控制。Safetensors 最初由 HuggingFace 联合 EleutherAI 开发，已成为分发大模型权重的主流标准。
- [查看 @huggingface 原始推文](https://x.com/huggingface/status/2041917470143893748)

## 14/18 RAG 去掉向量数据库后，准确率跃升至 98.7%
AlphaSignalAI 报告一项引发广泛关注的技术发现：从 RAG 系统中移除向量数据库后，准确率从常规水平跃升至 98.7%。传统 RAG 依赖文档分块、向量嵌入和相似度检索，核心假设是"语义相似意味着相关"；该方法质疑这一假设，采用替代性检索策略取得更优结果。相关开源代码仓库已发布。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2041894262552310266)

## 15/18 World Labs Marble 1.1：从几张图片重建真实世界 3D 场景
李飞飞创立的 World Labs 发布 Marble 1.1，支持从少量图片重建现实场景，并可对重建的 3D 世界进行风格化改造。用户可"捕捉自己的空间、创造世界"，适用于产品展示、影视制作等创意生产场景。
- [查看 @drfeifei 原始推文](https://x.com/drfeifei/status/2042022743630344546)

## 16/18 Halter：AI 牛项圈创造 20 亿美元估值公司
AI 农业独角兽 Halter 目前已管理近 65 万头奶牛，正在以 20 亿美元估值寻求融资。其核心产品是智能牛项圈：农场主在手机上划定电子围栏边界，项圈通过声音和振动引导牛群，系统每头牛每天采集超过 6000 个数据点。该案例展示 AI 正在渗透全球最古老的产业之一——农业，而农业占全球可居住土地的一半。
- [查看 @rowancheung 原始推文](https://x.com/rowancheung/status/2041898010637168644)

## 17/18 Cerebras Codex Spark：29 秒构建 Salesforce 克隆应用
Cerebras 演示了其 Codex Spark 产品的最新能力：生成构建计划后，在 29 秒内完成一个具备联系人添加和实时搜索功能的简单 Salesforce 克隆应用的完整代码并可运行。该演示意在挑战"AI 能否取代 SaaS"这一命题，同时彰显 Cerebras 在推理速度上的竞争优势。
- [查看 @Cerebras 原始推文](https://x.com/Cerebras/status/2042015763201221032)

## 18/18 LangChain：Agent Harness 进化论与记忆外置策略
LangChain CEO Harrison Chase 密集转发多篇关于 Agent harness 设计的文章，核心观点：随着模型能力提升，harness 中的假设会过时，系统需要持续进化。他特别强调"记忆不应被锁定在模型提供商处"，支持开放记忆系统架构，并分享了通过 PR 反馈数据进行 harness 迭代优化的实践指南。
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2042020430857543796)

---

## Deep Dive 附录

### Anthropic Claude Mythos Preview 红队报告
Anthropic 发布了 Claude Mythos Preview 的网络安全红队报告，记录了其在所有主流 OS 和浏览器中发现/利用零日漏洞的能力。关键数据：发现 595 个 tier 1-2 崩溃（较前代的 150-175 个大幅提升），在完全打补丁的目标上实现 10 次完整控制流劫持，Firefox 漏洞利用成功率 181 次 vs 上代 2 次。99% 已发现漏洞在披露期仍未修补。成本极低（OpenBSD 漏洞 <$50）。Anthropic 认为过渡期是危险窗口，敦促防御方立即开始构建相应体系。
[查看原文](https://red.anthropic.com/2026/mythos-preview/)

### Meta Muse Spark 发布公告
Meta Superintelligence Labs 首款模型，由 Scale AI 创始人 Alexandr Wang 领导的团队历时九个月重建 AI 技术栈后推出。原生多模态推理，支持视觉链式思维、工具调用、多智能体编排（Contemplating 模式）。HLE 达 58%，计算效率比 Llama 4 Maverick 高一个数量级。在 SWE-Bench Pro、HLE、MCP Atlas 上并列第一。注意：不开源，与 Meta 此前 Llama 策略不同。
[查看原文](https://ai.meta.com/blog/introducing-muse-spark-msl)

### Anthropic Managed Agents 工程博客
深度解析托管 Agent 服务的架构演进：将 Session、Harness、Sandbox 三组件解耦，实现独立替换和扩展。核心创新是将 harness 从"宠物"变为"牲口"（可随时替换）。性能成果：TTFT p50 改善 60%，p95 改善 90%+。支持跨 VPC 连接、多执行环境协调。作者回顾了分时系统先驱的思想——"为尚未出现的程序设计系统"。
[查看原文](https://www.anthropic.com/engineering/managed-agents)

### GLM-5.1 技术规格（Together AI）
754B MoE 模型（激活 40B），200K 上下文，编码性能较 GLM-5 提升 28%。AIME 2025: 92.70%，GPQA Diamond: 86.00%，SWE-Bench Verified: 77.80%，LiveCodeBench: 89.3%，Vending Bench 2（长期规划）开源第一。定价 $1.40/$4.40 per 1M tokens（输入/输出），兼容 Claude Code、Cline、Roo Code。
[查看原文](https://www.together.ai/models/glm-51)

### Cursor BugBot 自学习机制详解
BugBot 通过合并后 PR 的三类信号（点赞/踩、开发者回复、人工审查员评论）实时生成学习规则，自发布以来 PR 解决率从 52% 升至 78.13%，领先 Greptile（63.49%）和 CodeRabbit（48.96%）。已有 11 万+仓库启用，生成 4.4 万+条学习规则。首次将数十万日常 PR 审查用作连续自我改进的"自然实验"。
[查看原文](https://cursor.com/blog/bugbot-learning)

### Mustafa Suleyman：指数级算力加速论
微软 AI CEO 系统性回应 AI 扩展怀疑论。核心论点：训练算力自 2010 年增长万亿倍，当前多维度指数（芯片 8x、内存带宽 4x、互联速度）相互叠加强化。到 2028 年有效算力预计再增 1000 倍，推动从聊天机器人到"接近人类水平 Agent"的跃迁。人类直觉在指数轨迹前"灾难性失效"是怀疑论的根本原因。
[查看原文](https://mustafa-suleyman.ai/the-exponential-compute-ramp)
