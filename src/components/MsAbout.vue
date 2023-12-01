<template>
  <div class="container mt-5">
    <div v-if="$route.path !== '/'" class="page-banner">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-6">
          <nav aria-label="Breadcrumb">
            <ul class="breadcrumb justify-content-center py-0 bg-transparent">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">About</li>
            </ul>
          </nav>
          <h1
            class="text-center"
            style="color: white; text-shadow: 0 0 4px #0056b3, 0 0 6px #0000ff"
          >
            About Us
          </h1>
        </div>
      </div>
    </div>
  </div>

  <main>
    <div class="page-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 py-3">
            <div class="img-fluid text-center">
              <img src="../assets/img/bg_image_2.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6 py-3 pr-lg-5">
            <h2 class="title-section">
              We're <span class="marked">Dynamic</span> Team of Creatives People
            </h2>
            <div class="divider" />
            <p>
              We provide marketing services to startups & small business to
              looking for partner for their digital media, design & dev lead
              generation & communication.
            </p>
            <div v-if="$route.path === '/'" class="img-place mb-3">
              <img src="../assets/img/testi_image.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="page-section counter-section">
      <div class="container">
        <div class="row align-items-center text-center">
          <div class="col-lg-4">
            <p>Delivered Projects</p>
            <h2><span class="number" data-number="22" /></h2>
          </div>
          <div class="col-lg-4">
            <p>Line Of Code</p>
            <h2><span class="number" data-number="213622" /></h2>
          </div>
          <div class="col-lg-4">
            <p>Growth Ration</p>
            <h2><span class="number" data-number="39" />%</h2>
          </div>
        </div>
      </div>
    </div> -->
  </main>
</template>

<script setup lang="ts">
import "../css/theme.css";
</script>

<style scoped>
.page-banner {
  background-image: url(../assets/banner/about-us-banner.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
