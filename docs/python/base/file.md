---
lang: zh-CN
title: 文件操作
---

# 文件操作

## open()

打开文件函数,返回文件对象

mode 参数
|模式|描述|
|:-:|:-:|
|r|只读模式，文件指针放在文件开头，默认模式|
|w|打开文件只用于写入，文件存在则打开，并重头编辑，原有内容被删除，不存在就创建|
|a|打开文件用于追加|

```py
open('base/public/test.txt', 'r', encoding='UTF-8')
```

#### read()

read(num) num 表示读取数据长度，没有则表明读取全部

```py
# 读取10字节
print(f.read(10))
# 读取全部
print(f.read())
```

#### readlines()

把文件的每一行作为一个元素返回到列表中

readline() 读取一行

#### close()

解除文件占用

#### with open

```py
with open('base/public/test.txt', 'r', encoding='UTF-8') as f:
    for i in f:
        print(i) # 文件的每一行
```

#### write()

```py
f = open('base/public/test.txt', 'a', encoding='UTF-8')
f.write('\npython is the best lang') # 写入缓冲区
f.flush() # 写入硬盘
f.close()
```
