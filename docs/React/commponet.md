---
lang: zh-CN
title: React 组件
---

# React 组件

## 创建组件

### 使用函数创建组件

:green_circle: 函数组件：使用 JS 函数创建组件

约定：

:red_square: 函数名称必须以大写字母开头

:red_square: 组件必须有返回值，表示组件的结构

使用函数名作为组件标签名

```js
// 创建组件
function Hello() {
  return <div>函数组件</div>
}

// 渲染组件
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Hello />)
```

### 使用类创建组件

约定：

:red_square: 类名称必须以大写字母开头

:red_square: 类组件应该继承`React.Component`父类

:red_square: 类组件必须提供`render()`方法

:red_square: `render()`必须有返回值

```js
class Hello extends React.Component {
  render() {
    return <div>Hello class Component</div>
  }
}
```
