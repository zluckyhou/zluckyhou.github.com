---
layout: daily
title: "AI Frontier Daily | 2026.07.27"
headline: "ChatGPT Work 把个人历史、建站和协作任务串成端到端 workflow"
date: 2026-07-27 09:07:00 +0800
permalink: /ai-daily/2026/07/27/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Sam Altman 与 Greg Brockman 今天集中强调 ChatGPT 的“work”能力。Sam 的例子是从手机发出一条长任务：读取个人 ChatGPT 历史，规划 9 人长周末旅行，生成一个用于协商目的地的 full-stack site，并在达成一致后准备 Gmail 邮件。Greg 则概括为 ChatGPT 正越来越像 personal AGI。信号不是单个 UI 功能，而是 OpenAI 把记忆、工具调用、代码生成、协作站点和外部应用动作包装成连续个人 workflow。"
summary: "Sam Altman 与 Greg Brockman 今天集中强调 ChatGPT 的“work”能力。Sam 的例子是从手机发出一条长任务：读取个人 ChatGPT 历史，规划 9 人长周末旅行，生成一个用于协商目的地的 full-stack site，并在达成一致后准备 Gmail 邮件。Greg 则概括为 ChatGPT 正越来越像 personal AGI。信号不是单个 UI 功能，而是 OpenAI 把记忆、工具调用、代码生成、协作站点和外部应用动作包装成连续个人 workflow。"
issue_count: 14
deep_dive_count: 6
reading_time: 16
cover: "https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image4-11-660x370.png"
signals: "sama · gdb · NVIDIAAI · SakanaAILabs · hardmaru · scale_AI · cohere · huggingface"
header-img: img/dark_yellow_400.png
---


