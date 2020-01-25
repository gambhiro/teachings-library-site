<template>
  <div class="talk-item">
    <h4>
      <span>{{ talk.title }}</span>
      <span v-if="talk.album_title"> &ndash; {{ talk.album_title }}</span>
    </h4>
    <ul v-if="talk.author" class="author-list">
      <li>
        {{ talk.author.name }}
      </li>
    </ul>
    <div class="columns">
      <div class="column is-one-third">
        <div v-if="talk.cover" class="talk-cover">
          <img :src="talk.cover.url" />
        </div>
      </div>
      <div class="column">
        <div v-if="talk.description" v-html="$md.render(talk.description)" />
        <div v-if="talk.mp3" class="talk-player">
          <audio controls>
            <source :src="talk.mp3.url" :type="talk.mp3.mime" />
            Your browser does not support the <code>audio</code> element.
          </audio>
        </div>
        <div v-if="talk.mp3" class="talk-downloads">
          <a
            class="button is-link is-small is-light is-outlined"
            :href="talk.mp3.url"
            target="_blank"
          >
            <span class="icon is-small is-right">
              <fa :icon="fas.faDownload" />
            </span>
            <span>MP3</span>
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
import { Talk } from '~/types';

@Component
export default class extends Vue {
  @Prop({ required: true, type: Object })
  talk!: Talk;

  get fas(): IconPack {
    return fas;
  }
}
</script>

<style lang="sass">
.talk-item
  margin-bottom: 2rem

div.talk-player audio
  margin-top: 1rem
  width: 100%

div.talk-cover
  width: 136px
  padding: 3px
  border: 1px solid hsl(0, 0%, 60%)
  img
    width: 130px

h4
  font-size: 1.3rem
  margin-bottom: 0.5rem
  color: $content-heading-color
  font-weight: $content-heading-weight
  line-height: $content-heading-line-height

div.talk-downloads
  margin-top: 1rem

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
