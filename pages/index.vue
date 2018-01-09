<template>
  <main>
    <section class="section hero is-fullheight">
        <p class="hero-title">
          <img src="~/assets/img/metoohack-neg.svg" />
        </p>
        <div class="level">
            <div class="level-item has-text-centered">
                <div>
                    <div class="usp-title">When</div>
                    <div class="usp-content">Feb 3, 2018</div>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <div class="usp-title">Where</div>
                    <div class="usp-content">Göteborg</div>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <div class="usp-title">Venue</div>
                    <div class="usp-content">Spotify Office</div>
                </div>
            </div>
        </div>
        <p class="is-size-5">Shaken (and deeply frustrated) by the #MeToo movement, as digital creators we have decided to join forces and take action.<br>
                In a one day hack teams will prototype creative solutions to the underlying problems shown by #MeToo.</p>
        <div class="columns is-centered">
            <div class="column is-5">
              <newsletter-signup />
            </div>
        </div>
    </section>

    <FAQ />

    <pre-hack />

    <sponsors />

    <contributors />

  </main>
</template>

<script>
import RegistrationForm from '~/components/registrations/Form.vue'
import NewsletterSignup from '~/components/newsletter/Signup.vue'
import IdeasForm from '~/components/ideas/Form.vue'
import Contributors from '~/components/sections/Contributors.vue';
import FAQ from '~/components/sections/FAQ.vue';
import PreHack from '~/components/sections/PreHack.vue';
import Sponsors from '~/components/sections/Sponsors.vue';

export default {
  components: {
    Contributors,
    FAQ,
    IdeasForm,
    NewsletterSignup,
    PreHack,
    RegistrationForm,
    Sponsors,
  }
}
</script>

<style lang="scss" scoped>
.section.hero {
  background: #000 url(~/assets/img/metoo-website-bg.jpg) no-repeat top center;
  background-size: 300% auto;
  display: flex;
  justify-content: space-evenly;

  @media only screen and (min-width: 35em) {
    background-size: 100% auto;
  }

  .hero-title {
    margin: 2em auto 1em;
    font-family: 'Permanent Marker', cursive;
    font-size: 3rem;
    color: #fff;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
  }

  .usp-title {
    text-transform: uppercase;
  }
  .usp-content {
    font-size: 2em;
    line-height: 1.2;
  }
}

p {
  margin: 0 auto 2em;
  max-width: 540px;
}
</style>
