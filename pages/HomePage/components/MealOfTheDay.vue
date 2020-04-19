<template>
  <div>
    <meallie-meal-card-skeleton v-if="getRandomMeal.loading"></meallie-meal-card-skeleton>
    <div v-else-if="failedToGetRandomMeal">
      <span>
        Failed to retrieve meal.
      </span>
      <button class="button" @click="refreshMeal">
        Try again
      </button>
    </div>
    <meallie-meal-card v-else :meal="getRandomMeal.data"></meallie-meal-card>
  </div>
</template>

<script>
  import MeallieMealCard from "../../../components/MealCard";
  import MeallieMealCardSkeleton from "../../../components/meal-card-skeleton/MealCardSkeleton";
  export default {
    name: 'MeallieMealOfTheDay',
    components: {MeallieMealCardSkeleton, MeallieMealCard},
    data(){
      return {
        failedToGetRandomMeal: false
      }
    },
    chimera: {
      getRandomMeal: {
        key: 'getRandomMeal',
        url: 'https://www.themealdb.com/api/json/v1/1/random.php',
        method: 'GET',
        transformer(response) {
          // Prefetch request
          if(!response) return;

          if(response.error){
            this.failedToGetRandomMeal = true;
          } else{
            // Response is an array of objects containing single meal.
            console.log(response);
            return response['meals'][0];
          }
        }
      }
    },
    methods: {
      created(){

      },
      refreshMeal(){
        this.getRandomMeal.fetch();
      }
    },
  }
</script>
