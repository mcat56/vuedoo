<template>
  <div id="app">
    <side-rail
      v-show="$store.state.sideRail"
      :style="{ width: sideRailWidth, height: sideRailHeight }"
    />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideRail from "@/components/SideRail.vue";
import { mapState } from "vuex";

@Component({
  components: { SideRail },
  computed: mapState(["sideRailWidth", "sideRailHeight"])
})
export default class App extends Vue {}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 320px;
}
</style>
