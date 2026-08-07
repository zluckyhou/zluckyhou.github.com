---
layout: daily
title: "AI Frontier Daily | 2026.04.10"
headline: "Anthropic Mythos Preview：Project Glasswing 揭幕，发现数千个零日漏洞"
date: 2026-04-10 09:07:00 +0800
permalink: /ai-daily/2026/04/10/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Anthropic 推出 Claude Mythos Preview，作为 Project Glasswing 网络安全计划的核心成果。Mythos 在关键基础设施中发现了数千个零日漏洞，其中许多存在 10-20 年以上（包括一个 27 年历史的 OpenBSD 缺陷）。首次尝试成功率达 83.1%，超过一半的权限提升利用尝试成功。该模型能够自主发现并链式利用 Linux 内核漏洞，实现完整机器接管。由于攻击性黑客风险，访问权限被限制在精选合作伙伴范围内，包括 AWS、Apple、Cisco、Google、Microsoft 和 NVIDIA 等。Anthropic 暂不公开发布。"
summary: "Anthropic 推出 Claude Mythos Preview，作为 Project Glasswing 网络安全计划的核心成果。Mythos 在关键基础设施中发现了数千个零日漏洞，其中许多存在 10-20 年以上（包括一个 27 年历史的 OpenBSD 缺陷）。首次尝试成功率达 83.1%，超过一半的权限提升利用尝试成功。该模型能够自主发现并链式利用 Linux 内核漏洞，实现完整机器接管。由于攻击性黑客风险，访问权限被限制在精选合作伙伴范围内，包括 AWS、Apple、Cisco、Google、Microsoft 和 NVIDIA 等。Anthropic 暂不公开发布。"
issue_count: 14
deep_dive_count: 3
reading_time: 13
cover: "https://images.openai.com/blob/00000000-0000-0000-0000-000000000000/chatgpt-codex.jpg"
signals: "GaryMarcus · yoavgo · ClementDelangue · OpenAI · sama · karpathy · emollick · GoogleDeepMind"
header-img: img/dark_yellow_400.png
---


## 1/14 Anthropic Mythos Preview：Project Glasswing 揭幕，发现数千个零日漏洞
Anthropic 推出 Claude Mythos Preview，作为 Project Glasswing 网络安全计划的核心成果。Mythos 在关键基础设施中发现了数千个零日漏洞，其中许多存在 10-20 年以上（包括一个 27 年历史的 OpenBSD 缺陷）。首次尝试成功率达 83.1%，超过一半的权限提升利用尝试成功。该模型能够自主发现并链式利用 Linux 内核漏洞，实现完整机器接管。由于攻击性黑客风险，访问权限被限制在精选合作伙伴范围内，包括 AWS、Apple、Cisco、Google、Microsoft 和 NVIDIA 等。Anthropic 暂不公开发布。
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2042285440217260358)

