import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { RootState } from '~/store';
import * as RD from '~/plugins/remote-data';
import { Book } from '~/types';

type BooksData = {
  kind: RD.rk;
  data: Book[];
  error: string;
};

export type BooksStoreState = {
  all: BooksData;
};

export const state = (): BookStoreState => {
  let s = {
    kind: RD.rk.NotAsked,
    data: [],
    error: {}
  };

  return { all: s };
};

export const getters: GetterTree<BookStoreState, RootState> = {
  allBooks: (state) => {
    return state.all;
  }
};

export const mutations: MutationTree<BookStoreState>  = {
  setBooks(state, all: BooksData) {
    state.all = all;
  }
};

export const actions: ActionTree<BookStoreState, RootState> = {
  async fetchBooks ({ commit }) {
    const all = await this.$api
          .get('/books')
          .then((res) => {
            const s: BooksData = {
              kind: RD.rk.Success,
              data: res.data,
              error: {}
            };
            return s;
          })
          .catch((e) => {
            // context.error({ statusCode: 404, message: 'Books not found' })

            const s: BooksData = {
              kind: RD.rk.Failure,
              error: e
            };
            return s;
          });

    commit('setBooks', all);
  }
};
