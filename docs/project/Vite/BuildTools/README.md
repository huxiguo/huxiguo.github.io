---
lang: zh-CN
title: 什么是构建工具
---

# 什么是构建工具

> :red_square:浏览器只识别 html, css, js 文件

## 项目中可能具有的功能

#### :one: typescript: 如果遇到 ts 文件我们需要使用 tsc 将 typescript 代码转换为 js 代码

#### :two: React/Vue: 安装 react-compiler / vue-complier, 将我们写的 jsx 文件或者.vue 文件转换为 render 函数

#### :three: less/sass/postcss/component-style: 我们又需要安装 less-loader, sass-loader 等一系列编译工具

#### :four: 语法降级: babel ---> 将 es 的新语法转换旧版浏览器可以接受的语法

#### :five: 体积优化: uglifyjs ---> 将我们的代码进行压缩变成体积更小性能更高的文件

#### :six: .....

#### :green_square:**构建工具**可以帮我们把我们写的代码通过各种插件自动转化成 js,只要配置好后就不需要关心了

## 构建工具还干了什么

#### 1. 模块化开发支持: 支持直接从 node_modules 里引入代码 + 多种模块化支持

#### 2. 处理代码兼容性: 比如 babel 语法降级, less,ts 语法转换(**不是构建工具做的, 构建工具将这些语法对应的处理工具集成进来自动化处理**)

#### 3. 提高项目性能: 压缩文件, **代码分割**

#### 4. 优化开发体验:

- <p> 4.1构建工具会帮你自动监听文件的变化, 当文件变化以后自动帮你调用对应的集成工具进行重新打包, 然后再浏览器重新运行 (整个过程叫做热更新, hot replacement)</p>
- <p> 4.2开发服务器: 跨域的问题, 用 react-cli create-react-element vue-cli 解决跨域的问题</p>

构建工具他让我们可以不用每次都关心我们的代码在浏览器如何运行, 我们只需要首次给构建工具提供一个配置文件(这个配置文件也不是必须的, 如果你不给他 他会有默认的帮你去处理), 有了这个集成的配置文件以后, 我们就可以在下次需要更新的时候调用一次对应的命令就好了, 如果我们再结合热更新, 我们就更加不需要管任何东西, 这就是构建工具去做的东西, **他让我们不用关心生产的代码也不用关心代码如何在浏览器运行, 只需要关心我们的开发怎么写的爽怎么写就好了**