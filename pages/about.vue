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

  asyncData(context) {
    return {
      title: 'About',
      text: 'Nam euismod tellus id erat.'
    }
  }
}
</script>
