<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
      <span v-else> | <router-link to="/login">Login</router-link></span>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // isLoggedIn: function () {
    //   return this.$store.getters.isLoggedIn;
    // },
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
    }),
  },
};
</script>
