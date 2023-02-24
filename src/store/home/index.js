import { reqCategoryList, reqFloorList } from '@/api'
import { reqgetBannerList } from '@/api'
//search模块小仓库
const state = {
    //state中数据默认初始化根据接口返回值初始化
    categoryList: [],
    getBannerList: [],
    floorList:[]
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, getBannerList) {
        state.getBannerList = getBannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
const actions = {
    //通过API里面的接口函数调用，向服务器发送请求，获取服务器数据
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    async getBannerList({commit}) {
        let result = await reqgetBannerList()
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data)
        }
    },
    async getFloorList({commit}){
        let result = await reqFloorList()
        if(result.code ==200){
            commit("GETFLOORLIST",result.data)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}