<template>
  <div class="content is-medium">
    <h2 class="has-padding-bottom-20">Step-by-step video</h2>
    <youtube :video-id="youtubeVideoId" ref="youtube" :fit-parent="true"></youtube>
  </div>
</template>

<script>
  export default {
    name: 'MeallieMealPageVideo',
    props: {
      meal: {
        type: Object,
        required: true
      }
    },
    computed:  {
      youtubeVideoId(){
        return this.$youtube.getIdFromUrl(this.meal.strYoutube);
      }
    }
  }
</script>
