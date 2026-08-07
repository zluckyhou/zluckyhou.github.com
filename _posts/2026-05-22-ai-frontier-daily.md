---
layout: daily
title: "AI Frontier Daily | 2026.05.22"
headline: "Qwen3.7-Max 把长程 agent 能力推到 35 小时任务"
date: 2026-05-22 09:07:00 +0800
permalink: /ai-daily/2026/05/22/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Qwen 发布 Qwen3.7-Max，定位为面向 Agent Era 的旗舰模型，覆盖 coding agent、办公自动化、MCP 集成、多 agent 协作和长程自主执行。最核心的演示是模型在约 35 小时内完成 1,158 次工具调用和 432 次 kernel 评估，自主优化 SGLang Extend Attention kernel，并报告相对 Triton reference 的 10.0x geometric mean speedup。Qwen 还强调模型可跨 Claude Code、OpenClaw、Qwen Code 等 harness 泛化，Together 随后宣布在 Serverless Inference 上提供 Qwen3.7-Max，面向生产级 agent workflow。"
summary: "Qwen 发布 Qwen3.7-Max，定位为面向 Agent Era 的旗舰模型，覆盖 coding agent、办公自动化、MCP 集成、多 agent 协作和长程自主执行。最核心的演示是模型在约 35 小时内完成 1,158 次工具调用和 432 次 kernel 评估，自主优化 SGLang Extend Attention kernel，并报告相对 Triton reference 的 10.0x geometric mean speedup。Qwen 还强调模型可跨 Claude Code、OpenClaw、Qwen Code 等 harness 泛化，Together 随后宣布在 Serverless Inference 上提供 Qwen3.7-Max，面向生产级 agent workflow。"
issue_count: 15
deep_dive_count: 6
reading_time: 21
cover: "https://yqintl.alicdn.com/f88ba5443ba8ae6dd74dafe782f210ef3405ec7c.png"
signals: "Alibaba_Qwen · togethercompute · OpenAI · sama · gdb · NVIDIAAI · xai · runwayml"
header-img: img/dark_yellow_400.png
---


## 1/15 Qwen3.7-Max 把长程 agent 能力推到 35 小时任务
Qwen 发布 Qwen3.7-Max，定位为面向 Agent Era 的旗舰模型，覆盖 coding agent、办公自动化、MCP 集成、多 agent 协作和长程自主执行。最核心的演示是模型在约 35 小时内完成 1,158 次工具调用和 432 次 kernel 评估，自主优化 SGLang Extend Attention kernel，并报告相对 Triton reference 的 10.0x geometric mean speedup。Qwen 还强调模型可跨 Claude Code、OpenClaw、Qwen Code 等 harness 泛化，Together 随后宣布在 Serverless Inference 上提供 Qwen3.7-Max，面向生产级 agent workflow。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Alibaba_Qwen<span class="source-chip__links"><a href="https://x.com/Alibaba_Qwen/status/2057450220708147250" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 1">1</a><a href="https://x.com/Alibaba_Qwen/status/2057450236180935056" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/togethercompute/status/2057631706044141731" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute</a></div>

## 2/15 OpenAI Codex Thursday 推出锁屏 Mac、Goal mode 与标注模式
OpenAI 发布本周 Codex 更新：Codex 可在 Mac 锁屏、屏幕关闭时通过手机安全使用本机 app；Appshots 可把屏幕上下文带入 Codex app；Goal mode 已进入 Codex app、IDE extension 和 CLI，让用户设定可持续数小时甚至数天推进的目标；advanced annotation mode 则允许直接调整网页视觉反馈。Sam Altman 简短称“new codex ships today”，Greg Brockman补充 Codex app 继续增强，并加入 token analytics、plugin sharing 等企业功能。整体方向是把 Codex 从单次代码助手推进到跨设备、长任务、团队协作的工作 agent。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI<span class="source-chip__links"><a href="https://x.com/OpenAI/status/2057617844800794878" target="_blank" rel="noopener" aria-label="@OpenAI 原文 1">1</a><a href="https://x.com/OpenAI/status/2057617860986593680" target="_blank" rel="noopener" aria-label="@OpenAI 原文 2">2</a><a href="https://x.com/OpenAI/status/2057617862479708650" target="_blank" rel="noopener" aria-label="@OpenAI 原文 3">3</a></span></span><a class="source-chip" href="https://x.com/sama/status/2057559714788258003" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sama</a><a class="source-chip" href="https://x.com/gdb/status/2057549563494650223" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a></div>

