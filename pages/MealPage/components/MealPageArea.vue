<template>
  <div class="content is-medium">
    <h2 class="has-padding-bottom-20">Origin</h2>
    <meallie-meal-area :meal="meal"></meallie-meal-area>
  </div>
</template>

<script>
  import MeallieMealArea from "../../../components/MealArea";

  export default {
    name: 'MeallieMealPageArea',
    components: {MeallieMealArea},
    props: {
      meal: {
        type: Object,
        required: true
      }
    },
  }
</script>
