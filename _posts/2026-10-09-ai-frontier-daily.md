---
layout: daily
title: "AI Frontier Daily | 2026.10.09"
headline: "Google把Gemini重构为可跨系统长期工作的企业Agent"
date: 2026-10-09 09:07:00 +0800
permalink: /ai-daily/2026/10/09/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Google Cloud 发布统一 Gemini agent：用户从单一提示框委派目标，它可回答问题、完成知识工作、创建媒体并编写和运行代码，同时连接 Workspace、Microsoft 365、Slack、Salesforce、ServiceNow、数据库与 MCP 服务。系统支持云端持久执行、临时子 Agent 编排和拥有独立邮箱、存储及权限的 coworker agent；底层模型可在 Gemini、Claude 等模型间选择。Google 还加入 Agent 身份、最小权限、审计、沙箱、网关与项目级支出上限，并称近 90% 的 Fortune 100 已使用 Gemini Enterprise。"
summary: "Google Cloud 发布统一 Gemini agent：用户从单一提示框委派目标，它可回答问题、完成知识工作、创建媒体并编写和运行代码，同时连接 Workspace、Microsoft 365、Slack、Salesforce、ServiceNow、数据库与 MCP 服务。系统支持云端持久执行、临时子 Agent 编排和拥有独立邮箱、存储及权限的 coworker agent；底层模型可在 Gemini、Claude 等模型间选择。Google 还加入 Agent 身份、最小权限、审计、沙箱、网关与项目级支出上限，并称近 90% 的 Fortune 100 已使用 Gemini Enterprise。"
issue_count: 16
deep_dive_count: 8
reading_time: 17
cover: "https://storage.googleapis.com/gweb-cloudblog-publish/images/image_3.max-2100x2100_0CYZWqn.jpg"
signals: "sundarpichai · OpenAI · AnthropicAI · demishassabis · LumaLabsAI · runwayml · StabilityAI · midjourney"
header-img: img/dark_yellow_400.png
---


## 1/16 Google把Gemini重构为可跨系统长期工作的企业Agent
Google Cloud 发布统一 Gemini agent：用户从单一提示框委派目标，它可回答问题、完成知识工作、创建媒体并编写和运行代码，同时连接 Workspace、Microsoft 365、Slack、Salesforce、ServiceNow、数据库与 MCP 服务。系统支持云端持久执行、临时子 Agent 编排和拥有独立邮箱、存储及权限的 coworker agent；底层模型可在 Gemini、Claude 等模型间选择。Google 还加入 Agent 身份、最小权限、审计、沙箱、网关与项目级支出上限，并称近 90% 的 Fortune 100 已使用 Gemini Enterprise。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/sundarpichai/status/2108257472553386059" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sundarpichai</a></div>

## 2/16 GPT-6.1 Sol Ultrafast把近Astra能力推到最高速服务档
OpenAI 为 GPT-6.1 Sol 上线 Ultrafast，覆盖 API、Codex 与 ChatGPT Work。官方称其在 Codex 的生成速度最高可达标准 Sol 的 8 倍，面向故障调试、操作应用的 Agent 和实时体验；API 每百万输入、输出 token 分别为 12 与 60 美元。调用时设置 `service_tier: "ultrafast"`，高频工具调用建议使用 WebSocket。API 面向所有用户并设独立速率限制，支持全球处理和美欧数据驻留；Work 与 Codex 端覆盖 Pro 500 及符合条件的 Enterprise、Edu 计划。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/OpenAI/status/2108269021430710412" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI</a></div>

## 3/16 Anthropic用Cyber Mission把Claude投入关键设施和开源防御
Anthropic 启动长期 Cyber Mission：关键基础设施计划将 Claude、驻场工程师和威胁研究提供给电网、水务、交通及工业系统的安全合作伙伴；OSS Scanner 则为主动加入的关键开源项目免费做周期性模型扫描，报告包含复现样例、解释与候选修复。官方称过去半年发现超过 2.9 万个候选漏洞、人工仅审查约 6000 个；早期抽检 48 个项目的 97 个高危发现时，85 个达到协调披露标准。正式扫描结果不经人工复核，维护者仍需验证严重度和误报。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI<span class="source-chip__links"><a href="https://x.com/AnthropicAI/status/2108302539498414208" target="_blank" rel="noopener" aria-label="@AnthropicAI 原文 1">1</a><a href="https://x.com/AnthropicAI/status/2108302543977906649" target="_blank" rel="noopener" aria-label="@AnthropicAI 原文 2">2</a><a href="https://x.com/AnthropicAI/status/2108302541385499103" target="_blank" rel="noopener" aria-label="@AnthropicAI 原文 3">3</a></span></span></div>

