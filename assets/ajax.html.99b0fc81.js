import{_ as n,o as s,c as a,d as e}from"./app.91a380bb.js";const t={},p=e(`<h1 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> Ajax</h1><p>AJAX\uFF08Asynchronous JavaScript and XML\uFF09\uFF0C\u6307\u7684\u662F\u901A\u8FC7 JavaScript \u7684\u5F02\u6B65\u901A\u4FE1\uFF0C\u4ECE\u670D\u52A1\u5668\u83B7\u53D6 XML \u6587\u6863\u4ECE\u4E2D\u63D0\u53D6\u6570\u636E\uFF0C\u518D\u66F4\u65B0\u5F53\u524D\u7F51\u9875\u7684\u5BF9\u5E94\u90E8\u5206\uFF0C\u800C\u4E0D\u7528\u5237\u65B0\u6574\u4E2A\u7F51\u9875\u3002</p><h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p><code>Ajax</code>\u5728\u6D4F\u89C8\u5668\u662F\u901A\u8FC7<code>XMLHttpRequest</code>\u5BF9\u8C61\u6765\u5B9E\u73B0\u6570\u636E\u4F20\u8F93\u7684\u3002</p><p><code>XMLHttpRequest</code>\u5BF9\u8C61\u8FDB\u884C<code>HTTP</code>\u8BF7\u6C42\u524D\u5FC5\u987B\u901A\u8FC7open\u521D\u59CB\u5316\uFF0C<code>open</code>\u63A5\u53D7\u4E94\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u4E3A\u8BF7\u6C42\u65B9\u6CD5\u3001\u8BF7\u6C42\u94FE\u63A5\u3001\u5F02\u6B65\u6807\u8BC6\u3001\u8D26\u53F7\u548C\u5BC6\u7801\u7528\u4EE5\u670D\u52A1\u7AEF\u9A8C\u8BC1\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">open</span><span class="token punctuation">(</span>Method<span class="token punctuation">,</span> <span class="token constant">URL</span><span class="token punctuation">,</span> Asynchronous<span class="token punctuation">,</span> UserName<span class="token punctuation">,</span> Password<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u6210\u529F\u521D\u59CB\u5316\u8BF7\u6C42\u4E4B\u540E\uFF0C<code>XMLHttpRequest</code>\u5BF9\u8C61\u7684<code>setRequestHeader</code>\u65B9\u6CD5\u53EF\u4EE5\u7528\u6765\u8BBE\u7F6E\u8BF7\u6C42\u5934\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setRequestHeader</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8C03\u7528<code>open()</code>\u65B9\u6CD5\u540E\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528<code>send()</code>\u65B9\u6CD5\u6309\u7167<code>open</code>\u65B9\u6CD5\u8BBE\u5B9A\u7684\u53C2\u6570\u5C06\u8BF7\u6C42\u8FDB\u884C\u53D1\u9001\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">send</span><span class="token punctuation">(</span>Data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53<code>open</code>\u65B9\u6CD5\u8BBE\u5B9A\u53D1\u9001\u7684\u65B9\u5F0F\u4E3A\u5F02\u6B65\u8BF7\u6C42\u65F6\uFF0C<code>onreadystatechange</code>\u4E8B\u4EF6\u76D1\u542C\u5668\u5C06\u81EA\u52A8\u5728<code>XMLHttpRequest</code>\u5BF9\u8C61\u7684<code>readyState</code>\u5C5E\u6027\u6539\u53D8\u65F6\u88AB\u89E6\u53D1\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">switch</span><span class="token punctuation">(</span>readyState<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">//\u5F53open\u65B9\u6CD5\u88AB\u6210\u529F\u8C03\u7528,readyState\u4E3A1</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">//\u5F53send\u65B9\u6CD5\u88AB\u8C03\u7528\uFF0CreadyState\u5C5E\u6027\u88AB\u7F6E\u4E3A2</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span> <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">//HTTP\u54CD\u5E94\u5185\u5BB9\u5F00\u59CB\u52A0\u8F7D\uFF0CreadyState\u5C5E\u6027\u88AB\u7F6E\u4E3A3</span>
    <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span> <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">//HTTP\u54CD\u5E94\u5185\u5BB9\u7ED3\u675F\u52A0\u8F7D\uFF0CreadyState\u5C5E\u6027\u88AB\u7F6E\u4E3A4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C<code>XMLHttpRequest</code>\u5BF9\u8C61\u7684<code>readyState</code>\u5C5E\u6027\u8FD8\u6CA1\u6709\u53D8\u6210<code>4</code>\uFF0C<code>abort</code>\u53EF\u4EE5\u7EC8\u6B62\u8BF7\u6C42\u3002\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u786E\u4FDD\u5F02\u6B65\u8BF7\u6C42\u4E2D\u7684\u56DE\u8C03\u4E0D\u88AB\u6267\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="ajax\u7684\u7B80\u5355\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#ajax\u7684\u7B80\u5355\u5B9E\u73B0" aria-hidden="true">#</a> ajax\u7684\u7B80\u5355\u5B9E\u73B0</h5><p>\u7531\u4E8E\u6D4F\u89C8\u5668\u7684\u540C\u6E90\u7B56\u7565(\u534F\u8BAE\u3001<code>url</code>\u3001\u7AEF\u53E3\u53F7\u4EFB\u4E00\u4E0D\u540C\u90FD\u7B97\u4E3A\u8DE8\u57DF\u8BF7\u6C42)\uFF0C\u4E8E\u662F\u6B64\u4EE3\u7801\u9700\u8981\u6253\u5F00\u767E\u5EA6\u7684\u9996\u9875\uFF0C\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u7684<code>Console</code>\u76F4\u63A5\u6267\u884C\uFF0C\u5728<code>Network</code>\u67E5\u770B\u6548\u679C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>method<span class="token operator">=</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>data<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span>async<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u58F0\u660EXMLHttpRequest //\u5728IE5\u548CIE6\u4E2D\u9700\u8981\u4F7F\u7528ActiveX\u5BF9\u8C61</span>
        <span class="token keyword">var</span> <span class="token constant">XHR</span> <span class="token operator">=</span> XMLHttpRequest<span class="token punctuation">;</span>
        <span class="token comment">// \u521B\u5EFAXMLHttqRequest</span>
        <span class="token constant">XHR</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// \u8BBE\u7F6E\u8BF7\u6C42\u72B6\u6001\u6539\u53D8\u65F6\u6267\u884C\u7684\u51FD\u6570</span>
        <span class="token constant">XHR</span><span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">XHR</span><span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u54CD\u5E94\u72B6\u6001:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">XHR</span><span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span><span class="token string">&quot;FINISH&quot;</span><span class="token punctuation">)</span> <span class="token comment">//XHR.responseText\u4E3A\u54CD\u5E94\u4F53</span>
         <span class="token punctuation">}</span>
         <span class="token comment">// \u521D\u59CB\u5316\u8BF7\u6C42\u53C2\u6570</span>
         <span class="token constant">XHR</span><span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span>url<span class="token punctuation">,</span>async<span class="token punctuation">)</span>
         <span class="token comment">// \u53D1\u8D77\u8BF7\u6C42</span>
         <span class="token constant">XHR</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;A=1&amp;B=2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","ajax.html.vue"]]);export{d as default};