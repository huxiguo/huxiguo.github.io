---
lang: zh-CN
title: Vue Cli
---

# Vue Cli

command line interface 命令行接口工具

## vue create

运行以下命令来创建一个新项目:

```shell
vue create <project-name>
```

## 分析

### 入口文件 `main.js`

```js
// 引入Vue
import Vue from 'vue'

// 引入App组件，是所有组件的父组件
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip = false

// 创建Vue实例对象---> vm
new Vue({
  render: (h) => h(App)
}).$mount('#app')
```

关于 `render: (h) => h(App)` 在 `import Vue from 'vue'` 引入的是没有模板解析器的

```js
// 原理
render(createElement){
  return createElement('h1','hello')
}
// 组件形式简写
render: h=>h(App)
```

### 为什么不直接引入完整版 Vue

Vue 包含核心+模板解析器 模板解析器占比较大，当开发完成后打包时去掉模板解析器，节省空间

在组件里的`<template>`标签，使用`vue-template-compiler`库进行解析

## 配置`vue.config.js`

[配置参考](https://cli.vuejs.org/zh/config/)
