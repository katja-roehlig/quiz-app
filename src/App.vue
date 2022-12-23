<template>
  <div class="main__container">
    <header class="header">
      <h1 class="header__heading">Quiz App</h1>
      <input class="header__input" type="text" placeholder="Search" />
    </header>
    <div class="card__container">
      <div class="card">
        <img
          class="card__image"
          src="https://picsum.photos/220"
          alt="ein Foto"
        />
        <section class="card__text">
          <h2 class="card__heading">Math</h2>
          <p class="card__questions">15 questions</p>
        </section>
      </div>
    </div>
  </div>
</template>

<!-- Styling **************************************************************** -->
<style scoped>
.main__container {
  max-width: 90vw;
  margin: 0 auto;
}
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
/* card-style ***************************************************************/
.card__container {
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
}

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
