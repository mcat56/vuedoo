<template>
  <div class="custom-component">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-col v-bind="attrs" v-on="on"
          ><a id="component" href="#" v-on:click="addVue">
            {{ name }}
          </a></v-col
        >
      </template>
      <span> HOVER PLEASER </span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false
    };
  },
  name: "CustomComponent",
  props: {
    name: {
      type: String
    },
    img: {
      type: String
    }
  }
};
</script>

<style scoped></style>
