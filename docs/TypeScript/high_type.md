---
lang: zh-CN
title: 高级类型
---

# 高级类型

## class 类

:green_circle: TS 中的 `class` 不仅仅提供 `class` 语法功能，也作为一种类型存在

:orange_circle: 实例属性初始化

```ts
class Person {
  age: number
  gender: '男'
}
```

:orange_circle: 构造函数

```ts
class Person {
  age: number
  gender: string
  constructor(age: number, gender: string) {
    this.age = age
    this.gender = gender
  }
}
```

:::warning 注意
成员初始化后才能通过 `this.` 访问实例成员

需要为构造函数指定类型注解，否则会推断为 `any` 构造函数不需要返回值
:::

:large_blue_circle: 实例方法

```ts
class Point {
  x = 1
  y = 2
  scale(n: number): void {
    this.x *= n
    this.y *= n
  }
}
```

:purple_circle: 继承

实现继承：`extends` (继承父类) `impelments` (实现接口)
:::tip 说明
JS 中只有 `extends` , `impelments` 是由 TS 提供
:::
:yellow_circle: 继承父类

```ts {6}
class Animal {
  move() {
    console.log('moving along !')
  }
}
class Dog extends Animal {
  bark() {
    console.log('wang wang wang !!')
  }
}

const dog = new Dog()
dog.move()
dog.bark()
```

:yellow_circle: 实现接口

```ts
interface Singable {
  sing(): void
}

class Man implements Singable {
  sing(): void {
    console.log('hhhhhhhh!!')
  }
}
```

:orange_circle: 可见性修饰符

:one: `public` 共有成员可以被任何地方访问，`public` 是默认的可以省略

```ts
class Animal {
  public move() {
    console.log('moving along !')
  }
}
```

:two: `protected` 受保护的，仅对声明所在类和子类可见 子类方法内部通过 `this`访问

```ts
class Animal {
  // 受保护的方法
  protected move() {
    console.log('走！')
  }
  run() {
    this.move()
    console.log('跑！')
  }
}

const a = new Animal()
a.run()
// a.move() 不可访问

class Dog extends Animal {
  bark() {
    this.move()
    console.log('狗叫！')
  }
}

const d = new Dog()
d.run()
d.bark()
// d.move() 不可访问
```

:three: `private` 私有的，只在当前类可见，实例对象以及子类不可见

```ts
class Animal {
  private __move__() {
    console.log('private 方法')
  }

  move() {
    this.__move__() //可以访问
    console.log('走！')
  }
  run() {
    console.log('跑！')
  }
}

const a = new Animal()
// a.__move__() 私有，不可在外部访问

class Dog extends Animal {
  bark() {
    // this.__move__() 私有，不可在外部访问
    console.log('狗叫！')
  }
}

const d = new Dog()
// d.__move__() 私有，不可在外部访问
```

:four: `readonly` 只读 防止在构造函数之外对属性进行赋值

```ts
class Person {
  readonly age: number = 18
  constructor(age: number) {
    this.age = age
  }
  setAge(age: number) {
    // this.age = age age为只读属性
  }
}
```

:::tip 说明
`readonly` 修饰的属性，必须手动提供明确的类型
:::

## 类型兼容

类型系统有：

:green_circle: Structural Type System (结构化类型系统)

:green_circle: Nominal Type System (标明类型系统)

TS 采用的是结构化类型系统，类型检查关注的是值所具有的形状

在结构系统中，如果两个对象具有相同的形状，则认为是同一类型

成员多的可以赋值给少的

`class` `interface` 之间也可以兼容

```ts
class Point {
  x: number
  y: number
}

class Point2D {
  x: number
  y: number
}
const p: Point = new Point2D()
```

:red_square: 函数之间的兼容性

函数兼容性要考虑：参数个数、参数类型、返回值类型

:one: 参数个数

参数少的可以赋值给参数多的

```ts
type F1 = (a: number) => void
type F2 = (a: number, b: number) => void
let f1: F1 = function () {}
let f2: F2 = f1
```

:two: 参数类型

相同位置的参数类型要相同或兼容

```ts
// 原始类型 类型要保持一致
type F1 = (a: number) => String
type F2 = (a: number) => String
let f1: F1 = function () {
  return 'ok'
}
let f2: F2 = f1
```

```ts
interface Point2D {
  x: number
  y: number
}

interface Point3D {
  x: number
  y: number
  z: number
}
type F2 = (p: Point2D) => void
type F3 = (p: Point3D) => void
let f2: F2 = function () {}
let f3: F3 = f2
```

:three: 返回值类型

多的可以给少的

:::danger 总结
对象-多赋值少

函数参数个数-少赋值多

函数参数类型-原始类型必须相同，对象类型把对象拆开看成参数，少的可以赋值多的

函数返回值-多赋值少
:::

## 交叉类型

使用 `&`

类似于接口继承，用于组合多个类型为一个类型

```ts
interface Person {
  name: string
}
interface Contcat {
  phone: string
}

type PersonDetail = Person & Contcat

let obj: PersonDetail = {
  name: 'tom',
  phone: '110'
}
```

:::tip & VS extends 对比
相同点：都可以实现对象类型的组合

不同：对于同名属性之间处理类型冲突不同
:::

接口继承

```ts {5}
// 类型不兼容
// error
interface A {
  age: number
}
interface B extends A {
  age: string
}
```

交叉类型

```ts
interface A {
  age: number
}
interface B {
  age: string
}
type C = A & B

// 等价于
age: string | number
```

## 泛型和 `keyof`

创建泛型函数

```ts
function id<type>(value: type): type {
  return value
}

const num = id<number>(10)

let str = id('hello')
```

:::tip 说明
在函数名称后面加`<>`,在里面添加类型变量`<T>`

类型变量是特殊类型的变量

:::

泛型约束

不添加约束无法访问值的任何属性

添加约束

```ts {9}
interface ILength {
  length: number
}

function id<T extends ILength>(value: T): T {
  value.length
  return value
}
// let num = id(10)

let str = id('hello')
```

`keyof`

例子：创建一个函数获取对象中属性的值

```ts
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
let person = { name: 'tom', age: 18 }
getProp(person, 'age')
```

## 索引签名类型 和 索引查询类型

## 映射类型
