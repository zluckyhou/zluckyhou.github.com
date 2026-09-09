---
layout: daily
title: "AI Frontier Daily | 2026.09.09"
headline: "OpenAI 用万级 Agent 给出 Navier-Stokes 有限时间奇性构造"
date: 2026-09-09 09:07:00 +0800
permalink: /ai-daily/2026/09/09/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "OpenAI 发布 166 页论文与 Lean 形式化，称一个仍在训练、显著强于 GPT-6 Astra 的内部模型协调约 10,000 个 Agent，用 88 小时构造了从静止出发、受光滑紧支撑外力驱动、能量有界但速度有限时间发散的三维不可压缩流；形式化另耗时 17 小时。公司不申请 Millennium Prize。证明尚待独立审阅，且与 Alpöge、Buckmaster 的受迫 Euler 并行成果之间出现数据、沟通和优先权争议，技术有效性与学术归属需分开判断。"
summary: "OpenAI 发布 166 页论文与 Lean 形式化，称一个仍在训练、显著强于 GPT-6 Astra 的内部模型协调约 10,000 个 Agent，用 88 小时构造了从静止出发、受光滑紧支撑外力驱动、能量有界但速度有限时间发散的三维不可压缩流；形式化另耗时 17 小时。公司不申请 Millennium Prize。证明尚待独立审阅，且与 Alpöge、Buckmaster 的受迫 Euler 并行成果之间出现数据、沟通和优先权争议，技术有效性与学术归属需分开判断。"
issue_count: 15
deep_dive_count: 8
reading_time: 19
cover: "https://lh3.googleusercontent.com/QgfG84W6jCtJ-CUm9zL1nLLNGTSqdCu-aQwKh-XmOQ-b-elP5oFEYEJpYi6lHRp0Ybzrh_OKHngAgv3L1lPoz8FM3FWoqGh-RnFuOgKKC-aL0sf8-No%3Dw1440-h810-n-nu"
signals: "OpenAI · GaryMarcus · GoogleDeepMind · demishassabis · AIatMeta · cognition · swyx · MistralAI"
header-img: img/dark_yellow_400.png
---


## 1/15 OpenAI 用万级 Agent 给出 Navier-Stokes 有限时间奇性构造
OpenAI 发布 166 页论文与 Lean 形式化，称一个仍在训练、显著强于 GPT-6 Astra 的内部模型协调约 10,000 个 Agent，用 88 小时构造了从静止出发、受光滑紧支撑外力驱动、能量有界但速度有限时间发散的三维不可压缩流；形式化另耗时 17 小时。公司不申请 Millennium Prize。证明尚待独立审阅，且与 Alpöge、Buckmaster 的受迫 Euler 并行成果之间出现数据、沟通和优先权争议，技术有效性与学术归属需分开判断。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI<span class="source-chip__links"><a href="https://x.com/OpenAI/status/2097374640582668336" target="_blank" rel="noopener" aria-label="@OpenAI 原文 1">1</a><a href="https://x.com/OpenAI/status/2097374643518640382" target="_blank" rel="noopener" aria-label="@OpenAI 原文 2">2</a><a href="https://x.com/OpenAI/status/2097375276384567642" target="_blank" rel="noopener" aria-label="@OpenAI 原文 3">3</a></span></span><a class="source-chip" href="https://x.com/GaryMarcus/status/2097446464041660608" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GaryMarcus</a></div>

## 2/15 ChatGPT Images 2.5 把编辑控制扩展到草图、评论与多轮一致性
OpenAI 推出 Images 2.5，强调参考图主体保真、自然光照纹理、只改指定区域及多轮编辑不劣化，并称相对 Images 2.0 生成延迟最高降低 50%。ChatGPT 新增 Sketch、常用版式模板、图片评论式编辑和提示词分享；API 同步上线面向高吞吐的 GPT-Image-2.5 Flare 与更重精度控制的 Sunburst，覆盖 ChatGPT、ChatGPT Work 与 Codex。质量和速度为厂商测量，安全仍依赖内容检查、C2PA 与不可见水印。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI<span class="source-chip__links"><a href="https://x.com/OpenAI/status/2097394956457623964" target="_blank" rel="noopener" aria-label="@OpenAI 原文 1">1</a><a href="https://x.com/OpenAI/status/2097394962782384318" target="_blank" rel="noopener" aria-label="@OpenAI 原文 2">2</a><a href="https://x.com/OpenAI/status/2097394958516781301" target="_blank" rel="noopener" aria-label="@OpenAI 原文 3">3</a></span></span></div>

