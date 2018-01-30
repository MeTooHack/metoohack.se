<template>
  <header class="menu">
    <div class="container">
      <nav class="nav" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item">
            <img class="logo" src="~/assets/img/metoohack-single-neg.svg" />
            <span class="logo-text">Hack / 2018</span></span>
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
          <nuxt-link to="/coaches" class="navbar-item">
            <span class="icon"><i class="fa fa-user-o"></i></span>
            <span class="">Coaches</span>
          </nuxt-link>
          <nuxt-link to="/press" class="navbar-item">
            <span class="icon"><i class="fa fa-newspaper-o"></i></span>
            <span class="">Press</span>
          </nuxt-link>
          <nuxt-link to="/contact" class="navbar-item">
            <span class="icon"><i class="fa fa-envelope"></i></span>
            <span class="">Contact</span>
          </nuxt-link>
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
  background-color: #8625AA;
  z-index: 2;
}
.logo {
  margin-right: 6px;
  max-height: 1.2rem;
  margin-top: 1px;
}
.logo-text {
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
}

a {
  text-decoration: none;
}

@media screen and (min-width: 768px) {

  .logo {
    margin-right: 10px;
    max-height: 1.3rem;
    margin-top: 2px;
  }
  .logo-text {
    font-size: 1.1rem;
  }


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
