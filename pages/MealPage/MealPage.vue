<template>
  <div v-if="getMeal.data">
    <meallie-meal-page-header :meal="getMeal.data"></meallie-meal-page-header>

  </div>
</template>

<style lang="scss">
</style>

<script>
  import MeallieMealPageHeader from "./components/MealPageHeader/MealPageHeader";
  import MeallieLogo from "../../components/Logo";

  export default {
    name: 'MealPage',
    components: {MeallieLogo, MeallieMealPageHeader},
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
            return response['meals'][0];
          }
        }
      }
    },
  }
</script>
