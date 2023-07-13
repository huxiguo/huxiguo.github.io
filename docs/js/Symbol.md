---
lang: zh-CN
title: Symbol
---

# Symbol

`Symbol`是 ES6 新引入的原始数据类型

`Symbol`实例是唯一，不可变的

## 基本用法

```js
let s = Symbol()

console.log(typeof s) // symbol
```

:::warning 注意
`Symbol()`函数前不能使用`new`命令，否则会报错

`Symbol`是一个原始类型的值,不是对象,所以不能使用`new`命令来调用

`Symbol`值不是对象，所以也不能添加属性
:::

调用`Symbol()`函数时可以传入一个字符串参数作为描述(description)

主要是为了在控制台显示，或者转为字符串时，比较容易区分。

```js
let genericSymbol = Symbol()
let otherGenericSymbol = Symbol()

let fooSymbol = Symbol('foo')
let otherFooSymbol = Symbol('foo')

console.log(genericSymbol === otherFooSymbol) // false
console.log(fooSymbol === otherFooSymbol) // false
```

:::tip 说明
`Symbol()`参数只作为描述

相同参数的返回值不相等
:::

如果`Symbol`的参数是一个对象，就会调用该对象的`toString()`方法，将其转为字符串，然后才生成一个`Symbol`值

```js
const obj = {
  toString() {
    return 'hello'
  }
}
let sym = Symbol(obj)
console.log(sym) // Symbol(hello)
```

ES2019 提供了实例属性`description`直接返回`Symbol`值的描述

```js
let fooSymbol = Symbol('foo')

console.log(fooSymbol.description) // foo
```

## 作为属性名的`Symbol`

`Symbol`用于对象的属性名，就能保证不会出现同名的属性

```js
let mySymbol = Symbol()

let a = {}
a[mySymbol] = 'hello!'

let b = {
  [mySymbol]: 'hello!'
}

let c = {}
Object.defineProperty(c, mySymbol, { value: 'hello!' })

console.log(a[mySymbol]) // hello!
console.log(b[mySymbol]) // hello!
console.log(c[mySymbol]) // hello!
```

:::warning 注意
`Symbol`作为对象属性名不能用点运算符

使用`Symbol`值定义属性时，`Symbol`值必须放在方括号之中
:::

## 实例：消除魔术字符串

魔术字符串：在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值

```js
function getArea(shape, options) {
  let area = 0
  switch (shape) {
    case 'Triangle': // 魔术字符串
      area = 0.5 * options.width * options.height
      break

    default:
      break
  }
  return area
}
getArea('Triangle', { width: 100, height: 100 }) // 魔术字符串
```

消除方法：将`Triangle`设为变量

```js
const shapeType = {
  triangle: Symbol('triangle')
}
function getArea(shape, options) {
  let area = 0
  switch (shape) {
    case shapeType.triangle:
      area = 0.5 * options.width * options.height
      break

    default:
      break
  }
  return area
}
getArea(shapeType.triangle, { width: 100, height: 100 })
```

## 属性名遍历

`Symbol`作为对象属性属性时用`Object.getOwnPropertySymbols()`方法，获取对象中所有`Symbol`属性名，返回一个数组

`Object.getOwnPropertyNames()`返回常规属性的数组

`Object.getOwnPropertyDescriptors(o)`返回同时包含常规和 Symbol 属性的对象

`Reflect.ownKeys()` 方法可以返回所有类型的键名，包括常规键名和 Symbol 键名的数组

```js
let s1 = Symbol('foo')
let s2 = Symbol('bar')

let o = {
  [s1]: 'foo val',
  [s2]: 'bar val',
  baz: 'baz val',
  qux: 'qux val'
}

console.log(Object.getOwnPropertySymbols(o))
// [Symbol(foo), Symbol(bar)]

console.log(Object.getOwnPropertyNames(o))
// ['baz', 'qux']

console.log(Object.getOwnPropertyDescriptors(o))
// {baz: {…}, qux: {…}, Symbol(foo): {…}, Symbol(bar): {…}}

console.log(Reflect.ownKeys(o))
//  ['baz', 'qux', Symbol(foo), Symbol(bar)]
```

## `Symbol.for()`和`Symbol.keyFor()`

`Symbol.for()`接受一个字符串参数，会先搜索有没有以该字符串作为名称的`Symbol`,有就返回这个值，没有就新建一个并注册到全局

```js
let s1 = Symbol.for('foo') // 创建新符号
let s2 = Symbol.for('foo') // 重用已有的符号

console.log(s1 === s2) // true
```

`Symbol.keyFor()`返回一个已登记的 Symbol 类型值的`key`

```js
let s1 = Symbol('foo')
let s2 = Symbol.for('foo')

console.log(Symbol.keyFor(s1)) // undefined
console.log(Symbol.keyFor(s2)) // foo
```
