---
layout: daily
title: "AI Frontier Daily | 2026.08.17"
headline: "Together AI 上线 DeepSeek V4 Pro 0813，长上下文与三档推理进入托管服务"
date: 2026-08-17 09:07:00 +0800
permalink: /ai-daily/2026/08/17/
categories: [ai-daily]
tags: [AI-Frontier, Daily]
description: "Together AI 宣布 DeepSeek V4 Pro 0813 已可调用。该系列采用 1.6 万亿参数 MoE、每 token 激活 490 亿参数，并提供 Non-Think、Think High、Think Max 三档推理。模型层面支持 1M 上下文，但 Together 当前 Serverless 配置为 512K，完整 1M 需专用部署；官方所列代码与代理基准仍属于供应商报告，尚不能替代独立评测。"
summary: "Together AI 宣布 DeepSeek V4 Pro 0813 已可调用。该系列采用 1.6 万亿参数 MoE、每 token 激活 490 亿参数，并提供 Non-Think、Think High、Think Max 三档推理。模型层面支持 1M 上下文，但 Together 当前 Serverless 配置为 512K，完整 1M 需专用部署；官方所列代码与代理基准仍属于供应商报告，尚不能替代独立评测。"
issue_count: 12
deep_dive_count: 6
reading_time: 11
cover: "https://file.cdn.minimax.io/public/3df321d9-42bd-4be0-ac58-71f22377a11f.png"
signals: "togethercompute · emollick · gdb · fchollet · hwchase17 · mattshumer_ · LinusEkenstam · aravind"
header-img: img/dark_yellow_400.png
---


## 1/12 Together AI 上线 DeepSeek V4 Pro 0813，长上下文与三档推理进入托管服务
Together AI 宣布 DeepSeek V4 Pro 0813 已可调用。该系列采用 1.6 万亿参数 MoE、每 token 激活 490 亿参数，并提供 Non-Think、Think High、Think Max 三档推理。模型层面支持 1M 上下文，但 Together 当前 Serverless 配置为 512K，完整 1M 需专用部署；官方所列代码与代理基准仍属于供应商报告，尚不能替代独立评测。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@togethercompute<span class="source-chip__links"><a href="https://x.com/togethercompute/status/2089064162684993798" target="_blank" rel="noopener" aria-label="@togethercompute 原文 1">1</a><a href="https://x.com/togethercompute/status/2089064253768475115" target="_blank" rel="noopener" aria-label="@togethercompute 原文 2">2</a></span></span></div>

## 2/12 GPT-5.6 Sol 接管 Chrome 导出 5,302 条 X 书签，浏览器会话补上 API 缺口
Ethan Mollick 表示，他让 Codex 中的 GPT-5.6 Sol 操作 Chrome，导出了从 2014 年至今的 5,302 条 X 书签及相关数据，并进一步筛选其中内容；同一任务未能由 Grok Bot 完成，因为其 API 无法访问全部书签。案例展示了已登录浏览器会话对封闭数据的操作价值，但它是个人实测，不是通用性能基准。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2089100618648404216" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2089140341085553030" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/gdb/status/2089181834580250870" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@gdb</a></div>

## 3/12 MiniMax H3 开放权重视频模型在本地三分钟生成带声短片
Mollick 展示了 MiniMax H3 在本地电脑运行的效果：一段“水獭在飞机上用笔记本”的带声视频约三分钟生成。MiniMax 官方将 H3 定位为统一处理文本、图像、视频与音频的生成模型，最高输出 15 秒、2K 分辨率与原生立体声。三分钟速度取决于未披露的硬件和配置，因此更适合作为可运行性案例，而非标准化速度结论。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/emollick/status/2089185499197911391" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a></div>

## 4/12 RedNote 团队用 ARC-AGI-3 演示测试时持续学习，François Chollet 提醒尚未验证
François Chollet 转发 RedNote 团队在 ARC-AGI-3 上的测试时持续学习演示，并明确称结果“尚未验证、但方向有趣”。ARC-AGI-3 要求代理在无规则、无目标提示的互动环境中探索、记忆并跨关卡适应；发布时人类完成率为 100%，前沿系统仅 0.51%。当前演示缺少可复现配置、动作预算与正式得分，不能据此宣布突破。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/fchollet/status/2089071594849366288" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet</a></div>

## 5/12 LangChain 详解 Deep Agents：“大脑”与“手”分离，执行后端可在本地与云端切换
Harrison Chase 说明 Deep Agents 将代理循环与后端分开：后端只需提供 read、write、edit 等类文件接口，需要执行代码时再增加 sandbox 的 execute 能力。相同代理可连接本地目录形成 TUI，也可部署到 LangSmith 并调用 Modal、Daytona、E2B 等远程沙箱；Web 与 Slack 前端还能共享同一状态。非编码代理则可使用数据库或对象存储模拟文件系统。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/hwchase17/status/2089029054611837324" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@hwchase17</a></div>

