import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BMap from '../views/BMap'
import LiquidFill from '../views/LiquidFill'
import WordCloud from '../views/WordCloud'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: BMap
  },
  {
    path: '/liqui',
    name: 'LiquidFill',
    component: LiquidFill
  },
  {
    path: '/word',
    name: 'WordCloud',
    component: WordCloud
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
