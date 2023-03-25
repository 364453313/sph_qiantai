//引入router
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

//使用插件
Vue.use(VueRouter)

//配置路由,需要暴露VueRouter类的实例
export default new VueRouter({
    //配置路由
    routes,
    //router滚动行为
    scrollBehavior(to, from, savedPosition) {
        // y=0代表滚动条在最上方
        return { y: 0 }
    },
})
