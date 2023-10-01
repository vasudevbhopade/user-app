<template>
  <nav class="navbar navbar-expand-lg navbar-light navbar-float">
    <div class="container">
      <router-link to="/" class="navbar-brand"
        >Mylta<span class="text-primary">SS</span></router-link
      >
      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarContent" class="navbar-collapse collapse">
        <ul class="navbar-nav ml-lg-4 pt-3 pt-lg-0">
          <li
            v-for="(link, index) in links"
            :key="index"
            :class="activeClasses(link)"
          >
            <router-link :to="link.route" class="nav-link">{{
              link.title
            }}</router-link>
          </li>
        </ul>

        <div class="ml-auto">
          <a href="#" class="btn btn-outline rounded-pill">
            <img
              src="../assets/img/phone-alt-solid.svg"
              alt=""
              style="width: 20px"
            />+91 98581 14114
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import "../css/theme.css";
import { useRoute } from "vue-router";
import { computed } from "vue";
import IMsNavbar from "../interfaces/IMsNavbarLinks";

const links: IMsNavbar[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Services",
    route: "/services",
  },
  {
    title: "Technologies",
    route: "/technologies",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Contact",
    route: "/contact",
  },
];

const route = useRoute();

const isLinkActive = (routePath: string) => {
  return route.path === routePath;
};

const activeClasses = computed(() => (link: IMsNavbar) => {
  return ["nav-item ", { "exact-active active": isLinkActive(link.route) }];
});
</script>
