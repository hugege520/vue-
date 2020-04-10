import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './componentes/TypeNav'
import store from './store'
import './mock/mockServer'
import Carousel from "./componentes/Carousel/index.vue";
Vue.config.productionTip = false

Vue.component('TypeNav',TypeNav);
Vue.component('Carousel',Carousel);
new Vue({
  beforeCreate () {
    Vue.prototype.$bus = this  // 将当前vm作为事件总线保存到Vue原型对象 ==> 所有组件都可见
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
