import { getRecipe, getRecipes } from "@/services/recipes.service";

const mutations = {
  setRecipe(state, recipe) {
    state.recipe = recipe;
  },
  setRecipes(state, recipes) {
    state.recipes = recipes;
  },
  setRecipeError(state, error) {
    state.recipeError = error;
  },
};

const actions = {
  async fetchRecipe({ commit }, id) {
    try {
      const recipe = await getRecipe(id);
      commit("setRecipe", recipe);
    } catch (err) {
      commit("setRecipeError", err);
    }
  },
  async fetchRecipes({ commit }) {
    try {
      const recipes = await getRecipes();
      commit("setRecipes", recipes);
    } catch (err) {
      commit("setRecipeError", err);
    }
  },
};

const getters = {
  recipe: ({ recipe }) => recipe,
  recipes: ({ recipes }) => recipes,
  recipeError: ({ recipeError }) => recipeError,
};

const state = () => ({
  recipe: {},
  recipes: [],
  recipeError: null,
});

export default {
  mutations,
  getters,
  actions,
  state,
};
