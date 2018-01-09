<template>
  <main>
    <main-menu />
    <nuxt/>
  </main>
</template>

<script>
import MainMenu from '~/components/MainMenu.vue';

export default {
  components: { MainMenu },
}
</script>

<style lang="scss">

@import './assets/styles/main.scss';

body {
  font-family: $secondary-font;
  font-size: 18px;
  text-align: center;
}

.section {
  padding-top: 5rem;
}

.title {
  font-family: $primary-font;
}

h1.title {
  font-family: $brand-font;
  font-size: 3rem;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
}

h3 {
  margin-bottom: 0.5em;
  font-size: 1.25rem;
  font-weight: bold;
}

</style>
