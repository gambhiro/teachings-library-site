<template>
  <nav
    id="top-nav"
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img src="~/assets/images/topnav-logo.svg" />
        </nuxt-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <nuxt-link to="/about" class="navbar-link">
              about
            </nuxt-link>

            <div class="navbar-dropdown">
              <nuxt-link to="/about/history" class="navbar-item">
                history
              </nuxt-link>

              <nuxt-link to="/about/this-website" class="navbar-item">
                this website
              </nuxt-link>

              <nuxt-link to="/about/disclaimer" class="navbar-item">
                disclaimer
              </nuxt-link>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <nuxt-link to="/ajahn-chah" class="navbar-link">
              ajahn chah
            </nuxt-link>

            <div class="navbar-dropdown">
              <nuxt-link to="/ajahn-chah/dedication" class="navbar-item">
                dedication
              </nuxt-link>

              <nuxt-link to="/ajahn-chah/biography" class="navbar-item">
                biography
              </nuxt-link>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <nuxt-link to="/community" class="navbar-link">
              community
            </nuxt-link>

            <div class="navbar-dropdown">
              <nuxt-link to="/community/news" class="navbar-item">
                news
              </nuxt-link>

              <nuxt-link to="/community/monasteries" class="navbar-item">
                monasteries
              </nuxt-link>

              <nuxt-link to="/community/calendars" class="navbar-item">
                calendars
              </nuxt-link>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <nuxt-link to="/teachings" class="navbar-link">
              teachings
            </nuxt-link>

            <div class="navbar-dropdown">
              <nuxt-link to="/teachings/audio" class="navbar-item">
                audio
              </nuxt-link>

              <nuxt-link to="/teachings/books" class="navbar-item">
                books
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="control has-icons-right">
              <input
                class="input is-rounded"
                type="text"
                placeholder="Search (press '/' to focus)"
              />
              <span class="icon is-small is-right">
                <fa :icon="fas.faSearch" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
  computed: {
    fas() {
      return fas
    }
  }
}
</script>
