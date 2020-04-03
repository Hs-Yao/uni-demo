import Vue from 'vue'
import App from './App'
import store from './store/index'
// import plugins from './plugins/index'
import global from './components/global'

// Vue.use(plugins);
Vue.component('global',global);
Vue.config.productionTip = false;
Vue.prototype.$store = store;


App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
