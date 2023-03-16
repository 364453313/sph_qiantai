import Vue from 'vue'
import App from './App.vue'

//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
//第一个参数全局组件的名字,第二个参数:那个组件
Vue.component(TypeNav.name, TypeNav)

//轮播图全局组件
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name, Carousel)

//引入mockServer.js,mock数据
import "@/mock/mockServer"

//引入swiper样式
import "swiper/dist/css/swiper.min.css"

//引入路由
import router from '@/router'

//引入仓库
import store from '@/store'

// 接口测试
/* import {reqGetSearchInfo} from "@/api"
console.log(reqGetSearchInfo({})) */


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    //全局事件总线$bus的配置
    beforeCreate(){
        Vue.prototype.$bus = this
    },
    //路由注册，kv一直省略v，router是小写的
    router, //这时组件身上都拥有$route和$router属性
    //注册仓库，组件实例身上会多一个属性$store属性
    store
}).$mount('#app')
