// Import Module
import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import vueUI from 'vue-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// Vue Use
Vue.use(vueUI)
Vue.use(axios)
Vue.use(VueAwesomeSwiper)

// Vue Axios
Vue.prototype.$http = axios

// Import Vue Components
import App from './App'
import index from './components/index/index'
import users from './components/users/index'

// Vue Router
Vue.config.debug = true
Vue.use(Router)
const router = new Router({
    hashbang: false,
    history: true,
    linkActiveClass: "active",
    router: routes
})

const routes = [
    {
      path: '/', component : index
    },
    {
      path: '/users', component : users
    }
]
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
