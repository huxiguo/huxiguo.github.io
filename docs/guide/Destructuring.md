---
lang: zh-CN
title: 解构赋值
---

# 解构赋值

## 数组解构赋值

```js
let a = 1
let b = 2
let c = 3

// es6 语法
let [a1, b1, c1] = [1, 2, 3]
```

从数组中提取值，按照对应位置，对变量赋值

如果解构不成功，变量值等于`undefined`

如果是不完全解构

```js
let [a, [b], c] = [1, [2, 3], 4]

console.log(a) // 1
console.log(b) // 2
console.log(c) // 4
```

只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值
