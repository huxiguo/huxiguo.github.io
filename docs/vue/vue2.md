---
lang: zh-CN
title: Vue2
---

# Vue2

## Vue 历史

- 2013 年受到 Angular 框架启发，开发出 Seed，12 月更名为 Vue
- 2014 年正式对外发布
- 2015 年 10 月 27 日正式发布 Vue1.0.0 Evangelion
- 2016 年发布 Vue2.0.0 Ghost in the Shell
- 2020 年发布 Vue3.0.0 One Piece

## Vue 特点

- 组件化模式，提高代码复用性，更好的维护
- 声明式编码，无需直接操作 DOM

## 模板语法

- 插值语法

`{{xxx}}`

括号里面可以写 js 表达式

- 指令语法

  - 数据绑定

    - `v-bind` 单向绑定

    数据只能从 data 流向页面

    ```js
    <!-- 完整语法 -->
    <a v-bind:href="url">...</a>

    <!-- 缩写 -->
    <a :href="url">...</a>
    ```

    - `v-model` 双向绑定

    数据能从 data 流向页面也能从页面流向 data

    一般用于表单类元素

    ```js
    v-model:value
    ```

## MVVM 模型

- M: 模型 (Model):data 中的数据
- V: 视图 (View):模板代码
- VM：视图模型 (ViewModel): Vue 实例

data 中的所有属性都会挂载到 vm 上

Vue 原型的所有属性，在模板中都能直接使用

## 数据代理

通过一个对象代理对另一个对象中属性的操作

为了更方便的操作 data 中的数据

把 data 中的数据放到 vm 的\_data 上，通过 Object.defineProperty()把 data 对象的属性添加到 vm 上，为每个属性都指定 getter 和 setter

## 事件处理

`v-on` 指令

```vue
<button v-on:click="showMsg">666</button>
<button @click="showMsg">999</button>

// 传递参数
<button @click="showMsg($event, xx)">999</button>
// $event : 事件源
```

事件处理函数配置在 method 中，最终都会在 vm 上

method 中配置的函数，不要使用箭头函数，this 指向会改变

## 事件修饰符

- `prevent`:阻止默认事件
- `stop`:阻止事件冒泡
- `once`:事件只触发一次
- `capture`:使用事件的捕获模式
- `self`:只有 event.target 是当前操作的元素才触发
- `passive`:事件的默认行为立即执行，无需等待事件回调执行完成

```js
// 阻止默认行为
<a href="www.seekhoo.cn" @click="showMsg"></a>
....
methods:{
  showMsg(e){
    e.preventDefault()
    console.log(666)
    }
}
// 精简法
<a href="www.seekhoo.cn" @click.prevent="showMsg"></a>
```

## 按键修饰符

```vue
<input type="text" @keyup.enter="showMsg" />
```

