---
layout: daily
title: "AI Frontier Daily | 2026.04.05"
headline: "Anthropic 封禁 Claude API for OpenClaw，社区加速转向本地模型"
date: 2026-04-05 09:07:00 +0800
permalink: /ai-daily/2026/04/05/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Anthropic 宣布停止向 OpenClaw 提供 Claude 订阅服务支持，引发业界广泛讨论。Hugging Face CEO Clement Delangue 直言警告：前沿实验室随时可能完全关闭第三方 API，建议开发者构建不依赖单一提供商的技术栈。YC 合伙人 Garry Tan 评论此举\"可能是战略失误，也可能是战略天才\"。社区反应迅速，已有用户展示在 Mac Studio 上本地运行 Gemma 4 31B 替代 Claude 的完整工作流，并分享了通过 llama-server + openclaw onboard 命令实现零 token 成本接入的方案。"
summary: "Anthropic 宣布停止向 OpenClaw 提供 Claude 订阅服务支持，引发业界广泛讨论。Hugging Face CEO Clement Delangue 直言警告：前沿实验室随时可能完全关闭第三方 API，建议开发者构建不依赖单一提供商的技术栈。YC 合伙人 Garry Tan 评论此举\"可能是战略失误，也可能是战略天才\"。社区反应迅速，已有用户展示在 Mac Studio 上本地运行 Gemma 4 31B 替代 Claude 的完整工作流，并分享了通过 llama-server + openclaw onboard 命令实现零 token 成本接入的方案。"
issue_count: 15
deep_dive_count: 3
reading_time: 13
cover: "https://huggingface.co/blog/assets/gemma4/thumbnail.png"
signals: "ClementDelangue · demishassabis · Alibaba_Qwen · karpathy · hwchase17 · emollick · gdb · yoavgo"
header-img: img/dark_yellow_400.png
---


## 1/15 Anthropic 封禁 Claude API for OpenClaw，社区加速转向本地模型
Anthropic 宣布停止向 OpenClaw 提供 Claude 订阅服务支持，引发业界广泛讨论。Hugging Face CEO Clement Delangue 直言警告：前沿实验室随时可能完全关闭第三方 API，建议开发者构建不依赖单一提供商的技术栈。YC 合伙人 Garry Tan 评论此举"可能是战略失误，也可能是战略天才"。社区反应迅速，已有用户展示在 Mac Studio 上本地运行 Gemma 4 31B 替代 Claude 的完整工作流，并分享了通过 llama-server + openclaw onboard 命令实现零 token 成本接入的方案。
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2040438379280478619)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2040450779358679056)

