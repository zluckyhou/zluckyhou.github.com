---
layout: daily
title: "AI Frontier Daily | 2026.08.16"
headline: "据 FT 报道，OpenAI 撤销集中式 Preparedness 团队并分散职责"
date: 2026-08-16 09:07:00 +0800
permalink: /ai-daily/2026/08/16/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Financial Times 经 Gary Marcus 转发的消息称，OpenAI 已在 7 月底撤销集中式 Preparedness 团队，把 Preparedness Framework 各风险领域的职责分配给其他团队。公开信息没有列出新的负责人、决策权限或问责链路，OpenAI 也尚未发布专门说明。其 5 月治理框架仍称 Preparedness Framework 是管理网络、CBRN、有害操纵和失控风险的基础，因此此次变化更像组织重组而非框架取消；集中协调和外部披露是否受影响仍待公司解释。"
summary: "Financial Times 经 Gary Marcus 转发的消息称，OpenAI 已在 7 月底撤销集中式 Preparedness 团队，把 Preparedness Framework 各风险领域的职责分配给其他团队。公开信息没有列出新的负责人、决策权限或问责链路，OpenAI 也尚未发布专门说明。其 5 月治理框架仍称 Preparedness Framework 是管理网络、CBRN、有害操纵和失控风险的基础，因此此次变化更像组织重组而非框架取消；集中协调和外部披露是否受影响仍待公司解释。"
issue_count: 14
deep_dive_count: 6
reading_time: 14
cover: "https://cdn.prod.website-files.com/69654e88dce9154b5f12070c/6a01f9550922372345dcfe61_OG-customer%20story-%20image-Yutori.png"
signals: "GaryMarcus · theobearman · DarioAmodei · ylecun · emollick · Alibaba_Qwen · togethercompute · gdb"
header-img: img/dark_yellow_400.png
---


## 1/14 据 FT 报道，OpenAI 撤销集中式 Preparedness 团队并分散职责
Financial Times 经 Gary Marcus 转发的消息称，OpenAI 已在 7 月底撤销集中式 Preparedness 团队，把 Preparedness Framework 各风险领域的职责分配给其他团队。公开信息没有列出新的负责人、决策权限或问责链路，OpenAI 也尚未发布专门说明。其 5 月治理框架仍称 Preparedness Framework 是管理网络、CBRN、有害操纵和失控风险的基础，因此此次变化更像组织重组而非框架取消；集中协调和外部披露是否受影响仍待公司解释。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/GaryMarcus/status/2088805389861318854" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GaryMarcus</a><a class="source-chip" href="https://x.com/theobearman/status/2088758426511757774" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@theobearman</a></div>

## 2/14 Dario Amodei 与 Yann LeCun 正面交锋：前沿监管还是开放权力制衡
Dario Amodei 反对把监管等同于权力集中，称按能力分层测试、对低收入或低训练成本公司设豁免，可同时约束头部实验室并给追赶者留空间；开放权重也无法消除算力带来的集中。Yann LeCun 则主张像保护多元媒体一样保持 AI 的语言、价值观和专业多样性，认为只有开放基础模型能防止单一供应商决定“好”与“坏”。双方都承认集中风险，核心分歧是主要制衡应来自制度化监管还是开放竞争。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/DarioAmodei/status/2088758816376807762" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@DarioAmodei</a><a class="source-chip" href="https://x.com/ylecun/status/2088880284129210405" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ylecun</a></div>

## 3/14 o3-mini 代理循环生成考题，在 1,700 人实地研究中达到可比心理测量质量
一项重新引发关注的大学实地研究用 o3-mini 在“生成—批评—修订”循环中制作选择题，覆盖 91 门课、约 1,700 名学生。AI 题平均正确率 60%，比 AP Statistics 人工题的 39% 更容易；平均区分度 1.3 对 1.2，峰值可靠性 0.79 对 0.72。结果说明旧模型配合可验证迭代也能产出有效题目，但人工对照只在 20 门统计课进行，研究仅覆盖选择题和 10 题短测验，不能外推到所有学科与考试形态。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/emollick/status/2088864599701442925" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a></div>

