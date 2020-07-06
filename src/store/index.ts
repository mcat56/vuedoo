import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userComponents: Array<string>() 
  },
  mutations: {
    updateComponents(state, component) {
      if (state.userComponents.includes(component)) {
        state.userComponents.splice(state.userComponents.indexOf(component),1)
      } else {
        state.userComponents.push(component);
      }
    }
  },
  actions: {},
  modules: {}
});
