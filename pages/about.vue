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
        { toPath: '/about', label: 'about' },
        { toPath: '/about/history', label: 'history' },
        { toPath: '/about/this-website', label: 'this website' },
        { toPath: '/about/disclaimer', label: 'disclaimer' }
      ]
    }
  }
}
</script>
