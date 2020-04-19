<template>
  <div class="container">
    <meallie-meal></meallie-meal>
  </div>
</template>

<script>
  import MeallieMeal from "../../../components/Meal";
  export default {
    name: 'MeallieMealOfTheDay',
    components: {MeallieMeal},
  }
</script>
