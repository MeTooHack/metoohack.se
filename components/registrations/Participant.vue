<template>
  <div class="field is-horizontal">
    <div v-if="remove" class="field-label is-normal">
      <label class="label">
      <a v-if="remove && (participant.id > 1)" @click="remove(participant)" class="delete"></a>
      #{{ participant.id }}
      </label>
    </div>
    <div class="field-body">
      <input type="text" name="bot-field" class="is-hidden" />
      <div class="field">
        <div class="control is-expanded has-icons-left">
          <input :name="'name_' + participant.id" type="text" v-validate="'required'" v-model="participant.name" :class="{'input': true, 'is-danger': errors.has('name_' + participant.id) }" placeholder="Name">
          <span class="icon is-small is-left">
            <i class="fa fa-user"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded has-icons-left">
          <input :name="'email_' + participant.id" type="email" v-validate="'required|email'" v-model="participant.email" :class="{'input': true, 'is-danger': errors.has('email_' + participant.id) }" placeholder="Email">
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded has-icons-left">
          <input v-model="participant.proffession" class="input" type="text" placeholder="Proffesion/Skill">
          <span class="icon is-small is-left">
            <i class="fa fa-magic"></i>
          </span>
        </div>
      </div>
      <div class="field has-addons">
        <div class="control is-expanded has-icons-left">
          <input v-model="participant.food" class="input" type="text" placeholder="Food prefs. / allergies">
          <span class="icon is-small is-left">
            <i class="fa fa-cutlery"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['$validator'],
  props: {
    participant: Object,
    remove: Function
  },
}
</script>
