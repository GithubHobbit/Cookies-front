import {
  getRecipe,
  getRecipes,
  createRecipe,
  deleteRecipe,
} from "@/services/recipes.service";

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
  async FETCH_RECIPE({ commit }, id) {
    try {
      const recipe = await getRecipe(id);
      commit("setRecipe", recipe);
    } catch (err) {
      commit("setRecipeError", err);
    }
  },
  async FETCH_RECIPES({ commit }) {
    try {
      const recipes = await getRecipes();
      commit("setRecipes", recipes);
    } catch (err) {
      commit("setRecipeError", err);
    }
  },
  async CREATE_RECIPE({ commit }, recipeData) {
    try {
      await createRecipe(recipeData);
    } catch (err) {
      commit("setRecipeError", err);
    }
  },

  async DELETE_RECIPE({ commit }, id) {
    try {
      await deleteRecipe(id);
    } catch (err) {
      commit("setRecipeError", err);
    }
  },
};

const getters = {
  RECIPE: ({ recipe }) => recipe,
  RECIPES: ({ recipes }) => recipes,
  RECIPE_ERROR: ({ recipeError }) => recipeError,
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
