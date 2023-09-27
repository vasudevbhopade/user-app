import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";

const app = createApp(App).use(router);
console.log("test");
app.mount("#app");
