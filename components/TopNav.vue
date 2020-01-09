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
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#A07838" />
          </svg>
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
          <nuxt-link to="/about" class="navbar-item">
            about
          </nuxt-link>

          <nuxt-link to="/ajahn-chah" class="navbar-item">
            ajahn chah
          </nuxt-link>

          <nuxt-link to="/community" class="navbar-item">
            community
          </nuxt-link>

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
                placeholder="search"
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
