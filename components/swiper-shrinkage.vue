/**缩率图轮播**/
<template>
  <swiper class="swiper swiper-sl" :options="swiperOption" ref="mySwiper" v-if="list && list.length">
    <swiper-slide  v-for="(item,index) of list" :key='index'>
      <img :src="item.imageUrl" alt="" class="bg-im">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination">
    </div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: '',
    props: {
      list:{
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
      			  return `<div class="${className}"><img  alt="" class="bullet-img"><div class="${index !== 0 ?  'img-wrap' : 'no-wrap'}"></div></div>`;
  		      },
          },
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
　　      observeParents:true,//修改swiper的父元素时，自动初始化swiper
          on:{
            transitionEnd: () =>{ //解决的一个动画
              setTimeout(() => {
                let div = document.getElementsByClassName('no-wrap')[0]
                if (div) {
                  div.className = 'img-wrap'
                }
                let imgArr = document.getElementsByClassName('bullet-img')
                for (let index = 0; index < this.list.length; index++) {
                  imgArr[index].src = this.list[index].imageUrl;
                  // console.log(this.list[index]);
                }
              },10)
            },
          },
        }
      }
    },
    mounted() {
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
.swiper-sl{
  height: 969px;
  overflow: hidden;
  .swiper-pagination-bullets {
    bottom: 126px;
  }
  .swiper-slide:nth-child(2n) {
    .bg-im {
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;
      transform: scale(1);
    }
    &.swiper-slide-active {
      .bg-im {
        transform: scale(1.1);
        transition: all 5s ease 0s;
      }
    }
  }
  .swiper-slide:nth-child(2n+1) {
    .bg-im {
      display: block;
      width: 100%;
      height: 120%;
      overflow: hidden;
    }
    &.swiper-slide-active {
      .bg-im {
        transform: translate(0,-50px);
        transition: all 5s ease 0s;
      }
    }
  }
  .s-item-content{
    position: absolute;
    color: #ffffff;
    font-size: 56px;
    bottom: 400px;
    width: 1200px;
    left: 50%;
    transform: translateX(-50%);
    img{
      height: 172px;
      width: auto;
    }
  }
  .swiper-pagination-bullet {
    width: 108px;
    height: 60px;
    opacity: 1;
    position: relative;
    border: 2px solid transparent;
    border-radius: 0;
    background: none;
    .img-wrap {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 0;
      background: #FFFFFF;
      opacity: 0.44;
    }
    .no-wrap {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 0;
      background: #FFFFFF;
      opacity: 0.44;
    }
  }
  .swiper-pagination {
    text-align: left;
    bottom: 126px !important;
    width: 1200px !important;
    left: 50% !important;
    transform: translate(-50%);
  }
  .active-bullet {
    border: 2px solid #FFFFFF;
    .img-wrap {
      width: 100%;
      transition:width 5s ease-in;
    }
  }
  .bullet-img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>

