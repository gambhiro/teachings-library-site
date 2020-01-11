<template>
  <div>
    <TopNav />

    <LandingHero />

    <div id="description" class="columns">
      <div class="column is-two-fifths is-offset-two-fifths">
        <p>
          The <em>Forest Sangha website</em> serves as a portal to the worldwide
          community of monasteries associated with Ajahn Chah’s
          <em>Wat Pah Pong</em> in NE Thailand and is dedicated to the free
          distribution of teachings in this tradition.
        </p>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue'
import Footer from '~/components/Footer.vue'
import LandingHero from '~/components/LandingHero.vue'

export default {
  components: {
    TopNav,
    Footer,
    LandingHero
  }
}
</script>

<style lang="sass">
#description
  padding-top: 85px
  padding-bottom: 80px
</style>
