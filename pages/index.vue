<template>
  <div class="page-wrap">
    <TopNav />

    <LandingHero />

    <div class="container">
      <h1 class="title">
        Teachings Library
      </h1>
      <div class="description">
        <p>
          Amaravati Buddhist Monastery was established by
          <em>Ajahn Sumedho</em> as a place place where Dhamma teachings would
          be easily available to those are interested in them.
        </p>
      </div>

      <div class="columns is-variable is-8 front-cards-columns">
        <div class="column">
          <LandingCard
            title="Podcast"
            title-icon="rss"
            image-url="/images/amaravati-podcast.webp"
            image-desc="Amaravati Podcast"
          >
            Receive updates in email, subscribe with iTunes or RSS feeds.
          </LandingCard>
        </div>

        <div class="column">
          <LandingCard
            title="Audio and Video"
            title-icon="microphone-alt"
            image-url="/images/sunday-talks-2017.webp"
            image-desc="Dhamma Talks"
          >
            Dhamma talks in audio and video format.
          </LandingCard>
        </div>

        <div class="column">
          <LandingCard
            title="Books and Articles"
            title-icon="book"
            image-url="/images/peace-is-a-simple-step.webp"
            image-desc="Dhamma Books"
          >
            Ebooks and articles for download and online reading.
          </LandingCard>
        </div>
      </div>

      <div class="columns is-variable is-8 front-cards-columns">
        <div class="column">
          <LandingCard
            title="Audiobooks"
            title-icon="headphones-alt"
            image-url="/images/the-island.webp"
            image-desc="The Island Audiobook"
          >
            Readings of Dhamma books.
          </LandingCard>
        </div>

        <div class="column">
          <LandingCard
            title="Meditation Retreat Recordings"
            title-icon="play-circle"
            image-url="/images/retreat-recordings.webp"
            image-desc="Meditation Retreat Recordings"
          >
            Recorded teachings from meditation retreats.
          </LandingCard>
        </div>

        <div class="column">
          <LandingCard
            title="Chanting"
            title-icon="quote-right"
            image-url="/images/chanting-and-parittas.webp"
            image-desc="Chanting"
          >
            Pali chanting in audio and text format.
          </LandingCard>
        </div>
      </div>

      <div class="description">
        Further Dhamma talks are available in the <em>Talks Collection</em>,
        which which contains more than a thousand recordings by different
        teachers offering reflections on practice and guidance on meditation.
        include talks given by <em>Ajahn Sumedho</em>, <em>Ajahn Amaro</em> and
        other members of the monastic community.
      </div>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TopNav from '~/components/TopNav.vue';
import Footer from '~/components/Footer.vue';
import LandingHero from '~/components/LandingHero.vue';
import LandingCard from '~/components/LandingCard.vue';

@Component({
  components: {
    TopNav,
    Footer,
    LandingHero,
    LandingCard
  }
})
export default class extends Vue {
  head(): {} {
    return {
      title: 'Teachings Library - Amaravati Buddhist Monastery'
    };
  }
}
</script>

<style lang="sass">
h1.title
  margin-top: 1em
  padding-bottom: 1em

div.front-cards-columns
  padding: 0 2rem 3rem 2rem

  .card .media-content .title
    font-size: 1.5rem
    font-weight: bold

.description
  padding-bottom: 80px
</style>
