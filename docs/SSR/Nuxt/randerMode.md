---
lang: zh-CN
title: 渲染模式
description: Nuxt
---

# 渲染模式

## 什么是渲染模式

- 浏览器和服务器都能解释 JavaScript 代码，都可以将 Vue.js 组件渲染成 HTML，这个过程称为渲染。
  - 在客户端将 Vue.js 组件渲染成 HTML 的过程称为客户端渲染。
  - 在服务器将 Vue.js 组件渲染成 HTML 的过程称为服务器端渲染。
- Nuxt3 支持多重渲染模式
  - 客户端渲染，CSR,将 ssr 设置为 false
  - 服务器端渲染，SSR,将 ssr 设置为 true
  - 混合渲染模式(SSR | CSR | SSG | SWR),需要再 routeRule 中根据每个动态路由配置不同的渲染模式

:::tip 提示
SSG 是生成静态页面，只会生成一次，不会再次渲染
SWR 是生成静态页面，但是会在每次请求时重新渲染,可以指定渲染间隔
:::

`nuxt.config.ts`

```ts
routeRules: {
    '/': { ssr: true }, // SSR 渲染,默认就是SSR
    '/cart': { static: true }, // SSG 渲染 只会在构件式生成一次静态页面
    '/login': { swr: 60*10 } // SWR 渲染，多次生成静态页面,10分钟重新渲染一次
  }
```
