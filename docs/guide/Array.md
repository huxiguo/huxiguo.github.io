---
lang: zh-CN
title: 数组
---

# 数组

## 创建数组

### 字面量创建

```js
const array = [1, 2, 3, 4, 5, 6]
```

### Array 构造方法

```js
// 无参 ，创建长度为0
const array1 = new Array()

// 传入一个数值参数，创建长度为3
const array2 = new Array(3)

// 传入参数大于1，或者传入非数值参数
const array3 = new Array(1, 2, 3, 4) // [1,2,3,4]

const array4 = new Array('12') // ['12']
```

### `Array.of()`

创建一个包含所有传入参数的数组，不管参数数量与类型

```js
let arr = Array.of(1, 2)
console.log(arr.length) // 2

let arr1 = Array.of(3)
console.log(arr1.length) // 1
console.log(arr1[0]) // 3

let arr2 = Array.of('2')
console.log(arr2.length) // 1
console.log(arr2[0]) // '2'
```

### `Array.from()`

将可迭代对象或者类数组对象作为第一个参数传入,`Array.from()`就能返回一个数组。

```js
Array.from('foo') // [ "f", "o", "o" ]

const set = new Set(['foo', 'bar', 'baz', 'foo'])
Array.from(set) // [ "foo", "bar", "baz" ]
```

## 数组方法

### `concat`

用于连接数组，不改变原数组，返回连接后的数组,可以传入具体值，任意多个

```js
const array1 = [22, 3, 31, 12]
const array2 = [19, 33, 20]
const newArray = array1.concat(10, array2, 9)
console.log(array1) // [22, 3, 31, 12]
console.log(newArray) // [22, 3, 31, 12, 10, 19, 33, 20, 9]
```

### `copyWithin`

从数组的指定位置拷贝元素到数组的另一位置，会改变原数组

```js
let arr = [1, 2, 3, 'arr', 5, 9, 17]

// 参数一：开始粘贴的索引位置
// 参数二：开始复制的索引位置
// 参数三：结束粘贴的索引位置，从开始粘贴的位置为0，不包含本身
arr.copyWithin(3, 0, 3)
console.log(arr) //[1,2,3,1,2,3,17]
```

### `every`

判断每一项是否都满足条件，都满足才返回 true

:::tip 备注
若收到一个空数组，此方法在任何情况下都会返回 true
:::

```js
const array1 = [22, 3, 31, 12]
const isRight1 = array1.every((element, index, array) => {
  return element > 1
})

const isRight2 = array1.every((element, index, array) => {
  return element > 10
})
console.log(isRight1) // true
console.log(isRight2) // false
```

### `some`

测试数组中是不是至少有 1 个元素通过了被提供的函数测试

:::tip 备注
若收到一个空数组，此方法在任何情况下都会返回 false
:::

```js
const array1 = [22, 3, 31, 12]
const someTrue1 = array1.some((element, index, array) => {
  return element == 11
})

const someTrue2 = array1.some((element, index, array) => {
  return element == 31
})

console.log(someTrue1) // false
console.log(someTrue2) // true
```

### `fill`

使用特定值填充数组中的一个或多个元素。当只是用一个参数时，该方法会用该参数的值填充整个数组

```js
let arr = [1, 2, 3, 'cc', 5]
arr.fill(1)
console.log(arr) //[1,1,1,1,1];

// 第一个参数为填充的数据，第二个为起始位置，第三个为结束位置，不包含结束位置
arr.fill(1, 2)
console.log(arr) //[1,2,1,1,1]

arr.fill(0, 1, 3)
console.log(arr) //[1,0,0,1,1];
```

### `filter`

创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。不会改变原数组

```js
const array1 = [22, 3, 31, 12]
const array2 = array1.filter((element, index, array) => {
  if (element > 13) {
    return element
  }
})
console.log(array1) // [22, 3, 31, 12]
console.log(array2) // [22, 31]
```

### `find`

返回数组中满足提供的测试函数的第一个元素的值,没有则返回 undefinded

类似的有`findLast()`返回最后一个符合条件的元素的值，没有则返回 undefinded

```js
const array1 = [5, 12, 8, 130, 44]

const found = array1.find((element, index, array) => {
  if (element > 10) {
    return element
  }
})

console.log(found) // 12
```

### `findIndex`

返回数组中满足提供的测试函数的第一个元素的索引,若没有找到对应元素则返回-1

类似的有`findLastIndex()`返回最后一个符合条件的元素的索引，没有则返回 -1

```js
const array1 = [5, 12, 8, 130, 44]

const found = array1.findIndex((element, index, array) => {
  if (element > 10) {
    return element
  }
})

console.log(found) // 1
```

### `flat`

会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回

```js
const arr1 = [0, 1, 2, [[[3, 4]]], [[[[2, 5, [1]]]]]]

arr2.flat(1) // [0,1,2,[[3, 4]],[[[2, 5, [1]]]]]
arr2.flat(2) // [0,1,2,[3, 4],[[2, 5, [1]]]]
arr2.flat(3) // [0,1,2,3, 4,[2, 5, [1]]]
arr2.flat(4) // [0,1,2,3, 4,2, 5, [1]]
arr2.flat(5) // [0,1,2,3, 4,2, 5, 1]
```

