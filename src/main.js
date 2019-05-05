import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

const el1 = document.createElement('DIV')
el1.id = 'target1'
const el2 = document.createElement('DIV')
el2.id = 'target2'
const body = document.querySelector('body')
body.append(el1)
body.append(el2)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
