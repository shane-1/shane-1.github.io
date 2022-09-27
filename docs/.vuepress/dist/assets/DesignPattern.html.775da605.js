import{_ as e,r as t,o as p,c,a as n,b as o,e as l,d as s}from"./app.838aae74.js";const i={},u=l(`<h1 id="\u8BBE\u8BA1\u6A21\u5F0F-design-pattern" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u6A21\u5F0F-design-pattern" aria-hidden="true">#</a> \u8BBE\u8BA1\u6A21\u5F0F Design pattern</h1><h2 id="\u5355\u4F8B\u6A21\u5F0F-singleton" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F-singleton" aria-hidden="true">#</a> \u5355\u4F8B\u6A21\u5F0F Singleton</h2><p>\u7C7B\u6709\u4E14\u53EA\u6709\u4E00\u4E2A\u5BF9\u8C61<br></p><ol><li>\u61D2\u6C49\u5F0F</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u5355\u4F8B\u6A21\u5F0F,\u5783\u573E\u6876</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GarbageBox</span><span class="token punctuation">{</span>
    <span class="token comment">//\u5B9E\u4F8B</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">GarbageBox</span>  instance<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    *\u6784\u9020\u79C1\u6709
    */</span>
    <span class="token keyword">private</span> <span class="token class-name">GarbageBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">GarbageBox</span>  <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>intsant  <span class="token operator">==</span>  <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            instance  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GarbageBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span>  instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u591A\u7EBF\u7A0B\u4F18\u5316</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u5355\u4F8B\u6A21\u5F0F,\u5783\u573E\u6876</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GarbageBox</span><span class="token punctuation">{</span>
    <span class="token comment">//\u5B9E\u4F8B</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">GarbageBox</span>  instance<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Obeject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u9501</span>
    <span class="token doc-comment comment">/**
    *\u6784\u9020\u79C1\u6709
    */</span>
    <span class="token keyword">private</span> <span class="token class-name">GarbageBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">GarbageBox</span>  <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//\u4E3A\u7A7A\u60C5\u51B5\u4E0B\u624D\u9501\u4F4F</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>intsant  <span class="token operator">==</span>  <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Synchronized</span> <span class="token punctuation">(</span>lock<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    instance  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GarbageBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span>  instance<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u997F\u6C49\u5F0F</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u5355\u4F8B\u6A21\u5F0F,\u5783\u573E\u6876</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GarbageBox</span><span class="token punctuation">{</span>
    <span class="token comment">//\u5B9E\u4F8B</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">GarbageBox</span>  instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GarbageBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    *\u6784\u9020\u79C1\u6709
    */</span>
    <span class="token keyword">private</span> <span class="token class-name">GarbageBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">GarbageBox</span>  <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span>  instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9002\u914D\u5668-adapter" tabindex="-1"><a class="header-anchor" href="#\u9002\u914D\u5668-adapter" aria-hidden="true">#</a> \u9002\u914D\u5668 Adapter</h2><p>\u2003\u2003\u5C06\u4E00\u4E2A\u63A5\u53E3\u8F6C\u6362\u6210\u5BA2\u6237\u5E0C\u671B\u7684\u53E6\u4E00\u4E2A\u63A5\u53E3\uFF0C\u4F7F\u63A5\u53E3\u4E0D\u517C\u5BB9\u7684\u90A3\u4E9B\u7C7B\u53EF\u4EE5\u4E00\u8D77\u5DE5\u4F5C\uFF0C\u5176\u522B\u540D\u4E3A\u5305\u88C5\u5668(Wrapper)\u3002\u9002\u914D\u5668\u6A21\u5F0F\u65E2\u53EF\u4EE5\u4F5C\u4E3A\u7C7B\u7ED3\u6784\u578B\u6A21\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u5BF9\u8C61\u7ED3\u6784\u578B\u6A21\u5F0F\u3002<br> \u2003\u2003\u5728\u9002\u914D\u5668\u6A21\u5F0F\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7\u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u9002\u914D\u5668\u7C7B\u6765\u89E3\u51B3\u63A5\u53E3\u4E0D\u517C\u5BB9\u7684\u95EE\u9898\uFF0C\u4F7F\u5F97\u539F\u672C\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB\u7684\u7C7B\u53EF\u4EE5\u534F\u540C\u5DE5\u4F5C\u3002<br> \u2003\u2003\u6839\u636E\u9002\u914D\u5668\u7C7B\u4E0E\u9002\u914D\u8005\u7C7B\u7684\u5173\u7CFB\u4E0D\u540C\uFF0C\u9002\u914D\u5668\u6A21\u5F0F\u53EF\u5206\u4E3A<strong>\u5BF9\u8C61\u9002\u914D\u5668</strong>\u548C<strong>\u7C7B\u9002\u914D\u5668</strong>\u4E24\u79CD\uFF0C\u5728<strong>\u5BF9\u8C61\u9002\u914D\u5668</strong>\u6A21\u5F0F\u4E2D\uFF0C\u9002\u914D\u5668\u4E0E\u9002\u914D\u8005\u4E4B\u95F4\u662F<strong>\u5173\u8054\u5173\u7CFB</strong>\uFF1B\u5728<strong>\u7C7B\u9002\u914D\u5668</strong>\u6A21\u5F0F\u4E2D\uFF0C\u9002\u914D\u5668\u4E0E\u9002\u914D\u8005\u4E4B\u95F4\u662F<strong>\u7EE7\u627F</strong>\uFF08\u6216\u5B9E\u73B0\uFF09\u5173\u7CFB\u3002</p><h2 id="\u88C5\u9970\u6A21\u5F0F-decorate" tabindex="-1"><a class="header-anchor" href="#\u88C5\u9970\u6A21\u5F0F-decorate" aria-hidden="true">#</a> \u88C5\u9970\u6A21\u5F0F Decorate</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">A</span> a<span class="token punctuation">;</span>

    publlic <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token class-name">A</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        a<span class="token punctuation">.</span><span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5DE5\u5382\u6A21\u5F0F-factory" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5382\u6A21\u5F0F-factory" aria-hidden="true">#</a> \u5DE5\u5382\u6A21\u5F0F Factory</h2><p>\u901A\u8FC7\u9759\u6001\u65B9\u6CD5\u521B\u5EFA\u5B8C\u6574\u5BF9\u8C61</p><h3 id="\u7B80\u5355\u5DE5\u5382" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u5DE5\u5382" aria-hidden="true">#</a> \u7B80\u5355\u5DE5\u5382</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CarFactory</span><span class="token punctuation">{</span>
   <span class="token keyword">public</span> staitic car <span class="token function">createCar</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;audi&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Audi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;BYD&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BYD</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">else</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> \u5DE5\u5382\u6A21\u5F0F</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CarFactory</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token class-name">Car</span> <span class="token function">createCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AudiFactory</span> <span class="token keyword">implements</span> <span class="token class-name">CarFactory</span><span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">Car</span> <span class="token function">createCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Audi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EE3\u7406\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406\u6A21\u5F0F" aria-hidden="true">#</a> \u4EE3\u7406\u6A21\u5F0F</h2><p>\u89D2\u8272:</p><ol><li>\u771F\u5B9E\u89D2\u8272</li><li>\u4EE3\u7406\u89D2\u8272</li><li>\u62BD\u8C61\u89D2\u8272(\u524D\u4E24\u8005\u9700\u8981\u6709\u5171\u540C\u7684\u65B9\u6CD5,\u7531\u8BE5\u90E8\u5206\u5B8C\u6210)</li></ol><ul><li>\u771F\u6B63\u505A\u4E8B\u60C5\u7684\u662F\u771F\u5B9E\u89D2\u8272</li><li>\u5BF9\u4E8E\u5916\u754C\u6765\u8BF4\u4E00\u5B9A\u662F\u4EE3\u7406\u89D2\u8272,\u771F\u5B9E\u89D2\u8272\u88AB\u9690\u85CF</li><li>\u4EE3\u7406\u8981\u6709\u771F\u5B9E\u89D2\u8272\u7684\u5F15\u7528</li><li>\u4EE3\u7406\u89D2\u8272\u53EF\u4EE5\u9644\u52A0\u81EA\u5DF1\u7684\u529F\u80FD</li></ul><h3 id="\u9759\u6001\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u4EE3\u7406" aria-hidden="true">#</a> \u9759\u6001\u4EE3\u7406</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Proxyee</span> <span class="token keyword">implements</span> share<span class="token punctuation">{</span>
   <span class="token constant">XXXX</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Proxy</span> <span class="token keyword">implements</span> share<span class="token punctuation">{</span>
   <span class="token keyword">private</span> <span class="token class-name">Share</span> share <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxyee</span><span class="token punctuation">;</span>
   <span class="token constant">XXXX</span><span class="token punctuation">;</span>
   share<span class="token punctuation">.</span><span class="token constant">XXXX</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Share</span><span class="token punctuation">{</span>
   <span class="token constant">XXXX</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u52A8\u6001\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u4EE3\u7406" aria-hidden="true">#</a> \u52A8\u6001\u4EE3\u7406</h3><blockquote><p>\u89E3\u51B3\u9759\u6001\u4EE3\u7406\u5E26\u6765\u7684\u9AD8\u6D88\u8017,\u91CD\u590D\u521B\u5EFA\u4E0D\u540C\u7684\u4EE3\u7406</p></blockquote><p>\u901A\u8FC7\u53CD\u5C04\u5B9E\u73B0,\u5177\u4F53\u5B9E\u73B0\u53EF\u53C2\u8003\u6587\u7AE0:</p>`,28),d={href:"https://shane-1.io/java/AnnotationReflection.html#%E5%8F%8D%E5%B0%84",target:"_blank",rel:"noopener noreferrer"},r=s("\u53CD\u5C04\u548C\u6CE8\u89E3"),k=n("h2",{id:"\u6784\u5EFA\u5668\u6A21\u5F0F-builder",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6784\u5EFA\u5668\u6A21\u5F0F-builder","aria-hidden":"true"},"#"),s(" \u6784\u5EFA\u5668\u6A21\u5F0F Builder")],-1),v=n("p",null,"setXx()\u8FD4\u56DE\u5BF9\u8C61\u81EA\u8EAB",-1),m=n("h2",{id:"\u89C2\u5BDF\u8005\u6A21\u5F0F-observer",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u89C2\u5BDF\u8005\u6A21\u5F0F-observer","aria-hidden":"true"},"#"),s(" \u89C2\u5BDF\u8005\u6A21\u5F0F Observer")],-1),b=n("p",null,[s("Observers"),n("br"),s(" Observable"),n("br")],-1),h=n("hr",null,null,-1),y=n("p",null,"\u6574\u7406\u4E0D\u6613\uFF0C\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002",-1);function w(g,x){const a=t("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[n("a",d,[r,o(a)])]),k,v,m,b,h,y])}const _=e(i,[["render",w],["__file","DesignPattern.html.vue"]]);export{_ as default};
