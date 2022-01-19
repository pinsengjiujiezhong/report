<template>
  <div class="bmap-chart">
    <v-chart :option="bmapOption"></v-chart>
  </div>
</template>

<script>
import 'echarts/extension/bmap/bmap'
export default {
  name: 'BMap',
  data () {
    return {
      bmapOption: {}
    }
  },
  mounted () {
    this.bmapOption = {
      bmap: {
        key: 'G1LFyjrNGIkns5OfpZnrCGAKxpycPLwb',
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bmap-chart{
  width: 100%;
  height: 100%;
}

</style>
