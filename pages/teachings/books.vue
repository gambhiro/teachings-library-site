<template>
  <div>
    <PageHeader title="Books" />
    <div v-if="booksKind === RD.rk.NotAsked">
      <p>Connecting...</p>
    </div>
    <div v-else-if="booksKind === RD.rk.Loading">
      <Loader />
    </div>
    <div v-else-if="booksKind === RD.rk.Failure">
      <p>Error</p>
      <p>{{ booksError }}</p>
    </div>
    <BookList v-else-if="booksKind === RD.rk.Success" :items="booksData" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PageHeader from '~/components/PageHeader.vue';
import BookList from '~/components/BookList.vue';
import Loader from '~/components/Loader.vue';
import * as RD from '~/plugins/remote-data';
// eslint-disable-next-line
import { BooksStoreState } from '~/store/books';
import { Book } from '~/types';

@Component({
  components: {
    PageHeader,
    BookList,
    Loader
  },

  async fetch(context) {
    if (context.req && context.store.state.books.all.kind === RD.rk.NotAsked) {
      await context.store.dispatch('books/fetchBooks');
    }
  }
})
export default class extends Vue {
  layout(): string {
    return 'page';
  }

  RD = RD;

  mounted(): void {
    const a = (this.$store.state.books as BooksStoreState).all.kind;
    if (a === RD.rk.NotAsked) {
      // FIXME: these are type unsafe function calls
      this.$store.commit('books/setBooksLoading');
      this.$store.dispatch('books/fetchBooks');
    }
  }

  get booksKind(): RD.rk {
    return (this.$store.state.books as BooksStoreState).all.kind;
  }

  get booksData(): Array<Book> {
    return (this.$store.state.books as BooksStoreState).all.data;
  }

  get booksError(): string {
    return (this.$store.state.books as BooksStoreState).all.error;
  }
}
</script>