## 6/12 Gauntlet Loop 从一次生成转向“构建者—独立评审—持续返工”的游戏制作循环
Matt Shumer 的 Gauntlet Loop 正被更多游戏实验采用：主代理先把目标拆成可独立改进的部件，构建者产出后，由新上下文中的评审代理对照真实质量标杆，指出最大差距并送回下一轮，直到达到标准或人工停止。当天讨论还出现了用于生成这类循环的工具与 AI 概念预告片，显示游戏构想从文字到可玩原型、视觉提案的成本继续下降。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@mattshumer_<span class="source-chip__links"><a href="https://x.com/mattshumer_/status/2089073976827838825" target="_blank" rel="noopener" aria-label="@mattshumer_ 原文 1">1</a><a href="https://x.com/mattshumer_/status/2089073412001980663" target="_blank" rel="noopener" aria-label="@mattshumer_ 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/LinusEkenstam/status/2089044408989557105" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@LinusEkenstam</a></div>

## 7/12 非可验证任务的 AI 基准，开始重新借用定性研究与人类评审方法
Mollick 指出，写作、创意或商业提案等任务不存在唯一可程序化核验的答案，现实中的评价本来就依赖人的判断；AI 评测可直接借鉴社会科学长期形成的定性研究、抽样、编码和一致性分析，而不是只追求自动评分。该主张把评测问题从“找一个万能裁判模型”转回研究设计：谁来评价、依据什么标准、不同人群是否稳定一致。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2089042815405686919" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2089043747514233026" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a></span></span></div>

## 8/12 Google AI Overview 被视为网页流量、信息消费与电商分发的结构性变量
Mollick 认为，即使不考虑其他生成式 AI 产品，Google AI Overview 单独就可能长期改变网页内容如何被发现、消费和转化，并进一步影响数千亿美元规模的电商与广告链路。这是对产业影响的判断而非新统计结果，但它指出了明确机制：搜索答案直接在入口完成后，出版者获得点击、品牌争夺注意力以及商家购买流量的方式都会随之调整。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick<span class="source-chip__links"><a href="https://x.com/emollick/status/2089003775755190570" target="_blank" rel="noopener" aria-label="@emollick 原文 1">1</a><a href="https://x.com/emollick/status/2089006232816193621" target="_blank" rel="noopener" aria-label="@emollick 原文 2">2</a></span></span></div>

## 9/12 “每个人需要一台本地 AI 电脑”成为端侧计算的新需求假说
Aravind Srinivas 预测，随着提示交互和本地模型普及，个人电脑的重要性反而会上升，能高效运行本地 AI 的设备厂商将受益；他把隐私工作、医疗与软件场景列为潜在需求。Qwen3.8-27B 在笔记本运行的社区案例为这一方向提供了产品信号，但设备成本、内存带宽、功耗和模型压缩仍决定其能否从爱好者部署走向大众市场。

<div class="daily-sources"><span class="daily-sources__label">来源</span><span class="source-chip source-chip--group"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@aravind<span class="source-chip__links"><a href="https://x.com/aravind/status/2089017544439107802" target="_blank" rel="noopener" aria-label="@aravind 原文 1">1</a><a href="https://x.com/aravind/status/2089020557249675267" target="_blank" rel="noopener" aria-label="@aravind 原文 2">2</a></span></span><a class="source-chip" href="https://x.com/Alibaba_Qwen/status/2088891548507492646" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@Alibaba_Qwen</a></div>

## 10/12 开源模型讨论从“是否追平前沿”转向视觉能力、延迟与总成本
Bindu Reddy 对开源模型的营销提出批评：她认为 GLM 与 DeepSeek 仍需补齐视觉能力，部分模型推理冗长、响应慢，在中等复杂任务上甚至可能比前沿闭源模型更贵。这些判断未附统一基准，不能作为横向结论；但它把比较维度从单项榜单扩展到多模态覆盖、端到端时延与实际调用成本，反映生产部署更关注系统总效用。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/bindureddy/status/2089194292090917355" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@bindureddy</a></div>

## 11/12 “AI 治愈疾病”仍隔着实验、临床试验与监管批准三道落地门槛
Mollick 要求对“AI 将治愈疾病”的说法给出更精确边界：即使数据中心中的高能力模型能提出理论上有效的分子、机制或治疗方案，距离真实患者获益仍需实验验证、分期临床试验、安全性与有效性证据，以及监管审批。当天围绕 Dario Amodei 生物医学预期的争论因此从模型能力转向转化链路，关键不只是发现速度，也包括可验证性与实施周期。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/emollick/status/2089156476568842516" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@emollick</a><a class="source-chip" href="https://x.com/GaryMarcus/status/2089139059226718568" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@GaryMarcus</a></div>

