// Import Module
import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'semantic-ui/dist/semantic.css'
import 'semantic-ui/dist/semantic.js'

// Vue Use
Vue.use(axios);
Vue.use(VueAwesomeSwiper);

// Vue Axios
Vue.prototype.$http = axios;

// Import Vue Components
import App from './App'
import index from './components/index/index'

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

];
router.map({
  '/': {
    name: 'index',
    component: index
  },
});
router.beforeEach(() => {
  window.scrollTo(0, 0)
});

router.start(App, '#app');
