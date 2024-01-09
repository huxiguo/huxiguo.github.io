# showmebug 面试题

- 如果`a===a`是`false`,那么说明`a`是？

[类型转换](/js/type_conversion.html)

```js
NaN === NaN // false

Infinity === Infinity // true

undefined === undefined // true

null === null // false
```

- 文档完全加载并解析完毕之后会触发什么事件？

`DOMContentLoaded`事件，当 HTML 文档完全解析，且所有延迟脚本`<script defer src="…">` 和 `<script type="module">`下载和执行完毕后，会触发 `DOMContentLoaded` 事件。它不会等待图片、子框架和异步脚本等其他内容完成加载。

`DOMContentLoaded` 不会等待样式表加载，但延迟脚本会等待样式表，而且 `DOMContentLoaded` 事件排在延迟脚本之后。此外，非延迟或异步的脚本如`<script>`将等待已解析的样式表加载。

- 状态码403

状态码 `403 Forbidden` 代表客户端错误，指的是服务器端有能力处理该请求，但是拒绝授权访问

- 实现简单的虚拟 DOM 渲染

```js
let domNode = {
  tagName: "ul",
  props: { class: "list" },
  children: [
    {
      tagName: "li",
      children: ["item1"],
    },
    {
      tagName: "li",
      children: ["item2"],
    },
  ],
};
```

```html
<ul class="list">
  <li>item1</li>
  <li>item2</li>
</ul>
```

```js
function render(domNode) {
  // 返回空
  if (!domNode) return document.createDocumentFragment()
  let $el = null
  if (typeof domNode === 'object') {
    $el = document.createElement(domNode.tagName)
    // 添加属性
    if (domNode.hasOwnProperty('props')) {
      for (let key in domNode.props) {
        $el.setAttribute(key, domNode.props[key])
      }
    }
    // 添加子元素
    if (domNode.hasOwnProperty('children')) {
      domNode.children.forEach((val) => {
        // 递归调用render
        const $childEl = render(val)
        // 将子元素添加到父元素下
        $el.appendChild($childEl)
      })
    }
  } else {
    // 不包含 子元素标签 直接 写入文本
    $el = document.createTextNode(domNode)
  }
  return $el
}
```

- 给定仅包含2-9的字符串，返回所有能表示的字母组合，数字与字母映射与电话按键相同

```ts
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  const res: string[] = [];
  const map: Record<any, string> = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };
  const dfs = (curStr: string, i: number) => {
    if (i > digits.length - 1) {
      res.push(curStr);
      return;
    }
    const letter = map[digits[i]];
    for (let val of letter) {
      dfs(val + curStr, i + 1);
    }
  };
  dfs("", 0);
  return res;
}
console.log(letterCombinations("23"));

```

- evevt loop 原理描述，并通过伪代码举例

- import 和 require 有什么区别？a.js b.js a调用b,b调用a,会出现死循环吗？为什么？

CommonJS和ES Module都对循环引入做了处理，不会进入死循环，但方式不同：
  
- CommonJS借助模块缓存，遇到require函数会先检查是否有缓存，已经有的则不会进入执行，在模块缓存中还记录着导出的变量的拷贝值；
- ES Module借助模块地图，已经进入过的模块标注为获取中，遇到import语句会去检查这个地图，已经标注为获取中的则不会进入，地图中的每一个节点是一个模块记录，上面有导出变量的内存地址，导入时会做一个连接——即指向同一块内存。
