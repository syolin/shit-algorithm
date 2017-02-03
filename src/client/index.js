import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

// Awesome Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// Vue Axios
Vue.use(axios)
Vue.prototype.$http = axios

// Import Vue Components
import App from './App'
import index from './components/index/index'
import users from './components/users/index'

// Vue Router
Vue.config.debug = true
Vue.use(Router)
const router = new Router()
router.map({
  '/': {
    name: 'index',
    component: index
  },
  '/users': {
    name: 'users',
    component: users
  }
})
router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.start(App, '#app')
