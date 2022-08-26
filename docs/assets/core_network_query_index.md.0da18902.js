/**
 * name: @lunarxyz/monorepo
 * version: v0.37.0
 * description: The JS-SDK of Lunarxyz App, provides simple APIs to operate.
 * author: chengpeiquan <chengpeiquan@chengpeiquan.com>
 * homepage: https://lunarxyz.github.io
 */
import{_ as l,c as p,f as a,a as s,o,r as e}from"./app.0bed755d.js";const _=JSON.parse('{"title":"useQuery","description":"","frontmatter":{},"headers":[{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"parseQuery","slug":"parsequery"},{"level":2,"title":"extractQueryInfo","slug":"extractqueryinfo"},{"level":2,"title":"getQuery","slug":"getquery"},{"level":2,"title":"stringifyQuery","slug":"stringifyquery"}],"relativePath":"core/network/query/index.md"}'),t={name:"core/network/query/index.md"},c=s(`<h1 id="usequery" tabindex="-1">useQuery <a class="header-anchor" href="#usequery" aria-hidden="true">#</a></h1><p>\u63D0\u4F9B URL Query \u53C2\u6570\u89E3\u6790\u65B9\u6CD5\u3002</p><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><p>\u672C\u7CFB\u5217\u65B9\u6CD5\u7528\u5230\u7684\u4E00\u4E9B\u516C\u5171\u7C7B\u578B\u3002</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Query \u53C2\u6570\u89E3\u6790\u540E\u7684\u5BF9\u8C61\u7C7B\u578B</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">QueryInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="parsequery" tabindex="-1">parseQuery <a class="header-anchor" href="#parsequery" aria-hidden="true">#</a></h2><p>\u89E3\u6790 URL \u53C2\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A Query \u53C2\u6570\u5BF9\u8C61\uFF0C\u4F1A\u628A URL \u91CC\u7684 <code>key1=value1&amp;key2=value2</code> \u4FE1\u606F\u8F6C\u4E3A\u5BF9\u8C61\u3002</p>`,7),r=s(`<ul><li>Type Declarations:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parseQuery</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u4EE5 \`http\` / \`https\` \u5F00\u5934\u7684\u7F51\u7EDC\u5730\u5740</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Url</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">QueryInfo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Url</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">http://</span><span style="color:#89DDFF;">\${</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">https://</span><span style="color:#89DDFF;">\${</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">}\`</span></span>
<span class="line"></span></code></pre></div><ul><li>Example:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useQuery</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lunarxyz/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href)</span></span>
<span class="line"><span style="color:#676E95;">// http://localhost:5173/?id=3&amp;name=Petter&amp;age=18</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> parseQuery </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useQuery</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;">// \u6D4F\u89C8\u5668\u7AEF\u53EF\u4EE5\u83B7\u53D6\u5F53\u524D URL \u8FDB\u884C\u89E3\u6790</span></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> queryInfo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parseQuery</span><span style="color:#A6ACCD;">()</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(queryInfo)</span></span>
<span class="line"><span style="color:#676E95;">// {</span></span>
<span class="line"><span style="color:#676E95;">//   &quot;id&quot;: &quot;3&quot;,</span></span>
<span class="line"><span style="color:#676E95;">//   &quot;name&quot;: &quot;Petter&quot;,</span></span>
<span class="line"><span style="color:#676E95;">//   &quot;age&quot;: &quot;18&quot;</span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;">// \u5176\u4ED6\u7AEF\u53EA\u80FD\u50CF\u8FD9\u6837\u624B\u52A8\u4F20\u5165\u53C2\u6570</span></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> queryInfoByManual </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parseQuery</span><span style="color:#A6ACCD;">(</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://localhost:5173/?id=4&amp;name=Marry&amp;age=16</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">)</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(queryInfoByManual)</span></span>
<span class="line"><span style="color:#676E95;">// {</span></span>
<span class="line"><span style="color:#676E95;">//   &quot;id&quot;: &quot;4&quot;,</span></span>
<span class="line"><span style="color:#676E95;">//   &quot;name&quot;: &quot;Marry&quot;,</span></span>
<span class="line"><span style="color:#676E95;">//   &quot;age&quot;: &quot;16&quot;</span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"></span></code></pre></div><h2 id="extractqueryinfo" tabindex="-1">extractQueryInfo <a class="header-anchor" href="#extractqueryinfo" aria-hidden="true">#</a></h2><p>\u63D0\u53D6\u53C2\u6570\u4FE1\u606F\uFF0C\u5728 <a href="#parsequery">parseQuery</a> \u7684\u57FA\u7840\u4E0A\uFF0C\u8FDB\u4E00\u6B65\u62BD\u79BB\u8BF7\u6C42\u8DEF\u5F84\u548C\u4EA4\u4E92\u53C2\u6570\u5BF9\u8C61\u7684\u5BF9\u8C61\uFF0C\u53EF\u7528\u4E8E\u5524\u8D77 App \u6216\u8005 Wap \u7248\u7684 URL \u5206\u6790\u3002</p>`,6),y=s(`<ul><li>Type Declarations:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">extractQueryInfo</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * App \u5185\u90E8\u5524\u8D77\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u5254\u9664\u4E86 path \u4E4B\u5916\u7684\u5176\u4ED6\u53C2\u6570</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">QueryInfo</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>Example:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useQuery</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lunarxyz/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href)</span></span>
<span class="line"><span style="color:#676E95;">// http://localhost:5173/?path=/pages/member/detail&amp;id=3</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> extractQueryInfo </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useQuery</span><span style="color:#A6ACCD;">()</span></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> params </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">extractQueryInfo</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> params </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// {</span></span>
<span class="line"><span style="color:#676E95;">//   &quot;path&quot;: &quot;/pages/member/detail&quot;,</span></span>
<span class="line"><span style="color:#676E95;">//   &quot;params&quot;: {</span></span>
<span class="line"><span style="color:#676E95;">//     &quot;id&quot;: &quot;3&quot;</span></span>
<span class="line"><span style="color:#676E95;">//   }</span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"></span></code></pre></div><h2 id="getquery" tabindex="-1">getQuery <a class="header-anchor" href="#getquery" aria-hidden="true">#</a></h2><p>\u83B7\u53D6\u6307\u5B9A\u7684 Query \u53C2\u6570\u3002</p>`,6),D=s(`<ul><li>Type Declarations:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getQuery</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u8981\u83B7\u53D6\u7684\u53C2\u6570\u952E\u540D</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u9ED8\u8BA4\u4ECE\u6D4F\u89C8\u5668 URL \u63D0\u53D6\uFF0C\u4F20\u5165\u8BE5\u53C2\u6570\u53EF\u4EE5\u4ECE\u6307\u5B9A\u7684 URL \u89E3\u6790</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Url</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span></code></pre></div><ul><li>Example:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useQuery</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lunarxyz/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href)</span></span>
<span class="line"><span style="color:#676E95;">// http://localhost:5173/?id=3&amp;name=Petter&amp;age=18</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> getQuery </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useQuery</span><span style="color:#A6ACCD;">()</span></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getQuery</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(id) </span><span style="color:#676E95;">// 3</span></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getQuery</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(name) </span><span style="color:#676E95;">// Petter</span></span>
<span class="line"></span></code></pre></div><h2 id="stringifyquery" tabindex="-1">stringifyQuery <a class="header-anchor" href="#stringifyquery" aria-hidden="true">#</a></h2><p>\u5E8F\u5217\u5316 Query \u53C2\u6570\u4FE1\u606F\u3002</p>`,6),A=s(`<ul><li>Type Declarations:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">stringifyQuery</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u8981\u7528\u4E8E\u5E8F\u5217\u5316\u7684 Query \u53C2\u6570\u7684\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">queryInfoObject</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">QueryInfoObject</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">QueryInfoObject</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>Example:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useQuery</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lunarxyz/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> stringifyQuery </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useQuery</span><span style="color:#A6ACCD;">()</span></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> queryStringify </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">stringifyQuery</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Petter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">isBoy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">hobby</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">girlFriend</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(queryStringify)</span></span>
<span class="line"><span style="color:#676E95;">// id=3&amp;name=Petter&amp;age=18&amp;isBoy=true&amp;hobby=undefined&amp;girlFriend=null</span></span>
<span class="line"></span></code></pre></div>`,4);function C(F,i,u,d,h,g){const n=e("Platform");return o(),p("div",null,[c,a(n,{browser:"",electron:"",app:"",server:"",scriptlet:""}),r,a(n,{browser:"",electron:"",app:"",server:"",scriptlet:""}),y,a(n,{browser:"",electron:"",app:"",server:"",scriptlet:""}),D,a(n,{browser:"",electron:"",app:"",server:"",scriptlet:""}),A])}const f=l(t,[["render",C]]);export{_ as __pageData,f as default};
