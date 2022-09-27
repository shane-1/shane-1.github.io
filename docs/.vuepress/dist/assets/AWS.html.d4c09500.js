import{_ as i,o as e,c as l,e as a}from"./app.838aae74.js";const r="/images/2020-10-26-16-15-59.png",d={},h=a(`<h1 id="aws-devops" tabindex="-1"><a class="header-anchor" href="#aws-devops" aria-hidden="true">#</a> AWS DevOps</h1><blockquote><p>\u5FAE\u670D\u52A1</p><p>\u654F\u6377</p></blockquote><h2 id="\u4EFB\u52A1\u62C6\u5206" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u52A1\u62C6\u5206" aria-hidden="true">#</a> \u4EFB\u52A1\u62C6\u5206</h2><ul><li>\u62C6\u5206\u5355\u5143\u5C3D\u53EF\u80FD\u5C0F</li><li>\u5212\u5206\u6570\u636E\u57DF</li><li>\u6839\u636Escaling factors\u800C\u4E0D\u662F\u804C\u80FD\u90E8\u95E8\u6765\u89E3\u8026</li><li>\u670D\u52A1\u95F4\u72EC\u7ACB\u8FD0\u884C</li><li>\u670D\u52A1\u95F4\u901A\u8FC7api\u76F4\u63A5\u8C03\u7528</li></ul><p><strong>\u8FD9\u5C06\u4F7F\u7EC4\u7EC7\u7ED3\u679C\u53D1\u751F\u53D8\u5316</strong></p><h2 id="\u6574\u4F53\u5F00\u53D1\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u6574\u4F53\u5F00\u53D1\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u6574\u4F53\u5F00\u53D1\u751F\u547D\u5468\u671F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5F00\u53D1\u8005 ---&gt;  \u670D\u52A1  ---&gt; \u4EA4\u4ED8\u6D41\u6C34\u7EBF(build ---&gt; test ---&gt; release --&gt; monitor)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u6BCF\u4E2Aserver\u72EC\u7ACB\u90E8\u7F72</p></blockquote><h2 id="amazon-devops\u7684\u4E09\u5927\u5B9A\u5F8B" tabindex="-1"><a class="header-anchor" href="#amazon-devops\u7684\u4E09\u5927\u5B9A\u5F8B" aria-hidden="true">#</a> Amazon DevOps\u7684\u4E09\u5927\u5B9A\u5F8B</h2><ol><li>\u62C6\u5206\u4EFB\u52A1</li><li>\u56E2\u961F\u81EA\u4E3B\u8FD0\u884C</li><li>\u6280\u672F\u89C4\u8303\u5316</li></ol><h2 id="why-devops" tabindex="-1"><a class="header-anchor" href="#why-devops" aria-hidden="true">#</a> why DevOps</h2><ol><li>\u5FEB\u901F\u53D1\u5E03</li><li>\u53CD\u8106\u5F31</li><li>\u6D88\u9664\u6280\u672F\u503A\u52A1</li></ol><blockquote><p>\u7070\u5EA6\u90E8\u7F72:\u5148\u8FDB\u884C\u90E8\u5206\u8BD5\u90E8\u7F72\u4E0A\u7EBF</p></blockquote><h2 id="devops\u6784\u6210" tabindex="-1"><a class="header-anchor" href="#devops\u6784\u6210" aria-hidden="true">#</a> DevOps\u6784\u6210</h2><h3 id="\u6301\u7EED\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#\u6301\u7EED\u89C4\u5212" aria-hidden="true">#</a> \u6301\u7EED\u89C4\u5212</h3><ol><li>\u8003\u8651\u8FD0\u7EF4</li><li>\u9700\u6C42</li><li>\u5171\u521B\u5408\u4F5C</li></ol><h3 id="\u6301\u7EED\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u6301\u7EED\u5F00\u53D1" aria-hidden="true">#</a> \u6301\u7EED\u5F00\u53D1</h3><ol><li>\u7248\u672C\u7BA1\u7406 <code>codecommit</code></li><li>\u5206\u652F\u7BA1\u7406</li></ol><h3 id="\u6301\u7EED\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6301\u7EED\u6D4B\u8BD5" aria-hidden="true">#</a> \u6301\u7EED\u6D4B\u8BD5</h3><ul><li>\u81EA\u52A8\u5316\u6D4B\u8BD5</li></ul><ol><li>\u9759\u6001\u4EE3\u7801\u68C0\u67E5</li><li>\u5355\u5143\u6D4B\u8BD5</li><li>\u63A5\u53E3\u6D4B\u8BD5</li><li>UI\u6D4B\u8BD5</li><li>\u538B\u529B\u6D4B\u8BD5</li><li>\u5B89\u5168\u6D4B\u8BD5</li></ol><h3 id="\u6301\u7EED\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#\u6301\u7EED\u96C6\u6210" aria-hidden="true">#</a> \u6301\u7EED\u96C6\u6210</h3><ol><li>Trunk\u63D0\u4EA4</li><li>\u89E6\u53D1job <ol><li>pull</li><li>\u51B2\u7A81</li><li>\u9759\u6001\u4EE3\u7801\u68C0\u67E5</li><li>\u7F16\u8BD1</li><li>\u5355\u5143\u6D4B\u8BD5</li><li>\u6253\u5305</li><li>\u90E8\u7F72dev</li><li>\u6D4B\u8BD5</li></ol></li></ol><h3 id="\u6301\u7EED\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u6301\u7EED\u90E8\u7F72" aria-hidden="true">#</a> \u6301\u7EED\u90E8\u7F72</h3><ol><li><p>\u90E8\u7F72test</p></li><li><p>\u6D4B\u8BD5</p></li><li><p>\u90E8\u7F72production</p><ul><li><p>\u90E8\u7F72\u81EA\u52A8\u5316</p></li><li><p>\u53C2\u6570\u914D\u7F6E-&gt;\u914D\u7F6E\u7BA1\u7406</p><blockquote><ol><li>\u90E8\u7F72\u8FC7\u7A0B\u81EA\u52A8\u5316,\u51CF\u5C11\u9AD8\u9891\u90E8\u7F72\u4EBA\u4E3A\u9519\u8BEF</li><li>\u6240\u6709\u5BF9\u73AF\u5883\u7684\u6539\u52A8\u7ECF\u7EDF\u4E00\u5165\u53E3</li><li>Dev\\Test\\Pro\u73AF\u5883\u5C3D\u91CF\u4FDD\u6301\u4E00\u81F4</li></ol></blockquote></li><li><p>\u5BB9\u5668\u5316</p></li><li><p>\u90E8\u7F72\u65B9\u5F0F</p><ul><li>\u84DD\u7EFF\u90E8\u7F72</li><li>\u7070\u5EA6\u90E8\u7F72(\u91D1\u4E1D\u96C0)</li></ul></li></ul></li></ol><h3 id="\u6301\u7EED\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#\u6301\u7EED\u76D1\u63A7" aria-hidden="true">#</a> \u6301\u7EED\u76D1\u63A7</h3><ol><li><code>ELK</code> \u6536\u96C6\u65E5\u5FD7</li><li><code>elasticsearch</code> \u641C\u7D22\u5F15\u64CE</li><li><code>kibana</code> \u754C\u9762\u5C55\u793A</li></ol><h2 id="\u90E8\u7F72vs\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72vs\u53D1\u5E03" aria-hidden="true">#</a> \u90E8\u7F72vs\u53D1\u5E03</h2><h3 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72:</h3><p>\u53C8\u79F0\u4EA4\u4ED8,IT\u90E8\u95E8\u64CD\u4F5C,\u6280\u672F\u80FD\u529B</p><h3 id="\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03" aria-hidden="true">#</a> \u53D1\u5E03:</h3><p>\u4E1A\u52A1\u90E8\u95E8,\u4E1A\u52A1\u51B3\u5B9A</p><h2 id="\u90E8\u7F72\u6D41\u6C34\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u6D41\u6C34\u7EBF" aria-hidden="true">#</a> \u90E8\u7F72\u6D41\u6C34\u7EBF</h2><blockquote><p>\u8BC4\u4F30\u6240\u6709\u5BF9\u7CFB\u7EDF\u7684\u6539\u52A8,\u80FD\u591F\u4FA6\u6D4B\u5BF9\u9AD8\u98CE\u9669\u6216\u5BF9\u8D28\u91CF\u6709\u5F71\u54CD\u7684\u6539\u52A8\u62D2\u7EDD\u96C6\u6210,\u6301\u7EED\u7ED9\u56E2\u961F\u63D0\u4F9B\u76F8\u5173\u6539\u52A8\u53CD\u9988,\u8BA9\u56E2\u961F\u6709\u80FD\u529B\u5FEB\u901F\u7ECF\u6D4E\u7684\u4FEE\u590D\u95EE\u9898</p></blockquote><h2 id="\u6848\u4F8B\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B\u5206\u6790" aria-hidden="true">#</a> \u6848\u4F8B\u5206\u6790</h2><h2 id="\u5355\u4F53\u5F0F\u5E94\u7528-monolithic" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F53\u5F0F\u5E94\u7528-monolithic" aria-hidden="true">#</a> \u5355\u4F53\u5F0F\u5E94\u7528 Monolithic</h2><ul><li>\u8F6F\u4EF6\u9AD8\u5EA6\u8026\u5408</li><li>\u6784\u5EFA/\u6D4B\u8BD5/\u53D1\u5E03 \u5468\u671F\u957F</li></ul><h3 id="\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a> \u95EE\u9898</h3><ul><li><p>\u6269\u5C55\u6027\u5DEE</p></li><li><p>\u7F3A\u4E4F\u7075\u6D3B\u6027</p></li><li><p>\u7CFB\u7EDF\u8FD0\u7EF4\u5341\u5206\u56F0\u96BE</p></li><li><p>\u8F6F\u4EF6\u67B6\u6784\u96BE\u4EE5\u7EF4\u62A4\u548C\u53D1\u5C55</p></li><li><p>\u7F3A\u4E4F\u521B\u65B0</p></li><li><p>\u5F00\u53D1\u901F\u5EA6\u6162</p><p>...</p></li></ul><h2 id="\u5FAE\u670D\u52A1-microservice" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u670D\u52A1-microservice" aria-hidden="true">#</a> \u5FAE\u670D\u52A1 MicroService</h2><ul><li>\u670D\u52A1\u6CE8\u518C\\\u53D1\u73B0</li><li>\u7F51\u5173</li><li>\u914D\u7F6E\u4E2D\u5FC3</li><li>\u94FE\u8DEF\u8FFD\u8E2A</li></ul><h3 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h3><p><u>\u5FAE\u670D\u52A1= Service-oriented architecture + &quot;\u5C0F&quot; public API</u></p><blockquote><p>\u6CA1\u6709\u603B\u7EBF,\u4F1A\u5BFC\u81F4\u590D\u6742\u7684\u4E92\u76F8\u8C03\u7528\u7684\u94FE\u8DEF</p></blockquote><h3 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h3><h4 id="\u8EAB\u4EFD\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u8EAB\u4EFD\u9A8C\u8BC1" aria-hidden="true">#</a> \u8EAB\u4EFD\u9A8C\u8BC1</h4><h4 id="\u6388\u6743-\u6743\u9650\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u6388\u6743-\u6743\u9650\u7BA1\u7406" aria-hidden="true">#</a> \u6388\u6743(\u6743\u9650\u7BA1\u7406)</h4><h4 id="\u6839\u636E\u9700\u8981\u81EA\u52A8\u6269\u5C55\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u9700\u8981\u81EA\u52A8\u6269\u5C55\u670D\u52A1" aria-hidden="true">#</a> \u6839\u636E\u9700\u8981\u81EA\u52A8\u6269\u5C55\u670D\u52A1</h4><p>(CPU\\TPS\u8BBF\u95EE\u91CF)</p><h4 id="api\u5411\u540E\u517C\u5BB9" tabindex="-1"><a class="header-anchor" href="#api\u5411\u540E\u517C\u5BB9" aria-hidden="true">#</a> API\u5411\u540E\u517C\u5BB9</h4><h4 id="\u9690\u85CF\u4F60\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u9690\u85CF\u4F60\u7684\u6570\u636E" aria-hidden="true">#</a> \u9690\u85CF\u4F60\u7684\u6570\u636E</h4><h2 id="\u654F\u6377-scrum" tabindex="-1"><a class="header-anchor" href="#\u654F\u6377-scrum" aria-hidden="true">#</a> \u654F\u6377 Scrum</h2><p><strong>\u4E2A\u4F53\u548C\u4EA4\u4E92\u9AD8\u4E8E\u5DE5\u5177\u548C\u6D41\u7A0B</strong></p><ul><li>\u81EA\u7BA1\u7406\u56E2\u961F</li><li>T\u578B\u4EBA\u624D</li><li>\u5F15\u5BFC\u56E2\u961F\u81EA\u4E3B\u89E3\u51B3\u95EE\u9898</li><li>\u8DE8\u804C\u80FD</li></ul><h3 id="\u6BCF\u65E5\u7AD9\u4F1A" tabindex="-1"><a class="header-anchor" href="#\u6BCF\u65E5\u7AD9\u4F1A" aria-hidden="true">#</a> \u6BCF\u65E5\u7AD9\u4F1A</h3><p>\u540C\u6B65\u4FE1\u606F</p><p><s>\u975E\u7B7E\u5230\u4F1A\\\u6210\u679C\u4F1A</s></p><blockquote><p>\u770B\u677F\\\u71C3\u5C3D\u56FE:\u4FE1\u606F\u8F90\u5C04\u6E90</p></blockquote><h3 id="scrum-master" tabindex="-1"><a class="header-anchor" href="#scrum-master" aria-hidden="true">#</a> Scrum Master</h3><p>\u89D2\u8272:\u786E\u4FDD\u56E2\u961F\u9075\u5FAAScrum</p><p><s>\u56E2\u961F\u7684\u76F4\u63A5\u9886\u5BFC</s></p><h3 id="product-owner" tabindex="-1"><a class="header-anchor" href="#product-owner" aria-hidden="true">#</a> Product Owner</h3><p>\u89D2\u8272:\u68B3\u7406product backlog,\u6392\u5E8F\\\u89E3\u91CA\\\u9A8C\u6536</p><ul><li><p>\u5177\u6709\u5BF9\u4EA7\u54C1\u7684\u6784\u60F3</p></li><li><p>\u7BA1\u7406\u4EA7\u54C1\u4EE3\u529E\u4E8B\u9879\u5217\u8868</p></li><li><p>\u5728\u4EA7\u54C1\u5F85\u529E\u4E8B\u9879\u7C7B\u522B\u4E2D\u6309\u7167\u4F18\u5148\u7EA7\u5B89\u6392\u7528\u6237\u6545\u4E8B</p></li></ul><h3 id="develop-team" tabindex="-1"><a class="header-anchor" href="#develop-team" aria-hidden="true">#</a> Develop Team</h3><p>\u89D2\u8272:\u6784\u5EFA\\\u4EA4\u4ED8\\\u5E76\u76D1\u63A7\u9AD8\u8D28\u91CF\u7684\u8F6F\u4EF6</p><h3 id="\u9AD8\u5E26\u5BBD\u6C9F\u901A" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u5E26\u5BBD\u6C9F\u901A" aria-hidden="true">#</a> \u9AD8\u5E26\u5BBD\u6C9F\u901A</h3><p>\u63A8\u8350\u9762\u5BF9\u9762\u6C9F\u901A</p><h3 id="_335" tabindex="-1"><a class="header-anchor" href="#_335" aria-hidden="true">#</a> 335</h3><p>3\u4E2A\u89D2\u82723\u4E2A\u4E2D\u95F4\u4EA7\u7269</p><blockquote><ul><li>Product backlog</li><li>Sprint backlog</li><li>Product Increment</li></ul></blockquote><p>5\u4E2A\u6D3B\u52A8</p><ol><li><p>Product backlog grooming:</p><ul><li><p>\u6392\u4F18\u5148\u7EA7</p></li><li><p>\u8BA8\u8BBA\u7528\u6237\u6545\u4E8B\u5FC5\u8981\u6027</p></li><li><p>\u589E\u5220\u6539</p></li><li><p>\u5177\u5907\u72EC\u7ACB\u6027</p><blockquote><p>(PO\u4E3B\u5BFC)</p></blockquote></li></ul></li><li><p>Sprint Planning meeting</p><ul><li>\u51B3\u5B9A\u8FED\u4EE3\u76EE\u6807(\u627F\u8BFA)</li><li>\u8F93\u5165:\u521D\u59CB\u8FED\u4EE3\u76EE\u6807\\\u56E2\u961F\u901F\u7387\\\u56E2\u961F\u60C5\u51B5</li><li>\u8F93\u51FA:Sprint Backlog</li><li>\u5168\u5458\u53C2\u52A0(\u4E00\u6B21\u8FED\u4EE31-4\u5468)</li><li>\u4F30\u7B97:\u529F\u80FD\u70B9\u4F30\u7B97</li></ul><blockquote><p>\u8FED\u4EE3\u63A8\u83502-3\u5468,\u5408\u7406\u89E3\u51BB\u5BA2\u670D\u9700\u6C42\u65F6\u95F4.\u53EF\u4EE5\u4EA4\u4ED8\u8F83\u5927\\\u8F83\u91CD\u8981\u7684stories.</p></blockquote><p>\u6545\u4E8B\u70B9:</p><ol><li>\u53EF\u4EE5\u8BA1\u7B97\u51FA\u76F8\u5BF9\u6570\u5B57</li><li>\u53EF\u4EE5\u5C4F\u853D\u566A\u97F3</li></ol></li><li><p>Daily Standup</p><p>\u200B 3\u4E2A\u95EE\u9898</p><ol><li>\u6628\u5929\u505A\u4E86\u4EC0\u4E48</li><li>\u4ECA\u5929\u8981\u505A\u4EC0\u4E48</li><li>\u9047\u5230\u4E86\u4EC0\u4E48\u95EE\u9898</li></ol></li><li><p>Review</p><ul><li>\u8F93\u5165:\u8FED\u4EE3\u9700\u6C42\u5217\u8868\\\u6F5C\u5728\u7684\u53EF\u4EA4\u4ED8\u4EA7\u54C1\u589E\u91CF</li><li>\u8F93\u51FA:\u7ECF\u8FC7\u68B3\u7406\u7684\u9700\u6C42</li></ul></li><li><p><strong>Retrospective</strong></p></li></ol><h3 id="\u4E09\u5927\u652F\u67F1" tabindex="-1"><a class="header-anchor" href="#\u4E09\u5927\u652F\u67F1" aria-hidden="true">#</a> \u4E09\u5927\u652F\u67F1</h3><ul><li>\u900F\u660E</li><li>\u68C0\u67E5</li><li>\u9002\u5E94</li></ul><h3 id="sprint-board" tabindex="-1"><a class="header-anchor" href="#sprint-board" aria-hidden="true">#</a> Sprint Board</h3><ul><li>\u4EFB\u52A1\u770B\u677F</li><li>\u6545\u4E8B\u770B\u677F</li></ul><blockquote><p>WIP:\u9650\u5236\u67D0\u5217\u7684\u6570\u91CF</p><p>\u89E3\u51B3\u9879\u76EE\u63A8\u8FDB\u7684\u74F6\u9888</p></blockquote><h2 id="aws-cloudformation" tabindex="-1"><a class="header-anchor" href="#aws-cloudformation" aria-hidden="true">#</a> AWS CloudFormation</h2><ul><li>\u57FA\u7840\u67B6\u6784\u5373\u4EE3\u7801</li><li>\u96C6\u6210\u7248\u672C\u63A7\u5236</li><li>JSON/YAML\u683C\u5F0F</li><li>\u6A21\u677F-Template</li><li>\u5806\u6808-Stack</li><li>\u652F\u6301\u6240\u6709AWS\u8D44\u6E90\u7C7B\u578B</li></ul><p><img src="`+r+'" alt=""></p><h2 id="\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668" aria-hidden="true">#</a> \u5BB9\u5668</h2><ul><li>\u6070\u5230\u597D\u5904\u7684\u9694\u79BB</li><li>\u901A\u8FC7control group</li></ul><h3 id="\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#\u4F18\u52BF" aria-hidden="true">#</a> \u4F18\u52BF</h3><ul><li>only one kernel runs on the machine</li><li>No Hypervisor overhead</li><li>run different os</li><li>process isolation&amp;security</li></ul><h3 id="\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u8BAE" aria-hidden="true">#</a> \u5EFA\u8BAE</h3><ul><li>\u4E0D\u8981\u521B\u5EFA\u5927\u578B\u955C\u50CF</li><li>\u4E0D\u8981\u4F7F\u7528\u5355\u5C42\u955C\u50CF</li></ul><blockquote><p>\u5355\u5C42\u4E0D\u8981\u592A\u5927,\u4E00\u4E2A\u529F\u80FD\u6253\u4E00\u5C42</p></blockquote><ul><li>\u4E0D\u8981\u5728\u5355\u4E2A\u5BB9\u5668\u8FD0\u884C\u591A\u4E2A\u8FDB\u7A0B</li><li>\u4E0D\u8981\u5728\u5BB9\u5668\u4FDD\u5B58\u51ED\u636E,\u4E0D\u8981\u4F9D\u8D56IP\u5730\u5740</li><li>\u4EE5\u975Eroot\u7528\u6237\u8FD0\u884C\u8FDB\u7A0B</li><li>\u4E0D\u8981\u4F7F\u7528&quot;\u6700\u65B0&quot;\u6807\u7B7E</li></ul><blockquote><p>lasted tag</p></blockquote><ul><li>\u4E0D\u8981\u5229\u7528\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668\u521B\u5EFA\u955C\u50CF</li><li>\u4E0D\u8981\u5C06\u6570\u636E\u5B58\u653E\u5728\u5BB9\u5668\u5185</li></ul><h3 id="k8s" tabindex="-1"><a class="header-anchor" href="#k8s" aria-hidden="true">#</a> K8S</h3><h4 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h4><h4 id="master" tabindex="-1"><a class="header-anchor" href="#master" aria-hidden="true">#</a> Master</h4><ul><li>APIserver</li></ul><p>\u4EA4\u4E92</p><ul><li>Controller</li></ul><p>\u5BB9\u5668\u8C03\u5EA6</p><ul><li>Scheduler</li><li>ETCD</li></ul><p>\u670D\u52A1\u53D1\u73B0,\u5206\u5E03\u5F0F\u5B58\u50A8\u7CFB\u7EDF</p><h4 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> Node</h4><ul><li>pod</li></ul><blockquote><p>pause\u8D1F\u8D23\u7BA1\u7406pod</p></blockquote><ul><li>kubelet</li></ul><h4 id="\u53D1\u5E03\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u65B9\u5F0F" aria-hidden="true">#</a> \u53D1\u5E03\u65B9\u5F0F</h4><ol><li><p>deployment</p><p>\u4E0D\u533A\u5206\u72B6\u6001</p></li><li><p>StatefulSet</p><p>\u533A\u5206\u72B6\u6001</p></li><li><p>DaemonSst</p><p>\u5B88\u62A4</p><blockquote><p>\u5B50\u96C6ReplicaSet</p></blockquote></li></ol><h4 id="\u4E0D\u540Cnode\u901A\u8BAF" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540Cnode\u901A\u8BAF" aria-hidden="true">#</a> \u4E0D\u540CNode\u901A\u8BAF</h4><ul><li>IPTAble</li></ul><blockquote><p>\u96C6\u7FA4\u5C11</p></blockquote><h2 id="aws-developer-tools-for-ci-cd" tabindex="-1"><a class="header-anchor" href="#aws-developer-tools-for-ci-cd" aria-hidden="true">#</a> AWS Developer Tools for CI/CD</h2><blockquote><p>Souce -&gt; Build-&gt; Test -&gt; Deploy -&gt; Monitor</p></blockquote><ul><li>AWS CodeStar</li><li>AWS CodeBuild</li><li>AWS CodeCommit</li><li>AWS CodeDeploy</li><li>AWS CodePipline</li></ul><h2 id="aws-cloud9" tabindex="-1"><a class="header-anchor" href="#aws-cloud9" aria-hidden="true">#</a> AWS Cloud9</h2><p>\u7528\u4E8E\u7F16\u5199\\\u8FD0\u884C\u548C\u8C03\u8BD5\u4EE3\u7801\u7684\u4E91IDE</p><h2 id="aws-codecommit" tabindex="-1"><a class="header-anchor" href="#aws-codecommit" aria-hidden="true">#</a> AWS CodeCommit</h2><ul><li>\u5B89\u5168\u7684\\\u53EF\u6269\u5C55\u7684\\\u53EF\u7BA1\u7406\u7684Git\u6E90\u4EE3\u7801\u7BA1\u7406</li><li>\u4F7F\u7528\u6807\u51C6\u7684Git\u5DE5\u5177</li></ul><h2 id="aws-codebuild" tabindex="-1"><a class="header-anchor" href="#aws-codebuild" aria-hidden="true">#</a> AWS CodeBuild</h2><ul><li>\u6613\u4E8E\u7BA1\u5E93\u7684\u7F16\u8BD1\u6E90\u4EE3\u7801\\\u8FD0\u884C\u6D4B\u8BD5\u548C\u8F6F\u4EF6\u6253\u5305\u7684\u6784\u5EFA\u670D\u52A1</li><li>\u53EF\u6301\u7EED\u6269\u5C55\u5E76\u540C\u65F6\u5904\u7406\u591A\u4E2A\u6784\u5EFA</li><li>\u7528\u6237\u4E0D\u7528\u7BA1\u7406build\u670D\u52A1\u5668</li><li>\u6309\u5206\u949F\u4ED8\u8D39,\u53EA\u4E3A\u60A8\u4F7F\u7528\u7684\u8BA1\u7B97\u8D44\u6E90\u4ED8\u8D39</li><li>\u901A\u8FC7CloudWatch\u4E8B\u4EF6\u76D1\u63A7\u6784\u5EFA</li></ul><blockquote><ul><li>\u6BCF\u6B21\u6784\u5EFA\u90FD\u5728\u65B0\u7684\u5BB9\u5668\u8FD0\u884C,\u4EE5\u4FDD\u8BC1\u4E00\u81F4\u7684\\\u4E0D\u53D8\u7684\u73AF\u5883</li><li>\u6BCF\u4E2A\u5B98\u65B9\u7684CodeBuild\u955C\u50CF\u90FD\u5B89\u88C5\u4E86Docker\u548CAWS CLI</li><li>\u901A\u8FC7\u4F7F\u7528Docker\u955C\u50CF\u81EA\u5B9A\u4E49\u73AF\u5883</li></ul></blockquote><h2 id="aws-codedeploy" tabindex="-1"><a class="header-anchor" href="#aws-codedeploy" aria-hidden="true">#</a> AWS CodeDeploy</h2><ul><li>\u5C06\u4EE3\u7801\u81EA\u52A8\u90E8\u7F72\u5230\u4EFB\u4F55\u5B9E\u4F53\u548Clambda\u4E2D</li><li>\u5904\u7406\u66F4\u65B0\u5E94\u7528\u7A0B\u5E8F\u7684\u798F\u624E\u5FC3</li><li>\u907F\u514D\u5E94\u7528\u90E8\u7F72\u671F\u95F4\u7684\u505C\u673A\u65F6\u95F4</li><li>\u68C0\u6D4B\u5230\u4E8B\u6545\u81EA\u52A8\u56DE\u6EDA</li></ul><h2 id="code-pipeline" tabindex="-1"><a class="header-anchor" href="#code-pipeline" aria-hidden="true">#</a> Code Pipeline</h2><ol><li>EC2</li><li>\u5BB9\u5668</li><li>\u65E0\u670D\u52A1Lambda</li></ol><h2 id="aws-codestar" tabindex="-1"><a class="header-anchor" href="#aws-codestar" aria-hidden="true">#</a> AWS CodeStar</h2><p>Preconfigured \u6301\u7EED\u4EA4\u4ED8\u5DE5\u5177\u94FE</p><h2 id="aws-codeguru" tabindex="-1"><a class="header-anchor" href="#aws-codeguru" aria-hidden="true">#</a> AWS CodeGuru</h2><blockquote><p>\u5185\u7F6E\u7684\u4EE3\u7801\u5BA1\u67E5\u548C\u53EF\u64CD\u4F5C\u5E76\u63D0\u4F9B\u6709\u7528\u7684\u5EFA\u8BAE-&gt;\u4E0A\u7EBF\u524D\u68C0\u6D4B\u5E76\u4F18\u5316\u4EE3\u7801-&gt;\u8F7B\u677E\u8BC6\u522B\u7A0B\u5E8F\u7F3A\u9677</p></blockquote><h2 id="eks" tabindex="-1"><a class="header-anchor" href="#eks" aria-hidden="true">#</a> EKS</h2><blockquote><p>Elastic Kubernetes Server</p></blockquote><h3 id="\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u6982\u89C8" aria-hidden="true">#</a> \u6982\u89C8</h3><p>\u5168\u6258\u7BA1\u5F00\u6E90Kubernetes\u63A7\u5236\u5E73\u53F0</p>',131),o=[h];function t(c,n){return e(),l("div",null,o)}const u=i(d,[["render",t],["__file","AWS.html.vue"]]);export{u as default};
