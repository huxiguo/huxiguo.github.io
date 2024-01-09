import{_ as e,o as s,c as n,d as a}from"./app.91a380bb.js";const c={},o=a(`<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4-webpack-\u7684\u70ED\u66F4\u65B0\u662F\u5982\u4F55\u505A\u5230\u7684-\u539F\u7406\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4-webpack-\u7684\u70ED\u66F4\u65B0\u662F\u5982\u4F55\u505A\u5230\u7684-\u539F\u7406\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4 webpack \u7684\u70ED\u66F4\u65B0\u662F\u5982\u4F55\u505A\u5230\u7684\uFF1F\u539F\u7406\u662F\u4EC0\u4E48\uFF1F</h1><p><img src="https://static.vue-js.com/a076da40-acd4-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h3 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h3><p><code>HMR </code>\u5168\u79F0 <code>Hot Module Replacement</code>\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u6A21\u5757\u70ED\u66FF\u6362\uFF0C\u6307\u5728\u5E94\u7528\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u66FF\u6362\u3001\u6DFB\u52A0\u3001\u5220\u9664\u6A21\u5757\uFF0C\u800C\u65E0\u9700\u91CD\u65B0\u5237\u65B0\u6574\u4E2A\u5E94\u7528</p><p>\u4F8B\u5982\uFF0C\u6211\u4EEC\u5728\u5E94\u7528\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4FEE\u6539\u4E86\u67D0\u4E2A\u6A21\u5757\uFF0C\u901A\u8FC7\u81EA\u52A8\u5237\u65B0\u4F1A\u5BFC\u81F4\u6574\u4E2A\u5E94\u7528\u7684\u6574\u4F53\u5237\u65B0\uFF0C\u90A3\u9875\u9762\u4E2D\u7684\u72B6\u6001\u4FE1\u606F\u90FD\u4F1A\u4E22\u5931</p><p>\u5982\u679C\u4F7F\u7528\u7684\u662F <code>HMR</code>\uFF0C\u5C31\u53EF\u4EE5\u5B9E\u73B0\u53EA\u5C06\u4FEE\u6539\u7684\u6A21\u5757\u5B9E\u65F6\u66FF\u6362\u81F3\u5E94\u7528\u4E2D\uFF0C\u4E0D\u5FC5\u5B8C\u5168\u5237\u65B0\u6574\u4E2A\u5E94\u7528</p><p>\u5728<code>webpack</code>\u4E2D\u914D\u7F6E\u5F00\u542F\u70ED\u6A21\u5757\u4E5F\u975E\u5E38\u7684\u7B80\u5355\uFF0C\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5F00\u542F HMR \u7279\u6027</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token comment">// hotOnly: true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u4E0A\u8FF0\u8FD9\u79CD\u914D\u7F6E\uFF0C\u5982\u679C\u6211\u4EEC\u4FEE\u6539\u5E76\u4FDD\u5B58<code>css</code>\u6587\u4EF6\uFF0C\u786E\u5B9E\u80FD\u591F\u4EE5\u4E0D\u5237\u65B0\u7684\u5F62\u5F0F\u66F4\u65B0\u5230\u9875\u9762\u4E2D</p><p>\u4F46\u662F\uFF0C\u5F53\u6211\u4EEC\u4FEE\u6539\u5E76\u4FDD\u5B58<code>js</code>\u6587\u4EF6\u4E4B\u540E\uFF0C\u9875\u9762\u4F9D\u65E7\u81EA\u52A8\u5237\u65B0\u4E86\uFF0C\u8FD9\u91CC\u5E76\u6CA1\u6709\u89E6\u53D1\u70ED\u6A21\u5757</p><p>\u6240\u4EE5\uFF0C<code>HMR </code>\u5E76\u4E0D\u50CF <code>Webpack</code> \u7684\u5176\u4ED6\u7279\u6027\u4E00\u6837\u53EF\u4EE5\u5F00\u7BB1\u5373\u7528\uFF0C\u9700\u8981\u6709\u4E00\u4E9B\u989D\u5916\u7684\u64CD\u4F5C</p><p>\u6211\u4EEC\u9700\u8981\u53BB\u6307\u5B9A\u54EA\u4E9B\u6A21\u5757\u53D1\u751F\u66F4\u65B0\u65F6\u8FDB\u884C<code>HRM</code>\uFF0C\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token string">&#39;./util.js&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;util.js\u66F4\u65B0\u4E86&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> \u4E8C\u3001\u5B9E\u73B0\u539F\u7406</h2><p>\u9996\u5148\u6765\u770B\u770B\u4E00\u5F20\u56FE\uFF0C\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/adc05780-acd4-11eb-ab90-d9ae814b240d.png" alt=""></p><ul><li>Webpack Compile\uFF1A\u5C06 JS \u6E90\u4EE3\u7801\u7F16\u8BD1\u6210 bundle.js</li><li>HMR Server\uFF1A\u7528\u6765\u5C06\u70ED\u66F4\u65B0\u7684\u6587\u4EF6\u8F93\u51FA\u7ED9 HMR Runtime</li><li>Bundle Server\uFF1A\u9759\u6001\u8D44\u6E90\u6587\u4EF6\u670D\u52A1\u5668\uFF0C\u63D0\u4F9B\u6587\u4EF6\u8BBF\u95EE\u8DEF\u5F84</li><li>HMR Runtime\uFF1Asocket \u670D\u52A1\u5668\uFF0C\u4F1A\u88AB\u6CE8\u5165\u5230\u6D4F\u89C8\u5668\uFF0C\u66F4\u65B0\u6587\u4EF6\u7684\u53D8\u5316</li><li>bundle.js\uFF1A\u6784\u5EFA\u8F93\u51FA\u7684\u6587\u4EF6</li><li>\u5728 HMR Runtime \u548C HMR Server \u4E4B\u95F4\u5EFA\u7ACB websocket\uFF0C\u5373\u56FE\u4E0A 4 \u53F7\u7EBF\uFF0C\u7528\u4E8E\u5B9E\u65F6\u66F4\u65B0\u6587\u4EF6\u53D8\u5316</li></ul><p>\u4E0A\u9762\u56FE\u4E2D\uFF0C\u53EF\u4EE5\u5206\u6210\u4E24\u4E2A\u9636\u6BB5\uFF1A</p><ul><li>\u542F\u52A8\u9636\u6BB5\u4E3A\u4E0A\u56FE 1 - 2 - A - B</li></ul><p>\u5728\u7F16\u5199\u672A\u7ECF\u8FC7<code>webpack</code>\u6253\u5305\u7684\u6E90\u4EE3\u7801\u540E\uFF0C<code>Webpack Compile</code> \u5C06\u6E90\u4EE3\u7801\u548C <code>HMR Runtime</code> \u4E00\u8D77\u7F16\u8BD1\u6210 <code>bundle </code>\u6587\u4EF6\uFF0C\u4F20\u8F93\u7ED9<code> Bundle Server</code> \u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668</p><ul><li>\u66F4\u65B0\u9636\u6BB5\u4E3A\u4E0A\u56FE 1 - 2 - 3 - 4</li></ul><p>\u5F53\u67D0\u4E00\u4E2A\u6587\u4EF6\u6216\u8005\u6A21\u5757\u53D1\u751F\u53D8\u5316\u65F6\uFF0C<code>webpack </code>\u76D1\u542C\u5230\u6587\u4EF6\u53D8\u5316\u5BF9\u6587\u4EF6\u91CD\u65B0\u7F16\u8BD1\u6253\u5305\uFF0C\u7F16\u8BD1\u751F\u6210\u552F\u4E00\u7684<code>hash</code>\u503C\uFF0C\u8FD9\u4E2A<code>hash </code>\u503C\u7528\u6765\u4F5C\u4E3A\u4E0B\u4E00\u6B21\u70ED\u66F4\u65B0\u7684\u6807\u8BC6</p><p>\u6839\u636E\u53D8\u5316\u7684\u5185\u5BB9\u751F\u6210\u4E24\u4E2A\u8865\u4E01\u6587\u4EF6\uFF1A<code>manifest</code>\uFF08\u5305\u542B\u4E86 <code>hash</code> \u548C <code>chundId </code>\uFF0C\u7528\u6765\u8BF4\u660E\u53D8\u5316\u7684\u5185\u5BB9\uFF09\u548C<code> chunk.js</code> \u6A21\u5757</p><p>\u7531\u4E8E<code>socket</code>\u670D\u52A1\u5668\u5728<code>HMR Runtime</code> \u548C <code>HMR Server</code>\u4E4B\u95F4\u5EFA\u7ACB <code>websocket</code>\u94FE\u63A5\uFF0C\u5F53\u6587\u4EF6\u53D1\u751F\u6539\u52A8\u7684\u65F6\u5019\uFF0C\u670D\u52A1\u7AEF\u4F1A\u5411\u6D4F\u89C8\u5668\u63A8\u9001\u4E00\u6761\u6D88\u606F\uFF0C\u6D88\u606F\u5305\u542B\u6587\u4EF6\u6539\u52A8\u540E\u751F\u6210\u7684<code>hash</code>\u503C\uFF0C\u5982\u4E0B\u56FE\u7684<code>h</code>\u5C5E\u6027\uFF0C\u4F5C\u4E3A\u4E0B\u4E00\u6B21\u70ED\u66F4\u7EC6\u7684\u6807\u8BC6</p><p><img src="https://static.vue-js.com/05a0edf0-ad4a-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u5728\u6D4F\u89C8\u5668\u63A5\u53D7\u5230\u8FD9\u6761\u6D88\u606F\u4E4B\u524D\uFF0C\u6D4F\u89C8\u5668\u5DF2\u7ECF\u5728\u4E0A\u4E00\u6B21<code> socket</code> \u6D88\u606F\u4E2D\u5DF2\u7ECF\u8BB0\u4F4F\u4E86\u6B64\u65F6\u7684<code> hash</code> \u6807\u8BC6\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u4F1A\u521B\u5EFA\u4E00\u4E2A <code>ajax</code> \u53BB\u670D\u52A1\u7AEF\u8BF7\u6C42\u83B7\u53D6\u5230\u53D8\u5316\u5185\u5BB9\u7684 <code>manifest</code> \u6587\u4EF6</p><p><code>mainfest</code>\u6587\u4EF6\u5305\u542B\u91CD\u65B0<code>build</code>\u751F\u6210\u7684<code>hash</code>\u503C\uFF0C\u4EE5\u53CA\u53D8\u5316\u7684\u6A21\u5757\uFF0C\u5BF9\u5E94\u4E0A\u56FE\u7684<code>c</code>\u5C5E\u6027</p><p>\u6D4F\u89C8\u5668\u6839\u636E <code>manifest</code> \u6587\u4EF6\u83B7\u53D6\u6A21\u5757\u53D8\u5316\u7684\u5185\u5BB9\uFF0C\u4ECE\u800C\u89E6\u53D1<code>render</code>\u6D41\u7A0B\uFF0C\u5B9E\u73B0\u5C40\u90E8\u6A21\u5757\u66F4\u65B0</p><p><img src="https://static.vue-js.com/0e7b7850-ad4a-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a> \u4E09\u3001\u603B\u7ED3</h2><p>\u5173\u4E8E<code>webpack</code>\u70ED\u6A21\u5757\u66F4\u65B0\u7684\u603B\u7ED3\u5982\u4E0B\uFF1A</p><ul><li>\u901A\u8FC7<code>webpack-dev-server</code>\u521B\u5EFA\u4E24\u4E2A\u670D\u52A1\u5668\uFF1A\u63D0\u4F9B\u9759\u6001\u8D44\u6E90\u7684\u670D\u52A1\uFF08express\uFF09\u548C Socket \u670D\u52A1</li><li>express server \u8D1F\u8D23\u76F4\u63A5\u63D0\u4F9B\u9759\u6001\u8D44\u6E90\u7684\u670D\u52A1\uFF08\u6253\u5305\u540E\u7684\u8D44\u6E90\u76F4\u63A5\u88AB\u6D4F\u89C8\u5668\u8BF7\u6C42\u548C\u89E3\u6790\uFF09</li><li>socket server \u662F\u4E00\u4E2A websocket \u7684\u957F\u8FDE\u63A5\uFF0C\u53CC\u65B9\u53EF\u4EE5\u901A\u4FE1</li><li>\u5F53 socket server \u76D1\u542C\u5230\u5BF9\u5E94\u7684\u6A21\u5757\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4F1A\u751F\u6210\u4E24\u4E2A\u6587\u4EF6.json\uFF08manifest \u6587\u4EF6\uFF09\u548C.js \u6587\u4EF6\uFF08update chunk\uFF09</li><li>\u901A\u8FC7\u957F\u8FDE\u63A5\uFF0Csocket server \u53EF\u4EE5\u76F4\u63A5\u5C06\u8FD9\u4E24\u4E2A\u6587\u4EF6\u4E3B\u52A8\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\uFF08\u6D4F\u89C8\u5668\uFF09</li><li>\u6D4F\u89C8\u5668\u62FF\u5230\u4E24\u4E2A\u65B0\u7684\u6587\u4EF6\u540E\uFF0C\u901A\u8FC7 HMR runtime \u673A\u5236\uFF0C\u52A0\u8F7D\u8FD9\u4E24\u4E2A\u6587\u4EF6\uFF0C\u5E76\u4E14\u9488\u5BF9\u4FEE\u6539\u7684\u6A21\u5757\u8FDB\u884C\u66F4\u65B0</li></ul>`,32),p=[o];function t(d,i){return s(),n("div",null,p)}const r=e(c,[["render",t],["__file","HMR.html.vue"]]);export{r as default};