## 4/14 Qwen 全系累计下载突破 30 亿，Qwen3.8-27B 登顶 Hugging Face 趋势榜
Qwen 宣布其模型生态累计下载量达到 30 亿；同期 Qwen3.8-27B 成为 Hugging Face 趋势榜第一，并继续展示在笔记本、RTX Spark、手机和车载平台的部署。该 27B 开放权重模型已在前一日完成多平台 Day-0 铺开，今天的新信号主要是采用规模和社区热度，而不是新版本发布。下载次数包含重复拉取、自动化和镜像流量，不能直接等同活跃用户；趋势排名也反映短期关注，不代表统一基准下的模型质量。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Alibaba_Qwen<span class="source-chip__links"><a href="https://x.com/Alibaba_Qwen/status/2088881015855182122" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 1">1</a><a href="https://x.com/Alibaba_Qwen/status/2088876951041941792" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 2">2</a><a href="https://x.com/Alibaba_Qwen/status/2088891548507492646" target="_blank" rel="noopener" aria-label="@Alibaba_Qwen 原文 3">3</a></span></span></div>

## 5/14 Yutori 披露浏览器代理生产栈：Navigator 推理提速 2 倍、成本降至约五分之一
Yutori 的 Navigator 以截图—动作循环驱动 Scouts、Delegate 和开发者 API，单任务可在 10–15 分钟内调用模型数十次，形成长输入、短工具输出与高前缀复用的特殊负载。Together AI 称其基于 vLLM prefix caching 的部署达到每步 2 倍速度、4–5 倍更低成本，并为持续运行任务提供 99.9% SLA。Navigator 用合成与真实网站进行 SFT 和强化学习；性能数字来自供应商客户案例，页面未公开基准、样本量与失败率，仍需独立复核。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/togethercompute/status/2088807960457699509" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute</a></div>

## 6/14 OpenAI 暗示让模型路由取代手动选择，产品控制权争议随之升温
Greg Brockman 表示 OpenAI 正朝“不再需要手动选择模型”的方向推进，指向由系统按任务自动分配速度、成本和能力不同的模型。推文没有给出上线时间、适用产品、路由指标或是否保留强制选择，因而目前更接近产品方向声明。自动路由可降低普通用户的选择负担，也可能改变可复现性、成本预期和上下文连续性；回复中已有用户要求保留显式控制。是否提供锁定模型、路由解释和企业策略将决定这一设计的接受度。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/gdb/status/2088658133971509640" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a></div>

## 7/14 ChatGPT 搜索加入餐厅可用时段与第三方预订入口
Greg Brockman 提醒用户尝试 ChatGPT 的 reservation search。OpenAI 帮助文档显示，餐厅结果可展示受支持第三方平台的可用时间和 Reserve 按钮，并把提示词中的人数、日期与时间预填到外部流程；用户仍需检查并确认。该能力并不覆盖所有餐厅、地区和服务商，ChatGPT 也不保存已完成预订，取消或修改需回到第三方平台。产品由信息检索向低风险交易入口延伸，但当前仍是搜索、跳转和预填，而非独立闭环代理。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/gdb/status/2088489438297133066" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a></div>

## 8/14 Runway 为 Seedance 2.5 开放 1080p 早期访问
Runway 宣布 Seedance 2.5 的 1080p 生成进入早期访问，强调更清晰的高分辨率细节。其产品页将 Seedance 2.5 描述为可组合最多 50 个文本、图像、视频和音频参考，原生生成最长 30 秒、多镜头且带声音的视频，并计划在正式发布时覆盖所有付费方案；但页面仍标注“coming soon”，说明本次 1080p 入口属于分阶段开放。官方尚未披露早期访问范围、积分消耗、生成速度和与 4K 版本的时间表。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/runwayml/status/2088510581120647272" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@runwayml</a></div>

## 9/14 Abacus AI 推出一段提示词配置的企业 Voice Agents
Abacus AI 宣布 Voice Agents：用户用文本提示配置企业电话支持，可分配免费电话号码、连接内部系统、选择或定制类人声线，并把呼叫处理纳入现有 ChatLLM 订阅。公告把号码、系统集成、声音和业务流程压缩到一次配置，目标是降低呼叫中心代理的部署门槛。推文没有说明支持国家、并发上限、通话单价、转人工、录音合规、延迟或系统连接器清单，因此现阶段可确认的是产品入口和订阅捆绑，企业级服务指标仍待文档补充。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/bindureddy/status/2088829927751643402" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a></div>

