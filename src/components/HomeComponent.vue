<template>
  <div class="home">
    <h1>{{ msg }}</h1>

    <h2>Choose Your Components</h2>
    <div class="components">
      <v-container class="component-grid">
        <v-row>
          <custom-component
            name="Navigation Bar"
            img='<img
            alt="Navigation Preview"
            src="../assets/navigation-preview.png"/>'
          />
          <custom-component
            name="Side Bar"
            img='<img
            alt="Sidebar Preview"
            src="../assets/sidebar-preview.png"/>'
          />
          <custom-component
            name="Logo"
            img='<img
            alt="Logo Preview"
            src="../assets/logo-preview.png"/>'
          />
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CustomComponent from "@/components/CustomComponent.vue";

@Component({
  components: { CustomComponent }
})
export default class HomeComponent extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
