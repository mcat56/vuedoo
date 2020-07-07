import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userComponents: Array<string>(),
    width: '320px',
    height: '720px',
    sideRailWidth: '320px',
    sideRailHeight: '720px',
    sideRail: true
  },
  mutations: {
    updateComponents(state, component) {
      if (state.userComponents.includes(component)) {
        state.userComponents.splice(state.userComponents.indexOf(component), 1);
      } else {
        state.userComponents.push(component);
      }
    },
    updateSiderail(state, dimensions) {
      state.sideRailWidth = dimensions.width;
      state.sideRailHeight = dimensions.height;
    },
    updateAppDimensions(state, dimensions) {
      state.width = dimensions.width,
      state.height = dimensions.height
    },
    closeSideRail(state) {
      state.sideRail = false
    }
  },
  actions: {},
  modules: {}
});
