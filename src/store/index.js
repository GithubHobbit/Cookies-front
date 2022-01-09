import Vue from "vue";
import Vuex from "vuex";
import recipe from "./recipe";
import category from "./category";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    category,
    recipe,
    auth,
  },
});
