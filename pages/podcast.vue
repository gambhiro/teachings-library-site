<template>
  <div>
    <h1>Podcast</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class extends Vue {
  layout(): string {
    return 'page';
  }
}
</script>
