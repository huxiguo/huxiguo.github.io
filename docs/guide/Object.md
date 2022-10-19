---
lang: zh-CN
title: Object
---

# Object

## Object.defineProperty()

```js
let age = 18
let person = {
  name: 'zs',
  sex: '男'
}
// 通过 Object.defineProperty(object, key, {}) 实现数据的绑定
Object.defineProperty(person, 'age', {
  value: age
})

// 这样添加的age不可枚举不可修改删除

Object.defineProperty(person, 'age', {
  value: age,
  enumerable: true, // 控制属性是否可以枚举
  writable: true, // 控制是否可以修改
  configurable: true // 控制是否可以删除
})

// 通过getter和setter实现响应绑定
Object.defineProperty(person, 'age', {
  // 当有人读取person的age属性时getter 会被调用,返回值就是age的值
  get(){
    return age
  }
  // 当有人修改person的age属性时setter 会被调用,收到的参数就是具体值
  set(value){
    age=value
  }
})
```
