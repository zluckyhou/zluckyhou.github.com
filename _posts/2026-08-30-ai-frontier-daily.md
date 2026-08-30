---
layout: daily
title: "AI Frontier Daily | 2026.08.30"
headline: "Gemini Co-Scientist 从提出假设推进到实验执行与整篇论文生成"
date: 2026-08-30 09:07:00 +0800
permalink: /ai-daily/2026/08/30/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Google 团队把基于 Gemini 的 Co-Scientist 扩展为“构思—实验—论文”闭环：它为 CVD 设备设计材料生长路线，按实验室约束单次生长出 MoS2、MoSe2 与 WS2 单层；从稀疏图像预测工程化大肠杆菌群体形态；还自主发现 Agent_H 推理架构。论文称后者在 HealthBench 两项难集上超过六个前沿模型；30 名专家完成 450 次双盲评审后，核验模块显著减少编造与抄袭。MXene 原子结构、跨实验室复现和有害计划零风险仍未解决。"
summary: "Google 团队把基于 Gemini 的 Co-Scientist 扩展为“构思—实验—论文”闭环：它为 CVD 设备设计材料生长路线，按实验室约束单次生长出 MoS2、MoSe2 与 WS2 单层；从稀疏图像预测工程化大肠杆菌群体形态；还自主发现 Agent_H 推理架构。论文称后者在 HealthBench 两项难集上超过六个前沿模型；30 名专家完成 450 次双盲评审后，核验模块显著减少编造与抄袭。MXene 原子结构、跨实验室复现和有害计划零风险仍未解决。"
issue_count: 11
deep_dive_count: 3
reading_time: 10
cover: "https://pollen-robotics.com/assets/blog/cover-microduck.webp"
signals: "demishassabis · emollick · ClementDelangue · togethercompute · Kimi_Moonshot · cursor_ai · hwchase17 · hardmaru"
header-img: img/dark_yellow_400.png
---


## 1/11 Gemini Co-Scientist 从提出假设推进到实验执行与整篇论文生成
Google 团队把基于 Gemini 的 Co-Scientist 扩展为“构思—实验—论文”闭环：它为 CVD 设备设计材料生长路线，按实验室约束单次生长出 MoS2、MoSe2 与 WS2 单层；从稀疏图像预测工程化大肠杆菌群体形态；还自主发现 Agent_H 推理架构。论文称后者在 HealthBench 两项难集上超过六个前沿模型；30 名专家完成 450 次双盲评审后，核验模块显著减少编造与抄袭。MXene 原子结构、跨实验室复现和有害计划零风险仍未解决。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/demishassabis/status/2093790764203409875" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@demishassabis</a><a class="source-chip" href="https://x.com/emollick/status/2093747487433478296" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a></div>

## 2/11 Microduck 首日订单超 250 万美元，把 sim-to-real 强化学习带到 399 美元机器人
Hugging Face 旗下 Pollen Robotics 的 Microduck 高 25 厘米、重约 800 克，配 15 个电机、相机、LiDAR、双 IMU 与可抓取物体的活动喙，预售价 399 美元。SDK、MuJoCo 仿真、强化学习和 sim-to-real 工具链全部开放，内置行走、抓取、轮滑与跌倒起身等策略。Clement Delangue 转发的信息称首日订单金额超过 250 万美元；社区随后展示后空翻、自定义恢复、寻物和 1.6 米/秒步态，显示开放硬件开始形成可分享的“动作模型”生态。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue<span class="source-chip__links"><a href="https://x.com/ClementDelangue/status/2093590509449015439" target="_blank" rel="noopener" aria-label="@ClementDelangue 原文 1">1</a><a href="https://x.com/ClementDelangue/status/2093875712042082335" target="_blank" rel="noopener" aria-label="@ClementDelangue 原文 2">2</a><a href="https://x.com/ClementDelangue/status/2093692819454021716" target="_blank" rel="noopener" aria-label="@ClementDelangue 原文 3">3</a></span></span></div>

## 3/11 GLM-5.3 Flash 便宜 17 倍，四次尝试后与完整模型仅差 2.6 个点
Together AI 在 113 个 DeepSWE 任务上完成 900 次 rollout：GLM-5.3 与 Flash 的 pass@1 分别为 69.0% 和 63.4%，pass@4 收敛到 87.6% 和 85.0%；单次平均成本则为 3.99 美元与 0.24 美元。先跑 Flash、测试失败再升级完整模型的级联方案达到 80.9%、每任务 1.70 美元。不过 Flash 打破既有通过测试的比例为 6.9%，高于完整模型的 4.4%。结果支持“便宜模型先跑+验证器路由”，但仍是厂商在单一基准上的运行。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute<span class="source-chip__links"><a href="https://x.com/togethercompute/status/2093904558405586996" target="_blank" rel="noopener" aria-label="@togethercompute 原文 1">1</a><a href="https://x.com/togethercompute/status/2093549698615234719" target="_blank" rel="noopener" aria-label="@togethercompute 原文 2">2</a></span></span></div>

