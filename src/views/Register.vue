<template>
  <form @submit.prevent="registerUser">
    <h1>Please register</h1>
    <input v-model="regData.username" placeholder="Username" required />
    <input
      v-model="regData.password"
      type="password"
      placeholder="Password"
      required
    />

    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      regData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    registerUser: function () {
      this.$store
        .dispatch("register", this.regData)
        .then(() => this.$router.push("/test"))
        .catch((err) => console.log(err));
    },
  },
};
</script>
