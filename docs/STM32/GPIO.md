---
lang: zh-CN
title: GPIO
---

# GPIO

General purpose input output (通用输入输出口)

分为 PA,PB,PC 每组 16 个引脚，Px0~Px15 和 PD2

## 功能

:red_circle: 输出功能：输出高电平 1 / 低电平 0

:red_circle: 输入功能：读取引脚的电平

:red_circle: 复用功能：串口通信

:red_circle: 时序模拟：I2C,SPI

## GPIO 输入模式

:red_circle: 上拉输出 --> 默认为 1

:red_circle: 下拉输出 --> 默认为 0

:red_circle: 浮空输出 --> 信号进入芯片内部后，既没有接上拉电阻也没有接下拉电阻，经由触发器输入。一般把这种模式用于标准的通讯协议

:red_circle: 模拟输出 --> 信号直接送到片上

## GPIO 输出模式

:red_circle: 通用推挽输出 (GPIO_Mode_Out_PP)

输入 0 输出低

输入 1 输出高

:red_circle: 通用开漏输出 (GPIO_Mode_Out_OD)

:red_circle: 复用推挽输出 (GPIO_Mode_AF_PP )

:red_circle: 复用开漏输出 (GPIO_Mode_AF_OD)

## GPIO 寄存器

:green_square: GPIO 寄存器的功能是存储二进制数据

由具有存储功能的触发器组合起来构成的

一个触发器可以存储 1 位二进制代码，32 位为一组

## GPIO 库函数