## 4/11 Kimi K3 进入 Cursor，由三家美国推理伙伴托管并支持零数据保留
Moonshot 转发 Cursor 公告称 Kimi K3 已进入 Cursor，推理由 Fireworks、Together 和 Baseten 的美国基础设施提供，并支持 Zero Data Retention。Cursor 称其在内部 CursorBench 上接近前沿水平；该基准来自真实编码会话，覆盖正确性、代码质量、效率与交互行为，并会定期刷新。公告没有在推文中公开 K3 的具体分数、延迟或价格，因此“接近前沿”仍是平台内部评测结论，实际表现需按仓库、语言与长任务独立验证。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/Kimi_Moonshot/status/2093851949892518010" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Kimi_Moonshot</a><a class="source-chip" href="https://x.com/cursor_ai/status/2093537201296683300" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai</a></div>

## 5/11 OpenAI–Cursor 争议继续推动 Agent 产品拆分模型与执行框架
在 Cursor 失去 OpenAI 前沿模型直连的讨论后，LangChain 联合创始人 Harrison Chase 把“模型与 harness 分离”列为构建 Agent 的首要原则之一，David Ha 则强调模型韧性：底层模型离线时，产品应通过多模型路由继续工作。两条观点都把竞争焦点从单一模型能力转向独立工具层、状态管理、评测、可观测性和降级路径。它们是工程主张而非新产品发布，但直接反映供应合同变化如何转化为 Agent 架构要求。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hwchase17/status/2093823406873756060" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17</a><a class="source-chip" href="https://x.com/hardmaru/status/2093645701192544514" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a></div>

## 6/11 AI 视频从单模型演示转向多模型制作与同提示横评
一段由 Runway 多种模型组合制作的视频在 X 抓取时获得超过 430 万次观看，发布者随后明确它不是单一模型直出；Pika 同时用相同输入并排展示 Gemini Omni 1.1 Flash、Seedance 2.5 与 Wan 3.0 的商品开箱结果。两组内容说明视频工作流正把生成、编辑、镜头连续性和风格选择拆给不同模型，并通过同提示横评选片。社交观看量与单个样例不能替代系统画质、成本和失败率评测。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LinusEkenstam<span class="source-chip__links"><a href="https://x.com/LinusEkenstam/status/2093718358503969254" target="_blank" rel="noopener" aria-label="@LinusEkenstam 原文 1">1</a><a href="https://x.com/LinusEkenstam/status/2093679060354261438" target="_blank" rel="noopener" aria-label="@LinusEkenstam 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/pika_labs/status/2093538706036834614" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@pika_labs</a></div>

## 7/11 Vibe coding 的目标从“大众软件”转向只服务一个人的长尾工具
Linus Ekenstam 提出，vibe coding 的核心并非为大规模受众复制传统 SaaS，而是让用户为自己或极小群体构建有价值的软件。当生成成本持续下降，过去因市场太小而不会立项的日程、数据整理、个人知识与小型自动化工具也可能被生产出来。这个判断描述的是供给侧变化，尚未回答维护、权限、安全、数据迁移和长期可用性由谁承担；个人软件是否形成稳定生态仍取决于这些非生成成本。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/LinusEkenstam/status/2094058295275246012" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LinusEkenstam</a></div>

## 8/11 AI 让日本式系统集成重新成为软件交付的稀缺环节
David Ha 认为，硅谷过去把日本 System Integration 文化视为难扩展的顾问模式，但在代码生成越来越充裕后，稀缺工作正从“写出系统”转向把模型、数据、身份、旧系统和业务流程整合为可运行服务。这个观点把 Agent 时代的软件公司描述为“AI 增强的 SIer”：自动化代码生产，同时保留需求澄清、接口治理、部署与责任归属。它是行业判断而非量化研究，但与当天关于模型—harness 分离的讨论形成同一方向。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hardmaru/status/2094036158766571596" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a></div>

