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
              <li class="breadcrumb-item active">Services</li>
            </ul>
          </nav>
          <h1 class="text-center banner-text">Services</h1>
        </div>
      </div>
    </div>
  </div>

  <main>
    <div class="page-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 py-3">
            <h2 class="title-section">
              We're <span class="marked">ready to</span> Serve you with best
            </h2>
            <div class="divider" />
            <p class="mb-5">
              We provide marketing services to startups & small business to
              looking for partner for their digital media, design & dev lead
              generation & communication.
            </p>
          </div>
          <div class="col-lg-6 py-3">
            <div class="img-place text-center">
              <img src="../assets/img/bg_image_3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-section">
      <div class="container">
        <div class="container">
          <div class="text-center wow fadeInUp">
            <div class="subhead">Why Choose Us</div>
            <h2 class="title-section">
              Your <span class="marked">Comfort</span> is Our Priority
            </h2>
            <div class="divider mx-auto" />
          </div>

          <div class="row mt-5 text-center">
            <div class="col-lg-4 py-3 wow fadeInUp">
              <div class="display-3">
                <img src="../assets/img/icon-shap.svg" />
              </div>
              <h5>High Performance</h5>
              <p>
                "Exellence is an art won by training and habituation. We do not
                act rightly because we have virtue or exellence, but we have
                rather have those because we have acted right. We are what we
                repeatedly do."
              </p>
            </div>
            <div class="col-lg-4 py-3 wow fadeInUp">
              <div class="display-3">
                <img src="../assets/img/icon-shap.svg" />
              </div>
              <h5>Friendly Prices</h5>
              <p>
                Save as web beliver in functioning in the best appropriate
                client-centric manner. The company is willing to accept micro
                retail-based web development as a service project.
              </p>
            </div>
            <div class="col-lg-4 py-3 wow fadeInUp">
              <div class="display-3">
                <img src="../assets/img/icon-shap.svg" />
              </div>
              <h5>No time-confusing</h5>
              <p>
                For us its to be early is to be on time, to be on time is to be
                late, to be late is to be forgotten. We make sure to deliver the
                project before the time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import "../css/theme.css";
</script>

<style scoped>
.page-banner {
  background-image: url(../assets/banner/services-banner-new.JPG);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.banner-text {
  color: white;
  text-shadow: 0 0 2px #0056b3, 0 0 2px #0000ff;
}
</style>
