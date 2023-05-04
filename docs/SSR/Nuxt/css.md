---
lang: zh-CN
title: 样式
description: Nuxt
---

# 定义全局样式

## 使用 scss

在`nuxt.config.ts`配置

```ts
// css
  css: ['@/assets/style/main.css', '@/assets/style/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/style/variables.scss" as *;'
        }
      }
    }
  }
```
