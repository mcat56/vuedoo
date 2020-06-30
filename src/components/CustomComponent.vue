<template>
  <div class="custom-component">
    <v-col v-on:click="$emit('addComponent', name)"
      ><a href="#">
        {{ name }}
      </a></v-col
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
    }
  }
};
</script>

<style></style>
