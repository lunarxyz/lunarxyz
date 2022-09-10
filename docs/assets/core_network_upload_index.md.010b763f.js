/**
 * name: @lunarxyz/monorepo
 * version: v0.46.0
 * description: The JS-SDK of Lunarxyz App, provides simple APIs to operate.
 * author: chengpeiquan <chengpeiquan@chengpeiquan.com>
 * homepage: https://lunarxyz.github.io
 */
import{_ as l,c as p,b as a,f as s,o,g as e}from"./app.f518222d.js";const E=JSON.parse('{"title":"useUpload","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage Tips","slug":"usage-tips","link":"#usage-tips","children":[]},{"level":2,"title":"progress","slug":"progress","link":"#progress","children":[]},{"level":2,"title":"upload","slug":"upload","link":"#upload","children":[]}],"relativePath":"core/network/upload/index.md"}'),c={name:"core/network/upload/index.md"},t=s(`<h1 id="useupload" tabindex="-1">useUpload <a class="header-anchor" href="#useupload" aria-hidden="true">#</a></h1><p>\u63D0\u4F9B\u6587\u4EF6\u4E0A\u4F20\u529F\u80FD\u548C\u4E0A\u4F20\u8FDB\u5EA6\u7B49\u76F8\u5173\u6570\u636E\u3002</p><h2 id="usage-tips" tabindex="-1">Usage Tips <a class="header-anchor" href="#usage-tips" aria-hidden="true">#</a></h2><p>\u4ECE <code>0.21.0</code> \u5F00\u59CB\uFF0C\u672C Hook \u65B0\u589E\u4E00\u4E2A\u5165\u53C2\u914D\u7F6E\uFF0C\u8FD9\u662F\u56E0\u4E3A <code>ali-oss</code> \u8FD9\u4E2A\u5305\u4E0D\u652F\u6301 Tree Shaking \uFF0C\u5982\u679C\u7531\u672C\u5305\u81EA\u5E26\u5B89\u88C5\uFF0C\u4F1A\u5F71\u54CD\u6CA1\u6709\u4F7F\u7528\u4E0A\u4F20\u529F\u80FD\u7684\u9879\u76EE\u8FDB\u884C\u4EE3\u7801\u4F18\u5316\u3002</p><p>\u56E0\u6B64\u628A\u8BE5 JS-SDK \u7684\u5B89\u88C5\u4EA4\u7ED9\u7528\u6237\u51B3\u5B9A\uFF0C\u5982\u679C\u9700\u8981\u7528\u5230\u4E0A\u4F20\u529F\u80FD\uFF0C\u9700\u8981\u5148\u5B89\u88C5\u963F\u91CC\u4E91 OSS JS-SDK \u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u5FC5\u987B\u5B89\u88C5 OSS JS-SDK \u4E3B\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add ali-oss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6839\u636E\u81EA\u5DF1\u7684\u9700\u8981\u51B3\u5B9A\u662F\u5426\u5B89\u88C5\u914D\u5957\u7684 TypeScript \u7C7B\u578B\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add -D @types/ali-oss</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u540E\u5728\u7528\u5230\u672C Hook \u7684\u6587\u4EF6\u91CC\u5BFC\u5165 OSS \u5B9E\u4F8B\uFF0C\u4F5C\u4E3A\u9009\u9879\u4F20\u9012\u8FDB\u53BB\u3002</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// \u9700\u8981\u5148\u5BFC\u5165\u8BE5\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> OSS </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ali-oss</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useUpload</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lunarxyz/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4F20\u9012\u7ED9 Hook</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> progress</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> upload </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useUpload</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> OSS </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><ul><li>Type Declarations:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UploadConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u963F\u91CC\u4E91\u5BF9\u8C61\u5B58\u50A8\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">example</span><span style="color:#676E95;"> \u4F20\u5165 \`import OSS from &#39;ali-oss&#39;\` \u7684\u8FD9\u4E2A \`OSS\`</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">OSS</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="progress" tabindex="-1">progress <a class="header-anchor" href="#progress" aria-hidden="true">#</a></h2><p>\u4E0A\u4F20\u8FDB\u5EA6\uFF08\u5FC5\u987B\u914D\u5408 <code>upload</code> \u65B9\u6CD5\u4E00\u8D77\u7528\uFF09\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7531\u4E8E\u4E0A\u4F20\u56FE\u7247\u4F7F\u7528 <code>OSS.put</code> \uFF0C\u4E0A\u4F20\u89C6\u9891\u4F7F\u7528 <code>OSS.multipartUpload</code> \uFF0C\u76EE\u524D\u4EC5 <code>multipartUpload</code> \u652F\u6301\u8FDB\u5EA6\u6761\uFF0C\u4E5F\u5C31\u662F\u53EA\u6709\u4E0A\u4F20\u89C6\u9891\u624D\u4F1A\u6709\u4E0A\u4F20\u8FDB\u5EA6\u8FD4\u56DE\u3002</p></div>`,13),r=s(`<ul><li>Type Declarations:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * \u672C\u8EAB\u662F\u4E00\u4E2A Vue Ref \u53D8\u91CF</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>Example:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">watch</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> OSS </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ali-oss</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useUpload</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lunarxyz/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> progress</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> upload </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useUpload</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> OSS </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;">// \u53EF\u4EE5\u76D1\u542C\u8FDB\u5EA6\u6761\u7684\u53D8\u5316</span></span>
<span class="line highlighted"><span style="color:#82AAFF;">watch</span><span style="color:#A6ACCD;">(progress</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">\u5F53\u524D\u4E0A\u4F20\u8FDB\u5EA6\uFF1A</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * \u5904\u7406\u6587\u4EF6\u9009\u62E9</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">handleUpload</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u8BE6\u89C1 \`upload\` \u7684\u6F14\u793A\u4EE3\u7801\uFF0C\u6CE8\u610F \`type\` \u4E3A \`1\` \u4E5F\u5C31\u662F\u89C6\u9891\u4E0A\u4F20\u65F6\u624D\u4F1A\u6709\u8FDB\u5EA6\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="upload" tabindex="-1">upload <a class="header-anchor" href="#upload" aria-hidden="true">#</a></h2><p>\u4E0A\u4F20\u5230\u963F\u91CC\u4E91 OSS \u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u8003\u8651\u5230\u5927\u90E8\u5206\u6D3B\u52A8\u9875\u9762\u7684\u4E0A\u4F20\u9700\u6C42\uFF0C\u6240\u4EE5\u4EC5\u5141\u8BB8\u56FE\u7247\u7C7B\u548C\u89C6\u9891\u7C7B\u6587\u4EF6\u4E0A\u4F20\u3002</p></div>`,7),D=s(`<ul><li>Type Declarations:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * \u4E0A\u4F20\u5230 OSS</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">upload</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UploadOptions</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">UploadResult</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * \u4E0A\u4F20\u9009\u9879</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UploadOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u4E0A\u4F20\u7C7B\u578B\uFF0C0-\u56FE\u7247\uFF0C1-\u89C6\u9891\uFF0C2-\u5934\u50CF</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u4ECE input \u6846\u62FF\u5230\u7684\u5B8C\u6574 file \u4FE1\u606F</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">File</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * \u4E0A\u4F20\u7ED3\u679C\u7684\u7C7B\u578B</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UploadResult</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">duration</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>Example:</li></ul><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">&lt;!-- \u6587\u4EF6\u4E0A\u4F20 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">upload</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inputElement</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">change</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">handleUpload</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">&lt;!-- \u6587\u4EF6\u4E0A\u4F20 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">&lt;!-- \u4E0A\u4F20\u540E\u7684\u56FE\u7247 URL \u9884\u89C8 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">preview</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">imgUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">&lt;!-- \u4E0A\u4F20\u540E\u7684\u56FE\u7247 URL \u9884\u89C8 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> OSS </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ali-oss</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useUpload</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lunarxyz/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> upload </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useUpload</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> OSS </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> inputElement </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HTMLInputElement</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> imgUrl </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * \u5904\u7406\u6587\u4EF6\u9009\u62E9</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">handleUpload</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">files</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">as</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">HTMLInputElement</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">files</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u62FF\u5230\u6587\u4EF6\u4FE1\u606F\u4E22\u8FDB\u53BB\u4E0A\u4F20\u5C31\u53EF\u4EE5\u4E86</span></span>
<span class="line highlighted"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">file</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">files</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span></span>
<span class="line highlighted"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">upload</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">    type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line highlighted"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">imgUrl</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">url</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u907F\u514D\u9009\u62E9\u540C\u4E00\u4E2A\u6587\u4EF6\u65E0\u6CD5\u89E6\u53D1 change</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">inputElement</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">inputElement</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4);function y(F,C,A,i,d,u){const n=e("Platform");return o(),p("div",null,[t,a(n,{browser:"",electron:""}),r,a(n,{browser:"",electron:"",server:"",scriptlet:""}),D])}const h=l(c,[["render",y]]);export{E as __pageData,h as default};
