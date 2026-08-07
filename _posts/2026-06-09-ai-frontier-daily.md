---
layout: daily
title: "AI Frontier Daily | 2026.06.09"
headline: "OpenAI 公布第三阶段计划：自动化 AI 研究、经济加速与个人 AGI"
date: 2026-06-09 09:07:00 +0800
permalink: /ai-daily/2026/06/09/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Sam Altman 和 Greg Brockman 同步转发 OpenAI 的新计划文章。OpenAI 把当前阶段定义为从研究组织、产品公司进入“第三阶段”：让先进 AI 变得丰富、便宜、安全、可用，并能被个人和组织实际使用。文章列出三项目标：构建自动化 AI researcher、通过科学进展和生产率提升加速经济、给每个人提供 personal AGI。文中还明确提出，到 2028 年 3 月，OpenAI 内部可能有相当一部分研究由 AI 系统与研究员共同完成；同时强调人类仍负责目标、取舍、价值判断和公共协调。"
summary: "Sam Altman 和 Greg Brockman 同步转发 OpenAI 的新计划文章。OpenAI 把当前阶段定义为从研究组织、产品公司进入“第三阶段”：让先进 AI 变得丰富、便宜、安全、可用，并能被个人和组织实际使用。文章列出三项目标：构建自动化 AI researcher、通过科学进展和生产率提升加速经济、给每个人提供 personal AGI。文中还明确提出，到 2028 年 3 月，OpenAI 内部可能有相当一部分研究由 AI 系统与研究员共同完成；同时强调人类仍负责目标、取舍、价值判断和公共协调。"
issue_count: 14
deep_dive_count: 7
reading_time: 20
cover: "https://cognition.ai/images/frontier-code/evals-blog-1.jpg"
signals: "sama · gdb · OpenAI · AnthropicAI · Kimi_Moonshot · perplexity_ai · swyx · GaryMarcus"
header-img: img/dark_yellow_400.png
---


