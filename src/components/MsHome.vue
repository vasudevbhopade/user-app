<template>
  <div class="page-banner home-banner">
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <div class="col-lg-6 py-3 wow fadeInUp">
          <h1 class="mb-4">Great Companies are built on great Products</h1>
          <p class="text-lg mb-5">
            Ignite the most powerfull growth engine you have ever built for your
            company
          </p>
        </div>
        <div class="col-lg-6 py-3 wow zoomIn">
          <div class="img-place">
            <img src="../assets/img/bg_image_1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="page-section features">
    <div class="container">
      <div class="row justify-content-center">
        <div
          class="col-md-6 col-lg-4 py-3 wow fadeInUp"
          v-for="(item, index) in allItem"
          :key="index"
        >
          <div class="d-flex flex-row">
            <div class="img-fluid mr-3">
              <img src="../assets/img/icon_pattern.svg" alt="" />
            </div>
            <div>
              <h5>{{ item.title }}</h5>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const allItem = {
  item1: {
    img: "",
    title: "Provide financial advice by our advisor",
    description: "Copywrite, blogpublic relations content translation.",
  },
  item2: {
    img: "",
    title: "Complete solutions for global organisations",
    description: "Copywrite, blogpublic relations content translation.",
  },
  item3: {
    img: "",
    title: "Provide financial advice by our advisor",
    description: "Copywrite, blogpublic relations content translation.",
  },
};
</script>
