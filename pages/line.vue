<template>
  <div class="down">
    <div class="down-swiper" >
      <swiper-line :list="bannerList" v-if="bannerList && bannerList.length>1"></swiper-line>
      <img class="one-img" v-if="bannerList && bannerList.length == 1" :src="bannerList[0].imageUrl" />
    </div>
  </div>
</template>

<script>
import SwiperLine from '../components/swiper-line'
import banner1 from '@/assets/img/down-banner1.png';
import banner2 from '@/assets/img/down-banner2.png';
import banner3 from '@/assets/img/down-banner3.png';

export default {
  components: {
    SwiperLine
  },
  data() {
    return {
      bannerList: [
        { imageUrl: require('@/assets/img/down-banner1.png') },
        { imageUrl: require('@/assets/img/down-banner2.png') },
        { imageUrl: require('@/assets/img/down-banner3.png') }
      ]
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.down {
  position: relative;
  .down-swiper {
    max-height: 510px;
    background: #fff;
    .one-img{
      width: 100%;
      max-height: 510px;
      min-height: 200px;
    }
  }
}

</style>
