<template>
  <div class="has-padding-20">
    <div class="field">
      <label class="label is-hidden">Search meals</label>
      <div class="control">
        <input
          class="input is-rounded is-medium"
          type="text"
          placeholder="Search meals..."
          v-debounce:500ms="onSearchQueryChanged"
          v-model="searchQuery">

      </div>
    </div>
  </div>
</template>

<script>
  const debounce = require('lodash.debounce');

  export default {
    name: 'MeallieSearchBar',
    data() {
      return {
        searchQuery: ''
      }
    },
    methods: {
      onSearchQueryChanged(value){
        this.$emit('onSearch', value);
      },
      // To be used with $ref with parent components
      clearSearch(){
        this.searchQuery = '';
        // When programmatically changing the value, the v-debounce lib doesnt trigger change
        this.onSearchQueryChanged();
      }
    },
  }
</script>