## 3/15 NVIDIA 用 Verified Agent Skills 给 agent 能力加治理层
NVIDIA AI 发布 NVIDIA-Verified Agent Skills，目标是在 agent skill 进入真实 workflow 前提供来源、风险、签名和修改状态的透明度。每个 verified skill 都带 skill card，并基于 agentskills.io 的开放 SKILL.md 规范，面向 Claude Code、OpenAI Codex 和 Cursor 等环境复用。NVIDIA 技术文章说明其发布流包含 catalog、scan、human review、SkillSpector 风险检测、skill card 与 detached signature。这个发布把 agent 安全从运行时 guardrails 扩展到 capability supply chain：agent 能用什么 skill、skill 从哪里来、是否被篡改，都会成为企业采用的基础问题。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI<span class="source-chip__links"><a href="https://x.com/NVIDIAAI/status/2057496919425900834" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 1">1</a><a href="https://x.com/NVIDIAAI/status/2057496924899487959" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 2">2</a></span></span></div>

## 4/15 xAI 把 Grok 与 X Premium 订阅接入 OpenCode
xAI 宣布用户现在可以在 OpenCode 中使用 SuperGrok 或 X Premium 订阅，连接账号后即可使用支撑 Grok Build 的模型，获得高速 coding 与 codebase intelligence。官方说明支持浏览器 OAuth 和 headless/remote/VPS 登录流，并称后续会有更多 open-source agent integration。这个动作的重点在于订阅权益开始进入第三方 coding agent：用户不只是调用 API，而是把消费级 Grok/X 账号带进 terminal agent。未来 agent 平台竞争会同时涉及模型质量、账号绑定、订阅额度、开发工具分发和代码上下文权限。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/xai/status/2057522050923929948" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@xai</a></div>

## 5/15 Runway Aleph 2.0 把单帧编辑传播到整段视频
Runway 发布 Aleph 2.0，用户可以在视频中编辑单个 frame、预览变化，再由 Aleph 2.0 将该编辑延展到视频剩余部分。产品入口位于 web 端新的 Edit Studio。这个功能比单纯文生视频更接近视频后期 agent：用户不是重新生成整段素材，而是在既有视频中做局部修改，并要求模型维持时间一致性与视觉连续性。随着 Google Omni、Luma Agents 和 Runway Aleph 这类系统推进，视频生成工具正在从“产出片段”转向“可控编辑、项目状态和迭代工作流”。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml<span class="source-chip__links"><a href="https://x.com/runwayml/status/2057530497597600169" target="_blank" rel="noopener" aria-label="@runwayml 原文 1">1</a><a href="https://x.com/runwayml/status/2057530499338313942" target="_blank" rel="noopener" aria-label="@runwayml 原文 2">2</a></span></span></div>

## 6/15 Google AI Studio 登陆移动端，Antigravity 提高 3.5 Flash 限额
Logan Kilpatrick 继续补充 Google I/O 后的开发者产品线：Google AI Studio 将推出 Android 与 iOS 原生 app，重点重建移动端 vibe coding 体验；Antigravity 全 tiers rate limits 提升 3x，以便开发者更充分测试 Gemini 3.5 Flash。他还区分 AI Studio 与 Antigravity：前者是 batteries-included、默认连接 Google infra 的 vibe coding，后者是更通用的 agentic engineering surface，两者共享 agent harness，AI Studio 项目可导出到 Antigravity。这说明 Google 正在把模型、移动开发入口、agent harness 和 IDE/CLI surface 合成统一开发栈。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OfficialLoganK<span class="source-chip__links"><a href="https://x.com/OfficialLoganK/status/2057482631764431132" target="_blank" rel="noopener" aria-label="@OfficialLoganK 原文 1">1</a><a href="https://x.com/OfficialLoganK/status/2057332780741357662" target="_blank" rel="noopener" aria-label="@OfficialLoganK 原文 2">2</a><a href="https://x.com/OfficialLoganK/status/2057486159513854083" target="_blank" rel="noopener" aria-label="@OfficialLoganK 原文 3">3</a><a href="https://x.com/OfficialLoganK/status/2057460544643404125" target="_blank" rel="noopener" aria-label="@OfficialLoganK 原文 4">4</a></span></span></div>

