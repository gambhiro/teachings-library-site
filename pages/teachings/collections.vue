<template>
  <div>
    <PageHeader title="Collections" />
    <p>Mauris ac felis vel velit tristique imperdiet.</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PageHeader from '@/components/PageHeader.vue';

// TODO: list collections
// - create store
// - fetch() and mounted()
// - list

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
