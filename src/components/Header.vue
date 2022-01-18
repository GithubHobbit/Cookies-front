<template>
  <div class="mb-4">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Recipes</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-button size="sm" v-b-toggle.sidebar-border>Категории</b-button>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>

        <Sidebar :categories="categories" />

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="mr-sm-2" type="submit">
              Search
            </b-button>
            <b-button
              size="sm"
              class="mr-sm-2"
              variant="dark"
              href="/create-recipe"
            >
              + Добавить рецепт
            </b-button>
          </b-nav-form>

          <b-nav-item-dropdown v-if="isLoggedIn" right>
            <template #button-content>
              <em>Профиль</em>
            </template>

            <b-dropdown-item @click="logout">Выйти</b-dropdown-item>
            <b-dropdown-item to="/register">Регистрация</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-navbar-nav v-else>
            <b-nav-item to="/login">Вход</b-nav-item>
            <b-nav-item to="/register">Регистрация</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "RecipesHeader",
  components: {
    Sidebar: () => import("@/components/Sidebar"),
  },

  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout: function () {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>
