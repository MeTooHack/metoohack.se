<template>
  <header class="menu">
    <div class="container">
      <nav class="nav" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item">
            <span class="logo">#MeToo Hack</span>
          </nuxt-link>
          <button class="button navbar-burger" v-on:click="dropdownVisible = !dropdownVisible">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div class="nav-menu" :class="{'is-active': dropdownVisible}">
          <div class="navbar-start">
          </div>
          <div class="navbar-end">
          <nuxt-link to="/ideas" class="navbar-item">
            <span class="icon"><i class="fa fa-lightbulb-o"></i></span>
            <span class="">Ideas</span>
          </nuxt-link>
          <a v-on:click="onClick('.section.faq')" class="navbar-item">
            <span class="icon"><i class="fa fa-question"></i></span>
            <span class="">More info</span>
          </a>
          <a v-on:click="onClick('.section.registration')" class="navbar-item">
            <span class="icon"><i class="fa fa-user-plus"></i></span>
            <span class="">Registration</span>
          </a>
          <a v-on:click="onClick('.section.contact')" class="navbar-item">
            <span class="icon"><i class="fa fa-envelope"></i></span>
            <span class="">Contact</span>
          </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>


<script>
import Vue from 'vue';

export default {
  data: () => ({
    dropdownVisible: false,
  }),
  props: {
    selector: String,
  },
  methods: {
    onClick(selector) {
      document.querySelector(selector).scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
      this.dropdownVisible = false;
    },
  },
}
</script>

<style scoped>
.nav {
  position: relative;
}

.nav-menu {
  max-height: 1px;
  overflow: hidden;
  transition: 250ms all ease-out;
  padding-bottom: 0.5em;
}
.nav-menu.is-active {
  max-height: 500px;
  transition: 500ms all ease-out;
}

.navbar-burger {
  color: white;
  background: transparent;
  border: none;
}

.navbar-item {
  color: white;
  text-align: left;
}
.nav-menu .navbar-item {
  padding: 0.75em 1em;
  display: block;
}
.navbar-item:hover {
  color: black;
}
.menu {
  position: fixed;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.7);
  z-index: 2;
}
.logo {
  font-family: 'Permanent Marker', cursive;
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
}
a {
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  .nav {
    align-items: stretch;
    display: flex;
  }

  .nav-menu {
    max-height: none;
    padding-right: 0.5em;
  }

  .navbar-start {
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-left: auto;
  }

  .navbar-end {
    align-items: stretch;
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
  }

  .navbar-burger {
    display: none;
  }
  .nav-menu {
    align-items: stretch;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
  }

  .navbar-item {
    align-items: center;
    display: flex;
    text-align: center;
  }
}
</style>
