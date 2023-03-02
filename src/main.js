/*
 * @Author: w2xi
 * @Date: 2022-08-11 18:31:38
 * @LastEditors: wangjigang
 * @LastEditTime: 2023-03-02 18:09:58
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
