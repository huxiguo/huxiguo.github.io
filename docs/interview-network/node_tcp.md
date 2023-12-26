# node tcp服务

TCP（Transmission Control Protocol传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议。

应用层向TCP层发送用8位字节表示的数据流，TCP把数据流分区成适当的消息段。之后TCP把结果包传送给IP层，继续向后传输。

TCP为了保证不发生丢包，就给每一个包一个序号，同时序号也保证了传送到接收端的包的按序接收。接收端对已成功接收到的包发回一个相应的确认（ACK）；如果发送端在合理的往返时延（RTT）内未收到确认，那么对应的数据包就被假设为已经丢失将会被重新重传。TCP用一个校验和函数来检验数据是否有误；在发送和接收时都要计算校验和，从而保证了可靠的数据传输。

```js
// server.js
const types = require('./types')
const net = require('net')

const server = net.createServer()

/**
 * @type {Array<net.Socket>}
 */
let users = []

server.on('connection', socket => {

  socket.on('data', data => {
    const msgObj = JSON.parse(data.toString().trim())
    switch (msgObj.type) {
      case types.login:
        // 昵称重复 
        if (users.find(item => item.nickname === msgObj.nickname)) {
          return socket.write(JSON.stringify({
            type: types.login,
            success: false,
            msg: '昵称重复'
          }))
        }
        // 登录成功
        socket.nickname = msgObj.nickname
        users.push(socket)
        socket.write(JSON.stringify({
          type: types.login,
          success: true,
          msg: '登录成功',
          nickname: msgObj.nickname,
          sumUser: users.length
        }))
        // 广播上线通知
        users.forEach(user => {
          if (user !== socket) {
            const logMsg = {
              type: types.log,
              message: `${msgObj.nickname}进入聊天室，当前在线用户${users.length}`
            }
            user.write(JSON.stringify(logMsg))
          }
        })
        break;
      case types.broadcast:
        const broadcastMsg = {
          type: types.broadcast,
          message: msgObj.message,
          nickname: socket.nickname
        }
        users.forEach(item => {
          item.write(JSON.stringify(broadcastMsg))
        })
        break;

      case types.p2p:
        const user = users.find(item => item.nickname == msgObj.nickname)
        if (!user) {
          const p2pMsg = {
            type: types.p2p,
            success: false,
            message: '用户不存在'
          }
          return socket.write(JSON.stringify(p2pMsg))
        }
        const p2pMsg = {
          type: types.p2p,
          success: true,
          message: msgObj.message,
          nickname: socket.nickname
        }
        user.write(JSON.stringify(p2pMsg))
        break;

      default:
        break;
    }
  })

  socket.on('end', () => {
    const userIndex = users.findIndex(item => item.nickname === socket.nickname)
    if (userIndex !== -1) {
      const offLineUser = users[userIndex]
      users.splice(userIndex, 1)
      // 广播离开
      users.forEach(user => {
        const logMsg = {
          type: types.log,
          message: `${offLineUser.nickname}离开聊天室，当前在线用户${users.length}`
        }
        user.write(JSON.stringify(logMsg))
      })
    }
  })
})

server.listen(3000, () => {
  console.log('server is listening...')
})
```

```js
// client.js
const types = require('./types')
const net = require('net')

// 登录名
let nickname = null

const client = net.createConnection({
  port: 3000,
  host: 'localhost'
})

client.on('connect', () => {
  console.log('连接成功')
  process.stdout.write('请输入昵称：')
  process.stdin.on('data', data => {
    data = data.toString().trim()
    if (!nickname) {
      nickname = data
      const msgObj = {
        type: types.login,
        nickname: data
      }
      return client.write(JSON.stringify(msgObj))
    }

    const matches = /^@(\w+)\s(.+)$/.exec(data)
    // 符合@xxx xxx 私发
    if (matches) {
      // p2p 
      const p2pMsg = {
        type: types.p2p,
        nickname: matches[1],
        message: matches[2]
      }
      return client.write(JSON.stringify(p2pMsg))
    }
    // 群聊
    const broadcastMsg = {
      type: types.broadcast,
      message: data
    }
    client.write(
      JSON.stringify(broadcastMsg)
    )
  })
})

client.on('data', data => {
  data = JSON.parse(data.toString().trim())
  switch (data.type) {
    case types.login:
      if (data.success) {
        console.log(`${data.msg},当前在线人数：${data.sumUser}`)
        nickname = data.nickname
      } else {
        console.log(`登陆失败${data.msg}`)
        nickname = null
        process.stdout.write('请输入昵称：')
      }
      break;

    case types.broadcast:
      console.log(`${data.nickname}:${data.message}`)
      break;

    case types.p2p:
      if (!data.success) {
        // 失败
        return console.log(`发送失败:${data.message}`)
      }
      console.log(`${data.nickname}对你说${data.message}`)
      break;

    case types.log:
      console.log(data.message)
      break;
    default:
      console.log('未知消息类型')
      break;
  }
})
```
