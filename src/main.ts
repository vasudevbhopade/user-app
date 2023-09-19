import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import 'bootstrap/dist/css/bootstrap.css'


const app = createApp(App).use(router);
app.mount("#app");
