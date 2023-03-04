---
lang: zh-CN
title: 开始
---

# 开始

## 基本语句

#### 定义变量

```py
name = 'zs'
age = 19
```

#### 输入

```py
pwd = input('请输入密码')
```

#### 输出

```py
print('hello world')
```

#### if 语句

```python
age = 20
if age > 18:
    print('你已成年')
else:
    print('未成年')
```

#### while 循环

```py
i = 1

while i <= 9:
    j = 1
    while j <= i:
        print(f'{j}x{i}={i*j}\t', end='')
        j += 1
    i += 1
    print()
```

#### for 循环

```py
str1 = 'aaaaaaaaaa'

count = 0
for k in str1:
    if k == 'a':
        count += 1
```
