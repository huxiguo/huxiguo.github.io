---
lang: zh-CN
title: fetch
description: Nuxt
---

# fetch 获取数据

## $fetch

```ts
const BASE_URL = 'http://mapi.yunog.cn:3000'
$fetch(`${BASE_URL}/dj/banner`, {
  method: 'GET'
}).then(res => {
  console.log(res)
})
```

- 客户端发送请求后，服务端也会发起请求
- 使用`hooks`,保证单次请求
- 可以减少客户端的网络请求

```ts
const BASE_URL = 'http://mapi.yunog.cn:3000'
interface Idata {
  code: number
  data: any[]
}
const { data } = useAsyncData<Idata>('banner', async () => {
  return await $fetch(`${BASE_URL}/dj/banner`)
})
```
