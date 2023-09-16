# JS 遍历数组方式

`for`、`forEach`、`map`、`for in`、`for of`

## `for`

```javascript
let arr = [1, 2, 3, 4, 5];
let len = arr.length;
for (let i = 0; i < n; i++) {
  console.log(arr[i]);
}
```

## `forEach`

`Array.prototype.forEach()`

`arr.forEach(callback(currentValue [, index [, array]])[, thisArg])`

`callback` 为数组中每个元素执行的函数，该函数接收一至三个参数

`currentValue` 数组中正在处理的当前元素。

`index` 可选 数组中正在处理的当前元素的索引。

`array` 可选 正在操作的数组

`thisArg` 可选 当执行回调函数 `callback` 时，用作 this 的值

注意如果使用箭头函数表达式来传入 `callback`，`thisArg` 参数会被忽略，因为箭头函数在词法上绑定了 `this` 值

注意如果想在遍历执行完之前结束遍历，那么 `forEach` 与 `map` 并不是好的选择

```javascript
let obj = { a: 1 };
arr.forEach(function (currentVal, index, array) {
  console.log(`当前值是：${currentVal}`);
  console.log(`当前索引是：${index}`);
  console.log(`当前数组是：${array}`);
  console.log(`当前this是:${this}`);
  console.log("");
}, obj);
/*
  当前值 1
  当前值索引 0
  当前处理数组 (5)[1, 2, 3, 4, 5]
  当前this指向 {a: 1}
  结束一次回调，无需返回值
*/
```

## `map`

`Array.prototype.map()`

`arr.map(callback(currentValue [, index [, array]])[, thisArg])`

`callback` 为数组中每个元素执行的函数，该函数接收一至三个参数。

`currentValue` 数组中正在处理的当前元素。

`index` 可选 数组中正在处理的当前元素的索引。

`array` 可选 正在操作的数组。 `thisArg` 可选 当执行回调函数 `callback` 时，用作 `this` 的值。

注意如果使用箭头函数表达式来传入 `callback`，`thisArg` 参数会被忽略，因为箭头函数在词法上绑定了 `this` 值。

注意 `map` 回调函数 `return` 的结果组成了新数组的每一个元素，原数组被映射成对应新数组。

```javascript
let obj = { a: 1 };
let newArr = arr.map(function (currentVal, index, array) {
  return currentVal * index;
}, obj);
```

## `for...in`

主要用于遍历对象

```javascript
// 此方法遍历数组效率非常低，主要是用来循环遍历对象的属性

// 遍历数组
let arr = [1, 2, 3, 4, 5];
for (let item in arr) {
  console.log(arr[item]);
}
// 1 2 3 4 5
// 数组遍历时需注意，数组索引只是具有整数名称的枚举属性，并且与通用对象属性相同
// 不能保证for ... in将以任何特定的顺序返回索引
// for ... in循环语句将返回所有可枚举属性，包括非整数类型的名称和继承的那些
// 因为迭代的顺序是依赖于执行环境的，所以数组遍历不一定按次序访问元素
// 因此当迭代访问顺序很重要的数组时，最好用整数索引去进行for循环

// 遍历对象
let obj = { a: 1, b: 2 };
for (let item in obj) {
  console.log(obj[item]);
}
// 1 2
// for ... in是为遍历对象属性而构建的
```

## `for...of`

```javascript
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
  console.log(value);
}
// 1 2 3 4 5
```

## operate

`Array.prototype` 还提供了对于数组的判断与过滤操作，`every()`、`some()`、`find()`、`findIndex()`、`filter()。

```js
var arr = [1, 2, 3, 4, 5];

// arr.every(callback(currentValue [, index [, array]])[, thisArg])
// every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值
console.log(
  arr.every((currentValue) => {
    return currentValue > 1;
  })
); // false

console.log(
  arr.every((currentValue) => {
    return currentValue > 0;
  })
); // true

// arr.some(callback(element[, index[, array]])[, thisArg])
// some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值
console.log(
  arr.some((currentValue) => {
    return currentValue > 1;
  })
); // true

console.log(
  arr.some((currentValue) => {
    return currentValue > 6;
  })
); // false

// arr.find(callback(element[, index[, array]])[, thisArg])
// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
console.log(
  arr.find((currentValue) => {
    return currentValue > 2;
  })
); // 3

console.log(
  arr.find((currentValue) => {
    return currentValue > 6;
  })
); // undefined

// arr.findIndex(callback(element[, index[, array]])[, thisArg])
// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引，否则返回-1
console.log(
  arr.findIndex((currentValue) => {
    return currentValue > 2;
  })
); // 2

console.log(
  arr.findIndex((currentValue) => {
    return currentValue > 6;
  })
); // -1

// arr.filter(callback(element[, index[, array]])[, thisArg])
// filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
console.log(
  arr.filter((currentValue) => {
    return currentValue > 2;
  })
); // [3, 4, 5]
```
