---
layout: daily
title: "AI Frontier Daily | 2026.04.08"
headline: "Anthropic 发布 Project Glasswing，Claude Mythos Preview 模型震动安全界"
date: 2026-04-08 09:07:00 +0800
permalink: /ai-daily/2026/04/08/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Anthropic 发布了迄今最具争议性的 AI 安全举措——Project Glasswing。该计划由其未公开发布的前沿模型 Claude Mythos Preview 驱动，该模型在漏洞发现能力上已超越几乎所有人类专家。Mythos Preview 已发现数千个高危和严重漏洞，包括 OpenBSD 中存在 27 年的远程崩溃漏洞、FFmpeg 中存在 16 年的堆溢出漏洞（自动化工具曾测试 500 万次未能发现），以及多个主流操作系统和浏览器中的关键缺陷。在 CyberGym 评测中，Mythos Preview 达到 83.1% 的漏洞复现准确率（Opus 4.6 为 66.6%）。Anthropic 明确表示不会将 Mythos Preview 公开上线，而是向防御方提供受控访问。SWE-bench Pro 得分 77.8%（Opus 4.6 为 53.4%），SWE-bench Verified 达 93.9%。"
summary: "Anthropic 发布了迄今最具争议性的 AI 安全举措——Project Glasswing。该计划由其未公开发布的前沿模型 Claude Mythos Preview 驱动，该模型在漏洞发现能力上已超越几乎所有人类专家。Mythos Preview 已发现数千个高危和严重漏洞，包括 OpenBSD 中存在 27 年的远程崩溃漏洞、FFmpeg 中存在 16 年的堆溢出漏洞（自动化工具曾测试 500 万次未能发现），以及多个主流操作系统和浏览器中的关键缺陷。在 CyberGym 评测中，Mythos Preview 达到 83.1% 的漏洞复现准确率（Opus 4.6 为 66.6%）。Anthropic 明确表示不会将 Mythos Preview 公开上线，而是向防御方提供受控访问。SWE-bench Pro 得分 77.8%（Opus 4.6 为 53.4%），SWE-bench Verified 达 93.9%。"
issue_count: 17
deep_dive_count: 3
reading_time: 12
cover: "https://cdn.sanity.io/images/4zrzovbb/website/c07f638082c569e8ce1e89ae95ee6f332a98ec08-2400x1260.jpg"
signals: "AnthropicAI · DarioAmodei · sama · elonmusk · ClementDelangue · bindureddy · mustafasuleyman · sundarpichai"
header-img: img/dark_yellow_400.png
---


