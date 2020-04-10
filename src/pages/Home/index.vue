<template>
  <div class="home">
    <!-- 商品分类导航 -->
    <TypeNav />
    
    <!--列表-->
    <ListContainer />

    <!--今日推荐-->
    <TodyRecommend />
    
    <!-- 商品排行 -->
    
    <Rank />
    <!-- 猜你喜欢 -->
    
    <Like />

    <!--楼层-->
    <Floor v-for="(p,index) in floors" :key="index" :p="p"/>

    <!--楼层-->
     

    <!--商标-->
    <Brand />
  </div>
</template>

<script>
  import TodyRecommend from './TodyRecommend/TodyRecommend'
  import ListContainer from './ListContainer/index'
  import Rank from './Rank/index'
  import Like from './Like/index'
  import Floor from './Floor/index'
  import Brand from './Brand/index'
  import {mapState} from 'vuex'
  export default {
    name: 'Home',
     mounted () {
      // 触发vuex的异步action调用, 从mock接口请求数据到state中
      this.$store.dispatch('getBanners')
      this.$store.dispatch('getFloors')
    },
    computed:{
      ...mapState({
        floors:state=>state.home.floors
      })
    },
    components: { // 局部注册, 只能在当前组件中使用
      TodyRecommend,
      ListContainer,
      Rank,
      Like,
      Floor,
      Brand
    }
  }
</script>

<style lang="less" scoped>
  
</style>
