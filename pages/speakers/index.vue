<template>
	<h1>Speakers</h1>
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
