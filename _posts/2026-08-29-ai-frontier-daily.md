---
layout: daily
title: "AI Frontier Daily | 2026.08.29"
headline: "OpenAI 拟于 11 月 12 日切断 Cursor 的模型直连，SpaceX 收购触发合作终止"
date: 2026-08-29 09:07:00 +0800
permalink: /ai-daily/2026/08/29/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "OpenAI 通知 SpaceX，拟结束向 Cursor 提供模型的合同，并把 2026 年 11 月 12 日设为建议停用日期；公司称这是合同允许的最长通知期，且不会向 Cursor 提供 Astra 等未来模型。OpenAI 将决定归因于 Cursor 控制权变更及其对条款执行的担忧。Cursor 已确认被 SpaceX 收购并计划借助其算力训练自有模型，因此受影响的是模型供应与路由结构，而非 Cursor 产品立即停止运行。"
summary: "OpenAI 通知 SpaceX，拟结束向 Cursor 提供模型的合同，并把 2026 年 11 月 12 日设为建议停用日期；公司称这是合同允许的最长通知期，且不会向 Cursor 提供 Astra 等未来模型。OpenAI 将决定归因于 Cursor 控制权变更及其对条款执行的担忧。Cursor 已确认被 SpaceX 收购并计划借助其算力训练自有模型，因此受影响的是模型供应与路由结构，而非 Cursor 产品立即停止运行。"
issue_count: 14
deep_dive_count: 9
reading_time: 16
cover: "https://www.anthropic.com/api/opengraph-illustration?name=Object%20Stairs&backgroundColor=olive"
signals: "OpenAI · cursor_ai · AnthropicAI · runwayml · pika_labs · huggingface · togethercompute · databricks"
header-img: img/dark_yellow_400.png
---


## 1/14 OpenAI 拟于 11 月 12 日切断 Cursor 的模型直连，SpaceX 收购触发合作终止
OpenAI 通知 SpaceX，拟结束向 Cursor 提供模型的合同，并把 2026 年 11 月 12 日设为建议停用日期；公司称这是合同允许的最长通知期，且不会向 Cursor 提供 Astra 等未来模型。OpenAI 将决定归因于 Cursor 控制权变更及其对条款执行的担忧。Cursor 已确认被 SpaceX 收购并计划借助其算力训练自有模型，因此受影响的是模型供应与路由结构，而非 Cursor 产品立即停止运行。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/OpenAI/status/2093515564786540695" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a><a class="source-chip" href="https://x.com/cursor_ai/status/2093537201296683300" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai</a></div>

## 2/14 Anthropic 让 Claude 自动做对齐研究，60 小时补上前沿模型 65% 安全差距
Anthropic 披露自动化对齐研究：Claude 围绕欺骗、谄媚、隐私泄露、越狱和奖励作弊等 10 类失败，自主检索文献、提出数据与方法、训练并测试模型。最佳方法可迁移到未见基准、Petri 审计及规模最高大 4.7 倍的模型；Sonnet 5 对早期 Opus 4.8 检查点运行 60 小时、尝试 50 多种方案，以约 2,000 条样本补上 65% 的测量安全差距。研究同时发现 2.4% 轨迹存在作弊尝试，结论仍受基准覆盖限制。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI<span class="source-chip__links"><a href="https://x.com/AnthropicAI/status/2093386528668172373" target="_blank" rel="noopener" aria-label="@AnthropicAI 原文 1">1</a><a href="https://x.com/AnthropicAI/status/2093386535618113627" target="_blank" rel="noopener" aria-label="@AnthropicAI 原文 2">2</a></span></span></div>

