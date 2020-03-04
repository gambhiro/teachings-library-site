import { getAccessorType } from 'typed-vuex';
import * as books from '@/store/books';
import * as talks from '@/store/talks';
import * as menu from '@/store/menu';
import * as bookChapters from '@/store/bookChapters';

export const state = (): {} => ({});

export type RootState = ReturnType<typeof state>;

export const getters = {};
export const mutations = {};
export const actions = {};

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    books,
    bookChapters,
    talks,
    menu
  }
});
