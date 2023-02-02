import Vue from 'vue'
import App from './App.vue'

import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //路由注册，kv一直省略v，router是小写的
  router //这时组件身上都拥有$route和$router属性
}).$mount('#app')
