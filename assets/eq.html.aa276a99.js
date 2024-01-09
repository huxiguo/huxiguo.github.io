import{_ as n,o as s,c as a,d as e}from"./app.91a380bb.js";const p={},o=e(`<h1 id="\u4E0E-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E0E-\u7684\u533A\u522B" aria-hidden="true">#</a> <code>===</code> \u4E0E <code>==</code>\u7684\u533A\u522B</h1><h2 id="\u7B49\u53F7\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u7B49\u53F7\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u7B49\u53F7\u8FD0\u7B97\u7B26</h2><p>\u6BD4\u8F83\u4E4B\u524D\u4F1A\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362</p><p>\u6BD4\u8F83\u89C4\u5219\uFF1A</p><ol><li>\u5982\u679C\u4EFB\u610F\u64CD\u4F5C\u6570\u4E3A\u5E03\u5C14\uFF0C\u8F6C\u6362\u4E3A\u6570\u503C</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">false</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u64CD\u4F5C\u6570\u4E3A\u5B57\u7B26\u4E32\u548C\u6570\u5B57\uFF0C\u8F6C\u6362\u4E3A\u6570\u503C</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u5982\u679C\u4E00\u4E2A\u64CD\u4F5C\u6570\u662F\u5BF9\u8C61\uFF0C\u53E6\u4E00\u4E2A\u64CD\u4F5C\u6570\u4E0D\u662F\uFF0C\u5219\u8C03\u7528\u5BF9\u8C61\u7684 valueOf() \u65B9\u6CD5\u53D6\u5F97\u5176\u539F\u59CB\u503C\uFF0C\u518D\u6839\u636E\u524D\u9762\u7684\u89C4\u5219\u8FDB\u884C\u6BD4\u8F83</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">valueOf</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;obj&quot;</span><span class="token punctuation">,</span> obj <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;obj&quot;</span><span class="token punctuation">,</span> obj <span class="token operator">==</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u5982\u679C\u4E24\u4E2A\u64CD\u4F5C\u6570\u90FD\u662F\u5BF9\u8C61\uFF0C\u5219\u6BD4\u8F83\u5B83\u4EEC\u662F\u4E0D\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002\u5982\u679C\u4E24\u4E2A\u64CD\u4F5C\u6570\u90FD\u6307\u5411\u540C\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5219\u76F8\u7B49\u64CD\u4F5C\u7B26\u8FD4\u56DE true</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> xxx <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> xxx <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1 <span class="token operator">==</span> obj2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj4 <span class="token operator">=</span> obj3<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj3 <span class="token operator">==</span> obj4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>null \u548C undefined \u76F8\u7B49 v</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>\u5982\u679C\u6709\u4EFB\u4E00\u64CD\u4F5C\u6570\u662F NaN \uFF0C\u5219\u76F8\u7B49\u64CD\u4F5C\u7B26\u8FD4\u56DE false</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">NaN</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5168\u7B49\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5168\u7B49\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u5168\u7B49\u8FD0\u7B97\u7B26</h2><p>\u64CD\u4F5C\u6570\u7684\u7C7B\u578B\u548C\u6570\u503C\u5FC5\u987B\u5B8C\u5168\u76F8\u7B49\u624D\u8FD4\u56DE true</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token string">&quot;55&quot;</span> <span class="token operator">===</span> <span class="token number">55</span><span class="token punctuation">;</span> <span class="token comment">// false\uFF0C\u4E0D\u76F8\u7B49\uFF0C\u56E0\u4E3A\u6570\u636E\u7C7B\u578B\u4E0D\u540C</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token number">55</span> <span class="token operator">===</span> <span class="token number">55</span><span class="token punctuation">;</span> <span class="token comment">// true\uFF0C\u76F8\u7B49\uFF0C\u56E0\u4E3A\u6570\u636E\u7C7B\u578B\u76F8\u540C\u503C\u4E5F\u76F8\u540C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>null \u548C undefined \u4E0E\u81EA\u8EAB\u76F8\u7B49 \uFF0CNaN \u4E0E\u81EA\u8EAB\u4E0D\u76F8\u7B49</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
<span class="token keyword">let</span> result3 <span class="token operator">=</span> <span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u6BD4\u8F83" aria-hidden="true">#</a> \u6BD4\u8F83</h2><p><code>==</code>\u4F1A\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\uFF0C<code>===</code>\u4E0D\u4F1A\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword">let</span> result3 <span class="token operator">=</span> <span class="token number">NaN</span> <span class="token operator">==</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword">let</span> result4 <span class="token operator">=</span> <span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6BD4\u8F83<code>null</code>\u7684\u60C5\u51B5\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4E00\u822C\u4F7F\u7528\u76F8\u7B49\u64CD\u4F5C\u7B26<code>==</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>x <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6267\u884C</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\uFF0C\u9664\u4E86\u5728\u6BD4\u8F83\u5BF9\u8C61\u5C5E\u6027\u4E3A<code>null</code>\u6216\u8005<code>undefined</code>\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u76F8\u7B49\u64CD\u4F5C\u7B26<code>\uFF08==\uFF09</code>\uFF0C\u5176\u4ED6\u60C5\u51B5\u5EFA\u8BAE\u4E00\u5F8B\u4F7F\u7528\u5168\u7B49\u64CD\u4F5C\u7B26<code>\uFF08===\uFF09</code></p>`,27),t=[o];function c(l,i){return s(),a("div",null,t)}const r=n(p,[["render",c],["__file","eq.html.vue"]]);export{r as default};