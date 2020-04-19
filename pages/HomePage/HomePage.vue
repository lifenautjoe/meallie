<template>
  <div>
    <meallie-header @onSearchBarSearch="onSearchBarSearch"></meallie-header>
    <meallie-search-meal-results v-if="hasSearch"></meallie-search-meal-results>
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
  data(){
    return {
      hasSearch: false
    }
  },
  methods:{
    onSearchBarSearch(queryString){
      if(!queryString) {
        this.hasSearch = false;
        return;
      }

      this.hasSearch = true;
    }
  }
}
</script>
