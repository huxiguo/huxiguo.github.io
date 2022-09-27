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

```js
let [foo, [[bar], baz]] = [1, [[2], 3]]
foo // 1
bar // 2
baz // 3

let [, , third] = ['foo', 'bar', 'baz']
third // "baz"

let [x, , y] = [1, 2, 3]
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4]
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a']
x // "a"
y // undefined
z // []
```

## 默认值

解构赋值允许指定默认值

```js
let [foo = true] = []
console.log(foo) // true
```

:red_square: 只有数组成员严格等于`undefined`,默认值才会生效

```js
let [x = 1] = [undefined]
x // 1

let [x = 1] = [null]
x // null
```

## 对象解构赋值

```js
let { foo, bar } = { foo: 'aaa', bar: 'bbb' }
foo // "aaa"
bar // "bbb"
```

:red_square: 变量必须与属性同名，才能取到正确的值,如果解构失败就等于`undefined`

可以在解构是重命名

```js
let { foo: Foo, bar: Bar } = { foo: 'aaa', bar: 'bbb' }
Foo // "aaa"
Bar // "bbb"
```

对象解构的默认值

```js
let { x: y = 3 } = {}
y // 3
```

## 字符串的解构赋值

```js
const [a, b, c, d, e] = 'hello'
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
```

类似数组的对象都有一个`length`属性，因此还可以对这个属性解构赋值

```js
let { length: len } = 'hello'
len // 5
```

## 数值和布尔值的解构

:red_square: 只要等号右边的值不是对象或数组，就先将其转为对象

```js
const { toString: n } = 123

n === Number.prototype.toString // true

let { toString: b } = true
b === Boolean.prototype.toString // true
```

## 函数参数的解构赋值
