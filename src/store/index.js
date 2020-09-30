import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {  
  userGame: {},
  computerGame: {},
  wins: 0,
  draws: 0,
  losses: 0},
  mutations: {
    updateUser: function(state, userSelect) {
      state.userGame = userSelect;
    },
    updateComputer: function(state, computerSelect) {
      state.computerGame = computerSelect;
    },
    updateScore: function(state, score) {
      if (score == 1) {
        state.wins++;
      } else if (score == 0) {
        state.draws++;
      } else if (score == -1) {
        state.losses++;
      }
    }
  },
  actions: {},
  modules: {}
});
