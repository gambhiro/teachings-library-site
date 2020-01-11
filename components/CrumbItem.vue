<template>
  <li :class="{ 'is-active': isActive }">
    <nuxt-link :to="toPath" :aria-current="ariaCurrent">{{ label }}</nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    toPath: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },

  computed: {
    isActive() {
      if (this.currentPath === this.toPath) {
        return 'is-active'
      } else {
        return ''
      }
    },

    ariaCurrent() {
      if (this.currentPath === this.toPath) {
        return 'page'
      } else {
        return ''
      }
    },

    currentPath() {
      return this.$route.path
    }
  }
}
</script>
