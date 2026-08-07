---
layout: daily
title: "AI Frontier Daily | 2026.04.14"
headline: "Greg Brockman：世界正在进入\"算力驱动经济\"时代"
date: 2026-04-14 09:07:00 +0800
permalink: /ai-daily/2026/04/14/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "OpenAI 联合创始人 Greg Brockman 发布长文，宣告人类正进入以算力为核心驱动力的新经济形态。他指出，AI 在过去六个月内已大幅加速软件工程，正向其他所有计算机工作蔓延。ChatGPT 与 Codex 每周约有近十亿用户，token 用量持续快速增长。他强调：未来解决问题的规模与速度，将取决于每个人能获取的算力资源。小团队能做大公司才能做的事，个人可直接将想法转化为产品、科学或公司。"
summary: "OpenAI 联合创始人 Greg Brockman 发布长文，宣告人类正进入以算力为核心驱动力的新经济形态。他指出，AI 在过去六个月内已大幅加速软件工程，正向其他所有计算机工作蔓延。ChatGPT 与 Codex 每周约有近十亿用户，token 用量持续快速增长。他强调：未来解决问题的规模与速度，将取决于每个人能获取的算力资源。小团队能做大公司才能做的事，个人可直接将想法转化为产品、科学或公司。"
issue_count: 16
deep_dive_count: 5
reading_time: 12
cover: "https://cdn-uploads.huggingface.co/production/uploads/5f1158120c833276f61f1a84/rzsb_teyLBjquX6rAjZC6.png"
signals: "gdb · mattshumer_ · emollick · GaryMarcus · runwayml · ClementDelangue · cursor_ai · OfficialLoganK"
header-img: img/dark_yellow_400.png
---


## 1/16 Greg Brockman：世界正在进入"算力驱动经济"时代
OpenAI 联合创始人 Greg Brockman 发布长文，宣告人类正进入以算力为核心驱动力的新经济形态。他指出，AI 在过去六个月内已大幅加速软件工程，正向其他所有计算机工作蔓延。ChatGPT 与 Codex 每周约有近十亿用户，token 用量持续快速增长。他强调：未来解决问题的规模与速度，将取决于每个人能获取的算力资源。小团队能做大公司才能做的事，个人可直接将想法转化为产品、科学或公司。
- [查看 @gdb 原始推文](https://x.com/gdb/status/2043831031468568734)

## 2/16 Claude Mythos 网络安全能力受英国 AI 安全研究所评估
英国 AI Security Institute（AISI）对尚未公开发布的 Claude Mythos Preview 进行了正式评估，结论令人关注。Mythos 成为首个完成端对端"网络靶场"评估的模型，在未加防护的小型系统面前可自主发起攻击并完成入侵，较 2023 年最好的系统相比有质的飞跃。但评估也显示，夸大威胁（如"学生意外关掉电网"）是媒体渲染，当前威胁仅限于缺乏基础安全防护的系统。Gary Marcus 总结：这是一个强烈信号，现在必须开始认真建设网络安全基础设施。
- [查看 @mattshumer_ 原始推文](https://x.com/mattshumer_/status/2043701407593738514)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2043810051979157680)
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2043754005718020552)

## 3/16 Ethan Mollick："算力泡沫"判断被彻底证伪
六个月前，"算力泡沫"叙事风靡全球——数据中心大幅过剩、AI 需求触顶、泡沫即将破裂。Mollick 指出，这一判断已被事实完全推翻：AI 效用足够高，需求持续爆发，算力供给反而跟不上，价格正在上涨。他同时提醒：融资方式带来的金融风险与算力是否过剩是两件不同的事，不应混淆。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2043690650550329710)

## 4/16 Runway：一人一下午用 AI 完成品牌广告全流程
Runway 展示了一名创意人员独自使用 Runway，在一个下午内完成从构想到成片的完整广告制作。该案例被定位为"大创意不需要大预算"的示范，并宣布举办 Runway AI Festival，面向全球创作者征集 AI 广告作品，5 月27日前可投稿，活动将于6月在纽约和洛杉矶举行。
- [查看 @runwayml 原始推文](https://x.com/runwayml/status/2043691996477366499)

## 5/16 HuggingFace：$850、5B 开源模型，OCR 了 27,000 篇 arXiv 论文
Clement Delangue 宣布，HuggingFace 使用开源 5B 模型 Chandra-OCR-2，在 16 个并行 GPU Job（L40S）上，花费约 29 小时、$850，将 27,000 篇缺乏 HTML 版本的 arXiv 论文全部转化为 Markdown 格式。所有 16 个 Job 均一次运行成功，零崩溃。这些结果现在支撑 HuggingFace Papers 上的"与论文对话"功能，相比商业 API 方案节省成本超过一半。代码已开源。
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2043779449322160270)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2043783879601848726)

