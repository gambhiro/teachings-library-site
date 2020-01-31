<template>
  <div>
    <PageHeader v-if="chapterData.book" :title="chapterData.book.title" />
    <h2>Chapter: {{ chapterData.title }}</h2>
    <p>Mauris ac felis vel velit tristique imperdiet.</p>
    <ul v-if="chapterData.talks.length > 0">
      <li v-for="talk in chapterData.talks" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PageHeader from '@/components/PageHeader.vue';
import { BookChapter } from '@/types';
import * as RD from '@/plugins/remote-data';

@Component({
  components: {
    PageHeader
  },

  async fetch(context) {
    await context.app.$fetchBookChaptersServer();
  }
})
export default class extends Vue {
  layout(): string {
    return 'page';
  }

  RD = RD;

  mounted(): void {
    this.$fetchBookChaptersClient();
  }

  get chapterData(): BookChapter {
    const tocOrder = Number(this.$route.params.toc_order);
    const bookId = Number(this.$route.params.book_id);

    const chapter = this.$accessor.bookChapters.booksChaptersData.find(
      (i: BookChapter) => {
        if (i.book !== null && i.book.id === bookId) {
          return i.toc_order === tocOrder;
        }
      }
    );

    // TODO: handle missing chapter with webdata and 404
    if (typeof chapter === 'undefined') {
      return {
        title: 'untitled',
        id: -1,
        content: '',
        // eslint-disable-next-line
        toc_order: tocOrder,
        // eslint-disable-next-line
        toc_part: "mainmatter",
        talks: [],
        book: null
      };
    }

    return chapter;
  }
}
</script>
