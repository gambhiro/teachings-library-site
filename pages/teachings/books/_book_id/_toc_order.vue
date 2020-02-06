<template>
  <div>
    <PageHeader v-if="chapterData.title" :title="pageTitle()" />
    <p style="padding-bottom: 2em;">
       From <nuxt-link :to="$readLink(chapterData.book)">{{
        chapterData.book.title
      }}</nuxt-link>
    </p>

    <div v-if="chapterData.talks.length > 0" class="is-clearfix">
      <div class="is-pulled-right chapter-listen">
        <h3>Listen to this chapter</h3>
        <div v-for="talk in chapterData.talks" :key="talk.id">
          <div v-if="talk.mp3">
            <div class="listen-title">
              {{ talk.title }}

              <a
                class="button is-link is-small is-light is-outlined is-pulled-right"
                :href="talk.mp3.url"
                target="_blank"
              >
                <span class="icon is-small is-right">
                  <fa :icon="fas.faDownload" />
                </span>
                <span>MP3</span>
              </a>
            </div>

            <div class="talk-player">
              <audio controls>
                <source :src="talk.mp3.url" :type="talk.mp3.mime" />
                Your browser does not support the <code>audio</code> element.
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="chapter-content" v-html="$md.render(chapterData.content)"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { IconPack } from '@fortawesome/fontawesome-common-types';
import { fas } from '@fortawesome/free-solid-svg-icons';
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

  pageTitle(): string {
    return (
      'Chapter ' + this.chapterData.toc_order + '. ' + this.chapterData.title
    );
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

  get fas(): IconPack {
    return fas;
  }
}
</script>
