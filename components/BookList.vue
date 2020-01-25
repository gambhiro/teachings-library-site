<template>
  <div>
    <BookItem v-for="book in items" :key="book.title" :book="book" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import BookItem from '~/components/BookItem.vue';
import { Book } from '~/types';

@Component({
  components: {
    BookItem
  }
})
export default class extends Vue {
  @Prop({ required: true, type: Array })
  items!: Array<Book>;
}
</script>
