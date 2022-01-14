<template>
  <b-container>
    <b-row align-h="center">
      <b-col sm="10" md="8" lg="5" xl="4">
        <h1>Регистрация</h1>
        <b-form @submit.prevent="registerUser" @reset="onReset">
          <b-alert
            variant="danger"
            dismissible
            fade
            :show="visibleAlert"
            @dismissed="visibleAlert = false"
          >
            {{ error }}
          </b-alert>

          <label for="login">Логин:</label>
          <b-form-input
            id="login"
            v-model="form.username"
            placeholder="Введите логин"
            required
          />

          <label for="password">Пароль:</label>
          <b-form-input
            type="password"
            v-model="form.password"
            :state="validation"
            id="password"
            placeholder="Введите пароль"
            required
          />
          <b-form-invalid-feedback :state="validation">
            Ваш пароль должен состоять из 8–20 символов.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validation">
            Выглядит неплохо.
          </b-form-valid-feedback>

          <b-row class="pt-3">
            <b-col>
              <b-button class="w-100" type="submit" variant="primary"
                >Отправить
              </b-button>
            </b-col>
            <b-col>
              <b-button class="w-100" type="reset" variant="danger">
                Сбросить
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Register",

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
  computed: {
    validation() {
      return this.form.password.length > 8 && this.form.password.length < 20;
    },
  },
  methods: {
    registerUser: function () {
      this.$store
        .dispatch("register", this.form)
        .then(() => this.$router.push("/"))
        .catch((err) => {
          this.visibleAlert = true;
          this.error = err;
        });
    },
    onReset(event) {
      event.preventDefault();
      this.form.username = "";
      this.form.password = "";
    },
  },
};
</script>
