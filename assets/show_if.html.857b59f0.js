import{_ as n,o as s,c as a,d as e}from"./app.91a380bb.js";const o={},t=e(`<h1 id="\u9762\u8BD5\u5B98-v-show-\u548C-v-if-\u6709\u4EC0\u4E48\u533A\u522B-\u4F7F\u7528\u573A\u666F\u5206\u522B\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-v-show-\u548C-v-if-\u6709\u4EC0\u4E48\u533A\u522B-\u4F7F\u7528\u573A\u666F\u5206\u522B\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1Av-show \u548C v-if \u6709\u4EC0\u4E48\u533A\u522B\uFF1F\u4F7F\u7528\u573A\u666F\u5206\u522B\u662F\u4EC0\u4E48\uFF1F</h1><p><img src="https://static.vue-js.com/d21c3c50-3acb-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001v-show-\u4E0E-v-if-\u7684\u5171\u540C\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001v-show-\u4E0E-v-if-\u7684\u5171\u540C\u70B9" aria-hidden="true">#</a> \u4E00\u3001v-show \u4E0E v-if \u7684\u5171\u540C\u70B9</h2><p>\u6211\u4EEC\u90FD\u77E5\u9053\u5728 <code>vue</code> \u4E2D <code>v-show </code> \u4E0E <code>v-if</code> \u7684\u4F5C\u7528\u6548\u679C\u662F\u76F8\u540C\u7684(\u4E0D\u542B v-else)\uFF0C\u90FD\u80FD\u63A7\u5236\u5143\u7D20\u5728\u9875\u9762\u662F\u5426\u663E\u793A</p><p>\u5728\u7528\u6CD5\u4E0A\u4E5F\u662F\u76F8\u540C\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>Model v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">&quot;isShow&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>Model v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;isShow&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5F53\u8868\u8FBE\u5F0F\u4E3A<code>true</code>\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u5360\u636E\u9875\u9762\u7684\u4F4D\u7F6E</li><li>\u5F53\u8868\u8FBE\u5F0F\u90FD\u4E3A<code>false</code>\u65F6\uFF0C\u90FD\u4E0D\u4F1A\u5360\u636E\u9875\u9762\u4F4D\u7F6E</li></ul><h2 id="\u4E8C\u3001v-show-\u4E0E-v-if-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001v-show-\u4E0E-v-if-\u7684\u533A\u522B" aria-hidden="true">#</a> \u4E8C\u3001v-show \u4E0E v-if \u7684\u533A\u522B</h2><ul><li>\u63A7\u5236\u624B\u6BB5\u4E0D\u540C</li><li>\u7F16\u8BD1\u8FC7\u7A0B\u4E0D\u540C</li><li>\u7F16\u8BD1\u6761\u4EF6\u4E0D\u540C</li></ul><p>\u63A7\u5236\u624B\u6BB5\uFF1A<code>v-show</code>\u9690\u85CF\u5219\u662F\u4E3A\u8BE5\u5143\u7D20\u6DFB\u52A0<code>css--display:none</code>\uFF0C<code>dom</code>\u5143\u7D20\u4F9D\u65E7\u8FD8\u5728\u3002<code>v-if</code>\u663E\u793A\u9690\u85CF\u662F\u5C06<code>dom</code>\u5143\u7D20\u6574\u4E2A\u6DFB\u52A0\u6216\u5220\u9664</p><p>\u7F16\u8BD1\u8FC7\u7A0B\uFF1A<code>v-if</code>\u5207\u6362\u6709\u4E00\u4E2A\u5C40\u90E8\u7F16\u8BD1/\u5378\u8F7D\u7684\u8FC7\u7A0B\uFF0C\u5207\u6362\u8FC7\u7A0B\u4E2D\u5408\u9002\u5730\u9500\u6BC1\u548C\u91CD\u5EFA\u5185\u90E8\u7684\u4E8B\u4EF6\u76D1\u542C\u548C\u5B50\u7EC4\u4EF6\uFF1B<code>v-show</code>\u53EA\u662F\u7B80\u5355\u7684\u57FA\u4E8E css \u5207\u6362</p><p>\u7F16\u8BD1\u6761\u4EF6\uFF1A<code>v-if</code>\u662F\u771F\u6B63\u7684\u6761\u4EF6\u6E32\u67D3\uFF0C\u5B83\u4F1A\u786E\u4FDD\u5728\u5207\u6362\u8FC7\u7A0B\u4E2D\u6761\u4EF6\u5757\u5185\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u548C\u5B50\u7EC4\u4EF6\u9002\u5F53\u5730\u88AB\u9500\u6BC1\u548C\u91CD\u5EFA\u3002\u53EA\u6709\u6E32\u67D3\u6761\u4EF6\u4E3A\u5047\u65F6\uFF0C\u5E76\u4E0D\u505A\u64CD\u4F5C\uFF0C\u76F4\u5230\u4E3A\u771F\u624D\u6E32\u67D3</p><ul><li><p><code>v-show</code> \u7531<code>false</code>\u53D8\u4E3A<code>true</code>\u7684\u65F6\u5019\u4E0D\u4F1A\u89E6\u53D1\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F</p></li><li><p><code>v-if</code>\u7531<code>false</code>\u53D8\u4E3A<code>true</code>\u7684\u65F6\u5019\uFF0C\u89E6\u53D1\u7EC4\u4EF6\u7684<code>beforeCreate</code>\u3001<code>create</code>\u3001<code>beforeMount</code>\u3001<code>mounted</code>\u94A9\u5B50\uFF0C\u7531<code>true</code>\u53D8\u4E3A<code>false</code>\u7684\u65F6\u5019\u89E6\u53D1\u7EC4\u4EF6\u7684<code>beforeDestory</code>\u3001<code>destoryed</code>\u65B9\u6CD5</p></li></ul><p>\u6027\u80FD\u6D88\u8017\uFF1A<code>v-if</code>\u6709\u66F4\u9AD8\u7684\u5207\u6362\u6D88\u8017\uFF1B<code>v-show</code>\u6709\u66F4\u9AD8\u7684\u521D\u59CB\u6E32\u67D3\u6D88\u8017\uFF1B</p><h2 id="\u4E09\u3001v-show-\u4E0E-v-if-\u539F\u7406\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001v-show-\u4E0E-v-if-\u539F\u7406\u5206\u6790" aria-hidden="true">#</a> \u4E09\u3001v-show \u4E0E v-if \u539F\u7406\u5206\u6790</h2><p>\u5177\u4F53\u89E3\u6790\u6D41\u7A0B\u8FD9\u91CC\u4E0D\u5C55\u5F00\u8BB2\uFF0C\u5927\u81F4\u6D41\u7A0B\u5982\u4E0B</p><ul><li>\u5C06\u6A21\u677F<code>template</code>\u8F6C\u4E3A<code>ast</code>\u7ED3\u6784\u7684<code>JS</code>\u5BF9\u8C61</li><li>\u7528<code>ast</code>\u5F97\u5230\u7684<code>JS</code>\u5BF9\u8C61\u62FC\u88C5<code>render</code>\u548C<code>staticRenderFns</code>\u51FD\u6570</li><li><code>render</code>\u548C<code>staticRenderFns</code>\u51FD\u6570\u88AB\u8C03\u7528\u540E\u751F\u6210\u865A\u62DF<code>VNODE</code>\u8282\u70B9\uFF0C\u8BE5\u8282\u70B9\u5305\u542B\u521B\u5EFA<code>DOM</code>\u8282\u70B9\u6240\u9700\u4FE1\u606F</li><li><code>vm.patch</code>\u51FD\u6570\u901A\u8FC7\u865A\u62DF<code>DOM</code>\u7B97\u6CD5\u5229\u7528<code>VNODE</code>\u8282\u70B9\u521B\u5EFA\u771F\u5B9E<code>DOM</code>\u8282\u70B9</li></ul><h3 id="v-show-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#v-show-\u539F\u7406" aria-hidden="true">#</a> v-show \u539F\u7406</h3><p>\u4E0D\u7BA1\u521D\u59CB\u6761\u4EF6\u662F\u4EC0\u4E48\uFF0C\u5143\u7D20\u603B\u662F\u4F1A\u88AB\u6E32\u67D3</p><p>\u6211\u4EEC\u770B\u4E00\u4E0B\u5728<code>vue</code>\u4E2D\u662F\u5982\u4F55\u5B9E\u73B0\u7684</p><p>\u4EE3\u7801\u5F88\u597D\u7406\u89E3\uFF0C\u6709<code>transition</code>\u5C31\u6267\u884C<code>transition</code>\uFF0C\u6CA1\u6709\u5C31\u76F4\u63A5\u8BBE\u7F6E<code>display</code>\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// https://github.com/vuejs/vue-next/blob/3cd30c5245da0733f9eb6f29d220f39c46518162/packages/runtime-dom/src/directives/vShow.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">vShow</span><span class="token operator">:</span> ObjectDirective<span class="token operator">&lt;</span>VShowElement<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> transition <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>_vod <span class="token operator">=</span> el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">===</span> <span class="token string">&#39;none&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;&#39;</span> <span class="token operator">:</span> el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display
    <span class="token keyword">if</span> <span class="token punctuation">(</span>transition <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      transition<span class="token punctuation">.</span><span class="token function">beforeEnter</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">setDisplay</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> transition <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>transition <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      transition<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">updated</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> <span class="token punctuation">{</span> value<span class="token punctuation">,</span> oldValue <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> transition <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeUnmount</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setDisplay</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-if-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#v-if-\u539F\u7406" aria-hidden="true">#</a> v-if \u539F\u7406</h3><p><code>v-if</code>\u5728\u5B9E\u73B0\u4E0A\u6BD4<code>v-show</code>\u8981\u590D\u6742\u7684\u591A\uFF0C\u56E0\u4E3A\u8FD8\u6709<code>else</code> <code>else-if</code> \u7B49\u6761\u4EF6\u9700\u8981\u5904\u7406\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4E5F\u53EA\u6458\u6284\u6E90\u7801\u4E2D\u5904\u7406 <code>v-if</code> \u7684\u4E00\u5C0F\u90E8\u5206</p><p>\u8FD4\u56DE\u4E00\u4E2A<code>node</code>\u8282\u70B9\uFF0C<code>render</code>\u51FD\u6570\u901A\u8FC7\u8868\u8FBE\u5F0F\u7684\u503C\u6765\u51B3\u5B9A\u662F\u5426\u751F\u6210<code>DOM</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// https://github.com/vuejs/vue-next/blob/cdc9f336fd/packages/compiler-core/src/transforms/vIf.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> transformIf <span class="token operator">=</span> <span class="token function">createStructuralDirectiveTransform</span><span class="token punctuation">(</span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(if|else|else-if)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> dir<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">processIf</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> dir<span class="token punctuation">,</span> context<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">ifNode<span class="token punctuation">,</span> branch<span class="token punctuation">,</span> isRoot</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          ifNode<span class="token punctuation">.</span>codegenNode <span class="token operator">=</span> <span class="token function">createCodegenNodeForBranch</span><span class="token punctuation">(</span>
            branch<span class="token punctuation">,</span>
            key<span class="token punctuation">,</span>
            context
          <span class="token punctuation">)</span> <span class="token keyword">as</span> IfConditionalExpression
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// attach this branch&#39;s codegen node to the v-if root.</span>
          <span class="token keyword">const</span> parentCondition <span class="token operator">=</span> <span class="token function">getParentCondition</span><span class="token punctuation">(</span>ifNode<span class="token punctuation">.</span>codegenNode<span class="token operator">!</span><span class="token punctuation">)</span>
          parentCondition<span class="token punctuation">.</span>alternate <span class="token operator">=</span> <span class="token function">createCodegenNodeForBranch</span><span class="token punctuation">(</span>
            branch<span class="token punctuation">,</span>
            key <span class="token operator">+</span> ifNode<span class="token punctuation">.</span>branches<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>
            context
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56DB\u3001v-show-\u4E0E-v-if-\u7684\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001v-show-\u4E0E-v-if-\u7684\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u56DB\u3001v-show \u4E0E v-if \u7684\u4F7F\u7528\u573A\u666F</h2><p><code>v-if</code> \u4E0E <code>v-show</code> \u90FD\u80FD\u63A7\u5236<code>dom</code>\u5143\u7D20\u5728\u9875\u9762\u7684\u663E\u793A</p><p><code>v-if</code> \u76F8\u6BD4 <code>v-show</code> \u5F00\u9500\u66F4\u5927\u7684\uFF08\u76F4\u63A5\u64CD\u4F5C<code>dom</code>\u8282\u70B9\u589E\u52A0\u4E0E\u5220\u9664\uFF09</p><p>\u5982\u679C\u9700\u8981\u975E\u5E38\u9891\u7E41\u5730\u5207\u6362\uFF0C\u5219\u4F7F\u7528 v-show \u8F83\u597D</p><p>\u5982\u679C\u5728\u8FD0\u884C\u65F6\u6761\u4EF6\u5F88\u5C11\u6539\u53D8\uFF0C\u5219\u4F7F\u7528 v-if \u8F83\u597D</p>`,31),p=[t];function c(i,l){return s(),a("div",null,p)}const d=n(o,[["render",c],["__file","show_if.html.vue"]]);export{d as default};