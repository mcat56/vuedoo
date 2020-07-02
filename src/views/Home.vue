<template>
  <div class="home">
    <navbar v-show="activeComponents.includes('navbar')" />
    <sidebar v-show="activeComponents.includes('sidebar')" />
    <carousel v-show="activeComponents.includes('carousel')" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <home-component
      msg="Welcome to Your Vue.js App"
      v-on:updatePage="activeComponents = $event"
    />
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
export default class Home extends Vue {
  activeComponents: string[] = [];
}
</script>
