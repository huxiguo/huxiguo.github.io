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
