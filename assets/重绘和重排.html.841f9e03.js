import{_ as e,o,c as i,d as c}from"./app.91a380bb.js";const d={},l=c('<h1 id="\u91CD\u7ED8\u548C\u91CD\u6392" tabindex="-1"><a class="header-anchor" href="#\u91CD\u7ED8\u548C\u91CD\u6392" aria-hidden="true">#</a> \u91CD\u7ED8\u548C\u91CD\u6392</h1><h2 id="\u9875\u9762\u6E32\u67D3\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u6E32\u67D3\u8FC7\u7A0B" aria-hidden="true">#</a> \u9875\u9762\u6E32\u67D3\u8FC7\u7A0B</h2><p><img src="https://miro.medium.com/v2/resize:fit:1276/format:webp/1*_alTfrxmTCP1mInn4QEOnA.jpeg" alt="aa"></p><ol><li>\u89E3\u6790 HTML \u6807\u8BB0\u5E76\u6784\u5EFA DOM \u6811</li><li>\u6837\u5F0F\u8BA1\u7B97</li><li>\u5E03\u5C40\u5B9A\u4F4D</li><li>\u56FE\u5C42\u5206\u5C42</li><li>\u56FE\u5C42\u7ED8\u5236</li><li>\u5408\u6210\u663E\u793A</li></ol><p>\u5728 css \u5C5E\u6027\u6539\u53D8\u65F6\uFF0C\u91CD\u6E32\u67D3\u4F1A\u5206\u4E3A<code>\u56DE\u6D41</code>\uFF0C<code>\u91CD\u7ED8</code>\uFF0C<code>\u76F4\u63A5\u5408\u6210</code>\u4E09\u79CD\u60C5\u51B5\uFF0C\u5206\u522B\u5BF9\u5E94\u4ECE<code>\u5E03\u5C40\u5B9A\u4F4D</code>\uFF0C<code>\u56FE\u5C42\u7ED8\u5236</code>\uFF0C<code>\u5408\u6210\u663E\u793A</code>\u5F00\u59CB\uFF0C\u7EE7\u7EED\u540E\u9762\u7684\u6D41\u7A0B</p><p>\u5143\u7D20\u7684 CSS \u5C5E\u6027\u5177\u4F53\u53D1\u751F\u4EC0\u4E48\u53D8\u5316\uFF0C\u5219\u51B3\u5B9A\u5C5E\u4E8E\u4EC0\u4E48\u60C5\u51B5</p><ul><li>\u56DE\u6D41(\u91CD\u6392):\u5143\u7D20\u7684\u4F4D\u7F6E\u3001\u5927\u5C0F\u53D1\u751F\u53D8\u5316\u5BFC\u81F4\u5176\u4ED6\u8282\u70B9\u8054\u52A8\uFF0C\u9700\u8981\u91CD\u65B0\u8BA1\u7B97\u5E03\u5C40</li><li>\u91CD\u7ED8: \u4FEE\u6539\u4E0D\u5F71\u54CD\u5E03\u5C40\u7684\u5C5E\u6027\uFF0C\u5982\u80CC\u666F\u8272\u3001\u5B57\u4F53\u989C\u8272\u7B49</li><li>\u76F4\u63A5\u5408\u6210: <code>transform</code>\u3001<code>opacity</code>\u3001\u4FEE\u6539\uFF0C\u53EA\u9700\u8981\u5C06\u591A\u4E2A\u56FE\u5C42\u518D\u6B21\u5408\u5E76\uFF0C\u518D\u751F\u6210\u4F4D\u56FE\uFF0C\u6700\u7EC8\u663E\u793A\u5728\u5C4F\u5E55\u4E0A</li></ul><h2 id="\u89E6\u53D1\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#\u89E6\u53D1\u65F6\u673A" aria-hidden="true">#</a> \u89E6\u53D1\u65F6\u673A</h2><p>\u56DE\u6D41\u8FD9\u4E00\u9636\u6BB5\u4E3B\u8981\u662F\u8BA1\u7B97\u8282\u70B9\u7684\u4F4D\u7F6E\u548C\u51E0\u4F55\u4FE1\u606F\uFF0C\u90A3\u4E48\u5F53\u9875\u9762\u5E03\u5C40\u548C\u51E0\u4F55\u4FE1\u606F\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u5C31\u9700\u8981\u56DE\u6D41\u3002</p><h3 id="\u56DE\u6D41\u7684\u89E6\u53D1\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#\u56DE\u6D41\u7684\u89E6\u53D1\u65F6\u673A" aria-hidden="true">#</a> \u56DE\u6D41\u7684\u89E6\u53D1\u65F6\u673A</h3><ul><li>\u6DFB\u52A0\u6216\u5220\u9664 <strong>\u300C\u53EF\u89C1\u7684 DOM \u5143\u7D20\u300D</strong></li><li>\u5143\u7D20\u7684 <strong>\u300C\u4F4D\u7F6E\u300D</strong> \u53D1\u751F\u53D8\u5316</li><li>\u5143\u7D20\u7684 <strong>\u300C\u5C3A\u5BF8\u300D</strong> \u53D1\u751F\u53D8\u5316\uFF08\u5305\u62EC\u5916\u8FB9\u8DDD\u3001\u5185\u8FB9\u6846\u3001\u8FB9\u6846\u5927\u5C0F\u3001\u9AD8\u5EA6\u548C\u5BBD\u5EA6\u7B49\uFF09</li><li>\u5185\u5BB9\u53D1\u751F\u53D8\u5316\uFF0C\u6BD4\u5982\u6587\u672C\u53D8\u5316\u6216\u56FE\u7247\u88AB\u53E6\u4E00\u4E2A\u4E0D\u540C\u5C3A\u5BF8\u7684\u56FE\u7247\u6240\u66FF\u4EE3</li><li>\u9875\u9762\u4E00\u5F00\u59CB\u6E32\u67D3\u7684\u65F6\u5019\uFF08\u8FD9\u907F\u514D\u4E0D\u4E86\uFF09</li><li>\u6D4F\u89C8\u5668\u7684 <strong>\u300C\u7A97\u53E3\u5C3A\u5BF8\u53D8\u5316\u300D</strong>\uFF08\u56E0\u4E3A\u56DE\u6D41\u662F\u6839\u636E\u89C6\u53E3\u7684\u5927\u5C0F\u6765\u8BA1\u7B97\u5143\u7D20\u7684\u4F4D\u7F6E\u548C\u5927\u5C0F\u7684\uFF09 \u83B7\u53D6\u4E00\u4E9B\u7279\u5B9A\u5C5E\u6027\u7684\u503C <ul><li><code>offsetTop</code>\u3001<code>offsetLeft</code>\u3001 <code>offsetWidth</code>\u3001<code>offsetHeight</code></li><li><code>scrollTop</code>\u3001<code>scrollLeft</code>\u3001<code>scrollWidth</code>\u3001<code>scrollHeight</code></li><li><code>clientTop</code>\u3001<code>clientLeft</code>\u3001<code>clientWidth</code>\u3001<code>clientHeight</code></li><li>\u8FD9\u4E9B\u5C5E\u6027\u6709\u4E00\u4E2A\u5171\u6027\uFF0C\u5C31\u662F\u9700\u8981\u901A\u8FC7 <strong>\u300C\u5373\u65F6\u8BA1\u7B97\u300D</strong> \u5F97\u5230\u3002\u56E0\u6B64\u6D4F\u89C8\u5668\u4E3A\u4E86\u83B7\u53D6\u8FD9\u4E9B\u503C\uFF0C\u4E5F\u4F1A\u8FDB\u884C\u56DE\u6D41\u3002</li></ul></li></ul><h3 id="\u91CD\u7ED8\u7684\u89E6\u53D1\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#\u91CD\u7ED8\u7684\u89E6\u53D1\u65F6\u673A" aria-hidden="true">#</a> \u91CD\u7ED8\u7684\u89E6\u53D1\u65F6\u673A</h3><div class="custom-container warning"><p class="custom-container-title">\u63D0\u793A</p><p>\u89E6\u53D1\u56DE\u6D41\u4E00\u5B9A\u4F1A\u89E6\u53D1\u91CD\u7ED8</p></div><ul><li>\u300C\u989C\u8272\u300D\u7684\u4FEE\u6539</li><li>\u300C\u6587\u672C\u65B9\u5411\u300D\u7684\u4FEE\u6539</li><li>\u300C\u9634\u5F71\u300D\u7684\u4FEE\u6539</li></ul><h2 id="\u6D4F\u89C8\u5668\u7684\u4F18\u5316\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7684\u4F18\u5316\u673A\u5236" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u7684\u4F18\u5316\u673A\u5236</h2><p>\u7531\u4E8E\u6BCF\u6B21\u91CD\u6392\u90FD\u4F1A\u9020\u6210\u989D\u5916\u7684\u8BA1\u7B97\u6D88\u8017\uFF0C\u56E0\u6B64\u5927\u591A\u6570\u6D4F\u89C8\u5668\u90FD\u4F1A <strong>\u300C\u901A\u8FC7\u961F\u5217\u5B58\u50A8\u91CD\u6392\u64CD\u4F5C\u5E76\u6279\u91CF\u6267\u884C\u6765\u4F18\u5316\u91CD\u6392\u8FC7\u7A0B\u300D</strong>\u3002\u6D4F\u89C8\u5668\u4F1A\u5C06\u4FEE\u6539\u64CD\u4F5C\u653E\u5165\u5230\u961F\u5217\u91CC\uFF0C\u76F4\u5230\u8FC7\u4E86\u4E00\u6BB5\u65F6\u95F4\u6216\u8005\u64CD\u4F5C\u8FBE\u5230\u4E86\u4E00\u4E2A\u9608\u503C\uFF0C\u624D\u6E05\u7A7A\u961F\u5217\u3002</p><p>\u5F53\u4F60\u83B7\u53D6\u5E03\u5C40\u4FE1\u606F\u7684\u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u4F1A <strong>\u300C\u5F3A\u5236\u961F\u5217\u5237\u65B0\u300D</strong>\uFF0C\u4F8B\u5982 <code>offsetTop</code> \u7B49\u65B9\u6CD5\u90FD\u4F1A\u8FD4\u56DE\u6700\u65B0\u7684\u6570\u636E\u3002</p><p>\u56E0\u6B64\u6D4F\u89C8\u5668\u4E0D\u5F97\u4E0D\u6E05\u7A7A\u961F\u5217\uFF0C\u89E6\u53D1\u56DE\u6D41\u91CD\u7ED8\u6765\u8FD4\u56DE\u6B63\u786E\u7684\u503C</p><h2 id="\u51CF\u5C11\u56DE\u6D41" tabindex="-1"><a class="header-anchor" href="#\u51CF\u5C11\u56DE\u6D41" aria-hidden="true">#</a> \u51CF\u5C11\u56DE\u6D41</h2><ol><li>\u5BF9\u4E8E\u90A3\u4E9B\u590D\u6742\u7684\u52A8\u753B\uFF0C\u5BF9\u5176\u8BBE\u7F6E <code>position: fixed/absolute</code>\uFF0C\u5C3D\u53EF\u80FD\u5730\u4F7F\u5143\u7D20\u8131\u79BB\u6587\u6863\u6D41\uFF0C\u4ECE\u800C\u51CF\u5C11\u5BF9\u5176\u4ED6\u5143\u7D20\u7684\u5F71\u54CD</li><li>\u4F7F\u7528 css3 <strong>\u300C\u786C\u4EF6\u52A0\u901F\u300D</strong>\uFF0C\u53EF\u4EE5\u8BA9 <code>transform</code>\u3001<code>opacity</code>\u3001<code>filters</code> \u8FD9\u4E9B\u52A8\u753B\u4E0D\u4F1A\u5F15\u8D77\u56DE\u6D41\u91CD\u7ED8</li><li>\u5728\u4F7F\u7528 JavaScript **\u300C\u52A8\u6001\u63D2\u5165\u591A\u4E2A\u8282\u70B9\u300D**\u65F6, \u53EF\u4EE5\u4F7F\u7528 <code>DocumentFragment</code>.\u521B\u5EFA\u540E\u4E00\u6B21\u63D2\u5165.</li><li>\u901A\u8FC7\u8BBE\u7F6E\u5143\u7D20\u5C5E\u6027 <code>display: none</code>\uFF0C\u5C06\u5176\u4ECE\u9875\u9762\u4E0A\u53BB\u6389\uFF0C\u7136\u540E\u518D\u8FDB\u884C\u540E\u7EED\u64CD\u4F5C\uFF0C\u8FD9\u4E9B\u540E\u7EED\u64CD\u4F5C\u4E5F\u4E0D\u4F1A\u89E6\u53D1\u56DE\u6D41\u4E0E\u91CD\u7ED8\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u79F0\u4E3A\u79BB\u7EBF\u64CD\u4F5C</li></ol>',20),t=[l];function a(r,s){return o(),i("div",null,t)}const h=e(d,[["render",a],["__file","\u91CD\u7ED8\u548C\u91CD\u6392.html.vue"]]);export{h as default};
