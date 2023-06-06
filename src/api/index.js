//这个模块进行API统一管理
import requests from "./request";
import mockAjax from "./mockAjax"

//三级联动的接口
///api/product/getBaseCategoryList  get 无参数

//发请求；axios发请求返回的结果是Promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

//获取home首页轮播图的接口
// export const reqgetBannerList = () => mockAjax.get('/banner')
export const reqgetBannerList = () => mockAjax({ url: '/banner', method: 'get' })

//获取floor数据
export const reqFloorList = () => mockAjax({ url: '/floor', method: 'get' })

// 获取搜索模块请求 地址：/api/list   需要带参传递
//当前的接口，给服务器传递的参数params，至少是一个空对象
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params })

//获取商品详情
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: "get" })

//将产品添加到购物车当中（获取更新某个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

// 获取购物车列表数据接口
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })