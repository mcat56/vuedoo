import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userComponents: Array<string>() 
  },
  mutations: {
    updateComponents(state, component) {
      state.userComponents.push(component);
    }
  },
  actions: {},
  modules: {}
});