## 1/17 Anthropic 发布 Project Glasswing，Claude Mythos Preview 模型震动安全界
Anthropic 发布了迄今最具争议性的 AI 安全举措——Project Glasswing。该计划由其未公开发布的前沿模型 Claude Mythos Preview 驱动，该模型在漏洞发现能力上已超越几乎所有人类专家。Mythos Preview 已发现数千个高危和严重漏洞，包括 OpenBSD 中存在 27 年的远程崩溃漏洞、FFmpeg 中存在 16 年的堆溢出漏洞（自动化工具曾测试 500 万次未能发现），以及多个主流操作系统和浏览器中的关键缺陷。在 CyberGym 评测中，Mythos Preview 达到 83.1% 的漏洞复现准确率（Opus 4.6 为 66.6%）。Anthropic 明确表示不会将 Mythos Preview 公开上线，而是向防御方提供受控访问。SWE-bench Pro 得分 77.8%（Opus 4.6 为 53.4%），SWE-bench Verified 达 93.9%。
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2041578392852517128)
- [查看 @DarioAmodei 原始推文](https://x.com/DarioAmodei/status/2041580334693720511)

## 2/17 Glasswing 联盟：12 家巨头加入，Anthropic 承诺 1 亿美元
Project Glasswing 集结了 AWS、Apple、Broadcom、Cisco、CrowdStrike、Google、JPMorganChase、Linux Foundation、Microsoft、NVIDIA 和 Palo Alto Networks 共 12 家机构。Anthropic 承诺提供最高 1 亿美元的 Mythos Preview 使用额度给合作伙伴和 40 多个维护关键软件的组织（包括开源项目），另捐赠 400 万美元给开源安全组织。Dario Amodei 表示网络安全是前沿 AI 模型的"第一个明确而现实的危险"，但如果应对得当，有机会创造一个比 AI 出现前更安全的互联网。
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2041578395515953487)
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2041578412653900255)
- [查看 @DarioAmodei 原始推文](https://x.com/DarioAmodei/status/2041580341794615631)

## 3/17 Mythos 技术报告：不到 50 美元发现并利用 FreeBSD 关键漏洞
Anthropic 同步发布了 Mythos Preview 的技术报告和系统卡。报告披露：发现并利用一个 FreeBSD NFS RPC 远程代码执行漏洞（CVE-2026-4747）的成本不到 50 美元；发现 OpenBSD 漏洞在 1000 次运行中成本不到 2 万美元；在 Firefox JavaScript shell 利用测试中，Mythos 成功生成 181 个可工作的 exploit，而 Opus 4.6 仅有 2 次尝试。专业验证者确认 98% 的严重性评估在一个级别内匹配，89% 完全一致。
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2041580670774923517)
- [查看 @AnthropicAI 原始推文](https://x.com/AnthropicAI/status/2041578416487489601)

## 4/17 Sam Altman：OpenAI Codex 周活跃用户突破 300 万，重置用量限制
Sam Altman 宣布 OpenAI Codex 周活跃用户达到 300 万（不到一个月前为 200 万），并为此重置了使用限额。Altman 表示每增加 100 万用户就会重置一次，直到 1000 万用户。
- [查看 @sama 原始推文](https://x.com/sama/status/2041658719839383945)

## 5/17 Elon Musk 与 Intel 合作 Terafab 项目
Elon Musk 发推表示"很荣幸与 Intel 和 Lip-Bu 合作"，并期待在 Terafab 项目上的合作。两条相关推文合计获得超过 3800 万次浏览，但具体合作细节尚未披露。
- [查看 @elonmusk 原始推文](https://x.com/elonmusk/status/2041567389637353488)
- [查看 @elonmusk 原始推文](https://x.com/elonmusk/status/2041566390738665769)

## 6/17 GLM 5.1 发布：开源模型登顶 SWE-Bench Pro
智谱 GLM 5.1 正式发布，成为 SWE-Bench Pro 上表现最好的开源模型（在 Hugging Face 上开放下载），也是全球排名第三的模型。Clement Delangue 确认该成绩，bindureddy 表示小型开源模型的采用正在爆发式增长，GLM 5.1 将进一步加速这一趋势。
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2041554501539103014)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2041566630212403476)

## 7/17 DeepSeek v4 传闻升温，或将数日内发布
bindureddy 透露 DeepSeek v4 的传闻急剧增加，预计将在未来几天内发布。他认为 DeepSeek v4 可能在 Mythos 之前上线并具有可比性能。另一个可能近期发布的大模型是 OpenAI 的 SPUD。
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2041601224064335927)
- [查看 @bindureddy 原始推文](https://x.com/bindureddy/status/2041699611640000573)

## 8/17 Microsoft 开源 Harrier 嵌入模型，登顶多语言 MTEB-v2
微软 Bing 团队发布并开源了 Harrier 嵌入模型，在多语言 MTEB-v2 基准测试中排名第一。Mustafa Suleyman 介绍，Harrier 专为 agentic 时代设计，是"记忆、排序和编排的基础层"，为 AI 系统提供更好的检索准确性和更低的延迟。Bing 的 web grounding 已经驱动几乎所有主流 AI 聊天机器人。
- [查看 @mustafasuleyman 原始推文](https://x.com/mustafasuleyman/status/2041552243019980929)

## 9/17 Sundar Pichai 暗示 Chrome 标签页重大更新
Google CEO Sundar Pichai 发推"T A B S I N C H R O M E"，暗示 Chrome 浏览器标签页功能将有重大更新。该推文获得超过 84 万次浏览，但具体功能细节尚未公布。此外 Logan（Google 员工）表示对 Google 极度看好，"未来几个月会很有趣"。
- [查看 @sundarpichai 原始推文](https://x.com/sundarpichai/status/2041565389336014864)
- [查看 @OfficialLoganK 原始推文](https://x.com/OfficialLoganK/status/2041692053575217220)

## 10/17 Cursor 3 推出 Design Mode：浏览器内可视化 UI 编辑
Cursor 发布 Cursor 3 的 Design Mode 功能，允许开发者在浏览器中直接标注和定位 UI 元素，实现可视化开发。该推文获得超过 12.9 万次浏览。
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2041561791243940092)

## 11/17 Seedance 2.0 登陆 Runway：多镜头视频生成+完整音效
Runway 宣布 Seedance 2.0 已上线平台，支持文本、图像、视频或音频输入，生成带完整音效设计和对话的多镜头视频序列。目前面向 Unlimited 和 Enterprise 用户开放（美国以外地区）。
- [查看 @runwayml 原始推文](https://x.com/runwayml/status/2041517519664463940)

## 12/17 Runway Characters 支持摄像头和屏幕共享
Runway 还推出了 Characters 功能更新，支持用户通过摄像头和屏幕共享实时互动，AI 角色可以看到、理解并回应屏幕上的内容，全部通过 Runway API 实现实时交互。
- [查看 @runwayml 原始推文](https://x.com/runwayml/status/2041594922688508371)

## 13/17 Pika Labs 发布实时视频对话功能，支持任意 AI Agent
Pika Labs 推出面向任意 AI agent 的实时视频聊天功能，用户可以在 Google Meet 等平台上与自己的 AI 代理"面对面"交流。演示展示了 agent 可以做自我介绍、研究餐厅并订位、根据指令更换着装等场景。
- [查看 @pika_labs 原始推文](https://x.com/pika_labs/status/2041591039191109675)

## 14/17 Windsurf 发布 SWE-1.6 模型，速度达 950 tok/s
Windsurf（原 Cognition/Devin 团队）发布 SWE-1.6 模型，在 SWE-Bench Pro 上匹配 Preview 模型性能，推理速度高达 950 tok/s。所有用户可免费使用 200 tok/s 版本。
- [查看 @windsurf 原始推文](https://x.com/windsurf/status/2041639333711822952)

## 15/17 Suno v5.5：号称"地球上最好的音乐模型"
Suno 发布 v5.5 版本并称其为"地球上最好的音乐模型"。具体改进细节通过视频展示，涵盖音乐生成质量和风格多样性的提升。
- [查看 @suno 原始推文](https://x.com/suno/status/2041541160015937995)

## 16/17 Mistral AI 与 Sakana AI 宣布合作
法国 Mistral AI 与日本 Sakana AI 宣布建立合作关系。这是欧洲和亚洲两家领先 AI 创业公司的首次正式联手，具体合作方向尚未公布详细信息。另外 Sakana AI 将在 4 月 15 日举办"防卫·情报"领域专场招聘说明会。
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2041459751025017007)

## 17/17 Tesla FSD 14.3 发布 + Netflix AI 视频擦除模型
Elon Musk 分享了 Tesla FSD 14.3 的发布说明。另一则热门消息：Netflix 研究团队发布了一款新 AI 模型，可以从视频中擦除物体并重新编写整个场景的物理效果，仿佛该物体从未存在过。Fei-Fei Li 的 Marble 项目也展示了生成更大虚拟世界的进展。
- [查看 @elonmusk 原始推文](https://x.com/elonmusk/status/2041697396808454517)
- [查看 @rowancheung 原始推文](https://x.com/rowancheung/status/2041507881858826404)
- [查看 @drfeifei 原始推文](https://x.com/drfeifei/status/2041558772888563882)

---

## Deep Dive 附录

### Anthropic Project Glasswing 与 Claude Mythos Preview
Anthropic 推出 Project Glasswing，由 Claude Mythos Preview 驱动的网络安全防御计划。Mythos Preview 是一个未公开发布的前沿模型，在编码和安全评估中表现出质的飞跃：SWE-bench Pro 77.8%（Opus 4.6 为 53.4%），SWE-bench Verified 93.9%（Opus 4.6 为 80.8%），Terminal-Bench 2.0 82.0%（Opus 4.6 为 65.4%）。模型发现了数千个高危漏洞，包括 OpenBSD 27 年远程崩溃漏洞（signed integer overflow）、FFmpeg 16 年堆溢出（自动化工具测试 500 万次未发现）、FreeBSD NFS RPC 远程代码执行（CVE-2026-4747）、多个 Linux 内核提权漏洞。发现和利用 FreeBSD 关键漏洞的成本不到 50 美元。在 Firefox exploit 测试中，Mythos 生成 181 个可工作的 shell exploit，Opus 4.6 仅 2 次。Anthropic 不会公开 Mythos Preview，而是向 12 家合作伙伴（AWS、Apple、Google、Microsoft 等）提供受控访问，承诺 1 亿美元使用额度和 400 万美元开源安全捐赠。
[查看原文](https://anthropic.com/glasswing)

### Mythos Preview 技术报告：漏洞发现与利用能力详解
技术报告详细披露了 Mythos Preview 在多个关键系统中的漏洞发现能力。漏洞类型涵盖内存损坏（栈溢出、use-after-free、缓冲区溢出）、逻辑漏洞（认证绕过、KASLR 绕过）、密码学弱点（证书伪造、加密通信破解）、Web 应用漏洞（XSS、SQL 注入、CSRF）和内核漏洞（提权、远程代码执行）。受影响系统包括 OpenBSD、FreeBSD、Linux、Windows、所有主流浏览器、FFmpeg 编解码器、TLS/AES-GCM/SSH 实现、虚拟机监控器和智能手机系统。专业验证者确认 98% 的严重性评估在一个级别内匹配，89% 完全一致。在 OSS-Fuzz 基准测试中，Mythos 在 10 个完全补丁目标上实现了 tier-5 控制流劫持，而 Opus 仅实现单个 tier-3 崩溃。
[查看原文](https://red.anthropic.com/2026/mythos-preview)

### Microsoft Harrier 开源嵌入模型
微软 Bing 团队发布并开源的 Harrier 嵌入模型，在多语言 MTEB-v2 基准测试中排名第一（截至 2026 年 4 月 6 日）。Harrier 专为现代 AI agent 系统设计，作为"记忆、排序和编排的基础层"，提升首次检索准确性，降低延迟和成本，增强多步 agent 任务的稳定性。Bing 的 web grounding 已驱动几乎所有主流 AI 聊天机器人，Harrier 是 agentic 时代的重要升级。
[查看原文](https://blogs.bing.com/search/April-2026/Microsoft-Open-Sources-Industry-Leading-Embedding-Model)
