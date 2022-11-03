---
lang: zh-CN
title: vueRouter
---

# 路由

- 路由：(router) 对应关系
- 前端路由：Hash 地址与组件的对应关系

## 工作方式

1. 用户点击路由链接
2. 使 URL 中的 Hash 值发生变化
3. 前端路由监听到了 Hash 地址的变化
4. 前端路由把当前的 Hash 地址的组件渲染到浏览器

## vue-router

- 只能在 vue 项目中使用

### 安装与配置

1. 安装 vue-router 包
2. 创建路由模块
3. 导入并挂载路由模块
4. 声明路由链接和占位符

```js
// 在src目录下建立router目录，并建立index.js文件
// 当前项目的路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 调用Vue.use() 函数，把VueRouter 安装为Vue插件
Vue.use(VueRouter)

// 创建路由实例
const router = new VueRouter()

// 向外共享路由实例对象
export default router
```

- 在 main.js 中挂载路由
- `<router-view></router-view>` 占位符组件被放置的位置
- 在 index.js 中声明对应关系，routes 定义 hash 地址与组件之间的对应关系
- `router-link` 代替 a 链接 `<router-link to="/home">首页</router-link>`

### 路由重定向

- ` { path: '/', redirect: '/home' }`

### 嵌套路由

- 通过 children 属性声明子路由规则
- 如果 children 数组中 某个路由规则的 path 为空则这条路由规则为默认路由

### 动态路由匹配

- 把 hash 地址中可变的部分定义为参数项，可以提高路由规则的复用性，用`:`定义动态参数项
- 在路由规则里面`props:true` 表示开启 props 传参
  > 在 hash 地址中/ 后面的参数叫做 路径参数
  > 在 hash 地址中 ？后面的参数项叫做查询参数
  > 在路由参数对象中，使用`this.$route.query`访问查询参数
  > `this.$route` 中 path 是路径部分不包括查询参数，fullpath 是完整的地址

### 声明式导航&编程式导航

- 声明式导航：在浏览器中通过点击链接实现导航的方式
- 编程式导航：在浏览器中通过调用 API 方法实现导航

#### vue-router 中编程式导航 API

- 常用

1. `this.$router.path('hash地址')`
   - 跳转到指定的 hash 地址，并且增加一条历史记录
2. `this.$router.replace('hash地址')`
   - 跳转到指定的 hash 地址，并且替换当前的历史记录
3. `this.$router.go(数值n)`

- 在浏览历史中前进和后退

* 简化`go`
  - `$router.back()` 在历史记录中后退到上一个页面
  - `$router.forward()` 在历史记录中前进到下一个页面

## 导航守卫

- 控制路由的访问权限

### 全局前置守卫

- 每次发生陆游的导航跳转时，都会触发全局前置守卫

```js
// 只要发生跳转就会触发回调函数
router.beforeEach((to, from, next) => {
  // to 将要访问的路由对象
  // from 将要离开的路由信息对象
  // next 一个函数 调用next() 表示放行，允许本次路由导航
})
```

- `next()` 调用的三种方式
  - 有访问权限直接放行
  - 没有权限强制跳转`next('/login')`
  - 没有权限,不跳转`next(false)`
