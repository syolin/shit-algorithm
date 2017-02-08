// Import Module
import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'semantic-ui/dist/semantic.min.css'
import 'semantic-ui/dist/semantic.min.js'
import jquery from 'jquery'
window.$ = jquery
window.jQuery = jquery

// Vue Use
Vue.use(Vuex);
Vue.use(axios);
Vue.use(VueAwesomeSwiper);

// Vue Axios
Vue.prototype.$http = axios;

// Import Vue Components
import App from './App'
import index from './components/index/index'
import problems from './components/problems/problems'

// Vue Router
Vue.config.debug = true;
Vue.use(Router);
const router = new Router({
    hashbang: false,
    history: true,
    linkActiveClass: "active",
    router: routes
});

const routes = [
    {
      path: '/', component : index
    },
    {
      path: '/problems', component : problems
    },

];
router.map({
  '/': {
    name: 'index',
    component: index
  },
  '/problems': {
  name: 'problems',
  component: problems
  },
});
router.beforeEach(() => {
  window.scrollTo(0, 0)
});

router.start(App, '#app');
