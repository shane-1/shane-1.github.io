import{_ as l,r as o,o as s,c as a,a as i,b as d,d as e,e as t}from"./app.838aae74.js";const r="/images/2020-11-25-15-25-50.png",c={},u=i("h1",{id:"windows\u6587\u4EF6\u5728linux\u8FD0\u884C\u4E0D\u6B63\u5E38",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#windows\u6587\u4EF6\u5728linux\u8FD0\u884C\u4E0D\u6B63\u5E38","aria-hidden":"true"},"#"),e(" windows\u6587\u4EF6\u5728linux\u8FD0\u884C\u4E0D\u6B63\u5E38")],-1),p=e("\u8F6C\u8F7D\u81EA"),x={href:"http://www.92csz.com/",target:"_blank",rel:"noopener noreferrer"},f=e("moon's Blog"),h=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>env: /etc/init.d/nginx: No such <span class="token function">file</span> or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u539F\u56E0" aria-hidden="true">#</a> \u539F\u56E0\uFF1A</h2><p>\u5728windows\u4E0B\u4FEE\u6539\u6587\u4EF6\u7684\u65F6\u5019\u6362\u884C\u7B26\u51FA\u7684\u95EE\u9898\u3002</p><p>windows\u548Clinux\u4E0B\u7684\u6362\u884C\u7B26\u662F\u4E0D\u540C\u7684\u3002\u4E00\u822C\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u7684\u8FD0\u884C\u5E93\u4F1A\u81EA\u52A8\u51B3\u5B9A\u6587\u672C\u6587\u4EF6\u7684\u6362\u884C\u683C\u5F0F. \u5982\u4E00\u4E2A\u7A0B\u5E8F\u5728windows\u4E0A\u8FD0\u884C\u5C31\u751F\u6210CR/LF\u6362\u884C\u683C\u5F0F\u7684\u6587\u672C\u6587\u4EF6\uFF0C\u800C\u5728linux\u4E0A\u8FD0\u884C\u5C31\u751F\u6210LF\u683C\u5F0F\u6362\u884C\u7684\u6587\u672C\u6587\u4EF6. \u5728\u4E00\u4E2A\u5E73\u53F0\u4E0A\u4F7F\u7528\u53E6\u4E00\u79CD\u6362\u884C\u7B26\u7684\u6587\u4EF6\u6587\u4EF6\u53EF\u80FD\u4F1A\u5E26\u6765\u610F\u60F3\u4E0D\u5230\u7684\u95EE\u9898, \u7279\u522B\u662F\u5728\u7F16\u8F91\u7A0B\u5E8F\u4EE3\u7801\u65F6. \u6709\u65F6\u5019\u4EE3\u7801\u5728\u7F16\u8F91\u5668\u4E2D\u663E\u793A\u6B63\u5E38, \u4F46\u5728\u7F16\u8F91\u65F6\u5374\u4F1A\u56E0\u4E3A\u6362\u884C\u7B26\u95EE\u9898\u800C\u51FA\u9519. \u5F88\u591A\u6587\u672C/\u4EE3\u7801\u7F16\u8F91\u5668\u5E26\u6709\u6362\u884C\u7B26\u8F6C\u6362\u529F\u80FD, \u4F7F\u7528\u8FD9\u4E2A\u529F\u80FD\u53EF\u4EE5\u5C06\u6587\u672C\u6587\u4EF6\u4E2D\u7684\u6362\u884C\u7B26\u5728\u4E0D\u540C\u683C\u5F0F\u5355\u4E92\u6362.</p><p>\u5728\u4E0D\u540C\u5E73\u53F0\u95F4\u4F7F\u7528FTP\u8F6F\u4EF6\u4F20\u9001\u6587\u4EF6\u65F6, \u5728ascii\u6587\u672C\u6A21\u5F0F\u4F20\u8F93\u6A21\u5F0F\u4E0B, \u4E00\u4E9BFTP\u5BA2\u6237\u7AEF\u7A0B\u5E8F\u4F1A\u81EA\u52A8\u5BF9\u6362\u884C\u683C\u5F0F\u8FDB\u884C\u8F6C\u6362. \u7ECF\u8FC7\u8FD9\u79CD\u4F20\u8F93\u7684\u6587\u4EF6\u5B57\u8282\u6570\u53EF\u80FD\u4F1A\u53D1\u751F\u53D8\u5316. \u5982\u679C\u4F60\u4E0D\u60F3ftp\u4FEE\u6539\u539F\u6587\u4EF6, \u53EF\u4EE5\u4F7F\u7528bin\u6A21\u5F0F(\u4E8C\u8FDB\u5236\u6A21\u5F0F)\u4F20\u8F93\u6587\u672C.</p><h2 id="\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3" aria-hidden="true">#</a> \u89E3\u51B3\uFF1A</h2><p>\u5728linux\u4E0B\u7528dos2unix filename\u8F6C\u6362\u4E00\u6B21\u4E4B\u540E\uFF0C\u6210\u529F\u89E3\u51B3\u95EE\u9898\u3002</p><p>dos2unix\u547D\u4EE4\u7528\u6765\u5C06DOS\u683C\u5F0F\u7684\u6587\u672C\u6587\u4EF6\u8F6C\u6362\u6210UNIX\u683C\u5F0F\u7684\uFF08DOS/MAC to UNIX text file format converter\uFF09\u3002DOS\u4E0B\u7684\u6587\u672C\u6587\u4EF6\u662F\u4EE5\\r\\n\u4F5C\u4E3A\u65AD\u884C\u6807\u5FD7\u7684\uFF0C\u8868\u793A\u6210\u5341\u516D\u8FDB\u5236\u5C31\u662F0D 0A\u3002\u800CUnix\u4E0B\u7684\u6587\u672C\u6587\u4EF6\u662F\u4EE5\\n\u4F5C\u4E3A\u65AD\u884C\u6807\u5FD7\u7684\uFF0C\u8868\u793A\u6210\u5341\u516D\u8FDB\u5236\u5C31\u662F 0A\u3002DOS\u683C\u5F0F\u7684\u6587\u672C\u6587\u4EF6\u5728Linux\u5E95\u4E0B\uFF0C\u7528\u8F83\u4F4E\u7248\u672C\u7684vi\u6253\u5F00\u65F6\u884C\u5C3E\u4F1A\u663E\u793A^M\uFF0C\u800C\u4E14\u5F88\u591A\u547D\u4EE4\u90FD\u65E0\u6CD5\u5F88\u597D\u7684\u5904\u7406\u8FD9\u79CD\u683C\u5F0F\u7684\u6587\u4EF6\uFF0C\u5982\u679C\u662F\u4E2Ashell\u811A\u672C\uFF0C\u3002\u800CUnix\u683C\u5F0F\u7684\u6587\u672C\u6587\u4EF6\u5728Windows\u4E0B\u7528Notepad\u6253\u5F00\u65F6\u4F1A\u62FC\u5728\u4E00\u8D77\u663E\u793A\u3002\u56E0\u6B64\u4EA7\u751F\u4E86\u4E24\u79CD\u683C\u5F0F\u6587\u4EF6\u76F8\u4E92\u8F6C\u6362\u7684\u9700\u6C42\uFF0C\u5BF9\u5E94\u7684\u5C06UNIX\u683C \u5F0F\u6587\u672C\u6587\u4EF6\u8F6C\u6210\u6210DOS\u683C\u5F0F\u7684\u662Funix2dos\u547D\u4EE4\u3002 \u5E38\u7528\u53C2\u6570\uFF1A</p><p>\u5C06DOS\u683C\u5F0F\u6587\u672C\u6587\u4EF6\u8F6C\u6362\u6210Unix\u683C\u5F0F\uFF0C\u6700\u7B80\u5355\u7684\u7528\u6CD5\u5C31\u662Fdos2unix\u76F4\u63A5\u8DDF\u4E0A\u6587\u4EF6\u540D\u3002</p><ul><li>\u683C\u5F0F\uFF1Ados2unix file</li></ul><p>\u5982\u679C\u4E00\u6B21\u8F6C\u6362\u591A\u4E2A\u6587\u4EF6\uFF0C\u628A\u8FD9\u4E9B\u6587\u4EF6\u540D\u76F4\u63A5\u8DDF\u5728dos2unix\u4E4B\u540E\u3002\uFF08\u6CE8\uFF1A\u4E5F\u53EF\u4EE5\u52A0\u4E0A-o\u53C2\u6570\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u52A0\uFF0C\u6548\u679C\u4E00\u6837\uFF09</p><ul><li><p>\u683C\u5F0F\uFF1Ados2unix file1 file2 file3</p></li><li><p>\u683C\u5F0F\uFF1Ados2unix -o file1 file2 file3</p></li></ul><p>\u4E0A\u9762\u5728\u8F6C\u6362\u65F6\uFF0C\u90FD\u4F1A\u76F4\u63A5\u5728\u539F\u6765\u7684\u6587\u4EF6\u4E0A\u4FEE\u6539\uFF0C\u5982\u679C\u60F3\u628A\u8F6C\u6362\u7684\u7ED3\u679C\u4FDD\u5B58\u5728\u522B\u7684\u6587\u4EF6\uFF0C\u800C\u6E90\u6587\u4EF6\u4E0D\u53D8\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528-n\u53C2\u6570\u3002</p><ul><li>\u683C\u5F0F\uFF1Ados2unix oldfile newfile</li></ul><p>\u5982\u679C\u8981\u4FDD\u6301\u6587\u4EF6\u65F6\u95F4\u6233\u4E0D\u53D8\uFF0C\u52A0\u4E0A-k\u53C2\u6570\u3002\u6240\u4EE5\u4E0A\u9762\u51E0\u6761\u547D\u4EE4\u90FD\u662F\u53EF\u4EE5\u52A0\u4E0A-k\u53C2\u6570\u6765\u4FDD\u6301\u6587\u4EF6\u65F6\u95F4\u6233\u7684\u3002</p><ul><li><p>\u683C\u5F0F\uFF1Ados2unix -k file</p></li><li><p>\u683C\u5F0F\uFF1Ados2unix -k file1 file2 file3</p></li><li><p>\u683C\u5F0F\uFF1Ados2unix -k -o file1 file2 file3</p></li><li><p>\u683C\u5F0F\uFF1Ados2unix -k -n oldfile newfile</p></li></ul><blockquote><p>\u6CE8\uFF1Aunix2dos\u547D\u4EE4\u7684\u4F7F\u7528\u65B9\u5F0F\u4E0Edos2unix\u547D\u4EE4\u7684\u7C7B\u4F3C\u3002</p></blockquote><p><img src="`+r+'" alt=""></p><ul><li>cat -v\u53EF\u4EE5\u770B\u5230\u6587\u4EF6\u4E2D\u7684\u975E\u6253\u5370\u5B57\u7B26\uFF0C\u800C\u4E0D\u5E26-v\u53C2\u6570\u7684cat\u547D\u4EE4\u4E0D\u884C\u3002 hexdump -C\u53EF\u4EE5\u770B\u5230\u6587\u4EF6\u6BCF\u4E2A\u5B57\u8282\u7684\u5341\u516D\u8FDB\u5236\u8868\u793A\u3002</li></ul>',19);function _(m,w){const n=o("ExternalLinkIcon");return s(),a("div",null,[u,i("p",null,[p,i("a",x,[f,d(n)])]),h])}const v=l(c,[["render",_],["__file","WindowsLinuxError.html.vue"]]);export{v as default};
