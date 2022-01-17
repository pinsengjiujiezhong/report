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
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="排名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="关键词"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="总搜索量">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="搜索用户数">
                </el-table-column>
                <el-table-column
                  prop="address"
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

            </div>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </template>
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
        tableData: []
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
    .title{
      font-size: 14px;
      border-bottom: 1px solid #eee;
      padding-bottom: 20px;
    }
    .chart-wrapper{
      .chart-init{
        display: flex;
        margin: 20px 10px 0px 10px;
        .chart{
          width: 50%;
          .chart-title{
            font-size: 14px;
            color: #999;
          }
          .chart-data{
            font-size: 24px;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
