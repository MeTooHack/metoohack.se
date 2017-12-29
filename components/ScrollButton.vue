<template>
  <button type="button" @click="onClick" class="button">
    <slot />
  </button>
</template>

<script>

export default {
  props: {
    selector: String,
  },
  methods: {
    onClick: function(event) {
      document.querySelector(this.selector).scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    },
  },
}
</script>
