<template>
  <div class="meallie">
    <div class="meallie-content">
      <nuxt></nuxt>
    </div>
    <meallie-footer></meallie-footer>
  </div>
</template>

<style lang="scss">
  .meallie{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .meallie-content{
    flex: 1;
  }

</style>

<script>
import MeallieHeader from "~/components/Header/Header";
import MeallieFooter from "../components/Footer";

export default {
  components: {MeallieFooter, MeallieHeader},
}
</script>
