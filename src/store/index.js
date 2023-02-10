import Vue from 'vue'
import Vuex from 'vuex'

//需要使用一次插件
Vue.use(Vuex)

//state:仓库存储数据的地方
const state = {}
//mutations:修改state的唯一手段
const mutations = {}
//actions:处理action可以书写自己的业务逻辑，也可以处理异步
const actions = {}
//getters:可以理解于计算属性，用于简化仓库数据，让组件使用仓库数据更加方便
const getters = {}

//对外暴露Store类的实例
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})