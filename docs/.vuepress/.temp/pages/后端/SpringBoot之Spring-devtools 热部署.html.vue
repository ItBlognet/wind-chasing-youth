<template><div><h1 id="springboot之spring-devtools-热部署" tabindex="-1"><a class="header-anchor" href="#springboot之spring-devtools-热部署" aria-hidden="true">#</a> SpringBoot之Spring-devtools 热部署</h1>
<h3 id="第一步导包" tabindex="-1"><a class="header-anchor" href="#第一步导包" aria-hidden="true">#</a> 第一步🔽导包</h3>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-devtools<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二步添加配置" tabindex="-1"><a class="header-anchor" href="#第二步添加配置" aria-hidden="true">#</a> 第二步🗂️添加配置</h3>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token comment">#开启热部署</span>
<span class="token key attr-name">spring.devtools.restart.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token comment">#热部署从新加载java下面类文件</span>
<span class="token key attr-name">spring.devtools.restart.additional-paths</span><span class="token punctuation">=</span><span class="token value attr-value">src/main/java</span>
<span class="token comment">#排除静态文件重新部署</span>
<span class="token key attr-name">spring.devtools.restart.exclude</span><span class="token punctuation">=</span><span class="token value attr-value">static/**</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三步settings页面配置" tabindex="-1"><a class="header-anchor" href="#第三步settings页面配置" aria-hidden="true">#</a> 第三步🗡️Settings页面配置</h3>
<p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121112256514.png" alt="image-20221121112256514"></p>
<h3 id="第四步ctrl-shift-alt" tabindex="-1"><a class="header-anchor" href="#第四步ctrl-shift-alt" aria-hidden="true">#</a> 第四步🍡Ctrl+Shift+Alt+/</h3>
<p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121112957212.png" alt="image-20221121112957212"></p>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121113055768.png" alt="image-20221121113055768"></h3>
<h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> </h3>
</div></template>


