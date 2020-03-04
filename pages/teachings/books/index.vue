<template>
  <div>
    <PageHeader title="Books" />
    <div v-if="booksAll.kind === RD.rk.NotAsked">
      <p>Connecting...</p>
    </div>
    <div v-else-if="booksAll.kind === RD.rk.Loading">
      <Loader />
    </div>
    <div v-else-if="booksAll.kind === RD.rk.Failure">
      <p>Error</p>
      <p>{{ booksAll.error }}</p>
    </div>
    <BookList
      v-else-if="booksAll.kind === RD.rk.Success"
      :items="booksAll.data"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PageHeader from '@/components/PageHeader.vue';
import BookList from '@/components/BookList.vue';
import Loader from '@/components/Loader.vue';
import * as RD from '@/plugins/remote-data';
import { BooksAll } from '@/store/books';

@Component({
  components: {
    PageHeader,
    BookList,
    Loader
  },

  async fetch(context) {
    await context.app.$fetchBooksServer();
  }
})
export default class extends Vue {
  layout(): string {
    return 'page';
  }

  RD = RD;

  mounted(): void {
    this.$fetchBooksClient();
  }

  get booksAll(): BooksAll {
    return this.$accessor.books.booksAll;
  }
}
</script>
