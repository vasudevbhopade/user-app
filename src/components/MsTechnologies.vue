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
              <li class="breadcrumb-item active">Technologies</li>
            </ul>
          </nav>
          <h1 class="text-center banner-text">Technologies</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center wow fadeInUp">
    <div class="subhead">We Learn and We Grow</div>
    <h2 class="title-section">
      <span class="marked">Technologies</span> We're Expert in
    </h2>
    <div class="divider mx-auto"></div>
  </div>
  <main>
    <div class="page-section">
      <div class="container">
        <div class="row">
          <div
            v-for="tech in technologies"
            :key="tech.key"
            class="col-md-6 col-lg-4 py-3"
          >
            <div class="card-blog">
              <img :src="tech.src" alt="" style="width: 100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const technologies = [
  {
    key: 1,
    src: "../../technologies/Technology-1.png",
  },
  {
    key: 2,
    src: "../../technologies/Technology-2.png",
  },
  {
    key: 3,
    src: "../../technologies/Technology-3.jpg",
  },
  {
    key: 4,
    src: "../../technologies/Technology-4.png",
  },
  {
    key: 5,
    src: "../../technologies/Technology-5.png",
  },
  {
    key: 6,
    src: "../../technologies/Technology-6.png",
  },
  {
    key: 7,
    src: "../../technologies/Technology-7.png",
  },
  {
    key: 8,
    src: "../../technologies/Technology-8.png",
  },
  {
    key: 9,
    src: "../../technologies/Technology-9.png",
  },
];
</script>

<style scoped>
.page-banner {
  background-image: url(../assets/banner/banner-technologies.jpeg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.banner-text {
  color: white;
  text-shadow: 0 0 2px #0056b3, 0 0 2px #0000ff;
}
</style>
