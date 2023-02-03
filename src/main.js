import Vue from 'vue'
import App from './App.vue'
//三级联动组件---全局组件
import TypeNav from '@/pages/Home/TypeNav'
//第一个参数全局组件的名字,第二个参数:那个组件
Vue.component(TypeNav.name,TypeNav)

//引入路由
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //路由注册，kv一直省略v，router是小写的
  router //这时组件身上都拥有$route和$router属性
}).$mount('#app')
