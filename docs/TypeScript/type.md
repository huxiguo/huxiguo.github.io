---
lang: zh-CN
title: 常用类型
---

# 常用类型

## 类型注解

```ts
let str: string = 'hello world'
```

:::tip 说明
`:String` 就是类型注解

作用:为变量添加类型约束

约束是什么类型，就只能赋值什么类型，否则会报错
:::

## JS 已有类型

### 原始类型

#### number

```ts
let age: number = 18
```

#### string

```ts
let str: string = 'hello world'
```

#### boolaen

```ts
let isTrue: boolean = true
```

#### null

```ts
let a: null = null
```

#### undefined

```ts
let b: undefined = undefined
```

#### symbol

```ts
let s: symbol = Symbol()
```

### 对象类型

#### object (数组、函数、对象)

##### 数组类型

```ts {1}
let numbers: number[] = [1, 3, 5] // 推荐使用
let strings: Array<syting> = ['a', 'b', 'c']
```

##### 函数类型 (函数参数和返回值类型)

:green_circle: 单独指定参数、返回值类型

```ts
function add(num1: number, num2: number): number {
  return num1 + num2
}

const add1 = (num1: number, num2: number): number => {
  return num1 + num2
}
```

:green_circle: 同时指定参数、返回值类型

```ts
const add: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2
}
```

:::warning 注意
只适用于函数表达式
:::

:orange_circle: 可选参数: 在可传可不传的参数名称后面添加 `?`

在使用函数时,参数可以传也可以不传,可以使用 <font color="red">可选参数</font>

```ts
function mySlice(start?: number, end?: number): void {
  console.log(`起始位置:${start},结束索引:${end}`)
}
```

:::warning 注意
可选参数只能出现在参数列表的最后，可选参数后不能再出现必选参数
:::

:::tip 特殊
如果函数没有返回值，那么返回值为：`void`

```ts
function greet(name: string): void {
  console.log('Hello', name)
}
```

:::

##### 对象类型

语法：

```ts
let person: { name: string; age: number; sayHi(): void } = {
  name: 'tom',
  age: 20,
  sayHi() {
    console.log(`hello:${this.name}`)
  }
}
```

在对象属性后面加 `?` 可以让属性成为可选属性

```ts
function myAxios(config: { url: string; method?: string }) {}
myAxios({
  url: ''
})
```

## 类型别名

自定义类型

当同一个类型被多次使用，可以通过类型别名简化操作

```ts
type Num_Str = (number | string)[]
let arrs2: Num_Str = [1, 2, 3, 'a']
```

:::tip 说明
使用`type` 关键字创建类型别名

类型别名可以是任意合法变量名
:::

## 类型推论

发生类型推论的常见场景

:green_circle: 声明变量并初始化时

:green_circle: 决定函数返回值时

:::tip 说明
在以上两种情况下，类型注解可以省略不写

可以省略类型注解就不要写
:::

## 类型断言

当我们更明确的知道一个值的类型时，可以用类型断言来指定更具体的类型

例如：

```
<a href="http://www.seekhoo.cn" id="link"> 我的主页 </a>
const aLink = document.getElementById('link') // const aLink:HTMLElement
```

:::tip 说明
getElementById 返回值是 HTMLElement，该类型只包含所有标签的公共属性或方法，不包含 a 标签的 href 属性，所以无法操作
:::

类型断言语法

```ts
const aLink = document.getElementById('link') as HTMLAnchorElement
```

:::tip 提示
使用 `console.dir()` 打印 DOM 元素,可以查看元素的类型
:::

## TS 新增

#### 联合类型

有两个或多个其他类型组成的类型，可以是任意一种

```ts
let arr: (number | string)[] = [1, 'a', 2, 'b']
```

#### 接口

当一个对象类型被多次使用时。一般会使用接口 `interface` 来描述对象的类型，达到复用的目的
:::tip 说明
使用 `interface` 关键字声明接口
:::

```ts
interface IPerson {
  name: string
  age: number
  sayHi(): void
}
let person2: IPerson = {
  name: 'tom',
  age: 20,
  sayHi: () => {}
}
```

继承

使用 `extends` 实现接口继承

继承后的接口有被继承的接口的所有属性和方法

```ts
interface Point2D {
  x: number
  y: number
}
interface Point3D extends Point2D {
  z: number
}
let my2D: Point2D = {
  x: 1,
  y: 2
}
let my3D: Point3D = {
  x: 1,
  y: 2,
  z: 3
}
```

#### 元组

:orange_circle: 可以确切地知道包含多少个元素，以及特定索引对应的类型

```ts
let position: [number | string, number] = ['a', 1]
```

#### 字面量类型

```ts
const str = 'Hello World' // const str:'Hello World'
```

:green_circle: 使用模式：字面量类型配合联合类型一起使用

:green_circle: 使用场景：表示一组可选值列表

```ts {6}
function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
  console.log(direction)
}

changeDirection('right')
changeDirection('right1') // error
```

#### 枚举

枚举：定义一组命名常量

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}
function changeDirection2(direction: Direction) {
  console.log(direction)
}
changeDirection2(Direction.Up)
```

:::tip 说明
:green_circle: 使用 `enum` 关键字定义枚举

:green_circle: 约定枚举名称，值以大写字母开头

:large_blue_circle: 通过 `.` 语法访问枚举成员

:large_blue_circle: 数字枚举成员的值默认从 0 开始自增，字符串枚举没有自增

:large_blue_circle: 可以给成员初始化自定义值，字符串枚举必须指定初始值
:::

#### void

#### any

当值的类型为 `any` 时，进行任何操作都不会有错误提示

::: danger 警告
不推荐使用
:::
