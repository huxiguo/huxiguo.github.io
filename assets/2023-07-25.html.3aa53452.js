import{_ as e,o as i,c as l,d as o}from"./app.91a380bb.js";const a={},d=o('<h1 id="_2023-07-25-\u9762\u8BD5" tabindex="-1"><a class="header-anchor" href="#_2023-07-25-\u9762\u8BD5" aria-hidden="true">#</a> 2023-07-25 \u9762\u8BD5</h1><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h2><p>\u5728 Linux \u4F7F\u7528 nginx \u5BF9\u524D\u7AEF\u9879\u76EE\u8FDB\u884C\u90E8\u7F72</p><p>\u5148\u5C06\u524D\u7AEF\u9879\u76EE\u6253\u5305\u6210\u9759\u6001\u6587\u4EF6\uFF0C\u7136\u540E\u5C06\u9759\u6001\u6587\u4EF6\u653E\u5230 nginx \u7684 html \u76EE\u5F55\u4E0B\uFF0C\u7136\u540E\u914D\u7F6E nginx \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230\u9759\u6001\u6587\u4EF6\u7684\u76EE\u5F55\u4E0B</p><p>nginx \u547D\u4EE4</p><ul><li>\u542F\u52A8 nginx <ul><li><code>nginx</code></li></ul></li><li>\u505C\u6B62 nginx <ul><li><code>nginx -s stop</code>: \u7ACB\u5373\u505C\u6B62</li><li><code>nginx -s quit</code>: \u5B8C\u6574\u6709\u5E8F\u7684\u505C\u6B62</li></ul></li><li>\u91CD\u542F nginx <ul><li><code>nginx -s reload</code></li></ul></li></ul><h2 id="\u767B\u5F55\u6A21\u5757\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55\u6A21\u5757\u5B9E\u73B0" aria-hidden="true">#</a> \u767B\u5F55\u6A21\u5757\u5B9E\u73B0</h2><p>\u9996\u5148\u7528\u6237\u586B\u5199\u767B\u5F55\u8868\u5355\u540E\uFF0C\u5C06\u8868\u5355\u6570\u636E\u53D1\u9001\u5230\u540E\u7AEF\u8FDB\u884C\u6821\u9A8C\uFF0C\u5982\u679C\u6821\u9A8C\u901A\u8FC7\uFF0C\u540E\u7AEF\u4F1A\u751F\u6210\u4E00\u4E2A token\uFF0C\u7136\u540E\u5C06 token \u8FD4\u56DE\u7ED9\u524D\u7AEF\uFF0C\u524D\u7AEF\u5C06 token \u5B58\u50A8\u5230 sessionStorage \u6216\u8005 localStorage \u4E2D\uFF0C\u5728\u540E\u7EED\u9700\u8981\u8FDB\u884C\u9274\u6743\u7684\u8BF7\u6C42\u63A5\u53E3\u4E2D\u5C06 token \u653E\u5165\u8BF7\u6C42\u5934\u7684 Authorization \u5B57\u6BB5\u4E2D</p><h2 id="sessionstorage-localstorage-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#sessionstorage-localstorage-\u533A\u522B" aria-hidden="true">#</a> sessionStorage localStorage \u533A\u522B</h2><ul><li>\u751F\u547D\u5468\u671F\uFF1A localStorage \u5B58\u50A8\u7684\u6570\u636E\u6CA1\u6709\u8FC7\u671F\u65F6\u95F4\uFF0CsessionStorage \u5B58\u50A8\u7684\u6570\u636E\u5728\u5173\u95ED\u6D4F\u89C8\u5668,\u6216\u8005\u6807\u7B7E\u9875\u540E\u5C31\u4F1A\u88AB\u6E05\u9664</li></ul><h2 id="\u6743\u9650\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650\u8BBE\u8BA1" aria-hidden="true">#</a> \u6743\u9650\u8BBE\u8BA1</h2><ul><li>\u5728\u7528\u6237\u8FDB\u5165\u9875\u9762\u65F6\u4F1A\u53D1\u9001\u8BF7\u6C42\u9875\u9762\u8DEF\u7531\u6743\u9650\u7684\u63A5\u53E3\uFF0C\u524D\u7AEF\u6839\u636E\u8FD4\u56DE\u7684\u6570\u636E\u8FDB\u884C\u52A8\u6001\u8DEF\u7531\u7684\u6CE8\u518C</li></ul><h2 id="git-\u534F\u4F5C\u5F00\u53D1\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#git-\u534F\u4F5C\u5F00\u53D1\u6D41\u7A0B" aria-hidden="true">#</a> git \u534F\u4F5C\u5F00\u53D1\u6D41\u7A0B</h2><ol><li>GitFlow \u534F\u540C\u5DE5\u4F5C\u6D41</li></ol><p>\u89E3\u51B3\u7684\u95EE\u9898</p><ul><li><p>\u5E0C\u671B\u6709\u4E00\u4E2A\u5206\u652F\u662F\u975E\u5E38\u5E72\u51C0\u7684\uFF0C\u4E0A\u9762\u662F\u53EF\u4EE5\u53D1\u5E03\u7684\u4EE3\u7801\uFF0C\u4E0A\u9762\u7684\u6539\u52A8\u6C38\u8FDC\u90FD\u662F\u53EF\u4EE5\u53D1\u5E03\u5230\u751F\u4EA7\u73AF\u5883\u4E2D\u7684\u3002\u8FD9\u4E2A\u5206\u652F\u4E0A\u4E0D\u80FD\u6709\u4E2D\u95F4\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u4E0D\u53EF\u4EE5\u4E0A\u751F\u4EA7\u7EBF\u7684\u4EE3\u7801\u63D0\u4EA4\u3002</p></li><li><p>\u5BF9\u4E8E\u5DF2\u7ECF\u53D1\u5E03\u7684\u4EE3\u7801\uFF0C\u7ECF\u5E38\u4F1A\u6709\u4E00\u4E9B Bug-fix\uFF0C\u4E0D\u4F1A\u5C06\u6B63\u5728\u5F00\u53D1\u7684\u4EE3\u7801\u63D0\u4EA4\u5230\u751F\u4EA7\u7EBF\u4E0A\u53BB\u3002</p></li></ul><p>\u5206\u6210 5 \u79CD\u5206\u652F</p><ul><li><code>Master</code> \u5206\u652F \u4E3B\u5206\u652F \u7528\u4F5C\u53D1\u5E03\u73AF\u5883\uFF0C\u4E0A\u9762\u7684\u6BCF\u4E00\u6B21\u63D0\u4EA4\u90FD\u662F\u53EF\u4EE5\u53D1\u5E03\u7684\u3002</li><li><code>Feature</code> \u5206\u652F \u529F\u80FD\u5206\u652F \u7528\u4E8E\u5F00\u53D1\u529F\u80FD\uFF0C\u5176\u5BF9\u5E94\u7684\u662F\u5F00\u53D1\u73AF\u5883</li><li><code>Developer</code> \u5206\u652F \u5F00\u53D1\u5206\u652F \u5F00\u53D1\u5206\u652F\uFF0C\u4E00\u65E6\u529F\u80FD\u5F00\u53D1\u5B8C\u6210\uFF0C\u5C31\u5411 <code>Developer</code> \u5206\u652F\u5408\u5E76\uFF0C\u5408\u5E76\u5B8C\u6210\u540E\uFF0C\u5220\u9664\u529F\u80FD\u5206\u652F\u3002</li><li><code>Release</code> \u5206\u652F \u5F53 <code>Developer</code> \u5206\u652F\u6D4B\u8BD5\u8FBE\u5230\u53EF\u4EE5\u53D1\u5E03\u72B6\u6001\u65F6\uFF0C\u5F00\u51FA\u4E00\u4E2A <code>Release</code> \u5206\u652F\u6765\uFF0C\u7136\u540E\u505A\u53D1\u5E03\u524D\u7684\u51C6\u5907\u5DE5\u4F5C\u3002\u8FD9\u4E2A\u5206\u652F\u5BF9\u5E94\u7684\u662F\u9884\u53D1\u73AF\u5883\u3002\u4E4B\u6240\u4EE5\u9700\u8981\u8FD9\u4E2A <code>Release</code> \u5206\u652F\uFF0C\u662F\u6211\u4EEC\u7684\u5F00\u53D1\u53EF\u4EE5\u7EE7\u7EED\u5411\u524D\u3002\uFF08\u4E00\u65E6 <code>Release</code> \u5206\u652F\u4E0A\u7684\u4EE3\u7801\u8FBE\u5230\u53EF\u4EE5\u4E0A\u7EBF\u7684\u72B6\u6001\uFF0C\u90A3\u4E48\u9700\u8981\u628A <code>Release</code> \u5206\u652F\u5411 Master \u5206\u652F\u548C <code>Developer</code> \u5206\u652F\u540C\u65F6\u5408\u5E76\uFF0C\u4EE5\u4FDD\u8BC1\u4EE3\u7801\u7684\u4E00\u81F4\u6027\u3002\u7136\u540E\u518D\u628A <code>Release</code> \u5206\u652F\u5220\u9664\u6389\u3002\uFF09</li><li><code>Hotfix</code> \u5206\u652F \u662F\u7528\u4E8E\u5904\u7406\u751F\u4EA7\u7EBF\u4E0A\u4EE3\u7801\u7684 <code>Bug-fix</code>\uFF0C\u6BCF\u4E2A\u7EBF\u4E0A\u4EE3\u7801\u7684 <code>Bug-fix</code> \u90FD\u9700\u8981\u5F00\u4E00\u4E2A <code>Hotfix</code> \u5206\u652F\uFF0C\u5B8C\u6210\u540E\uFF0C\u5411 <code>Developer</code> \u5206\u652F\u548C <code>Master</code> \u5206\u652F\u4E0A\u5408\u5E76\u3002\u5408\u5E76\u5B8C\u6210\u540E\uFF0C\u5220\u9664 Hotfix \u5206\u652F\u3002</li></ul><p>\u5728\u8FD9\u4E2A\u5DE5\u4F5C\u6D41\u4E2D\uFF0C\u9700\u8981\u505A\u7684</p><ul><li>\u9700\u8981\u957F\u671F\u7EF4\u62A4 Master \u548C Developer \u4E24\u4E2A\u5206\u652F\u3002</li></ul><ol start="2"><li>GitHub Flow \u534F\u540C\u5DE5\u4F5C\u6D41</li></ol><p>Forking flow</p><ul><li>\u6BCF\u4E2A\u5F00\u53D1\u4EBA\u5458\u90FD\u628A\u201C\u5B98\u65B9\u5E93\u201D\u7684\u4EE3\u7801 fork \u5230\u81EA\u5DF1\u7684\u4EE3\u7801\u4ED3\u5E93\u4E2D\u3002</li><li>\u7136\u540E\uFF0C\u5F00\u53D1\u4EBA\u5458\u5728\u81EA\u5DF1\u7684\u4EE3\u7801\u4ED3\u5E93\u4E2D\u505A\u5F00\u53D1\uFF0C\u60F3\u5E72\u5565\u5E72\u5565\u3002</li><li>\u56E0\u6B64\uFF0C\u5F00\u53D1\u4EBA\u5458\u7684\u4EE3\u7801\u5E93\u4E2D\uFF0C\u9700\u8981\u914D\u4E24\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u4E00\u4E2A\u662F\u81EA\u5DF1\u7684\u5E93\uFF0C\u4E00\u4E2A\u662F\u5B98\u65B9\u5E93\uFF08\u7528\u6237\u7684\u5E93\u7528\u4E8E\u63D0\u4EA4\u4EE3\u7801\u6539\u52A8\uFF0C\u5B98\u65B9\u5E93\u7528\u4E8E\u540C\u6B65\u4EE3\u7801\uFF09\u3002</li><li>\u7136\u540E\u5728\u672C\u5730\u5EFA\u201C\u529F\u80FD\u5206\u652F\u201D\uFF0C\u5728\u8FD9\u4E2A\u5206\u652F\u4E0A\u505A\u4EE3\u7801\u5F00\u53D1\u3002</li><li>\u8FD9\u4E2A\u529F\u80FD\u5206\u652F\u88AB push \u5230\u5F00\u53D1\u4EBA\u5458\u81EA\u5DF1\u7684\u4EE3\u7801\u4ED3\u5E93\u4E2D\u3002</li><li>\u7136\u540E\uFF0C\u5411\u201C\u5B98\u65B9\u5E93\u201D\u53D1\u8D77 pull request\uFF0C\u5E76\u505A Code Review\u3002\u4E00\u65E6\u901A\u8FC7\uFF0C\u5C31\u5411\u5B98\u65B9\u5E93\u8FDB\u884C\u5408\u5E76\u3002</li></ul>',23),c=[d];function n(r,t){return i(),l("div",null,c)}const h=e(a,[["render",n],["__file","2023-07-25.html.vue"]]);export{h as default};