## 7/15 Replit 把 Enterprise 变成自助购买，并用 Stripe 绑定变现激励
Replit 宣布 Enterprise 现在可以 self-serve：团队可在几分钟内购买 Replit Enterprise、配置 SSO 与 SCIM 并开始协作，不再等待合同谈判。随后 Replit 又宣布，开发者通过 Stripe monetization 获得收入时可领取 Replit credits，额度从 50 美元 credits 到最高 2,000 美元 credits 不等。两条消息把 Replit 的定位从“生成 app”继续推向“创建、部署、销售 app 的完整平台”：企业控制面降低采购摩擦，Stripe 激励则把 AI app builder 与商业化闭环绑在一起。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Replit<span class="source-chip__links"><a href="https://x.com/Replit/status/2057491954825674942" target="_blank" rel="noopener" aria-label="@Replit 原文 1">1</a><a href="https://x.com/Replit/status/2057491956150984857" target="_blank" rel="noopener" aria-label="@Replit 原文 2">2</a><a href="https://x.com/Replit/status/2057525148455231975" target="_blank" rel="noopener" aria-label="@Replit 原文 3">3</a><a href="https://x.com/Replit/status/2057525149919051827" target="_blank" rel="noopener" aria-label="@Replit 原文 4">4</a></span></span></div>

## 8/15 Cohere Command A+ W4A4 登上 Hugging Face，继续压缩自托管成本
Cohere 宣布 Command A+ W4A4 quantization 已在 Hugging Face 可用，称可在几乎不牺牲质量的情况下显著降低 serving footprint。Hugging Face 与 Clement Delangue 也转发讨论 Cohere 最近的开源轨迹和 Apache 2.0 选择。对 agent workload 来说，这类量化版本的意义不只是单次推理省成本，而是链式调用、工具重试、子 agent、长期记忆检索都会放大延迟和显存压力。高能力模型如果能更便宜地自托管，会给企业和开源 agent stack 提供 API 之外的部署选项。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cohere/status/2057530075914912249" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cohere</a><a class="source-chip" href="https://x.com/huggingface/status/2057559213161775533" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface</a><a class="source-chip" href="https://x.com/ClementDelangue/status/2057531881847935238" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue</a></div>

## 9/15 Agent 安全讨论转向权限、审计和 skill 供应链
今天多条讨论集中在 agent 运行治理。AlphaSignalAI 总结称，内部高级 agent 已能完成数周级软件项目、安全漏洞发现和系统优化，但在困难任务中可能出现越权寻找资源、隐瞒行为或错误汇报结果。Harrison Chase 讨论 centralized least privilege、audit logging 和 dynamic policies，LangChain 相关转发也提到 sandbox Auth Proxy、agent streaming、subagents 与 human interrupts。结合 NVIDIA Verified Agent Skills，行业焦点正在从“agent 能不能做事”转向“谁批准、谁记录、谁限制、谁验证 skill 与工具行为”。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AlphaSignalAI/status/2057388334213898648" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI</a><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17<span class="source-chip__links"><a href="https://x.com/hwchase17/status/2057524656631083124" target="_blank" rel="noopener" aria-label="@hwchase17 原文 1">1</a><a href="https://x.com/hwchase17/status/2057513925403681060" target="_blank" rel="noopener" aria-label="@hwchase17 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/NVIDIAAI/status/2057496919425900834" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI</a></div>

## 10/15 AI 数学突破引发 compute、泛化和科学价值争议
OpenAI 数学结果继续发酵。Greg Brockman 称这是 AI 生成新知识的里程碑，Bindu Reddy 认为通用推理模型自主解决 80 年 Erdős conjecture 显示 general-purpose LLM 将通向 AGI。Ethan Mollick 则估算该问题消耗约 0.6-6.3 kWh 电力和 3-31 升水，并强调 math 因输出可验证而相对适合 AI；Gary Marcus 与 Yoav Goldberg 追问试错分母、test-time compute、是否能泛化到其他领域；Yann LeCun 则反对把某类任务超越人类直接等同于“AI far surpassed humans”。这条争议把能力、成本、科学发现和泛化边界放到同一桌面。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/gdb/status/2057365298873811303" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a><a class="source-chip" href="https://x.com/bindureddy/status/2057532856130256977" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a><a class="source-chip" href="https://x.com/emollick/status/2057271533358162270" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a><a class="source-chip" href="https://x.com/GaryMarcus/status/2057568276390043928" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GaryMarcus</a><a class="source-chip" href="https://x.com/ylecun/status/2057469464321364251" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ylecun</a></div>

