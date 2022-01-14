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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",

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
  },
};
</script>

<style lang="scss" scoped>
.recipe-list {
  display: flex;
}
</style>
