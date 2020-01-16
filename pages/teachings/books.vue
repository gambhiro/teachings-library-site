<template>
  <div>
    <PageHeader title="Books" />
    <ul v-if="books.length > 0">
      <li v-for="book in books">
        <p>
          <strong>{{ book.title }}</strong>
        </p>
        <div v-html="$md.render(book.description)"></div>
      </li>
    </ul>
    <div v-else>
      <p>No books were found.</p>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  layout: 'page',

  components: {
    PageHeader
  },

  data() {
    return { books: [] }
  },

  asyncData(context) {
    return context.app.$api
      .get('/books')
      .then((res) => {
        return { books: res.data }
      })
      .catch((e) => {
        // context.error({ statusCode: 404, message: 'Books not found' })

        // Silently ignore the network error
        console.error('Error: ' + e)
        return { books: [] }
      })
  }
}
</script>
