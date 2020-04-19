<template>
  <header class="hero is-primary is-medium meal-page-header" v-bind:style="{ background: 'url(' + heroBackgroundImage + ')' }">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand has-padding-20">
            <nuxt-link to="/" class="is-flex align-items-center navbar-item">
              <meallie-logo class="has-text-white"></meallie-logo>
            </nuxt-link>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-size-1 is-size-3-touch">
          {{meal.strMeal}}
        </h1>
        <h2 class="subtitle is-size-3 is-size-5-touch">
          {{meal.strCategory}}
        </h2>
      </div>
    </div>

  </header>
</template>

<style lang="scss">
  .meal-page-header{
    position: relative;
    // Unsure as to why with scoped, these are overriden
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;

    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3); /* Black background with opacity */
    }
  }
</style>

<script>
  import MeallieLogo from "../../../../components/Logo";

  export default {
    name: 'MeallieMealPageHeader',
    components: {MeallieLogo},
    props: {
      meal: {
        type: Object,
        required: true
      }
    },
    computed: {
      heroBackgroundImage(){
        return this.meal.strMealThumb;
      }
    }
  }
</script>
