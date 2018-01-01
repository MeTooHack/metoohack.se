<template>
  <header class="menu">
    <div class="container">
      <nav class="nav" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <span class="logo">#MeToo Hack</span>
          </a>
          <button class="button navbar-burger" v-on:click="navToggle" data-target="mainNavMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div class="nav-menu" id="mainNavMenu">
          <div class="navbar-start">
          </div>
          <div class="navbar-end">
          <a class="navbar-item">
            <span class="icon"><i class="fa fa-calendar"></i></span>
            <span class="">Events</span>
          </a>
          <a class="navbar-item">
            <span class="icon"><i class="fa fa-lightbulb-o"></i></span>
            <span class="">Ideas</span>
          </a>
          <a class="navbar-item">
            <span class="icon"><i class="fa fa-question"></i></span>
            <span class="">More info</span>
          </a>
          </div>
        </div>
      </nav>
<!--
      <nav class="level">
        <p class="level-item has-text-centered">
          <span class="logo">#MeToo Hack</span>
        </p>
        <p class="level-item has-text-centered">
          <a>
            <span class="icon">
              <i class="fa fa-calendar"></i>
            </span>
            <span>Events</span>
          </a>
        </p>
        <p class="level-item has-text-centered">
          <a class="is-info">
            <span class="icon">
              <i class="fa fa-lightbulb-o"></i>
            </span>
            <span>Ideas</span>
          </a>
        </p>
        <p class="level-item has-text-centered">
          <a>
            <span class="icon">
              <i class="fa fa-question"></i>
            </span>
            <span>FAQ</span>
          </a>
        </p>
        <p class="level-item has-text-centered">
          <a>
            <span class="icon">
              <i class="fa fa-newspaper-o"></i>
            </span>
            <span>Press</span>
          </a>
        </p>
      </nav>
      -->
    </div>
  </header>
</template>


<script>
import Vue from 'vue';

export default {
  props: {
    selector: String,
  },
  methods: {
    navToggle: function(event) {
      // Get the target from the "data-target" attribute
      var $button = event.target;
      var target = $button.dataset.target;
      var $target = document.getElementById(target);

      // Toggle the class on both the "navbar-burger" and the "navbar-menu"
      $button.classList.toggle('is-active');
      $target.classList.toggle('is-active');
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
  }
}


</style>