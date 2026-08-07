---
layout: daily
title: "AI Frontier Daily | 2026.03.29"
headline: "AI Scientist 论文正式登上 Nature 期刊"
date: 2026-03-29 09:07:00 +0800
permalink: /ai-daily/2026/03/29/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Sakana AI 宣布其里程碑式研究「The AI Scientist: Towards Fully Automated AI Research」于 2026 年 3 月 26 日正式发表于 *Nature* 期刊（人类最顶级科学期刊之一）。其中 AI Scientist-v2 生成的论文成为史上首篇通过严格同行评审的全自动 AI 创作论文，在 ICLR 2025 ICBINB workshop 评分达 6.33/7，超越 55% 的人类作者论文。内置评审系统与人类评审一致性达 69% 平衡准确率，甚至超越 NeurIPS 2021 人际一致性基准。论文质量随底层基础模型能力扩展而提升。合作机构包括 Sakana AI、不列颠哥伦比亚大学、Vector Institute 与牛津大学。"
summary: "Sakana AI 宣布其里程碑式研究「The AI Scientist: Towards Fully Automated AI Research」于 2026 年 3 月 26 日正式发表于 *Nature* 期刊（人类最顶级科学期刊之一）。其中 AI Scientist-v2 生成的论文成为史上首篇通过严格同行评审的全自动 AI 创作论文，在 ICLR 2025 ICBINB workshop 评分达 6.33/7，超越 55% 的人类作者论文。内置评审系统与人类评审一致性达 69% 平衡准确率，甚至超越 NeurIPS 2021 人际一致性基准。论文质量随底层基础模型能力扩展而提升。合作机构包括 Sakana AI、不列颠哥伦比亚大学、Vector Institute 与牛津大学。"
issue_count: 15
deep_dive_count: 2
reading_time: 11
cover: "https://sakana.ai/assets/ai-scientist/cover_2.jpeg"
signals: "SakanaAILabs · hardmaru · cohere · ylecun · mustafasuleyman · karpathy · ClementDelangue · fchollet"
header-img: img/dark_yellow_400.png
---


