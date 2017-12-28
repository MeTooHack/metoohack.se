<template>
  <div v-if="!isSubmitted">
    <div class="buttons is-centered">
      <button class="button is-primary is-inverted is-large" :class="[isTeam ? 'is-active' : 'is-outlined']" v-on:click="setMode('team')">
        <span class="icon"><i class="fa fa-users" aria-hidden="true"></i></span>
        <span>Team</span>
      </button>
      <button class="button is-primary is-inverted is-large" :class="[isIndividual ? 'is-active' : 'is-outlined']" v-on:click="setMode('individual')">
        <span class="icon"><i class="fa fa-user" aria-hidden="true"></i></span>
        <span>Individual</span>
      </button>
    </div>
    <div v-if="isTeam">
      <participant
         v-for="member in teamMembers"
         v-bind:participant="member"
         v-bind:remove="removeMember"
         v-bind:key="member.id">
      </participant>
      <div class="field">
        <button class="button" v-on:click="addMember">
          <span class="icon"><i class="fa fa-user-plus" aria-hidden="true"></i></span>
          <span>Add team member</span>
        </button>
      </div>
      <div class="field columns is-centered">
        <div class="column is-6">
          <textarea class="textarea" v-model="message" placeholder="A message to the staff, e.g. how the team knows each others, if you've got questions, if you want some specific expert on site etc..."></textarea>
        </div>
      </div>
    </div>
    <div v-if="isIndividual">
      <participant :participant="individual"></participant>
      <div class="field columns is-centered">
        <div class="column is-6">
          <textarea class="textarea" v-model="message" placeholder="A message to the staff; questions, ideas etc."></textarea>
        </div>
      </div>
    </div>
    <div class="notification is-warning" v-if="errors.items.length > 0" style="margin: 2em 0 0">
      Your form contains errors, please fix them before submitting
    </div>
    <article class="message is-danger" :class="{ 'is-hidden': !hasError }" style="margin: 2em 0 0">
      <div class="message-body">Something went wrong, try again or email us at <a href="mailto:staff@metoohack.se">staff@metoohack.se</a></div>
    </article>
    <button class="button registration-submit is-large is-primary" :class="{'is-loading': isLoading}" v-if="mode !== ''" v-on:click="submit">
      <span class="icon"><i class="fa fa-paper-plane" aria-hidden="true"></i></span>
      <span>Submit</span>
    </button>
  </div>
  <div v-else>
    <div class="notification is-success">
      &#x1F601;&nbsp;&nbsp;&nbsp;&#x1F389;&nbsp;&nbsp;&nbsp;&#x1F4BB;&nbsp;&nbsp;&nbsp; your registration has been submitted!
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Participant from './Participant.vue';
import qs from 'qs';

Vue.use(VeeValidate);

export default {
  components: { Participant },
  computed: {
    isTeam: function () {
      return this.mode == 'team';
    },
    isIndividual: function () {
      return this.mode == 'individual';
    },
    isSubmitted: function () {
      return this.mode == 'submitted';
    }
  },
  data: () => ({
    teamMembers: [
      { id: 1 }
    ],
    individual: { id: 1 },
    mode: 'team',
    hasError: false,
    message: '',
    isLoading: false
  }),
  methods: {
    addMember: function () {
      const id = (this.teamMembers.length == 0) ? 1 : this.teamMembers[this.teamMembers.length - 1].id+1;
      this.teamMembers.push({id: id})
    },
    removeMember: function (member) {
      this.teamMembers = this.teamMembers.filter(e => e.id !== member.id);
    },
    setMode: function (mode) {
      this.mode = mode;
    },
    submit: function () {
      this.$validator.validateAll().then((valid) => {
        if (!valid) {
          return;
        }

        this.hasError = false;
        this.isLoading = true;

        let data;
        if (this.isIndividual) {
          data = qs.stringify({
            "form-name": "registration-individual",
            message: this.message,
            name: this.individual.name,
            email: this.individual.email,
            proffession: this.individual.proffession,
            food: this.individual.food,
          });
        } else if (this.isTeam) {
          data = qs.stringify({ "form-name": "registration-team", message: this.message})

          this.teamMembers.forEach((member) => {
            data = data + "&" + qs.stringify({
              "name[]": member.name + ";",
              "email[]": member.email + ";",
              "proffession[]": member.proffession + ";",
              "food[]": member.food + ";",
            });
          })
        }

        axios.post("/", data)
          .then(() => {
            // Show confirmation
            this.isLoading = false;
            this.mode = 'submitted';
            // Reset form
            this.individual = {};
            this.teamMembers = [];
          })
          .catch((error) => {
            this.isLoading = false;
            this.hasError = true;
          });
      });
    }
  }
}
</script>
