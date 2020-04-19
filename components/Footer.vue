<template>
  <footer class="footer has-background-black-bis has-padding-30">
    <div class="content has-text-centered">
      <p class="has-text-white">
        <span>An experiment by </span>
        <a href="https://joelhernandez.xyz" rel="nofollow noreferrer" target="_blank" class="has-text-white">
          Joel Hernández
        </a>
        <span> with data from </span>
        <a href="https://www.themealdb.com" rel="nofollow noreferrer" target="_blank" class="has-text-white">
          TheMealDB
        </a>
        <span>.</span>
      </p>
    </div>
    <div class="container has-text-centered">
      <span class="icon has-text-white">
        <a href="https://github.com/lifenautjoe/meallie" rel="nofollow noreferrer" target="_blank" class="has-text-white">
          <font-awesome-icon :icon="['fab', 'github']"/>
        </a>
      </span>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'MeallieFooter',
  }
</script>

