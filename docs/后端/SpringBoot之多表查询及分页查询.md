# SpringBoot之多表查询及分页查询	

### 1、多表查询:alembic:

```css
实现复杂关系映射，可以使用@Results注解，@Result注解，@One注解，@Many注解组合完成复杂关系的配置。
```

![image-20221122135641165](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221122135641165.png)

### 2、分页查询:alien:

```java
编写配置文件
@Configuration
public class MyBatisPlusConfig {
    @Bean
    public MybatisPlusInterceptor paginationInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        PaginationInnerInterceptor paginationInterceptor = new PaginationInnerInterceptor(DbType.MYSQL);
        interceptor.addInnerInterceptor(paginationInterceptor);
        return interceptor;

    }
}
```

### 3、实体:amphora:

```java
@Data
@TableName("t_user")
public class User {
    @TableId(type = IdType.AUTO)
    private int id;
    private String username;
    private String password;
    private String birthday;

//  描述用户的所有订单
    @TableField(exist = false)
    private List<Order> orders;
}
```

```java
@Data
@TableName("t_order")
public class Order {
    private int id;
    private String ordertime;
    private double total;

    @TableField(exist = false)
    private User user;
}
```

### 4、Mapper:blonde_woman:

```java
//用于操作用户表,MyBaits会根据Mapper注解，动态实现UserMapper接口（实现类），动态代理技术
//Spring会自动创建UserMapper接口实现类对应的实例
@Mapper
public interface UserMapper extends BaseMapper<User> {

//   查询用户，根据用户id查询信息   select * from user where id =
    @Select("select * from t_user where id = #{id}")
    User selectById(int id);


//   查询用户及其所有的订单
    @Select("select * from t_user")
    @Results(
            {
                    @Result(column = "id",property = "id"),
                    @Result(column = "username",property = "username"),
                    @Result(column = "password",property = "password"),
                    @Result(column = "birthday",property = "birthday"),
                    @Result(column = "id",property = "orders",javaType = List.class,
                            many=@Many(select = "com.example.mpdemo.mapper.OrderMapper.selectByUid")
                    )
            }
    )
    List<User> selectAllUserAndOrders();
}
```

```java
@Mapper
public interface OrderMapper extends BaseMapper<Order> {

    @Select("select * from t_order where uid = #{uid}")
    List<Order> selectByUid(int uid);

//  查询所有的订单，同时查询订单的用户
    @Select("select * from t_order")
    @Results({
            @Result(column = "id",property = "id"),
            @Result(column = "ordertime",property = "ordertime"),
            @Result(column = "total",property = "total"),
            @Result(column = "uid",property = "user",javaType = User.class,
                one=@One(select = "com.example.mpdemo.mapper.UserMapper.selectById")
            )
    })
    List<Order> selectAllOrdersAndUser();
}
```

### 5、分页查询测试:blonde_man:

```java
@RestController
@CrossOrigin
public class UserContoller {

    @Autowired
    UserMapper userMapper;

    @GetMapping("/user/findAll")
    public List<User> find(){
        return userMapper.selectAllUserAndOrders();
    }

//  条件查询
    @GetMapping("/user/find")
    public List<User> findByCond(){
        QueryWrapper<User> queryWrapper = new QueryWrapper();
        queryWrapper.eq("username","zhangsan");
        return userMapper.selectList(queryWrapper);
    }

//  分页查询
    @GetMapping("/user/findByPage")
    public IPage findByPage(){
        //设置起始值及每页条数
        Page<User> page = new Page<>(0,2);
        IPage iPage = userMapper.selectPage(page,null);
        return iPage;
    }

//  插入数据
    @PostMapping("/user")
    public String save(User user){
        int r= userMapper.insert(user);
        if(r > 0){
            return "插入成功";
        }else{
            return "插入失败";
        }
    }
}
```

