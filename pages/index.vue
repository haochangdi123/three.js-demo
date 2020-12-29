<template>
  <div class="container">
    <div class="sl">
      <swiper-shrin :list="list"></swiper-shrin>
    </div>
  </div>
</template>

<script>
import SwiperShrin from '@/components/swiper-shrinkage.vue'

import txtBanner1 from '@/assets/img/new_banner1.png';
import txtBanner2 from '@/assets/img/new_banner2.png';

export default {
  components: {
    SwiperShrin
  },
  data() {
    return {
      list: [
        { imageUrl: txtBanner1, title: 'aaaa' },
        { imageUrl: txtBanner2, title: 'bbbb'}
      ]
    }
  },
  mounted() {
  },
  beforeDestroy() {

  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
</style>
