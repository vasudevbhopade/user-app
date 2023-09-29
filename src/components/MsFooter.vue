<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-3 py-3">
          <h3>Mylta<span class="text-primary">SS</span></h3>
          <p><router-link to="/">info@myltass.com</router-link></p>
          <p><router-link to="/">+91 98581 14114</router-link></p>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Quick Links</h5>
          <ul
            v-for="(link, index) in quickLinks"
            :key="index"
            class="footer-menu"
          >
            <li>
              <router-link :to="link.route">{{ link.label }}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 py-3">
          <h5>About Us</h5>
          <ul
            v-for="(about, index) in aboutUs"
            :key="index"
            class="footer-menu"
          >
            <li>
              <router-link :to="about.route">{{ about.label }}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Subscribe</h5>
          <form action="#">
            <input
              v-model="email"
              type="text"
              class="form-control"
              placeholder="Enter your mail.."
            />
          </form>
          <div class="sosmed-button mt-4">
            <a
              v-for="(social, index) in socialMedia"
              :key="index"
              :href="getSocialLink(social.name)"
              ><i :class="social.mediaIcon"
            /></a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 py-2">
          <p id="copyright">
            &copy; {{ currentYear }} <router-link to="/">MyltaSS</router-link>.
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import IMsFooterSocial from "../interfaces/IMsFooterSocial";
import IMsFooterLinks from "../interfaces/IMsFooterLinks";
import "../css/theme.css";
const email = ref("");
const quickLinks: IMsFooterLinks[] = [
  {
    label: "How it Works",
    route: "/contact",
  },
  {
    label: "Security",
    route: "/contact",
  },
  {
    label: "Resources",
    route: "/contact",
  },
  {
    label: "Report a Bug",
    route: "/contact",
  },
];
const aboutUs: IMsFooterLinks[] = [
  { label: "About Us", route: "/contact" },
  { label: "Jobs", route: "/contact" },
  { label: "Our Teams", route: "/contact" },
];
const socialMedia: IMsFooterSocial[] = [
  { name: "Facebook", mediaIcon: "bi bi-facebook" },
  { name: "Twitter", mediaIcon: "bi bi-twitter" },
  { name: "Google", mediaIcon: "bi bi-google" },
  { name: "LinkedIn", mediaIcon: "bi bi-linkedin" },
];
const currentYear = computed(() => new Date().getFullYear());

const getSocialLink = (social: string) => {
  switch (social) {
    case "Facebook":
      return "#facebook-link"; // few links are acting placeholder
    case "Twitter":
      return "#twitter-link";
    case "Google":
      return "#google-link";
    case "LinkedIn":
      return "https://www.linkedin.com/company/mylta-software-solutions/";
    default:
      return "#";
  }
};
</script>
