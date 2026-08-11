---
layout: daily
title: "AI Frontier Daily | 2026.08.11"
headline: "Claude 将黎曼假设相关零点比例下界从 41.6% 推至 67.2%"
date: 2026-08-11 09:07:00 +0800
permalink: /ai-daily/2026/08/11/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Anthropic 披露，一个未发布研究版 Claude 在尝试黎曼假设时没有解决原问题，却结合 Bombieri 与 Baluyot、Goldston 等人的既有结果，把已知落在临界线上的黎曼 ζ 函数零点比例下界由 41.6% 提高到 67.2%。两名 Anthropic 数学家审阅了论文，外部专家 Brian Conrey 与 Dan Goldston 也做了快速检查；Claude 还给出可由 Lean 工具链验证的形式化证明。Anthropic 明确表示，这套技术预计不能直接证明黎曼假设。"
summary: "Anthropic 披露，一个未发布研究版 Claude 在尝试黎曼假设时没有解决原问题，却结合 Bombieri 与 Baluyot、Goldston 等人的既有结果，把已知落在临界线上的黎曼 ζ 函数零点比例下界由 41.6% 提高到 67.2%。两名 Anthropic 数学家审阅了论文，外部专家 Brian Conrey 与 Dan Goldston 也做了快速检查；Claude 还给出可由 Lean 工具链验证的形式化证明。Anthropic 明确表示，这套技术预计不能直接证明黎曼假设。"
issue_count: 15
deep_dive_count: 8
reading_time: 18
cover: "https://cdn.sanity.io/images/4zrzovbb/website/ca772f1b34e5b58e38694538f017d63f5dd196d9-1200x630.jpg"
signals: "AnthropicAI · OpenAI · gdb · AIatMeta · NVIDIAAI · Alibaba_Qwen · SakanaAILabs · hardmaru"
header-img: img/dark_yellow_400.png
---


## 1/15 Claude 将黎曼假设相关零点比例下界从 41.6% 推至 67.2%
Anthropic 披露，一个未发布研究版 Claude 在尝试黎曼假设时没有解决原问题，却结合 Bombieri 与 Baluyot、Goldston 等人的既有结果，把已知落在临界线上的黎曼 ζ 函数零点比例下界由 41.6% 提高到 67.2%。两名 Anthropic 数学家审阅了论文，外部专家 Brian Conrey 与 Dan Goldston 也做了快速检查；Claude 还给出可由 Lean 工具链验证的形式化证明。Anthropic 明确表示，这套技术预计不能直接证明黎曼假设。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AnthropicAI/status/2086867246073401655" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AnthropicAI</a></div>

## 2/15 OpenAI 扩展 Daybreak 并推出 GPT-5.6-Cyber
OpenAI 为网络安全工作扩展 Daybreak：Blue 路径面向大多数防守团队，提供包括 GPT-5.6 Sol 在内的前沿模型，用于漏洞发现、安全代码审查、恶意软件分析、事件响应和补丁验证；Red 路径面向获批的资深防守者，提供专门训练的 GPT-5.6-Cyber，用于授权漏洞研究、利用验证和安全测试。公司称该模型已参与真实漏洞研究，并发现 Chrome V8 等流行开源软件中的未知问题；高风险能力仍受身份验证、范围控制、日志和监测约束。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@OpenAI<span class="source-chip__links"><a href="https://x.com/OpenAI/status/2086864365379010729" target="_blank" rel="noopener" aria-label="@OpenAI 原文 1">1</a><a href="https://x.com/OpenAI/status/2086864372500942906" target="_blank" rel="noopener" aria-label="@OpenAI 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/gdb/status/2086866967479341305" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a></div>

## 3/15 Meta 发布可在消费级设备运行的 Muse Glimmer 30B
Meta Superintelligence Labs 发布 Muse Glimmer：一款面向本地、常驻代理工作流的 300 亿参数开放权重模型，采用 Apache 2.0 许可。模型支持长程代理任务、工具调用、失败恢复、图文输入与百余种语言；约 4-bit 量化把语言模型压到 20GB 以下，并用基于 DFlash 的轻量 drafter 做推测解码。官方演示中，模型通过网络工具发现 Home Assistant、查询设备、生成仪表板并启动本地服务；NVIDIA 称其上下文超过 120K，可在单 GPU 上达到最高约 20K tokens/s。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AIatMeta<span class="source-chip__links"><a href="https://x.com/AIatMeta/status/2086757844544811485" target="_blank" rel="noopener" aria-label="@AIatMeta 原文 1">1</a><a href="https://x.com/AIatMeta/status/2086757846847263014" target="_blank" rel="noopener" aria-label="@AIatMeta 原文 2">2</a><a href="https://x.com/AIatMeta/status/2086757849217257760" target="_blank" rel="noopener" aria-label="@AIatMeta 原文 3">3</a></span></span><a class="source-chip" href="https://x.com/NVIDIAAI/status/2086807146143076783" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI</a></div>

