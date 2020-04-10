import ajax from './ajax';
import mockAjax from './mockAjax'
//暴露get请求
export const reqBaseCategoryList = ()=>ajax('/product/getBaseCategoryList');
//暴露post请求
export const reqLogin = ()=>ajax.post('/user/passport/login',{mobile,password})
// 请求mock的接口, 获取轮播列表数据
export const reqBanners = ()=>mockAjax.get('/banners');
// 请求mock的接口, 获取所有楼层的列表数据
export const reqFloors = ()=>mockAjax.get('/floors')
// 请求搜索匹配的商品相关数据
export const reqProductList = (searchParams)=>ajax.post('/list',searchParams)

// reqProductList({})