## 9/11 “通用智能”争论转向面对新问题时能否生成并验证新推理
François Chollet 把通用智能定义为：无论面对什么新问题，都能现场理解并适应，而不是预先掌握所有任务。Yoav Goldberg 进一步追问，模型是在上下文中选择并复述见过的推理模式，还是能产生并验证真正新颖的推理；他也承认“新颖推理”的边界难以定义。两人的讨论把评测重点从知识覆盖率转向分布外适应、反例搜索与可验证性，但当前推文没有给出可操作的新基准。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/fchollet/status/2093873781374923090" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet</a><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@yoavgo<span class="source-chip__links"><a href="https://x.com/yoavgo/status/2093929327519789387" target="_blank" rel="noopener" aria-label="@yoavgo 原文 1">1</a><a href="https://x.com/yoavgo/status/2093937174987014563" target="_blank" rel="noopener" aria-label="@yoavgo 原文 2">2</a></span></span></div>

## 10/11 面向用户的低价模型选择开始被视为内容质量与时间成本问题
Ethan Mollick 认为，若企业为节省几美分而用较弱模型生成面向人的错误、冗长内容，用户可能把它理解为对阅读时间的不尊重。这个观点把模型路由从纯 API 成本问题扩展到接收者成本：便宜输出若需要更多核查、重写和沟通，系统总成本可能反而上升。当天 GLM-5.3/Flash 数据也显示，低价模型适合有自动测试与重试的管线；无法验证的人类沟通场景则更依赖首轮质量。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/emollick/status/2093823173619769806" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a></div>

## 11/11 硬科幻作者对 LLM 的反感集中在能力判断、版权与生存风险三类理由
Ethan Mollick 浏览多位自己喜爱的硬科幻作者网页后称，多数作者对 LLM 持负面态度：最常见理由是把模型视作无用的“随机鹦鹉”，其次是知识产权问题，少数关注存在性风险。这个观察不是系统抽样，不能代表整个作家群体，但它展示了技术圈与创作者社群的分歧并非只有训练数据版权，还包括对模型是否具有实际能力的根本判断；生成内容质量、署名与补偿机制仍是争议交点。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/emollick/status/2093819069552021740" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a></div>

---

## Deep Dive 附录

### Gemini Co-Scientist：执行落地提升可信度，但没有取消人类与物理验证
系统以进化式多 Agent 流程完成假设生成、代码实验和论文写作，并把日志核验、引用交叉检查与安全过滤嵌入闭环。材料实验仍由人类操作与优化，生物任务由专家反复定义问题，只有计算机科学部分实现较完整自治；这说明“自治程度”取决于实验表面，而不是单一模型标签。论文中严重编造从无约束基线的 74% 降至 2%，高严重度衍生内容从 60% 降至 16%，但跨实验室复现尚未完成，幻觉与危险计划通过率也未降为零。结果支持执行日志和外部实验反馈是 AI 科研可信度的关键边界。
[查看原文](https://arxiv.org/abs/2608.26701)

### Microduck：把动作策略变成可下载、训练与分享的开放对象
Microduck 的差异不只在 399 美元价格，而在开放的 SDK、MuJoCo 数字孪生、强化学习训练与 sim-to-real 部署链。用户可修改内置的七类动作策略，在仿真中训练后部署到同一实体硬件，并把行为、环境和训练配方共享给社区。25 厘米、约 800 克的体型降低失败试验的安全与设备成本，自恢复又减少人工复位。首日订单与集中出现的自定义步态、后空翻和恢复演示说明开发者需求存在，但预售金额不等于长期活跃开发者，真正的生态指标将是可复现策略数量、硬件交付质量和社区维护速度。
[查看原文](https://pollen-robotics.com/microduck/blog/introducing-microduck/)

### GLM-5.3 路由：蒸馏主要损失一致性，测试与重试可把成本优势兑现
在 Together 的 900 次 DeepSWE rollout 中，Flash 单次成功率低 5.6 个点，但四次尝试后的差距只剩 2.6 个点；完整模型至少解决过的 99 个任务里，Flash 仍覆盖 93 个。于是“先 Flash、验证失败再升级”的级联达到 80.9%、每任务 1.70 美元，相比完整模型单次的 69.0%、3.99 美元更高也更便宜。代价是 Flash 更容易破坏原本通过的测试，比例为 6.9% 对 4.4%。因此路由收益依赖可靠验证器：有测试的编码任务可以用重试买回一致性，没有客观验收标准的任务不能照搬这一结论。
[查看原文](https://www.together.ai/blog/glm-5-3-vs-glm-5-3-flash-on-deepswe-cost-coding-and-routing)
