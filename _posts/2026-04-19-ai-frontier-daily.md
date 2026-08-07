---
layout: daily
title: "AI Frontier Daily | 2026.04.19"
headline: "Anthropic 发布 Claude Opus 4.7：两个月迭代，视觉与编程全面升级"
date: 2026-04-19 09:07:00 +0800
permalink: /ai-daily/2026/04/19/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Anthropic 于 4 月 16 日正式发布 Claude Opus 4.7，距上一代 Opus 4.6 仅两个月。核心升级包括：支持最长边 2576 像素的高分辨率图像输入，是此前限制的三倍以上；软件工程任务性能大幅提升，尤其在复杂长任务方面表现突出；新增 `xhigh` 推理力度档位，介于 high 与 max 之间，供用户精细控制推理与延迟的平衡；新增 `/ultrareview` 斜杠命令专注代码 bug 检测；指令遵循更精确，但用户需重新调整针对 4.6 撰写的提示词。新版对于低力度请求更倾向字面解读，不会默默推广到未明确要求的范围。定价不变，API 价格维持 $5/$25 每百万 tokens，并已在 Amazon Bedrock、Google Vertex AI 和 Microsoft Foundry 全平台上线。性能上超越 4.6 和 ChatGPT 5.4，但仍落后于尚未公开的 Mythos Preview 版本。"
summary: "Anthropic 于 4 月 16 日正式发布 Claude Opus 4.7，距上一代 Opus 4.6 仅两个月。核心升级包括：支持最长边 2576 像素的高分辨率图像输入，是此前限制的三倍以上；软件工程任务性能大幅提升，尤其在复杂长任务方面表现突出；新增 `xhigh` 推理力度档位，介于 high 与 max 之间，供用户精细控制推理与延迟的平衡；新增 `/ultrareview` 斜杠命令专注代码 bug 检测；指令遵循更精确，但用户需重新调整针对 4.6 撰写的提示词。新版对于低力度请求更倾向字面解读，不会默默推广到未明确要求的范围。定价不变，API 价格维持 $5/$25 每百万 tokens，并已在 Amazon Bedrock、Google Vertex AI 和 Microsoft Foundry 全平台上线。性能上超越 4.6 和 ChatGPT 5.4，但仍落后于尚未公开的 Mythos Preview 版本。"
issue_count: 15
deep_dive_count: 3
reading_time: 15
cover: "https://www-cdn.anthropic.com/images/4zrzovbb/website/96ea2509a90e527642c822303e56296a07bcfce4-1920x1080.png"
signals: "emollick · gdb · ylecun · GaryMarcus · Kimi_Moonshot · bindureddy · hardmaru · ClementDelangue"
header-img: img/dark_yellow_400.png
---


## 1/15 Anthropic 发布 Claude Opus 4.7：两个月迭代，视觉与编程全面升级
Anthropic 于 4 月 16 日正式发布 Claude Opus 4.7，距上一代 Opus 4.6 仅两个月。核心升级包括：支持最长边 2576 像素的高分辨率图像输入，是此前限制的三倍以上；软件工程任务性能大幅提升，尤其在复杂长任务方面表现突出；新增 `xhigh` 推理力度档位，介于 high 与 max 之间，供用户精细控制推理与延迟的平衡；新增 `/ultrareview` 斜杠命令专注代码 bug 检测；指令遵循更精确，但用户需重新调整针对 4.6 撰写的提示词。新版对于低力度请求更倾向字面解读，不会默默推广到未明确要求的范围。定价不变，API 价格维持 $5/$25 每百万 tokens，并已在 Amazon Bedrock、Google Vertex AI 和 Microsoft Foundry 全平台上线。性能上超越 4.6 和 ChatGPT 5.4，但仍落后于尚未公开的 Mythos Preview 版本。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/emollick/status/2045314251804324080" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a></div>

