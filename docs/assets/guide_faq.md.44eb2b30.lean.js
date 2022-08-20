/**
 * name: @lunarxyz/core
 * version: v0.35.0
 * description: The JS-SDK of Lunarxyz App, provides simple APIs to operate.
 * author: chengpeiquan <chengpeiquan@chengpeiquan.com>
 * homepage: https://lunarxyz.github.io
 */
import{p as s}from"./chunks/package.2e797178.js";import{f as E,c as t,d as u,t as a,u as n,b as D,e as F,a as e,o as c,r as C}from"./app.034721d2.js";const r=u("h1",{id:"\u5E38\u89C1\u95EE\u9898",tabindex:"-1"},[F("\u5E38\u89C1\u95EE\u9898 "),u("a",{class:"header-anchor",href:"#\u5E38\u89C1\u95EE\u9898","aria-hidden":"true"},"#")],-1),A=u("h2",{id:"vue-\u652F\u6301\u54EA\u4E2A\u7248\u672C\uFF1F",tabindex:"-1"},[F("Vue \u652F\u6301\u54EA\u4E2A\u7248\u672C\uFF1F "),u("a",{class:"header-anchor",href:"#vue-\u652F\u6301\u54EA\u4E2A\u7248\u672C\uFF1F","aria-hidden":"true"},"#")],-1),d=F("\u672C\u5305\u5F00\u53D1\u671F\u95F4\u6240\u7528\u7684 Vue \u7684\u7248\u672C\u4E3A "),y=F(" \uFF0C\u4FDD\u6301\u9AD8\u4E8E\u6216\u7B49\u4E8E\u8BE5\u7248\u672C\u90FD\u4E0D\u4F1A\u6709\u4F7F\u7528\u95EE\u9898\u3002"),i=e(`<p>\u5982\u679C\u60F3\u5728 Vue 2 \u4F7F\u7528\uFF0C\u8BF7\u5C1D\u8BD5\u5B89\u88C5 <a href="https://www.npmjs.com/package/@vue/composition-api" target="_blank" rel="noreferrer">@vue/composition-api</a> \u4EE5\u652F\u6301\u7EC4\u5408\u5F0F API \uFF0C\u56E0\u4E3A\u76EE\u524D\u56E2\u961F\u5747\u4F7F\u7528 Vue 3 \uFF0C\u6240\u4EE5\u5BF9 Vue 2 \u6682\u65E0\u5B9E\u9645\u6D4B\u8BD5\uFF0C\u8BF7\u81EA\u884C\u4F53\u9A8C\u3002</p><h2 id="\u53EF\u4EE5\u5728-js-\u9879\u76EE\u91CC\u4F7F\u7528\u5417\uFF1F" tabindex="-1">\u53EF\u4EE5\u5728 JS \u9879\u76EE\u91CC\u4F7F\u7528\u5417\uFF1F <a class="header-anchor" href="#\u53EF\u4EE5\u5728-js-\u9879\u76EE\u91CC\u4F7F\u7528\u5417\uFF1F" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\uFF0C\u672C\u5305\u6784\u5EFA\u51FA\u6765\u540E\u662F\u4E00\u4E2A\u5E26\u6709 <code>.d.ts</code> \u7C7B\u578B\u652F\u6301\u7684 <code>.js</code> \u6587\u4EF6\uFF0C\u6240\u4EE5\u4E5F\u53EF\u4EE5\u5728 JavaScript \u9879\u76EE\u91CC\u4F7F\u7528\u3002</p><h2 id="\u96C6\u6210\u7684\u5DE5\u5177\u5E93\u662F\u5426\u9700\u8981\u5355\u72EC\u5B89\u88C5\uFF1F" tabindex="-1">\u96C6\u6210\u7684\u5DE5\u5177\u5E93\u662F\u5426\u9700\u8981\u5355\u72EC\u5B89\u88C5\uFF1F <a class="header-anchor" href="#\u96C6\u6210\u7684\u5DE5\u5177\u5E93\u662F\u5426\u9700\u8981\u5355\u72EC\u5B89\u88C5\uFF1F" aria-hidden="true">#</a></h2><p>\u4E0D\u9700\u8981\uFF0C\u4F8B\u5982 <code>axios</code> \u4F1A\u81EA\u52A8\u6DFB\u52A0\u5230\u9879\u76EE\u91CC\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>useAxios()</code> \u76F4\u63A5\u4F7F\u7528\uFF0C\u5982\u679C\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u6700\u7EC8\u6CA1\u6709\u4F7F\u7528\u5230\uFF0C\u90A3\u4E48\u5728\u6784\u5EFA\u7F16\u8BD1\u7684\u65F6\u5019\u4F1A\u88AB\u820D\u5F03\uFF0C\u4E0D\u4F1A\u4F5C\u4E3A\u6784\u5EFA\u4EA7\u7269\u4E00\u8D77\u8F93\u51FA\u3002</p><p>\u9664\u4E86 <code>ali-oss</code> \uFF08<a href="./../core/network/upload/#usage-tips">\u67E5\u770B\u8BE6\u60C5</a>\uFF09\u3002</p><h2 id="\u5982\u679C\u6709\u547D\u540D\u51B2\u7A81\u600E\u4E48\u5904\u7406\uFF1F" tabindex="-1">\u5982\u679C\u6709\u547D\u540D\u51B2\u7A81\u600E\u4E48\u5904\u7406\uFF1F <a class="header-anchor" href="#\u5982\u679C\u6709\u547D\u540D\u51B2\u7A81\u600E\u4E48\u5904\u7406\uFF1F" aria-hidden="true">#</a></h2><p>\u65B9\u6CD5\u5728 <code>import</code> \u7684\u65F6\u5019\u53EF\u4EE5\u7528 <code>as</code> \u5173\u952E\u5B57\u91CD\u547D\u540D\uFF0C\u4F8B\u5982 <code>packageA</code> \u548C <code>packageB</code> \u90FD\u5BFC\u51FA\u4E86 <code>fun()</code> \u51FD\u6570\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u8FD9\u6837\u91CD\u547D\u540D\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// \u7528 \`as\` \u5173\u952E\u5B57\u91CD\u547D\u540D</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fun</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">funA</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">packageA</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fun</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">funB</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">packageB</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u8C03\u7528 packageA \u91CC\u7684 fun \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#82AAFF;">funA</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u8C03\u7528 packageB \u91CC\u7684 fun \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#82AAFF;">funB</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u662F\u8FD4\u56DE\u7684\u53D8\u91CF\u540D\u51B2\u7A81\uFF0C\u53EF\u4EE5\u5229\u7528 ES6 \u7684\u89E3\u6784\u91CD\u547D\u540D\u6765\u89E3\u51B3\uFF0C\u4F8B\u5982 <code>funA()</code> \u548C <code>funB()</code> \u90FD\u8FD4\u56DE\u4E86 <code>{ foo, bar }</code> \u8FD9\u4E24\u4E2A\u53D8\u91CF\uFF0C\u53EF\u4EE5\u8FD9\u6837\u8FDB\u884C\u91CD\u547D\u540D\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fooA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">bar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> barA </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">funA</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4ECE funA \u5BFC\u51FA\u7684\u53D8\u91CF</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> fooA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> barA </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fooB</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">bar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> barB </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">funB</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4ECE funB \u5BFC\u51FA\u7684\u53D8\u91CF</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> fooB</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> barB </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5982\u4F55\u67E5\u8BE2\u8DE8\u7AEF\u7684\u5E73\u53F0\u652F\u6301\uFF1F" tabindex="-1">\u5982\u4F55\u67E5\u8BE2\u8DE8\u7AEF\u7684\u5E73\u53F0\u652F\u6301\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u67E5\u8BE2\u8DE8\u7AEF\u7684\u5E73\u53F0\u652F\u6301\uFF1F" aria-hidden="true">#</a></h2><p>\u5728\u6BCF\u4E2A API \u8BE6\u60C5\u91CC\uFF0C\u90FD\u6709\u4E00\u6BB5\u5982\u4E0B\u7684\u4EE3\u7801\uFF1A</p>`,13),B=e(`<p>\u8FD9\u4EE3\u8868\u8BE5 API \u662F\u5426\u652F\u6301\u5BF9\u5E94\u7684\u5E73\u53F0\uFF1A</p><table><thead><tr><th style="text-align:center;">\u5E73\u53F0\u6807\u8BC6</th><th style="text-align:left;">\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:center;">Browser</td><td style="text-align:left;">\u53EF\u5728\u6D4F\u89C8\u5668\u8BBF\u95EE\u7684 Web App</td></tr><tr><td style="text-align:center;">Electron</td><td style="text-align:left;">\u57FA\u4E8E Electron \u5F00\u53D1\u7684 GUI \u684C\u9762\u7A0B\u5E8F</td></tr><tr><td style="text-align:center;">App</td><td style="text-align:left;">\u57FA\u4E8E uni-app \u5F00\u53D1\u7684 Hybird App</td></tr><tr><td style="text-align:center;">Server</td><td style="text-align:left;">\u57FA\u4E8E Node.js \u7684\u670D\u52A1\u7AEF\u7A0B\u5E8F</td></tr><tr><td style="text-align:center;">Scriptlet</td><td style="text-align:left;">\u57FA\u4E8E Node.js \u6784\u5EFA\u7684 Non GUI \u811A\u672C\u7A0B\u5E8F</td></tr></tbody></table><h2 id="\u5982\u4F55\u533A\u5206\u8FD0\u884C\u65F6\u73AF\u5883\uFF1F" tabindex="-1">\u5982\u4F55\u533A\u5206\u8FD0\u884C\u65F6\u73AF\u5883\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u533A\u5206\u8FD0\u884C\u65F6\u73AF\u5883\uFF1F" aria-hidden="true">#</a></h2><p>\u8FD0\u884C\u65F6\u73AF\u5883\uFF08 Runtime Environment \uFF09\u662F\u7528\u4E8E\u533A\u5206\u4EE3\u7801\u7684\u8FD0\u884C\u73AF\u5883\u3002</p><p>\u901A\u5E38\u53EF\u7531\u5168\u5C40\u53D8\u91CF <code>p<wbr>rocess.env.NODE_ENV</code> \u83B7\u53D6\uFF0C\u5E38\u89C1\u7684\u53D8\u91CF\u503C\u4E3A\uFF1A\u5F00\u53D1\u73AF\u5883 <code>development</code> \u548C\u751F\u4EA7\u73AF\u5883 <code>production</code> \u3002</p><h3 id="\u524D\u7AEF\u9879\u76EE" tabindex="-1">\u524D\u7AEF\u9879\u76EE <a class="header-anchor" href="#\u524D\u7AEF\u9879\u76EE" aria-hidden="true">#</a></h3><p>\u5BF9\u4E00\u4E2A\u524D\u7AEF\u9879\u76EE\u6765\u8BF4\uFF0C\u5B83\u7684\u542B\u4E49\u7406\u89E3\u6BD4\u8F83\u7B80\u5355\uFF1A</p><table><thead><tr><th style="text-align:center;">\u53D8\u91CF\u540D</th><th style="text-align:left;">\u8FD0\u884C\u65F6\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:center;">development</td><td style="text-align:left;">\u5F00\u53D1\u73AF\u5883\uFF0C\u901A\u5E38\u53EF\u4EE5\u7406\u89E3\u4E3A\u6267\u884C <code>npm run dev</code> \u542F\u52A8\u65F6\u7684\u73AF\u5883</td></tr><tr><td style="text-align:center;">production</td><td style="text-align:left;">\u751F\u4EA7\u73AF\u5883\uFF0C\u901A\u5E38\u53EF\u4EE5\u7406\u89E3\u4E3A\u6267\u884C <code>npm run build</code> \u6784\u5EFA\u6253\u5305\u540E\uFF0C\u628A <code>dist</code> \u76EE\u5F55\u4E0B\u7684\u6784\u5EFA\u4EA7\u7269\u90E8\u7F72\u4E0A\u7EBF\u540E\u8BBF\u95EE\u7684\u73AF\u5883</td></tr></tbody></table><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5BF9\u4E00\u4E2A\u9875\u9762\u6765\u8BF4\uFF0C\u5F53\u4F60\u6253\u5305\u7684\u90A3\u4E00\u523B\u5F00\u59CB\uFF0C\u5B83\u5C31\u6C38\u8FDC\u5904\u4E8E <code>production</code> \u4E86\u3002</p><p>\u6240\u4EE5\u90E8\u7F72\u4E0A\u7EBF\u6D41\u7A0B\u91CC\u7684 \u201C\u6D4B\u8BD5\u73AF\u5883\u201D -&gt; \u201C\u9884\u53D1\u73AF\u5883\u201D -&gt; \u201C\u751F\u4EA7\u73AF\u5883\u201D \uFF0C\u5BF9\u4E8E Runtime \u6765\u8BF4\uFF0C\u672C\u8D28\u4E0A\u90FD\u662F\u4E00\u4E2A <code>production</code> \u72B6\u6001\uFF0C\u56E0\u4E3A\u4E0A\u7EBF\u524D\u9700\u8981\u8FDB\u884C\u6784\u5EFA\u6253\u5305\uFF0C\u4E0A\u7EBF\u8BBF\u95EE\u7684\u4E5F\u90FD\u662F\u6784\u5EFA\u540E\u7684\u9759\u6001\u4EE3\u7801\uFF0C\u548C\u9879\u76EE\u672C\u8EAB\u5DF2\u7ECF\u6CA1\u6709\u5173\u7CFB\u4E86\u3002</p><h3 id="\u670D\u52A1\u7AEF\u9879\u76EE" tabindex="-1">\u670D\u52A1\u7AEF\u9879\u76EE <a class="header-anchor" href="#\u670D\u52A1\u7AEF\u9879\u76EE" aria-hidden="true">#</a></h3><p>\u5BF9\u4E8E\u670D\u52A1\u7AEF\u9879\u76EE\uFF0C\u8FD9\u4E2A\u6982\u5FF5\u7684\u6269\u5C55\u6027\u5C31\u4F1A\u591A\u4E86\u5F88\u591A\u3002</p><p>\u670D\u52A1\u7AEF\u4EE3\u7801\u548C\u524D\u7AEF\u4EE3\u7801\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u90FD\u662F\u76F4\u63A5\u8FD0\u884C\u4EE3\u7801\uFF0C\u4F8B\u5982 <code>Express</code> \uFF0C\u542F\u52A8\u670D\u52A1\u5C31\u662F\u76F4\u63A5\u8FD0\u884C\u4F60\u7684\u6E90\u7801\uFF0C\u54EA\u6015\u662F <code>Nest</code> \u8FD9\u79CD TypeScript \u6784\u5EFA\u7684\u670D\u52A1\u7AEF\u9879\u76EE\uFF0C\u867D\u7136\u9700\u8981\u6253\u5305\u540E\u518D\u8FD0\u884C\uFF0C\u4F46\u542F\u52A8\u670D\u52A1\u4F9D\u7136\u4E5F\u662F\u5728\u9879\u76EE\u4E0B\u9762\u8DD1\u7F16\u8BD1\u540E\u7684 JavaScript \u4EE3\u7801\uFF0C\u90E8\u7F72\u7684\u4EE3\u7801\u65E0\u6CD5\u8131\u79BB\u9879\u76EE\u672C\u8EAB\u72EC\u7ACB\u8FD0\u884C\u3002</p><p>\u6240\u4EE5\u670D\u52A1\u7AEF\u4E0D\u7BA1\u662F\u672C\u5730\u5F00\u53D1\uFF0C\u8FD8\u662F\u90E8\u7F72\u4E0A\u7EBF\uFF0C\u542F\u52A8\u7684\u65F6\u5019\u90FD\u662F\u5904\u4E8E\u4E00\u4E2A \u201C\u8FD0\u884C\u65F6\u201D \u7684\u6982\u5FF5\uFF0C\u56E0\u6B64\u8FD0\u884C\u65F6\u53D8\u91CF\u662F\u53EF\u4EE5\u6839\u636E\u542F\u52A8\u547D\u4EE4\u6765\u6307\u5B9A\u3002</p><h3 id="\u914D\u7F6E\u8FD0\u884C\u65F6\u73AF\u5883\u53D8\u91CF" tabindex="-1">\u914D\u7F6E\u8FD0\u884C\u65F6\u73AF\u5883\u53D8\u91CF <a class="header-anchor" href="#\u914D\u7F6E\u8FD0\u884C\u65F6\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a></h3><p>\u7531\u4E8E\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u547D\u4EE4\u6709\u6240\u5DEE\u5F02\uFF0C\u6211\u4EEC\u901A\u5E38\u4F7F\u7528 <a href="https://github.com/kentcdodds/cross-env" target="_blank" rel="noreferrer">cross-env</a> \u8FD9\u4E2A\u5305\u6765\u5E2E\u6211\u4EEC\u62B9\u5E73\u5DEE\u5F02\u5316\u3002</p><p>\u9996\u5148\u4F60\u8981\u5728\u9879\u76EE\u91CC\u5C06\u5B83\u5B89\u88C5\u5230 <code>devDependencies</code> \u91CC\uFF1A</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add -D cross-env</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u540E\u6253\u5F00\u9879\u76EE\u7684 <code>package.json</code> \uFF0C\u5728 <code>scripts</code> \u90E8\u5206\u589E\u52A0\u73AF\u5883\u533A\u5206\u7684\u811A\u672C\u4EE3\u7801\u3002</p><p>\u8BED\u6CD5\u4E3A <code>cross-env NODE_ENV=%ENV_VAR%</code> \uFF0C\u8FD9\u91CC\u7684 <code>%ENV_VAR%</code> \u5C31\u662F\u5BF9\u5E94\u7684\u73AF\u5883\u53D8\u91CF\u3002</p><p>\u4EE5 Nest \u9879\u76EE\u4E3A\u4F8B\uFF0C\u5B83\u542F\u52A8 <code>development</code> \u548C <code>production</code> \u7684\u811A\u672C\u4E3A\uFF1A</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">start:dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cross-env NODE_ENV=development nest start --watch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">start:prod</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cross-env NODE_ENV=production node dist/main.js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u6837\u5F53\u8FD0\u884C <code>yarn start:dev</code> \u65F6\uFF0C\u670D\u52A1\u7AEF\u4EE3\u7801\u83B7\u53D6\u5230\u7684\u73AF\u5883\u53D8\u91CF\u5C31\u662F <code>development</code> \uFF0C\u53EF\u4EE5\u67E5\u8BE2\u6D4B\u8BD5\u73AF\u5883\u7684\u6570\u636E\u5E93\u3002</p><p>\u8FD0\u884C <code>yarn start:prod</code> \u65F6\uFF0C\u83B7\u53D6\u5230\u7684\u73AF\u5883\u53D8\u91CF\u5C31\u662F <code>production</code> \uFF0C\u53EF\u4EE5\u67E5\u8BE2\u751F\u4EA7\u73AF\u5883\u7684\u6570\u636E\u5E93\u3002</p><p>\u5982\u679C\u8FD8\u9700\u8981\u5176\u4ED6\u73AF\u5883\uFF0C\u6309\u7167\u683C\u5F0F\u65B0\u589E\u4F60\u7684\u73AF\u5883\u53D8\u91CF\u4EE3\u53F7\u5373\u53EF\u3002</p><p>\u524D\u7AEF\u9879\u76EE\u7684\u8FD0\u884C\u65F6\u53D8\u91CF\u4E5F\u662F\u7C7B\u4F3C\uFF1A</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cross-env NODE_ENV=development vite --host</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cross-env NODE_ENV=production vite build</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u6837\u5728\u672C\u5730\u5F00\u53D1\u65F6\uFF0C\u542F\u52A8 <code>yarn dev</code> \u5C31\u662F <code>development</code> \u73AF\u5883\uFF0C\u6253\u5305\u540E\u90E8\u7F72\u4E0A\u7EBF\u5C31\u662F <code>production</code> \u73AF\u5883\u3002</p><h2 id="\u53EF\u4EE5\u6709\u66F4\u65B0\u8BB0\u5F55\u67E5\u8BE2\u5417\uFF1F" tabindex="-1">\u53EF\u4EE5\u6709\u66F4\u65B0\u8BB0\u5F55\u67E5\u8BE2\u5417\uFF1F <a class="header-anchor" href="#\u53EF\u4EE5\u6709\u66F4\u65B0\u8BB0\u5F55\u67E5\u8BE2\u5417\uFF1F" aria-hidden="true">#</a></h2><p>\u7531\u4E8E <code>1.0.0</code> \u4EE5\u524D\u7684\u7248\u672C\u5C5E\u4E8E\u5F00\u53D1\u7248\u672C\uFF0C\u66F4\u65B0\u548C\u6539\u52A8\u4F1A\u6BD4\u8F83\u9891\u7E41\uFF0C\u6682\u65F6\u4E0D\u505A\u66F4\u65B0\u8BB0\u5F55\u6574\u7406\uFF0C\u5982\u679C\u6709\u6587\u6863\u4E0A\u7684\u529F\u80FD\u7528\u4E0D\u4E86\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u6700\u65B0\u7248\u7684\u5305\uFF0C\u66F4\u65B0\u5230\u6700\u65B0\u7248\u5C31\u53EF\u4EE5\u7528\u4E86\u3002</p>`,30),h=F("\u5F53\u524D\u7684\u6700\u65B0\u7248\u672C\u4E3A\uFF1A "),g=u("h2",{id:"\u6709\u95EE\u9898\u5982\u4F55\u53CD\u9988\uFF1F",tabindex:"-1"},[F("\u6709\u95EE\u9898\u5982\u4F55\u53CD\u9988\uFF1F "),u("a",{class:"header-anchor",href:"#\u6709\u95EE\u9898\u5982\u4F55\u53CD\u9988\uFF1F","aria-hidden":"true"},"#")],-1),f=u("p",null,[F("\u5982\u6709\u529F\u80FD\u60F3\u65B0\u589E\u6216\u8005\u53D1\u73B0 Bug \uFF0C\u8BF7\u8054\u7CFB\u672C\u5305\u7684\u7EF4\u62A4\u8005 "),u("a",{href:"dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=somemore"},"@\u7A0B\u6C9B\u6743"),F(" \u3002")],-1),q=JSON.parse('{"title":"\u5E38\u89C1\u95EE\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue \u652F\u6301\u54EA\u4E2A\u7248\u672C\uFF1F","slug":"vue-\u652F\u6301\u54EA\u4E2A\u7248\u672C\uFF1F"},{"level":2,"title":"\u53EF\u4EE5\u5728 JS \u9879\u76EE\u91CC\u4F7F\u7528\u5417\uFF1F","slug":"\u53EF\u4EE5\u5728-js-\u9879\u76EE\u91CC\u4F7F\u7528\u5417\uFF1F"},{"level":2,"title":"\u96C6\u6210\u7684\u5DE5\u5177\u5E93\u662F\u5426\u9700\u8981\u5355\u72EC\u5B89\u88C5\uFF1F","slug":"\u96C6\u6210\u7684\u5DE5\u5177\u5E93\u662F\u5426\u9700\u8981\u5355\u72EC\u5B89\u88C5\uFF1F"},{"level":2,"title":"\u5982\u679C\u6709\u547D\u540D\u51B2\u7A81\u600E\u4E48\u5904\u7406\uFF1F","slug":"\u5982\u679C\u6709\u547D\u540D\u51B2\u7A81\u600E\u4E48\u5904\u7406\uFF1F"},{"level":2,"title":"\u5982\u4F55\u67E5\u8BE2\u8DE8\u7AEF\u7684\u5E73\u53F0\u652F\u6301\uFF1F","slug":"\u5982\u4F55\u67E5\u8BE2\u8DE8\u7AEF\u7684\u5E73\u53F0\u652F\u6301\uFF1F"},{"level":2,"title":"\u5982\u4F55\u533A\u5206\u8FD0\u884C\u65F6\u73AF\u5883\uFF1F","slug":"\u5982\u4F55\u533A\u5206\u8FD0\u884C\u65F6\u73AF\u5883\uFF1F"},{"level":3,"title":"\u524D\u7AEF\u9879\u76EE","slug":"\u524D\u7AEF\u9879\u76EE"},{"level":3,"title":"\u670D\u52A1\u7AEF\u9879\u76EE","slug":"\u670D\u52A1\u7AEF\u9879\u76EE"},{"level":3,"title":"\u914D\u7F6E\u8FD0\u884C\u65F6\u73AF\u5883\u53D8\u91CF","slug":"\u914D\u7F6E\u8FD0\u884C\u65F6\u73AF\u5883\u53D8\u91CF"},{"level":2,"title":"\u53EF\u4EE5\u6709\u66F4\u65B0\u8BB0\u5F55\u67E5\u8BE2\u5417\uFF1F","slug":"\u53EF\u4EE5\u6709\u66F4\u65B0\u8BB0\u5F55\u67E5\u8BE2\u5417\uFF1F"},{"level":2,"title":"\u6709\u95EE\u9898\u5982\u4F55\u53CD\u9988\uFF1F","slug":"\u6709\u95EE\u9898\u5982\u4F55\u53CD\u9988\uFF1F"}],"relativePath":"guide/faq.md"}'),v={name:"guide/faq.md"},V=E({...v,setup(b){const o=s.version,l=s.dependencies.vue;return new Date().getFullYear(),(_,m)=>{const p=C("Platform");return c(),t("div",null,[r,A,u("p",null,[d,u("code",null,a(n(l)),1),y]),i,D(p,{browser:"",electron:"",app:"",server:"",scriptlet:""}),B,u("p",null,[h,u("code",null,a(n(o)),1)]),g,f])}}});export{q as __pageData,V as default};
