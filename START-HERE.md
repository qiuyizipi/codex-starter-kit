# 从这里开始：给第一次使用 Codex 的同学

这个仓库不是“所有 Skill 一键全装包”。它的目标是：让你先安装最少、最适合自己的 Skill，以后有需要再增加。

## 最简单的用法：交给 Codex 帮你选

1. 在 Codex 的插件页面添加本仓库：`https://github.com/qiuyizipi/codex-starter-kit`。
2. 新建一个 Codex 任务，把下面这段话直接发给它：

   > 请先阅读这个仓库的 `AI-SETUP.md`、`SKILLS.md` 和 `SOURCES.md`。根据我现在的使用需求，推荐最少必要的安装包；说明安装哪些、不安装哪些、原因和可能影响。不要直接安装，等我确认后再操作。

3. 看完推荐后，只确认你理解并愿意安装的包。
4. 安装后，新建一个 Codex 任务或重启 Codex；确认新 Skill 已被发现。

如果你只是第一次使用、主要想让对话更清楚，通常从 `core-pack` 开始就够了。

## 我该选哪个包？

| 你的情况 | 建议 |
|---|---|
| 刚开始用 Codex，只想让回答更清楚、任务不跑偏 | `core-pack` |
| 写课程作业、小工具或程序 | 在 `core-pack` 基础上加 `code-quality-pack` |
| 做多文件项目、实验方案或新功能 | 再加 `project-workflow-pack` |
| 已经会用 Git，要处理分支或协作 | 按需加 `git-collaboration-pack` |
| 想维护自己的 Skill | 按需加 `advanced-extra-pack` |
| 明确想把对话整理到项目记忆或 Notion | 才考虑 `personal-workflow-pack` |

完整内容请看 [SKILLS.md](SKILLS.md)。

## 安装后的自检

- 新建 Codex 任务或重启应用。
- 在 Codex 的 Skill 列表中确认你刚安装的包已出现。
- 随便发一个与该 Skill 适用场景相关的小请求，确认它能正常工作。
- 若同名 Skill 已存在，不要直接覆盖：先备份或比较内容。

## 出问题时

- **不知道该装哪个：** 让 Codex 按上面的提示先推荐，不要全装。
- **安装后没有变化：** 新建任务或重启 Codex，再检查安装位置和包名。
- **担心安全或来源：** 查看 [SOURCES.md](SOURCES.md)、[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) 与 [UPSTREAM_STATUS.md](UPSTREAM_STATUS.md)。
- **想手动复制：** 按 [INSTALL.md](INSTALL.md) 操作。

## 这个仓库不做什么

- 不收录 Codex 自带的 `.system` Skill。
- 不要求新手安装全部包。
- 不用脚本自动覆盖你本地已经修改过的 Skill。

