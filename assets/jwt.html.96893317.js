import{_ as n,o as s,c as a,d as e}from"./app.91a380bb.js";const t={},p=e(`<h1 id="\u9762\u8BD5\u5B98-\u5982\u4F55\u5B9E\u73B0-jwt-\u9274\u6743\u673A\u5236-\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u5982\u4F55\u5B9E\u73B0-jwt-\u9274\u6743\u673A\u5236-\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u5982\u4F55\u5B9E\u73B0 jwt \u9274\u6743\u673A\u5236\uFF1F\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF</h1><p><img src="https://static.vue-js.com/efff62b0-cd88-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>JWT\uFF08JSON Web Token\uFF09\uFF0C\u672C\u8D28\u5C31\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E66\u5199\u89C4\u8303\uFF0C\u5982\u4E0B\u56FE\uFF0C\u4F5C\u7528\u662F\u7528\u6765\u5728\u7528\u6237\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u4F20\u9012\u5B89\u5168\u53EF\u9760\u7684\u4FE1\u606F</p><p><img src="https://static.vue-js.com/052904c0-cd89-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u5728\u76EE\u524D\u524D\u540E\u7AEF\u5206\u79BB\u7684\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u4F7F\u7528<code>token</code>\u9274\u6743\u673A\u5236\u7528\u4E8E\u8EAB\u4EFD\u9A8C\u8BC1\u662F\u6700\u5E38\u89C1\u7684\u65B9\u6848\uFF0C\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><ul><li>\u670D\u52A1\u5668\u5F53\u9A8C\u8BC1\u7528\u6237\u8D26\u53F7\u548C\u5BC6\u7801\u6B63\u786E\u7684\u65F6\u5019\uFF0C\u7ED9\u7528\u6237\u9881\u53D1\u4E00\u4E2A\u4EE4\u724C\uFF0C\u8FD9\u4E2A\u4EE4\u724C\u4F5C\u4E3A\u540E\u7EED\u7528\u6237\u8BBF\u95EE\u4E00\u4E9B\u63A5\u53E3\u7684\u51ED\u8BC1</li><li>\u540E\u7EED\u8BBF\u95EE\u4F1A\u6839\u636E\u8FD9\u4E2A\u4EE4\u724C\u5224\u65AD\u7528\u6237\u65F6\u5019\u6709\u6743\u9650\u8FDB\u884C\u8BBF\u95EE</li></ul><p><code>Token</code>\uFF0C\u5206\u6210\u4E86\u4E09\u90E8\u5206\uFF0C\u5934\u90E8\uFF08Header\uFF09\u3001\u8F7D\u8377\uFF08Payload\uFF09\u3001\u7B7E\u540D\uFF08Signature\uFF09\uFF0C\u5E76\u4EE5<code>.</code>\u8FDB\u884C\u62FC\u63A5\u3002\u5176\u4E2D\u5934\u90E8\u548C\u8F7D\u8377\u90FD\u662F\u4EE5<code>JSON</code>\u683C\u5F0F\u5B58\u653E\u6570\u636E\uFF0C\u53EA\u662F\u8FDB\u884C\u4E86\u7F16\u7801</p><p><img src="https://static.vue-js.com/1175f990-cd89-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> header</h3><p>\u6BCF\u4E2A JWT \u90FD\u4F1A\u5E26\u6709\u5934\u90E8\u4FE1\u606F\uFF0C\u8FD9\u91CC\u4E3B\u8981\u58F0\u660E\u4F7F\u7528\u7684\u7B97\u6CD5\u3002\u58F0\u660E\u7B97\u6CD5\u7684\u5B57\u6BB5\u540D\u4E3A<code>alg</code>\uFF0C\u540C\u65F6\u8FD8\u6709\u4E00\u4E2A<code>typ</code>\u7684\u5B57\u6BB5\uFF0C\u9ED8\u8BA4<code>JWT</code>\u5373\u53EF\u3002\u4EE5\u4E0B\u793A\u4F8B\u4E2D\u7B97\u6CD5\u4E3A HS256</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span> <span class="token property">&quot;alg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HS256&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;typ&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JWT&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u56E0\u4E3A JWT \u662F\u5B57\u7B26\u4E32\uFF0C\u6240\u4EE5\u6211\u4EEC\u8FD8\u9700\u8981\u5BF9\u4EE5\u4E0A\u5185\u5BB9\u8FDB\u884C Base64 \u7F16\u7801\uFF0C\u7F16\u7801\u540E\u5B57\u7B26\u4E32\u5982\u4E0B\uFF1A</p><div class="language-tex ext-tex line-numbers-mode"><pre class="language-tex"><code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="payload" tabindex="-1"><a class="header-anchor" href="#payload" aria-hidden="true">#</a> payload</h3><p>\u8F7D\u8377\u5373\u6D88\u606F\u4F53\uFF0C\u8FD9\u91CC\u4F1A\u5B58\u653E\u5B9E\u9645\u7684\u5185\u5BB9\uFF0C\u4E5F\u5C31\u662F<code>Token</code>\u7684\u6570\u636E\u58F0\u660E\uFF0C\u4F8B\u5982\u7528\u6237\u7684<code>id</code>\u548C<code>name</code>\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E5F\u4F1A\u643A\u5E26\u4EE4\u724C\u7684\u7B7E\u53D1\u65F6\u95F4<code>iat</code>\uFF0C\u901A\u8FC7\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;sub&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567890&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;iat&quot;</span><span class="token operator">:</span> <span class="token number">1516239022</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u6837\u8FDB\u884C Base64 \u7F16\u7801\u540E\uFF0C\u5B57\u7B26\u4E32\u5982\u4E0B\uFF1A</p><div class="language-tex ext-tex line-numbers-mode"><pre class="language-tex"><code>eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h3><p>\u7B7E\u540D\u662F\u5BF9\u5934\u90E8\u548C\u8F7D\u8377\u5185\u5BB9\u8FDB\u884C\u7B7E\u540D\uFF0C\u4E00\u822C\u60C5\u51B5\uFF0C\u8BBE\u7F6E\u4E00\u4E2A<code>secretKey</code>\uFF0C\u5BF9\u524D\u4E24\u4E2A\u7684\u7ED3\u679C\u8FDB\u884C<code>HMACSHA25</code>\u7B97\u6CD5\uFF0C\u516C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Signature <span class="token operator">=</span> <span class="token constant">HMACSHA256</span><span class="token punctuation">(</span><span class="token function">base64Url</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span><span class="token operator">+</span><span class="token punctuation">.</span><span class="token operator">+</span><span class="token function">base64Url</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">,</span>secretKey<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E00\u65E6\u524D\u9762\u4E24\u90E8\u5206\u6570\u636E\u88AB\u7BE1\u6539\uFF0C\u53EA\u8981\u670D\u52A1\u5668\u52A0\u5BC6\u7528\u7684\u5BC6\u94A5\u6CA1\u6709\u6CC4\u9732\uFF0C\u5F97\u5230\u7684\u7B7E\u540D\u80AF\u5B9A\u548C\u4E4B\u524D\u7684\u7B7E\u540D\u4E0D\u4E00\u81F4</p><h2 id="\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> \u4E8C\u3001\u5982\u4F55\u5B9E\u73B0</h2><p><code>Token</code>\u7684\u4F7F\u7528\u5206\u6210\u4E86\u4E24\u90E8\u5206\uFF1A</p><ul><li>\u751F\u6210 token\uFF1A\u767B\u5F55\u6210\u529F\u7684\u65F6\u5019\uFF0C\u9881\u53D1 token</li><li>\u9A8C\u8BC1 token\uFF1A\u8BBF\u95EE\u67D0\u4E9B\u8D44\u6E90\u6216\u8005\u63A5\u53E3\u65F6\uFF0C\u9A8C\u8BC1 token</li></ul><h3 id="\u751F\u6210-token" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210-token" aria-hidden="true">#</a> \u751F\u6210 token</h3><p>\u501F\u52A9\u7B2C\u4E09\u65B9\u5E93<code>jsonwebtoken</code>\uFF0C\u901A\u8FC7<code>jsonwebtoken</code> \u7684 <code>sign</code> \u65B9\u6CD5\u751F\u6210\u4E00\u4E2A <code>token</code>\uFF1A</p><ul><li><p>\u7B2C\u4E00\u4E2A\u53C2\u6570\u6307\u7684\u662F Payload</p></li><li><p>\u7B2C\u4E8C\u4E2A\u662F\u79D8\u94A5\uFF0C\u670D\u52A1\u7AEF\u7279\u6709</p></li><li><p>\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F option\uFF0C\u53EF\u4EE5\u5B9A\u4E49 token \u8FC7\u671F\u65F6\u95F4</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> crypto <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;crypto&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  jwt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jsonwebtoken&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// TODO:\u4F7F\u7528\u6570\u636E\u5E93</span>
<span class="token comment">// \u8FD9\u91CC\u5E94\u8BE5\u662F\u7528\u6570\u636E\u5E93\u5B58\u50A8\uFF0C\u8FD9\u91CC\u53EA\u662F\u6F14\u793A\u7528</span>
<span class="token keyword">let</span> userList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7528\u6237\u767B\u5F55</span>
  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>body
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token operator">!</span>data<span class="token punctuation">.</span>password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;000002&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u53C2\u6570\u4E0D\u5408\u6CD5&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> userList<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        item<span class="token punctuation">.</span>name <span class="token operator">===</span> data<span class="token punctuation">.</span>name <span class="token operator">&amp;&amp;</span>
        item<span class="token punctuation">.</span>password <span class="token operator">===</span>
          crypto<span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">&#39;md5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>password<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u751F\u6210token</span>
      <span class="token keyword">const</span> token <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> result<span class="token punctuation">.</span>name
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&#39;test_token&#39;</span><span class="token punctuation">,</span> <span class="token comment">// secret</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">expiresIn</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token punctuation">}</span> <span class="token comment">// \u8FC7\u671F\u65F6\u95F4\uFF1A60 * 60 s</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u767B\u5F55\u6210\u529F&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          token
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;000002&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> UserController
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u524D\u7AEF\u63A5\u6536\u5230<code>token</code>\u540E\uFF0C\u4E00\u822C\u60C5\u51B5\u4F1A\u901A\u8FC7<code>localStorage</code>\u8FDB\u884C\u7F13\u5B58\uFF0C\u7136\u540E\u5C06<code>token</code>\u653E\u5230<code>HTTP </code>\u8BF7\u6C42\u5934<code>Authorization</code> \u4E2D\uFF0C\u5173\u4E8E<code>Authorization</code> \u7684\u8BBE\u7F6E\uFF0C\u524D\u9762\u8981\u52A0\u4E0A Bearer \uFF0C\u6CE8\u610F\u540E\u9762\u5E26\u6709\u7A7A\u683C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span>
  config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Bearer &#39;</span> <span class="token operator">+</span> token <span class="token comment">// \u7559\u610F\u8FD9\u91CC\u7684 Authorization</span>
  <span class="token keyword">return</span> config
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6821\u9A8C-token" tabindex="-1"><a class="header-anchor" href="#\u6821\u9A8C-token" aria-hidden="true">#</a> \u6821\u9A8C token</h3><p>\u4F7F\u7528 <code>koa-jwt</code> \u4E2D\u95F4\u4EF6\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u65B9\u5F0F\u6BD4\u8F83\u7B80\u5355</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">/</span> \u6CE8\u610F\uFF1A\u653E\u5728\u8DEF\u7531\u524D\u9762
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">koajwt</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">secret</span><span class="token operator">:</span> <span class="token string">&#39;test_token&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unless</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// \u914D\u7F6E\u767D\u540D\u5355</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/api\\/register</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/api\\/login</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>secret \u5FC5\u987B\u548C sign \u65F6\u5019\u4FDD\u6301\u4E00\u81F4</li><li>\u53EF\u4EE5\u901A\u8FC7 unless \u914D\u7F6E\u63A5\u53E3\u767D\u540D\u5355\uFF0C\u4E5F\u5C31\u662F\u54EA\u4E9B URL \u53EF\u4EE5\u4E0D\u7528\u7ECF\u8FC7\u6821\u9A8C\uFF0C\u50CF\u767B\u9646/\u6CE8\u518C\u90FD\u53EF\u4EE5\u4E0D\u7528\u6821\u9A8C</li><li>\u6821\u9A8C\u7684\u4E2D\u95F4\u4EF6\u9700\u8981\u653E\u5728\u9700\u8981\u6821\u9A8C\u7684\u8DEF\u7531\u524D\u9762\uFF0C\u65E0\u6CD5\u5BF9\u524D\u9762\u7684 URL \u8FDB\u884C\u6821\u9A8C</li></ul><p>\u83B7\u53D6<code>token</code>\u7528\u6237\u7684\u4FE1\u606F\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/userInfo&#39;</span><span class="token punctuation">,</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> authorization <span class="token operator">=</span>  ctx<span class="token punctuation">.</span>header<span class="token punctuation">.</span>authorization <span class="token comment">// \u83B7\u53D6jwt</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> authorization<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;Beraer &#39;</span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span><span class="token string">&#39;test_token&#39;</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A\u4E0A\u8FF0\u7684<code>HMA256</code>\u52A0\u5BC6\u7B97\u6CD5\u4E3A\u5355\u79D8\u94A5\u7684\u5F62\u5F0F\uFF0C\u4E00\u65E6\u6CC4\u9732\u540E\u679C\u975E\u5E38\u7684\u5371\u9669</p><p>\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\uFF0C\u6BCF\u4E2A\u5B50\u7CFB\u7EDF\u90FD\u8981\u83B7\u53D6\u5230\u79D8\u94A5\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5B50\u7CFB\u7EDF\u6839\u636E\u8BE5\u79D8\u94A5\u53EF\u4EE5\u53D1\u5E03\u548C\u9A8C\u8BC1\u4EE4\u724C\uFF0C\u4F46\u6709\u4E9B\u670D\u52A1\u5668\u53EA\u9700\u8981\u9A8C\u8BC1\u4EE4\u724C</p><p>\u8FD9\u65F6\u5019\u53EF\u4EE5\u91C7\u7528\u975E\u5BF9\u79F0\u52A0\u5BC6\uFF0C\u5229\u7528\u79C1\u94A5\u53D1\u5E03\u4EE4\u724C\uFF0C\u516C\u94A5\u9A8C\u8BC1\u4EE4\u724C\uFF0C\u52A0\u5BC6\u7B97\u6CD5\u53EF\u4EE5\u9009\u62E9<code>RS256</code></p><h2 id="\u4E09\u3001\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> \u4E09\u3001\u4F18\u7F3A\u70B9</h2><p>\u4F18\u70B9\uFF1A</p><ul><li>json \u5177\u6709\u901A\u7528\u6027\uFF0C\u6240\u4EE5\u53EF\u4EE5\u8DE8\u8BED\u8A00</li><li>\u7EC4\u6210\u7B80\u5355\uFF0C\u5B57\u8282\u5360\u7528\u5C0F\uFF0C\u4FBF\u4E8E\u4F20\u8F93</li><li>\u670D\u52A1\u7AEF\u65E0\u9700\u4FDD\u5B58\u4F1A\u8BDD\u4FE1\u606F\uFF0C\u5F88\u5BB9\u6613\u8FDB\u884C\u6C34\u5E73\u6269\u5C55</li><li>\u4E00\u5904\u751F\u6210\uFF0C\u591A\u5904\u4F7F\u7528\uFF0C\u53EF\u4EE5\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\uFF0C\u89E3\u51B3\u5355\u70B9\u767B\u5F55\u95EE\u9898</li><li>\u53EF\u9632\u62A4 CSRF \u653B\u51FB</li></ul><p>\u7F3A\u70B9\uFF1A</p><ul><li>payload \u90E8\u5206\u4EC5\u4EC5\u662F\u8FDB\u884C\u7B80\u5355\u7F16\u7801\uFF0C\u6240\u4EE5\u53EA\u80FD\u7528\u4E8E\u5B58\u50A8\u903B\u8F91\u5FC5\u9700\u7684\u975E\u654F\u611F\u4FE1\u606F</li><li>\u9700\u8981\u4FDD\u62A4\u597D\u52A0\u5BC6\u5BC6\u94A5\uFF0C\u4E00\u65E6\u6CC4\u9732\u540E\u679C\u4E0D\u582A\u8BBE\u60F3</li><li>\u4E3A\u907F\u514D token \u88AB\u52AB\u6301\uFF0C\u6700\u597D\u4F7F\u7528 https \u534F\u8BAE</li></ul>`,46),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","jwt.html.vue"]]);export{r as default};
