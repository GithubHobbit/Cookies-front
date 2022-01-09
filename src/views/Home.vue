<template>
  <div class="home">
    <div class="recipe-list">
      <RecipeCard
        v-for="(recipe, key) in recipes"
        :key="key"
        :title="recipe.title"
        :timeToDo="recipe.timeToDo"
        :imageUrl="recipe.imageUrl"
      />
    </div>
    <hr />
    {{ user.id }}
    <hr />
    {{ user.roles }}
    <hr />
    {{ user }}
    <hr />
    <button @click="logUserOut"></button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "Home",
  data() {
    return {
      login: {
        user: {},
      },
    };
  },
  components: {
    RecipeCard: () => import("@/components/RecipeCard"),
  },
  mounted() {
    this.fetchRecipes();
  },
  computed: {
    ...mapGetters({
      recipes: "recipes",
    }),
  },
  methods: {
    ...mapActions({
      fetchRecipes: "fetchRecipes",
    }),
    getUserDetails() {
      // get token from localstorage
      let token = localStorage.getItem("user");
      try {
        //decode token here and attach to the user object
        let decoded = VueJwtDecode.decode(token);
        this.user = decoded;
        console.log(...decoded);
      } catch (error) {
        // return error in production env
        console.log(error, "error from decoding token");
      }
    },
    logUserOut() {
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>

<style lang="scss" scoped>
.recipe-list {
  display: flex;
}
</style>
