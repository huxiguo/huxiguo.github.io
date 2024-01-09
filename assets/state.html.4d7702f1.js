import{_ as n,o as s,c as a,d as t}from"./app.91a380bb.js";const e={},p=t(`<h1 id="\u6709\u72B6\u6001\u7EC4\u4EF6\u548C\u65E0\u72B6\u6001\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6709\u72B6\u6001\u7EC4\u4EF6\u548C\u65E0\u72B6\u6001\u7EC4\u4EF6" aria-hidden="true">#</a> \u6709\u72B6\u6001\u7EC4\u4EF6\u548C\u65E0\u72B6\u6001\u7EC4\u4EF6</h1><p>\u{1F7E2} \u51FD\u6570\u7EC4\u4EF6 -&gt; \u65E0\u72B6\u6001\u7EC4\u4EF6</p><p>\u{1F7E2} \u7C7B\u7EC4\u4EF6 -&gt; \u6709\u72B6\u6001\u7EC4\u4EF6</p><p>\u{1F7E2} \u72B6\u6001(state) -&gt; \u6570\u636E</p><p>\u{1F7E2} \u51FD\u6570\u7EC4\u4EF6\u6CA1\u6709\u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6570\u636E\u5C55\u793A(\u9759)</p><p>\u{1F7E2} \u7C7B\u7EC4\u4EF6\u6709\u72B6\u6001\uFF0C\u8D1F\u8D23\u66F4\u65B0 UI</p><h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> <code>state</code></h2><p>\u{1F7E2} \u7EC4\u4EF6\u5185\u90E8\u79C1\u6709\u7684\u6570\u636E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">State1</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>count\uFF1A<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setstate" tabindex="-1"><a class="header-anchor" href="#setstate" aria-hidden="true">#</a> <code>setState()</code></h2><p>\u{1F7E2} \u8BED\u6CD5 <code>this.setState({\u8981\u4FEE\u6539\u7684\u6570\u636E})</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8B\u4EF6\u7ED1\u5B9Athis" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u7ED1\u5B9Athis" aria-hidden="true">#</a> \u4E8B\u4EF6\u7ED1\u5B9A<code>this</code></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">State1</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>count\uFF1A<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&gt;</span>
          <span class="token operator">+</span><span class="token number">1</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u628A\u4E1A\u52A1\u903B\u8F91\u62BD\u79BB\u5355\u72EC\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">State1</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
  <span class="token function-variable function">onIncrement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>count\uFF1A<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onIncrement<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u{1F7E5} \u603B\u7ED3</h2><ol><li>state \u662F\u7EC4\u4EF6\u6700\u91CD\u8981\u7684\u5C5E\u6027\uFF0C\u503C\u662F\u5BF9\u8C61</li><li>\u901A\u8FC7\u66F4\u65B0\u7EC4\u4EF6\u7684 state\uFF0C\u66F4\u65B0\u9875\u9762\u663E\u793A</li><li>\u7EC4\u4EF6\u4E2D\u7684 render \u65B9\u6CD5\u7684 <code>this</code> \u4E3A\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u5BF9\u8C61</li><li>\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u65B9\u6CD5\u7684<code>this</code>\u4E3A<code>undefined</code><ul><li>\u901A\u8FC7<code>bind</code>\u6539\u53D8<code>this</code>\u7ED1\u5B9A</li><li>\u4F7F\u7528\u7BAD\u5934\u51FD\u6570</li></ul></li><li>\u4FEE\u6539\u6570\u636E\u4F7F\u7528<code>setState</code></li></ol>`,18),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","state.html.vue"]]);export{u as default};