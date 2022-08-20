/**
 * name: @lunarxyz/core
 * version: v0.35.0
 * description: The JS-SDK of Lunarxyz App, provides simple APIs to operate.
 * author: chengpeiquan <chengpeiquan@chengpeiquan.com>
 * homepage: https://lunarxyz.github.io
 */
import{f as l,c as p,d as u,e as s,t as e,u as a,a as t,o as r}from"./app.034721d2.js";const F="@lunarxyz/monorepo",c="The JS-SDK of Lunarxyz App, provides simple APIs to operate.",i="0.0.0",D="chengpeiquan <chengpeiquan@chengpeiquan.com>",C="MIT",d="https://lunarxyz.github.io",E=["packages/*"],A={dev:"vitepress dev --host",build:"run-s build:*","build:docs":"vitepress build","build:core":"tsc --noEmit && vite build packages/core","build:types":"esno scripts/buildTypes",preview:"vitepress serve",lint:"eslint src --ext .js,.ts",test:"vitest",coverage:"vitest --coverage",format:"prettier --write .",backup:'git add . && git commit -m "chore: backup" && git push',up:"npx npm-check-updates -u",release:"npm publish --workspaces --access public","release:alpha":"npm publish --workspaces --access public --tag alpha"},y={axios:"^0.27.2","date-fns":"^2.29.1","lodash-es":"^4.17.21",vue:"^3.2.37"},h={"@babel/types":"^7.18.10","@typescript-eslint/eslint-plugin":"^5.30.7","@typescript-eslint/parser":"^5.30.7","dts-bundle-generator":"^6.12.0",eslint:"^8.20.0","eslint-config-prettier":"^8.5.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-vue":"^9.3.0",esno:"^0.16.3","lint-staged":"^13.0.3","npm-run-all":"^4.1.5",prettier:"^2.7.1",typescript:"^4.7.4",vite:"^3.0.9","vite-plugin-banner":"^0.3.0",vitepress:"^1.0.0-alpha.9",vitest:"^0.19.0",yorkie:"^2.0.0"},g={"pre-commit":"lint-staged","commit-msg":"esno ./scripts/verifyCommit.ts"},B={name:F,description:c,version:i,author:D,license:C,homepage:d,private:!0,workspaces:E,scripts:A,dependencies:y,devDependencies:h,gitHooks:g,"lint-staged":{"*.js":["prettier --write"],"*.ts?(x)":["prettier --parser=typescript --write"]}},m=u("h1",{id:"uselodash",tabindex:"-1"},[s("useLodash "),u("a",{class:"header-anchor",href:"#uselodash","aria-hidden":"true"},"#")],-1),b=u("p",null,"\u5BF9 Lodash \u8FDB\u884C\u4E86 ES \u6A21\u5757\u5316\u548C Tree Shaking \u652F\u6301\u3002",-1),v=u("h2",{id:"\u4E3A\u4EC0\u4E48",tabindex:"-1"},[s("\u4E3A\u4EC0\u4E48 "),u("a",{class:"header-anchor",href:"#\u4E3A\u4EC0\u4E48","aria-hidden":"true"},"#")],-1),_=u("a",{href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore",target:"_blank",rel:"noreferrer"},"\u4E0D\u518D\u9700\u8981\u4F7F\u7528 Lodash",-1),f=s(" \u4E86\uFF0C\u4F46\u4E5F\u5E76\u4E0D\u53CD\u5BF9\u7EE7\u7EED\u4F7F\u7528\u5B83\uFF0C\u56E0\u4E3A\u5B83\u4F9D\u7136\u662F\u4E00\u4E2A\u975E\u5E38\u4F18\u79C0\u7684\u5DE5\u5177\u5E93\u3002"),k=t(`<p>\u90A3\u4E3A\u4EC0\u4E48\u6211\u8FD8\u8981\u96C6\u6210\u8FDB\u6765\u5462\uFF1F\u56E0\u4E3A\u6211\u53D1\u73B0\uFF0C\u5F88\u591A\u4F7F\u7528 Lodash \u7684\u540C\u5B66\u90FD\u6CA1\u6709\u57F9\u517B\u4E00\u4E2A\u6309\u9700\u52A0\u8F7D\u7684\u4F18\u5316\u4E60\u60EF\u3002</p><p>\u5728\u6211\u89C1\u8FC7\u7684\u9879\u76EE\u91CC\uFF0C\u51E0\u4E4E\u90FD\u662F\u6574\u5305\u5BFC\u5165 Lodash \uFF0C\u800C\u5B9E\u9645\u4E0A\u53EF\u80FD\u53EA\u7528\u5230\u5176\u4E2D\u7684\u4E00\u4E24\u4E2A\u51FD\u6570\uFF0C\u4F8B\u5982 <code>debounce</code> \u548C <code>throttle</code> \u6216\u8005 <code>cloneDeep</code> \u3002</p><p>\u5B8C\u6574\u7248\u7684 Lodash \u662F\u975E\u5E38\u5927\u7684\uFF0C\u53EF\u80FD\u4F60\u538B\u7F29\u7684\u5341\u51E0\u5F20\u56FE\u7247\u7684\u5927\u5C0F\uFF0C\u8FD8\u6CA1\u6709\u4E00\u4E2A Lodash \u5305\u5927\uFF08\u5F53\u524D\u7248\u672C\u6E90\u5305 1.41MB \uFF0C\u538B\u7F29\u540E\u4E5F\u6709 500 \u591A KB \uFF0C\u800C\u6309\u9700\u5F15\u5165\u4E4B\u540E\u53EA\u6709\u51E0 KB \uFF0C\u53EF\u70B9\u51FB <a href="https://medium.com/starbugs/the-correct-way-to-import-lodash-libraries-bdf613235927" target="_blank" rel="noreferrer">\u6574\u5305\u5F15\u5165\u548C\u6309\u9700\u52A0\u8F7D\u7684\u5927\u5C0F\u5DEE\u8DDD\u5BF9\u6BD4</a> \u67E5\u770B\u6D4B\u8BD5\u62A5\u544A\uFF09\u3002</p><h2 id="\u5982\u4F55\u6309\u9700\u52A0\u8F7D" tabindex="-1">\u5982\u4F55\u6309\u9700\u52A0\u8F7D <a class="header-anchor" href="#\u5982\u4F55\u6309\u9700\u52A0\u8F7D" aria-hidden="true">#</a></h2><p>\u672C\u5305\u5DF2\u5BF9 Lodash \u505A\u4E86 Tree Shaking \u652F\u6301\uFF0C\u65E0\u9700\u518D\u6B21\u5B89\u88C5 Lodash \uFF0C\u4F60\u53EA\u9700\u8981\u548C\u5176\u4ED6 use \u51FD\u6570\u4E00\u6837\uFF0C\u9075\u5FAA Hooks \u98CE\u683C\u7684\u5BFC\u5165\u548C\u5B50\u65B9\u6CD5\u4F7F\u7528\u3002</p><ul><li>Example:</li></ul><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello World</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;">// \u5BFC\u5165 Lodash</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useLodash</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lunarxyz/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4F7F\u7528\u9632\u6296\u51FD\u6570</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> debounce </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useLodash</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> handleClick </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">debounce</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">debounce</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="api-\u6587\u6863" tabindex="-1">API \u6587\u6863 <a class="header-anchor" href="#api-\u6587\u6863" aria-hidden="true">#</a></h2><p>\u652F\u6301 Lodash \u7684\u6240\u6709 API \uFF0C\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u5B98\u65B9\u6587\u6863\u7684\u4F7F\u7528\u8BF4\u660E\u3002</p><p>\u5B98\u65B9\u6700\u65B0\u6587\u6863\uFF1A <a href="https://lodash.com/docs/" target="_blank" rel="noreferrer">https://lodash.com/docs/</a></p><p>\u56FD\u5185\u7FFB\u8BD1\u6587\u6863\uFF1A <a href="https://www.lodashjs.com/" target="_blank" rel="noreferrer">https://www.lodashjs.com/</a></p><h2 id="\u5F53\u524D\u96C6\u6210\u7248\u672C" tabindex="-1">\u5F53\u524D\u96C6\u6210\u7248\u672C <a class="header-anchor" href="#\u5F53\u524D\u96C6\u6210\u7248\u672C" aria-hidden="true">#</a></h2>`,12),x=s("\u76EE\u524D\u96C6\u6210\u7684 Lodash \u7248\u672C\u53F7\u4E3A "),L=s(" \u3002"),w=u("p",null,[s("\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5E38\u7528\u7684\u65B9\u6CD5\u90FD\u80FD\u591F\u8986\u76D6\u5230\uFF0C\u5E76\u4E14 Lodash \u672C\u8EAB\u7684\u7248\u672C\u66F4\u65B0\u4E5F\u4E0D\u662F\u5F88\u9891\u7E41\uFF0C\u5982\u679C\u5728\u4F7F\u7528\u7684\u8FC7\u7A0B\u4E2D\u9700\u8981\u5347\u7EA7 Lodash \u7684\u7248\u672C\uFF0C\u8BF7\u8054\u7CFB\u672C\u5305\u7684\u7EF4\u62A4\u8005 "),u("a",{href:"dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=somemore"},"@\u7A0B\u6C9B\u6743"),s(" \u3002")],-1),P=JSON.parse('{"title":"useLodash","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48","slug":"\u4E3A\u4EC0\u4E48"},{"level":2,"title":"\u5982\u4F55\u6309\u9700\u52A0\u8F7D","slug":"\u5982\u4F55\u6309\u9700\u52A0\u8F7D"},{"level":2,"title":"API \u6587\u6863","slug":"api-\u6587\u6863"},{"level":2,"title":"\u5F53\u524D\u96C6\u6210\u7248\u672C","slug":"\u5F53\u524D\u96C6\u6210\u7248\u672C"}],"relativePath":"core/utils/lodash/index.md"}'),S={name:"core/utils/lodash/index.md"},j=l({...S,setup(q){const n=B.dependencies["lodash-es"],o=new Date().getFullYear();return(T,I)=>(r(),p("div",null,[m,b,v,u("p",null,[s("\u867D\u7136 "+e(a(o))+" \u7684\u4ECA\u5929\uFF0C ES6+ \u5F88\u591A\u539F\u751F\u7684\u5B9E\u73B0\u5DF2\u7ECF\u975E\u5E38\u7B80\u5355\uFF0C\u5927\u90E8\u5206\u60C5\u51B5\u4E0B ",1),_,f]),k,u("p",null,[x,u("code",null,e(a(n)),1),L]),w]))}});export{P as __pageData,j as default};
