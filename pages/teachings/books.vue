<template>
  <div>
    <PageHeader title="Books" />
    <ul>
      <li v-for="book in books">
        <p>
          <strong>{{ book.title }}</strong>
        </p>
        <div v-html="$md.render(book.description)"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  layout: 'page',

  components: {
    PageHeader
  },

  async asyncData({ $axios }) {
    const { data } = await $axios.get('/books')
    return { books: data }
  }
}
</script>
