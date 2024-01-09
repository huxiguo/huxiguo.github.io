import{_ as n,o as s,c as a,d as e}from"./app.91a380bb.js";const t={},p=e(`<h1 id="web-worker" tabindex="-1"><a class="header-anchor" href="#web-worker" aria-hidden="true">#</a> web worker</h1><h2 id="\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u662F\u4EC0\u4E48</h2><p>Web Worker \u662F HTML5 \u6807\u51C6\u7684\u4E00\u90E8\u5206\uFF0C\u8FD9\u4E00\u89C4\u8303\u5B9A\u4E49\u4E86\u4E00\u5957 API\uFF0C\u5141\u8BB8\u6211\u4EEC\u5728 js \u4E3B\u7EBF\u7A0B\u4E4B\u5916\u5F00\u8F9F\u65B0\u7684 Worker \u7EBF\u7A0B\uFF0C\u5E76\u5C06\u4E00\u6BB5 js \u811A\u672C\u8FD0\u884C\u5176\u4E2D\uFF0C\u5B83\u8D4B\u4E88\u4E86\u5F00\u53D1\u8005\u5229\u7528 js \u64CD\u4F5C\u591A\u7EBF\u7A0B\u7684\u80FD\u529B\u3002 \u56E0\u4E3A\u662F\u72EC\u7ACB\u7684\u7EBF\u7A0B\uFF0CWorker \u7EBF\u7A0B\u4E0E js \u4E3B\u7EBF\u7A0B\u80FD\u591F\u540C\u65F6\u8FD0\u884C\uFF0C\u4E92\u4E0D\u963B\u585E\u3002\u6240\u4EE5\uFF0C\u5728\u6211\u4EEC\u6709\u5927\u91CF\u8FD0\u7B97\u4EFB\u52A1\u65F6\uFF0C\u53EF\u4EE5\u628A\u8FD0\u7B97\u4EFB\u52A1\u4EA4\u7ED9 Worker \u7EBF\u7A0B\u53BB\u5904\u7406\uFF0C\u5F53 Worker \u7EBF\u7A0B\u8BA1\u7B97\u5B8C\u6210\uFF0C\u518D\u628A\u7ED3\u679C\u8FD4\u56DE\u7ED9 js \u4E3B\u7EBF\u7A0B\u3002\u8FD9\u6837\uFF0Cjs \u4E3B\u7EBF\u7A0B\u53EA\u7528\u4E13\u6CE8\u5904\u7406\u4E1A\u52A1\u903B\u8F91\uFF0C\u4E0D\u7528\u8017\u8D39\u8FC7\u591A\u65F6\u95F4\u53BB\u5904\u7406\u5927\u91CF\u590D\u6742\u8BA1\u7B97\uFF0C\u4ECE\u800C\u51CF\u5C11\u4E86\u963B\u585E\u65F6\u95F4\uFF0C\u4E5F\u63D0\u9AD8\u4E86\u8FD0\u884C\u6548\u7387\uFF0C\u9875\u9762\u6D41\u7545\u5EA6\u548C\u7528\u6237\u4F53\u9A8C\u81EA\u7136\u800C\u7136\u4E5F\u63D0\u9AD8\u4E86\u3002</p><h2 id="\u4F7F\u7528-web-worker" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-web-worker" aria-hidden="true">#</a> \u4F7F\u7528 web worker</h2><h3 id="\u521B\u5EFA-worker" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-worker" aria-hidden="true">#</a> \u521B\u5EFA worker</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>cosnt worker <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u7EBF\u7A0B\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u901A\u4FE1" aria-hidden="true">#</a> \u7EBF\u7A0B\u901A\u4FE1</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// main.js\uFF08\u4E3B\u7EBF\u7A0B\uFF09</span>

<span class="token keyword">const</span> myWorker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">&#39;/worker.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFAworker</span>

myWorker<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// \u63A5\u6536\u6D88\u606F</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Greeting from Worker.js\uFF0Cworker\u7EBF\u7A0B\u53D1\u9001\u7684\u6D88\u606F</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8FD9\u79CD\u5199\u6CD5\u4E5F\u53EF\u4EE5</span>
<span class="token comment">// myWorker.onmessage = e =&gt; { // \u63A5\u6536\u6D88\u606F</span>
<span class="token comment">//    console.log(e.data);</span>
<span class="token comment">// };</span>

myWorker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">&#39;Greeting from Main.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5411 worker \u7EBF\u7A0B\u53D1\u9001\u6D88\u606F\uFF0C\u5BF9\u5E94 worker \u7EBF\u7A0B\u4E2D\u7684 e.data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// worker.js\uFF08worker\u7EBF\u7A0B\uFF09</span>
self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// \u63A5\u6536\u5230\u6D88\u606F</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Greeting from Main.js\uFF0C\u4E3B\u7EBF\u7A0B\u53D1\u9001\u7684\u6D88\u606F</span>
    self<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">&#39;Greeting from Worker.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5411\u4E3B\u7EBF\u7A0B\u53D1\u9001\u6D88\u606F</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3B\u7EBF\u7A0B\u4E0E worker \u7EBF\u7A0B\u4E4B\u95F4\u7684\u6570\u636E\u4F20\u9012\u662F\u4F20\u503C\u800C\u4E0D\u662F\u4F20\u5730\u5740\u3002\u6240\u4EE5\u4F60\u4F1A\u53D1\u73B0\uFF0C\u5373\u4F7F\u4F60\u4F20\u9012\u7684\u662F\u4E00\u4E2A<code>Object</code>\uFF0C\u5E76\u4E14\u88AB\u76F4\u63A5\u4F20\u9012\u56DE\u6765\uFF0C\u63A5\u6536\u5230\u7684\u4E5F\u4E0D\u662F\u539F\u6765\u7684\u90A3\u4E2A\u503C\u4E86\u3002</p><h3 id="\u5173\u95ED-worker-\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED-worker-\u7EBF\u7A0B" aria-hidden="true">#</a> \u5173\u95ED worker \u7EBF\u7A0B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// main.js\uFF08\u4E3B\u7EBF\u7A0B\uFF09</span>
<span class="token keyword">const</span> myWorker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">&#39;/worker.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFAworker</span>
myWorker<span class="token punctuation">.</span><span class="token function">terminate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5173\u95EDworker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5728worker-\u4E2D\u5BFC\u5165\u5176\u4ED6\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u5728worker-\u4E2D\u5BFC\u5165\u5176\u4ED6\u6A21\u5757" aria-hidden="true">#</a> \u5728worker \u4E2D\u5BFC\u5165\u5176\u4ED6\u6A21\u5757</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">&quot;./worker/user.worker.ts&quot;</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;module&quot;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u521B\u5EFAworker\u65F6\u63D0\u4F9B\u914D\u7F6E\u9009\u9879 <code>{ type: &quot;module&quot; }</code></p><h3 id="\u51CF\u5C11\u6570\u636E\u901A\u4FE1\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u51CF\u5C11\u6570\u636E\u901A\u4FE1\u65F6\u95F4" aria-hidden="true">#</a> \u51CF\u5C11\u6570\u636E\u901A\u4FE1\u65F6\u95F4</h3><p>\u4E3B\u7EBF\u7A0B\u4E0E\u5B50\u7EBF\u7A0B\u4E4B\u95F4\u53EF\u4EE5\u76F8\u4E92\u4EA4\u6362\u4F20\u9012\u4FE1\u606F\uFF0C\u90A3\u90FD\u53EF\u4EE5\u4F20\u9012\u54EA\u4E9B\u4FE1\u606F\u5462\uFF1F\u7B54\u6848\u662F\uFF1A\u53EF\u4EE5\u662F\u5404\u79CD\u683C\u5F0F\uFF0C\u4E0D\u4EC5\u4EC5\u662F\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E8C\u8FDB\u5236\u6570\u636E\u3002\u8FD9\u79CD\u4EA4\u6362\u91C7\u7528\u7684\u662F\u590D\u5236\u673A\u5236\uFF0C\u5373\u4E00\u4E2A\u7EBF\u7A0B\u5C06\u9700\u8981\u5206\u4EAB\u7684\u6570\u636E\u590D\u5236\u4E00\u4EFD\uFF0C\u901A\u8FC7postMessage\u65B9\u6CD5\u4EA4\u7ED9\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u3002\u5982\u679C\u6570\u636E\u91CF\u6BD4\u8F83\u5927\uFF0C\u8FD9\u79CD\u901A\u4FE1\u7684\u6548\u7387\u663E\u7136\u6BD4\u8F83\u4F4E\u3002\u56E0\u6B64\u5C31\u4F1A\u60F3\u5230\uFF0C\u5982\u679C\u5F00\u8F9F\u4E00\u4E2A\u7A7A\u95F4\u8BFB\u5199\u4FE1\u606F\uFF0C\u4F46\u662F\u53EA\u4F20\u9012\u8FD9\u4E2A\u7A7A\u95F4\u7684\u5F15\u7528\u5730\u5740\uFF0C\u5C82\u4E0D\u662F\u4F1A\u5F88\u597D\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6240\u4EE5<code>SharedArrayBuffer</code>\u51FA\u73B0</p><p>\u7531\u4E8E\u5E7D\u7075\u6F0F\u6D1E\uFF0C\u9700\u8981\u8BBE\u7F6E\u4E24\u4E2A\u6807\u5934\u6765\u5B9E\u73B0\u4F60\u7F51\u7AD9\u7684\u8DE8\u6E90\u9694\u79BB\uFF0C <code>Cross-Origin-Opener-Policy</code>\u8BBE\u7F6E\u4E3A same-origin\uFF08\u6765\u4FDD\u62A4\u4F60\u7684\u6E90\u7AD9\u70B9\u514D\u53D7\u653B\u51FB\uFF09 <code>Cross-Origin-Embedder-Policy</code> \u8BBE\u7F6E\u4E3A require-corp \u6216 credentialless\uFF08\u4FDD\u62A4\u53D7\u5BB3\u8005\u514D\u53D7\u4F60\u7684\u6E90\u7AD9\u70B9\u7684\u5F71\u54CD\uFF09</p><h2 id="vue-\u9879\u76EE\u4E2D\u4F7F\u7528worker" tabindex="-1"><a class="header-anchor" href="#vue-\u9879\u76EE\u4E2D\u4F7F\u7528worker" aria-hidden="true">#</a> vue \u9879\u76EE\u4E2D\u4F7F\u7528worker</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">openWorker</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">&quot;./worker/user.worker.ts&quot;</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  worker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">&quot;worker start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  worker<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      worker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">&quot;worker over main thend&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      worker<span class="token punctuation">.</span><span class="token function">terminate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">worker thend </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">&quot;worker thend ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[p];function c(i,l){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","webworker.html.vue"]]);export{u as default};
