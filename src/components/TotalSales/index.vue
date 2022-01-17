<template>
    <div>
      <common-card
      value="¥ 34993,000"
      title="累计销售额">
        <template v-slot:chart>
          <div class="compare-wrapper">
            <div class="compare">
              <span>日同比 </span>
              <span class="emphasis">3%</span>
              <div class="increase"></div>
            </div>
            <div class="compare">
              <span>月同比 </span>
              <span class="emphasis">10%</span>
              <div class="decrease"></div>
            </div>
          </div>
        </template>
        <template v-slot:footer>
          <span>昨日销售额 </span>
          <span class="emphasis">¥ 222.00</span>
        </template>
      </common-card>
    </div>
</template>
<script>
  import CommonCard from '../CommonCard'
  export default {
    components: {
      CommonCard
    }
  }
</script>
<style lang="scss" scoped>
span {
   font-size: 12px;
 }
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare{
    height: 50%;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
}
.proportion{
  font-weight: 700;
}
</style>
