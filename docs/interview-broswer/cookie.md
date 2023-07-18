# cookie

## set get cookie

1. 通过 HTTP 对 Cookie 进行赋值

- HTTP Response Header 中的 Set-Cookie 字段
- HTTP Request Header 中的 Cookie 字段

2. 通过 JavaScript 对 Cookie 进行赋值

- document.cookie

## HTTP Cookie

`Set-Cookie` 除了包含 `Cookie` 的值之外，还可以设置 `Cookie` 的属性，如下：

- `Expires`:过期时间，用来指定 `Cookie` 的有效期，如果不设置该属性，那么该 `Cookie` 只在当前会话期间内有效，即浏览器关闭之后该 Cookie 就会失效

- `max-age`:最大有效时间，单位为秒，与 `Expires` 的作用一样，只是将过期时间换成了秒

- `Domain`:生成该 `Cookie` 的域名，如 `domain="www.baidu.com"`

- `Path`:该 Cookie 是在当前的哪个路径下生成的，如 `path=/wp-admin/`

- `Secure`: 如果设置了这个属性，那么只有在使用 SSL 连接的时候才会把这个 Cookie 发送到服务器端

- `httponly`:如果设置了这个属性，那么通过程序（JS 脚本）将无法读取到 Cookie 信息，这样能有效的防止 XSS 攻击

## JS Cookie

在 JS 中，我们可以通过`document.cookie`来获取和设置 `cookie`，属性值中没有`httpOnly`，因为 JS 不能读写`httpOnly`的 cookie

```js
// 设置 cookie
document.cookie = "name=hello";
// 获取 cookie
document.cookie;
// 设置 cookie 的有效期
document.cookie = "name=hello;max-age=3600";
```

## HTTP 请求什么时候会携带 cookie

1. 浏览器端某个 `Cookie` 的 `domain` （.a.com）字段等于「请求的域名的或者是请求的父域名」（a.com/b.a.com）
2. 都是`http`，`https`协议才行，或者不同的情况下`Secure`属性为 `False`
3. 要发送的请求的路径必须与`path`属性必须一致或者是路径的子路径，`path=/test`,请求路径`/test`,`/test/a`

满足这三个条件，会自动携带 Cookie

## 携带跨域 Cookie

1. 前端 在 `request header` 中设置`withCredentials`为`true`
2. 后端 设置`Access-Control-Allow-Credentials`为`true`,并且`Access-Control-Allow-Origin`不能为`*`