## 3/15 AlphaGenome Atlas 预计算全部 90 亿种单字母 DNA 变异
Google DeepMind 发布约 1 PB 的 AlphaGenome Atlas，规模超过 AlphaFold Database 30 倍，为全部约 90 亿种单核苷酸变异预计算跨组织、细胞类型的分子影响，并以 AVI 分数结合 AlphaGenome 与 AlphaMissense，附带剪接、染色质等可解释贡献。官方案例包括实验验证 DNM1 相关剪接变异，以及在 5.4 万名 UK Biobank 参与者中多发现 22% 非编码关联。它面向研究排序而非临床诊断，学术门户和 API 已开放，商业版计划进入 Google Cloud。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GoogleDeepMind<span class="source-chip__links"><a href="https://x.com/GoogleDeepMind/status/2097325048109384166" target="_blank" rel="noopener" aria-label="@GoogleDeepMind 原文 1">1</a><a href="https://x.com/GoogleDeepMind/status/2097325050919596469" target="_blank" rel="noopener" aria-label="@GoogleDeepMind 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/demishassabis/status/2097341636472688674" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@demishassabis</a></div>

## 4/15 Meta Muse 把个人 Agent 放进独立 VM，并由外置 Sentinel 控制权限
Meta 发布由 Muse Spark 1.3 驱动的个人 Agent Muse，可长期后台工作、使用浏览器与连接器、创建工具并协调子 Agent。每位用户拥有独立云 VM；Agent 运行 cell 看不到真实凭证，连接器权限与所有网络外发由不可被主 Agent 覆盖的 Sentinel 决定，浏览器 CDP 也经独立 broker 收窄。系统叠加 prompt injection 分类器、高风险操作审批和支付一次性卡，开放最高 30 万美元漏洞赏金；Meta 同时承认当前仍可能因运维访问数据，Confidential VM 尚在计划中。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AIatMeta<span class="source-chip__links"><a href="https://x.com/AIatMeta/status/2097401493770956808" target="_blank" rel="noopener" aria-label="@AIatMeta 原文 1">1</a><a href="https://x.com/AIatMeta/status/2097406461118943599" target="_blank" rel="noopener" aria-label="@AIatMeta 原文 2">2</a></span></span></div>

## 5/15 Cognition 融资超 20 亿美元，估值升至 480 亿美元
Cognition 宣布 Series E 融资超过 20 亿美元，估值 480 亿美元，由 a16z、Accel 领投，Founders Fund、General Catalyst、Avenir 等参与；公司自报自 5 月以来 run-rate revenue 从 4.92 亿美元增至接近 9 亿美元，但未给出审计口径。Devin 的产品重心正从会话式编码扩展到 Auto-Triage、Security Swarm 和由 Slack、GitHub、Linear 事件触发的 Automations。融资额、估值与收入均为公司披露，不能直接等同于已确认收入或盈利。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cognition/status/2097369798518681891" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cognition</a><a class="source-chip" href="https://x.com/swyx/status/2097446534417895797" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@swyx</a></div>

