import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api"

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
    },
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        //加入购物车返回的解构
        //加入购物车以后发请求，前台将参数带给服务器
        //服务器数据写入成功，并没有返回其他数据，返回code=200表示操作成功
        //因此不需要存储数据
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        // 代表服务器加入购物车成功
        if (result.code === 200) {
            return 'ok'
        }else{
           // 代表加入购物车失败 
            return Promise.reject(new Error('faile'))
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
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}