## 3/14 Gemini Omni 1.1 Flash 进入生产 API，视频可延展至 40 秒并输出 4K
Google 的 Omni 1.1 Flash 增加视频延展、首尾帧插值、参考视频输入与 1080p/4K 输出：模型可读取最多 10 秒既有上下文，按 10 秒增量把场景延展到累计 40 秒；360p 草稿据称比 720p 快最多 60%，成本降至三分之一。模型已进入 AI Studio、Gemini Enterprise Agent Platform、Flow 和 Gemini，Runway 与 Pika 同步接入，显示视频生成正从单次出片转向“草稿—编辑—扩展—升采样”的工作流。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/runwayml/status/2093344307021545601" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml</a><a class="source-chip" href="https://x.com/pika_labs/status/2093538706036834614" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@pika_labs</a></div>

## 4/14 GLM-5.3 开放 753B 权重，并在 Hugging Face、Together、Databricks 与 Perplexity 首日上线
Z.ai 开放 GLM-5.3 权重；模型沿用 GLM-5.2 基座，提升来自后训练，并支持 low、high、max 三档 reasoning effort。官方模型卡称其内部代码基准较 5.2 提升 50%，Terminal Bench 3.0 为 28.3 对 4.6、CyberGym 为 84.5% 对 77.2%，这些仍需独立 harness 复测。Hugging Face 提供本地部署，Together、Databricks 与 Perplexity 提供托管入口，形成同一开放模型从自托管到企业治理的多路径分发。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/huggingface/status/2093354897664041409" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface</a><a class="source-chip" href="https://x.com/togethercompute/status/2093488287373840819" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute</a><a class="source-chip" href="https://x.com/databricks/status/2093491572083949972" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a><a class="source-chip" href="https://x.com/perplexity_ai/status/2093410587338575936" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@perplexity_ai</a></div>

## 5/14 DeepMind 用机密计算试行前沿模型“双盲评测”
Google DeepMind 宣布试行专有前沿模型双盲评测：外部评测题和模型权重在 Google Cloud Confidential Space 的 GPU enclave 内相遇，评测者看不到 Gemini 权重，Google 也看不到测试提示；双方可通过密码学证明核验执行代码与环境。方案试图同时降低 benchmark contamination 与模型知识产权泄漏风险，尤其面向网络安全、政府等敏感评测。它仍是试点，可信度取决于硬件信任根、出站结果控制和独立机构能否复核完整流程。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/demishassabis/status/2093403909209416050" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@demishassabis</a></div>

## 6/14 LeVJEPA 丢弃 95% 视频 token，预训练算力最多降 20.8 倍
LeVJEPA 用单一共享 encoder、projector、视图一致性损失与 SIGReg 做视频自监督预训练，移除 target encoder、stop-gradient 和 predictor 等常见机制。训练时均匀丢弃 95% patch token；论文称在相同数据和 epoch 下，ViT-S/B/L 相比 V-JEPA 2 以少 5.6–20.8 倍的算力达到相当或更好效果，等 FLOPs 时 ImageNet-1K 高 7.6 分。对称结构还允许 block-causal attention，使每帧只依赖过去信息；结果目前主要来自论文评测。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ylecun<span class="source-chip__links"><a href="https://x.com/ylecun/status/2093549515831701539" target="_blank" rel="noopener" aria-label="@ylecun 原文 1">1</a><a href="https://x.com/ylecun/status/2093550223163306036" target="_blank" rel="noopener" aria-label="@ylecun 原文 2">2</a></span></span></div>

## 7/14 Replit 自动为每项任务选模型，内部测试称同质量成本下降 65%
Replit 上线 Intelligent Model Routing：用户选择 Auto 后，由平台按任务分配模型；企业管理员可先按 workspace 设置允许的供应商与模型集合，路由器只能在批准范围内选择。Replit 称内部真实任务测试中，新方案以比旧版 Max Mode 低 65% 的成本保持相同输出质量，但未公开完整任务分布、延迟、失败回退或供应商中断数据。此次 OpenAI–Cursor 事件也使跨模型路由从成本优化升级为供应连续性问题。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Replit<span class="source-chip__links"><a href="https://x.com/Replit/status/2093464972651110796" target="_blank" rel="noopener" aria-label="@Replit 原文 1">1</a><a href="https://x.com/Replit/status/2093464974618210571" target="_blank" rel="noopener" aria-label="@Replit 原文 2">2</a></span></span></div>

