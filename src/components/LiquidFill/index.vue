<template>
    <div class="liquidfill">
      <div id="liquidfill"></div>
    </div>
    <!-- <div id="contains"></div> -->
</template>
<script>
  import 'echarts-liquidfill'
  export default {
    mounted  () {
      console.log('test001')
      const chartDom = document.getElementById('liquidfill')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        series: [{
            type: 'liquidFill',
            data: [0.8363],
            radius: '90%',
            color: ['#bd5ea0'],
            itemStyle: {
              opacity: 0.7
            },
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
                borderColor: '#409eff'
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
  #liquidfill{
    width: 100%;
    height: 100%;
  }
}
</style>
