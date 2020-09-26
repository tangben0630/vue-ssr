import Vue from "vue"
import Router from "vue-router"
import Nihao from '../components/nihao.vue'

Vue.use(Router)
const createRouter = () => {
  const router = new Router({
    routes: [{
      path: '/nihao',
      name: '',
      component: Nihao
    }]
  })
  return router
}