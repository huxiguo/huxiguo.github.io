---
lang: zh-CN
title: state
description: Nuxt
---

# 全局状态共享

## `useState()`

```ts
useState<T>(init?: () => T | Ref<T>): Ref<T>

useState<T>(key: string, init?: () => T | Ref<T>): Ref<T>

// init 为状态提供初始值的函数
// key 为状态的唯一标识
```

- 在`composables`的文件以`camelCase`命名的文件

```ts
// composables/useCount.ts
export default function () {
  return useState('count', () => 0)
}
export default useCount = () => {
  return useState('count', () => 0)
}

// index.vue
const count = useCount()
const addCount = () => {
  count.value++
}
```

## pinia

### 安装

```bash
yarn add pinia @pinia/nuxt
# 或者使用 npm
npm install pinia @pinia/nuxt
```

::: tip
如果你正在使用 npm，你可能会遇到 ERESOLVE unable to resolve dependency tree 错误。如果那样的话，将以下内容添加到 `package.json` 中：

```json
"overrides": {
  "vue": "latest"
}
```

:::
`nuxt.config.ts`

```ts
export default defineNuxtConfig({
  // ... 其他配置
  modules: [
    // ...
    '@pinia/nuxt'
  ]
})
```
