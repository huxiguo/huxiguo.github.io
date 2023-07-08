---
lang: zh-CN
title: 深拷贝与浅拷贝
description: javascript深拷贝与浅拷贝的区别
---

# 深拷贝与浅拷贝的区别

拷贝只进行一层复制，深层次的引用类型还是共享内存地址，原对象和拷贝对象还是会互相影响。

深拷贝就是无限层级拷贝，深拷贝后的原对象不会和拷贝对象互相影响。

## 浅拷贝

实现方式

```js
function shallowClone(obj) {
  const newObj = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
}
```

1. `Object.assign()`

将一个或者多个源对象中所有可枚举的自有属性复制到目标对象，并返回修改后的目标对象。

```js
let obj1 = {
  age: 18,
  nature: ["smart", "good"],
  names: {
    name1: "fx",
    name2: "xka",
  },
};

let obj2 = Object.assign({}, obj1);
console.log(obj2);
obj2.names.name1 = "hhhh";
obj2.nature[0] = "bad";
console.log(obj1);

// obj1
// {
//   age: 18,
//   nature: [ 'bad', 'good' ],
//   names: { name1: 'hhhh', name2: 'xka' }
// }
```

2. 展开运算符

```js
const fxArr = ["One", "Two", "Three", [1, 2, 3]];
const fxArrs = [...fxArr];
fxArrs[1] = "Zero";
fxArrs[3][0] = 4;
console.log(fxArr); // ["One", "Two", "Three",[4, 2, 3]]
console.log(fxArrs); // ["One", "Zero", "Three",[4, 2, 3]]
```

3. `Array.prototype.concat()`

```js
let arr = [
  1,
  3,
  {
    username: "hu",
  },
];
let arr2 = arr.concat();
arr2[0] = 2;
arr2[2].username = "aa";
console.log(arr); // [ 1, 3, { username: 'aa' } ]
```

4. `Array.prototype.slice()`

```js
let arr = [
  1,
  3,
  {
    username: "hu",
  },
];
let arr2 = arr.slice();
arr2[0] = 2;
arr2[2].username = "aaa";
console.log(arr); // [1, 3, { username: 'aaa' }]
```

## 深拷贝

深拷贝开辟一个新的栈，两个对象属完成相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性

1. `JSON.stringify()`

会忽略`undefined`、`symbol`和`函数`

```js
const obj = {
  name: "A",
  name1: undefined,
  name3: function () {},
  name4: Symbol("A"),
  name5: /a/,
};
const obj2 = JSON.parse(JSON.stringify(obj));

console.log(obj2); // { name: 'A', name5: {} }
```
