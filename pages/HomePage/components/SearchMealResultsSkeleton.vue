<template>
  <div class="columns is-multiline">
    <div class="column is-4-desktop is-6-tablet" v-for="n in 1" :key="n">
      <meallie-meal-card-skeleton></meallie-meal-card-skeleton>
    </div>
  </div>
</template>


<script>
  import MeallieMealCard from "../../../components/MealCard";
  import MeallieMealCardSkeleton from "../../../components/meal-card-skeleton/MealCardSkeleton";
  export default {
    name: 'MeallieSearchMealResultsSkeleton',
    components: {MeallieMealCardSkeleton, MeallieMealCard},
  }
</script>
