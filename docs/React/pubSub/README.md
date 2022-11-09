---
lang: zh-CN
title: 消息订阅与发布
---

# 消息订阅与发布

## 安装

```shell
npm i pubsub-js
```

## 使用

```js
import PubSub from 'pubsub-js'
```

## example

```js
// 数据处理函数
var mySubscriber = function (msg, data) {
  console.log(msg, data)
}

// 接收数据
var token = PubSub.subscribe('MY TOPIC', mySubscriber)

// 发送数据
PubSub.publish('MY TOPIC', 'hello world!')

// 异步
PubSub.publishSync('MY TOPIC', 'hello world!')

// 取消订阅
PubSub.unsubscribe(token)
```
