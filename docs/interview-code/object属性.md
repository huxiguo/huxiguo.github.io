# 对象属性自定义

```js
let obj={
  '2':3,
  '3':4,
  'length':2,
  'splice':Array.prototype.splice,
  'push':Array.prototype.push
}
obj.push(1)
obj.push(2)

console.log(obj) 
```


输出 
```js
{2: 1, 3: 2, length: 4, splice: ƒ, push: ƒ}
```

在之前版本，当对象中有`splice`属性，属性值为函数，并且`length`属性位数字时，控制台会判断该对象为数组，所以会输出`[empty × 2，1,2]`
