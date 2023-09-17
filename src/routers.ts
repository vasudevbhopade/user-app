import { createRouter, createWebHistory } from "vue-router";
import HomeNav from "./components/HomeNav.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Number from "./components/Number.vue";
import Services from "./components/Services.vue";
import Technologies from "./components/Technologies.vue";

const routes = [
  {
    name: "homenav",
    component: HomeNav,
    path: "/",
  },
  {
    name: "about",
    component: About,
    path: "/about",
  },
  {
    name: "contact",
    component: Contact,
    path: "/contact",
  },
  {
    name: "number",
    component: Number,
    path: "/number",
  },
  {
    name: "services",
    component: Services,
    path: "/services",
  },
  {
    name: "technologies",
    component: Technologies,
    path: "/technologies",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
