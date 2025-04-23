import{_ as o,Q as l,z as i,A as c,a6 as t,X as s,C as a,T as p}from"./framework.9f8afd9b.js";const u="/images/LinkedList/2023-03-22-10-24-22.png",d="/images/LinkedList/2023-03-22-10-24-42.png",r={},k={id:"移除链表元素",tabindex:"-1"},v={href:"https://leetcode.cn/problems/remove-linked-list-elements/",target:"_blank",rel:"noopener noreferrer"},m={id:"设计链表",tabindex:"-1"},b={href:"https://leetcode.cn/problems/design-linked-list/",target:"_blank",rel:"noopener noreferrer"},h={id:"反转链表",tabindex:"-1"},y={href:"https://leetcode.cn/problems/reverse-linked-list/",target:"_blank",rel:"noopener noreferrer"},w={id:"删除链表的倒数第n个节点",tabindex:"-1"},x={href:"https://leetcode.cn/problems/remove-nth-node-from-end-of-list/submissions/",target:"_blank",rel:"noopener noreferrer"},L={id:"交叉链表相交点",tabindex:"-1"},f={href:"https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/",target:"_blank",rel:"noopener noreferrer"},g={id:"链表环",tabindex:"-1"},N={href:"https://leetcode.cn/problems/linked-list-cycle-ii/submissions/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.programmercarl.com/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.html#%E6%80%9D%E8%B7%AF",target:"_blank",rel:"noopener noreferrer"};function q(A,n){const e=l("ExternalLinkIcon");return i(),c("div",null,[n[19]||(n[19]=t(`<h1 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h1><blockquote><p>链表是一种通过指针串联在一起的<strong>线性结构</strong></p></blockquote><p>每一个节点由两部分组成：</p><ul><li>一部分是数据域</li><li>一部分是指针域</li></ul><blockquote><p>单链表最后一个节点的指针域指向null（空指针的意思）</p></blockquote><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><h3 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h3><p>根据链表的指针一般分为：</p><ul><li>单链表</li></ul><blockquote><p>指针域部分仅有一个指针，指向下一个节点</p></blockquote><ul><li>双链表</li></ul><blockquote><p>指针域部分有两个指针，头指针指向上一个节点，尾指针指向下一个节点</p></blockquote><ul><li>循环链表</li></ul><blockquote><p>和双指针一样由头指针和尾指针，但是首尾相接，形成环</p></blockquote><p>注：循环链表可以用来解决约瑟夫环问题。</p><h4 id="约瑟夫环" tabindex="-1"><a class="header-anchor" href="#约瑟夫环" aria-hidden="true">#</a> 约瑟夫环</h4><p>N个人围成一圈，第一个人从1开始报数，报M的将被杀掉，下一个人接着从1开始报。如此反复，最后剩下一个，求最后的胜利者。 例如只有三个人，把他们叫做A、B、C，他们围成一圈，从A开始报数，假设报2的人被杀掉。</p><blockquote><p>可以使用循环链表来处理，但是由于设计大量的链表移除节点操作，在大数量级下，往往超时。</p></blockquote><p>所以一般通过下面的公式处理：</p><p><code>f(N,M)=(f(N−1,M)+M)%N</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token comment">//迭代</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">circle</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token class-name">N</span><span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token class-name">M</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token class-name">N</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                result <span class="token operator">=</span> （resulr <span class="token operator">+</span> <span class="token class-name">M</span>）<span class="token operator">%</span> <span class="token class-name">N</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">//下标从0开始，故返回需要加一</span>
            <span class="token keyword">return</span> result<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
<span class="token comment">//递归        </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储方式" tabindex="-1"><a class="header-anchor" href="#存储方式" aria-hidden="true">#</a> 存储方式</h3><p>数组是在内存中是连续分布的（很多语言中，例如C），但是链表在内存中可不是连续分布的。</p><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><p>在 C++ 中链表定义如下：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// 单链表
struct ListNode {
    int val;  // 节点上存储的元素
    ListNode *next;  // 指向下一个节点的指针
    ListNode(int x) : val(x), next(NULL) {}  // 节点的构造函数
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Java 中链表定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 单链表</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
    <span class="token comment">// 结点的值</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>

    <span class="token comment">// 下一个结点</span>
    <span class="token class-name">ListNode</span> next<span class="token punctuation">;</span>

    <span class="token comment">// 节点的构造函数(无参)</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 节点的构造函数(有一个参数)</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 节点的构造函数(有两个参数)</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h3><blockquote><p>添加和删除是链表的核心操作</p></blockquote><h4 id="删除节点" tabindex="-1"><a class="header-anchor" href="#删除节点" aria-hidden="true">#</a> 删除节点</h4><p><img src="`+u+'" alt=""></p><p>只要将C节点的next指针 指向E节点就可以了。</p><h4 id="添加节点" tabindex="-1"><a class="header-anchor" href="#添加节点" aria-hidden="true">#</a> 添加节点</h4><p><img src="'+d+'" alt=""></p><blockquote><p>链表的增添和删除都是O(1)操作，也不会影响到其他节点。</p></blockquote><blockquote><p>但是要是删除第N个节点，需要从头节点查找到第N-1个节点通过next指针进行删除操作，查找的时间复杂度是O(n)。</p></blockquote><h3 id="性能分析" tabindex="-1"><a class="header-anchor" href="#性能分析" aria-hidden="true">#</a> 性能分析</h3><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">删除/添加时间复杂度</th><th style="text-align:center;">查询时间复杂度</th><th style="text-align:center;">使用场景</th></tr></thead><tbody><tr><td style="text-align:center;">数组</td><td style="text-align:center;">O(n)</td><td style="text-align:center;">O(1)</td><td style="text-align:center;">数据量固定,少增删,频繁查询</td></tr><tr><td style="text-align:center;">链表</td><td style="text-align:center;">O(1)</td><td style="text-align:center;">O(n)</td><td style="text-align:center;">数据量变化,少查询,频繁增删</td></tr></tbody></table><blockquote><p>数组在定义的时候，长度就是固定的，如果想改动数组的长度，就需要重新定义一个新的数组</p></blockquote><blockquote><p>链表的长度可以是不固定的，并且可以动态增删， 适合数据量不固定，频繁增删，较少查询的场景</p></blockquote>',41)),s("h2",k,[n[1]||(n[1]=s("a",{class:"header-anchor",href:"#移除链表元素","aria-hidden":"true"},"#",-1)),n[2]||(n[2]=a()),s("a",v,[n[0]||(n[0]=a("移除链表元素")),p(e)])]),n[20]||(n[20]=t(`<h3 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h3><p>使用两个指针,一个指针指向当前节点,另一个指针指向当前节点的前置节点.</p><p>设置一个虚拟头节点指向当前链表头,前置节点初始化指向头节点.</p><p>最终结果节点指向该初始化虚拟头节点,因为可能首个节点满足等于val需要移除,结果返回头节点的next</p><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode() <span class="token punctuation">{</span><span class="token punctuation">}</span>
 *     ListNode(int val) <span class="token punctuation">{</span> this.val = val; <span class="token punctuation">}</span>
 *     ListNode(int val, ListNode next) <span class="token punctuation">{</span> this.val = val; this.next = next; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeElements</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">ListNode</span> point <span class="token operator">=</span> head<span class="token punctuation">;</span>

        <span class="token comment">//虚拟头</span>
        <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> point<span class="token punctuation">;</span>
        head <span class="token operator">=</span> pre<span class="token punctuation">;</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>pre<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
                pre<span class="token punctuation">.</span>next <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span>
                pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
            point <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)),s("h2",m,[n[4]||(n[4]=s("a",{class:"header-anchor",href:"#设计链表","aria-hidden":"true"},"#",-1)),n[5]||(n[5]=a()),s("a",b,[n[3]||(n[3]=a("设计链表")),p(e)])]),n[21]||(n[21]=t(`<h3 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h3><h4 id="错误思路" tabindex="-1"><a class="header-anchor" href="#错误思路" aria-hidden="true">#</a> 错误思路</h4><blockquote><p>未使用int记录当前链表长度导致每次需要单独处理索引为空</p></blockquote><blockquote><p>内定义内部类ListNode</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">MyLinkedList</span> <span class="token punctuation">{</span>

        <span class="token keyword">int</span> val<span class="token punctuation">;</span>
        <span class="token class-name">MyLinkedList</span> next<span class="token punctuation">;</span>
        
        <span class="token keyword">public</span> <span class="token class-name">MyLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token class-name">MyLinkedList</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">MyLinkedList</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">,</span> <span class="token class-name">MyLinkedList</span> next<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MyLinkedList</span> point <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token operator">&amp;&amp;</span>point<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            point <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span> 
            index <span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> point <span class="token operator">==</span> <span class="token keyword">null</span><span class="token operator">?</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">:</span>point<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtHead</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MyLinkedList</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyLinkedList</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        point<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtTail</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MyLinkedList</span> point <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>next<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span>
            point <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        
        point<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyLinkedList</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">MyLinkedList</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        point<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> point<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            point <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>point <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token class-name">MyLinkedList</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyLinkedList</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        point<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteAtIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MyLinkedList</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        point<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token operator">&amp;&amp;</span>point<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            point <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>point <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
        point<span class="token punctuation">.</span>next <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="正确思路" tabindex="-1"><a class="header-anchor" href="#正确思路" aria-hidden="true">#</a> 正确思路</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">class</span> <span class="token class-name">MyLinkedList</span> <span class="token punctuation">{</span>
    
    <span class="token class-name">ListNode</span> head<span class="token punctuation">;</span>
    
    <span class="token keyword">int</span> length<span class="token punctuation">;</span>
    
    <span class="token keyword">class</span> <span class="token class-name">ListNode</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> val<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> next<span class="token punctuation">;</span>
        <span class="token keyword">public</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    
    <span class="token keyword">public</span> <span class="token class-name">MyLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&gt;</span> length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> 
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
               
        <span class="token class-name">ListNode</span> point <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>index<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           point <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> point<span class="token punctuation">.</span>val<span class="token punctuation">;</span>        
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtHead</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token class-name">ListNode</span> <span class="token function">newDummyHead</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> dummyHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dummyHead<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">return</span> dummmyHead<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtTail</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token class-name">ListNode</span> dummyHead <span class="token operator">=</span> <span class="token function">newDummyHead</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> point <span class="token operator">=</span> dummyHead<span class="token punctuation">;</span>
        
        <span class="token keyword">while</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            point <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        point<span class="token punctuation">.</span>next <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> dummyHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&gt;</span> length<span class="token punctuation">)</span> 
            <span class="token keyword">return</span><span class="token punctuation">;</span>
            
        <span class="token class-name">ListNode</span> dummyHead <span class="token operator">=</span> <span class="token function">newDummyHead</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> point <span class="token operator">=</span> dummyHead<span class="token punctuation">;</span>
        
         <span class="token keyword">while</span><span class="token punctuation">(</span>index<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            point <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         
         <span class="token class-name">ListNode</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
         newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
         point<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
         
         <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> dummyHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>   
         <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>
         
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteAtIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&gt;</span> length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> 
            <span class="token keyword">return</span><span class="token punctuation">;</span>
            
        <span class="token class-name">ListNode</span> dummyHead <span class="token operator">=</span> <span class="token function">newDummyHead</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> point <span class="token operator">=</span> dummyHead<span class="token punctuation">;</span>
        
         <span class="token keyword">while</span><span class="token punctuation">(</span>index<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
             
           point <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         point<span class="token punctuation">.</span>next <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> dummyHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
         
         <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">--</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)),s("h2",h,[n[7]||(n[7]=s("a",{class:"header-anchor",href:"#反转链表","aria-hidden":"true"},"#",-1)),n[8]||(n[8]=a()),s("a",y,[n[6]||(n[6]=a("反转链表")),p(e)])]),n[22]||(n[22]=t(`<h3 id="代码-2" tabindex="-1"><a class="header-anchor" href="#代码-2" aria-hidden="true">#</a> 代码</h3><h4 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针" aria-hidden="true">#</a> 双指针</h4><blockquote><p>从前到后逐渐转向</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode() <span class="token punctuation">{</span><span class="token punctuation">}</span>
 *     ListNode(int val) <span class="token punctuation">{</span> this.val = val; <span class="token punctuation">}</span>
 *     ListNode(int val, ListNode next) <span class="token punctuation">{</span> this.val = val; this.next = next; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">ListNode</span> temp <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            head<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
            pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
            head <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
         
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h4><blockquote><p>从前到后逐渐转向</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
         
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token class-name">ListNode</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> pre<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> head<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ListNode</span> temp <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>从后到前逐渐转向</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 边缘条件判断</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>
        
        <span class="token comment">// 递归调用，翻转第二个节点开始往后的链表</span>
        <span class="token class-name">ListNode</span> last <span class="token operator">=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 翻转头节点与第二个节点的指向</span>
        head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token comment">// 此时的 head 节点为尾节点，next 需要指向 NULL</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> last<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>

## <span class="token punctuation">[</span>两两交换链表<span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>leetcode<span class="token punctuation">.</span>cn<span class="token operator">/</span>problems<span class="token operator">/</span>swap<span class="token operator">-</span>nodes<span class="token operator">-</span>in<span class="token operator">-</span>pairs<span class="token punctuation">)</span>

### 代码

<span class="token operator">&gt;</span> 直接通过双指针遍历处理

\`\`\`java
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">swapPairs</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> dummyHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dummyHead<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> point <span class="token operator">=</span> dummyHead<span class="token punctuation">;</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>next<span class="token operator">!=</span><span class="token keyword">null</span><span class="token operator">&amp;&amp;</span>point<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">ListNode</span> temp1 <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token class-name">ListNode</span> temp2 <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            point<span class="token punctuation">.</span>next <span class="token operator">=</span> temp1<span class="token punctuation">;</span>
            temp1<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
            head<span class="token punctuation">.</span>next <span class="token operator">=</span> temp2<span class="token punctuation">;</span>
            point <span class="token operator">=</span> head<span class="token punctuation">;</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> dummyHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)),s("h2",w,[n[10]||(n[10]=s("a",{class:"header-anchor",href:"#删除链表的倒数第n个节点","aria-hidden":"true"},"#",-1)),n[11]||(n[11]=a()),s("a",x,[n[9]||(n[9]=a("删除链表的倒数第N个节点")),p(e)])]),n[23]||(n[23]=t(`<h3 id="代码-3" tabindex="-1"><a class="header-anchor" href="#代码-3" aria-hidden="true">#</a> 代码</h3><blockquote><p>通过双指针可以轻松处理回退</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> dummyHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dummyHead<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>    
        <span class="token class-name">ListNode</span> point <span class="token operator">=</span> dummyHead<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span> n<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            point <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        point<span class="token punctuation">.</span>next <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">return</span> dummyHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)),s("h2",L,[n[13]||(n[13]=s("a",{class:"header-anchor",href:"#交叉链表相交点","aria-hidden":"true"},"#",-1)),n[14]||(n[14]=a()),s("a",f,[n[12]||(n[12]=a("交叉链表相交点")),p(e)])]),n[24]||(n[24]=t(`<h3 id="思路-1" tabindex="-1"><a class="header-anchor" href="#思路-1" aria-hidden="true">#</a> 思路</h3><p>获取链表A和链表B的长度，获取两个链表的差值，通过差值<strong>对其两个链表尾部</strong>。</p><p>因为当前交叉链表的交点一定在两个链表对其尾部之后，可以将两边的指针同时后移，此时相交点是两个<strong>指针相等</strong>的点（不是值相等）。</p><h3 id="代码-4" tabindex="-1"><a class="header-anchor" href="#代码-4" aria-hidden="true">#</a> 代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> headA<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> headB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> lengthA <span class="token operator">=</span> <span class="token function">getLength</span><span class="token punctuation">(</span>headA<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> lengthB <span class="token operator">=</span> <span class="token function">getLength</span><span class="token punctuation">(</span>headB<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>lengthA <span class="token operator">-</span> lengthB<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>lengthA <span class="token operator">&gt;</span> lengthB<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>size<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                headA <span class="token operator">=</span> headA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>size<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                headB <span class="token operator">=</span> headB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
        
        <span class="token keyword">while</span><span class="token punctuation">(</span>headA <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> headB <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> headA <span class="token operator">!=</span> headB<span class="token punctuation">)</span><span class="token punctuation">{</span>
                headA <span class="token operator">=</span> headA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                headB <span class="token operator">=</span> headB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token punctuation">(</span>headA <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> headB <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> headA<span class="token punctuation">;</span>
        


        
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span>  <span class="token function">getLength</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)),s("h2",g,[n[16]||(n[16]=s("a",{class:"header-anchor",href:"#链表环","aria-hidden":"true"},"#",-1)),n[17]||(n[17]=a()),s("a",N,[n[15]||(n[15]=a("链表环")),p(e)])]),n[25]||(n[25]=s("h3",{id:"思路-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#思路-2","aria-hidden":"true"},"#"),a(" 思路")],-1)),s("p",null,[s("a",j,[n[18]||(n[18]=a("参考地址")),p(e)])]),n[26]||(n[26]=t(`<h3 id="代码-5" tabindex="-1"><a class="header-anchor" href="#代码-5" aria-hidden="true">#</a> 代码</h3><blockquote><p>错误解法</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token class-name">ListNode</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token operator">&amp;&amp;</span>fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token operator">&amp;&amp;</span>slow <span class="token operator">!=</span> fast<span class="token punctuation">)</span><span class="token punctuation">{</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>fast <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> fast<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>head <span class="token operator">!=</span>  fast<span class="token punctuation">)</span><span class="token punctuation">{</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> fast<span class="token punctuation">;</span>

        
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意审题，本题中不一定存在环，在不存在环时需要返回空</p></blockquote><blockquote><p>正确解法</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token class-name">ListNode</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>

        <span class="token keyword">boolean</span> hasCycle <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token operator">&amp;&amp;</span>fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>fast <span class="token operator">==</span> slow<span class="token punctuation">)</span><span class="token punctuation">{</span>
                hasCycle <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>hasCycle<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>fast <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> fast<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>head <span class="token operator">!=</span>  fast<span class="token punctuation">)</span><span class="token punctuation">{</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> fast<span class="token punctuation">;</span>
 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6))])}const H=o(r,[["render",q],["__file","LinkedList.html.vue"]]);export{H as default};
