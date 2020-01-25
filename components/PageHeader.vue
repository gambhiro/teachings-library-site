<template>
  <div class="columns">
    <div class="column is-half">
      <h1 class="page-title">{{ title.toLowerCase() }}</h1>
    </div>
  </div>
</template>

<style lang="sass">
h1.page-title
  font-size: 3rem
  text-align: right
  text-transform: lowecase
  font-weight: 400
  margin-top: 20px
  margin-bottom: 10px
  color: #bfbfbf
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import utils from '~/assets/js/utils';

@Component
export default class extends Vue {
  @Prop({ required: true, type: String })
  title!: string;

  head(): {} {
    return {
      title: utils.titleCase(this.title) + ' - Forest Sangha'
    };
  }
}
</script>
