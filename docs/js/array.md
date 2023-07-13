---
lang: zh-CN
title: 数组应用
description: Array
---

# 数组应用

## 生成数组

当你需要要生成一个 0-99 的数组

`Array.form(arrayLike, (element, index) => { }, thisArg)`

`Array.map((element, index, array) => { }, thisArg)`

```js
const createArr = (length) =>
  Array.from(new Array(length), (element, index) => index);

const createArr2 = (length) =>
  new Array(length).fill(0).map((element, index, array) => index);
```

生成二维数组

```js
const createArr = (row, col) =>
  new Array(row).fill(1).map(() =>
     new Array(col).fill(1);
  );
```

## 打乱数组

`Array.sort((a,b)=>{})`
`Math.random()`

```js
const randomSort = (list) => list.sort(() => Math.random() - 0.5);
randomSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); // 随机排列结果
```

## 数组去重

```js
const removeDuplicates = (array) => [...new Set(array)];
```

## 数组取交集

`Array.filter()`

```js
const intersection = (a, ...arr) =>
  [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));

intersection([1, 2, 3, 4], [2, 3, 4, 7, 8], [1, 3, 4, 9]);
```

## 查找最大索引

`Array.reduce((prev,curr,index,arr)=>{},initialValue)`

初次调用时不指定 initialValue 会使用数组的第一个值作为 prev,指定了会使用 initialValue

```js
const indexOfMax = (arr) =>
  arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);
indexOfMax([1, 3, 9, 7, 5]); // 2
```

## 查找最小索引

```js
const indexOfMax = (arr) =>
  arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0);
indexOfMax([1, 3, 9, 7, 5]); // 0
```

## 找到最接近的数值

`Math.abs`

返回绝对值

```js
const closest = (arr, n) =>
  arr.reduce((prev, curr) =>
    Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev
  );
closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50); // 33
```

## 压缩多个数组

```js
const zip = (...arr) =>
  Array.from({ length: Math.max(...arr.map((a) => a.length)) }, (_, i) =>
    arr.map((a) => a[i])
  );
zip([1, 2, 3, 4], ["a", "b", "c", "d"], ["A", "B", "C", "D"]);
// [[1, 'a', 'A'], [2, 'b', 'B'], [3, 'c', 'C'], [4, 'd', 'D']]
```
