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
