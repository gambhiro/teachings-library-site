<template>
  <div>
    <PageHeader :title="title" />
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PageHeader from '~/components/PageHeader.vue';

@Component({
  components: {
    PageHeader
  }
})
export default class extends Vue {
  layout(): string {
    return 'page';
  }

  title = 'Biography';
  text = 'Nam euismod tellus id erat.';
}
</script>
