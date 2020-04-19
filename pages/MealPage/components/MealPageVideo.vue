<template>
  <div class="content is-medium">
    <h2 class="has-padding-bottom-20">Step-by-step video</h2>
    <div class="has-padding-10">
      <youtube :video-id="youtubeVideoId" ref="youtube" :fit-parent="true" :resize="true"></youtube>

    </div>
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
