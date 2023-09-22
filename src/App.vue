<template>
  <div>
    <MsNavbar />
    <router-view />
    <MsFooter />
  </div>
</template>

<script setup lang="ts">
import MsNavbar from "./components/MsNavbar.vue";
import MsFooter from "./components/MsFooter.vue";
</script>

<style scoped></style>
