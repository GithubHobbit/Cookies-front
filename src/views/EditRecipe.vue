<template>
  <b-container>
    <b-row align-h="center">
      <b-col sm="10" md="8" lg="5" xl="4">
        <h1>Изменить рецепт</h1>
        <b-form @submit.prevent="edit" @reset="onReset">
          <b-form-group id="label-title" label="Нзвание:" label-for="title">
            <b-form-input id="title" v-model="form.title" required />
          </b-form-group>

          <b-form-group
            id="label-description"
            label="Описание:"
            label-for="description"
          >
            <b-form-input
              id="description"
              v-model="form.description"
              required
            />
          </b-form-group>

          <b-form-group
            id="label-timeToDo"
            label="Время приготовления:"
            label-for="timeToDo"
          >
            <b-form-input
              id="timeToDo"
              v-model="form.timeToDo"
              type="number"
              required
            />
          </b-form-group>

          <!-- <b-form-file
            v-model="file1"
            :state="Boolean(file1)"
            placeholder="Загрузите картинку ..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mt-3">
            Выбранная картинка: {{ file1 ? file1.name : "" }}
          </div> -->
          <b-form-group
            id="label-imageUrl"
            label="URL картинки:"
            label-for="imageUrl"
          >
            <b-form-input id="imageUrl" v-model="form.imageUrl" required />
          </b-form-group>

          <b-form-group
            id="label-category"
            label="Категория:"
            label-for="category"
          >
            <b-form-select
              id="category"
              v-model="form.category"
              :options="options"
            ></b-form-select>
          </b-form-group>

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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "EditRecipe",
  data() {
    return {
      form: {
        title: "",
        description: "",
        timeToDo: undefined,
        imageUrl: "",
        category: null,
      },
      options: [{ value: null, text: "Пожалуйста, выберите категорию" }],
    };
  },

  props: {
    recipe: {
      type: Boolean,
      default: function () {
        return false;
      },
    },
  },

  async mounted() {
    await this.fetchCategories();
    for (let category in this.categories) {
      let { _id, title } = this.categories[category];
      this.options.push({ value: _id, text: title });
    }
  },
  methods: {
    ...mapActions({
      fetchCategories: "FETCH_CATEGORIES",
      editRecipe: "EDIT_RECIPE",
    }),
    onReset(event) {
      event.preventDefault();
      this.form = {
        title: "",
        description: "",
        timeToDo: undefined,
        imageUrl: "",
        category: null,
      };
    },
    edit() {
      this.editRecipe({ form: this.form, id: this.$route.params.id })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
  computed: {
    ...mapGetters({
      categories: "CATEGORIES",
    }),
  },
};
</script>
