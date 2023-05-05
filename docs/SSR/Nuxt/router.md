---
lang: zh-CN
title: 路由
description: Nuxt
---

# 路由

## 动态路由

根据目录名称生成

- `pages/detail/[id].vue`
- `pages/detail/user-[id].vue`
- `pages/detail/[role]/[id].vue`
- `pages/detail-[role]/[id].vue`

动态路由 params 参数

可以在路由跳转时带 query 参数

## 嵌套路由

- 在一级路由下创建与一级路由同级的文件夹

```
|-- pages
    |-- parent
        |-- child1.vue
        |-- child2.vue
    |-- parent.vue
```

## 路由中间件

在客户端每次切换路由都会调用，在服务端只会在刷新浏览器调用

- Nuxt 提供可定制的路由中间件，监听路由的导航

- 匿名(内联)路由中间件

在页面中使用`definePageMeta`函数定义，监听局部路由

```ts
definePageMeta({
  middleware: [
    function () {
      console.log('12123', 12123)
    },
    function (to, from) {
      console.log('to', to)
      console.log('from', from)
    }
  ]
})
```

- 命名中间件

`middleware home-mid.ts`

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('to', to)
  console.log('home.ts')
})
```

```ts
definePageMeta({
  middleware: ['home-mid']
})
```

- 全局中间件

`middleware auth-mid.global.ts`

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('这是一个全局中间件，会被所有页面调用')
})
```

## 路由验证

- 支持对每个页面的路由进行验证
