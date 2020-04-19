<template>
  <div>
    <meallie-meal-page-skeleton v-if="getMeal.loading"></meallie-meal-page-skeleton>
    <div v-else-if="getMeal.data">
      <meallie-meal-page-header :meal="meal"></meallie-meal-page-header>
      <section class="section container">
        <div class="columns">
          <div class="column has-padding-30">
            <meallie-meal-page-area :meal="meal"></meallie-meal-page-area>
            <meallie-meal-page-ingredients :meal="meal"></meallie-meal-page-ingredients>
          </div>
          <div class="column has-padding-30">
            <meallie-meal-page-instructions :meal="meal"></meallie-meal-page-instructions>
          </div>
        </div>
        <meallie-meal-page-video v-if="hasVideo" :meal="meal" class="has-padding-30"></meallie-meal-page-video>
      </section>
    </div>
    <section v-else class="section container">
      <div class="content is-large">
        <p>
          Failed to retrieve meal.
        </p>
        <button class="button is-rounded" @click="refreshMeal" :class="{'is-loading': getMeal.loading}">
          Try again
        </button>
      </div>
    </section>
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
      MeallieMealPageVideo, MeallieMealPageInstructions, MeallieMealPageIngredients, MeallieMealPageHeader
    },
    mounted() {
      this.refreshMeal();
    },
    chimera: {
      getMeal: {
        key: 'getMeal',
        url: 'https://www.themealdb.com/api/json/v1/1/lookup.php',
        method: 'GET',
        auto: false,
        // Dont fetch on load
        prefetch: false,
        transformer(response) {
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
    methods: {
      refreshMeal() {
        const idMeal = this.$route.params.idMeal;
        this.getMeal.fetch(true, {
          params: {
            i: idMeal
          }
        });
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