## 2/15 OpenAI Codex 进化为完整智能体 IDE，Greg Brockman 连续造势
OpenAI 总裁 Greg Brockman（@gdb）连续发布多条推文，称"Codex 正在成为一个完整的智能体 IDE"，强调用自然语言就能构建 Web 应用和游戏，"让工作变得纯粹有趣"。最高单条推文获 287k 浏览量。据最新报道，Codex 已具备后台运行能力，可打开任意桌面应用并通过光标点击和输入执行操作，同时新增跨会话记忆功能。Codex 正被整合进 OpenAI 的"超级应用"计划，与 ChatGPT 和 Atlas 浏览器合并。截至 2026 年 3 月，Codex 周活跃用户已突破 300 万，环比增长 50%。Brockman 将其定义为"通用智能体框架 + 软件工程智能体"的双重身份合体。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb<span class="source-chip__links"><a href="https://x.com/gdb/status/2045375289560007029" target="_blank" rel="noopener" aria-label="@gdb 原文 1">1</a><a href="https://x.com/gdb/status/2045594591584530826" target="_blank" rel="noopener" aria-label="@gdb 原文 2">2</a></span></span></div>

## 3/15 LeCun 正面开怼 Dario：AI CEO 不该主导就业市场讨论
Meta AI 首席科学家 Yann LeCun（@ylecun）发文直批 Anthropic CEO Dario Amodei，称"Dario 是错的，他对技术革命对劳动力市场的影响一无所知"，此推文获 752k 浏览量、7300+ 点赞。LeCun 建议公众不要听 Dario、Sam Altman、Yoshua Bengio 或他自己对就业问题的判断，而应倾听真正研究过技术与劳动力关系的经济学家，点名了 Acemoglu、Brynjolfsson、McAfee 等学者。背景是 Dario 近期频繁发表 AI 将大规模取代工作的预测，Gary Marcus 转发评论指出"Dario 跟 Sam 其实没那么大区别"，并引述分析称 Dario 的劳动力言论与 Anthropic 今年拟 IPO 的商业动机有关。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/ylecun/status/2045610129119117574" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ylecun</a><a class="source-chip" href="https://x.com/GaryMarcus/status/2045556278882455855" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GaryMarcus</a></div>

## 4/15 Kimi 突破单集群限制：跨数据中心异构硬件实现 P/D 分离推理
月之暗面（@Kimi_Moonshot）宣布将预填充/解码（Prefill/Decode）分离推进到单集群之外：支持跨数据中心和异构硬件部署。此前制约跨机器 P/D 分离的核心瓶颈是 KV 缓存传输开销，Kimi 通过其混合模型 Kimi Linear 解决了这一问题。Kimi Linear 采用线性注意力与全局 MLA 的 3:1 混合架构，将 KV 缓存内存需求降低最高 75%，解码速度提升最高 6 倍，在 RULER 128k 上下文基准达到 Pareto 最优（84.3 分，3.98x 加速）。该技术使得不同类型 GPU 可分配给预填充和解码阶段，显著降低每 token 成本。原推文获 327k 浏览量、2031 点赞。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/Kimi_Moonshot/status/2045461663898599472" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Kimi_Moonshot</a></div>

## 5/15 GPT 5.5 下周发布？预测将是 Opus 级配对协作模型
AI 从业者 @bindureddy 发文预测 OpenAI 将在下周发布新旗舰大模型，定位为 Opus 级别，可与现有 Opus 模型协作解决复杂问题，版本号暂称 GPT 5.5。目前 Anthropic Opus 4.7 刚刚发布两天，若 OpenAI 此时推出同级别模型将使竞争进一步升温。此前 Emeka Molick 也提到"我们还没见到 Mythos（或 OpenAI 和 Google 正在发布的东西）"，暗示顶级模型混战即将到来。同一账号还指出了另一重磅消息（见第 6 条），可信度有一定参考价值。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/bindureddy/status/2045627788930253184" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a></div>

