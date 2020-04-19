<template>
  <div class="card" style="width: 100%;">
    <div class="card-image">
      <figure class="image is-square">
        <img :src="mealImgPlaceholder" alt="Meal image placeholder">
      </figure>
    </div>
    <div class="card-content">
      <vcl-facebook></vcl-facebook>
    </div>
  </div>
</template>

<script>
  import {VclFacebook} from 'vue-content-loading';

  export default {
    name: 'MeallieMealCardSkeleton',
    components: {VclFacebook},
    computed: {
      mealImgPlaceholder() {
        return require('./assets/meal-img-placeholder.png');
      }
    }
  }
</script>
