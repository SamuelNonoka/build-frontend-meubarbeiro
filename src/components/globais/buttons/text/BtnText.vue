<template>
  <v-btn
    class="font-weight-medium text-none py-3"
    height="auto"
    :block="block"
    :disabled="disabled"
    :dark="dark"
    text
    @click="clicked"
  >
    <v-icon v-if="icon">
      {{ icon }}
    </v-icon>
    {{ text }}
    <v-icon v-if="appendIcon">
      {{ appendIcon }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'BtnText',
  props: {
    block: {
      default: true
    },
    dark: { default: false },
    disabled: {
      default: false
    },
    text: {
      required: true
    },
    icon: {
      default: null
    },
    appendIcon: {
      default: ''
    }
  },
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>