### `forEach`

对数组的每个元素执行一次给定的函数

```js
let sum = 0
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.forEach((element, index, array) => {
  sum += element
})

console.log(sum) // 45
```

### `includes`

判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false

```js
const array1 = [22, 3, 31, 12, 'arr']
const includes = array1.includes(31)
console.log(includes) // true

const includes1 = array1.includes(31, 3) // 从索引3开始查找31是否存在,包含索引所在的位置
console.log(includes1) // false
```

:::tip 注意
includes 使用===运算符来进行值比较,NaN 被认为与自身相等。
:::

### `indexOf`

返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回 -1

```js
const array1 = [22, 3, 31, 12, 'arr']
const index = array1.indexOf(31)
console.log(index) // 2

const index1 = array1.indexOf(31, 3) // 第二个参数表示开始查找的位置
console.log(index1) // -1
```

### `lastIndexOf`

返回一个指定的元素在数组中最后出现的位置，在一个数组中的指定位置从后向前搜索,默认从最后一个向前开始,如果为负值，将其视为从数组末尾向前的偏移,包含开始位，要检索的元素没有出现，则该方法返回 -1

```js
var array = [2, 5, 9, 2]
var index = array.lastIndexOf(2)
// index is 3
index = array.lastIndexOf(7)
// index is -1
index = array.lastIndexOf(2, 3)
// index is 3
index = array.lastIndexOf(2, 2)
// index is 0
index = array.lastIndexOf(2, -2)
// index is 0
index = array.lastIndexOf(2, -1)
// index is 3
```

### `join`

将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符

```js
const array1 = [22, 3, 31, 12, 'arr']
const str = array1.join('~')
console.log(str) // 22~3~31~12~arr

const str1 = array1.join()
console.log(str1) // 22,3,31,12,arr
```

### `map`

创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成，不会改变原数组

```js
const array1 = [22, 3, 31, 12, 'arr', 19, 31, 56, 43]
const array2 = array1.map((element, index, array) => {
  return element + 1
})

console.log(array1) // [22, 3, 31, 12, "arr", 19, 31, 56, 43]
console.log(array2) // [23, 4, 32, 13, "arr1", 20, 32, 57, 44]
```

### `pop`

方法用于删除数组的最后一个元素并返回删除的元素

```js
const array1 = [22, 3, 31, 12, 'arr', 19, 31, 56, 43]
const item = array1.pop()

console.log(item) // 43
console.log(array1) // [22, 3, 31, 12, "arr", 19, 31, 56]
```

### `push`

从数组末尾向数组添加元素，可以添加一个或多个元素

```js
const array1 = [22, 3, 31, 12, 'arr', 19, 31, 56, 43]
array1.push(11, 16, 18)
console.log(array1) // [22, 3, 31, 12, "arr", 19, 31, 56, 43, 11, 16, 18]
```

### `reduce`

接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值

```js
const array1 = [22, 3, 31, 12]
const sum = array1.reduce((total, number) => {
  return total + number
})

console.log(sum) // 68
```

### `reduceRight`

功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加

### `reverse`

方法用于颠倒数组中元素的顺序

```js
const array1 = [22, 3, 31, 12]
array1.reverse()

console.log(array1) // [12, 31, 3, 22]
```

### `shift`

方法用于把数组的第一个元素从其中删除，并返回第一个元素的值

```js
const array1 = [22, 3, 31, 12]
const item = array1.shift()

console.log(item) // 22
console.log(array1) // [3, 31, 12]
```

### `unshift`

将一个或多个元素添加到数组的开头，并返回该数组的新长度

```js
const array1 = [22, 3, 31, 12]
const item = array1.unshift(11)
console.log(item) // 5 新数组的长度
console.log(array1) // [11, 22, 3, 31, 12]
```

### `slice`

返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括 end）。原始数组不会被改变

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2))
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4))
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5))
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2))
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1))
// expected output: Array ["camel", "duck"]

console.log(animals.slice())
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

### `sort`

对数组的元素进行排序

```js
const array1 = [22, 3, 31, 12]
array1.sort((a, b) => a - b) // 升序
array1.sort((a, b) => b - a) // 降序
```

### `splice`

删除元素,并返回删除的元素

```js
const array1 = [22, 3, 31, 12]
const item = array1.splice(1, 2)

console.log(item) // [3, 31]
console.log(array1) // [22, 12]
```

替换指定索引位置的元素

```js
const array1 = [22, 3, 31, 12]
array1.splice(1, 1, 8)

console.log(array1) // [22, 8, 31, 12]
```

向指定索引处添加元素

```js
const array1 = [22, 3, 31, 12]
array1.splice(1, 0, 12, 35)

console.log(array1) // [22, 12, 35, 3, 31, 12]
```

### `toLocaleString` `toString`

将数组转换为字符串

```js
const array1 = [22, 3, 31, 12]
const str = array1.toLocaleString()
const str1 = array1.toString()

console.log(str) // 22,3,31,12
console.log(str1) // 22,3,31,12
```
