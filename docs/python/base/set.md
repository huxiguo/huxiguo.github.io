---
lang: zh-CN
title: 集合
---

# 集合

集合 set 去重，顺序无法保证

```py
set1 = {'1', '2', '3', '4'}
```

## 方法

#### add()

添加新元素

```py
set1.add(666)
print(set1)
```

#### remove()

移除元素

```py
set1.remove('1')
print(set1)
```

#### pop()

随机取出一个元素

```py
print(set1.pop())
```

#### 清空

```py
set1.clear()
```

#### 取两个集合的差集

返回一个新集合

```py
set2 = {1, 2, 3}
set3 = {1, 4, 5}
print(set2.difference(set3)) # {2, 3}
```

#### 在集合 1 里删除集合 2 相同的元素

```py
set2 = {1, 2, 3}
set3 = {1, 2, 4}
set2.difference_update(set3)
print(set2) # 3
```

#### 合并集合

```py
set2 = {1, 2, 3}
set3 = {1, 2, 4}
print(set2.union(set3)) # {1, 2, 3, 4}
```

#### 统计集合的元素

```py
len(set1)
```

#### 遍历集合

```py
for i in set1:
    print(i)
```
