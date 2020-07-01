<template>
  <div class="home">
    <navbar v-show="activeComponents.includes('navbar')" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <home-component
      msg="Welcome to Your Vue.js App"
      v-on:updatePage="activeComponents = $event"
    />
    <ul style="list-style-type:none">
      <h3>Inside List</h3>
      <li v-for="component in activeComponents" v-bind:key="component">
        <p>{{ activeComponents.includes(component) }}</p>
        <p>{{ component }}</p>
        <p>{{ activeComponents.includes("navbar") }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeComponent from "@/components/HomeComponent.vue";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Logo from "@/components/Logo.vue";

@Component({
  components: { HomeComponent, Navbar, Sidebar, Logo }
})
export default class Home extends Vue {
  activeComponents: string[] = [];
}
</script>
