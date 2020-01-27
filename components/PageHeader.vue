<template>
  <h1 class="page-title">{{ title }}</h1>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import utils from '~/assets/js/utils';

@Component
export default class extends Vue {
  @Prop({ required: true, type: String })
  title!: string;

  head(): {} {
    return {
      title: utils.titleCase(this.title) + ' - Amaravati Buddhist Monastery'
    };
  }
}
</script>
