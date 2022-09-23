---
lang: zh-CN
title: React 事件处理
---

# React 事件处理

## 事件绑定

:green_circle: 语法：`on+事件名称={事件处理程序}`

```js
// 类组件
class MyClick extends React.Component {
  handleClick() {
    console.log('hello')
  }
  render() {
    return <button onClick={this.handleClick}>click</button>
  }
}

// 函数组件
function MyClick() {
  function handleClick() {
    console.log('hello')
  }

  return (
    return <button onClick={handleClick}>click</button>
  )
}
```

## 事件对象

```js
function MyAlink() {
  function handleClick(e) {
    e.preventDefault()
    console.log('hello')
  }
  return <a onClick={handleClick}>a-link</a>
}
```

:red_square: 通过事件处理函数的参数获取事件对象，兼容所有浏览器