## 4/16 Anthropic与Google分别向美国Genesis科学计划投入1.5亿美元
Anthropic 承诺未来三年向美国联邦 Genesis Mission 投入 1.5 亿美元，为 NASA、NIH、NSF 等 15 个以上机构的数百个研究项目提供 Claude、Claude Code、API credits、培训与技术支持，重点涉及聚变能源和量子计算。Google DeepMind CEO Demis Hassabis 同日也表示将以 1.5 亿美元投资支持该计划。两家公司把前沿模型、科研 Agent 和工程服务直接接入国家级科学项目，资金之外的竞争重点将落在真实科研工作流、机构权限和实验工具连接能力。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AnthropicAI/status/2108226292235809081" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI</a><a class="source-chip" href="https://x.com/demishassabis/status/2108331042083872882" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@demishassabis</a></div>

## 5/16 Google AMIE首次在真实门诊前瞻性测试患者对话诊断
Google 与 Beth Israel Deaconess Medical Center 在《柳叶刀》主刊发表 AMIE 的真实临床研究。98 名急诊门诊患者在就诊前与研究型诊断聊天系统沟通，监督医生实时观察时没有一场对话因预设安全标准而被中断。临床医生称 AI 病史摘要在 75% 的病例中帮助其准备问诊，并在超过一半病例中影响处理思路；AMIE 的鉴别诊断与医生最终诊断有 90% 一致。这是 Google 首篇进入《柳叶刀》主刊的论文，但样本量有限，仍需更大规模试验验证安全性与普适性。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/sundarpichai/status/2108329198955958339" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@sundarpichai</a></div>

## 6/16 Claude Science补出首张完整全天空紫外图
约翰斯·霍普金斯大学天体物理学家 Brice Ménard 使用 Claude Science 整合 GALEX、Swift 与 FIMS/SPEAR 等历史数据，制作首张完整的全天空紫外图。GALEX 约 3.8 万次观测覆盖了约三分之二天空，但为保护探测器避开大量亮星与银河盘面；团队用统计推断补齐其余区域，同时为每个像素标注实测或预测状态及不确定度。Anthropic 称原本需要数周的校准、拼接与反复分析压缩到几天，成果主要服务教学，也展示 AI 处理科研中“重要但长期低优先级”整理任务的价值。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AnthropicAI/status/2108290395599667700" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI</a></div>

## 7/16 Claude Motion连接Luma与Runway形成跨工具视频工作流
Claude Motion 在 Team 与 Enterprise 计划进入 beta，可按提示编写代码，将文本、图表、形状和图片制成动画。Luma 与 Runway 随后接入：创作者可先在 Claude 中组织解释逻辑与运动，再把结果送入专业视频工具继续生成。Luma 通过 MCP connector 接收动画，用 Ray 和 Uni 模型改风格、扩展镜头，并重排为 9:16、1:1、4:3 或 21:9；Runway 则面向图表动画、客户演示和短解说继续生成视频与图片。中间产物由此可跨模型和应用延续，而非每次从提示重新开始。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/LumaLabsAI/status/2108275523755413970" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LumaLabsAI</a><a class="source-chip" href="https://x.com/runwayml/status/2108287937272266800" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml</a></div>

## 8/16 SemanTok让小型视频世界模型用更少Token保留全局语义
Stability AI 发布 SemanTok，一种面向自回归视频生成的粗到细 tokenizer。它把冻结的 DINO 特征送入编码器，并要求仅凭任意保留的 token 前缀重建语义特征，使早期 token 真正承载场景全局含义、后续 token 再补像素细节。论文称 2.01 亿参数的 SemanTok 自回归模型即可达到或超过体量大 3.4 倍的 VideoFlexTok，并在分布外类别与纯噪声解码时保持更强语义对齐。其效率来源不是只压缩视频，而是让短前缀更容易预测且更有意义。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/StabilityAI/status/2108278193316630711" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@StabilityAI</a></div>

