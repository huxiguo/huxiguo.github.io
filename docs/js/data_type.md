---
lang: zh-CN
title: 数据类型
---

# 数据类型

- 基本类型
- 复杂类型

## 基本类型

- `number`
- `string`
- `boolean`
- `null`
- `undefined`
- `symbol`

1. `number`

```js
const num = 10

// 进制表达
const num8 = 017

const num16 = 0x12ee

// 浮点数表达

const floatNum = 0.1
const ENum = 3.1415926E7
const ENum2 = 3.1415926e8

// NaN
console.log(0 / 0)
```

2. `string`

```js
const str = 'hello world'
const firstName = 'hu'
const str2 = `hello ${firstName}`
```

3. `boolean`

```js
console.log(1 == true)
console.log(0 == false)
console.log('' == false)
console.log(null == false)
console.log(undefined == false)
console.log(NaN == false)
```

4. `null`

```js
const n = null
console.log(typeof n)
```

5. `undefined`

```js
let u
console.log(typeof u)
```

6. `symbol`

```js
const s = Symbol('foo')
console.log(typeof s)
```


## 复杂类型

- `object`
- `function`
- `array`

1. `object`

```js
const obj = {
  name: 'hu',
  sayHi: function () {
    console.log('hi')
  },
  'age':5,
  3: 'three'
}
// 访问属性的方式
obj.name
obj['name']
obj.sayHi()
obj['sayHi']()
obj.age
obj['age']
obj[3]
obj['3']
```

2. `function`

```js
// 函数声明
function add (a, b) {
  return a + b
}

// 函数表达式
const add2 = function (a, b) {
  return a + b
}

// 箭头函数 
const add3 = (a, b) => {
  return a + b
}
```

3. `array`

```js
const arr = [1, [2],{name: 'hu'}]
```

## 存储的区别

- 基本类型存储的是值，基本数据类型存储在栈中
- 复杂类型存储的是地址，复杂数据类型存储在堆中

1. 基本类型

```js
let a = 1
let b = a
a = 2
console.log(b) // 1
```
2. 复杂类型
是对地址的引用，修改其中一个，另一个也会改变

```js
let a = {name: 'hu'}
let b = a
a.name = 'huhu'
console.log(b.name) // huhu
```
