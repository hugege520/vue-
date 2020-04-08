import {
  reqBaseCategoryList,
  reqBanners,
  reqFloors
} from '@/api'

const state = {
  baseCategoryList: [],
  banners: [],
  floors: []
}

const mutations = {
  RECEIVE_CATEGORYS(state, categorys) {
    state.baseCategoryList = categorys.splice(0, categorys.length - 2)
  },
  RECEIVE_BANNERS(state, banners) {
    state.banners = banners
  },
  RECEIVE_FLOORS(state, floors) {
    state.floors = floors
  }
}

const actions = {
  async getBaseCategoryList({
    commit
  }) {
    const result = await reqBaseCategoryList()
    if (result.code === 200) {
      const categorys = result.data;
      commit('RECEIVE_CATEGORYS', categorys)
    }
  },
  async getBanners({
    commit
  }) {
    const result = await reqBanners()
    if (result.code === 200) {
      const categorys = result.data;
      commit('RECEIVE_BANNERS', categorys)
    }
  },
  async getFloors({
    commit
  }) {
    const result = await reqFloors()
    if (result.code === 200) {
      const categorys = result.data;
      commit('RECEIVE_FLOORS', categorys)
    }
  }
};

const getters = {

}


export default {
  state,
  mutations,
  actions,
  getters
}