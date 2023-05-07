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
- 路由切换时只在客户端请求
- 刷新页面只会在服务端请求

`useAsyncData()`

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

`useFetch()`

- 可以省略请求的 key

```ts
const { data } = await useFetch<Idata>(`${BASE_URL}/dj/banner`)
// get
const { data } = await useFetch<Idata>('/homeInfo', {
  method: 'GET',
  baseURL: BASE_URL,
  params: {
    name: 'zzz'
  }
  // query: {
  //   name: 'zzz'
  // }
  headers: {
    'Content-Type': 'application/json'
  }
})
// post
const { data } = await useFetch<Idata>('/goods', {
  method: 'POST',
  baseURL: BASE_URL,
  body: {
    name: 'zzz'
  },
  headers: {
    'Content-Type': 'application/json'
  },
  // 拦截器 client server
  onRequest({ request, options }) {
    console.log('onRequest', options)
    // options.headers = {
    //   token: 'xxxx'
    // }
  },
  onRequestError({ request, options, error }) {
    console.log('onRequestError', error)
  },
  onResponse({ response, options }) {
    console.log('onResponse', response._data)
  },
  onResponseError({ request, response, options, error }) {
    console.log('onResponseError', error)
  }
})
```

```ts
function useFetch(
  url: string | Request | Ref<string | Request> | () => string | Request,
  options?: UseFetchOptions<DataT>
): Promise<AsyncData<DataT>>

type UseFetchOptions = {
  key?: string
  method?: string
  query?: SearchParams
  params?: SearchParams
  body?: RequestInit['body'] | Record<string, any>
  headers?: Record<string, string> | [key: string, value: string][] | Headers
  baseURL?: string
  server?: boolean
  lazy?: boolean
  immediate?: boolean
  default?: () => DataT
  transform?: (input: DataT) => DataT
  pick?: string[]
  watch?: WatchSource[]
}

type AsyncData<DataT> = {
  data: Ref<DataT>
  pending: Ref<boolean>
  refresh: (opts?: { dedupe?: boolean }) => Promise<void>
  execute: () => Promise<void>
  error: Ref<Error | boolean>
}

```

- `useFetch()` 会阻塞页面渲染，直到请求完成

```ts {4}
const { data } = await useFetch<Idata>('/homeInfo', {
  method: 'GET',
  baseURL: BASE_URL,
  lazy: true
})
```

- 设置`lazy: true`，不会阻塞页面渲染

- `useLazyFetch()`

```ts
const { data } = await useLazyFetch<Idata>('/homeInfo', {
  method: 'GET',
  baseURL: BASE_URL
})
// 确保一定拿得到数据
watch(data, newData => {
  console.log('newData', newData)
})
```

## 封装`useFetch()`

`server/index.ts`

```ts
import { AsyncData, UseFetchOptions } from 'nuxt/app'

const BASE_URL = 'http://codercba.com:9060/juanpi/api'
export interface IResultData<T> {
  code: number
  data: T
}
type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE'
class myRequest {
  request<T = any>(url: string, method: Methods, data?: any, options?: UseFetchOptions<T>): Promise<AsyncData<T, Error>> {
    return new Promise((resolve, reject) => {
      const newOptions: UseFetchOptions<T> = {
        baseURL: BASE_URL,
        method,
        ...options
      }
      if (method === 'GET') {
        newOptions.query = data
      }
      if (method === 'POST') {
        newOptions.body = data
      }
      useFetch<T>(url, newOptions as any)
        .then(res => resolve(res as AsyncData<T, Error>))
        .catch(err => reject(err))
    })
  }
  get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>): Promise<AsyncData<T, Error>> {
    return this.request<T>(url, 'GET', params, options)
  }
  post<T = any>(url: string, data?: any, options?: UseFetchOptions<T>): Promise<AsyncData<T, Error>> {
    return this.request<T>(url, 'POST', data, options)
  }
}
export default new myRequest()
```

`server/home.ts`

```ts
import request, { IResultData } from './index'
export const fetchHomeInfoData = () => {
  return myRequest.get<IResultData<any>>('/homeInfo', null, {
    lazy: true
  })
}
```

`home.vue`

```ts
import { fetchHomeInfoData } from '~/server/home'

const { data } = await fetchHomeInfoData()
console.log('data', data)
```
