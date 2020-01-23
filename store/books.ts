/* eslint-disable @typescript-eslint/no-explicit-any */

import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { RootState } from '~/store';
import * as RD from '~/plugins/remote-data';
import { Book } from '~/types';

type BooksData = {
  kind: RD.rk;
  data: Book[];
  error: any;
};

export type BooksStoreState = {
  all: BooksData;
};

export const state = (): BooksStoreState => {
  const s: BooksData = {
    kind: RD.rk.NotAsked,
    data: [],
    error: {}
  };

  return { all: s };
};

export const getters: GetterTree<BooksStoreState, RootState> = {
  allBooks: (state) => {
    return state.all;
  }
};

export const mutations: MutationTree<BooksStoreState> = {
  setBooksAll(state, all: BooksData) {
    state.all = all;
  },
  setBooksSuccess(state, data: Array<Book>) {
    state.all.kind = RD.rk.Success;
    state.all.data = data;
  },
  setBooksFailure(state, e: any) {
    state.all.kind = RD.rk.Failure;
    state.all.error = e;
  }
};

export const actions: ActionTree<BooksStoreState, RootState> = {
  async fetchBooks({ commit }) {
    const ret = await this.$api
      .get('/books')
      .then((res: any) => {
        const s: BooksData = {
          kind: RD.rk.Success,
          data: res.data,
          error: null
        };
        return s;
      })
      .catch((e: any) => {
        // context.error({ statusCode: 404, message: 'Books not found' })

        const s: BooksData = {
          kind: RD.rk.Failure,
          data: [],
          error: e
        };
        return s;
      });

    if (ret.kind === RD.rk.Success) {
      commit('setBooksSuccess', ret);
    } else {
      commit('setBooksError', ret);
    }
  }
};
