<template>
    <div>
      <common-card
      value="1,087,503"
      title="累计用户数">
        <template v-slot:chart>
          <div id="total-users-chart" :style="{width: '150%', height: '100%' }"></div>
        </template>
        <template v-slot:footer>
          <div class="total-users-footer">
            <span>日同比</span>
            <span class="emphasis">8.83%</span>
            <div class="increase"></div>
            <span class="month">月同比</span>
            <span class="emphasis">39.51%</span>
            <div class="increase"></div>
          </div>
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
      const chartDom = document.getElementById('total-users-chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            name: '上月平台用户数',
            data: [300],
            stack: '总量',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            name: '今日平台用户数',
            data: [250],
            stack: '总量',
            type: 'bar',
            itemStyle: {
              color: '#eee'
            }
          },
          {
            data: [300],
            type: 'custom',
            stack: '总量',
            renderItem: (params, api) => {
              console.log(api)
              const value = api.value(0)
              const endPoint = api.coord([value, 0])
              console.log(value, endPoint)
              return {
                type: 'group',
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  },
                    {
                    type: 'path',
                    shape: {
                      d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  }
                ]
              }
            }
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
<style lang="scss">
.total-users-footer{
  display: flex;
  align-items: center;
  .month{
    margin-left: 10px;
  }
  span {
    font-size: 12px;
  }
}
</style>
