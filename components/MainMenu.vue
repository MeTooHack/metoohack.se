<template>
  <header class="menu">
    <div class="container">
      <nav class="level">
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
          <span class="logo">#MeToo Hack</span>
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
    </div>
  </header>
</template>

<style scoped>
.menu {
  position: fixed;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.7);
  z-index: 2;
}
.logo {
  font-family: 'Permanent Marker', cursive;
  font-size: 3rem;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
}
a {
  text-decoration: none;
}
</style>
