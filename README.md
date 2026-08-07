##说明
fork自 Norris-Niu，感谢 Norris-Niu的倾情指导。

## 内容栏目

- `ai-daily`：AI Frontier Daily，每天一期，首页只突出最新一期。
- `company-research`：公司财报与经营数据分析。
- `ideas`：AI 产品、数据、学习、职业与随笔。

历史文章 URL 固定在原有的 `/blog/:year/:month/:day/:title/` 路径，调整栏目不会改变旧链接；AI 日报单独使用 `/ai-daily/YYYY/MM/DD/`。

## 导入 AI Frontier Daily

日报源文件生成后，可转换为带 Jekyll front matter 的文章：

```bash
ruby scripts/import_ai_frontier_daily.rb /path/to/reports/YYYY-MM-DD/daily_report.md
```

脚本会读取日报日期、条目数、Deep Dive 数量、封面和头条，并写入 `_posts/YYYY-MM-DD-ai-frontier-daily.md`。如需覆盖已存在的同日报告，增加 `--force`。