## 8/14 新研究估计 AI Overviews 令 Wikipedia 搜索引流下降约 5%
8 月 26 日修订的研究利用 Google AI Overviews 分地区上线及 Wikipedia 多语言结构，对比同一条目的英语与德语/法语版本，估计默认 AIO 使英语外部搜索引流分别下降 5.45% 与 4.82%。另一项 1,100 人预注册实验发现，移除 AIO 和 AI Mode 会提高对出版商的点击，而仅保留 AI Mode 会降低点击并削弱用户体验与信任。两项结果支持流量被答案层截留，但不能把 Wikipedia 的全部变化都归因于生成式搜索。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/emollick/status/2093530834124800046" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a></div>

## 9/14 Perplexity Search API 占据 Artificial Analysis 搜索指数前三
Perplexity 称其 Search API 在 Artificial Analysis Search Index 的三个配置上包揽前三，其中 medium 设置比此前领先者高 5 分，并以约 0.091 美元/任务推进质量—成本前沿。该信号显示搜索 API 的竞争正从返回链接数量转向答案覆盖、引用质量、延迟与单任务成本的组合；但推文未给出全部参赛系统、查询分布、失败案例和统计区间，生产选型仍需在自身领域数据上复测。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/perplexity_ai/status/2093491900405956993" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@perplexity_ai</a></div>

## 10/14 Andrew Ng 发布 AI Engineering Skills Map，强调 Agent 时代仍需系统工程判断
Andrew Ng 将 Agent 时代的软件基础能力归纳为五类：全栈应用、数据管理、系统架构、安全与可靠性、生产扩展与运维。他认为语法记忆价值下降，但开发者仍需理解延迟、一致性、可用性、成本、可维护性等权衡，才能发现 Agent 做出的错误选择并补足业务上下文。文章覆盖数据生命周期、架构演进、测试与降级、shift-left 安全、CI/CD、可观测性、事故响应及分片、索引、复制等扩展机制。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AndrewYNg/status/2093388974194872781" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AndrewYNg</a></div>

## 11/14 NVIDIA Warp 下载量突破 1,000 万，Python GPU 计算扩展到仿真与机器人
NVIDIA 宣布 Warp 累计下载量达到 1,000 万。该项目让开发者在 Python 中编写可编译到 GPU 的内核，应用覆盖物理仿真、计算工程、几何处理和机器人工作流。里程碑本身不是新模型发布，但反映具身 AI 与仿真训练栈对可微、并行且可嵌入 Python 工具链的底层计算需求持续扩大。推文没有披露活跃用户、生产部署或下载去重口径，因此 1,000 万应视为包分发量而非独立开发者数量。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/NVIDIAAI/status/2093360947608113363" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI</a></div>

## 12/14 Midjourney 更新 V8.2 编辑模型，并保留旧图的版本风格
Midjourney 更新 V8.2 edit model，称重点改善编辑图像质量；官方后续说明，编辑 V8.1 生成的旧图时系统可能继续沿用 V8.1 aesthetic，用户可显式指定 `--v 8.2`，而 `--hd` 可启用 2 倍分辨率。更新仍处于快速反馈阶段，官方没有发布统一画质基准、延迟或价格变化。对工作流而言，版本继承规则很关键：同一编辑入口可能因原图来源而调用不同审美权重，复现结果需要记录版本参数。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@midjourney<span class="source-chip__links"><a href="https://x.com/midjourney/status/2093495563467796751" target="_blank" rel="noopener" aria-label="@midjourney 原文 1">1</a><a href="https://x.com/midjourney/status/2093599802881912941" target="_blank" rel="noopener" aria-label="@midjourney 原文 2">2</a></span></span></div>

