import{_ as n,o as a,c as s,d as t}from"./app.91a380bb.js";const e={},p=t(`<h1 id="\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a> \u63D2\u4EF6</h1><h2 id="\u521B\u5EFA\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u63D2\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u63D2\u4EF6</h2><ul><li>\u5728 <code>plugins</code> \u6587\u4EF6\u5939\u4E2D\u521B\u5EFA <code>my-plugin.ts</code> \u6587\u4EF6</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtPlugin</span><span class="token punctuation">(</span>nuxtApp <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    provide<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">formatData</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">formatData: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728\u9875\u9762\u4E2D\u4F7F\u7528\u63D2\u4EF6</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> nuxtApp <span class="token operator">=</span> <span class="token function">useNuxtApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
nuxtApp<span class="token punctuation">.</span><span class="token function">$formatData</span><span class="token punctuation">(</span><span class="token string">&#39;12321&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CE8\u518C\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u63D2\u4EF6" aria-hidden="true">#</a> \u6CE8\u518C\u63D2\u4EF6</h2><ul><li>\u53EA\u6709\u4F4D\u4E8E plugins/ \u76EE\u5F55\u9876\u5C42\u7684\u6587\u4EF6\uFF08\u6216\u4EFB\u4F55\u5B50\u76EE\u5F55\u4E2D\u7684<code>index</code>\uFF09\u624D\u4F1A\u88AB\u6CE8\u518C\u4E3A\u63D2\u4EF6\u3002</li><li>\u53EF\u4EE5\u6307\u5B9A <code>.server</code> \u6216 <code>.client</code> \u6269\u5C55\u540D\u6765\u9650\u5236\u63D2\u4EF6\u4EC5\u5728\u670D\u52A1\u5668\u7AEF\u6216\u5BA2\u6237\u7AEF\u8FD0\u884C\u3002</li><li>\u7ED9\u63D2\u4EF6\u7528<code>1.xxx.</code>\u5F00\u5934\u53EF\u4EE5\u6307\u5B9A\u63D2\u4EF6\u6CE8\u518C\u987A\u5E8F</li></ul>`,8),o=[p];function i(c,l){return a(),s("div",null,o)}const r=n(e,[["render",i],["__file","plugin.html.vue"]]);export{r as default};
