<template>
  <div id="landing-hero" class="hero fs-logo-appear">
    <div id="logo-body" class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-two-fifths">
            <figure id="figure-left" class="image is-2by3">
              <img src="/images/home-page-desktop.jpg" alt="Buddha statue" />
            </figure>
          </div>

          <div class="column">
            <figure id="figure-right" class="image">
              <img src="/images/forestSangha.svg" alt="logo" />
            </figure>
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

<style>
#logo-body {
  background-color: #fff;
  /* padding-top: 0; */
  /* padding-bottom: 0; */
}

/* constrain to about 1170px */
/*
    #landing-hero {
    padding-left: 20rem;
    padding-right: 20rem;
    }
  */

#figure-left img {
  height: 500px;
  width: auto;
}

#figure-right {
  margin-top: 280px;
}

#figure-right img {
  height: 100px;
  width: auto;
}

.fs-logo-appear {
  animation: 2s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
