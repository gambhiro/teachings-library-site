<template>
  <div>
    <PageHeader title="Speakers" />
    <p>Mauris ac felis vel velit tristique imperdiet.</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PageHeader from '@/components/PageHeader.vue';

// TODO: list of speakers
// - create store, etc.

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
