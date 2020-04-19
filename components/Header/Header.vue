<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand has-padding-20">
        <nuxt-link to="/" class="is-flex align-items-center" @click.native.prevent="onLogoClicked">
          <meallie-logo></meallie-logo>
        </nuxt-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <meallie-search-bar ref="searchBar" @onSearch="onSearchBarSearch" :search-query.sync="searchBarQuery"></meallie-search-bar>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
  import MeallieLogo from "../Logo";
  import MeallieSearchBar from "./components/SearchBar";
  export default {
    name: 'MeallieHeader',
    components: {MeallieSearchBar, MeallieLogo},
    methods: {
      onSearchBarSearch(queryString){
        this.$emit('onSearchBarSearch', queryString);
      },
      onLogoClicked(){
        this.clearSearchBarSearch();
      },
      clearSearchBarSearch(){
        this.$refs['searchBar'].clearSearch();
      }
    }
  }
</script>