## 1/15 AI Scientist 论文正式登上 Nature 期刊
Sakana AI 宣布其里程碑式研究「The AI Scientist: Towards Fully Automated AI Research」于 2026 年 3 月 26 日正式发表于 *Nature* 期刊（人类最顶级科学期刊之一）。其中 AI Scientist-v2 生成的论文成为史上首篇通过严格同行评审的全自动 AI 创作论文，在 ICLR 2025 ICBINB workshop 评分达 6.33/7，超越 55% 的人类作者论文。内置评审系统与人类评审一致性达 69% 平衡准确率，甚至超越 NeurIPS 2021 人际一致性基准。论文质量随底层基础模型能力扩展而提升。合作机构包括 Sakana AI、不列颠哥伦比亚大学、Vector Institute 与牛津大学。
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2038045740619194808)
- [查看 @hardmaru 原始推文](https://x.com/hardmaru/status/2037706698350301570)

## 2/15 Cohere 发布开源 SOTA 语音识别模型 Cohere Transcribe
Cohere Labs 发布 Cohere Transcribe，一个 20 亿参数的音频转文字模型，采用 Apache 2.0 授权开源。该模型在英语 ASR 排行榜（截至 2026.03.26）中以平均词错率 5.42 位居榜首，超越 Zoom Scribe v1（5.47）和 IBM Granite 4.0 1B（5.52）。支持 14 种语言（英、法、德、日、中、韩等），推理速度比同类专用 ASR 模型快最高 3 倍。支持 transformers、vLLM、mlx-audio（苹果硅）及浏览器 WebGPU 运行。模型权重已上传至 HuggingFace，Clement Delangue 等多人转发。
- [查看 @cohere 原始推文](https://x.com/cohere/status/2037929485459235316)

## 3/15 Meta 发布 SAM 3.1：视频对象分割重大升级
Meta AI 发布 SAM 3.1（Segment Anything Model 3.1），作为 SAM 3 的即插即用更新，引入「对象多路复用」（object multiplexing）功能，显著提升视频处理性能。Yann LeCun 转发了这一发布。该功能允许模型在视频流中同时追踪和分割多个对象，使实时视频分割能力得到大幅增强。
- [查看 @ylecun 原始推文](https://x.com/ylecun/status/2038061671873225199)

## 4/15 Mustafa Suleyman：AI 需求将全面压倒供给
微软 AI CEO Mustafa Suleyman 发文称：未来至少数年，整个 AI 行业将被一个事实所定义——需求将压倒性地超过供给。因此，哪些公司/产品有足够的利润空间来支付 token 成本，哪些就将快速改进。他认为这意味着延迟和成本的持续下降将惠及有支付能力的产品，形成正向飞轮。该推文获得 558 点赞，113K 次浏览，47 次转发，被广泛引用为对 AI 行业结构最精准的判断之一。
- [查看 @mustafasuleyman 原始推文](https://x.com/mustafasuleyman/status/2037964810575290593)

## 5/15 Andrej Karpathy：LLM 能被说服相信任何事
Andrej Karpathy 分享了一次深刻体验：花 4 小时用 LLM 完善博客文章论点，感觉论点极具说服力。然后让同一个 LLM 从对立角度论证，结果它彻底摧毁了整个论点并说服他相反观点才是正确的。这一推文病毒式传播，获得 2 万点赞、1517 次转发、138 万次浏览，引发对 LLM 认知可靠性的广泛讨论——LLM 本质上是极强的论证生成机器，而非真理机器。
- [查看 @karpathy 原始推文](https://x.com/karpathy/status/2037921699824607591)

## 6/15 Qwen3-14B 在单张 RTX 5060 上超越 Claude Sonnet 4.5
开源社区展示：通过优秀的测试框架（harness），Qwen3-14B 在 LiveCodeBench 上实现了超越 Claude Sonnet 4.5 的表现，硬件仅为单张 RTX 5060。Clement Delangue 转发并称"这些超级天才用 Qwen3-14B、单张 RTX 5060 和优秀框架，在 LiveCodeBench 上击败了 Sonnet 4.5 的表现"。这进一步证明开源模型在特定任务上正逼近甚至超越前沿闭源 API 模型。
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2037963945751843078)

## 7/15 François Chollet：AGI 时代将出现认知阶级分化
Keras 创始人 François Chollet 发表论述：如果 AGI 实现，未来的阶级分化将不是基于财富，而是基于「认知自主性」。将形成「专注阶级」（focus class，控制自己注意力、真正行动的人）与「糟粕阶级」（slop class，被 AI 生成内容淹没、被动消费的人）。另一条推文中他指出：把智能视为无上限标量（"未来 AI 将有 10000 IQ"）是最大误解，智能是有最优解上界的转化比率。两条推文共获 1600+ 点赞。
- [查看 @fchollet 原始推文](https://x.com/fchollet/status/2037940998933008420)
- [查看 @fchollet 原始推文](https://x.com/fchollet/status/2038069289643806957)

## 8/15 Yann LeCun：所有闭源模型都在利用开源模型但不回馈
图灵奖得主、Meta 首席 AI 科学家 Yann LeCun 转发自己此前的推文，直言："让我们说清楚，所有闭源模型都从开源模型中获益，却不给予任何回报。"此言论来自一场关于 HuggingFace CEO Clement Delangue 帖子的对话。这再次点燃关于 AI 开源生态公平性的讨论，317 次转发。
- [查看 @ylecun 原始推文](https://x.com/ylecun/status/2037891651138474274)

## 9/15 TurboQuant：llama.cpp 实现 3.5x KV Cache 压缩，引发学术信用争议
TurboQuant CUDA for llama.cpp 实现 3.5x KV cache 压缩，且质量超越 q8_0（困惑度降低 -1.17%）。Clement Delangue 转发，210 次。但研究员 Yoav Goldberg 随后发文称这涉及学术信用问题：TurboQuant 论文中使用了 JL 变换（Johnson-Lindenstrauss）来构建码本，却未给予充分引用，让读者误以为 JL/随机投影技术是新发明。这不仅是引用问题，而是严重影响读者对技术新颖性的判断。
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2037717991668805730)
- [查看 @yoavgo 原始推文](https://x.com/yoavgo/status/2037865752695382486)

## 10/15 本地模型跑赢云端 API：社区掀起「去 API 化」浪潮
多条病毒式推文显示本地模型性价比已全面提升：一名用户每月花费 200 美元调用云端 AI API，改用本地模型后完全免费，同等任务质量；另有人展示 $2500 规格 Mac Mini（M 系列）可运行蒸馏版 70B 模型；Qwen3.5-35B 经 20% 压缩、仅约 1% 性能损失后可在 24GB VRAM 中以 4-bit 全量加载；有人原计划每月花 330 美元用 ElevenLabs 做语音，最终改用本地开源 TTS。Clement Delangue 大量转发这类内容，配合 HuggingFace 的模型分发定位。
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2037962410670080122)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2037718401951396028)
- [查看 @ClementDelangue 原始推文](https://x.com/ClementDelangue/status/2037720316500140245)

## 11/15 AI 可通过匿名帖子重新识别用户真实身份
AlphaSignal 报道新研究：LLM 可仅凭原始帖子和对话内容，将匿名/化名账号与真实身份关联。研究团队构建了四步系统：1) 从帖子历史中提取身份线索；2) 交叉引用多个平台数据；3) 整合所有线索；4) 生成真实身份判断。Gary Marcus 也转发了相关研究，认为这是"AI 模型确实记忆训练数据的明确证明"。两者共同指向 AI 对隐私的深层威胁。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2037907842582069474)
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2037703816947384609)

