<template>
  <nuxt-link v-if="menu.sub.length === 0" :to="menu.path" class="navbar-item">
    {{ menu.label }}
  </nuxt-link>
  <div v-else class="navbar-item has-dropdown is-hoverable">
    <nuxt-link :to="menu.path" class="navbar-link">
      {{ menu.label }}
    </nuxt-link>

    <div v-if="menu.sub.length > 0" class="navbar-dropdown">
      <nuxt-link
        v-for="i in menu.sub"
        :key="i.path"
        :to="i.path"
        class="navbar-item"
      >
        {{ i.label }}
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { MenuLink } from '@/types';

@Component
export default class extends Vue {
  @Prop({ required: true, type: Object })
  menu!: MenuLink;
}
</script>
