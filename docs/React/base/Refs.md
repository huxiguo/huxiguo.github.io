---
lang: zh-CN
title: refs
---

# Refs

## 字符串形式

:::warning 注意
不建议使用 `this.refs.textInput` 来访问 DOM 节点

因为 string 类型的 refs 存在一些问题

它已过时并可能会在未来的版本被移除
:::

## 回调函数形式

```js
class MyInput extends React.Component {
  showData2 = () => {
    alert(this.input2Ref.value)
  }
  render() {
    return (
      <div>
        <input
          ref={(c) => (this.input2Ref = c)}
          onBlur={this.showData2}
          type="text"
          placeholder="失去焦点提示数据"
        ></input>
      </div>
    )
  }
}
```

:::tip 说明
内联形式的回调函数，在更新时或执行两次

一次传入参数 `null`，然后第二次会传入参数`DOM` 元素

因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的

将回调函数定义成 class 绑定的函数可以避免

在大多数情况下两种方法无关紧要
:::

## `createRef()`

`React.createRef()`调用后返回一个容器，可以存储被 ref 标识的结点

```js
  input1Ref = React.createRef()

  render() {
    return (
      <div>
        <input
          ref={this.input1Ref}
          type="text"
          placeholder="点击按钮提示数据"
        ></input>
      </div>
    )
  }
```
