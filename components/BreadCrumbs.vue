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

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import CrumbItem from '~/components/CrumbItem.vue';
import { Link } from '~/types';

@Component({
  components: {
    CrumbItem
  }
})
export default class extends Vue {
  @Prop({ required: true, type: Array })
  items!: Array<Link>;
}
</script>
