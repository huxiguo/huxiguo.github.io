# UDP

## UDP 概述

UDP 是一个无连接的协议，它不需要建立连接就可以直接进行数据传输，因此它在传输数据时是不可靠的。

## UDP 特点

- UDP 是无连接的，即发送数据之前不需要建立连接，减少了开销和发送数据之前的时延。
- UDP 使用尽最大努力交付，即不保证可靠交付，因此主机不需要维持复杂的链接状态表。
- UDP 是面向报文的，发送方的 UDP 对应用程序交下来的报文，在添加首部后就向下交付 IP 层。既不合并，也不拆分，保留这些报文的边界。
- UDP 没有拥塞控制，网络出现的拥塞不会使源主机的发送速率降低，因此要靠上层应用来控制发送的速率。
- UDP 支持一对一、一对多、多对一和多对多的交互通信。
- UDP 的首部开销小，只有 8 个字节，比 TCP 的 20 个字节的首部要短。

## UDP 和 TCP 的区别

- TCP 是面向连接的，UDP 是无连接的。
- TCP 提供可靠交付，UDP 不保证。
- TCP 面向字节流，UDP 面向报文。
- TCP 有流量控制，UDP 没有。
- TCP 有拥塞控制，UDP 没有。
- TCP 只能一对一，UDP 支持一对一、一对多、多对一和多对多。
- TCP 首部开销 20 字节，UDP 首部开销 8 字节。

## UDP 通信方式

- 单播：一对一通信
- 组播：一对多通信
- 广播：一对所有通信

## UDP 单播

```js
// server.js
const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('listening', () => {
  const address = server.address();
  console.log(`UDP server listening ${address.address}:${address.port}`);
})

server.on('message', (message, remote) => {
  console.log(`server:${remote.address}:${remote.port} - ${message}`);

  server.send('hello client', remote.port, remote.address)
})

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.bind(3000)
```

```js
// client.js
const dgram = require('dgram');

const client = dgram.createSocket('udp4');

client.send('Hello World!', 3000, 'localhost');

client.on('listening', () => {
  const address = client.address();
  console.log(`UDP client listening ${address.address}:${address.port}`);
});

client.on('message', (message, remote) => {
  console.log(`clent:${remote.address}:${remote.port} - ${message}`);
});

client.on('error', (err) => {
  console.log(`client error:\n${err.stack}`);
  client.close();
});

```