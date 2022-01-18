<template>
    <div class="bottom-view">
      <div class="view">
        <el-card shadow="hover">
          <template slot: header>
            <div class="title">关键词搜索</div>
          </template>
          <template >
            <div class="chart-wrapper">
              <div class="chart-init">
                <div class="chart">
                  <div class="chart-title">搜索用户数</div>
                  <div class="chart-data">110,101</div>
                  <v-chart :option="searchUserData"></v-chart>
                </div>
                <div class="chart">
                  <div class="chart-title">搜索量</div>
                  <div class="chart-data">213,150</div>
                  <v-chart :option="searchNumberData"></v-chart>
                </div>
              </div>
                <el-table
                  class="table-wrapper"
                :data="categoryList"
                style="width: 100%">
                <el-table-column
                  prop="index"
                  label="排名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="word"
                  label="关键词"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="count"
                  label="总搜索量">
                </el-table-column>
                <el-table-column
                  prop="user"
                  label="搜索用户数">
                </el-table-column>
                <el-table-column
                  prop="clickRate"
                  label="点击率">
                </el-table-column>
              </el-table>
            </div>
            <el-pagination
              background
              class="pagination"
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </template>
        </el-card>
      </div>
      <div class="view">
        <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
          <template slot: header>
            <div class="category-header">
              <div class="title">分类销售排行</div>
              <el-radio-group v-model="salesCategory" size="small" class="category-redio">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </template>
          <div class="chart-wrapper">
            <div class="chart-category">
              <v-chart :option="categoryOption"></v-chart>
            </div>
          </div>
        </el-card>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'bottom-view',
    data () {
      return {
        searchUserData: {
          xAxis: {
            type: 'category',
            show: false
          },
          yAxis: {
            show: false
          },
          series: [
            {
              type: 'line',
              data: [100, 99, 80, 70, 60, 56, 51, 48, 46, 42, 39, 30, 29, 25, 21, 18, 14, 10, 6, 3, 1, 1],
              areaStyle: {
                color: '#c7e7ff'
              },
              smooth: 0.5,
              // # 折线的点去除
              itemStyle: {
                opacity: 0
              },
              lineStyle: {
                color: '#5fbbff'
              }
            }
          ],
          grid: {
            top: 2,
            bottom: 0,
            left: 0,
            right: 0
          }
        },
        searchNumberData: {
          xAxis: {
            type: 'category',
            show: false
          },
          yAxis: {
            show: false
          },
          series: [
            {
              type: 'line',
              data: [100, 69, 80, 40, 20, 66, 21, 38, 76, 42, 69, 31, 29, 65, 31, 58, 45, 70, 61, 32, 64, 71],
              areaStyle: {
                color: '#c7e7ff'
              },
              smooth: 0.5,
              // # 折线的点去除
              itemStyle: {
                opacity: 0
              },
              lineStyle: {
                color: '#5fbbff'
              }
            }
          ],
          grid: {
            top: 2,
            bottom: 0,
            left: 0,
            right: 0
          }
        },
        tableData: [
        {
          word: '北京',
          count: 5051,
          user: 2653
        }, {
          word: '上海',
          count: 2880,
          user: 2687
        }, {
          word: '广州',
          count: 4683,
          user: 1015
        }, {
          word: '深圳',
          count: 9028,
          user: 6806
        }],
        salesCategory: '品类',
        categoryOption: {}
      }
    },
    computed: {
      categoryList () {
        const categoryList = this.tableData.map((item) => {
          item.index = this.tableData.indexOf(item)
          item.clickRate = '98.38%'
          return item
        })
        return categoryList
      }
    }
  }
</script>
<style lang="scss" scoped>
.bottom-view{
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  .view{
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:last-child{
      padding-left: 10px;
    }
    &:first-child{
      padding-right: 10px;
    }
    .title{
      font-size: 14px;
      border-bottom: 1px solid #eee;
      padding-bottom: 20px;
    }
    .pagination{
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;
    }
    .table-wrapper{
      padding: 20px;
      width: 100%;
    }
    .chart-wrapper{
      .chart-init{
        display: flex;
        margin: 20px 10px 0px 10px;
        .chart{
          width: 50%;
          .echarts{
            width: 100%;
            height: 50px;
          }
          .chart-title{
            font-size: 14px;
            padding-left: 5px;
            color: #999;
          }
          .chart-data{
            font-size: 24px;
            padding-left: 5px;
            font-weight: 500;
          }
        }

      }
    }
    .category-header{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      height: 60px;
      align-items: center;
      .title{
        margin-left: 10px;
        border: none;
        padding-bottom: 0px;
      }
      .category-redio{
        margin-right: 10px;
      }
    }

  }
}
</style>
