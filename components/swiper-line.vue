
<template>
  <swiper class="swiper swiper-btn" :options="swiperOption" ref="mySwiper" v-if="list && list.length">
    <swiper-slide  v-for="(item,index) of list" :key='index'>
      <img :src="item.imageUrl" alt="" class="img-bg">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    props: {
      list: {
        type: Array,
        default: []
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          // init:false,
          spaceBetween: 30,
          centeredSlides: true,
          effect : 'fade',
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletActiveClass: 'active-bullet',
            renderBullet: function ( index, className) {
      			  return `<div class="${className}"><p class="${index !== 0 ?  'move' : 'no-move'}"></p></div>`;
  		      },
          },
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
　　      observeParents:true,//修改swiper的父元素时，自动初始化swiper
          on:{
            transitionEnd: function(){ //解决的一个动画
              setTimeout(() => {
                let div = document.getElementsByClassName('no-move')[0]
                // 这里的this指向swiper对象
                if (this.activeIndex == 1 && div) {
                  div.className = 'move'
                }
              },10)
            },
          },
        },
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    methods: {
    }
  }
</script>

<style lang="less" >
.swiper-btn{
  min-width: 1200px;
  .img-bg {
    width: 100%;
    // height: 510px;
  }
  .swiper-pagination-bullet {
    width: 120px;
    height: 2px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 0;
    opacity: 1;
    .move {
      width: 0;
    }
    .no-move {
      width: 0;
    }
  }
  .swiper-pagination {
    text-align: left;
    width: 1200px !important;
    left: 50% !important;
    transform: translate(-50%);
  }
  .active-bullet {
    .move {
      background: #fff;
      height: 2px;
      z-index: 2;
      width: 120px;
      transition:width 5s ease-in;
    }
  }
}
</style>

