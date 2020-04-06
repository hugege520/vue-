<template>
  <div class="box">
    <Header />
      <router-view></router-view>
    <Footer v-if="!$route.meta.isHideFooter"/>
  </div>
</template>
<script>
import Header from './componentes/Header';
import Footer from './componentes/Footer'
export default {
  name: '',
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>


