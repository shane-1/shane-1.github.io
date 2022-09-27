import{_ as e,o as a,c as i,e as r}from"./app.838aae74.js";const d={},n=r(`<h1 id="\u5F00\u6E90\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5F00\u6E90\u8F6F\u4EF6" aria-hidden="true">#</a> \u5F00\u6E90\u8F6F\u4EF6</h1><h2 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat" aria-hidden="true">#</a> tomcat</h2><h3 id="maxconnection" tabindex="-1"><a class="header-anchor" href="#maxconnection" aria-hidden="true">#</a> Maxconnection</h3><p>\u6700\u5927\u8FDE\u63A5\u6570</p><h3 id="acceptcount" tabindex="-1"><a class="header-anchor" href="#acceptcount" aria-hidden="true">#</a> acceptCount</h3><p>\u8FDE\u63A5\u540E\u6700\u5927\u80FD\u5904\u7406\u7684\u8FDE\u63A5\u6570</p><p>\u591A\u7684\u7528\u6237\u4F1A\u8FDB\u5165\u8FDE\u63A5\u7B49\u5F85\u72B6\u6001</p><blockquote><p>\u65E9\u671Fconnection ---&gt; thread</p><p>\u4F1A\u9650\u5236\u5E76\u53D1\u6570,\u6D6A\u8D39\u8D44\u6E90,\u5355\u4E2A\u7EBF\u7A0B\u5185\u5B58\u9ED8\u8BA4\u52061MB(\u8F7B\u91CF\u53EF\u4EE5\u5206\u914D128K)</p></blockquote><h3 id="node-\u5B8C\u5168\u5F02\u6B65io" tabindex="-1"><a class="header-anchor" href="#node-\u5B8C\u5168\u5F02\u6B65io" aria-hidden="true">#</a> Node (\u5B8C\u5168\u5F02\u6B65IO)</h3><blockquote><p>vertx\u540C\u6837\u4F7F\u7528\u5F02\u6B65,\u5982\u679C\u53D1\u751F\u963B\u585E,\u53EF\u80FD\u670D\u52A1\u5D29\u6E83</p></blockquote><h3 id="tomcat\u5F02\u6B65io" tabindex="-1"><a class="header-anchor" href="#tomcat\u5F02\u6B65io" aria-hidden="true">#</a> Tomcat\u5F02\u6B65IO</h3><blockquote><p>6.0\u5F00\u59CB</p></blockquote><p>\u4E0D\u4F7F\u7528\u5B8C\u5168\u5F02\u6B65IO</p><blockquote><p>\u7EBF\u7A0B\u6570\u4E00\u822C\u4E3A<strong>CPU\u7EBF\u7A0BX2</strong></p></blockquote><h3 id="lambda-probe" tabindex="-1"><a class="header-anchor" href="#lambda-probe" aria-hidden="true">#</a> Lambda Probe</h3><blockquote><p>\u76D1\u63A7\u8F6F\u4EF6</p></blockquote><p>\u63D0\u4F9B\u65E5\u5FD7,\u6570\u636E\u6E90,\u7EBF\u7A0B\u7B49\u76D1\u63A7\u670D\u52A1</p><p>\u4EE5war\u5305\u90E8\u7F72\u5728tomcat\u4E4B\u4E2D</p><h2 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> RabbitMQ</h2><blockquote><p>\u6D88\u606F\u961F\u5217</p></blockquote><h3 id="\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a> \u7279\u6027</h3><ul><li><p>\u53EF\u9760\u6027\u4F20\u8F93</p></li><li><p>\u4E0D\u91CD\u590D\u4F20\u8F93</p><p>\u65AD\u70B9\u7EED\u4F20</p></li><li><p>\u5F02\u6B65\u6027\u4F20\u8F93</p><p>\u8131\u673A\u80FD\u529B\u548C\u5B89\u5168\u6027</p></li><li><p>\u6D88\u606F\u9A71\u52A8</p><p>\u4E3B\u52A8\u901A\u77E5\u6D88\u606F\u63A5\u6536\u65B9</p></li><li><p>\u4E0D\u652F\u6301\u4E8B\u52A1</p><blockquote><p>\u56E0\u4E3A\u4E0D\u80FD\u652F\u6301\u53EF\u9760\u5230\u8FBE</p></blockquote></li></ul><h3 id="\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#\u4F18\u52BF" aria-hidden="true">#</a> \u4F18\u52BF</h3><ul><li>\u952E\u58EE</li><li>\u6613\u4E8E\u4F7F\u7528</li><li>\u9AD8\u6027\u80FD</li><li>\u5F3A\u5927\u5F00\u6E90\u793E\u533A\u652F\u6301</li><li>RabbitMQ\u5404\u4E3B\u6D41\u64CD\u4F5C\u7CFB\u7EDF\u90FD\u6709\u5B89\u88C5\u5305</li><li>\u63D2\u4EF6\u673A\u5236\u7E41\u8363,\u5404\u79CD\u7B2C\u4E09\u65B9\u6269\u5C55,\u76D1\u63A7\u5B8C\u5907</li><li>\u5404\u79CD\u7BA1\u7406\u811A\u672C,\u5B8C\u5584\u65E5\u5FD7</li></ul><h3 id="\u4E0D\u540C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u7C7B\u578B" aria-hidden="true">#</a> \u4E0D\u540C\u7C7B\u578B</h3><ol><li>Queue, Exchange \u53EF\u4EE5\u901A\u8FC7\u5BA2\u6237\u7AEF\u6765\u5EFA\u7ACB,\u5BA2\u6237\u7AEF\u4E5F\u53EF\u4EE5\u76F4\u63A5\u7ED1\u5B9ABorker\u5DF2\u7ECF\u5B58\u5728Queue,Exchange</li><li>Direct \u7C7B\u578B\u7684\u7279\u70B9\u5C31\u662FExchange \u4E0E Queue\u76F4\u8FDE\u7684,routeKey\u4E0D\u5F71\u54CD\u4F20\u8F93\u7ED3\u679C</li><li>Direct \u7C7B\u578B Exchange\u4E5F\u53EF\u4EE5\u7ED1\u5B9A\u591A\u6761Queue,\u5E76\u4E14\u6BCF\u6761Queue\u90FD\u53EF\u4EE5\u6536\u5230\u6D88\u606F</li><li>Fanout \u7C7B\u578B\u8BA2\u9605-\u53D1\u5E03\u6A21\u5F0F, routerKey\u65E0\u6548</li><li>Topic\u7C7B\u578B\u5E7F\u64AD\u6A21\u5F0F,\u5728\u5E7F\u64AD\u662F\u4F1A\u5339\u914D\u6A21\u5F0F\u7684 - routerKey</li></ol><ul><li>Direct - p2p</li><li>Fanout - \u5E7F\u64AD</li><li>Topic - \u5E7F\u64AD (routeKey \u7B5B\u9009)</li><li>Header - \u5E7F\u64AD (header \u5C5E\u6027\u7B5B\u9009)</li></ul><h3 id="\u6027\u80FD\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD\u5BF9\u6BD4" aria-hidden="true">#</a> \u6027\u80FD\u5BF9\u6BD4</h3><p>Direct: 267ms</p><p>Fanout: 256ms</p><p>Topic: 323ms</p><p>Header: 308ms</p><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2><h3 id="\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a> \u4F18\u70B9</h3><ol><li><p>\u9AD8\u5E76\u53D1\u8FDE\u63A5</p><blockquote><p>\u5B98\u65B9\u6570\u636E5W\u5E76\u53D1,\u5B9E\u9645\u751F\u4EA7\u73AF\u58832~3W</p></blockquote></li><li><p>\u5185\u5B58\u6D88\u8017\u5C11</p></li><li><p>\u914D\u7F6E\u6587\u4EF6\u7B80\u5355</p></li><li><p>\u6210\u672C\u4F4E\u5EC9</p></li><li><p>\u652F\u6301Rewrite\u91CD\u5199\u89C4\u5219</p></li><li><p>\u5185\u7F6E\u5065\u5EB7\u68C0\u67E5\u529F\u80FD</p></li><li><p>\u8282\u7701\u5E26\u5BBD</p></li><li><p>\u7A33\u5B9A\u6027\u9AD8</p></li></ol><h3 id="alpine" tabindex="-1"><a class="header-anchor" href="#alpine" aria-hidden="true">#</a> alpine</h3><p>\u8F83centos\u6216ubantu\u6BD4\u7CFB\u7EDF\u5C0F,\u9002\u5408\u5BB9\u5668\u5316\u90E8\u7F72</p><p>\u4F7F\u7528<code>apk add</code>\u8FDB\u884C\u5B89\u88C5</p><h3 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h3><p><code>nginx -c \u914D\u7F6E\u6587\u4EF6</code></p><p><code>nginx -t</code>\u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u8BED\u6CD5\u662F\u5426\u6B63\u786E</p><p><code>nginx reload</code> \u70ED\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6</p><h3 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h3><p>nginx.conf</p><h4 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h4><p>\u6307\u5411\u8BBF\u95EE\u8DEF\u5F84</p><h4 id="\u5185\u6838\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u5185\u6838\u6A21\u5757" aria-hidden="true">#</a> \u5185\u6838\u6A21\u5757</h4><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>user nobody;

worker_processes 4;

#\u6D89\u53CA\u5F02\u6B65IO,\u4E0D\u5EFA\u8BAE\u8BBE\u7F6E\u8FC7\u5927,\u4E00\u822C\u4E3A\`CPU\u6838\u5FC3X2\`

error log file [debug|info|notice|warn|error|crit]
\u9ED8\u8BA4\u503C \${prefix}/logs/error.log
\u4E0A\u4E0B\u6587 http, server, location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4E8B\u4EF6\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u6A21\u5757" aria-hidden="true">#</a> \u4E8B\u4EF6\u6A21\u5757</h4><blockquote><p>\u91C7\u7528\u5B8C\u5168\u5F02\u6B65\u5F62\u5F0F,\u533A\u522B\u4E8Etomcat</p></blockquote><h3 id="\u53CD\u5411\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a> \u53CD\u5411\u4EE3\u7406</h3><blockquote><p>\u76F8\u5BF9\u4E8E\u4EBA\u6765\u8BF4\u662F\u4E0D\u53EF\u611F\u77E5\u7684,\u7531\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u5B8C\u6210\u6D41\u91CF\u5206\u53D1,\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861</p></blockquote><h3 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> docker-compose</h3><p>\u4F7F\u7528<code>dockr-compose.yml</code>\u8FDB\u884C\u8F7B\u91CF\u7EA7\u7684\u5BB9\u5668\u7F16\u6392</p><p><code>links</code> \u5BB9\u5668\u5185\u90E8\u7684\u94FE\u63A5</p><p><code>depends_on</code> \u5BB9\u5668\u7684\u542F\u52A8\u987A\u5E8F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server{	
	listen 80 default_server;
	listen[::]:80 default_server
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58" aria-hidden="true">#</a> \u7F13\u5B58</h3><p>\u8003\u8651\u4E00\u81F4\u6027\u7684\u9700\u8981,\u5408\u7406\u8BBE\u7F6E</p><h3 id="rewrite" tabindex="-1"><a class="header-anchor" href="#rewrite" aria-hidden="true">#</a> Rewrite</h3><p>\u5BF9\u5173\u952E\u4EE3\u7801\u8FDB\u884C\u91CD\u5199</p><p>\u652F\u6301<strong>\u6B63\u5219\u8868\u8FBE\u5F0F</strong></p><h3 id="\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316" aria-hidden="true">#</a> \u4F18\u5316</h3><h4 id="worker\u6570\u76EE\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#worker\u6570\u76EE\u8BBE\u7F6E" aria-hidden="true">#</a> worker\u6570\u76EE\u8BBE\u7F6E</h4><p>\u6700\u5927\u4E3A: \u6838\u6570X2</p><h4 id="\u4F7F\u7528epoll" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528epoll" aria-hidden="true">#</a> \u4F7F\u7528epoll</h4><p>useepoll;</p><h3 id="\u5173\u95ED\u8BBF\u95EE\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u8BBF\u95EE\u65E5\u5FD7" aria-hidden="true">#</a> \u5173\u95ED\u8BBF\u95EE\u65E5\u5FD7</h3><p>access_log off;</p><h4 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h4><p>work_connections \u8FDE\u63A5\u6570</p><p>....</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><p>\u76F8\u5173\u8F6F\u4EF6\u5B89\u88C5\u53C2\u8003\u5730\u5740\u4E3Ahttps://www.mls-tech.info</p>`,74),o=[n];function c(l,h){return a(),i("div",null,o)}const p=e(d,[["render",c],["__file","OpenSourceSoftware.html.vue"]]);export{p as default};
