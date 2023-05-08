# Springboot之Controller控制器

SpringBoot 提供了两种@controller和@restController注解负责接收处理HTTP请求

### 1、@Controller:deciduous_tree:

```
请求页面
前端${name}接收后端数据
通常与Thymeleaf模板引擎配合使用
```

### 2、@RestController:deciduous_tree:

```
请求数据
对象数据转Json数据
```

![image-20221121115840176](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121115840176.png)

### 3、路由映射:diamond_shape_with_a_dot_inside:

```java
@RequestMapping注解负责URL路由映射
作用域：类或方法
value：请求URL路径
method：HTTP请求方法
consumes:请求的媒体类型（application/json)
produces:响应的媒体类型
params,headers:请求的参数及请求头的值
@RequestMapping（value=“getUser”，method=RequestMethod.GET）

@RequestMapping
@RequestMapping（“/getJson/*.json”）
/getJson/x.json、/getJson/y.json
“*”匹配任意字符（优先级高）
“**”匹配任意路径（优先级低）
“？”匹配单个字符

```

### 4、Method匹配:bowing_woman:

```java
HTTP请求Method：GET、POST、PUT、DELETE等
@GetMapping、@PostMapping等
```

### 5、参数传递:first_quarter_moon:

```javascript
@RequestParam
绑定在方法参数上
当请求参数名与Controller的业务方法名称一致时@RequestParam可省略
@RequestParam("nikename")String name
```

```java
@PathVaraible
用来处理动态的URL、URL的值可以作为控制器中处理方法的参数
@GetMapping("/api/{id}")
 public String api(@PathVaraible int id)
```

```java
@RequestBody
请求体
application/json、application/xml
```

