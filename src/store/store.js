import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogged: false,
    email: ''
  },
  mutations: {
    setEmail(state, userName) {
      state.isLogged = true;
      state.userName = userName;
    }
  },
  actions: {
    updateEmail({ commit }, email) {

      commit('setEmail', email);
    },
  },
  getters: {
    isLogged: state => state.isLogged,
    email: state => state.userName
  }
});

export default store;