## 1/14 OpenAI 公布第三阶段计划：自动化 AI 研究、经济加速与个人 AGI
Sam Altman 和 Greg Brockman 同步转发 OpenAI 的新计划文章。OpenAI 把当前阶段定义为从研究组织、产品公司进入“第三阶段”：让先进 AI 变得丰富、便宜、安全、可用，并能被个人和组织实际使用。文章列出三项目标：构建自动化 AI researcher、通过科学进展和生产率提升加速经济、给每个人提供 personal AGI。文中还明确提出，到 2028 年 3 月，OpenAI 内部可能有相当一部分研究由 AI 系统与研究员共同完成；同时强调人类仍负责目标、取舍、价值判断和公共协调。
- [查看 @sama 原始推文](https://x.com/sama/status/2064088940932641225)
- [查看 @gdb 原始推文](https://x.com/gdb/status/2064093657888960998)
- [查看 @OpenAI 原始推文](https://x.com/OpenAI/status/2064119987573596223)

## 2/14 Anthropic 指出生物数据库是科学 agent 的关键瓶颈
Anthropic 发布 Science Blog，讨论为什么 AI 在 coding 上进步快于 biology。文章以 NCBI Virus 数据检索为例，说明生物数据基础设施充满浏览器界面、隐性专家规则、分散 API 和不一致元数据，agent 即使理解任务也容易取错或漏取数据。VirBench 覆盖 40 种病原体的 120 个病毒序列查询，强模型在无工具层时表现从 16.9% 到 91.3% 不等；加入 gget virus 这种确定性检索层后，所有 agent 准确率超过 90%，GPT-5.5 达到 99.7%。核心信号是科学 agent 的瓶颈不只是模型推理，而是可验证、可复现、机器可调用的数据层。
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2064054837294354677)

## 3/14 Kimi Work 发布，把本地文件、浏览器和 300-agent swarm 放到桌面
Moonshot AI 发布 Kimi Work，定位为知识工作者的本地桌面 AI agent。官方推文强调四个能力：本机最多 300 个 AI agent 并行的 native agent swarm；通过 WebBridge 驱动浏览器搜索、滚动、点击、输入并完成网页任务；面向金融场景内置 Yahoo Finance、World Bank、Binance 等数据工具；用记忆系统记录偏好、决策和上下文。产品页还显示 Kimi Work 支持定时任务、读取本地文件夹、运行 Python/Shell、生成 PPT、Word、PDF 和 Excel。相比云端 sandbox agent，这条路线把 logged-in browser、本地文件和长期自动化变成核心卖点。
- [查看 @Kimi_Moonshot 原始推文](https://x.com/Kimi_Moonshot/status/2063990409903112344)
- [查看 @Kimi_Moonshot 原始推文](https://x.com/Kimi_Moonshot/status/2063990413950861645)
- [查看 @Kimi_Moonshot 原始推文](https://x.com/Kimi_Moonshot/status/2063990421655822510)
- [查看 @Kimi_Moonshot 原始推文](https://x.com/Kimi_Moonshot/status/2063990424172376227)

## 4/14 Perplexity 与 Harvard 研究称 Computer agent 大幅降低知识工作时间和成本
Perplexity 发布与 Harvard 合作的 agent 研究，比较 Search 与 Computer 在知识工作任务中的使用。推文称，三个月数据里，使用 Computer 的 worker 相比单独 Search 完成任务时间减少 87%、成本降低 94%，满意度更高。研究使用 10,000 组同一用户近似查询的 matched pairs，并用美国 BLS 工资估算人类时间成本。Perplexity 还披露 Computer session 平均包含约 26 分钟机器工作，外部 connector 调用更常见，Computer query 累计量到期末达到首周的 84 倍。它把 agent 的经济性描述为固定委托成本更高、边际执行成本更低。
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2064023455453110286)
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2064023468530979086)
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2064023488319676454)
- [查看 @perplexity_ai 原始推文](https://x.com/perplexity_ai/status/2064023572906205642)

## 5/14 FrontierCode 把 coding benchmark 从“能跑测试”推进到“能否合并”
swyx 转发 Cognition 的 FrontierCode，称 METR 发现超过一半 SWE-Bench 结果是不可合并代码，FrontierCode 则用 1000+ 小时 maintainer-validated 软件工程工作和 3000+ rubrics 衡量真实代码质量。Cognition 公告显示，FrontierCode 由 20+ 开源 maintainer 参与构建，每个任务超过 40 小时，评估 correctness、test quality、scope、style、regression safety 和 codebase conventions。Diamond 子集仍未饱和：Claude Opus 4.8 得分 13.4%，GPT-5.5 为 6.3%，Gemini 3.1 Pro 为 4.7%。这说明 AI coding 的前沿评价正在从 pass rate 转向 reviewability 与 mergeability。
- [查看 @swyx 原始推文](https://x.com/swyx/status/2064081945567580323)
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2064127368999137697)

## 6/14 NVIDIA 在 Blackwell 上用 NVFP4 训练 Llama，报告 1.31-1.73 倍吞吐提升
NVIDIAAI 发布 Blackwell NVFP4 训练结果，称在 NVIDIA Blackwell 平台上用 NVFP4 precision 训练 Llama 3 8B 和 Llama 3.1 405B，相比同硬件、同并行和同 batch size 的 FP8 baseline 快 1.31 到 1.73 倍，并保持零准确率损失。配套技术博客给出 JAX 与 MaxText recipe，覆盖 GB200 Grace Blackwell 和 GB300 Grace Blackwell Ultra。过去低精度格式更多被放在 inference 成本优化语境中，这次重点是 pretraining throughput，说明硬件厂商正在把 FP4 训练 recipe 产品化，让 frontier-scale 训练的单位计算效率继续提升。
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2064105188219134041)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2064105195768811869)

## 7/14 Stanford Intelligence per Watt 支撑本地小模型与 multi-model 路线
Clement Delangue 转发 Stanford 相关研究，称 local models 对真实世界 chat 和 reasoning query 的准确率已从 2023 年的 23.2% 提升到 71.3%，且成本和能耗显著低于 frontier API。他据此强调未来是 multi-model workload：大多数任务用本地、开源、小模型和低成本模型，只有无替代选项时调用 frontier API。论文页面显示研究评估 20+ 个本地模型、8 种加速器和 100 万条真实单轮查询，并提出 intelligence per watt 指标。今天 Kimi Work、Kimi Code、本地 llamacpp 和 Hugging Face 转发也共同指向同一趋势：模型选择会变成 workload routing 和能效架构问题。
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2064039913843286318)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2064029354863022156)
- [查看 @huggingface 原始推文](https://x.com/huggingface/status/2064042190964154400)

## 8/14 AMD 承诺 5 年向英国 AI 投入最高 20 亿英镑
Lisa Su 在 London Tech Week 表示，AMD 将在未来 5 年向英国投入最高 20 亿英镑，用于加速下一代 AI 创新。她的推文提到英国政府和科技生态领导者，并把投资与 high-performance computing、AI research 和下一代基础设施联系起来。公开报道补充称，该计划包括与 Cambridge、Imperial College、Oriole Networks 等合作，支持主权 AI、科研、医疗、公共部门创新和 AI-driven discovery。对英国来说，这属于 London Tech Week 开场阶段的一组 compute 相关投资承诺；对 AMD 来说，则是继续把 AI GPU、CPU、ROCm 和科研合作绑定到区域性 AI 基础设施。
- [查看 @LisaSu 原始推文](https://x.com/LisaSu/status/2064095002632892873)

## 9/14 Runway Aleph 2.0 推出视频重构比例工具，生成式编辑继续产品化
Runway 发布 Aleph 2.0 的视频格式重构能力：用户上传已有视频，选择目标 aspect ratio，模型会补全画面中缺失的场景区域，让同一条视频适配不同 feed 和 format。推文把它定位成桌面 Web app 中的生成式编辑功能，而不是单独的 demo。这个更新反映视频模型产品化正在从“生成一段新视频”转向“修复、扩展、重构已有素材”，也更接近创作者和品牌团队的日常工作流。与图片 outpainting 类似，视频场景补全的关键不只是画面质量，还包括镜头连续性、色彩一致性和对原始素材语义的保留。
- [查看 @runwayml 原始推文](https://x.com/runwayml/status/2064012425884569627)
- [查看 @runwayml 原始推文](https://x.com/runwayml/status/2064012427461603646)

## 10/14 Databricks 给 Unity AI Gateway 加入 AI Spend Controls
Databricks 发布 Unity AI Gateway 的 AI Spend Controls，用于应对 AI workload 带来的新成本管理问题，包括 retry loop 失控、agent 实验不可控和 overnight batch job 消耗。推文称新功能可以跨 users、workspaces、use cases 和 accounts 设置主动预算提醒，并覆盖 coding agents、production agents、模型、provider 和企业内各类 AI workload。这个方向与今天多条 agent loop 讨论相互呼应：当 agent 可以持续调用模型和工具时，成本治理必须前移到 gateway 和 policy 层，而不是月底账单审计。企业 AI 平台的竞争点正在扩展到预算、限额、审计和运行时控制。
- [查看 @databricks 原始推文](https://x.com/databricks/status/2063994733081284996)

## 11/14 Agent loop 讨论从“多跑几轮”转向 validation、schema 和拒绝机制
AlphaSignalAI 连续讨论 agent loop，核心观点是 loop 不是默认方案，只适合任务重复、agent 能运行代码、且 loop 内部能拒绝坏输出的场景；缺少这道门槛就只是自动化 token burn。它进一步指出，真正重要的不是 raw diff，而是 required field 缺失、type change、invalid enum、failed invariant、downstream eval confidence drop 等 contract-level 变化；additive field 应该 warn + trace，而不是直接停止。Harrison Chase 也转发 deepagent、rubrics 和 LangSmith Fleet 相关更新。今天的共同信号是，agent loop 工程正在从 prompt 技巧转向 typed manifests、trace、replay、rubric 和 schema compatibility。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2064101792103678340)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2064103301889585609)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2064105456541323754)
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2064049597371351487)
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2064069510366413077)

