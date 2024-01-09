import{_ as n,o as s,c as a,d as e}from"./app.91a380bb.js";const p={},t=e(`<h1 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> <code>session</code></h1><h2 id="\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D" aria-hidden="true">#</a> \u4E0B\u8F7D</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> express-session <span class="token parameter variable">--save</span>

<span class="token function">pnpm</span> <span class="token function">add</span> @types/express-session <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NestFactory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.module&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VersioningType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> session <span class="token keyword">from</span> <span class="token string">&#39;express-session&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">await</span> NestFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
  app<span class="token punctuation">.</span><span class="token function">enableVersioning</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> VersioningType<span class="token punctuation">.</span><span class="token constant">URI</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
    <span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      secret<span class="token operator">:</span> <span class="token string">&#39;hu888888&#39;</span><span class="token punctuation">,</span>
      rolling<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>session \u53C2\u6570\u914D\u7F6E</p><p>| secret | \u751F\u6210\u670D\u52A1\u5668\u7AEFsession\u7B7E\u540D | | :----- |: ------------------------------------------ | | name | \u5BA2\u6237\u7AEFcookie\u540D\u5B57 | | cookie | \u8BBE\u7F6E\u8FD4\u56DE\u524D\u7AEF\u7684key | | rolling | \u6BCF\u6B21\u8BF7\u6C42\u65F6\u5F3A\u5236\u8BBE\u7F6Ecookie,\u91CD\u7F6Ecookie\u8FC7\u671F\u65F6\u95F4 |</p>`,7),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","session.html.vue"]]);export{r as default};
