import{_ as s,o as n,c as a,d as e}from"./app.91a380bb.js";const t={},p=e(`<h1 id="\u6E32\u67D3\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3\u6A21\u5F0F" aria-hidden="true">#</a> \u6E32\u67D3\u6A21\u5F0F</h1><h2 id="\u4EC0\u4E48\u662F\u6E32\u67D3\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u6E32\u67D3\u6A21\u5F0F" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u6E32\u67D3\u6A21\u5F0F</h2><ul><li>\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u90FD\u80FD\u89E3\u91CA JavaScript \u4EE3\u7801\uFF0C\u90FD\u53EF\u4EE5\u5C06 Vue.js \u7EC4\u4EF6\u6E32\u67D3\u6210 HTML\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u79F0\u4E3A\u6E32\u67D3\u3002 <ul><li>\u5728\u5BA2\u6237\u7AEF\u5C06 Vue.js \u7EC4\u4EF6\u6E32\u67D3\u6210 HTML \u7684\u8FC7\u7A0B\u79F0\u4E3A\u5BA2\u6237\u7AEF\u6E32\u67D3\u3002</li><li>\u5728\u670D\u52A1\u5668\u5C06 Vue.js \u7EC4\u4EF6\u6E32\u67D3\u6210 HTML \u7684\u8FC7\u7A0B\u79F0\u4E3A\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\u3002</li></ul></li><li>Nuxt3 \u652F\u6301\u591A\u91CD\u6E32\u67D3\u6A21\u5F0F <ul><li>\u5BA2\u6237\u7AEF\u6E32\u67D3\uFF0CCSR,\u5C06 ssr \u8BBE\u7F6E\u4E3A false</li><li>\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\uFF0CSSR,\u5C06 ssr \u8BBE\u7F6E\u4E3A true</li><li>\u6DF7\u5408\u6E32\u67D3\u6A21\u5F0F(SSR | CSR | SSG | SWR),\u9700\u8981\u518D routeRule \u4E2D\u6839\u636E\u6BCF\u4E2A\u52A8\u6001\u8DEF\u7531\u914D\u7F6E\u4E0D\u540C\u7684\u6E32\u67D3\u6A21\u5F0F</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>SSG \u662F\u751F\u6210\u9759\u6001\u9875\u9762\uFF0C\u53EA\u4F1A\u751F\u6210\u4E00\u6B21\uFF0C\u4E0D\u4F1A\u518D\u6B21\u6E32\u67D3 SWR \u662F\u751F\u6210\u9759\u6001\u9875\u9762\uFF0C\u4F46\u662F\u4F1A\u5728\u6BCF\u6B21\u8BF7\u6C42\u65F6\u91CD\u65B0\u6E32\u67D3,\u53EF\u4EE5\u6307\u5B9A\u6E32\u67D3\u95F4\u9694</p></div><p><code>nuxt.config.ts</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>routeRules<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span> ssr<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// SSR \u6E32\u67D3,\u9ED8\u8BA4\u5C31\u662FSSR</span>
    <span class="token string-property property">&#39;/cart&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">static</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// SSG \u6E32\u67D3 \u53EA\u4F1A\u5728\u6784\u4EF6\u5F0F\u751F\u6210\u4E00\u6B21\u9759\u6001\u9875\u9762</span>
    <span class="token string-property property">&#39;/login&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span> swr<span class="token operator">:</span> <span class="token number">60</span><span class="token operator">*</span><span class="token number">10</span> <span class="token punctuation">}</span> <span class="token comment">// SWR \u6E32\u67D3\uFF0C\u591A\u6B21\u751F\u6210\u9759\u6001\u9875\u9762,10\u5206\u949F\u91CD\u65B0\u6E32\u67D3\u4E00\u6B21</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(l,r){return n(),a("div",null,o)}const u=s(t,[["render",c],["__file","randerMode.html.vue"]]);export{u as default};
