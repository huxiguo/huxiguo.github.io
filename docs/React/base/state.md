---
lang: zh-CN
title: 状态组件
---

# 有状态组件和无状态组件

:green_circle: 函数组件 -> 无状态组件

:green_circle: 类组件 -> 有状态组件

:green_circle: 状态(state) -> 数据

:green_circle: 函数组件没有状态，只负责数据展示(静)

:green_circle: 类组件有状态，负责更新 UI

## `state`

:green_circle: 组件内部私有的数据

```js
class State1 extends React.Component {
  state = { count: 0 }
  render() {
    return (
      <div>
        <h1>count：{this.state.count}</h1>
      </div>
    )
  }
}
```

## `setState()`

:green_circle: 语法 `this.setState({要修改的数据})`

```js
this.setState({
  count: this.state.count + 1
})
```

## 事件绑定`this`

```js
class State1 extends React.Component {
  state = { count: 0 }
  render() {
    return (
      <div>
        <h1>count：{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1
            })
          }}
        >
          +1
        </button>
      </div>
    )
  }
}
```

把业务逻辑抽离单独函数

```js
class State1 extends React.Component {
  state = { count: 0 }
  onIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <h1>count：{this.state.count}</h1>
        <button onClick={this.onIncrement}>+1</button>
      </div>
    )
  }
}
b
```
