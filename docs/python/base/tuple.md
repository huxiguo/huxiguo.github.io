---
lang: zh-CN
title: 元组
---

# 元组

可以存储多个不同类型的数据，不能修改最外层数据，但可以修改嵌套的 list 里的数据

```py
tup1 = (1, 2, False, [1, 2, 3])
print(tup1)
tup1[3][0] = 4
print(tup1)
```

## 定义元组

#### 字面量

```py
(1, 2, False, [1, 2, 3])
```

#### 元组变量

```py
tup1 = (1, 2, False, [1, 2, 3])
```

#### 空元组

```py
tup1 = tuple()
```

## 常用方法

#### index()

查找元素对应的下标

```py
print(tup1.index(1))
```

#### count()

统计元素在元组出现的次数

```py
print(tup1.count(2))
```

#### len()

元组长度

```py
print(len(tup1))
```

#### 循环

```py
for i in tup1:
   print(i)
```
