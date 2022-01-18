<template>
  <div class="home">
    <b-card-group deck>
      <RecipeCard
        v-for="(recipe, key) in recipes"
        :key="key"
        :recipe="recipe"
      />
    </b-card-group>
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
    // isLoggedIn: function () {
    //   return this.$store.getters.isLoggedIn;
    // },
    ...mapGetters({
      recipes: "RECIPES",
    }),
  },
  methods: {
    ...mapActions({
      fetchRecipes: "FETCH_RECIPES",
    }),
  },
};
</script>

<style lang="scss" scoped>
.recipe-list {
  display: flex;
}
</style>