- `.enter`
- `.tab` 配合 keydown 使用
- `.delete`(捕获“删除”和“退格”键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

系统修饰键

- `ctrl`
- `alt`
- `shift`
- `meta`

配合 keyup 按下修饰键同时再按下其他键随后释放其他键，事件才被触发

配合 keydown 正常使用

## 计算属性值

```js
computed(){
  fullName() {
    return this.firstName + '-' + this.lastName
  }
}
```

## watch

被监视的属性发生变化时，回调函数自动执行

监视的属性必须存在才能监视

```js
watch: {
  weather: {
    // 自动执行一次
    immediate:true,
    handler(newVal,oldVal) {
      console.log(111)
    }
  }
}
```

- 深度监视
  - watch 默认不监视对象内部的改变
  - 配置 deep:true 可以监视对象内部值的改变

```js
watch: {
  weather: {
    // 自动执行一次
    immediate:true,
    deep:true, // 开启深度监视
    handler(newVal,oldVal) {
      console.log(111)
    }
  }
}
```

## `computed`和`watch`区别

`computed` 能完成的 `watch` 都能完成,但是`watch`能完成异步操作

## 条件渲染

`v-show`

控制元素显示与隐藏

添加`display:none`

`v-if`

直接删除元素

`v-if`配合`<template v-if="true">xxx</template>`使用

## 列表渲染

```vue
<ul>
<li v-for="item in person" :key="item.id"></li>
</ul>
```

有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误

## `Key`

- 虚拟 DOM 中 key 的作用
  - key 是虚拟 DOM 对象的标识，当状态中的数据发生改变时，Vue 会根据 新数据生成新的虚拟 DOM，随后进行差异比较
- 比较规则
  - 在旧虚拟 DOM 找到与新的虚拟 DOM 相同的 key
    - 如果虚拟 DOM 内容没有改变，直接使用之前的真实 DOM
    - 如果改变了，则生成新的真实 DOM，替换掉之前的真实 DOM
  - 在旧虚拟 DOM 没有找到与新的虚拟 DOM 相同的 key
    - 创建新的真实 DOM 渲染到页面上
- 用 index 作为 key 可能引起的问题
  - 若对数据进行逆序添加、删除等破坏顺序的操作会产生没必要的真实 DOM 更新
  - 如果结构中还包含输入类 DOM，会产生错误的 DOM 更新
- 最好选用唯一标识最为 key,如果不存在对数据的破坏顺序操作,仅仅只是渲染列表用于展示用 index 作为 key 是没问题的

## watch

问题引出

```js
...
data:{
  persons: [
    {id: '001',name: '马冬梅',age: 32},
    {id: '002',name: '周冬雨',age: 19},
    {id: '003',name: '周杰伦',age: 25},
    {id: '004',name: '温兆伦',age: 21}
  ]
},
methods:{
  changePerson(){
    this.persons[0].name='zs' // 生效
    this.persons[0].age=20 // 生效

    this.persons[0] = {id:'001',name:'zs',age:'20'} // 不生效，vue监测不到数据改变
  }
}
...
```

## Vue 检测数据原理

Vue 会监测 data 中所有层级的数据

检测对象简单的基本原理

```js
let data = {
  name: 'zs'
}

// 创建监视的实例对象，监视data中的属性变化
const obs = new Observer(data)

let vm = {}

vm._data = data = obs

// Observer 构造函数
function Observer(obj) {
  // 汇总对象中所有的属性形成一个数组
  const keys = Object.keys(obj)
  keys.forEach((k) => {
    Object.defineProperty(this, k, {
      get() {
        return obj[k]
      },
      set(val) {
        obj[k] = val
      }
    })
  })
}
```

Vue.set()

```js
Vue.set(target, propertyName, value)
vm.$set(target, propertyName, value)
// 可以向响应式对象中添加一个property，并且新的property也是响应式

// 添加的对象不能是Vue实例，或者Vue实例的根数据对象
```

检测数组

Vue 对数组变更方法进行了包裹，使用以下方法也可以触发视图的更新

`push()` ` pop()` `shift()` `unshift()` `splice()` `sort()` `reverse()`

## 过滤器

过滤器可以串联使用

```js
// 使用过滤器
{{time | timeFormater}}

...
filters:{
  timeFormater(){
    // 自动传入参数 time
    // 可以自己传入参数，接受的参数第一个为默认传入的，其他参数依次接受
  }
}
...
```

全局过滤器

```js
Vue.filter(name, function () {})
```

## 自定义指令

指令名称多个单词拼接时 => `v-big-number`

`'big-number' (){}`

```js
// 自定义一个指令 放大数值10倍

directives: {
  // 指令与元素成功绑定时调用，模板重新解析时调用
  big(element, binding) {
    // element 真实DOM binding 绑定对象
    element.innerText = binding.value * 10
  }
}

// 定义 v-fbind 自动获取焦点

irectives: {
  // 指令与元素成功绑定时调用，模板重新解析时调用
  fbind(element, binding) {
    element.value = binding.value
    Vue.nextTick(() => {
      element.focus()
    })
  }
  fbind: {
    // 指令与元素成功绑定调用
    bind(element, binding) {
      // 此处的this是window
      element.value = binding.value
    },
    // 指令所在元素放入页面时调用
    inserted(element, binding) {
      element.focus()
    },
    // 指令的模板重新调用
    update(element, binding) {
      element.focus()
    }
  }
}
```

创建全局指令

```js
Vue.directive('fbind', {
  // 指令与元素成功绑定调用
  bind(element, binding) {
    element.value = binding.value
  },
  // 指令所在元素放入页面时调用
  inserted(element, binding) {
    element.focus()
  },
  // 指令的模板重新调用
  update(element, binding) {
    element.focus()
  }
})
```

## 生命周期

![生命周期](./images/lifecycle.png)
生命周期函数

### 挂载流程

#### `mounted`

Vue 完成模板解析后并把真实 DOM 放入页面后(挂载完成)调用

`beforeCreate`

此时无法通过 vm 访问到 data 中的数据、methods 中的方法

#### `created`

可以访问 data methods

#### `beforeMount`

在虚拟 DOM 转成真实 DOM 之前， 页面都是未经编译的 DOM，所有对 DOM 的操作最终都不奏效

#### `mounted`

真实 DOM 插入页面后，一般在此进行开启定时器，发送网络请求等初始化操作

### 更新流程

`beforeUpdate`

数据是新的，页面还未更新，页面和数据尚未保持同步

`updated`

页面和数据保持同步

### 销毁流程

`beforeDestroy`

vm 的所有都可用，对数据的修改不会更新，一般在此时关闭定时器，解绑自定义事件

`destroyed`

## 组件

命名：一个单词 `School` 首字母大写，多单词 `my-school` `MySchool`

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

## 组件的自定义事件

click keyup 是 js 内设置的应用在 html 元素上的事件

自定义事件应用在组件

[详情](communication.md)

解绑事件

```js
// 解绑一个自定义事件
unbind(){
  this.$off('sendMsg')
}

// 解绑多个自定义事件
unbind(){
  this.$off(['sendMsg','xxx','yyy'])
}

// 解绑所有
unbind(){
  this.$off()
}
```

## 全局事件总线

GlobalEventBus 适用于任意组件通信

安装全局事件总线

```js
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})
```

使用事件总线

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

## 插槽

1. 默认插槽

```vue
// 父组件
<template>
  <Student>
    <h2>world</h2>
  </Student>
</template>

// Student
<template>
  <h1>hello</h1>
  <slot>默认值，没有传递结构时使用</slot>
</template>
```

2. 具名插槽

```vue
// 父组件
<template>
  <Student>
    <h2 slot="center">world</h2>
    <template v-slot:footer>
      <h2>hahah</h2>
      <h2>hahah</h2>
      <h2>hahah</h2>
    </template>
  </Student>
</template>

// Student
<template>
  <h1>hello</h1>
  <slot name="center">默认值，没有传递结构时使用1</slot>
  <slot name="footer">默认值，没有传递结构时使用2</slot>
</template>
```

3. 作用域插槽

结构必须使用 `<template></template>`包裹

`<template scope="xxx"></template>`
