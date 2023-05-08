# SpringBoot之拦截器

### 1、拦截器简介:carousel_horse:

```
1、拦截器在Web系统中非常常见，对于某些全局统一的操作，我们可以把它提取到拦截器中实现。总结起来，拦截器大致有以下几种使用场景：
2、权限检查：如登录检测，进入处理程序检测是否登录，如果没有，则直接返回登录页面。
3、性能监控：有时系统在某段时间莫名其妙很慢，可以通过拦截器在进入处理程序之前记录开始时间，在处理完后记录结束时间，从而得到该请求的处理时间
4、通用行为：读取cookie得到用户信息并将用户对象放入请求，从而方便后续流程使用，还有提取Locale、Theme信息等，只要是多个处理程序都需要的，即可使用拦截器实现。
```

### 2、拦截器三种方法:basketball_woman:

```
1、Spring Boot定义了HandlerInterceptor接口来实现自定义拦截器的功能
2、HandlerInterceptor接口定义了preHandle、postHandle、afterCompletion三种方法，通过重写这三种方法实现请求前、请求后等操作
```

![image-20221121160520366](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121160520366.png)

### 3、拦截器定义:artificial_satellite:

```java
package com.example.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("LoginInterceptor");
        return true;
    }
}
```

### 4、拦截器注册:boxing_glove:

```java
1、addPathPatterns方法定义拦截的地址
2、excludePathPatterns定义排除某些地址不被拦截
3、添加的一个拦截器没有addPathPattern任何一个url则默认拦截所有请求
4、如果没有excludePathPatterns任何一个请求，则默认不放过任何一个请求。

package com.example.config;

import com.example.interceptor.LoginInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor( new LoginInterceptor()).addPathPatterns("/user/**");
    }


}
```

