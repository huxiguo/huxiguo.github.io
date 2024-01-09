import{_ as n,o as s,c as a,d as e}from"./app.91a380bb.js";const i={},c=e(`<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u4E0B\u4F60\u7684-vue-\u9879\u76EE\u7684\u76EE\u5F55\u7ED3\u6784-\u5982\u679C\u662F\u5927\u578B\u9879\u76EE\u4F60\u8BE5\u600E\u4E48\u5212\u5206\u7ED3\u6784\u548C\u5212\u5206\u7EC4\u4EF6\u5462" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u4E0B\u4F60\u7684-vue-\u9879\u76EE\u7684\u76EE\u5F55\u7ED3\u6784-\u5982\u679C\u662F\u5927\u578B\u9879\u76EE\u4F60\u8BE5\u600E\u4E48\u5212\u5206\u7ED3\u6784\u548C\u5212\u5206\u7EC4\u4EF6\u5462" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u4E0B\u4F60\u7684 vue \u9879\u76EE\u7684\u76EE\u5F55\u7ED3\u6784\uFF0C\u5982\u679C\u662F\u5927\u578B\u9879\u76EE\u4F60\u8BE5\u600E\u4E48\u5212\u5206\u7ED3\u6784\u548C\u5212\u5206\u7EC4\u4EF6\u5462\uFF1F</h1><p><img src="https://static.vue-js.com/b6cd6a60-4aba-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001\u4E3A\u4EC0\u4E48\u8981\u5212\u5206" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4E3A\u4EC0\u4E48\u8981\u5212\u5206" aria-hidden="true">#</a> \u4E00\u3001\u4E3A\u4EC0\u4E48\u8981\u5212\u5206</h2><p>\u4F7F\u7528<code>vue</code>\u6784\u5EFA\u9879\u76EE\uFF0C\u9879\u76EE\u7ED3\u6784\u6E05\u6670\u4F1A\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\uFF0C\u719F\u6089\u9879\u76EE\u7684\u5404\u79CD\u914D\u7F6E\u540C\u6837\u4F1A\u8BA9\u5F00\u53D1\u6548\u7387\u66F4\u9AD8</p><p>\u5728\u5212\u5206\u9879\u76EE\u7ED3\u6784\u7684\u65F6\u5019\uFF0C\u9700\u8981\u9075\u5FAA\u4E00\u4E9B\u57FA\u672C\u7684\u539F\u5219\uFF1A</p><ul><li>\u6587\u4EF6\u5939\u548C\u6587\u4EF6\u5939\u5185\u90E8\u6587\u4EF6\u7684\u8BED\u4E49\u4E00\u81F4\u6027</li><li>\u5355\u4E00\u5165\u53E3/\u51FA\u53E3</li><li>\u5C31\u8FD1\u539F\u5219\uFF0C\u7D27\u8026\u5408\u7684\u6587\u4EF6\u5E94\u8BE5\u653E\u5230\u4E00\u8D77\uFF0C\u4E14\u5E94\u4EE5\u76F8\u5BF9\u8DEF\u5F84\u5F15\u7528</li><li>\u516C\u5171\u7684\u6587\u4EF6\u5E94\u8BE5\u4EE5\u7EDD\u5BF9\u8DEF\u5F84\u7684\u65B9\u5F0F\u4ECE\u6839\u76EE\u5F55\u5F15\u7528</li><li><code>/src</code> \u5916\u7684\u6587\u4EF6\u4E0D\u5E94\u8BE5\u88AB\u5F15\u5165</li></ul><h3 id="\u6587\u4EF6\u5939\u548C\u6587\u4EF6\u5939\u5185\u90E8\u6587\u4EF6\u7684\u8BED\u4E49\u4E00\u81F4\u6027" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u5939\u548C\u6587\u4EF6\u5939\u5185\u90E8\u6587\u4EF6\u7684\u8BED\u4E49\u4E00\u81F4\u6027" aria-hidden="true">#</a> \u6587\u4EF6\u5939\u548C\u6587\u4EF6\u5939\u5185\u90E8\u6587\u4EF6\u7684\u8BED\u4E49\u4E00\u81F4\u6027</h3><p>\u6211\u4EEC\u7684\u76EE\u5F55\u7ED3\u6784\u90FD\u4F1A\u6709\u4E00\u4E2A\u6587\u4EF6\u5939\u662F\u6309\u7167\u8DEF\u7531\u6A21\u5757\u6765\u5212\u5206\u7684\uFF0C\u5982<code>pages</code>\u6587\u4EF6\u5939\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u9762\u5E94\u8BE5\u5305\u542B\u6211\u4EEC\u9879\u76EE\u6240\u6709\u7684\u8DEF\u7531\u6A21\u5757\uFF0C\u5E76\u4E14\u4EC5\u5E94\u8BE5\u5305\u542B\u8DEF\u7531\u6A21\u5757\uFF0C\u800C\u4E0D\u5E94\u8BE5\u6709\u522B\u7684\u5176\u4ED6\u7684\u975E\u8DEF\u7531\u6A21\u5757\u7684\u6587\u4EF6\u5939</p><p>\u8FD9\u6837\u505A\u7684\u597D\u5904\u5728\u4E8E\u4E00\u773C\u5C31\u4ECE <code>pages</code>\u6587\u4EF6\u5939\u770B\u51FA\u8FD9\u4E2A\u9879\u76EE\u7684\u8DEF\u7531\u6709\u54EA\u4E9B</p><h3 id="\u5355\u4E00\u5165\u53E3-\u51FA\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5355\u4E00\u5165\u53E3-\u51FA\u53E3" aria-hidden="true">#</a> \u5355\u4E00\u5165\u53E3/\u51FA\u53E3</h3><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5728<code>pages</code>\u6587\u4EF6\u5939\u91CC\u9762\u5B58\u5728\u4E00\u4E2A<code>seller</code>\u6587\u4EF6\u5939\uFF0C\u8FD9\u65F6\u5019<code>seller</code> \u6587\u4EF6\u5939\u5E94\u8BE5\u4F5C\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684\u6A21\u5757\u7531\u5916\u90E8\u5F15\u5165\uFF0C\u5E76\u4E14 <code>seller/index.js</code> \u5E94\u8BE5\u4F5C\u4E3A\u5916\u90E8\u5F15\u5165 seller \u6A21\u5757\u7684\u552F\u4E00\u5165\u53E3</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9519\u8BEF\u7528\u6CD5</span>
<span class="token keyword">import</span> sellerReducer <span class="token keyword">from</span> <span class="token string">&#39;src/pages/seller/reducer&#39;</span>

<span class="token comment">// \u6B63\u786E\u7528\u6CD5</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reducer <span class="token keyword">as</span> sellerReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;src/pages/seller&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u505A\u7684\u597D\u5904\u5728\u4E8E\uFF0C\u65E0\u8BBA\u4F60\u7684\u6A21\u5757\u6587\u4EF6\u5939\u5185\u90E8\u6709\u591A\u4E71\uFF0C\u5916\u90E8\u5F15\u7528\u7684\u65F6\u5019\uFF0C\u90FD\u662F\u4ECE\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u5F15\u5165\uFF0C\u8FD9\u6837\u5C31\u5F88\u597D\u7684\u5B9E\u73B0\u4E86\u9694\u79BB\uFF0C\u5982\u679C\u540E\u7EED\u6709\u91CD\u6784\u9700\u6C42\uFF0C\u4F60\u5C31\u4F1A\u53D1\u73B0\u8FD9\u79CD\u65B9\u5F0F\u7684\u4F18\u70B9</p><h3 id="\u5C31\u8FD1\u539F\u5219-\u7D27\u8026\u5408\u7684\u6587\u4EF6\u5E94\u8BE5\u653E\u5230\u4E00\u8D77-\u4E14\u5E94\u4EE5\u76F8\u5BF9\u8DEF\u5F84\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u5C31\u8FD1\u539F\u5219-\u7D27\u8026\u5408\u7684\u6587\u4EF6\u5E94\u8BE5\u653E\u5230\u4E00\u8D77-\u4E14\u5E94\u4EE5\u76F8\u5BF9\u8DEF\u5F84\u5F15\u7528" aria-hidden="true">#</a> \u5C31\u8FD1\u539F\u5219\uFF0C\u7D27\u8026\u5408\u7684\u6587\u4EF6\u5E94\u8BE5\u653E\u5230\u4E00\u8D77\uFF0C\u4E14\u5E94\u4EE5\u76F8\u5BF9\u8DEF\u5F84\u5F15\u7528</h3><p>\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u53EF\u4EE5\u4FDD\u8BC1\u6A21\u5757\u5185\u90E8\u7684\u72EC\u7ACB\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6B63\u786E\u7528\u6CD5</span>
<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&#39;./index.module.scss&#39;</span>
<span class="token comment">// \u9519\u8BEF\u7528\u6CD5</span>
<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&#39;src/pages/seller/index.module.scss&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3E\u4E2A\u4F8B\u5B50</p><p>\u5047\u8BBE\u6211\u4EEC\u73B0\u5728\u7684 seller \u76EE\u5F55\u662F\u5728 <code>src/pages/seller</code>\uFF0C\u5982\u679C\u6211\u4EEC\u540E\u7EED\u53D1\u751F\u4E86\u8DEF\u7531\u53D8\u66F4\uFF0C\u9700\u8981\u52A0\u4E00\u4E2A\u5C42\u7EA7\uFF0C\u53D8\u6210 <code>src/pages/user/seller</code>\u3002</p><p>\u5982\u679C\u6211\u4EEC\u91C7\u7528\u7B2C\u4E00\u79CD\u76F8\u5BF9\u8DEF\u5F84\u7684\u65B9\u5F0F\uFF0C\u90A3\u5C31\u53EF\u4EE5\u76F4\u63A5\u5C06\u6574\u4E2A\u6587\u4EF6\u5939\u62D6\u8FC7\u53BB\u5C31\u597D\uFF0C<code>seller</code> \u6587\u4EF6\u5939\u5185\u90E8\u4E0D\u9700\u8981\u505A\u4EFB\u4F55\u53D8\u66F4\u3002</p><p>\u4F46\u662F\u5982\u679C\u6211\u4EEC\u91C7\u7528\u7B2C\u4E8C\u79CD\u7EDD\u5BF9\u8DEF\u5F84\u7684\u65B9\u5F0F\uFF0C\u79FB\u52A8\u6587\u4EF6\u5939\u7684\u540C\u65F6\uFF0C\u8FD8\u9700\u8981\u5BF9\u6BCF\u4E2A <code>import</code> \u7684\u8DEF\u5F84\u505A\u4FEE\u6539</p><h3 id="\u516C\u5171\u7684\u6587\u4EF6\u5E94\u8BE5\u4EE5\u7EDD\u5BF9\u8DEF\u5F84\u7684\u65B9\u5F0F\u4ECE\u6839\u76EE\u5F55\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u516C\u5171\u7684\u6587\u4EF6\u5E94\u8BE5\u4EE5\u7EDD\u5BF9\u8DEF\u5F84\u7684\u65B9\u5F0F\u4ECE\u6839\u76EE\u5F55\u5F15\u7528" aria-hidden="true">#</a> \u516C\u5171\u7684\u6587\u4EF6\u5E94\u8BE5\u4EE5\u7EDD\u5BF9\u8DEF\u5F84\u7684\u65B9\u5F0F\u4ECE\u6839\u76EE\u5F55\u5F15\u7528</h3><p>\u516C\u5171\u6307\u7684\u662F\u591A\u4E2A\u8DEF\u7531\u6A21\u5757\u5171\u7528\uFF0C\u5982\u4E00\u4E9B\u516C\u5171\u7684\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u653E\u5728<code>src/components</code>\u4E0B</p><p>\u5728\u4F7F\u7528\u5230\u7684\u9875\u9762\u4E2D\uFF0C\u91C7\u7528\u7EDD\u5BF9\u8DEF\u5F84\u7684\u5F62\u5F0F\u5F15\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9519\u8BEF\u7528\u6CD5</span>
<span class="token keyword">import</span> Input <span class="token keyword">from</span> <span class="token string">&#39;../../components/input&#39;</span>
<span class="token comment">// \u6B63\u786E\u7528\u6CD5</span>
<span class="token keyword">import</span> Input <span class="token keyword">from</span> <span class="token string">&#39;src/components/input&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u6837\u7684\uFF0C\u5982\u679C\u6211\u4EEC\u9700\u8981\u5BF9\u6587\u4EF6\u5939\u7ED3\u6784\u8FDB\u884C\u8C03\u6574\u3002\u5C06 <code>/src/components/input</code> \u53D8\u6210 <code>/src/components/new/input</code>\uFF0C\u5982\u679C\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u53EA\u9700\u8981\u5168\u5C40\u641C\u7D22\u66FF\u6362</p><p>\u518D\u52A0\u4E0A\u7EDD\u5BF9\u8DEF\u5F84\u6709\u5168\u5C40\u7684\u8BED\u4E49\uFF0C\u76F8\u5BF9\u8DEF\u5F84\u6709\u72EC\u7ACB\u6A21\u5757\u7684\u8BED\u4E49</p><h3 id="src-\u5916\u7684\u6587\u4EF6\u4E0D\u5E94\u8BE5\u88AB\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#src-\u5916\u7684\u6587\u4EF6\u4E0D\u5E94\u8BE5\u88AB\u5F15\u5165" aria-hidden="true">#</a> /src \u5916\u7684\u6587\u4EF6\u4E0D\u5E94\u8BE5\u88AB\u5F15\u5165</h3><p><code>vue-cli</code>\u811A\u624B\u67B6\u5DF2\u7ECF\u5E2E\u6211\u4EEC\u505A\u4E86\u76F8\u5173\u7684\u7EA6\u675F\u4E86\uFF0C\u6B63\u5E38\u6211\u4EEC\u7684\u524D\u7AEF\u9879\u76EE\u90FD\u4F1A\u6709\u4E2A<code>src</code>\u6587\u4EF6\u5939\uFF0C\u91CC\u9762\u653E\u7740\u6240\u6709\u7684\u9879\u76EE\u9700\u8981\u7684\u8D44\u6E90\uFF0C<code>js</code>,<code> css</code>, <code>png</code>, <code>svg</code> \u7B49\u7B49\u3002<code>src</code> \u5916\u4F1A\u653E\u4E00\u4E9B\u9879\u76EE\u914D\u7F6E\uFF0C\u4F9D\u8D56\uFF0C\u73AF\u5883\u7B49\u6587\u4EF6</p><p>\u8FD9\u6837\u7684\u597D\u5904\u662F\u65B9\u4FBF\u5212\u5206\u9879\u76EE\u4EE3\u7801\u6587\u4EF6\u548C\u914D\u7F6E\u6587\u4EF6</p><h2 id="\u4E8C\u3001\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u4E8C\u3001\u76EE\u5F55\u7ED3\u6784</h2><p>\u5355\u9875\u9762\u76EE\u5F55\u7ED3\u6784</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>project
\u2502  <span class="token punctuation">.</span>browserslistrc
\u2502  <span class="token punctuation">.</span>env<span class="token punctuation">.</span>production
\u2502  <span class="token punctuation">.</span>eslintrc<span class="token punctuation">.</span>js
\u2502  <span class="token punctuation">.</span>gitignore
\u2502  babel<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
\u2502  <span class="token keyword">package</span><span class="token operator">-</span>lock<span class="token punctuation">.</span>json
\u2502  <span class="token keyword">package</span><span class="token punctuation">.</span>json
\u2502  <span class="token constant">README</span><span class="token punctuation">.</span>md
\u2502  vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
\u2502  yarn<span class="token operator">-</span>error<span class="token punctuation">.</span>log
\u2502  yarn<span class="token punctuation">.</span>lock
\u2502
\u251C\u2500<span class="token keyword">public</span>
\u2502      favicon<span class="token punctuation">.</span>ico
\u2502      index<span class="token punctuation">.</span>html
\u2502
<span class="token operator">|</span><span class="token operator">--</span> src
    <span class="token operator">|</span><span class="token operator">--</span> components
        <span class="token operator">|</span><span class="token operator">--</span> input
            <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
            <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>module<span class="token punctuation">.</span>scss
    <span class="token operator">|</span><span class="token operator">--</span> pages
        <span class="token operator">|</span><span class="token operator">--</span> seller
            <span class="token operator">|</span><span class="token operator">--</span> components
                <span class="token operator">|</span><span class="token operator">--</span> input
                    <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
                    <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>module<span class="token punctuation">.</span>scss
            <span class="token operator">|</span><span class="token operator">--</span> reducer<span class="token punctuation">.</span>js
            <span class="token operator">|</span><span class="token operator">--</span> saga<span class="token punctuation">.</span>js
            <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
            <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>module<span class="token punctuation">.</span>scss
        <span class="token operator">|</span><span class="token operator">--</span> buyer
            <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
        <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u591A\u9875\u9762\u76EE\u5F55\u7ED3\u6784</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>my<span class="token operator">-</span>vue<span class="token operator">-</span>test<span class="token operator">:</span><span class="token punctuation">.</span>
\u2502  <span class="token punctuation">.</span>browserslistrc
\u2502  <span class="token punctuation">.</span>env<span class="token punctuation">.</span>production
\u2502  <span class="token punctuation">.</span>eslintrc<span class="token punctuation">.</span>js
\u2502  <span class="token punctuation">.</span>gitignore
\u2502  babel<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
\u2502  <span class="token keyword">package</span><span class="token operator">-</span>lock<span class="token punctuation">.</span>json
\u2502  <span class="token keyword">package</span><span class="token punctuation">.</span>json
\u2502  <span class="token constant">README</span><span class="token punctuation">.</span>md
\u2502  vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
\u2502  yarn<span class="token operator">-</span>error<span class="token punctuation">.</span>log
\u2502  yarn<span class="token punctuation">.</span>lock
\u2502
\u251C\u2500<span class="token keyword">public</span>
\u2502      favicon<span class="token punctuation">.</span>ico
\u2502      index<span class="token punctuation">.</span>html
\u2502
\u2514\u2500src
    \u251C\u2500apis <span class="token comment">//\u63A5\u53E3\u6587\u4EF6\u6839\u636E\u9875\u9762\u6216\u5B9E\u4F8B\u6A21\u5757\u5316</span>
    \u2502      index<span class="token punctuation">.</span>js
    \u2502      login<span class="token punctuation">.</span>js
    \u2502
    \u251C\u2500components <span class="token comment">//\u5168\u5C40\u516C\u5171\u7EC4\u4EF6</span>
    \u2502  \u2514\u2500header
    \u2502          index<span class="token punctuation">.</span>less
    \u2502          index<span class="token punctuation">.</span>vue
    \u2502
    \u251C\u2500config <span class="token comment">//\u914D\u7F6E\uFF08\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\u4E0D\u540Cpassid\u7B49\uFF09</span>
    \u2502      env<span class="token punctuation">.</span>js
    \u2502      index<span class="token punctuation">.</span>js
    \u2502
    \u251C\u2500contant <span class="token comment">//\u5E38\u91CF</span>
    \u2502      index<span class="token punctuation">.</span>js
    \u2502
    \u251C\u2500images <span class="token comment">//\u56FE\u7247</span>
    \u2502      logo<span class="token punctuation">.</span>png
    \u2502
    \u251C\u2500pages <span class="token comment">//\u591A\u9875\u9762vue\u9879\u76EE\uFF0C\u4E0D\u540C\u7684\u5B9E\u4F8B</span>
    \u2502  \u251C\u2500index <span class="token comment">//\u4E3B\u5B9E\u4F8B</span>
    \u2502  \u2502  \u2502  index<span class="token punctuation">.</span>js
    \u2502  \u2502  \u2502  index<span class="token punctuation">.</span>vue
    \u2502  \u2502  \u2502  main<span class="token punctuation">.</span>js
    \u2502  \u2502  \u2502  router<span class="token punctuation">.</span>js
    \u2502  \u2502  \u2502  store<span class="token punctuation">.</span>js
    \u2502  \u2502  \u2502
    \u2502  \u2502  \u251C\u2500components <span class="token comment">//\u4E1A\u52A1\u7EC4\u4EF6</span>
    \u2502  \u2502  \u2514\u2500pages <span class="token comment">//\u6B64\u5B9E\u4F8B\u4E2D\u7684\u5404\u4E2A\u8DEF\u7531</span>
    \u2502  \u2502      \u251C\u2500amenu
    \u2502  \u2502      \u2502      index<span class="token punctuation">.</span>vue
    \u2502  \u2502      \u2502
    \u2502  \u2502      \u2514\u2500bmenu
    \u2502  \u2502              index<span class="token punctuation">.</span>vue
    \u2502  \u2502
    \u2502  \u2514\u2500login <span class="token comment">//\u53E6\u4E00\u4E2A\u5B9E\u4F8B</span>
    \u2502          index<span class="token punctuation">.</span>js
    \u2502          index<span class="token punctuation">.</span>vue
    \u2502          main<span class="token punctuation">.</span>js
    \u2502
    \u251C\u2500scripts <span class="token comment">//\u5305\u542B\u5404\u79CD\u5E38\u7528\u914D\u7F6E\uFF0C\u5DE5\u5177\u51FD\u6570</span>
    \u2502  \u2502  map<span class="token punctuation">.</span>js
    \u2502  \u2502
    \u2502  \u2514\u2500utils
    \u2502          helper<span class="token punctuation">.</span>js
    \u2502
    \u251C\u2500store <span class="token comment">//vuex\u4ED3\u5E93</span>
    \u2502  \u2502  index<span class="token punctuation">.</span>js
    \u2502  \u2502
    \u2502  \u251C\u2500index
    \u2502  \u2502      actions<span class="token punctuation">.</span>js
    \u2502  \u2502      getters<span class="token punctuation">.</span>js
    \u2502  \u2502      index<span class="token punctuation">.</span>js
    \u2502  \u2502      mutation<span class="token operator">-</span>types<span class="token punctuation">.</span>js
    \u2502  \u2502      mutations<span class="token punctuation">.</span>js
    \u2502  \u2502      state<span class="token punctuation">.</span>js
    \u2502  \u2502
    \u2502  \u2514\u2500user
    \u2502          actions<span class="token punctuation">.</span>js
    \u2502          getters<span class="token punctuation">.</span>js
    \u2502          index<span class="token punctuation">.</span>js
    \u2502          mutation<span class="token operator">-</span>types<span class="token punctuation">.</span>js
    \u2502          mutations<span class="token punctuation">.</span>js
    \u2502          state<span class="token punctuation">.</span>js
    \u2502
    \u2514\u2500styles <span class="token comment">//\u6837\u5F0F\u7EDF\u4E00\u914D\u7F6E</span>
        \u2502  components<span class="token punctuation">.</span>less
        \u2502
        \u251C\u2500animation
        \u2502      index<span class="token punctuation">.</span>less
        \u2502      slide<span class="token punctuation">.</span>less
        \u2502
        \u251C\u2500base
        \u2502      index<span class="token punctuation">.</span>less
        \u2502      style<span class="token punctuation">.</span>less
        \u2502      <span class="token keyword">var</span><span class="token punctuation">.</span>less
        \u2502      widget<span class="token punctuation">.</span>less
        \u2502
        \u2514\u2500common
                index<span class="token punctuation">.</span>less
                reset<span class="token punctuation">.</span>less
                style<span class="token punctuation">.</span>less
                transition<span class="token punctuation">.</span>less
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><p>\u9879\u76EE\u7684\u76EE\u5F55\u7ED3\u6784\u5F88\u91CD\u8981\uFF0C\u56E0\u4E3A\u76EE\u5F55\u7ED3\u6784\u80FD\u4F53\u73B0\u5F88\u591A\u4E1C\u897F\uFF0C\u600E\u4E48\u89C4\u5212\u76EE\u5F55\u7ED3\u6784\u53EF\u80FD\u6BCF\u4E2A\u4EBA\u6709\u81EA\u5DF1\u7684\u7406\u89E3\uFF0C\u4F46\u662F\u6309\u7167\u4E00\u5B9A\u7684\u89C4\u8303\u53BB\u8FDB\u884C\u76EE\u5F55\u7684\u8BBE\u8BA1\uFF0C\u80FD\u8BA9\u9879\u76EE\u6574\u4E2A\u67B6\u6784\u770B\u8D77\u6765\u66F4\u4E3A\u7B80\u6D01\uFF0C\u66F4\u52A0\u6613\u7528</p>`,36),p=[c];function l(t,o){return s(),a("div",null,p)}const r=n(i,[["render",l],["__file","structure.html.vue"]]);export{r as default};
