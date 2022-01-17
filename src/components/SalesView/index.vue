<template>
    <div class="sales-view">
      <el-card shadow=hover :body-style="{ padding: '0 0 20px 0' }">
          <template v-slot:header>
            <div class="menu-wrapper">
              <el-menu :default-active="menuOption" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1" class=menu-option>销售额</el-menu-item>
                <el-menu-item index="2" class=menu-option>访问量</el-menu-item>
              </el-menu>
              <div class="menu-right">
                <div>
                <el-radio-group v-model="dateOpthon" size=small>
                  <el-radio-button label="今日"></el-radio-button>
                  <el-radio-button label="本周"></el-radio-button>
                  <el-radio-button label="本月"></el-radio-button>
                  <el-radio-button label="今年"></el-radio-button>
                </el-radio-group>
              </div>
              <div class="date">
                <el-date-picker
                  size="small"
                  v-model="value1"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </div>
              </div>
            </div>
          </template>
          <template>
            <div class="sales-view-chart-wrapper">
              <div class="sales-view-chart">
                <!-- <div class="sales-view-title">年度销售额</div> -->
                <v-chart :option="chartOption"></v-chart>
              </div>
              <div class="sales-view-list">
                <div class="list-item" v-for="(item, index) in rankData" :key="index">
                  <div class="list-item-left">
                    <span class="list-iten-no" :class="item.no < 4 ? 'top-no' : ''">{{item.no}}</span>
                    <span class="list-iten-text">{{item.text}}</span>
                  </div>
                  <div class="list-item-right">
                    <span class="list-item-number">{{item.number}}</span>
                  </div>
                </div>
              </div>
            </div>
          </template>
      </el-card>
    </div>
</template>
<script>
  export default {
    name: 'sales-view',
    data () {
      return {
        menuOption: '1',
        dateOpthon: '今日',
        value1: '',
        saleTotalList: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 220, 620],
        accessTotalList: [320, 122, 320, 784, 190, 830, 420, 320, 232, 330, 234, 450, 720, 220],
        chartList: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 220, 620],
        chartOption: {
          color: ['#3393BD'],
          title: {
            text: '年度销售额',
            textStyle: {
              fontSize: '14px'
            },
            top: 20,
            left: 20
          },
          xAxis: {
            type: 'category',
            show: true,
            axisTick: {
              alignWithLabel: true
            },
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          },
          yAxis: {
            show: true,
            type: 'value'
          },
          series: [
            {
              data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 220, 620],
              type: 'bar',
              barWidth: '35%'
            }
          ],
          grid: {
            top: 70,
            bottom: 50,
            left: 50,
            right: 50
          }
        },
        rankData: [
          {
            no: 1,
            text: '麦当劳',
            number: '53,212'
          }, {
            no: 2,
            text: '麦当劳',
            number: '53,212'
          }, {
            no: 3,
            text: '麦当劳',
            number: '53,212'
          }, {
            no: 4,
            text: '麦当劳',
            number: '53,212'
          }, {
            no: 5,
            text: '麦当劳',
            number: '53,212'
          }, {
            no: 6,
            text: '麦当劳',
            number: '53,212'
          }, {
            no: 7,
            text: '麦当劳',
            number: '53,212'
          }
        ]
      }
    },
    methods: {
      handleSelect (index) {
        console.log(index)
        console.log(typeof index)
        if (index === '1') {
          this.chartList = this.saleTotalList
        } else {
          this.chartList = this.accessTotalList
        }
        console.log(this.chartList)
      }
    }
  }
</script>
<style lang="scss" scoped>
.sales-view{
  margin-top: 20px;
  .menu-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu-option{
      padding: 0 30px;
      margin: 0 30px;
    }
    .menu-right{
      display: flex;
      margin-right: 20px;
    }
    .date{
      margin-left: 20px;
    }
  }
  .sales-view-chart-wrapper{
    height: 300px;
    width: 100%;
    display: flex;
    .sales-view-title{
      padding-left: 10px;
      font-size: 14px;
      font-weight: 600;
    }
    .sales-view-chart{
      width: 70%;
      height: 100%;
      padding: 5px 10px;
    }
    .sales-view-list{
      width: 30%;
      .list-item{
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
        font-size: 14px;
        .list-iten-no{
          line-height: 25px;
          text-align: center;
          width: 25px;
          height: 25px;
          display: inline-block;
          &.top-no{
            background-color: #000;
            border-radius: 50%;
            color: #fff;
          }
        }
        .list-iten-text{
          display: inline-block;
          line-height: 20px;
          margin-left: 10px;
        }
        .list-item-right{
          margin-right: 20px;
        }
      }
    }
  }

}

</style>
