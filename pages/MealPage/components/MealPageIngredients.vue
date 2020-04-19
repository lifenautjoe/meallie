<template>
  <div class="content is-medium">
    <h2>Ingredients</h2>
    <ul>
      <li v-for="(measure, ingredient, index) in ingredients" :key="index">
        <strong>{{ingredient}}</strong><span v-if="measure">: {{measure}}</span>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'MeallieMealPageIngredients',
    props: {
      meal: {
        type: Object,
        required: true
      }
    },
    computed: {
      ingredients() {
        const meal = this.meal;
        const ingredients = {};

        Object.keys(meal)
          // Remove invalid strIngredients
          .filter((mealKey) => mealKey.includes('strIngredient') && meal[mealKey])
          // Sort by ingredient number
          .sort((keyA, keyB) => {
            if (keyA < keyB) {
              return -1;
            }
            if (keyA > keyB) {
              return 1;
            }
          })
          // Convert to ingredient and measure key-value pair
          .forEach((key,index) => {
            ingredients[meal[key]] = meal[`strMeasure${index}`];
          });

        return ingredients;
      },
    }
  }
</script>
