import{_ as a,r as t,o as p,c as o,a as n,e,b as c,d as u}from"./app.91a380bb.js";const i={},l=n("h1",{id:"uniapp-\u5EFA\u7ACB-websocket-\u8FDE\u63A5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#uniapp-\u5EFA\u7ACB-websocket-\u8FDE\u63A5","aria-hidden":"true"},"#"),c(" uniapp \u5EFA\u7ACB websocket \u8FDE\u63A5")],-1),k={href:"https://uniapp.dcloud.net.cn/api/request/websocket.html",target:"_blank",rel:"noopener noreferrer"},r=n("code",null,"uniapp websocket",-1),d=u(`<h2 id="\u5C01\u88C5-websocket" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5-websocket" aria-hidden="true">#</a> \u5C01\u88C5 <code>websocket</code></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">webSocketClass</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">userId<span class="token punctuation">,</span> time <span class="token operator">=</span> <span class="token number">60</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// userId =&gt; \u7528\u6237id</span>
    <span class="token comment">// \u6CE8\u610F\uFF1A\u8FD9\u91CC\u53D6\u81EA\u5DF1\u9879\u76EE\u7684websocket\u5730\u5740</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ws://h5demo.funversy.com/message/websocket/socket.io/?transport=websocket&amp;userId=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;type=message</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isCreate <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// WebSocket \u662F\u5426\u521B\u5EFA\u6210\u529F</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isConnect <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u662F\u5426\u5DF2\u7ECF\u8FDE\u63A5</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isInitiative <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u662F\u5426\u4E3B\u52A8\u65AD\u5F00</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>timeoutNumber <span class="token operator">=</span> time<span class="token punctuation">;</span> <span class="token comment">// \u5FC3\u8DF3\u68C0\u6D4B\u95F4\u9694</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>heartbeatTimer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// \u5FC3\u8DF3\u68C0\u6D4B\u5B9A\u65F6\u5668</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>reconnectTimer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// \u65AD\u7EBF\u91CD\u8FDE\u5B9A\u65F6\u5668</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>socketExamples <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// websocket\u5B9E\u4F8B</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>againTime <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// \u91CD\u8FDE\u7B49\u5F85\u65F6\u95F4(\u5355\u4F4D\u79D2)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u521D\u59CB\u5316websocket\u8FDE\u63A5</span>
  <span class="token function">initSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>socketExamples <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">connectSocket</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> _this<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
      <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;content-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        _this<span class="token punctuation">.</span>isCreate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">rej</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        _this<span class="token punctuation">.</span>isCreate <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>rej<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u521B\u5EFAwebsocket\u8FDE\u63A5</span>
  <span class="token function">createSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>isCreate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket \u5F00\u59CB\u521D\u59CB\u5316&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u76D1\u542C WebSocket \u8FDE\u63A5\u6253\u5F00\u4E8B\u4EF6</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>socketExamples<span class="token punctuation">.</span><span class="token function">onOpen</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket \u8FDE\u63A5\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>isConnect <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
          <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heartbeatTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reconnectTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// \u6253\u5F00\u5FC3\u8DF3\u68C0\u6D4B</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heartbeatCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u76D1\u542C WebSocket \u63A5\u53D7\u5230\u670D\u52A1\u5668\u7684\u6D88\u606F\u4E8B\u4EF6</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>socketExamples<span class="token punctuation">.</span><span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u63A5\u6536webSocket\u6D88\u606F&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">let</span> msg <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>

          <span class="token keyword">if</span> <span class="token punctuation">(</span>msg<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;42[&quot;/topic/message&quot;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u6CE8\u610F\u70B9\uFF1A\u6B64\u5904\u5BF9\u63A5\u6536\u7684\u6D88\u606F\u8FDB\u884C\u5904\u7406\uFF0C\u7136\u540E\u53D1\u5C04\u5168\u5C40\u4E8B\u4EF6(socket-message)</span>
            uni<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;socket-message&quot;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;42&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u76D1\u542C WebSocket \u8FDE\u63A5\u5173\u95ED\u4E8B\u4EF6</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>socketExamples<span class="token punctuation">.</span><span class="token function">onClose</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket \u5173\u95ED\u4E86&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>isConnect <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u76D1\u542C WebSocket \u9519\u8BEF\u4E8B\u4EF6</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>socketExamples<span class="token punctuation">.</span><span class="token function">onError</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket \u51FA\u9519\u4E86&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>isInitiative <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket \u521D\u59CB\u5316\u5931\u8D25!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u53D1\u9001\u6D88\u606F</span>
  <span class="token function">sendMsg</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> param <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>socketExamples<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> param<span class="token punctuation">,</span>
        <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D88\u606F\u53D1\u9001\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">fail</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D88\u606F\u53D1\u9001\u5931\u8D25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5F00\u542F\u5FC3\u8DF3\u68C0\u6D4B</span>
  <span class="token function">heartbeatCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F00\u542F\u5FC3\u8DF3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;heartbeat&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>heartbeatTimer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendMsg</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>timeoutNumber <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u91CD\u65B0\u8FDE\u63A5</span>
  <span class="token function">reconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u505C\u6B62\u53D1\u9001\u5FC3\u8DF3</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reconnectTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heartbeatTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5982\u679C\u4E0D\u662F\u4EBA\u4E3A\u5173\u95ED\u7684\u8BDD\uFF0C\u8FDB\u884C\u91CD\u8FDE</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isInitiative<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>reconnectTimer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>againTime <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5173\u95ED WebSocket \u8FDE\u63A5</span>
  <span class="token function">closeSocket</span><span class="token punctuation">(</span>reason <span class="token operator">=</span> <span class="token string">&quot;\u5173\u95ED&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>socketExamples<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      reason<span class="token punctuation">,</span>
      <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _this<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        _this<span class="token punctuation">.</span>isCreate <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        _this<span class="token punctuation">.</span>isConnect <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        _this<span class="token punctuation">.</span>isInitiative <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        _this<span class="token punctuation">.</span>socketExamples <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token function">clearInterval</span><span class="token punctuation">(</span>_this<span class="token punctuation">.</span>heartbeatTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>_this<span class="token punctuation">.</span>reconnectTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5173\u95ED WebSocket \u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5173\u95ED WebSocket \u5931\u8D25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> webSocketClass<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// WebSocket\u5B9E\u4F8B\u5316</span>
<span class="token keyword">function</span> <span class="token function">initSocket</span><span class="token punctuation">(</span><span class="token parameter">userId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// userId =&gt; \u7528\u6237id</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>socketObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679Csockt\u5B9E\u4F8B\u672A\u8FDE\u63A5</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>socketObj<span class="token punctuation">.</span>isConnect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>socketObj<span class="token punctuation">.</span><span class="token function">initSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679C\u6CA1\u6709sockt\u5B9E\u4F8B\uFF0C\u5219\u521B\u5EFA</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">getAppInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>user<span class="token punctuation">;</span>
      <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>socketObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocketClass</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>socketObj<span class="token punctuation">.</span><span class="token function">initSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5173\u95EDWebSocket</span>
<span class="token keyword">function</span> <span class="token function">closeSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>socketObj <span class="token operator">&amp;&amp;</span>
    <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>socketObj<span class="token punctuation">.</span>isConnect
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>socketObj<span class="token punctuation">.</span><span class="token function">closeSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function v(m,b){const s=t("ExternalLinkIcon");return p(),o("div",null,[l,n("p",null,[n("a",k,[r,e(s)])]),d])}const w=a(i,[["render",v],["__file","uniapp-websocket.html.vue"]]);export{w as default};