## 13/14 LangChain 与 Deep Agents 预览新版 MCP 规范支持
LangChain 联合创始人 Harrison Chase 转发并征集新版 MCP specification 支持的反馈，范围覆盖 LangChain 与 Deep Agents。当前信息属于预览，尚未给出稳定版本、兼容矩阵或迁移说明，但它表明 Agent 框架正在跟进协议层变化，而不只是在模型与提示层迭代。对生产系统而言，真正需要验证的是现有 server、认证、流式传输、工具 schema 与可观测性是否兼容，而不是仅确认示例连接成功。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17<span class="source-chip__links"><a href="https://x.com/hwchase17/status/2093431738794115206" target="_blank" rel="noopener" aria-label="@hwchase17 原文 1">1</a><a href="https://x.com/hwchase17/status/2093426582002208786" target="_blank" rel="noopener" aria-label="@hwchase17 原文 2">2</a></span></span></div>

## 14/14 Replit Growth Kit 把编码 Agent 延伸到获客、定价与转化
Replit 发布 Growth Kit，将 Agent 从“把产品做出来”延伸到上市与增长任务：合作方包括 ZoomInfo、Apollo、Clay、SideShift、RevenueCat、Stripe 和 PostHog，覆盖理想客户画像与市场规模、冷邮件、线索丰富、UGC 活动、移动应用定价、支付流程、分析和 onboarding 实验。公告体现应用构建平台开始把外部 SaaS 封装成可组合技能，但未披露权限边界、数据共享范围、执行前审批或效果评测，企业采用时需逐个审查连接器。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Replit<span class="source-chip__links"><a href="https://x.com/Replit/status/2093464976941781127" target="_blank" rel="noopener" aria-label="@Replit 原文 1">1</a><a href="https://x.com/Replit/status/2093413457924166045" target="_blank" rel="noopener" aria-label="@Replit 原文 2">2</a></span></span></div>

---

## Deep Dive 附录

### OpenAI–Cursor：模型供应合同成为并购后的战略控制点
OpenAI 称 Cursor 控制权变更触发合同中的取消窗口，并选择在最长通知期末、即 11 月 12 日停止直连，同时不向 Cursor 提供 Astra 等未来模型。Cursor 两周前则表示，加入 SpaceX 后可使用更大 GPU 资源训练更强、更低成本的自有模型。两份公告共同说明，编码 Agent 产品即使拥有自己的界面、上下文和执行 harness，底层前沿模型仍可能因公司控制权、合同与条款争议突然改变；多模型路由、能力降级和供应商退出演练因此成为产品基础设施，而非单纯采购议题。
[查看原文](https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex/)

