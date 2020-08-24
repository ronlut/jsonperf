import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'

Vue.config.productionTip = false;
Vue.component('v-chart', ECharts)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