## 12/14 Apple Intelligence 讨论暴露端侧模型与云端升级之间的落差
Ethan Mollick 评论 Apple AI 相关发布，称上一次 Apple 更详细解释了 AI 版 Siri 如何在本地与云端模型之间工作，而这次信息少得多。他认为设备上有类似 Gemma 的小模型很好，但如果不能在需要时调用更强云模型，能力会非常受限。放在今天 local model、Kimi Work 和 Intelligence per Watt 的讨论里，这条评论给出另一面：本地模型的价值在隐私、延迟和成本，但产品仍需要清楚的 fallback、routing 和权限机制。端侧 AI 不是“只在本地跑”这么简单，而是如何让本地、私有数据、云端高智商模型和用户控制协同。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2064052841367392536)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2064039913843286318)

## 13/14 OpenAI 与 Anthropic 同时谈到“必要时放慢前沿开发”的全球协调难题
Ethan Mollick 注意到 OpenAI 和 Anthropic 近期文章都提到在特定条件下放慢 AI development 的可能性，但前提是全球协调，且方法尚未明确。OpenAI 新计划提出应有国际组织帮助协调领先 AI effort、降低 catastrophic risk，并使必要时的 coordinated action 成为可能；Mustafa Suleyman 也转发自己关于 AI 不能“hack empathy circuits”的文章，强调需要谨慎处理系统对人类心理和社会关系的影响。Gary Marcus 则从批评角度质疑企业是否会真正同意暂停。安全叙事正在从单家公司承诺，转向全球协调、社会韧性与激励结构问题。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2064158792145609114)
- [查看 @mustafasuleyman 原始推文](https://x.com/mustafasuleyman/status/2064053516306718966)
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2064167104845422898)

