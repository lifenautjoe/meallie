<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-flex justify-center align-items-center">
            <div class="content is-large">
              <h1 class="title">Try something new.</h1>
              <h2 class="subtitle has-text-grey">A fresh recipe everyday.</h2>
            </div>
          </div>
          <div class="column is-flex justify-center align-items-center">
            <meallie-meal-of-the-day></meallie-meal-of-the-day>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MeallieMealOfTheDay from "./components/MealOfTheDay";
export default {
  name: 'MollieHomePage',
  components: {MeallieMealOfTheDay},
}
</script>
