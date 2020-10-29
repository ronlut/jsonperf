import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ECharts from "vue-echarts";
import "echarts/lib/chart/bar";
import vuetify from "./plugins/vuetify";
import VueGtag from "vue-gtag";

Vue.config.productionTip = false;
Vue.component("v-chart", ECharts);
Vue.use(VueGtag, {
  config: {
    id: "G-2FB2J1LW8R"
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
