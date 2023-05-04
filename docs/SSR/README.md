---
lang: zh-CN
title: SSR
description: SSR
---

# SSR

## [node 搭建 SSR](./Node/vue3NodeSSR.md)

## Nuxt

## Next

## 一、SPA

- 单页面应用程序 _Single-page application_
- SPA 应用是客户端呈现 => _CRS_
- 默认只返回一个空的`html`页面
- 内容通过 js 动态加载

SPA 优点

- 只需在第一次请求时加载一次页面
- 用户体验更好

SPA 缺点

- 不利于 SEO
- 首屏渲染白屏

## 二、爬虫

以 Google 爬虫为例

- 从网页索引区出发，抓取网页
- 对网页中的数据进行处理，建立搜索索引
- 在用户搜索时进行匹配索引

## 三、SEO 搜索引擎优化

- 语义性 HTML 标记

## 四、SSG _(static site generate)_

- 在构建阶段就确定了网站内容
- 内容更新必须重新构建部署

优点

- 访问速度快
- 有利于 SEO
- 保留 SPA 应用特性

缺点

- 静态页面，不利于实时性内容
- 内容更新必须重新构建部署

## 五、SSR _(Server Side Render)_

- 页面在服务器渲染，请求的页面在服务端渲染，再返回给浏览器

优点

- 更快的首屏渲染速度
- 更好的 SEO

缺点

- 对服务器要求高
