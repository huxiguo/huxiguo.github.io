---
lang: zh-CN
title: 分析项目
---

# 分析项目

## `main.js`

```js
// 引入的不是 Vue 构造函数 是 createApp 工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建一个应用实例对象类似于 vm ,但是更简洁
const app = createApp(App)

// 挂载
app.mount('#app')

// vue2
new Vue({
  render: (h) => h(App)
}).$mount('#app')
```

## `App.vue`

```vue
<template>
  <!-- 可以有多个根组件 -->
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
```