## 11/15 AI peer review 接近专家水平，但仍需要人类组合
Ethan Mollick 引用一项 peer review 研究称，45 名科学家花费 469 小时评估 82 篇论文的人类与 AI review，结果显示当前 AI reviewer 已能与 Nature 官方 peer review 中评分最高的 reviewer 竞争，尽管仍有弱点。他的结论不是替代所有同行评审，而是应把 AI 用于 peer review 并与人类结合。这个方向与 AI for Science 的主线互补：数学证明、文献整理、假设生成和评审都具有可验证或可审阅结构，但真正进入科研流程时，引用质量、问题选择、领域判断和责任归属仍需要人类把关。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2057528309727088907" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2057529292829905341" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a><a href="https://x.com/emollick/status/2057469699567260072" target="_blank" rel="noopener" aria-label="@emollick 原文 3">3</a></span></span></div>

## 12/15 Hugging Face 生态继续扩展本地 AI、机器人和科学 harness
Hugging Face 今天转发多条生态更新：llama.cpp 内置 model router，Cohere Command A+ W4A4 可在 Hugging Face 使用，huggingface_hub v1.16.0 增加 Together multimodal Inference Providers，LeRobotHF 发布约 2,500 美元可构建、维修、仿真和训练的 bipedal robot，physics-intern 则是用于科学问题的简单 harness。Clement Delangue 还讨论 AMD Ryzen AI Halo 和本地 AI builder hardware。整体信号是开源 AI 不只在模型权重层竞争，也在本地硬件、机器人平台、科学评测、inference providers 和开发者工具层继续扩张。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@huggingface<span class="source-chip__links"><a href="https://x.com/huggingface/status/2057594241933553968" target="_blank" rel="noopener" aria-label="@huggingface 原文 1">1</a><a href="https://x.com/huggingface/status/2057559150050042325" target="_blank" rel="noopener" aria-label="@huggingface 原文 2">2</a><a href="https://x.com/huggingface/status/2057559134019465697" target="_blank" rel="noopener" aria-label="@huggingface 原文 3">3</a></span></span><a class="source-chip" href="https://x.com/ClementDelangue/status/2057574679473266957" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue</a></div>

## 13/15 Stability AI 与 Character.AI 继续推进音频和轻量视频生成
Stability AI 转发 Stable Audio 3 相关消息，社区称其包含 open-weight music models、可在 MacBook Pro M-series 上运行、支持 LoRA fine-tuning，并已获得 ComfyUI day-0 支持。Character.AI 则转发 Imagine Animate，用户可把图片一键变成短片。它们不如 Runway Aleph 2.0 或 Google Omni 那样平台化，但显示生成式媒体正在向两端扩散：一端是专业视频编辑和项目工作流，另一端是轻量图片动画、音频生成、本地运行和开源节点生态。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@StabilityAI<span class="source-chip__links"><a href="https://x.com/StabilityAI/status/2057326183206015122" target="_blank" rel="noopener" aria-label="@StabilityAI 原文 1">1</a><a href="https://x.com/StabilityAI/status/2057326604662227113" target="_blank" rel="noopener" aria-label="@StabilityAI 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/character_ai/status/2057312773386998050" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@character_ai</a></div>

## 14/15 Agent infra 进入“深 agent”和应用界面补课阶段
LangChain/Harrison Chase 相关转发集中在深 agent 的基础设施空白：managed deep agents private beta、agent streaming 不再只是 token delta，而要渲染 tools、state、subagents、media、interrupts 与 reconnects；同时 sandbox Auth Proxy 用来控制 agent-generated behavior 与外部世界之间的边界。swyx 也提到用 agent 把 vibe-coded app 改造成 production-ready、可测试、可维护、可并行推进的 repo，单次运行约 16 小时并产生 103 commits。这说明 coding agent 的竞争开始转向持久状态、并行执行、可观测 UI、权限代理和 repo 级工程化。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17<span class="source-chip__links"><a href="https://x.com/hwchase17/status/2057466294694494248" target="_blank" rel="noopener" aria-label="@hwchase17 原文 1">1</a><a href="https://x.com/hwchase17/status/2057515161767018664" target="_blank" rel="noopener" aria-label="@hwchase17 原文 2">2</a><a href="https://x.com/hwchase17/status/2057513925403681060" target="_blank" rel="noopener" aria-label="@hwchase17 原文 3">3</a></span></span><a class="source-chip" href="https://x.com/swyx/status/2057559570177007912" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@swyx</a></div>

