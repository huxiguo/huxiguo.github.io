import{_ as n,o as s,c as a,d as e}from"./app.91a380bb.js";const p={},t=e(`<h1 id="\u9762\u8BD5\u5B98-\u5982\u4F55\u63D0\u9AD8-webpack-\u7684\u6784\u5EFA\u901F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u5982\u4F55\u63D0\u9AD8-webpack-\u7684\u6784\u5EFA\u901F\u5EA6" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u5982\u4F55\u63D0\u9AD8 webpack \u7684\u6784\u5EFA\u901F\u5EA6\uFF1F</h1><p><img src="https://static.vue-js.com/3a1b8620-b01b-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u80CC\u666F" aria-hidden="true">#</a> \u4E00\u3001\u80CC\u666F</h2><p>\u968F\u7740\u6211\u4EEC\u7684\u9879\u76EE\u6D89\u53CA\u5230\u9875\u9762\u8D8A\u6765\u8D8A\u591A\uFF0C\u529F\u80FD\u548C\u4E1A\u52A1\u4EE3\u7801\u4E5F\u4F1A\u968F\u7740\u8D8A\u591A\uFF0C\u76F8\u5E94\u7684 <code>webpack</code> \u7684\u6784\u5EFA\u65F6\u95F4\u4E5F\u4F1A\u8D8A\u6765\u8D8A\u4E45</p><p>\u6784\u5EFA\u65F6\u95F4\u4E0E\u6211\u4EEC\u65E5\u5E38\u5F00\u53D1\u6548\u7387\u5BC6\u5207\u76F8\u5173\uFF0C\u5F53\u6211\u4EEC\u672C\u5730\u5F00\u53D1\u542F\u52A8 <code>devServer</code> \u6216\u8005 <code>build</code> \u7684\u65F6\u5019\uFF0C\u5982\u679C\u65F6\u95F4\u8FC7\u957F\uFF0C\u4F1A\u5927\u5927\u964D\u4F4E\u6211\u4EEC\u7684\u5DE5\u4F5C\u6548\u7387</p><p>\u6240\u4EE5\uFF0C\u4F18\u5316<code>webpack</code> \u6784\u5EFA\u901F\u5EA6\u662F\u5341\u5206\u91CD\u8981\u7684\u73AF\u8282</p><h2 id="\u4E8C\u3001\u5982\u4F55\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u4F18\u5316" aria-hidden="true">#</a> \u4E8C\u3001\u5982\u4F55\u4F18\u5316</h2><p>\u5E38\u89C1\u7684\u63D0\u5347\u6784\u5EFA\u901F\u5EA6\u7684\u624B\u6BB5\u6709\u5982\u4E0B\uFF1A</p><ul><li>\u4F18\u5316 loader \u914D\u7F6E</li><li>\u5408\u7406\u4F7F\u7528 resolve.extensions</li><li>\u4F18\u5316 resolve.modules</li><li>\u4F18\u5316 resolve.alias</li><li>\u4F7F\u7528 DLLPlugin \u63D2\u4EF6</li><li>\u4F7F\u7528 cache-loader</li><li>terser \u542F\u52A8\u591A\u7EBF\u7A0B</li><li>\u5408\u7406\u4F7F\u7528 sourceMap</li></ul><h3 id="\u4F18\u5316-loader-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316-loader-\u914D\u7F6E" aria-hidden="true">#</a> \u4F18\u5316 loader \u914D\u7F6E</h3><p>\u5728\u4F7F\u7528<code>loader</code>\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E<code>include</code>\u3001<code>exclude</code>\u3001<code>test</code>\u5C5E\u6027\u6765\u5339\u914D\u6587\u4EF6\uFF0C\u63A5\u89E6<code>include</code>\u3001<code>exclude</code>\u89C4\u5B9A\u54EA\u4E9B\u5339\u914D\u5E94\u7528<code>loader</code></p><p>\u5982\u91C7\u7528 ES6 \u7684\u9879\u76EE\u4E3A\u4F8B\uFF0C\u5728\u914D\u7F6E <code>babel-loader </code>\u65F6\uFF0C\u53EF\u4EE5\u8FD9\u6837\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u9879\u76EE\u6E90\u7801\u4E2D\u53EA\u6709 js \u6587\u4EF6\u5C31\u4E0D\u8981\u5199\u6210 /\\.jsx?$/\uFF0C\u63D0\u5347\u6B63\u5219\u8868\u8FBE\u5F0F\u6027\u80FD</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// babel-loader \u652F\u6301\u7F13\u5B58\u8F6C\u6362\u51FA\u7684\u7ED3\u679C\uFF0C\u901A\u8FC7 cacheDirectory \u9009\u9879\u5F00\u542F</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;babel-loader?cacheDirectory&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u53EA\u5BF9\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 src \u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u91C7\u7528 babel-loader</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5408\u7406\u4F7F\u7528-resolve-extensions" tabindex="-1"><a class="header-anchor" href="#\u5408\u7406\u4F7F\u7528-resolve-extensions" aria-hidden="true">#</a> \u5408\u7406\u4F7F\u7528 resolve.extensions</h3><p>\u5728\u5F00\u53D1\u4E2D\u6211\u4EEC\u4F1A\u6709\u5404\u79CD\u5404\u6837\u7684\u6A21\u5757\u4F9D\u8D56\uFF0C\u8FD9\u4E9B\u6A21\u5757\u53EF\u80FD\u6765\u81EA\u4E8E\u81EA\u5DF1\u7F16\u5199\u7684\u4EE3\u7801\uFF0C\u4E5F\u53EF\u80FD\u6765\u81EA\u7B2C\u4E09\u65B9\u5E93\uFF0C <code>resolve</code>\u53EF\u4EE5\u5E2E\u52A9<code>webpack</code>\u4ECE\u6BCF\u4E2A <code>require/import</code> \u8BED\u53E5\u4E2D\uFF0C\u627E\u5230\u9700\u8981\u5F15\u5165\u5230\u5408\u9002\u7684\u6A21\u5757\u4EE3\u7801</p><p>\u901A\u8FC7<code>resolve.extensions</code>\u662F\u89E3\u6790\u5230\u6587\u4EF6\u65F6\u81EA\u52A8\u6DFB\u52A0\u62D3\u5C55\u540D\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;.warm&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;.mjs&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;.json&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u5F15\u5165\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u82E5\u6CA1\u6709\u6587\u4EF6\u540E\u7F00\u540D\uFF0C\u5219\u4F1A\u6839\u636E\u6570\u7EC4\u5185\u7684\u503C\u4F9D\u6B21\u67E5\u627E</p><p>\u5F53\u6211\u4EEC\u914D\u7F6E\u7684\u65F6\u5019\uFF0C\u5219\u4E0D\u8981\u968F\u4FBF\u628A\u6240\u6709\u540E\u7F00\u90FD\u5199\u5728\u91CC\u9762\uFF0C\u8FD9\u4F1A\u8C03\u7528\u591A\u6B21\u6587\u4EF6\u7684\u67E5\u627E\uFF0C\u8FD9\u6837\u5C31\u4F1A\u51CF\u6162\u6253\u5305\u901F\u5EA6</p><h3 id="\u4F18\u5316-resolve-modules" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316-resolve-modules" aria-hidden="true">#</a> \u4F18\u5316 resolve.modules</h3><p><code>resolve.modules</code> \u7528\u4E8E\u914D\u7F6E <code>webpack</code> \u53BB\u54EA\u4E9B\u76EE\u5F55\u4E0B\u5BFB\u627E\u7B2C\u4E09\u65B9\u6A21\u5757\u3002\u9ED8\u8BA4\u503C\u4E3A<code>[&#39;node_modules&#39;]</code>\uFF0C\u6240\u4EE5\u9ED8\u8BA4\u4F1A\u4ECE<code>node_modules</code>\u4E2D\u67E5\u627E\u6587\u4EF6 \u5F53\u5B89\u88C5\u7684\u7B2C\u4E09\u65B9\u6A21\u5757\u90FD\u653E\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 <code>./node_modules </code>\u76EE\u5F55\u4E0B\u65F6\uFF0C\u6240\u4EE5\u53EF\u4EE5\u6307\u660E\u5B58\u653E\u7B2C\u4E09\u65B9\u6A21\u5757\u7684\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4EE5\u51CF\u5C11\u5BFB\u627E\uFF0C\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  resolve: {
    // \u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u6307\u660E\u7B2C\u4E09\u65B9\u6A21\u5757\u5B58\u653E\u7684\u4F4D\u7F6E\uFF0C\u4EE5\u51CF\u5C11\u641C\u7D22\u6B65\u9AA4
    // \u5176\u4E2D __dirname \u8868\u793A\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u4E5F\u5C31\u662F\u9879\u76EE\u6839\u76EE\u5F55
    modules: [path.resolve(__dirname, &#39;node_modules&#39;)]
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F18\u5316-resolve-alias" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316-resolve-alias" aria-hidden="true">#</a> \u4F18\u5316 resolve.alias</h3><p><code>alias</code>\u7ED9\u4E00\u4E9B\u5E38\u7528\u7684\u8DEF\u5F84\u8D77\u4E00\u4E2A\u522B\u540D\uFF0C\u7279\u522B\u5F53\u6211\u4EEC\u7684\u9879\u76EE\u76EE\u5F55\u7ED3\u6784\u6BD4\u8F83\u6DF1\u7684\u65F6\u5019\uFF0C\u4E00\u4E2A\u6587\u4EF6\u7684\u8DEF\u5F84\u53EF\u80FD\u662F<code>./../../</code>\u7684\u5F62\u5F0F</p><p>\u901A\u8FC7\u914D\u7F6E<code>alias</code>\u4EE5\u51CF\u5C11\u67E5\u627E\u8FC7\u7A0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">alias</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;./src&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528-dllplugin-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-dllplugin-\u63D2\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528 DLLPlugin \u63D2\u4EF6</h3><p><code>DLL</code>\u5168\u79F0\u662F \u52A8\u6001\u94FE\u63A5\u5E93\uFF0C\u662F\u4E3A\u8F6F\u4EF6\u5728 winodw \u79CD\u5B9E\u73B0\u5171\u4EAB\u51FD\u6570\u5E93\u7684\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u800C Webpack \u4E5F\u5185\u7F6E\u4E86 DLL \u7684\u529F\u80FD\uFF0C\u4E3A\u7684\u5C31\u662F\u53EF\u4EE5\u5171\u4EAB\uFF0C\u4E0D\u7ECF\u5E38\u6539\u53D8\u7684\u4EE3\u7801\uFF0C\u62BD\u6210\u4E00\u4E2A\u5171\u4EAB\u7684\u5E93\u3002\u8FD9\u4E2A\u5E93\u5728\u4E4B\u540E\u7684\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u88AB\u5F15\u5165\u5230\u5176\u4ED6\u9879\u76EE\u7684\u4EE3\u7801\u4E2D</p><p>\u4F7F\u7528\u6B65\u9AA4\u5206\u6210\u4E24\u90E8\u5206\uFF1A</p><ul><li>\u6253\u5305\u4E00\u4E2A DLL \u5E93</li><li>\u5F15\u5165 DLL \u5E93</li></ul><h4 id="\u6253\u5305\u4E00\u4E2A-dll-\u5E93" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u4E00\u4E2A-dll-\u5E93" aria-hidden="true">#</a> \u6253\u5305\u4E00\u4E2A DLL \u5E93</h4><p><code>webpack</code>\u5185\u7F6E\u4E86\u4E00\u4E2A<code>DllPlugin</code>\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u6253\u5305\u4E00\u4E2A DLL \u7684\u5E93\u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;dll_[name]&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&quot;./dll/[name].mainfest.json&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5F15\u5165-dll-\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165-dll-\u5E93" aria-hidden="true">#</a> \u5F15\u5165 DLL \u5E93</h4><p>\u4F7F\u7528 <code>webpack</code> \u81EA\u5E26\u7684 <code>DllReferencePlugin</code> \u63D2\u4EF6\u5BF9 <code>mainfest.json</code> \u6620\u5C04\u6587\u4EF6\u8FDB\u884C\u5206\u6790\uFF0C\u83B7\u53D6\u8981\u4F7F\u7528\u7684<code>DLL</code>\u5E93</p><p>\u7136\u540E\u518D\u901A\u8FC7<code>AddAssetHtmlPlugin</code>\u63D2\u4EF6\uFF0C\u5C06\u6211\u4EEC\u6253\u5305\u7684<code>DLL</code>\u5E93\u5F15\u5165\u5230<code>Html</code>\u6A21\u5757\u4E2D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllReferencePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">context</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&quot;./dll/dll_react.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">mainfest</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&quot;./dll/react.mainfest.json&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">AddAssetHtmlPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">outputPath</span><span class="token operator">:</span><span class="token string">&quot;./auto&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filepath</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&quot;./dll/dll_react.js&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528-cache-loader" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-cache-loader" aria-hidden="true">#</a> \u4F7F\u7528 cache-loader</h3><p>\u5728\u4E00\u4E9B\u6027\u80FD\u5F00\u9500\u8F83\u5927\u7684 <code>loader </code>\u4E4B\u524D\u6DFB\u52A0 <code>cache-loader</code>\uFF0C\u4EE5\u5C06\u7ED3\u679C\u7F13\u5B58\u5230\u78C1\u76D8\u91CC\uFF0C\u663E\u8457\u63D0\u5347\u4E8C\u6B21\u6784\u5EFA\u901F\u5EA6</p><p>\u4FDD\u5B58\u548C\u8BFB\u53D6\u8FD9\u4E9B\u7F13\u5B58\u6587\u4EF6\u4F1A\u6709\u4E00\u4E9B\u65F6\u95F4\u5F00\u9500\uFF0C\u6240\u4EE5\u8BF7\u53EA\u5BF9\u6027\u80FD\u5F00\u9500\u8F83\u5927\u7684 <code>loader</code> \u4F7F\u7528\u6B64<code> loader</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ext$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;cache-loader&#39;</span><span class="token punctuation">,</span> <span class="token operator">...</span>loaders<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="terser-\u542F\u52A8\u591A\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#terser-\u542F\u52A8\u591A\u7EBF\u7A0B" aria-hidden="true">#</a> terser \u542F\u52A8\u591A\u7EBF\u7A0B</h3><p>\u4F7F\u7528\u591A\u8FDB\u7A0B\u5E76\u884C\u8FD0\u884C\u6765\u63D0\u9AD8\u6784\u5EFA\u901F\u5EA6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">parallel</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5408\u7406\u4F7F\u7528-sourcemap" tabindex="-1"><a class="header-anchor" href="#\u5408\u7406\u4F7F\u7528-sourcemap" aria-hidden="true">#</a> \u5408\u7406\u4F7F\u7528 sourceMap</h3><p>\u6253\u5305\u751F\u6210 <code>sourceMap</code> \u7684\u65F6\u5019\uFF0C\u5982\u679C\u4FE1\u606F\u8D8A\u8BE6\u7EC6\uFF0C\u6253\u5305\u901F\u5EA6\u5C31\u4F1A\u8D8A\u6162\u3002\u5BF9\u5E94\u5C5E\u6027\u53D6\u503C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/11647af0-b01d-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h3 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a> \u4E09\u3001\u603B\u7ED3</h3><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4F18\u5316<code>webpack</code>\u6784\u5EFA\u7684\u65B9\u5F0F\u6709\u5F88\u591A\uFF0C\u4E3B\u8981\u53EF\u4EE5\u4ECE\u4F18\u5316\u641C\u7D22\u65F6\u95F4\u3001\u7F29\u5C0F\u6587\u4EF6\u641C\u7D22\u8303\u56F4\u3001\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u7F16\u8BD1\u7B49\u65B9\u9762\u5165\u624B</p>`,49),o=[t];function l(c,i){return s(),a("div",null,o)}const d=n(p,[["render",l],["__file","improve_build.html.vue"]]);export{d as default};
