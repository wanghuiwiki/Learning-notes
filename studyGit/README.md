## 2023-1-1 学习<<Git零基础入门到实战详解>>  

>学习文件为index.html和images文件夹;按照截图一步一步操作,希望对你学习Git有所帮助!内容如下:

* 什么是git
* Git与Github两者的区别
* Github帐号注册
* Git的安装
* Git的本地操作工作流程{全局配置|常用指令}
* Git的版本回退操作
* Github远程仓库的创建
* Github远程仓库的使用_HTTPS协议
* Github远程仓库的使用_SSH协议
* Git的分支操作
* 冲突的产生与解决
* 了解图形化管理工具
* 忽略文件操作

***
## 2023-2-4学习更新  "Git使用简易指南"
>[Git](https://book.git-scm.com/downloads "Git Downloads") is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
>
>Git is easy to learn and has a tiny footprint with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features like cheap local branching, convenient staging areas, and multiple workflows.
>>译文:Git 是一个免费的开源分布式版本控制系统，旨在快速高效地处理从小型项目到大型项目的所有内容。
>>
>>Git 易于学习，占用空间小，性能快如闪电。 它超越了 Subversion、CVS、Perforce 和 ClearCase 等 SCM 工具，具有廉价的本地分支、方便的临时区域和多个工作流等特性。

### 创建新仓库
创建新文件夹，打开，然后执行`git init`以创建新的 git 仓库。
### 检出仓库
执行如下命令以创建一个本地仓库的克隆版本：`git clone /path/to/repository`
样子：`git clone username@host:/path/to/repository`
### 工作流
你的本地仓库由 git 维护的三棵“树”组成。第一个是你的**工作目录**，它持有实际文件；第二个是**缓存区（Index）**，它像个缓存区域，临时保存你的改动；最后是**HEAD**，指向你最近一次提交后的结果。

![trees.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6a1ce8fe82e4d6b9fb0eb196d4a08a9~tplv-k3u1fbpfcp-watermark.image?)
### 添加与提交
你可以计划改动（把它们添加到缓存区），使用如下命令：
```
git add <filename>
git add *
```
这是 git 基本工作流程的第一步；使用如下命令以实际提交改动：
```
git commit -m "代码提交信息"
```
现在，你的改动已经提交到了**HEAD**，但是还没到你的远端仓库。
### 推送改动
你的改动现在已经在本地仓库的**HEAD**了。执行如下命令以将这些改动提交到远端仓库：
```
git push origin master
```
可以把 master 换成你想要推送的任何分支。

如果你还没有克隆现有仓库，并欲将你的仓库连接到某个远程服务器，你可以使用如下命令添加：
```
git remote add origin <server>
```
如此你就能够将你的改动推送到所添加的服务器上去了。
### 分支
分支是用来将特性开发绝缘开来的。在你创建仓库的时候，master 是“默认的”。在其他分支上进行开发，完成后再将它们合并到主分支上。

![branches.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e3c0832d9374cb2a4eb3008309742ef~tplv-k3u1fbpfcp-watermark.image?)

创建一个叫做“feature_x”的分支，并切换过去：`git checkout -b feature_x`

切换回主分支：`git checkout master`

再把新建的分支删掉：`git branch -d feature_x`

除非你将分支推送到远端仓库，不然该分支就是 不为他人所见的：`git push origin <branch>`
### 更新与合并
要更新你的本地仓库至最新改动，执行：`git pull`

以在你的工作目录中 获取（fetch） 并 合并（merge） 远端的改动。

要合并其他分支到你的当前分支（例如 master），执行：`git merge <branch>`

两种情况下，git 都会尝试去自动合并改动。不幸的是，自动合并并非次次都能成功，并可能导致 冲突（conflicts）。 

这时候就需要你修改这些文件来人肉合并这些 冲突（conflicts） 了。改完之后，你需要执行如下命令以将它们标记为合并成功：`git add <filename>`

在合并改动之前，也可以使用如下命令查看：`git diff <source_branch> <target_branch>`
### 标签
在软件发布时创建标签，是被推荐的。这是个旧有概念，在 SVN 中也有。可以执行如下命令以创建一个叫做 1.0.0 的标签：
```
git tag 1.0.0 1b2e1d63ff
```
1b2e1d63ff 是你想要标记的提交 ID 的前 10 位字符。使用如下命令获取提交 ID：`git log`

你也可以用该提交 ID 的少一些的前几位，只要它是唯一的。

### 替换本地改动
假如你做错事（自然，这是不可能的），你可以使用如下命令替换掉本地改动：

```
git checkout -- <filename>
```

此命令会使用 HEAD 中的最新内容替换掉你的工作目录中的文件。已添加到缓存区的改动，以及新文件，都不受影响。

假如你想要丢弃你所有的本地改动与提交，可以到服务器上获取最新的版本并将你本地主分支指向到它：

```
git fetch origin
git reset --hard origin/master
```
___
内建的图形化 git：`gitk`

彩色的 git 输出：`git config color.ui true`

显示历史记录时，只显示一行注释信息：`git config format.pretty oneline`

交互地添加文件至缓存区：`git add -i`

~~说明:文章转载至[Git 使用简易指南](https://support.github.com/)推荐参考:①[Git 社区参考书](https://book.git-scm.com/)②[GitHub帮助](https://support.github.com/)~~

