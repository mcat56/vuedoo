<template>
  <div class="home">
    <navbar v-show="$store.state.userComponents.includes('navbar')" />
    <sidebar v-show="$store.state.userComponents.includes('sidebar')" />
    <carousel v-show="$store.state.userComponents.includes('carousel')" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <home-component msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeComponent from "@/components/HomeComponent.vue";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Carousel from "@/components/Carousel.vue";

@Component({
  components: { HomeComponent, Navbar, Sidebar, Carousel }
})
export default class Home extends Vue {}
</script>
