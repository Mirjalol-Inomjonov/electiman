import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/FontAwesome/css/all.css";
import VueNumber from "vue-number-animation";
import AOS from "aos";

AOS.init();
Vue.use(VueNumber);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
