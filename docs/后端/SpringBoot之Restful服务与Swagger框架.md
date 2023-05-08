# SpringBoot之Restful服务与Swagger框架

### 1、RESTful介绍:athletic_shoe:

```css
1、RESTful是目前流行的互联网软件服务架构设计风格。
2、REST（Representational State Transfer，表述性状态转移）一词是由Roy Thomas Fielding在2000年的博士论文中提出的，它定义了互联网软件服务的架构原则，如果一个架构符合REST原则，则称之为RESTful架构。
3、REST并不是一个标准，它更像一组客户端和服务端交互时的架构理念和设计原则，基于这种架构理念和设计原则的Web API更加简洁，更有层次。
```

### 2、RESTful的特点:v:

```css
1、每一个URI代表一种资源
2、客户端使用GET、POST、PUT、DELETE四种表示操作方式的动词对服务端资源进行操作：GET用于获取资源，POST用于新建资源（也可以用于更新资源），PUT用于更新资源，DELETE用于删除资源。
3、通过操作资源的表现形式来实现服务端请求操作。
4、资源的表现形式是JSON或者HTML。
5、客户端与服务端之间的交互在请求之间是无状态的，从客户端到服务端的每个请求都包含必需的信息。
```

### 3、RESTful API:biking_woman:

```css
1、符合RESTful规范的Web API需要具备如下两个关键特性：
2、安全性：安全的方法被期望不会产生任何副作用，当我们使用GET操作获取资源时，不会引起资源本身的改变，也不会引起服务器状态的改变。
3、幂等性：幂等的方法保证了重复进行一个请求和一次请求的效果相同（并不是指响应总是相同的，而是指服务器上资源的状态从第一次请求后就不再改变了），在数学上幂等性是指N次变换和一次变换相同。
```

### 4、HTTP Method:first_quarter_moon_with_face:

```css
1、HTTP提供了POST、GET、PUT、DELETE等操作类型对某个Web资源进行Create、Read、Update和Delete操作。
2、一个HTTP请求除了利用URI标志目标资源之外，还需要通过HTTP Method指定针对该资源的操作类型，一些常见的HTTP方法及其在RESTful风格下的使用：
```

![image-20221121191442309](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121191442309.png)

### 5、HTTP状态码:last_quarter_moon:

```css
1、HTTP状态码就是服务向用户返回的状态码和提示信息，客户端的每一次请求，服务都必须给出回应，回应包括HTTP状态码和数据两部分。
2、HTTP定义了40个标准状态码，可用于传达客户端请求的结果。状态码分为以下5个类别：
3、1xx：信息，通信传输协议级信息
4、2xx：成功，表示客户端的请求已成功接受
5、3xx：重定向，表示客户端必须执行一些其他操作才能完成其请求
6、4xx：客户端错误，此类错误状态码指向客户端
7、5xx：服务器错误，服务器负责这写错误状态码
```

```css
RESTful API中使用HTTP状态码来表示请求执行结果的状态，适用于REST API设计的代码以及对应的HTTP方法。
```

![image-20221121191722525](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121191722525.png)

### 6、Spring Boot实现RESTful API:aerial_tramway:

```css
1、Spring Boot提供的spring-boot-starter-web组件完全支持开发RESTful API，提供了与REST操作方式（GET、POST、PUT、2、DELETE）对应的注解。
2、@GetMapping：处理GET请求，获取资源。
3、@PostMapping：处理POST请求，新增资源。
4、@PutMapping：处理PUT请求，更新资源。
5、@DeleteMapping：处理DELETE请求，删除资源。
6、@PatchMapping：处理PATCH请求，用于部分更新资源。
```

```css
1、在RESTful架构中，每个网址代表一种资源，所以URI中建议不要包含动词，只包含名词即可，而且所用的名词往往与数据库的表格名对应。
2、用户管理模块API示例：
```

![image-20221121191931899](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121191931899.png)

```java
 @ApiOperation("获取用户")
    @GetMapping("/user/{id}")
    public String getUserById(@PathVariable int id){
        System.out.println(id);
        return "根据ID获取用户信息";
    }
    @PostMapping("/user")
    public String save(User user){
        return "添加用户";
    }
    @PutMapping("/user")
    public String update(User user){
        return "更新用户";
    }
    @DeleteMapping("/user/{id}")
    public String deleteById(@PathVariable int id){
        System.out.println(id);
        return "根据ID删除用户";
    }
```

## 什么是Swagger:alarm_clock:

```css
1、Swagger是一个规范和完整的框架，用于生成、描述、调用和可视化RESTful风格的Web服务，是非常流行的API表达工具。
2、Swagger能够自动生成完善的RESTful API文档，，同时并根据后台代码的修改同步更新，同时提供完整的测试页面来调试API
```

### 1、导包:baggage_claim:

```xml
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.9.2</version>
</dependency>
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.9.2</version>
 </dependency>
```

### 2、配置Swagger:fist_oncoming:

```java
package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration // 告诉Spring容器，这个类是一个配置类
@EnableSwagger2 // 启用Swagger2功能
public class SwaggerConfig {
    /**
     * 配置Swagger2相关的bean
     */
    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com"))// com包下所有API都交给Swagger2管理
                .paths(PathSelectors.any()).build();
    }

    /**
     * 此处主要是API文档页面显示信息
     */
    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("演示项目API") // 标题
                .description("演示项目") // 描述
                .version("1.0") // 版本
                .build();
    }
}
```

### 3、注意事项:yin_yang:

```css
Spring Boot 2.6.X后与Swagger有版本冲突问题，需要在application.properties中加入以下配置：

spring.mvc.pathmatch.matching-strategy=ant_path_matcher
```

### 4、显示测试页面:dvd:![image-20221121193728222](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121193728222.png)

### 5、Swagger常用注解:beach_umbrella:

```css
Swagger提供了一系列注解来描述接口信息，包括接口说明、请求方法、请求参数、返
```

![image-20221121203841457](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121203841457.png)