## 6/15 Qwen 3.6 横空出世：3B 活跃参数达 Opus 4.7 八成性能
@bindureddy 指出 Qwen 3.6 是近期被忽视的重大消息：该模型仅有 3B 活跃参数，运行成本极低，但在多项测试中达到了 Opus 4.7 约 80% 的性能。这是继 DeepSeek 等模型之后，开源 AI 对闭源旗舰发起的又一次能效比冲击。@ClementDelangue 也转发了一篇帖子，显示一个 18B 规模的"混合模型"（Frankenstein model）在 Hugging Face 上发布，性能已超越 Qwen 3.6-35B-A3B。开源社区在参数效率和推理质量上的进展在本周尤为密集，与 Kimi Linear 的方向共同指向"更小激活参数+更优架构设计"的趋势。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/bindureddy/status/2045393596824838361" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a></div>

## 7/15 Anthropic API 再引风波：60 人公司访问权限被无声切断
AI 推文账号 @minchoi 发帖引发广泛关注（被 @hardmaru 转发）：Anthropic 在没有任何解释的情况下，在一夜之间切断了某公司（60+ 名员工）对 Claude API 的所有访问权限，仅发了一封邮件。这是 Anthropic 近期一系列 API 管控收紧行动的延续。此前，Anthropic 已于 4 月 4 日正式宣布 Claude Pro/Max 订阅不再覆盖 OpenClaw 等第三方工具，并在 1 月就开始封堵"第三方工具冒充 Claude Code 身份"的行为。TechCrunch 曾报道 Anthropic 临时封禁 OpenClaw 创始人 Peter Steinberger 的账号事件。此事引发开发者社区广泛讨论：商业 API 使用条款缺乏透明度正在成为一个系统性风险点。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hardmaru/status/2045649675890704832" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hardmaru</a></div>

## 8/15 HuggingFace：100 万 Spaces 向 AI 智能体开放调用
Hugging Face CEO Clément Delangue（@ClementDelangue）宣布 HuggingFace 正在成为"智能体构建与使用 AI 的平台"，推出 HF MCP Server，允许 MCP 兼容的 AI 助手（Claude、ChatGPT、Codex、Cursor 等）直接调用 HuggingFace Hub 上超过 100 万个 Spaces，将社区托管的图像生成、音频处理、科学计算等专项模型能力变为智能体可随时调用的工具。这意味着 AI 智能体无需自建推理基础设施，即可利用整个 Hugging Face 生态。该公告获 14k 浏览量，235 点赞。这也是 MCP 生态在 2026 年快速扩张的一个缩影：Anthropic 推出 MCP 后，HuggingFace 率先以最大开源模型平台身份接入。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/ClementDelangue/status/2045640413256564818" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue</a></div>

## 9/15 开源项目让 Claude Code 在 MacBook 免费运行：122B 参数，零月费
@ClementDelangue 转发了一个项目：有工程师创建了 `claude-code-local`，让 Claude Code 在 MacBook 上以 122B 参数模型完全本地运行，月费 $0。技术路线是：Ollama v0.14（2026 年 1 月）开始支持 Anthropic Messages API 兼容层，Claude Code 可直接连接本地开源模型。最适配的 122B 选项是 Qwen 3.5 122B A10B MoE，以 MoE 结构仅激活 10B 参数，在 Apple Silicon 上实现 65 tok/s 的速度。此外还有更轻量的 35B 方案（30 tok/s）适合 M2 Ultra。这是 Anthropic 在 3 月 31 日"意外"公开 51.2 万行 Claude Code 源码后，开源社区迅速跟进的最新成果之一。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/ClementDelangue/status/2045638297511207330" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue</a></div>

## 10/15 工程师用 200 张黑图破解 Google SynthID，水印检测准确率达 90%
@AlphaSignalAI 报道：一名独立工程师仅用 200 张纯黑图像和基础信号处理，成功逆向工程了 Google DeepMind 的 SynthID——一项已嵌入超过 100 亿条 Gemini 生成内容的隐形水印技术。具体方法：生成 200 张黑图 → 平均叠加以分离隐藏信号 → FFT 频谱分析定位固定载波频率和相位模板。基于此构建的开源 Python 工具在 GitHub 上线后迅速获得 1600+ 星标，检测精度达 90%。其 V3 绕过版本可将相位一致性降低 91%、载波能量降低 75%，同时保持图像质量在 43dB PSNR 以上。Google 否认 SynthID 被"破解"，但未提供具体技术反驳。研究者指出，这并非完全移除水印，而是让解码器的置信度大幅下降。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AlphaSignalAI/status/2045517951676109093" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI</a></div>

