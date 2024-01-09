import{_ as s,o as n,c as a,d as e}from"./app.91a380bb.js";const p={},t=e(`<h1 id="\u901A\u8FC7-props-\u4F20\u9012\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7-props-\u4F20\u9012\u6570\u636E" aria-hidden="true">#</a> \u901A\u8FC7 Props \u4F20\u9012\u6570\u636E</h1><h2 id="\u4F7F\u7528-props" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-props" aria-hidden="true">#</a> \u4F7F\u7528 props</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> people <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>People <span class="token punctuation">{</span><span class="token operator">...</span>people<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>

<span class="token comment">// People \u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>\u59D3\u540D<span class="token operator">:</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>\u6027\u522B<span class="token operator">:</span><span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>\u5E74\u9F84<span class="token operator">:</span><span class="token punctuation">{</span>sex<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p><code>...</code>\u4E0D\u80FD\u5728\u5BF9\u8C61\u4E0A\u4F7F\u7528</p><p>\u5728 ES6 \u4E2D <code>const obj2={...obj1}</code> \u662F\u590D\u5236\u5BF9\u8C61</p><p><code>&lt;People {...people} /&gt;</code> \u8FD9\u662F react \u4E2D\u89C4\u5B9A\u7684</p></div><p>\u{1F534} \u51FD\u6570\u5F0F\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7<code>props</code>\u63A5\u53D7\u4F20\u5165\u7684\u503C</p><h2 id="\u5BF9-props-\u8FDB\u884C\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u5BF9-props-\u8FDB\u884C\u9650\u5236" aria-hidden="true">#</a> \u5BF9 props \u8FDB\u884C\u9650\u5236</h2><p>\u8BBE\u7F6E\u7C7B\u578B\u548C\u5FC5\u8981\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5BFC\u5165 prop-types</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">&#39;prop-types&#39;</span>

<span class="token doc-comment comment">/**
 *name:\u4F20\u5165\u7684\u53C2\u6570
 *string\uFF1A\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u7C7B\u578B
 *isRequired\uFF1A\u5FC5\u586B
 */</span>
<span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u9ED8\u8BA4\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[t];function r(l,c){return n(),a("div",null,o)}const d=s(p,[["render",r],["__file","Props.html.vue"]]);export{d as default};