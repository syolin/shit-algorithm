// Import Module
import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import VueTyperPlugin from 'vue-typer'
import axios from 'axios'
import VueCookie from 'vue-cookie'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'semantic-ui/dist/semantic.min.css'
import 'semantic-ui/dist/semantic.min.js'
import jquery from 'jquery'
window.$ = jquery
window.jQuery = jquery

// Vue Use
// Tell Vue to use the plugin
Vue.use(VueCookie);
Vue.use(Vuex);
Vue.use(axios);
Vue.use(VueAwesomeSwiper);
Vue.use(VueTyperPlugin);

// Vue Axios

Vue.prototype.$http = axios;


// Import Vue Components
import App from './App'
import index from './components/index/index'
import problems from './components/problems/problems'
import solve from  './components/problems/solve'
import admin from './components/admin/admin'
import rank from './components/rank/rank'

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
        path: '/', component: index
    },
    {
        path: '/problems', component: problems
    },
    {
        path: '/admin', component: admin
    },
    {
        path: '/rank', component: rank
    },
    {
        parh: '/problems/:num', component: solve
    }


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
    '/admin': {
        name: 'admin',
        component: admin
    },
    '/rank': {
        name: 'rank',
        component: rank
    },
    '/problems/:num':{
        name: 'solve',
        component: solve
    }
})
;
router.beforeEach(() => {
    window.scrollTo(0, 0)
});

router.start(App, '#app');
