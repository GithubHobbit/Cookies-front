<template>
  <main>
    <form @submit.prevent="loginUser">
      <h1>Please sign in</h1>
      <input
        v-model="login.username"
        type="username"
        placeholder="Username"
        required
      />
      <input
        v-model="login.password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Sign in</button>
    </form>
  </main>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    loginUser: function () {
      this.$store
        .dispatch("login", this.login)
        .then(() => this.$router.push("/test"))
        .catch((err) => console.log(err));
    },
  },
};
</script>
