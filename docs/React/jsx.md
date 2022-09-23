---
lang: zh-CN
title: JSX
---

# JSX

## 为什么使用 JSX

:red_circle: `createElement()`

繁琐，不够简洁

不够直观

## JSX 简介

JSX => javascript XML 在 JavaScript 代码中写 XML

:green_circle: 使用 JSX

```jsx
const title = <h1>Hello React</h1>
```

## :red_square: 注意点

:green_circle: React 元素的属性名使用驼峰命名法

:green_circle: 特殊属性名 `calss->className` `for->htmlFor`

:green_circle: 没有子节点的 React 元素以 `/>`结束

## JSX 使用 JS 表达式

使用`{}`语法

```js
const name = 'tom'
const title = <h1 className="title">Hello {name}</h1>
```

## 条件渲染

根据条件渲染特定的 JSX 结构

EX：loading 效果

```js
/**
 * 条件渲染
 */
const isLoading = false
const loadData = () => {
  if (isLoading) {
    return <div>Loading...</div>
  }
  return <div>加载完成...</div>
}

const title = (
  <h1 className="title">
    条件渲染:
    {loadData()}
  </h1>
)
```

## 列表渲染

渲染一组数据使用`map()` 方法

```js
const songs = [
  { id: 1, name: '111' },
  { id: 2, name: '222' },
  { id: 3, name: '333' }
]

const list = (
  <ul>
    {songs.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
)
```

:::tip 说明
渲染列表时用该添加唯一的 key 属性

`map()` 遍历谁 就给谁加 key
:::

## JSX 样式处理

### 行内样式---style

```js
const h1 = (
  <h1 style={{ color: 'red', backgroundColor: 'skyblue' }}>
    JSX样式处理方法一
  </h1>
)
```

:::tip 说明
`style{ {} }` 外层花括号表示在 JSX 使用表达式 里层表示对象
:::

### 类名---className

```js
// 引入 css 文件
import './css/index.css'

const h1 = <h1 className="title">JSX样式处理方法一</h1>
```