## 4/15 韩国 Motif 3 以 314B MoE 和 MIT 许可开放权重
Motif Technologies 正式发布 Motif 3 及其 Base、NVFP4 版本。模型卡显示，它是从头设计的 3140 亿参数稀疏 MoE，每 token 激活约 132 亿参数，含 384 个路由专家、256K 原生上下文和自推测解码 MTP 头；预训练使用约 12.5 万亿 tokens，覆盖英语、韩语、代码、数学、法律与金融。权重无需申请即可下载并采用 MIT 许可。官方报告的 SWE-Bench Verified 为 76.2、Terminal-Bench 2.1 为 74.9，但这些横向结果仍需独立复现。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@NVIDIAAI<span class="source-chip__links"><a href="https://x.com/NVIDIAAI/status/2086989686648795282" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 1">1</a><a href="https://x.com/NVIDIAAI/status/2086992225993683305" target="_blank" rel="noopener" aria-label="@NVIDIAAI 原文 2">2</a></span></span></div>

## 5/15 Qwen-MM-Plugins 把多模态能力封装为 skills 与 MCP 工具
阿里 Qwen 开源 Qwen-MM-Plugins，让现有 agent harness 按需增加图像、视频、文档、音频、3D 与 CAD 能力。每项能力由告知模型工具存在的 skill 与可选 MCP server 组成，覆盖 OCR、grounding、分割、ASR、长视频记忆、视频编辑与生成、Blender、FreeCAD 和教学视频。安装器已列出 Claude Code、Codex、OpenClaw、Qwen Code、Qoder 与 Gemini CLI 等入口；原生读取无需 API key，部分云端能力需要 DashScope 或搜索服务密钥，项目采用 Apache 2.0。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/Alibaba_Qwen/status/2086664887560970531" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Alibaba_Qwen</a></div>

## 6/15 Sakana AI 将递归自我改进研究扩展到 Physical AI
Sakana AI 宣布扩展东京 RSI Lab，把递归自我改进从语言模型研发推进到 Physical AI。团队计划训练能够从真实交互数据学习物理世界动态的 world models，并让代理系统在模拟、规划和行动能力上形成自我改进闭环。公开职位覆盖全职、访问研究员和实习生；现阶段是研究组织与人才扩张，而不是已交付的机器人产品。该方向延续 Sakana 以 AI Scientist 自动化研究生命周期的路线，并把验证、可追踪性和现实世界安全带入更高风险环境。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/SakanaAILabs/status/2086829673699316179" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs</a><a class="source-chip" href="https://x.com/hardmaru/status/2086942706249675208" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a></div>

## 7/15 OpenAI 承诺得州 AI 基础设施自行承担成本并披露资源使用
OpenAI 致信得州州长 Greg Abbott，提出新数据中心项目不把项目驱动的基础设施成本转嫁给居民和小企业，并与公用事业、ERCOT 及合作方支持新增发电和电网韧性。水资源方面，公司承诺降低用量并优先采用闭环冷却；社区层面将处理噪声、灯光、交通、土地与应急影响。信中还承诺及时披露电力和用水、基础设施投资、公共激励与社区保护信息。文件给出治理原则，但没有公布单个项目的容量、耗水量或投资金额。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/gdb/status/2086868041451901009" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a></div>

## 8/15 Databricks 用 Lakebase Postgres 承担长任务代理编排
Databricks 展示 CLA 的生产级文档处理架构：用 Lakebase Postgres 的两张核心表保存任务与每次执行尝试，配合 `FOR UPDATE SKIP LOCKED`、租约回收、并发/TPM 双重限流和幂等 webhook，形成可并发、可恢复的任务队列。Databricks Apps、Lakeflow Jobs、MLflow 与 Unity Catalog Volumes 分别承载界面、执行、追踪和文件，LISTEN/NOTIFY 加 SSE 提供实时看板。该案例把抽取耗时从小时降到分钟，并省去 Kafka、Redis、Airflow 或 Temporal 等外部组件。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/databricks/status/2086889093825212567" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a></div>

