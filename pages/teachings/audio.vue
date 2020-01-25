<template>
  <div>
    <PageHeader title="Audio" />
    <ul v-if="talks.length > 0">
      <li v-for="talk in talks" :key="talk.title">
        <h4>{{ talk.title }}</h4>
        <div v-html="$md.render(talk.description)" />
      </li>
    </ul>
    <div v-else>
      <p>No talks were found.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import PageHeader from '~/components/PageHeader.vue'
// import { Talk } from '~/types'

@Component({
  components: {
    PageHeader
  }
})
export default class extends Vue {
  layout(): string {
    return 'page';
  }

  asyncData(context): Promise<Record<string, any>> {
    return context.app.$api
      .get('/talks')
      .then((res) => {
        return { talks: res.data }
      })
      .catch((e) => {
        // context.error({ statusCode: 404, message: 'Books not found' })

        // Silently ignore the network error
        console.error('Error: ' + e)
        return { talks: [] }
      })
  }

  data() {
    return { talks: [] }
  }
}
</script>
