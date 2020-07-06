<template>
  <div class="home">
    <h1>{{ msg }}</h1>

    <h2>Choose Your Components</h2>
    <div class="components">
      <v-container class="component-grid">
        <v-row>
          <custom-component
            name="Navigation Bar"
            componentName="navbar"
            img='<img
            alt="Navigation Preview"
            src="https://i.imgur.com/wlwZgAT.png"/>'
          />
          <custom-component
            name="Side Bar"
            componentName="sidebar"
            img='<img
            alt="Sidebar Preview"
            src="https://i.imgur.com/rCxHh83.png"/>'
          />
          <custom-component
            name="Carousel"
            componentName="carousel"
            img='<img
            alt="Carousel Preview"
            src="https://i.imgur.com/bG2vKWK.png"/>'
          />
        </v-row>
      </v-container>
    </div>
    <h2>Chosen Components</h2>
    <ul style="list-style-type:none">
      <li
        v-for="userComponent in this.$store.state.userComponents"
        v-bind:key="userComponent"
      >
        {{ userComponent }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import CustomComponent from "@/components/CustomComponent.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { CustomComponent },
  props: {
    msg: {
      type: String
    }
  }
})
export default class HomeComponent extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