## 2/15 Gemma 4 全系列发布：多模态、256k 上下文，当日成 HuggingFace 热榜 #1
Google DeepMind 发布 Gemma 4 全系列开源多模态模型，包含 E2B（2.3B 激活）、E4B（4.5B 激活）、26B MoE（仅 4B 激活）及 31B 密集模型四种规格，均支持文本/图像/视频输入，256k 上下文窗口。31B 版本 LMArena Elo 约 1452，AIME 2026 得分达 89.2%，MMLU Pro 85.2%。模型上线当日即登顶 HuggingFace 热榜第一，被普遍视为继 Anthropic API 限制事件后的首选本地替代方案，多位社区开发者已完成部署验证。
- [查看 @demishassabis 原始推文](https://x.com/demishassabis/status/2040586578553151626)
- [查看 @demishassabis 原始推文](https://x.com/demishassabis/status/2040578660063645875)

## 3/15 Qwen3.6-Plus：OpenRouter 首个单日突破 1 万亿 tokens 处理量的模型
Alibaba Qwen 宣布 Qwen3.6-Plus 成为 OpenRouter 平台排名第一的模型，并创下单日处理超过 1 万亿 tokens 的历史纪录，这也是 OpenRouter 平台有史以来首次。该模型于 4 月 2 日发布，采用线性注意力与稀疏 MoE 路由混合架构，支持 100 万 token 超长上下文，SWE-bench Verified 得分 78.8，支持多模态（文本/图像/视频）输入，目前在 OpenRouter 免费开放使用。
- [查看 @Alibaba_Qwen 原始推文](https://x.com/Alibaba_Qwen/status/2040242594719158460)

## 4/15 Karpathy：LLM 时代应分享"想法文件"而非代码，PR 将变为 Prompt Request
Andrej Karpathy 一条关于"idea file"概念的推文获得 14448 赞并引发病毒式传播。他认为在 LLM agent 普及的时代，分享具体代码实现的意义大幅降低——每人的 agent 都能根据想法自动生成对应版本。更有价值的是分享"想法文件"：清晰描述核心思路，让对方 agent 去完成自己的实现。LangChain 创始人 Harrison Chase 随即评论"Idea file = PRD？"，引发对 AI 时代软件开发协作范式转变的热烈讨论。
- [查看 @karpathy 原始推文](https://x.com/karpathy/status/2040470801506541998)
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2040543940492067154)

## 5/15 随机对照实验：展示 AI 用法的初创公司收入提升 1.9x，资金需求降低 39%
Wharton 商学院教授 Ethan Mollick 分享了一项覆盖 515 家初创公司的随机对照实验（765 赞）：实验组获得 AI 成功使用案例培训，对照组不提供任何干预。结果显示：实验组 AI 使用率提升 44%，收入达到对照组的 1.9 倍，所需外部融资降低 39%。研究结论：AI 确实能显著加速企业增长，最大的瓶颈不是工具能力，而是如何理解和运用 AI 的知识门槛。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2040436307176898897)

## 6/15 Karpathy：AI 正赋能公民反向"看见政府"，颠覆传统权力结构
Karpathy 分享了对 AI 社会影响的深度思考（1965 赞）：历史上是政府通过信息优势单向"看见社会"（参考 James Scott 的《Seeing Like a State》），但 AI 正在逆转这一逻辑——普通公民借助 AI 能够大幅提升对政府行为的可见度、可读性和问责能力，实现对权力的反向监督。他认为这是比商业应用更具历史意义的 AI 影响路径。
- [查看 @karpathy 原始推文](https://x.com/karpathy/status/2040549459193704852)

## 7/15 Karpathy：个人维基（Farzapedia）是比"AI 越用越聪明"更可靠的记忆方案
Karpathy 推荐 Farzapedia 作为个人 AI 记忆的优质范式（2055 赞）：相比当前主流的"AI 隐式学习用户偏好"方案，显式个人维基更具优势——可导航、可编辑、可审计，记忆内容完全透明。他将 Chain of Thought 解读为一种"有向上下文压缩机制"，wiki 格式则为这种压缩赋予了预先存在的语义结构，是一种更工程化、更可控的个人知识管理路径。
- [查看 @karpathy 原始推文](https://x.com/karpathy/status/2040572272944324650)

## 8/15 OpenAI gdb：Codex 已支持一键部署应用至 Vercel
OpenAI 总裁 Greg Brockman 演示了 Codex 直接将应用部署到 Vercel 的能力（653 赞），标志着 AI 编程工具从"写代码"向"交付产品"的完整闭环迈进。同日他还发文强调 AI 使用已成为提升商业竞争力和创业成功率的核心新技能（470 赞），并分享了 ChatGPT 在家人健康决策中的实际辅助案例（172 赞），集中体现了 AI 在个人、商业、技术三个维度的全面落地趋势。
- [查看 @gdb 原始推文](https://x.com/gdb/status/2040463585088794740)
- [查看 @gdb 原始推文](https://x.com/gdb/status/2040466572158869832)

## 9/15 Claude Code 内幕：用 Haiku 模型发请求来"计算" token 数
NLP 研究员 Yoav Goldberg 披露了 Claude Code 的一个有趣内部实现（342 赞）：claude-code 在需要统计某请求的 token 数量时，有时会直接向 Haiku 模型发送真实请求，再从响应元数据中读取 token count，而非通过本地 tokenizer 计算。Yoav 同时对 claude-code 代码架构提出批评：存在三个相互调用的 1000+ 行函数（queryLoop → 工具调用循环 → LLM 调用），宣称"RTFM 时代结束，正式进入 RTFC（Read The F*** Code）时代"。
- [查看 @yoavgo 原始推文](https://x.com/yoavgo/status/2040383630912958547)
- [查看 @yoavgo 原始推文](https://x.com/yoavgo/status/2040587685732008280)

## 10/15 Sakana AI 推出 Marlin 深度研究助手，AI Scientist 论文登上 Nature
Sakana AI 正式发布 Marlin（测试版）——面向企业商业智能的 Ultra Deep Research 助手，专注于推理时扩展（test-time scaling）的深度研究自动化。与此同时，Sakana AI 的 AI Scientist 系统研究成果正式发表于 Nature 期刊，该系统可"自主探索科学可能性空间、自动发现突破性科学结论"，被认为是通往 AI 全流程科研自动化的重要里程碑。两项进展合并发布，标志着 Sakana AI 在科研与商业 AI 自动化两条路线同步推进。
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2040427812222627917)
- [查看 @hardmaru 原始推文](https://x.com/hardmaru/status/2040295815693123936)

## 11/15 Microsoft Copilot 添加"仅供娱乐"免责声明，引发 AI 可靠性争议
Gary Marcus 披露 Microsoft Copilot 已在界面上加入"For Entertainment Purposes Only"（仅供娱乐）的免责标注（80 赞），并讽刺道"Microsoft 花了整整 3.5 年才搞明白这件事"。Marcus 同日发布一篇关于 AI 幻觉的解析文章（131 赞），区分了过度泛化/虚构与可检索问题导致的错误，认为大模型在没有真正"接地"（grounding）的情况下，根本性缺陷仍未解决。此事被视为主流科技公司首次以官方形式承认大模型的实用局限。
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2040523048991039648)
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2040483072219738255)

## 12/15 LangChain 独立评测：MiniMax M2.7 性能已媲美闭源前沿模型
Harrison Chase（LangChain 创始人）转发 MiniMax 发布的独立评测报告：MiniMax M2.7 在 LangChain 官方基准测试中已达到与 Claude、GPT 等主流闭源前沿模型相当的水平。评测方强调"开源模型已不再是'接近'，而是真正媲美"，认为开源模型已跨越关键智能门槛。多位 AI 工程师跟进讨论，认为此类第三方独立背书对开源生态的发展具有重要信号意义。
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2040522464934162526)

## 13/15 Tesla 芯片研究工厂：单楼集成全流程，打造极速芯片研发循环
Elon Musk 宣布 Tesla 芯片研究工厂建设计划（120724 赞），将在单栋建筑内集成逻辑制造、内存、封装和掩模所有工序，实现从设计到样片的极速迭代循环。Musk 表示"这是我理想的工作方式"，该工厂将赋予 Tesla 完全独立于台积电等代工厂的芯片研发能力，对 Dojo 超算和未来 AI 硬件路线图具有深远战略意义。
- [查看 @elonmusk 原始推文](https://x.com/elonmusk/status/2040489979399536698)

## 14/15 SeeDance 2.0：AI 视频生成质量超越好莱坞，版权问题限制发布范围
Perplexity AI 创始人 Bindu Reddy 展示 SeeDance 2.0（196 赞），声称其视频生成质量"甚至优于大制片厂制作"，将于本周一上线 ChatLLM 平台。由于版权争议，该服务仅向美国和日本以外地区的商业用户开放。同日，Bindu 还分享了 Codex 与 Claude Opus 4.6 并行使用的工作流：Codex 能解决 Opus 无法处理的部分问题，两者组合性价比远超单独使用人类专家。
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2040457599376904692)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2040318795332682232)

## 15/15 Meta-Harness：不优化模型，专优化 Harness 层，AI Agent 性能提升 6x
AlphaSignal 介绍 Meta-Harness 框架：区别于主流的模型优化路径，Meta-Harness 专注于优化"harness"层——控制 AI Agent 内存管理、信息检索和任务执行的包裹代码。研究表明，仅优化 harness 层即可实现多项评测上最高 6 倍的性能提升，且该提升可持续复利积累。"在 harness 层学习，意味着即使模型不变，编排系统也会持续变聪明。"
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2040399235032461358)

---

## Deep Dive 附录

### Gemma 4 技术规格深度解析
Google DeepMind 发布的 Gemma 4 系列包含四个模型：E2B（2.3B 激活参数/5.1B 含嵌入层）、E4B（4.5B 激活/8B 含嵌入）支持 128k 上下文；26B MoE（仅 4B 激活参数，总参数 26B）和 31B 密集模型支持 256k 上下文。所有模型均支持文本、图像、视频输入，E2B/E4B 额外支持音频。关键架构创新：① Per-Layer Embeddings（PLE）——每层独立嵌入，提升专用能力；② Shared KV Cache——后层复用 K/V 投影，降低推理显存；③ Dual RoPE——滑动窗口用标准 RoPE，全局上下文用比例 RoPE。基准测试：31B 版 AIME 2026 达 89.2%，MMLU Pro 85.2%，LiveCodeBench v6 80.0%，LMArena Elo ~1452。支持 transformers、llama.cpp（GGUF）、MLX（Apple Silicon）、transformers.js（浏览器/WebGPU）等主流框架。
[查看原文](https://huggingface.co/blog/gemma4)

### Qwen3.6-Plus 架构与性能数据
Qwen3.6-Plus 于 2026 年 4 月 2 日发布，采用线性注意力与稀疏 MoE 路由的混合设计，在保持计算高效的同时具备强大的扩展性。关键参数：100 万 token 上下文窗口（业界最长之一）、SWE-bench Verified 得分 78.8（代码 Agent 能力强劲），支持多模态（文本/图像/视频）输入及结构化输出和工具使用。模型在 agent 编程和前端开发、3D 场景生成、游戏开发等复杂任务上表现突出，目前在 OpenRouter 免费层提供，并通过阿里云国际版商业部署。
[查看原文](https://openrouter.ai/qwen/qwen3.6-plus)

### Sakana AI Marlin 与 AI Scientist Nature 论文
Marlin 是 Sakana AI 于 2026 年 4 月 2 日发布的 Ultra Deep Research 助手（测试版），定位为超越现有深度研究工具的商业智能自动化平台，核心差异在于推理时扩展（test-time scaling）能力的深度挖掘，面向金融、咨询、安防等产业的复杂研究任务。AI Scientist 研究成果的 Nature 发表是 Sakana AI 更早期（3 月 26 日）的里程碑：该系统能自主遍历科学假设空间，无需人工干预地发现和验证研究突破，论文题为"Towards end-to-end automation of AI research"。Sakana AI 同期宣布了与 Datadog、Citi、Salesforce Ventures、Google 等机构的战略合作。
[查看原文](https://sakana.ai/blog)
