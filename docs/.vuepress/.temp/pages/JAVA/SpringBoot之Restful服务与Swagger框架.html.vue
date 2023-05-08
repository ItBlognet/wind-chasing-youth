<template><div><h1 id="springboot之restful服务与swagger框架" tabindex="-1"><a class="header-anchor" href="#springboot之restful服务与swagger框架" aria-hidden="true">#</a> SpringBoot之Restful服务与Swagger框架</h1>
<h3 id="_1、restful介绍" tabindex="-1"><a class="header-anchor" href="#_1、restful介绍" aria-hidden="true">#</a> 1、RESTful介绍👟</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>1、RESTful是目前流行的互联网软件服务架构设计风格。
2、REST（Representational State Transfer，表述性状态转移）一词是由Roy Thomas Fielding在2000年的博士论文中提出的，它定义了互联网软件服务的架构原则，如果一个架构符合REST原则，则称之为RESTful架构。
3、REST并不是一个标准，它更像一组客户端和服务端交互时的架构理念和设计原则，基于这种架构理念和设计原则的Web API更加简洁，更有层次。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、restful的特点" tabindex="-1"><a class="header-anchor" href="#_2、restful的特点" aria-hidden="true">#</a> 2、RESTful的特点✌️</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>1、每一个URI代表一种资源
2、客户端使用GET、POST、PUT、DELETE四种表示操作方式的动词对服务端资源进行操作：GET用于获取资源，POST用于新建资源（也可以用于更新资源），PUT用于更新资源，DELETE用于删除资源。
3、通过操作资源的表现形式来实现服务端请求操作。
4、资源的表现形式是JSON或者HTML。
5、客户端与服务端之间的交互在请求之间是无状态的，从客户端到服务端的每个请求都包含必需的信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、restful-api" tabindex="-1"><a class="header-anchor" href="#_3、restful-api" aria-hidden="true">#</a> 3、RESTful API🚴‍♀️</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>1、符合RESTful规范的Web API需要具备如下两个关键特性：
2、安全性：安全的方法被期望不会产生任何副作用，当我们使用GET操作获取资源时，不会引起资源本身的改变，也不会引起服务器状态的改变。
3、幂等性：幂等的方法保证了重复进行一个请求和一次请求的效果相同（并不是指响应总是相同的，而是指服务器上资源的状态从第一次请求后就不再改变了），在数学上幂等性是指N次变换和一次变换相同。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、http-method" tabindex="-1"><a class="header-anchor" href="#_4、http-method" aria-hidden="true">#</a> 4、HTTP Method🌛</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>1、HTTP提供了POST、GET、PUT、DELETE等操作类型对某个Web资源进行Create、Read、Update和Delete操作。
2、一个HTTP请求除了利用URI标志目标资源之外，还需要通过HTTP Method指定针对该资源的操作类型，一些常见的HTTP方法及其在RESTful风格下的使用：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121191442309.png" alt="image-20221121191442309"></p>
<h3 id="_5、http状态码" tabindex="-1"><a class="header-anchor" href="#_5、http状态码" aria-hidden="true">#</a> 5、HTTP状态码🌗</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>1、HTTP状态码就是服务向用户返回的状态码和提示信息，客户端的每一次请求，服务都必须给出回应，回应包括HTTP状态码和数据两部分。
2、HTTP定义了40个标准状态码，可用于传达客户端请求的结果。状态码分为以下5个类别：
3、1xx：信息，通信传输协议级信息
4、2xx：成功，表示客户端的请求已成功接受
5、3xx：重定向，表示客户端必须执行一些其他操作才能完成其请求
6、4xx：客户端错误，此类错误状态码指向客户端
7、5xx：服务器错误，服务器负责这写错误状态码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>RESTful API中使用HTTP状态码来表示请求执行结果的状态，适用于REST API设计的代码以及对应的HTTP方法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121191722525.png" alt="image-20221121191722525"></p>
<h3 id="_6、spring-boot实现restful-api" tabindex="-1"><a class="header-anchor" href="#_6、spring-boot实现restful-api" aria-hidden="true">#</a> 6、Spring Boot实现RESTful API🚡</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>1、Spring Boot提供的spring-boot-starter-web组件完全支持开发RESTful API，提供了与REST操作方式（GET、POST、PUT、2、DELETE）对应的注解。
2、@GetMapping：处理GET请求，获取资源。
3、@PostMapping：处理POST请求，新增资源。
4、@PutMapping：处理PUT请求，更新资源。
5、@DeleteMapping：处理DELETE请求，删除资源。
6、@PatchMapping：处理PATCH请求，用于部分更新资源。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>1、在RESTful架构中，每个网址代表一种资源，所以URI中建议不要包含动词，只包含名词即可，而且所用的名词往往与数据库的表格名对应。
2、用户管理模块API示例：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121191931899.png" alt="image-20221121191931899"></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> <span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">"获取用户"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/user/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"根据ID获取用户信息"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/user"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"添加用户"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@PutMapping</span><span class="token punctuation">(</span><span class="token string">"/user"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"更新用户"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">"/user/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"根据ID删除用户"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="什么是swagger" tabindex="-1"><a class="header-anchor" href="#什么是swagger" aria-hidden="true">#</a> 什么是Swagger⏰</h2>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>1、Swagger是一个规范和完整的框架，用于生成、描述、调用和可视化RESTful风格的Web服务，是非常流行的API表达工具。
2、Swagger能够自动生成完善的RESTful API文档，，同时并根据后台代码的修改同步更新，同时提供完整的测试页面来调试API
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1、导包" tabindex="-1"><a class="header-anchor" href="#_1、导包" aria-hidden="true">#</a> 1、导包🛄</h3>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>io.springfox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>springfox-swagger2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.9.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>io.springfox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>springfox-swagger-ui<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.9.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、配置swagger" tabindex="-1"><a class="header-anchor" href="#_2、配置swagger" aria-hidden="true">#</a> 2、配置Swagger👊</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>builders<span class="token punctuation">.</span></span><span class="token class-name">ApiInfoBuilder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>builders<span class="token punctuation">.</span></span><span class="token class-name">PathSelectors</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>builders<span class="token punctuation">.</span></span><span class="token class-name">RequestHandlerSelectors</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">ApiInfo</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>spi<span class="token punctuation">.</span></span><span class="token class-name">DocumentationType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>web<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span></span><span class="token class-name">Docket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>swagger2<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">EnableSwagger2</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span> <span class="token comment">// 告诉Spring容器，这个类是一个配置类</span>
<span class="token annotation punctuation">@EnableSwagger2</span> <span class="token comment">// 启用Swagger2功能</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerConfig</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 配置Swagger2相关的bean
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">createRestApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span><span class="token function">basePackage</span><span class="token punctuation">(</span><span class="token string">"com"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// com包下所有API都交给Swagger2管理</span>
                <span class="token punctuation">.</span><span class="token function">paths</span><span class="token punctuation">(</span><span class="token class-name">PathSelectors</span><span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 此处主要是API文档页面显示信息
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">ApiInfo</span> <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ApiInfoBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string">"演示项目API"</span><span class="token punctuation">)</span> <span class="token comment">// 标题</span>
                <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">"演示项目"</span><span class="token punctuation">)</span> <span class="token comment">// 描述</span>
                <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">"1.0"</span><span class="token punctuation">)</span> <span class="token comment">// 版本</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、注意事项" tabindex="-1"><a class="header-anchor" href="#_3、注意事项" aria-hidden="true">#</a> 3、注意事项☯️</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>Spring Boot 2.6.X后与Swagger有版本冲突问题，需要在application.properties中加入以下配置：

spring.mvc.pathmatch.matching-strategy=ant_path_matcher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、显示测试页面" tabindex="-1"><a class="header-anchor" href="#_4、显示测试页面" aria-hidden="true">#</a> 4、显示测试页面📀<img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121193728222.png" alt="image-20221121193728222"></h3>
<h3 id="_5、swagger常用注解" tabindex="-1"><a class="header-anchor" href="#_5、swagger常用注解" aria-hidden="true">#</a> 5、Swagger常用注解🏖️</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>Swagger提供了一系列注解来描述接口信息，包括接口说明、请求方法、请求参数、返
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121203841457.png" alt="image-20221121203841457"></p>
</div></template>


