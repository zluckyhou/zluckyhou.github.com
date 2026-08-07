---
layout: daily
title: "AI Frontier Daily | 2026.04.02"
headline: "Anthropic Claude Code 源代码意外泄露：1900 个 TypeScript 文件、51.2 万行代码曝光"
date: 2026-04-02 09:07:00 +0800
permalink: /ai-daily/2026/04/02/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "3 月 31 日，Anthropic 在发布 Claude Code 常规 npm 更新时，因 .npmignore 配置失误，将内部调试用的 TypeScript 源码压缩包意外打包发布。该压缩包托管于 Anthropic 的 Cloudflare R2 存储桶，包含约 1900 个 TypeScript 文件、超过 51.2 万行代码，涵盖 slash 命令库、内置工具以及完整的代理调度逻辑。安全研究员 Chaofan Shou 率先发现并公开，相关 GitHub 镜像在 24 小时内被 fork 超过 41,500 次。Anthropic 随即发出大规模 DMCA 版权下架请求，但承认下架范围超出预期并已缩减。社区成员还在代码中发现了约 100MB 的西藏甘珠尔（Kangyur）佛经 UTF 纯文本数据，引发广泛讨论。Anthropic 官方声明：此次泄露属于\"发布打包流程的人为错误\"，无客户数据或凭据外泄。"
summary: "3 月 31 日，Anthropic 在发布 Claude Code 常规 npm 更新时，因 .npmignore 配置失误，将内部调试用的 TypeScript 源码压缩包意外打包发布。该压缩包托管于 Anthropic 的 Cloudflare R2 存储桶，包含约 1900 个 TypeScript 文件、超过 51.2 万行代码，涵盖 slash 命令库、内置工具以及完整的代理调度逻辑。安全研究员 Chaofan Shou 率先发现并公开，相关 GitHub 镜像在 24 小时内被 fork 超过 41,500 次。Anthropic 随即发出大规模 DMCA 版权下架请求，但承认下架范围超出预期并已缩减。社区成员还在代码中发现了约 100MB 的西藏甘珠尔（Kangyur）佛经 UTF 纯文本数据，引发广泛讨论。Anthropic 官方声明：此次泄露属于\"发布打包流程的人为错误\"，无客户数据或凭据外泄。"
issue_count: 15
deep_dive_count: 4
reading_time: 18
cover: "https://regmedia.co.uk/2026/03/31/shutterstock_2192683369.jpg"
signals: "bindureddy · aidan_mclau · demishassabis · karpathy · togethercompute · ClementDelangue · hwchase17 · AlphaSignalAI"
header-img: img/dark_yellow_400.png
---


## 1/15 Anthropic Claude Code 源代码意外泄露：1900 个 TypeScript 文件、51.2 万行代码曝光
3 月 31 日，Anthropic 在发布 Claude Code 常规 npm 更新时，因 .npmignore 配置失误，将内部调试用的 TypeScript 源码压缩包意外打包发布。该压缩包托管于 Anthropic 的 Cloudflare R2 存储桶，包含约 1900 个 TypeScript 文件、超过 51.2 万行代码，涵盖 slash 命令库、内置工具以及完整的代理调度逻辑。安全研究员 Chaofan Shou 率先发现并公开，相关 GitHub 镜像在 24 小时内被 fork 超过 41,500 次。Anthropic 随即发出大规模 DMCA 版权下架请求，但承认下架范围超出预期并已缩减。社区成员还在代码中发现了约 100MB 的西藏甘珠尔（Kangyur）佛经 UTF 纯文本数据，引发广泛讨论。Anthropic 官方声明：此次泄露属于"发布打包流程的人为错误"，无客户数据或凭据外泄。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/bindureddy/status/2039039555001786601" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a><a class="source-chip" href="https://x.com/aidan_mclau/status/2039125800038072366" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@aidan_mclau</a></div>

## 2/15 OpenAI 宣布关闭 Sora：每日烧钱百万，用户数从峰值腰斩
OpenAI 正式宣布 Sora 视频生成服务将于 4 月 26 日关停 Web 和 App 入口，API 将于 9 月 24 日停止服务。独立应用仅存活六个月。核心原因是财务不可持续：Sora 全球用户数从峰值约 100 万骤降至 50 万以下，但每日运营成本维持在约 100 万美元。CEO Sam Altman 决定将计算资源重新分配至 GPT-4o 等核心产品。业界认为此次关停表明高成本视频生成服务若缺乏足够付费用户，商业模式难以为继。国内网红账号 bindureddy 早在此前即指出：Sora 退场后，中国 AI 视频（Kling、SeaDance、Wan）已在开源与商用双维度占据主导地位。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/bindureddy/status/2038840334508339380" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a></div>