## 11/15 Meta AI 提出「神经计算机」：AI 本身成为计算机
Meta AI 和 KAUST 研究团队（含 LSTM 发明人 Jürgen Schmidhuber）发表论文《Neural Computers》，提出新的计算范式：不再是 AI 运行在计算机上，而是 AI 模型本身成为计算机——将计算、内存和 I/O 统一到一个学习到的潜在运行时状态中。团队构建了两个基于视频的原型：一个学习命令行界面（CLI）交互，一个学习图形用户界面（GUI）操作，训练数据分别为约 1100 小时终端录屏和 1510 小时 Ubuntu 桌面录屏。GUI 原型实现了 98.7% 的光标定位精度。关键发现：110 小时有目的性的训练数据优于 1400 小时随机交互数据。当前局限：无法可靠完成两位数算术或长任务中保持连贯行为。论文 arXiv 编号：2604.06425。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/AlphaSignalAI/status/2045472725825675300" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@AlphaSignalAI</a></div>

## 12/15 Sakana AI 发布 Digital Ecosystems：浏览器内的人工生命竞技场
Sakana AI（@SakanaAILabs）发布 Digital Ecosystems，一个基于浏览器的交互式人工生命研究平台。继去年发布 Petri Dish NCA（神经网络作为有机体）后，新平台进一步开放：多个小型 CNN 共享一块 2D 网格，每个网络只能感知 3×3 范围内的信息，通过竞争生存和适应规则变化进行演化。用户可在浏览器中实时观察并干预这些神经网络生态系统的演化过程。这项研究探索的是"竞争性神经网络在规则变化中自适应"的动力学特性，是 Sakana AI 在"AI 科学家"和演化学习方向之外的又一基础研究成果。该推文获 65k 浏览量，608 点赞。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/SakanaAILabs/status/2045532808995905764" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@SakanaAILabs</a></div>

## 13/15 Chollet：选 JAX 还是 PyTorch 是甄别 ML 人才的关键信号
Keras 创始人 François Chollet（@fchollet）发表了一条引发广泛讨论的推文（333k 浏览量，1144 点赞）："在深度学习简历中，最直接区分平庸与优秀候选人的信号之一，就是他们列的是 PyTorch 还是 JAX。"他随后补充：JAX 是"优秀候选人的首选框架"，并将这种分歧比喻为 2010 年代 PHP vs Go 的技术品味鸿沟，暗示选 JAX 的工程师对底层抽象和计算图有更深的认知。这条评论在 ML 圈引发热议，有人支持，也有人反驳说出色的工程师应当不局限于框架。Chollet 目前在 Google DeepMind 工作，仍持续参与 Keras 开发和 ARC Prize 竞赛。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/fchollet/status/2045524796298101077" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet</a></div>

## 14/15 Luma Labs 押注统一 AI 模型，CEO 详述针对 1.2 亿创作者的战略
Luma Labs（@LumaLabsAI）CEO @gravicle 接受访谈，阐述公司为何押注"统一模型"而非"联邦模型+判官协调"架构：他认为智能不是流水线架构问题，而是在统一的表达空间中进行的。Luma 的目标是为全球 1.2 亿创作者提供统一多模态模型，支持电影制作的各个环节。CEO 谈到了"Luma 工厂"、好莱坞商业模式适配和 Sora 停服后的市场机遇。公司明确拒绝"联邦模型+调度器"的架构，认为这会割裂智能的连续性。同期发布了新的 Luma Agents 工具，支持用电影风格参考图直接生成对应风格内容。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/LumaLabsAI/status/2045609107613511977" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LumaLabsAI</a></div>

