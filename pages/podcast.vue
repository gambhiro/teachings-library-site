<template>
  <div>
    <PageHeader title="Podcast" />
    <p>Email newsletter, RSS feeds, iTunes subscription.</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PageHeader from '@/components/PageHeader.vue';

@Component({
  components: {
    PageHeader
  }
})
export default class extends Vue {
  layout(): string {
    return 'page';
  }
}
</script>
