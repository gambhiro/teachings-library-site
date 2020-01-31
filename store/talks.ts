import { getterTree, mutationTree, actionTree } from 'typed-vuex';
import * as RD from '@/plugins/remote-data';
import { Talk } from '@/types';

export type TalksAll = {
  kind: RD.rk;
  data: Talk[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
};

export type TalksStoreState = {
  all: TalksAll;
};

export const state = (): TalksStoreState => {
  const s: TalksAll = {
    kind: RD.rk.NotAsked,
    data: [],
    error: {}
  };

  return { all: s };
};

export const getters = getterTree(state, {
  talksAll: (state) => {
    return state.all;
  },

  talksData: (state) => {
    return state.all.data;
  }
});

export const mutations = mutationTree(state, {
  // FIXME: rename to setAll
  setTalksAll(state, all: TalksAll) {
    state.all = all;
  },
  setTalksNotAsked(state) {
    state.all.kind = RD.rk.NotAsked;
  },
  setTalksLoading(state) {
    state.all.kind = RD.rk.Loading;
  },
  setTalksFailure(state, all: TalksAll) {
    state.all.kind = RD.rk.Failure;
    state.all.error = all.error;
  },
  setTalksSuccess(state, all: TalksAll) {
    state.all.kind = RD.rk.Success;
    state.all.data = all.data;
  }
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    async fetchTalks({ commit }) {
      const ret = await this.app.$api
        .get('/talks')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((res: any) => {
          const sorted = res.data.sort(function(a: Talk, b: Talk) {
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

          const s: TalksAll = {
            kind: RD.rk.Success,
            data: sorted,
            error: null
          };
          return s;
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((e: any) => {
          // context.error({ statusCode: 404, message: 'Talks not found' })

          const s: TalksAll = {
            kind: RD.rk.Failure,
            data: [],
            error: e
          };
          return s;
        });

      if (ret.kind === RD.rk.Success) {
        commit('setTalksSuccess', ret);
      } else {
        commit('setTalksFailure', ret);
      }
    },

    talksForChapterId(context, chapterId: number): Talk[] {
      return context.state.all.data.filter((i: Talk) => {
        if (i.book_chapter !== null) {
          return i.book_chapter.id === chapterId;
        }
      });
    }
  }
);
