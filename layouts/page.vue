<template>
  <div class="page-wrap">
    <TopNav />

    <div id="main-content" class="container">
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <nuxt />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    TopNav,
    Footer
  }
};
</script>

<style lang="sass">
#main-content
  padding-top: 2rem
  padding-bottom: 2rem
</style>