## 2/14 Mythos 遭强力质疑：Gary Marcus、yoavgo、ClementDelangue 集体反驳
Anthropic 的 Mythos 公告随即引发强烈争议。Gary Marcus 发文批评：测试时关闭了沙盒、廉价开源模型已能复现部分漏洞、没有证据证明 Mythos 有重大质的飞跃，"我们被耍了"。yoavgo 指出，Aisle Security 的复现实验将代码片段单独隔离后再测试，这使任务难度大幅降低，"隔离相关代码是验证而非搜索，差别天壤之别"。ClementDelangue 表示 HuggingFace 用 Mythos 展示的漏洞进行测试，开源模型同样能发现。这场争议成为当日 AI 社区最热议题。
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2042237250889760907)
- [查看 @yoavgo 原始推文](https://x.com/yoavgo/status/2042290789766594892)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2042237835487400422)

## 3/14 OpenAI 推出 $100/月 ChatGPT Pro 套餐，Codex 每周用户突破 300 万
Sam Altman 宣布推出 $100/月的新 ChatGPT Pro 套餐，专门为 Codex 重度用户设计，定位在现有 $20 Plus 和 $200 Pro 之间。新套餐提供 5 倍于 Plus 的 Codex 用量，限时活动期间（截止 5 月 31 日）升至 10 倍。Codex 现在每周活跃用户超过 300 万，过去三个月增长 5 倍，月增速达 70%。原 $200 Pro 套餐保留，继续扩展至 2 倍 Codex 用量促销。$20 Plus 套餐重新调整为更均衡的每日用量分配而非单日高强度使用。
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2042295688323875316)
- [查看 @sama 原始推文](https://x.com/sama/status/2042342572958630332)

## 4/14 Karpathy 8000 字长文：AI 认知鸿沟——为何不同人对 AI 能力判断差距如此之大
Karpathy 发布了一篇引发 89 万次浏览的深度分析，解释 AI 社区的认知分裂。他指出两类典型用户：一类用过时的免费模型，看笑话视频嘲讽 AI 出错；另一类每月花 $200 使用 Codex/Claude Code，在专业技术领域见证了"令人窒息的质变"。这两组人完全无法对话。原因在于：可验证奖励函数（代码单元测试通过/失败）使 RL 训练在编程和数学领域特别有效；同时 B2B 高价值场景驱动公司重点资源投入这些方向。"你可以让一个顶级 Codex 模型运行一个小时，去连贯地重构整个代码库或发现并利用系统漏洞。"
- [查看 @karpathy 原始推文](https://x.com/karpathy/status/2042334451611693415)
- [查看 @karpathy 原始推文](https://x.com/karpathy/status/2042341482531864741)

## 5/14 emollick：AI 格局全景——美国三大厂领跑，中国模型落后 7-9 个月，全线放弃开源权重
Wharton 教授 Ethan Mollick 梳理了当前 AI 格局。美国封闭源代码模型持续领先，Google、OpenAI、Anthropic 明显超出其他竞争者，且可能出现递归自我改进（RSI）迹象。xAI 暂时退出前沿位置。Meta 以非前沿封闭模型重新入场。中国方面，Alibaba（Qwen）、Moonshot（Kimi）、MiniMax、Xiaomi（MiMo）、DeepSeek 和 Zhipu（GLM）仍在角逐，但最佳中国模型仍落后美国封闭源 7-9 个月以上。所有美国前沿实验室均已放弃开放权重，偶尔发布的开放模型（如 Gemma 4）规模较小、无法与封闭版本竞争。中国开源模型成为全球唯一的开放权重希望。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2042088011748290750)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2042093156175393156)

## 6/14 Gemma 4 首周下载量突破 1000 万，Gemma 系列累计 5 亿次下载
Google DeepMind 宣布 Gemma 4 在发布一周内下载量超过 1000 万次，Gemma 系列模型累计下载超过 5 亿次。Gemma 4 性能远超参数量 10 倍的模型，同时无需大规模算力。Demis Hassabis 转发了 Sundar Pichai 的庆祝推文。Together AI 同步上线了 Gemma 4 31B，提供多模态推理、工具调用和 Agent 工作流支持，上下文长度 256K，SLA 99.9%，支持 140+ 种语言。
- [查看 @GoogleDeepMind 原始推文](https://x.com/GoogleDeepMind/status/2042283481640615944)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2042264479069564958)

## 7/14 Perplexity Computer 接入 Plaid，打通用户真实银行账户
Perplexity 宣布 Computer 功能通过 Plaid 集成连接用户的真实金融账户，包括银行账户、信用卡和贷款。用户可用自然语言追踪支出、构建自定义预算工具、可视化净资产，并将投资组合与财务数据并排查看。该功能使用 Plaid 的 Financial Insights API 拉取持仓、交易记录、余额和证券数据。Pro 和 Max 订阅者可享计算机任务功能，所有用户均可链接账户并查询基础财务信息。该推文获得 383 万次浏览，是当日互动最高的 AI 产品公告之一。
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2042256932397019368)
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2042256944426364931)

