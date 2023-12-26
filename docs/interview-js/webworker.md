# web worker

## 是什么

Web Worker 是 HTML5 标准的一部分，这一规范定义了一套 API，允许我们在 js 主线程之外开辟新的 Worker 线程，并将一段 js 脚本运行其中，它赋予了开发者利用 js 操作多线程的能力。
因为是独立的线程，Worker 线程与 js 主线程能够同时运行，互不阻塞。所以，在我们有大量运算任务时，可以把运算任务交给 Worker 线程去处理，当 Worker 线程计算完成，再把结果返回给 js 主线程。这样，js 主线程只用专注处理业务逻辑，不用耗费过多时间去处理大量复杂计算，从而减少了阻塞时间，也提高了运行效率，页面流畅度和用户体验自然而然也提高了。

## 使用 web worker

### 创建 worker

```js
cosnt worker =new Worker(path)
```

### 线程通信

```js
// main.js（主线程）

const myWorker = new Worker('/worker.js'); // 创建worker

myWorker.addEventListener('message', e => { // 接收消息
    console.log(e.data); // Greeting from Worker.js，worker线程发送的消息
});

// 这种写法也可以
// myWorker.onmessage = e => { // 接收消息
//    console.log(e.data);
// };

myWorker.postMessage('Greeting from Main.js'); // 向 worker 线程发送消息，对应 worker 线程中的 e.data
```

```js
// worker.js（worker线程）
self.addEventListener('message', e => { // 接收到消息
    console.log(e.data); // Greeting from Main.js，主线程发送的消息
    self.postMessage('Greeting from Worker.js'); // 向主线程发送消息
});
```

主线程与 worker 线程之间的数据传递是传值而不是传地址。所以你会发现，即使你传递的是一个`Object`，并且被直接传递回来，接收到的也不是原来的那个值了。

### 关闭 worker 线程

```js
// main.js（主线程）
const myWorker = new Worker('/worker.js'); // 创建worker
myWorker.terminate(); // 关闭worker
```

### 在worker 中导入其他模块

```ts
const worker = new Worker(
    new URL("./worker/user.worker.ts", import.meta.url),
    { type: "module" }
  );
```

在创建worker时提供配置选项 `{ type: "module" }`

### 减少数据通信时间

主线程与子线程之间可以相互交换传递信息，那都可以传递哪些信息呢？答案是：可以是各种格式，不仅仅是字符串，也可以是二进制数据。这种交换采用的是复制机制，即一个线程将需要分享的数据复制一份，通过postMessage方法交给另一个线程。如果数据量比较大，这种通信的效率显然比较低。因此就会想到，如果开辟一个空间读写信息，但是只传递这个空间的引用地址，岂不是会很好解决这个问题，所以`SharedArrayBuffer`出现

由于幽灵漏洞，需要设置两个标头来实现你网站的跨源隔离，
`Cross-Origin-Opener-Policy`设置为 same-origin（来保护你的源站点免受攻击）
`Cross-Origin-Embedder-Policy` 设置为 require-corp 或 credentialless（保护受害者免受你的源站点的影响）


## vue 项目中使用worker

```ts {2,4}
const openWorker = () => {
  const worker = new Worker(
    new URL("./worker/user.worker.ts", import.meta.url)
  );
  worker.postMessage("worker start");
  worker.onmessage = (e) => {
    const { data } = e;
    console.log(data);
    setTimeout(() => {
      worker.postMessage("worker over main thend");
      worker.terminate();
    }, 1000);
  };
};
```

```ts
addEventListener("message", (e) => {
  const { data } = e;
  console.log(`worker thend ${data}`);
  setTimeout(() => {
    return postMessage("worker thend ok");
  }, 1000);
});
```