## 9/16 Midjourney测试会“重想提示词”的图像Thinking Mode
Midjourney 在 Alpha 网站测试图像生成 Thinking Mode。官方称该模式会重新运行提示词并花额外时间分析怎样改进结果，目前观察到提示遵循、文字排版与整体一致性提升，并邀请用户用自己的图片测试。它把推理阶段从语言模型扩展到生成式视觉工作流：系统不只是增加采样步数，而是先重新解释任务再生成。公告尚未给出所用模型、额外耗时与成本、是否支持编辑任务，以及相对标准模式的量化评测，因此当前主要是公开实验而非稳定产品承诺。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/midjourney/status/2108307894886400511" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@midjourney</a></div>

## 10/16 Suno上线Albums把单曲生成扩展到完整发行单元
Suno 正式上线 Albums，用户可以把已生成歌曲组合为一张完整发行作品，设置封面、调整曲序并发布；已有播放列表也可直接转换为 Album，无需重新搭建。功能看似是内容组织更新，但它把 AI 音乐产品从“逐首生成”推进到作品策划和发行层，让同一创作身份下的曲目、视觉和顺序成为连续产物。公告未披露发行后的外部平台分发、版权元数据、协作者署名、收益结算与版本更新规则，这些将决定 Albums 能否从展示容器进一步成为正式发行工具。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/suno/status/2108232769411465561" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@suno</a></div>

## 11/16 Cursor让可视化结果在同一对话中继续追问和重绘
Cursor 为 `/visualize` 强调连续分析能力：第一张图生成后，用户可在同一聊天中追问后续问题，系统根据已有上下文生成新图，而不必重新描述数据和分析目标。功能把代码编辑器里的图表从一次性渲染变为可迭代分析对象，适合在探索过程中不断改变分组、指标或视角。当天公告只展示交互方式，尚未说明支持的数据规模、图表语法、结果可复现与导出方式，也未披露对敏感数据、执行代码和外部数据源的权限边界。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cursor_ai/status/2108289748628566496" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cursor_ai</a></div>

## 12/16 Databricks用开源Agent把企业数据建模变成规则驱动协作
Databricks 介绍开源 Vibe Data Modeling Agent，帮助团队构建、校验并持续演化企业专属数据模型。系统以约 250 条建模规则为约束，可从 40 个行业模型起步，再根据企业自己的术语、关系和业务规则迭代，同时保留数据建模人员与业务负责人参与。它试图解决通用行业模板无法表达企业真实语义的问题，并把自然语言协作引入 schema 设计。公开信息尚未说明规则冲突处理、迁移脚本生成、版本治理与自动修改生产模型的权限边界。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/databricks/status/2108262721930010921" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a></div>

## 13/16 Replit与Databricks把Vibe Coding接到受治理企业数据
Replit 新集成 Databricks，让团队用对话式开发构建业务应用，并直接部署到受治理的实时企业数据之上。官方提供面向 Databricks 管理员、Replit 组织管理员和最终用户的四步配置流程，称从零开始可在约 15 分钟内完成生产应用连接。集成的重点不是单纯连库，而是让快速生成的应用继承企业数据平台的访问控制与治理。实际使用仍需要核对凭证传递、Unity Catalog 权限映射、查询成本、审计日志以及 Agent 是否能修改数据或仅生成读取型应用。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/databricks/status/2108199503819878539" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a></div>

## 14/16 Cohere把第五代检索模型与新评测方法放进同一搜索栈
Cohere 在搜索与检索专题活动中集中介绍第五代模型 Embed 5、Parse 5、Compass Cloud beta，以及对传统 nDCG 指标的升级方法 RCP-nDCG。组合覆盖文档解析、向量表征、托管检索与评测，显示公司正把单个模型扩展为端到端企业搜索栈。官方活动页强调新一代 search models、Compass Cloud 和“升级 nDCG”，但尚未公开完整模型卡、RCP-nDCG 计算定义、训练数据与定价，因此目前能确认的是产品方向和测试阶段，性能结论仍应等待技术文档与独立评测。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/cohere/status/2108215310700462153" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@cohere</a></div>

