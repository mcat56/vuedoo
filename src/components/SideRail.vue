<template>
  <div class="siderail">
    <h2>Side Rail Container</h2>
    <button class="button" v-on:click="$store.commit('closeSideRail')">
      Close
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "SideRail",
  props: {
    width: {
      type: String
    },
    height: {
      type: String
    }
  }
})
export default class SideRail extends Vue {}
</script>

<style lang="scss">
$top-color: black;
$bottom-color: grey;

.siderail {
  background: -webkit-linear-gradient($top-color, $bottom-color);
  background: -o-linear-gradient($top-color, $bottom-color);
  background: -moz-linear-gradient($top-color, $bottom-color);
  background: linear-gradient($top-color, $bottom-color);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

h2 {
  color: white;
}

.button {
  color: white;
  background-color: rgb(72, 83, 92);
  border-radius: 8px;
  position: absolute;
  bottom: 20px;
  left: 130px;
}

.button:hover {
  background-color: black;
}
</style>
