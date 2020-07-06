<template>
  <div class="custom-component">
    <v-col
      v-b-popover.hover="{ content: img, html: true }"
      v-on:click="$store.commit('updateComponents', componentName)"
      ><b-link href="#">
        {{ name }}
      </b-link></v-col
    >
  </div>
</template>

<script>
export default {
  name: "CustomComponent",
  props: {
    name: {
      type: String
    },
    img: {
      type: String
    },
    componentName: {
      type: String
    }
  }
};
</script>

<style></style>
