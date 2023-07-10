---
lang: zh-CN
title: 继承
description: javascript的继承
---

# 继承

## 概念

- 继承的优点

继承可以使得子类具有父类别的各种属性和方法，而不需要再次编写相同的代码

在子类别继承父类别的同时，可以重新定义某些属性，并重写某些方法，即覆盖父类别的原有属性和方法，使其获得与父类别不同的功能

虽然 JavaScript 并不是真正的面向对象语言，但它天生的灵活性，使应用场景更加

```js
// 动物类
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eat something`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.voice = "wang";
  }
  say() {
    console.log(`${this.name} wong`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.voice = "miao";
  }
  say() {
    console.log(`${this.name} miao`);
  }
}
```

## 实现

### 原型链继承

原型链作为实现继承的主要方法，其基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法。

```js
function Parent() {
  this.name = "hu";
  this.arr = [1, 2, 3];
}

Parent.prototype.say = function () {
  console.log(this.name);
};

function Child() {}

Child.prototype = new Parent();

let child1 = new Child();
console.log(child1.arr);
child1.arr.push(4);

let child2 = new Child();
child2.arr.push(5);
console.log(child2.arr);
```

- 缺陷

1. 引用类型的属性被所有实例共享
2. 创建 `Child` 的实例的时候，不能向 `Parent` 传参

### 构造函数继承

- 为了避免引用类型的属性被所有实例共享
- 可以直接在 `Child` 中向 `Parent` 传参

```js
function Parent(age) {
  this.name = "hu";
  this.list = [1, 2, 3];
  this.age = age;
  this.getName = function () {
    console.log(this.name);
  };
  this.getAge = function () {
    console.log(this.age);
  };
}

Parent.prototype.say = function () {
  console.log(this.name);
};

function Child(age) {
  Parent.call(this, age);
}

let child1 = new Child(18);
child1.list.push(4);
console.log(child1.list); // [1,2,3,4]
child1.getName();
child1.getAge();
child1.say(); // TypeError

let child2 = new Child(20);
child2.list.push(5);
console.log(child2.list); // [1,2,3,5]
child2.getName();
child2.getAge();
```

缺点

- 只能继承父类的实例属性和方法，不能继承原型属性或者方法

### 组合继承

组合继承就是将原型链和借用构造函数的技术结合到一起

思想是使用原型链实现对原型属性和方法的继承，通过借用构造函数实现对实例属性的继承

```js
// 组合继承

function Parent(age, name) {
  this.name = name;
  this.list = [1, 2, 3];
  this.age = age;
}
Parent.prototype.say = function () {
  console.log(this.name);
};

function Child(age, name, sex) {
  Parent.call(this, age, name);
  // Parent.apply(this, [age, name])
  this.sex = sex;
}

console.log(Child.prototype.constructor);
Child.prototype = new Parent();
// 将constructor指向Child
console.log(Child.prototype.constructor);

Child.prototype.constructor = Child;

let child1 = new Child(18, "hu", "man");

child1.list.push(4);
console.log(child1.list);
child1.say();

let child2 = new Child(20, "aaa", "woman");
child2.list.push(5);
console.log(child2.list);
child2.say();
```

### 原型式继承

```js
let Person = {
  name: "hu",
  list: [1, 2, 3],
  getName: function () {
    return this.name;
  },
};

let p1 = Object.create(Person);

p1.name = "tom";
p1.list.push(4); // [1,2,3,4]

let p2 = Object.create(Person);
p2.name = "jerry";
p2.list.push(5); // [1,2,3,4,5]
```

`Object.create` 方法实现的是浅拷贝，多个实例的引用类型属性指向相同的内存，存在篡改的可能

原型式继承非常适合不需要单独创建构造函数，但仍然需要在对象间共享信息的场

### 寄生式继承

### 寄生组合式继承
