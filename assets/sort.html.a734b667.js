import{_ as n,o as s,c as a,d as t}from"./app.91a380bb.js";const p={},e=t(`<h1 id="\u4F7F\u7528-sort-\u5BF9\u6570\u7EC4-3-15-8-29-102-22-\u8FDB-\u884C\u6392\u5E8F-\u8F93\u51FA\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-sort-\u5BF9\u6570\u7EC4-3-15-8-29-102-22-\u8FDB-\u884C\u6392\u5E8F-\u8F93\u51FA\u7ED3\u679C" aria-hidden="true">#</a> \u4F7F\u7528 sort() \u5BF9\u6570\u7EC4 [3, 15, 8, 29, 102, 22] \u8FDB \u884C\u6392\u5E8F\uFF0C\u8F93\u51FA\u7ED3\u679C</h1><ul><li><code>[102, 15, 22, 29, 3, 8]</code></li></ul><p>\u6839\u636E MDN \u4E0A\u5BF9 Array.sort()\u7684\u89E3\u91CA\uFF0C\u9ED8\u8BA4\u7684\u6392\u5E8F\u65B9\u6CD5\u4F1A\u5C06\u6570\u7EC4\u5143\u7D20\u8F6C\u6362 \u4E3A\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u6BD4\u8F83\u5B57\u7B26\u4E32\u4E2D\u5B57\u7B26\u7684 UTF-16 \u7F16\u7801\u987A\u5E8F\u6765\u8FDB\u884C\u6392\u5E8F\u3002\u6240\u4EE5&#39;102&#39; \u4F1A \u6392\u5728 &#39;15&#39; \u524D\u9762\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6B63\u5E8F\u6392\u5217</span>
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">,</span> <span class="token number">102</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5012\u5E8F\u6392\u5217</span>
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">,</span> <span class="token number">102</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C<code>a-b &gt; 0</code>,\u5219a\u548Cb\u4EA4\u6362\u4F4D\u7F6E\u3002\u5F53\u7136\u8FD9\u6837\u5199\u51FA\u6765\u7684\u8BDD\u662F\u5347\u5E8F\u6392\u5217\u3002\u5982\u679C\u8981\u964D\u5E8F\u6392\u5219\u628Aa-b\u6539\u6210b-a\u5C31 \u53EF\u4EE5\u5B9E\u73B0\uFF0C\u5C31\u662F\u8BF4b\u5927\u4E8Ea\uFF0C\u5219b\u548Ca\u4EA4\u6362\u4F4D\u7F6E\uFF0C\u628A\u5927\u7684\u503C\u6392\u524D\u9762\u3002a\uFF0Cb\u7684\u503C\u5C31\u662F<code>\u4ECEarr[0]</code>,<code>arr[1]</code>\u5F00\u59CB\u6BD4\u8F83\u7684\uFF0C \u7C7B\u4F3C\u5192\u6CE1\u6392\u5E8F\u3002</p>`,5),o=[e];function c(u,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","sort.html.vue"]]);export{r as default};