# SpringBoot之MybatisPlus

### 1、ORM介绍:closed_umbrella:

```css
1、ORM（Object Relational Mapping，对象关系映射）是为了解决面向对象与关系数据库存在的互不匹配现象的一种技术。
2、ORM通过使用描述对象和数据库之间映射的元数据将程序中的对象自动持久化到关系数据库中。
3、ORM框架的本质是简化编程中操作数据库的编码。
```

![image-20221121222057505](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121222057505.png)

### 2、MyBatis-Plus介绍:vertical_traffic_light:

```css
1、MyBatis是一款优秀的数据持久层ORM框架，被广泛地应用于应用系统。
2、MyBatis能够非常灵活地实现动态SQL，可以使用XML或注解来配置和映射原生信息，能够轻松地将Java的POJO（Plain Ordinary Java Object，普通的Java对象）与数据库中的表和字段进行映射关联。
3、MyBatis-Plus是一个 MyBatis 的增强工具，在 MyBatis 的基础上做了增强，简化了开发。
```

![image-20221121222217395](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121222217395.png)

### 3、添加依赖:blonde_woman:

```xml
 <!--  MyBatisPlus依赖  -->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.4.2</version>
        </dependency>
        <!-- mysql驱动依赖  -->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.1.47</version>
        </dependency>
        <!--    数据连接池 druid    -->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.1.20</version>
        </dependency>
    </dependencies>
```

### 4、全局配置:control_knobs:

```properties
spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/mydb?useSSL=false
spring.datasource.username=root
spring.datasource.password=root
mybatis-plus.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl
server.port=8088
```

### 5、添加@MapperScan注解:cloud_with_lightning_and_rain:

```java
@SpringBootApplication
@MapperScan("cn.ruauto.mapper")
public class MpdemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(MpdemoApplication.class, args);
    }

}
```

### 6、Mybatis CRUD注解:balance_scale:

![image-20221121223127958](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121223127958.png)

### 7、CRUD操作:m:

![image-20221121223349414](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121223349414.png)

### 8、MybatisPlus注解:currency_exchange:

```css
@TableName，当表名与实体类名称不一致时，可以使用@TableName注解进行关联。
@TableField，当表中字段名称与实体类属性不一致时，使用@TableField进行关联
@TableId，用于标记表中的主键字段，MybatisPlus也提供了主键生成策略。
```

![image-20221121223458382](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121223458382.png)