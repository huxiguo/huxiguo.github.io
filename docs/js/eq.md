---
lang: zh-CN
title: ===与==的区别
description: javascript等号区别
---

# `===` 与 `==`的区别

## 等号运算符

比较之前会进行类型转换

比较规则：

1. 如果任意操作数为布尔，转换为数值

```js
console.log(true == 1); // true
console.log(true == 0); // false
console.log(false == 0); // true
```

2. 操作数为字符串和数字，转换为数值

```js
console.log("1" == 1);
```

3. 如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf() 方法取得其原始值，再根据前面的规则进行比较

```js
const obj = {
  valueOf: () => 1,
};

console.log("obj", obj == true); // true
console.log("obj", obj == "1"); // true
```

4. 如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true

```js
const obj1 = { a: xxx };
const obj2 = { a: xxx };
console.log(obj1 == obj2); // false

const obj3 = { a: 1 };
const obj4 = obj3;
console.log(obj3 == obj4); // true
```

5. null 和 undefined 相等 v

```js
console.log(null == undefined); // true
```

6. 如果有任一操作数是 NaN ，则相等操作符返回 false

```js
console.log(NaN == 1); // false
```

## 全等运算符

操作数的类型和数值必须完全相等才返回 true

```js
let result1 = "55" === 55; // false，不相等，因为数据类型不同
let result2 = 55 === 55; // true，相等，因为数据类型相同值也相同
```

null 和 undefined 与自身相等 ，NaN 与自身不相等

```js
let result1 = null === null; //true
let result2 = undefined === undefined; //true
let result3 = NaN === NaN; // false
```

## 比较

`==`会进行类型转换，`===`不会进行类型转换

```js
let result1 = null == undefined; // true
let result1 = null === undefined; // false
let result3 = NaN == NaN; // false
let result4 = NaN === NaN; // false
```

在比较`null`的情况的时候，我们一般使用相等操作符`==`

```js
const obj = {};

if (obj.x == null) {
  console.log("1"); //执行
}
```

所以，除了在比较对象属性为`null`或者`undefined`的情况下，我们可以使用相等操作符`（==）`，其他情况建议一律使用全等操作符`（===）`
