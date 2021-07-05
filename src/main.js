import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
/* axios */
import axios from "axios";
import VueAxios from "vue-axios";
import { setupCache } from "axios-cache-adapter";
/* axios config */
const cache = setupCache({
  maxAge: 2 * 60 * 1000,
});
const api = axios.create({
  baseURL: "/api",
  adapter: cache.adapter,
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_API_KEY}`,
  },
});
/* CSS */
import "./index.css";
import "@/assets/whatsnext.css";

createApp(App).use(VueAxios, api).use(router).mount("#app");
