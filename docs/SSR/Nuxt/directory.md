---
lang: zh-CN
title: 目录结构
description: Nuxt
---

# 分析目录结构

## App.vue

- 入口文件
- 定义页面布局
- 定义路由占位
- 全局样式
- 全局路由监听

```
|-- hello-nuxt
    |-- .gitignore
    |-- .npmrc
    |-- app.config.ts         # 应用程序配置
    |-- app.vue               # 整个应用程序
    |-- nuxt.config.ts        # 配置Nuxt
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- tsconfig.json         # TS的配置
    |-- .nuxt                 # 类型文件
    |-- assets                # 资源目录
    |-- components            # 组件
    |-- composables           # 组合API
    |-- layout                # 布局
    |-- pages                 # 页面，路由会根据目录结构和文件名自动生成
    |   |-- index.vue
    |-- plugins               # 插件
    |-- public                # 静态资源，不参与打包
        |-- favicon.ico
```
