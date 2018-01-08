<template>
  <section class="section is-medium hero is-fullheight">
    <div class="container">
      <h1 class="title">Press Releases</h1>
      <div class="columns is-centered">
        <div class="column is-8">
          <article class="press-release" v-for="release in releases">
            <h2 class="title">{{release.title}}</h2>
            <div v-html="release.body"></div>
          </article>
        </div>
      </div>

      <h1 class="title">Media Library</h1>
      <div class="columns is-centered">
        <div class="column is-4">
          <a href="/img/press/metoo_hack_staff_1.jpg" class="download">
            <img src="~/assets/img/press/metoo_hack_staff_1.jpg" />
            <span class="is-overlay">
              <span>
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Click for high-res happiness</span>
              </span>
              <small>Image credits <a href="http://www.stinagranfors.se/" target="_blank">Stina Gränfors</a></small>
            </span>
          </a>
        </div>
        <div class="column is-4">
          <a href="/img/press/metoo_hack_staff_4.jpg" class="download">
            <img src="~/assets/img/press/metoo_hack_staff_4.jpg" />
            <span class="is-overlay">
              <span>
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Click for high-res happiness</span>
              </span>
              <small>Image credits <a href="http://www.stinagranfors.se/" target="_blank">Stina Gränfors</a></small>
            </span>
          </a>
        </div>
        <div class="column is-4">
          <a href="/img/press/metoo_hack_staff_3.jpg" class="download">
            <img src="~/assets/img/press/metoo_hack_staff_3.jpg" />
            <span class="is-overlay">
              <span>
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Click for high-res happiness</span>
              </span>
              <small>Image credits <a href="http://www.stinagranfors.se/" target="_blank">Stina Gränfors</a></small>
            </span>
            </span>
          </a>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-4">
          <a href="/img/press/metoo_hack_staff_2.jpg" class="download">
            <img src="~/assets/img/press/metoo_hack_staff_2.jpg" />
            <span class="is-overlay">
              <span>
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Click for high-res happiness</span>
              </span>
              <small>Image credits <a href="http://www.stinagranfors.se/" target="_blank">Stina Gränfors</a></small>
            </span>
          </a>
        </div>
        <div class="column is-4">
          <a href="/img/press/rebecka_gustin.jpg" class="download">
            <img src="~/assets/img/press/rebecka_gustin.jpg" />
            <span class="is-overlay">
              <span>
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Click for high-res happiness</span>
              </span>
              <small>Image credits <a href="http://www.stinagranfors.se/" target="_blank">Stina Gränfors</a></small>
            </span>
          </a>
        </div>
        <div class="column is-4">
          <a href="/img/press/rebecka_joakim_gustin.jpg" class="download">
            <img src="~/assets/img/press/rebecka_joakim_gustin.jpg" />
            <span class="is-overlay">
              <span>
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Click for high-res happiness</span>
              </span>
              <small>Image credits <a href="http://www.stinagranfors.se/" target="_blank">Stina Gränfors</a></small>
            </span>
          </a>
        </div>
      </div>
      <small>All image credits <a href="http://www.stinagranfors.se/" target="_blank">Stina Gränfors Photography</a></small>

      <!-- <a class="button"> -->
      <!--   <span class="icon"> -->
      <!--     <i class="fa fa-download"></i> -->
      <!--   </span> -->
      <!--   <span>#MeToo Hack Logotype</span> -->
      <!-- </a> -->
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    releases () { return this.$store.state.press }
  },
}
</script>

<style lang="scss">
article.press-release {
  background-color: #fff;
  color: #000;
  text-align: left;
  padding: 2em;
  background-color: #fff;
  box-shadow: 1px 1px 7px rgba(0,0,0,.5);

  p {
    margin-bottom: 2rem;
  }
}
</style>

<style lang="scss" scoped>
.section {
  background-color: #A2AFD3;

  a {
    color: #fff;
    text-decoration: underline;
  }

  .columns {
    margin-bottom: 3rem;
  }
}

img {
  box-shadow: 1px 1px 7px rgba(0,0,0,.5);
}

.download {
  display: block;
  position: relative;

  .is-overlay {
    background-color: rgba(0,0,0,0.3);
    color: #fff;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    display:none;
  }

  &:hover .is-overlay {
    display: flex;
    flex-direction: column;
  }
}
</style>
