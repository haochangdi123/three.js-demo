<template>
  <div class="c-main">
    <div class="c">
      <div class="c-circle">
        <circle-three></circle-three>
      </div>
    </div>
  </div>
</template>

<script>
import CircleThree from '../components/circle-three'

export default {
  components: {
    CircleThree
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .c-main {
    background: #fff;
    overflow: hidden;
    .c {
      width: 1200px;
      margin: auto;
      .c-circle {
        height: 421px;
        margin: 110px auto 169px;
      }
    }
  }

</style>
