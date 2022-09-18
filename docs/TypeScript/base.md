---
lang: zh-CN
title: 开始
description: TypeScript
---

# TypeScript 基础

## :one: 为什么需要 TypeScript

:x: 对于 JS 需要代码运行时才能发现错误

:heavy_check_mark: 对于 TS 在代码执行前就能发现错误

## TS vs JS 优势

:green_circle: 更早的发现错误

:green_circle: 程序中任何位置都有代码提示

:green_circle: 提升代码可维护性，使重构代码更容易

:green_circle: 支持最新的 ECMAScript 语法

## 开始使用 TS

安装编译包

```shell
npm i -g typescript
```

使用`tes -v` 查看是否安装成功

编译运行

```shell
# 生成hello.js
tsc hello.ts
# 运行 hello.js
node hello.js
```

简化步骤

```shell
npm i -g ts-node
```

使用方法

```shell
ts-node hello.ts
```
