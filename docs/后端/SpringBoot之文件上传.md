# SpringBoot之文件上传

### 1、文件上传原理:kissing_heart:

```
表单的enctype 属性规定在发送到服务器之前应该如何对表单数据进行编码。
当表单的enctype="application/x-www-form-urlencoded"（默认）时，form表单中的数据格式为：key=value&key=value
当表单的enctype="multipart/form-data"时，其传输数据形式如下
```

![image-20221121154809486](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121154809486.png)

### 2、SpirngBoot实现文件上传功能:currency_exchange:

```
Spring Boot工程嵌入的tomcat限制了请求的文件大小，每个文件的配置最大为1Mb，单次请求的文件的总数不能大于10Mb。
要更改这个默认值需要在配置文件（如application.properties）中加入两个配置

```

![image-20221121154852302](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121154852302.png)

### 3、SpirngBoot实现文件上传功能:abc:

```java
当表单的enctype="multipart/form-data"时,可以使用MultipartFile 获取上传的文件数据，再通过transferTo方法将其写入到磁盘中
package com.example.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.Date;

@RestController
public class FileUploadController {

    @PostMapping("/upload")
    public String up(String nickname, MultipartFile photo, HttpServletRequest request) throws IOException {
        System.out.println(nickname);
        // 获取图片的原始名称
        System.out.println(photo.getOriginalFilename());
        // 取文件类型
        System.out.println(photo.getContentType());

        String path = request.getServletContext().getRealPath("/upload/");
        System.out.println(path);
        saveFile(photo,path);
        return "上传成功";
    }

//
    public void saveFile(MultipartFile photo,String path) throws IOException {
//       判断存储的目录是否存在，如果不存在则创建
        File dir = new File(path);
        if(!dir.exists()){
//          创建目录
            dir.mkdir();
        }

        File file = new File(path+photo.getOriginalFilename());
        photo.transferTo(file);
    }
}

```

### 4、测试:ear_of_rice:

![image-20221121155106370](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221121155106370.png)