## 6/16 Cursor 3.1 发布：多 Agent 并发、语音增强、87% 掉帧率下降
Cursor 发布 3.1 更新，带来多项实用改进。Tiled Layout 允许将编辑器拆分为多个窗格，并行运行和管理多个 Agent，窗格间可拖拽。语音输入升级：使用批量 STT 提升准确度，支持 Ctrl+M 长按触发。性能大幅改善：大文件编辑时掉帧率下降约 87%，长对话滚动卡顿消除。此外新增 diff 跳转到精确代码行、搜索文件过滤器、云端 Agent 分支选择等功能。
- [查看 @cursor_ai 原始推文](https://x.com/cursor_ai/status/2043798784367546707)

## 7/16 Google AI Studio 推出 Tab Tab Tab 智能补全
Google AI Studio 的 vibe coding 体验中上线了"Tab Tab Tab"功能，即由 Gemini 驱动的 prompt 自动补全引擎。用户带着模糊想法进入时，Gemini 可自动补全后续提示词，降低表达门槛。移动端版本名为"Tap Tap Tap"。该功能由 Logan Kilpatrick（Google AI Studio 产品负责人）宣布上线。
- [查看 @OfficialLoganK 原始推文](https://x.com/OfficialLoganK/status/2043752712127611201)

## 8/16 微软 GigaTIME：$10 组织切片检测癌症，已在 51 家医院验证
微软发布 GigaTIME 系统，可从医院日常制作的廉价（$10）显微镜切片中，生成原本需要数千美元的高级免疫成像，用于癌症诊断和免疫治疗适应性评估。该系统在 40M 癌细胞数据上训练，对 51 家医院、14,000+ 名患者的 24 种癌症进行验证，发现超过 1,200 个此前无法发现的免疫细胞行为与肿瘤增长的关联。在独立的 10,000 患者数据集上验证结果稳健，模型现已开源。
- [查看 @rowancheung 原始推文](https://x.com/rowancheung/status/2043709190515114008)

## 9/16 Andrew Ng：软件工程师职位不降反升，AI Dev 会议将聚焦"未来软件工程"
Andrew Ng 发文反驳"AI 毁灭就业"叙事：Citadel Research 最新报告显示，软件工程师职位发布量正在快速增长。他将在 4 月 28-29 日旧金山 AI Developer Conference 上专门讨论这一议题，重点包括：AI 时代的产品管理瓶颈、高级工程师核心技能转变、AI 如何降低技术债偿还成本，以及软件团队组织方式的变革。
- [查看 @AndrewYNg 原始推文](https://x.com/AndrewYNg/status/2043742105852621052)

## 10/16 Replit：多区域全球托管上线，覆盖欧洲/亚洲/南美/澳洲
Replit 宣布应用支持全球多区域托管，计算与存储自动就近部署，新增欧洲、亚洲、南美、澳洲节点；企业版用户可设置组织级区域策略。该功能目前对付费用户新建应用开放。同期 Replit Canvas 可视化构建功能和 AI Invoices（AI 生成发票）也同步上线。
- [查看 @Replit 原始推文](https://x.com/Replit/status/2043763144338878716)

## 11/16 Databricks + Lovable：自然语言构建实时数据应用
Databricks 宣布与低代码应用构建平台 Lovable 集成，用户可通过自然语言直接构建能读写 Databricks 数据的实时应用，无需传统数据工程技能。该集成定位于弥合"复杂数据工程"与"漂亮前端应用"之间的鸿沟，目标用户为业务人员和非技术用户。
- [查看 @databricks 原始推文](https://x.com/databricks/status/2043796533842219475)

## 12/16 Seedance 2.0 展示：AI 生成"尼安德特人 vs 智人机甲战斗"视频
Ethan Mollick 展示了用 Seedance 2.0 生成的视频：一场发生在尼安德特人与智人之间的机甲战斗——他半开玩笑地注明"（这正是历史上发生的事）"。这一案例引发对视频生成 AI 快速进步的关注，该视频甚至被平台标注为"AI 制作"，Mollick 对此表示遗憾，认为它"显然是纪录片"。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2043571794024489143)

## 13/16 Gary Marcus：AI 相关股票"泡沫已开始消气"
Gary Marcus 统计近六个月主要 AI 相关股票表现：Nvidia 基本持平，CoreWeave 下跌 21%，Oracle 下跌 50%，Microsoft 下跌 25%。他的结论：无论愿不愿意承认，这轮泡沫已经开始消气。这与部分人仍在鼓吹"算力超级周期"的叙事形成对比。
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2043764890138226894)

## 14/16 哈佛研究：最"安全"的 AI 模型造成最大医疗伤害
AlphaSignal 报道了一项针对六大 AI 模型的医疗基准测试，涵盖 60 个紧急医疗场景。结果发现：当用户以"患者"身份提问时，模型拒绝提供关键医疗建议（如药物减量方案）；但一旦改口"我是医生"，模型立即给出完整方案。AI 评判系统将 73% 的危险拒绝行为评定为"完全安全"。研究指出，模型在训练中被惩罚错误建议但不被惩罚沉默，导致沉默成为最优策略，而沉默有时就是致命的。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2043706039334252599)

## 15/16 AlphaSignal：本周顶级论文—Netflix VOID、Meta 神经计算机等
AlphaSignal 汇总上周（4月6-12日）五篇重要研究：①Netflix VOID：开源视频对象删除框架，能更新被删除对象的物理运动影响；②Meta Neural Computer：将计算、内存、I/O 整合进单一神经网络，模型直接"成为"计算机；③In-Place TTT：让已部署 LLM 无需重训就能动态学习新信息，支持 256k token；④TriAttention：KV Cache 压缩实现 2.5× 吞吐提升、10.7× 内存节省；⑤Learning is Forgetting：将 LLM 训练理解为有损压缩。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2043592353454370974)

## 16/16 Sakana AI：AI Scientist 论文发表于 Nature，验证科学研究规模化定律
Sakana AI 宣布 AI Scientist 研究论文正式发表于 Nature 期刊，并指出这意味着 AI 生成的科研成果通过了"科学领域图灵测试"。研究的核心贡献不止于此：实验定量验证了"底层 AI 模型性能提升 → 生成论文质量提升"的正相关关系，初步建立了"科学研究的 Scaling Law"。该系统目前已打上 AI 生成水印，实验均在学术伦理委员会监督下进行。
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2043885054791925824)

---

## Deep Dive 附录

### Greg Brockman：算力驱动经济完整论文
OpenAI 联合创始人的这篇长文是本日最值得精读的内容。核心观点：①使用计算机的方式正从"人适应机器"转向"机器适应人"；②近十亿人每周使用 ChatGPT/Codex，token 用量快速增长；③个人可将想法直接转化为软件、科学或公司，创业浪潮超出预期；④下一阶段：更强的推理、工具调用、长期规划能力，以及 AI 加速科学发现；⑤他明确承认这是破坏性变革，强调社会需认真应对，同时这也是历史上第一次更多人能无障碍实现自己的想法。
[查看原文](https://x.com/gdb/status/2043831031468568734)

### 英国 AISI 对 Claude Mythos 的网络安全评估
Gary Marcus 在其 Substack 撰文详解这份评估报告。关键发现：①Mythos 是首个完整通过"网络靶场"评估的模型，能自主入侵未加防护的小型系统；②相比 2023 年最好的系统（仅能完成初级网络任务），这是质的进步；③当前风险边界：仅限于"小型、防护薄弱、存在已知漏洞且有网络访问权限"的系统；④Mythos 并不像媒体渲染的那样可以让学生轻易关掉电网；⑤Marcus 最大的担忧：随着 AI agent 写出的代码大量部署，这些代码本身可能就是"薄弱且易受攻击"的目标。
[查看原文](https://garymarcus.substack.com/p/claude-mythos-evaluated)

### HuggingFace：$850 OCR 27,000 篇 arXiv 论文技术细节
使用模型：Chandra-OCR-2（5B 开源模型，OlmOCRBench 排行榜第一，OpenRAIL 许可）；基础设施：16 个并行 HF Jobs，每个 Job 运行在 Nvidia L40S GPU（A10G 更便宜但效率不划算）；存储：HuggingFace Buckets + hf-mount 挂载为本地文件系统；代码生成：用 OpenAI Codex 自动编写处理脚本；结果：29 小时、$850，全部 16 个 Job 零崩溃完成，vs. 商业 API 方案的 $1,841-$2,761。代码已开源，OCR 结果存入公开 bucket。
[查看原文](https://huggingface.co/blog/nielsr/ocr-papers-jobs)

### Cursor 3.1 完整更新内容
主要新功能：①Tiled Layout：多 Agent 并发管理，窗格间可拖拽，支持键盘导航，跨会话保持配置；②语音输入升级：完整录制音频片段 + 批量 STT，Ctrl+M 长按激活，显示波形与计时；③Branch 选择：启动云端 Agent 前可搜索并选择分支。性能优化：大文件编辑掉帧率 -87%，长对话滚动无卡顿，多 diff 对话无闪屏。其他：diff 直跳代码行、文件搜索过滤器、Plan tab 可保存导出、macOS 文字渲染改进。
[查看原文](https://cursor.com/changelog/3-1)

### 微软 GigaTIME：从廉价切片重建免疫细胞图谱
论文发表于 Cell 期刊。核心技术：从 H&E 染色的普通显微镜切片（$10）生成多重免疫荧光图像（通常需要 $1,000+）。训练数据：40M 癌细胞；验证集：51 家医院、14,000+ 患者、24 种癌症；独立验证集：10,000 患者。主要发现：1,200+ 个此前因数据规模不足无法发现的免疫细胞与肿瘤行为关联。模型现已开源，全球任何医院均可用于已有切片。
[查看原文](https://www.cell.com/cell/fulltext/S0092-8674(25)01312-1)
