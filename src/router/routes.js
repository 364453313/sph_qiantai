//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

// 路由配置信息
export default [
    {
        path: '/home',
        component: Home,
        meta: { show: true }
    },
    {
        path: '/login',
        component: Login,
        meta: { show: false }
    },
    {
        path: '/register',
        component: Register,
        meta: { show: false }
    },
    {
        path: '/search/:keyword?',//?代表可传可不传
        component: Search,
        meta: { show: true },
        name: 'search',
        //路由组件能不能传递props参数呢?
        //布尔值写法:params
        // props:true
        //对象写法
        // props:{a:1,b:2},
        //函数写法
        props: ($route) => ({ keyword: $route.params.keyword, k: $route.query.k })
    },
    {
        // params传参携带商品id给详情页面
        path: '/detail/:skuid',
        component: Detail,
        meta: { isShow: true }
    },
    {
        path: '/addcartsuccess',
        name:'addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path:'/shopcart',
        component:ShopCart,
        meta: { show: true }
    },
    //默认首页
    {
        path: '/',
        redirect: '/home'
    }
]