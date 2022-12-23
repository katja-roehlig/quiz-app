<script>
export default {
  props: ["quiz"],
  setup() {},
};
</script>

<template>
  <div class="card">
    <img class="card__image" :src="quiz.img" alt="ein Foto" />
    <section class="card__text">
      <h2 class="card__heading">{{ quiz.name }}</h2>
      <p class="card__questions">{{ quiz.questions.length }} questions</p>
    </section>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid hotpink;
  border-radius: 0.4rem;
  padding: 0.7rem;
  overflow: hidden;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.6);
  margin-bottom: 2rem;
  margin-right: 2rem;
  cursor: pointer;
}
.card__image {
  overflow: hidden;
  border-radius: 0.3rem;
  width: 15rem;
  height: 10rem;
}
.card__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.4rem;
}
.card__heading {
  font-weight: bold;
  color: hsl(330, 100%, 51%);
  padding: 0 3rem 0rem 3rem;
  border-bottom: 1px solid hotpink;
}
.card__questions {
  padding-top: 1.5rem;
}
</style>
