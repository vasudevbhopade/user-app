import { createRouter, createWebHistory } from "vue-router";
import MsHome from "./components/MsHome.vue";
import MsAbout from "./components/MsAbout.vue";
import MsContact from "./components/MsContact.vue";
import MsServices from "./components/MsServices.vue";
import MsTechnologies from "./components/MsTechnologies.vue";

const routes = [
  {
    name: "homenav",
    component: MsHome,
    path: "/",
  },
  {
    name: "about",
    component: MsAbout,
    path: "/about",
  },
  {
    name: "contact",
    component: MsContact,
    path: "/contact",
  },
  {
    name: "services",
    component: MsServices,
    path: "/services",
  },
  {
    name: "technologies",
    component: MsTechnologies,
    path: "/technologies",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
