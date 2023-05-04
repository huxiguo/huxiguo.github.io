---
lang: zh-CN
title: node搭建 vue3 SSR
description: SSR
---

# 静态页面

## 一、express 启动后端

[仓库](https://github.com/huxiguo/vue3-node-SSR/tree/main/node-server)

`index.js`

```js
let express = require('express')

let server = express()

server.get('/', (req, res) => {
  res.send(`Hello World 123`)
})
server.listen(3000, () => {
  console.log('your server start on http://localhost:3000')
})
```

使用 webpack 打包

`webpack.config.js`

```js
let path = require('path')
let nodeExternals = require('webpack-node-externals')
module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, '../build/server')
  },
  externals: [nodeExternals()] // node环境
}
```

## 二、vue 的 SSR

[仓库](https://github.com/huxiguo/vue3-node-SSR/tree/main/vue3-ssr-server)

一个 vue 组件

`App.vue`

```vue
<template>
  <div class="app" style="border: 1px solid beige">
    <h2>Vue app</h2>
    <div>{{ count }}</div>
    <button @click="addCount">+1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const addCount = () => {
  count.value += 1
}
</script>
<style scoped></style>
```

`app.js`

```js
import { createSSRApp } from 'vue'

import App from './App.vue'

// q: 为什么写成函数返回app?
// a: 通过函数返回，可以保证每个请求都返回一个新的app实例，避免跨请求的污染
export default function createApp() {
  let app = createSSRApp(App)
  return app
}
```

::: tip 跨请求状态污染
在 SPA 中，整个生命周期只有一个 App 对象实例

在 SSR 环境下，App 模块通常只在服务启动时初始化一次，同一个模块会在对个请求之间被复用，所以会存在状态泄露，这种情况被称为 **跨请求状态污染**

为了避免 在每个请求中为整个应用创建一个全新的实例
:::

修改后端服务
`index.js`

```js
let express = require('express')

let server = express()

import createApp from '../app'
import { renderToString } from '@vue/server-renderer'

server.get('/', async (req, res) => {
  let app = createApp()
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
  </body>
  </html>
  `
  )
})
server.listen(3000, () => {
  console.log('your server start on http://localhost:3000')
})
```

修改 webpack 配置

`webpack.config.js`

```js {12-27}
let path = require('path')
let nodeExternals = require('webpack-node-externals')
let { VueLoaderPlugin } = require('vue-loader/dist/index')
module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, '../build/server')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: ['.js', '.json', '.vue']
  },
  externals: [nodeExternals()] // node环境
}
```

启动打包后的文件，这个文件只是静态的，没有交互
