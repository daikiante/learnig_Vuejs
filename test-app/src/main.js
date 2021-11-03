import Vue from 'vue'
import App from './App.vue'

// trueにすると開発用のtipsがコンソールに出る
Vue.config.productionTip = false

new Vue({
  // ES6のアロー関数形式で書かれている
  render: h => h(App),
}).$mount('#app')
