---
lang: zh-CN
title: SSR Router
description: SSR
---

# SSR router

[仓库](https://github.com/huxiguo/vue3-node-SSR/tree/main/vue3-ssr-router)

## 配置路由

`router/index.js`

```js
import { createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('../views/home.vue')
      },
      {
        path: '/about',
        component: () => import('../views/about.vue')
      }
    ]
  }
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}
```

## 后端服务

`server/index.js`

```js {18-23}
let express = require('express')

let server = express()

import { renderToString } from '@vue/server-renderer'
import createRouter from '../router/index'
import createApp from '../app'
import { createMemoryHistory } from 'vue-router'

// 部署静态资源
server.use(express.static('build'))

server.get('/*', async (req, res) => {
  let app = createApp()

  // 路由插件
  // node 环境使用内存路由
  let router = createRouter(createMemoryHistory())
  app.use(router)
  // 等待页面跳转
  await router.push(req.url || '/')
  // 等待异步路由加载完成
  await router.isReady()
  let htmlStr = await renderToString(app)
  res.send(
    `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      ${htmlStr}
    </div>
    <script src="/client/client_bundle.js"></script>
  </body>
  </html>
  `
  )
})
server.listen(3000, () => {
  console.log('your server start on http://localhost:3000')
})
```

## client

`client/index.js`

```js {7-11}
import { createApp } from 'vue'
import App from '../App.vue'
import createRouter from '../router/index'
import { createWebHistory } from 'vue-router'
let app = createApp(App)

let router = createRouter(createWebHistory())
app.use(router)
router.isReady().then(() => {
  app.mount('#app')
})
```
