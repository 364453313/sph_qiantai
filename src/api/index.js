//这个模块进行API统一管理
import requests from "./request";
import mockRequests from "./mockAjax"

//三级联动的接口
///api/product/getBaseCategoryList  get 无参数

//发请求；axios发请求返回的结果是Promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

//获取home首页轮播图的接口
export const reqImgBanner = () => mockRequests.get('/banner')