## 3/15 Google Veo 3.1 Lite 发布：视频生成成本降至 Sora 退场后的最低价
Google DeepMind 于 3 月 31 日正式推出 Veo 3.1 Lite，通过 Gemini API 付费预览版开放，Google AI Studio 可免费测试。定价为 720p 视频 $0.05/秒，较 Veo 3.1 Fast 低 50% 以上，支持 Text-to-Video 和 Image-to-Video，可选 4/6/8 秒时长，分辨率最高 1080p，支持横竖屏。Google 同时宣布 4 月 7 日将再次下调 Veo 3.1 Fast 价格。此次发布时机与 OpenAI Sora 关停高度重合，被外界视为 Google 主动填补市场空白的战略举措。Demis Hassabis 亲自转发公告，表明 Google DeepMind 对视频生成赛道的持续重视。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/demishassabis/status/2039064508447027579" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@demishassabis</a></div>

## 4/15 npm axios 供应链攻击：朝鲜黑客 39 分钟完成渗透，83M 周下载量库被植入 RAT
3 月 30-31 日，朝鲜系威胁组织 UNC1069（微软称 Sapphire Sleet）在 39 分钟内完成了对 npm axios 包的供应链攻击。攻击者劫持维护者账号，发布含恶意依赖 "plain-crypto-js@4.2.1" 的污染版本（axios@0.30.4 / @1.14.1），该依赖在安装后静默执行跨平台 RAT（远程访问木马）：macOS 用 AppleScript 落地 C++ 二进制、Windows 用 PowerShell、Linux 用 Python。Axios 周下载量逾 8300 万，是 npm 生态最广泛使用的 HTTP 客户端，此次感染时间窗口潜在影响规模为 npm 历史上最大之一。攻击基础设施在行动前 18 小时预先部署。安全建议：将 axios 降级至 1.14.0 或 0.30.3，并立即轮换所有密钥。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/karpathy/status/2038849654423798197" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@karpathy</a></div>

## 5/15 Karpathy：AI 编码代理时代，供应链攻击风险倍增，包管理器默认行为必须改变
Andrej Karpathy 在披露 axios 攻击的同时指出：此类供应链攻击与 LLM 大量自动执行 pip install / npm install 的趋势相叠加，安全风险已被显著放大。用户往往在不知情的情况下允许 AI 编码代理安装任意依赖，而未固定版本号（unpinned dependencies）的项目只要晚几小时安装便会中招。Karpathy 呼吁 pip、npm 等包管理器项目改变默认行为：例如引入发布年龄限制（release-age constraint），避免单次感染借助未固定版本在用户中随机传播。他认为仅靠用户自行设置容器或限制策略无法从根本上解决问题。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@karpathy<span class="source-chip__links"><a href="https://x.com/karpathy/status/2038849654423798197" target="_blank" rel="noopener" aria-label="@karpathy 原文 1">1</a><a href="https://x.com/karpathy/status/2038850469163106535" target="_blank" rel="noopener" aria-label="@karpathy 原文 2">2</a></span></span></div>

## 6/15 Together AI 开源 Aurora：在线强化学习投机解码，从零训练超越预训练基线
Together Research 发布并开源 Aurora，一套将投机解码与在线强化学习融合的统一训练-服务框架。传统 draft 模型存在"流量分布漂移后性能退化"的核心缺陷，Aurora 通过"服务即训练"飞轮解决这一问题：推理服务器实时将 accept/reject 信号写入缓冲区，异步训练服务器据此更新 draft 模型权重并热替换，推理服务全程不中断。关键性能数据：在 MiniMax M2.5 229B 上从零达到 1.45× 吞吐提升；在 Qwen3 和 Llama3 等成熟模型上，相对精心预训练的静态 draft 额外提速 1.25×；Aurora 接受长度 3.08 tokens vs 静态基线 2.63；在流量分布切换后约 10,000 请求内快速恢复。论文已在 arXiv 发表，代码完全开源。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute<span class="source-chip__links"><a href="https://x.com/togethercompute/status/2039099848205754635" target="_blank" rel="noopener" aria-label="@togethercompute 原文 1">1</a><a href="https://x.com/togethercompute/status/2039099852924367186" target="_blank" rel="noopener" aria-label="@togethercompute 原文 2">2</a></span></span></div>

