# restful | GraphQL

## restful

- REST 全称是 Representational State Transfer，即表述性状态转移，它是一种软件架构风格，而不是标准，只是提供了一组设计原则和约束条件。

传统api设计

```js
// 获取用户信息
GET /getUser
// 更新用户信息
POST /createUser
// 删除用户信息
DELETE /deleteUser/1
```

restful api设计

```js
// 获取用户信息
GET /users/1
// 更新用户信息
PUT /users/1
// 删除用户信息
DELETE /users/1
```

## 什么是GraphQL

- GraphQL是一种新的API标准，它提供了一种比REST更有效、更强大和更灵活的替代方案。
- 它是由Facebook开发并开源的，现在由来自世界各地的公司和个人组成的大型社区维护。
- GraphQL本质上是一种基于api的查询语言，现在大多数应用程序都需要从服务器中获取数据，这些数据存储可能存储在数据库中，API的职责是提供与应用程序需求相匹配的存储数据的接口。
- 它是数据库无关的，而且可以在使用API的任何环境中有效使用，我们可以理解为GraphQL是基于API之上的一层封装，目的是为了更好，更灵活的适用于业务的需求变化。

## GraphQL的优势

- REST API 的接口灵活性差、接口操作流程繁琐，GraphQL 的声明式数据获取，使得接口数据精确返回，数据查询流程简洁，照顾了客户端的灵活性。
- 客户端拓展功能时要不断编写新接口（依赖于服务端），GraphQL 中一个服务仅暴露一个 GraphQL 层，消除了服务器对数据格式的硬性规定，客户端按需请求数据，可进行单独维护和改进。
- REST API 基于HTTP协议，不能灵活选择网络协议，而传输层无关、数据库技术无关使得 GraphQL 有更加灵活的技术栈选择，能够实现在网络协议层面优化应用。