## 1/14 ChatGPT Work 把个人历史、建站和协作任务串成端到端 workflow
Sam Altman 与 Greg Brockman 今天集中强调 ChatGPT 的“work”能力。Sam 的例子是从手机发出一条长任务：读取个人 ChatGPT 历史，规划 9 人长周末旅行，生成一个用于协商目的地的 full-stack site，并在达成一致后准备 Gmail 邮件。Greg 则概括为 ChatGPT 正越来越像 personal AGI。信号不是单个 UI 功能，而是 OpenAI 把记忆、工具调用、代码生成、协作站点和外部应用动作包装成连续个人 workflow。
- [查看 @sama 原始推文](https://x.com/sama/status/2081396796174282900)
- [查看 @sama 原始推文](https://x.com/sama/status/2081513071135346814)
- [查看 @gdb 原始推文](https://x.com/gdb/status/2081458174662726009)
- [查看 @gdb 原始推文](https://x.com/gdb/status/2081409255916359771)

## 2/14 NVIDIA Nemotron 3 Ultra 进入 agentic chip design 评测
NVIDIA AI 发布 Nemotron 3 Ultra 在 agentic RTL coding 上的测试结果。任务要求模型迭代编写芯片逻辑、运行 simulator、读取失败并改写，接近真实芯片设计工程循环。NVIDIA 称 Nemotron 3 Ultra 在九类真实设计工作中平均达到 97.1% pass rate，每轮平均 6,629 tokens，并在其测试的 open models 中同时领先准确率与 token 效率。芯片设计成为 coding agent 之外另一个可验证、可闭环的高价值 agent 场景。
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2081541801031110903)
- [查看 @NVIDIAAI 原始推文](https://x.com/NVIDIAAI/status/2081541802893398395)

## 3/14 Sakana Fugu-Ultra v1.1 接入 Claude Code 工作流
Sakana AI 宣布 Fugu-Ultra v1.1 支持 Claude Code-compatible interface。官方描述是让开发者在熟悉的 terminal coding workflow 中调用一个动态协调的 frontier model team，而不是依赖单一模型完成写代码、调试和执行。Hardmaru 同步称 Fugu-Ultra now works with Claude Code。这个方向延续 Sakana 的“一个 API 背后是多智能体系统”路线，把模型选择、专家分工和综合验证隐藏在开发者入口之后。
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2081357365526352038)
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2081526987777278155)
- [查看 @hardmaru 原始推文](https://x.com/hardmaru/status/2081384883356946799)

## 4/14 Open weights 公开信把开放模型重新推到产业政策中心
Sakana AI、Scale AI、Cohere、Hugging Face 相关账号今天都围绕 open weights 发声。Sakana 表示已签署“Open Weights and American AI Leadership”公开信，称开放生态支持 AI 访问、竞争、用户控制和安全；Scale AI 转发称 open models 对美国 AI leadership 和可靠系统建设很关键；Cohere 则强调今年已以 Apache 2.0 发布 Transcribe、Command A+、North Mini Code。开放模型讨论正在从开发者偏好转成产业政策、技术主权和企业控制权问题。
- [查看 @SakanaAILabs 原始推文](https://x.com/SakanaAILabs/status/2081565741317595425)
- [查看 @scale_AI 原始推文](https://x.com/scale_AI/status/2081580459780112420)
- [查看 @cohere 原始推文](https://x.com/cohere/status/2081470432415260682)
- [查看 @huggingface 原始推文](https://x.com/huggingface/status/2081333605448454554)

## 5/14 Together 将 Kimi K3 放进生产吞吐量产品
Together AI 宣布 Kimi K3 明天登陆 Together，并可通过 Provisioned Throughput 使用。该产品强调 reserved token-based capacity，承诺 guaranteed tokens/min、99% uptime SLA，并声称相较 Fable 成本低 65%。Together 同日还称 open models 在其 token 使用中一年内从 10% 提升到 30%。这把“开放模型是否足够强”的讨论落到生产指标：稳定吞吐、SLA、单位成本和模型可替换性。
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2081545198400909375)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2081545200900743672)
- [查看 @togethercompute 原始推文](https://x.com/togethercompute/status/2081481483483750517)

## 6/14 Databricks Genie hackathon 展示企业数据 agent 的三种形态
Databricks 总结第五届 customer hackathon，团队在一周内围绕 Genie 做真实技术用例。官方把项目分为三类：用 Genie Agents 查询受治理数据，用 Genie Code 构建数据、分析和 ML 工作流，以及把 Genie Agents 组合成更大的 agent systems。案例包括跨 190 张表和 300 多个 view 路由问题的 supervisory layer、治理智能平台、以及整合 17 个 live public feeds 的 overnight supply-chain brief。企业数据 agent 正从 demo 进入复杂权限和多源场景。
- [查看 @databricks 原始推文](https://x.com/databricks/status/2081404199330328756)
- [查看 @databricks 原始推文](https://x.com/databricks/status/2081558194992632045)

## 7/14 AlphaSignal 把新模型评估压缩成生产失败 smoke test
AlphaSignalAI 用 Anthropic Claude Opus 5 与 Google DeepMind Gemini Flash 更新引出模型迁移问题：面对新模型，团队不应只相信公开 benchmark，也不必一开始就搭完整内部评测。它建议先用 5-10 个会让系统不可用的生产失败样本做 smoke test，例如固定 180 字技术论文摘要任务中，比较事实保留、长度约束和关键限定语遗漏。这个思路与今天的 model routing 和 open model 成本讨论一致：模型采用正在变成具体业务风险筛选。
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2081292892187029971)
- [查看 @AlphaSignalAI 原始推文](https://x.com/AlphaSignalAI/status/2081293025192587382)

## 8/14 Ethan Mollick 的模型指南刚更新又过期
Ethan Mollick 表示，自己周四写的 AI model usage guide 已经需要加入 Opus 5 和 Codex voice mode，两者都在周五发布且“significant”。这条不是发布新闻，而是说明模型选择本身已经成为高频运营问题：即使持续关注，也很难维护静态推荐。对企业和个人来说，关键不只是知道最强模型是谁，而是建立按任务、成本、可验证性、数据权限和工具链支持切换模型的机制。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2081475928086003869)

## 9/14 Fable 与 Opus 5 游戏 demo 把长程生成推向可玩原型
Ethan Mollick 展示 Fable 根据他一年前伪造的 AI 视频概念，生成 Piranesi 与 Cezanne 风格 city builder game，模型自行提出拱门、水道、印象派笔触与社区演化等机制，并提供可玩链接与开源版本。Matt Shumer 的时间线则围绕 Opus 5、长循环和单 prompt 3D 游戏 demo 展开，强调用户正在用相同 prompt 复现并改造。多模态/代码模型的展示焦点正在从“生成画面”转为“生成可互动系统”。
- [查看 @emollick 原始推文](https://x.com/emollick/status/2081261849543070181)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2081562248246415752)
- [查看 @emollick 原始推文](https://x.com/emollick/status/2081391655739941362)
- [查看 @mattshumer_ 原始推文](https://x.com/mattshumer_/status/2081423788139221501)

## 10/14 Suno 把音乐生成产品扩展到 stems、MIDI 和车载场景
Suno 今天汇总 Web 与移动端的新能力，包括 Advanced Stem Separation、Export Stems as MIDI、Lyric Co-Writer 与 Autosave、Screenshot to Song，以及 Apple CarPlay 和 Android Auto 支持。它还发布完整 walkthrough 展示 10 个工具的使用方式。音乐生成产品竞争正在从“生成一首歌”扩展到创作工作流：拆分 stems、导出 MIDI、辅助歌词、从截图触发创作，以及把消费和创作入口放进移动与车载环境。
- [查看 @suno 原始推文](https://x.com/suno/status/2081443050312843765)
- [查看 @suno 原始推文](https://x.com/suno/status/2081445078216954299)

## 11/14 Gary Marcus 再次把可靠性定义为当前 AI 影响力上限
Gary Marcus 今天多条推文讨论 AI 可靠性、alignment 和监管。他认为当前 AI 在 coding 和 math 等可验证、人类在环、可合成大量数据的领域已经改变世界，但还不是可以信任的通用自治系统；这限制了其在更广泛场景中的影响。他还提出更高比例 alignment 投入、航空式安全程序与更难被训练污染的 benchmark。该观点与今日 agent 生产化新闻形成对照：系统能力增长仍被可靠性和验证机制约束。
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2081531360225923114)
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2081516011807703424)
- [查看 @GaryMarcus 原始推文](https://x.com/GaryMarcus/status/2081414488117678532)

## 12/14 Yann LeCun 用开源基础设施回应 open weights 争论
Yann LeCun 今天在 open source 话题下回应称，Android 相对 iOS 的胜出与开放性有关，并补充说全世界运行操作系统的计算机大体都依赖 Linux，移动通信网络的软件基础设施也高度开源。他还讨论 MAE、I-JEPA、SimCLR 等自监督方法的差异。放在今日语境中，这些回复为 open weights 公开信提供技术史论据：开放系统的价值不只在研究复现，也在生态规模、成本下降和基础设施可组合性。
- [查看 @ylecun 原始推文](https://x.com/ylecun/status/2081461983493394805)
- [查看 @ylecun 原始推文](https://x.com/ylecun/status/2081463233932652917)
- [查看 @ylecun 原始推文](https://x.com/ylecun/status/2081280166546841639)

## 13/14 LangChain 社群继续强调 harness、eval 和 learning loop
Harrison Chase 今天转发多条关于 agentic systems 的工程讨论，核心词包括 model optionality、harness control、learning loop、design choices 和 evals。虽然不是 LangChain 官方发布，但它与上周 eval engineering、router、trace 和 coding agent skill 的讨论连在一起：企业拥有的重点不一定是全部模型能力，而是可观测的任务循环、评测数据、工具边界和持续改进流程。agent 生产化的竞争点正在向 harness 和 learning loop 下沉。
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2081579904504873113)
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2081485208621379782)
- [查看 @hwchase17 原始推文](https://x.com/hwchase17/status/2081411558664454434)

## 14/14 xAI 与 Grok Build 继续把研究和构建能力推向产品入口
Elon Musk 今天称 Grok 4.5 是 solid workhorse，并提到 Grok Build /deep-research。虽然相关推文信息量有限，但与 Sam Altman 的 ChatGPT Work、Fugu-Ultra 接入 Claude Code、以及 Databricks Genie 的企业数据 agent 放在一起看，头部产品都在把“研究、构建、调用工具、生成界面”做成统一入口。未来竞争不只是模型分数，而是用户能否把复杂任务直接交给一个可执行环境。
- [查看 @elonmusk 原始推文](https://x.com/elonmusk/status/2081485024872796427)
- [查看 @elonmusk 原始推文](https://x.com/elonmusk/status/2081449658363134075)
- [查看 @sama 原始推文](https://x.com/sama/status/2081396796174282900)

---

## Deep Dive 附录

### NVIDIA Nemotron 3 Ultra agentic RTL coding
NVIDIA 今日最重要的技术信号是把 open model 评测放进芯片设计闭环。RTL coding 任务要求模型写出芯片逻辑代码、调用 simulator、根据失败反馈继续修改，接近真实硬件工程的可验证循环。NVIDIA 称 Nemotron 3 Ultra 在九类真实设计工作中平均达到 97.1% pass rate，每轮平均 6,629 tokens，并在其测试的 open models 中同时领先准确率和效率。这个方向说明可验证工程任务正在从 SWE-Bench 扩展到芯片设计，frontier labs 与硬件公司会越来越重视“能跑工具、能读错误、能自我修复”的长程 agent 能力。
[查看原文](https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-leads-open-models-on-accuracy-and-efficiency-in-agentic-rtl-coding/)

### Sakana Fugu-Ultra v1.1 与 Claude Code interface
Fugu-Ultra v1.1 的关键不是又发布一个 coding model，而是把多模型协调放进 Claude Code-compatible interface。开发者仍在 terminal 中工作，但请求背后由 Fugu 动态组织不同 frontier models 执行写代码、调试、执行和综合。这个产品形态把“模型池 + orchestrator + verification”包装成一个模型入口，和 Cursor Router、Together Provisioned Throughput 一样，反映模型选择正在从用户手动判断转为系统内部调度。
[查看原文](https://console.sakana.ai/get-started)

### Together Kimi K3 Provisioned Throughput
Together 的 Kimi K3 发布重点是生产吞吐量，而不是只谈榜单分数。Provisioned Throughput 提供 reserved token-based capacity，推文承诺 guaranteed tokens/min、99% uptime SLA 和相较 Fable 低 65% 的成本。Together 同日称 open models 在其 token 使用中一年内从 10% 增长到 30%。这说明 open model adoption 的核心驱动力正在转为成本和可运营性：企业需要稳定容量、SLA、价格曲线和可替换模型，而不只是能否调用最新 API。
[查看原文](https://www.together.ai/)

### Databricks Genie customer hackathon
Databricks 的第五届 customer hackathon 展示了企业数据 agent 的落地路径。十个项目围绕 Genie 分为三类：用 Genie Agents 查询受治理数据，用 Genie Code 构建数据、分析和 ML 工作流，以及把 Genie Agents 组合进更大的 agent system。案例包括跨 190 张表和 300 多个 view 的问题路由、治理智能平台和整合 17 个 live public feeds 的供应链 brief。重点是 agent 不再只面对单表或 demo 数据，而是在权限、治理、多源数据和真实业务 workflow 中运行。
[查看原文](https://www.databricks.com/)

### Hugging Face radical transparency 与开放生态安全议题
Clement Delangue 转发的 TechCrunch 报道把今日 open weights 讨论带到安全治理层面。报道标题指向 Hugging Face CEO 在 OpenAI hack 之后呼吁 radical transparency。无论具体事件细节如何，它和 Sakana、Scale AI、Cohere 的 open weights 表态共同说明：开放生态的争论不只是权重是否公开，还包括安全事件如何披露、用户和企业如何获得控制权、以及产业是否能用更透明机制建立信任。
[查看原文](https://techcrunch.com/2026/07/26/hugging-face-ceo-calls-for-radical-transparency-after-unprecedented-openai-hack/)

### Ethan Mollick model selection guide
Mollick 说自己周四写的模型使用指南已经需要加入 Opus 5 和 Codex voice mode，这凸显模型选择的半衰期正在变短。今天的多条新闻共同指向同一问题：ChatGPT Work 强调端到端任务，Fugu-Ultra 强调多模型协调，Together 强调 open model 生产吞吐，AlphaSignal 强调生产失败 smoke test。静态“用哪个模型”清单越来越不够，真正的能力是持续评估、快速试用、按任务切换，并在成本、可靠性和工具链支持之间做取舍。
[查看原文](https://www.oneusefulthing.org/p/an-opinionated-guide-to-which-ai-b22)
