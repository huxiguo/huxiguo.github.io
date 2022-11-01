---
lang: zh-CN
title: Vuex
---

# Vuex

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
    comouted: {
      ...mapState(['count'])
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
