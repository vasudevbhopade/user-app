<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-3 py-3">
          <h3>Mylta<span class="text-primary">SS</span></h3>

          <p><a href="#">info@myltass.com</a></p>
          <p><a href="#">+91 98581 14114</a></p>
        </div>
        <div class="col-lg-3 py-3">
            <h5>Quick Links</h5>
            <ul v-for="(link , index) in quickLinks" :key="index" class="footer-menu">
              <li><a href="./contact.html">{{ link }}</a></li>
            
            </ul>
          </div>
        <div class="col-lg-3 py-3">
          <h5>About Us</h5>
          <ul v-for="about in aboutUs" :key="about" class="footer-menu">
            <li ><a href="#">{{ about }}</a></li>
        
          </ul>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Subscribe</h5>
          <form action="#">
            <input
              type="text"
              class="form-control"
              placeholder="Enter your mail.."
            />
          </form>

          <span v-for="(media, index) in socialMedia" :key="index" class="sosmed-button mt-4">
            <a href="#"><span> {{ media }}</span></a>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 py-2">
          <p id="copyright">
            &copy; {{ currentYear }}<a href="../index.html">MyltaSS</a>. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import '../style/msFooter.css'
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

function getSocialLink(social: String) {
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