## 14/14 小型推理与结构化任务研究继续挑战“只靠规模”的路线
AlphaSignalAI 介绍 Lattice Deduction Transformer，称一个 800K 参数的 looped model 在 Sudoku-Extreme 达到 100%、Maze-Hard 达到 99.9%，训练只需约 15 分钟。它的关键不是用大模型猜答案，而是像 SAT solver 一样逐步排除不可能选项，并在无法确定时 abstain。另一个 Epicure 项目把 410 万条食谱压缩进 2MB ingredient embedding，用 co-occurrence、chemical compounds 和 blended space 建立食材地图。两条都不是大型通用模型发布，但共同提醒：在约束清晰、可验证、结构化的领域，专用模型、检索层和表示学习仍能用极低成本解决高价值子问题。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2063954542325117116)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2063954544376119406)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2063999966062776396)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2063999968134701077)

---

## Deep Dive 附录

### OpenAI: Built to benefit everyone: our plan
OpenAI 把当前路线描述为第三阶段：不仅继续推进 frontier capability，还要把先进 AI 做成足够便宜、安全、可用、可访问的工具。文章列出的三个目标是自动化 AI researcher、经济与科学加速、personal AGI。最具体的时间点是 OpenAI 内部认为到 2028 年 3 月，可能已有相当一部分研究由 AI 系统与研究员协作完成。文章同时强调完全自动化一切不是目标，人类仍要设定方向、做价值取舍和承担责任。它还提出未来需要国家与全球协调，包括能够在必要时协调放慢前沿开发，让社会韧性、安全和 alignment 跟上能力进展。
[查看原文](https://openai.com/index/built-to-benefit-everyone-our-plan/)

### Anthropic: Paving the way for agents in biology
Anthropic 的科学博客用生物数据库解释为什么 coding agent 进展快于 biology agent。软件世界有版本控制、API、测试和包管理，agent 能较快执行并验证；生物数据则分散在 NCBI Virus、GenBank、RefSeq、INSDC 等系统里，很多筛选逻辑只存在于网页界面。VirBench 测试 120 个病毒序列查询，覆盖 40 种病原体；无确定性工具层时，强模型的平均准确率从 16.9% 到 91.3% 不等，且同一 prompt 多次运行会给出不同结果。加入 gget virus 后，所有 agent 准确率超过 90%，GPT-5.5 达到 99.7%。结论是科学 agent 要可靠，底层数据检索必须可调用、可审计、可复现。
[查看原文](https://www.anthropic.com/research/agents-in-biology)

### Perplexity x Harvard: How AI Agents Reshape Knowledge Work
Perplexity 与 Harvard 的研究比较 Search 和 Computer 在真实知识工作中的使用差异。Perplexity 推文称，Computer 让 worker 完成任务所需时间减少 87%、成本降低 94%，满意度更高。研究用 10,000 组 matched pairs 比较同一用户对 Search 和 Computer 提出的近似请求，并用 BLS 工资估算人类时间。Computer 的机器工作时间显著更长，平均 session 约 26 分钟；外部 connector 调用更常见；累计 Computer query 到研究末期达到首周的 84 倍。论文把 agent 描述为提高固定委托成本、降低边际执行成本的工具，因此在长任务、跨领域任务和可自动执行步骤较多的任务上更有经济性。
[查看原文](https://research.perplexity.ai/articles/how-ai-agents-reshape-knowledge-work)

### Cognition: FrontierCode
FrontierCode 是 Cognition 推出的代码质量 benchmark，目标是衡量模型输出是否真的能被 maintainer 合并。它由 20+ 开源 maintainer 参与，任务来自真实 repo，每个任务投入超过 40 小时，并由 Cognition researcher 复审。评估不仅看 unit tests，还看 blocker criteria、reverse-classical tests、scope、style、regression safety、test quality 和 codebase conventions。Cognition 报告 Diamond 子集仍未饱和：Claude Opus 4.8 为 13.4%，GPT-5.5 为 6.3%，Gemini 3.1 Pro 为 4.7%；Kimi K2.6 是最佳开源模型，但 Diamond 只有 3.8%。这使 FrontierCode 成为“AI 写代码是否可维护”的更严格信号。
[查看原文](https://cognition.ai/blog/frontier-code)

### Kimi Work
Kimi Work 把 Moonshot AI 的 agent 能力放到桌面端，重点是本地文件、浏览器和持续自动化。产品页称它能读取本地文件夹、通过 WebBridge 操控浏览器、后台运行 Python/Shell、支持 Cron 定时任务，并生成 PPT、Excel、Word、PDF 等交付物。官方推文还强调本机最多 300 个 sub-agent 并行、金融数据工具调用、记忆系统和 macOS/Windows 可用。这个产品的差异在于不把 agent 限制在云 sandbox 中，而是利用用户本机已登录浏览器、真实文件系统和本地权限模型。它也把安全问题前置到本地授权、Ask before acting 和文件操作权限上。
[查看原文](https://www.kimi.com/zh-cn/products/kimi-work)

### NVIDIA NVFP4 on Blackwell
NVIDIA 的技术博客展示了在 Blackwell 上用 NVFP4 训练 Llama 3 8B 和 Llama 3.1 405B 的 recipe。实验使用 JAX 和 MaxText，在 GB200 Grace Blackwell 与 GB300 Grace Blackwell Ultra 上比较 NVFP4 与 FP8 baseline。NVIDIA 报告预训练吞吐提升 1.31 到 1.73 倍，同时在评估设置中没有准确率损失。博客还给出 benchmark table、recipe breakdown 和 MaxText 示例。意义在于 FP4 不只用于推理部署，也开始进入可复现的训练工作流；对大模型训练来说，这类低精度 recipe 可以直接影响算力利用率、训练时间和单位 token 成本。
[查看原文](https://developer.nvidia.com/blog/train-models-faster-with-jax-and-maxtext-using-nvfp4-on-nvidia-blackwell/)

### Intelligence per Watt
Stanford 相关论文提出 intelligence per watt，用 accuracy 除以功耗衡量本地推理效率。论文页面显示，研究覆盖 20+ 个本地语言模型、8 种加速器和 100 万条真实单轮 chat/reasoning query，测量 accuracy、energy、latency 和 power。Clement Delangue 强调的数字是，local models 对真实查询的准确率从 2023 年 23.2% 提升到 71.3%。这并不意味着 frontier model 不再重要，而是说明大量工作负载可能被更便宜、更低能耗、更靠近用户数据的本地或小模型承接。未来的 AI 系统可能越来越像路由器：先判断任务、隐私、延迟、成本和质量要求，再选择 local、open-source、小模型或 frontier API。
[查看原文](https://huggingface.co/papers/2511.07885)
