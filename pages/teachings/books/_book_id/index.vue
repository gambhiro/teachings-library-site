<template>
  <div>
    <PageHeader :title="bookData.title" />
    <BookItem :book="bookData" :show-read="false" />
    <h2 v-if="bookData.book_chapters.length > 0" class="toc-title">Chapters</h2>
    <ul v-if="bookData.book_chapters.length > 0" class="toc-list">
      <li v-for="chapter in bookData.book_chapters" :key="chapter.toc_order">
        <nuxt-link :to="$chapterLink(bookData, chapter)">
          {{ chapter.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PageHeader from '@/components/PageHeader.vue';
import BookItem from '@/components/BookItem.vue';
import { Book } from '@/types';

@Component({
  components: {
    PageHeader,
    BookItem
  },

  async fetch(context) {
    await context.app.$fetchBooksServer();
  }
})
export default class extends Vue {
  layout(): string {
    return 'page';
  }

  mounted(): void {
    this.$fetchBooksClient();
  }

  get bookData(): Book {
    const bookId = Number(this.$route.params.book_id);

    const book: Book | undefined = this.$accessor.books.booksData.find(
      (i: Book) => i.id === bookId
    );

    // TODO: use webdata and 404
    if (typeof book === 'undefined') {
      return {
        title: 'not found',
        description: '',
        id: bookId,
        downloads: [],
        authors: [],
        // eslint-disable-next-line
        book_chapters: []
      };
    }

    return book;
  }
}
</script>
