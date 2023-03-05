---
lang: zh-CN
title: 字符串
---

# 字符串

```py
my_str='hello world'
```

## 常用方法

#### index()

```py
print(my_str.index('o')) # 4
```

#### replace()

替换所有匹配的，返回新字符串

```py
print(my_str.replace('o', '奥')) # hell奥 w奥rld
```

#### split()

```py
print(my_str.split('l'))  # ['he', '', 'o wor', 'd']
print(my_str.split(' '))  # ['hello', 'world']
```

#### strip()

去掉前后指定字符串

```py
my_str2 = 'abcdedcba'
print(my_str2.strip('ab'))
```

#### count()

```py
print(my_str.count('o')) # 2
```

#### len()

```py
print(len(my_str)) # 11
```
