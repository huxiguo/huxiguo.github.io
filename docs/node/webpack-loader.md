# webpack 自定义 loader

## Loader

`loader` 本质上是导出为函数的 `JavaScript` 模块。`loader runner` 会调用此函数，然后将上一个 `loader` 产生的结果或者资源文件传入进去。该函数不能是箭头函数，因为函数中的 `this` 作为上下文会被 `webpack` 填充，并且 `loader` `runner` 中包含一些实用的方法。

## 实现简单loader

```js
// webpack.config.js
const path = require('path');
const webpack = require("webpack");

module.exports = {
  // 作用：指定webpack的运行环境
  mode: 'development',
  // 作用：指定入口文件
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  // 作用：指定输出文件
  output: {
    // 作用：指定输出文件的名称
    filename: '[name].bundle.js',
    // 作用：指定输出文件的目录
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  // 告诉webpack如何去寻找loader
  resolveLoader: {
    modules: ['node_modules', './src/loaders']
  },
  module: {
    // 作用：指定loader的使用规则,遇到js文件就使用loader
    rules: [
      {
        test: /.js$/i,
        use: ['loader'],
      }
    ]
  }
};
```

```js
// loader.js
/**
 * 自定义loader
 * @param {*} source 源码的内容
 * @returns 返回处理后的内容
 */
module.exports = function (source) {
  return source.replace('hxg', 'seekhoo');
}
```

传入`options`配置

```js
const path = require('path');
const webpack = require("webpack");

module.exports = {
  // 作用：指定webpack的运行环境
  mode: 'development',
  // 作用：指定入口文件
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  // 作用：指定输出文件
  output: {
    // 作用：指定输出文件的名称
    filename: '[name].bundle.js',
    // 作用：指定输出文件的目录
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  // 告诉webpack如何去寻找loader
  resolveLoader: {
    modules: ['node_modules', './src/loaders']
  },
  module: {
    // 作用：指定loader的使用规则,遇到js文件就使用loader
    rules: [
      {
        test: /.js$/i,
        use: [{
          loader: 'loader',
          options: {
            name: 'hahahahahah'
          }
        }],
      }
    ]
  }
};
```

在loader中获取options

```js
/**
 * 自定义loader
 * @param {*} source 源码的内容
 * @returns 返回处理后的内容
 */
module.exports = function (source) {
  const options = this.getOptions();
  return source.replace('hxg', options.name);
}
```

异步操作

```js
/**
 * 自定义loader
 * @param {*} source 源码的内容
 * @returns 返回处理后的内容
 */
module.exports = function (source) {
  const options = this.getOptions();
  const callback = this.async();
  setTimeout(() => {
    callback(null, source.replace('hxg', options.name));
  }, 1000);
}
```
