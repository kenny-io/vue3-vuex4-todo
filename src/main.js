import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
// import { createStore } from "./store/index";

createApp(App)
  .use(store)
  .mount("#app");
