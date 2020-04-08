import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

//修改axios的实例
const server = axios.create({
  baseURL:'/mock',
  timeout:2000,
})
//请求拦截器
server.interceptors.request.use((config)=>{
  NProgress.start();
  return config
})
//响应拦截器
server.interceptors.response.use(
  response=>{
    NProgress.done();
    return response.data;
  },

  error=>{
    NProgress.done();
    alert('请求出错'+error.message);
    return Promise.reject(error);
  }
)

export default server