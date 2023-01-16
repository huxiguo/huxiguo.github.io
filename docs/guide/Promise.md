---
lang: zh-CN
title: Promise
---

# Promise

## Promise 状态

实例对象中的属性 `[PromiseState]`

- pending
- resolved
- rejected

状态改变只有 `pending => resolved` `padding => rejected`只能改变一次

## Promise 对象的值

实例对象中的属性 `[PromiseResult]`

保存对象成功或者失败的结果

- `resolve()`
- `reject()`
