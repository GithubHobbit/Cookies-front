import { getCategory, getCategories } from "@/services/categories.service";

const mutations = {
  setCategory(state, category) {
    state.category = category;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
  setCategoryError(state, error) {
    state.categoryError = error;
  },
};

const actions = {
  async FETCH_CATEGORY({ commit }, id) {
    try {
      const category = await getCategory(id);
      commit("setCategory", category);
    } catch (err) {
      commit("setCategoryError", err);
    }
  },
  async FETCH_CATEGORIES({ commit }) {
    try {
      const category = await getCategories();
      commit("setCategories", category);
    } catch (err) {
      commit("setCategoryError", err);
    }
  },
};

const getters = {
  CATEGORY: ({ category }) => category,
  CATEGORIES: ({ categories }) => categories,
  CATEGORY_ERROR: ({ categoryError }) => categoryError,
};

const state = () => ({
  category: {},
  categories: [],
  categoryError: null,
});

export default {
  mutations,
  getters,
  actions,
  state,
};
