import{_ as e,o as c,c as a,d}from"./app.91a380bb.js";const o={},t=d('<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4-git-\u4E2D-fork-clone-branch-\u8FD9\u4E09\u4E2A\u6982\u5FF5-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4-git-\u4E2D-fork-clone-branch-\u8FD9\u4E09\u4E2A\u6982\u5FF5-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4 Git \u4E2D fork, clone,branch \u8FD9\u4E09\u4E2A\u6982\u5FF5\uFF0C\u6709\u4EC0\u4E48\u533A\u522B?</h1><p><img src="https://static.vue-js.com/9c4eb9a0-f7ad-11eb-bc6f-3f06e1491664.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><h3 id="fork" tabindex="-1"><a class="header-anchor" href="#fork" aria-hidden="true">#</a> fork</h3><p><code>fork</code>\uFF0C\u82F1\u8BED\u7FFB\u8BD1\u8FC7\u6765\u5C31\u662F\u53C9\u5B50\uFF0C\u52A8\u8BCD\u5F62\u5F0F\u5219\u662F\u5206\u53C9\uFF0C\u5982\u4E0B\u56FE\uFF0C\u4ECE\u5DE6\u5230\u53F3\uFF0C\u4E00\u6761\u76F4\u7EBF\u53D8\u6210\u591A\u6761\u76F4\u7EBF</p><p><img src="https://static.vue-js.com/ad04ade0-f7ad-11eb-991d-334fd31f0201.png" alt=""></p><p>\u8F6C\u5230<code>git</code>\u4ED3\u5E93\u4E2D\uFF0C<code>fork</code>\u5219\u53EF\u4EE5\u4EE3\u8868\u5206\u53C9\u3001\u514B\u9686 \u51FA\u4E00\u4E2A\uFF08\u4ED3\u5E93\u7684\uFF09\u65B0\u62F7\u8D1D</p><p><img src="https://static.vue-js.com/b4b31450-f7ad-11eb-991d-334fd31f0201.png" alt=""></p><p>\u5305\u542B\u4E86\u539F\u6765\u7684\u4ED3\u5E93\uFF08\u5373 upstream repository\uFF0C\u4E0A\u6E38\u4ED3\u5E93\uFF09\u6240\u6709\u5185\u5BB9\uFF0C\u5982\u5206\u652F\u3001Tag\u3001\u63D0\u4EA4</p><p>\u5982\u679C\u60F3\u5C06\u4F60\u7684\u4FEE\u6539\u5408\u5E76\u5230\u539F\u9879\u76EE\u4E2D\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7684 Pull Request \u628A\u4F60\u7684\u63D0\u4EA4\u8D21\u732E\u56DE \u539F\u4ED3\u5E93</p><h3 id="clone" tabindex="-1"><a class="header-anchor" href="#clone" aria-hidden="true">#</a> clone</h3><p><code>clone</code>\uFF0C\u8BD1\u4E3A\u514B\u9686\uFF0C\u5B83\u7684\u4F5C\u7528\u662F\u5C06\u6587\u4EF6\u4ECE\u8FDC\u7A0B\u4EE3\u7801\u4ED3\u4E0B\u8F7D\u5230\u672C\u5730\uFF0C\u4ECE\u800C\u5F62\u6210\u4E00\u4E2A\u672C\u5730\u4EE3\u7801\u4ED3</p><p>\u6267\u884C<code>clone</code>\u547D\u4EE4\u540E\uFF0C\u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A<code>xxx</code>\u7684\u76EE\u5F55\uFF0C\u5E76\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u521D\u59CB\u5316\u4E00\u4E2A <code>.git</code> \u6587\u4EF6\u5939\uFF0C\u7136\u540E\u4ECE\u4E2D\u8BFB\u53D6\u6700\u65B0\u7248\u672C\u7684\u6587\u4EF6\u7684\u62F7\u8D1D</p><p>\u9ED8\u8BA4\u914D\u7F6E\u4E0B\u8FDC\u7A0B <code>Git</code> \u4ED3\u5E93\u4E2D\u7684\u6BCF\u4E00\u4E2A\u6587\u4EF6\u7684\u6BCF\u4E00\u4E2A\u7248\u672C\u90FD\u5C06\u88AB\u62C9\u53D6\u4E0B\u6765</p><h3 id="branch" tabindex="-1"><a class="header-anchor" href="#branch" aria-hidden="true">#</a> branch</h3><p><code>branch</code>\uFF0C\u8BD1\u4E3A\u5206\u652F\uFF0C\u5176\u4F5C\u7528\u7B80\u5355\u800C\u8A00\u5C31\u662F\u5F00\u542F\u53E6\u4E00\u4E2A\u5206\u652F\uFF0C \u4F7F\u7528\u5206\u652F\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u628A\u4F60\u7684\u5DE5\u4F5C\u4ECE\u5F00\u53D1\u4E3B\u7EBF\u4E0A\u5206\u79BB\u5F00\u6765\uFF0C\u4EE5\u514D\u5F71\u54CD\u5F00\u53D1\u4E3B\u7EBF</p><p><code> Git</code> \u5904\u7406\u5206\u652F\u7684\u65B9\u5F0F\u5341\u5206\u8F7B\u91CF\uFF0C\u521B\u5EFA\u65B0\u5206\u652F\u8FD9\u4E00\u64CD\u4F5C\u51E0\u4E4E\u80FD\u5728\u77AC\u95F4\u5B8C\u6210\uFF0C\u5E76\u4E14\u5728\u4E0D\u540C\u5206\u652F\u4E4B\u95F4\u7684\u5207\u6362\u64CD\u4F5C\u4E5F\u662F\u4E00\u6837\u4FBF\u6377</p><p>\u5728\u6211\u4EEC\u5F00\u53D1\u4E2D\uFF0C\u9ED8\u8BA4\u53EA\u6709\u4E00\u6761<code>master</code>\u5206\u652F\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/7fa8e9c0-f923-11eb-991d-334fd31f0201.png" alt=""></p><p>\u901A\u8FC7<code>git branch </code>\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4F46\u5E76\u4E0D\u4F1A\u81EA\u52A8\u5207\u6362\u5230\u65B0\u5206\u652F\u4E2D\u53BB</p><p><img src="https://static.vue-js.com/89efd560-f923-11eb-bc6f-3f06e1491664.png" alt=""></p><p>\u901A\u8FC7<code>git checkout</code>\u53EF\u4EE5\u5207\u6362\u5230\u53E6\u4E00\u4E2A<code>testing</code>\u5206\u652F</p><p><img src="https://static.vue-js.com/91d1cef0-f923-11eb-bc6f-3f06e1491664.png" alt=""></p><h2 id="\u4E8C\u3001\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u4E8C\u3001\u5982\u4F55\u4F7F\u7528</h2><h3 id="fork-1" tabindex="-1"><a class="header-anchor" href="#fork-1" aria-hidden="true">#</a> fork</h3><p>\u5F53\u4F60\u5728<code>github</code>\u53D1\u73B0\u611F\u5174\u8DA3\u5F00\u6E90\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB<code>github</code>\u4ED3\u5E93\u4E2D\u53F3\u4E0A\u89D2<code>fork</code>\u6807\u8BC6\u7684\u6309\u94AE\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/bc4c4510-f7ad-11eb-991d-334fd31f0201.png" alt=""></p><p>\u70B9\u51FB\u8FD9\u4E2A\u64CD\u4F5C\u540E\u4F1A\u5C06\u8FD9\u4E2A\u4ED3\u5E93\u7684\u6587\u4EF6\u3001\u63D0\u4EA4\u5386\u53F2\u3001issues \u548C\u5176\u4F59\u4E1C\u897F\u7684\u4ED3\u5E93\u590D\u5236\u5230\u81EA\u5DF1\u7684<code>github</code>\u4ED3\u5E93\u4E2D\uFF0C\u800C\u4F60\u672C\u5730\u4ED3\u5E93\u662F\u4E0D\u4F1A\u5B58\u5728\u4EFB\u4F55\u66F4\u6539</p><p>\u7136\u540E\u4F60\u5C31\u53EF\u4EE5\u901A\u8FC7<code>git clone</code>\u5BF9\u4F60\u8FD9\u4E2A\u590D\u5236\u7684\u8FDC\u7A0B\u4ED3\u5E93\u8FDB\u884C\u514B\u9686</p><p>\u540E\u7EED\u66F4\u6539\u4EFB\u4F55\u4E1C\u897F\u90FD\u53EF\u4EE5\u5728\u672C\u5730\u5B8C\u6210\uFF0C\u5982<code>git add</code>\u3001<code>git commit</code>\u4E00\u7CFB\u5217\u7684\u64CD\u4F5C\uFF0C\u7136\u540E\u901A\u8FC7<code>push</code>\u547D\u4EE4\u63A8\u5230\u81EA\u5DF1\u7684\u8FDC\u7A0B\u4ED3\u5E93</p><p>\u5982\u679C\u5E0C\u671B\u5BF9\u65B9\u63A5\u53D7\u4F60\u7684\u4FEE\u6539\uFF0C\u53EF\u4EE5\u901A\u8FC7\u53D1\u9001<code>pull requests</code>\u7ED9\u5BF9\u65B9\uFF0C\u5982\u679C\u5BF9\u65B9\u63A5\u53D7\u3002\u5219\u4F1A\u5C06\u4F60\u7684\u4FEE\u6539\u5185\u5BB9\u66F4\u65B0\u5230\u4ED3\u5E93\u4E2D</p><p><img src="https://static.vue-js.com/c5265a40-f7ad-11eb-991d-334fd31f0201.png" alt=""></p><p>\u6574\u4F53\u6D41\u7A0B\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/ced8ce10-f7ad-11eb-bc6f-3f06e1491664.png" alt=""></p><h3 id="clone-1" tabindex="-1"><a class="header-anchor" href="#clone-1" aria-hidden="true">#</a> clone</h3><p>\u5728<code>github</code>\u4E2D\uFF0C\u5F00\u6E90\u9879\u76EE\u53F3\u4FA7\u5B58\u5728<code>code</code>\u6309\u94AE\uFF0C\u70B9\u51FB\u540E\u5219\u4F1A\u663E\u793A\u5F00\u6E90\u9879\u76EE<code>url</code>\u4FE1\u606F\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/d8685090-f7ad-11eb-bc6f-3f06e1491664.png" alt=""></p><p>\u901A\u8FC7<code>git clone xxx</code>\u5219\u80FD\u5B8C\u6210\u8FDC\u7A0B\u9879\u76EE\u7684\u4E0B\u8F7D</p><h3 id="branch-1" tabindex="-1"><a class="header-anchor" href="#branch-1" aria-hidden="true">#</a> branch</h3><p>\u53EF\u901A\u8FC7<code>git branch</code>\u8FDB\u884C\u67E5\u770B\u5F53\u524D\u7684\u5206\u652F\u72B6\u6001\uFF0C</p><p>\u5982\u679C\u7ED9\u4E86<code>--list</code>\uFF0C\u6216\u8005\u6CA1\u6709\u975E\u9009\u9879\u53C2\u6570\uFF0C\u73B0\u6709\u7684\u5206\u652F\u5C06\u88AB\u5217\u51FA\uFF1B\u5F53\u524D\u7684\u5206\u652F\u5C06\u4EE5\u7EFF\u8272\u7A81\u51FA\u663E\u793A\uFF0C\u5E76\u6807\u6709\u661F\u53F7</p><p>\u4EE5\u53CA\u901A\u8FC7<code>git branch</code>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5206\u652F\u51FA\u6765</p><h2 id="\u4E09\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u533A\u522B" aria-hidden="true">#</a> \u4E09\u3001\u533A\u522B</h2><p>\u5176\u4E09\u8005\u533A\u522B\u5982\u4E0B\uFF1A</p><ul><li>fork \u53EA\u80FD\u5BF9\u4EE3\u7801\u4ED3\u8FDB\u884C\u64CD\u4F5C\uFF0C\u4E14 fork \u4E0D\u5C5E\u4E8E git \u7684\u547D\u4EE4\uFF0C\u901A\u5E38\u7528\u4E8E\u4EE3\u7801\u4ED3\u6258\u7BA1\u5E73\u53F0\u7684\u4E00\u79CD\u201C\u64CD\u4F5C\u201D</li><li>clone \u662F git \u7684\u4E00\u79CD\u547D\u4EE4\uFF0C\u5B83\u7684\u4F5C\u7528\u662F\u5C06\u6587\u4EF6\u4ECE\u8FDC\u7A0B\u4EE3\u7801\u4ED3\u4E0B\u8F7D\u5230\u672C\u5730\uFF0C\u4ECE\u800C\u5F62\u6210\u4E00\u4E2A\u672C\u5730\u4EE3\u7801\u4ED3</li><li>branch \u7279\u5F81\u4E0E fork \u5F88\u7C7B\u4F3C\uFF0Cfork \u5F97\u5230\u7684\u662F\u4E00\u4E2A\u65B0\u7684\u3001\u81EA\u5DF1\u7684\u4EE3\u7801\u4ED3\uFF0C\u800C branch \u5F97\u5230\u7684\u662F\u4E00\u4E2A\u4EE3\u7801\u4ED3\u7684\u4E00\u4E2A\u65B0\u5206\u652F</li></ul>',45),r=[t];function i(h,p){return c(),a("div",null,r)}const s=e(o,[["render",i],["__file","fork_clone_branch.html.vue"]]);export{s as default};
