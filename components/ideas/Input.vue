<template>
  <div class="field">
    <label class="label">{{ name | capitalize }}</label>
    <div class="control has-icons-left">
      <input ref="input" :class="{'input': true, 'is-danger': errors.has(name) }" type="text" :name="name" :placeholder="placeholder" :value="value" @input="emitUpdate()">
      <span v-if="icon" class="icon is-small is-left">
        <i class="fa" :class="icon"></i>
      </span>
    </div>
    <span v-show="errors.has(name)" class="help is-danger">{{ errors.first(name) }}</span>
  </div>
</template>

<script>
export default {
  inject: ['$validator'],
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  props: {
    placeholder: String,
    name: String,
    icon: String,
    value: String,
    rules: String,
  },
  methods: {
    emitUpdate() {
      this.$emit('input', this.$refs.input.value)
    }
  },
}
</script>