## 15/16 15万名创意从业者调查显示ChatGPT图像使用领先Midjourney
Contra 发布 Creative Intelligence 2026 报告，调查规模约 15 万名创意从业者。Linus Ekenstam 摘要指出，ChatGPT 已成为受访者使用最多的图像生成工具，领先 Midjourney，说明通用对话入口正在吸收原本属于独立视觉工具的工作流。报告的价值在于覆盖真实创作者而非只比较模型基准，但当天推文没有给出抽样地区、职业构成、问卷定义和完整百分比；在这些方法细节公开前，该结果更适合视为创意工具采用趋势，而非整个市场份额的精确估算。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/LinusEkenstam/status/2108238247897821586" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LinusEkenstam</a></div>

## 16/16 François Chollet质疑AI进步能否长期追上超指数资本开支
François Chollet 根据 2023—2026 年多项 AI 进展指标与资本开支走势提出：能力进步大体呈指数增长，而行业资本投入略呈超指数增长，因此把行业视为“外部投资输入、AI 进展输出”的系统时，响应可能略低于线性。他认为外部资源不可能长期超指数注入，若要维持指数式进步，行业必须同步形成指数增长的利润并闭合资源循环；他还称训练与推理开支比例约稳定在 60% 与 40%，剔除推理不会改变趋势拟合。该判断是个人分析，不是经过审计的行业财务结论。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet<span class="source-chip__links"><a href="https://x.com/fchollet/status/2108310747080208781" target="_blank" rel="noopener" aria-label="@fchollet 原文 1">1</a><a href="https://x.com/fchollet/status/2108314028477215184" target="_blank" rel="noopener" aria-label="@fchollet 原文 2">2</a></span></span></div>

---

## Deep Dive 附录

### Gemini agent：从企业聊天助手变成带身份、记忆和预算的数字同事
Gemini agent 把统一入口、持续执行和企业治理放在同一层。它既可作为个人助手，也能以团队项目经理、财务分析员等角色长期存在；coworker agent 拥有自己的 `@agents.company.com` 邮箱、存储和审计身份，只能访问团队显式共享的上下文。系统会动态创建临时子 Agent 并行或串行工作数小时乃至数天，还可在 Gemini、Claude 与未来第三方模型之间路由。Google 将 Agent Sandbox、Agent Gateway、细粒度角色权限、实时日志与项目级支出上限作为默认控制面；这表明企业 Agent 的竞争正在从模型回答质量转向身份、上下文、跨系统执行和可治理成本。
[查看原文](https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026)

