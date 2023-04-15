import { reqGoodsInfo } from "@/api"

const state = {
    goodInfo: {}
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const actions = {
    //获取产品信息的action
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code === 200) {
            commit('GETGOODINFO', result.data)
        }
    }
}
const getters = {
    //路径导航
    categoryView(state) {
        return state.goodInfo.categoryView || {}
    },
    //产品信息
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    //产品售卖属性
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}