## 9/15 Stagehand v4 与 Managed Deep Agents 组合浏览器代理工作流
LangChain 团队发布教程，把 Browserbase 的 Stagehand v4 接入 Managed Deep Agents，面向生产级网页浏览代理。Stagehand 提供自然语言驱动的 act、extract、observe 与多步 agent 能力，同时保留确定性浏览器操作；Deep Agents 负责长任务规划与验证循环。相关讨论把浏览器定位为自我改进代理的默认验证工具：代理先生成或修改结果，再通过真实网页交互检查。当天信息主要是 SDK 与教程发布，尚未给出统一成功率、延迟或成本评测。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17<span class="source-chip__links"><a href="https://x.com/hwchase17/status/2086856570705678723" target="_blank" rel="noopener" aria-label="@hwchase17 原文 1">1</a><a href="https://x.com/hwchase17/status/2086856589735268727" target="_blank" rel="noopener" aria-label="@hwchase17 原文 2">2</a><a href="https://x.com/hwchase17/status/2086856606265028742" target="_blank" rel="noopener" aria-label="@hwchase17 原文 3">3</a></span></span></div>

## 10/15 Replit 提出由内部代理驱动的“自驾驶公司”
Replit CEO Amjad Masad 在 Platformer 访谈中描述“self-driving company”设想：内部 bot 充当组织信息中枢，工程师借助 agents 提高交付量，员工逐步减少直接操作应用，由 agents 代表人使用现有软件。Replit 将这一方向视为企业从问答助手走向流程执行的下一步；它强调持续上下文、跨系统行动和组织级自动化。当前公开材料以管理愿景和内部实践描述为主，没有披露可复核的公司级产能、人员结构或财务对照数据。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/Replit/status/2086890325608419625" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Replit</a></div>

## 11/15 Deep Agents 将基础提示与工具信息压缩 65%
LangChain 团队称近期把 Deep Agents harness 的基础提示连同工具信息缩短约 65%，并在其比较中成为成本第二低的 harness。调整反映代理运行成本不仅取决于底层模型价格，也受每步重复注入的 system prompt、工具 schema 与历史上下文影响；对多步浏览、代码和研究任务，固定开销会随步骤数累计。团队当天没有公开完整测试集、模型版本和质量等价性数据，因此“第二便宜”应视为其内部比较结果，而非跨框架通用排名。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17<span class="source-chip__links"><a href="https://x.com/hwchase17/status/2086998893779447943" target="_blank" rel="noopener" aria-label="@hwchase17 原文 1">1</a><a href="https://x.com/hwchase17/status/2086921857006268656" target="_blank" rel="noopener" aria-label="@hwchase17 原文 2">2</a></span></span></div>

## 12/15 Runway 接入 P-Image-Ideogram 并提供四档生成质量
Runway 上线 P-Image-Ideogram，称从提示词到图像最快约 0.6 秒，并提供四种质量模式，让用户在速度与细节之间切换。该模型面向带文字和版式要求的视觉资产，可用于海报、包装、广告与社交图形；Runway 的接入把它纳入现有创作工作流。公开推文没有给出各档分辨率、单图价格、硬件条件或与其他模型的同提示评测，因此目前可确认的是产品可用性与厂商标注的最低延迟。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/runwayml/status/2086921725044817922" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml</a></div>

## 13/15 Microsoft 称 MAI-Image-2.6 升至 Arena 文生图第二名
Microsoft AI CEO Mustafa Suleyman 表示，MAI-Image-2.6 已在 Arena 文生图榜单升至第二，排名高于 Nano Banana、Meta 与 Grok 的参评模型；Satya Nadella 随后转发了这一进展。该模型目前可在 Arena 试用，说明微软自研图像路线正在快速迭代。推文未附具体榜单快照、投票样本量、置信区间、版本对应关系或 API 上线安排，因此排名应按发布时点的众包偏好结果理解，不能直接等同于所有画质、编辑或商业场景的总体性能。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/mustafasuleyman/status/2086944832258236781" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@mustafasuleyman</a><a class="source-chip" href="https://x.com/satyanadella/status/2086951085118496977" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@satyanadella</a></div>

