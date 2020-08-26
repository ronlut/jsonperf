import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dark: false
  },
  mutations: {
    toggleDark(state) {
      state.dark = !state.dark;
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
});