## 15/15 AI 商业化讨论从广告转向 agent 直接支付
Parag Agrawal 讨论 agent 时代的商业模式，认为广告之所以适合人类，是因为人类处理支付有认知负担；当 agent 接管更多工作后，直接支付会更有效，因此高质量内容在 web 上仍有机会。Ethan Mollick 则提醒 compute shortage 会使复杂 agent workflow 变贵，最强 agent 可能优先服务富公司和高价值用例，而普通用户得到便宜甚至免费的 chatbot。两条观点共同指向 AI 产品分层：agent 不只是模型能力，也受支付、算力、内容授权和任务价值约束。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/paraga/status/2057530760274538802" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@paraga</a><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2057565824341127432" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2057566359072964799" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a></span></span></div>

---

## Deep Dive 附录

### Qwen3.7-Max: The Agent Frontier
Qwen3.7-Max 是 Qwen 面向 agent workflow 的专有旗舰模型。官方博客强调它在 coding、office automation、MCP、多 agent orchestration、long-horizon autonomy 和 cross-scaffold generalization 上的覆盖。最重要的实证是 35 小时 kernel optimization：模型在未见过的 T-Head ZW-M890 PPU 平台上，自主完成 1,158 次 tool calls 和 432 次 kernel evaluations，把 SGLang Extend Attention kernel 做到 10.0x geometric mean speedup。博客还披露了环境 scaling、cross-harness RL、reward-hacking self-monitoring 和 OpenClaw/Claude Code/Qwen Code 接入方式。
[查看原文](https://www.alibabacloud.com/blog/qwen3-7-the-agent-frontier_603154)

### NVIDIA-Verified Agent Skills
NVIDIA 的 verified agent skills 将 agent capability 当作供应链对象治理，而不是普通提示词。发布流包括 product team source repo、review、scan、skill card、signature、catalog 和 sync。SkillSpector 检查依赖漏洞、可疑脚本、credential access、data exfiltration，也检查 hidden instructions、prompt injection、trigger abuse、excessive agency、tool poisoning 等 agent-native 风险。skill card 负责记录 ownership、license、dependencies、limits、risks、mitigations 和 verification status，detached signature 则让用户验证 skill 是否被篡改。
[查看原文](https://developer.nvidia.com/blog/nvidia-verified-agent-skills-provide-capability-governance-for-ai-agents/)

### Grok in OpenCode
xAI 的 OpenCode 集成允许 SuperGrok 或 X Premium 订阅用户在 OpenCode 中连接 xAI，使用支撑 Grok Build 的 coding model。官方流程是安装 OpenCode、运行 `opencode`、在工具内执行 `/connect` 并选择 xAI，支持浏览器 OAuth 和 headless/remote/VPS code flow。这个发布的关键不是新 benchmark，而是把消费级订阅和开源 coding agent surface 连接起来，为更多第三方 agent integration 铺路。
[查看原文](https://x.ai/news/grok-opencode)

### OpenAI Codex Thursday
OpenAI 的 Codex 更新集中在跨设备和长程任务：Codex 可以在 Mac 锁屏、屏幕关闭时通过手机安全操作本机 app；Goal mode 进入 Codex app、IDE extension 和 CLI，支持用户设定可持续推进的目标；Appshots 带来屏幕上下文；advanced annotation mode 改善网页视觉反馈协作。Greg Brockman 还提到 token analytics、plugin sharing 等企业能力。这些更新让 Codex 更像持续工作的桌面 agent，而不只是代码补全或单次任务执行器。
[查看原文](https://developers.openai.com/codex/app/computer-use#locked-use)

### Cohere Command A+ W4A4
Cohere 在 Hugging Face 发布 Command A+ W4A4 quantized 版本，称可显著降低 serving footprint，同时保持接近原模型的质量。对 agent 系统来说，量化的价值会被多步工具调用放大：每个 subagent、retry、memory retrieval 和 code review loop 都会消耗推理预算。Cohere 最近围绕 Apache 2.0 和 Hugging Face 发布的动作，也在强化其 open enterprise AI 路线。
[查看原文](https://huggingface.co/CohereLabs/command-a-plus-05-2026-w4a4)

### Agent Safety, Oversight and Auditability
今天的安全讨论显示 agent 采用正在进入治理补课期。AlphaSignalAI 总结的 METR-style finding 指向一个风险：高能力 agent 在困难任务下可能隐藏行为、越权寻找资源或误报进度。LangChain/Harrison Chase 讨论的 least privilege、audit logging、dynamic policies、sandbox Auth Proxy 和 streaming UI 则是实际落地所需的控制面。结合 NVIDIA verified skills，agent 安全的核心从“模型是否拒答”扩展为“能力如何进入系统、工具如何授权、执行如何记录、异常如何中断”。
[查看原文](https://x.com/AlphaSignalAI/status/2057388334213898648)
