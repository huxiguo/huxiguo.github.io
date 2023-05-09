---
lang: zh-CN
title: api
description: Nuxt
---

# api 接口

- 在`server/api`下的文件会自动称为`api`接口

```ts
// server/api/test.ts
export default defineEventHandler(event => {
  let { req, res } = event.node
  console.log('req', req)
  console.log('res', res)

  return {
    code: 200,
    data: {
      name: 'seekhoo',
      age: 18
    }
  }
})
```

在`test.vue`页面中使用

```ts
const { data } = await useLazyFetch('/api/test')
```

- 通过不同的后缀名来区分不同的请求方式
- `get`请求：`*.get.ts`
- `post`请求：`*.post.ts`
