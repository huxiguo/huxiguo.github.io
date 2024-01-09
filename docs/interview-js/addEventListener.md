# addEventListener

## 语法

```js
addEventListener(type, listener);
addEventListener(type, listener, options);
addEventListener(type, listener, useCapture);
```

## 参数

- type(即事件类型，常见的如click, DomContentLoaded, error等)
- listener listener既可以是function，也可以是一个带有handleEvent方法的object对象
- options
  - capture(指定事件行为是否为捕获事件，默认为false，即冒泡)
  - once（指定事件是否只执行一次，默认为false，当为true时，只执行一次后，事件会自动被移除）
  - passive
  默认为false，当指定为true时，如果事件本身执行了preventDefault方法,用户代理将不会做任何事情，取而代之的是生成一个控制台warning。之后我们会具体介绍
- useCapture