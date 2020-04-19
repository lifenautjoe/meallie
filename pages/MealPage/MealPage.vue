<template>
  <div>
    <meallie-meal-page-skeleton v-if="getMeal.loading"></meallie-meal-page-skeleton>
    <div v-if="meal">
      <meallie-meal-page-header :meal="meal"></meallie-meal-page-header>
      <section class="section container">
        <div class="columns">
          <div class="column has-padding-30">
            <meallie-meal-page-area :meal="meal"></meallie-meal-page-area>
            <meallie-meal-page-ingredients :meal="meal"></meallie-meal-page-ingredients>
          </div>
          <div class="column has-padding-30" v-if="hasVideo">
            <meallie-meal-page-instructions :meal="meal"></meallie-meal-page-instructions>
          </div>
        </div>
        <meallie-meal-page-video :meal="meal" class="has-padding-30"></meallie-meal-page-video>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script>
  import MeallieMealPageHeader from "./components/MealPageHeader";
  import MeallieMealPageIngredients from "./components/MealPageIngredients";
  import MeallieMealPageInstructions from "./components/MealPageInstructions";
  import MeallieMealPageVideo from "./components/MealPageVideo";
  import MeallieMealPageArea from "./components/MealPageArea";
  import MeallieMealPageSkeleton from "./components/MealPageSkeleton";

  export default {
    name: 'MealPage',
    components: {
      MeallieMealPageSkeleton,
      MeallieMealPageArea,
      MeallieMealPageVideo, MeallieMealPageInstructions, MeallieMealPageIngredients, MeallieMealPageHeader},
    created() {
      const idMeal = this.$route.params.idMeal;
      this.getMeal.fetch(false, {
        params: {
          i: idMeal
        }
      });
    },
    chimera: {
      getMeal: {
        key: 'getMeal',
        url: 'https://www.themealdb.com/api/json/v1/1/lookup.php',
        method: 'GET',
        // Dont fetch on load
        prefetch: false,
        transformer(response) {
          // Prefetch request
          if (!response) return;

          if (response.error) {
            this.$buefy.toast.open({
              type: 'is-danger',
              message: 'Could not retieve meal. Refresh the page to try again.'
            });
          } else {
            // Response is an array of objects containing single meal.
            console.log(response['meals'][0]);
            return response['meals'][0];
          }
        }
      }
    },
    computed: {
      meal() {
        return this.getMeal.data;
      },
      hasVideo() {
        return this.meal.strYoutube;
      }
    }
  }
</script>
