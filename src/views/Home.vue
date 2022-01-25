<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
/*eslint-disable*/
  import TopView from '../components/TopView'
  import SalesView from '../components/SalesView'
  import BottomView from '../components/BottomView'
  import MapView from '../components/MapView'
  import api from '../api'
export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  },
  mounted () {
    console.log('执行了')
    api.wordCloud().then(
      data => console.log(data)
    ).catch(
      err => console.log(err)
    )
  }
}
</script>
<style lang="scss">
  .home{
    width: 100%;
    padding: 20px;
    background-color: #eee;
    box-sizing: border-box;
  }
</style>
