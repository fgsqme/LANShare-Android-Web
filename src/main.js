import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'
import api from '@/utils/api';
import { Message} from 'element-ui';

Vue.config.productionTip = false

import '@/assets/css/base.scss';
import '@/assets/css/index.scss';

/* 请求接口 */
Vue.prototype.base_api = process.env.VUE_APP_BASE_API
Vue.prototype.$api = api;
Vue.prototype.$axios = axios;
Vue.prototype.$message = Message; // 全局提示信息

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
