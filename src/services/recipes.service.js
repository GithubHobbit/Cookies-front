import { request } from "./generic.service";

const getRecipe = (id) => request({ url: `recipes/${id}`, method: "get" });

const getRecipes = () => request({ url: `recipes`, method: "get" });

export { getRecipe, getRecipes };
