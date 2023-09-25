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

<style scoped>
.page-footer {
  position: relative;
  display: block;
  padding-top: 80px;
  padding-bottom: 16px;
  background-color: #fff;
  border-top: 1px solid #e9e8f5;
}

.page-footer p a {
  transition: color 0.2s ease;
}

.page-footer h3,
.page-footer h4,
.page-footer h5 {
  color: #645f88;
  margin-bottom: 24px;
  font-weight: 600;
}

.page-footer p {
  color: #898798;
}

.footer-menu {
  position: relative;
  padding-left: 0;
  list-style: none;
}

.footer-menu li {
  margin-bottom: 12px;
}

.footer-link {
  display: inline-block;
  padding: 6px 0;
}

.footer-menu a,
.footer-link {
  color: #898798;
}

.footer-menu a:hover,
.footer-link:hover {
  color: #6c55f9;
  text-decoration: none;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container,
  .container-sm,
  .container-md {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl {
    max-width: 1140px;
  }
}
text-primary {
  color: #007bff !important;
}

a.text-primary:hover,
a.text-primary:focus {
  color: #0056b3 !important;
}
.footer-menu {
  position: relative;
  padding-left: 0;
  list-style: none;
}

.footer-menu li {
  margin-bottom: 12px;
}

.footer-link {
  display: inline-block;
  padding: 6px 0;
}

.footer-menu a,
.footer-link {
  color: #898798;
}

.footer-menu a:hover,
.footer-link:hover {
  color: #6c55f9;
  text-decoration: none;
}
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #495057;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-control::-webkit-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:disabled,
.form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

input[type="date"].form-control,
input[type="time"].form-control,
input[type="datetime-local"].form-control,
input[type="month"].form-control {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select.form-control:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}

.form-control-file,
.form-control-range {
  display: block;
  width: 100%;
}

.col-form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: 1.25rem;
  line-height: 1.5;
}

.col-form-label-sm {
  padding-top: calc(0.25rem + 1px);
  padding-bottom: calc(0.25rem + 1px);
  font-size: 0.875rem;
  line-height: 1.5;
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.375rem 0;
  margin-bottom: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}

.form-control-plaintext.form-control-sm,
.form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  height: calc(1.5em + 0.5rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.form-control-lg {
  height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

select.form-control[size],
select.form-control[multiple] {
  height: auto;
}

textarea.form-control {
  height: auto;
}
.sosmed-button a {
  margin: 12px;
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 44px;
  text-align: center;
  border-radius: 50%;
  background-color: #f6f5fc;
  color: #898798;
  transition: all 0.2s linear;
}

.sosmed-button a:hover {
  background-color: #6c55f9;
  color: #fff;
  text-decoration: none;
  transform: rotate(360deg);
}
</style>
