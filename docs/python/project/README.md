---
lang: zh-CN
title: 开始
---

# 开始

## 导入可视化图表包

```sh
pip install pyecharts
```

## 基本使用

```py
# 导入折线图对象
from pyecharts.charts import Line
from pyecharts.options import TitleOpts

# 折线图对象
line = Line()

# X轴数据
line.add_xaxis(['中国', '美国', '英国'])
# Y轴数据
line.add_yaxis('GDP', [100, 50, 10])

# 配置项
line.set_global_opts(
    title_opts=TitleOpts(title='GDP展示')
)
# 生成图表
line.render()
```
