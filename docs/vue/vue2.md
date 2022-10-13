---
lang: zh-CN
title: Vue2
---

# Vue2

## `mixin`混入

把多个组件公用的配置提取成一个混入对象

```js
// 建立 mixin.js 文件
// 导出公共的逻辑
export const mixin = {
  methods: {
    showName() {
      alert(this.name)
    }
  }
}

// 在不同的组件中使用混合

// 引入混合
import { mixin } from '../mixin'
export default {
  ...
  mixins: [mixin]
  ...
}
```

组件中没有的使用混合中的，组件中有的使用组件中的

生命周期钩子中的都会执行，优先执行混合

## 插件

用于增强 Vue

是包含 install 方法的一个对象，install 方法第一个参数是`Vue`，以后的参数是使用者传递的参数

定义插件

```js
// plugins.js

export default {
  install(Vue) {
    // 可以定义过滤器 全局指令 混入 添加实例方法.....
  }
}
```

使用插件

`Vue.use(plugins)`
