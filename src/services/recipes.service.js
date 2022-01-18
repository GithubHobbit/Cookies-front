import { request } from "./generic.service";

export const getRecipe = (id) =>
  request({ url: `recipes/${id}`, method: "get" });

export const getRecipes = () => request({ url: `recipes`, method: "get" });

export const createRecipe = (recipeData) =>
  request({ url: `recipes`, method: "post", data: recipeData });

export const editRecipe = (recipeData, id) =>
  request({ url: `recipes/${id}`, method: "put", data: recipeData });

export const deleteRecipe = (id) =>
  request({ url: `recipes/${id}`, method: "delete" });