### GPT-6.1 Sol Ultrafast：用高溢价换取Agent循环中的低延迟
Ultrafast 不是新模型，而是 GPT-6.1 Sol 的最高速服务档位。开发者在 Responses API 中设置 `service_tier: "ultrafast"` 即可使用；OpenAI 尤其推荐 WebSocket，因为 Agent 连续调用工具时，连接建立和网络往返会侵蚀模型生成速度带来的收益。官方给出的 API 价格是每百万输入 12 美元、输出 60 美元，相比标准 Sol 的 2/10 美元有明显溢价，因此目标并非批量离线任务，而是故障处理、浏览器或应用操作、实时交互等“每秒都有业务价值”的流程。它拥有独立速率限制，并支持美国、欧盟数据驻留与全球处理。
[查看原文](https://developers.openai.com/api/docs/guides/ultrafast-mode)

### Anthropic Cyber Mission：漏洞发现变快后，验证和修复成为新瓶颈
Anthropic 把关键设施防御与开源扫描放在同一长期计划中。OSS Scanner 由最强模型周期性扫描加入项目，生成漏洞复现、解释、引入位置和候选补丁；过去半年模型发现超过 2.9 万个候选漏洞，人工只审查约 6000 个，说明稀缺资源已从发现转到分流与验证。早期抽检 97 个高危或严重发现时，85 个达到披露标准，剩余 12 个中只有 1 个无效，但正式报告没有人工审核，严重度仍可能被夸大。Critical Infrastructure Defense Program 则与多家 OT 厂商和安全公司合作，在无法随意停机打补丁的电网、水务、工厂和运输系统中寻找可行防御路径。
[查看原文](https://www.anthropic.com/news/anthropic-cyber-mission)

### Genesis Mission：前沿模型公司开始直接进入国家科研基础设施
Anthropic 的 1.5 亿美元承诺覆盖三年，将向 NASA、NIH、NSF 等 15 个以上机构的数百个项目提供 Claude、Claude Code、API credits、培训和工程支持，合作重点包括聚变能源与量子计算。它延续了 Anthropic 与能源部及国家实验室的既有合作，并与 Claude Science、学术科研席位、AI for Science credits 和让 Agent 安全操作实验设备的 Model Hardware Standard 相连。Google DeepMind 同日也披露 1.5 亿美元支持，意味着竞争不只在模型性能，还会延伸到科研数据权限、实验工具接口、机构采购与成果可复核性。
[查看原文](https://www.anthropic.com/news/genesis-mission-commitment)

### AMIE真实门诊研究：重点从诊断分数转向医生如何使用AI摘要
98 名患者在真实急诊门诊就诊前与 AMIE 对话，监督医生实时监看，按预设安全标准没有对话需要被叫停。更值得关注的不是单一诊断得分，而是信息如何进入临床流程：医生认为摘要在 75% 病例中帮助准备问诊，在超过一半病例中改变了处理方式；AMIE 的鉴别诊断与最终诊断有 90% 一致。研究仍是小样本且有实时监督，不能证明可无监督规模化部署，但它把患者端聊天系统的评估从实验室比较，推进到病史收集、医生准备与临床决策影响这些真实工作指标。
[查看原文](https://blog.google/innovation-and-ai/technology/health/amie-clinical-study-lancet/)

### Claude Science紫外天图：AI先攻克科学积压任务，而非替代核心发现
GALEX 在十年任务中完成约 3.8 万次观测，仍因亮星保护和任务边界留下约三分之一天空空白。Claude Science 协助寻找并整合 GALEX、Swift、FIMS/SPEAR 等数据，完成像素级校准、重复分析和统计推断；生成的全天图同时保存远紫外、近紫外、实测或预测标记及不确定度。Anthropic 把它定位为教学资源，而不是新的天体物理发现。案例的重要性在于展示当前科研 Agent 的合适边界：将原本需要数周、因优先级不足而长期搁置的数据整理工程压缩到几天，同时保留来源和不确定性供人类检查。
[查看原文](https://www.anthropic.com/research/the-missing-map-of-the-sky)

### SemanTok：视频生成效率取决于Token是否容易预测
传统粗到细视频 tokenizer 希望早期 token 表达场景语义、后期 token 补充细节，但早期隐藏状态的对齐目标可能被解码器从带噪输入中“绕过”。SemanTok 把冻结 DINO 特征注入编码器，并要求仅用每个 token 前缀重建语义，从结构上迫使短前缀携带可用的全局信息。论文报告 2.01 亿参数模型达到或超过 3.4 倍规模的 VideoFlexTok，且在分布外类别和纯噪声输入下保持语义对齐。它提示视频世界模型的压缩问题不只是保留多少像素，而是让下一批 token 对自回归模型更可预测。
[查看原文](https://stability.ai/research/semantok-predictable-semantic-tokens-for-efficient-autoregressive-video-generation)

### Claude Motion与Luma：创作Agent开始交换可继续编辑的中间产物
Claude Motion 用代码描述文本、图表、形状和图片的运动，Luma 再通过 MCP connector 接收这一结构，在保留运动关系的同时改风格、扩展镜头并输出多种比例。Luma 还把 Ray 与 Uni 视频模型接入最终生成；Runway 同日提供类似的后续视频与图片加工路径。关键变化不是多一个导出按钮，而是不同 Agent 和生成模型开始围绕可继续编辑的中间产物协作：语言模型负责叙事和结构，专业视频模型负责视觉质量、镜头与交付格式，从而避免每次换工具都从一段扁平视频或新提示重新开始。
[查看原文](https://lumalabs.ai/news/Luma-Claude-Motion-Launch-Partnership)
