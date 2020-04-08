import ajax from './ajax';
import mockAjax from './mockAjax'
//暴露get请求
export const reqBaseCategoryList = ()=>ajax('/product/getBaseCategoryList');
//暴露post请求
export const reqLogin = ()=>ajax.post('/user/passport/login',{mobile,password})

export const reqBanners = ()=>mockAjax.get('/banners');
export const reqFloors = ()=>mockAjax.get('/floors')

