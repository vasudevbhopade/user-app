<template>
  <MsNavbar />
  <router-view />
  <MsFooter />
  <div class="back-to-top" />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import MsNavbar from "./components/MsNavbar.vue";
import MsFooter from "./components/MsFooter.vue";
import "../src/css/theme.css";

onMounted(() => {
  backTop();
});

const backTop = () => {
  const backTop = document.querySelector(".back-to-top") as HTMLElement;
  const handleScroll = () => {
    backTop.style.visibility = window.scrollY > 400 ? "visible" : "hidden";
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  };
  handleScroll();
  window.addEventListener("scroll", handleScroll);
  backTop.addEventListener("click", scrollToTop);
};
</script>

<style scoped></style>
