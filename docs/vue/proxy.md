---
lang: zh-CN
title: 跨域与代理
---

# 跨域与代理

## 跨域

同源策略规定：协议，主机名，端口号必须一致

违反同源协议会跨域

跨域可以发送请求，服务器可以返回数据，但是浏览器不会放行

### jsonp

原理：利用`<script>`标签`src`属性引入外部资源不受同源策略限制实现，服务器收到请求后，将数据放在一个 `callback` 回调函数中传回来

缺点：只支持`GET`请求，需要前后端配合实现，不安全，可能会受到 XSS 攻击

node 服务器

```js
const express = require('express')
const app = express()
const port = 8088

//路由配置
app.get('/user', (req, res) => {
  //1.获取客户端发送过来的回调函数的名字
  let fnName = req.query.callback
  //2.得到要通过JSONP形式发送给客户端的数据
  const data = { name: 'tom' }
  //3.根据前两步得到的数据，拼接出个函数调用的字符串
  let result = `${fnName}({name:"tom"})`
  //4.把上步拼接得到的字符串，响应给客户端的<script> 标签进行解析执行
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

前端请求

```html
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>JSONP简单实现</title>
   </head>
      <body>
         <button id="btn">点击发送请求</button>
         <script>
            function getJsonpData(data) {
               console.log("获取数据成功")
               console.log(data) //{name:'tom'}
            }
            var btn = document.getElementById("btn");
            btn.onclick = function () {
               //创建script标签
               var script = document.createElement("script");
               script.src = 'http://localhost:8088/user?callback=getJsonpData';
               document.body.appendChild(script);
               script.onload = function () {
                  document.body.removeChild(script)
               }
            }
         </script>
      </body>
   </html>

```

### CORS

跨域资源共享(Cross-origin resource sharing)

CORS 请求分为 simple request 和 not-so-simple request

simple request：

1. 请求为`HEAD` `GET` `POST`之一
2. HTTP 头部不超出
   - Accept
   - Accept-Language
   - Content-Language
   - Last-Event-ID
   - Content-Type：只限于三个值 `application/x-www-form-urlencoded、multipart/form-data、text/plain`

不满足以上属于 not-so-simple request

分类原因：表单在历史上一直可以跨域发出请求。简单请求就是表单请求，浏览器沿袭了传统的处理方式，不把行为复杂化，否则开发者可能转而使用表单，规避 CORS 的限制。对于非简单请求，浏览器会采用新的处理方式

对于简单请求浏览器在头信息中添加一个`Origin`字段

```{2}
GET /cors HTTP/1.1
Origin: http://www.baidu.com
Host: www.baidu.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
```

`Origin`字段用来说明，本次请求来自哪个域(协议 + 域名 + 端口)。服务器根据这个值，决定是否同意这次请求

如果指定的域名在许可范围内 服务器的响应

```
必需字段，表示接受任意域名的请求
Access-Control-Allow-Origin: http://www.baidu.com
可选 布尔值 是否允许发送Cookie
Access-Control-Allow-Credentials: true
可选 XMLHttpRequest对象的getResponseHeader() 要拿到其他字段时指定
Access-Control-Expose-Headers: FooBar
```

### 代理服务器

1. nginx

2. 使用 vue-cli 开启代理服务器

```js
devServer: {
    proxy: {
      // 请求前缀
      '/api': {
        // 要转发到服务器地址
        target: 'http://localhost:5000',
        // 截取请求路径
        pathRewrite: {
          '^/api':''
        },
        // websocket
        ws: true,
        // 请求头中的host值
        changeOrigin: true
      }
    }
  }
```
