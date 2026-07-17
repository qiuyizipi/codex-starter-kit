# 让 AI 帮你按需选择安装包

<!-- AI_SETUP_GUARDRAIL: minimal-pack + explicit-confirmation -->

把本仓库链接交给 Codex 后，可以直接对它说：

> 请先阅读这个仓库的 `AI-SETUP.md`、`SKILLS.md` 和 `SOURCES.md`。根据我现在的使用需求，推荐最少必要的安装包，说明原因和可能影响；不要直接安装，等我确认后再指导我操作。

## AI 的选择规则

AI 应先了解用户的主要用途、是否写代码、是否使用 Git、是否要管理项目记忆或 Notion；信息不够时只问一个最关键的问题。

| 用户情况 | 推荐 |
|---|---|
| 第一次使用 Codex、只想让对话更清楚 | `core-pack` |
| 写课程作业、小工具或程序 | `core-pack` + `code-quality-pack` |
| 要做多文件项目、实验方案或新功能 | 在上项基础上加 `project-workflow-pack` |
| 已经会用 Git、要多分支协作或处理 GitHub 项目 | 按需加 `git-collaboration-pack` |
| 想维护自己的 Skill 或深入调节工作流 | 按需加 `advanced-extra-pack` |
| 明确要把对话归档到项目记忆或 Notion | 才推荐 `personal-workflow-pack` |
| 第一次按本仓库配置 | 在推荐安装包后，主动询问一次是否需要“Skill 使用提示”；详见 `OPTIONAL-FEATURES.md` |
| 明确想知道每轮实际使用了哪些 Skill | 阅读 `OPTIONAL-FEATURES.md` 并按用户确认的范围启用 |

## 必须遵守的边界

1. 不要默认安装全部六个包。
2. `personal-workflow-pack` 不属于新手默认包；它会引入项目归档与 Notion 相关工作流。
3. 推荐后先列出“安装哪些、不安装哪些、原因和可能影响”，等待用户明确同意。
4. 安装后提醒用户新建 Codex 任务或重启应用，再验证新 Skill 是否已被发现。
5. 如果用户已安装同名 Skill，先提醒备份或比较内容，不直接覆盖个人修改。
6. 首次按本仓库配置时，在推荐安装包后主动问一次：“要不要开启 Skill 使用提示？开启后，回复末尾会显示实际使用的 Skill 及中文用途。”用户确认后才启用；拒绝或未回答则不启用。

## 不确定时

宁可少装。用户以后随时可以回到本仓库增加一个包；安装包不是一次性、不可逆的选择。
