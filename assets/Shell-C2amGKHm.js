import{a as e,c as t,i as n,t as r}from"./app-CzIm5kWM.js";var i=JSON.parse(`{"path":"/Note/Shell.html","title":"Shell 脚本传参方法总结","lang":"en-US","frontmatter":{},"git":{"updatedTime":1793244684000,"contributors":[{"name":"Shane","username":"Shane","email":"shane-liang@outlook.com","commits":1,"url":"https://github.com/Shane"}],"changelog":[{"hash":"6e610b8aa9f8861258e1c9ed786c424815772586","time":1793244684000,"email":"shane-liang@outlook.com","author":"Shane","message":"fix(nav): 隐藏 GitHub 外链箭头，统一直接项与下拉项图标垂直对齐"}]},"filePathRelative":"Note/Shell.md"}`),a={name:`Shell.md`};function o(r,i,a,o,s,c){return t(),n(`div`,null,[...i[0]||=[e(`<h1 id="shell-脚本传参方法总结" tabindex="-1"><a class="header-anchor" href="#shell-脚本传参方法总结"><span>Shell 脚本传参方法总结</span></a></h1><blockquote><p>平时会遇到很多脚本都有参数选项，类似：</p></blockquote><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift"><pre><code class="language-swift"><span class="line"><span class="token operator">./</span>test<span class="token punctuation">.</span>sh <span class="token operator">-</span>f config<span class="token punctuation">.</span>conf <span class="token operator">-</span>v <span class="token operator">--</span><span class="token keyword">prefix</span><span class="token operator">=/</span>home</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这种脚本怎么写呢？</p><hr><h2 id="shell-特殊参数解释" tabindex="-1"><a class="header-anchor" href="#shell-特殊参数解释"><span>Shell 特殊参数解释</span></a></h2><p>首先来看几个特殊变量：$0, $#, $*, $@, $?, $$, $_</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$0</span>    <span class="token comment"># 当前脚本的文件名（间接运行时还包括绝对路径）。</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$n</span>    <span class="token comment"># 传递给脚本或函数的参数。n 是一个数字，表示第几个参数。例如，第一个参数是 $1 。</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$#</span>    <span class="token comment"># 传递给脚本或函数的参数个数。</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$*</span>    <span class="token comment"># 传递给脚本或函数的所有参数。</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$@</span>    <span class="token comment"># 传递给脚本或函数的所有参数。被双引号 (&quot; &quot;) 包含时，与 $* 不同，下面将会讲到。</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$?</span>    <span class="token comment"># 上个命令的退出状态，或函数的返回值。</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$$</span>    <span class="token comment"># 当前 Shell 进程 ID。对于 Shell 脚本，就是这些脚本所在的进程 ID。</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$_</span>    <span class="token comment"># 上一个命令的最后一个参数</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$!</span>    <span class="token comment"># 后台运行的最后一个进程的 ID 号</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在保存为一个脚本，然后加上几个参数运行：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">$ ./test.sh <span class="token builtin class-name">test</span> test1 test2 test3 test4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>返回如下：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">./test.sh                      <span class="token comment"># $0</span></span>
<span class="line">                               <span class="token comment"># $n</span></span>
<span class="line"><span class="token number">5</span>                              <span class="token comment"># $#</span></span>
<span class="line"><span class="token builtin class-name">test</span> test1 test2 test3 test4   <span class="token comment"># $*</span></span>
<span class="line"><span class="token builtin class-name">test</span> test1 test2 test3 test4   <span class="token comment"># $@</span></span>
<span class="line"><span class="token number">0</span>                              <span class="token comment"># $?</span></span>
<span class="line"><span class="token number">12305</span>                          <span class="token comment"># $$</span></span>
<span class="line"><span class="token number">12305</span>                          <span class="token comment"># $_</span></span>
<span class="line">                               <span class="token comment"># $!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>$* 和 $@ 都表示传递给函数或脚本的所有参数，不被双引号 (&quot;&quot;) 包含时，都以&quot;$1&quot;&quot;$2&quot; … &quot;$n&quot; 的形式输出所有参数。</p></blockquote><blockquote><p>但是当它们被双引号 (&quot;&quot;) 包含时，&quot;$*&quot;会将所有的参数作为一个整体，以&quot;$1 $2 … $n&quot;的形式输出所有参数；&quot;$@&quot;会将各个参数分开，以&quot;$1&quot;&quot;$2&quot; … &quot;$n&quot; 的形式输出所有参数。</p></blockquote><p>例如：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$*</span>=&quot;</span> <span class="token variable">$*</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>\\<span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span>=&quot;</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$@</span>=&quot;</span> <span class="token variable">$@</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>\\<span class="token variable">$@</span><span class="token entity" title="\\&quot;">\\&quot;</span>=&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;print each param from \\<span class="token variable">$*</span>&quot;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> <span class="token variable">$*</span></span>
<span class="line"><span class="token keyword">do</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span></span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;print each param from \\<span class="token variable">$@</span>&quot;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> <span class="token variable">$@</span></span>
<span class="line"><span class="token keyword">do</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span></span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;从 <span class="token entity" title="\\&quot;">\\&quot;</span>\\<span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span> 获取并打印每一个参数&quot;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span></span>
<span class="line"><span class="token keyword">do</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span></span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;从 <span class="token entity" title="\\&quot;">\\&quot;</span>\\<span class="token variable">$@</span><span class="token entity" title="\\&quot;">\\&quot;</span> 获取并打印每一个参数&quot;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span></span>
<span class="line"><span class="token keyword">do</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span></span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token variable">$*</span><span class="token operator">=</span> <span class="token builtin class-name">test</span> test1 test2</span>
<span class="line"><span class="token string">&quot;<span class="token variable">$*</span>&quot;</span><span class="token operator">=</span> <span class="token builtin class-name">test</span> test1 test2</span>
<span class="line"><span class="token variable">$@</span><span class="token operator">=</span> <span class="token builtin class-name">test</span> test1 test2</span>
<span class="line"><span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token operator">=</span> <span class="token builtin class-name">test</span> test1 test2</span>
<span class="line">print each param from <span class="token variable">$*</span></span>
<span class="line"><span class="token builtin class-name">test</span></span>
<span class="line">test1</span>
<span class="line">test2</span>
<span class="line">print each param from <span class="token variable">$@</span></span>
<span class="line"><span class="token builtin class-name">test</span></span>
<span class="line">test1</span>
<span class="line">test2</span>
<span class="line">从 <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span> 获取并打印每一个参数</span>
<span class="line"><span class="token builtin class-name">test</span> test1 test2</span>
<span class="line">从 <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span> 获取并打印每一个参数</span>
<span class="line"><span class="token builtin class-name">test</span></span>
<span class="line">test1</span>
<span class="line">test2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-手工处理参数" tabindex="-1"><a class="header-anchor" href="#_1-手工处理参数"><span>1. 手工处理参数</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>  </span>
<span class="line"><span class="token keyword">do</span>  </span>
<span class="line">  <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>   </span>
<span class="line">    -a<span class="token punctuation">)</span>  </span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;发现 -a 选项&quot;</span>  </span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span>  </span>
<span class="line">    -b<span class="token punctuation">)</span>  </span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;发现 -b 选项&quot;</span>  </span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;-b 选项的参数值是：<span class="token variable">$2</span>&quot;</span>   </span>
<span class="line">        <span class="token builtin class-name">shift</span>  </span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span>  </span>
<span class="line">    -c<span class="token punctuation">)</span>  </span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;发现 -c 选项&quot;</span>  </span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;-c 选项的参数值是：<span class="token variable">$2</span>&quot;</span>  </span>
<span class="line">        <span class="token builtin class-name">shift</span>  </span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span>  </span>
<span class="line">    -d<span class="token punctuation">)</span>  </span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;发现 -d 选项&quot;</span>  </span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span>  </span>
<span class="line">    *<span class="token punctuation">)</span>  </span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> is not an option&quot;</span>  </span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span>  </span>
<span class="line">  <span class="token keyword">esac</span>  </span>
<span class="line">  <span class="token builtin class-name">shift</span>  </span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行：</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift"><pre><code class="language-swift"><span class="line"><span class="token operator">./</span>test<span class="token punctuation">.</span>sh <span class="token operator">-</span>a <span class="token operator">-</span>b t2 <span class="token operator">-</span>c t3 <span class="token operator">-</span>d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>返回：</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift"><pre><code class="language-swift"><span class="line">发现 <span class="token operator">-</span>a 选项</span>
<span class="line">发现 <span class="token operator">-</span>b 选项</span>
<span class="line"><span class="token operator">-</span>b 选项的参数值是：t2</span>
<span class="line">发现 <span class="token operator">-</span>c 选项</span>
<span class="line"><span class="token operator">-</span>c 选项的参数值是：t3</span>
<span class="line">发现 <span class="token operator">-</span>d 选项</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-getopt-处理参数" tabindex="-1"><a class="header-anchor" href="#_2-getopt-处理参数"><span>2. getopt 处理参数</span></a></h2><p>下面 <code>getopt ab:c:d &quot;$@&quot;</code> 中的 abcd 分别代表四个选项，后面带有冒号的表示选项需要参数值。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token assign-left variable">GETOPTOUT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>getopt ab:c:d <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token variable">\`</span></span>  </span>
<span class="line">    <span class="token builtin class-name">set</span> -- <span class="token variable">$GETOPTOUT</span>   </span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>   </span>
<span class="line">    <span class="token keyword">do</span>  </span>
<span class="line">    <span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>   </span>
<span class="line">        -a<span class="token punctuation">)</span>  </span>
<span class="line">            <span class="token builtin class-name">echo</span> <span class="token string">&quot;发现 -a 选项&quot;</span></span>
<span class="line">            <span class="token punctuation">;</span><span class="token punctuation">;</span>  </span>
<span class="line">        -b<span class="token punctuation">)</span>  </span>
<span class="line">            <span class="token builtin class-name">echo</span> <span class="token string">&quot;发现 -b 选项&quot;</span></span>
<span class="line">            <span class="token builtin class-name">echo</span> <span class="token string">&quot;-b 选项的参数值是：<span class="token variable">$2</span>&quot;</span></span>
<span class="line">            <span class="token builtin class-name">shift</span>  </span>
<span class="line">            <span class="token punctuation">;</span><span class="token punctuation">;</span>  </span>
<span class="line">        -c<span class="token punctuation">)</span>  </span>
<span class="line">            <span class="token builtin class-name">echo</span> <span class="token string">&quot;发现 -c 选项&quot;</span></span>
<span class="line">            <span class="token builtin class-name">echo</span> <span class="token string">&quot;-c 选项的参数值是：<span class="token variable">$2</span>&quot;</span></span>
<span class="line">            <span class="token builtin class-name">shift</span>  </span>
<span class="line">            <span class="token punctuation">;</span><span class="token punctuation">;</span>  </span>
<span class="line">        -d<span class="token punctuation">)</span>  </span>
<span class="line">            <span class="token builtin class-name">echo</span> <span class="token string">&quot;发现 -d 选项&quot;</span></span>
<span class="line">            <span class="token punctuation">;</span><span class="token punctuation">;</span>  </span>
<span class="line">        --<span class="token punctuation">)</span>  </span>
<span class="line">            <span class="token builtin class-name">shift</span>  </span>
<span class="line">            <span class="token builtin class-name">break</span>  </span>
<span class="line">            <span class="token punctuation">;</span><span class="token punctuation">;</span>  </span>
<span class="line">         *<span class="token punctuation">)</span>  </span>
<span class="line">             <span class="token builtin class-name">echo</span> <span class="token string">&quot;未知选项:&quot;</span><span class="token variable">$1</span><span class="token string">&quot;&quot;</span>  </span>
<span class="line">            <span class="token punctuation">;</span><span class="token punctuation">;</span>  </span>
<span class="line">    <span class="token keyword">esac</span>  </span>
<span class="line">    <span class="token builtin class-name">shift</span>  </span>
<span class="line">    <span class="token keyword">done</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行：</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift"><pre><code class="language-swift"><span class="line"><span class="token operator">./</span>proxychains4<span class="token punctuation">.</span>sh <span class="token operator">-</span>a <span class="token operator">-</span>b t2 <span class="token operator">-</span>c t3 <span class="token operator">-</span>d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>返回：</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift"><pre><code class="language-swift"><span class="line">发现 <span class="token operator">-</span>a 选项</span>
<span class="line">发现 <span class="token operator">-</span>b 选项</span>
<span class="line"><span class="token operator">-</span>b 选项的参数值是：t2</span>
<span class="line">发现 <span class="token operator">-</span>c 选项</span>
<span class="line"><span class="token operator">-</span>c 选项的参数值是：t3</span>
<span class="line">发现 <span class="token operator">-</span>d 选项</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个工具很强大，给个完整模板参考一下：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token assign-left variable">ARGV</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">$(</span>getopt <span class="token parameter variable">-o</span> 短选项1<span class="token punctuation">[</span>:<span class="token punctuation">]</span>短选项2<span class="token punctuation">[</span>:<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>:<span class="token punctuation">]</span>短选项n <span class="token parameter variable">-l</span> 长选项1,长选项2,<span class="token punctuation">..</span>.,长选项n -- <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token variable">)</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token builtin class-name">eval</span> <span class="token builtin class-name">set</span> -- <span class="token string">&quot;<span class="token variable">$ARGV</span>&quot;</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token keyword">do</span></span>
<span class="line"><span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span></span>
<span class="line">    -短选项1<span class="token operator">|</span>--长选项1<span class="token punctuation">)</span></span>
<span class="line">        process</span>
<span class="line">        <span class="token builtin class-name">shift</span></span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">    -短选项2<span class="token operator">|</span>--长选项2<span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment"># 获取选项</span></span>
<span class="line">        opt <span class="token operator">=</span> <span class="token variable">$2</span></span>
<span class="line">        process</span>
<span class="line">        <span class="token builtin class-name">shift</span> <span class="token number">2</span></span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token punctuation">..</span>. <span class="token punctuation">..</span>.</span>
<span class="line"></span>
<span class="line">    -短选项3<span class="token operator">|</span>--长选项3<span class="token punctuation">)</span></span>
<span class="line">        process</span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">    --<span class="token punctuation">)</span></span>
<span class="line">        <span class="token builtin class-name">break</span></span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">esac</span></span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>关于 eval 这个命令，用一个小例子解释：</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">10</span></span>
<span class="line"><span class="token assign-left variable">x</span><span class="token operator">=</span>foo</span>
<span class="line"><span class="token assign-left variable">y</span><span class="token operator">=</span><span class="token string">&#39;$&#39;</span><span class="token variable">$x</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$y</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$foo</span></span>
<span class="line"><span class="token builtin class-name">eval</span> <span class="token assign-left variable">y</span><span class="token operator">=</span><span class="token string">&#39;$&#39;</span><span class="token variable">$x</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$y</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token variable">$foo</span></span>
<span class="line"><span class="token number">10</span></span>
<span class="line"><span class="token number">10</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为我一般用这个命令连接构建命令参数，所以你可以简单理解为执行两次（虽然不太对）。通过添加 eval 可以把参数解析后再执行。</p><h2 id="_3-getopts-处理参数" tabindex="-1"><a class="header-anchor" href="#_3-getopts-处理参数"><span>3. getopts 处理参数</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token keyword">while</span> <span class="token builtin class-name">getopts</span> :ab:c:d ARGS  </span>
<span class="line"><span class="token keyword">do</span>  </span>
<span class="line"><span class="token keyword">case</span> <span class="token variable">$ARGS</span> <span class="token keyword">in</span>   </span>
<span class="line">    a<span class="token punctuation">)</span>  </span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;发现 -a 选项&quot;</span>  </span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span>  </span>
<span class="line">    b<span class="token punctuation">)</span>  </span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;发现 -b 选项&quot;</span>  </span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;-b 选项的值是：<span class="token variable">$OPTARG</span>&quot;</span>  </span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span>  </span>
<span class="line">    c<span class="token punctuation">)</span>  </span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;发现 -c 选项&quot;</span>  </span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;-c 选项的值是：<span class="token variable">$OPTARG</span>&quot;</span>  </span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span>  </span>
<span class="line">    d<span class="token punctuation">)</span>  </span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;发现 -d 参数&quot;</span>  </span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span>  </span>
<span class="line">    *<span class="token punctuation">)</span>  </span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;未知选项：<span class="token variable">$ARGS</span>&quot;</span></span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">esac</span></span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方法最方便简单。接下来基于这种方法深入讲解。</p><h2 id="_4-传参意外处理" tabindex="-1"><a class="header-anchor" href="#_4-传参意外处理"><span>4. 传参意外处理</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">      <span class="token string">&quot;?&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;未知选项 <span class="token variable">$OPTARG</span>&quot;</span></span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;没有输入任何选项 <span class="token variable">$OPTARG</span>&quot;</span></span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">      *<span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment"># 发生不能预料的错误时。</span></span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;处理选项时出现未知错误&quot;</span></span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li><a href="https://link.jianshu.com/?t=https://www.ibm.com/developerworks/cn/linux/l-bash-parameters.html" target="_blank" rel="noopener noreferrer">https://www.ibm.com/developerworks/cn/linux/l-bash-parameters.html</a></li><li><a href="https://link.jianshu.com/?t=http://www.361way.com/shell-getopt/4981.html" target="_blank" rel="noopener noreferrer">http://www.361way.com/shell-getopt/4981.html</a></li></ul><hr>`,46)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};