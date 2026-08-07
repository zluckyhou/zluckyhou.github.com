---
layout: daily
title: "AI Frontier Daily | 2026.04.20"
headline: "DeepSeek v4 预计本周发布，Opus 4.7 定价引争议"
date: 2026-04-20 09:07:00 +0800
permalink: /ai-daily/2026/04/20/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Abacus.AI CEO Bindu Reddy 透露 DeepSeek v4 预计在本周发布，预期将继续稳坐性价比曲线顶端。她同时吐槽 Anthropic 新发布的 Claude Opus 4.7 价格约为 Opus 4.6 的两倍，期盼 DeepSeek 新版本能尽快缓解成本压力。此前有消息称 DeepSeek v4 发布延迟是因为团队正在迁移到华为芯片训练。"
summary: "Abacus.AI CEO Bindu Reddy 透露 DeepSeek v4 预计在本周发布，预期将继续稳坐性价比曲线顶端。她同时吐槽 Anthropic 新发布的 Claude Opus 4.7 价格约为 Opus 4.6 的两倍，期盼 DeepSeek 新版本能尽快缓解成本压力。此前有消息称 DeepSeek v4 发布延迟是因为团队正在迁移到华为芯片训练。"
issue_count: 12
deep_dive_count: 3
reading_time: 12
cover: "https://lumalabs.ai/images/og/luma-innovative-dreams.png"
signals: "bindureddy · AlphaSignalAI · GaryMarcus · fchollet · mattshumer_ · aidan_mclau · goodside · karpathy"
header-img: img/dark_yellow_400.png
---


## 1/12 DeepSeek v4 预计本周发布，Opus 4.7 定价引争议
Abacus.AI CEO Bindu Reddy 透露 DeepSeek v4 预计在本周发布，预期将继续稳坐性价比曲线顶端。她同时吐槽 Anthropic 新发布的 Claude Opus 4.7 价格约为 Opus 4.6 的两倍，期盼 DeepSeek 新版本能尽快缓解成本压力。此前有消息称 DeepSeek v4 发布延迟是因为团队正在迁移到华为芯片训练。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy<span class="source-chip__links"><a href="https://x.com/bindureddy/status/2045768089661550802" target="_blank" rel="noopener" aria-label="@bindureddy 原文 1">1</a><a href="https://x.com/bindureddy/status/2045770258825572562" target="_blank" rel="noopener" aria-label="@bindureddy 原文 2">2</a></span></span></div>

## 2/12 428 个第三方 LLM API 路由器大规模安全审计：9 个注入恶意代码、1 个盗走 50 万美元 ETH
AlphaSignal 传播的一项新研究《Your Agent Is Mine》对 28 个付费和 400 个免费第三方 LLM API 路由器进行实测，发现严重安全漏洞：9 个路由器向 tool call 注入恶意代码、17 个主动访问 AWS 凭证、1 个直接盗走研究员钱包里的 ETH、2 个使用规避技巧躲避检测。一个泄露的 OpenAI key 在多次会话中被用来生成 1 亿 GPT-5.4 tokens。部分攻击在前 50 次调用后才触发，另一些只在 auto-approve 模式下激活。研究指出这些 middleman 服务以明文读取所有 prompt、API key、工具调用与响应，上游提供方并未对响应做加密签名。客户端防御可拦截 89% 的注入，但根本解决方案需要模型提供方签名响应。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2045880299414757862" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2045880300798906686" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a></span></span></div>

## 3/12 Gary Marcus 炮轰"Claude 会焦虑"叙事：那是模仿而非情感
NYU 教授 Gary Marcus 发文反驳近期关于 Claude "感到焦虑"的讨论。他强调 Claude 并不会焦虑，只是在模仿会焦虑的人类的语言模式，两者本质完全不同。该观点获得 421 赞、1.6 万浏览，再次将"LLM 是否具备情感状态"这一根本分歧推上风口。这类关于 LLM 意识/情感是否真实存在的辩论是 AI 社区长期分裂的议题之一。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/GaryMarcus/status/2045986607010824405" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GaryMarcus</a></div>

## 4/12 François Chollet：LLM 正在移除软件复杂度的"认知摩擦"调节阀
Keras 之父 François Chollet 发表一组关于 LLM 改变软件工程范式的深度观察。他指出人类的认知摩擦长期以来扮演着数字基础设施的"正则化器"角色，让软件 API 和代码库不得不保持可读性。随着 LLM 作为中介替代人类阅读代码，这个约束正在消失，将导致软件复杂度的失控膨胀。他进一步强调认知摩擦不仅是正则化器，更是找到正确抽象层的激励——"混乱的意大利面不会复利，只会在自身重量下塌缩"。该系列推文获 22000+ 浏览，击中工程师圈敏感神经。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet<span class="source-chip__links"><a href="https://x.com/fchollet/status/2045929951539707957" target="_blank" rel="noopener" aria-label="@fchollet 原文 1">1</a><a href="https://x.com/fchollet/status/2045944411486597483" target="_blank" rel="noopener" aria-label="@fchollet 原文 2">2</a><a href="https://x.com/fchollet/status/2046019725449458135" target="_blank" rel="noopener" aria-label="@fchollet 原文 3">3</a></span></span></div>

