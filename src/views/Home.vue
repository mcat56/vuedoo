<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <home-component msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";

export default {
  name: "Home",
  components: {
    HomeComponent
  }
};
</script>
