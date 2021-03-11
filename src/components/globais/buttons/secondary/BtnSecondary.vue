<template>
  <v-btn
    class="accent text-capitalize btn py-4 px-8 elevation-0"
    :class="cssClass"
    height="auto"
    :block="block"
    :disabled="disabled"
    @click="clicked"
  >
    <v-icon
      v-if="icon"
      class="mr-1"
    >
      {{ icon }}
    </v-icon>
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: 'BtnSecondary',
  props: {
    block: { default: true },
    disabled: { default: false },
    text: { default: 'Confirmar' },
    icon: { default: '' },
    cssClass: { default: 'py-3' }
  },
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped>
.btn {
  color: #4F4F4F !important;
  border-radius: 45px;
}
</style>