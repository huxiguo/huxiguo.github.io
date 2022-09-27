---
lang: zh-CN
title: Github
---

# Github

## 创建远程库别名

```shell
git remote add <别名> https://github.com/<userName>/<repositoryName>
```

## 本地分支推送到远程仓库

```shell
git push <别名> <分支>
```

## 拉取远程库

```shell
git pull <仓库地址> <分支>
```

## 克隆远程仓库到本地

```shell
git clone <远程地址>
```

:::tip 提示
`clone` 操作

拉取代码

初始化本地仓库

创建别名 `origin`
:::

## SSH

生成 SSH 秘钥

```shell
ssh-keygen -t rsa -C <说明>
```

:::tip 说明
`-t` 指定加密算法

`rsa` 加密算法

`-C` 描述
:::
