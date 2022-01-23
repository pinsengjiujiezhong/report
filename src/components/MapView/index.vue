<template>
    <div class="map-view">
      <div class="left view">
        <b-map-scatter />
      </div>
      <div class="right view">
        <el-card class="box-card" :body-style="{ padding: '0 0 20px 0' }">
          <template slot: header>
            <div class="title">用户月同比增长</div>
          </template>
          <template>
            <div class="user-chart">
              <liquid-fill></liquid-fill>
            </div>
          </template>
        </el-card>
        <el-card class="box-card" :body-style="{ padding: '0 0 20px 0' }">
          <template slot: header>
            <div class="title">热门搜索</div>
          </template>
          <template>
            <div class="search-chart">
              <word-cloud></word-cloud>
            </div>
          </template>
        </el-card>
      </div>
    </div>
</template>
<script>
  /* eslint-disable */
  import BMapScatter from '../BMapScatter'
  import LiquidFill from '../LiquidFill'
  import WordCloud from '../WordCloud'
  export default {
    name: 'map-view',
    components: {
      BMapScatter,
      LiquidFill,
      WordCloud
    },
    data () {
      return {
        userBasisOption: {
          waveLength:'100%',
          // x轴
          xAxis:{
            show:false, // 不显示
          },
          // y轴
          yAxis: {
            show:false, // 不显示
          },
          grid:{
            top:'2.5%',
            right:'40',
            bottom:'2.5%',
            left:0,
          },
          series: [{
            type: 'liquidFill',
            radius: '100%',  // 半径大小
            center: ['50%', '50%'],    // 布局位置
            waveLength:'150',
            data:echartsData, // 水球波纹值


            //根据设计设置水波球背景颜色为透明
            backgroundStyle: {
              color: 'rgba(255,255,255,0)',
            },
            outline: { // 轮廓设置  不展示
              show: false
            },
            itemStyle: {
              //设置水球波动的渐变颜色
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 1,
                  color: 'rgba(23,242,206, .65)'
                },  {
                  offset: 0.9,
                  color: 'rgba(23,242,206, .15)'
                },{
                  offset: 0.4,
                  color: 'rgba(23,242,206, .15)'
                },{
                  offset: 0,
                  color: 'rgba(12,255,215,1)'
                }],
                globalCoord: false
              }
            },
            //水球中间展示字体及颜色
            label:{
              normal:{
                textStyle: {
                  fontSize: 24,
                  color:'#fff',
                  fontWeight:400,
                  formatter: '',
                }
              }
            }
          }]
        },
        searchOption: {}
      }
    }
  }
</script>
<style lang="scss" scoped>
  .map-view{
    display: flex;
    margin-top: 20px;
    box-sizing: border-box;
    .view{
      &:first-child{
        padding-right: 10px;
      }
      &:last-child{
        padding-left: 10px;
      }
    }
    .left{
      height: 600px;
      width: 80%;
    }
    .right{
      width: 20%;
      height: 600px;
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      .box-card{
        .title{
          padding: 20px;
          font-size: 14px;
          border-bottom: 1px solid #eee;
        }
        .user-chart{
          height: 190px;
          margin-top: 20px;
        }
        .search-chart{
          margin-top: 20px;
          height: 190px;
        }
        &:last-child{
          margin-top: 20px;
        }
      }
    }
  }
</style>
