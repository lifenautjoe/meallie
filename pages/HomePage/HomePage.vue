<template>
  <div>
    <meallie-home-page-header @onSearchBarSearch="onHeaderSearchBarSearch"></meallie-home-page-header>
    <div class="container has-padding-40-touch" v-if="hasSearch">
      <meallie-search-meal-results-skeleton
        v-if="getSearchResults.loading && !getSearchResults.data"></meallie-search-meal-results-skeleton>
      <meallie-search-meal-results v-else-if="getSearchResults.data"
                                   :meals="getSearchResults.data"></meallie-search-meal-results>
      <meallie-search-meal-no-results v-else></meallie-search-meal-no-results>
    </div>
    <meallie-splash-screen v-else></meallie-splash-screen>
  </div>
</template>

<script>
  import MeallieMealOfTheDay from "./components/SplashScreen/components/MealOfTheDay";
  import MeallieSearchBar from "./components/HomePageHeader/components/SearchBar";
  import MeallieSplashScreen from "./components/SplashScreen/SplashScreen";
  import MeallieSearchMealResults from "./components/SearchMealResults";
  import MeallieSearchMealResultsSkeleton from "./components/SearchMealResultsSkeleton";
  import MeallieSearchMealNoResults from "./components/SearchMealNoResults";
  import MeallieHomePageHeader from "./components/HomePageHeader/HomePageHeader";

  export default {
    name: 'MollieHomePage',
    components: {
      MeallieHomePageHeader,
      MeallieSearchMealNoResults,
      MeallieSearchMealResultsSkeleton,
      MeallieSearchMealResults,
      MeallieSplashScreen,
      MeallieSearchBar,
      MeallieMealOfTheDay
    },
    data() {
      return {
        hasSearch: false,
      }
    },
    chimera: {
      getSearchResults: {
        key: 'getSearchResults',
        url: 'https://www.themealdb.com/api/json/v1/1/search.php',
        method: 'GET',
        // Dont request on load
        prefetch: false,
        transformer(response) {
          if (response.error) {
            this.$buefy.toast.open({
              type: 'is-danger',
              message: 'Could not search for meal. Please try again.'
            });
          } else {
            return response['meals'];
          }
        }
      }
    },
    methods: {
      onHeaderSearchBarSearch(queryString) {
        if (this.getSearchResults.loading) this.getSearchResults.cancel();

        if (queryString) {
          // Get them meals
          this.hasSearch = true;
          const queryParams = {
            's': queryString
          };

          this.getSearchResults.fetch(false, {params: queryParams});
        } else {
          // Clear search
          this.getSearchResults.data = [];
          this.hasSearch = false;
        }

      },
    }
  }
</script>