## 6/15 Mistral 获 30 亿欧元融资，把主权 AI 扩展到全栈基础设施
Mistral 完成 30 亿欧元 Series D，投后估值超过 210 亿欧元，Samsung Electronics 领投，EQT 的 Scaleup Europe Fund 与 PSG Equity 共同领投，ASML、NVIDIA 等继续参与。公司称资金将扩大前沿研究、训练算力、基础设施与国际业务，并自报已覆盖 20 个国家、125 家以上企业。其“主权 AI”主张把 open-weight 模型、私有算力、数据边界和可审计生产系统绑定在一起；客户规模、落地成效和独立性仍需外部验证。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@MistralAI<span class="source-chip__links"><a href="https://x.com/MistralAI/status/2097188835897586083" target="_blank" rel="noopener" aria-label="@MistralAI 原文 1">1</a><a href="https://x.com/MistralAI/status/2097188842386108859" target="_blank" rel="noopener" aria-label="@MistralAI 原文 2">2</a></span></span></div>

## 7/15 World Labs Atlas 从发布演示推进到实时视角流生成
李飞飞与团队成员披露，World Labs 的 Atlas 经推理优化后已能实时运行：用户可连续移动相机，模型流式预测下一视角，并保持相机位置和三维场景一致；团队展示了从房产照片进入可漫游空间、突破早期小场景边界等案例。这是 9 月 1 日 Atlas 发布后的运行时进展，不是新模型发布。公开视频尚未给出分辨率、帧率、硬件、延迟分位数和长程漂移数据，因此“实时”仍需在统一配置下量化。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@drfeifei<span class="source-chip__links"><a href="https://x.com/drfeifei/status/2097389221548118144" target="_blank" rel="noopener" aria-label="@drfeifei 原文 1">1</a><a href="https://x.com/drfeifei/status/2097429460115218568" target="_blank" rel="noopener" aria-label="@drfeifei 原文 2">2</a></span></span></div>

## 8/15 Cohere 用单一 decode megakernel 把 H100 小批量推理提速 1.58 倍
Cohere 为 North Mini Code 开源完整 serving engine，把 QKV、attention、MoE 等 decode 操作融合进单个持久 kernel，以细粒度调度、权重预取和空闲 SM 回填减少同步与显存带宽空转。公司在单张 H100、BF16、batch size 1 测得 292 token/s，对比 vLLM 的 185 token/s；batch size 8 的端到端提升为 1.25-1.41 倍，并支持 continuous batching、paged attention 与 256K context。结果针对特定模型和硬件，开源后仍需独立复现可移植性。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cohere<span class="source-chip__links"><a href="https://x.com/cohere/status/2097410772355666393" target="_blank" rel="noopener" aria-label="@cohere 原文 1">1</a><a href="https://x.com/cohere/status/2097410777804054741" target="_blank" rel="noopener" aria-label="@cohere 原文 2">2</a><a href="https://x.com/cohere/status/2097410774540886279" target="_blank" rel="noopener" aria-label="@cohere 原文 3">3</a></span></span></div>

## 9/15 Runway 同时进入 Adobe 时间线与巴黎机器人研究团队
Runway 发布 Premiere Pro、After Effects 插件，让用户在 Adobe 时间线内调用其模型完成生成、编辑与放大；同日宣布巴黎研究实验室 Kinetix 团队加入，以增加机器人研究和商业部署投入。两项动作分别把生成模型嵌入专业后期工作流、把视频与世界模型能力延伸到具身场景。公告未披露插件支持的全部模型、价格、数据回传边界，也未说明 Kinetix 的交易结构与团队规模。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml<span class="source-chip__links"><a href="https://x.com/runwayml/status/2097432765142532487" target="_blank" rel="noopener" aria-label="@runwayml 原文 1">1</a><a href="https://x.com/runwayml/status/2097330512113098866" target="_blank" rel="noopener" aria-label="@runwayml 原文 2">2</a></span></span></div>

## 10/15 Suno 与 Believe、TuneCore 建立可选参与的 AI 音乐分发链路
Suno 与独立音乐公司 Believe 及自发行平台 TuneCore 建立全球合作：艺术家可选择参与新行业合作模型与粉丝体验，相关曲目可经 Believe/TuneCore 分发并获得报酬。双方还将使用音频水印、指纹识别和下载限制防止欺诈与批量灌流。Believe、TuneCore 年初曾拒绝分发未达其标准的 Suno 模型作品，此次转向显示授权与分发正在被重写；新模型发布日期、训练授权和分成比例尚未披露。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/suno/status/2097418544820466156" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@suno</a></div>

