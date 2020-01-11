<template>
  <div>
    <PageHeader :title="title" />
    <p>
      This <em>Forest Sangha site</em> functions as a portal page for the Branch
      Monasteries and Associated Monasteries of disciples of Venerable Ajahn
      Chah, particularly in the West.
    </p>

    <p>
      <strong>Branch Monasteries:</strong>
      <nuxt-link to="/community/monasteries"
        >these are monastic residences</nuxt-link
      >
      fully affiliated with Wat Nong Pah Pong, Ajahn Chah's mother monastery in
      NE Thailand. In most cases they offer training to those wishing to 'go
      forth'.
    </p>

    <p>
      <strong>Associated Monasteries:</strong>
      <nuxt-link to="/community/monasteries">these communities</nuxt-link>
      may be newly established and in the process of becoming fully affiliated
      with Wat Nong Pah Pong.
    </p>
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
      title: 'About'
    }
  }
}
</script>
