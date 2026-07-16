# Codex Brief Mode

一个让 Codex **默认说重点、需要时自动详细说明** 的个人 Skill。

它不是简单地限制字数，而是帮助 Codex 判断：什么时候一句话就够了，什么时候必须把步骤、风险、代码和证据讲清楚。

## 先解释一下：什么是 Codex Skill？

Skill 可以理解成一份给 Codex 使用的“工作规则”。

当你的请求符合某个 Skill 的触发条件时，Codex 会读取其中的 `SKILL.md`，再按照里面的规则回答或执行任务。

`brief-mode` 专门调整回答方式，不会替你修改系统，也不会在后台运行额外程序。

## 它解决什么问题？

有时 AI 的回答会出现这些情况：

- 简单问题回答得太长；
- 讲了很多背景，结论却不明显；
- 一次推荐太多工具，不方便判断；
- 为了显得完整，重复同一个意思；
- 用户说了“短一点”，回答仍然没有明显缩短。

`brief-mode` 会要求 Codex先给结论、保留重点，并在回答已经足够时及时停止。

## 它会不会让所有回答都变短？

不会。它遵循的核心原则是：

> 该短就短，该详细时必须详细。

| 场景 | 回答方式 |
|---|---|
| 简单确认、状态或事实 | 1～2 句话直接回答 |
| 普通解释或推荐 | 结论加不超过三个重点 |
| 比较方案或帮助决策 | 使用少量清晰的要点 |
| 修改代码、排查错误、安装配置 | 自动展开必要步骤和证据 |
| 删除文件、账号权限、隐私或安全 | 保留完整风险说明 |
| 用户要求“详细讲”或“一步一步来” | 按要求完整展开 |

## 使用示例

你可以自然地说：

- “短一点，告诉我重点。”
- “一个个来，先介绍最推荐的。”
- “别写太长，我不懂的地方再问你。”
- “这次使用 brief mode。”

也可以明确调用：

```text
使用 $brief-mode 回答这个问题。
```

### 普通问题

不理想：

> 我又找到一个比较接近的工具，它有很多功能……综合这些方面，我的建议是……

更合适：

> 找到一个更适合的：`claude-code-tldr`。它是短回答模式；我建议借鉴它制作自己的 `brief-mode`，不直接安装原版。

### 技术或高风险问题

`brief-mode` 不会为了少说而删掉必要内容。它会像这样回答：

> 结论：先备份配置，再修改。下面给出准确路径、修改内容和验证方法。

## 安装方法

### 方法一：让 Codex 帮你安装

把下面这句话发给 Codex：

```text
请使用 skill-installer 安装这个 Skill：
https://github.com/qiuyizipi/codex-brief-mode
```

安装前可以先让 Codex 检查仓库里的 `SKILL.md`，确认规则符合你的需要。

### 方法二：Windows 手动安装

1. 打开本仓库，点击绿色的 `Code` 按钮。
2. 点击 `Download ZIP` 下载压缩包。
3. 解压后，把文件夹改名为 `brief-mode`。
4. 把它复制到：

```text
C:\Users\你的用户名\.codex\skills\brief-mode
```

安装完成后，重新打开 Codex 或新建一个任务。如果目标位置已经存在旧版 `brief-mode`，请先备份，不要直接覆盖不确定的个人修改。

### 方法三：使用 Git

Windows PowerShell：

```powershell
git clone https://github.com/qiuyizipi/codex-brief-mode.git "$env:USERPROFILE\.codex\skills\brief-mode"
```

以后更新：

```powershell
git -C "$env:USERPROFILE\.codex\skills\brief-mode" pull
```

## 文件结构

```text
brief-mode/
├─ README.md          给使用者阅读的介绍和安装教程
├─ SKILL.md           Codex 实际执行的核心规则
├─ 中文说明.md         规则的完整中文解释
├─ LICENSE            MIT 开源许可
└─ agents/
   └─ openai.yaml     Codex 界面显示信息
```

真正决定 Skill 行为的是 `SKILL.md`。README、中文说明和 LICENSE 主要供人阅读，不会自动改变 Codex 的回答。

## 常见问题

### 安装以后会自动使用吗？

当你的表达符合触发条件时，Codex 可以自动加载它。明确写出 `$brief-mode` 能让调用意图更清楚。

### 为什么安装后当前任务没有变化？

当前任务可能还没有刷新 Skill 列表。新建一个任务或重启 Codex 后再试。

### 能不能修改成自己的规则？

可以。修改 `SKILL.md` 后重新打开任务即可。建议保留“需要时自动展开”的规则，避免为了简短而丢失代码、风险或操作步骤。

## 设计参考

这个 Skill 是根据实际使用需求独立整理的，同时参考了社区中“减少冗长输出”和“TL;DR 模式”的思路：

- [Cpp1022/concise](https://github.com/Cpp1022/concise)
- [rodrigooler/claude-code-tldr](https://github.com/rodrigooler/claude-code-tldr)

## 开源协议

本项目使用 [MIT License](LICENSE)。你可以使用、修改和分享，但需要保留原许可声明。
