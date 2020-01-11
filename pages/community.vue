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
        { toPath: '/community', label: 'community' },
        { toPath: '/community/news', label: 'news' },
        { toPath: '/community/monasteries', label: 'monasteries' },
        { toPath: '/community/calendars', label: 'calendars' }
      ]
    }
  }
}
</script>
