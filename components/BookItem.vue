<template>
  <div class="book-item">
    <h4>{{ book.title }}</h4>
    <ul class="author-list">
      <li
        v-for="author in book.authors"
        :key="author.name"
        :class="{ 'has-separator': book.authors.length > 1 }"
      >
        {{ author.name }}
      </li>
    </ul>
    <div class="columns">
      <div class="column is-one-third">
        <div v-if="book.cover" class="book-cover">
          <img :src="book.cover.url" />
        </div>
      </div>
      <div class="column">
        <div v-if="book.description" v-html="$md.render(book.description)" />
        <div class="book-downloads buttons">
          <a
            v-for="file in bookDownloads"
            :key="file.url"
            class="button is-link is-small is-light is-outlined"
            :href="file.url"
            target="_blank"
          >
            <span class="icon is-small is-right">
              <fa :icon="fas.faDownload" />
            </span>
            <span v-if="file.ext == '.epub'">EPUB</span>
            <span v-else-if="file.ext == '.mobi'">MOBI</span>
            <span v-else-if="file.ext == '.pdf'">PDF</span>
            <span v-else>{{ file.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { IconPack } from '@fortawesome/fontawesome-common-types';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Book, Download } from '~/types';

@Component
export default class extends Vue {
  @Prop({ required: true, type: Object })
  book!: Book;

  get bookDownloads(): Download[] {
    const d = this.book.downloads.slice(0);
    const sorted = d.sort(function(a, b) {
      const extA = a.ext.toUpperCase();
      const extB = b.ext.toUpperCase();
      if (extA < extB) {
        return -1;
      }
      if (extA > extB) {
        return 1;
      }
      return 0;
    });

    return sorted;
  }

  get fas(): IconPack {
    return fas;
  }
}
</script>

<style lang="sass">
div.book-item
  margin-bottom: 2rem
  h4
    font-size: 1.3rem
    margin-bottom: 0.5rem
    color: $content-heading-color
    font-weight: $content-heading-weight
    line-height: $content-heading-line-height

div.book-cover
  width: 136px
  padding: 3px
  border: 1px solid hsl(0, 0%, 60%)
  img
    width: 130px

div.book-downloads
  margin-top: 2rem

ul.author-list
  margin-bottom: 0.8rem
  list-style: none
  display: flex
  flex-wrap: wrap
  align-items: flex-start
  justify-content: flex-start
  li.has-separator
    display: flex
    padding-right: 0.5rem
    &::after
      content: ","
    &:last-child::after
        padding-right: 0
        content: ""
</style>
