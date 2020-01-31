import { Plugin } from '@nuxt/types';
import * as RD from '@/plugins/remote-data';

declare module 'vue/types/vue' {
  interface Vue {
    $fetchBooksClient: () => void;
    $fetchBookChaptersClient: () => void;
    $fetchTalksClient: () => void;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $fetchBooksServer: () => Promise<void>;
    $fetchBookChaptersServer: () => Promise<void>;
    $fetchTalksServer: () => Promise<void>;
  }
}

// declare module 'vuex/types/index' {
//   interface Store<S> {
//     $fetchBooksServer: () => Promise<void>;
//   }
// }

const storeHelpers: Plugin = (context, inject) => {
  const fetchBooksServer = async (): Promise<void> => {
    if (
      context.req &&
      context.app.$accessor.books.booksAll.kind === RD.rk.NotAsked
    ) {
      await context.app.$accessor.books.fetchBooks();
    }
  };

  const fetchBooksClient = (): void => {
    if (context.app.$accessor.books.booksAll.kind === RD.rk.NotAsked) {
      context.app.$accessor.books.setBooksLoading();
      context.app.$accessor.books.fetchBooks();
    }
  };

  const fetchBookChaptersServer = async (): Promise<void> => {
    if (
      context.req &&
      context.app.$accessor.bookChapters.bookChaptersAll.kind === RD.rk.NotAsked
    ) {
      await context.app.$accessor.bookChapters.fetchBookChapters();
    }
  };

  const fetchBookChaptersClient = (): void => {
    if (
      context.app.$accessor.bookChapters.bookChaptersAll.kind === RD.rk.NotAsked
    ) {
      context.app.$accessor.bookChapters.setLoading();
      context.app.$accessor.bookChapters.fetchBookChapters();
    }
  };

  const fetchTalksServer = async (): Promise<void> => {
    if (
      context.req &&
      context.app.$accessor.talks.talksAll.kind === RD.rk.NotAsked
    ) {
      await context.app.$accessor.talks.fetchTalks();
    }
  };

  const fetchTalksClient = (): void => {
    if (context.app.$accessor.talks.talksAll.kind === RD.rk.NotAsked) {
      context.app.$accessor.talks.setTalksLoading();
      context.app.$accessor.talks.fetchTalks();
    }
  };

  inject('fetchBooksServer', fetchBooksServer);
  inject('fetchBooksClient', fetchBooksClient);
  inject('fetchBookChaptersServer', fetchBookChaptersServer);
  inject('fetchBookChaptersClient', fetchBookChaptersClient);
  inject('fetchTalksServer', fetchTalksServer);
  inject('fetchTalksClient', fetchTalksClient);
};

export default storeHelpers;
