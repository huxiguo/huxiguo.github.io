---
lang: zh-CN
title: 函数
---

# 函数

## 定义函数

```py
def say_hi():
    print('hi')

say_hi()
```

## 函数参数与返回值

```py
def add(num1, num2):
    return num1+num2


print(add(1, 20))
```

#### 位置参数

```py
def user_info(name, age, gender):
    print(f'{name},{age},{gender}')

user_info('zs', 20, '男')
```

#### 关键字参数

```py
def user_info(name, age, gender):
    print(f'{name},{age},{gender}')

user_info(age=20, name='zs', gender='女')
```

#### 缺省参数

默认值必须在最后设置

```py
def user_info(name, age, gender='男'):
    print(f'{name},{age},{gender}')

user_info(age=20, name='zs')
```

#### 不定长参数

可变参数,将收集的参数存储为元组

位置传递

```py
def add(*num):
    sum = 0
    for i in num:
        sum += i
    return sum

print(add(1, 2, 3, 4, 5, 6))
```

关键字传递

参数用键值对形式传入，被接受为字典

```py
def user_info(**kwargs):
    print(kwargs)

user_info('zs':18)
```

#### 多返回值

```py
def test1():
    return 1, 'hi'


x, y = test1()
print(x) # 1
print(y) # 'hi'
```

## 函数变量作用域

#### 局部变量

直接在函数内部定义的为局部作用域

```py
num = 0

def test():
    num = 100
    print(num)  # 100

test()
print(num)  # 0
```

#### global

global 修饰的变量成为全局变量

```py
num = 0

def test():
    global num
    num = 100
    print(num)  # 100

test()
print(num)  # 100
```

## 匿名函数

#### 函数作为参数传递

```py
def test_func(func):
    result = func(1, 2)
    print(result)

def com(num1, num2):
    return num1+num2

test_func(com)
```

#### lambda

lambda 定义匿名函数

只能写一行

```py
def test_func(func):
    result = func(1, 2)
    print(result)

test_func(lambda x, y: x+y)
```
