import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
/* axios */
import axios from "axios";
import VueAxios from "vue-axios";
/* axios config */
axios.defaults.baseURL = "/api";
/* CSS */
import "./index.css";
import "@/assets/whatsnext.css";

createApp(App).use(VueAxios, axios).use(router).mount("#app");
