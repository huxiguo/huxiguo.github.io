import{_ as n,o as s,c as a,d as e}from"./app.91a380bb.js";const t={},p=e(`<h1 id="\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a> \u5F00\u59CB</h1><h2 id="\u5BFC\u5165\u53EF\u89C6\u5316\u56FE\u8868\u5305" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u53EF\u89C6\u5316\u56FE\u8868\u5305" aria-hidden="true">#</a> \u5BFC\u5165\u53EF\u89C6\u5316\u56FE\u8868\u5305</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> pyecharts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5BFC\u5165\u6298\u7EBF\u56FE\u5BF9\u8C61</span>
<span class="token keyword">from</span> pyecharts<span class="token punctuation">.</span>charts <span class="token keyword">import</span> Line
<span class="token keyword">from</span> pyecharts<span class="token punctuation">.</span>options <span class="token keyword">import</span> TitleOpts

<span class="token comment"># \u6298\u7EBF\u56FE\u5BF9\u8C61</span>
line <span class="token operator">=</span> Line<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># X\u8F74\u6570\u636E</span>
line<span class="token punctuation">.</span>add_xaxis<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;\u4E2D\u56FD&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u7F8E\u56FD&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u82F1\u56FD&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># Y\u8F74\u6570\u636E</span>
line<span class="token punctuation">.</span>add_yaxis<span class="token punctuation">(</span><span class="token string">&#39;GDP&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># \u914D\u7F6E\u9879</span>
line<span class="token punctuation">.</span>set_global_opts<span class="token punctuation">(</span>
    title_opts<span class="token operator">=</span>TitleOpts<span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">&#39;GDP\u5C55\u793A&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token comment"># \u751F\u6210\u56FE\u8868</span>
line<span class="token punctuation">.</span>render<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[p];function c(o,l){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","index.html.vue"]]);export{d as default};
