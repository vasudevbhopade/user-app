<template>
  <section>
    <div id="app" class="footer">
      <div class="nav-column">
        <h2>Quick Links</h2>
        <p v-for="link in quickLinks" :key="link">{{ link }}</p>
      </div>
      <div class="nav-column">
        <h2>About Us</h2>
        <p v-for="about in aboutUs" :key="about">{{ about }}</p>
      </div>
      <div class="nav-column">
        <h2>Subscribe</h2>
        <input v-model="email" type="email" placeholder="Enter Your email.." />
        <span class="social-links">
          <a
            v-for="social in socialMedia"
            :key="social"
            :href="getSocialLink(social)"
            >{{ social }}</a
          >
        </span>
        <div class="copyRight">
          <p>&copy; {{ currentYear }} MyltaSS. All rights reserved</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const quickLinks = ref([
  "How it Works",
  "Security",
  "Resources",
  "Report a Bug",
]);
const aboutUs = ref(["About Us", "Jobs", "Our Teams"]);
const socialMedia = ref(["Facebook", "Twitter", "Google", "LinkedIn"]);
const email = ref("");
const currentYear = computed(() => new Date().getFullYear());

function getSocialLink(social: string) {
  switch (social) {
    case "Facebook":
      return "#facebook-link";
    case "Twitter":
      return "#twitter-link";
    case "Google":
      return "#google-link";
    case "LinkedIn":
      return "#linkedin-link";
    default:
      return "#";
  }
}
</script>

<style scoped>
.footer {
  display: flex;
  background-color: #f5f5f5;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #333;
}

.nav-column {
  flex: 1;
  padding: 20px;
}

.nav-column h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.nav-column p {
  margin: 0.5rem 0;
  font-size: 1.2rem;
}

input[type="email"] {
  width: 50%;
  padding: 0.5rem;
  margin-top: 1rem;
}

.social-links a {
  margin-top: 0.5rem;
  text-decoration: none;
  color: #333;
}
</style>