## 14/15 Seedance 2.5 演示强化短剧结构与镜面反射表现
Pika 分享 Seedance 2.5 生成的短剧片段，强调模型对闪回、情绪和音乐结构的组织；Ethan Mollick 用同一提示测试后，特别指出场景中的镜面反射表现，并将整体风格类比为早期太空旅游畅想画册。两则内容都属于作品演示，未包含时长上限、分辨率、生成成本、失败样本或对照 benchmark。可以确认的是，新版本的产品表达从单镜头质感扩展到短篇叙事与复杂光学细节，但稳定性仍需更系统评测。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/pika_labs/status/2086879861378019600" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@pika_labs</a><a class="source-chip" href="https://x.com/emollick/status/2086801016817697025" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a></div>

## 15/15 Higgsfield 公开 AI 长片项目的生成资产与制作过程
Linus Ekenstam 在纽约看片后称，Higgsfield 的《Cully Hill Boys》是一部使用已授权名人肖像的全 AI 生成长片，并把 473,600 项制作资产公开供查看和学习。项目页面目前可公开浏览，延续 Higgsfield 让用户查看 prompts、assets 与生成过程的产品方向。关于“首部”全 AI 长片、授权范围和资产总量的说法主要来自现场观察者，项目页未提供独立审计或完整合同，因此更适合作为生成式影视生产透明度案例，而非已被行业统一认证的纪录。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LinusEkenstam<span class="source-chip__links"><a href="https://x.com/LinusEkenstam/status/2086951066336448938" target="_blank" rel="noopener" aria-label="@LinusEkenstam 原文 1">1</a><a href="https://x.com/LinusEkenstam/status/2086951087119249667" target="_blank" rel="noopener" aria-label="@LinusEkenstam 原文 2">2</a></span></span></div>

---

## Deep Dive 附录

