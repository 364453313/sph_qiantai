//引入router
import Vue from 'vue'
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter)

//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

//配置路由,需要暴露VueRouter类的实例
export default new VueRouter({
    //配置路由
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        {
            path:'/search/:keyword?',//?代表可传可不传
            component:Search,
            meta:{show:true},
            name:'search',
            //路由组件能不能传递props参数呢?
            //布尔值写法:params
            // props:true
            //对象写法
            // props:{a:1,b:2},
            //函数写法
            props:($route)=>({keyword:$route.params.keyword,k:$route.query.k})
        },
        //默认首页
        {
            path:'/',
            redirect:'/home'
        }
    ]
})
