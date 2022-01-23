<template>
    <div class="liquidfill">
      <div id="contains"></div>
    </div>
    <!-- <div id="contains"></div> -->
</template>
<script>
  import 'echarts-liquidfill'
  export default {
    mounted  () {
      console.log('test001')
      const chartDom = document.getElementById('contains')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        series: [{
            type: 'liquidFill',
            data: [0.8363],
            color: ['#bd5ea0'],
            label: {
              formatter: (item) => {
                console.log(item)
                return (item.data * 100).toFixed(2) + ' %'
              },
              fontSize: 30
            },
            outline: {
              show: false,
              itemStyle: {
                borderWidth: 5,
                borderColor: '#156ACF',
                shadowBlur: 20,
                shadowColor: 'rgba(255, 0, 0, 1)'
              }
            }
        }]
      })
    }
  }
</script>
<style lang="scss" scoped>
.liquidfill{
  height: 100%;
  width: 100%;
  #contains{
    width: 100%;
    height: 100%;
  }
}
</style>
