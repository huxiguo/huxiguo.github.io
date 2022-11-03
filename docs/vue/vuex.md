---
lang: zh-CN
title: Vuex
---

# Vuex

在 Vue 中实现集中式状态管理的插件

## 工作原理

![vuex](./images/vuex.png)

## 使用 Vuex

```js
// 安装 Vuex
npm i vuex

// Vue2使用vuex3，Vue3使用Vuex4

// 创建vm实例时 store
new Vue({
  render: (h) => h(App),
  store
}).$mount('#app')

// store index.js
import Vue from 'vue'
import Vuex from 'vuex'

// 使用
Vue.use(Vuex)

export default new Vuex.Store({
  // ...
})
```

## 1. State

- State 提供唯一的公共数据源，所有共享的数据都要统一放到 Store 的 State 中进行储存

```js
export default new Vuex.Store({
  state: {
    // 共享的数据
    count: 0
  }
})
```

- 组件访问 State 中的数据

  - 方法一：

    ```js
    this.$store.state.数据名称
    ```

  - 方法二：

    ```js
    // 1. 从vuex中导入mapState 函数
    import {mapState} from 'vuex'
    // 通过导入的函数将组件需要的数据，映射为当前组件的computed计算属性
    computed: {
      ...mapState(['count']) // 数组写法
      ...mapState({sum:'count'}) // 对象写法
    }
    ```

  - 两种方法都行

## 2. Mutation

- 用于变更 Store 里面的数据

  - 只能通过 mutation 变更 Store 数据，不可以直接操作 Store 中的数据
  - 可以集中监控数据的变化

  ```js
  // 方式一
  // 定义mutation
  mutations: {
      add (state) {
        state.count++
      }
    }
  // 触发mutation
  methods: {
      btnHandler1 () {
        this.$store.commit('add')
      }
    }
  ```

  ```js
  // 方式二
  import {mapMutations} from 'vuex'
  methods: {
      ...mapMutations(['sub']),
      btnHandler1 () {
        this.sub()
      }
    }
  ```

  - 不要在 mutations 里面执行异步操作

## 3. Action

- Action 用于处理异步任务
- Action 通过触发 Mutation 的方式间接变更数据

```js
 actions: {
    addAsync (context) {
      setTimeout(() => {
      // 通过形参获取mutation里面的方法
        context.commit('add',5)
      }, 1000)
    }
  }
---
  methods:{
       btnHandler3 () {
      this.$store.dispatch('addAsync',5)
    }
  }
```

## 4. Getter

- 包装作用，不会修改原数据

- 使用方法

  ```js
  Getters:{
  	showNum (state) {
        return 'count==[' + state.count + ']'
      }
  }
  ```

  ```js
  // 方法一
  this.$store.getters.名称
  ```

  ```js
  // 方法二
  import {mapGetters} from 'vuex'
  computed:{
  	...mapGetters(['showNum'])
  }
  ```

## map 方法

1.  `mapState`方法：用于帮助我们映射 state 中的数据为计算属性

```js
import {mapState} from 'vuex'

computed:{
  // 借助mapState生成计算属性，从state中读取数据。（对象写法）
  ...mapState({sum:'sum',school:'school',subject:'subject'}),

  // 借助mapState生成计算属性，从state中读取数据。（数组写法）
  ...mapState(['sum','school','subject']),
},
```

2.  `mapGetters`方法：用于帮助我们映射 getters 中的数据为计算属性

```js
import {mapGetters} from 'vuex'

computed:{
  // 借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
  ...mapGetters({bigSum:'bigSum'}),

  // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
  ...mapGetters(['bigSum'])
},
```

3. `mapActions` 方法：用于帮助我们生成与 actions 对话的方法，即：包含$store.dispatch(xxx)的函数。

```js
import {mapActions} from 'vuex'
methods：{
  // 借助mapActions生成对应的方法，方法中会调用commit去练习mutations（对象写法）
  ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),

  // 借助mapActions生成对应的方法，方法中会调用commit去练习mutations（数组写法）
  ...mapActions(['jiaOdd','jiaWait']),
}
```

4. `mapMutations`方法：用于帮助我们生成与 mutations 对话的方法，即：包含$store.commit(xxx)的函数。

```js
methods：{
  // 借助mapMutations生成对应的方法，方法中会调用commit去练习mutations（对象写法）
  ...mapMutations({increment:'JIA',decrement:'JIAN'}),

  // 借助mapMutations生成对应的方法，方法中会调用commit去练习mutations（数组写法）
  ...mapMutations(['JIA','JIAN']),
}
```

::: tip 提示
`mapActions` 与 `mapMutations` 使用时，若需要传递参数，需要：在模板中绑定事件时传递好参数，否则参数是事件对象
:::

## 模块化 命名空间

让代码更好维护，让多种数据分析更加明确。

```js
// store index.js

const countAbout = {
    namespaced:true,//开启命名空间
    state:{x:1},
    mutations:{......},
    actions:{......},
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
}

const personAbout = {
    namespaced:true,//开启命名空间
    state:{......},
    mutations:{......},
    actions:{......}
}

const store = new Vuex.Store({
    modules:{
        countAbout,
        personAbout
    }
})
```

1. 开启命名空间后，组件中读取 state 数据：

```js
//方式一：自己直接读取
this.$store.state.personAbout.list
//方式二：借助mapState读取
...mapState('countAbout',['sum','school','subject']),
```

2. 开启命名空间后，组件中读取 getters 数据：

```js
//方式一：自己直接读取
this.$store.getters['personAbout/firstPersonName']
//方式二：借助mapGetters读取
...mapGetters('countAbout',['bigSum'])
```

3. 开启命名空间后，组件中调用 dispatch：

```js
//方式一：自己直接读取
this.$store.dispatch('personAbout/addPersonWang',personObj)
//方式二：借助mapGetters读取
...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
```

4. 开启命名空间后，组件中调用 commit：

```js
//方式一：自己直接读取
this.$store.commit('personAbout/ADD_PERSON',personObj)
//方式二：借助mapGetters读取
...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
```
