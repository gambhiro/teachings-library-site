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
        { toPath: '/ajahn-chah', label: 'ajahn chah' },
        { toPath: '/ajahn-chah/dedication', label: 'dedication' },
        { toPath: '/ajahn-chah/biography', label: 'biography' }
      ]
    }
  }
}
</script>
