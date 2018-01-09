<template>
  <section class="section hero is-fullheight is-medium">
    <div class="container">
      <h1 class="title" ref="title">Idea bank</h1>
      <masonry
        :cols="{default: 3, 768: 2, 450: 1}"
        :gutter="{default: '30px', 768: '15px'}"
        >
        <div class="idea new-idea" v-on:click="modalOpen = true">
          <span class="icon">
            <i class="fa fa-plus"></i>
          </span>
          <span>Submit idea!</span>
        </div>
        <div v-for="(idea, index) in ideas" :key="index" class="idea">
            <p class="title">{{ idea.title }}</p>
            <p class="subtitle">By: {{ idea.author }}</p>
            <div v-html="idea.body"></div>
        </div>
      </masonry>
      <div class="modal" :class="{'is-active': modalOpen}">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <h2 class="modal-card-title">Submit an idea!</h2>
            <button class="delete" aria-label="close" v-on:click="modalOpen = false"></button>
          </header>
          <section class="modal-card-body">
              <p>Probably the biggest challenge of #MeToo Hack is to frame problems, pursue ideas and generate solutions that can really make a difference. Here we need your help! And in the spirit of collaboration (and open source) we will make the ideas publicly available.</p>
              <ideas-form />
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import VueMasonry from 'vue-masonry-css'
import IdeasForm from '../components/ideas/Form.vue';

Vue.use(VueMasonry);

export default {
  components: { IdeasForm },
  computed: {
    ideas () { return this.$store.state.ideas }
  },
  data: () => ({
    modalOpen: false,
  }),
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

  a {
    color: #333;
  }
}
.idea {
  padding: 1em;
  background-color: #fff;
  box-shadow: 1px 1px 7px rgba(0,0,0,0.5);
  text-align: left;
  margin-bottom: 2em;

  &.new-idea {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #8625AA;
    color: #fff;

    font-weight: bold;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-family: Quicksand, sans-serif;

    .icon {
      margin-top: 3px;
    }

    &:hover {
      background-color: lighten(#8625AA, 10%);
    }
  }
}
.modal-card-body p {
  margin: 0 auto 2rem;
}
</style>
