# Codex Starter Kit

面向中文新手的 Codex Skill 配置包：不追求一次装完，而是让你按需要安装最少的组合。

## 三步开始

1. 在 Codex 的“插件”页面添加本仓库：`https://github.com/qiuyizipi/codex-starter-kit`。
2. 新建一个 Codex 任务并告诉它：

   > 请阅读这个仓库的 `AGENTS.md`、`SKILLS.md` 和 `SOURCES.md`。根据我的使用需求，推荐最少必要的安装包，说明安装与不安装哪些、原因和影响；不要直接安装，等我确认后再操作。

3. 确认后安装需要的包；随后新建任务或重启 Codex，确认 Skill 已被发现。

如果你只是第一次使用、主要想让对话更清楚，通常从 `core-pack` 开始就够了。

## 选择安装包

| 你的情况 | 建议 |
|---|---|
| 刚开始用 Codex，只想让回答清楚、任务不跑偏 | `core-pack` |
| 写课程作业、小工具或程序 | 再加 `code-quality-pack` |
| 做多文件项目、实验方案或新功能 | 再加 `project-workflow-pack` |
| 已会用 Git，要处理分支或协作 | 按需加 `git-collaboration-pack` |
| 想维护自己的 Skill | 按需加 `advanced-extra-pack` |
| 明确想整理项目记忆或同步 Notion | 才考虑 `personal-workflow-pack` |

当前共 6 个安装包、19 个 Skill。每个 Skill 的详细用途见 [SKILLS.md](SKILLS.md)。

## 可选功能：显示 Skill 使用情况

新手让 AI 按本仓库配置时，AI 会主动问一次：要不要在回复末尾显示本轮实际使用的 Skill 及中文用途？

这是可选功能。只有你同意后，AI 才会改动你选定的本地 Skill；不会修改本仓库内容或 Codex 自带的 `.system` Skill。具体规则见 [OPTIONAL-FEATURES.md](OPTIONAL-FEATURES.md)。

## 手动安装

不使用插件页面时，将所选包中 `plugins/<包名>/skills/` 下的整个 Skill 文件夹复制到：

```text
C:\Users\你的用户名\.codex\skills\
```

若已有同名 Skill，先备份或比较内容，不要直接覆盖自己的修改。

## 这几个文件分别给谁看？

| 文件 | 读者 | 用途 |
|---|---|---|
| `README.md` | 新手 | 从这里开始、选择包和安装 |
| `AGENTS.md` | Codex | 按需推荐、确认后安装、主动询问可选功能 |
| `SKILLS.md` | 人和 AI | 19 个 Skill 的详细清单 |
| `OPTIONAL-FEATURES.md` | 想开启提示功能的人和 AI | 启用范围、边界与撤销方式 |
| `SOURCES.md` | 发布者、维护者 | 来源、版权、许可证与第三方声明 |
| `UPSTREAM_STATUS.md` | 维护者 | 上游更新与本地适配规则 |
| `CHANGELOG.md` | 想查看历史的人 | 版本更新记录 |

## 关于来源与维护

本仓库是筛选和分包集合，不是全部 Skill 的原创来源。来源、许可证和第三方声明见 [SOURCES.md](SOURCES.md)；上游更新与 Superpowers 的本地适配见 [UPSTREAM_STATUS.md](UPSTREAM_STATUS.md)。

你自己开发的 `brief-mode` 与 `find-skills-safe` 仍各自独立发布；这个总仓库只负责把它们和精选公共 Skill 一起提供给新手按需安装。
