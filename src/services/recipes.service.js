import { request } from "./generic.service";

const getRecipe = (id) => request({ url: `recipes/${id}`, method: "get" });

const getRecipes = () => request({ url: `recipes`, method: "get" });

const createRecipe = (recipeData) =>
  request({ url: `recipes`, method: "post", data: recipeData });

const deleteRecipe = (id) =>
  request({ url: `recipes/${id}`, method: "delete" });

export { getRecipe, getRecipes, createRecipe, deleteRecipe };
