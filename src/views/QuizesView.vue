<script setup>
import q from "@/data/data.json";
import { ref, watch } from "vue";
import Card from "@/components/Card.vue";

const quizes = ref(q);
const search = ref("");

watch(search, () => {
  quizes.value = q.filter((element) =>
    element.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <header class="header">
    <h1 class="header__heading">Quiz App</h1>
    <input
      v-model.trim="search"
      class="header__input"
      type="text"
      placeholder="Search"
    />
    <p>{{ search }}</p>
  </header>
  <div class="card__container">
    <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    <!--<CardComponent v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    -->
  </div>
</template>

<!-- Styling **************************************************************** -->
<style scoped>
.header {
  border-bottom: 2px solid hotpink;
  padding: 3rem 1rem 2rem 1rem;
  display: flex;
  gap: 5rem;
  align-items: center;
}
.header__heading {
  font-weight: bold;
  text-transform: uppercase;
  color: hsl(330, 100%, 51%);
}
.header__input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  border-radius: 3rem;
  padding-inline: 0.8rem;
  width: 30%;
  height: 2.5rem;
}
.header__input:focus {
  text-decoration: none;
  outline: 2px solid hotpink;
  appearance: none;
}
.card__container {
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
