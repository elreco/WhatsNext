import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "@/assets/pongo-test.min.css";

createApp(App).use(router).mount("#app");
