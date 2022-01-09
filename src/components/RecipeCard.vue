<template>
  <div class="card">
    <div class="card_header">
      {{ title }} - время приготовления {{ timeToDo }} минут
    </div>
    <div class="banner" :style="`background-image: url(${imageUrl})`"></div>
    <div class="card_footer">
      <button>Посмотреть</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    timeToDo: {
      type: Number,
      default: 0,
    },
    imageUrl: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 12px;
  .banner {
    width: 100%;
    height: 80%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &_footer {
    margin-top: 10px;
  }
}
</style>
