import { getterTree, mutationTree, actionTree } from 'typed-vuex';
import * as RD from '@/plugins/remote-data';
import { Book } from '@/types';

export type BooksAll = {
  kind: RD.rk;
  data: Book[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
};

export type BooksStoreState = {
  all: BooksAll;
};

export const state = (): BooksStoreState => {
  const s: BooksAll = {
    kind: RD.rk.NotAsked,
    data: [],
    error: {}
  };

  return { all: s };
};

export const getters = getterTree(state, {
  booksAll: (state) => {
    return state.all;
  },

  booksData: (state) => {
    return state.all.data;
  }
});

export const mutations = mutationTree(state, {
  // FIXME: rename to setAll
  setBooksAll(state, all: BooksAll) {
    state.all = all;
  },
  setBooksNotAsked(state) {
    state.all.kind = RD.rk.NotAsked;
  },
  setBooksLoading(state) {
    state.all.kind = RD.rk.Loading;
  },
  setBooksFailure(state, all: BooksAll) {
    state.all.kind = RD.rk.Failure;
    state.all.error = all.error;
  },
  setBooksSuccess(state, all: BooksAll) {
    state.all.kind = RD.rk.Success;
    state.all.data = all.data;
  }
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    async fetchBooks({ commit }) {
      const ret = await this.app.$api
        .get('/books')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((res: any) => {
          const s: BooksAll = {
            kind: RD.rk.Success,
            data: res.data,
            error: null
          };
          return s;
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((e: any) => {
          // context.error({ statusCode: 404, message: 'Books not found' })

          const s: BooksAll = {
            kind: RD.rk.Failure,
            data: [],
            error: e
          };
          return s;
        });

      if (ret.kind === RD.rk.Success) {
        commit('setBooksSuccess', ret);
      } else {
        commit('setBooksFailure', ret);
      }
    }
  }
);
