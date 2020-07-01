<template>
  <div class="custom-component">
    <v-col
      v-on:click="
        $emit('addComponent', componentName);
        $emit('updatePage');
      "
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
    },
    componentName: {
      type: String
    }
  }
};
</script>

<style></style>
