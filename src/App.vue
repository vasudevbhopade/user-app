<template>
  <div>
    <Navbar />
    <router-view />
    <h1>hi</h1>
    <Footer />
  </div>
</template>


<script setup lang="ts">
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue";
</script>

<style scoped></style>
