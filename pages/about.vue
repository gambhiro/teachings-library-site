<template>
  <div>
    <BreadCrumbs :items="items" />
    <nuxt-child />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import BreadCrumbs from '~/components/BreadCrumbs.vue';
import { Link } from '~/types';

@Component({
  components: {
    BreadCrumbs
  }
})
export default class extends Vue {
  layout(): string {
    return 'page';
  }

  items: Link[] = [
    { toPath: '/about', label: 'about' },
    { toPath: '/about/history', label: 'history' },
    { toPath: '/about/this-website', label: 'this website' },
    { toPath: '/about/disclaimer', label: 'disclaimer' }
  ];
}
</script>
