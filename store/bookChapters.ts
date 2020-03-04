import { getterTree, mutationTree, actionTree } from 'typed-vuex';
import * as RD from '@/plugins/remote-data';
import { BookChapter } from '@/types';

export type BookChaptersAll = {
  kind: RD.rk;
  data: BookChapter[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
};

export type BookChaptersStoreState = {
  all: BookChaptersAll;
};

export const state = (): BookChaptersStoreState => {
  const s: BookChaptersAll = {
    kind: RD.rk.NotAsked,
    data: [],
    error: {}
  };

  return { all: s };
};

export const getters = getterTree(state, {
  bookChaptersAll: (state) => {
    return state.all;
  },

  booksChaptersData: (state) => {
    return state.all.data;
  }
});

export const mutations = mutationTree(state, {
  setAll(state, all: BookChaptersAll) {
    state.all = all;
  },
  setNotAsked(state) {
    state.all.kind = RD.rk.NotAsked;
  },
  setLoading(state) {
    state.all.kind = RD.rk.Loading;
  },
  setFailure(state, all: BookChaptersAll) {
    state.all.kind = RD.rk.Failure;
    state.all.error = all.error;
  },
  setSuccess(state, all: BookChaptersAll) {
    state.all.kind = RD.rk.Success;
    state.all.data = all.data;
  }
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    async fetchBookChapters({ commit }) {
      const ret = await this.app.$api
        .get('/book-chapters')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((res: any) => {
          const s: BookChaptersAll = {
            kind: RD.rk.Success,
            data: res.data,
            error: null
          };
          return s;
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((e: any) => {
          // context.error({ statusCode: 404, message: 'Books not found' })

          const s: BookChaptersAll = {
            kind: RD.rk.Failure,
            data: [],
            error: e
          };
          return s;
        });

      if (ret.kind === RD.rk.Success) {
        commit('setSuccess', ret);
      } else {
        commit('setFailure', ret);
      }
    }
  }
);
