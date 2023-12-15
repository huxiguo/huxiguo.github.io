# webpack 自定义 plugin

webpack 是基于插件机制的

- Webpack 插件是一个具有 apply 方法的 JavaScript 对象。apply 方法会被 webpack compiler 调用，并且在整个编译生命周 期都可以访问 compiler 对象。
- 原理：
  - 通过在生命周期的钩子中挂载函数，来实现功能扩展

## 钩子

![钩子](https://www.cdkgg.com/images/nodeautomation/124.jpg)
![钩子](https://www.cdkgg.com/images/nodeautomation/125.jpg)

## 自定义 plugin

```js
// index.js
const { readFileSync } = require('fs');
const path = require('path');
const { compileHtml } = require('./compiler');
const INNER_MARK = '<!-- inner -->'
class MdToHtmlPlugin {
  constructor({ template, filename }) {
    if (!template) {
      throw new Error('template is required')
    }
    this.template = template;
    this.filename = filename ? filename : 'md.html';
  }
  apply(compiler) {
    compiler.hooks.emit.tap('md-to-html-plugin', (compilation) => {
      const _assets = compilation.assets;
      const _source = readFileSync(this.template, 'utf-8');
      const _template = readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
      const _sourceArr = _source.split('\n');
      const _htmlStr = compileHtml(_sourceArr);
      const finalHtml = _template.replace(INNER_MARK, _htmlStr);
      _assets[this.filename] = {
        source() {
          return finalHtml
        },
        size() {
          return finalHtml.length
        }
      }
    });
  }
}

module.exports = MdToHtmlPlugin;

// compiler.js
const mark_reg = /^(.+?)\s/
const sharp_reg = /^\#/
const crossbar_reg = /^\-/
const num_reg = /^\d+/

function compileHtml(sourceArr) {
  const htmlPool = createTree(sourceArr);
  let htmlStr = ''
  for (const key in htmlPool) {
    const item = htmlPool[key];
    if (item.type === 'single') {
      htmlStr += item.tags[0]
    }
    if (item.type === 'warp ') {
      htmlStr += `<${key.split('-')[0]}>${item.tags.join('')}</${key.split('-')[0]}>`
    }
  }
  return htmlStr
}



function createTree(sourceArr) {
  let htmlPool = {}
  let lastTag = null;
  let key = null
  sourceArr.forEach((item) => {
    const match = item.match(mark_reg);
    if (match) {
      const mark = match[1];
      const input = match.input;
      if (sharp_reg.test(mark)) {
        const tag = `h${mark.length}`
        const content = input.replace(mark_reg, '');
        if (lastTag && lastTag === tag) {
          htmlPool[`${tag}-${key}`].tags = [...htmlPool[`${tag}-${key}`].tags, `<${tag}>${content}</${tag}>`]
        } else {
          lastTag = mark
          key = randomNum()
          htmlPool[`${tag}-${key}`] = {
            type: 'single',
            tags: [`<${tag}>${content}</${tag}>`],
          }
        }
      }
      if (crossbar_reg.test(mark)) {
        const tag = 'li'
        const content = input.replace(mark_reg, '');
        if (crossbar_reg.test(lastTag)) {
          htmlPool[`ul-${key}`].tags = [...htmlPool[`ul-${key}`].tags, `<${tag}>${content}</${tag}>`]
        } else {
          lastTag = mark
          key = randomNum()
          htmlPool[`ul-${key}`] = {
            type: 'warp ',
            tags: [`<${tag}>${content}</${tag}>`],
          }
        }
      }
      if (num_reg.test(mark)) {
        const tag = 'li '
        const content = input.replace(mark_reg, '');
        if (num_reg.test(lastTag)) {
          htmlPool[`ol-${key}`].tags = [...htmlPool[`ol-${key}`].tags, `<${tag}>${content}</${tag}>`]
        } else {
          lastTag = mark
          key = randomNum()
          htmlPool[`ol-${key}`] = {
            type: 'warp ',
            tags: [`<${tag}>${content}</${tag}>`],
          }
        }
      }
    }
  })
  return htmlPool
}

function randomNum() {
  return new Date().getTime() + parseInt(Math.random() * 10000)
}

module.exports = {
  compileHtml
}
```

使用plugin

```js
// webpack.config.js
const path = require('path');
const webpack = require("webpack");
const MdToHtmlPlugin = require('./src/plugins/md-to-html-plugin');

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
  },
  plugins: [
    new MdToHtmlPlugin({
      template: path.resolve(__dirname, './src/test.md'),
      filename: 'test.html',
    }),
  ],
};
```