## 10/14 Arcee 开源 nac，用“中央编排器 + threads + episodes”守住长任务意图
Arcee 开源 Apache-2.0 的 nac agent harness，面向实验、训练、基础设施与原型等长时间任务。中央 orchestrator 只做规划和拆分，不能执行命令或编辑文件；独立 threads 执行工作，再用结构化 episodes 汇报结果，以分离决策、执行和状态摘要。项目提供本地 Web 界面、MCP、可移植 onboarding skill，并支持 Arcee、ChatGPT Codex OAuth 及多种兼容 API。架构与代码已公开，但公告没有给出成功率、成本或对照基准。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/ClementDelangue/status/2088659946825228570" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@ClementDelangue</a></div>

## 11/14 LangChain 提出“拥有自己的智能”：模型、上下文与 harness 都要可迁移
Harrison Chase 在演讲中把代理概括为“模型 + harness + context”：模型权重可自有或可替换，记忆应可迁移，harness 需与模型解耦并按用例提供正确上下文。组织还应保留私有评测、trace、反馈、决策和机构知识，以“运行代理—收集轨迹—发现关键样本—改进系统”形成数据飞轮。LangChain 以 middleware、Deep Agents、LangGraph、Harbor 和 LangSmith Engine 对应这些层。该主张强调长期竞争力来自可配置执行层和反馈资产，而非单次选择最强模型。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hwchase17/status/2088653366335582629" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17</a></div>

## 12/14 Grok Bot 扩展到本地 CLI、记忆系统与 Unity 游戏构建
Grok 4.6 发布后的下游实验继续扩散：用户称 Grok Bot 可调用本机 CLI，并连接自托管记忆系统；Matt Shumer 则在训练它通过 Unity 构建游戏，承诺后续公开进展。Elon Musk 转发这些案例，把 Grok Bot 定位从聊天入口推进到可操作本地工具链的执行代理。当前证据主要来自用户演示和开发者预告，尚未给出权限隔离、凭据管理、失败恢复、Unity 项目质量或可复现实验；这次更新是用例扩展，不是新的模型版本。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@elonmusk<span class="source-chip__links"><a href="https://x.com/elonmusk/status/2088786101486182418" target="_blank" rel="noopener" aria-label="@elonmusk 原文 1">1</a><a href="https://x.com/elonmusk/status/2088786270424313955" target="_blank" rel="noopener" aria-label="@elonmusk 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/mattshumer_/status/2088666207108948281" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@mattshumer_</a></div>

## 13/14 Databricks 用 DevHub prompts 与 Apps 模板缩短代理应用部署路径
Databricks 展示用 DevHub prompts 驱动编码代理检查环境、安装依赖、搭建应用并部署到 workspace，再通过模板持续扩展而无需从零开始。Genie Analytics 模板可加入聊天界面，让用户用自然语言查询 workspace 数据；官方文档还提供 OpenAI Agents SDK 模板、MLflow tracing/evaluation、ResponsesAgent 接口和 Genie Agent 资源。该更新把“提示词 + 模板 + 托管运行时”组合成应用入口，但实际部署仍需配置服务主体、Unity Catalog 数据权限和底层 SQL/模型资源。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/databricks/status/2088652565026050093" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@databricks</a></div>

## 14/14 AI 采用的下一道门槛可能是消费者态度，而非纯粹成本
Ethan Mollick 指出，独立游戏开发者资源最紧张、最有动力借助 AI，却常比大型工作室承受更严格的社区审查，导致部分团队选择使用但不披露。他进一步认为，消费者对 AI 的情感会决定哪些行业因自动化变得高效、哪些行业反而强调手工与“非 AI”价值；跨越两类受众的产品尤其难处理。该观点没有提供量化调查，但揭示了部署经济性之外的采用约束：标签、信任和审美规范可能改变技术扩散速度。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2088667047635169480" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2088667680282964460" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a><a href="https://x.com/emollick/status/2088669291231260779" target="_blank" rel="noopener" aria-label="@emollick 原文 3">3</a></span></span></div>

---

## Deep Dive 附录

