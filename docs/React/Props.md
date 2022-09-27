---
lang: zh-CN
title: 通过 Props 传递数据
---

# 通过 Props 传递数据

## 使用 props

```js {7}
const people = {
  name: 'Tom',
  sex: '男',
  age: 18
}

root.render(<People {...people} />)

// People 类
class People extends React.Component {
  render() {
    const { name, age, sex } = this.props
    return (
      <ul>
        <li>姓名:{name}</li>
        <li>性别:{age}</li>
        <li>年龄:{sex}</li>
      </ul>
    )
  }
}
```

:::tip 说明
`...`不能在对象上使用

在 ES6 中 `const obj2={...obj1}` 是复制对象

`<People {...people} />` 这是 react 中规定的
:::

:red_circle: 函数式组件可以通过`props`接受传入的值

## 对 props 进行限制

设置类型和必要性

```js
// 导入 prop-types
import PropTypes from 'prop-types'

/**
 *name:传入的参数
 *string：必须是字符串类型
 *isRequired：必填
 */
static propTypes = {
  name: PropTypes.string.isRequired
}
```

设置默认值

```js
static defaultProps = {
  sex: '男',
  age: 18
}
```
