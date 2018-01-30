<template>
  <section class="section hero is-fullheight is-medium">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-8">
          <h1 class="title">Coaches</h1>
          <div v-for="(coach, index) in coaches" :key="index" class="box">
            <img class="image" v-if="coach.image" :src="coach.image">
            <p class="title">{{ coach.name }}</p>
            <p class="subtitle">{{ coach.work }}</p>
            <div class="content" v-html="coach.body"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'

export default {
	computed: {
		coaches () {
			return this.$store.state.coaches.slice().sort((a, b) => a.order > b.order);
		},
	}
}
</script>

<style lang="scss" scoped>
.section {
  background-color: #000;
}
.content {
  color: #000;
}
.image {
  margin: 0 auto 1em;
  max-width: 200px;
}
</style>