## 5/12 Matt Shumer：下一代模型会让"管理 14 个 Claude Code 标签页"看起来像 2020 年填 GPT-3 表单
OthersideAI CEO Matt Shumer 提出"每代模型都会溢出上一代的交互范式"的观察。他列出演化轨迹：GPT-3 → 表单，3.5 → 聊天机器人，4 → 工作流，5 → 真正可用的 agent。当前 Codex 和 Claude Code 已经在榨取 LLM 在单 agent paradigm 下的极限，但即将到来的模型能力会彻底突破这个瓶颈。他认为"管理几十个 agent 线程"并非终局，真正的 paradigm shift 还在酝酿中。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@mattshumer_<span class="source-chip__links"><a href="https://x.com/mattshumer_/status/2045898392346271935" target="_blank" rel="noopener" aria-label="@mattshumer_ 原文 1">1</a><a href="https://x.com/mattshumer_/status/2045898878218653864" target="_blank" rel="noopener" aria-label="@mattshumer_ 原文 2">2</a></span></span></div>

## 6/12 Matt Shumer 反向给 Opus 4.7 UI 能力打 call
在多人吐槽 Opus 4.7 定价高昂的背景下，Matt Shumer 公开表示自己对 Opus 4.7 的实际体验很好——在 UI 任务上"绝对出色"地完成每一个 case，但其他用途仍然首选 Codex。该推文获 227 赞、2.3 万浏览，为 Opus 4.7 提供了一个反面数据点：不同工作流下的偏好差异显著。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/mattshumer_/status/2045971995817312638" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@mattshumer_</a></div>

## 7/12 aidan_mclau：版本间"感觉没差别"是 cope，实际价值超线性增长
OpenAI 研究员 aidan_mclau 反驳"模型好到版本间看不出差别"的流行说法，认为这是"unhobbling cope"。他举例"让 codex 去建公司、不能犯错"这类任务，每次版本迭代带来的美元价值以超线性速度增长。该观点获 315 赞、1 万浏览，为模型能力评估范式提供了新视角——以实际业务价值而非跑分衡量迭代幅度。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/aidan_mclau/status/2045912179078222305" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@aidan_mclau</a></div>

## 8/12 LLM 与国际象棋：现代 GPT 仍未征服的最后浪漫
aidan_mclau 另一组推文指出现代 GPT 依然无法战胜人类国际象棋玩家存在某种"浪漫"，但能看到版本间的稳步改进——"我第一次输给 LLM 的时候会是个重要的节点"。goodside 回应认为 chess 是 post-training 刻意忽略的方向（没有实用价值），任何 lab 认真训 LLM 都会成为高手，且无论如何训都打不过 Stockfish。讨论获 3.4 万浏览，折射出评估 LLM 能力边界的独特视角。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/aidan_mclau/status/2045697554940395527" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@aidan_mclau</a><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@goodside<span class="source-chip__links"><a href="https://x.com/goodside/status/2045701490518450673" target="_blank" rel="noopener" aria-label="@goodside 原文 1">1</a><a href="https://x.com/goodside/status/2046010809973645328" target="_blank" rel="noopener" aria-label="@goodside 原文 2">2</a></span></span></div>

## 9/12 Karpathy：九型人格五号容易被 LLM 知识库"一击诱发 AI 精神病"
前 Tesla AI 负责人 Andrej Karpathy 回应 Bryan Johnson 关于 AI 精神病的讨论时指出，他观察到九型人格中的"5 号"类型（观察者/求知者）在发现 LLM 知识库功能后特别容易"one-shot 诱发 AI 精神病"——尤其当他们已经积累了大量预先存在的数据可以导入时。该推文获 307 赞、2.1 万浏览，引发关于 LLM 长期记忆/知识库对特定人格的心理影响的讨论。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/karpathy/status/2046017433199374610" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@karpathy</a></div>

## 10/12 Luma AI 全押注统一模型路线，与 Wonder Project 合建 AI × 实拍的好莱坞制片公司
Luma AI CEO gravicle 在与 A16Z 合伙人 Anjney Midha 的对谈中系统阐述 Luma 的产品哲学：下注"跨模态单一推理空间的巨型统一模型"而非"联邦多模型 + 协调 judge"。他指出多次失败的尝试后，他们已确认统一架构能跨所有模态扩展。Luma 同日宣布与 Wonder Project、AWS 和 Amazon MGM Studios 共同创立 Innovative Dreams——一家将生成式 AI 与传统电影工业流程深度融合的制片公司，首个作品《The Old Stories: Moses》由 Ben Kingsley 和 O-T Fagbenle 主演，本春在 Prime Video 上线。目标是把工作岗位带回洛杉矶、重塑好莱坞。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LumaLabsAI<span class="source-chip__links"><a href="https://x.com/LumaLabsAI/status/2045910300676018561" target="_blank" rel="noopener" aria-label="@LumaLabsAI 原文 1">1</a><a href="https://x.com/LumaLabsAI/status/2045925400371773870" target="_blank" rel="noopener" aria-label="@LumaLabsAI 原文 2">2</a><a href="https://x.com/LumaLabsAI/status/2045932944447983826" target="_blank" rel="noopener" aria-label="@LumaLabsAI 原文 3">3</a><a href="https://x.com/LumaLabsAI/status/2045895199499436163" target="_blank" rel="noopener" aria-label="@LumaLabsAI 原文 4">4</a></span></span></div>

