<template>
  <section class="section sponsors">
    <div class="container">
      <h1 class="title">Sponsors</h1>
      <div class="columns is-centered">
        <div class="column is-3"><a href="https://www.recordedfuture.com/" target="_blank"><img src="~/assets/img/recorded_future.svg" alt="Recorded Future" /></a></div>
        <div class="column is-3 is-offset-1"><a href="https://www.footballaddicts.com/" target="_blank"><img src="~/assets/img/forza.png" alt="Forza Football" /></a></div>
        <div class="column is-3 is-offset-1"><a href="https://skyltmax.se/" target="_blank"><img src="~/assets/img/skyltmax_se.svg" alt="Skyltmax" style="width: 100%" /></a></div>
      </div>
      <div class="columns is-centered">
        <div class="column is-3"><a href="https://evolvetechnology.se" target="_blank"><img src="~/assets/img/evolve.svg" class="sponsor-image" alt="Evolve Technology" /></a></div>
        <div class="column is-3 is-offset-1"><a href="http://goteborgco.se/" target="_blank"><img src="~/assets/img/NLG_RGB.png" alt="Näringslivsgruppen - Göteborg & Co" /></a></div>
      </div>
      <hr />
      <div class="columns is-centered">
        <div class="column is-2"><a href="https://www.stendahls.se/" target="_blank"><img src="~/assets/img/stendahls.png" alt="Stendahls" style="max-width: 150px;" /></a></div>
        <div class="column is-2 is-offset-2"><a href="http://www.stockholmmediafactory.se/" target="_blank"><img src="~/assets/img/SMF_Logo_CMYK.png" alt="Stockholm Media Factory" style="max-width: 90px" /></a></div>
        <div class="column is-2 is-offset-2"><a href="https://www.ahlbo.se/" target="_blank"><img src="~/assets/img/ahlbo.png" alt="Ahlbo Extenso" style="max-width: 150px;"/></a></div>
      </div>
      <p>Interested in sponsoring #MeToo Hack? Contact us by email: <a href="mailto:spons@metoohack.se">spons@metoohack.se</a>.</p>
      <p>Also consider "donating" an idea at the <nuxt-link to="/ideas">ideas page</nuxt-link>!</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  background-color: #E5E6EA;
  color: #333;

  h1.title {
    color: #333;
    text-shadow: none;
  }
  a {
    color: #333;
    text-decoration: underline;
  }
  .column {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
