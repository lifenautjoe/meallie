<template>
  <div>
      <span class="is-size-2">
        {{mealAreaEmoji}}
      </span>
  </div>
</template>

<script>
  export default {
    name: 'MeallieMealArea',
    props: {
      meal: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        mealAreaToEmojiMap: {
          'American': '🇺🇸',
          'British': '🇬🇧',
          'Chinese': '🇨🇳',
          'Dutch': '🇳🇱',
          'Egyptian': '🇪🇬',
          'French': '🇫🇷',
          'Greek': '🇬🇷',
          'Indian': '🇮🇳',
          'Irish': '🇮🇪',
          'Italian': '🇮🇹',
          'Jamaican': '🇯🇲',
          'Japanese': '🇯🇵',
          'Kenyan': '🇰🇪',
          'Malaysian': '🇲🇾',
          'Mexican': '🇲🇽',
          'Moroccan': '🇲🇦',
          'Russian': '🇷🇺',
          'Spanish': '🇪🇸',
          'Thai': '🇹🇭',
          'Tunisian': '🇹🇳',
          'Turkish': '🇹🇷',
          'Unknown': '🌎',
          'Vietnamese': '🇻🇳'
        }
      }
    },
    computed: {
      mealAreaEmoji() {
        return this.mealAreaToEmojiMap[this.meal.strArea] || '🌎';
      }
    }
  }
</script>
