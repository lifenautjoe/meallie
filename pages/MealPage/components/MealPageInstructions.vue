<template>
  <div class="content is-medium">
    <h2>Instructions</h2>
    <template v-for="line in meal.strInstructions.split('\n')"><p>{{line}}</p></template>

  </div>
</template>

<script>

  export default {
    name: 'MeallieMealPageInstructions',
    props: {
      meal: {
        type: Object,
        required: true
      }
    },
  }
</script>