## 15/15 Marcus 论 AI 泡沫：万亿投资背后是竞争焦虑而非真实回报
AI 批评者 Gary Marcus（@GaryMarcus）引述分析：当前大量 AI 基础设施投资"由竞争焦虑而非有据可查的回报驱动——没有人想成为唯一一家不投 AI 的公司。这正是泡沫的融资逻辑，董事会迟早会要求看到证明投资合理的数字。"Marcus 同日还发布了一条讽刺推文："很高兴知道，万亿美元的 Scaling 投资已经彻底解决了常识推理问题。"（配合对 AI 常识失败案例的截图）他还就 Anthropic 的"92% 诚实率"发问：一个 8% 不准确的 AI 在高风险场景下够用吗？这些声音代表了当前技术乐观主义浪潮中持续存在的理性审视派。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GaryMarcus<span class="source-chip__links"><a href="https://x.com/GaryMarcus/status/2045361707326046377" target="_blank" rel="noopener" aria-label="@GaryMarcus 原文 1">1</a><a href="https://x.com/GaryMarcus/status/2045654841775804846" target="_blank" rel="noopener" aria-label="@GaryMarcus 原文 2">2</a></span></span></div>

---

## Deep Dive 附录

### Claude Opus 4.7：功能详解与升级清单
Anthropic 于 4 月 16 日正式发布 Claude Opus 4.7。核心改进包括：(1) 视觉分辨率提升至 2576 像素长边，是此前上限的 3 倍以上，适合处理高密度截图和复杂图表；(2) 软件工程性能大幅提升，适合委托此前需人工监督的复杂长任务；(3) 新增 `xhigh` 推理力度档位，介于 high 和 max 之间；(4) 跨多会话的文件系统记忆能力增强；(5) 新增 `/ultrareview` 斜杠命令专注 bug 检测。行为变化提示：4.7 对指令的解读更字面化，在低/中力度下不会默默推广指令到未涉及的对象，风格也更直接、评价性更强（emoji 更少）。使用 4.6 提示词的用户需重新测试和调整。定价不变：$5/$25 每百万 tokens。当前落后于 Mythos Preview（仅向少数公司开放）。
[查看原文](https://www.anthropic.com/news/claude-opus-4-7)

### Meta AI + KAUST 《Neural Computers》论文
这篇由 Meta AI 和 KAUST 联合发布（含 LSTM 发明人 Schmidhuber）的论文提出"神经计算机"范式：将传统计算机的计算、内存、I/O 三大功能全部折叠进一个单一的学习到的模型中，以统一的潜在运行时状态执行。不是"AI 调用计算机工具"，而是"AI 就是计算机本身"。研究团队构建了两个早期原型：CLI 原型（约 1100 小时终端录屏训练）和 GUI 原型（1510 小时 Ubuntu 桌面录屏训练），GUI 原型实现 98.7% 光标精度。关键洞察：110 小时有目的性数据优于 1400 小时随机数据，证明数据质量远比数量重要。当前局限：仍无法可靠执行两位数运算或长任务中的连贯行为，属于概念验证阶段。
[查看原文](https://arxiv.org/abs/2604.06425)

### Google SynthID 水印破解：Reverse-SynthID 工具详情
研究者使用的攻击流程：①生成 200 张纯黑图（排除内容干扰）→ ②对所有图求平均，分离出固定隐写信号 → ③FFT 频谱分析提取载波频率和相位模板 → ④将提取到的模板用于检测和绕过。最终工具能以 90% 精度检测任意 Gemini 生成图像是否含有 SynthID 水印；V3 绕过版本可将水印相位一致性降低 91%，载波能量降低 75%，图像 PSNR 保持 43dB 以上（视觉质量无损）。工具已在 GitHub 开源，首周获 1600+ Star。Google 回应称 SynthID "未被破解"，但未提供具体技术反驳。研究界的共识是：这不是完全移除水印，而是让水印检测器的置信度大幅降低至无法可靠检测的程度。这对 AI 内容真实性溯源的长期可靠性提出了严峻挑战。
[查看原文](https://www.medianama.com/2026/04/223-google-gemini-synthid-ai-watermark-bypass/)