## 7/15 HuggingFace TRL v1.0 正式发布：75+ 后训练方法，月下载 300 万次，走向生产稳定
Clément Delangue 宣布 TRL（Transformer Reinforcement Learning）v1.0 正式发布，历经 6 年从研究原型迈向生产级基础设施。v1.0 核心特性：实现 75+ 后训练方法（SFT、DPO、GRPO、RLOO 等）；引入稳定（Stable）与实验（Experimental）双轨制 API，保证核心接口语义化版本稳定；集成专用内核后 SFT/DPO 训练速度提升 2×、显存占用降低 70%；PyPI 月下载量已达 300 万次，是世界上最广泛用于开源模型后训练的工具库，支撑了绝大多数主流开源大模型的对齐与微调工作。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/ClementDelangue/status/2039121367656702102" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue</a></div>

## 8/15 QodoAI 完成 7000 万美元 B 轮融资：押注 AI 代码验证是下一个必争赛道
AI 代码质量平台 Qodo（即 QodoAI）宣布完成 7000 万美元 B 轮融资，由 Qumra Capital 领投，OpenAI 的 Peter Welinder 和 Meta 的 Clara Shih 等知名人士参与。累计融资达 1.2 亿美元。Qodo 的核心论点是：随着 AI 编码工具每月生成数十亿行代码，独立验证层将成为软件开发的下一个基础设施。客户包括 NVIDIA、Walmart、Red Hat、Box、Intuit、Ford 和 Monday.com。LangChain 创始人 Harrison Chase 点赞该消息，表明 AI 代理化软件开发赛道在 2026 年持续获得资本青睐。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hwchase17/status/2038977266982817963" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17</a></div>

## 9/15 PrismML Bonsai 1-bit 大模型：14 倍压缩比，iPhone 17 Pro Max 上跑出 44 tok/s
PrismML 发布 Bonsai 系列 1-bit 权重大模型，包含 1.7B（0.24GB）、4B（0.5GB）、8B（1.15GB）三个规格，全部基于 Apache 2.0 协议开源。每个权重仅使用 1 bit（0 映射到 -scale，1 映射到 +scale），每 128 个权重共享一个 FP16 scale 因子，实际有效位宽约 1.125 bit。性能表现：1-bit Bonsai 8B 与全精度主流 8B 指令模型竞争力相当，实现 10.8× 智能密度；通过 MLX Swift 在 iPhone 17 Pro Max 上实现 44 tok/s 原生运行。Clément Delangue 转发，HuggingFace 社区对边缘端超小模型的关注度显著提升。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/ClementDelangue/status/2039107111653646754" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue</a></div>

## 10/15 NVIDIA AutoGaze 入选 CVPR 2026：视频 AI 跳过 99% 冗余帧，推理提速 19 倍
NVIDIA 联合 UC Berkeley、MIT 等机构在 arXiv 发表论文《Attend Before Attention: Efficient and Scalable Video Understanding via Autoregressive Gazing》，即 AutoGaze，已被 CVPR 2026 收录。AutoGaze 是一个约 3M 参数的轻量模块，通过自回归选择并跳过视频中的冗余 patch（背景、静止区域），直接作用于 ViT 或 MLLM 的输入，无需修改主干网络。核心数据：视觉 token 数量减少 4-100×；Vision Transformer 推理提速最高 19×；在 HLVid 长视频理解基准上 MLLM 性能提升 10.1%；支持 1K 帧 4K 分辨率实时处理。与人眼真实注视机制高度吻合，开源代码已在 GitHub NVlabs/AutoGaze 发布。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AlphaSignalAI/status/2038995189574861188" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI</a></div>

## 11/15 Sakana AI Scientist 发表于 Nature：史上首篇全 AI 生成、通过正式同行评审的论文
Sakana AI 与 UBC、Vector Institute、牛津大学合作的论文《The AI Scientist: Towards Fully Automated AI Research》正式发表于 Nature。The AI Scientist-v2 实现全流程自动化：给定研究方向后，自主生成研究想法、检索文献、设计并运行实验、撰写 LaTeX 论文，并通过平行代理树搜索完成实验规模化。里程碑：AI Scientist-v2 向 ICLR 2025 的一个 Workshop 提交了三篇全 AI 生成论文，其中一篇通过了严格的人工同行评审——这是有记录的首例。Nature 的接受意味着该成果已获最顶级学术期刊认可，标志着 AI 辅助科学研究进入新纪元。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hardmaru/status/2039044579291476253" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a></div>

