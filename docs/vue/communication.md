---
lang: zh-CN
title: 组件通信
---

# 组件通信

## 父组件向子组件

`props`

```js
// 父组件

<template>
  <Son :msg="1" />
</template>

//子组件

<template>
  <h1>{{msg}}</h1>
</template>

export default {
  name: 'Son',
  props: ['msg'],
}
```

## 子组件向父组件

```js
// 父组件

<template>
  <Son :receive="receive" />
</template>

<script>
export default {
  methods:{
    receive(msg){
      console.log(msg) // 6
    }
  }
}
</script>
//子组件

<template>
  <h1>子组件</h1>
</template>

export default {
  name: 'Son',
  props: ['receive'],
  mounted(){
    this.receive('6')
  }
}
```
