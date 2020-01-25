<template>
  <div>
    <PageHeader title="Talks" />
    <div v-if="talksKind === RD.rk.NotAsked">
      <p>Connecting...</p>
    </div>
    <div v-else-if="talksKind === RD.rk.Loading">
      <Loader />
    </div>
    <div v-else-if="talksKind === RD.rk.Failure">
      <p>Error</p>
      <p>{{ talksError }}</p>
    </div>
    <TalkList v-else-if="talksKind === RD.rk.Success" :items="talksData" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PageHeader from '~/components/PageHeader.vue';
import TalkList from '~/components/TalkList.vue';
import Loader from '~/components/Loader.vue';
import * as RD from '~/plugins/remote-data';
// eslint-disable-next-line
import { TalksStoreState } from '~/store/talks';
import { Talk } from '~/types';

@Component({
  components: {
    PageHeader,
    TalkList,
    Loader
  },

  async fetch(context) {
    if (context.req && context.store.state.talks.all.kind === RD.rk.NotAsked) {
      await context.store.dispatch('talks/fetchTalks');
    }
  }
})
export default class extends Vue {
  layout(): string {
    return 'page';
  }

  RD = RD;

  mounted(): void {
    const a = (this.$store.state.talks as TalksStoreState).all.kind;
    if (a === RD.rk.NotAsked) {
      this.$store.commit('talks/setTalksLoading');
      this.$store.dispatch('talks/fetchTalks');
    }
  }

  get talksKind(): RD.rk {
    return (this.$store.state.talks as TalksStoreState).all.kind;
  }

  get talksData(): Array<Talk> {
    const d = (this.$store.state.talks as TalksStoreState).all.data.slice(0);
    const sorted = d.sort(function(a, b) {
      const albumA = a.album_title.toUpperCase();
      const albumB = b.album_title.toUpperCase();
      if (albumA < albumB) {
        return -1;
      }
      if (albumA > albumB) {
        return 1;
      }

      if (a.track_number < b.track_number) {
        return -1;
      }

      if (a.track_number > b.track_number) {
        return 1;
      }

      return 0;
    });
    return sorted;
  }

  get talksError(): string {
    return (this.$store.state.talks as TalksStoreState).all.error;
  }
}
</script>
