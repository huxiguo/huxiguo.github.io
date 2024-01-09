import{_ as n,o as s,c as a,d as p}from"./app.91a380bb.js";const t={},e=p(`<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4\u4F60\u5BF9\u5806\u7684\u7406\u89E3-\u5982\u4F55\u5B9E\u73B0-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4\u4F60\u5BF9\u5806\u7684\u7406\u89E3-\u5982\u4F55\u5B9E\u73B0-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u5806\u7684\u7406\u89E3\uFF1F\u5982\u4F55\u5B9E\u73B0\uFF1F\u5E94\u7528\u573A\u666F\uFF1F</h1><p><img src="https://static.vue-js.com/dd12c700-1ed7-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u5806(Heap)\u662F\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D\u4E00\u7C7B\u7279\u6B8A\u7684\u6570\u636E\u7ED3\u6784\u7684\u7EDF\u79F0</p><p>\u5806\u901A\u5E38\u662F\u4E00\u4E2A\u53EF\u4EE5\u88AB\u770B\u505A\u4E00\u68F5\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u6570\u7EC4\u5BF9\u8C61\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/ea0fd1f0-1ed7-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>\u603B\u662F\u6EE1\u8DB3\u4E0B\u5217\u6027\u8D28\uFF1A</p><ul><li>\u5806\u4E2D\u67D0\u4E2A\u7ED3\u70B9\u7684\u503C\u603B\u662F\u4E0D\u5927\u4E8E\u6216\u4E0D\u5C0F\u4E8E\u5176\u7236\u7ED3\u70B9\u7684\u503C</li><li>\u5806\u603B\u662F\u4E00\u68F5\u5B8C\u5168\u4E8C\u53C9\u6811</li></ul><p>\u5806\u53C8\u53EF\u4EE5\u5206\u6210\u6700\u5927\u5806\u548C\u6700\u5C0F\u5806\uFF1A</p><ul><li>\u6700\u5927\u5806\uFF1A\u6BCF\u4E2A\u6839\u7ED3\u70B9\uFF0C\u90FD\u6709\u6839\u7ED3\u70B9\u7684\u503C\u5927\u4E8E\u4E24\u4E2A\u5B69\u5B50\u7ED3\u70B9\u7684\u503C</li><li>\u6700\u5C0F\u5806\uFF1A\u6BCF\u4E2A\u6839\u7ED3\u70B9\uFF0C\u90FD\u6709\u6839\u7ED3\u70B9\u7684\u503C\u5C0F\u4E8E\u5B69\u5B50\u7ED3\u70B9\u7684\u503C</li></ul><h2 id="\u4E8C\u3001\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u64CD\u4F5C" aria-hidden="true">#</a> \u4E8C\u3001\u64CD\u4F5C</h2><p>\u5806\u7684\u5143\u7D20\u5B58\u50A8\u65B9\u5F0F\uFF0C\u6309\u7167\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u987A\u5E8F\u5B58\u50A8\u65B9\u5F0F\u5B58\u50A8\u5728\u4E00\u4E2A\u4E00\u7EF4\u6570\u7EC4\u4E2D\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/ea0fd1f0-1ed7-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>\u7528\u4E00\u7EF4\u6570\u7EC4\u5B58\u50A8\u5219\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6839\u636E\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u7279\u6027\uFF0C\u53EF\u4EE5\u5F97\u5230\u5982\u4E0B\u7279\u6027\uFF1A</p><ul><li>\u6570\u7EC4\u96F6\u5750\u6807\u4EE3\u7801\u7684\u662F\u5806\u9876\u5143\u7D20</li><li>\u4E00\u4E2A\u8282\u70B9\u7684\u7236\u4EB2\u8282\u70B9\u7684\u5750\u6807\u7B49\u4E8E\u5176\u5750\u6807\u9664\u4EE5 2 \u6574\u6570\u90E8\u5206</li><li>\u4E00\u4E2A\u8282\u70B9\u7684\u5DE6\u8282\u70B9\u7B49\u4E8E\u5176\u672C\u8EAB\u8282\u70B9\u5750\u6807 * 2 + 1</li><li>\u4E00\u4E2A\u8282\u70B9\u7684\u53F3\u8282\u70B9\u7B49\u4E8E\u5176\u672C\u8EAB\u8282\u70B9\u5750\u6807 * 2 + 2</li></ul><p>\u6839\u636E\u4E0A\u8FF0\u5806\u7684\u7279\u6027\uFF0C\u4E0B\u9762\u6784\u5EFA\u6700\u5C0F\u5806\u7684\u6784\u9020\u51FD\u6570\u548C\u5BF9\u5E94\u7684\u5C5E\u6027\u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MinHeap</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B58\u50A8\u5806\u5143\u7D20</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u83B7\u53D6\u7236\u5143\u7D20\u5750\u6807</span>
  <span class="token function">getParentIndex</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u83B7\u53D6\u5DE6\u8282\u70B9\u5143\u7D20\u5750\u6807</span>
  <span class="token function">getLeftIndex</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u83B7\u53D6\u53F3\u8282\u70B9\u5143\u7D20\u5750\u6807</span>
  <span class="token function">getRightIndex</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u4EA4\u6362\u5143\u7D20</span>
  <span class="token function">swap</span><span class="token punctuation">(</span><span class="token parameter">i1<span class="token punctuation">,</span> i2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i1<span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i2<span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i2<span class="token punctuation">]</span> <span class="token operator">=</span> temp
  <span class="token punctuation">}</span>

  <span class="token comment">// \u67E5\u770B\u5806\u9876\u5143\u7D20</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u83B7\u53D6\u5806\u5143\u7D20\u7684\u5927\u5C0F</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D89\u53CA\u5230\u5806\u7684\u64CD\u4F5C\u6709\uFF1A</p><ul><li>\u63D2\u5165</li><li>\u5220\u9664</li></ul><h3 id="\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165" aria-hidden="true">#</a> \u63D2\u5165</h3><p>\u5C06\u503C\u63D2\u5165\u5806\u7684\u5E95\u90E8\uFF0C\u5373\u6570\u7EC4\u7684\u5C3E\u90E8\uFF0C\u5F53\u63D2\u5165\u4E00\u4E2A\u65B0\u7684\u5143\u7D20\u4E4B\u540E\uFF0C\u5806\u7684\u7ED3\u6784\u5C31\u4F1A\u88AB\u7834\u574F\uFF0C\u56E0\u6B64\u9700\u8981\u5806\u4E2D\u4E00\u4E2A\u5143\u7D20\u505A\u4E0A\u79FB\u64CD\u4F5C</p><p>\u5C06\u8FD9\u4E2A\u503C\u548C\u5B83\u7236\u8282\u70B9\u8FDB\u884C\u4EA4\u6362\uFF0C\u76F4\u5230\u7236\u8282\u70B9\u5C0F\u4E8E\u7B49\u4E8E\u8FD9\u4E2A\u63D2\u5165\u7684\u503C\uFF0C\u5927\u5C0F\u4E3A<code>k</code>\u7684\u5806\u4E2D\u63D2\u5165\u5143\u7D20\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A<code>O(logk)</code></p><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF0C22 \u8282\u70B9\u662F\u65B0\u63D2\u5165\u7684\u5143\u7D20\uFF0C\u7136\u540E\u8FDB\u884C\u4E0A\u79FB\u64CD\u4F5C\uFF1A</p><p><img src="https://static.vue-js.com/06893fb0-1ed8-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>\u76F8\u5173\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u63D2\u5165\u5143\u7D20</span>
<span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shifUp</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E0A\u79FB\u64CD\u4F5C</span>
<span class="token function">shiftUp</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>
  <span class="token keyword">const</span> parentIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getParentIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>parentIndex<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shiftUp</span><span class="token punctuation">(</span>parentIndex<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h3><p>\u5E38\u89C1\u64CD\u4F5C\u662F\u7528\u6570\u7EC4\u5C3E\u90E8\u5143\u7D20\u66FF\u6362\u5806\u9876\uFF0C\u8FD9\u91CC\u4E0D\u76F4\u63A5\u5220\u9664\u5806\u9876\uFF0C\u56E0\u4E3A\u6240\u6709\u7684\u5143\u7D20\u4F1A\u5411\u524D\u79FB\u52A8\u4E00\u4F4D\uFF0C\u4F1A\u7834\u574F\u4E86\u5806\u7684\u7ED3\u6784</p><p>\u7136\u540E\u8FDB\u884C\u4E0B\u79FB\u64CD\u4F5C\uFF0C\u5C06\u65B0\u7684\u5806\u9876\u548C\u5B83\u7684\u5B50\u8282\u70B9\u8FDB\u884C\u4EA4\u6362\uFF0C\u76F4\u5230\u5B50\u8282\u70B9\u5927\u4E8E\u7B49\u4E8E\u8FD9\u4E2A\u65B0\u7684\u5806\u9876\uFF0C\u5220\u9664\u5806\u9876\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A<code>O(logk)</code></p><p>\u6574\u4F53\u5982\u4E0B\u56FE\u64CD\u4F5C\uFF1A</p><p><img src="https://static.vue-js.com/12a2a160-1ed8-11ec-a752-75723a64e8f5.png" alt=""></p><p>\u76F8\u5173\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5220\u9664\u5143\u7D20</span>
<span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shiftDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E0B\u79FB\u64CD\u4F5C</span>
<span class="token function">shiftDown</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> leftIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLeftIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
  <span class="token keyword">const</span> rightIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRightIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>leftIndex<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shiftDown</span><span class="token punctuation">(</span>leftIndex<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>rightIndex<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shiftDown</span><span class="token punctuation">(</span>rightIndex<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65F6\u95F4\u590D\u6742\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u590D\u6742\u5EA6" aria-hidden="true">#</a> \u65F6\u95F4\u590D\u6742\u5EA6</h3><p>\u5173\u4E8E\u5806\u7684\u63D2\u5165\u548C\u5220\u9664\u65F6\u95F4\u590D\u6742\u5EA6\u90FD\u662F<code>Olog(n)</code>\uFF0C\u539F\u56E0\u5728\u4E8E\u5305\u542B n \u4E2A\u8282\u70B9\u7684\u5B8C\u5168\u4E8C\u53C9\u6811\uFF0C\u6811\u7684\u9AD8\u5EA6\u4E0D\u4F1A\u8D85\u8FC7<code>log2n</code></p><p>\u5806\u5316\u7684\u8FC7\u7A0B\u662F\u987A\u7740\u8282\u70B9\u6240\u5728\u8DEF\u5F84\u6BD4\u8F83\u4EA4\u6362\u7684\uFF0C\u6240\u4EE5\u5806\u5316\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u8DDF\u6811\u7684\u9AD8\u5EA6\u6210\u6B63\u6BD4\uFF0C\u4E5F\u5C31\u662F<code>Olog(n)</code>\uFF0C\u63D2\u5165\u6570\u636E\u548C\u5220\u9664\u5806\u9876\u5143\u7D20\u7684\u4E3B\u8981\u903B\u8F91\u5C31\u662F\u5806\u5316</p><h3 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a> \u4E09\u3001\u603B\u7ED3</h3><ul><li>\u5806\u662F\u4E00\u4E2A\u5B8C\u5168\u4E8C\u53C9\u6811</li><li>\u5806\u4E2D\u6BCF\u4E00\u4E2A\u8282\u70B9\u7684\u503C\u90FD\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E(\u6216\u5C0F\u4E8E\u7B49\u4E8E)\u5176\u5B50\u6811\u4E2D\u6BCF\u4E2A\u8282\u70B9\u7684\u503C</li><li>\u5BF9\u4E8E\u6BCF\u4E2A\u8282\u70B9\u7684\u503C\u90FD\u5927\u4E8E\u7B49\u4E8E\u5B50\u6811\u4E2D\u6BCF\u4E2A\u8282\u70B9\u503C\u7684\u5806\uFF0C\u53EB\u4F5C\u201C\u5927\u9876\u5806\u201D</li><li>\u5BF9\u4E8E\u6BCF\u4E2A\u8282\u70B9\u7684\u503C\u90FD\u5C0F\u4E8E\u7B49\u4E8E\u5B50\u6811\u4E2D\u6BCF\u4E2A\u8282\u70B9\u503C\u7684\u5806\uFF0C\u53EB\u4F5C\u201C\u5C0F\u9876\u5806\u201D</li><li>\u6839\u636E\u5806\u7684\u7279\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5806\u6765\u8FDB\u884C\u6392\u5E8F\u64CD\u4F5C\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5176\u6765\u6C42\u7B2C\u51E0\u5927\u6216\u8005\u7B2C\u51E0\u5C0F\u7684\u503C</li></ul>`,40),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","Heap.html.vue"]]);export{k as default};
