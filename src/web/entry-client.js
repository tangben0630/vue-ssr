import {
  creatApp
} from './main'
const {
  App,
  router
} = creatApp()

router.onReady(() => {
  App.$mount('#app')
})