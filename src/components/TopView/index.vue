<template>
    <div>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card shadow="hover">
            <total-sales></total-sales>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <total-orders></total-orders>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <today-users></today-users>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <total-users></total-users>
          </el-card>
        </el-col>

      </el-row>
    </div>
</template>
<script>
import TotalSales from '../TotalSales'
import TotalOrders from '../TotalOrders'
import TotalUsers from '../TotalUsers'
import TodayUsers from '../TodayUsers'
  export default {
    components: {
      TotalSales,
      TotalOrders,
      TotalUsers,
      TodayUsers
    }
  }
</script>
<style scoped>
</style>
<style lang="scss">
  .emphasis {
    font-weight: 700;
    margin-left: 5px;
  }
  .increase {
    height: 0;
    width: 0;
    border-width: 3px;
    border-color: transparent transparent red transparent;
    border-style: solid;
    margin: 0 0 0 3px;
  }
  .decrease{
    height: 0;
    width: 0;
    border-width: 3px;
    border-color: green transparent transparent transparent;
    border-style: solid;
    margin: 0 0 0 3px;
  }
</style>
