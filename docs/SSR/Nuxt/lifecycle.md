---
lang: zh-CN
title: 生命周期
description: Nuxt
---

# 生命周期

## app 生命周期

- 在插件里面监听生命周期

`plugins/life-cycle.ts`

```ts
export default defineNuxtPlugin(nuxtApp => {
  // 监听生命周期
  // server & client 在创建vueApp 实例时调用
  nuxtApp.hook('app:created', vueApp => {
    console.log('app:created')
  })
  // client 在挂载app之前调用
  nuxtApp.hook('app:beforeMount', nuxtApp => {
    console.log('app:beforeMount')
  })
  // server & client
  nuxtApp.hook('vue:setup', () => {
    console.log('vue:setup')
  })
  // server
  nuxtApp.hook('app:rendered', renderContext => {
    console.log('app:rendered')
  })
  // client
  nuxtApp.hook('app:mounted', vueApp => {
    console.log('app:mounted')
  })
})
```

- 在组建里面只能监听`vue:setup`之后的生命周期

| Hook                     | Arguments           | Environment     | Description                                                                                                                                   |
| ------------------------ | ------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `app:created`            | `vueApp`            | Server & Client | Called when initial `vueApp` instance is created.                                                                                             |
| `app:error`              | `err`               | Server & Client | Called when a fatal error occurs.                                                                                                             |
| `app:error:cleared`      | `{ redirect? }`     | Server & Client | Called when a fatal error occurs.                                                                                                             |
| `app:data:refresh`       | `keys?`             | Server & Client | (internal)                                                                                                                                    |
| `vue:setup`              | -                   | Server & Client | (internal)                                                                                                                                    |
| `vue:error`              | `err, target, info` | Server & Client | Called when a vue error propagates to the root component. [Learn More](https://vuejs.org/api/composition-api-lifecycle.html#onerrorcaptured). |
| `app:rendered`           | `renderContext`     | Server          | Called when SSR rendering is done.                                                                                                            |
| `app:redirected`         | -                   | Server          | Called before SSR redirection.                                                                                                                |
| `app:beforeMount`        | `vueApp`            | Client          | Called before mounting the app, called only on client side.                                                                                   |
| `app:mounted`            | `vueApp`            | Client          | Called when Vue app is initialized and mounted in browser.                                                                                    |
| `app:suspense:resolve`   | `appComponent`      | Client          | On [Suspense](https://vuejs.org/guide/built-ins/suspense.html#suspense) resolved event.                                                       |
| `link:prefetch`          | `to`                | Client          | Called when a `<NuxtLink>` is observed to be prefetched.                                                                                      |
| `page:start`             | `pageComponent?`    | Client          | Called on [Suspense](https://vuejs.org/guide/built-ins/suspense.html#suspense) pending event.                                                 |
| `page:finish`            | `pageComponent?`    | Client          | Called on [Suspense](https://vuejs.org/guide/built-ins/suspense.html#suspense) resolved event.                                                |
| `page:transition:finish` | `pageComponent?`    | Client          | After page transition [onAfterLeave](https://vuejs.org/guide/built-ins/transition.html#javascript-hooks) event.                               |

## 组件生命周期

### client

- 和 Vue 的生命周期一致

### SSR

- beforeCreate -> setup
- created

因为没有任何动态更新，所以像`onMounted` 或者`onUpdated` 这样的生命周期钩子**不会**在 SSR 期间被调用，而只会在客户端运行.

你应该避免在 `setup()` 或者 `<script setup>` 的根作用域中使用会产生副作用且需要被清理的代码。这类副作用的常见例子是使用 `setInterval` 设置定时器。我们可能会在客户端特有的代码中设置定时器，然后在`onBeforeUnmount` 或`onUnmounted` 中清除。然而，由于 unmount 钩子不会在 SSR 期间被调用，所以定时器会永远存在。为了避免这种情况，请将含有副作用的代码放到`onMounted` 中。
