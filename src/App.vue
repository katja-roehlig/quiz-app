<script setup>
import { RouterView } from "vue-router";
import QuizesesView from "@/views/QuizesView.vue";
</script>

<template>
  <div class="main__container"></div>

  <QuizesView />
  <RouterView />
</template>

<!-- Styling **************************************************************** -->
<style scoped>
.main__container {
  max-width: 90vw;
  margin: 0 auto;
}
</style>
