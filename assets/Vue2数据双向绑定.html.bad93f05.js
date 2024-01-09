import{_ as n,o as s,c as a,d as t}from"./app.91a380bb.js";const e={},p=t(`<h1 id="vue2-\u53CC\u5411\u6570\u636E\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#vue2-\u53CC\u5411\u6570\u636E\u7ED1\u5B9A" aria-hidden="true">#</a> Vue2 \u53CC\u5411\u6570\u636E\u7ED1\u5B9A</h1><p><code>Vue</code>\u662F\u901A\u8FC7\u6570\u636E\u52AB\u6301\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u6570\u636E\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\u7684\uFF0C\u5176\u4E2D\u6700\u6838\u5FC3\u7684\u65B9\u6CD5\u4FBF\u662F\u901A\u8FC7<code>Object.defineProperty()</code>\u6765\u5B9E\u73B0\u5BF9\u5C5E\u6027\u7684\u52AB\u6301\uFF0C\u8BE5\u65B9\u6CD5\u5141\u8BB8\u7CBE\u786E\u5730\u6DFB\u52A0\u6216\u4FEE\u6539\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u5BF9\u6570\u636E\u6DFB\u52A0\u5C5E\u6027\u63CF\u8FF0\u7B26\u4E2D\u7684<code>getter</code>\u4E0E<code>setter</code>\u5B9E\u73B0\u52AB\u6301\u3002</p><h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p>\u8FD0\u884C\u4E00\u4E2A<code>Vue</code>\u5B9E\u4F8B\u5E76\u5C06<code>data</code>\u6253\u5370\uFF0C\u53EF\u4EE5\u770B\u5230\u5BF9\u8C61\u4E2D\u5BF9\u4E8E<code>msg</code>\u6709\u4E86<code>get</code>\u4E0E<code>set</code>\uFF0C\u901A\u8FC7\u4ED6\u4EEC\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6570\u636E\u7684\u52AB\u6301\uFF0C\u4ECE\u800C\u8FDB\u884C\u6570\u636E\u7684\u66F4\u65B0\uFF0C\u5728<code>Vue</code>\u4E2D<code>get</code>\u4E0E<code>set</code>\u662F\u901A\u8FC7<code>ES5</code>\u7684<code>Object.defineProperty()</code>\u65B9\u6CD5\u5B9A\u4E49\u7684\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {__ob__: Observer}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
{__ob__: Observer}
    msg: &quot;hello world&quot;
    __ob__: Observer {value: {\u2026}, shallow: false, mock: false, dep: Dep, vmCount: 1}
    get msg: \u0192 reactiveGetter()
    set msg: \u0192 reactiveSetter(newVal)
    __proto__: Object
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5206\u6790\u4E0E\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u4E0E\u5B9E\u73B0" aria-hidden="true">#</a> \u5206\u6790\u4E0E\u5B9E\u73B0</h2><p><code>Vue</code>\u7684\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\uFF0C\u7B80\u5355\u70B9\u6765\u8BF4\u5206\u4E3A\u4EE5\u4E0B\u4E09\u4E2A\u90E8\u5206\uFF1A</p><ul><li><code>Observer</code>: \u8FD9\u91CC\u7684\u4E3B\u8981\u5DE5\u4F5C\u662F\u9012\u5F52\u5730\u76D1\u542C\u5BF9\u8C61\u4E0A\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u5728\u5C5E\u6027\u503C\u6539\u53D8\u7684\u65F6\u5019\uFF0C\u89E6\u53D1\u76F8\u5E94\u7684<code>Watcher</code>\u3002</li><li><code>Watcher</code>: \u89C2\u5BDF\u8005\uFF0C\u5F53\u76D1\u542C\u7684\u6570\u636E\u503C\u4FEE\u6539\u65F6\uFF0C\u6267\u884C\u54CD\u5E94\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5728<code>Vue</code>\u91CC\u9762\u7684\u66F4\u65B0\u6A21\u677F\u5185\u5BB9\u3002</li><li><code>Dep</code>: \u94FE\u63A5<code>Observer</code>\u548C<code>Watcher</code>\u7684\u6865\u6881\uFF0C\u6BCF\u4E00\u4E2A<code>Observer</code>\u5BF9\u5E94\u4E00\u4E2A<code>Dep</code>\uFF0C\u5B83\u5185\u90E8\u7EF4\u62A4\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4FDD\u5B58\u4E0E\u8BE5<code>Observer</code>\u76F8\u5173\u7684<code>Watcher</code>\u3002</li></ul><p>\u9996\u5148\u5B9E\u73B0<code>Dep</code>\u65B9\u6CD5\uFF0C\u8FD9\u662F\u94FE\u63A5<code>Observer</code>\u548C<code>Watcher</code>\u7684\u6865\u6881\uFF0C\u7B80\u5355\u6765\u8BF4\uFF0C\u5C31\u662F\u4E00\u4E2A\u76D1\u542C\u8005\u6A21\u5F0F\u7684\u4E8B\u4EF6\u603B\u7EBF\uFF0C\u8D1F\u8D23\u63A5\u6536<code>watcher</code>\u5E76\u4FDD\u5B58\u3002\u5176\u4E2D<code>subscribers</code>\u6570\u7EC4\u7528\u4EE5\u4FDD\u5B58\u5C06\u8981\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C<code>addSub</code>\u65B9\u6CD5\u7528\u4EE5\u6DFB\u52A0\u4E8B\u4EF6\uFF0C<code>notify</code>\u65B9\u6CD5\u7528\u4EE5\u89E6\u53D1\u4E8B\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">__dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>subscribers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">addSub</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__dep<span class="token punctuation">.</span>target <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>subscribers<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>__dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>subscribers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>watcher<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">notifyAll</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subscribers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">watcher</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> watcher<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Observer</code>\u65B9\u6CD5\u5C31\u662F\u5C06\u6570\u636E\u8FDB\u884C\u52AB\u6301\uFF0C\u4F7F\u7528<code>Object.defineProperty</code>\u5BF9\u5C5E\u6027\u8FDB\u884C\u91CD\u5B9A\u4E49\uFF0C\u6CE8\u610F\u4E00\u4E2A\u5C5E\u6027\u63CF\u8FF0\u7B26\u53EA\u80FD\u662F\u6570\u636E\u63CF\u8FF0\u7B26\u548C\u5B58\u53D6\u63CF\u8FF0\u7B26\u8FD9\u4E24\u8005\u5176\u4E2D\u4E4B\u4E00\uFF0C\u4E0D\u80FD\u540C\u65F6\u662F\u4E24\u8005\uFF0C\u6240\u4EE5\u5728\u8FD9\u4E2A\u5C0F<code>Demo</code>\u4E2D\u4F7F\u7528<code>getter</code>\u4E0E<code>setter</code>\u64CD\u4F5C\u7684\u7684\u662F\u5B9A\u4E49\u7684<code>value</code>\u5C40\u90E8\u53D8\u91CF\uFF0C\u4E3B\u8981\u662F\u5229\u7528\u4E86<code>let</code>\u7684\u5757\u7EA7\u4F5C\u7528\u57DF\u5B9A\u4E49<code>value</code>\u5C40\u90E8\u53D8\u91CF\u5E76\u5229\u7528\u95ED\u5305\u7684\u539F\u7406\u5B9E\u73B0\u4E86<code>getter</code>\u4E0E<code>setter</code>\u64CD\u4F5C<code>value</code>\uFF0C\u5BF9\u4E8E\u6BCF\u4E2A\u6570\u636E\u7ED1\u5B9A\u65F6\u90FD\u6709\u4E00\u4E2A\u81EA\u5DF1\u7684<code>dep</code>\u5B9E\u4F8B\uFF0C\u5229\u7528\u8FD9\u4E2A\u603B\u7EBF\u6765\u4FDD\u5B58\u5173\u4E8E\u8FD9\u4E2A\u5C5E\u6027\u7684<code>Watcher</code>\uFF0C\u5E76\u5728<code>set</code>\u66F4\u65B0\u6570\u636E\u7684\u65F6\u5019\u89E6\u53D1\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">__observe</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">__dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> value <span class="token operator">=</span> obj<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;[object Object]&quot;</span><span class="token punctuation">)</span>
      <span class="token function">__observe</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> item<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span>__dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveSetter</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> newVal<span class="token punctuation">)</span> <span class="token keyword">return</span> value<span class="token punctuation">;</span>
        value <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
        dep<span class="token punctuation">.</span><span class="token function">notifyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Watcher</code>\u65B9\u6CD5\u4F20\u5165\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u7528\u4EE5\u6267\u884C\u6570\u636E\u53D8\u66F4\u540E\u7684\u64CD\u4F5C\uFF0C\u4E00\u822C\u662F\u7528\u6765\u8FDB\u884C\u6A21\u677F\u7684\u6E32\u67D3\uFF0C<code>update</code>\u65B9\u6CD5\u5C31\u662F\u5728\u6570\u636E\u53D8\u66F4\u540E\u6267\u884C\u7684\u65B9\u6CD5\uFF0C<code>activeRun</code>\u662F\u9996\u6B21\u8FDB\u884C\u7ED1\u5B9A\u65F6\u6267\u884C\u7684\u64CD\u4F5C\uFF0C\u5173\u4E8E\u8FD9\u4E2A\u64CD\u4F5C\u4E2D\u7684<code>__dep.target</code>\uFF0C\u4ED6\u7684\u4E3B\u8981\u76EE\u7684\u662F\u5C06\u6267\u884C\u56DE\u8C03\u51FD\u6570\u76F8\u5173\u7684\u6570\u636E\u8FDB\u884C<code>sub</code>\uFF0C\u4F8B\u5982\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u7528\u5230\u4E86<code>msg</code>\uFF0C\u90A3\u4E48\u5728\u6267\u884C\u8FD9\u4E2A<code>activeRun</code>\u7684\u65F6\u5019<code>__dep.target</code>\u5C31\u4F1A\u6307\u5411<code>this</code>\uFF0C\u7136\u540E\u6267\u884C<code>fn()</code>\u7684\u65F6\u5019\u4F1A\u53D6\u5F97<code>msg</code>\uFF0C\u6B64\u65F6\u5C31\u4F1A\u89E6\u53D1<code>msg</code>\u7684<code>get()</code>\uFF0C\u800C<code>get</code>\u4E2D\u4F1A\u5224\u65AD\u8FD9\u4E2A<code>__dep.target</code>\u662F\u4E0D\u662F\u7A7A\uFF0C\u6B64\u65F6\u8FD9\u4E2A<code>__dep.target</code>\u4E0D\u4E3A\u7A7A\uFF0C\u4E0A\u6587\u63D0\u5230\u4E86\u6BCF\u4E2A\u5C5E\u6027\u90FD\u4F1A\u6709\u4E00\u4E2A\u81EA\u5DF1\u7684<code>dep</code>\u5B9E\u4F8B\uFF0C\u6B64\u65F6\u8FD9\u4E2A<code>__dep.target</code>\u4FBF\u52A0\u5165\u81EA\u8EAB\u5B9E\u4F8B\u7684<code>subscribers</code>\uFF0C\u5728\u6267\u884C\u5B8C\u4E4B\u540E\uFF0C\u4FBF\u5C06<code>__dep.target</code>\u8BBE\u7F6E\u4E3A<code>null</code>\uFF0C\u91CD\u590D\u8FD9\u4E2A\u8FC7\u7A0B\u5C06\u6240\u6709\u7684\u76F8\u5173\u5C5E\u6027\u4E0E<code>watcher</code>\u8FDB\u884C\u4E86\u7ED1\u5B9A\uFF0C\u5728\u76F8\u5173\u5C5E\u6027\u8FDB\u884C<code>set</code>\u65F6\uFF0C\u5C31\u4F1A\u89E6\u53D1\u5404\u4E2A<code>watcher</code>\u7684<code>update</code>\u7136\u540E\u6267\u884C\u6E32\u67D3\u7B49\u64CD\u4F5C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">__watcher</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">activeRun</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    __dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    __dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">activeRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[p];function o(l,u){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","Vue2\u6570\u636E\u53CC\u5411\u7ED1\u5B9A.html.vue"]]);export{d as default};
