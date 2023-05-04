---
lang: zh-CN
title: nuxt.config.ts
description: Nuxt
---

# nuxt.config.ts

[nuxt.config](https://nuxt.com/docs/api/configuration/nuxt-config)

## runtimeConfig

- 运行时配置，定义环境变量
- 可以通过`.env` 文件中的环境变量覆盖 (.env > runtimeConfig)
- .env 变量或打入到 process.env 中，符合规则的会覆盖 runtimeConfig

`.env`

```
PORT = 9090
NUXT_PUBLIC_BASE_URL = '12.1.1.1'
```

## appConfig

- 定义在构建时确定的公共变量
- `app.config.ts`优先级更高

## app 设置

SEO 优化

```ts
app: {
    head: {
      title: 'seekhoo',
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'keywords',
          content: '啦啦啦啦'
        }
      ],
      link: [
        {
          rel: 'shortcut icon',
          href: 'favicon.ico',
          type: 'image/x-icon'
        }
      ]
    }
  }
```

在页面中设置

```ts
useHead({
  title:'首页',
  meta:[],
  ...
})
```

通过内置组件设置

```vue
<Meta name="key" content="45645465"></Meta>
```

优先级 内置标签 > useHead() > 配置文件

## ssr

是否开启 SSR 默认 true
