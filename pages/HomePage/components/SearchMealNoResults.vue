<template>
  <section class="hero is-large" v-else>
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          ☹️ No search results.
        </h1>
        <h2 class="subtitle">
          Please try with another query.
        </h2>
      </div>
    </div>
  </section>
</template>


<script>
  export default {
    name: 'MeallieSearchMealNoResults',
  }
</script>
