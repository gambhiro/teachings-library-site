<template>
  <li :class="{ 'is-active': isActive }">
    <nuxt-link :to="toPath" :aria-current="ariaCurrent">{{ label }}</nuxt-link>
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class extends Vue {
  @Prop({ required: true, type: String })
  toPath!: string;

  @Prop({ required: true, type: String })
  label!: string;

  get isActive(): string {
    if (this.currentPath === this.toPath) {
      return 'is-active';
    } else {
      return '';
    }
  }

  get ariaCurrent(): string {
    if (this.currentPath === this.toPath) {
      return 'page';
    } else {
      return '';
    }
  }

  get currentPath(): string {
    return this.$route.path;
  }
}
</script>
