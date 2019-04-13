import '@babel/polyfill'
import Vue from 'vue'
import './plugins/axios'
import BootstrapVue from 'bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Amplify, { API } from 'aws-amplify';
import aws_exports from './aws-exports';
import { components } from 'aws-amplify-vue'; 

Vue.config.productionTip = false;
Amplify.configure(aws_exports);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(require('vue-moment'));

new Vue({
  router,
  store,
  render: h => h(App),
  components: { 
    App,
    ...components
  }
}).$mount('#app')
