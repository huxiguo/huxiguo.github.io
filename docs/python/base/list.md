---
lang: zh-CN
title: 列表
---

# 列表

可以储存多个数据，可以为不同数据类型，支持嵌套

## 定义列表

#### 字面量

```py
[1, 2, 3, [1, 2, 3, 'a']]
```

#### 变量

```py
num_list = [1, 2, 3, [1, 2, 3, 'a']]
```

#### 空列表

```py
name_list = list()
```

## 下标索引

负数表示从后向前

```py
num_list = [1, 2, 3, [4, 5, 6],'a']
print(num_list[0]) # 1
print(num_list[-1]) # 'a'
print(num_list[3][0]) # 4
```

## 常用方法

```py
name_list = [1, 'a', 123]
```

#### append(el)

向列表追加一个元素

```py
name_list.append('666')
print(name_list)
print(name_list)
```

#### extend(list)

将指定的内容依次取出，追加到列表尾部

```py
strs = [1, 2, 3]
name_list.append(strs)   [1, 'a', 123, [1, 2, 3]]
name_list.extend(strs)   [1, 'a', 123, 1, 2, 3]
```

#### insert(subscript, el)

在指定位置，插入指定元素

```py
name_list.insert(2, [1, 2])
print(name_list)
```

#### del list[subscript]

删除指定下标处的元素

```py
del name_list[0]
print(name_list)
```

#### pop(subscript)

删除指定下标元素,默认产出最后一个

```py
name_list.pop(0)
print(name_list)
```

#### remove(el)

从前向后，删除指定元素的第一个匹配项

```py
name_list.remove('a')
print(name_list)
```

#### clear()

清空列表

```py
name_list.clear()
print(name_list)
```

#### count(el)

统计指定元素出现次数

```py
name_list.count('a')
print(name_list)
```

#### index(el)

查找指定元素在列表中的下标

```py
list_index = name_list.index(1)
print(list_index) # 0
```

#### len(list)

统计列表长度

```py
print(len(name_list))
```

## 遍历列表

#### for

```py
for i in name_list:
    print(i)
```

#### while

```py
index = 0
while index < len(name_list):
    print(name_list[index])
    index += 1
```
