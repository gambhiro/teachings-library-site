<template>
  <div>
    <PageHeader title="Talks" />
    <div v-if="talksAll.kind === RD.rk.NotAsked">
      <p>Connecting...</p>
    </div>
    <div v-else-if="talksAll.kind === RD.rk.Loading">
      <Loader />
    </div>
    <div v-else-if="talksAll.kind === RD.rk.Failure">
      <p>Error</p>
      <p>{{ talksAll.error }}</p>
    </div>
    <TalkList
      v-else-if="talksAll.kind === RD.rk.Success"
      :items="talksAll.data"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PageHeader from '@/components/PageHeader.vue';
import TalkList from '@/components/TalkList.vue';
import Loader from '@/components/Loader.vue';
import * as RD from '@/plugins/remote-data';
import { TalksAll } from '@/store/talks';

// TODO: show when talk has a book chapter

// TODO: individual talk pages with chapter content

// TODO: show video button

// TODO: render video page with embedded youtube

@Component({
  components: {
    PageHeader,
    TalkList,
    Loader
  },

  async fetch(context) {
    await context.app.$fetchTalksServer();
  }
})
export default class extends Vue {
  layout(): string {
    return 'page';
  }

  RD = RD;

  mounted(): void {
    this.$fetchTalksClient();
  }

  get talksAll(): TalksAll {
    return this.$accessor.talks.talksAll;
  }
}
</script>
