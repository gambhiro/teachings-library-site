<template>
  <nav class="breadcrumb has-dot-separator" aria-label="breadcrumbs">
    <ul>
      <CrumbItem
        v-for="i in items"
        :key="i.toPath"
        :to-path="i.toPath"
        :label="i.label"
      />
    </ul>
  </nav>
</template>

<script>
import CrumbItem from '~/components/CrumbItem.vue';

export default {
  components: {
    CrumbItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
