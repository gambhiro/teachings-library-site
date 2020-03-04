import { Plugin } from '@nuxt/types';
import { Book, BookChapter } from '@/types';

declare module 'vue/types/vue' {
  interface Vue {
    $chapterLink: (book: Book, chapter: BookChapter) => string;
    $readLink: (book: Book) => string;
  }
}

const urlHelpers: Plugin = (_context, inject) => {
  const chapterLink = (book: Book, chapter: BookChapter): string => {
    return '/teachings/books/' + book.id + '/' + chapter.toc_order;
  };

  const readLink = (book: Book): string => {
    return '/teachings/books/' + book.id;
  };

  inject('chapterLink', chapterLink);
  inject('readLink', readLink);
};

export default urlHelpers;
