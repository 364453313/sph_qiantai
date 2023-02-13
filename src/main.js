import Vue from 'vue'
import App from './App.vue'

//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
//第一个参数全局组件的名字,第二个参数:那个组件
Vue.component(TypeNav.name, TypeNav)

//引入路由
import router from '@/router'

//引入仓库
import store from '@/store'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    //路由注册，kv一直省略v，router是小写的
    router, //这时组件身上都拥有$route和$router属性
    //注册仓库，组件实例身上会多一个属性$store属性
    store
}).$mount('#app')
