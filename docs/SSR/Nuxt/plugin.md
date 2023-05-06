---
lang: zh-CN
title: 插件
description: Nuxt
---

# 插件

## 创建插件

- 在 `plugins` 文件夹中创建 `my-plugin.ts` 文件

```ts
export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      formatData: (data: string) => `formatData: ${data}`
    }
  }
})
```

- 在页面中使用插件

```ts
const nuxtApp = useNuxtApp()
nuxtApp.$formatData('12321')
```

## 注册插件

- 只有位于 plugins/ 目录顶层的文件（或任何子目录中的`index`）才会被注册为插件。
- 可以指定 `.server` 或 `.client` 扩展名来限制插件仅在服务器端或客户端运行。
- 给插件用`1.xxx.`开头可以指定插件注册顺序
