import { Plugin } from '@nuxt/types';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: NuxtAxiosInstance;
  }
}

const apiAxios: Plugin = (context, inject) => {
  // Create a custom axios instance
  const api = context.$axios.create({
    baseURL: process.env.apiUrl
  });

  inject('api', api);
};

export default apiAxios;
