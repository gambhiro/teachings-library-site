<template>
  <div>
    <BreadCrumbs :items="submenu" />
    <nuxt-child />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
// eslint-disable-next-line
import { MenuStoreState } from '~/store/menu';
import { MenuLink } from '~/types';
import BreadCrumbs from '~/components/BreadCrumbs.vue';

@Component({
  components: {
    BreadCrumbs
  }
})
export default class extends Vue {
  layout(): string {
    return 'page';
  }

  get submenu(): MenuLink {
    return this.$store.getters['menu/submenu']('/about');
  }
}
</script>
