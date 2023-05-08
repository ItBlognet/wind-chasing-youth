# SpringBoot之Spring-devtools 热部署

### 第一步:arrow_down_small:导包

```xml
  <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
   </dependency>
```

### 第二步:card_index_dividers:添加配置

```properties
#开启热部署
spring.devtools.restart.enabled=true
#热部署从新加载java下面类文件
spring.devtools.restart.additional-paths=src/main/java
#排除静态文件重新部署
spring.devtools.restart.exclude=static/**
```

### 第三步:dagger:Settings页面配置

![image-20221121112256514](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121112256514.png)

### 第四步:dango:Ctrl+Shift+Alt+/

![image-20221121112957212](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121112957212.png)

### ![image-20221121113055768](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121113055768.png)

### 