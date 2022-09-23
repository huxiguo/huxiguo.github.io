---
lang: zh-CN
title: React 基础
---

# Hello React

## 什么是 React

React 是一个用于构建用户界面的 JS 库

从 MVC 角度看 React 仅仅是视图层，只负责视图的渲染

M：model 业务规则

V：view 用户看到并且交互的界面

C: controller 控制器 接受用户输入调用模型和视图完成用户需求

起源于 Facebook 内部项目 于 2013 年 5 月开源

## React 特点

:green_circle: 声明式

我们只需要描述 UI

React 负责渲染 UI 并在数据变化时更新 UI

:green_circle: 组件式

:green_circle: 多端开发

## React 脚手架

[Create React App](https://create-react-app.dev/docs/getting-started)

:green_circle: 初始化项目

```shell
npx create-react-app my-app
```

## 使用 React

```js
// 创建 React 元素
const title = React.createElement('h1', null, 'Hello React')
```

```js
// 渲染React 元素 React18
const container = document.getElementById('root')
const root = createRoot(container)
root.render(title)
```
