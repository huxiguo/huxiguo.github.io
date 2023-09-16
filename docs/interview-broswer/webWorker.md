# Web Worker

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)

## 单线程的 Javascript

`js` 最初设计是运行在浏览器中的，为了防止多个线程同时操作 `DOM`，带来渲染冲突问题，所以 `js` 执行器被设计成单线程。但随着前端技术的发展，`js` 能力远不止如此，当我们遇到需要大量计算的场景时（比如图像处理、视频解码等），`js` 线程往往会被长时间阻塞，甚至造成页面卡顿，影响用户体验。为了解决单线程带来的这一弊端，`Web Worker` 应运而生。

## `Web Worker` 是什么

`Web Worker` 是 `HTML5` 标准的一部分，这一规范定义了一套 `API`，允许我们在 `js` 主线程之外开辟新的 `Worker` 线程，并将一段 `js` 脚本运行其中，它赋予了开发者利用 `js` 操作多线程的能力。
因为是独立的线程，`Worker` 线程与 `js` 主线程能够同时运行，互不阻塞。所以，在我们有大量运算任务时，可以把运算任务交给 Worker 线程去处理，当 `Worker` 线程计算完成，再把结果返回给 `js` `主线程。这样，js` 主线程只用专注处理业务逻辑，不用耗费过多时间去处理大量复杂计算，从而减少了阻塞时间，也提高了运行效率，页面流畅度和用户体验自然而然也提高了。

## 注意项

（1）同源限制

分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。

（2）DOM 限制

Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用document、window、parent这些对象。但是，Worker 线程可以navigator对象和location对象。

（3）通信联系

Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成。

（4）脚本限制

Worker 线程不能执行alert()方法和confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。

（5）文件限制

Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。

## 使用 `Web Worker`

### 创建`worker`

```js
const worker =new Worker(aURL, options)
```

| 参数                | 说明                                                                                                                                                 |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| path                | 有效的`js`脚本的地址，必须遵守同源策略。无效的`js`地址或者违反同源策略，会抛出``SECURITY_ERR` 类型错误                                               |
| options.type        | 可选，用以指定 `worker` 类型。该值可以是 `classic` 或 `module`。 如未指定，将使用默认值 `classic`                                                    |
| options.credentials | 可选，用以指定 `worker` 凭证。该值可以是 `omit`, `same-origin`，或 `include`。如果未指定，或者 `type` 是 `classic`，将使用默认值 `omit` (不要求凭证) |
| options.name        | 可选，在 `DedicatedWorkerGlobalScope` 的情况下，用来表示 `worker` 的 `scope` 的一个 `DOMString` 值，主要用于调试目的。                               |

### 主线程和worker线程通信

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
