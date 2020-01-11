<template>
  <div>
    <BreadCrumbs :items="items" />
    <nuxt-child />
  </div>
</template>

<script>
import BreadCrumbs from '~/components/BreadCrumbs.vue'

export default {
  layout: 'page',

  components: {
    BreadCrumbs
  },

  asyncData() {
    return {
      items: [
        { toPath: '/teachings', label: 'teachings' },
        { toPath: '/teachings/audio', label: 'audio' },
        { toPath: '/teachings/books', label: 'books' }
      ]
    }
  }
}
</script>
