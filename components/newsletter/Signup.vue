<template>
  <form v-on:submit.prevent="onSubmit" name="email-signup" netlify-honeypot="honeypot" method="POST" netlify>
    <input name="honeypot" v-model="honeypot" class="is-hidden" />
    <div class="field has-addons">
      <div class="control has-icons-left is-expanded">
        <input v-model="email" class="input" type="email" name="email" placeholder="Enter email to get updates!" required />
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
      </div>
      <div class="control">
        <button type="submit" class="button is-info is-inverted is-outlined" :class="{ 'is-loading': isLoading }">Submit</button>
      </div>
    </div>
      <article class="message is-success" :class="{ 'is-hidden': !isSuccess }">
        <div class="message-body">You're now registered to follow the hack by email!</div>
      </article>
      <article class="message is-danger" :class="{ 'is-hidden': !isFailure }">
        <div class="message-body">Something went wrong, try again or email us at <a href="mailto:staff@metoohack.se">staff@metoohack.se</a></div>
      </article>
  </form>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
  data: () => ({
    email: '',
    honeypot: '',
    isLoading: false,
    isFailure: false,
    isSuccess: false,
  }),
  methods: {
    onSubmit: function(event) {
      // Make sure any previous state is cleared
      this.isSuccess = false;
      this.isFailure = false;

      this.isLoading = true;

      axios.post('/', qs.stringify({ "form-name": "email-signup", email: this.email, honeypot: this.honeypot }))
        .then((response) => {
          this.isLoading = false;
          this.isSuccess = true;

          // Reset form
          this.email = "";
          this.honeypot = "";
        })
        .catch((error) => {
          this.isLoading = false;
          this.isFailure = true;
        });
    },
  },
}
</script>
