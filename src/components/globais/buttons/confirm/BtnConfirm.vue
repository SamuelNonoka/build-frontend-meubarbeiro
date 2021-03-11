<template>
  <v-btn
    class="btn-confirm py-3 text-capitalize font-weight-bold"
    color="secondary"
    height="auto"
    :block="block"
    :disabled="disabled"
    :class="cssClass"
    @click="clicked"
  >
    <template v-if="loading">
      <v-progress-circular
        indeterminate
        width="2"
        color="primaryDark"
        small
      ></v-progress-circular>
    </template>
    <template v-else>
      <v-icon
        v-if="icon"
        class="mr-1"
      >
        {{ icon }}
      </v-icon>
      {{ text }}
    </template>
  </v-btn>
</template>

<script>
export default {
  name: 'BtnConfirm',
  props: {
    block: { default: true },
    disabled: { default: false },
    text: { default: 'Confirmar' },
    icon: { default: '' },
    cssClass: { default: '' },
    loading: { default: false }
  },
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/theme.scss';

.btn-confirm { color: $primaryDark !important; }
</style>