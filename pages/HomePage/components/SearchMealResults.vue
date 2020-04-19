<template>
  <div class="columns is-multiline">
    <div class="column is-4-desktop is-6-tablet" v-for="meal in meals" :key="meal.idMeal">
      <meallie-meal-card :meal="meal"></meallie-meal-card>
    </div>
  </div>
</template>


<script>
  import MeallieMealCard from "../../../components/MealCard";
  export default {
    name: 'MeallieSearchMealResults',
    components: {MeallieMealCard},
    props: {
      meals: {
        type: Array,
        required: true
      }
    },
  }
</script>
