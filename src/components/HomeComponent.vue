<template>
  <div class="home">
    <h1>{{ msg }}</h1>

    <h2>Choose Your Components</h2>
    <div class="components">
      <v-container class="component-grid">
        <v-row>
          <custom-component
            v-on:addComponent="userComponents.push($event)"
            name="Navigation Bar"
            img='<img
            alt="../assets/navigation-preview.png"/>'
          />
          <custom-component
            v-on:addComponent="userComponents.push($event)"
            name="Side Bar"
            img='<img
            alt="Sidebar Preview"
            src="../assets/sidebar-preview.png"/>'
          />
          <custom-component
            v-on:addComponent="userComponents.push($event)"
            name="Logo"
            img='<img
            alt="Logo Preview"
            src="../assets/logo-preview.png"/>'
          />
        </v-row>
      </v-container>
    </div>
    <h2>Chosen Components</h2>
    <ul style="list-style-type:none">
      <li v-for="userComponent in userComponents" v-bind:key="userComponent">
        {{ userComponent }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import CustomComponent from "@/components/CustomComponent.vue";

export default {
  data() {
    return {
      userComponents: new Array<string>()
    };
  },
  props: {
    msg: {
      type: String
    }
  },
  // methods: {
  //   onAddComponent(name: string) {
  //     this.userComponents.push(name);
  //   }
  // },
  components: { CustomComponent }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul li {
  color: black;

}
</style>
