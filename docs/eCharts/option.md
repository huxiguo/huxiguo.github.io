---
lang: zh-CN
title: eCharts
---

# eCharts 基础配置

## series

系列列表。每个系列通过 `type` 决定自己的图表类型

大白话：图标数据，指定什么类型的图标，可以多个图表重叠。

## xAxis

直角坐标系 grid 中的 x 轴

boundaryGap: 坐标轴两边留白策略 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。

## yAxis

直角坐标系 grid 中的 y 轴

## grid

直角坐标系内绘图网格。

## title

标题组件

## tooltip

提示框组件

## legend

图例组件

## color

调色盘颜色列表

## stack

数据堆叠，同个类目轴上系列配置相同的`stack`值后 后一个系列的值会在前一个系列的值上相加。
