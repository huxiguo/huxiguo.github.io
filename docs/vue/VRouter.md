---
lang: zh-CN
title: vueRouter 详
---

# 路由

实现 SPA 应用 (single page web application)

## 使用路由

1. 安装 vue-router，命令：npm i vue-router

2. 应用插件：Vue.use(VueRouter)

3. 编写 router 配置项：

```js
// 引入VueRouter
import VueRouter from "vue-router";
// 引入路由组件
import About from '../components/About'
import Home from '../components/Home'

// 创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})
// 暴露router
expot default router
```

4. 实现切换（active-class 可配置高亮样式）
5. 指定展示位置

```html
<router-view></router-view>
```

:::tip 提示

1. 路由组件通常存放在 pages 文件夹，一般组件通常存放在 components 文件夹。
2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
3. 每个组件都有自己的$route 属性，里面存储着自己的路由信息。
4. 整个应用中只有一个 router，可以通过组件的$router 属性获取到。

:::

## 嵌套路由

1. 配置路由规则，使用 children 配置项：

```js
routes: [
  {
    path: '/about',
    component: About
  },
  {
    path: '/home',
    component: Home,
    children: [
      //通过children配置子级路由
      {
        path: 'news', //此处一定不要写‘/news’
        component: News
      },
      {
        path: 'message', //此处一定不要写‘/message’
        component: Message
      }
    ]
  }
]
```

2. 跳转（要写完整路径）

```js
<router-link to="/home/news">News</router-link>
```

## query 参数

跳转的时候传递参数

```html
<!-- 跳转路由并携带query参数，to的字符串写法 -->
<router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`"
  >{{m.title}}</router-link
>

<!-- 跳转路由并携带query参数，to的对象写法 -->
<router-link
  :to="{
    path:'/home/message/detail',
    query:{
        id:m.id,
        title:m.title
    }
}"
>
  {{m.title}}
</router-link>
```

用$route.query 接收参数

## 命名路由

1. 作用：可以简化路由的跳转。

- 给路由命名：

```js
{
  name:'hello',
  path:'detail',
  component:Detail,
}
```

- 简化跳转：

```html
<router-link
  :to="{
    name:'detail',
    query:{
        id:m.id,
        title:m.title
    }
}"
>
  {{m.title}}
</router-link>
```

## params 参数

1. 配置路由，声明接收 params 参数

```js
{
  path: 'message',
  component: Message,
  children: [
    {
      name:'detail',
      path: 'detail/:id/:title',
      component:Detail
    }
  ]
}
```

2. 传递参数

```html
<!-- 跳转路由并携带params参数，to的字符串写法 -->
<router-link :to="`/home/message/detail/666/你好`">{{m.title}}</router-link>

<!-- 跳转路由并携带params参数，to的对象写法 -->
<router-link
  :to="{
    name:'xiangqing',
    params:{
        id:666,
        title:'你好'
    }
}"
>
  {{m.title}}
</router-link>
```

:::tip 提示
路由携带 params 参数时，若使用 to 的对象写法，则不能使用 path 配置项，必须使用 name 配置！
:::

## 路由的 props 配置

```js
{
  name:'xiangqing',
  path:'detail',
  component:Detail,
  // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
  // props:{a:1,b:'hello'}

  // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
  // props:true

  // props的第三种写法，值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
  props({$route}){
    return {
      id:$route.query.id,
      title:$route.query.title
    }
  }
}
```

## `<router-link>`的`replace`属性

1. 作用：控制路由跳转时操作浏览器历史记录的模式

2. 浏览器的历史记录有两种写入方式，分别为 `push` 和 `replace`，`push` 是追加历史记录，`replace` 是替换当前记录。路由跳转时候默认为 `push`。

3. 开启 replace 模式

```html
<router-link replace>News</router-link>
```

## 编程式路由导航

不借助 router-link 实现路由跳转，让路由跳转更加灵活

```js
//$routere的两个API
this.$router.push({
  name: 'detail',
  params: {
    id: xxx,
    title: xxx
  }
})

this.$router.replace({
  name: 'detail',
  params: {
    id: xxx,
    title: xxx
  }
})

this.$router.forward() //前进
this.$router.back() //后退
this.$router.go(3) //可前进也可后退
```

## 缓存路由组件

让不展示的路由组件保持挂载，不被销毁。

include 使用组件名

```html
<!-- 缓存多个路由组件 -->
<keep-alive :include="['News','Message']">
  <router-view></router-view>
</keep-alive>

<!-- 缓存一个路由组件 -->
<keep-alive include="News">
  <router-view></router-view>
</keep-alive>
```

## 路由的生命周期钩子

用于捕获路由组件的激活状态

1. activated 路由组件被激活时触发。
2. deactivated 路由组件失活时触发。

## 路由守卫

对路由进行权限控制

### 全局路由守卫

```js
// 全局前置路由守卫——初始化时执行、每次路由切换前被调用
router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    //判断当前路由是否需要进行权限控制
    if (localStorage.getItem('test') === 'hello') {
      //权限控制的具体规则
      next() //放行
    } else {
      alert('暂无权限查看')
    }
  } else {
    next() //放行
  }
})

// 全局后置路由守卫——初始化时执行、每次路由切换之后被调用
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title //修改网页的title
  } else {
    document.title = 'vue_test'
  }
})
```

### 独享路由守卫

为每一个路由单独配置

```js
beforeEnter: (to, from, next) => {
  if (to.meta.isAuth) {
    //判断当前路由是否需要进行权限控制
    if (localStorage.getItem('test') === 'hello') {
      next()
    } else {
      alert('没有查看权限！')
    }
  } else {
    next()
  }
}
```

### 组件内路由守卫

```js
// 进入守卫：通过路由规则，进入该组件时被调用
beforeRouteEnter (to, from, next){
},
// 离开守卫：通过路由规则，离开该组件时被调用
beforeRouteLeave (to, from, next){
},
```

## hash history

hash 值不会发送给服务器

默认开启 hash 模式

1. hash 模式：

- 地址中永远带着#号，不美观。
- 若以后将地址通过第三方手机 app 分享，若 app 校验严格，则地址会被标记为不合法。
- 兼容性较好。

2. history 模式：

- 地址干净，美观。
- 兼容性和 hash 模式相比略差。
- 应用部署上线时需要后端人员支持，解决刷新页面服务端 404 的问题。
