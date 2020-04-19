<template>
  <nuxt-link :to="mealUrl">
    <div class="card meallie-meal-card">
      <div class="card-image">
        <figure class="image">
          <img :src="meal.strMealThumb" :alt="meal.strMeal + 'Photo depiction'">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <meallie-meal-area :meal="meal"></meallie-meal-area>
          </div>
          <div class="media-content">
            <p class="title is-4">{{meal.strMeal}}</p>
            <p class="subtitle is-6">{{meal.strCategory}}</p>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item has-background-black-bis">
          <strong class="has-text-white">
            {{ingredientsCount}} Ingredients.
          </strong>
        </p>
        <p class="card-footer-item" :class="mealDifficultyBackgroundClass">
          <strong class="has-text-white">
            {{mealDifficulty}} difficulty.
          </strong>
        </p>
      </footer>
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
  .meallie-meal-card {
    transition: all .2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
</style>

<script>
  import MeallieMealArea from "./MealArea";

  const MEAL_DIFFICULTY_HARD = 'Hard';
  const MEAL_DIFFICULTY_MEDIUM = 'Medium';
  const MEAL_DIFFICULTY_EASY = 'Easy';


  export default {
    name: 'MeallieMealCard',
    components: {MeallieMealArea},
    props: {
      meal: {
        type: Object,
        required: true
      }
    },
    computed: {
      ingredientsCount() {
        return Object.keys(this.meal)
          .filter((mealKey) => mealKey.includes('strIngredient'))
          .filter((mealKey) => this.meal[mealKey]).length;
      },
      mealDifficulty() {
        const ingredientsCount = this.ingredientsCount;

        if (ingredientsCount <= 5) {
          return MEAL_DIFFICULTY_EASY;
        } else if (ingredientsCount <= 15) {
          return MEAL_DIFFICULTY_MEDIUM;
        } else {
          return MEAL_DIFFICULTY_HARD;
        }
      },
      mealDifficultyBackgroundClass() {
        switch (this.mealDifficulty) {
          case MEAL_DIFFICULTY_HARD:
            return 'has-background-danger';
          case MEAL_DIFFICULTY_MEDIUM:
            return 'has-background-info';
          case MEAL_DIFFICULTY_EASY:
            return 'has-background-success';
        }
      },
      mealUrl() {
        return `/${this.meal.idMeal}`;
      }
    }
  }
</script>
