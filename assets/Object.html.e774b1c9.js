import{_ as n,o as s,c as a,d as e}from"./app.91a380bb.js";const t={},p=e(`<h1 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h1><h2 id="object-defineproperty" tabindex="-1"><a class="header-anchor" href="#object-defineproperty" aria-hidden="true">#</a> Object.defineProperty()</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">18</span>
<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;\u7537&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u901A\u8FC7 Object.defineProperty(object, key, {}) \u5B9E\u73B0\u6570\u636E\u7684\u7ED1\u5B9A</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> age
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD9\u6837\u6DFB\u52A0\u7684age\u4E0D\u53EF\u679A\u4E3E\u4E0D\u53EF\u4FEE\u6539\u5220\u9664</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> age<span class="token punctuation">,</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u63A7\u5236\u5C5E\u6027\u662F\u5426\u53EF\u4EE5\u679A\u4E3E</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u63A7\u5236\u662F\u5426\u53EF\u4EE5\u4FEE\u6539</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u63A7\u5236\u662F\u5426\u53EF\u4EE5\u5220\u9664</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u901A\u8FC7getter\u548Csetter\u5B9E\u73B0\u54CD\u5E94\u7ED1\u5B9A</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5F53\u6709\u4EBA\u8BFB\u53D6person\u7684age\u5C5E\u6027\u65F6getter \u4F1A\u88AB\u8C03\u7528,\u8FD4\u56DE\u503C\u5C31\u662Fage\u7684\u503C</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> age
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5F53\u6709\u4EBA\u4FEE\u6539person\u7684age\u5C5E\u6027\u65F6setter \u4F1A\u88AB\u8C03\u7528,\u6536\u5230\u7684\u53C2\u6570\u5C31\u662F\u5177\u4F53\u503C</span>
  <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
    age<span class="token operator">=</span>value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","Object.html.vue"]]);export{u as default};
