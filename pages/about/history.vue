<template>
  <div>
    <PageHeader :title="title" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  layout: 'page',

  components: {
    PageHeader
  },

  asyncData(_context) {
    return {
      title: 'History',
      text: 'Nam euismod tellus id erat.'
    }
  }
}
</script>
