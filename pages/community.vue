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
    { toPath: '/community', label: 'community' },
    { toPath: '/community/news', label: 'news' },
    { toPath: '/community/monasteries', label: 'monasteries' },
    { toPath: '/community/calendars', label: 'calendars' }
  ];
}
</script>
