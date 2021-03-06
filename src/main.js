import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import VueRouter from 'vue-router'
import axios from 'axios';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import routers from './routers'

Vue.use(VueRouter)
Vue.use(ElementUI)
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$axios = axios;
axios.defaults.baseURL =  "/api";


const router = new VueRouter({
    mode: 'history',
    routes: routers
})


new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