## 12/15 Yann LeCun 团队开源 LeWorldModel：15M 参数稳定端到端 JEPA，代码权重已上线 HuggingFace
LeCun 团队的 LeWorldModel（LeWM）数据集与模型权重正式在 HuggingFace 开放，同步发布了基于 dino-wm 的世界模型规划代码。LeWM 是首个能从原始像素进行稳定端到端训练的 JEPA（Joint-Embedding Predictive Architecture），仅使用两个损失项：下一帧嵌入预测损失 + 高斯分布正则化（SIGReg）。关键特性：约 15M 可训练参数，单 GPU 数小时即可训练；规划速度比基于基础模型的世界模型快 48×；在 2D 和 3D 控制任务上竞争力突出。John Carmack 对相关论文进行了深度技术评析。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ylecun<span class="source-chip__links"><a href="https://x.com/ylecun/status/2039118144795525175" target="_blank" rel="noopener" aria-label="@ylecun 原文 1">1</a><a href="https://x.com/ylecun/status/2039109060641837450" target="_blank" rel="noopener" aria-label="@ylecun 原文 2">2</a></span></span></div>

## 13/15 Claude Dispatch：Anthropic 推出远程桌面 AI 代理，手机发指令、Mac 自动完成任务
Anthropic 于 3 月 17 日推出 Claude Dispatch 研究预览版，面向 Pro 和 Max 订阅用户（macOS）开放。用户从手机发送任务指令，Dispatch 通过 Anthropic 基础设施路由至用户 Mac 本地执行，Claude 可完整访问文件、浏览器和应用程序。核心特性：持久化会话（不在每次任务后重置上下文）；手机 QR 码配对；支持打开 App、填写表格、网页操控等操作。这是 Anthropic 在 50 天内发布 Opus 4.6、Sonnet 4.6、Cowork、Dispatch 四大更新后的整体战略缩影——从"回答问题的聊天机器人"转向"自主运行数小时的 AI 代理"。Ethan Mollick 指出，对大多数用户而言，Dispatch 这类新界面才是下一个真正的飞跃。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/emollick/status/2039109996097491153" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a></div>

## 14/15 Gary Marcus：Claude Opus 4.6 刷新 Remote Labor Index 纪录 4.17%，距 AGI 仍极远
Gary Marcus 援引 Remote Labor Index（远程劳动替代指数）最新数据：Claude Opus 4.6 以 4.17% 创该榜历史新高，但 Marcus 据此反驳 AGI 将至的论断——"任何声称我们接近 AGI 的人，要么是在撒谎，要么是迷失了。" Remote Labor Index 衡量当前 AI 在真实劳动力市场中可替代的远程任务比例，4.17% 意味着即使是现阶段最强的商业模型，对实际劳动力市场的替代能力仍高度有限。Marcus 同日还评论了 ARC-AGI 等基准的局限性，指出"常识推理"几乎从所有评测中缺席，而这恰恰是真实世界任务的核心。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/GaryMarcus/status/2039105409705705767" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GaryMarcus</a></div>

## 15/15 Ethan Mollick：AI 实验室从未清晰描绘"成功后的世界"，公众理解陷入两极化困境
沃顿商学院教授 Ethan Mollick 指出，AI 实验室在向公众传达未来愿景方面表现很差：即使是 Anthropic 的《Machines of Loving Grace》也缺乏对"如果成功、日常生活将如何改变"的具体、可理解的描绘。Mollick 批评 AI 政策讨论被"想象力匮乏"所困扰——舆论要么认为 AI 什么都不会发生，要么神化其影响，难以想象中间的现实路径。他还在同一天自嘲：意识到自己在写作中越来越多地无意识使用"Claude 体"（"It's not X, it's Y"的对仗句式），感叹人机协作已悄然影响个人写作风格。Mollick 的观察提示：AI 叙事的清晰度与准确性，将在很大程度上决定公众和政策制定者对 AI 的理解与应对。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2039142905156153428" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2039083899451494522" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a></span></span></div>

---

## Deep Dive 附录

