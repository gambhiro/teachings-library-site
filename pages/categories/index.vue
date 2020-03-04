<template>
  <div>
    <PageHeader title="Categories" />
    <p>Mauris ac felis vel velit tristique imperdiet.</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PageHeader from '@/components/PageHeader.vue';

// TODO: list of categories

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
