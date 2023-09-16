# ref 和 reactive 异同

1. `ref` 接受一个内部值，返回一个响应式的、可更改的 `ref` 对象,`reactive` 返回响应式代理对象
2. 从定义上看`ref`通常用于处理基本类型的响应式，`reactive`用于处理对象类型的数据响应式
3. `ref` 返回的响应式数据在 js 中使用需要加上`.value`才能访问，在视图中会自动脱`ref`，`ref`可以接收非原始值，但内部依然是`reactive`实现的响应式；`reactive`内部如果接收`Ref`对象会自动脱`ref`。
4. `reactive` 内部使用`Proxy`代理传入的对象并且拦截该对象的各种操作，实现响应式。`ref`内部封装一个`RefImpl`类，并且设置 get set 方法拦截操作，实现响应式。

```ts
// reactive
function reactive(traget: object) {
  if (isReadonly(traget)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers
  );
}

function createReactiveObject(
  target,
  isReadonly,
  baseHandlers,
  collectionHandlers
) {
  // ...
  // 创建代理对象
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  );
  // 在 baseHandlers 中进行访问拦截
  return proxy;
}
```

```ts
// ref
function ref(value?: unknown) {
  return createRef(value, false);
}
function createRef(rawValue: unknown, shallow: boolean) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
```