### Claude 的 31M-token 数学研究循环
Anthropic 记录显示，Claude 在两次 Claude Code 会话中输出约 3,100 万 tokens。第一轮生成 650 个想法均未奏效；第二轮用约一天半协调 60 个 subagents，执行 2,400 次 shell 命令并编写数百个 Python 脚本。找到结果后，代理群对已知 ζ 零点做数千次数值检查、互相审稿、下载 54 篇 arXiv 论文查重，并从头独立重证。两名内部数学家随后审阅，Claude 另行完成通过 comparator 的 Lean 形式化。方法把 Weil 诱导的二次型、临界线上下零点对应的正负定子空间与一、二阶矩信息结合；Anthropic 强调它依赖数十年既有数学成果，且预计不能直接导向黎曼假设证明。
[查看原文](https://www.anthropic.com/research/riemann-zeta)

### GPT-5.6 的网络安全能力与分层访问
OpenAI 的 GPT-5.6 技术页面报告，Sol 在 ExploitBench 上为 73.5%，高于 GPT-5.5 的 47.9%；ExploitGym 两小时上限下峰值通过率由 15.1% 升至 24.9%，六小时为 33.7%；SEC-Bench Pro 为 71.2%，对比 45.8%。Daybreak 将常规防守、获验证的高级防守与专门授权测试分层：Blue 面向广泛防守工作，Red 与 GPT-5.6-Cyber 面向更高风险、已授权的漏洞研究和利用验证。能力提升同时伴随身份验证、硬件 passkey、范围限制、日志、实时监测与账户级执行；这些 benchmark 在降低防护的评测环境中获得，不能直接推导现实攻击成功率。
[查看原文](https://openai.com/index/gpt-5-6/)
[查看原文](https://openai.com/daybreak/)

### Muse Glimmer：把长程代理压进 24–32GB 内存预算
Muse Glimmer 的训练分三段：以 Muse Spark 输出做 logit distillation 的预训练；加入更长上下文、代理密集数据和推理轨迹的中期训练；再用监督微调、on-policy distillation 与强化学习覆盖通用、推理、代码和代理任务。完整 30B 权重需 55GB 以上，Meta 通过约 4-bit 量化把语言模型压到 20GB 以下，为 KV cache、图像 perception encoder 和 DFlash drafter 留出空间。模型针对端到端任务、精确工具 schema、故障恢复、多模态输入、不同推理强度和百余语言训练，并计划适配 llama.cpp、MLX、ExecuTorch、vLLM 与 SGLang。开放权重不等于能力已独立验证，实际速度仍取决于量化版本、设备和上下文长度。
[查看原文](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model)

### Motif 3：稀疏专家、长上下文与韩国主权模型路线
Motif 3 采用 53 层 decoder-only MoE：前两层为 dense，后 51 层使用 384 个路由专家，每 token 选 8 个并加一个共享专家。Grouped Differential Latent Attention 压缩 KV 表示，Expert-Specific PolyNorm 让各专家学习独立多项式归一化，modified mHC 在四条残差流间混合，单层 MTP 同时作为训练目标和自推测解码器。模型在约 12.5T tokens 上训练，原生上下文 262,144；官方称在 τ³-Banking、ITBench 与 Terminal-Bench 2.1 等代理或终端任务上具有竞争力。权重以 MIT 许可开放并提供 NVFP4 版本，但部署说明以 H200/B200 为主，所谓 13.2B 激活参数并不意味着可在普通消费级 GPU 运行。
[查看原文](https://huggingface.co/Motif-Technologies/Motif-3)
[查看原文](https://arxiv.org/abs/2608.09119)

### Qwen-MM-Plugins：用 skill 发现、用 MCP 执行
Qwen 把多模态能力拆为可独立安装的模块：core 负责动态图像/视频/文档/3D 读取、OCR、grounding、分割、ASR 与搜索；video-memory 建立长视频层级图记忆；omni-av 做带时间戳和说话人标签的音视频理解；video-edit 负责编辑与生成；Blender 与 FreeCAD 分别暴露 22 和 14 个薄客户端工具。每个模块由 skill 告诉模型何时可用，再按需启动 MCP server；依赖通过 `uvx` 首次安装，配置由多个终端和 GUI harness 共用。架构降低了默认工具注入量，但仍需要针对外部 API key、系统程序、文件权限与可逆操作做独立安全控制。
[查看原文](https://github.com/QwenLM/Qwen-MM-Plugins)

### Sakana RSI Lab：从自动研究走向物理世界闭环
Sakana 将 RSI Lab 定义为用 AI 重写 AI 研发过程的专门团队，目标从静态、人工主导的 R&D 转向能推动自身进步的 autonomous intelligence engines。新一阶段覆盖前沿语言模型、从真实交互数据学习物理动态的 world models，以及连接两者的递归改进循环；思想脉络追溯到 1990 年代预测环境模型与 David Ha、Jürgen Schmidhuber 的 World Models。与纯软件代理相比，Physical AI 的错误会进入真实环境，因此数据采集、模拟到现实迁移、规划验证、人工审批、可复现性和安全边界将成为核心约束。当前公告是研究与招聘计划，尚未发布具体训练系统或性能结果。
[查看原文](https://sakana.ai/careers/member-of-technical-staff-rsi-lab/)

### Lakebase Postgres：两张表如何成为代理任务队列
CLA 的实现用 `tasks` 保存逻辑任务、状态、租约、优先级与最终结果，用 `task_attempts` 保存每次执行的 Job run、MLflow trace 和成本。并发出队依赖 `FOR UPDATE SKIP LOCKED`；worker 中断后由过期租约 sweeper 重新入队；限流同时支持最大并发数、预计 TPM 或两者取更严者；重复 webhook 对终态任务成为 no-op，避免重复计费。状态变化通过 Postgres LISTEN/NOTIFY 推送到 SSE，看板同时展示 tokens、LLM/compute 成本、中位延迟与置信度，并保留 10 秒轮询兜底。这种设计适合相互独立的长任务，不等于 Postgres 可替代所有复杂事件流、工作流 DAG 或跨区域消息系统。
[查看原文](https://www.databricks.com/blog/simplify-ai-agent-orchestration-lakebase-postgres)

### OpenAI 得州信件把数据中心外部性写成五项承诺
OpenAI 的两页信件提出：项目新增的电力与基础设施成本由项目承担；与 ERCOT、公用事业和合作方支持新增发电及系统压力期的可靠运行；减少耗水并优先使用闭环冷却；在规划期处理噪声、灯光、交通、土地、退界和应急响应；向州与社区披露电力、用水、投资、公共激励和保护措施。它回应了 AI 数据中心不同于传统轻工业的地方经济问题——建设期投入高，但运营岗位较少，社区收益与资源负担可能不对称。承诺目前属于政策框架，后续仍需项目级容量、费率、用水、就业和审计数据检验执行效果。
[查看原文](https://openai.com/index/responsible-ai-infrastructure-texas/)
[查看原文](https://cdn.openai.com/pdf/oai_abbot-texas-letter_8-7-26.pdf)
