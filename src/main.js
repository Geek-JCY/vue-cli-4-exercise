/*
 * @Author: jichengye
 * @Date: 2021-09-30 14:11:46
 * @LastEditTime: 2022-06-15 23:50:45
 * @LastEditors: jichengye
 * @Description: 测试
 * @FilePath: /keepstudy/vue/vue-cli-4-exercise/src/main.js
 * $v$ 代码改变世界！奥利给！ $v$
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '@chanjet/common-login/lib/common-login.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
