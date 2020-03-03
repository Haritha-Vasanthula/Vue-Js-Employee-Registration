import Vue from 'vue'
import App from './App.vue'
// import sample from './sample.vue'

// import registration from './components/registration.vue'

Vue.config.productionTip = false
// export const bus = new Vue();
new Vue({
  // render: h => h(registration),
  render: h => h(App),
}).$mount('#app')
