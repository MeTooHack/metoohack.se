<template>
  <section class="section hero is-fullheight is-medium">
    <div class="container">
      <h1 class="title" ref="title">Showcase</h1>
      <div class="columns" v-for="projects in chunkedProjects">
        <div class="column is-4" v-for="project in projects">
          <div class="card">
            <div class="card-image">
              <figure v-if="project.image" class="image">
                <img :src="project.image" :alt="project.name">
              </figure>
            </div>
            <div class="card-content">
              <p class="title">{{project.name}}</p>
              <p class="subtitle" v-if="project.tagline">{{project.tagline}}</p>
              <div class="content" v-html="project.body"></div>
            </div>
            <div class="card-footer" v-if="project.links">
              <a :href="link" target="_blank" v-for="(link, name) in project.links" class="card-footer-item">{{name}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import chunk from 'chunk';

export default {
	computed: {
		chunkedProjects () {
			return chunk(this.$store.state.showcase.slice().sort((a, b) => a.body.length < b.body.length), 3);
		},
	}
}
</script>

<style lang="scss" scoped>
.section {
  background-color: #E5E6EA;
  color: #333;

  h1.title {
    color: #333;
    text-shadow: none;
  }
}
.card {
  color: #333;
}
.image {
  max-height: 250px;
  overflow: hidden;
}
</style>
