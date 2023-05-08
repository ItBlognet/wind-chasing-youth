<template><div><h1 id="springboot之controller控制器" tabindex="-1"><a class="header-anchor" href="#springboot之controller控制器" aria-hidden="true">#</a> Springboot之Controller控制器</h1>
<p>SpringBoot 提供了两种@controller和@restController注解负责接收处理HTTP请求</p>
<h3 id="_1、-controller" tabindex="-1"><a class="header-anchor" href="#_1、-controller" aria-hidden="true">#</a> 1、@Controller🌳</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>请求页面
前端${name}接收后端数据
通常与Thymeleaf模板引擎配合使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、-restcontroller" tabindex="-1"><a class="header-anchor" href="#_2、-restcontroller" aria-hidden="true">#</a> 2、@RestController🌳</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>请求数据
对象数据转Json数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121115840176.png" alt="image-20221121115840176"></p>
<h3 id="_3、路由映射" tabindex="-1"><a class="header-anchor" href="#_3、路由映射" aria-hidden="true">#</a> 3、路由映射💠</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span>注解负责<span class="token constant">URL</span>路由映射
作用域：类或方法
value：请求<span class="token constant">URL</span>路径
method：<span class="token constant">HTTP</span>请求方法
consumes<span class="token operator">:</span>请求的媒体类型（application<span class="token operator">/</span>json<span class="token punctuation">)</span>
produces<span class="token operator">:</span>响应的媒体类型
params<span class="token punctuation">,</span>headers<span class="token operator">:</span>请求的参数及请求头的值
<span class="token annotation punctuation">@RequestMapping</span>（value<span class="token operator">=</span>“getUser”，method<span class="token operator">=</span><span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span>）

<span class="token annotation punctuation">@RequestMapping</span>
<span class="token annotation punctuation">@RequestMapping</span>（“<span class="token operator">/</span>getJson<span class="token comment">/*.json”）
/getJson/x.json、/getJson/y.json
“*”匹配任意字符（优先级高）
“**”匹配任意路径（优先级低）
“？”匹配单个字符

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、method匹配" tabindex="-1"><a class="header-anchor" href="#_4、method匹配" aria-hidden="true">#</a> 4、Method匹配🙇‍♀️</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token constant">HTTP</span>请求<span class="token class-name">Method</span>：<span class="token constant">GET</span>、<span class="token constant">POST</span>、<span class="token constant">PUT</span>、<span class="token constant">DELETE</span>等
<span class="token annotation punctuation">@GetMapping</span>、<span class="token annotation punctuation">@PostMapping</span>等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、参数传递" tabindex="-1"><a class="header-anchor" href="#_5、参数传递" aria-hidden="true">#</a> 5、参数传递🌓</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>@RequestParam
绑定在方法参数上
当请求参数名与Controller的业务方法名称一致时@RequestParam可省略
@<span class="token function">RequestParam</span><span class="token punctuation">(</span><span class="token string">"nikename"</span><span class="token punctuation">)</span>String name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@PathVaraible</span>
用来处理动态的<span class="token constant">URL</span>、<span class="token constant">URL</span>的值可以作为控制器中处理方法的参数
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/api/{id}"</span><span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">api</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVaraible</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestBody</span>
请求体
application<span class="token operator">/</span>json、application<span class="token operator">/</span>xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


