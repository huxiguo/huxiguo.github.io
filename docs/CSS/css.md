---
lang: zh-CN
title: CSS基础
---

# CSS 基础

## CSS 背景

### 背景图像固定

- `background-attachment: fixed;` 属性：scroll 背景图像随着内容滚动，fixed 背景图像固定
- 背景简写 background： 属性没有顺序

### 背景颜色半透明

- `background: rgba(red,green,blue,alpha)` alpha 代表透明度 0~1；

## CSS 特性

### 1.层叠性

- 层叠性原则：

       1.  样式冲突遵循就近原则
       2. 样式不冲突，不会层叠

### 2.继承性

1. 子标签会继承父标签的样式，继承文字相关的属性

### 3.优先级

- 选择器相同，执行层叠性
- 选择器不同，根据权重执行

| 选择器     | 选择器权重 |
| ---------- | ---------- |
| 继承或者   | 0,0,0,0    |
| 元素选择器 | 0,0,0,1    |
| 类选择器   | 0,0,1,0    |
| ID 选择器  | 0,1,0,0    |
| 行内样式   | 1,0,0,0    |
| !important | ∞          |

- 权重叠加

## 盒子模型

`box-sizing: content-box`

默认模型，设置宽高时表示内容的宽高度，加边框和内边距会撑大盒子

`box-sizing: border-box`

宽高包含边框和内边距，不包含外边距

`width = border + padding + 内容的宽度`

`height = border + padding + 内容的高度`

### 盒子模型组成

1. border 边框
2. content 内容
3. padding 内边距
4. margin 外边距

#### border

| 属性         | 作用                   |                        |
| ------------ | ---------------------- | ---------------------- |
| border-width | 定义边框粗细 ，单位 px |                        |
| border-style | 边框样式               |                        |
| border-color | 边框颜色               | solid 实线 dashed 虚线 |

- 简单写法 `border: 10px solid red;` 没有顺序
- 可以分别定义一个边，`border-top: 10px solid red;`
- `border-collapse:collapes;` 合并相邻的边框

#### padding

- 边框与内容的距离
- 上下左右内边距
- 复合写法

| 值的个数                      | 表达意思        |
| ----------------------------- | --------------- |
| `padding：5px`                | 上下左右        |
| `padding：5px 10px`           | 先上下 再左右   |
| `padding：5px 10px 20px`      | 上 左右 下      |
| `padding：5px 10px 20px 30px` | 上右下左 顺时针 |

#### margin

- 盒子与盒子之间的间距
- 简写与 padding 一致

#### 外边距合并

1. 相邻元素垂直外边距的合并

   - 两个相邻元素垂直外边距会合并，取最大值

2. 嵌套元素垂直外边距的塌陷

   - 嵌套盒子垂直外边距会塌陷
   - 解决方法：
     1. 为父元素定义上边框
     2. 为父元素定义内边距
     3. 为父元素添加`overflow:hidden` 常用

#### 清除内外边距

-

```css
* {
  margin: 0;
  padding: 0;
}
```

## 圆角边框

- `border-radius: 100px;` radius 半径

### 常用写法

- 做一个圆 `border-radius: value;` 值设置为正方形盒子的一半 直接写 50%
- 做一个圆角矩形 将 radius 设置为高度的一半

### 精确写法

- `border-radius: v1 v2 v3 v4;` 从左上角开始
- `border-radius: v1 v2 ;` 对角线，从左上开始

---

## 盒子阴影

- `box-shadow: h-shadow v-shadow blur spread color inset`

| 值       | 描述                       |
| -------- | -------------------------- |
| h-shadow | 阴影左右位置               |
| v-shadow | 阴影上下位置               |
| blur     | 虚实                       |
| spread   | 大小                       |
| color    | 颜色                       |
| inset    | 可以改为内部阴影，默认外部 |

- 默认外阴影，不用写
- 阴影不占用空间

---

## 浮动

### 浮动特性

1. 浮动的元素或脱离标准流，浮动的盒子不在保留原来的位置
2. 浮动元素在一行内显示并且顶部对齐
3. 浮动元素会具有行内块元素的属性

### 浮动注意点

1.  浮动和标准流的父盒子搭配使用
2.  浮动盒子只会影响后面的标准流，不会影响前面的
3.  一浮全浮

### 清除浮动

- 如果父盒子有高度不需要清除浮动
- 清除浮动后，父盒子会根据浮动的子盒子自动检测高度。
- `clear:both;`

### 清除浮动的方法

- 额外标签法：在浮动的元素末尾添加一个空标签，并且清除浮动，要求必须是块级标签
- 给父级元素添加 overflow `overflow:hidden;`
- after 伪元素法 给父元素用

```css
.clearfix:after {
            content: "";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }
        .clearfix {
            *zoom: 1;
        }
```

- 双伪元素清除浮动

```css
.clearfix:before,
        .clearfix:after {
            content: "";
            display: table;
        }
        .clearfix:after {
            clear: both;
        }
        .clearfix {
            *zoom: 1;
        }
```

## 定位的组成

- 定位=定位模式+边偏移

### 定位模式

- 通过 position 属性来设置

| 值       | 语义     |
| -------- | -------- |
| static   | 静态定位 |
| relative | 相对定位 |
| absolute | 绝对定位 |
| fixed    | 固定定位 |

#### 边偏移

- top bottom left right

### 静态定位

- 默认的定位方式，标准流

### 相对定位

- 相对于自己原来的位置
- 保留原来的位置

### 绝对定位

- 相对于祖先元素移动
- 如果没有祖先元素或者祖先元素没有定位，则以浏览器定位
- 祖先元素有定位，以最近的定位
- 会脱标

### 固定定位

- 在可视窗口的固定位置
- 固定在版心的右侧 固定定位 left：50%;margin-left:版心的一半；

### 粘性定位

- 以浏览器的可视窗口为参照
- 占有原来的位置

## 元素的显示与隐藏

### display

- 设置一个元素如何进行显示
- display：none；隐藏对象
- display：block；显示对象
- 隐藏后不在占有原来的位置

### visibility

- visibility：visble; 元素可见
- visilibity: hidden；元素隐藏
- 隐藏起来保留原来的位置

### overflow

overflow：hidden；隐藏溢出的部分

## 精灵图

- `background: url(sprites.png)-182px 0;`
