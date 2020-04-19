<template>
  <div>
    <meallie-header @onSearchBarSearch="onSearchBarSearch"></meallie-header>
    <div v-if="hasSearch">
      <div v-if="getSearchResults.loading">
        Is loading...
      </div>
      <meallie-search-meal-results v-else-if="getSearchResults.data"
                                   :results="getSearchResults.data"></meallie-search-meal-results>
      <div v-else>
        No results found
      </div>
    </div>
    <meallie-splash-screen v-else></meallie-splash-screen>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
  import MeallieMealOfTheDay from "./components/SplashScreen/components/MealOfTheDay";
  import MeallieHeader from "../../components/Header/Header";
  import MeallieSearchBar from "../../components/Header/components/SearchBar";
  import MeallieSplashScreen from "./components/SplashScreen/SplashScreen";
  import MeallieSearchMealResults from "./components/SearchMealResults";

  export default {
    name: 'MollieHomePage',
    components: {MeallieSearchMealResults, MeallieSplashScreen, MeallieSearchBar, MeallieHeader, MeallieMealOfTheDay},
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
      onSearchBarSearch(queryString) {
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

      }
    }
  }
</script>
