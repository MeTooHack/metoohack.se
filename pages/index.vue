<template>
  <main>
    <section class="section start hero is-fullheight">
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

    <section class="section ideas is-medium">
      <div class="container">
        <h1 class="title">Submit an idea!</h1>
        <div class="columns is-centered">
          <div class="column is-5">
            <p>Probably the biggest challenge of #MeToo Hack is to find and pursue ideas that can really make a difference. And here we need your help! In the spirit of collaboration and open source we will make all ideas (after review) publicly available.</p>
            <ideas-form />
          </div>
        </div>
      </div>
    </section>

    <section class="section faq is-medium">
        <div class="container">
            <h1 class="title">Questions &amp; Answers</h1>
            <h3>What is the "#MeToo movement"</h3>
            <p class="answer">The hashtag #MeToo has shaken our society showing that systematic sexual harassments and assaults are everywhere. Subsequent movements like #deadline, #tystnadtagning, #medvilkenrätt, #teknisktfel (and many more) shows that it's present in almost every part of our society.</p>
            <h3>What is #MeToo Hack?</h3>
            <p class="answer">A one day event where teams of people prototypes, builds and ideates around digital products that in some way could make a difference in the area of sexual abuse and harassment and overall sexual integrity.</p>
            <h3>Isn't hacking illegal?</h3>
            <p class="answer">Hacking is here by no means referring to the illegal art of penetrating computer systems :). By "hacking" we mean thinking outside the box, rapidly prototyping creative solutions and ideas too good (or crazy) not to spend a day to try out!</p>
            <h3>Who can participate?</h3>
            <p class="answer">Anyone with a passion to make a difference in this field! Most teams will build digital products but not being a programmer is NOT a reason not to participate. #MeToo Hack will be limited to 15-20 teams (depending on team size), and teams should not be more than 5 people. Who is in the team however is up to you! Copywriters, lawyers, designers, social workers, sceintists, you name it!</p>
            <h3>Is this a competition?</h3>
            <p class="answer">Very much so, but the teams are not competing against each others, we're fighting norms and social constructs that every day leads to more people taken advantage of.</p>
            <h3>I don't have a team</h3>
            <p class="answer">No worries! Just sign up, stating what you can contribute with and we'll try our best to set you up with a team looking for members.</p>
            <h3>How do I register?</h3>
            <p class="answer">At the registration section below.</p>
            <h3>Will there be food and drinks?</h3>
            <p class="answer">Yes, this will be a fully sponsored event, including food and drinks during the day (thank you sponsors).</p>
            <h3>What do I need to bring?</h3>
            <p class="answer">Bring whatever you need to get to work, a computer, post-its, sharpies, drawing tablets, vegan candy...</p>
            <h3>I don't have an awesome idea yet!</h3>
            <p class="answer">Experts in the field of gender and gender based violence will assist the teams.</p>
        </div>
    </section>

    <section class="section prehack is-medium">
        <div class="container">
            <h1 class="title">Pre-hack</h1>
            <p class="subtitle">Tue Jan 16th, 17:30-20:00 (venue TBA)</p>
            <p>Two weeks before the hack we will host a "pre-hack" forum, where participants get the opportunity to join a cross functional team of field experts to get ideas or feedback on existing ones. Since the problems at hand are so insanely complex and multifaceted the solutions will require input from many points of view, or from many different proffesions.</p>
            <p>Some of the attending experts are researchers Ninni Carlsson and Mari Brännvall from Göteborgs Universitet, journalist and writer Elin Klemetz and Anna Thomasson, former project manager for “Fatta Man”.</p>
        </div>
    </section>

    <section class="section registration is-medium">
        <div class="container">
            <h1 class="title">Registration</h1>
            <p>Each team should be 3-5 people. Register your entire team, or sign up as individuals to join (or form) teams later on. And since we're all working for the public good, maybe one team full of designers will join a team full of programmers to work on two products together?</p>
            <div class="message is-info">
                <div class="message-body">Yikes! &#x1F605; Registrating will from now on put you on the waiting list.</div>
            </div>
            <registration-form />
        </div>
    </section>

    <section class="section sponsors is-medium">
        <div class="container">
            <h1 class="title">Sponsors</h1>
            <div class="columns is-centered">
                <div class="column is-4"><a href="https://www.recordedfuture.com/" target="_blank"><img src="~/assets/img/recorded_future.svg" class="sponsor-image" alt="Recorded Future" /></a></div>
                <div class="column is-4"><a href="https://www.footballaddicts.com/" target="_blank"><img src="~/assets/img/forza.png" class="sponsor-image" alt="Forza Football" /></a></div>
            </div>
            <div class="columns is-centered">
                <div class="column is-4"><a href="https://skyltmax.se/" target="_blank"><img src="~/assets/img/skyltmax_se.svg" class="sponsor-image" alt="Skyltmax" /></a></div>
                <div class="column is-4"><a href="https://evolvetechnology.se" target="_blank"><img src="~/assets/img/evolve.svg" class="sponsor-image" alt="Evolve Technology" /></a></div>
            </div>
            <p>Interested in sponsoring #MeToo Hack? Contact us by email: <a href="mailto:spons@metoohack.se">spons@metoohack.se</a>. Also consider "donating" an idea using the form above!</p>
        </div>
    </section>

    <section class="section contact is-medium">
        <div class="container">
            <h1 class="title">Contact</h1>
            <p>There are a lot of people involved in making this happen but the core team consists of Rebecka G, Joakim G, Erik E, Caroline K <br>and Piérre R.</p>
            <p>To get in touch with us, please drop an email to <a href="mailto:staff@metoohack.se">staff@metoohack.se</a></p>
            <p>Members of the media are invited to contact us by email: <a href="mailto:press@metoohack.se">press@metoohack.se</a>. Please let us know if you're working on a deadline. We will respond as quickly as possible.</p>
        </div>
    </section>

    <footer class="footer">
        <small>#MeToo Hack is a hack</small><br><br>
        <a href="https://www.forthepublic.se"><img src="~/assets/img/for_the_public_white.png" alt="For the Public" /></a>
    </footer>
  </main>
</template>

<script>
import RegistrationForm from '~/components/registrations/Form.vue'
import NewsletterSignup from '~/components/newsletter/Signup.vue'
import ScrollButton from '~/components/ScrollButton.vue'
import IdeasForm from '~/components/ideas/Form.vue'

export default {
  components: {
    IdeasForm,
    NewsletterSignup,
    RegistrationForm,
    ScrollButton,
  }
}
</script>
