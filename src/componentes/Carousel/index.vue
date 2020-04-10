<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(p,index) in carouselList" :key="p.id">
        <img :src="p.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "Carousel",
  props: {
    carouselList: Array
  },
  watch: {
    carouselList: {
      handler() {
        if(this.carouselList.length === 0){
          return;
        }
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.swiper, {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination"
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },

            // 如果需要滚动条
            scrollbar: {
              el: ".swiper-scrollbar"
            }
          });
        });
      },
       immediate: true,
    }
  }
};
</script>

<style lang="less" scoped>
</style>