### OpenAI Preparedness 重组：框架仍在，集中问责结构变得不透明
FT 报道称集中式团队在 7 月底被撤销，各风险领域职责分散到其他团队；现有公开材料没有说明新负责人、跨领域升级机制、Safety Advisory Group 的接口或董事会如何获得统一判断。OpenAI 5 月仍把 Preparedness Framework 定义为严重风险治理基础，并在网络、CBRN、有害操纵、失控、事件响应和外部专家参与上保留流程。因此不能把组织撤销直接解读为停止风险工作，但在 Astra 网络能力触及“Critical”讨论、近期安全负责人流动的背景下，缺少主动说明会放大外界对协调和独立性的疑问。
[查看原文](https://www.ft.com/content/53082739-7714-4aae-9816-e55ab423cbee)

### Dario Amodei 与 Yann LeCun：双方都反集中，但选择了不同的制衡器
Amodei 认为前沿能力天然受 scaling laws 与算力约束而趋向集中，开放权重只能把部分控制转移给有芯片的人；他主张对前沿实验室实施更严格测试，同时以收入或训练成本阈值豁免小公司，让制度约束公司权力。LeCun 则认为 AI 像媒体和互联网，需要多语言、多价值观、多偏好的开放基础模型来对冲单一供应商，否则“安全”会成为定义合法智能的权力。两条路线都承认恶意使用与集中风险，争点不是要不要分权，而是规则、模型可得性和算力三者中哪一项应承担主要制衡。
[查看原文](https://darioamodei.com/post/policy-on-the-ai-exponential)

### AI 生成考题：代理循环改善了质量，但对照设计限制了结论边界
研究先为每门课生成 40 道题，再反复让模型批评、修订和筛选为 10 题。71 门课程约 1,200 人接受 AI 题，20 门统计课约 500 人接受 AP Statistics 人工题。AI 题更容易，却具有相当或略高的区分度；36% AI 题达到“高/很高”区分度，人工题为 21%，试卷峰值可靠性为 0.79 对 0.72。不过人工对照仅限统计课、AP 题仍由 LLM 匹配到具体课程、学生并未随机在同一课程内接受两类题，且只测试选择题和短测验。结果支持“可规模化辅助命题”，尚不足以证明全面替代教师。
[查看原文](https://5harad.com/papers/ai-exams.pdf)

### Yutori Navigator：浏览器代理把推理优化变成产品可靠性问题
Navigator 每一步都附加新截图和动作历史，单任务可能在 10–15 分钟内调用数十次模型，呈现长且不断增长的输入、短输出与高缓存复用。Together 使用 vLLM prefix caching 复用不变历史，并分别优化后台 Scouts 的吞吐与前台 Delegate 的延迟。官方案例称相对前沿模型达到 2 倍速度、4–5 倍成本优势和 99.9% SLA，还能短时间扩容 GPU。页面没有公开具体基准、比较模型版本、成功率或缓存命中率，数值更适合说明生产负载设计，而非作为通用浏览器代理排行榜。
[查看原文](https://www.together.ai/customers/yutori)

### Arcee nac：让不能执行的编排器监督能执行的工作线程
nac 把长任务状态拆成中央 orchestrator、执行 threads 与结构化 episodes。编排器只规划、启动线程和阅读摘要，不可直接改文件或运行命令，从权限上降低“边规划边执行”导致的漂移；线程在独立上下文工作，episode 将结果压缩回主状态。项目提供 Web UI、MCP、onboarding skill 与多供应商认证，适合实验、训练和基础设施任务。其有效性仍依赖 episode 是否忠实、停止条件是否稳健以及执行线程的验证质量，仓库暂未给出与其他 harness 的系统对照。
[查看原文](https://github.com/arcee-ai/nac)

### ChatGPT 餐厅预订：交易代理先从可撤回、可核验的低风险步骤切入
ChatGPT 可在餐厅搜索结果中显示第三方平台的可用时段和 Reserve 按钮，并把用户提示里的人数、日期和时间预填入外部流程。用户必须再次核对并确认；ChatGPT 不保存预订，取消和修改也不在聊天内完成。这个边界把模型放在发现、匹配和表单预填层，把最终承诺与售后留给第三方，降低错误交易的影响。覆盖度取决于餐厅与服务商匹配，OpenAI 没有公布地区清单、转化率或错误率，现阶段应视为搜索产品的交易入口，而非完全自主代理。
[查看原文](https://help.openai.com/en/articles/9237897-conducting-your-searches-on-searchgpt)
