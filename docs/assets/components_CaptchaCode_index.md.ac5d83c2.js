/**
 * name: @lunarxyz/monorepo
 * version: v0.41.0
 * description: The JS-SDK of Lunarxyz App, provides simple APIs to operate.
 * author: chengpeiquan <chengpeiquan@chengpeiquan.com>
 * homepage: https://lunarxyz.github.io
 */
import{h as d,C as E}from"./chunks/index.69934abe.js";import{d as D,r as c,o as y,c as C,a as s,n as h,t as u,b as o,w as i,u as F,F as m,p as _,e as v,_ as g,f as A,g as B}from"./app.7a46da20.js";const t=a=>(_("data-v-eb488cb2"),a=a(),v(),a),f={class:"line"},x=t(()=>s("span",{class:"title"},"answer: ",-1)),S={class:"line"},b=t(()=>s("span",{class:"title"},"randomStr: ",-1)),w=t(()=>s("div",{class:"hr"},"\u4E0A\u9762\u662F\u6570\u636E\uFF0C\u4E0B\u9762\u662F\u7EC4\u4EF6",-1)),q=D({__name:"demo",setup(a){const n=c(""),l=c("");return(r,p)=>(y(),C(m,null,[s("p",f,[x,s("span",{class:h({tips:!n.value})},u(n.value||"-"),3)]),s("p",S,[b,s("span",null,u(l.value),1)]),w,o(F(E),{theme:"dark"},{default:i(()=>[o(F(d),{answer:n.value,"onUpdate:answer":p[0]||(p[0]=e=>n.value=e),randomStr:l.value,"onUpdate:randomStr":p[1]||(p[1]=e=>l.value=e)},null,8,["answer","randomStr"])]),_:1})],64))}});const P=g(q,[["__scopeId","data-v-eb488cb2"]]),k=A(`<h1 id="captchacode" tabindex="-1">CaptchaCode <a class="header-anchor" href="#captchacode" aria-hidden="true">#</a></h1><p>\u56FE\u5F62\u9A8C\u8BC1\u7801\u3002</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><ul><li>\u7EC4\u4EF6\u6E32\u67D3\u65F6\uFF0C\u81EA\u52A8\u83B7\u53D6\u4E00\u6B21\u56FE\u5F62\u9A8C\u8BC1\u7801</li><li>\u70B9\u51FB\u9A8C\u8BC1\u7801\u56FE\u7247\u65F6\uFF0C\u53EF\u4EE5\u5237\u65B0\u56FE\u5F62\u9A8C\u8BC1\u7801</li><li>\u5728\u8F93\u5165\u6846\u8F93\u5165\u7684\u7B54\u6848\uFF0C\u4F1A\u81EA\u52A8\u540C\u6B65\u7ED9\u7236\u7EC4\u4EF6</li></ul><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">defineProps</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u9A8C\u8BC1\u7801\u7B54\u6848</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u7528\u4E8E\u77ED\u4FE1\u9A8C\u8BC1\u63A5\u53E3\u7684\u53C2\u6570</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">tips</span><span style="color:#676E95;"> \u5FC5\u987B\u7528\u53CC\u5411\u7ED1\u5B9A\u7684\u5F62\u5F0F\u6765\u4F20\u9012\u624D\u80FD\u89E6\u53D1\u7236\u7EC4\u4EF6\u7684\u6570\u636E\u66F4\u65B0</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">example</span><span style="color:#676E95;"> \`v-model:answer\`</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">answer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u83B7\u53D6\u56FE\u5F62\u9A8C\u8BC1\u7801\u65F6\u7684\u968F\u673A\u6570</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u7528\u4E8E\u77ED\u4FE1\u9A8C\u8BC1\u63A5\u53E3\u7684\u53C2\u6570</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">tips</span><span style="color:#676E95;"> \u5FC5\u987B\u7528\u53CC\u5411\u7ED1\u5B9A\u7684\u5F62\u5F0F\u6765\u4F20\u9012\u624D\u80FD\u89E6\u53D1\u7236\u7EC4\u4EF6\u7684\u6570\u636E\u66F4\u65B0</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">example</span><span style="color:#676E95;"> \`v-model:randomStr\`</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">randomStr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="live-demo" tabindex="-1">Live Demo <a class="header-anchor" href="#live-demo" aria-hidden="true">#</a></h2>`,7),I=A(`<h2 id="usage-example" tabindex="-1">Usage Example <a class="header-anchor" href="#usage-example" aria-hidden="true">#</a></h2><p>\u8BF7\u6CE8\u610F\u4F7F\u7528 <code>v-model:arg</code> \u7684\u683C\u5F0F\u5BF9 Props \u8FDB\u884C\u53CC\u5411\u7ED1\u5B9A\uFF0C\u5426\u5219\u65E0\u6CD5\u89E6\u53D1\u6570\u636E\u66F4\u65B0\u3002</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">CaptchaCode</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">answer</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">answer</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">randomStr</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">randomStr</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CaptchaCode</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lunarxyz/components</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> answer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> randomStr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,3),z=JSON.parse('{"title":"CaptchaCode","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Live Demo","slug":"live-demo","link":"#live-demo","children":[]},{"level":2,"title":"Usage Example","slug":"usage-example","link":"#usage-example","children":[]}],"relativePath":"components/CaptchaCode/index.md"}'),N={name:"components/CaptchaCode/index.md"},L=D({...N,setup(a){return(n,l)=>{const r=B("DemoPreview");return y(),C("div",null,[k,o(r,null,{default:i(()=>[o(P)]),_:1}),I])}}});export{z as __pageData,L as default};
