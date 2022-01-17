<template>
    <div>
      <common-card
      value="14,984"
      title="今日交易用户数">
        <template v-slot:chart>
          <div id="today-user-total" :style="{width: '100%', height: '100%' }"></div>
        </template>
        <template v-slot:footer>
          <span>退货率 </span>
          <span class="money">0%</span>
        </template>
      </common-card>
    </div>
</template>
<script>
  import CommonCard from '../CommonCard'
  export default {
    components: {
      CommonCard
    },
    mounted () {
      const chartDom = document.getElementById('today-user-total')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        color: ['#3393BD'],
        xAxis: {
          type: 'category',
          // boundaryGap: false,
          show: false,
          data: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00',
            '10:00', '11:00', '12:00', '13:00']
        },
        yAxis: {
          show: false
        },
        series: [
          {
            data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 220, 620],
            type: 'bar',
            barWidth: '60%'
          }
        ],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      })
    }
  }
</script>
<style lang="sass" scoped>
</style>
