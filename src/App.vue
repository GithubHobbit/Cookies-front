<template>
  <div id="app">
    <RecipesHeader :categories="categories" />
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    RecipesHeader: () => import("@/components/Header"),
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions({
      fetchCategories: "FETCH_CATEGORIES",
    }),
  },
  computed: {
    ...mapGetters({
      categories: "CATEGORIES",
    }),
  },
};
</script>

<style lang="scss" scoped>
body,
html {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
