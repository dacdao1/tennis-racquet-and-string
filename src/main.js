import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
