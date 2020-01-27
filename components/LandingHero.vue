<template>
  <section id="landing-hero" class="hero logo-appear">
    <div class="hero-body">
      <div class="container">
        <figure class="image">
          <img
            src="~assets/images/amaravati-temple-buddha-bw.webp"
            alt="Amaravati Temple Buddha"
          />
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="sass">
#landing-hero .hero-body
  padding-top: 0
  padding-bottom: 0

.logo-appear
  animation: 2s appear

@keyframes appear
  0%
    opacity: 0

  100%
    opacity: 1
</style>
