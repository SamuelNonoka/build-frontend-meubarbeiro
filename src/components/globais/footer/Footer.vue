<template>
  <v-bottom-navigation
    v-model="bottomNavModel"
    padless
    :inset="false"
    fixed
    grow
    shift
    class="primary"
    dark
  >
    <v-btn
      v-for="(item, indice) in items"
      :key="indice"
      :value="item.value"
      height="100%"
      @click="goTo(item.routeName)"
    >
      <span>{{ item.title }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import NavigationMixin from '@/mixins/NavigationMixin'

export default {
  name: 'Footer',
  mixins: [ NavigationMixin ],
  props: {
    items: { default: Array },
    bottomNav: { default: '' }
  },
  computed: {
    bottomNavModel: {
      set () {},
      get () {
        return this.bottomNav
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/theme.scss';

.footer { background-color: $muted; }
.v-btn--active { color: $secondary !important;
  &:before { background-color: transparent !important; }
}
</style>