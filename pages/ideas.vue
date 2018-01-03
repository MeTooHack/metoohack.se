<template>
  <section class="section ideas is-medium">
    <div class="container">
      <h1 class="title">Submit an idea!</h1>
      <div class="columns is-centered">
        <div class="column is-5">
          <p>Probably the biggest challenge of #MeToo Hack is to frame problems, pursue ideas and generate solutions that can really make a difference. Here we need your help! And in the spirit of collaboration (and open source) we will make the ideas publicly available.</p>
          <ideas-form />
        </div>
      </div>
      <h1 class="title">Idea bank</h1>
      <div class="masonry">
        <div class="masonry-brick" v-for="(idea, index) in ideas">
          <p class="title">{{ idea.title }}</p>
          <p class="subtitle">By: {{ idea.author }}</p>
          <nuxtent-body class="masonry-content" :body="idea.body" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IdeasForm from '../components/ideas/Form.vue';

export default {
  components: { IdeasForm },
  computed: {
    ideas () { return this.$store.state.ideas }
  },
}
</script>

<style lang="scss" scoped>
.columns {
  margin-bottom: 3em;
}

.masonry {
  display: flex;
  flex-flow: row wrap;
  margin-left: -8px; /* Adjustment for the gutter */
}

.masonry-brick {
  flex: auto;
  min-width: 150px;
  margin: 0 8px 8px 0; /* Some gutter */
  padding: 1em;
  background-color: #fff;
  box-shadow: 1px 1px 7px rgba(0,0,0,0.5);
  text-align: left;

  &:nth-child(4n+1){
     width: 250px;
  }
  &:nth-child(4n+2){
     width: 325px;
  }
  &:nth-child(4n+3){
     width: 180px;
  }
  &:nth-child(4n+4){
     width: 380px;
  }
}
</style>
