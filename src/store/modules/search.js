import {reqProductList} from '@/api'

const state = {
  productList:{}
}

const mutations ={
  RECEIVE_PRODUCT_LIST(state,productList){
    state.productList = productList;
  }
}
 const actions ={
  async getProductList({commit},searchParams){
    const result = await reqProductList(searchParams)
    if(result.code === 200){
      const productList = result.data;
      commit('RECEIVE_PRODUCT_LIST',productList)
    }
  }
 }

 const getters = {
  trademarkList(state){
    return state.productList.trademarkList || [];
  },
  attrsList(state){ 
    return state.productList.attrsList || [];
  },
  goodsList (state) {
    return state.productList.goodsList || []
  }
 }

 export default {
  state,
  mutations,
  actions,
  getters
 }