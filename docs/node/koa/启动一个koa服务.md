# 启动一个kao服务

## 1. 安装koa

```bash
npm install koa
```

## 2. 创建一个koa服务

```ts
import Koa from "koa";

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});

```
