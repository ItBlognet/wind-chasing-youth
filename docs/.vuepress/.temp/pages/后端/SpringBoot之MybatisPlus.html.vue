<template><div><h1 id="springboot之mybatisplus" tabindex="-1"><a class="header-anchor" href="#springboot之mybatisplus" aria-hidden="true">#</a> SpringBoot之MybatisPlus</h1>
<h3 id="_1、orm介绍" tabindex="-1"><a class="header-anchor" href="#_1、orm介绍" aria-hidden="true">#</a> 1、ORM介绍🌂</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>1、ORM（Object Relational Mapping，对象关系映射）是为了解决面向对象与关系数据库存在的互不匹配现象的一种技术。
2、ORM通过使用描述对象和数据库之间映射的元数据将程序中的对象自动持久化到关系数据库中。
3、ORM框架的本质是简化编程中操作数据库的编码。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121222057505.png" alt="image-20221121222057505"></p>
<h3 id="_2、mybatis-plus介绍" tabindex="-1"><a class="header-anchor" href="#_2、mybatis-plus介绍" aria-hidden="true">#</a> 2、MyBatis-Plus介绍🚦</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>1、MyBatis是一款优秀的数据持久层ORM框架，被广泛地应用于应用系统。
2、MyBatis能够非常灵活地实现动态SQL，可以使用XML或注解来配置和映射原生信息，能够轻松地将Java的POJO（Plain Ordinary Java Object，普通的Java对象）与数据库中的表和字段进行映射关联。
3、MyBatis-Plus是一个 MyBatis 的增强工具，在 MyBatis 的基础上做了增强，简化了开发。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121222217395.png" alt="image-20221121222217395"></p>
<h3 id="_3、添加依赖" tabindex="-1"><a class="header-anchor" href="#_3、添加依赖" aria-hidden="true">#</a> 3、添加依赖👱‍♀️</h3>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code> <span class="token comment">&lt;!--  MyBatisPlus依赖  --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.4.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- mysql驱动依赖  --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.1.47<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--    数据连接池 druid    --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、全局配置" tabindex="-1"><a class="header-anchor" href="#_4、全局配置" aria-hidden="true">#</a> 4、全局配置🎛️</h3>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">spring.datasource.type</span><span class="token punctuation">=</span><span class="token value attr-value">com.alibaba.druid.pool.DruidDataSource</span>
<span class="token key attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/mydb?useSSL=false</span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">mybatis-plus.configuration.log-impl</span><span class="token punctuation">=</span><span class="token value attr-value">org.apache.ibatis.logging.stdout.StdOutImpl</span>
<span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8088</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、添加-mapperscan注解" tabindex="-1"><a class="header-anchor" href="#_5、添加-mapperscan注解" aria-hidden="true">#</a> 5、添加@MapperScan注解⛈️</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">"cn.ruauto.mapper"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MpdemoApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">MpdemoApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、mybatis-crud注解" tabindex="-1"><a class="header-anchor" href="#_6、mybatis-crud注解" aria-hidden="true">#</a> 6、Mybatis CRUD注解⚖️</h3>
<p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121223127958.png" alt="image-20221121223127958"></p>
<h3 id="_7、crud操作" tabindex="-1"><a class="header-anchor" href="#_7、crud操作" aria-hidden="true">#</a> 7、CRUD操作Ⓜ️</h3>
<p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121223349414.png" alt="image-20221121223349414"></p>
<h3 id="_8、mybatisplus注解" tabindex="-1"><a class="header-anchor" href="#_8、mybatisplus注解" aria-hidden="true">#</a> 8、MybatisPlus注解💱</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>@TableName，当表名与实体类名称不一致时，可以使用@TableName注解进行关联。
@TableField，当表中字段名称与实体类属性不一致时，使用@TableField进行关联
@TableId，用于标记表中的主键字段，MybatisPlus也提供了主键生成策略。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121223458382.png" alt="image-20221121223458382"></p>
</div></template>


