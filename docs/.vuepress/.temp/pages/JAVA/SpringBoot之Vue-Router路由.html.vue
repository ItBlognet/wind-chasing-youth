<template><div><h1 id="springboot之vue-router路由" tabindex="-1"><a class="header-anchor" href="#springboot之vue-router路由" aria-hidden="true">#</a> SpringBoot之Vue-Router路由</h1>
<h3 id="_1、vuerouter安装" tabindex="-1"><a class="header-anchor" href="#_1、vuerouter安装" aria-hidden="true">#</a> 1、VueRouter安装⏰</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>Vue路由vue-router是官方的路由插件，能够轻松的管理 SPA 项目中组件的切换。

Vue的单页面应用是基于路由和组件的，路由用于设定访问路径，并将路径和组件映射起来

vue-router 目前有 3.x 的版本和 4.x 的版本，vue-router 3.x 只能结合 vue2 进行使用，vue-router 4.x 只能结合 vue3 进行使用
安装：npm install vue-router@4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、配置" tabindex="-1"><a class="header-anchor" href="#_2、配置" aria-hidden="true">#</a> 2、配置👶</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>router<span class="token operator">/</span>index<span class="token punctuation">.</span>js
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">"vue-router"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Discover <span class="token keyword">from</span> <span class="token string">'../components/Discover.vue'</span>
<span class="token keyword">import</span> Friends <span class="token keyword">from</span> <span class="token string">'../components/Friends.vue'</span>
<span class="token keyword">import</span> My <span class="token keyword">from</span> <span class="token string">'../components/My.vue'</span>
<span class="token keyword">import</span> TopList <span class="token keyword">from</span> <span class="token string">'../components/TopList'</span>
<span class="token keyword">import</span> PlayList <span class="token keyword">from</span> <span class="token string">'../components/PlayList'</span>
<span class="token keyword">import</span> Product <span class="token keyword">from</span> <span class="token string">'../components/Product'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 指定hash属性与组件的对应关系</span>
    <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span><span class="token literal-property property">redirect</span><span class="token operator">:</span><span class="token string">"/discover"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/discover'</span><span class="token punctuation">,</span> 
         <span class="token literal-property property">component</span><span class="token operator">:</span> Discover<span class="token punctuation">,</span>
         <span class="token comment">// 通过children属性，嵌套声明子路由</span>
         <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">"toplist"</span><span class="token punctuation">,</span><span class="token literal-property property">component</span><span class="token operator">:</span>TopList<span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">"playlist"</span><span class="token punctuation">,</span><span class="token literal-property property">component</span><span class="token operator">:</span>PlayList<span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/friends'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Friends <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/my'</span><span class="token punctuation">,</span> 
         <span class="token literal-property property">component</span><span class="token operator">:</span> My<span class="token punctuation">,</span>
         <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">":id"</span><span class="token punctuation">,</span><span class="token literal-property property">component</span><span class="token operator">:</span>Product<span class="token punctuation">,</span><span class="token literal-property property">props</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       
   <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>main<span class="token punctuation">.</span>js
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span>
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
  router
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、调用" tabindex="-1"><a class="header-anchor" href="#_3、调用" aria-hidden="true">#</a> 3、调用📑</h3>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>App.vue
<span class="token comment">&lt;!-- 声明路由链接 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/discover<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>发现音乐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/my<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我的音乐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/friends<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>关注<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
   <span class="token comment">&lt;!-- 声明路由占位标签 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、动态路由" tabindex="-1"><a class="header-anchor" href="#_4、动态路由" aria-hidden="true">#</a> 4、<strong>动态路由</strong>🎃</h3>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/product/1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>商品1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/product/2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>商品2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/product/3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>商品3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">// 指定hash属性与组件的对应关系</span>
<span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/product/1'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Product <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/product/2'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Product <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/product/3'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Product <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/product/:id'</span><span class="token punctuation">,</span><span class="token literal-property property">component</span><span class="token operator">:</span>Product <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>通过动态路由匹配的方式渲染出来的组件中，可以使用 $route.params 对象访问到动态匹配的参数值，</p>
<p><strong>比如在商品详情组件的内部，根据id值，请求不同的商品数据</strong>。</p>
</blockquote>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Product组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 获取动态的id值 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{$route.params.id}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
<span class="token comment">// 组件的名称</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Product'</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>为了简化路由参数的获取形式，vue-router 允许在路由规则中开启 props 传参。示例代码如下：</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/product/:id'</span><span class="token punctuation">,</span><span class="token literal-property property">component</span><span class="token operator">:</span> Product<span class="token punctuation">,</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Product组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 获取动态的id值 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{id}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>
export default {
// 组件的名称
name: 'Product',
props : [id]
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scrip</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、导航守卫" tabindex="-1"><a class="header-anchor" href="#_5、导航守卫" aria-hidden="true">#</a> 5、导航守卫⛹️‍♂️</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>vue-router提供的导航守卫主要用来拦截导航，让它完成跳转或取消。

to：Route：即将要进入的目标路由。

from：Route：当前导航正要离开的路由。

next：在守卫方法中如果声明了next形参，则必须调用 <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 函数，否则不允许用户访问任何一个路由

直接放行：<span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>，强制其跳转到登录页面：<span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221122202712367.png" alt="image-20221122202712367"></p>
</div></template>


