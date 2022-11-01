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

### props

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
    this.receive('6')`
  }
}
```

### 组件自定义事件

```vue
// 父组件
<template>
  <div>
    <Child @sendMsg="getFromChild" />
  </div>
</template>
<script>
import Child from './Child'
export default {
  components: {
    Child
  },
  methods: {
    getFromChild(name) {
      console.log(name)
    }
  }
}
</script>

// 子组件
<template>
  <div>
    <button @click="sendName">发送</button>
  </div>
</template>
<script>
export default {
  data(){
    rerurn {
      name:'zs'
    }
  }
  methods: {
    sendName(){
      this.$emit('sendMsg',this.name)
    }
  }
}
</script>
```

## 全局事件总线

```vue
// 组件A 接受
<template>
  <div></div>
</template>
<script>
export default {
  methods: {
    getMsg(msg){...}
  },
  mounted(){
    this.$bus.$on('demo',this.getMsg)
  }
}
</script>
// 组件B 发送
<template>
  <div></div>
</template>
<script>
export default {
  methods: {
    sendMsg(msg) {
      this.$bus.$emit('demo', 666)
    }
  },
  // 在beforeDestroy中解绑事件
  beforeDestroy() {
    this.$bus.$off('demo')
  }
}
</script>
```
