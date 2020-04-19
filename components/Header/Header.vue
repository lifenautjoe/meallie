<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand has-padding-20">
        <nuxt-link to="/" class="is-flex align-items-center">
          <meallie-logo></meallie-logo>
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <meallie-search-bar></meallie-search-bar>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import MeallieLogo from "../Logo";
  import MeallieSearchBar from "./components/SearchBar";
  export default {
    name: 'MeallieHeader',
    components: {MeallieSearchBar, MeallieLogo},
  }
</script>
