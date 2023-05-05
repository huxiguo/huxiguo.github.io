---
lang: zh-CN
title: 页面
description: Nuxt
---

# 页面

## 新建页面

新建`pages`文件夹在里面创建不同的页面

```bash
npx nuxi add page <page-name/index>  <page-name>
```

## 页面跳转

### NuxtLink

```vue
<nuxt-link to="/mine">
  <button>mine</button>
</nuxt-link>
```

### 编程式导航

不利于 SEO 优化

```vue
<NuxtLink @click="goToCart">
    <button>cart</button>
</NuxtLink>
```

```ts
const goToCart = () => {
  return navigateTo({
    path: '/cart',
    query: {
      id: 200
    }
  })
}
```

或者使用 `useRouter`

推荐使用 `navigateTo`
