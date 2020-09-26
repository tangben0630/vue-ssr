import Vue from 'vue'
import App from './App.vue'

import routerFn from './router/index'
import from ''


export function creatApp() {
  const router = routerFn()
  const App = new Vue({
    router,
    render: h => h(App)
  })
  return {
    App,
    router
  }
}