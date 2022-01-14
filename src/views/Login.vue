<template>
  <b-container>
    <b-row align-h="center">
      <b-col sm="10" md="8" lg="5" xl="4">
        <b-form @submit.prevent="loginUser">
          <b-alert
            variant="danger"
            dismissible
            fade
            :show="visibleAlert"
            @dismissed="visibleAlert = false"
          >
            {{ error }}
          </b-alert>

          <h1>Вход</h1>

          <b-form-group id="group-login" label="Логин:" label-for="login">
            <b-form-input
              id="login"
              v-model="form.username"
              placeholder="Введите логин"
              required
            />
          </b-form-group>

          <b-form-group id="group-login" label="Пароль:" label-for="password">
            <b-form-input
              type="password"
              v-model="form.password"
              id="password"
              placeholder="Введите пароль"
              required
            />
          </b-form-group>

          <b-button block type="submit" variant="primary">Войти</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      visibleAlert: false,
      error: "",
    };
  },

  methods: {
    loginUser: function () {
      this.$store
        .dispatch("login", this.form)
        .then(() => this.$router.push("/"))
        .catch((err) => {
          this.visibleAlert = true;
          this.error = err;
        });
    },
  },
};
</script>
