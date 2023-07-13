# Vue2 双向数据绑定

`Vue`是通过数据劫持的方式来实现数据双向数据绑定的，其中最核心的方法便是通过`Object.defineProperty()`来实现对属性的劫持，该方法允许精确地添加或修改对象的属性，对数据添加属性描述符中的`getter`与`setter`实现劫持。

## 描述

运行一个`Vue`实例并将`data`打印，可以看到对象中对于`msg`有了`get`与`set`，通过他们就可以实现数据的劫持，从而进行数据的更新，在`Vue`中`get`与`set`是通过`ES5`的`Object.defineProperty()`方法定义的。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div id="app">{{msg}}</div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
    <script>
      const vm = new Vue({
        el: "#app",
        data() {
          return {
            msg: "hello world",
          };
        },
        created() {
          console.log(this.$data); // {__ob__: Observer}
        },
      });
    </script>
  </body>
</html>
```

```js
/*
{__ob__: Observer}
    msg: "hello world"
    __ob__: Observer {value: {…}, shallow: false, mock: false, dep: Dep, vmCount: 1}
    get msg: ƒ reactiveGetter()
    set msg: ƒ reactiveSetter(newVal)
    __proto__: Object
 */
```

## 分析与实现

`Vue`的双向数据绑定，简单点来说分为以下三个部分：

- `Observer`: 这里的主要工作是递归地监听对象上的所有属性，在属性值改变的时候，触发相应的`Watcher`。
- `Watcher`: 观察者，当监听的数据值修改时，执行响应的回调函数，在`Vue`里面的更新模板内容。
- `Dep`: 链接`Observer`和`Watcher`的桥梁，每一个`Observer`对应一个`Dep`，它内部维护一个数组，保存与该`Observer`相关的`Watcher`。

首先实现`Dep`方法，这是链接`Observer`和`Watcher`的桥梁，简单来说，就是一个监听者模式的事件总线，负责接收`watcher`并保存。其中`subscribers`数组用以保存将要触发的事件，`addSub`方法用以添加事件，`notify`方法用以触发事件。

```javascript
function __dep() {
  this.subscribers = [];
  this.addSub = function (watcher) {
    if (__dep.target && !this.subscribers.includes(__dep.target))
      this.subscribers.push(watcher);
  };
  this.notifyAll = function () {
    this.subscribers.forEach((watcher) => watcher.update());
  };
}
```

`Observer`方法就是将数据进行劫持，使用`Object.defineProperty`对属性进行重定义，注意一个属性描述符只能是数据描述符和存取描述符这两者其中之一，不能同时是两者，所以在这个小`Demo`中使用`getter`与`setter`操作的的是定义的`value`局部变量，主要是利用了`let`的块级作用域定义`value`局部变量并利用闭包的原理实现了`getter`与`setter`操作`value`，对于每个数据绑定时都有一个自己的`dep`实例，利用这个总线来保存关于这个属性的`Watcher`，并在`set`更新数据的时候触发。

```javascript
function __observe(obj) {
  for (let item in obj) {
    let dep = new __dep();
    let value = obj[item];
    if (Object.prototype.toString.call(value) === "[object Object]")
      __observe(value);
    Object.defineProperty(obj, item, {
      configurable: true,
      enumerable: true,
      get: function reactiveGetter() {
        if (__dep.target) dep.addSub(__dep.target);
        return value;
      },
      set: function reactiveSetter(newVal) {
        if (value === newVal) return value;
        value = newVal;
        dep.notifyAll();
      },
    });
  }
  return obj;
}
```

`Watcher`方法传入一个回调函数，用以执行数据变更后的操作，一般是用来进行模板的渲染，`update`方法就是在数据变更后执行的方法，`activeRun`是首次进行绑定时执行的操作，关于这个操作中的`__dep.target`，他的主要目的是将执行回调函数相关的数据进行`sub`，例如在回调函数中用到了`msg`，那么在执行这个`activeRun`的时候`__dep.target`就会指向`this`，然后执行`fn()`的时候会取得`msg`，此时就会触发`msg`的`get()`，而`get`中会判断这个`__dep.target`是不是空，此时这个`__dep.target`不为空，上文提到了每个属性都会有一个自己的`dep`实例，此时这个`__dep.target`便加入自身实例的`subscribers`，在执行完之后，便将`__dep.target`设置为`null`，重复这个过程将所有的相关属性与`watcher`进行了绑定，在相关属性进行`set`时，就会触发各个`watcher`的`update`然后执行渲染等操作。

```javascript
function __watcher(fn) {
  this.update = function () {
    fn();
  };

  this.activeRun = function () {
    __dep.target = this;
    fn();
    __dep.target = null;
  };
  this.activeRun();
}
```
