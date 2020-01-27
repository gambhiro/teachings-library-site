<template>
  <nav class="breadcrumb has-dot-separator" aria-label="breadcrumbs">
    <ul>
      <CrumbItem :key="items.path" :to-path="items.path" :label="items.label" />
      <CrumbItem
        v-for="i in items.sub"
        :key="i.path"
        :to-path="i.path"
        :label="i.label"
      />
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import CrumbItem from '~/components/CrumbItem.vue';
import { MenuLink } from '~/types';

@Component({
  components: {
    CrumbItem
  }
})
export default class extends Vue {
  @Prop({ required: true, type: Object })
  items!: MenuLink;
}
</script>
