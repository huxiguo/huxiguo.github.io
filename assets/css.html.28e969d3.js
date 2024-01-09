import{_ as s,o as n,c as a,d as e}from"./app.91a380bb.js";const t={},c=e(`<h1 id="\u5B9A\u4E49\u5168\u5C40\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u5168\u5C40\u6837\u5F0F" aria-hidden="true">#</a> \u5B9A\u4E49\u5168\u5C40\u6837\u5F0F</h1><h2 id="\u4F7F\u7528-scss" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-scss" aria-hidden="true">#</a> \u4F7F\u7528 scss</h2><p>\u5728<code>nuxt.config.ts</code>\u914D\u7F6E</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// css</span>
  css<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@/assets/style/main.css&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;@/assets/style/global.scss&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  vite<span class="token operator">:</span> <span class="token punctuation">{</span>
    css<span class="token operator">:</span> <span class="token punctuation">{</span>
      preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
        scss<span class="token operator">:</span> <span class="token punctuation">{</span>
          additionalData<span class="token operator">:</span> <span class="token string">&#39;@use &quot;~/assets/style/variables.scss&quot; as *;&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[c];function o(p,l){return n(),a("div",null,i)}const d=s(t,[["render",o],["__file","css.html.vue"]]);export{d as default};
