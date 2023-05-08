<template><div><h1 id="springboot之axios网络请求" tabindex="-1"><a class="header-anchor" href="#springboot之axios网络请求" aria-hidden="true">#</a> SpringBoot之Axios网络请求</h1>
<h3 id="_1、简介" tabindex="-1"><a class="header-anchor" href="#_1、简介" aria-hidden="true">#</a> 1、简介⚖️</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>1、在实际项目开发中，前端页面所需要的数据往往需要从服务器端获取，这必然涉及与服务器的通信。
2、Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。
3、Axios 在浏览器端使用XMLHttpRequests发送网络请求，并能自动完成JSON数据的转换 。
4、安装：npm install axios
5、地址：https<span class="token punctuation">:</span>//www.axios-http.cn/

局部导入
import axios from <span class="token string">'axios'</span>
全局导入
import axios from <span class="token string">'axios'</span>
Vue.<span class="token function">use</span><span class="token punctuation">(</span>axios<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、发送网络请求" tabindex="-1"><a class="header-anchor" href="#_2、发送网络请求" aria-hidden="true">#</a> 2、发送网络请求🙇‍♀️</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>Vue.prototype.$axios =axios<span class="token punctuation">;</span>
<span class="token selector">Vue.prototype.$httpUrl='http://localhost:8090'
created:function()</span><span class="token punctuation">{</span>
      <span class="token selector">this.$http.get("/user/findAll").then((response)=></span><span class="token punctuation">{</span>
        this.tableData = response.data
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>发送GET请求</p>
</blockquote>
<p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221122180051263.png" alt="image-20221122180051263"></p>
<p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221122180116278.png" alt="image-20221122180116278"></p>
<blockquote>
<p>发送POST请求</p>
</blockquote>
<h3 id="_3、异步回调问题" tabindex="-1"><a class="header-anchor" href="#_3、异步回调问题" aria-hidden="true">#</a> 3、异步回调问题⛹️‍♀️</h3>
<blockquote>
<p>async/await</p>
</blockquote>
<p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221122180350929.png" alt="image-20221122180350929"></p>
<h3 id="_4、其他请求方式" tabindex="-1"><a class="header-anchor" href="#_4、其他请求方式" aria-hidden="true">#</a> 4、其他请求方式👱‍♀️</h3>
<p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221122180453642.png" alt="image-20221122180453642"></p>
<p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221122180503499.png" alt="image-20221122180503499"></p>
<h3 id="_5、与vue整合" tabindex="-1"><a class="header-anchor" href="#_5、与vue整合" aria-hidden="true">#</a> 5、与Vue整合⛈️</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>1、在实际项目开发中，几乎每个组件中都会用到 axios 发起数据请求。此时会遇到如下两个问题：
2、每个组件中都需要导入 axios
3、每次发请求都需要填写完整的请求路径
4、可以通过全局配置的方式解决上述问题：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Vue.prototype.$axios =axios;
Vue.prototype.$httpUrl='http://localhost:8090'</p>
</blockquote>
<p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221122180722579.png" alt="image-20221122180722579"></p>
<h3 id="_6、为什么会出现跨域问题" tabindex="-1"><a class="header-anchor" href="#_6、为什么会出现跨域问题" aria-hidden="true">#</a> 6、为什么会出现跨域问题👷‍♀️</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>1、为了保证浏览器的安全，不同源的客户端脚本在没有明确授权的情况下，不能读写对方资源，称为同源策略，同源策略是浏览器安全的基石
2、同源策略（Sameoriginpolicy）是一种约定，它是浏览器最核心也最基本的安全功能
3、所谓同源（即指在同一个域）就是两个页面具有相同的协议（protocol），主机（host）和端口号（port）
4、当一个请求url的协议、域名、端口三者之间任意一个与当前页面url不同即为跨域，此时无法读取非同源网页的 Cookie，无法向非同源地址发送 AJAX 请求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、跨域问题解决" tabindex="-1"><a class="header-anchor" href="#_7、跨域问题解决" aria-hidden="true">#</a> 7、跨域问题解决🌗</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>1、CORS（Cross-Origin Resource Sharing）是由W3C制定的一种跨域资源共享技术标准，其目的就是为了解决前端的跨域请求。
2、CORS可以在不破坏即有规则的情况下，通过后端服务器实现CORS接口，从而实现跨域通信。
3、CORS将请求分为两类：简单请求和非简单请求，分别对跨域通信提供了支持。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、简单请求" tabindex="-1"><a class="header-anchor" href="#_8、简单请求" aria-hidden="true">#</a> 8、简单请求🚴‍♀️</h3>
<blockquote>
<p>满足以下条件的请求即为简单请求：</p>
</blockquote>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>请求方法：GET、POST、HEAD
除了以下的请求头字段之外，没有自定义的请求头：
Accept、Accept-Language、Content-Language、Last-Event-ID、Content-Type
Content-Type的值只有以下三种：
text/plain、multipart/form-data、application/x-www-form-urlencoded
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、简单请求的服务器处理" tabindex="-1"><a class="header-anchor" href="#_9、简单请求的服务器处理" aria-hidden="true">#</a> 9、简单请求的服务器处理👤</h3>
<blockquote>
<p>对于简单请求，CORS的策略是请求时在请求头中增加一个Origin字段，</p>
</blockquote>
<p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221122181105451.png" alt="image-20221122181105451"></p>
<blockquote>
<p>服务器收到请求后，根据该字段判断是否允许该请求访问，如果允许，则在HTTP头信息中添加Access-Control-Allow-Origin字段。</p>
</blockquote>
<p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221122181121174.png" alt="image-20221122181121174"></p>
<h3 id="_10、非简单请求" tabindex="-1"><a class="header-anchor" href="#_10、非简单请求" aria-hidden="true">#</a> 10、非简单请求🌾</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>1、对于非简单请求的跨源请求，浏览器会在真实请求发出前增加一次OPTION请求，称为预检请求（preflight request）
2、预检请求将真实请求的信息，包括请求方法、自定义头字段、源信息添加到HTTP头信息字段中，询问服务器是否允许这样的操作。
例如一个GET请求：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221122192537522.png" alt="image-20221122192537522"></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>3、Access-Control-Request-Method表示请求使用的HTTP方法，Access-Control-Request-Headers包含请求的自定义头字段
4、当预检请求通过后，浏览器才会发送真实请求到服务器。这样就实现了跨域资源的请求访问。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11、spring-boot中配置cors" tabindex="-1"><a class="header-anchor" href="#_11、spring-boot中配置cors" aria-hidden="true">#</a> 11、Spring Boot中配置CORS🦅</h3>
<blockquote>
<p>在传统的Java EE开发中，可以通过过滤器统一配置，而Spring Boot中对此则提供了更加简洁的解决方案</p>
</blockquote>
<p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221122192926275.png" alt="image-20221122192926275"></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addCorsMappings</span><span class="token punctuation">(</span><span class="token class-name">CorsRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addMapping</span><span class="token punctuation">(</span><span class="token string">"/**"</span><span class="token punctuation">)</span>
                <span class="token comment">//是否发送Cookie</span>
                <span class="token punctuation">.</span><span class="token function">allowCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token comment">//放⾏哪些原始域</span>
                <span class="token punctuation">.</span><span class="token function">allowedOrigins</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"GET"</span><span class="token punctuation">,</span> <span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token string">"PUT"</span><span class="token punctuation">,</span> <span class="token string">"DELETE"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">allowedHeaders</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">exposedHeaders</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


