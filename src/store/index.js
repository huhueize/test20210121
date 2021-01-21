import Vue from "vue";
import Vuex from "vuex";
import moduleA from "./a.js";
import moduleB from "./b.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {name: "xiaoindex"},
  mutations: {
    changeName(state){
      state.name = "小index";
    }
  },
  actions: {},
  modules: {
    a:moduleA,
    b:moduleB
  }
});
