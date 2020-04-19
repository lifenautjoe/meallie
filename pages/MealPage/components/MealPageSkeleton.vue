<template>
  <header class="hero is-primary is-medium">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand has-padding-20">
            <nuxt-link to="/" class="is-flex align-items-center navbar-item is-disabled">
              <meallie-logo class="has-text-white"></meallie-logo>
            </nuxt-link>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-size-1 is-size-3-touch">
          Loading...
        </h1>
        <h2 class="subtitle is-size-3 is-size-5-touch">
          {{randomFunnyLoadingPhrase}}
        </h2>
      </div>
    </div>

  </header>
</template>

<script>
  import MeallieLogo from "../../../components/Logo";

  export default {
    name: 'MeallieMealPageSkeleton',
    components: {MeallieLogo},
    data() {
      return {
        funnyLoadingPhrases: [
          'Assembling the pasta-bytes...',
          'Asking Gordon Ramsey for permission...',
          'Fetching a snack...',
          'Recording the tutorial video...',
        ]
      }
    },
    computed: {
      randomFunnyLoadingPhrase() {
        return this.funnyLoadingPhrases[Math.floor(Math.random() * this.funnyLoadingPhrases.length)];
      }
    }
  }
</script>
