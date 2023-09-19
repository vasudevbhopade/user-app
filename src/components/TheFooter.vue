<template>
  <section >
    <footer id="app">
      <div class="nav-column">
        <h2>Quick Links</h2>
        <p>How it Works</p>
        <p>Security</p>
        <p>Resources</p>
        <p>Report a Bug</p>
      </div>
      <div class="nav-column">
        <h2>About Us</h2>
        <p>About Us</p>
        <p>Jobs</p>
        <p>Our Teams</p>
      </div>
      <div class="nav-column">
        <h2>Subscribe</h2>
        <input type="email" placeholder="Enter Your mail.." />
        <span class="social-links">
           <a href="#"> <img :src="facebookIcon" alt="facebook-icon"/> </a>
            <a href="#">Twitter</a>
          <a href="#">Google</a>
          <a href="#">LinkedIn</a>
        </span>
      </div>
    </footer>
    <div class="copyRight">
      <p>&copy; 2023 MyltaSS. All rights reserved</p>
    </div>
  </section>
</template>

<script>
import facebookIcon from '../Assets/facebookIcon.gif'
export default {
    
}
</script>

<style scoped>
footer {
    /* padding: 1rem; */
  display: flex;
  background-color: #f5f5f5;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 45%;
  color: #333;
}

.nav-column {
  flex: 1;
  padding: 25px;
}

.nav-column h2 {
    padding-top: 0;
  font-size: 2rem;
  margin-top: 1rem;
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

.copyRight {
    margin-bottom: 0rem;
    display: flex;
  background-color: #f5f5f5;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #333;
}



</style>
