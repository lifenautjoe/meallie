<template>
  <div v-if="getMeal.data">
    <meallie-meal-page-header :meal="getMeal.data"></meallie-meal-page-header>
    <section class="section container">
      <meallie-meal-page-ingredients :meal="getMeal.data"></meallie-meal-page-ingredients>
    </section>
    <section class="section container">
      <meallie-meal-page-instructions :meal="getMeal.data"></meallie-meal-page-instructions>
    </section>
  </div>
</template>

<style lang="scss">
</style>

<script>
  import MeallieMealPageHeader from "./components/MealPageHeader";
  import MeallieMealPageIngredients from "./components/MealPageIngredients";
  import MeallieMealPageInstructions from "./components/MealPageInstructions";

  export default {
    name: 'MealPage',
    components: {MeallieMealPageInstructions, MeallieMealPageIngredients, MeallieMealPageHeader},
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
    }
  }
</script>
