<template>
  <div>
    <PageHeader title="Talks" />
    <div v-if="talksKind === RD.rk.NotAsked">
      <p>Connecting...</p>
    </div>
    <div v-else-if="talksKind === RD.rk.Loading">
      <div class="cssload-container">
        <div class="cssload-zenith"></div>
      </div>
    </div>
    <div v-else-if="talksKind === RD.rk.Failure">
      <p>Error</p>
      <p>{{ talksError }}</p>
    </div>
    <ul v-else-if="talksKind === RD.rk.Success">
      <li v-for="talk in talksData" :key="talk.title">
        <p>
          <strong>{{ talk.title }}</strong>
        </p>
        <div v-if="talk.description" v-html="$md.render(talk.description)" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PageHeader from '~/components/PageHeader.vue';
import * as RD from '~/plugins/remote-data';
// eslint-disable-next-line
import { TalksStoreState } from '~/store/talks';
import { Talk } from '~/types';

@Component({
  components: {
    PageHeader
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
    return (this.$store.state.talks as TalksStoreState).all.data;
  }

  get talksError(): string {
    return (this.$store.state.talks as TalksStoreState).all.error;
  }
}
</script>
