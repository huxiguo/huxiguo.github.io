import{_ as e,o as s,c as n,d as a}from"./app.91a380bb.js";const l={},i=a(`<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4\u4F60\u5BF9-shell-\u7684\u7406\u89E3-\u5E38\u89C1\u7684\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4\u4F60\u5BF9-shell-\u7684\u7406\u89E3-\u5E38\u89C1\u7684\u547D\u4EE4" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9 shell \u7684\u7406\u89E3\uFF1F\u5E38\u89C1\u7684\u547D\u4EE4\uFF1F</h1><p><img src="https://static.vue-js.com/71003620-0883-11ec-a752-75723a64e8f5.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p><code>Shell </code>\u662F\u4E00\u4E2A\u7531<code>c</code>\u8BED\u8A00\u7F16\u5199\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5B83\u662F\u7528\u6237\u4F7F\u7528 Linux \u7684\u6865\u6881\u3002Shell \u65E2\u662F\u4E00\u79CD\u547D\u4EE4\u8BED\u8A00\uFF0C\u53C8\u662F\u4E00\u79CD\u7A0B\u5E8F\u8BBE\u8BA1\u8BED\u8A00</p><p>\u5B83\u8FDE\u63A5\u4E86\u7528\u6237\u548C<code>Linux</code>\u5185\u6838\uFF0C\u8BA9\u7528\u6237\u80FD\u591F\u66F4\u52A0\u9AD8\u6548\u3001\u5B89\u5168\u3001\u4F4E\u6210\u672C\u5730\u4F7F\u7528 <code>Linux</code> \u5185\u6838</p><p>\u5176\u672C\u8EAB\u5E76\u4E0D\u662F\u5185\u6838\u7684\u4E00\u90E8\u5206\uFF0C\u5B83\u53EA\u662F\u7AD9\u5728\u5185\u6838\u7684\u57FA\u7840\u4E0A\u7F16\u5199\u7684\u4E00\u4E2A\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5B83\u548C QQ\u3001\u5FAE\u4FE1\u7B49\u5176\u5B83\u8F6F\u4EF6\u6CA1\u6709\u4EC0\u4E48\u533A\u522B\uFF0C\u7279\u6B8A\u7684\u5730\u65B9\u5C31\u662F\u5F00\u673A\u7ACB\u9A6C\u542F\u52A8\uFF0C\u5E76\u5448\u73B0\u5728\u7528\u6237\u9762\u524D</p><p>\u4E3B\u8981\u4F5C\u7528\u662F\u63A5\u6536\u7528\u6237\u8F93\u5165\u7684\u547D\u4EE4\uFF0C\u5E76\u5BF9\u547D\u4EE4\u8FDB\u884C\u5904\u7406\uFF0C\u5904\u7406\u5B8C\u6BD5\u540E\u518D\u5C06\u7ED3\u679C\u53CD\u9988\u7ED9\u7528\u6237\uFF0C\u6BD4\u5982\u8F93\u51FA\u5230\u663E\u793A\u5668\u3001\u5199\u5165\u5230\u6587\u4EF6\u7B49\uFF0C\u540C\u6837\u80FD\u591F\u8C03\u7528\u548C\u7EC4\u7EC7\u5176\u4ED6\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u76F8\u5F53\u4E8E\u4E00\u4E2A\u9886\u5BFC\u8005\u7684\u8EAB\u4EFD\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/80db0ca0-0883-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>\u90A3\u4E48<code>shell</code>\u811A\u672C\u5C31\u662F\u591A\u4E2A <code>Shell</code> \u547D\u4EE4\u7684\u7EC4\u5408\u5E76\u901A\u8FC7 <code>if</code> \u6761\u4EF6\u5206\u652F\u63A7\u5236\u6216\u5FAA\u73AF\u6765\u7EC4\u5408\u8FD0\u7B97\uFF0C\u5B9E\u73B0\u4E00\u4E9B\u590D\u6742\u529F\u80FD\uFF0C\u6587\u4EF6\u540E\u7F00\u540D\u4E3A<code>.sh</code></p><p>\u5E38\u7528\u7684 <code>ls</code> \u547D\u4EE4\uFF0C\u5B83\u672C\u8EAB\u4E5F\u662F\u4E00\u4E2A <code>Shell</code> \u811A\u672C\uFF0C\u901A\u8FC7\u6267\u884C\u8FD9\u4E2A <code>Shell</code> \u811A\u672C\u53EF\u4EE5\u5217\u4E3E\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u5217\u8868\uFF0C\u5982\u4E0B\u521B\u5EFA\u4E00\u4E2A<code>hello.sh</code>\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># \u6267\u884C\u7684\u547D\u4EE4\u4E3B\u4F53</span>
<span class="token function">ls</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>#!/bin/bash \uFF1A\u6307\u5B9A\u811A\u672C\u8981\u4F7F\u7528\u7684 Shell \u7C7B\u578B\u4E3A Bash</p></li><li><p>ls\u3001echo\uFF1A \u811A\u672C\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u8868\u660E\u6211\u4EEC\u6267\u884C hello.sh \u811A\u672C\u65F6\u4F1A\u5217\u4E3E\u51FA\u5F53\u524D\u76EE\u5F55\u7684\u6587\u4EF6\u5217\u8868\u5E76\u4E14\u4F1A\u5411\u63A7\u5236\u53F0\u6253\u5370 \`hello world</p></li></ul><p>\u6267\u884C\u65B9\u5F0F\u4E3A<code>.hello.zsh</code></p><h2 id="\u4E8C\u3001\u79CD\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u79CD\u7C7B" aria-hidden="true">#</a> \u4E8C\u3001\u79CD\u7C7B</h2><p><code>Linux</code> \u7684 <code>Shell</code> \u79CD\u7C7B\u4F17\u591A\uFF0C\u53EA\u8981\u80FD\u7ED9\u7528\u6237\u63D0\u4F9B\u547D\u4EE4\u884C\u73AF\u5883\u7684\u7A0B\u5E8F\uFF0C\u5E38\u89C1\u7684\u6709\uFF1A</p><ul><li><p>Bourne Shell\uFF08sh\uFF09\uFF0C\u662F\u76EE\u524D\u6240\u6709 Shell \u7684\u7956\u5148\uFF0C\u88AB\u5B89\u88C5\u5728\u51E0\u4E4E\u6240\u6709\u53D1\u6E90\u4E8E Unix \u7684\u64CD\u4F5C\u7CFB\u7EDF\u4E0A</p></li><li><p>Bourne Again shell\uFF08bash\uFF09 \uFF0C\u662F sh \u7684\u4E00\u4E2A\u8FDB\u9636\u7248\u672C\uFF0C\u6BD4 sh \u66F4\u4F18\u79C0\uFF0C bash \u662F\u76EE\u524D\u5927\u591A\u6570 Linux \u53D1\u884C\u7248\u4EE5\u53CA macOS \u64CD\u4F5C\u7CFB\u7EDF\u7684\u9ED8\u8BA4 Shell</p></li><li><p>C Shell\uFF08csh\uFF09 \uFF0C\u5B83\u7684\u8BED\u6CD5\u7C7B\u4F3C C \u8BED\u8A00</p></li><li><p>TENEX C Shell\uFF08tcsh\uFF09 \uFF0C\u5B83\u662F csh \u7684\u4F18\u5316\u7248\u672C</p></li><li><p>Korn shell\uFF08ksh\uFF09 \uFF0C\u4E00\u822C\u5728\u6536\u8D39\u7684 Unix \u7248\u672C\u4E0A\u6BD4\u8F83\u591A\u89C1</p></li><li><p>Z Shell\uFF08zsh\uFF09 \uFF0C\u5B83\u662F\u4E00\u79CD\u6BD4\u8F83\u65B0\u8FD1\u7684 Shell \uFF0C\u96C6 bash \u3001 ksh \u548C tcsh \u5404\u5BB6\u4E4B\u5927\u6210</p></li></ul><p><img src="https://static.vue-js.com/8e739440-0883-11ec-a752-75723a64e8f5.png" alt=""></p><p>\u5173\u4E8E <code>Shell</code> \u7684\u51E0\u4E2A\u5E38\u89C1\u547D\u4EE4\uFF1A</p><ul><li>ls\uFF1A\u67E5\u770B\u6587\u4EF6</li><li>cd\uFF1A\u5207\u6362\u5DE5\u4F5C\u76EE\u5F55</li><li>pwd\uFF1A\u663E\u793A\u7528\u6237\u5F53\u524D\u76EE\u5F55</li><li>mkdir\uFF1A\u521B\u5EFA\u76EE\u5F55</li><li>cp\uFF1A\u62F7\u8D1D</li><li>rm\uFF1A\u5220\u9664</li><li>mv\uFF1A\u79FB\u52A8</li><li>du\uFF1A\u663E\u793A\u76EE\u5F55\u6240\u5360\u7528\u7684\u78C1\u76D8\u7A7A\u95F4</li></ul><h2 id="\u4E09\u3001\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u547D\u4EE4" aria-hidden="true">#</a> \u4E09\u3001\u547D\u4EE4</h2><p><code>Shell</code> \u5E76\u4E0D\u662F\u7B80\u5355\u7684\u5806\u780C\u547D\u4EE4\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5728 <code>Shell</code> \u4E2D\u7F16\u7A0B\uFF0C\u8FD9\u548C\u4F7F\u7528 <code>C++</code>\u3001<code>C#</code>\u3001<code>Java</code>\u3001<code>Python</code> \u7B49\u5E38\u89C1\u7684\u7F16\u7A0B\u8BED\u8A00\u5E76\u6CA1\u6709\u4EC0\u4E48\u4E24\u6837\u3002</p><p>Shell \u867D\u7136\u6CA1\u6709 C++\u3001Java\u3001Python \u7B49\u5F3A\u5927\uFF0C\u4F46\u4E5F\u652F\u6301\u4E86\u57FA\u672C\u7684\u7F16\u7A0B\u5143\u7D20\uFF0C\u4F8B\u5982\uFF1A</p><ul><li>if...else \u9009\u62E9\u7ED3\u6784\uFF0Ccase...in \u5F00\u5173\u8BED\u53E5\uFF0Cfor\u3001while\u3001until \u5FAA\u73AF\uFF1B</li><li>\u53D8\u91CF\u3001\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u3001\u6CE8\u91CA\u3001\u52A0\u51CF\u4E58\u9664\u3001\u903B\u8F91\u8FD0\u7B97\u7B49\u6982\u5FF5\uFF1B</li><li>\u51FD\u6570\uFF0C\u5305\u62EC\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u51FD\u6570\u548C\u5185\u7F6E\u51FD\u6570\uFF08\u4F8B\u5982 printf\u3001export\u3001eval \u7B49\uFF09</li></ul><p>\u4E0B\u9762\u4EE5<code>bash</code>\u4E3A\u4F8B\u7B80\u5355\u4E86\u89E3\u4E00\u4E0B<code>shell</code>\u7684\u57FA\u672C\u4F7F\u7528</p><h3 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h3><p><code>Bash</code> \u6CA1\u6709\u6570\u636E\u7C7B\u578B\u7684\u6982\u5FF5\uFF0C\u6240\u6709\u7684\u53D8\u91CF\u503C\u90FD\u662F\u5B57\u7B26\u4E32\uFF0C\u53EF\u4EE5\u4FDD\u5B58\u4E00\u4E2A\u6570\u5B57\u3001\u4E00\u4E2A\u5B57\u7B26\u3001\u4E00\u4E2A\u5B57\u7B26\u4E32\u7B49\u7B49</p><p>\u540C\u65F6\u65E0\u9700\u63D0\u524D\u58F0\u660E\u53D8\u91CF\uFF0C\u7ED9\u53D8\u91CF\u8D4B\u503C\u4F1A\u76F4\u63A5\u521B\u5EFA\u53D8\u91CF</p><p>\u8BBF\u95EE\u53D8\u91CF\u7684\u8BED\u6CD5\u5F62\u5F0F\u4E3A\uFF1A<code>\${var}</code> \u548C <code>$var</code> \u3002</p><p>\u53D8\u91CF\u540D\u5916\u9762\u7684\u82B1\u62EC\u53F7\u662F\u53EF\u9009\u7684\uFF0C\u52A0\u4E0D\u52A0\u90FD\u884C\uFF0C\u52A0\u82B1\u62EC\u53F7\u662F\u4E3A\u4E86\u5E2E\u52A9\u89E3\u91CA\u5668\u8BC6\u522B\u53D8\u91CF\u7684\u8FB9\u754C\uFF0C\u6240\u4EE5\u63A8\u8350\u52A0\u82B1\u62EC\u53F7\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">word</span><span class="token operator">=</span><span class="token string">&quot;hello&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${word}</span>
<span class="token comment"># Output: hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6761\u4EF6\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u63A7\u5236" aria-hidden="true">#</a> \u6761\u4EF6\u63A7\u5236</h3><p>\u8DDF\u5176\u5B83\u7A0B\u5E8F\u8BBE\u8BA1\u8BED\u8A00\u4E00\u6837\uFF0CBash \u4E2D\u7684\u6761\u4EF6\u8BED\u53E5\u8BA9\u6211\u4EEC\u53EF\u4EE5\u51B3\u5B9A\u4E00\u4E2A\u64CD\u4F5C\u662F\u5426\u88AB\u6267\u884C\u3002\u7ED3\u679C\u53D6\u51B3\u4E8E\u4E00\u4E2A\u5305\u5728<code>[[ ]]</code>\u91CC\u7684\u8868\u8FBE\u5F0F</p><p>\u8DDF\u5176\u4ED6\u8BED\u8A00\u4E00\u6837\uFF0C\u4F7F\u7528<code>if...else</code>\u8FDB\u884C\u8868\u8FBE\uFF0C\u5982\u679C\u4E2D\u62EC\u53F7\u91CC\u7684\u8868\u8FBE\u5F0F\u4E3A\u771F\uFF0C\u90A3\u4E48<code>then</code>\u548C<code>fi</code>\u4E4B\u95F4\u7684\u4EE3\u7801\u4F1A\u88AB\u6267\u884C\uFF0C\u5982\u679C\u5219<code>else</code>\u548C<code>fi</code>\u4E4B\u95F4\u7684\u4EE3\u7801\u4F1A\u88AB\u6267\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token number">2</span> <span class="token parameter variable">-ne</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;true&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;false&quot;</span>
<span class="token keyword">fi</span>
<span class="token comment"># Output: true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>fi</code>\u6807\u5FD7\u7740\u6761\u4EF6\u4EE3\u7801\u5757\u7684\u7ED3\u675F</p><h3 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h3><p>bash \u51FD\u6570\u5B9A\u4E49\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span> <span class="token keyword">function</span> <span class="token punctuation">]</span> funname <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    action<span class="token punctuation">;</span>
    <span class="token punctuation">[</span>return int<span class="token punctuation">;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u51FD\u6570\u5B9A\u4E49\u65F6\uFF0Cfunction \u5173\u952E\u5B57\u53EF\u6709\u53EF\u65E0</li><li>\u51FD\u6570\u8FD4\u56DE\u503C - return \u8FD4\u56DE\u51FD\u6570\u8FD4\u56DE\u503C\uFF0C\u8FD4\u56DE\u503C\u7C7B\u578B\u53EA\u80FD\u4E3A\u6574\u6570\uFF080-255\uFF09\u3002\u5982\u679C\u4E0D\u52A0 return \u8BED\u53E5\uFF0Cshell \u9ED8\u8BA4\u5C06\u4EE5\u6700\u540E\u4E00\u6761\u547D\u4EE4\u7684\u8FD0\u884C\u7ED3\u679C\uFF0C\u4F5C\u4E3A\u51FD\u6570\u8FD4\u56DE\u503C</li><li>\u51FD\u6570\u8FD4\u56DE\u503C\u5728\u8C03\u7528\u8BE5\u51FD\u6570\u540E\u901A\u8FC7 $? \u6765\u83B7\u5F97</li><li>\u6240\u6709\u51FD\u6570\u5728\u4F7F\u7528\u524D\u5FC5\u987B\u5B9A\u4E49\u3002\u8FD9\u610F\u5473\u7740\u5FC5\u987B\u5C06\u51FD\u6570\u653E\u5728\u811A\u672C\u5F00\u59CB\u90E8\u5206\uFF0C\u76F4\u81F3 shell \u89E3\u91CA\u5668\u9996\u6B21\u53D1\u73B0\u5B83\u65F6\uFF0C\u624D\u53EF\u4EE5\u4F7F\u7528\u3002\u8C03\u7528\u51FD\u6570\u4EC5\u4F7F\u7528\u5176\u51FD\u6570\u540D\u5373\u53EF</li></ul>`,39),c=[i];function o(d,p){return s(),n("div",null,c)}const h=e(l,[["render",o],["__file","shell.html.vue"]]);export{h as default};
