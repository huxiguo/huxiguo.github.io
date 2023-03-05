---
lang: zh-CN
title: 字典
---

# 字典

存储键值对

## 定义

```py
{'zs': 99}

my_dict1 = {'zs': 99}

my_dict2 = dict()
```

## 方法

#### 通过 key 获取数据

```py
my_dict1 = {
    'zs': 99,
    'ls': 100
}
print(my_dict1['zs']) # 99
```

#### 获取嵌套字典数据

```py
score = {
    'zs': {
        '语文': 77,
        '数学': 66,
        '英语': 33
    },
    'ls': {
        '语文': 88,
        '数学': 86,
        '英语': 55
    },
    'xm': {
        '语文': 99,
        '数学': 96,
        '英语': 66
    }
}
print(score['zs']['语文']) # 77
```

#### 增加元素,更新元素

key 不存在就是新增，存在就是更新

```py
score['zs']['语文'] = 100
score['hh'] = {'语文': 100}
```

#### 删除元素

pop()

返回 key 对应的值并删除

```py
print(score.pop('hh')) # {'语文': 100}
```

#### 清空元素

clear()

```py
score.clear()
```

#### 获取所有的 key

```py
score.keys() # dict_keys(['zs', 'ls', 'xm'])
```

#### 遍历字典

```py
for k in score.keys():
    print(score[k])

for k in score:
    print(score[k])
```

#### 统计字典元素数量

```py
len(score)
```
