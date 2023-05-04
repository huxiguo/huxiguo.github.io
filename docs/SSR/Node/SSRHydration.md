---
lang: zh-CN
title: SSR Hydration
description: SSR
---

# 一、SSR Hydration

[仓库](https://github.com/huxiguo/vue3-node-SSR/tree/main/vue3-ssr-server)

## 激活静态页面

`client/index.js`

```js
import { createApp } from 'vue'
import App from '../App.vue'

let app = createApp(App)
app.mount('#app')
```

`webpack.config.client.js`

```js
let path = require('path')
let nodeExternals = require('webpack-node-externals')
let { VueLoaderPlugin } = require('vue-loader/dist/index')
let { DefinePlugin } = require('webpack')
module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, '../build/client')
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
  plugins: [
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue']
  }
}
```

修改 server 的 `index.js`

```js {8-9,29}
let express = require('express')

let server = express()

import createApp from '../app'
import { renderToString } from '@vue/server-renderer'

// 部署静态资源
server.use(express.static('build'))

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

启动服务后功能可以完整实现
