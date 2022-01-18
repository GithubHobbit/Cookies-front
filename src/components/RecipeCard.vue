<template>
  <b-card
    :title="recipe.title"
    :img-src="recipe.imageUrl"
    img-alt="Изображение"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="mb-2 text-left"
  >
    <b-card-text>{{ recipe.description }}</b-card-text>

    <b-button class="card-link" @click="deleteRecipe" variant="danger">
      Удалить
    </b-button>
    <b-button class="card-link" variant="warning"> Редактировать </b-button>
  </b-card>
  <!-- <div class="card">
    <div class="card_header">
      {{ title }} - время приготовления {{ timeToDo }} минут
    </div>
    <div class="banner" :style="`background-image: url(${imageUrl})`"></div>
    <div class="card_footer">
      <button>Посмотреть</button>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    recipe: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    deleteRecipe() {
      console.log("_id: " + this.recipe._id);
      this.$store
        .dispatch("DELETE_RECIPE", this.recipe._id)
        .then(() => this.$router.go(0)); // НУЖНО ПОМЕНЯТЬ ТАК, ЧТОБЫ СТРАНИЦА ПОЛНОСТЬЮ НЕ ОБНОВЛЯЛАСЬ
    },
  },
};
</script>

<style lang="scss" scoped>
// .card {
//   width: 400px;
//   height: 200px;
//   padding: 20px;
//   margin: 10px;
//   border: 1px solid black;
//   border-radius: 12px;
//   .banner {
//     width: 100%;
//     height: 80%;
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//   }

//   &_footer {
//     margin-top: 10px;
//   }
// }
//
</style>
