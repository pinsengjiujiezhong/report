<template>
    <div>
      <div class="title">{{title}}</div>
      <div class="value">{{value}}</div>
      <div class="chart">
        <slot name="chart"></slot>
      </div>
      <div class="line"></div>
      <div class="total">
        <slot name="footer"></slot>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'common-card',
    props: {
      title: String,
      value: String
    }
  }
</script>
<style lang="scss" scoped>
  .title {
    font-size: 12px;
    color: #999;
  }
  .value {
    font-size: 25px;
    color: #000;
    margin-top: 5px;
    letter-spacing: 1px;
    font-weight: 500;
  }
  .chart {
    height: 50px;
    // background-color: #bfa;
  }
  .line {
    margin: 10px 0;
    border-bottom: 1px solid #eee;
  }
  .total {
    color: #333;
  }
</style>