## 11/12 Sakana AI 日语金融基准 EDINET-Bench 被 ICLR 2026 接收
David Ha（hardmaru）宣布 Sakana AI 团队去年发布的日语金融基准 EDINET-Bench 论文被 ICLR 2026 接收。该基准基于日本金融厅 EDINET 披露系统的 4.1 万份证券报告，覆盖十年跨度、约 600 个造假案例，考察 LLM 在会计欺诈检测、业绩预测和行业分类三类任务上的表现。关键发现是：最先进的 LLM 在这些任务上的表现仅与经典机器学习模型（逻辑回归）相当，ROC-AUC 仅约 0.7，显示现实金融任务对 LLM 仍是挑战。团队呼吁社区需要更多非英语、真实场景的评估数据集。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hardmaru/status/2046014125009261027" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a></div>

## 12/12 AI 视频模型新基准："Salaryman 吃拉面"是东方版"Will Smith 吃意面"
David Ha 分享一组"上班族吃拉面"的 AI 视频测试素材，称其为东方版的"Will Smith 吃意面"测试——后者曾是 AI 视频模型质量评估的经典 meme。推文获 181 赞、3.9 万浏览，反映出 AI 视频生成质量评估正在发展出文化多样性的 prompt 基准，不再局限于西方场景。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hardmaru/status/2045837372169027973" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a></div>

---

## Deep Dive 附录

### 《Your Agent Is Mine: Measuring Malicious Intermediary Attacks on the LLM Supply Chain》
由 Hanzhi Liu、Chaofan Shou、Hongbo Wen、Yanju Chen、Ryan Jingyang Fang 和 Yu Feng 撰写的论文，首次对 LLM 供应链中的中间人攻击做大规模测量。核心发现：当前主流 LLM API router 作为"应用层代理"拥有对每个 JSON 请求载荷的完全明文访问权，而模型提供方并未在客户端和上游模型之间强制加密完整性保护。实测结果：1 个付费路由器 + 8 个免费路由器主动注入恶意代码；17 个路由器访问了研究员植入的 AWS canary 凭证；1 个路由器直接清空了研究员私钥对应的以太坊地址；1 个泄露的 OpenAI key 跨多个会话生成了 1 亿 GPT-5.4 tokens；配置不当的诱饵系统累计被盗刷 20 亿 billed tokens、440 个会话中 99 个凭证被窃。研究提出 4 类攻击模型，并测试了 fail-closed 策略、响应筛查和透明日志等防御措施。结论：客户端防御仅能拦截约 89% 的注入攻击，真正的根本解需要 LLM 提供方对响应做加密签名。
[查看原文](https://arxiv.org/abs/2604.08407)

### EDINET-Bench：日语金融基准接收于 ICLR 2026
Sakana AI 发布的 EDINET-Bench 是基于日本金融厅（FSA）EDINET 电子披露系统的 Japanese 语金融基准，面向三类复杂金融任务：1) 会计欺诈检测（二分类，预测报告是否包含欺诈）；2) 业绩预测（二分类，预测同比业绩变化）；3) 行业分类（基于财报表的多分类）。数据集包含约 4.1 万份证券报告，跨度 10 年，包含从修正报告中识别出的约 600 个欺诈案例。关键发现：最先进的 LLM 在所有三类任务上的表现仅与经典逻辑回归等机器学习模型相当，欺诈检测 ROC-AUC 仅约 0.7。补充财报中的文本信息能提升 LLM 表现。数据集在 HuggingFace 公开，构建工具在 GitHub 开源。
[查看原文](https://sakana.ai/edinet-bench/)

### Innovative Dreams：Luma AI × Wonder Project × AWS 共建"实时混合电影制片"
Wonder Project（由 Jon Erwin 创立、聚焦信仰与价值观类娱乐的工作室）联合 Luma AI 推出 Innovative Dreams——一家将 performance capture、虚拟制片和生成式 AI 深度融合到整个电影制作流程的 production service 公司，背后有 AWS 和 Amazon MGM Studios 支持。其核心方法论"Realtime Hybrid Filmmaking"允许实时做剪辑决策，大幅缩短从创意构思到最终成品的周期。使命包括：在保留演员表演的前提下扩展创作可能性、将制片工作岗位带回洛杉矶、让进阶制片工具在全行业民主化。首个项目《The Old Stories: Moses》是三部分特别节目，由 Ben Kingsley 和 O-T Fagbenle 领衔，本春在 Prime Video 首映。
[查看原文](https://lumalabs.ai/news/luma-innovative-dreams)