## 11/15 腾讯混元用递归合成把终端任务难度拉高，但把验证变成主瓶颈
AlphaSignal 转述腾讯混元研究：从已验证父任务递归生成更难子任务时，公开指令、工作区、官方脚本和隐藏测试必须同时一致；任一错位都会制造无效训练样本。其披露的实验中，官方脚本平均从 67 行增至 374 行，而指令只从 85 词增至 122 词；冻结的 DeepSeek-V4-Pro pass@4 从 90% 降至后期 2.5%，每 1,000 次尝试仍约产出 500 个被接受任务。数据来自二次解读，论文与复现实验仍需单独核对。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI<span class="source-chip__links"><a href="https://x.com/AlphaSignalAI/status/2097412038314053989" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 1">1</a><a href="https://x.com/AlphaSignalAI/status/2097412041426309599" target="_blank" rel="noopener" aria-label="@AlphaSignalAI 原文 2">2</a></span></span></div>

## 12/15 Stripe 的 Kai 显示企业 Agent 的规模上限先落在技能选择与治理
Harrison Chase 重新介绍 Stripe 全员 Agent Kai：LangChain 案例称一名工程师用一周搭出初版，Kai 通过虚拟文件系统、沙箱和摘要中间件连接内部仓库、Slack 与 Google Suite；公司已积累 100 个团队维护的 1,000 多个技能及 500 多个 MCP 工具。案例自报四周用户从 296 增至 5,000 多、83% 员工每周使用。真正瓶颈已从接入转向技能预筛、上下文退化、权限与跨会话协作；采用率和收益为厂商案例口径。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hwchase17/status/2097355841183596632" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17</a></div>

## 13/15 Databricks 把本地 IDE 直接接到 Serverless、AI Runtime 与集群
Databricks 再次推广本地 IDE/CLI 的远程执行能力：开发者可从 VS Code、Cursor 或终端通过 SSH tunnel 运行、调试 Python 和 SQL，连接 Serverless、AI Runtime 或专用集群，同步文件与依赖并在 IDE 内浏览 Unity Catalog；编码 Agent 因而能在真实工作区上下文和算力上执行。下一步才计划自动配置 Unity AI Gateway、整合 bundle 管理和支持自定义镜像，当前价值是减少环境切换，安全与成本仍取决于 workspace 权限和 usage policy。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/databricks/status/2097324624904126565" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a></div>

## 14/15 Astra 完成付费用户全量 rollout，能力跃迁开始暴露配额成本
OpenAI 宣布 GPT-6 Astra 已向 Codex 与 ChatGPT Work 的 Plus、Pro、Business、Enterprise 用户完成全量推送。与此同时，早期重度用户 Matt Shumer 称，Astra 让他连续消耗多次 plan reset，改变了过去可全天运行的使用方式；这是一条个人使用信号，不代表统一定价或平均消耗。模型从限量测试走向全量付费使用后，新的观察重点将是实际任务成功率、token 与工具成本、配额公平性以及失败重试，而不只是社交媒体成品。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/OpenAI/status/2097431322117476423" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a><a class="source-chip" href="https://x.com/mattshumer_/status/2097502373375598941" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@mattshumer_</a></div>

## 15/15 Agent harness 正把分叉、记忆、身份与模型路由收进控制面
LangChain 的 Deep Agents 新增带既有上下文的子 Agent fork、内置记忆，并把“Agent 以自己还是用户身份行动”的授权问题推向托管能力；Gloo Code 则以用途专用 Agent 和模型路由在质量、成本、隐私间选择，首批开放给 500 多名开发者。两组更新共同表明，生产 Agent 的差异化正从单次模型调用迁移到上下文继承、持久状态、身份代理、审批和按任务路由。两者尚未披露跨真实任务的统一完成率或长期安全评测。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17<span class="source-chip__links"><a href="https://x.com/hwchase17/status/2097410530717704546" target="_blank" rel="noopener" aria-label="@hwchase17 原文 1">1</a><a href="https://x.com/hwchase17/status/2097443947161243902" target="_blank" rel="noopener" aria-label="@hwchase17 原文 2">2</a><a href="https://x.com/hwchase17/status/2097447020554289488" target="_blank" rel="noopener" aria-label="@hwchase17 原文 3">3</a></span></span><a class="source-chip" href="https://x.com/PGelsinger/status/2097413202846114214" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@PGelsinger</a></div>

