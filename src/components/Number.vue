<template>
     <div class="nav">
    <router-link to="/"><h2>MyltaSS</h2></router-link>
    <router-link to="/"><h3>Home</h3></router-link>
    <router-link to="/services"><h3>Services</h3></router-link>
    <router-link to="/technologies"><h3>Technologies</h3></router-link>
    <router-link to="/about"><h3>About</h3></router-link>
    <router-link to="/contact"><h3>Contact</h3></router-link>
    <router-link to="/number"><h3>#number</h3></router-link>
 </div>
    <div>
       <h1>Number</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.nav {
    background-color: #333;
    overflow: hidden;
  }
  .nav a{
     float: left;
     color: #f2f2f2f2;
     padding: 14px 16px;
     text-decoration: none;
     margin-right: 5px;
     text-align: center;
     font-size: 18px;
  }
  .nav a:hover{
    color: #333;
    background-color: #ddd;
  }
</style>