### Anthropic Claude Code 源代码泄露：事件全貌
2026 年 3 月 31 日，Anthropic 在发布 Claude Code 的 npm 包更新时，因 package.json 中 .npmignore 或 files 字段配置失误，将一个原本用于内部调试的未混淆 TypeScript 源码压缩包意外包含在内。该压缩包托管于 Anthropic 的 Cloudflare R2 存储桶，可被任意知晓链接的人下载解压。安全研究员 Chaofan Shou 在第一时间发现并公开，相关 GitHub 镜像在 24 小时内被 fork 超过 41,500 次，内容迅速扩散。泄露范围：约 1,900 个 TypeScript 文件，超过 512,000 行代码，涵盖 slash 命令、内置工具库、完整代理调度逻辑。社区还在代码中发现了约 100MB 的西藏甘珠尔（Kangyur）佛经 UTF 纯文本，推测来自多语言预训练语料的调试残留数据。Anthropic 随即发出大规模 DMCA 下架请求，但承认影响范围超出预期，后已大幅缩减。官方声明：无客户数据或凭据泄露，属"发布流程中的人为过程错误"。目前代码已成为逆向工程社区的重要参考资料。
[查看原文](https://www.theregister.com/2026/03/31/anthropic_claude_code_source_code/)
[查看原文](https://www.bloomberg.com/news/articles/2026-04-01/anthropic-accidentally-releases-source-code-for-claude-ai-agent)

### npm axios 供应链攻击：朝鲜 Sapphire Sleet 39 分钟渗透详情
攻击发生于 2026 年 3 月 30-31 日，威胁行为者劫持了 axios 的 npm 维护者账号（jasonsaayman），将账号注册邮箱更换为 Proton Mail，并在 39 分钟内完成账号接管、发布恶意版本、上线恶意依赖包三步动作，攻击基础设施在行动前 18 小时已完成预部署。恶意版本（axios@0.30.4 和 @1.14.1）通过依赖 "plain-crypto-js@4.2.1" 在 postinstall 脚本中静默执行跨平台 RAT 投放：macOS 使用 AppleScript 落地 C++ 二进制（与 Mandiant 追踪的 WAVESHAPER 后门代码高度重叠）；Windows 使用 PowerShell；Linux 使用 Python。Google Threat Intelligence Group 将此次攻击归因于 UNC1069（朝鲜关联、具有经济动机的威胁行为者）；微软 Threat Intelligence 将其归因于 Sapphire Sleet。axios 周下载量逾 8300 万，此次供应链攻击的潜在感染半径为 npm 历史最大之一。补救措施：立即降级至 axios@1.14.0 或 @0.30.3，并轮换所有机密凭据。
[查看原文](https://thehackernews.com/2026/03/axios-supply-chain-attack-pushes-cross.html)
[查看原文](https://www.microsoft.com/en-us/security/blog/2026/04/01/mitigating-the-axios-npm-supply-chain-compromise/)

### Together AI Aurora：生产环境中的在线 RL 投机解码
Aurora 的核心创新在于将投机解码的 speculator 训练从离线（offline）切换为在线（online）：推理服务器在提供服务的同时，将每一次 accept/reject 令牌的信号实时写入环形缓冲区，异步训练服务器据此以 RL 方式持续优化 draft 模型，并通过热替换（hot-swap）将新权重无缝接入正在运行的推理服务，服务不中断。系统基于 SGLang 推理引擎实现，并引入 Tree Attention 机制高效处理投机解码产生的复杂分支结构。论文的核心结论之一：从零开始在线训练的 speculator 可以超越精心预训练的静态基线，挑战了"投机解码必须依赖离线预训练"的传统认知。在五个领域（数学、SQL、代码、金融、对话）的流量分布切换测试中，约 10,000 请求内即完成快速自适应恢复。对生产级推理服务有重要参考价值，且已完全开源。
[查看原文](https://www.together.ai/blog/aurora)
[查看原文](https://arxiv.org/abs/2602.06932)

### HuggingFace TRL v1.0：六年后走向生产稳定的开源后训练基础设施
TRL（Transformer Reinforcement Learning）是目前覆盖最广泛的开源大模型后训练工具库，支撑了绝大多数主流开源模型的对齐与微调工作，PyPI 月下载量超 300 万次。v1.0 的发布标志着从"研究原型"到"生产基础设施"的正式转型。核心设计哲学："混沌适应型设计（Chaos-Adaptive Design）"——在后训练方法仍在快速演进的阶段，优先显式实现而非过度抽象，通过 Stable/Experimental 双轨制保证核心接口稳定性（语义化版本控制）。关键性能提升：集成专用内核后，SFT/DPO 训练速度提升 2×，显存占用降低最多 70%。稳定接口包括：SFTTrainer、DPOTrainer、RewardTrainer、RLOO、GRPOTrainer；实验接口包括：ORPO、KTO、SimPO、GKD 等新兴方法。路线图：Async GRPO（解耦生成与训练）、生产级 MoE 支持、自动化训练诊断（面向 AI 代理的可读性提升）。
[查看原文](https://huggingface.co/blog/trl-v1)
