<template>
  <div id="page-footer" class="footer">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h4>Amaravati Teachings Library</h4>
          <ul>
            <li>
              <nuxt-link to="/podcast">Podcast</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/books">Books</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/talks">Talks</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/audiobooks">Audiobooks</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/retreat-recordings">Retreat Recordings</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/chanting">Chanting</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="column borders">
          <h4>Subscribe / Feeds</h4>
          <ul>
            <li>Email Newsletter</li>
            <li>RSS feeds</li>
            <li>iTunes</li>
          </ul>
        </div>

        <div class="column">
          <h4>Support</h4>
          <ul>
            <li>Donations</li>
          </ul>
        </div>
      </div>

      <p>Contact Us / Getting Here</p>

      <p>Copyright © 2020 Amaravati Buddhist Monastery</p>
      <p>
        This work is licensed under a
        <a
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
          target="_blank"
          >Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
          International License</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
#page-footer
  background-color: $footer-background
  color: $footer-color
  border-top: $footer-border 4px solid
  text-align: center
  h4
    font-size: 1.2rem
    margin-bottom: 1.5rem
  .column.borders
    border-left: $footer-color 1px solid
    border-right: $footer-color 1px solid
  a
    color: $footer-link
    font-weight: bold
    &:hover
      color: $footer-link-hover
</style>