## 12/12 “模型还是系统”争论回归：代理能力可能同时来自模型、Harness 与环境
François Chollet 转发以“西蒙的蚂蚁”解释 Model vs. Harness 的讨论：复杂轨迹可能由简单行动者与复杂环境共同产生，不能把全部表现都归于模型。Yoav Goldberg 同日再谈“中文房间”，质疑把理解割裂到单个操作者的方式。两组讨论没有形成新的实验证据，但共同指向评测归因问题：模型、工具、记忆、反馈循环和环境需要分别消融。

<div class="daily-sources"><span class="daily-sources__label">来源</span><a class="source-chip" href="https://x.com/fchollet/status/2089037165414187505" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@fchollet</a><a class="source-chip" href="https://x.com/yoavgo/status/2089097686947414455" target="_blank" rel="noopener"><span class="source-chip__icon" aria-hidden="true">𝕏</span>@yoavgo</a></div>

---

## Deep Dive 附录

### DeepSeek V4 Pro 0813：模型 1M 上下文不等于每个托管端点都开放 1M
Together AI 将 0813 构建带入托管服务。V4 Pro 为 1.6T 参数 MoE、每 token 激活 49B，混合稀疏注意力据称把百万上下文下的单 token FLOPs 降至 V3.2 的 27%、KV Cache 降至 10%。模型层面支持 1M，但 Together Serverless 当前为 512K；三档推理模式让应用按任务难度控制延迟与 token。SWE-bench 等数字来自供应商模型卡，仍需独立复核。
[查看原文](https://www.together.ai/models/deepseek-v4-pro-0813)

### ChatGPT 浏览器：独立浏览器状态与现有 Chrome 会话是两种权限模型
OpenAI 文档显示，桌面端内置浏览器可跨标签页、下载、登录并接受页面批注，但使用独立浏览器状态；当任务需要现有 Chrome 的 Cookie、登录态、标签页或扩展时，应使用 Codex Chrome 扩展。Mollick 的 5,302 条书签导出正属于后者：浏览器会话可执行站点 API 未开放的操作。相应风险也更高，用户需核对活动账号、逐站授权，并把网页内容视作不可信输入。
[查看原文](https://help.openai.com/en/articles/20001277-using-the-built-in-browser-in-the-chatgpt-desktop-app)

### MiniMax H3：用统一多模态上下文生成最高 2K、15 秒原生立体声视频
H3 将文本、图像、视频与音频引用放入同一上下文，通过自然语言描述素材关系；官方称 H3-VAE 带来 4 倍有效序列长度，理解与生成负载分离使训练吞吐提升近 30%，2K 输出由基础模型带原上下文再生成，而非独立超分模块。Mollick 的本地三分钟演示说明开放权重已能进入个人工作站，但缺少硬件、量化和分辨率信息，不能据此比较不同系统速度。
[查看原文](https://www.minimax.io/blog/minimax-h3)

### ARC-AGI-3：测试时持续学习演示有方向价值，验证仍需动作效率与完整配置
ARC-AGI-3 由数百个无说明的互动环境和数千关卡组成，代理必须探索规则、发现目标并跨关卡迁移；发布时人类为 100%，前沿系统为 0.51%。RedNote 演示若能稳定实现测试时持续学习，将直接触及该基准核心，但目前只有社交媒体展示。正式结论至少需要模型与 Harness 配置、每关动作预算、效率得分、失败案例以及按官方规则复测。
[查看原文](https://arcprize.org/blog/arc-agi-3-launch)

### Deep Agents：稳定的后端接口让代理循环跨本地、云沙箱与多前端复用
Deep Agents 把代理循环固定在类文件接口之上：数据库、对象存储、真实文件系统或远程沙箱都能成为后端，代码执行只是可选的 `execute` 能力。由此，本地 TUI、云端编码、Web 与 Slack 可以共享代理逻辑和状态。该思路与 Anthropic 的“脑—手分离”一致：Harness 会随模型能力变化而过时，系统应让执行实现可替换，同时保留审批、记忆、技能与可观测性等稳定边界。
[查看原文](https://docs.langchain.com/oss/deepagents/code/overview)

### Gauntlet Loop：真正的增量来自外部质量标杆与独立评审，而非单次长提示词
Gauntlet Loop 的结构是“目标与标杆—拆分—构建—独立评审—返工”：评审代理必须检查真实运行或渲染结果，与参考物直接比较，再把最大差距送回构建者。Shumer 称其游戏实验生成约 5.5 万行代码，并公开提示词与代码。它仍消耗大量模型调用和工具执行，结果也只是可玩原型而非 AAA 成品；方法的可迁移部分是可检查标杆、独立评分与持续循环。
[查看原文](https://somethingbig.ai/gauntlet-loop)
