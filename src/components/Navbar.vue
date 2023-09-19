<template>
  <!-- <div class="nav">
    <router-link to="/"><h2>MyltaSS</h2></router-link>
    <router-link v-for="(link, index) in links" :key="index" :to="link.route"
      ><h3>{{ link.title }}</h3></router-link
    >
    <span><h3>#number</h3></span>
  </div> -->
  <nav class="navbar navbar-expand-lg navbar-light navbar-float navbar-center">
    <div class="container navbar-flex">
      <div>
        <router-link to="/" class="navbar-brand nav-light"
          ><span>Mylta</span><span class="text-primary">SS</span></router-link
        >
        <router-link
          class="navbar-nav ml-lg-4 pt-3 pt-lg-0 nav-item nav-link"
          v-for="(link, index) in links"
          :key="index"
          :to="link.route"
        >
          {{ link.title }}
        </router-link>
      </div>
      <div class="ml-auto">
        <router-link to="/" class="btn btn-outline rounded-pill">
          <img
            src="./assets/img/phone-alt-solid.svg"
            alt="phone"
            style="width: 20px"
          />+91 98581 14114
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import '../css/navBar.css'
const links = [
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
</script>
