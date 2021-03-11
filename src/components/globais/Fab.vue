<template>
  <v-btn
    class="app-fab"
    :class="text ? 'app-fab-text' : ''"
    color="secondary"
    dark
    fixed
    bottom
    right
    fab
    @click="clicked"
  >
    <v-icon>{{ icon }}</v-icon>
    <span v-if="text">
      {{ text }}	
    </span>
  </v-btn>
</template>

<script>
export default {
  name: 'Fab',
  props: {
    icon: { default: 'add' },
    text: { default: null }
  },
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/mixin.scss';
@import 'src/scss/theme.scss';

.app-fab {
  color: $primary !important;
  z-index: 5;
  bottom: 70px;
  @include border-radius-mixin (45px);
  @include transition-mixin (all, .5s);
  &.app-fab-text { width: auto; padding: 0 16px; }
}
</style>