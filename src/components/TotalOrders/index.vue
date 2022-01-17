<template>
    <div>
      <common-card
        value="34,993"
        title="累计订单量">
        <template v-slot:chart>
            <v-chart :option="getOptions()"></v-chart>
        </template>
        <template v-slot:footer>
          <span>昨日订单量 </span>
          <span class="emphasis">222</span>
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
    data () {
      return {
        options: '2'
      }
    },
    methods: {
      getOptions () {
        console.log('已经被调用')
        return {
          xAxis: {
            type: 'category',
            boundaryGap: false,
            show: false
          },
          yAxis: {
            show: false
          },
          series: [
            {
              data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 220, 620],
              type: 'line',
              areaStyle: {
                color: 'purple'
              },
              lineStyle: 0,
              itemStyle: {
                opacity: 0
              },
              smooth: true
            }
          ],
          grid: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  span {
    font-size: 12px;
  }
  .proportion{
    font-weight: 700;
  }
</style>
