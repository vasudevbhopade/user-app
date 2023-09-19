<template>
  <div class="nav">
    <router-link to="/"><h2>MyltaSS</h2></router-link>
    <router-link v-for="(link, index) in links" :key="index" :to="link.route"
      ><h3>{{ link.title }}</h3></router-link
    >
    <span><h3>#number</h3></span>
  </div>
</template>

<script setup lang="ts">
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

<style scoped>
.nav {
  background-color: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  color: #f2f2f2f2;
  padding: 14px 16px;
  text-decoration: none;
  margin-right: 5px;
  text-align: center;
  font-size: 18px;
}
.nav a:hover {
  color: #333;
  background-color: #ddd;
}
</style>
