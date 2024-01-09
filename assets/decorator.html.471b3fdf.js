import{_ as n,o as s,c as a,d as t}from"./app.91a380bb.js";const p={},e=t(`<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4\u4F60\u5BF9-typescript-\u88C5\u9970\u5668\u7684\u7406\u89E3-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4\u4F60\u5BF9-typescript-\u88C5\u9970\u5668\u7684\u7406\u89E3-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9 TypeScript \u88C5\u9970\u5668\u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F\uFF1F</h1><p><img src="https://static.vue-js.com/f8905dd0-111c-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u88C5\u9970\u5668\u662F\u4E00\u79CD\u7279\u6B8A\u7C7B\u578B\u7684\u58F0\u660E\uFF0C\u5B83\u80FD\u591F\u88AB\u9644\u52A0\u5230\u7C7B\u58F0\u660E\uFF0C\u65B9\u6CD5\uFF0C \u8BBF\u95EE\u7B26\uFF0C\u5C5E\u6027\u6216\u53C2\u6570\u4E0A</p><p>\u662F\u4E00\u79CD\u5728\u4E0D\u6539\u53D8\u539F\u7C7B\u548C\u4F7F\u7528\u7EE7\u627F\u7684\u60C5\u51B5\u4E0B\uFF0C\u52A8\u6001\u5730\u6269\u5C55\u5BF9\u8C61\u529F\u80FD</p><p>\u540C\u6837\u7684\uFF0C\u672C\u8D28\u4E5F\u4E0D\u662F\u4EC0\u4E48\u9AD8\u5927\u4E0A\u7684\u7ED3\u6784\uFF0C\u5C31\u662F\u4E00\u4E2A\u666E\u901A\u7684\u51FD\u6570\uFF0C<code>@expression</code> \u7684\u5F62\u5F0F\u5176\u5B9E\u662F<code>Object.defineProperty</code>\u7684\u8BED\u6CD5\u7CD6</p><p><code>expression </code>\u6C42\u503C\u540E\u5FC5\u987B\u4E5F\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u4F1A\u5728\u8FD0\u884C\u65F6\u88AB\u8C03\u7528\uFF0C\u88AB\u88C5\u9970\u7684\u58F0\u660E\u4FE1\u606F\u505A\u4E3A\u53C2\u6570\u4F20\u5165</p><h2 id="\u4E8C\u3001\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u4E8C\u3001\u4F7F\u7528\u65B9\u5F0F</h2><p>\u7531\u4E8E<code>typescript</code>\u662F\u4E00\u4E2A\u5B9E\u9A8C\u6027\u7279\u6027\uFF0C\u82E5\u8981\u4F7F\u7528\uFF0C\u9700\u8981\u5728<code>tsconfig.json</code>\u6587\u4EF6\u542F\u52A8\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES5&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>typescript</code>\u88C5\u9970\u5668\u7684\u4F7F\u7528\u548C<code>javascript</code>\u57FA\u672C\u4E00\u81F4</p><p>\u7C7B\u7684\u88C5\u9970\u5668\u53EF\u4EE5\u88C5\u9970\uFF1A</p><ul><li><p>\u7C7B</p></li><li><p>\u65B9\u6CD5/\u5C5E\u6027</p></li><li><p>\u53C2\u6570</p></li><li><p>\u8BBF\u95EE\u5668</p></li></ul><h3 id="\u7C7B\u88C5\u9970" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u88C5\u9970" aria-hidden="true">#</a> \u7C7B\u88C5\u9970</h3><p>\u4F8B\u5982\u58F0\u660E\u4E00\u4E2A\u51FD\u6570 <code>addAge</code> \u53BB\u7ED9 Class \u7684\u5C5E\u6027 <code>age</code> \u6DFB\u52A0\u5E74\u9F84.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">addAge</span><span class="token punctuation">(</span>constructor<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  constructor<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">addAge</span></span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;huihui&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u5B9E\u9645\u7B49\u540C\u4E8E\u4EE5\u4E0B\u5F62\u5F0F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Person <span class="token operator">=</span> <span class="token function">addAge</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u53EF\u4EE5\u770B\u5230\uFF0C\u5F53\u88C5\u9970\u5668\u4F5C\u4E3A\u4FEE\u9970\u7C7B\u7684\u65F6\u5019\uFF0C\u4F1A\u628A\u6784\u9020\u5668\u4F20\u9012\u8FDB\u53BB\u3002 <code>constructor.prototype.age</code> \u5C31\u662F\u5728\u6BCF\u4E00\u4E2A\u5B9E\u4F8B\u5316\u5BF9\u8C61\u4E0A\u9762\u6DFB\u52A0\u4E00\u4E2A <code>age</code> \u5C5E\u6027</p><h3 id="\u65B9\u6CD5-\u5C5E\u6027\u88C5\u9970" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5-\u5C5E\u6027\u88C5\u9970" aria-hidden="true">#</a> \u65B9\u6CD5/\u5C5E\u6027\u88C5\u9970</h3><p>\u540C\u6837\uFF0C\u88C5\u9970\u5668\u53EF\u4EE5\u7528\u4E8E\u4FEE\u9970\u7C7B\u7684\u65B9\u6CD5\uFF0C\u8FD9\u65F6\u5019\u88C5\u9970\u5668\u51FD\u6570\u63A5\u6536\u7684\u53C2\u6570\u53D8\u6210\u4E86\uFF1A</p><ul><li>target\uFF1A\u5BF9\u8C61\u7684\u539F\u578B</li><li>propertyKey\uFF1A\u65B9\u6CD5\u7684\u540D\u79F0</li><li>descriptor\uFF1A\u65B9\u6CD5\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26</li></ul><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u4E09\u4E2A\u5C5E\u6027\u5B9E\u9645\u5C31\u662F<code>Object.defineProperty</code>\u7684\u4E09\u4E2A\u53C2\u6570\uFF0C\u5982\u679C\u662F\u7C7B\u7684\u5C5E\u6027\uFF0C\u5219\u6CA1\u6709\u4F20\u9012\u7B2C\u4E09\u4E2A\u53C2\u6570</p><p>\u5982\u4E0B\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u58F0\u660E\u88C5\u9970\u5668\u4FEE\u9970\u65B9\u6CD5/\u5C5E\u6027</span>
<span class="token keyword">function</span> <span class="token function">method</span><span class="token punctuation">(</span>
  target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
  propertyKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  descriptor<span class="token operator">:</span> PropertyDescriptor
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;prop &#39;</span> <span class="token operator">+</span> propertyKey<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;desc &#39;</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>descriptor<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;\\n\\n&#39;</span><span class="token punctuation">)</span>
  descriptor<span class="token punctuation">.</span>writable <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">property</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> propertyKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;target&#39;</span><span class="token punctuation">,</span> target<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;propertyKey&#39;</span><span class="token punctuation">,</span> propertyKey<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;huihui&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">method</span></span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;instance method&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">method</span></span>
  <span class="token keyword">static</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;static method&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> xmz <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u4FEE\u6539\u5B9E\u4F8B\u65B9\u6CD5say</span>
xmz<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;edit&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/e96bc1b0-114d-11ec-8e64-91fdec0f05a1.png" alt=""></p><h3 id="\u53C2\u6570\u88C5\u9970" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u88C5\u9970" aria-hidden="true">#</a> \u53C2\u6570\u88C5\u9970</h3><p>\u63A5\u6536 3 \u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u662F\uFF1A</p><ul><li>target \uFF1A\u5F53\u524D\u5BF9\u8C61\u7684\u539F\u578B</li><li>propertyKey \uFF1A\u53C2\u6570\u7684\u540D\u79F0</li><li>index\uFF1A\u53C2\u6570\u6570\u7EC4\u4E2D\u7684\u4F4D\u7F6E</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">logParameter</span><span class="token punctuation">(</span>target<span class="token operator">:</span> Object<span class="token punctuation">,</span> propertyName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>propertyName<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
  <span class="token function">greet</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">logParameter</span></span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> emp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
emp<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u5165\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/f2f32de0-114d-11ec-a752-75723a64e8f5.png" alt=""></p><h3 id="\u8BBF\u95EE\u5668\u88C5\u9970" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u5668\u88C5\u9970" aria-hidden="true">#</a> \u8BBF\u95EE\u5668\u88C5\u9970</h3><p>\u4F7F\u7528\u8D77\u6765\u65B9\u5F0F\u4E0E\u65B9\u6CD5\u88C5\u9970\u4E00\u81F4\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">modification</span><span class="token punctuation">(</span>
  target<span class="token operator">:</span> Object<span class="token punctuation">,</span>
  propertyKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  descriptor<span class="token operator">:</span> PropertyDescriptor
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;prop &#39;</span> <span class="token operator">+</span> propertyKey<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;desc &#39;</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>descriptor<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;\\n\\n&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  _name<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> <span class="token string">&#39;huihui&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">modification</span></span>
  <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u88C5\u9970\u5668\u5DE5\u5382" tabindex="-1"><a class="header-anchor" href="#\u88C5\u9970\u5668\u5DE5\u5382" aria-hidden="true">#</a> \u88C5\u9970\u5668\u5DE5\u5382</h3><p>\u5982\u679C\u60F3\u8981\u4F20\u9012\u53C2\u6570\uFF0C\u4F7F\u88C5\u9970\u5668\u53D8\u6210\u7C7B\u4F3C\u5DE5\u5382\u51FD\u6570\uFF0C\u53EA\u9700\u8981\u5728\u88C5\u9970\u5668\u51FD\u6570\u5185\u90E8\u518D\u51FD\u6570\u4E00\u4E2A\u51FD\u6570\u5373\u53EF\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">addAge</span><span class="token punctuation">(</span>age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>constructor<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    constructor<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">addAge</span></span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;huihui&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6267\u884C\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a> \u6267\u884C\u987A\u5E8F</h3><p>\u5F53\u591A\u4E2A\u88C5\u9970\u5668\u5E94\u7528\u4E8E\u4E00\u4E2A\u58F0\u660E\u4E0A\uFF0C\u5C06\u7531\u4E0A\u81F3\u4E0B\u4F9D\u6B21\u5BF9\u88C5\u9970\u5668\u8868\u8FBE\u5F0F\u6C42\u503C\uFF0C\u6C42\u503C\u7684\u7ED3\u679C\u4F1A\u88AB\u5F53\u4F5C\u51FD\u6570\uFF0C\u7531\u4E0B\u81F3\u4E0A\u4F9D\u6B21\u8C03\u7528\uFF0C\u4F8B\u5982\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;f(): evaluated&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> propertyKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;f(): called&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;g(): evaluated&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> propertyKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;g(): called&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">f</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">g</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8F93\u51FA</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> evaluated
<span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> evaluated
<span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> called
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> called
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E09\u3001\u5E94\u7528\u573A\u666F</h2><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4F7F\u7528\u88C5\u9970\u5668\u5B58\u5728\u4E24\u4E2A\u663E\u8457\u7684\u4F18\u70B9\uFF1A</p><ul><li>\u4EE3\u7801\u53EF\u8BFB\u6027\u53D8\u5F3A\u4E86\uFF0C\u88C5\u9970\u5668\u547D\u540D\u76F8\u5F53\u4E8E\u4E00\u4E2A\u6CE8\u91CA</li><li>\u5728\u4E0D\u6539\u53D8\u539F\u6709\u4EE3\u7801\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u539F\u6765\u529F\u80FD\u8FDB\u884C\u6269\u5C55</li></ul><p>\u540E\u9762\u7684\u4F7F\u7528\u573A\u666F\u4E2D\uFF0C\u501F\u52A9\u88C5\u9970\u5668\u7684\u7279\u6027\uFF0C\u9664\u4E86\u63D0\u9AD8\u53EF\u8BFB\u6027\u4E4B\u540E\uFF0C\u9488\u5BF9\u5DF2\u7ECF\u5B58\u5728\u7684\u7C7B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u88C5\u9970\u5668\u7684\u7279\u6027\uFF0C\u5728\u4E0D\u6539\u53D8\u539F\u6709\u4EE3\u7801\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u539F\u6765\u529F\u80FD\u8FDB\u884C\u6269\u5C55</p>`,46),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","decorator.html.vue"]]);export{r as default};
