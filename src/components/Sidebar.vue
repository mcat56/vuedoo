<template>
  <div>
    <b-button v-b-toggle.sidebar-variant>Menu</b-button>
    <b-sidebar
      id="sidebar-variant"
      title="Vuedoo"
      bg-variant="dark"
      text-variant="light"
      shadow
    >
      <div class="px-3 py-2">
        <p>Welcome to Your Sidebar</p>
        <b-img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT66GPNPp6SpfzgCVlaLRYl96OBmXxcECix4g&usqp=CAU"
          fluid
          thumbnail
        ></b-img>
        <nav class="mb-3">
          <b-nav vertical>
            <b-nav-item active @click="hide">Home</b-nav-item>
            <b-nav-item href="#" @click="hide">Contact</b-nav-item>
            <b-nav-item href="#" @click="hide">About</b-nav-item>
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

export default {
  name: "Sidebar"
};
</script>

<style></style>