## 8/14 GLM 5.1 登顶开源排行榜，可媲美 Opus 4.6 和 GPT 5.4
bindureddy 宣布 Zhipu AI（智谱）的 GLM 5.1 成为新的开源模型王者，在编程和 Agent 基准测试中性能媲美 Opus 4.6 和 GPT 5.4。ClementDelangue 同步转发了相关测试显示一个开源权重模型首次登顶网络安全排行榜。bindureddy 同时指出，开源模型在 OpenRouter 上的使用量已超过所有封闭源模型，若封闭源实验室继续拖延发布，开源将不可避免地赶上。"GLM 5.1 是编码 Agent 和 OpenClaw 的绝佳选项。"
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2042093196948467929)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2042205239026282992)

## 9/14 Yann LeCun 澄清：是主动离开 Meta，因过度侧重 LLM；从未参与 Llama 开发
Yann LeCun 发多条推文澄清自己与 Meta 的关系。他明确表示："我没有被解雇。我离开了。很大程度上是因为对 LLM 的强调太多。"同时澄清自己从未参与 Llama 的技术研发，仅在 Llama-2 阶段推动了开源发布决策。"Llama-2 之后，项目由 GenAI 组织负责，我在 FAIR（专注长期研究的不同组织），与 Llama 团队没有技术往来。"这些澄清引发 4-7 万次浏览，他与 fchollet 之间关于 Meta 影响力的隔空争论同样引人关注。
- [查看 @ylecun 原始推文](https://x.com/ylecun/status/2042347532043395226)
- [查看 @ylecun 原始推文](https://x.com/ylecun/status/2042347305961918514)

## 10/14 Seedance 2.0 正式登陆 Runway，全美国用户开放
Runway 宣布 Seedance 2.0 视频生成模型正式上线所有付费套餐，包括美国地区。用户只需提供一张图像、一段视频、一个想法或一段音频，即可生成视频内容。新用户可用优惠码 SEEDANCE 享受 3 个月 50% 折扣。同日，Runway AI Festival 宣布将于 6 月在纽约和洛杉矶举办，覆盖电影、设计、新媒体、时尚、广告和游戏领域，截止 4 月 20 日接受投稿。同期 Higgsfield 也宣布 Seedance 2.0 全球上线，内容创作者测算显示单人每月可完成 10-20 个以前需要 4 天、花费 8000 美元的项目。
- [查看 @runwayml 原始推文](https://x.com/runwayml/status/2042336701557703020)
- [查看 @runwayml 原始推文](https://x.com/runwayml/status/2042232782508671211)

## 11/14 Cursor 云 Agent 新功能：自动将截图和演示附加到 PR
Cursor 宣布一项重要更新：云端 Agent 现在可以将工作演示和截图附加到它打开的 Pull Request 上，团队成员可直接在 GitHub 中审阅 AI Agent 生成的工件。该功能使代码审查过程更加透明，减少了人工验证 AI 工作成果的摩擦。该推文获得 82,305 次浏览，展现了开发者工具领域对 AI Agent 可审计性的强烈关注。
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2042287192895267212)

## 12/14 Meta TRIBE v2 大脑基础模型：AI 预测脑部反应比真实脑扫描更准确
行业媒体报道 Meta 研究团队发布 TRIBE v2，一个基于 720 人、1000+ 小时脑成像数据训练的基础模型。输入视频、音频或文本，该模型可预测哪些大脑区域被激活、激活强度及顺序，且预测精度超过真实脑扫描（真实扫描受心跳、呼吸和运动干扰）。研究者在软件内部完整复现了数十年经典神经科学实验，无需扫描仪和人体受试者。加之 Meta 的 Ray-Ban 智能眼镜、神经信号腕带，有评论指出 Meta 正在构建从刺激到神经反应的完整注意力图谱。
- [查看 @rowancheung 原始推文](https://x.com/rowancheung/status/2042260621274861756)

## 13/14 Tesla FSD 洛杉矶城区自动驾驶演示引发 2200 万次浏览
Elon Musk 分享了 Tesla 在洛杉矶城区独立行驶的视频，附文"Tesla driving itself around LA"，获得超过 2254 万次浏览，10 万次点赞。Tesla 官方账号同步发文"No other car can do this"。与此同时，Musk 宣布正专注于完成 Colossus 2 超算中心建设，随后计划修建水循环利用设施，并多次推广 X Chat 的端到端加密通讯功能，暗示其不信任 WhatsApp。
- [查看 @elonmusk 原始推文](https://x.com/elonmusk/status/2042348111809691858)

## 14/14 Perplexity 发起"十亿美元构建"大赛：8 周用 AI Computer 建造改变行业的应用
Perplexity 宣布"Billion Dollar Build"竞赛，参赛团队使用 Perplexity Computer 在 8 周内构建一个目标市值超十亿美元的应用。此举与 Perplexity 的 Computer（AI Agent 电脑操控）功能扩张策略高度配合，继刚刚推出的 Plaid 金融集成后，进一步将 Computer 定位为综合 AI 助理平台。业界观察人士指出，这与 Anthropic 的 Claude 代理生态扩张、OpenAI Codex 的用量爆发，共同构成当前 AI Agent 赛道的核心竞争主线。
- [查看 @LinusEkenstam 原始推文](https://x.com/LinusEkenstam/status/2042126863544336481)

---

## Deep Dive 附录

### Anthropic Project Glasswing / Claude Mythos Preview：全面解读
Anthropic 于 4 月 8 日发布了 245 页的 Mythos 技术报告，将其定性为"历史上最强大的网络安全 AI 模型"。核心成果：在关键基础设施（包括 OpenBSD、FreeBSD、Linux 内核）中发现数千个未公开零日漏洞，存在时间从 10 年到 27 年不等。在 Anthropic 定义的基准测试中，Mythos 首次利用漏洞成功率 83.1%；权限提升链式攻击成功率超过 50%。访问权限仅开放给精选合作伙伴（AWS、Apple、Broadcom、Cisco、CrowdStrike、Google、JPMorgan、Linux Foundation、Microsoft、NVIDIA、Palo Alto Networks），普通开发者无法访问。争议焦点：测试环境关闭了容器沙盒；Aisle Security 团队测试显示 8 种廉价开源模型在相同"隔离函数"测试条件下均能复现核心漏洞；Gary Marcus、yoavgo 等认为"隔离代码后再测试"大幅降低难度，与真实攻击场景差距巨大。该报告同时标志着 Anthropic 的战略转向：从通用 AI 助手竞争，向 B2B 安全领域高价值垂直市场扩展。
[查看原文](https://www.anthropic.com/research/mythos)

### OpenAI Codex 增长报告：从产品到基础设施
OpenAI 在宣布 $100 Pro 套餐时披露的数据揭示了 Codex 惊人的增长轨迹：每周活跃用户 300 万+，三个月增长 5 倍，月增速 70%。这一数字意味着 Codex 已成为 ChatGPT 生态内增长最快的独立产品线。新的定价分层（$20/$100/$200）显示 OpenAI 正在系统化 Codex 的商业化路径，把它从"高级功能"升级为"核心业务产品"。Karpathy 的同期分析印证了这一趋势：专业开发者正在把 Codex 当成全天候工程师助手，而非偶尔使用的工具。
[查看原文](https://openai.com/chatgpt/pro)

### Perplexity Computer + Plaid：AI 金融 Agent 的基础设施搭建
该集成使用 Plaid 的 Financial Insights API，覆盖支票账户、储蓄账户、信用卡、贷款和投资/经纪账户。用户可提问"我上个月在餐饮上花了多少"或"帮我分析我的净资产构成"，系统将基于真实账户数据而非估算给出回答。Perplexity Computer 同时整合了 40+ 实时金融工具，数据源包括 SEC 备案文件、FactSet、Coinbase、LSEG、Quartr 和 Polymarket 预测市场。这是继 Anthropic 的 Computer Use、OpenAI Operator 之后，又一个将 AI Agent 与真实世界数据深度融合的标志性案例，指向 AI 从"信息检索"到"个人金融助理"的跨越。
[查看原文](https://plaid.com/blog/powering-intellligent-finance-with-perplexity/)
