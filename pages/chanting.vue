<template>
  <div>
    <PageHeader title="Chanting" />
    <p>Mauris ac felis vel velit tristique imperdiet.</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PageHeader from '@/components/PageHeader.vue';

// TODO: show chanting books and chanting category

// TODO: chanting recording with Pali text

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
