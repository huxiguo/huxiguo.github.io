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

## 非受控组件

输入类 DOM

数据现用现取

## 受控组件

输入类的 DOM

将数据维护到`state`中

使用时从`state`中取出

```js
class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = this.state
    alert(`用户名：${username}，密码：${password}`)
  }
  saveUsername = (e) => {
    this.setState({ username: e.target.value })
  }
  savePassword = (e) => {
    this.setState({ password: e.target.value })
  }
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        用户名：
        <input onChange={this.saveUsername} type="text" name="username"></input>
        密码：
        <input
          onChange={this.savePassword}
          type="password"
          pwd="password"
        ></input>
        <button>ok</button>
      </form>
    )
  }
}
```

高阶函数形式

```js
class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = this.state
    alert(`用户名：${username}，密码：${password}`)
  }
  // 保存表单数据到状态中
  saveFormData = (dataType) => {
    return (e) => {
      this.setState({ [dataType]: e.target.value })
    }
  }
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        用户名：
        <input
          onChange={this.saveFormData('username')}
          type="text"
          name="username"
        ></input>
        密码：
        <input
          onChange={this.saveFormData('password')}
          type="password"
          pwd="password"
        ></input>
        <button>ok</button>
      </form>
    )
  }
}
```
