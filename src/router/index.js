import Vue from "vue";
import VueRouter from 'vue-router'
import routes from './routes'



// 方案2: 修正Vue原型上的push和replace方法
const originPush = VueRouter.prototype.push
VueRouter.prototype.push=function(location,onComplete=()=>{},onAbort) {
  return originPush.call(this,location,onComplete,onAbort)
}



Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',
  routes
})