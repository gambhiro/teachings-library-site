<template>
  <div id="landing-hero" class="hero fs-logo-appear">
    <div id="logo-body" class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-two-fifths">
            <figure id="figure-left" class="image">
              <img
                src="~assets/images/home-page-desktop.jpg"
                alt="Buddha statue"
              />
            </figure>
          </div>

          <div class="column">
            <h1 class="title">
              forestSangha
            </h1>

            <h2 class="subtitle">
              International Monasteries<br />
              in the Theravada Buddhist Tradition of Ajahn Chah
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
#landing-hero
  .hero-body
    padding-top: 0
    padding-bottom: 0

#logo-body
  background-color: white

  h1.title
    color: rgba(0, 0, 0, 0)
    font-size: 25px
    background-image: url(~assets/images/forestSangha.svg)
    background-repeat: no-repeat
    background-size: contain
    margin-top: 280px
    height: 100px
    width: auto

  h2.subtitle
    font-size: 18px

#figure-left img
  height: 500px
  width: auto

.fs-logo-appear
  animation: 2s appear
</style>
