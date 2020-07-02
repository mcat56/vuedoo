<template>
  <div class="custom-component">
    <v-col
      v-b-popover.hover="{ content: img, html: true }"
      v-on:click="
        $emit('addComponent', componentName);
        $emit('updatePage');
      "
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
