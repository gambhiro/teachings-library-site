/* eslint-disable @typescript-eslint/no-explicit-any */

import { GetterTree } from 'vuex';
import { RootState } from '~/store';
import { MenuLink } from '~/types';

const aboutMenu: MenuLink = {
  path: '/about',
  label: 'About',
  sub: [
    { path: '/about/history', label: 'History', sub: [] },
    { path: '/about/this-website', label: 'This Website', sub: [] }
  ]
};

const ajahnChahMenu: MenuLink = {
  path: '/ajahn-chah',
  label: 'Ajahn Chah',
  sub: [
    { path: '/ajahn-chah/biography', label: 'Biography', sub: [] },
    { path: '/ajahn-chah/teachings', label: 'Teachings', sub: [] }
  ]
};

const teachingsMenu: MenuLink = {
  path: '/teachings',
  label: 'Teachings',
  sub: [
    { path: '/teachings/talks', label: 'Talks', sub: [] },
    { path: '/teachings/books', label: 'Books', sub: [] },
    { path: '/categories/audiobook', label: 'Audiobooks', sub: [] },
    { path: '/teachings/videos', label: 'Videos', sub: [] },
    { path: '/teachings/articles', label: 'Articles', sub: [] },
    { path: '/teachings/collections', label: 'Collections', sub: [] },
    {
      path: '/categories/meditation-retreat',
      label: 'Recorded Meditation Retreats',
      sub: []
    },
    {
      path: '/categories/guided-meditation',
      label: 'Guided Meditations',
      sub: []
    },
    {
      path: '/categories',
      label: 'All Categories',
      sub: []
    }
  ]
};

const menu: MenuLink[] = [
  aboutMenu,
  ajahnChahMenu,
  teachingsMenu,
  {
    path: '/speakers',
    label: 'Speakers',
    sub: []
  },
  {
    path: '/podcast',
    label: 'Podcast',
    sub: []
  },
  {
    path: '/chanting',
    label: 'Chanting',
    sub: []
  }
];

export type MenuStoreState = {
  items: MenuLink[];
};

export const state = (): MenuStoreState => {
  return { items: menu };
};

export const getters: GetterTree<MenuStoreState, RootState> = {
  menu: (state) => {
    return state.items;
  },

  submenu: (state) => (subpath: string): MenuLink => {
    return state.items.filter((i: MenuLink) => {
      return i.path === subpath;
    })[0];
  }
};
