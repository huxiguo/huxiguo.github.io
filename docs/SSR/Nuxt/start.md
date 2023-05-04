---
lang: zh-CN
title: start Nuxt
description: Nuxt
---

# start

## 创建 Nuxt 项目

> Node.js > <Badge type="tip" text="v16.10.0" vertical="middle" />

 <CodeGroup>
 <CodeGroupItem title="npx">

```bash:no-line-numbers
npx nuxi init <project-name>
```

  </CodeGroupItem>

  <CodeGroupItem title="pnpm">

```bash:no-line-numbers
pnpm dlx nuxi init <project-name>
```

  </CodeGroupItem>

</CodeGroup>

## 安装依赖

<CodeGroup>
<CodeGroupItem title="yarn">

```bash:no-line-numbers
yarn install
```

  </CodeGroupItem>

  <CodeGroupItem title="npm">

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
  <CodeGroupItem title="pnpm">

```bash:no-line-numbers
# Make sure you have `shamefully-hoist=true` in `.npmrc` before running pnpm install
pnpm install
```

  </CodeGroupItem>

</CodeGroup>

## 启动

<CodeGroup>
<CodeGroupItem title="yarn">

```bash:no-line-numbers
yarn dev -o
```

  </CodeGroupItem>

  <CodeGroupItem title="npm">

```bash:no-line-numbers
npm run dev -- -o
```

  </CodeGroupItem>
  <CodeGroupItem title="pnpm">

```bash:no-line-numbers
pnpm dev -o
```

  </CodeGroupItem>

</CodeGroup>
