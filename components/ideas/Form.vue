<template>
  <form v-on:submit.prevent="onSubmit">
    <div v-if="!isSuccess">
      <input name="honeypot" v-model="honeypot" class="is-hidden" />

      <idea-input name="title" v-validate="'required'" placeholder="Your idea title" v-model="title" icon="fa-lightbulb-o" />
      <idea-input name="sender" v-validate="'required'" placeholder="E.g. your name or organization" v-model="sender" icon="fa-paper-plane" />
      <idea-input name="email" v-validate="'required|email'" placeholder="Email address to get in touch with you" v-model="email" icon="fa-envelope" />

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea name="description" :class="{'textarea': true, 'is-danger': errors.has('description') }" v-model="description" v-validate="'required'" placeholder="A brief description of the idea"></textarea>
        </div>
        <span v-show="errors.has('description')" class="help is-danger">{{ errors.first('description') }}</span>
      </div>
      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" name="consent" v-validate="'required'">
            I allow that the idea is published publicly
          </label>
        </div>
        <span v-show="errors.has('consent')" class="help is-danger">{{ errors.first('consent') }}</span>
      </div>
    </div>
    <article class="message is-success" :class="{ 'is-hidden': !isSuccess }">
      <div class="message-body">Thank you, your idea has been submitted for review!</div>
    </article>
    <article class="message is-danger" :class="{ 'is-hidden': !isFailure }">
      <div class="message-body">Something went wrong, try again or email us at <a href="mailto:ideas@metoohack.se">staff@metoohack.se</a></div>
    </article>
    <div class="control has-text-centered">
      <button class="button is-primary is-large" :class="{'is-loading': isLoading}" :disabled="errors.items.length > 0">
        <span class="icon">
          <i class="fa fa-paper-plane"></i>
        </span>
        <span>Submit</span>
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import Vue from 'vue';
import VeeValidate from 'vee-validate';

import IdeaInput from './Input.vue';

Vue.use(VeeValidate);

export default {
  components: { IdeaInput },
  data: () => ({
    title: '',
    sender: '',
    email: '',
    description: '',
    honeypot: '',
    isLoading: false,
    isFailure: false,
    isSuccess: false,
  }),
  methods: {
    onSubmit: function(event) {
      this.$validator.validateAll().then((valid) => {
        if (!valid) {
          return;
        }
        // Make sure any previous state is cleared
        this.isSuccess = false;
        this.isFailure = false;

        this.isLoading = true;

        axios.post('/', qs.stringify({
          "form-name": "ideas",
          title: this.title,
          sender: this.sender,
          email: this.email,
          description: this.description,
          honeypot: this.honeypot,
        }))
          .then((response) => {
            this.isLoading = false;
            this.isSuccess = true;

            // Reset form
            this.title = "";
            this.sender = "";
            this.email = "";
            this.description = "";
            this.honeypot = "";

            this.$nextTick()
              .then(() => {
                  this.$validator.reset();
                  this.errors.clear();
              });
          })
          .catch((error) => {
            this.isLoading = false;
            this.isFailure = true;
          });
      });
    },
  },
}
</script>

<style scoped>
.button {
  margin: 2rem 0;
}
</style>
