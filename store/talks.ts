/* eslint-disable @typescript-eslint/no-explicit-any */

import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { RootState } from '~/store';
import * as RD from '~/plugins/remote-data';
import { Talk } from '~/types';

type TalksData = {
  kind: RD.rk;
  data: Talk[];
  error: any;
};

export type TalksStoreState = {
  all: TalksData;
};

export const state = (): TalksStoreState => {
  const s: TalksData = {
    kind: RD.rk.NotAsked,
    data: [],
    error: {}
  };

  return { all: s };
};

export const getters: GetterTree<TalksStoreState, RootState> = {
  allTalks: (state) => {
    return state.all;
  }
};

export const mutations: MutationTree<TalksStoreState> = {
  setTalksAll(state, all: TalksData) {
    state.all = all;
  },
  setTalksNotAsked(state) {
    state.all.kind = RD.rk.NotAsked;
  },
  setTalksLoading(state) {
    state.all.kind = RD.rk.Loading;
  },
  setTalksFailure(state, all: TalksData) {
    state.all.kind = RD.rk.Failure;
    state.all.error = all.error;
  },
  setTalksSuccess(state, all: TalksData) {
    state.all.kind = RD.rk.Success;
    state.all.data = all.data;
  }
};

export const actions: ActionTree<TalksStoreState, RootState> = {
  async fetchTalks({ commit }) {
    const ret = await this.app.$api
      .get('/talks')
      .then((res: any) => {
        const s: TalksData = {
          kind: RD.rk.Success,
          data: res.data,
          error: null
        };
        return s;
      })
      .catch((e: any) => {
        // context.error({ statusCode: 404, message: 'Talks not found' })

        const s: TalksData = {
          kind: RD.rk.Failure,
          data: [],
          error: e
        };
        return s;
      });

    if (ret.kind === RD.rk.Success) {
      commit('setTalksSuccess', ret);
    } else {
      commit('setTalksError', ret);
    }
  }
};
