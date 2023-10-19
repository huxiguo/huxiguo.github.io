# CSS 架构模式之 BEM

`BEM` 是由 `Yandex` 团队提出的一种 CSS 命名方法论，即 `Block`（块）、`Element`（元素）、和 `Modifier`（修改器）的简称，是 `OOCSS` 方法论的一种实现模式，底层仍然是面向对象的思想。

以 `Element Plus` 的 `Tabs` 组件进行讲解 `BEM` 的核心思想。

那么整一个组件模块就是一个 `Block`（块），`classname` 取名为：`el-tabs`。`Block` 代表一个逻辑或功能独立的组件，是一系列结构、表现和行为的封装。

其中每个一个切换的标签就是一个 `Element`（元素），`classname` 取名为：el-tabs__item。`Element`（元素）可以理解为块里的元素。

`Modifier`（修改器）用于描述一个 `Block` 或者 `Element` 的表现或者行为。例如我们需要对两个 `Block`（块） 或者两个 `Element`（元素）进行样式微调，那么我们就需要通过 `Modifier`（修改器），`Modifier`（修改器）只能作用于 `Block`（块）或者 `Element`（元素），`Modifier`（修改器）是不能单独存在的。

例如按钮组件的 `classname` 取名为 `el-button`，但它有不通过状态譬如：`primary`、`success`、`info`，那么就通过 `Modifier`（修改器）进行区分，`classname` 分别为： `el-button--primary`、`el-button--success`、`el-button--info`。从这里也可以看出 `BEM` 本质上就是 `OOCSS`，基础样式都封装为 `el-button`，然后通过继承 `el-button` 的样式，可以拓展不同的类，例如：`el-button--primary`、`el-button--success`、`el-button--info`。

BEM 规范下 classname 的命名格式

```xml
block-name__<element-name>--<modifier-name>_<modifier_value>
```

- 所有实体的命名均使用小写字母，复合词使用连字符 “-” 连接。
- `Block` 与 `Element` 之间使用双下画线 “__” 连接。
- `Mofifier` 与 `Block/Element` 使用双连接符 “--” 连接。
- `modifier-name` 和 `modifier_value` 之间使用单下画线 “_” 连接。

Element Plus 的 Form 表单的 HTML 结构

```html
<form class="el-form">
    <div class="el-form-item">
        <label class="el-form-item__label">名称：</label>
        <div class="el-form-item__content">
            <div class="el-input">
                <div class="el-input__wrapper">
                    <input class="el-input__inner" />
                </div>
            </div>
        </div>
    </div>
</form>
```

## 通过 JS 生成 BEM 规范名称

在编写组件的时候如果通过手写 `classname` 的名称，那么需要经常写 `el` 、`-` 、 `__` 、 `--`，那么就会变得非常繁琐，通过上文我们可以知道 `BEM` 命名规范是具有一定规律性的，所以我们可以通过 `JavaScript` 按照 `BEM` 命名规范进行动态生成。
