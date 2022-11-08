---
lang: zh-CN
title: 组件生命周期
---

# 组件的生命周期

## 旧的生命周期

1. 初始化阶段: 由 ReactDOM.render()触发---初次渲染
   1. constructor()
   2. componentWillMount()
   3. render()
   4. componentDidMount()
2. 更新阶段: 由组件内部 this.setSate()或父组件重新 render 触发
   1. shouldComponentUpdate()
   2. componentWillUpdate()
   3. render()
   4. componentDidUpdate()
3. 卸载组件: 由 ReactDOM.unmountComponentAtNode()触发
   1. componentWillUnmount()

![旧的生命周期](./images/old.png)

## 新的生命周期

1. 初始化阶段: 由 ReactDOM.render()触发---初次渲染
   1. constructor()
   2. <p style="color:red;margin:0">getDerivedStateFromProps</p>
   3. render()
   4. componentDidMount()
2. 更新阶段: 由组件内部 this.setSate()或父组件重新 render 触发
   1. <p style="color:red;margin:0">getDerivedStateFromProps</p>
   2. shouldComponentUpdate()
   3. render()
   4. <p style="color:red;margin:0">getSnapshotBeforeUpdate</p>
   5. componentDidUpdate()
3. 卸载组件: 由 ReactDOM.unmountComponentAtNode()触发
   1. componentWillUnmount()

![新的生命周期](./images/new.png)

## 重要的勾子

1. render：初始化渲染或更新渲染调用
2. componentDidMount：开启监听, 发送 ajax 请求
3. componentWillUnmount：做一些收尾工作, 如: 清理定时器