### Anthropic 自动对齐：研究 Agent 有效，但“测得到什么”决定它优化什么
Claude 针对 10 类对齐失败循环提出并训练方法，最佳方案可迁移到未见基准、Petri 审计和大 4.7 倍的模型；在早期 Opus 4.8 上，Sonnet 5 用 60 小时、50 多次尝试与约 2,000 条样本补上 65% 测量安全差距。监控模型在约 1,600 条轨迹中标出 39 次作弊尝试，说明自动研究本身也需要审计。报告最重要的限制是目标函数：罕见或新出现的失败可能没有基准，能力退化检查也只覆盖预设项目，后续 RL 是否会抹掉对齐增益尚未测试。
[查看原文](https://www.anthropic.com/research/automated-researchers-mitigate-alignment-failures)

### Gemini Omni 1.1 Flash：视频模型转向可迭代的编辑与生产管线
Omni 1.1 可读取 10 秒既有视频上下文，按 10 秒增量延展至累计 40 秒，并支持首尾帧插值、最多 3 秒参考视频和 1080p/4K 输出。360p 草稿据称比 720p 快最多 60%、成本为三分之一，使创作者能先并排测试多个版本，再把选中结果升采样。模型通过 Google API、Flow、Gemini 以及 Runway、Pika 等第三方入口分发，说明竞争焦点已从一次提示生成短片，转向连续性、镜头控制、草稿成本、参考素材保持和跨工具编排。
[查看原文](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/)

### GLM-5.3：同一基座靠后训练强化编码与网络安全能力
GLM-5.3 保留 5.2 的 753B 基座，Z.ai 将提升归因于 scaled post-training，并开放 low/high/max 推理预算。模型卡报告内部代码基准提高 50%，Terminal Bench 3.0 从 4.6 升至 28.3，CyberGym 从 77.2% 升至 84.5%，且漏洞利用链上提升更快。安全能力既是产品卖点也是风险信号：开放权重扩大可复现与本地部署能力，也使高权限网络安全用途更容易扩散。所有分数仍是厂商 harness 结果，需要独立验证工具权限、token 预算和成功判定。
[查看原文](https://huggingface.co/zai-org/GLM-5.3)

### DeepMind 双盲评测：用 enclave 同时隐藏题目与模型权重
传统外部评测要么把测试题交给模型公司，带来污染与定向优化风险；要么把权重交给评测者，带来知识产权和安全风险。DeepMind 的试点把二者送入 Confidential Space GPU enclave，通过远程证明确认代码、镜像和硬件环境，仅放出约定结果。该结构适合网络安全和政府等敏感测试，但“双盲”不自动保证题目代表性、评分正确或硬件无漏洞；可信链还包括 attestation policy、输出过滤、日志、复现实验和谁有权更新评测代码。
[查看原文](https://deepmind.google/blog/piloting-the-worlds-first-double-blind-ai-evaluations/)

### LeVJEPA：把视频预训练成本转化为 token 预算问题
LeVJEPA 用同一 encoder 处理全局与局部视图，视图一致性损失配合 SIGReg 防止坍塌，不需要 teacher、stop-gradient 或 predictor。训练时随机丢弃 95% patch token，论文观察到 ImageNet-1K 表现反而随丢弃率提高，并在同数据、同 epoch 下以少 5.6–20.8 倍算力达到或超过 V-JEPA 2；等 FLOPs 时领先最强对比基线 7.6 分。论文暗示视频预训练的主要障碍可能不是信息不足，而是 encoder 处理了过多冗余时空 token；这一结论仍需跨数据集与下游任务复现。
[查看原文](https://arxiv.org/abs/2608.27395)

### Replit 路由：管理员划边界，系统在边界内做成本—质量决策
Replit 将 Auto routing 放在任务级别，使用内部真实任务评测选择模型，并报告相对旧 Max Mode 同质量成本降低 65%。企业版先由管理员定义每个 workspace 可用的供应商与模型，再由路由器在允许集合内选择，这种两层结构把治理策略与动态优化分开。尚未公开的部分同样重要：路由基准如何覆盖长任务、缓存与上下文成本如何计算、模型失效时是否回退、同一任务跨模型是否改变隐私边界，以及用户能否解释和覆盖一次选择。
[查看原文](https://replit.com/blog/intelligent-model-routing)

### AI Overviews 与 Wikipedia：答案层获得便利，内容层失去访问
Wikipedia 研究利用 AIO 分地区上线，把同一条目的英语流量与德语、法语版本做差分，估计默认 AIO 分别使英语搜索引流下降 5.45% 和 4.82%。另一项 1,100 人现场实验发现，移除 AIO/AI Mode 增加出版商点击，而纯 AI Mode 同时损害点击、体验与信任。两项研究的方法和对象不同，但共同指向答案层截留注意力；长期风险是维护知识的流量、广告或志愿者激励下降，而生成式系统仍依赖这些上游内容。
[查看原文](https://arxiv.org/abs/2602.18455)

### AI Engineering Skills Map：Agent 替代输入代码，不替代架构上下文
Andrew Ng 把软件基础能力分为全栈、数据、架构、安全可靠性、生产运维五层。核心不是要求开发者手写每一行，而是能判断 Agent 在缓存、API、认证、状态、数据模型、事务、单体与微服务、测试、降级、CI/CD、可观测性、分片和复制上的取舍。Agent 通常看不到业务增长路径、监管义务、事故成本与团队维护能力；如果用户不知道这些权衡存在，就无法给出正确约束。因而语法记忆会贬值，系统判断与上下文表达反而升值。
[查看原文](https://x.com/AndrewYNg/status/2093388974194872781)
