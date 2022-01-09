<template>
  <header class="header">
    <div class="header_left">LOGO</div>
    <div class="header_right">
      <ul class="nav">
        <li
          class="nav_link"
          v-for="({ id, title }, key) in categories"
          :key="key"
        >
          <router-link :to="`category/${id}`">
            {{ title }}
          </router-link>
        </li>

        <li class="nav_link">
          <router-link to="/login">Login</router-link>
        </li>
        <li class="nav_link">
          <router-link to="/register">Register</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "RecipesHeader",
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.nav {
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  width: 100%;
  padding-inline-start: 0;
  &_link {
    margin-right: 10px;
    a {
      cursor: pointer;
      text-decoration: none;
      color: black;
      &:hover {
        color: olive;
      }
    }
  }
}
</style>
