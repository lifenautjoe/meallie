<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-flex justify-center-tablet align-items-center">
            <div class="content is-large has-padding-bottom-30-touch">
              <h1 class="title is-size-3-touch">Find something new.</h1>
              <h2 class="subtitle has-text-grey is-size-4-touch">Fresh meals everyday.</h2>
            </div>
          </div>
          <div class="column is-flex justify-center align-items-center">
            <meallie-meal-of-the-day class="splash-screen-meal-of-the-day"></meallie-meal-of-the-day>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .splash-screen-meal-of-the-day{
    width: 100%;
    max-width: 450px;
  }
</style>

<script>
  import MeallieMealOfTheDay from "./components/MealOfTheDay";
  export default {
    name: 'MeallieSplashScreen',
    components: {MeallieMealOfTheDay},
  }
</script>
