import{_ as d,Q as l,z as r,A as c,a6 as t,X as n,C as a,T as s}from"./framework.9f8afd9b.js";const o="/images/2020-02-27-15-05-13.png",u="/images/2020-02-27-15-07-12.png",p="/images/2020-02-27-15-08-09.png",m="/images/2020-02-27-15-09-15.png",v="/images/2020-02-27-15-10-33.png",h="/images/2020-02-27-15-12-11.png",b="/images/2020-02-27-15-12-30.png",g={},k={href:"https://shane-1.github.io",target:"_blank",rel:"noopener noreferrer"},x={href:"https://shane-1.github.io",target:"_blank",rel:"noopener noreferrer"};function y(B,e){const i=l("ExternalLinkIcon");return r(),c("div",null,[e[3]||(e[3]=t(`<h1 id="markdown手册" tabindex="-1"><a class="header-anchor" href="#markdown手册" aria-hidden="true">#</a> Markdown手册</h1><hr><h2 id="markdown是什么" tabindex="-1"><a class="header-anchor" href="#markdown是什么" aria-hidden="true">#</a> Markdown是什么</h2><p>程序员必备 Markdown是一种轻量级的「标记语言」</p><p>Markdown可以使用普通文本编辑器编写，通过简单的标记语法，它可以使普通文本内容具有一定的格式。它允许人们使用易读易写的纯文本格式编写文档，然后转换成格式丰富的HTML页面，Markdown文件的后缀名便是“.md”</p><h2 id="为什么选择-markdown" tabindex="-1"><a class="header-anchor" href="#为什么选择-markdown" aria-hidden="true">#</a> 为什么选择 Markdown</h2><p>选择 Markdown 理由只有一个：方便，节省时间</p><ul><li>语法简洁，没有任何编程基础的人10分钟语言即可上手</li><li>注重内容，专注于内容编写，不再因为格式排版而苦恼</li><li>易阅读性，即便没有经过转换，大部分内容仍可阅读</li><li>易编辑性，任何文本编辑器都能编辑 Markdown 文件</li><li>跨平台性，由于是纯文本文件，不存在格式兼容的问题</li><li>导出方便，支持导出为 HTML，PDF等常见格式</li></ul><h2 id="如何使用-markdown" tabindex="-1"><a class="header-anchor" href="#如何使用-markdown" aria-hidden="true">#</a> 如何使用 Markdown</h2><h3 id="_1-标题" tabindex="-1"><a class="header-anchor" href="#_1-标题" aria-hidden="true">#</a> 1.标题</h3><hr><p>Markdown支持6种级别的标题，对应html标签 h1 ~ h6</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> h1 </span>
<span class="token title important"><span class="token punctuation">##</span> h2</span>
<span class="token title important"><span class="token punctuation">###</span> h3</span>
<span class="token title important"><span class="token punctuation">####</span> h4</span>
<span class="token title important"><span class="token punctuation">#####</span> h5</span>
<span class="token title important"><span class="token punctuation">######</span> h6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-段落及区块引用" tabindex="-1"><a class="header-anchor" href="#_2-段落及区块引用" aria-hidden="true">#</a> 2.段落及区块引用</h3><hr><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>Markdown 引用：
<span class="token blockquote punctuation">&gt;</span> 引用内容
注：输入多个&gt;可以实现嵌套

<span class="token title important">Markdown 分割线：
<span class="token punctuation">---</span></span>
<span class="token hr punctuation">***</span>

Markdown 换行：
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>

Markdown 段首缩进：
<span class="token entity named-entity" title=" ">&amp;ensp;</span> or <span class="token entity" title=" ">&amp;#8194;</span> 表示一个半角的空格
<span class="token entity named-entity" title=" ">&amp;emsp;</span> or <span class="token entity" title=" ">&amp;#8195;</span>  表示一个全角的空格
<span class="token entity named-entity" title=" ">&amp;emsp;</span> or <span class="token entity named-entity" title=" ">&amp;emsp;</span> 两个全角的空格（用的比较多）
<span class="token entity named-entity" title=" ">&amp;nbsp;</span> or <span class="token entity" title=" ">&amp;#160;</span> 不断行的空白格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-字体样式" tabindex="-1"><a class="header-anchor" href="#_3-字体样式" aria-hidden="true">#</a> 3.字体样式</h3><hr><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:center;">源代码</th><th style="text-align:center;">效果</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;"><code>~~删除线~~</code></td><td style="text-align:center;"><s>删除线</s></td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;"><code>*斜体字*</code></td><td style="text-align:center;"><em>斜体字</em></td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;"><code>**粗体**</code></td><td style="text-align:center;"><strong>粗体</strong></td></tr><tr><td style="text-align:center;">4</td><td style="text-align:center;"><code>***粗斜体***</code></td><td style="text-align:center;"><em><strong>粗斜体</strong></em></td></tr><tr><td style="text-align:center;">5</td><td style="text-align:center;"><code>上标：O&lt;sup&gt;2</code></td><td style="text-align:center;">&lt;sup&gt;2</td></tr><tr><td style="text-align:center;">6</td><td style="text-align:center;"><code>下标：H&lt;sub&gt;2&lt;/sub&gt;O</code></td><td style="text-align:center;">H<sub>2</sub>O</td></tr></tbody></table><hr><h3 id="_4-图片和链接" tabindex="-1"><a class="header-anchor" href="#_4-图片和链接" aria-hidden="true">#</a> 4.图片和链接</h3><hr><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url">[<span class="token content">普通链接</span>](<span class="token url">https://shane-1.github.io</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23)),n("p",null,[n("a",k,[e[0]||(e[0]=a("普通链接")),s(i)])]),e[4]||(e[4]=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`直接链接：<https://shane-1.github.io>
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1)),n("p",null,[e[2]||(e[2]=a("直接链接：")),n("a",x,[e[1]||(e[1]=a("https://shane-1.github.io")),s(i)])]),e[5]||(e[5]=t(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>邮箱地址自动链接 qq1217232433@outlook.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>邮箱地址自动链接 qq1217234233@outlook.com</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">图片链接，可以添加备注</span>](<span class="token url">https://shane-1.github.io/rick.png</span> <span class="token string">&quot;备注&quot;</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://shane-1.github.io/rick.png" alt="图片链接，可以添加备注" title="rick"></p><h6 id="注-可以用非url的本地路径" tabindex="-1"><a class="header-anchor" href="#注-可以用非url的本地路径" aria-hidden="true">#</a> 注：可以用非url的本地路径</h6><hr><h3 id="_5-代码高亮" tabindex="-1"><a class="header-anchor" href="#_5-代码高亮" aria-hidden="true">#</a> 5.代码高亮</h3><hr><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>行内高亮 ： <span class="token code-snippet code keyword">\`npm install marked \`</span>
(部分支持==高亮==)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>行内高亮 ： <code>npm install marked</code></p><p>实现代码块适配合适的高亮方法，可以用 \`\`\` 包裹一段代码，并指定一种语言。</p><pre><code>\`\`\`javascript
    function test() {
        console.log(&quot;后面跟语言有一定效果&quot;);
    }
\`\`\`
</code></pre><hr><h6 id="支持的语言-bash-basic-cmake-css-delphi-django-dockerfile-go-http-ini-java-javascript-json-leaf-less-matlab-perl-php-python-ruby-rust-scss-sql-stylus-swift-typescript-vbscript-xml-yaml等" tabindex="-1"><a class="header-anchor" href="#支持的语言-bash-basic-cmake-css-delphi-django-dockerfile-go-http-ini-java-javascript-json-leaf-less-matlab-perl-php-python-ruby-rust-scss-sql-stylus-swift-typescript-vbscript-xml-yaml等" aria-hidden="true">#</a> 支持的语言： bash, basic,cmake, css, delphi, django, dockerfile, go, http,,ini, java, javascript, json, leaf, less, matlab, perl, php, python, ruby, rust, scss, sql, stylus, swift, typescript, vbscript, xml, yaml等</h6><hr><h3 id="_6-表格" tabindex="-1"><a class="header-anchor" href="#_6-表格" aria-hidden="true">#</a> 6.表格</h3><hr><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>|:在左靠左 |:在两端居中|:在右靠右|
|:--|:--:|--:|
| A | A | A |
| B | B | B |
| C | C | C |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">:在左靠左</th><th style="text-align:center;">:在两端居中</th><th style="text-align:right;">:在右靠右</th></tr></thead><tbody><tr><td style="text-align:left;">A</td><td style="text-align:center;">A</td><td style="text-align:right;">A</td></tr><tr><td style="text-align:left;">B</td><td style="text-align:center;">B</td><td style="text-align:right;">B</td></tr><tr><td style="text-align:left;">C</td><td style="text-align:center;">C</td><td style="text-align:right;">C</td></tr></tbody></table><h5 id="在左靠左-在两端居中-在右靠右" tabindex="-1"><a class="header-anchor" href="#在左靠左-在两端居中-在右靠右" aria-hidden="true">#</a> :在左靠左 :在两端居中 :在右靠右</h5><hr><h3 id="_7-无序列表" tabindex="-1"><a class="header-anchor" href="#_7-无序列表" aria-hidden="true">#</a> 7.无序列表</h3><hr><p>*/-/+/&gt;/#通用，后面跟空格即可，另外再输入1个TAB或2 ~ 4个空格可实现层级关系</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code> <span class="token list punctuation">+</span> 一级列表
      <span class="token list punctuation">+</span> 二级列表
          <span class="token list punctuation">+</span> 三级列表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>一级列表 <ul><li>二级列表 <ul><li>三级列表</li></ul></li></ul></li></ul><hr><h3 id="_8-有序列表" tabindex="-1"><a class="header-anchor" href="#_8-有序列表" aria-hidden="true">#</a> 8.有序列表</h3><hr><p>注意数字后面有空格，序号递增排列，即便输错也会自动纠正</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> 第一行
<span class="token list punctuation">2.</span> 第二行
<span class="token list punctuation">5.</span> 第三行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>第一行</li><li>第二行</li><li>第三行</li></ol><hr><h3 id="_9-转义字符" tabindex="-1"><a class="header-anchor" href="#_9-转义字符" aria-hidden="true">#</a> 9.转义字符</h3><hr><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>\\\`
\\&gt;
\\<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\` <br> &gt;<br> &lt;br&gt;</p></blockquote><hr><h3 id="_10-脚注" tabindex="-1"><a class="header-anchor" href="#_10-脚注" aria-hidden="true">#</a> 10.脚注</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>生成一个脚注[^footnote].
  [^footnote]: 这里是 **脚注** 的 *内容*.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="注-某些版本不支持" tabindex="-1"><a class="header-anchor" href="#注-某些版本不支持" aria-hidden="true">#</a> 注：某些版本不支持</h5><hr><h3 id="_11-特殊符号-文本通用-非md独有" tabindex="-1"><a class="header-anchor" href="#_11-特殊符号-文本通用-非md独有" aria-hidden="true">#</a> 11.特殊符号 [文本通用，非MD独有]</h3><blockquote><p>常用排版 : ▌▍◆★☆☁➤➜❤➊➋➌<br> TodoList : ✅☑✓✔√☓☒✘ㄨ✕✖✗❌❎<br> emoji : 🌹🍀🌙🍂🍃🌷💎🔥⭐🍄🏆<br></p></blockquote><hr><h3 id="_12-markdown编辑器" tabindex="-1"><a class="header-anchor" href="#_12-markdown编辑器" aria-hidden="true">#</a> 12.Markdown编辑器</h3><hr><ul><li>在线版:</li></ul><p>印象笔记 马克飞象 作业部落</p><ul><li>浏览器插件：</li></ul><p>马克飞象 Markdown-here</p><ul><li>应用：</li></ul><p>Mac：MacDown<br> Win10：Acrylic Markdown、MarkdownPad、MarkPad、Vscode</p><h2 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图" aria-hidden="true">#</a> 流程图</h2><blockquote><p>如何在Markdown中画流程图呢？当然是用mermaid了，mermaid支持三种图形的绘制, 分别是流程图, 时序图和甘特图。<br></p><blockquote><p>流程图方向有下面几个值</p></blockquote></blockquote><hr><blockquote><p>TB 从上到下<br> BT 从下到上<br> RL 从右到左<br> LR 从左到右<br> TD 同TB</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mermaid
graph TD
   A --&gt; B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR
   A --&gt; B 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt=""></p><ul><li>基本图形</li></ul><hr><blockquote><p>id + [文字描述]矩形<br> id + (文字描述)圆角矩形<br> id + &gt;文字描述]不对称的矩形<br> id + {文字描述}菱形<br> id + ((文字描述))圆形</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mermaid
graph TD
    id[带文本的矩形]
    id4(带文本的圆角矩形)
    id3&gt;带文本的不对称的矩形]
    id1{带文本的菱形}
    id2((带文本的圆形))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt=""></p><ul><li>节点之间的连接</li></ul><hr><p>A --&gt; B A带箭头指向B<br> A --- B A不带箭头指向B<br> A -.- B A用虚线指向B<br> A -.-&gt; B A用带箭头的虚线指向B<br> A ==&gt; B A用加粗的箭头指向B<br> A -- 描述 --- B A不带箭头指向B并在中间加上文字描述<br> A -- 描述 --&gt; B A带箭头指向B并在中间加上文字描述<br> A -. 描述 .-&gt; B A用带箭头的虚线指向B并在中间加上文字描述<br> A == 描述 ==&gt; B A用加粗的箭头指向B并在中间加上文字描述<br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mermaid
graph LR
    A[A] --&gt; B[B] 
    A1[A] --- B1[B] 
    A4[A] -.- B4[B] 
    A5[A] -.-&gt; B5[B] 
    A7[A] ==&gt; B7[B] 
    A2[A] -- 描述 --- B2[B] 
    A3[A] -- 描述 --&gt; B3[B] 
    A6[A] -. 描述 .-&gt; B6[B] 
    A8[A] == 描述 ==&gt; B8[B] 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+`" alt=""></p><ul><li>子流程图</li></ul><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例
mermaid
graph TB
    c1--&gt;a2
    subgraph one
    a1--&gt;a2
    end
    subgraph two
    b1--&gt;b2
    end
    subgraph three
    c1--&gt;c2
    end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt=""></p><ul><li>自定义样式</li></ul><hr><p>语法：style id 具体样式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mermaid
graph LR
    id1(Start)--&gt;id2(Stop)
    style id1 fill:#f9f,stroke:#333,stroke-width:4px,fill-opacity:0.5
    style id2 fill:#ccf,stroke:#f66,stroke-width:2px,stroke-dasharray: 10,5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+`" alt=""></p><ul><li>demo</li></ul><hr><p>绘制一个流程图,找出 A、 B、 C 三个数中最大的一个数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mermaid
graph LR
    start[开始] --&gt; input[输入A,B,C]
    input --&gt; conditionA{A是否大于B}
    conditionA -- YES --&gt; conditionC{A是否大于C}
    conditionA -- NO --&gt; conditionB{B是否大于C}
    conditionC -- YES --&gt; printA[输出A]
    conditionC -- NO --&gt; printC[输出C]
    conditionB -- YES --&gt; printB[输出B]
    conditionB -- NO --&gt; printC[输出C]
    printA --&gt; stop[结束]
    printC --&gt; stop
    printB --&gt; stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="`+b+'" alt=""></p></blockquote><hr><p>整理不易，转载请注明出处。</p>',88))])}const A=d(g,[["render",y],["__file","Markdown.html.vue"]]);export{A as default};