---

## Deep Dive 附录

### OpenAI Navier-Stokes：定理覆盖受迫方程反例，验证与归属仍是两条独立问题
论文的 Theorem 1.1 对任意正黏度构造光滑、时空紧支撑外力与从零开始的三维流；速度在 t=1 前光滑、动能一致有界，但 L∞ 速度趋于无穷，对应 Clay 表述的 C、D 情形。构造用自相似收缩涡旋产生奇性，再以多尺度振荡脉冲的非线性动量通量抵消环状区域残差，使总外力及全部导数能跨越奇性时刻光滑延拓。OpenAI 称约 10,000 个 Agent 在 88 小时、270 万条消息和 1,300 亿输出 token 中得到解，Lean 形式化另用 GPT-6 Astra 17 小时完成。文本和机器证明都已公开，但仍需数学界检查定义、形式化覆盖与隐含假设；与受迫 Euler 并行工作的优先权、私有产品数据训练可能性和沟通过程不能由 Lean 验证自动解决。
[查看原文](https://openai.com/index/navier-stokes-solution/)

### ChatGPT Images 2.5：重点从单张生成转向可持续编辑工作流
Images 2.5 的产品改动围绕“尽量不改不该改的部分”：参考人物与主体更一致，复杂背景中的局部编辑更精确，多轮修改更少丢失早期变化；Sketch 让用户直接画空间、服装或构图轮廓，模板提供海报、商品图等起点，图片评论则把修改绑定到视觉位置。OpenAI 称每周通过 ChatGPT Images 与 API GPT-Image 模型生成超过 30 亿张图片，新模型相对 Images 2.0 延迟最高降 50%。API 的 Flare 面向速度与规模，Sunburst 面向精细商业创意；两者的质量、延迟与价格仍要结合分辨率、迭代轮数和失败率核算。系统继续使用 C2PA、不可见水印与输入输出检查，但本地开源视频/图像工具带来的身份滥用风险不在这一产品边界内。
[查看原文](https://openai.com/index/introducing-chatgpt-images-2-5/)

### AlphaGenome Atlas：把逐变异推理提前计算为 1 PB 的全基因组搜索层
Atlas 不是每次收到研究问题才调用 AlphaGenome，而是预先为约 90 亿种单字母变异生成数千种分子效应预测，再把 AlphaGenome 与蛋白变异模型 AlphaMissense 汇成 AVI 分数，并给出剪接、表达、染色质、保守性等特征贡献。资源覆盖编码区和占 98% 的非编码区，连接 2,500 多种重复序列 motif。外部合作案例中，AVI 帮助定位 DNM1 的异常剪接变异并得到实验验证；对 5.4 万多名 UK Biobank 参与者的分析把非编码关联发现量提高 22%。这些结果说明预计算可显著缩短候选筛选，但预测分数仍需实验、群体与临床证据确认，不能直接解释为致病诊断。
[查看原文](https://deepmind.google/blog/alphagenome-atlas-a-predictive-map-of-every-possible-dna-letter-change-in-the-human-genome/)

### Meta Muse：假设主 Agent 会被攻破，再用 cell、凭证代理和 Sentinel 限制爆炸半径
Muse 把每位用户的工作区放在独立云 VM，将主 harness、可执行工具和文件放入受限 runtime cell；真实 OAuth 凭证由 cell 外 `authd` 保存，`privsep` worker 只获得按连接器与调用者白名单授权的凭证。Sentinel 是连接器动作与所有网络外发的唯一许可者，主 Agent 只能提出请求，不能覆写决定。浏览器经 CDP broker 暴露 accessibility tree，不开放页面 JavaScript 与 DevTools；密码填充或用户接管时 Agent 暂停。对 prompt injection，系统组合模型训练、外部数据不可信标签、多分类器、确定性网络/进程边界和人工审批。购物每次确认，并以商户、金额、时限绑定的一次性卡降低泄露价值。设计比“让模型更听话”更接近安全内核，但 Meta 仍可因服务运维访问现有 VM，Confidential VM 尚未正式交付。
[查看原文](https://research.meta.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse)

### Cognition Series E：估值跃升押注的是主动、事件驱动的自驾软件系统
Cognition 获超 20 亿美元融资、估值 480 亿美元，并自报 run-rate revenue 在约四个月内由 4.92 亿美元增至接近 9 亿美元。新资金背后的产品论点不再只是“Devin 能写代码”，而是让工程师成为架构者：Auto-Triage 在事故发生后先调查，Security Swarm 发现并归类多步漏洞，Automations 从 Slack、GitHub、Linear 事件自动开始工作，未来还要让算力预算按高价值任务自动分配。公司强调保持独立 Agent 实验室，可组合不同模型供应商。最需要外部核验的是收入年化定义、毛利与计算成本、自动化任务的真正完成率，以及高权限持续 Agent 引入的安全与问责成本。
[查看原文](https://cognition.com/blog/series-e)

### Mistral Series D：欧洲前沿模型竞争被重新定义为模型、算力与数据控制权
30 亿欧元融资把 Mistral 的投后估值推到 210 亿欧元以上，由 Samsung 领投、EQT Scaleup Europe Fund 与 PSG Equity 共同领投，ASML、NVIDIA 等继续下注。公司计划同时扩大研究、训练算力、基础设施、产品和国际商业，而不是只购买模型训练资源。它把“主权 AI”拆成数据不离开组织边界、模型可控可定制、算力私有且可预测、生产系统可控可审计四项，并自报在 20 个国家服务 125 家以上大型企业。战略价值在于为政府和受监管企业提供非美国单一云路线；但 open-weight、私有部署与真正供应链独立并非同义，芯片、云、融资和维护能力仍形成外部依赖。
[查看原文](https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/)

### Cohere megakernel：decode 优化从单个算子转向跨整步的细粒度调度
传统 serving 每层依次启动多个 kernel，batch 小时常被 launch、整网格栅栏与显存搬运拖慢。Cohere 的持久 megakernel 让每个 SM 常驻一个 threadblock，从主机生成的 task list 读取 QKV、attention、MoE 等 tile，并用全局计数器只等待真正的数据依赖；并行 transformer 分支允许空闲 SM 回填其他就绪任务，权重还能在激活到达前预取。North Mini Code 每 token 激活 3.3B 参数，BF16 每步约搬 6.6 GB 权重；公司估算单张 H100 的带宽极限约 470 token/s，vLLM 达 185，而其实现达 292。1.58 倍结果说明内存带宽利用可成为小批量 Agent 推理的核心杠杆，但对其他模型结构、GPU、量化与并发负载的收益仍需复现。
[查看原文](https://cohere.com/blog/megakernels)

### Suno 与 Believe/TuneCore：音乐行业从单纯抵制转向带保障的可选接入
Believe 与 TuneCore 今年早些时候还拒绝分发使用未达到其标准模型创作的音乐；最新合作则允许艺术家自愿参与 Suno 的行业合作模型、粉丝体验和收益机制，并让合规生成曲目直接进入其全球分发网络。Suno 把音频水印、指纹识别与下载限额作为防欺诈和防批量灌流的底层保障，并把此次合作与 Warner Music Group、BMG 关系并列。变化说明竞争焦点正从“是否允许 AI 音乐”转向授权对象、可追踪性、选择退出、分发资格和分成。公告没有披露训练目录、艺术家同意粒度、收益算法或争议处理流程，新模型也只承诺很快发布。
[查看原文](https://suno.com/blog/believe-partnership)
