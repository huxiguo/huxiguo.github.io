---
lang: zh-CN
title: 布局
description: Nuxt
---

# Layout 布局

## 默认布局

- 新建 `layouts` 文件夹
- 新建 `default.vue` 文件,就是默认布局

```vue
<template>
  <div class="layout">
    <div class="header">header</div>
    <slot />
    <div class="footer">footer</div>
  </div>
</template>
```

- 在 app.vue 中使用

```vue
<template>
  <!-- 布局 -->
  <NuxtLayout>
    <!-- 页面内容 -->
    <NuxtPage />
  </NuxtLayout>
</template>
```

- 在单个页面中指定布局
- 在 layouts 文件夹中新建一个`custum-layout.vue`文件

```vue
<template>
  <div>
    <slot />
  </div>
</template>
```

- 在页面中指定布局

```ts
definePageMeta({ layout: 'custum-layout' })
```
