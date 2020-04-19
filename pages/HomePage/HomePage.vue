<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-flex justify-center align-items-center">
            <div class="content is-large">
              <h1 class="title">Try something new.</h1>
              <h2 class="subtitle has-text-grey">A fresh recipe everytime.</h2>
            </div>
          </div>
          <div class="column is-flex justify-center align-items-center">
            <meallie-meal-of-the-day class="home-page-meal-of-the-day"></meallie-meal-of-the-day>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .home-page-meal-of-the-day{
    max-width: 450px;
  }
</style>

<script>
import MeallieMealOfTheDay from "./components/MealOfTheDay";
export default {
  name: 'MollieHomePage',
  components: {MeallieMealOfTheDay},
}
</script>
