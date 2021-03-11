<template>
  <v-btn
    fab dark small
    :color="color"
    @click="clicked"
  >
    <v-icon dark>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'BtnIcon',
  props: {
    icon: {
      required: true
    },
    color: {
      default: 'primary'
    }
  },
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>