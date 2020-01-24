<template>
  <div>
    <PageHeader title="Books" />
    <div v-if="booksKind === RD.rk.NotAsked">
      <p>Connecting...</p>
    </div>
    <div v-else-if="booksKind === RD.rk.Loading">
      <p>Loading...</p>
    </div>
    <div v-else-if="booksKind === RD.rk.Failure">
      <p>Error</p>
      <p>{{ booksError }}</p>
    </div>
    <ul v-else-if="booksKind === RD.rk.Success">
      <li v-for="book in booksData" :key="book.title">
        <p>
          <strong>{{ book.title }}</strong>
        </p>
        <div v-html="$md.render(book.description)" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PageHeader from '~/components/PageHeader.vue';
import * as RD from '~/plugins/remote-data';
// eslint-disable-next-line
import { BooksStoreState } from '~/store/books';
import { Book } from '~/types';

@Component({
  components: {
    PageHeader
  },

  async fetch(context) {
    if (context.req && context.store.state.books.all.kind === RD.rk.NotAsked) {
      await context.store.dispatch('books/fetchBooks');
    }
  }
})
export default class extends Vue {
  layout = 'page';

  RD = RD;

  mounted(): void {
    const a = (this.$store.state.books as BooksStoreState).all.kind;
    if (a === RD.rk.NotAsked) {
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
