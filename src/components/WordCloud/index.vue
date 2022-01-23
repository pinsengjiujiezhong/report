<template>
    <div class="wordcloud">
      <div id="contains"></div>
    </div>
</template>
<script>
  /*eslint-disable*/
  import 'echarts-wordcloud'
  export default {
    mounted  () {
      const chartDom = document.getElementById('contains')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        series: [{
            type: 'wordCloud',
            shape: 'circle',
            keepAspect: false,
            left: 'center',
            top: 'center',
            width: '70%',
            height: '80%',
            right: null,
            bottom: null,
            gridSize: 8,
            sizeRange: [12, 60],
            rotationStep: 45,
            rotationRange: [-90, 90],
            drawOutOfBound: false,
            layoutAnimation: true,
            textStyle: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              // Color can be a callback function or a color string
              color: function () {
                  // Random color
                  return 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                  ].join(',') + ')'
              }
            },
            emphasis: {
              focus: 'self',
              textStyle: {
                  textShadowBlur: 10,
                  textShadowColor: '#333'
              }
            },
            data: [{"name":"北京","value":2670,"user":2202},{"name":"上海","value":5718,"user":5379},{"name":"广州","value":5807,"user":5603},{"name":"深圳","value":9363,"user":1171},{"name":"南京","value":7103,"user":1843},{"name":"杭州","value":8182,"user":2127},{"name":"合肥","value":3378,"user":1191},{"name":"济南","value":830,"user":216},{"name":"太原","value":4083,"user":2009},{"name":"成都","value":3341,"user":1846},{"name":"重庆","value":1676,"user":100},{"name":"苏州","value":9361,"user":4255},{"name":"无锡","value":1288,"user":868},{"name":"常州","value":9248,"user":4532},{"name":"温州","value":9180,"user":1786},{"name":"哈尔滨","value":4993,"user":486},{"name":"长春","value":7283,"user":4021},{"name":"大连","value":9185,"user":7863},{"name":"沈阳","value":1006,"user":663},{"name":"拉萨","value":6823,"user":1404},{"name":"呼和浩特","value":8008,"user":5342},{"name":"武汉","value":9437,"user":511},{"name":"南宁","value":5980,"user":2785},{"name":"必胜客","value":8194,"user":409},{"name":"肯德基","value":451,"user":377},{"name":"麦当劳","value":5933,"user":3338},{"name":"海底捞","value":7150,"user":6276},{"name":"美食","value":6987,"user":5738},{"name":"商超","value":2533,"user":1577},{"name":"水果","value":4279,"user":1006},{"name":"跑腿","value":1975,"user":1522},{"name":"送药","value":244,"user":233},{"name":"烩饭","value":7236,"user":5097},{"name":"面条","value":6253,"user":4903},{"name":"小龙虾","value":9983,"user":7129},{"name":"牛肉","value":5833,"user":5036},{"name":"鸡腿","value":8349,"user":70},{"name":"全家桶","value":1606,"user":380},{"name":"麦乐鸡","value":2312,"user":2174},{"name":"炭烤","value":5740,"user":2688},{"name":"麻辣","value":5919,"user":3561},{"name":"冒菜","value":5452,"user":2329}].slice(0, 10)
        }]
      })
    }
  }
</script>
<style lang="scss" scoped>
.wordcloud{
  height: 100%;
  width: 100%;
  #contains{
    width: 100%;
    height: 100%;
  }
}
</style>
