import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import CreateRecipe from "@/views/CreateRecipe.vue";
import EditRecipe from "@/views/EditRecipe.vue";

Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
  if (localStorage.getItem("token")) {
    next();
    return;
  }
  router.push({
    name: "Login",
    params: {
      returnTo: to.path,
      query: to.query,
    },
  });
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/create-recipe",
    name: "CreateRecipe",
    component: CreateRecipe,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/edit-recipe/:id",
    name: "EditRecipe",
    component: EditRecipe,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
