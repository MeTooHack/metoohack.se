Vue.use(VeeValidate);

const encodeSingle = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
const encodeMultiple = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "[]=" + encodeURIComponent(data[key]) + ";")
    .join("&");
}

Vue.component('participant', {
  props: ['participant', 'remove'],
  inject: ['$validator'],
  template: `
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
  </div>`
})

var app = new Vue({
  el: '#app',
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
  data: {
    teamMembers: [
      { id: 1 }
    ],
    individual: { id: 1},
    mode: 'team',
    message: '',
    isLoading: false
  },
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

        this.isLoading = true;

        let data;
        if (this.isIndividual) {
          data = "form-name=registration-individual&message=" + encodeURIComponent(this.message) + "&" + encodeSingle(this.individual)
        } else if (this.isTeam) {
          data = "form-name=registration-team&message=" + encodeURIComponent(this.message) + "&";
          data = this.teamMembers.reduce((acc, member) => {
            return acc + encodeMultiple(member) + "&"
          }, data).slice(0, -1); // Remove trailing ampersand
        }
        console.log(data);
        $.post("/", data).then(() => {
          // Reset form
          this.individual = {};
          this.teamMembers = [];
          // Show confirmation
          this.mode = 'submitted';
        });
        this.isLoading = false;
      });
    }
  }
})

