---
lang: zh-CN
title: Git
---

# Git

## 介绍

分布式版本控制系统

## Git 命令

### 设置用户签名

```shell
# 设置用户签名 用户名
git config --global user.name seekhoo

# 设置用户签名 邮箱
git config --global user.email seekhoo.cn
```

### 初始化本地库

```shell
git init
```

### 查看本地库状态

```shell
git status
```

### 添加暂存区

```shell
git add hello.txt
```

### 删除暂存区文件

```shell
git rm hello.txt
```

### 提交本地库

将暂存区文件提交到本地库

```shell
git commit -m "message"
```

### 查看版本信息

```shell
git reflog

# 查看详细日志
git log
```

### 版本切换

```shell
git reset --hard xxxxxxx

# xxxxx -> 版本号
```

## Git 分支

### 查看分支

```shell
# * 表示当前所属的分支
# 查看分支 显示每个分支信息
git branch -v

# 只显示分支
git branch
```

### 创建分支

```shell
git branch <分支名>
```

### 修改分支

### 切换分支

```shell
git checkout <要切换的分支名>
```

### 合并分支

```shell
git merge <要合并分支名>
# 把指定的分支合并到当前分支上
```

### 冲突合并

合并分支时，两个分支在同一文件同一位置有两种不同的修改，需要认为决定新代码的内容
