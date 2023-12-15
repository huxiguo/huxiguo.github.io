# `session`

## 下载

```bash
pnpm add express-session --save

pnpm add @types/express-session -D
```

## 使用

```ts {6,13-18 }
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.use(
    session({
      secret: 'hu888888',
      rolling: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();

```

session 参数配置

| secret | 生成服务器端session签名 |
| :----- |: ------------------------------------------ |
| name    | 客户端cookie名字                            |
| cookie  | 设置返回前端的key                           |
| rolling | 每次请求时强制设置cookie,重置cookie过期时间 |