## 12/15 Cheng Lou：为生成式 AI 时代重新设计互联网文本渲染
Linus Ekenstam 高度评价 Cheng Lou（React、Messenger、Midjourney 等项目核心开发者）的新工作：现有互联网技术栈对动态和生成式 UI 支持不足，根本问题在于文本渲染层是陈旧的。Cheng Lou 正在从底层解决这一问题，使真正动态的、生成式的 UI 成为可能。该推文获得 2080 点赞、104 次转发、48.9 万次浏览，被称为"这将从核心上改变互联网"。
- [查看 @LinusEkenstam 原始推文](https://x.com/LinusEkenstam/status/2037899857709433013)

## 13/15 Perplexity 估值 200 亿美元，却没有训练任何 AI 模型
多条热门推文讨论 Perplexity AI 的商业模式：这家估值 200 亿美元的公司没有训练任何 AI 基础模型，其产品建立在 19 个其他公司的模型之上。这成为 AI 产业分层的典型案例讨论——产品层（应用层）公司可在没有自有基础模型的情况下实现巨大估值。Linus Ekenstam 转发，255 次。
- [查看 @LinusEkenstam 原始推文](https://x.com/LinusEkenstam/status/2037894746610253991)

## 14/15 Tesla FSD Supervised 进入欧洲，Grok Imagine 持续走红
马斯克转发 Tesla Europe 的视频，展示 FSD Supervised 在阿姆斯特丹最繁忙街道的表现，并称欧洲用户因 EU 极端监管负担长期被限制在基础车道跟随功能。同时，多条用户视频展示 Grok Imagine 生成效果，马斯克直言"Grok 每周都在变快变聪明"，该推文获 3 万点赞、2100 万次浏览。
- [查看 @elonmusk 原始推文](https://x.com/elonmusk/status/2037843744255521238)
- [查看 @elonmusk 原始推文](https://x.com/elonmusk/status/2037936582519623919)

## 15/15 研究：AI 与社交媒体在政治极化上走向相反——AI 让人趋于中间
Ethan Mollick 转发一项研究：虽然社交媒体加剧极化，但证据显示 AI 可能将人们推向政治中间立场，且对所有意识形态光谱的用户均有此效果。Mollick 同日还指出：X 搜索长期不好用，直到用 Grok AI 才得到解决，但代价是"每次关键词搜索要消耗大量 token"——讽刺地描述了 AI 搜索时代的成本困境。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2037909495242797103)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2037965752972513777)

---

## Deep Dive 附录

### The AI Scientist: Towards Fully Automated AI Research（Nature, 2026）
Sakana AI 联合不列颠哥伦比亚大学、Vector Institute、牛津大学发布的里程碑成果，于 2026 年 3 月 26 日正式登上 *Nature* 期刊。核心成就：AI Scientist-v2 生成的论文成为史上首篇通过严格同行评审（ICLR 2025 ICBINB workshop）的全自动 AI 创作论文，评分 6.33/7，超越 55% 人类作者。内置 AI 评审系统达到 69% 平衡准确率，超越 NeurIPS 2021 人际一致性基准。系统当前局限：产出思路较浅、方法论严谨性不足、偶发幻觉（引用不准确、图表重复）。论文质量随基础模型能力扩展而提升，暗示未来改进空间巨大。
[查看原文](https://sakana.ai/ai-scientist-nature/)
[查看原文](https://www.nature.com/articles/s41586-026-10265-5)

### Cohere Transcribe：新一代开源 ASR 模型
Cohere Labs 发布基于 Conformer 编码器-解码器架构的 20 亿参数 ASR 模型，Apache 2.0 开源授权。主要数据：英语 ASR 排行榜（2026.03.26）平均词错率 5.42（#1），LibriSpeech clean 数据集 WER 1.25（最优），比同类专用 ASR 模型快最高 3 倍。支持 14 种语言（含中、日、韩、阿拉伯语），支持 transformers、vLLM、mlx-audio（苹果硅）及浏览器 WebGPU 推理。局限：不支持自动语言检测（需预设语言）、无时间戳/说话人分离、易受背景噪音干扰（建议配合 VAD 预处理）。
[查看原文](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026)
