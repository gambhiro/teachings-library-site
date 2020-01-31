<template>
  <div>
    <TalkItem v-for="talk in items" :key="talk.title" :talk="talk" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import TalkItem from '@/components/TalkItem.vue';
import { Talk } from '@/types';

@Component({
  components: {
    TalkItem
  }
})
export default class extends Vue {
  @Prop({ required: true, type: Array })
  items!: Array<Talk>;
}
</script>
