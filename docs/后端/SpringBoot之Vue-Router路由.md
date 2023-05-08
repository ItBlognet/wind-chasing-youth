# SpringBoot之Vue-Router路由

### 1、VueRouter安装:alarm_clock:

```css
Vue路由vue-router是官方的路由插件，能够轻松的管理 SPA 项目中组件的切换。

Vue的单页面应用是基于路由和组件的，路由用于设定访问路径，并将路径和组件映射起来

vue-router 目前有 3.x 的版本和 4.x 的版本，vue-router 3.x 只能结合 vue2 进行使用，vue-router 4.x 只能结合 vue3 进行使用
安装：npm install vue-router@4
```

### 2、配置:baby:

```js
router/index.js
import VueRouter from "vue-router";
import Vue from "vue";
import Discover from '../components/Discover.vue'
import Friends from '../components/Friends.vue'
import My from '../components/My.vue'
import TopList from '../components/TopList'
import PlayList from '../components/PlayList'
import Product from '../components/Product'

Vue.use(VueRouter)

const router = new VueRouter({
    // 指定hash属性与组件的对应关系
    routes: [
       {path: '/',redirect:"/discover"},
       { path: '/discover', 
         component: Discover,
         // 通过children属性，嵌套声明子路由
         children: [
            {path:"toplist",component:TopList},
            {path:"playlist",component:PlayList},
        ]
       },
       { path: '/friends', component: Friends },
       { path: '/my', 
         component: My,
         children: [
            {path:":id",component:Product,props:true},
        ]
       },
       
   ]
})

export default router
```

```js
main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
```



### 3、调用:bookmark_tabs:

```vue
App.vue
<!-- 声明路由链接 -->
    <router-link to="/discover">发现音乐</router-link>
    <router-link to="/my">我的音乐</router-link>
    <router-link to="/friends">关注</router-link>
   <!-- 声明路由占位标签 -->
    <router-view></router-view>
```

### 4、**动态路由**:jack_o_lantern:

```vue
<router-link to="/product/1">商品1</router-link>
<router-link to="/product/2">商品2</router-link>
<router-link to="/product/3">商品3</router-link>
```

```js
const router = new VueRouter({
// 指定hash属性与组件的对应关系
routes: [
{ path: '/product/1', component: Product },
{ path: '/product/2', component: Product },
{ path: '/product/3', component: Product },
]
})
```

```js
{ path: '/product/:id',component:Product }
```

>通过动态路由匹配的方式渲染出来的组件中，可以使用 $route.params 对象访问到动态匹配的参数值，
>
>**比如在商品详情组件的内部，根据id值，请求不同的商品数据**。

```vue
<template>
<h1>Product组件</h1>
<!-- 获取动态的id值 -->
<p>{{$route.params.id}}</p>
</template>
<script>
export default {
// 组件的名称
name: 'Product'
}
</script>
```

> 为了简化路由参数的获取形式，vue-router 允许在路由规则中开启 props 传参。示例代码如下：

```js
{ path: '/product/:id',component: Product, props: true }
```

```vue
<template>
<h1>Product组件</h1>
<!-- 获取动态的id值 -->
<p>{{id}}</p>
</template>
<script>
export default {
// 组件的名称
name: 'Product',
props : [id]
}
</scrip>
```

### 5、导航守卫:basketball_man:

```css
vue-router提供的导航守卫主要用来拦截导航，让它完成跳转或取消。

to：Route：即将要进入的目标路由。

from：Route：当前导航正要离开的路由。

next：在守卫方法中如果声明了next形参，则必须调用 next() 函数，否则不允许用户访问任何一个路由

直接放行：next()，强制其跳转到登录页面：next('/login')

```

![image-20221122202712367](C:\Users\ZZZYY\AppData\Roaming\Typora\typora-user-images\image-20221122202712367.png)