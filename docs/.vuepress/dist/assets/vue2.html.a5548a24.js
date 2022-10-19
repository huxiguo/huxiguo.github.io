import{_ as n,o as s,c as a,d as e}from"./app.15a634eb.js";const i={},p=e(`<h1 id="vue2" tabindex="-1"><a class="header-anchor" href="#vue2" aria-hidden="true">#</a> Vue2</h1><h2 id="mixin\u6DF7\u5165" tabindex="-1"><a class="header-anchor" href="#mixin\u6DF7\u5165" aria-hidden="true">#</a> <code>mixin</code>\u6DF7\u5165</h2><p>\u628A\u591A\u4E2A\u7EC4\u4EF6\u516C\u7528\u7684\u914D\u7F6E\u63D0\u53D6\u6210\u4E00\u4E2A\u6DF7\u5165\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5EFA\u7ACB mixin.js \u6587\u4EF6</span>
<span class="token comment">// \u5BFC\u51FA\u516C\u5171\u7684\u903B\u8F91</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> mixin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">showName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5728\u4E0D\u540C\u7684\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u6DF7\u5408</span>

<span class="token comment">// \u5F15\u5165\u6DF7\u5408</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../mixin&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mixin<span class="token punctuation">]</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EC4\u4EF6\u4E2D\u6CA1\u6709\u7684\u4F7F\u7528\u6DF7\u5408\u4E2D\u7684\uFF0C\u7EC4\u4EF6\u4E2D\u6709\u7684\u4F7F\u7528\u7EC4\u4EF6\u4E2D\u7684</p><p>\u751F\u547D\u5468\u671F\u94A9\u5B50\u4E2D\u7684\u90FD\u4F1A\u6267\u884C\uFF0C\u4F18\u5148\u6267\u884C\u6DF7\u5408</p><h2 id="\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a> \u63D2\u4EF6</h2><p>\u7528\u4E8E\u589E\u5F3A Vue</p><p>\u662F\u5305\u542B install \u65B9\u6CD5\u7684\u4E00\u4E2A\u5BF9\u8C61\uFF0Cinstall \u65B9\u6CD5\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F<code>Vue</code>\uFF0C\u4EE5\u540E\u7684\u53C2\u6570\u662F\u4F7F\u7528\u8005\u4F20\u9012\u7684\u53C2\u6570</p><p>\u5B9A\u4E49\u63D2\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// plugins.js</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53EF\u4EE5\u5B9A\u4E49\u8FC7\u6EE4\u5668 \u5168\u5C40\u6307\u4EE4 \u6DF7\u5165 \u6DFB\u52A0\u5B9E\u4F8B\u65B9\u6CD5.....</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u63D2\u4EF6</p><p><code>Vue.use(plugins)</code></p>`,13),t=[p];function c(o,l){return s(),a("div",null,t)}const r=n(i,[["render",c],["__file","vue2.html.vue"]]);export{r as default};
