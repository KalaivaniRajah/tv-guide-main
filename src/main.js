import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import ItemLayout from "./components/layout/ItemLayout.vue";
import ButtonLayout from "./components/layout/ButtonLayout.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);
app.use(store).use(router);
app.component("item-layout", ItemLayout);
app.component("button-layout", ButtonLayout);
app.mount("#app");
