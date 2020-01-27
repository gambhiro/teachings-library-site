<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="imageUrl" :alt="imageDesc" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <span class="icon">
            <fa v-if="titleIcon === 'rss'" :icon="fas.faRss" size="2x" />

            <fa
              v-else-if="titleIcon === 'microphone-alt'"
              :icon="fas.faMicrophoneAlt"
              size="2x"
            />

            <fa v-else-if="titleIcon === 'book'" :icon="fas.faBook" size="2x" />

            <fa
              v-else-if="titleIcon === 'book-open'"
              :icon="fas.faBookOpen"
              size="2x"
            />

            <fa
              v-else-if="titleIcon === 'headphones-alt'"
              :icon="fas.faHeadphonesAlt"
              size="2x"
            />

            <fa
              v-else-if="titleIcon === 'play-circle'"
              :icon="fas.faPlayCircle"
              size="2x"
            />

            <fa
              v-else-if="titleIcon === 'quote-left'"
              :icon="fas.faQuoteLeft"
              size="2x"
            />

            <fa
              v-else-if="titleIcon === 'quote-right'"
              :icon="fas.faQuoteRight"
              size="2x"
            />

            <fa v-else :icon="fas.faBook" size="2x" />
          </span>
        </div>
        <div class="media-content">
          <p class="title">{{ title }}</p>
        </div>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { IconPack } from '@fortawesome/fontawesome-common-types';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component
export default class extends Vue {
  @Prop({ required: true, type: String })
  imageUrl!: string;

  @Prop({ required: true, type: String })
  imageDesc!: string;

  @Prop({ required: true, type: String })
  title!: string;

  @Prop({ required: false, type: String })
  titleIcon!: string;

  get fas(): IconPack {
    return fas;
  }
}
</script>
