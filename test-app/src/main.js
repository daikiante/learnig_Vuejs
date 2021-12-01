import Vue from 'vue'

// Appはコンポーネントとして認識される
import App from './App.vue'

import LikeNumber from "./components/LikeNumber.vue"

// trueにすると開発用のtipsがコンソールに出る
Vue.config.productionTip = false

// 単一ファイルコンポーネントをグローバル登録している
Vue.component("LikeNumber", LikeNumber);

// これがAppコンポーネント
console.log(App)

new Vue({
  // ES6のアロー関数形式で書かれている
  render: h => h(App),
}).$mount('#app')

