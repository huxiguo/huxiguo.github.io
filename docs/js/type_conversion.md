---
lang: zh-CN
title: 类型转化
description: javascript类型转化
---

# 类型转化

虽然变量的数据类型是不确定的，但是各种运算符对数据类型是有要求的，如果运算子的类型与预期不符合，就会触发类型转换机制

- 显示类型转换 (强制类型转换)
- 隐式类型转换 (自动转换)

## 显示转换

1. `Number()`

只要有一个字符无法转换成数字，整个就会转成 NaN

```js
let a = undefined;
let b = "12";
let c = "a123";
let d = { a: 1 };
let e = [2, 1];
let f = ["a", 1];

Number(a); // NaN
Number(b); // 12
Number(c); // NaN
Number(d); // NaN
Number(e); // NaN
Number(f); // NaN
```

2. `paeseInt()`

直到碰到无法转换的才停止

```js
parseInt(a); // NaN
parseInt(b); // 12
parseInt(c); // NaN
parseInt(d); // NaN
parseInt(e); // 2
parseInt(f); // NaN
```

3. `String()`

可以将任意类型的值转化成字符串

```js
String(a); // 'undefined'
String(b); // '12'
String(c); // 'a123'
String(d); // [Object, Object]
String(e); // 2,1
String(f); // a,1
```

4. `Boolean()`

```js
Boolean(new Boolean(false)); // true
Boolean(""); // false
Boolean({}); // true
```

## 隐式转换

隐式转换发生的场景`

在操作符两边值的类型不同时，进行以下运算会发生类型转换

- 布尔运算
- 算术运算

1. 转换成布尔类型

```js
if (!"") {
  console.log("111");
}
if (!0) {
  console.log("111");
}
if (!undefined) {
  console.log("111");
}
if (!null) {
  console.log("111");
}
if (!NaN) {
  console.log("222");
}
if ({}) {
  console.log("333");
}
```

2. 转换成字符串

规则：先将复合类型的值转为原始类型的值，再将原始类型的值转为字符串

常见 字符串 和 `+`

```js
console.log("h" + a); // 'hundefined'
console.log("h" + b); // 'h12'
console.log("h" + c); // 'ha123'
console.log("h" + d); // 'h[Object, Object]'
console.log("h" + e); // 'h2,1'
console.log("h" + f); // 'ha,1'
```

3. 转换成数字

```js
"5" - "2"; // 3
"5" * "2"; // 10
true - 1; // 0
false - 1; // -1
"1" - 1; // 0
"5" * []; // 0
false / "5"; // 0
"abc" - 1; // NaN
null + 1; // null -> 0  1
undefined + 1; // NaN
```
