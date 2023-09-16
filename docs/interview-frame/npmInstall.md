# npm install 发生了啥

1. npm install 执行后，会检查并获取 npm 配置，优先级为：

- 项目级别的 .npmrc > 用户级别的 .npmrc > 全局级别的 .npmrc > npm 内置的 .npmrc

2. 然后检查项目中是否有 `package-lock.json` 文件。

从 npm 5.x 开始，执行 npm install 时会自动生成一个 `package-lock.json` 文件。

`package-lock.json` 文件精确描述了 `node_modules` 目录下所有的包的树状依赖结构，每个包的版本号都是完全精确的。

因此 npm 会先检查项目中是否有 `package-lock.json` 文件，分为两种情况：

- 如果有，检查 `package-lock.json` 和 `package.json` 中声明的依赖是否一致
- 一致：直接使用 `package-lock.json` 中声明的依赖，从缓存或者网络中加载依赖
- 不一致：各个版本的 npm 处理方式如上图
- 如果没有，根据 `package.json` 递归构建依赖树，然后根据依赖树下载完整的依赖资源，在下载时会检查是否有相关的资源缓存
- 存在：将缓存资源解压到 `node_modules` 中
- 不存在：从远程仓库下载资源包，并校验完整性，并添加到缓存，同时解压到 `node_modules` 中

3. 最终将下载资源包，存放在缓存目录中；解压资源包到当前项目的 node_modules 目录；并生成 package-lock.json 文件。
