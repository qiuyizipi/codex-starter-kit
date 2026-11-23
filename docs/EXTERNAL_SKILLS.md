# 外部扩展 Skill 清单（不搬运源码）

本仓库仅托管作者自研 Skill 与许可证清晰、经适配的基础工作流包。

日常科研、论文撰写与桌面自动化常配合使用的外部/第三方 Skill，在此仅记录用途与归类，**不直接搬运其源码**；使用时请按各自上游仓库的许可证独立安装。

## 科研与学术论文类

| Skill 名称 | 一句话用途 | 备注 |
|---|---|---|
| `academic-research-suite` | ARS 科研全流程：文献综述、投稿审稿模拟、Rebuttal 审计与实验规划 | 外部多角色科研套件 |
| `nature-academic-search` | 多源文献检索、严格他引核对与引用表生成 | Nature 论文工作流组件 |
| `nature-paper-card` | 单篇论文深度精读卡片（01–16 固定结构与证据链审计） | Nature 论文工作流组件 |
| `nature-reader` | 全文逐段中英对照精读与图表原位保留 | Nature 论文工作流组件 |
| `nature-shared` | Nature 系列 Skill 的内部共享规范依赖包 | 勿单独调用 |
| `paper-figure` | 学术论文出版级数据图表与对比表绘制 | 参考多工作流模板 |
| `paper-spine` | 论文/技术报告端到端大纲与 LaTeX/PDF/Word 编排 | 外部写作编排套件 |
| `ref-verify` | 核验引文真实性与 DOI，防止学术写作引用幻觉 | 外部开源引文核查工具 |

## 通用效率与桌面工具类

| Skill 名称 | 一句话用途 | 备注 |
|---|---|---|
| `codexkit-document-summarizer` | 会议纪要、政策、PDF 与多文档合集要点提炼 | 外部文档总结 Skill |
| `notion-knowledge-capture` | 将对话与决策结构化沉淀为 Notion 页面 | 需配合 Notion MCP |
| `playwright-interactive` | 通过持久化浏览器会话进行交互式 UI 调试 | 需配合 Playwright 环境 |
| `screenshot` | 捕获系统桌面、指定窗口或区域截图 | 本地系统辅助工具 |

## 个人本地私有 / 场景定制（按需本机保留）

以下 Skill 强绑定个人环境、密钥或写作偏好，默认保留在本机，不纳入公开基础包：

- `project-knowledge-capture`：绑定个人 Obsidian 目录结构与 Notion 知识库的「沉淀本次」工作流。
- `sci-paper-translation`：面向 SCI 期刊投稿习惯的中文论文英译与术语一致性检查。
- `image-vision`：为无原生视觉能力的模型外挂外部视觉 API 的本地识图脚本（含本地 `.env` 密钥，切勿提交到公开仓库）。
