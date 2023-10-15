<template>
  <div class="container mt-5">
    <div class="page-banner">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-6">
          <nav aria-label="Breadcrumb">
            <ul class="breadcrumb justify-content-center py-0 bg-transparent">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">Contact</li>
            </ul>
          </nav>
          <h1 class="text-center">Contact Us</h1>
        </div>
      </div>
    </div>
  </div>

  <main>
    <div class="page-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 py-3">
            <h2 class="title-section">Get in Touch</h2>
            <div class="divider" />
            <p>
              We are always happy to serve you<br />
              check out the following contact details for getting in touch with
              us
            </p>

            <ul class="contact-list">
              <li>
                <div class="icon"><i class="bi bi-map-fill" /></div>
                <div class="content">
                  Block 50-D, Second floor, Patel Pride, Aurangabad,
                  Maharashtra. 431001
                </div>
              </li>
              <li>
                <div class="icon"><i class="bi bi-envelope-fill" /></div>
                <div class="content"><a href="#">info@myltass.com</a></div>
              </li>
              <li>
                <div class="icon">
                  <i class="bi bi-phone-fill" />
                </div>
                <div class="content"><a href="#">+91 98581 14114</a></div>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 py-3">
            <div class="subhead">Contact Us</div>
            <h2 class="title-section">Drop Us a Line</h2>
            <div class="divider" />

            <form @submit.prevent="sendFeedback">
              <div class="py-2">
                <input
                  v-model="user.name"
                  type="text"
                  class="form-control"
                  placeholder="Full name"
                />
                <!-- Bind input to fullName data property -->
              </div>
              <div class="py-2">
                <input
                  v-model="user.email"
                  type="text"
                  class="form-control"
                  placeholder="Email"
                />
                <!-- Bind input to email data property -->
              </div>
              <div class="py-2">
                <textarea
                  v-model="feedback"
                  rows="6"
                  class="text-area"
                  placeholder="Enter message"
                />
              </div>
              <button type="submit" class="btn btn-primary rounded-pill mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import "../css/theme.css";
import { ref } from "vue";
import IMsContactUserDetails from "../interfaces/IMsContactUserDetails";
const user = ref<IMsContactUserDetails>({ name: "", email: "" });
const feedback = ref("");
const sendFeedback = () => {
  // POST call to send feedback is to be done after the backend setup.
};
</script>

<style scoped>
.page-banner {
  background-image: url(../assets/banner/contact-us-banner02.JPG);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.text-center {
  color: white;
  text-shadow: 0 0 2px #0056b3, 0 0 2px #0000ff;
}
</style>
