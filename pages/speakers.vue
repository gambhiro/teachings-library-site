<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

// TODO: breadcrumbs

@Component
export default class extends Vue {
  layout(): string {
    return 'page';
  }
}
</script>
