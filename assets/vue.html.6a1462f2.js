import{_ as n,o as s,c as a,d as e}from"./app.91a380bb.js";const i={},o=e(`<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4\u5982\u4F55\u5728vue\u9879\u76EE\u4E2D\u5E94\u7528typescript" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4\u5982\u4F55\u5728vue\u9879\u76EE\u4E2D\u5E94\u7528typescript" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5982\u4F55\u5728Vue\u9879\u76EE\u4E2D\u5E94\u7528TypeScript\uFF1F</h1><p><img src="https://static.vue-js.com/cc658c10-1565-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="\u4E00\u3001\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u524D\u8A00" aria-hidden="true">#</a> \u4E00\u3001\u524D\u8A00</h2><p>\u4E0Elink\u7C7B\u4F3C</p><p>\u5728<code>VUE</code>\u9879\u76EE\u4E2D\u5E94\u7528<code>typescript</code>\uFF0C\u6211\u4EEC\u9700\u8981\u5F15\u5165\u4E00\u4E2A\u5E93<code>vue-property-decorator</code>\uFF0C</p><p>\u5176\u662F\u57FA\u4E8E<code>vue-class-component</code>\u5E93\u800C\u6765\uFF0C\u8FD9\u4E2A\u5E93<code>vue</code>\u5B98\u65B9\u63A8\u51FA\u7684\u4E00\u4E2A\u652F\u6301\u4F7F\u7528<code>class</code>\u65B9\u5F0F\u6765\u5F00\u53D1<code>vue</code>\u5355\u6587\u4EF6\u7EC4\u4EF6\u7684\u5E93</p><p>\u4E3B\u8981\u7684\u529F\u80FD\u5982\u4E0B\uFF1A</p><ul><li>methods \u53EF\u4EE5\u76F4\u63A5\u58F0\u660E\u4E3A\u7C7B\u7684\u6210\u5458\u65B9\u6CD5</li><li>\u8BA1\u7B97\u5C5E\u6027\u53EF\u4EE5\u88AB\u58F0\u660E\u4E3A\u7C7B\u7684\u5C5E\u6027\u8BBF\u95EE\u5668</li><li>\u521D\u59CB\u5316\u7684 data \u53EF\u4EE5\u88AB\u58F0\u660E\u4E3A\u7C7B\u5C5E\u6027</li><li>data\u3001render \u4EE5\u53CA\u6240\u6709\u7684 Vue \u751F\u547D\u5468\u671F\u94A9\u5B50\u53EF\u4EE5\u76F4\u63A5\u4F5C\u4E3A\u7C7B\u7684\u6210\u5458\u65B9\u6CD5</li><li>\u6240\u6709\u5176\u4ED6\u5C5E\u6027\uFF0C\u9700\u8981\u653E\u5728\u88C5\u9970\u5668\u4E2D</li></ul><h2 id="\u4E8C\u3001\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4F7F\u7528" aria-hidden="true">#</a> \u4E8C\u3001\u4F7F\u7528</h2><p>vue-property-decorator \u4E3B\u8981\u63D0\u4F9B\u4E86\u591A\u4E2A\u88C5\u9970\u5668\u548C\u4E00\u4E2A\u51FD\u6570:</p><ul><li>@Prop</li><li>@PropSync</li><li>@Model</li><li>@Watch</li><li>@Provide</li><li>@Inject</li><li>@ProvideReactive</li><li>@InjectReactive</li><li>@Emit</li><li>@Ref</li><li>@Component (\u7531 vue-class-component \u63D0\u4F9B)</li><li>Mixins (\u7531 vue-class-component \u63D0\u4F9B)</li></ul><h3 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> @Component</h3><p><code>Component</code>\u88C5\u9970\u5668\u5B83\u6CE8\u660E\u4E86\u6B64\u7C7B\u4E3A\u4E00\u4E2A<code>Vue</code>\u7EC4\u4EF6\uFF0C\u56E0\u6B64\u5373\u4F7F\u6CA1\u6709\u8BBE\u7F6E\u9009\u9879\u4E5F\u4E0D\u80FD\u7701\u7565</p><p>\u5982\u679C\u9700\u8981\u5B9A\u4E49\u6BD4\u5982 <code>name</code>\u3001<code>components</code>\u3001<code>filters</code>\u3001<code>directives</code>\u4EE5\u53CA\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u5C31\u53EF\u4EE5\u5728<code>Component</code>\u88C5\u9970\u5668\u4E2D\u5B9A\u4E49\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>import {Component,Vue} from &#39;vue-property-decorator&#39;;
import {componentA,componentB} from &#39;@/components&#39;;

 @Component({
    components:{
        componentA,
        componentB,
    },
    directives: {
        focus: {
            // \u6307\u4EE4\u7684\u5B9A\u4E49
            inserted: function (el) {
                el.focus()
            }
        }
    }
})
export default class YourCompoent extends Vue{

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="computed\u3001data\u3001methods" tabindex="-1"><a class="header-anchor" href="#computed\u3001data\u3001methods" aria-hidden="true">#</a> computed\u3001data\u3001methods</h3><p>\u8FD9\u91CC\u53D6\u6D88\u4E86\u7EC4\u4EF6\u7684data\u548Cmethods\u5C5E\u6027\uFF0C\u4EE5\u5F80data\u8FD4\u56DE\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u3001methods\u4E2D\u7684\u65B9\u6CD5\u9700\u8981\u76F4\u63A5\u5B9A\u4E49\u5728Class\u4E2D\uFF0C\u5F53\u505A\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">HelloDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">123</span> <span class="token comment">// \u7C7B\u5C5E\u6027\u76F8\u5F53\u4E8E\u4EE5\u524D\u7684 data</span>

    <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span> <span class="token comment">// \u7C7B\u65B9\u6CD5\u5C31\u662F\u4EE5\u524D\u7684\u65B9\u6CD5</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u83B7\u53D6\u8BA1\u7B97\u5C5E\u6027</span>
    <span class="token keyword">get</span> <span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u8BBE\u7F6E\u8BA1\u7B97\u5C5E\u6027</span>
    <span class="token keyword">set</span> <span class="token function">total</span><span class="token punctuation">(</span>param<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> param
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> @props</h3><p>\u7EC4\u4EF6\u63A5\u6536\u5C5E\u6027\u7684\u88C5\u9970\u5668\uFF0C\u5982\u4E0B\u4F7F\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Component<span class="token punctuation">,</span>Vue<span class="token punctuation">,</span>Prop<span class="token punctuation">}</span> from vue<span class="token operator">-</span>property<span class="token operator">-</span>decorator<span class="token punctuation">;</span>

@Component
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">YourComponent</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    @<span class="token function">Prop</span><span class="token punctuation">(</span>String<span class="token punctuation">)</span>
    <span class="token literal-property property">propA</span><span class="token operator">:</span>string<span class="token punctuation">;</span>

    @<span class="token function">Prop</span><span class="token punctuation">(</span><span class="token punctuation">[</span>String<span class="token punctuation">,</span>Number<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token literal-property property">propB</span><span class="token operator">:</span>string<span class="token operator">|</span>number<span class="token punctuation">;</span>

    @<span class="token function">Prop</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token comment">// type: [String , Number]</span>
     <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;default value&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4E00\u822C\u4E3AString\u6216Number</span>
      <span class="token comment">//\u5982\u679C\u662F\u5BF9\u8C61\u6216\u6570\u7EC4\u7684\u8BDD\u3002\u9ED8\u8BA4\u503C\u4ECE\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570\u4E2D\u8FD4\u56DE</span>
      <span class="token comment">// defatult: () =&gt; {</span>
      <span class="token comment">//     return [&#39;a&#39;,&#39;b&#39;]</span>
      <span class="token comment">// }</span>
     <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
     <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;InProcess&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;Settled&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token literal-property property">propC</span><span class="token operator">:</span>string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> @watch</h3><p>\u5B9E\u9645\u5C31\u662F<code>Vue</code>\u4E2D\u7684\u76D1\u542C\u5668\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>import { Vue, Component, Watch } from &#39;vue-property-decorator&#39;

@Component
export default class YourComponent extends Vue {
  @Watch(&#39;child&#39;)
  onChildChanged(val: string, oldVal: string) {}

  @Watch(&#39;person&#39;, { immediate: true, deep: true })
  onPersonChanged1(val: Person, oldVal: Person) {}

  @Watch(&#39;person&#39;)
  onPersonChanged2(val: Person, oldVal: Person) {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="emit" tabindex="-1"><a class="header-anchor" href="#emit" aria-hidden="true">#</a> @emit</h3><p><code>vue-property-decorator</code> \u63D0\u4F9B\u7684 <code>@Emit</code> \u88C5\u9970\u5668\u5C31\u662F\u4EE3\u66FF<code>Vue </code>\u4E2D\u7684\u4E8B\u4EF6\u7684\u89E6\u53D1<code>$emit</code>\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import {Vue, Component, Emit} from &#39;vue-property-decorator&#39;;
    @Component({})
    export default class Some extends Vue{
        mounted(){
            this.$on(&#39;emit-todo&#39;, function(n) {
                console.log(n)
            })
            this.emitTodo(&#39;world&#39;);
        }
        @Emit()
        emitTodo(n: string){
            console.log(&#39;hello&#39;);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09-\u3001\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u4E09-\u3001\u603B\u7ED3" aria-hidden="true">#</a> \u4E09 \u3001\u603B\u7ED3</h2><p>\u53EF\u4EE5\u770B\u5230\u4E0A\u8FF0<code>typescript</code>\u7248\u672C\u7684<code>vue class</code>\u7684\u8BED\u6CD5\u4E0E\u5E73\u65F6<code>javascript</code>\u7248\u672C\u4F7F\u7528\u8D77\u6765\u8FD8\u662F\u6709\u5F88\u5927\u7684\u4E0D\u540C\uFF0C\u591A\u5904\u7528\u5230<code>class</code>\u4E0E\u88C5\u9970\u5668\uFF0C\u4F46\u5B9E\u9645\u4E0A\u672C\u8D28\u662F\u4E00\u81F4\u7684\uFF0C\u53EA\u6709\u4E0D\u65AD\u7F16\u5199\u624D\u4F1A\u5F97\u5FC3\u5E94\u624B</p>`,29),t=[o];function p(c,l){return s(),a("div",null,t)}const r=n(i,[["render",p],["__file","vue.html.vue"]]);export{r as default};
