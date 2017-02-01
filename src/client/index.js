import Vue from 'vue'
import Router from 'vue-router'
Vue.config.debug = true
Vue.use(Router)
// Awesome Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import App from './App'

import index from './components/main/index'

const router = new Router()

router.map({
  '/': {
    name: 'index',
    component: index
  }
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.start(App, '#app')
