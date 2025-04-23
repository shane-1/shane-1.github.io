import{_ as o,Q as l,z as i,A as c,a6 as p,X as s,C as a,T as t}from"./framework.9f8afd9b.js";const u={},r={href:"https://leetcode.cn/problems/binary-search/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://leetcode.cn/classic/problems/search-insert-position/description/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://leetcode.cn/classic/problems/sqrtx/description/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://leetcode.cn/classic/problems/valid-perfect-square/description/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://leetcode.cn/classic/problems/remove-element/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-array/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://leetcode.cn/problems/move-zeroes/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://leetcode.cn/problems/backspace-string-compare/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://leetcode.cn/problems/squares-of-a-sorted-array/",target:"_blank",rel:"noopener noreferrer"},y={id:"有序数组的平方",tabindex:"-1"},x={href:"https://leetcode.cn/problems/squares-of-a-sorted-array/",target:"_blank",rel:"noopener noreferrer"},q={id:"最小子序列-🧡",tabindex:"-1"},j={href:"https://leetcode.cn/problems/minimum-size-subarray-sum/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.cn/classic/problems/minimum-window-substring/description/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.cn/problems/fruit-into-baskets/",target:"_blank",rel:"noopener noreferrer"},S={id:"螺旋矩阵ii-🧡",tabindex:"-1"},I={href:"https://leetcode.cn/problems/spiral-matrix-ii/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.cn/problems/spiral-matrix/",target:"_blank",rel:"noopener noreferrer"};function L(E,n){const e=l("ExternalLinkIcon");return i(),c("div",null,[n[22]||(n[22]=p('<h1 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h1><blockquote><p>最基础的数据结构之一</p></blockquote><p>需要两点注意的是：</p><ul><li>数组下标都是从0开始的。</li><li>数组内存空间的地址一般是连续的</li></ul><blockquote><p>Java是没有指针的，同时也不对程序员暴露其元素的地址，寻址操作完全交给虚拟机。故Java地址并非连续</p></blockquote><hr><blockquote><p>💚 简单 🧡中等 ❤️困难</p></blockquote><h2 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找" aria-hidden="true">#</a> 二分查找</h2>',8)),s("p",null,[s("a",r,[n[0]||(n[0]=a("704.二分查找 💚")),t(e)])]),n[23]||(n[23]=p(`<h3 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h3><ul><li>有序数组</li></ul><blockquote><p>根本条件，有序的数组应优先考虑二分</p></blockquote><ul><li>无重复元素</li></ul><blockquote><p>如果结果接受不唯一仍可使用</p></blockquote><h3 id="边界条件下的处理" tabindex="-1"><a class="header-anchor" href="#边界条件下的处理" aria-hidden="true">#</a> 边界条件下的处理</h3><p>一般的边界条件处理有以下两种情况：</p><ol><li>左闭右开</li></ol><blockquote><p>大多数框架函数的默认处理方式</p></blockquote><p>代码模板：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
right <span class="token operator">=</span> num<span class="token punctuation">.</span>size <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;</span>  right<span class="token punctuation">)</span><span class="token punctuation">{</span>
    middle <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span>
        right <span class="token operator">=</span> middle <span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span>
        left <span class="token operator">=</span> middle <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>左闭右闭</li></ol><p>代码模板：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
right <span class="token operator">=</span> num<span class="token punctuation">.</span>size <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;=</span>  right<span class="token punctuation">)</span><span class="token punctuation">{</span>
    middle <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span>
        right <span class="token operator">=</span> middle <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span>
        left <span class="token operator">=</span> middle <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="相关题目推荐" tabindex="-1"><a class="header-anchor" href="#相关题目推荐" aria-hidden="true">#</a> 相关题目推荐</h3>`,15)),s("p",null,[s("a",d,[n[1]||(n[1]=a("34.在排序数组中查找元素的第一个和最后一个位置 🧡")),t(e)])]),s("p",null,[s("a",k,[n[2]||(n[2]=a("35.搜索插入位置 💚")),t(e)])]),s("p",null,[s("a",v,[n[3]||(n[3]=a("69.x的平方根 💚")),t(e)])]),s("p",null,[s("a",m,[n[4]||(n[4]=a("367.有效的完全平方数 💚")),t(e)])]),n[24]||(n[24]=s("hr",null,null,-1)),n[25]||(n[25]=s("h2",{id:"移除元素",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#移除元素","aria-hidden":"true"},"#"),a(" 移除元素")],-1)),s("p",null,[s("a",b,[n[5]||(n[5]=a("27.移除元素💚")),t(e)])]),n[26]||(n[26]=p(`<h3 id="要点" tabindex="-1"><a class="header-anchor" href="#要点" aria-hidden="true">#</a> 要点</h3><p>数组的元素在内存地址中是连续的，不能单独删除数组中的某个元素，只能覆盖。</p><h3 id="暴力方案" tabindex="-1"><a class="header-anchor" href="#暴力方案" aria-hidden="true">#</a> 暴力方案</h3><p>每遇到一个相等值就批量从后向前移动元素</p><blockquote><p>时间复杂度：O(n^2)</p></blockquote><blockquote><p>空间复杂度：O(1)</p></blockquote><p>代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">removeElement</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> size <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 发现需要移除的元素，就将数组集体向前移动一位</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    nums<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                i<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 因为下标i以后的数值都向前移动了一位，所以i也向前移动一位</span>
                size<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 此时数组的大小-1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> size<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优化方案" tabindex="-1"><a class="header-anchor" href="#优化方案" aria-hidden="true">#</a> 优化方案</h3><p>使用指针，每次用不等于当前值的元素覆盖指针值（简称-快慢指针）</p><blockquote><p>时间复杂度：O(n)</p></blockquote><blockquote><p>空间复杂度：O(1)</p></blockquote><p>代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">removeElement</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
                nums<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>  
        <span class="token punctuation">}</span>
        
        <span class="token keyword">return</span> index<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="相关题目推荐-1" tabindex="-1"><a class="header-anchor" href="#相关题目推荐-1" aria-hidden="true">#</a> 相关题目推荐</h3>`,15)),s("p",null,[s("a",h,[n[6]||(n[6]=a("26.删除排序数组中的重复项 💚")),t(e)])]),s("p",null,[s("a",w,[n[7]||(n[7]=a("283.移动零 💚")),t(e)])]),s("p",null,[s("a",f,[n[8]||(n[8]=a("844.比较含退格的字符串 💚")),t(e)])]),n[27]||(n[27]=s("blockquote",null,[s("p",null,"可以使用堆栈解题或者使用双指针法，使用双指针需要从尾到首且注意记录退格数")],-1)),s("p",null,[s("a",g,[n[9]||(n[9]=a("977.有序数组的平方 💚")),t(e)])]),n[28]||(n[28]=s("h2",{id:"双指针",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#双指针","aria-hidden":"true"},"#"),a(" 双指针")],-1)),n[29]||(n[29]=s("p",null,"使用两个首尾指针或者两个快慢指针解决数组问题的方法",-1)),s("h3",y,[n[11]||(n[11]=s("a",{class:"header-anchor",href:"#有序数组的平方","aria-hidden":"true"},"#",-1)),n[12]||(n[12]=a()),s("a",x,[n[10]||(n[10]=a("有序数组的平方")),t(e)])]),n[30]||(n[30]=p(`<ol><li>使用两个指针分别指向当前数组首位</li></ol><p>因为当前的平方最大值必然出现在首位</p><blockquote><p>如果负值平方最大比如必然出现在首部，正值平方最大比必然在尾部</p></blockquote><ol start="2"><li>使用一个新数组来存放当前平方和</li></ol><p>不在原地处理，主要是因为当前结果需要放置在尾部。 当正值最大时不受影响；但当负值最大时吗，需要把当前负值平方和放于尾数， 次数需要数组依次前移一位。这种操作带来O(n)的时间复杂度是不可接受的。</p><blockquote><p>当然这是有人已经想到把当前正值调整到首位（比如我），但是这样不能保证首位的平方一定大于其后负值的平方和，需要再添加逻辑处理。如果采用调整位序，在最差情况即后面均是平方大于其的负值，该操作仍会是O(n)的时间复杂度且代码逻辑过于复杂</p></blockquote><p>简而言之，我认为这里的最优方案就是空间换时间，这样代码可读性也最高。</p><ol start="3"><li>按照当前指针指向元素平方和较大值依次处理数组</li></ol><h3 id="参考代码" tabindex="-1"><a class="header-anchor" href="#参考代码" aria-hidden="true">#</a> 参考代码</h3><blockquote><p>时间复杂度：O(n)</p></blockquote><blockquote><p>空间复杂度：O(n)</p></blockquote><p>代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">sortedSquares</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> end <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> end<span class="token punctuation">;</span>

        
        <span class="token keyword">while</span><span class="token punctuation">(</span>start <span class="token operator">&lt;=</span> end<span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token comment">//use Math.pow result cant be int</span>
            <span class="token keyword">int</span> startPow <span class="token operator">=</span> nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> endPow <span class="token operator">=</span> nums<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
            
            <span class="token keyword">if</span><span class="token punctuation">(</span>startPow <span class="token operator">&gt;</span> endPow<span class="token punctuation">)</span><span class="token punctuation">{</span>
                result<span class="token punctuation">[</span>index<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> startPow<span class="token punctuation">;</span>
                start<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                result<span class="token punctuation">[</span>index<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> endPow<span class="token punctuation">;</span>
                end<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="滑动窗口" tabindex="-1"><a class="header-anchor" href="#滑动窗口" aria-hidden="true">#</a> 滑动窗口</h2><p>不断的调节子序列的起始位置和终止位置，从而得出我们要想的结果。</p><p><strong>其实滑动窗口可以看成双指针的延伸</strong></p>`,16)),s("h3",q,[n[14]||(n[14]=s("a",{class:"header-anchor",href:"#最小子序列-🧡","aria-hidden":"true"},"#",-1)),n[15]||(n[15]=a()),s("a",j,[n[13]||(n[13]=a("最小子序列 🧡")),t(e)])]),n[31]||(n[31]=p(`<blockquote><p>暴力解法是使用双层遍历，而滑动窗口基于此延伸</p></blockquote><ol><li>由于序列顺序一定不变，可以用一个可变指针作为左侧</li></ol><blockquote><p>while(当前结果 &gt; target){ 添加解; 当前结果 -= nums[左指针++]; }</p></blockquote><ol start="2"><li><p>然后将右侧作为遍历变量不断遍历，就可以获得可用解</p></li><li><p>由于存在多个解，需要最小的结果。故需要一个result存放当前长度，且不断和之后的结果比较取最短。</p></li></ol><blockquote><p>int result = Integer.MAX_VALUE;</p></blockquote><blockquote><p>result = Math.min(result, end-start+1);</p></blockquote><h3 id="参考代码-1" tabindex="-1"><a class="header-anchor" href="#参考代码-1" aria-hidden="true">#</a> 参考代码</h3><blockquote><p>时间复杂度：O(n)</p></blockquote><blockquote><p>空间复杂度：O(1)</p></blockquote><p>代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">minSubArrayLen</span><span class="token punctuation">(</span><span class="token keyword">int</span> target<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
           <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
           
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span>
           <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        
        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span>
        
        
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> end <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> end <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> end<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            
            count <span class="token operator">+=</span> nums<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
            
            <span class="token comment">//left side  </span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>count <span class="token operator">&gt;=</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
                result <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> end<span class="token operator">-</span>start<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                count <span class="token operator">-=</span> nums<span class="token punctuation">[</span>start<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
        <span class="token punctuation">}</span>
        
        <span class="token keyword">return</span> result <span class="token operator">==</span>  <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="相关题目推荐-2" tabindex="-1"><a class="header-anchor" href="#相关题目推荐-2" aria-hidden="true">#</a> 相关题目推荐</h3>`,12)),s("p",null,[s("a",A,[n[16]||(n[16]=a("76.最小覆盖子串 ❤️")),t(e)])]),n[32]||(n[32]=p(`<h3 id="参考代码-2" tabindex="-1"><a class="header-anchor" href="#参考代码-2" aria-hidden="true">#</a> 参考代码</h3><blockquote><p>时间复杂度：O(n)</p></blockquote><blockquote><p>空间复杂度：O(n)</p></blockquote><p>代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java
class Solution {
    public String minWindow(String s, String t) {
         
         int start = 0;
         int rest = t.length();
         
         //字母记录
         int[] need = new int[123];

         //结果储存，当前可以只储存起始位置算偏移
         int[] result = new int[2];
         int length = Integer.MAX_VALUE;
         
         int index = 0;
         
         //标记目标字符
         for(char each : t.toCharArray()){
             need[each]++;
         }
         
         //开始匹配
         for(int end = 0; end &lt; s.length(); end++){
             
             char now = s.charAt(end);
             
             //如果当前串必需，则所需字符总数减一
             if(need[now] &gt; 0){
                 rest--;
             }
             
             need[now]--;        
             
             //所需字符为，即匹配成功
             if(rest== 0){
                 
             //当左边界字符不是所需字符则不断右移直到必需字符(因为非必需字符已经被need[now]--减为负数)
              while(start&lt;end&amp;&amp;need[s.charAt(start)] &lt; 0){
                    need[s.charAt(start)]++; 
                    start++;
                       
              }

              //当前结果比记录结果更短则更新
              if(length &gt; end-start+1){
                    result[1] = end;
                    result[0] = start;
                    length = end - start+1;
              }
                //继续移动左边界一位，同时将必需字符+1
                 need[s.charAt(start)]++; 
                 start++; 
                 rest++;   
                                
             }
             }
             
             return length == Integer.MAX_VALUE ? &quot;&quot;:s.substring(result[0],result[1]+1);

         }
         

    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)),s("p",null,[s("a",O,[n[17]||(n[17]=a("904.水果成篮 🧡")),t(e)])]),s("h2",S,[n[19]||(n[19]=s("a",{class:"header-anchor",href:"#螺旋矩阵ii-🧡","aria-hidden":"true"},"#",-1)),n[20]||(n[20]=a()),s("a",I,[n[18]||(n[18]=a("螺旋矩阵II 🧡")),t(e)])]),n[33]||(n[33]=p(`<p>可以直接按照要求逻辑处理字符串，但是特别注意：</p><ol><li>是否按照统一方式处理边界值？</li><li>是否正确对应行或者列？</li><li>是否在遍历完一条边后缩小边界</li><li>是否正确使用退出条件</li></ol><blockquote><p>解题</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">generateMatrix</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> top <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> right <span class="token operator">=</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> bottom <span class="token operator">=</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        
        <span class="token comment">//只有到达中心点后退出循环</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right <span class="token operator">&amp;&amp;</span> top <span class="token operator">&lt;=</span> bottom<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token comment">//边界值统一采用左闭右闭</span>

            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> left<span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>

            <span class="token comment">//使用行i列j区分当然位置</span>
                result<span class="token punctuation">[</span>top<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token comment">//缩小边界</span>
            top<span class="token operator">++</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> top<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> bottom<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
                result<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
            right<span class="token operator">--</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> right<span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> left<span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span>
                result<span class="token punctuation">[</span>bottom<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
            bottom<span class="token operator">--</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> bottom<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> top<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>
                result<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
            
            left<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> result<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="相关题目推荐-3" tabindex="-1"><a class="header-anchor" href="#相关题目推荐-3" aria-hidden="true">#</a> 相关题目推荐</h3>`,5)),s("p",null,[s("a",z,[n[21]||(n[21]=a("螺旋矩阵I 🧡")),t(e)])]),n[34]||(n[34]=p(`<blockquote><p>解题</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">spiralOrder</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> matrix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> up <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> right <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>down <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token operator">&amp;&amp;</span>up<span class="token operator">&lt;=</span>down<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> left<span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
                    result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>up<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                up<span class="token operator">++</span><span class="token punctuation">;</span>

                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> up<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> down<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
                    result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                right<span class="token operator">--</span><span class="token punctuation">;</span>


                <span class="token doc-comment comment">/**这里需要增加额外判断条件up&lt;=down
                因为当输入矩阵为非正方形时，可能仅满足当前长未遍历完，导致宽被重复添加
                    例如在[[1,2,3,4],[5,6,7,8],[9,10,11,12]]矩阵
                        注：不能直接在while循环修改结束条件为||,是因为可能重复添加，
                            例如在[[1,2,3,4],[5,6,7,8],[9,10,11,12]]矩阵
                 **/</span>
                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> right<span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> left<span class="token operator">&amp;&amp;</span>up<span class="token operator">&lt;=</span>down<span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span>
                    result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>down<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                down<span class="token operator">--</span><span class="token punctuation">;</span>

                <span class="token doc-comment comment">/**这里的left&lt;=right
                因为当输入矩阵为非正方形时，当前矩阵已经被前三条边完全添加
                     例如在[[7],[9],[6]]矩阵
                **/</span>
                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> down<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> up<span class="token operator">&amp;&amp;</span>left<span class="token operator">&lt;=</span>right<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>
                    result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                left<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2))])}const V=o(u,[["render",L],["__file","Array.html.vue"]]);export{V as default};
