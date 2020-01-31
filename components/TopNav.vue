<template>
  <nav
    id="top-nav"
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <a
        id="nav-back-to-main"
        href="https://www.amaravati.org/"
        class="navbar-item"
      >
        <span class="icon is-small is-right">
          <fa :icon="fas.faArrowLeft" />
        </span>
        <span style="padding-left: 0.5rem;">Main</span>
      </a>
      <div class="navbar-brand">
        <nuxt-link id="topnav-logo" class="navbar-item" to="/">
          <img src="@/assets/images/abm-logo-topnav.svg" />
        </nuxt-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBurgerBasic"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBurgerBasic" class="navbar-menu">
        <div class="navbar-start">
          <NavMenu v-for="i in menu" :key="i.path" :menu="i" />
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

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { IconPack } from '@fortawesome/fontawesome-common-types';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MenuLink } from '@/types';
import NavMenu from '@/components/NavMenu.vue';

@Component({
  components: {
    NavMenu
  }
})
export default class extends Vue {
  get menu(): MenuLink[] {
    return this.$accessor.menu.items;
  }

  get fas(): IconPack {
    return fas;
  }
}
</script>

<style lang="sass">
#nav-back-to-main
  margin-right: 0.8rem

#topnav-logo:hover
  background-color: #fafafa
</style>
